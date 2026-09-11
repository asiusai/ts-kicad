// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Programmable Clock Generator, I2C interface, 1kHz-350MHz, QFN-24
 *
 * KiCad symbol: `Oscillator:5P49V6965`. Reference prefix: `Y`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.renesas.com/us/en/document/dst/5p49v6965-datasheet
 * Keywords: Low-noise PLL Reference Clock.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.8x2.8mm.
 */
export class _5P49V6965 extends Component.withPins({
  "CLKIN": "1",
  "CLKINB": "2",
  "XOUT": "3",
  "XIN/REF": "4",
  "VDDA": "5",
  "CLKSEL": "6",
  "SD/OE": "7",
  "SEL1/SDA": "8",
  "SEL0/SCL": "9",
  "VDDO4": "10",
  "OUT4": "11",
  "OUT4B": "12",
  "OUT3B": "13",
  "OUT3": "14",
  "VDDO3": "15",
  "OUT2B": "16",
  "OUT2": "17",
  "VDDO2": "18",
  "OUT1B": "19",
  "OUT1": "20",
  "VDDO1": "21",
  "VDDD": "22",
  "VDDO0": "23",
  "OUT0_SEL_I2CB": "24",
  "GND": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLKIN: "input", CLKINB: "input", XOUT: "output", "XIN/REF": "input", VDDA: "power_in", CLKSEL: "input", "SD/OE": "input", "SEL1/SDA": "bidirectional", "SEL0/SCL": "input", VDDO4: "power_in", OUT4: "output", OUT4B: "output", OUT3B: "output", OUT3: "output", VDDO3: "power_in", OUT2B: "output", OUT2: "output", VDDO2: "power_in", OUT1B: "output", OUT1: "output", VDDO1: "power_in", VDDD: "power_in", VDDO0: "power_in", OUT0_SEL_I2CB: "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:5P49V6965";
  override referencePrefix = "Y";
}

/**
 * LVCMOS Ultra Low Phase Noise XO / VCXO, Abracon ABLNO
 *
 * KiCad symbol: `Oscillator:ABLNO`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*Abracon*ABLNO*.
 * @see https://abracon.com/Precisiontiming/ABLNO.pdf
 * Keywords: XO VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_Abracon_ABLNO.
 */
export class ABLNO extends Component.withPins({
  "Vctrl": "1",
  "GND": "2",
  "RFout": "3",
  "VDD": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vctrl: "input", GND: "power_in", RFout: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:ABLNO";
  override referencePrefix = "Y";
}

/**
 * HCMOS Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:DGOF5S3`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.conwin.com/datasheets/cx/cx030.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 */
export class DGOF5S3 extends Component.withPins({
  "NC": "1",
  "GND": "7",
  "OUT": "8",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:DGOF5S3";
  override referencePrefix = "Y";
}

/**
 * HCMOS Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:ACO-xxxMHz`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.conwin.com/datasheets/cx/cx030.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 */
export class ACO_xxxMHz extends Component.withPins({
  "NC": "1",
  "GND": "7",
  "OUT": "8",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:ACO-xxxMHz";
  override referencePrefix = "Y";
}

/**
 * HCMOS Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:ACO-xxxMHz-A`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.conwin.com/datasheets/cx/cx030.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 */
export class ACO_xxxMHz_A extends Component.withPins({
  "Tri-State": "1",
  "GND": "7",
  "OUT": "8",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Tri-State": "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:ACO-xxxMHz-A";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, Abracon ASCO
 *
 * KiCad symbol: `Oscillator:ASCO`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*Abracon*ASCO*1.6x1.2mm*.
 * @see https://abracon.com/Oscillators/ASCO.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Abracon_ASCO-4Pin_1.6x1.2mm.
 */
export class ASCO extends Component.withPins({
  "Tri-State": "1",
  "GND": "2",
  "OUT": "3",
  "VDD": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Tri-State": "input", GND: "power_in", OUT: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:ASCO";
  override referencePrefix = "Y";
}

/**
 * 1.8-3.3V SMD Ultra Miniature Crystal Clock Oscillator, Abracon
 *
 * KiCad symbol: `Oscillator:ASDMB-xxxMHz`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Abracon*ASDMB*2.5x2.0mm*.
 * @see https://abracon.com/Oscillators/ASDMB.pdf
 * Keywords: 1.8-3.3V SMD Ultra Miniature Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Abracon_ASDMB-4Pin_2.5x2.0mm.
 */
export class ASDMB_xxxMHz extends Component.withPins({
  "Standby": "1",
  "GND": "2",
  "Out": "3",
  "VDD": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Standby: "input", GND: "power_in", Out: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:ASDMB-xxxMHz";
  override referencePrefix = "Y";
}

/**
 * 3.3V CMOS SMD Crystal Clock Oscillator, Abracon
 *
 * KiCad symbol: `Oscillator:ASE-xxxMHz`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Abracon*ASE*3.2x2.5mm*.
 * @see http://www.abracon.com/Oscillators/ASV.pdf
 * Keywords: 3.3V CMOS SMD Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Abracon_ASE-4Pin_3.2x2.5mm.
 */
export class ASE_xxxMHz extends Component.withPins({
  "EN": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:ASE-xxxMHz";
  override referencePrefix = "Y";
}

/**
 * 3.3V HCMOS SMD Crystal Clock Oscillator, Abracon
 *
 * KiCad symbol: `Oscillator:ASV-xxxMHz`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Abracon*ASV*7.0x5.1mm*.
 * @see http://www.abracon.com/Oscillators/ASV.pdf
 * Keywords: 3.3V HCMOS SMD Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Abracon_ASV-4Pin_7.0x5.1mm.
 */
export class ASV_xxxMHz extends Component.withPins({
  "EN": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:ASV-xxxMHz";
  override referencePrefix = "Y";
}

/**
 * 500kHz-100MHz 5V Crystal Oscillator, IQD CFPS-72
 *
 * KiCad symbol: `Oscillator:CFPS-72`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*IQD*IQXO70*7.5x5.0mm*.
 * @see https://www.iqdfrequencyproducts.com/products/details/cfps-72-14-01.pdf
 * Keywords: XO.
 * Default footprint: Oscillator:Oscillator_SMD_IQD_IQXO70-4Pin_7.5x5.0mm.
 */
export class CFPS_72 extends Component.withPins({
  "EN": "1",
  "GND": "2",
  "Output": "3",
  "+Vs": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", Output: "output", "+Vs": "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:CFPS-72";
  override referencePrefix = "Y";
}

/**
 * Voltage Controlled Oscillator, Crystek, 0.50" SQ SMD
 *
 * KiCad symbol: `Oscillator:CVCO55xx`. Reference prefix: `Y`.
 * Footprint filters: Mini?Circuits*CK605*.
 * @see https://www.crystek.com/home/vco/cvco55.aspx
 * Keywords: VCXO VCO Crystek.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CK605_LandPatternPL-012.
 */
export class CVCO55xx extends Component.withPins({
  "GND_15": "15",
  "GND_16": "16",
  "GND_1": "1",
  "Vtune": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "RFout": "10",
  "GND_11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_15: "passive", GND_16: "passive", GND_1: "power_in", Vtune: "passive", GND_3: "passive", GND_4: "passive", GND_5: "passive", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", RFout: "output", GND_11: "passive", GND_12: "passive", GND_13: "passive", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:CVCO55xx";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:CXO_DIP14`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://cdn-reichelt.de/documents/datenblatt/B400/OSZI.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 */
export class CXO_DIP14 extends Component.withPins({
  "EN": "1",
  "GND": "7",
  "OUT": "8",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:CXO_DIP14";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, DIP8-style metal package
 *
 * KiCad symbol: `Oscillator:CXO_DIP8`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*8*.
 * @see http://cdn-reichelt.de/documents/datenblatt/B400/OSZI.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-8.
 */
export class CXO_DIP8 extends Component.withPins({
  "EN": "1",
  "GND": "4",
  "OUT": "5",
  "Vcc": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:CXO_DIP8";
  override referencePrefix = "Y";
}

/**
 * Temperature compensated Crystal Clock Oscillator
 *
 * KiCad symbol: `Oscillator:DFA-S11`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Fordahl*DFAS11*7.0x5.0mm*.
 * @see http://www.metatech.com.hk/product/fordahl/pdf/2002%20TCXO%20Page%2043-58.pdf
 * Keywords: Temperature compensated Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Fordahl_DFAS11-4Pin_7.0x5.0mm.
 */
export class DFA_S11 extends Component.withPins({
  "Vctrl": "1",
  "GND": "2",
  "OUT": "3",
  "V+": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vctrl: "input", GND: "power_in", OUT: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:DFA-S11";
  override referencePrefix = "Y";
}

/**
 * Temperature compensated Crystal Clock Oscillator
 *
 * KiCad symbol: `Oscillator:DFA-S15`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Fordahl*DFAS15*5.0x3.2mm*.
 * @see http://www.metatech.com.hk/product/fordahl/pdf/2002%20TCXO%20Page%2043-58.pdf
 * Keywords: Temperature compensated Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Fordahl_DFAS15-4Pin_5.0x3.2mm.
 */
export class DFA_S15 extends Component.withPins({
  "Vctrl": "1",
  "GND": "2",
  "OUT": "3",
  "V+": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vctrl: "input", GND: "power_in", OUT: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:DFA-S15";
  override referencePrefix = "Y";
}

/**
 * Temperature compensated Crystal Clock Oscillator
 *
 * KiCad symbol: `Oscillator:DFA-S2`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Fordahl*DFAS2*7.3x5.1mm*.
 * @see http://www.metatech.com.hk/product/fordahl/pdf/2002%20TCXO%20Page%2043-58.pdf
 * Keywords: Temperature compensated Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Fordahl_DFAS2-4Pin_7.3x5.1mm.
 */
export class DFA_S2 extends Component.withPins({
  "Vctrl": "1",
  "GND": "2",
  "OUT": "3",
  "V+": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vctrl: "input", GND: "power_in", OUT: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:DFA-S2";
  override referencePrefix = "Y";
}

/**
 * Temperature compensated Crystal Clock Oscillator
 *
 * KiCad symbol: `Oscillator:DFA-S3`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Fordahl*DFAS3*9.1x7.2mm*.
 * @see http://www.metatech.com.hk/product/fordahl/pdf/2002%20TCXO%20Page%2043-58.pdf
 * Keywords: Temperature compensated Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Fordahl_DFAS3-4Pin_9.1x7.2mm.
 */
export class DFA_S3 extends Component.withPins({
  "Vctrl": "1",
  "GND": "2",
  "OUT": "3",
  "V+": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vctrl: "input", GND: "power_in", OUT: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:DFA-S3";
  override referencePrefix = "Y";
}

/**
 * HCMOS Crystal Clock Oscillator, 2.5x2.0 mm SMD
 *
 * KiCad symbol: `Oscillator:ECS-2520MV-xxx-xx`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*ECS*2520MV*2.5x2.0mm*.
 * @see https://www.ecsxtal.com/store/pdf/ECS-2520MV.pdf
 * Keywords: Crystal Clock Oscillator ECS SMD.
 * Default footprint: Oscillator:Oscillator_SMD_ECS_2520MV-xxx-xx-4Pin_2.5x2.0mm.
 */
export class ECS_2520MV_xxx_xx extends Component.withPins({
  "Tri-State": "1",
  "GND": "2",
  "OUT": "3",
  "VDD": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Tri-State": "input", GND: "power_in", OUT: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:ECS-2520MV-xxx-xx";
  override referencePrefix = "Y";
}

/**
 * HCMOS temperature compensated oscillator
 *
 * KiCad symbol: `Oscillator:FT5HN`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Fox*FT5H*5.0x3.2mm*.
 * @see https://foxonline.com/wp-content/uploads/pdfs/T5HN_T5HV.pdf
 * Keywords: TXCO.
 * Default footprint: Oscillator:Oscillator_SMD_Fox_FT5H_5.0x3.2mm.
 */
export class FT5HN extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "OUT": "3",
  "VDD": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "passive", OUT: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:FT5HN";
  override referencePrefix = "Y";
}

/**
 * HCMOS temperature compensated voltage controlled oscillator
 *
 * KiCad symbol: `Oscillator:FT5HV`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Fox*FT5H*5.0x3.2mm*.
 * @see https://foxonline.com/wp-content/uploads/pdfs/T5HN_T5HV.pdf
 * Keywords: TXCO VCTCXO.
 * Default footprint: Oscillator:Oscillator_SMD_Fox_FT5H_5.0x3.2mm.
 */
export class FT5HV extends Component.withPins({
  "VC": "1",
  "GND": "2",
  "OUT": "3",
  "VDD": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VC: "input", GND: "power_in", OUT: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:FT5HV";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:GTXO-14T`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.golledge.com/pdf/products/tcxos/gtxo14.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 */
export class GTXO_14T extends Component.withPins({
  "EN": "1",
  "GND": "7",
  "OUT": "8",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:GTXO-14T";
  override referencePrefix = "Y";
}

/**
 * Voltage-Controlled Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:OCXO-14`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.petermann-technik.de/fileadmin/petermann/pdf/crystal-oscillators/OCXO-14_PETERMANN-TECHNIK.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 */
export class OCXO_14 extends Component.withPins({
  "Vcontrol": "1",
  "GND": "7",
  "OUT": "8",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcontrol: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:OCXO-14";
  override referencePrefix = "Y";
}

/**
 * Voltage-Controlled Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:GTXO-14V`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.golledge.com/pdf/products/tcxos/gtxo14.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 */
export class GTXO_14V extends Component.withPins({
  "Vcontrol": "1",
  "GND": "7",
  "OUT": "8",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcontrol: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:GTXO-14V";
  override referencePrefix = "Y";
}

/**
 * 3.3 & 5V Stratum 3 Sinewave TCXO, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:GTXO-S14T`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.golledge.com/pdf/products/tcxos/gtxos14.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 */
export class GTXO_S14T extends Component.withPins({
  "NC": "1",
  "GND": "7",
  "OUT": "8",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:GTXO-S14T";
  override referencePrefix = "Y";
}

/**
 * 3.3 & 5V Stratum 3 Sinewave TCXO, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:GTXO-S14V`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.golledge.com/pdf/products/tcxos/gtxos14.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 */
export class GTXO_S14V extends Component.withPins({
  "Vcontrol": "1",
  "GND": "7",
  "OUT": "8",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcontrol: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:GTXO-S14V";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, SMD package 7.5x5.0mm²
 *
 * KiCad symbol: `Oscillator:IQXO-70`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*IQD*IQXO70*7.5x5.0mm*.
 * @see http://www.iqdfrequencyproducts.com/products/details/iqxo-70-11-30.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_IQD_IQXO70-4Pin_7.5x5.0mm.
 */
export class IQXO_70 extends Component.withPins({
  "E/B": "1",
  "GND": "2",
  "OUT": "3",
  "V+": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "E/B": "input", GND: "power_in", OUT: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:IQXO-70";
  override referencePrefix = "Y";
}

/**
 * Voltage Controlled Oscillator, 25 to 47 MHz, Mini-Circuits BK377
 *
 * KiCad symbol: `Oscillator:JTOS-50`. Reference prefix: `Y`.
 * Footprint filters: Mini?Circuits*BK377*.
 * @see https://www.minicircuits.com/pdfs/JTOS-50+.pdf
 * Keywords: VCXO.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_BK377_LandPatternPL-005.
 */
export class JTOS_50 extends Component.withPins({
  "GND_1": "1",
  "VCC": "2",
  "GND_3": "3",
  "GND_4": "4",
  "Vtune": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "RFout": "13",
  "GND_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", VCC: "power_in", GND_3: "passive", GND_4: "passive", Vtune: "input", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", GND_11: "passive", GND_12: "passive", RFout: "output", GND_14: "passive", ...opts.pinTypes } });
  }
  override schema = "Oscillator:JTOS-50";
  override referencePrefix = "Y";
}

/**
 * Voltage Controlled Oscillator, 12.5 to 25 MHz, Mini-Circuits BK377
 *
 * KiCad symbol: `Oscillator:JTOS-25`. Reference prefix: `Y`.
 * Footprint filters: Mini?Circuits*BK377*.
 * @see https://www.minicircuits.com/pdfs/JTOS-25+.pdf
 * Keywords: VCXO.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_BK377_LandPatternPL-005.
 */
export class JTOS_25 extends Component.withPins({
  "GND_1": "1",
  "VCC": "2",
  "GND_3": "3",
  "GND_4": "4",
  "Vtune": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "RFout": "13",
  "GND_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", VCC: "power_in", GND_3: "passive", GND_4: "passive", Vtune: "input", GND_6: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", GND_11: "passive", GND_12: "passive", RFout: "output", GND_14: "passive", ...opts.pinTypes } });
  }
  override schema = "Oscillator:JTOS-25";
  override referencePrefix = "Y";
}

/**
 * 1.8432MHz ~ 125MHz Crystal Oscillator
 *
 * KiCad symbol: `Oscillator:KC2520Z`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Kyocera*KC2520Z*2.5x2.0mm*.
 * @see https://global.kyocera.com/prdct/electro/product/pdf/clock_z_xz_e.pdf
 * Keywords: xo.
 * Default footprint: Oscillator:Oscillator_SMD_Kyocera_KC2520Z-4Pin_2.5x2.0mm.
 */
export class KC2520Z extends Component.withPins({
  "INH": "1",
  "GND": "2",
  "CLK": "3",
  "VCC": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { INH: "input", GND: "power_in", CLK: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:KC2520Z";
  override referencePrefix = "Y";
}

/**
 * 10-60MHz Temperature Compensated Crystal Oscillator, Kyocera 2520
 *
 * KiCad symbol: `Oscillator:KT2520K-T`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Kyocera*2.5x2.0mm*.
 * @see https://global.kyocera.com/prdct/electro/product/pdf/kt2520_e.pdf
 * Keywords: tcxo.
 * Default footprint: Oscillator:Oscillator_SMD_Kyocera_2520-6Pin_2.5x2.0mm.
 */
export class KT2520K_T extends Component.withPins({
  "GND_1": "1",
  "NC_2": "2",
  "GND_3": "3",
  "OUT": "4",
  "NC_5": "5",
  "VCC": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", NC_2: "no_connect", GND_3: "passive", OUT: "output", NC_5: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:KT2520K-T";
  override referencePrefix = "Y";
}

/**
 * 2.7-5.5V 80MHz Precision Fixed Frequency Silicon Oscillator, TSOT-23-5
 *
 * KiCad symbol: `Oscillator:LTC6905xS5-80`. Reference prefix: `Y`.
 * Footprint filters: TSOT?23?5*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6905xfa.pdf
 * Keywords: oscillator fixed frequency divider silicon.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 */
export class LTC6905xS5_80 extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "OE": "3",
  "DIV": "4",
  "OUT": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", OE: "input", DIV: "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Oscillator:LTC6905xS5-80";
  override referencePrefix = "Y";
}

/**
 * 2.7-5.5V 100MHz Precision Fixed Frequency Silicon Oscillator, TSOT-23-5
 *
 * KiCad symbol: `Oscillator:LTC6905xS5-100`. Reference prefix: `Y`.
 * Footprint filters: TSOT?23?5*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6905xfa.pdf
 * Keywords: oscillator fixed frequency divider silicon.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 */
export class LTC6905xS5_100 extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "OE": "3",
  "DIV": "4",
  "OUT": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", OE: "input", DIV: "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Oscillator:LTC6905xS5-100";
  override referencePrefix = "Y";
}

/**
 * 2.7-5.5V 133MHz Precision Fixed Frequency Silicon Oscillator, TSOT-23-5
 *
 * KiCad symbol: `Oscillator:LTC6905xS5-133`. Reference prefix: `Y`.
 * Footprint filters: TSOT?23?5*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6905xfa.pdf
 * Keywords: oscillator fixed frequency divider silicon.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 */
export class LTC6905xS5_133 extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "OE": "3",
  "DIV": "4",
  "OUT": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", OE: "input", DIV: "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Oscillator:LTC6905xS5-133";
  override referencePrefix = "Y";
}

/**
 * 2.7-5.5V 96MHz Precision Fixed Frequency Silicon Oscillator, TSOT-23-5
 *
 * KiCad symbol: `Oscillator:LTC6905xS5-96`. Reference prefix: `Y`.
 * Footprint filters: TSOT?23?5*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6905xfa.pdf
 * Keywords: oscillator fixed frequency divider silicon.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 */
export class LTC6905xS5_96 extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "OE": "3",
  "DIV": "4",
  "OUT": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", OE: "input", DIV: "input", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Oscillator:LTC6905xS5-96";
  override referencePrefix = "Y";
}

/**
 * Silicon Clock Oscillator 8MHz, SC-70-3
 *
 * KiCad symbol: `Oscillator:MAX7375AXR805`. Reference prefix: `Y`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7375.pdf
 * Keywords: Silicon Clock Oscillator 8MHz 8000kHz.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class MAX7375AXR805 extends Component.withPins({
  "V+": "1",
  "CLOCK": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", CLOCK: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:MAX7375AXR805";
  override referencePrefix = "Y";
}

/**
 * Silicon Clock Oscillator 1MHz, SC-70-3
 *
 * KiCad symbol: `Oscillator:MAX7375AXR105`. Reference prefix: `Y`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7375.pdf
 * Keywords: Silicon Clock Oscillator 1MHz 1000kHz.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class MAX7375AXR105 extends Component.withPins({
  "V+": "1",
  "CLOCK": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", CLOCK: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:MAX7375AXR105";
  override referencePrefix = "Y";
}

/**
 * Silicon Clock Oscillator 1.84MHz, SC-70-3
 *
 * KiCad symbol: `Oscillator:MAX7375AXR185`. Reference prefix: `Y`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7375.pdf
 * Keywords: Silicon Clock Oscillator 1,84MHz 1840kHz.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class MAX7375AXR185 extends Component.withPins({
  "V+": "1",
  "CLOCK": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", CLOCK: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:MAX7375AXR185";
  override referencePrefix = "Y";
}

/**
 * Silicon Clock Oscillator 3.58MHz, SC-70-3
 *
 * KiCad symbol: `Oscillator:MAX7375AXR365`. Reference prefix: `Y`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7375.pdf
 * Keywords: Silicon Clock Oscillator 3.58MHz 3580kHz.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class MAX7375AXR365 extends Component.withPins({
  "V+": "1",
  "CLOCK": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", CLOCK: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:MAX7375AXR365";
  override referencePrefix = "Y";
}

/**
 * Silicon Clock Oscillator 3.69MHz, SC-70-3
 *
 * KiCad symbol: `Oscillator:MAX7375AXR375`. Reference prefix: `Y`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7375.pdf
 * Keywords: Silicon Clock Oscillator 3.69MHz 3690kHz.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class MAX7375AXR375 extends Component.withPins({
  "V+": "1",
  "CLOCK": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", CLOCK: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:MAX7375AXR375";
  override referencePrefix = "Y";
}

/**
 * Silicon Clock Oscillator 4MHz, SC-70-3
 *
 * KiCad symbol: `Oscillator:MAX7375AXR405`. Reference prefix: `Y`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7375.pdf
 * Keywords: Silicon Clock Oscillator 4MHz 4000kHz.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class MAX7375AXR405 extends Component.withPins({
  "V+": "1",
  "CLOCK": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", CLOCK: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:MAX7375AXR405";
  override referencePrefix = "Y";
}

/**
 * Silicon Clock Oscillator 4.19MHz, SC-70-3
 *
 * KiCad symbol: `Oscillator:MAX7375AXR425`. Reference prefix: `Y`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7375.pdf
 * Keywords: Silicon Clock Oscillator 4.19MHz 4190kHz.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class MAX7375AXR425 extends Component.withPins({
  "V+": "1",
  "CLOCK": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", CLOCK: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:MAX7375AXR425";
  override referencePrefix = "Y";
}

/**
 * 5/10 MHz Low Phase-Noise Precision OCXO, Morion MV267
 *
 * KiCad symbol: `Oscillator:MV267`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*OCXO*Morion*MV267*.
 * @see http://www.morion.com.ru/catalog_pdf/MV267.pdf
 * Keywords: OCXO.
 * Default footprint: Oscillator:Oscillator_OCXO_Morion_MV267.
 */
export class MV267 extends Component.withPins({
  "Uref": "1",
  "Us": "2",
  "RF": "3",
  "GND": "4",
  "Uin": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Uref: "output", Us: "power_in", RF: "output", GND: "power_in", Uin: "input", ...opts.pinTypes } });
  }
  override schema = "Oscillator:MV267";
  override referencePrefix = "Y";
}

/**
 * 60, 80, 100, 120 & 122.76 MHz OCXO, Morion MV317
 *
 * KiCad symbol: `Oscillator:MV317`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*OCXO*Morion*MV317*.
 * @see https://www.morion-us.com/catalog_pdf/mv317.pdf
 * Keywords: OCXO.
 * Default footprint: Oscillator:Oscillator_OCXO_Morion_MV317.
 */
export class MV317 extends Component.withPins({
  "Uref": "1",
  "Us": "2",
  "RF": "3",
  "GND": "4",
  "Uin": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Uref: "output", Us: "power_in", RF: "output", GND: "power_in", Uin: "input", ...opts.pinTypes } });
  }
  override schema = "Oscillator:MV317";
  override referencePrefix = "Y";
}

/**
 * 3.3V / 5.0V 14 MHz to 190 MHz PLL Clock Multiplier, SOIC-8
 *
 * KiCad symbol: `Oscillator:NB3N502`. Reference prefix: `Y`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/NB3N502-D.PDF
 * Keywords: oscillator clock multiplier PLL.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NB3N502 extends Component.withPins({
  "X1/CLK": "1",
  "VDD": "2",
  "GND": "3",
  "REF": "4",
  "CLKOUT": "5",
  "S0": "6",
  "S1": "7",
  "X2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "X1/CLK": "input", VDD: "power_in", GND: "power_in", REF: "output", CLKOUT: "output", S0: "input", S1: "input", X2: "output", ...opts.pinTypes } });
  }
  override schema = "Oscillator:NB3N502";
  override referencePrefix = "Y";
}

/**
 * 3.3V / 5.0V 14 MHz to 200 MHz PLL Clock Multiplier, SOIC-8
 *
 * KiCad symbol: `Oscillator:NB3N511`. Reference prefix: `Y`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/NB3N511-D.PDF
 * Keywords: oscillator clock multiplier PLL.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class NB3N511 extends Component.withPins({
  "X1/ICLK": "1",
  "VDD": "2",
  "GND": "3",
  "S1": "4",
  "CLKOUT": "5",
  "S0": "6",
  "OE": "7",
  "X2": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "X1/ICLK": "input", VDD: "power_in", GND: "power_in", S1: "input", CLKOUT: "output", S0: "input", OE: "input", X2: "passive", ...opts.pinTypes } });
  }
  override schema = "Oscillator:NB3N511";
  override referencePrefix = "Y";
}

/**
 * 100MHz Sinewave output OCXO, low phase-noise, high stability, Connor-Winfield OH300
 *
 * KiCad symbol: `Oscillator:OH300`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*OH300*.
 * @see http://www.conwin.com/datasheets/cx/cx282.pdf
 * Keywords: OCXO.
 * Default footprint: Oscillator:Oscillator_SMD_OCXO_ConnorWinfield_OH300.
 */
export class OH300 extends Component.withPins({
  "Vcontrol": "1",
  "NC_2": "2",
  "VCC": "3",
  "OUT": "4",
  "NC_5": "5",
  "NC_6": "6",
  "GND": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcontrol: "input", NC_2: "no_connect", VCC: "power_in", OUT: "output", NC_5: "no_connect", NC_6: "no_connect", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:OH300";
  override referencePrefix = "Y";
}

/**
 * Crystal Oscillator Low Profile / High Stability SPXO
 *
 * KiCad symbol: `Oscillator:SG-210SED`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG210*2.5x2.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-210SED
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG210-4Pin_2.5x2.0mm.
 */
export class SG_210SED extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-210SED";
  override referencePrefix = "Y";
}

/**
 * Crystal Oscillator Low Profile / High Stability SPXO
 *
 * KiCad symbol: `Oscillator:SG-210SCD`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG210*2.5x2.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-210SED
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG210-4Pin_2.5x2.0mm.
 */
export class SG_210SCD extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-210SCD";
  override referencePrefix = "Y";
}

/**
 * Crystal Oscillator Low Profile / High Stability SPXO
 *
 * KiCad symbol: `Oscillator:SG-210SDD`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG210*2.5x2.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-210SED
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG210-4Pin_2.5x2.0mm.
 */
export class SG_210SDD extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-210SDD";
  override referencePrefix = "Y";
}

/**
 * CMOS Crystal Oscillator SPXO
 *
 * KiCad symbol: `Oscillator:SG-210STF`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG210*2.5x2.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-210STF
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG210-4Pin_2.5x2.0mm.
 */
export class SG_210STF extends Component.withPins({
  "~{ST}": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{ST}": "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-210STF";
  override referencePrefix = "Y";
}

/**
 * CMOS Crystal Oscillator SPXO
 *
 * KiCad symbol: `Oscillator:SG-211`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG210*2.5x2.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-211SEE
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG210-4Pin_2.5x2.0mm.
 */
export class SG_211 extends Component.withPins({
  "~{ST}": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{ST}": "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-211";
  override referencePrefix = "Y";
}

/**
 * 32.768kHz Crystal Oscillator (SPXO)
 *
 * KiCad symbol: `Oscillator:SG-3030CM`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG3030CM*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-3030CM
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG3030CM.
 */
export class SG_3030CM extends Component.withPins({
  "VIO": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VIO: "power_in", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-3030CM";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 1 to 75 MHz
 *
 * KiCad symbol: `Oscillator:SG-5032CAN`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002LB*5.0x3.2mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG5032CAN&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002LB-4Pin_5.0x3.2mm.
 */
export class SG_5032CAN extends Component.withPins({
  "~{ST}": "1",
  "GND": "2",
  "OUT": "3",
  "VCC": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{ST}": "input", GND: "power_in", OUT: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-5032CAN";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 80 to 170 MHz
 *
 * KiCad symbol: `Oscillator:SG-5032CBN`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002LB*5.0x3.2mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG5032CBN&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002LB-4Pin_5.0x3.2mm.
 */
export class SG_5032CBN extends Component.withPins({
  "~{ST}": "1",
  "GND": "2",
  "OUT": "3",
  "VCC": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{ST}": "input", GND: "power_in", OUT: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-5032CBN";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 1 to 125 MHz
 *
 * KiCad symbol: `Oscillator:SG-8002LB`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002LB*5.0x3.2mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG-8002LB&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002LB-4Pin_5.0x3.2mm.
 */
export class SG_8002LB extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-8002LB";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 2.5 to 50 MHz
 *
 * KiCad symbol: `Oscillator:SG-5032CCN`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002LB*5.0x3.2mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG5032CCN&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002LB-4Pin_5.0x3.2mm.
 */
export class SG_5032CCN extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-5032CCN";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, DIP14-style plastic package
 *
 * KiCad symbol: `Oscillator:SG-8002DB`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SeikoEpson*SG?8002DB*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG-8002DB&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SeikoEpson_SG-8002DB.
 */
export class SG_8002DB extends Component.withPins({
  "OE": "1",
  "GND": "7",
  "OUT": "8",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-8002DB";
  override referencePrefix = "Y";
}

/**
 * CMOS Crystal Clock Oscillator, DIP14-style plastic package
 *
 * KiCad symbol: `Oscillator:SG-51`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SeikoEpson*SG?8002DB*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-51P
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SeikoEpson_SG-8002DB.
 */
export class SG_51 extends Component.withPins({
  "OE": "1",
  "GND": "7",
  "OUT": "8",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-51";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, DIP8-style plastic package
 *
 * KiCad symbol: `Oscillator:SG-8002DC`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SeikoEpson*SG?8002DC*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-8002DC
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SeikoEpson_SG-8002DC.
 */
export class SG_8002DC extends Component.withPins({
  "OE": "1",
  "GND": "4",
  "OUT": "5",
  "Vcc": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-8002DC";
  override referencePrefix = "Y";
}

/**
 * CMOS Crystal Clock Oscillator, DIP8-style plastic package
 *
 * KiCad symbol: `Oscillator:SG-531`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SeikoEpson*SG?8002DC*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-51P
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SeikoEpson_SG-8002DC.
 */
export class SG_531 extends Component.withPins({
  "OE": "1",
  "GND": "4",
  "OUT": "5",
  "Vcc": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-531";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator
 *
 * KiCad symbol: `Oscillator:SG-8002JA`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002JA*14.0x8.7mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-8002DC
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002JA-4Pin_14.0x8.7mm.
 */
export class SG_8002JA extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-8002JA";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator
 *
 * KiCad symbol: `Oscillator:SG-615`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002JA*14.0x8.7mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-51P
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002JA-4Pin_14.0x8.7mm.
 */
export class SG_615 extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-615";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 1 to 75 MHz
 *
 * KiCad symbol: `Oscillator:SG-7050CAN`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002CA*7.0x5.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG7050CAN&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002CA-4Pin_7.0x5.0mm.
 */
export class SG_7050CAN extends Component.withPins({
  "~{ST}": "1",
  "GND": "2",
  "OUT": "3",
  "VCC": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{ST}": "input", GND: "power_in", OUT: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-7050CAN";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 80 to 170 MHz
 *
 * KiCad symbol: `Oscillator:SG-7050CBN`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002CA*7.0x5.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG7050CBN&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002CA-4Pin_7.0x5.0mm.
 */
export class SG_7050CBN extends Component.withPins({
  "~{ST}": "1",
  "GND": "2",
  "OUT": "3",
  "VCC": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{ST}": "input", GND: "power_in", OUT: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-7050CBN";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 1 to 125 MHz
 *
 * KiCad symbol: `Oscillator:SG-8002CA`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002CA*7.0x5.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-8002DC
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002CA-4Pin_7.0x5.0mm.
 */
export class SG_8002CA extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-8002CA";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 2.5 to 50 MHz
 *
 * KiCad symbol: `Oscillator:SG-7050CCN`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002CA*7.0x5.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG7050CAN&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002CA-4Pin_7.0x5.0mm.
 */
export class SG_7050CCN extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-7050CCN";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator
 *
 * KiCad symbol: `Oscillator:SG-8002CE`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002CE*3.2x2.5mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-8002DC
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002CE-4Pin_3.2x2.5mm.
 */
export class SG_8002CE extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-8002CE";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator
 *
 * KiCad symbol: `Oscillator:SG-8002JC`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002JC*10.5x5.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-8002DC
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002JC-4Pin_10.5x5.0mm.
 */
export class SG_8002JC extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SG-8002JC";
  override referencePrefix = "Y";
}

/**
 * Dual frequency crystal oscillator (XO) 100 kHz to 250 MHz, Single-ended CMOS output
 *
 * KiCad symbol: `Oscillator:Si512A_2.5x3.2mm`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Silicon*Labs*LGA*2.5x3.2mm*P1.25mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/si512-13.pdf
 * Keywords: Dual frequency crystal oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Silicon_Labs_LGA-6_2.5x3.2mm_P1.25mm.
 */
export class Si512A_2_5x3_2mm extends Component.withPins({
  "FS": "1",
  "OE": "2",
  "GND": "3",
  "CLK": "4",
  "NC": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FS: "input", OE: "input", GND: "power_in", CLK: "output", NC: "no_connect", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:Si512A_2.5x3.2mm";
  override referencePrefix = "Y";
}

/**
 * Dual frequency crystal oscillator (XO) 100 kHz to 250 MHz, Single-ended CMOS output
 *
 * KiCad symbol: `Oscillator:Si513A_2.5x3.2mm`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Silicon*Labs*LGA*2.5x3.2mm*P1.25mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/si512-13.pdf
 * Keywords: Dual frequency crystal oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Silicon_Labs_LGA-6_2.5x3.2mm_P1.25mm.
 */
export class Si513A_2_5x3_2mm extends Component.withPins({
  "OE": "1",
  "FS": "2",
  "GND": "3",
  "CLK": "4",
  "NC": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", FS: "input", GND: "power_in", CLK: "output", NC: "no_connect", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:Si513A_2.5x3.2mm";
  override referencePrefix = "Y";
}

/**
 * I2C Programmable Any-Frequency CMOS Clock Generator, QFN-20
 *
 * KiCad symbol: `Oscillator:Si5351A-B-GM`. Reference prefix: `Y`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf
 * Keywords: CMOS Synth Oscillator I2C.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 */
export class Si5351A_B_GM extends Component.withPins({
  "XA": "1",
  "XB": "2",
  "A0": "3",
  "SCL": "4",
  "SDA": "5",
  "SSEN": "6",
  "OEB": "7",
  "CLK3": "8",
  "CLK2": "9",
  "VDDOB": "10",
  "VDDOA": "11",
  "CLK1": "12",
  "CLK0": "13",
  "VDDOD": "14",
  "CLK7": "15",
  "CLK6": "16",
  "CLK5": "17",
  "VDDOC": "18",
  "CLK4": "19",
  "VDD": "20",
  "GND": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { XA: "input", XB: "input", A0: "input", SCL: "input", SDA: "bidirectional", SSEN: "input", OEB: "input", CLK3: "output", CLK2: "output", VDDOB: "power_in", VDDOA: "power_in", CLK1: "output", CLK0: "output", VDDOD: "power_in", CLK7: "output", CLK6: "output", CLK5: "output", VDDOC: "power_in", CLK4: "output", VDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:Si5351A-B-GM";
  override referencePrefix = "Y";
}

/**
 * I2C Programmable Any-Frequency CMOS Clock Generator, MSOP-10
 *
 * KiCad symbol: `Oscillator:Si5351A-B-GT`. Reference prefix: `Y`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf
 * Keywords: CMOS Synth Oscillator I2C.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class Si5351A_B_GT extends Component.withPins({
  "VDD": "1",
  "XA": "2",
  "XB": "3",
  "SCL": "4",
  "SDA": "5",
  "CLK2": "6",
  "VDDO": "7",
  "GND": "8",
  "CLK1": "9",
  "CLK0": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", XA: "input", XB: "input", SCL: "input", SDA: "bidirectional", CLK2: "output", VDDO: "power_in", GND: "power_in", CLK1: "output", CLK0: "output", ...opts.pinTypes } });
  }
  override schema = "Oscillator:Si5351A-B-GT";
  override referencePrefix = "Y";
}

/**
 * I2C Programmable Any-Frequency CMOS Clock Generator + VCXO, QFN-20
 *
 * KiCad symbol: `Oscillator:Si5351B-B-GM`. Reference prefix: `Y`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf
 * Keywords: CMOS Synth Oscillator I2C VCXO.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 */
export class Si5351B_B_GM extends Component.withPins({
  "XA": "1",
  "XB": "2",
  "VC": "3",
  "SCL": "4",
  "SDA": "5",
  "SSEN": "6",
  "OEB": "7",
  "CLK3": "8",
  "CLK2": "9",
  "VDDOB": "10",
  "VDDOA": "11",
  "CLK1": "12",
  "CLK0": "13",
  "VDDOD": "14",
  "CLK7": "15",
  "CLK6": "16",
  "CLK5": "17",
  "VDDOC": "18",
  "CLK4": "19",
  "VDD": "20",
  "GND": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { XA: "input", XB: "input", VC: "input", SCL: "input", SDA: "bidirectional", SSEN: "input", OEB: "input", CLK3: "output", CLK2: "output", VDDOB: "power_in", VDDOA: "power_in", CLK1: "output", CLK0: "output", VDDOD: "power_in", CLK7: "output", CLK6: "output", CLK5: "output", VDDOC: "power_in", CLK4: "output", VDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:Si5351B-B-GM";
  override referencePrefix = "Y";
}

/**
 * I2C Programmable Any-Frequency CMOS Clock Generator, QFN-20
 *
 * KiCad symbol: `Oscillator:Si5351C-B-GM`. Reference prefix: `Y`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf
 * Keywords: CMOS Synth Oscillator I2C.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 */
export class Si5351C_B_GM extends Component.withPins({
  "XA": "1",
  "XB": "2",
  "INTR": "3",
  "SCL": "4",
  "SDA": "5",
  "CLKIN": "6",
  "OEB": "7",
  "CLK3": "8",
  "CLK2": "9",
  "VDDOB": "10",
  "VDDOA": "11",
  "CLK1": "12",
  "CLK0": "13",
  "VDDOD": "14",
  "CLK7": "15",
  "CLK6": "16",
  "CLK5": "17",
  "VDDOC": "18",
  "CLK4": "19",
  "VDD": "20",
  "GND": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { XA: "input", XB: "input", INTR: "output", SCL: "input", SDA: "bidirectional", CLKIN: "input", OEB: "input", CLK3: "output", CLK2: "output", VDDOB: "power_in", VDDOA: "power_in", CLK1: "output", CLK0: "output", VDDOD: "power_in", CLK7: "output", CLK6: "output", CLK5: "output", VDDOC: "power_in", CLK4: "output", VDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:Si5351C-B-GM";
  override referencePrefix = "Y";
}

/**
 * 10 MHZ TO 1.4 GHZ I2C PROGRAMMABLE XO/VCXO
 *
 * KiCad symbol: `Oscillator:Si570`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SI570*SI571*.
 * @see http://www.silabs.com/Support%20Documents/TechnicalDocs/si570.pdf
 * Keywords: 10 MHZ TO 1.4 GHZ I2C PROGRAMMABLE XO/VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_SI570_SI571_Standard.
 */
export class Si570 extends Component.withPins({
  "NC": "1",
  "OE": "2",
  "GND": "3",
  "CLK+": "4",
  "CLK-": "5",
  "Vcc": "6",
  "SDA": "7",
  "SCL": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", OE: "input", GND: "power_in", "CLK+": "output", "CLK-": "output", Vcc: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Oscillator:Si570";
  override referencePrefix = "Y";
}

/**
 * 10 MHZ TO 1.4 GHZ I2C PROGRAMMABLE XO/VCXO
 *
 * KiCad symbol: `Oscillator:Si571`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SI570*SI571*.
 * @see http://www.silabs.com/Support%20Documents/TechnicalDocs/si570.pdf
 * Keywords: 10 MHZ TO 1.4 GHZ I2C PROGRAMMABLE XO/VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_SI570_SI571_Standard.
 */
export class Si571 extends Component.withPins({
  "Vc": "1",
  "OE": "2",
  "GND": "3",
  "CLK+": "4",
  "CLK-": "5",
  "Vcc": "6",
  "SDA": "7",
  "SCL": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vc: "input", OE: "input", GND: "power_in", "CLK+": "output", "CLK-": "output", Vcc: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Oscillator:Si571";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 2.0x1.6mm (with output enable pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-7x-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*2.0x1.6mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_2.0x1.6mm.
 */
export class SiT8008xx_7x_xxE extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-7x-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 2.5x2.0mm (with output enable pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-1x-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*2.5x2.0mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_2.5x2.0mm.
 */
export class SiT8008xx_1x_xxE extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-1x-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 2.0x1.6mm (with NC pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-7x-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*2.0x1.6mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_2.0x1.6mm.
 */
export class SiT8008xx_7x_xxN extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-7x-xxN";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 2.5x2.0mm (with NC pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-1x-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*2.5x2.0mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_2.5x2.0mm.
 */
export class SiT8008xx_1x_xxN extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-1x-xxN";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 2.0x1.6mm (with standby pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-7x-xxS`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*2.0x1.6mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_2.0x1.6mm.
 */
export class SiT8008xx_7x_xxS extends Component.withPins({
  "~{ST}": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{ST}": "input", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-7x-xxS";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 2.5x2.0mm (with standby pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-1x-xxS`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*2.5x2.0mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_2.5x2.0mm.
 */
export class SiT8008xx_1x_xxS extends Component.withPins({
  "~{ST}": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{ST}": "input", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-1x-xxS";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 3.2x2.5mm (with output enable pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-2x-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*3.2x2.5mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_3.2x2.5mm.
 */
export class SiT8008xx_2x_xxE extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-2x-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 3.2x2.5mm (with NC pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-2x-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*3.2x2.5mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_3.2x2.5mm.
 */
export class SiT8008xx_2x_xxN extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-2x-xxN";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 3.2x2.5mm (with standby pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-2x-xxS`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*3.2x2.5mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_3.2x2.5mm.
 */
export class SiT8008xx_2x_xxS extends Component.withPins({
  "~{ST}": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{ST}": "input", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-2x-xxS";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 5.0x3.2mm (with output enable pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-3x-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*5.0x3.2mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_5.0x3.2mm.
 */
export class SiT8008xx_3x_xxE extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-3x-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 5.0x3.2mm (with NC pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-3x-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*5.0x3.2mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_5.0x3.2mm.
 */
export class SiT8008xx_3x_xxN extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-3x-xxN";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 5.0x3.2mm (with standby pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-3x-xxS`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*5.0x3.2mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_5.0x3.2mm.
 */
export class SiT8008xx_3x_xxS extends Component.withPins({
  "~{ST}": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{ST}": "input", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-3x-xxS";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 7.0x5.0mm (with output enable pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-8x-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*7.0x5.0mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_7.0x5.0mm.
 */
export class SiT8008xx_8x_xxE extends Component.withPins({
  "OE": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-8x-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 7.0x5.0mm (with NC pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-8x-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*7.0x5.0mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_7.0x5.0mm.
 */
export class SiT8008xx_8x_xxN extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-8x-xxN";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 7.0x5.0mm (with standby pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-8x-xxS`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*7.0x5.0mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_7.0x5.0mm.
 */
export class SiT8008xx_8x_xxS extends Component.withPins({
  "~{ST}": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{ST}": "input", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT8008xx-8x-xxS";
  override referencePrefix = "Y";
}

/**
 * SiTime Standard Frequency Ultra-low Jitter Differential Oscillator, 25-325MHz, PQFD-6, 3.2x2.5mm (with enable pin)
 *
 * KiCad symbol: `Oscillator:SiT9365xx-xBx-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFD*3.2x2.5mm*.
 * @see https://www.sitime.com/datasheet/SiT9365
 * Keywords: LVDS LVPECL HCSL differential MEMS oscillatior.
 * Default footprint: Oscillator:Oscillator_SMD_SiTime_PQFD-6L_3.2x2.5mm.
 */
export class SiT9365xx_xBx_xxE extends Component.withPins({
  "OE": "1",
  "NC": "2",
  "GND": "3",
  "OUT+": "4",
  "OUT-": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", NC: "no_connect", GND: "power_in", "OUT+": "output", "OUT-": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT9365xx-xBx-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Standard Frequency Ultra-low Jitter Differential Oscillator, 25-325MHz, PQFD-6, 3.2x2.5mm
 *
 * KiCad symbol: `Oscillator:SiT9365xx-xBx-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFD*3.2x2.5mm*.
 * @see https://www.sitime.com/datasheet/SiT9365
 * Keywords: LVDS LVPECL HCSL differential MEMS oscillatior.
 * Default footprint: Oscillator:Oscillator_SMD_SiTime_PQFD-6L_3.2x2.5mm.
 */
export class SiT9365xx_xBx_xxN extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "GND": "3",
  "OUT+": "4",
  "OUT-": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", GND: "power_in", "OUT+": "output", "OUT-": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT9365xx-xBx-xxN";
  override referencePrefix = "Y";
}

/**
 * SiTime Standard Frequency Ultra-low Jitter Differential Oscillator, 1 MHz and 220MHz, PQFD-6, 3.2x2.5mm (with enable pin)
 *
 * KiCad symbol: `Oscillator:SiT9366xx-xBx-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFD*3.2x2.5mm*.
 * @see https://www.sitime.com/datasheet/SiT9366
 * Keywords: LVDS LVPECL HCSL differential MEMS oscillatior.
 * Default footprint: Oscillator:Oscillator_SMD_SiTime_PQFD-6L_3.2x2.5mm.
 */
export class SiT9366xx_xBx_xxE extends Component.withPins({
  "OE": "1",
  "NC": "2",
  "GND": "3",
  "OUT+": "4",
  "OUT-": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", NC: "no_connect", GND: "power_in", "OUT+": "output", "OUT-": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT9366xx-xBx-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Standard Frequency Ultra-low Jitter Differential Oscillator, 1 MHz and 220MHz, PQFD-6, 3.2x2.5mm
 *
 * KiCad symbol: `Oscillator:SiT9366xx-xBx-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFD*3.2x2.5mm*.
 * @see https://www.sitime.com/datasheet/SiT9366
 * Keywords: LVDS LVPECL HCSL differential MEMS oscillatior.
 * Default footprint: Oscillator:Oscillator_SMD_SiTime_PQFD-6L_3.2x2.5mm.
 */
export class SiT9366xx_xBx_xxN extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "GND": "3",
  "OUT+": "4",
  "OUT-": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", GND: "power_in", "OUT+": "output", "OUT-": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT9366xx-xBx-xxN";
  override referencePrefix = "Y";
}

/**
 * SiTime Standard Frequency Ultra-low Jitter Differential Oscillator, 220.000001-725MHz, PQFD-6, 3.2x2.5mm (with enable pin)
 *
 * KiCad symbol: `Oscillator:SiT9367xx-xBx-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFD*3.2x2.5mm*.
 * @see https://www.sitime.com/datasheet/SiT9367
 * Keywords: LVDS LVPECL HCSL differential MEMS oscillatior.
 * Default footprint: Oscillator:Oscillator_SMD_SiTime_PQFD-6L_3.2x2.5mm.
 */
export class SiT9367xx_xBx_xxE extends Component.withPins({
  "OE": "1",
  "NC": "2",
  "GND": "3",
  "OUT+": "4",
  "OUT-": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { OE: "input", NC: "no_connect", GND: "power_in", "OUT+": "output", "OUT-": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT9367xx-xBx-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Standard Frequency Ultra-low Jitter Differential Oscillator, 220.000001-725MHz, PQFD-6, 3.2x2.5mm
 *
 * KiCad symbol: `Oscillator:SiT9367xx-xBx-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFD*3.2x2.5mm*.
 * @see https://www.sitime.com/datasheet/SiT9367
 * Keywords: LVDS LVPECL HCSL differential MEMS oscillatior.
 * Default footprint: Oscillator:Oscillator_SMD_SiTime_PQFD-6L_3.2x2.5mm.
 */
export class SiT9367xx_xBx_xxN extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "GND": "3",
  "OUT+": "4",
  "OUT-": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", GND: "power_in", "OUT+": "output", "OUT-": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:SiT9367xx-xBx-xxN";
  override referencePrefix = "Y";
}

/**
 * Temperature Compensated Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:TCXO-14`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.golledge.com/pdf/products/tcxos/gtxos14.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 */
export class TCXO_14 extends Component.withPins({
  "NC": "1",
  "GND": "7",
  "OUT": "8",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:TCXO-14";
  override referencePrefix = "Y";
}

/**
 * Temperature compensated crystal oscillator
 *
 * KiCad symbol: `Oscillator:TCXO3`. Reference prefix: `Y`.
 * @see http://www.hcelectronics.cz/PDF/TCXO3_A.pdf
 * Keywords: Temperature compensated crystal oscillator.
 */
export class TCXO3 extends Component.withPins({
  "FREQ": "1",
  "NC_2": "2",
  "URef": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "NC_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "NC_13": "13",
  "NC_14": "14",
  "+5V": "15",
  "NC_16": "16",
  "NC_17": "17",
  "Vctrl": "18",
  "NC_19": "19",
  "NC_20": "20",
  "NC_21": "21",
  "NC_22": "22",
  "GND_23": "23",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { FREQ: "output", NC_2: "no_connect", URef: "power_out", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", NC_9: "no_connect", GND_10: "power_in", GND_11: "power_in", GND_12: "power_in", NC_13: "no_connect", NC_14: "no_connect", "+5V": "power_in", NC_16: "no_connect", NC_17: "no_connect", Vctrl: "input", NC_19: "no_connect", NC_20: "no_connect", NC_21: "no_connect", NC_22: "no_connect", GND_23: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:TCXO3";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, DIP8-style metal package
 *
 * KiCad symbol: `Oscillator:TFT660`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*8*.
 * @see http://cdn-reichelt.de/documents/datenblatt/B400/OSZI.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-8.
 */
export class TFT660 extends Component.withPins({
  "EN": "1",
  "GND": "4",
  "OUT": "5",
  "Vcc": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:TFT660";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:TFT680`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://cdn-reichelt.de/documents/datenblatt/B400/OSZI.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 */
export class TFT680 extends Component.withPins({
  "EN": "1",
  "GND": "7",
  "OUT": "8",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:TFT680";
  override referencePrefix = "Y";
}

/**
 * Crystal Oscillator Low Profile / High Stability TCXO
 *
 * KiCad symbol: `Oscillator:TG2520SMN-xx.xxxxxxMhz-xxxxNM`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*TG2520*2.5x2.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=app_TG2520SMN&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_TG2520SMN-xxx-xxxxxx-4Pin_2.5x2.0mm.
 */
export class TG2520SMN_xx_xxxxxxMhz_xxxxNM extends Component.withPins({
  "NC": "1",
  "GND": "2",
  "OUT": "3",
  "Vcc": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:TG2520SMN-xx.xxxxxxMhz-xxxxNM";
  override referencePrefix = "Y";
}

/**
 * CMOS SMD Crystal Clock Oscillator, TXC
 *
 * KiCad symbol: `Oscillator:TXC-7C`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*TXC*7C*5.0x3.2mm*.
 * @see http://www.txccorp.com/download/products/osc/7C_o.pdf
 * Keywords: CMOS SMD Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_TXC_7C-4Pin_5.0x3.2mm.
 */
export class TXC_7C extends Component.withPins({
  "EN": "1",
  "GND": "2",
  "OUT": "3",
  "Vdd": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", OUT: "output", Vdd: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:TXC-7C";
  override referencePrefix = "Y";
}

/**
 * Voltage-Controlled Crystal Clock Oscillator, DIP8-style metal package
 *
 * KiCad symbol: `Oscillator:VC-81`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*8*.
 * @see http://www.scsiglobal.com/Hosonic/Documents/SCSI-VC-81&83.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-8.
 */
export class VC_81 extends Component.withPins({
  "Vcontrol": "1",
  "GND": "4",
  "OUT": "5",
  "Vcc": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcontrol: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:VC-81";
  override referencePrefix = "Y";
}

/**
 * Voltage-Controlled Crystal Clock Oscillator, DIP8-style metal package
 *
 * KiCad symbol: `Oscillator:VC-83`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*8*.
 * @see http://www.scsiglobal.com/Hosonic/Documents/SCSI-VC-81&83.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-8.
 */
export class VC_83 extends Component.withPins({
  "Vcontrol": "1",
  "GND": "4",
  "OUT": "5",
  "Vcc": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcontrol: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:VC-83";
  override referencePrefix = "Y";
}

/**
 * Voltage-Controlled Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:VTCXO-14`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.golledge.com/pdf/products/tcxos/gtxos14.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 */
export class VTCXO_14 extends Component.withPins({
  "Vcontrol": "1",
  "GND": "7",
  "OUT": "8",
  "Vcc": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcontrol: "input", GND: "power_in", OUT: "output", Vcc: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:VTCXO-14";
  override referencePrefix = "Y";
}

/**
 * HCMOS Clock Oscillator
 *
 * KiCad symbol: `Oscillator:XO32`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*EuroQuartz*XO32*3.2x2.5mm*.
 * @see http://cdn-reichelt.de/documents/datenblatt/B400/XO32.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_EuroQuartz_XO32-4Pin_3.2x2.5mm.
 */
export class XO32 extends Component.withPins({
  "EN": "1",
  "GND": "2",
  "OUT": "3",
  "V+": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", OUT: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XO32";
  override referencePrefix = "Y";
}

/**
 * Low Power Consumption Clock Oscillator
 *
 * KiCad symbol: `Oscillator:XO53`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*EuroQuartz*XO53*5.0x3.2mm*.
 * @see http://cdn-reichelt.de/documents/datenblatt/B400/XO53.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_EuroQuartz_XO53-4Pin_5.0x3.2mm.
 */
export class XO53 extends Component.withPins({
  "EN": "1",
  "GND": "2",
  "OUT": "3",
  "V+": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", OUT: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XO53";
  override referencePrefix = "Y";
}

/**
 * HCMOS Clock Oscillator
 *
 * KiCad symbol: `Oscillator:XO91`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*EuroQuartz*XO91*7.0x5.0mm*.
 * @see http://cdn-reichelt.de/documents/datenblatt/B400/XO91.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_EuroQuartz_XO91-4Pin_7.0x5.0mm.
 */
export class XO91 extends Component.withPins({
  "EN": "1",
  "GND": "2",
  "OUT": "3",
  "V+": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EN: "input", GND: "power_in", OUT: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XO91";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUX51`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JS6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 1.8V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JS6-6_5.0x3.2mm_P1.27mm.
 */
export class XUX51 extends Component.withPins({
  "E/D": "1",
  "NC": "2",
  "GND": "3",
  "OUT": "4",
  "OUT2": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "E/D": "input", NC: "no_connect", GND: "power_in", OUT: "output", OUT2: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XUX51";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUX52`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JS6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 2.5V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JS6-6_5.0x3.2mm_P1.27mm.
 */
export class XUX52 extends Component.withPins({
  "E/D": "1",
  "NC": "2",
  "GND": "3",
  "OUT": "4",
  "OUT2": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "E/D": "input", NC: "no_connect", GND: "power_in", OUT: "output", OUT2: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XUX52";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUX53`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JS6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 3.3V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JS6-6_5.0x3.2mm_P1.27mm.
 */
export class XUX53 extends Component.withPins({
  "E/D": "1",
  "NC": "2",
  "GND": "3",
  "OUT": "4",
  "OUT2": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "E/D": "input", NC: "no_connect", GND: "power_in", OUT: "output", OUT2: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XUX53";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUX71`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JU6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 1.8V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JU6-6_7.0x5.0mm_P2.54mm.
 */
export class XUX71 extends Component.withPins({
  "E/D": "1",
  "NC": "2",
  "GND": "3",
  "OUT": "4",
  "OUT2": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "E/D": "input", NC: "no_connect", GND: "power_in", OUT: "output", OUT2: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XUX71";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUX72`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JU6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 2.5V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JU6-6_7.0x5.0mm_P2.54mm.
 */
export class XUX72 extends Component.withPins({
  "E/D": "1",
  "NC": "2",
  "GND": "3",
  "OUT": "4",
  "OUT2": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "E/D": "input", NC: "no_connect", GND: "power_in", OUT: "output", OUT2: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XUX72";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUX73`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JU6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 3.3V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JU6-6_7.0x5.0mm_P2.54mm.
 */
export class XUX73 extends Component.withPins({
  "E/D": "1",
  "NC": "2",
  "GND": "3",
  "OUT": "4",
  "OUT2": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "E/D": "input", NC: "no_connect", GND: "power_in", OUT: "output", OUT2: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XUX73";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUY51`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JS6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP HCMOS 1.8V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JS6-6_5.0x3.2mm_P1.27mm.
 */
export class XUY51 extends Component.withPins({
  "NC": "1",
  "E/D": "2",
  "GND": "3",
  "OUT": "4",
  "OUT2": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "E/D": "input", GND: "power_in", OUT: "output", OUT2: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XUY51";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUY52`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JS6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 2.5V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JS6-6_5.0x3.2mm_P1.27mm.
 */
export class XUY52 extends Component.withPins({
  "NC": "1",
  "E/D": "2",
  "GND": "3",
  "OUT": "4",
  "OUT2": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "E/D": "input", GND: "power_in", OUT: "output", OUT2: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XUY52";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUY53`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JS6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 3.3V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JS6-6_5.0x3.2mm_P1.27mm.
 */
export class XUY53 extends Component.withPins({
  "NC": "1",
  "E/D": "2",
  "GND": "3",
  "OUT": "4",
  "OUT2": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "E/D": "input", GND: "power_in", OUT: "output", OUT2: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XUY53";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUY71`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JU6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP HCMOS 1.8V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JU6-6_7.0x5.0mm_P2.54mm.
 */
export class XUY71 extends Component.withPins({
  "NC": "1",
  "E/D": "2",
  "GND": "3",
  "OUT": "4",
  "OUT2": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "E/D": "input", GND: "power_in", OUT: "output", OUT2: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XUY71";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUY72`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JU6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 2.5V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JU6-6_7.0x5.0mm_P2.54mm.
 */
export class XUY72 extends Component.withPins({
  "NC": "1",
  "E/D": "2",
  "GND": "3",
  "OUT": "4",
  "OUT2": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "E/D": "input", GND: "power_in", OUT: "output", OUT2: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XUY72";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUY73`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JU6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 3.3V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JU6-6_7.0x5.0mm_P2.54mm.
 */
export class XUY73 extends Component.withPins({
  "NC": "1",
  "E/D": "2",
  "GND": "3",
  "OUT": "4",
  "OUT2": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "E/D": "input", GND: "power_in", OUT: "output", OUT2: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Oscillator:XUY73";
  override referencePrefix = "Y";
}
