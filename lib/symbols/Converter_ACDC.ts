// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 5V, 1A, 5W, Isolated, AC-DC
 *
 * KiCad symbol: `Converter_ACDC:BAC05S05DC`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Murata*BAC05S*DC*THT*.
 * @see https://www.murata.com/products/productdata/8809982558238/KAC-BAC05.pdf
 * Keywords: Miniature Module-type Power Supply muRataPs.
 * Default footprint: Converter_ACDC:Converter_ACDC_Murata_BAC05SxxDC_THT.
 */
export class BAC05S05DC extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "NC": "3",
  "-Vo": "4",
  "+Vo": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", NC: "no_connect", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:BAC05S05DC";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 3W 5V
 *
 * KiCad symbol: `Converter_ACDC:HLK-PM01`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?PM*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%973W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%913W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V2.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-PMxx.
 */
export class HLK_PM01 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-PM01";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 10W 3.3V
 *
 * KiCad symbol: `Converter_ACDC:HLK-10M03`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?10M*.
 * @see http://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9710W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9110W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-10Mxx.
 */
export class HLK_10M03 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-10M03";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 10W 5V
 *
 * KiCad symbol: `Converter_ACDC:HLK-10M05`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?10M*.
 * @see http://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9710W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9110W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-10Mxx.
 */
export class HLK_10M05 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-10M05";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 10W 9V
 *
 * KiCad symbol: `Converter_ACDC:HLK-10M09`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?10M*.
 * @see http://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9710W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9110W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-10Mxx.
 */
export class HLK_10M09 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-10M09";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 10W 12V
 *
 * KiCad symbol: `Converter_ACDC:HLK-10M12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?10M*.
 * @see http://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9710W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9110W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-10Mxx.
 */
export class HLK_10M12 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-10M12";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 10W 15V
 *
 * KiCad symbol: `Converter_ACDC:HLK-10M15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?10M*.
 * @see http://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9710W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9110W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-10Mxx.
 */
export class HLK_10M15 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-10M15";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 10W 24V
 *
 * KiCad symbol: `Converter_ACDC:HLK-10M24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?10M*.
 * @see http://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9710W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9110W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-10Mxx.
 */
export class HLK_10M24 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-10M24";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 12W 5V
 *
 * KiCad symbol: `Converter_ACDC:HLK-12M05A`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?12M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9712W%E7%B3%BB%E5%88%97/1/12W%E7%B3%BB%E5%88%97%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-12MxxA.
 */
export class HLK_12M05A extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-12M05A";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 12W 3.3V
 *
 * KiCad symbol: `Converter_ACDC:HLK-12M03A`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?12M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9712W%E7%B3%BB%E5%88%97/1/12W%E7%B3%BB%E5%88%97%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-12MxxA.
 */
export class HLK_12M03A extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-12M03A";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 12W 9V
 *
 * KiCad symbol: `Converter_ACDC:HLK-12M09A`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?12M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9712W%E7%B3%BB%E5%88%97/1/12W%E7%B3%BB%E5%88%97%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-12MxxA.
 */
export class HLK_12M09A extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-12M09A";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 12W 12V
 *
 * KiCad symbol: `Converter_ACDC:HLK-12M12A`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?12M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9712W%E7%B3%BB%E5%88%97/1/12W%E7%B3%BB%E5%88%97%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-12MxxA.
 */
export class HLK_12M12A extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-12M12A";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 12W 15V
 *
 * KiCad symbol: `Converter_ACDC:HLK-12M15A`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?12M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9712W%E7%B3%BB%E5%88%97/1/12W%E7%B3%BB%E5%88%97%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-12MxxA.
 */
export class HLK_12M15A extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-12M15A";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 12W 24V
 *
 * KiCad symbol: `Converter_ACDC:HLK-12M24A`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?12M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9712W%E7%B3%BB%E5%88%97/1/12W%E7%B3%BB%E5%88%97%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-12MxxA.
 */
export class HLK_12M24A extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-12M24A";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 20W 5V
 *
 * KiCad symbol: `Converter_ACDC:HLK-20M05`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?20M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9720W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9120W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-20Mxx.
 */
export class HLK_20M05 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-20M05";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 20W 9V
 *
 * KiCad symbol: `Converter_ACDC:HLK-20M09`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?20M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9720W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9120W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-20Mxx.
 */
export class HLK_20M09 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-20M09";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 20W 12V
 *
 * KiCad symbol: `Converter_ACDC:HLK-20M12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?20M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9720W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9120W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-20Mxx.
 */
export class HLK_20M12 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-20M12";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 20W 15V
 *
 * KiCad symbol: `Converter_ACDC:HLK-20M15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?20M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9720W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9120W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-20Mxx.
 */
export class HLK_20M15 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-20M15";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 20W 24V
 *
 * KiCad symbol: `Converter_ACDC:HLK-20M24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?20M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9720W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9120W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-20Mxx.
 */
export class HLK_20M24 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-20M24";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 2W 3.3V
 *
 * KiCad symbol: `Converter_ACDC:HLK-2M03`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?2M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%972W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%912W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%AF%B4%E6%98%8E%E4%B9%A6V2.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-2Mxx.
 */
export class HLK_2M03 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-2M03";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 2W 5V
 *
 * KiCad symbol: `Converter_ACDC:HLK-2M05`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?2M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%972W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%912W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%AF%B4%E6%98%8E%E4%B9%A6V2.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-2Mxx.
 */
export class HLK_2M05 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-2M05";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 2W 9V
 *
 * KiCad symbol: `Converter_ACDC:HLK-2M09`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?2M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%972W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%912W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%AF%B4%E6%98%8E%E4%B9%A6V2.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-2Mxx.
 */
export class HLK_2M09 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-2M09";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 2W 12V
 *
 * KiCad symbol: `Converter_ACDC:HLK-2M12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?2M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%972W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%912W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%AF%B4%E6%98%8E%E4%B9%A6V2.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-2Mxx.
 */
export class HLK_2M12 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-2M12";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 2W 15V
 *
 * KiCad symbol: `Converter_ACDC:HLK-2M15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?2M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%972W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%912W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%AF%B4%E6%98%8E%E4%B9%A6V2.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-2Mxx.
 */
export class HLK_2M15 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-2M15";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 2W 24V
 *
 * KiCad symbol: `Converter_ACDC:HLK-2M24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?2M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%972W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%912W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%AF%B4%E6%98%8E%E4%B9%A6V2.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-2Mxx.
 */
export class HLK_2M24 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-2M24";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 30W 5V
 *
 * KiCad symbol: `Converter_ACDC:HLK-30M05`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?30M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9730W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9130W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-30Mxx.
 */
export class HLK_30M05 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-30M05";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 30W 5V
 *
 * KiCad symbol: `Converter_ACDC:HLK-30M05C`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?30M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9730W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9130WC%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.2.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-30Mxx.
 */
export class HLK_30M05C extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-30M05C";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 30W 9V
 *
 * KiCad symbol: `Converter_ACDC:HLK-30M09`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?30M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9730W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9130W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-30Mxx.
 */
export class HLK_30M09 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-30M09";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 30W 9V
 *
 * KiCad symbol: `Converter_ACDC:HLK-30M09C`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?30M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9730W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9130WC%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.2.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-30Mxx.
 */
export class HLK_30M09C extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-30M09C";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 30W 12V
 *
 * KiCad symbol: `Converter_ACDC:HLK-30M12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?30M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9730W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9130W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-30Mxx.
 */
export class HLK_30M12 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-30M12";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 30W 12V
 *
 * KiCad symbol: `Converter_ACDC:HLK-30M12C`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?30M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9730W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9130WC%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.2.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-30Mxx.
 */
export class HLK_30M12C extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-30M12C";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 30W 15V
 *
 * KiCad symbol: `Converter_ACDC:HLK-30M15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?30M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9730W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9130W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-30Mxx.
 */
export class HLK_30M15 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-30M15";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 30W 15V
 *
 * KiCad symbol: `Converter_ACDC:HLK-30M15C`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?30M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9730W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9130WC%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.2.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-30Mxx.
 */
export class HLK_30M15C extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-30M15C";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 30W 24V
 *
 * KiCad symbol: `Converter_ACDC:HLK-30M24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?30M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9730W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9130W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.6.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-30Mxx.
 */
export class HLK_30M24 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-30M24";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 30W 24V
 *
 * KiCad symbol: `Converter_ACDC:HLK-30M24C`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?30M*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%9730W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%9130WC%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V1.2.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-30Mxx.
 */
export class HLK_30M24C extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-30M24C";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 5W, 3.3V 1.5A
 *
 * KiCad symbol: `Converter_ACDC:HLK-5M03`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?5M*.
 * @see http://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%975W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%915W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V2.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-5Mxx.
 */
export class HLK_5M03 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-5M03";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 5W, 5V 1A
 *
 * KiCad symbol: `Converter_ACDC:HLK-5M05`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?5M*.
 * @see http://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%975W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%915W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V2.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-5Mxx.
 */
export class HLK_5M05 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-5M05";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 5W, 9V 0.560A
 *
 * KiCad symbol: `Converter_ACDC:HLK-5M09`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?5M*.
 * @see http://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%975W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%915W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V2.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-5Mxx.
 */
export class HLK_5M09 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-5M09";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 5W, 12V 0.420A
 *
 * KiCad symbol: `Converter_ACDC:HLK-5M12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?5M*.
 * @see http://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%975W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%915W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V2.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-5Mxx.
 */
export class HLK_5M12 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-5M12";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 5W, 15V 0.333A
 *
 * KiCad symbol: `Converter_ACDC:HLK-5M15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?5M*.
 * @see http://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%975W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%915W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V2.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-5Mxx.
 */
export class HLK_5M15 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-5M15";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 5W, 24V 0.208A
 *
 * KiCad symbol: `Converter_ACDC:HLK-5M24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?5M*.
 * @see http://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%975W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%915W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V2.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-5Mxx.
 */
export class HLK_5M24 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-5M24";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 3W 3V3
 *
 * KiCad symbol: `Converter_ACDC:HLK-PM03`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?PM*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%973W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%913W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V2.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-PMxx.
 */
export class HLK_PM03 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-PM03";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 3W 9V
 *
 * KiCad symbol: `Converter_ACDC:HLK-PM09`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?PM*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%973W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%913W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V2.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-PMxx.
 */
export class HLK_PM09 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-PM09";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 3W 12V
 *
 * KiCad symbol: `Converter_ACDC:HLK-PM12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?PM*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%973W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%913W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V2.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-PMxx.
 */
export class HLK_PM12 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-PM12";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 3W 15V
 *
 * KiCad symbol: `Converter_ACDC:HLK-PM15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?PM*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%973W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%913W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V2.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-PMxx.
 */
export class HLK_PM15 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-PM15";
  override referencePrefix = "U";
}

/**
 * Compact AC/DC board mount power module 3W 24V
 *
 * KiCad symbol: `Converter_ACDC:HLK-PM24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hi?Link*HLK?PM*.
 * @see https://h.hlktech.com/download/ACDC%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%973W%E7%B3%BB%E5%88%97/1/%E6%B5%B7%E5%87%8C%E7%A7%913W%E7%B3%BB%E5%88%97%E7%94%B5%E6%BA%90%E6%A8%A1%E5%9D%97%E8%A7%84%E6%A0%BC%E4%B9%A6V2.8.pdf
 * Keywords: AC/DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hi-Link_HLK-PMxx.
 */
export class HLK_PM24 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HLK-PM24";
  override referencePrefix = "U";
}

/**
 * 3.3V, 3W, AC-DC module power supply, Hahn
 *
 * KiCad symbol: `Converter_ACDC:HS-40003`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hahn*HS*400xx*.
 * @see http://www.tme.eu/de/Document/d4b3c52125889c3435af182c9515c76b/HS40003.pdf
 * Keywords: 3.3V 3W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hahn_HS-400xx_THT.
 */
export class HS_40003 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "5",
  "+Vout": "7",
  "-Vout": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HS-40003";
  override referencePrefix = "U";
}

/**
 * 5V, 3W, AC-DC module power supply, Hahn
 *
 * KiCad symbol: `Converter_ACDC:HS-40005`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hahn*HS*400xx*.
 * @see http://www.tme.eu/de/Document/996b08915f81126361ce1f9c12d2f8b9/HS40005.pdf
 * Keywords: 5V 3W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hahn_HS-400xx_THT.
 */
export class HS_40005 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "5",
  "+Vout": "7",
  "-Vout": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HS-40005";
  override referencePrefix = "U";
}

/**
 * 9V, 3W, AC-DC module power supply, Hahn
 *
 * KiCad symbol: `Converter_ACDC:HS-40009`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hahn*HS*400xx*.
 * @see http://www.tme.eu/de/Document/cd3ff0c74e0c3bb183174aa10baf8730/HS40009.pdf
 * Keywords: 9V 3W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hahn_HS-400xx_THT.
 */
export class HS_40009 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "5",
  "+Vout": "7",
  "-Vout": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HS-40009";
  override referencePrefix = "U";
}

/**
 * 12V, 3W, AC-DC module power supply, Hahn
 *
 * KiCad symbol: `Converter_ACDC:HS-40012`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hahn*HS*400xx*.
 * @see http://www.tme.eu/de/Document/221b247820f4fbb72e0cbc1ee10acb85/HS40012.pdf
 * Keywords: 12V 3W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hahn_HS-400xx_THT.
 */
export class HS_40012 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "5",
  "+Vout": "7",
  "-Vout": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HS-40012";
  override referencePrefix = "U";
}

/**
 * 15V, 3W, AC-DC module power supply, Hahn
 *
 * KiCad symbol: `Converter_ACDC:HS-40015`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hahn*HS*400xx*.
 * @see https://www.schukat.com/schukat/pdf.nsf/index/956F3869A8D071A1C1257B810041B129/$file/HS-40015-Serie%20Schemazeichnung-A3%20(1).pdf
 * Keywords: 15V 3W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hahn_HS-400xx_THT.
 */
export class HS_40015 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "5",
  "+Vout": "7",
  "-Vout": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HS-40015";
  override referencePrefix = "U";
}

/**
 * 18V, 3W, AC-DC module power supply, Hahn
 *
 * KiCad symbol: `Converter_ACDC:HS-40018`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hahn*HS*400xx*.
 * @see https://www.schukat.com/schukat/pdf.nsf/index/6A4EEAC16DA84B74C1257B810041DC7B/$file/HS-40018-Serie%20Schemazeichnung-A3%20(1).pdf
 * Keywords: 18V 3W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hahn_HS-400xx_THT.
 */
export class HS_40018 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "5",
  "+Vout": "7",
  "-Vout": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HS-40018";
  override referencePrefix = "U";
}

/**
 * 24V, 3W, AC-DC module power supply, Hahn
 *
 * KiCad symbol: `Converter_ACDC:HS-40024`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Hahn*HS*400xx*.
 * @see https://www.schukat.com/schukat/pdf.nsf/index/17647BA7403E2D39C1257B810041F34E/$file/HS-40024-Serie%20Schemazeichnung-A3%20(1).pdf
 * Keywords: 24V 3W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Hahn_HS-400xx_THT.
 */
export class HS_40024 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "5",
  "+Vout": "7",
  "-Vout": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:HS-40024";
  override referencePrefix = "U";
}

/**
 * 3.3V, 600mA, 2W, Isolated, AC-DC, IRM02
 *
 * KiCad symbol: `Converter_ACDC:IRM-02-3.3`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*02*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-02/IRM-02-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-02-xx_THT.
 */
export class IRM_02_3_3 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-02-3.3";
  override referencePrefix = "U";
}

/**
 * 12V, 167mA, 2W, Isolated, AC-DC, IRM02
 *
 * KiCad symbol: `Converter_ACDC:IRM-02-12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*02*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-02/IRM-02-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-02-xx_THT.
 */
export class IRM_02_12 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-02-12";
  override referencePrefix = "U";
}

/**
 * 3.3V, 600mA, 2W, Isolated, AC-DC, IRM02-SMD
 *
 * KiCad symbol: `Converter_ACDC:IRM-02-3.3S`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*02*SMD*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-02/IRM-02-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-02-xx_SMD.
 */
export class IRM_02_3_3S extends Component.withPins({
  "AC/L": "1",
  "+Vo": "12",
  "-Vo": "13",
  "AC/N": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "+Vo": "power_out", "-Vo": "power_out", "AC/N": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-02-3.3S";
  override referencePrefix = "U";
}

/**
 * 12V, 167mA, 2W, Isolated, AC-DC, IRM02-SMD
 *
 * KiCad symbol: `Converter_ACDC:IRM-02-12S`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*02*SMD*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-02/IRM-02-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-02-xx_SMD.
 */
export class IRM_02_12S extends Component.withPins({
  "AC/L": "1",
  "+Vo": "12",
  "-Vo": "13",
  "AC/N": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "+Vo": "power_out", "-Vo": "power_out", "AC/N": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-02-12S";
  override referencePrefix = "U";
}

/**
 * 15V, 133mA, 2W, Isolated, AC-DC, IRM02
 *
 * KiCad symbol: `Converter_ACDC:IRM-02-15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*02*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-02/IRM-02-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-02-xx_THT.
 */
export class IRM_02_15 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-02-15";
  override referencePrefix = "U";
}

/**
 * 15V, 133mA, 2W, Isolated, AC-DC, IRM02-SMD
 *
 * KiCad symbol: `Converter_ACDC:IRM-02-15S`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*02*SMD*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-02/IRM-02-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-02-xx_SMD.
 */
export class IRM_02_15S extends Component.withPins({
  "AC/L": "1",
  "+Vo": "12",
  "-Vo": "13",
  "AC/N": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "+Vo": "power_out", "-Vo": "power_out", "AC/N": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-02-15S";
  override referencePrefix = "U";
}

/**
 * 24V, 83mA, 2W, Isolated, AC-DC, IRM02
 *
 * KiCad symbol: `Converter_ACDC:IRM-02-24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*02*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-02/IRM-02-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-02-xx_THT.
 */
export class IRM_02_24 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-02-24";
  override referencePrefix = "U";
}

/**
 * 24V, 83mA, 2W, Isolated, AC-DC, IRM02-SMD
 *
 * KiCad symbol: `Converter_ACDC:IRM-02-24S`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*02*SMD*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-02/IRM-02-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-02-xx_SMD.
 */
export class IRM_02_24S extends Component.withPins({
  "AC/L": "1",
  "+Vo": "12",
  "-Vo": "13",
  "AC/N": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "+Vo": "power_out", "-Vo": "power_out", "AC/N": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-02-24S";
  override referencePrefix = "U";
}

/**
 * 5V, 400mA, 2W, Isolated, AC-DC, IRM02
 *
 * KiCad symbol: `Converter_ACDC:IRM-02-5`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*02*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-02/IRM-02-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-02-xx_THT.
 */
export class IRM_02_5 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-02-5";
  override referencePrefix = "U";
}

/**
 * 5V, 400mA, 2W, Isolated, AC-DC, IRM02-SMD
 *
 * KiCad symbol: `Converter_ACDC:IRM-02-5S`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*02*SMD*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-02/IRM-02-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-02-xx_SMD.
 */
export class IRM_02_5S extends Component.withPins({
  "AC/L": "1",
  "+Vo": "12",
  "-Vo": "13",
  "AC/N": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "+Vo": "power_out", "-Vo": "power_out", "AC/N": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-02-5S";
  override referencePrefix = "U";
}

/**
 * 9V, 222mA, 2W, Isolated, AC-DC, IRM02
 *
 * KiCad symbol: `Converter_ACDC:IRM-02-9`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*02*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-02/IRM-02-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-02-xx_THT.
 */
export class IRM_02_9 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-02-9";
  override referencePrefix = "U";
}

/**
 * 9V, 222mA, 2W, Isolated, AC-DC, IRM02-SMD
 *
 * KiCad symbol: `Converter_ACDC:IRM-02-9S`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*02*SMD*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-02/IRM-02-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-02-xx_SMD.
 */
export class IRM_02_9S extends Component.withPins({
  "AC/L": "1",
  "+Vo": "12",
  "-Vo": "13",
  "AC/N": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "+Vo": "power_out", "-Vo": "power_out", "AC/N": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-02-9S";
  override referencePrefix = "U";
}

/**
 * 3.3V, 900mA, 3W, Isolated, AC-DC, IRM03
 *
 * KiCad symbol: `Converter_ACDC:IRM-03-3.3`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*03*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-03/IRM-03-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-03-xx_THT.
 */
export class IRM_03_3_3 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "3",
  "NC": "5",
  "-Vo": "14",
  "+Vo": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", NC: "no_connect", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-03-3.3";
  override referencePrefix = "U";
}

/**
 * 12V, 250mA, 3W, Isolated, AC-DC, IRM03
 *
 * KiCad symbol: `Converter_ACDC:IRM-03-12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*03*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-03/IRM-03-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-03-xx_THT.
 */
export class IRM_03_12 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "3",
  "NC": "5",
  "-Vo": "14",
  "+Vo": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", NC: "no_connect", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-03-12";
  override referencePrefix = "U";
}

/**
 * 3.3V, 900mA, 3W, Isolated, AC-DC, IRM03-SMD
 *
 * KiCad symbol: `Converter_ACDC:IRM-03-3.3S`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*03*SMD*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-03/IRM-03-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-03-xx_SMD.
 */
export class IRM_03_3_3S extends Component.withPins({
  "AC/L": "1",
  "AC/N": "3",
  "-Vo": "14",
  "+Vo": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-03-3.3S";
  override referencePrefix = "U";
}

/**
 * 12V, 250mA, 3W, Isolated, AC-DC, IRM03-SMD
 *
 * KiCad symbol: `Converter_ACDC:IRM-03-12S`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*03*SMD*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-03/IRM-03-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-03-xx_SMD.
 */
export class IRM_03_12S extends Component.withPins({
  "AC/L": "1",
  "AC/N": "3",
  "-Vo": "14",
  "+Vo": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-03-12S";
  override referencePrefix = "U";
}

/**
 * 15V, 200mA, 3W, Isolated, AC-DC, IRM03
 *
 * KiCad symbol: `Converter_ACDC:IRM-03-15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*03*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-03/IRM-03-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-03-xx_THT.
 */
export class IRM_03_15 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "3",
  "NC": "5",
  "-Vo": "14",
  "+Vo": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", NC: "no_connect", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-03-15";
  override referencePrefix = "U";
}

/**
 * 15V, 200mA, 3W, Isolated, AC-DC, IRM03-SMD
 *
 * KiCad symbol: `Converter_ACDC:IRM-03-15S`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*03*SMD*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-03/IRM-03-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-03-xx_SMD.
 */
export class IRM_03_15S extends Component.withPins({
  "AC/L": "1",
  "AC/N": "3",
  "-Vo": "14",
  "+Vo": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-03-15S";
  override referencePrefix = "U";
}

/**
 * 24V, 125mA, 3W, Isolated, AC-DC, IRM03
 *
 * KiCad symbol: `Converter_ACDC:IRM-03-24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*03*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-03/IRM-03-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-03-xx_THT.
 */
export class IRM_03_24 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "3",
  "NC": "5",
  "-Vo": "14",
  "+Vo": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", NC: "no_connect", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-03-24";
  override referencePrefix = "U";
}

/**
 * 24V, 125mA, 3W, Isolated, AC-DC, IRM03-SMD
 *
 * KiCad symbol: `Converter_ACDC:IRM-03-24S`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*03*SMD*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-03/IRM-03-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-03-xx_SMD.
 */
export class IRM_03_24S extends Component.withPins({
  "AC/L": "1",
  "AC/N": "3",
  "-Vo": "14",
  "+Vo": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-03-24S";
  override referencePrefix = "U";
}

/**
 * 5V, 600mA, 3W, Isolated, AC-DC, IRM03
 *
 * KiCad symbol: `Converter_ACDC:IRM-03-5`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*03*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-03/IRM-03-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-03-xx_THT.
 */
export class IRM_03_5 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "3",
  "NC": "5",
  "-Vo": "14",
  "+Vo": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", NC: "no_connect", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-03-5";
  override referencePrefix = "U";
}

/**
 * 5V, 600mA, 3W, Isolated, AC-DC, IRM03-SMD
 *
 * KiCad symbol: `Converter_ACDC:IRM-03-5S`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*03*SMD*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-03/IRM-03-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-03-xx_SMD.
 */
export class IRM_03_5S extends Component.withPins({
  "AC/L": "1",
  "AC/N": "3",
  "-Vo": "14",
  "+Vo": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-03-5S";
  override referencePrefix = "U";
}

/**
 * 9V, 333mA, 3W, Isolated, AC-DC, IRM03
 *
 * KiCad symbol: `Converter_ACDC:IRM-03-9`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*03*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-03/IRM-03-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-03-xx_THT.
 */
export class IRM_03_9 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "3",
  "NC": "5",
  "-Vo": "14",
  "+Vo": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", NC: "no_connect", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-03-9";
  override referencePrefix = "U";
}

/**
 * 9V, 333mA, 3W, Isolated, AC-DC, IRM03-SMD
 *
 * KiCad symbol: `Converter_ACDC:IRM-03-9S`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*03*SMD*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-03/IRM-03-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-03-xx_SMD.
 */
export class IRM_03_9S extends Component.withPins({
  "AC/L": "1",
  "AC/N": "3",
  "-Vo": "14",
  "+Vo": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-03-9S";
  override referencePrefix = "U";
}

/**
 * 3.3V, 1.25A, 4.125W, Isolated, AC-DC, 222A(IRM05)
 *
 * KiCad symbol: `Converter_ACDC:IRM-05-3.3`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*05*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-05/IRM-05-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-05-xx_THT.
 */
export class IRM_05_3_3 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-05-3.3";
  override referencePrefix = "U";
}

/**
 * 12V, 420mA, 5.04W, Isolated, AC-DC, 222A(IRM05)
 *
 * KiCad symbol: `Converter_ACDC:IRM-05-12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*05*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-05/IRM-05-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-05-xx_THT.
 */
export class IRM_05_12 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-05-12";
  override referencePrefix = "U";
}

/**
 * 15V, 330mA, 4.95W, Isolated, AC-DC, 222A(IRM05)
 *
 * KiCad symbol: `Converter_ACDC:IRM-05-15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*05*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-05/IRM-05-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-05-xx_THT.
 */
export class IRM_05_15 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-05-15";
  override referencePrefix = "U";
}

/**
 * 24V, 230mA, 5.52W, Isolated, AC-DC, 222A(IRM05)
 *
 * KiCad symbol: `Converter_ACDC:IRM-05-24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*05*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-05/IRM-05-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-05-xx_THT.
 */
export class IRM_05_24 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-05-24";
  override referencePrefix = "U";
}

/**
 * 5V, 1A, 5W, Isolated, AC-DC, 222A(IRM05)
 *
 * KiCad symbol: `Converter_ACDC:IRM-05-5`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*05*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-05/IRM-05-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-05-xx_THT.
 */
export class IRM_05_5 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-05-5";
  override referencePrefix = "U";
}

/**
 * 3.3V, 2.5A, 8.25W, Isolated, AC-DC, 222A(IRM10)
 *
 * KiCad symbol: `Converter_ACDC:IRM-10-3.3`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*10*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-10/IRM-10-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-10-xx_THT.
 */
export class IRM_10_3_3 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-10-3.3";
  override referencePrefix = "U";
}

/**
 * 12V, 850mA, 10.2W, Isolated, AC-DC, 222A(IRM10)
 *
 * KiCad symbol: `Converter_ACDC:IRM-10-12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*10*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-10/IRM-10-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-10-xx_THT.
 */
export class IRM_10_12 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-10-12";
  override referencePrefix = "U";
}

/**
 * 15V, 670mA, 10.05W, Isolated, AC-DC, 222A(IRM10)
 *
 * KiCad symbol: `Converter_ACDC:IRM-10-15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*10*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-10/IRM-10-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-10-xx_THT.
 */
export class IRM_10_15 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-10-15";
  override referencePrefix = "U";
}

/**
 * 24V, 420mA, 10.08W, Isolated, AC-DC, 222A(IRM10)
 *
 * KiCad symbol: `Converter_ACDC:IRM-10-24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*10*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-10/IRM-10-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-10-xx_THT.
 */
export class IRM_10_24 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-10-24";
  override referencePrefix = "U";
}

/**
 * 5V, 2A, 10W, Isolated, AC-DC, 222A(IRM10)
 *
 * KiCad symbol: `Converter_ACDC:IRM-10-5`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*10*THT*.
 * @see https://www.meanwell.com/Upload/PDF/IRM-10/IRM-10-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-10-xx_THT.
 */
export class IRM_10_5 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-10-5";
  override referencePrefix = "U";
}

/**
 * 3.3V, 4.5A, 14.85W, Isolated, AC-DC, 219A(IRM20)
 *
 * KiCad symbol: `Converter_ACDC:IRM-20-3.3`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*20*THT*.
 * @see http://www.meanwell.com/Upload/PDF/IRM-20/IRM-20-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-20-xx_THT.
 */
export class IRM_20_3_3 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-20-3.3";
  override referencePrefix = "U";
}

/**
 * 12V, 1.8A, 21.6W, Isolated, AC-DC, 219A(IRM20)
 *
 * KiCad symbol: `Converter_ACDC:IRM-20-12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*20*THT*.
 * @see http://www.meanwell.com/Upload/PDF/IRM-20/IRM-20-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-20-xx_THT.
 */
export class IRM_20_12 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-20-12";
  override referencePrefix = "U";
}

/**
 * 15V, 1.4A, 21W, Isolated, AC-DC, 219A(IRM20)
 *
 * KiCad symbol: `Converter_ACDC:IRM-20-15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*20*THT*.
 * @see http://www.meanwell.com/Upload/PDF/IRM-20/IRM-20-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-20-xx_THT.
 */
export class IRM_20_15 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-20-15";
  override referencePrefix = "U";
}

/**
 * 24V, 900mA, 21.6W, Isolated, AC-DC, 219A(IRM20)
 *
 * KiCad symbol: `Converter_ACDC:IRM-20-24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*20*THT*.
 * @see http://www.meanwell.com/Upload/PDF/IRM-20/IRM-20-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-20-xx_THT.
 */
export class IRM_20_24 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-20-24";
  override referencePrefix = "U";
}

/**
 * 5V, 4A, 20W, Isolated, AC-DC, 219A(IRM20)
 *
 * KiCad symbol: `Converter_ACDC:IRM-20-5`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*20*THT*.
 * @see http://www.meanwell.com/Upload/PDF/IRM-20/IRM-20-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-20-xx_THT.
 */
export class IRM_20_5 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-20-5";
  override referencePrefix = "U";
}

/**
 * 5V, 10A, 50W, Isolated, AC-DC, IRM60
 *
 * KiCad symbol: `Converter_ACDC:IRM-60-5`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*60*THT*.
 * @see http://www.meanwellusa.com/productPdf.aspx?i=687
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-60-xx_THT.
 */
export class IRM_60_5 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-60-5";
  override referencePrefix = "U";
}

/**
 * 12V, 5A, 60W, Isolated, AC-DC, IRM60
 *
 * KiCad symbol: `Converter_ACDC:IRM-60-12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*60*THT*.
 * @see http://www.meanwellusa.com/productPdf.aspx?i=687
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-60-xx_THT.
 */
export class IRM_60_12 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-60-12";
  override referencePrefix = "U";
}

/**
 * 15V, 4A, 60W, Isolated, AC-DC, IRM60
 *
 * KiCad symbol: `Converter_ACDC:IRM-60-15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*60*THT*.
 * @see http://www.meanwellusa.com/productPdf.aspx?i=687
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-60-xx_THT.
 */
export class IRM_60_15 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-60-15";
  override referencePrefix = "U";
}

/**
 * 24V, 2.5A, 60W, Isolated, AC-DC, IRM60
 *
 * KiCad symbol: `Converter_ACDC:IRM-60-24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*60*THT*.
 * @see http://www.meanwellusa.com/productPdf.aspx?i=687
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-60-xx_THT.
 */
export class IRM_60_24 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-60-24";
  override referencePrefix = "U";
}

/**
 * 48V, 1.25A, 50W, Isolated, AC-DC, IRM60
 *
 * KiCad symbol: `Converter_ACDC:IRM-60-48`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*IRM*60*THT*.
 * @see http://www.meanwellusa.com/productPdf.aspx?i=687
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_IRM-60-xx_THT.
 */
export class IRM_60_48 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:IRM-60-48";
  override referencePrefix = "U";
}

/**
 * Meanwell AC/DC converter, 80-264VAC, output 3.3V, 10 watts
 *
 * KiCad symbol: `Converter_ACDC:MFM-10-3.3`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*MFM*10*THT*.
 * @see https://www.meanwell-web.com/content/files/pdfs/productPdfs/MW/MFM-10/MFM-10-spec.pdf
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_MFM-10-xx_THT.
 */
export class MFM_10_3_3 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:MFM-10-3.3";
  override referencePrefix = "U";
}

/**
 * Meanwell AC/DC converter, 80-264VAC, output 12V, 10 watts
 *
 * KiCad symbol: `Converter_ACDC:MFM-10-12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*MFM*10*THT*.
 * @see https://www.meanwell-web.com/content/files/pdfs/productPdfs/MW/MFM-10/MFM-10-spec.pdf
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_MFM-10-xx_THT.
 */
export class MFM_10_12 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:MFM-10-12";
  override referencePrefix = "U";
}

/**
 * Meanwell AC/DC converter, 80-264VAC, output 15V, 10 watts
 *
 * KiCad symbol: `Converter_ACDC:MFM-10-15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*MFM*10*THT*.
 * @see https://www.meanwell-web.com/content/files/pdfs/productPdfs/MW/MFM-10/MFM-10-spec.pdf
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_MFM-10-xx_THT.
 */
export class MFM_10_15 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:MFM-10-15";
  override referencePrefix = "U";
}

/**
 * Meanwell AC/DC converter, 80-264VAC, output 24V, 10 watts
 *
 * KiCad symbol: `Converter_ACDC:MFM-10-24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*MFM*10*THT*.
 * @see https://www.meanwell-web.com/content/files/pdfs/productPdfs/MW/MFM-10/MFM-10-spec.pdf
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_MFM-10-xx_THT.
 */
export class MFM_10_24 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:MFM-10-24";
  override referencePrefix = "U";
}

/**
 * Meanwell AC/DC converter, 80-264VAC, output 5V, 10 watts
 *
 * KiCad symbol: `Converter_ACDC:MFM-10-5`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*MFM*10*THT*.
 * @see https://www.meanwell-web.com/content/files/pdfs/productPdfs/MW/MFM-10/MFM-10-spec.pdf
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_MFM-10-xx_THT.
 */
export class MFM_10_5 extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:MFM-10-5";
  override referencePrefix = "U";
}

/**
 * Meanwell AC/DC converter, 80-264VAC, output 3.3V, 15 watts
 *
 * KiCad symbol: `Converter_ACDC:MFM-15-3.3`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*MFM*15*THT*.
 * @see https://www.meanwell.com/Upload/PDF/MFM-15/MFM-15-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_MFM-15-xx_THT.
 */
export class MFM_15_3_3 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:MFM-15-3.3";
  override referencePrefix = "U";
}

/**
 * Meanwell AC/DC converter, 80-264VAC, output 12V, 15 watts
 *
 * KiCad symbol: `Converter_ACDC:MFM-15-12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*MFM*15*THT*.
 * @see https://www.meanwell.com/Upload/PDF/MFM-15/MFM-15-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_MFM-15-xx_THT.
 */
export class MFM_15_12 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:MFM-15-12";
  override referencePrefix = "U";
}

/**
 * Meanwell AC/DC converter, 80-264VAC, output 15V, 15 watts
 *
 * KiCad symbol: `Converter_ACDC:MFM-15-15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*MFM*15*THT*.
 * @see https://www.meanwell.com/Upload/PDF/MFM-15/MFM-15-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_MFM-15-xx_THT.
 */
export class MFM_15_15 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:MFM-15-15";
  override referencePrefix = "U";
}

/**
 * Meanwell AC/DC converter, 80-264VAC, output 24V, 15 watts
 *
 * KiCad symbol: `Converter_ACDC:MFM-15-24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*MFM*15*THT*.
 * @see https://www.meanwell.com/Upload/PDF/MFM-15/MFM-15-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_MFM-15-xx_THT.
 */
export class MFM_15_24 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:MFM-15-24";
  override referencePrefix = "U";
}

/**
 * Meanwell AC/DC converter, 80-264VAC, output 5V, 15 watts
 *
 * KiCad symbol: `Converter_ACDC:MFM-15-5`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*MeanWell*MFM*15*THT*.
 * @see https://www.meanwell.com/Upload/PDF/MFM-15/MFM-15-SPEC.PDF
 * Keywords: Miniature Module-type Power Supply MeanWell.
 * Default footprint: Converter_ACDC:Converter_ACDC_MeanWell_MFM-15-xx_THT.
 */
export class MFM_15_5 extends Component.withPins({
  "AC/L": "1",
  "AC/N": "2",
  "-Vo": "3",
  "+Vo": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/L": "power_in", "AC/N": "power_in", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:MFM-15-5";
  override referencePrefix = "U";
}

/**
 * 3.3V 0.6A 1.98W miniature AC-DC module-type power supply
 *
 * KiCad symbol: `Converter_ACDC:PBO-3-S3.3`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*CUI*PBO*3*Sxx*THT*.
 * @see https://www.cui.com/product/resource/pbo-3.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_CUI_PBO-3-Sxx_THT_Vertical.
 */
export class PBO_3_S3_3 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "3",
  "+V(CAP)": "5",
  "-V(CAP)": "7",
  "-Vo": "10",
  "+Vo": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "+V(CAP)": "passive", "-V(CAP)": "passive", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:PBO-3-S3.3";
  override referencePrefix = "U";
}

/**
 * 12V 0.25A 3W miniature AC-DC module-type power supply
 *
 * KiCad symbol: `Converter_ACDC:PBO-3-S12`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*CUI*PBO*3*Sxx*THT*.
 * @see https://www.cui.com/product/resource/pbo-3.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_CUI_PBO-3-Sxx_THT_Vertical.
 */
export class PBO_3_S12 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "3",
  "+V(CAP)": "5",
  "-V(CAP)": "7",
  "-Vo": "10",
  "+Vo": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "+V(CAP)": "passive", "-V(CAP)": "passive", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:PBO-3-S12";
  override referencePrefix = "U";
}

/**
 * 15V 0.2A 3W miniature AC-DC module-type power supply
 *
 * KiCad symbol: `Converter_ACDC:PBO-3-S15`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*CUI*PBO*3*Sxx*THT*.
 * @see https://www.cui.com/product/resource/pbo-3.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_CUI_PBO-3-Sxx_THT_Vertical.
 */
export class PBO_3_S15 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "3",
  "+V(CAP)": "5",
  "-V(CAP)": "7",
  "-Vo": "10",
  "+Vo": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "+V(CAP)": "passive", "-V(CAP)": "passive", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:PBO-3-S15";
  override referencePrefix = "U";
}

/**
 * 24V 0.125A 3W miniature AC-DC module-type power supply
 *
 * KiCad symbol: `Converter_ACDC:PBO-3-S24`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*CUI*PBO*3*Sxx*THT*.
 * @see https://www.cui.com/product/resource/pbo-3.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_CUI_PBO-3-Sxx_THT_Vertical.
 */
export class PBO_3_S24 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "3",
  "+V(CAP)": "5",
  "-V(CAP)": "7",
  "-Vo": "10",
  "+Vo": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "+V(CAP)": "passive", "-V(CAP)": "passive", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:PBO-3-S24";
  override referencePrefix = "U";
}

/**
 * 5V 0.6A 3W miniature AC-DC module-type power supply
 *
 * KiCad symbol: `Converter_ACDC:PBO-3-S5`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*CUI*PBO*3*Sxx*THT*.
 * @see https://www.cui.com/product/resource/pbo-3.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_CUI_PBO-3-Sxx_THT_Vertical.
 */
export class PBO_3_S5 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "3",
  "+V(CAP)": "5",
  "-V(CAP)": "7",
  "-Vo": "10",
  "+Vo": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "+V(CAP)": "passive", "-V(CAP)": "passive", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:PBO-3-S5";
  override referencePrefix = "U";
}

/**
 * 9V 0.333A 3W miniature AC-DC module-type power supply
 *
 * KiCad symbol: `Converter_ACDC:PBO-3-S9`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*CUI*PBO*3*Sxx*THT*.
 * @see https://www.cui.com/product/resource/pbo-3.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_CUI_PBO-3-Sxx_THT_Vertical.
 */
export class PBO_3_S9 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "3",
  "+V(CAP)": "5",
  "-V(CAP)": "7",
  "-Vo": "10",
  "+Vo": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "+V(CAP)": "passive", "-V(CAP)": "passive", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:PBO-3-S9";
  override referencePrefix = "U";
}

/**
 * 1 Watt Single Output EMC Class B AC/DC power supply with regulated and short-circuit-proof isolated DC outputs and low standby power consumption.
 *
 * KiCad symbol: `Converter_ACDC:RAC01-xxSGB`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC01*SGB*THT*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC01-GB.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC01-xxSGB_THT.
 */
export class RAC01_xxSGB extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC01-xxSGB";
  override referencePrefix = "U";
}

/**
 * 1 Watt Single Output EMC Class B AC/DC 5V 200mA power supply with regulated and short-circuit-proof isolated DC outputs and low standby power consumption.
 *
 * KiCad symbol: `Converter_ACDC:RAC01-05SGB`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC01*SGB*THT*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC01-GB.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC01-xxSGB_THT.
 */
export class RAC01_05SGB extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC01-05SGB";
  override referencePrefix = "U";
}

/**
 * 1 Watt Single Output EMC Class B AC/DC 12V 83mA power supply with regulated and short-circuit-proof isolated DC outputs and low standby power consumption.
 *
 * KiCad symbol: `Converter_ACDC:RAC01-12SGB`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC01*SGB*THT*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC01-GB.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC01-xxSGB_THT.
 */
export class RAC01_12SGB extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC01-12SGB";
  override referencePrefix = "U";
}

/**
 * 1 Watt Single Output EMC Class B AC/DC 24V 42mA power supply with regulated and short-circuit-proof isolated DC outputs and low standby power consumption.
 *
 * KiCad symbol: `Converter_ACDC:RAC01-24SGB`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC01*SGB*THT*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC01-GB.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC01-xxSGB_THT.
 */
export class RAC01_24SGB extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC01-24SGB";
  override referencePrefix = "U";
}

/**
 * 1 Watt Single Output EMC Class B AC/DC 3.3V 303mA power supply with regulated and short-circuit-proof isolated DC outputs and low standby power consumption.
 *
 * KiCad symbol: `Converter_ACDC:RAC01-3.3SGB`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC01*SGB*THT*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC01-GB.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC01-xxSGB_THT.
 */
export class RAC01_3_3SGB extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC01-3.3SGB";
  override referencePrefix = "U";
}

/**
 * 4 Watt Single Output EMC Class A
 *
 * KiCad symbol: `Converter_ACDC:RAC04-xxSGA`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC04*SG*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC04-GA.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC04-xxSGx_THT.
 */
export class RAC04_xxSGA extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC04-xxSGA";
  override referencePrefix = "U";
}

/**
 * 4 Watt Single Output EMC Class A - 5V 800mA
 *
 * KiCad symbol: `Converter_ACDC:RAC04-05SGA`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC04*SG*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC04-GA.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC04-xxSGx_THT.
 */
export class RAC04_05SGA extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC04-05SGA";
  override referencePrefix = "U";
}

/**
 * 4 Watt Single Output EMC Class B
 *
 * KiCad symbol: `Converter_ACDC:RAC04-xxSGB`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC04*SG*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC04-GB.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC04-xxSGx_THT.
 */
export class RAC04_xxSGB extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC04-xxSGB";
  override referencePrefix = "U";
}

/**
 * 4 Watt Single Output EMC Class B - 5V 800mA
 *
 * KiCad symbol: `Converter_ACDC:RAC04-05SGB`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC04*SG*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC04-GB.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC04-xxSGx_THT.
 */
export class RAC04_05SGB extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC04-05SGB";
  override referencePrefix = "U";
}

/**
 * 4 Watt Single Output EMC Class A - 9V 440mA
 *
 * KiCad symbol: `Converter_ACDC:RAC04-09SGA`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC04*SG*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC04-GA.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC04-xxSGx_THT.
 */
export class RAC04_09SGA extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC04-09SGA";
  override referencePrefix = "U";
}

/**
 * 4 Watt Single Output EMC Class B - 9V 440mA
 *
 * KiCad symbol: `Converter_ACDC:RAC04-09SGB`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC04*SG*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC04-GB.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC04-xxSGx_THT.
 */
export class RAC04_09SGB extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC04-09SGB";
  override referencePrefix = "U";
}

/**
 * 4 Watt Single Output EMC Class A - 12V 330mA
 *
 * KiCad symbol: `Converter_ACDC:RAC04-12SGA`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC04*SG*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC04-GA.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC04-xxSGx_THT.
 */
export class RAC04_12SGA extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC04-12SGA";
  override referencePrefix = "U";
}

/**
 * 4 Watt Single Output EMC Class B - 12V 330mA
 *
 * KiCad symbol: `Converter_ACDC:RAC04-12SGB`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC04*SG*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC04-GB.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC04-xxSGx_THT.
 */
export class RAC04_12SGB extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC04-12SGB";
  override referencePrefix = "U";
}

/**
 * 4 Watt Single Output EMC Class A - 15V 270mA
 *
 * KiCad symbol: `Converter_ACDC:RAC04-15SGA`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC04*SG*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC04-GA.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC04-xxSGx_THT.
 */
export class RAC04_15SGA extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC04-15SGA";
  override referencePrefix = "U";
}

/**
 * 4 Watt Single Output EMC Class B - 15V 270mA
 *
 * KiCad symbol: `Converter_ACDC:RAC04-15SGB`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC04*SG*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC04-GB.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC04-xxSGx_THT.
 */
export class RAC04_15SGB extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC04-15SGB";
  override referencePrefix = "U";
}

/**
 * 4 Watt Single Output EMC Class A - 24V 170mA
 *
 * KiCad symbol: `Converter_ACDC:RAC04-24SGA`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC04*SG*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC04-GA.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC04-xxSGx_THT.
 */
export class RAC04_24SGA extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC04-24SGA";
  override referencePrefix = "U";
}

/**
 * 4 Watt Single Output EMC Class B - 24V 170mA
 *
 * KiCad symbol: `Converter_ACDC:RAC04-24SGB`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC04*SG*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC04-GB.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC04-xxSGx_THT.
 */
export class RAC04_24SGB extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC04-24SGB";
  override referencePrefix = "U";
}

/**
 * 4 Watt Single Output EMC Class A - 3.3V 1210mA
 *
 * KiCad symbol: `Converter_ACDC:RAC04-3.3SGA`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC04*SG*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC04-GA.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC04-xxSGx_THT.
 */
export class RAC04_3_3SGA extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC04-3.3SGA";
  override referencePrefix = "U";
}

/**
 * 4 Watt Single Output EMC Class B - 3.3V 1210mA
 *
 * KiCad symbol: `Converter_ACDC:RAC04-3.3SGB`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC04*SG*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC04-GB.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC04-xxSGx_THT.
 */
export class RAC04_3_3SGB extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC04-3.3SGB";
  override referencePrefix = "U";
}

/**
 * 5W Single Output EMC Class B 3.3V 1515mA
 *
 * KiCad symbol: `Converter_ACDC:RAC05-3.3SK`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC05*SK*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC05-K.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC05-xxSK_THT.
 */
export class RAC05_3_3SK extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC05-3.3SK";
  override referencePrefix = "U";
}

/**
 * 5W Single Output EMC Class B 5V 1000mA
 *
 * KiCad symbol: `Converter_ACDC:RAC05-05SK`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC05*SK*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC05-K.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC05-xxSK_THT.
 */
export class RAC05_05SK extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC05-05SK";
  override referencePrefix = "U";
}

/**
 * 5W Single Output EMC Class B 12V 416mA
 *
 * KiCad symbol: `Converter_ACDC:RAC05-12SK`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC05*SK*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC05-K.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC05-xxSK_THT.
 */
export class RAC05_12SK extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC05-12SK";
  override referencePrefix = "U";
}

/**
 * 5W Single Output EMC Class B 15V 333mA
 *
 * KiCad symbol: `Converter_ACDC:RAC05-15SK`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC05*SK*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC05-K.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC05-xxSK_THT.
 */
export class RAC05_15SK extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC05-15SK";
  override referencePrefix = "U";
}

/**
 * 5W Single Output EMC Class B 24V 210mA
 *
 * KiCad symbol: `Converter_ACDC:RAC05-24SK`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*RECOM*RAC05*SK*.
 * @see https://www.recom-power.com/pdf/Powerline-AC-DC/RAC05-K.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_RECOM_RAC05-xxSK_THT.
 */
export class RAC05_24SK extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC05-24SK";
  override referencePrefix = "U";
}

/**
 * 20 Watt Single Output AC/DC power supply 5V 4000mA
 *
 * KiCad symbol: `Converter_ACDC:RAC20-05SK`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Recom*RAC20*SK*THT*.
 * @see https://recom-power.com/pdf/Powerline_AC-DC/RAC20-K.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Recom_RAC20-xxSK_THT.
 */
export class RAC20_05SK extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC20-05SK";
  override referencePrefix = "U";
}

/**
 * 20 Watt Dual Output AC/DC power supply ±12V ±833mA
 *
 * KiCad symbol: `Converter_ACDC:RAC20-12DK`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Recom*RAC20*DK*THT*.
 * @see https://recom-power.com/pdf/Powerline_AC-DC/RAC20-K.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Recom_RAC20-xxDK_THT.
 */
export class RAC20_12DK extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "3",
  "Com": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", Com: "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC20-12DK";
  override referencePrefix = "U";
}

/**
 * 20 Watt Single Output AC/DC power supply 12V 1670mA
 *
 * KiCad symbol: `Converter_ACDC:RAC20-12SK`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Recom*RAC20*SK*THT*.
 * @see https://recom-power.com/pdf/Powerline_AC-DC/RAC20-K.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Recom_RAC20-xxSK_THT.
 */
export class RAC20_12SK extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC20-12SK";
  override referencePrefix = "U";
}

/**
 * 20 Watt Dual Output AC/DC power supply ±15V ±670mA
 *
 * KiCad symbol: `Converter_ACDC:RAC20-15DK`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Recom*RAC20*DK*THT*.
 * @see https://recom-power.com/pdf/Powerline_AC-DC/RAC20-K.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Recom_RAC20-xxDK_THT.
 */
export class RAC20_15DK extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "3",
  "Com": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", Com: "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC20-15DK";
  override referencePrefix = "U";
}

/**
 * 20 Watt Single Output AC/DC power supply 15V 1333mA
 *
 * KiCad symbol: `Converter_ACDC:RAC20-15SK`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Recom*RAC20*SK*THT*.
 * @see https://recom-power.com/pdf/Powerline_AC-DC/RAC20-K.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Recom_RAC20-xxSK_THT.
 */
export class RAC20_15SK extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC20-15SK";
  override referencePrefix = "U";
}

/**
 * 20 Watt Single Output AC/DC power supply 24V 840mA
 *
 * KiCad symbol: `Converter_ACDC:RAC20-24SK`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Recom*RAC20*SK*THT*.
 * @see https://recom-power.com/pdf/Powerline_AC-DC/RAC20-K.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Recom_RAC20-xxSK_THT.
 */
export class RAC20_24SK extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC20-24SK";
  override referencePrefix = "U";
}

/**
 * 20 Watt Single Output AC/DC power supply 48V 420mA
 *
 * KiCad symbol: `Converter_ACDC:RAC20-48SK`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Recom*RAC20*SK*THT*.
 * @see https://recom-power.com/pdf/Powerline_AC-DC/RAC20-K.pdf
 * Keywords: ac dc power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Recom_RAC20-xxSK_THT.
 */
export class RAC20_48SK extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:RAC20-48SK";
  override referencePrefix = "U";
}

/**
 * 5W AC/DC medical power supply, 5V fixed output voltage, 1A output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF05105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*051xx*THT*.
 * @see https://www.tracopower.com/products/tmf05.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_051xx_THT.
 */
export class TMF05105 extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF05105";
  override referencePrefix = "U";
}

/**
 * 5W AC/DC medical power supply, 12V fixed output voltage, 417mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF05112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*051xx*THT*.
 * @see https://www.tracopower.com/products/tmf05.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_051xx_THT.
 */
export class TMF05112 extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF05112";
  override referencePrefix = "U";
}

/**
 * 5W AC/DC medical power supply, 15V fixed output voltage, 333mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF05115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*051xx*THT*.
 * @see https://www.tracopower.com/products/tmf05.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_051xx_THT.
 */
export class TMF05115 extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF05115";
  override referencePrefix = "U";
}

/**
 * 5W AC/DC medical power supply, 24V fixed output voltage, 208mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF05124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*051xx*THT*.
 * @see https://www.tracopower.com/products/tmf05.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_051xx_THT.
 */
export class TMF05124 extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF05124";
  override referencePrefix = "U";
}

/**
 * 10W AC/DC medical power supply, 5V fixed output voltage, 2A output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF10105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*101xx*THT*.
 * @see https://www.tracopower.com/products/tmf10.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_101xx_THT.
 */
export class TMF10105 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF10105";
  override referencePrefix = "U";
}

/**
 * 10W AC/DC medical power supply, 12V fixed output voltage, 833mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF10112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*101xx*THT*.
 * @see https://www.tracopower.com/products/tmf10.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_101xx_THT.
 */
export class TMF10112 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF10112";
  override referencePrefix = "U";
}

/**
 * 10W AC/DC medical power supply, 15V fixed output voltage, 666mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF10115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*101xx*THT*.
 * @see https://www.tracopower.com/products/tmf10.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_101xx_THT.
 */
export class TMF10115 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF10115";
  override referencePrefix = "U";
}

/**
 * 10W AC/DC medical power supply, 24V fixed output voltage, 417mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF10124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*101xx*THT*.
 * @see https://www.tracopower.com/products/tmf10.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_101xx_THT.
 */
export class TMF10124 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF10124";
  override referencePrefix = "U";
}

/**
 * 18W AC/DC medical power supply, 5V fixed output voltage, 3.6A output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF20105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*201xx*THT*.
 * @see https://www.tracopower.com/products/tmf20.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_201xx_THT.
 */
export class TMF20105 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF20105";
  override referencePrefix = "U";
}

/**
 * 20W AC/DC medical power supply, 12V fixed output voltage, 1.667A output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF20112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*201xx*THT*.
 * @see https://www.tracopower.com/products/tmf20.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_201xx_THT.
 */
export class TMF20112 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF20112";
  override referencePrefix = "U";
}

/**
 * 20W AC/DC medical power supply, 15V fixed output voltage, 1.333A output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF20115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*201xx*THT*.
 * @see https://www.tracopower.com/products/tmf20.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_201xx_THT.
 */
export class TMF20115 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF20115";
  override referencePrefix = "U";
}

/**
 * 20W AC/DC medical power supply, 24V fixed output voltage, 833mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF20124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*201xx*THT*.
 * @see https://www.tracopower.com/products/tmf20.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_201xx_THT.
 */
export class TMF20124 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF20124";
  override referencePrefix = "U";
}

/**
 * 25W AC/DC medical power supply, 5V fixed output voltage, 5A output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF30105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*301xx*THT*.
 * @see https://www.tracopower.com/products/tmf30.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_301xx_THT.
 */
export class TMF30105 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "3",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF30105";
  override referencePrefix = "U";
}

/**
 * 30W AC/DC medical power supply, 12V fixed output voltage, 2.5A output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF30112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*301xx*THT*.
 * @see https://www.tracopower.com/products/tmf30.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_301xx_THT.
 */
export class TMF30112 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "3",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF30112";
  override referencePrefix = "U";
}

/**
 * 30W AC/DC medical power supply, 15V fixed output voltage, 2A output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF30115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*301xx*THT*.
 * @see https://www.tracopower.com/products/tmf30.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_301xx_THT.
 */
export class TMF30115 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "3",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF30115";
  override referencePrefix = "U";
}

/**
 * 30W AC/DC medical power supply, 24V fixed output voltage, 1.25A output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMF30124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMF*301xx*THT*.
 * @see https://www.tracopower.com/products/tmf30.pdf
 * Keywords: Traco isolated ac-dc acdc power-supply 60601-1.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMF_301xx_THT.
 */
export class TMF30124 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "-Vout": "3",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMF30124";
  override referencePrefix = "U";
}

/**
 * 6.3W AC/DC industrial power supply, 5V fixed output voltage, 1.26A output, 3.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMG07105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMG*071xx*THT*.
 * @see https://www.tracopower.com/products/tmg07.pdf
 * Keywords: Traco isolated ac-dc power-supply 62368-1 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMG_071xx_THT.
 */
export class TMG07105 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMG07105";
  override referencePrefix = "U";
}

/**
 * 7W AC/DC industrial power supply, 12V fixed output voltage, 583mA output, 3.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMG07112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMG*071xx*THT*.
 * @see https://www.tracopower.com/products/tmg07.pdf
 * Keywords: Traco isolated ac-dc power-supply 62368-1 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMG_071xx_THT.
 */
export class TMG07112 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMG07112";
  override referencePrefix = "U";
}

/**
 * 7W AC/DC industrial power supply, 15V fixed output voltage, 466mA output, 3.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMG07115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMG*071xx*THT*.
 * @see https://www.tracopower.com/products/tmg07.pdf
 * Keywords: Traco isolated ac-dc power-supply 62368-1 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMG_071xx_THT.
 */
export class TMG07115 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMG07115";
  override referencePrefix = "U";
}

/**
 * 7W AC/DC industrial power supply, 24V fixed output voltage, 292mA output, 3.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMG07124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMG*071xx*THT*.
 * @see https://www.tracopower.com/products/tmg07.pdf
 * Keywords: Traco isolated ac-dc power-supply 62368-1 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMG_071xx_THT.
 */
export class TMG07124 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMG07124";
  override referencePrefix = "U";
}

/**
 * 13.5W AC/DC industrial power supply, 5V fixed output voltage, 2.7A output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMG15105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMG*151xx*THT*.
 * @see https://www.tracopower.com/products/tmg15.pdf
 * Keywords: Traco isolated ac-dc power-supply 62368-1 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMG_151xx_THT.
 */
export class TMG15105 extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMG15105";
  override referencePrefix = "U";
}

/**
 * 15W AC/DC industrial power supply, 12V fixed output voltage, 1.25A output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMG15112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMG*151xx*THT*.
 * @see https://www.tracopower.com/products/tmg15.pdf
 * Keywords: Traco isolated ac-dc power-supply 62368-1 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMG_151xx_THT.
 */
export class TMG15112 extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMG15112";
  override referencePrefix = "U";
}

/**
 * 15W AC/DC industrial power supply, 15V fixed output voltage, 1A output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMG15115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMG*151xx*THT*.
 * @see https://www.tracopower.com/products/tmg15.pdf
 * Keywords: Traco isolated ac-dc power-supply 62368-1 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMG_151xx_THT.
 */
export class TMG15115 extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMG15115";
  override referencePrefix = "U";
}

/**
 * 15W AC/DC industrial power supply, 24V fixed output voltage, 625mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMG15124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMG*151xx*THT*.
 * @see https://www.tracopower.com/products/tmg15.pdf
 * Keywords: Traco isolated ac-dc power-supply 62368-1 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMG_151xx_THT.
 */
export class TMG15124 extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "-Vout": "3",
  "+Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMG15124";
  override referencePrefix = "U";
}

/**
 * 3.3V 1200mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM04103`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*04*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 4W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-04_THT.
 */
export class TMLM04103 extends Component.withPins({
  "Vout+": "2",
  "Vout-": "3",
  "AC(L)": "5",
  "AC(N)": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout+": "power_out", "Vout-": "power_out", "AC(L)": "power_in", "AC(N)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM04103";
  override referencePrefix = "U";
}

/**
 * 5V 800mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM04105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*04*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 4W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-04_THT.
 */
export class TMLM04105 extends Component.withPins({
  "Vout+": "2",
  "Vout-": "3",
  "AC(L)": "5",
  "AC(N)": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout+": "power_out", "Vout-": "power_out", "AC(L)": "power_in", "AC(N)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM04105";
  override referencePrefix = "U";
}

/**
 * 9V 444mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM04109`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*04*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 4W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-04_THT.
 */
export class TMLM04109 extends Component.withPins({
  "Vout+": "2",
  "Vout-": "3",
  "AC(L)": "5",
  "AC(N)": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout+": "power_out", "Vout-": "power_out", "AC(L)": "power_in", "AC(N)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM04109";
  override referencePrefix = "U";
}

/**
 * 12V 333mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM04112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*04*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 4W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-04_THT.
 */
export class TMLM04112 extends Component.withPins({
  "Vout+": "2",
  "Vout-": "3",
  "AC(L)": "5",
  "AC(N)": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout+": "power_out", "Vout-": "power_out", "AC(L)": "power_in", "AC(N)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM04112";
  override referencePrefix = "U";
}

/**
 * 15V 267mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM04115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*04*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 4W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-04_THT.
 */
export class TMLM04115 extends Component.withPins({
  "Vout+": "2",
  "Vout-": "3",
  "AC(L)": "5",
  "AC(N)": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout+": "power_out", "Vout-": "power_out", "AC(L)": "power_in", "AC(N)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM04115";
  override referencePrefix = "U";
}

/**
 * 24V 167mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM04124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*04*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 4W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-04_THT.
 */
export class TMLM04124 extends Component.withPins({
  "Vout+": "2",
  "Vout-": "3",
  "AC(L)": "5",
  "AC(N)": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout+": "power_out", "Vout-": "power_out", "AC(L)": "power_in", "AC(N)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM04124";
  override referencePrefix = "U";
}

/**
 * 12V 250mA / 5V 120mA AC/DC dual output, low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM04225`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*04*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 4W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-04_THT.
 */
export class TMLM04225 extends Component.withPins({
  "Vout1": "2",
  "Common": "3",
  "Vout2": "4",
  "AC(L)": "5",
  "AC(N)": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vout1: "power_out", Common: "power_out", Vout2: "power_out", "AC(L)": "power_in", "AC(N)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM04225";
  override referencePrefix = "U";
}

/**
 * 5V 600mA / 3.3V 150mA AC/DC dual output, low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM04253`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*04*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 4W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-04_THT.
 */
export class TMLM04253 extends Component.withPins({
  "Vout1": "2",
  "Common": "3",
  "Vout2": "4",
  "AC(L)": "5",
  "AC(N)": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vout1: "power_out", Common: "power_out", Vout2: "power_out", "AC(L)": "power_in", "AC(N)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM04253";
  override referencePrefix = "U";
}

/**
 * 3.3V 1250mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM05103`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*05*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 5W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-05_THT.
 */
export class TMLM05103 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM05103";
  override referencePrefix = "U";
}

/**
 * 5V 1000mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM05105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*05*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 5W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-05_THT.
 */
export class TMLM05105 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM05105";
  override referencePrefix = "U";
}

/**
 * 12V 420mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM05112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*05*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 5W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-05_THT.
 */
export class TMLM05112 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM05112";
  override referencePrefix = "U";
}

/**
 * 15V 333mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM05115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*05*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 5W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-05_THT.
 */
export class TMLM05115 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM05115";
  override referencePrefix = "U";
}

/**
 * 24V 230mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM05124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*05*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 5W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-05_THT.
 */
export class TMLM05124 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM05124";
  override referencePrefix = "U";
}

/**
 * 3.3V 2500mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM10103`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*10*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-10-20_THT.
 */
export class TMLM10103 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM10103";
  override referencePrefix = "U";
}

/**
 * 5V 2000mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM10105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*10*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-10-20_THT.
 */
export class TMLM10105 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM10105";
  override referencePrefix = "U";
}

/**
 * 12V 833mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM10112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*10*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-10-20_THT.
 */
export class TMLM10112 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM10112";
  override referencePrefix = "U";
}

/**
 * 15V 667mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM10115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*10*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-10-20_THT.
 */
export class TMLM10115 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM10115";
  override referencePrefix = "U";
}

/**
 * 24V 417mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM10124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*10*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-10-20_THT.
 */
export class TMLM10124 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM10124";
  override referencePrefix = "U";
}

/**
 * 3.3V 3600mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM20103`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*10*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 20W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-10-20_THT.
 */
export class TMLM20103 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM20103";
  override referencePrefix = "U";
}

/**
 * 5V 3600mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM20105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*10*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 20W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-10-20_THT.
 */
export class TMLM20105 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM20105";
  override referencePrefix = "U";
}

/**
 * 12V 1660mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM20112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*10*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 20W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-10-20_THT.
 */
export class TMLM20112 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM20112";
  override referencePrefix = "U";
}

/**
 * 12V 1330mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM20115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*10*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 20W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-10-20_THT.
 */
export class TMLM20115 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM20115";
  override referencePrefix = "U";
}

/**
 * 24V 833mA AC/DC low noise power module
 *
 * KiCad symbol: `Converter_ACDC:TMLM20124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMLM*10*.
 * @see https://www.tracopower.com/products/tmlm.pdf
 * Keywords: Traco Power 20W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMLM-10-20_THT.
 */
export class TMLM20124 extends Component.withPins({
  "Vout-": "1",
  "Vout+": "2",
  "AC_3": "3",
  "AC_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vout-": "power_out", "Vout+": "power_out", AC_3: "power_in", AC_4: "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMLM20124";
  override referencePrefix = "U";
}

/**
 * 3W AC/DC power supply, 3.3V fixed output voltage, 900mA output, 3.0kVAC isolation, 1”x1”
 *
 * KiCad symbol: `Converter_ACDC:TMPS03-103`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPS03*1xx*THT*.
 * @see https://www.tracopower.com/products/tmps03.pdf
 * Keywords: Traco isolated ac-dc 60335-1 62368-1 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPS03-1xx_THT.
 */
export class TMPS03_103 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPS03-103";
  override referencePrefix = "U";
}

/**
 * 3W AC/DC power supply, 5V fixed output voltage, 600mA output, 3.0kVAC isolation, 1”x1”
 *
 * KiCad symbol: `Converter_ACDC:TMPS03-105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPS03*1xx*THT*.
 * @see https://www.tracopower.com/products/tmps03.pdf
 * Keywords: Traco isolated ac-dc 60335-1 62368-1 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPS03-1xx_THT.
 */
export class TMPS03_105 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPS03-105";
  override referencePrefix = "U";
}

/**
 * 3W AC/DC power supply, 9V fixed output voltage, 333mA output, 3.0kVAC isolation, 1”x1”
 *
 * KiCad symbol: `Converter_ACDC:TMPS03-109`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPS03*1xx*THT*.
 * @see https://www.tracopower.com/products/tmps03.pdf
 * Keywords: Traco isolated ac-dc 60335-1 62368-1 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPS03-1xx_THT.
 */
export class TMPS03_109 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPS03-109";
  override referencePrefix = "U";
}

/**
 * 3W AC/DC power supply, 12V fixed output voltage, 250mA output, 3.0kVAC isolation, 1”x1”
 *
 * KiCad symbol: `Converter_ACDC:TMPS03-112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPS03*1xx*THT*.
 * @see https://www.tracopower.com/products/tmps03.pdf
 * Keywords: Traco isolated ac-dc 60335-1 62368-1 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPS03-1xx_THT.
 */
export class TMPS03_112 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPS03-112";
  override referencePrefix = "U";
}

/**
 * 3W AC/DC power supply, 15V fixed output voltage, 200mA output, 3.0kVAC isolation, 1”x1”
 *
 * KiCad symbol: `Converter_ACDC:TMPS03-115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPS03*1xx*THT*.
 * @see https://www.tracopower.com/products/tmps03.pdf
 * Keywords: Traco isolated ac-dc 60335-1 62368-1 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPS03-1xx_THT.
 */
export class TMPS03_115 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPS03-115";
  override referencePrefix = "U";
}

/**
 * 3W AC/DC power supply, 24V fixed output voltage, 125mA output, 3.0kVAC isolation, 1”x1”
 *
 * KiCad symbol: `Converter_ACDC:TMPS03-124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPS03*1xx*THT*.
 * @see https://www.tracopower.com/products/tmps03.pdf
 * Keywords: Traco isolated ac-dc 60335-1 62368-1 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPS03-1xx_THT.
 */
export class TMPS03_124 extends Component.withPins({
  "AC(N)": "1",
  "AC(L)": "2",
  "NC": "3",
  "-Vout": "4",
  "+Vout": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(N)": "power_in", "AC(L)": "power_in", NC: "no_connect", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPS03-124";
  override referencePrefix = "U";
}

/**
 * 10W AC/DC power supply, 5V fixed output voltage, 2A output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMPW10-105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPW10*1xx*THT*.
 * @see https://www.tracopower.com/products/tmpw10.pdf
 * Keywords: Traco isolated ac-dc power-supply 60335-1 62368-1 61558-1 61558-2-16 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPW10_1xx_THT.
 */
export class TMPW10_105 extends Component.withPins({
  "+Vout": "1",
  "-Vout": "2",
  "AC(L)": "3",
  "AC(N)": "4",
  "NC": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+Vout": "power_out", "-Vout": "power_out", "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPW10-105";
  override referencePrefix = "U";
}

/**
 * 10W AC/DC power supply, 12V fixed output voltage, 833mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMPW10-112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPW10*1xx*THT*.
 * @see https://www.tracopower.com/products/tmpw10.pdf
 * Keywords: Traco isolated ac-dc power-supply 60335-1 62368-1 61558-1 61558-2-16 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPW10_1xx_THT.
 */
export class TMPW10_112 extends Component.withPins({
  "+Vout": "1",
  "-Vout": "2",
  "AC(L)": "3",
  "AC(N)": "4",
  "NC": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+Vout": "power_out", "-Vout": "power_out", "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPW10-112";
  override referencePrefix = "U";
}

/**
 * 10W AC/DC power supply, 15V fixed output voltage, 667mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMPW10-115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPW10*1xx*THT*.
 * @see https://www.tracopower.com/products/tmpw10.pdf
 * Keywords: Traco isolated ac-dc power-supply 60335-1 62368-1 61558-1 61558-2-16 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPW10_1xx_THT.
 */
export class TMPW10_115 extends Component.withPins({
  "+Vout": "1",
  "-Vout": "2",
  "AC(L)": "3",
  "AC(N)": "4",
  "NC": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+Vout": "power_out", "-Vout": "power_out", "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPW10-115";
  override referencePrefix = "U";
}

/**
 * 10W AC/DC power supply, 24V fixed output voltage, 417mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMPW10-124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPW10*1xx*THT*.
 * @see https://www.tracopower.com/products/tmpw10.pdf
 * Keywords: Traco isolated ac-dc power-supply 60335-1 62368-1 61558-1 61558-2-16 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPW10_1xx_THT.
 */
export class TMPW10_124 extends Component.withPins({
  "+Vout": "1",
  "-Vout": "2",
  "AC(L)": "3",
  "AC(N)": "4",
  "NC": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+Vout": "power_out", "-Vout": "power_out", "AC(L)": "power_in", "AC(N)": "power_in", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPW10-124";
  override referencePrefix = "U";
}

/**
 * 20W AC/DC power supply, 5.1V fixed output voltage, 3922mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMPW25-105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPW25*1xx*THT*.
 * @see https://www.tracopower.com/products/tmpw25.pdf
 * Keywords: Traco isolated ac-dc power-supply 60335-1 62368-1 61558-1 61558-2-16 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPW25_1xx_THT.
 */
export class TMPW25_105 extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPW25-105";
  override referencePrefix = "U";
}

/**
 * 25W AC/DC power supply, 12V fixed output voltage, 2083mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMPW25-112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPW25*1xx*THT*.
 * @see https://www.tracopower.com/products/tmpw25.pdf
 * Keywords: Traco isolated ac-dc power-supply 60335-1 62368-1 61558-1 61558-2-16 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPW25_1xx_THT.
 */
export class TMPW25_112 extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPW25-112";
  override referencePrefix = "U";
}

/**
 * 25W AC/DC power supply, 15V fixed output voltage, 1666mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMPW25-115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPW25*1xx*THT*.
 * @see https://www.tracopower.com/products/tmpw25.pdf
 * Keywords: Traco isolated ac-dc power-supply 60335-1 62368-1 61558-1 61558-2-16 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPW25_1xx_THT.
 */
export class TMPW25_115 extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPW25-115";
  override referencePrefix = "U";
}

/**
 * 25W AC/DC power supply, 24V fixed output voltage, 1042mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMPW25-124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPW25*1xx*THT*.
 * @see https://www.tracopower.com/products/tmpw25.pdf
 * Keywords: Traco isolated ac-dc power-supply 60335-1 62368-1 61558-1 61558-2-16 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPW25_1xx_THT.
 */
export class TMPW25_124 extends Component.withPins({
  "AC(L)": "1",
  "AC(N)": "2",
  "+Vout": "3",
  "-Vout": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC(L)": "power_in", "AC(N)": "power_in", "+Vout": "power_out", "-Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPW25-124";
  override referencePrefix = "U";
}

/**
 * 5W AC/DC power supply, 3.3V fixed output voltage, 1515mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMPW5-103`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPW5*THT*.
 * @see https://www.tracopower.com/products/tmpw5.pdf
 * Keywords: Traco isolated ac-dc power-supply 60335-1 62368-1 61558-1 61558-2-16 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPW5-1xx_THT.
 */
export class TMPW5_103 extends Component.withPins({
  "NC": "1",
  "+Vout": "2",
  "-Vout": "3",
  "AC(L)": "4",
  "AC(N)": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "+Vout": "power_out", "-Vout": "power_out", "AC(L)": "power_in", "AC(N)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPW5-103";
  override referencePrefix = "U";
}

/**
 * 5W AC/DC power supply, 5V fixed output voltage, 1000mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMPW5-105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPW5*THT*.
 * @see https://www.tracopower.com/products/tmpw5.pdf
 * Keywords: Traco isolated ac-dc power-supply 60335-1 62368-1 61558-1 61558-2-16 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPW5-1xx_THT.
 */
export class TMPW5_105 extends Component.withPins({
  "NC": "1",
  "+Vout": "2",
  "-Vout": "3",
  "AC(L)": "4",
  "AC(N)": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "+Vout": "power_out", "-Vout": "power_out", "AC(L)": "power_in", "AC(N)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPW5-105";
  override referencePrefix = "U";
}

/**
 * 5W AC/DC power supply, 12V fixed output voltage, 420mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMPW5-112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPW5*THT*.
 * @see https://www.tracopower.com/products/tmpw5.pdf
 * Keywords: Traco isolated ac-dc power-supply 60335-1 62368-1 61558-1 61558-2-16 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPW5-1xx_THT.
 */
export class TMPW5_112 extends Component.withPins({
  "NC": "1",
  "+Vout": "2",
  "-Vout": "3",
  "AC(L)": "4",
  "AC(N)": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "+Vout": "power_out", "-Vout": "power_out", "AC(L)": "power_in", "AC(N)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPW5-112";
  override referencePrefix = "U";
}

/**
 * 5W AC/DC power supply, 24V fixed output voltage, 210mA output, 4.0kVAC isolation
 *
 * KiCad symbol: `Converter_ACDC:TMPW5-124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TMPW5*THT*.
 * @see https://www.tracopower.com/products/tmpw5.pdf
 * Keywords: Traco isolated ac-dc power-supply 60335-1 62368-1 61558-1 61558-2-16 single.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TMPW5-1xx_THT.
 */
export class TMPW5_124 extends Component.withPins({
  "NC": "1",
  "+Vout": "2",
  "-Vout": "3",
  "AC(L)": "4",
  "AC(N)": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "+Vout": "power_out", "-Vout": "power_out", "AC(L)": "power_in", "AC(N)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TMPW5-124";
  override referencePrefix = "U";
}

/**
 * 3.3V, 4000mA, 15W, Isolated, AC-DC, Traco
 *
 * KiCad symbol: `Converter_ACDC:TPP-15-103-D`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TPP*15*THT*.
 * @see https://www.tracopower.com/sites/default/files/products/datasheets/tpp15_d_datasheet.pdf
 * Keywords: Medical Power Supply Traco.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TPP-15-1xx-D_THT.
 */
export class TPP_15_103_D extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "Trim": "3",
  "-Vo": "4",
  "+Vo": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", Trim: "passive", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TPP-15-103-D";
  override referencePrefix = "U";
}

/**
 * 5V, 3000mA, 15W, Isolated, AC-DC, Traco
 *
 * KiCad symbol: `Converter_ACDC:TPP-15-105-D`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TPP*15*THT*.
 * @see https://www.tracopower.com/sites/default/files/products/datasheets/tpp15_d_datasheet.pdf
 * Keywords: Medical Power Supply Traco.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TPP-15-1xx-D_THT.
 */
export class TPP_15_105_D extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "Trim": "3",
  "-Vo": "4",
  "+Vo": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", Trim: "passive", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TPP-15-105-D";
  override referencePrefix = "U";
}

/**
 * 9V, 1670mA, 15W, Isolated, AC-DC, Traco
 *
 * KiCad symbol: `Converter_ACDC:TPP-15-109-D`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TPP*15*THT*.
 * @see https://www.tracopower.com/sites/default/files/products/datasheets/tpp15_d_datasheet.pdf
 * Keywords: Medical Power Supply Traco.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TPP-15-1xx-D_THT.
 */
export class TPP_15_109_D extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "Trim": "3",
  "-Vo": "4",
  "+Vo": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", Trim: "passive", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TPP-15-109-D";
  override referencePrefix = "U";
}

/**
 * 12V, 1250mA, 15W, Isolated, AC-DC, Traco
 *
 * KiCad symbol: `Converter_ACDC:TPP-15-112-D`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TPP*15*THT*.
 * @see https://www.tracopower.com/sites/default/files/products/datasheets/tpp15_d_datasheet.pdf
 * Keywords: Medical Power Supply Traco.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TPP-15-1xx-D_THT.
 */
export class TPP_15_112_D extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "Trim": "3",
  "-Vo": "4",
  "+Vo": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", Trim: "passive", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TPP-15-112-D";
  override referencePrefix = "U";
}

/**
 * 15V, 1000mA, 15W, Isolated, AC-DC, Traco
 *
 * KiCad symbol: `Converter_ACDC:TPP-15-115-D`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TPP*15*THT*.
 * @see https://www.tracopower.com/sites/default/files/products/datasheets/tpp15_d_datasheet.pdf
 * Keywords: Medical Power Supply Traco.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TPP-15-1xx-D_THT.
 */
export class TPP_15_115_D extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "Trim": "3",
  "-Vo": "4",
  "+Vo": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", Trim: "passive", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TPP-15-115-D";
  override referencePrefix = "U";
}

/**
 * 24V, 625mA, 15W, Isolated, AC-DC, Traco
 *
 * KiCad symbol: `Converter_ACDC:TPP-15-124-D`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TPP*15*THT*.
 * @see https://www.tracopower.com/sites/default/files/products/datasheets/tpp15_d_datasheet.pdf
 * Keywords: Medical Power Supply Traco.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TPP-15-1xx-D_THT.
 */
export class TPP_15_124_D extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "Trim": "3",
  "-Vo": "4",
  "+Vo": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", Trim: "passive", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TPP-15-124-D";
  override referencePrefix = "U";
}

/**
 * 36V, 417mA, 15W, Isolated, AC-DC, Traco
 *
 * KiCad symbol: `Converter_ACDC:TPP-15-136-D`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TPP*15*THT*.
 * @see https://www.tracopower.com/sites/default/files/products/datasheets/tpp15_d_datasheet.pdf
 * Keywords: Medical Power Supply Traco.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TPP-15-1xx-D_THT.
 */
export class TPP_15_136_D extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "Trim": "3",
  "-Vo": "4",
  "+Vo": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", Trim: "passive", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TPP-15-136-D";
  override referencePrefix = "U";
}

/**
 * 48V, 313mA, 15W, Isolated, AC-DC, Traco
 *
 * KiCad symbol: `Converter_ACDC:TPP-15-148-D`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*TRACO*TPP*15*THT*.
 * @see https://www.tracopower.com/sites/default/files/products/datasheets/tpp15_d_datasheet.pdf
 * Keywords: Medical Power Supply Traco.
 * Default footprint: Converter_ACDC:Converter_ACDC_TRACO_TPP-15-1xx-D_THT.
 */
export class TPP_15_148_D extends Component.withPins({
  "AC/N": "1",
  "AC/L": "2",
  "Trim": "3",
  "-Vo": "4",
  "+Vo": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AC/N": "power_in", "AC/L": "power_in", Trim: "passive", "-Vo": "power_out", "+Vo": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:TPP-15-148-D";
  override referencePrefix = "U";
}

/**
 * 3V Vigortronix 10W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-010-103`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*010*1xx*.
 * @see http://www.vigortronix.com/10WattACDCPCBPowerModule.aspx
 * Keywords: 3V 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-010-1xx_THT.
 */
export class VTX_214_010_103 extends Component.withPins({
  "L": "1",
  "N": "2",
  "DC+": "3",
  "DC-": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-010-103";
  override referencePrefix = "U";
}

/**
 * 5V Vigortronix 10W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-010-105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*010*1xx*.
 * @see http://www.vigortronix.com/10WattACDCPCBPowerModule.aspx
 * Keywords: 5V 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-010-1xx_THT.
 */
export class VTX_214_010_105 extends Component.withPins({
  "L": "1",
  "N": "2",
  "DC+": "3",
  "DC-": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-010-105";
  override referencePrefix = "U";
}

/**
 * 6V Vigortronix 10W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-010-106`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*010*1xx*.
 * @see http://www.vigortronix.com/10WattACDCPCBPowerModule.aspx
 * Keywords: 6V 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-010-1xx_THT.
 */
export class VTX_214_010_106 extends Component.withPins({
  "L": "1",
  "N": "2",
  "DC+": "3",
  "DC-": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-010-106";
  override referencePrefix = "U";
}

/**
 * 7.5V Vigortronix 10W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-010-107`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*010*1xx*.
 * @see http://www.vigortronix.com/10WattACDCPCBPowerModule.aspx
 * Keywords: 7.5V 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-010-1xx_THT.
 */
export class VTX_214_010_107 extends Component.withPins({
  "L": "1",
  "N": "2",
  "DC+": "3",
  "DC-": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-010-107";
  override referencePrefix = "U";
}

/**
 * 8V Vigortronix 10W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-010-108`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*010*1xx*.
 * @see http://www.vigortronix.com/10WattACDCPCBPowerModule.aspx
 * Keywords: 8V 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-010-1xx_THT.
 */
export class VTX_214_010_108 extends Component.withPins({
  "L": "1",
  "N": "2",
  "DC+": "3",
  "DC-": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-010-108";
  override referencePrefix = "U";
}

/**
 * 9V Vigortronix 10W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-010-109`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*010*1xx*.
 * @see http://www.vigortronix.com/10WattACDCPCBPowerModule.aspx
 * Keywords: 9V 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-010-1xx_THT.
 */
export class VTX_214_010_109 extends Component.withPins({
  "L": "1",
  "N": "2",
  "DC+": "3",
  "DC-": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-010-109";
  override referencePrefix = "U";
}

/**
 * 10V Vigortronix 10W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-010-110`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*010*1xx*.
 * @see http://www.vigortronix.com/10WattACDCPCBPowerModule.aspx
 * Keywords: 10V 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-010-1xx_THT.
 */
export class VTX_214_010_110 extends Component.withPins({
  "L": "1",
  "N": "2",
  "DC+": "3",
  "DC-": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-010-110";
  override referencePrefix = "U";
}

/**
 * 12V Vigortronix 10W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-010-112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*010*1xx*.
 * @see http://www.vigortronix.com/10WattACDCPCBPowerModule.aspx
 * Keywords: 12V 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-010-1xx_THT.
 */
export class VTX_214_010_112 extends Component.withPins({
  "L": "1",
  "N": "2",
  "DC+": "3",
  "DC-": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-010-112";
  override referencePrefix = "U";
}

/**
 * 15V Vigortronix 10W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-010-115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*010*1xx*.
 * @see http://www.vigortronix.com/10WattACDCPCBPowerModule.aspx
 * Keywords: 15V 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-010-1xx_THT.
 */
export class VTX_214_010_115 extends Component.withPins({
  "L": "1",
  "N": "2",
  "DC+": "3",
  "DC-": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-010-115";
  override referencePrefix = "U";
}

/**
 * 18V Vigortronix 10W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-010-118`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*010*1xx*.
 * @see http://www.vigortronix.com/10WattACDCPCBPowerModule.aspx
 * Keywords: 18V 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-010-1xx_THT.
 */
export class VTX_214_010_118 extends Component.withPins({
  "L": "1",
  "N": "2",
  "DC+": "3",
  "DC-": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-010-118";
  override referencePrefix = "U";
}

/**
 * 24V Vigortronix 10W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-010-124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*010*1xx*.
 * @see http://www.vigortronix.com/10WattACDCPCBPowerModule.aspx
 * Keywords: 24V 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-010-1xx_THT.
 */
export class VTX_214_010_124 extends Component.withPins({
  "L": "1",
  "N": "2",
  "DC+": "3",
  "DC-": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-010-124";
  override referencePrefix = "U";
}

/**
 * 48V Vigortronix 10W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-010-148`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*010*1xx*.
 * @see http://www.vigortronix.com/10WattACDCPCBPowerModule.aspx
 * Keywords: 48V 10W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-010-1xx_THT.
 */
export class VTX_214_010_148 extends Component.withPins({
  "L": "1",
  "N": "2",
  "DC+": "3",
  "DC-": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { L: "power_in", N: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-010-148";
  override referencePrefix = "U";
}

/**
 * 3V Vigortronix 15W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-015-103`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*015*1xx*.
 * @see http://www.vigortronix.com/15WattSMPSPCBModuleAC-DC
 * Keywords: 3V 15W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-015-1xx_THT.
 */
export class VTX_214_015_103 extends Component.withPins({
  "FG": "1",
  "N": "2",
  "L": "3",
  "DC+": "4",
  "DC-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FG: "no_connect", N: "power_in", L: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-015-103";
  override referencePrefix = "U";
}

/**
 * 5V Vigortronix 15W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-015-105`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*015*1xx*.
 * @see http://www.vigortronix.com/15WattSMPSPCBModuleAC-DC
 * Keywords: 5V 15W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-015-1xx_THT.
 */
export class VTX_214_015_105 extends Component.withPins({
  "FG": "1",
  "N": "2",
  "L": "3",
  "DC+": "4",
  "DC-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FG: "no_connect", N: "power_in", L: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-015-105";
  override referencePrefix = "U";
}

/**
 * 6V Vigortronix 15W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-015-106`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*015*1xx*.
 * @see http://www.vigortronix.com/15WattSMPSPCBModuleAC-DC
 * Keywords: 6V 15W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-015-1xx_THT.
 */
export class VTX_214_015_106 extends Component.withPins({
  "FG": "1",
  "N": "2",
  "L": "3",
  "DC+": "4",
  "DC-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FG: "no_connect", N: "power_in", L: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-015-106";
  override referencePrefix = "U";
}

/**
 * 7V Vigortronix 15W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-015-107`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*015*1xx*.
 * @see http://www.vigortronix.com/15WattSMPSPCBModuleAC-DC
 * Keywords: 7V 15W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-015-1xx_THT.
 */
export class VTX_214_015_107 extends Component.withPins({
  "FG": "1",
  "N": "2",
  "L": "3",
  "DC+": "4",
  "DC-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FG: "no_connect", N: "power_in", L: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-015-107";
  override referencePrefix = "U";
}

/**
 * 9V Vigortronix 15W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-015-109`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*015*1xx*.
 * @see http://www.vigortronix.com/15WattSMPSPCBModuleAC-DC
 * Keywords: 9V 15W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-015-1xx_THT.
 */
export class VTX_214_015_109 extends Component.withPins({
  "FG": "1",
  "N": "2",
  "L": "3",
  "DC+": "4",
  "DC-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FG: "no_connect", N: "power_in", L: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-015-109";
  override referencePrefix = "U";
}

/**
 * 12V Vigortronix 15W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-015-112`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*015*1xx*.
 * @see http://www.vigortronix.com/15WattSMPSPCBModuleAC-DC
 * Keywords: 12V 15W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-015-1xx_THT.
 */
export class VTX_214_015_112 extends Component.withPins({
  "FG": "1",
  "N": "2",
  "L": "3",
  "DC+": "4",
  "DC-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FG: "no_connect", N: "power_in", L: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-015-112";
  override referencePrefix = "U";
}

/**
 * 15V Vigortronix 15W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-015-115`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*015*1xx*.
 * @see http://www.vigortronix.com/15WattSMPSPCBModuleAC-DC
 * Keywords: 15V 15W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-015-1xx_THT.
 */
export class VTX_214_015_115 extends Component.withPins({
  "FG": "1",
  "N": "2",
  "L": "3",
  "DC+": "4",
  "DC-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FG: "no_connect", N: "power_in", L: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-015-115";
  override referencePrefix = "U";
}

/**
 * 18V Vigortronix 15W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-015-118`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*015*1xx*.
 * @see http://www.vigortronix.com/15WattSMPSPCBModuleAC-DC
 * Keywords: 18V 15W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-015-1xx_THT.
 */
export class VTX_214_015_118 extends Component.withPins({
  "FG": "1",
  "N": "2",
  "L": "3",
  "DC+": "4",
  "DC-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FG: "no_connect", N: "power_in", L: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-015-118";
  override referencePrefix = "U";
}

/**
 * 24V Vigortronix 15W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-015-124`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*015*1xx*.
 * @see http://www.vigortronix.com/15WattSMPSPCBModuleAC-DC
 * Keywords: 24V 15W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-015-1xx_THT.
 */
export class VTX_214_015_124 extends Component.withPins({
  "FG": "1",
  "N": "2",
  "L": "3",
  "DC+": "4",
  "DC-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FG: "no_connect", N: "power_in", L: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-015-124";
  override referencePrefix = "U";
}

/**
 * 48V Vigortronix 15W ACDC Converters
 *
 * KiCad symbol: `Converter_ACDC:VTX-214-015-148`. Reference prefix: `U`.
 * Footprint filters: Converter*ACDC*Vigortronix*VTX*214*015*1xx*.
 * @see http://www.vigortronix.com/15WattSMPSPCBModuleAC-DC
 * Keywords: 48V 15W AC-DC module power supply.
 * Default footprint: Converter_ACDC:Converter_ACDC_Vigortronix_VTX-214-015-1xx_THT.
 */
export class VTX_214_015_148 extends Component.withPins({
  "FG": "1",
  "N": "2",
  "L": "3",
  "DC+": "4",
  "DC-": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FG: "no_connect", N: "power_in", L: "power_in", "DC+": "power_out", "DC-": "power_out", ...opts.pinTypes } });
  }
  override schema = "Converter_ACDC:VTX-214-015-148";
  override referencePrefix = "U";
}
