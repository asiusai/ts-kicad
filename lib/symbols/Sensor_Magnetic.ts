// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Hall effect switch, unipolar (south-polarity), Bop=100G, Brp=45G, 3.8-24V supply, SOT-23W
 *
 * KiCad symbol: `Sensor_Magnetic:A1101xLH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.allegromicro.com/-/media/files/datasheets/a110x-datasheet.ashx
 * Keywords: A3141.
 * Default footprint: Package_TO_SOT_SMD:SOT-23W.
 */
export class A1101xLH extends Component.withPins({
  "V_{CC}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", "V_{OUT}": "open_collector", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1101xLH";
  override referencePrefix = "U";
}

/**
 * Hall effect switch, unipolar (south-polarity), Bop=100G, Brp=45G, 3.8-24V supply, TO-92S (3-pin SIP)
 *
 * KiCad symbol: `Sensor_Magnetic:A1101xUA`. Reference prefix: `U`.
 * Footprint filters: *TO?92S*.
 * @see https://www.allegromicro.com/-/media/files/datasheets/a110x-datasheet.ashx
 * Keywords: A3141.
 * Default footprint: Package_TO_SOT_THT:TO-92S.
 */
export class A1101xUA extends Component.withPins({
  "V_{CC}": "1",
  "GND": "2",
  "V_{OUT}": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", GND: "power_in", "V_{OUT}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1101xUA";
  override referencePrefix = "U";
}

/**
 * Hall effect switch, unipolar (south-polarity), Bop=180G, Brp=125G, 3.8-24V supply, SOT-23W
 *
 * KiCad symbol: `Sensor_Magnetic:A1102xLH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.allegromicro.com/-/media/files/datasheets/a110x-datasheet.ashx
 * Keywords: A3142.
 * Default footprint: Package_TO_SOT_SMD:SOT-23W.
 */
export class A1102xLH extends Component.withPins({
  "V_{CC}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", "V_{OUT}": "open_collector", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1102xLH";
  override referencePrefix = "U";
}

/**
 * Hall effect switch, unipolar (south-polarity), Bop=280G, Brp=225G, 3.8-24V supply, SOT-23W
 *
 * KiCad symbol: `Sensor_Magnetic:A1103xLH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.allegromicro.com/-/media/files/datasheets/a110x-datasheet.ashx
 * Keywords: A3143.
 * Default footprint: Package_TO_SOT_SMD:SOT-23W.
 */
export class A1103xLH extends Component.withPins({
  "V_{CC}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", "V_{OUT}": "open_collector", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1103xLH";
  override referencePrefix = "U";
}

/**
 * Hall effect switch, unipolar (south-polarity), Bop=70-350G, Brp=50-330G, 3.8-24V supply, SOT-23W
 *
 * KiCad symbol: `Sensor_Magnetic:A1104xLH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.allegromicro.com/-/media/files/datasheets/a110x-datasheet.ashx
 * Keywords: A3144.
 * Default footprint: Package_TO_SOT_SMD:SOT-23W.
 */
export class A1104xLH extends Component.withPins({
  "V_{CC}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", "V_{OUT}": "open_collector", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1104xLH";
  override referencePrefix = "U";
}

/**
 * Hall effect switch, unipolar (south-polarity), Bop=340G, Brp=240G, 3.8-24V supply, SOT-23W
 *
 * KiCad symbol: `Sensor_Magnetic:A1106xLH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.allegromicro.com/-/media/files/datasheets/a110x-datasheet.ashx
 * Keywords: Allegro.
 * Default footprint: Package_TO_SOT_SMD:SOT-23W.
 */
export class A1106xLH extends Component.withPins({
  "V_{CC}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", "V_{OUT}": "open_collector", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1106xLH";
  override referencePrefix = "U";
}

/**
 * Linear Hall Effect Sensor, 2.5 mV/G, 4.5-6.0V supply, SOT-23W
 *
 * KiCad symbol: `Sensor_Magnetic:A1301xLH`. Reference prefix: `U`.
 * Footprint filters: SOT?23W*.
 * @see http://www.allegromicro.com/~/media/Files/Datasheets/A1301-2-Datasheet.ashx
 * Keywords: ratiometric Obsolete.
 * Default footprint: Package_TO_SOT_SMD:SOT-23W.
 */
export class A1301xLH extends Component.withPins({
  "V_{CC}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", "V_{OUT}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1301xLH";
  override referencePrefix = "U";
}

/**
 * Linear Hall Effect Sensor, 2.5 mV/G, 4.5-6.0V supply, TO-92S (3-pin SIP)
 *
 * KiCad symbol: `Sensor_Magnetic:A1301xUA`. Reference prefix: `U`.
 * Footprint filters: *TO?92S*.
 * @see http://www.allegromicro.com/~/media/Files/Datasheets/A1301-2-Datasheet.ashx
 * Keywords: ratiometric Obsolete.
 * Default footprint: Package_TO_SOT_THT:TO-92S.
 */
export class A1301xUA extends Component.withPins({
  "V_{CC}": "1",
  "GND": "2",
  "V_{OUT}": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", GND: "power_in", "V_{OUT}": "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1301xUA";
  override referencePrefix = "U";
}

/**
 * Linear Hall Effect Sensor, 1.3 mV/G, 4.5-6.0V supply, SOT-23W
 *
 * KiCad symbol: `Sensor_Magnetic:A1302xLH`. Reference prefix: `U`.
 * Footprint filters: SOT?23W*.
 * @see http://www.allegromicro.com/~/media/Files/Datasheets/A1301-2-Datasheet.ashx
 * Keywords: ratiometric Obsolete.
 * Default footprint: Package_TO_SOT_SMD:SOT-23W.
 */
export class A1302xLH extends Component.withPins({
  "V_{CC}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", "V_{OUT}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1302xLH";
  override referencePrefix = "U";
}

/**
 * Linear Hall Effect Sensor, 1.3 mV/G, 4.5-6.0V supply, TO-92S (3-pin SIP)
 *
 * KiCad symbol: `Sensor_Magnetic:A1302xUA`. Reference prefix: `U`.
 * Footprint filters: *TO?92S*.
 * @see http://www.allegromicro.com/~/media/Files/Datasheets/A1301-2-Datasheet.ashx
 * Keywords: ratiometric Obsolete.
 * Default footprint: Package_TO_SOT_THT:TO-92S.
 */
export class A1302xUA extends Component.withPins({
  "V_{CC}": "1",
  "GND": "2",
  "V_{OUT}": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", GND: "power_in", "V_{OUT}": "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1302xUA";
  override referencePrefix = "U";
}

/**
 * Linear Hall Effect Sensor ICs with Analog Output, 1.3 mV/G, 4.5-5.5V supply, SOT-23W
 *
 * KiCad symbol: `Sensor_Magnetic:A1308xLHxx-1`. Reference prefix: `U`.
 * Footprint filters: SOT?23W*.
 * @see https://www.allegromicro.com/~/media/files/datasheets/a1308-9-datasheet.ashx
 * Keywords: ratiometric A1302.
 * Default footprint: Package_TO_SOT_SMD:SOT-23W.
 */
export class A1308xLHxx_1 extends Component.withPins({
  "V_{CC}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", "V_{OUT}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1308xLHxx-1";
  override referencePrefix = "U";
}

/**
 * Linear Hall Effect Sensor ICs with Analog Output, 2.5 mV/G, 4.5-5.5V supply, SOT-23W
 *
 * KiCad symbol: `Sensor_Magnetic:A1308xLHxx-2`. Reference prefix: `U`.
 * Footprint filters: SOT?23W*.
 * @see https://www.allegromicro.com/~/media/files/datasheets/a1308-9-datasheet.ashx
 * Keywords: ratiometric A1301.
 * Default footprint: Package_TO_SOT_SMD:SOT-23W.
 */
export class A1308xLHxx_2 extends Component.withPins({
  "V_{CC}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", "V_{OUT}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1308xLHxx-2";
  override referencePrefix = "U";
}

/**
 * Linear Hall Effect Sensor ICs with Analog Output, 9 mV/G, 4.5-5.5V supply, SOT-23W
 *
 * KiCad symbol: `Sensor_Magnetic:A1309xLHxx-9`. Reference prefix: `U`.
 * Footprint filters: SOT?23W*.
 * @see https://www.allegromicro.com/~/media/files/datasheets/a1308-9-datasheet.ashx
 * Keywords: ratiometric.
 * Default footprint: Package_TO_SOT_SMD:SOT-23W.
 */
export class A1309xLHxx_9 extends Component.withPins({
  "V_{CC}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", "V_{OUT}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1309xLHxx-9";
  override referencePrefix = "U";
}

/**
 * Customer-Programmable Linear Hall Effect Sensor, -8.5 to -12.5mV/G, TO-92S (3-pin SIP)
 *
 * KiCad symbol: `Sensor_Magnetic:A1369xUA-10`. Reference prefix: `U`.
 * Footprint filters: *TO?92S*.
 * @see http://www.allegromicro.com/~/media/Files/Datasheets/A1369-Datasheet.ashx?la=en
 * Keywords: current-sensing monitor ratiometric Obsolete.
 * Default footprint: Package_TO_SOT_THT:TO-92S.
 */
export class A1369xUA_10 extends Component.withPins({
  "V_{CC}": "1",
  "GND": "2",
  "V_{OUT}": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", GND: "power_in", "V_{OUT}": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1369xUA-10";
  override referencePrefix = "U";
}

/**
 * Customer-Programmable Linear Hall Effect Sensor, -22 to -26mV/G, TO-92S (3-pin SIP)
 *
 * KiCad symbol: `Sensor_Magnetic:A1369xUA-24`. Reference prefix: `U`.
 * Footprint filters: *TO?92S*.
 * @see http://www.allegromicro.com/~/media/Files/Datasheets/A1369-Datasheet.ashx?la=en
 * Keywords: current-sensing monitor ratiometric Obsolete.
 * Default footprint: Package_TO_SOT_THT:TO-92S.
 */
export class A1369xUA_24 extends Component.withPins({
  "V_{CC}": "1",
  "GND": "2",
  "V_{OUT}": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", GND: "power_in", "V_{OUT}": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A1369xUA-24";
  override referencePrefix = "U";
}

/**
 * Hall Effect Switch, bipolar, Bop = -48 or +42G, Brp = -38 or 32G, 2.4-5.5V supply, SOT-23W
 *
 * KiCad symbol: `Sensor_Magnetic:A3214xLH`. Reference prefix: `U`.
 * Footprint filters: SOT?23W*.
 * @see http://www.allegromicro.com/~/media/Files/Datasheets/A3213-4-Datasheet.ashx
 * Keywords: Allegro.
 * Default footprint: Package_TO_SOT_SMD:SOT-23W.
 */
export class A3214xLH extends Component.withPins({
  "V_{CC}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", "V_{OUT}": "open_collector", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:A3214xLH";
  override referencePrefix = "U";
}

/**
 * Customer-Programmable Linear Hall Effect Sensor, +9 to +13.5mV/G, TO-92S (3-pin SIP)
 *
 * KiCad symbol: `Sensor_Magnetic:ACS73369xUAA-010B5`. Reference prefix: `U`.
 * Footprint filters: *TO?92S*.
 * @see http://www.allegromicro.com/~/media/Files/Datasheets/ACS73369-Datasheet.ashx?la=en
 * Keywords: A1369 current-sensing monitor ratiometric.
 * Default footprint: Package_TO_SOT_THT:TO-92S.
 */
export class ACS73369xUAA_010B5 extends Component.withPins({
  "V_{CC}": "1",
  "GND": "2",
  "V_{OUT}": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", GND: "power_in", "V_{OUT}": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:ACS73369xUAA-010B5";
  override referencePrefix = "U";
}

/**
 * High Sensitivity Micropower Omnipolar Hall-Effect Switch, SIP-3
 *
 * KiCad symbol: `Sensor_Magnetic:AH1806-P`. Reference prefix: `U`.
 * Footprint filters: Diodes*SIP*4.1x1.5mm*P1.27mm*, Diodes*SIP*4.1x1.5mm*P2.65mm*.
 * @see https://www.diodes.com/assets/Datasheets/AH1806.pdf
 * Keywords: hall switch.
 */
export class AH1806_P extends Component.withPins({
  "VDD": "1",
  "GND": "2",
  "OUTPUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", GND: "power_in", OUTPUT: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:AH1806-P";
  override referencePrefix = "U";
}

/**
 * High Sensitivity Micropower Omnipolar Hall-Effect Switch, SC-59
 *
 * KiCad symbol: `Sensor_Magnetic:AH1806-W`. Reference prefix: `U`.
 * Footprint filters: SC?59*.
 * @see https://www.diodes.com/assets/Datasheets/AH1806.pdf
 * Keywords: hall switch.
 * Default footprint: Package_TO_SOT_SMD:SC-59.
 */
export class AH1806_W extends Component.withPins({
  "VDD": "1",
  "OUTPUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", OUTPUT: "open_collector", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:AH1806-W";
  override referencePrefix = "U";
}

/**
 * High Sensitivity Micropower Omnipolar Hall-Effect Switch, SOT-553
 *
 * KiCad symbol: `Sensor_Magnetic:AH1806-Z`. Reference prefix: `U`.
 * Footprint filters: SOT*553*.
 * @see https://www.diodes.com/assets/Datasheets/AH1806.pdf
 * Keywords: hall switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-553.
 */
export class AH1806_Z extends Component.withPins({
  "NC_1": "1",
  "GND": "2",
  "NC_3": "3",
  "VDD": "4",
  "OUTPUT": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", GND: "power_in", NC_3: "no_connect", VDD: "power_in", OUTPUT: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:AH1806-Z";
  override referencePrefix = "U";
}

/**
 * High sensitivity omnipolar Hall effect switch, Bop=±50G, Brp=±30G, TO-92S (3-pin SIP)
 *
 * KiCad symbol: `Sensor_Magnetic:AH452UA`. Reference prefix: `U`.
 * Footprint filters: *TO?92S*.
 * @see https://datasheet4u.com/pdf-down/A/H/4/AH452-AlfaElectronics.pdf
 * Keywords: Alfa-Electronics.
 * Default footprint: Package_TO_SOT_THT:TO-92S.
 */
export class AH452UA extends Component.withPins({
  "V_{CC}": "1",
  "GND": "2",
  "V_{OUT}": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", GND: "power_in", "V_{OUT}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:AH452UA";
  override referencePrefix = "U";
}

/**
 * Magnetic rotary angle sensor, 14-bit, SPI interface, ABZ, UVW, TSSOP-16
 *
 * KiCad symbol: `Sensor_Magnetic:AK7452`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.akm.com/akm/en/file/datasheet/AK7452.pdf
 * Keywords: sensor magnetic hall position rotation spi.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class AK7452 extends Component.withPins({
  "U": "1",
  "V": "2",
  "W": "3",
  "NC_4": "4",
  "MISO": "5",
  "MOSI": "6",
  "SCLK": "7",
  "~{CSN}": "8",
  "VDD": "9",
  "NC_10": "10",
  "TESTE": "11",
  "VSS": "12",
  "ERROR": "13",
  "Z": "14",
  "B": "15",
  "A": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { U: "output", V: "output", W: "output", NC_4: "no_connect", MISO: "output", MOSI: "input", SCLK: "input", "~{CSN}": "input", VDD: "power_in", NC_10: "no_connect", TESTE: "passive", VSS: "power_in", ERROR: "output", Z: "output", B: "output", A: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:AK7452";
  override referencePrefix = "U";
}

/**
 * Magnetic Position Sensor, 12-bit, PWM Output, ABI Output, SPI Interface, SSOP-16
 *
 * KiCad symbol: `Sensor_Magnetic:AS5045B`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x6.2mm*P0.65mm*.
 * @see https://ams.com/documents/20143/36005/AS5045B_DS000397_2-00.pdf
 * Keywords: Magnetic Hall Encoder.
 * Default footprint: Package_SO:SSOP-16_5.3x6.2mm_P0.65mm.
 */
export class AS5045B extends Component.withPins({
  "~{MagINC}": "1",
  "~{MagDEC}": "2",
  "A": "3",
  "B": "4",
  "NC_5": "5",
  "I": "6",
  "VSS": "7",
  "PDIO": "8",
  "DO": "9",
  "CLK": "10",
  "~{CS}": "11",
  "PWM": "12",
  "NC_13": "13",
  "NC_14": "14",
  "VDD3V3": "15",
  "VDD5V": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MagINC}": "open_collector", "~{MagDEC}": "open_collector", A: "output", B: "output", NC_5: "no_connect", I: "output", VSS: "power_in", PDIO: "input", DO: "output", CLK: "input", "~{CS}": "input", PWM: "output", NC_13: "no_connect", NC_14: "no_connect", VDD3V3: "power_in", VDD5V: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:AS5045B";
  override referencePrefix = "U";
}

/**
 * On-Axis Magnetic Position Sensor, 14-bit, PWM Output, ABI Output, UVW Output, SPI Interface, TSSOP-14
 *
 * KiCad symbol: `Sensor_Magnetic:AS5047D`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://ams.com/documents/20143/36005/AS5047D_DS000394_2-00.pdf
 * Keywords: Magnetic Hall Sensor.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class AS5047D extends Component.withPins({
  "~{CS}": "1",
  "CLK": "2",
  "MISO": "3",
  "MOSI": "4",
  "TST": "5",
  "B": "6",
  "A": "7",
  "W/PWM": "8",
  "V": "9",
  "U": "10",
  "VDD": "11",
  "VDD3V3": "12",
  "GND": "13",
  "I/PWM": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", CLK: "input", MISO: "output", MOSI: "input", TST: "input", B: "output", A: "output", "W/PWM": "output", V: "output", U: "output", VDD: "power_in", VDD3V3: "power_out", GND: "power_in", "I/PWM": "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:AS5047D";
  override referencePrefix = "U";
}

/**
 * Magnetic position sensor, 14-bit, PWM output, SPI Interface, TSSOP-14
 *
 * KiCad symbol: `Sensor_Magnetic:AS5048A`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://ams.com/documents/20143/36005/AS5048_DS000298_4-00.pdf
 * Keywords: sensor magnetic hall position rotation spi.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class AS5048A extends Component.withPins({
  "~{CSn}": "1",
  "CLK": "2",
  "MISO": "3",
  "MOSI": "4",
  "TEST_5": "5",
  "TEST_6": "6",
  "TEST_7": "7",
  "TEST_8": "8",
  "TEST_9": "9",
  "TEST_10": "10",
  "VDD5V": "11",
  "VDD3V": "12",
  "GND": "13",
  "PWM": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CSn}": "input", CLK: "input", MISO: "output", MOSI: "input", TEST_5: "passive", TEST_6: "passive", TEST_7: "passive", TEST_8: "passive", TEST_9: "passive", TEST_10: "passive", VDD5V: "power_in", VDD3V: "power_in", GND: "power_in", PWM: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:AS5048A";
  override referencePrefix = "U";
}

/**
 * Magnetic position sensor, 14-bit, PWM output, I2C Interface, TSSOP-14
 *
 * KiCad symbol: `Sensor_Magnetic:AS5048B`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://ams.com/documents/20143/36005/AS5048_DS000298_4-00.pdf
 * Keywords: sensor magnetic hall position rotation i2c.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class AS5048B extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "A2": "3",
  "A1": "4",
  "TEST_5": "5",
  "TEST_6": "6",
  "TEST_7": "7",
  "TEST_8": "8",
  "TEST_9": "9",
  "TEST_10": "10",
  "VDD5V": "11",
  "VDD3V": "12",
  "GND": "13",
  "PWM": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", A2: "input", A1: "input", TEST_5: "passive", TEST_6: "passive", TEST_7: "passive", TEST_8: "passive", TEST_9: "passive", TEST_10: "passive", VDD5V: "power_in", VDD3V: "power_in", GND: "power_in", PWM: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:AS5048B";
  override referencePrefix = "U";
}

/**
 * Magnetic position sensor, 12-bit, SPI interface, QFN-16
 *
 * KiCad symbol: `Sensor_Magnetic:AS5055A`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*PullBack*.
 * @see https://ams.com/documents/20143/36005/AS5055A_DS000304_2-00.pdf
 * Keywords: sensor magnetic hall position rotation spi.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm_PullBack.
 */
export class AS5055A extends Component.withPins({
  "MOSI": "1",
  "MISO": "2",
  "SCK": "3",
  "~{SS}": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "TEST": "9",
  "~{EN_INT}": "10",
  "VDDp": "11",
  "VDD": "12",
  "VSS": "13",
  "WM": "14",
  "~{INT}": "15",
  "NC_16": "16",
  "NC_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { MOSI: "input", MISO: "output", SCK: "input", "~{SS}": "input", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", TEST: "passive", "~{EN_INT}": "input", VDDp: "power_in", VDD: "power_in", VSS: "power_in", WM: "input", "~{INT}": "output", NC_16: "no_connect", NC_17: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:AS5055A";
  override referencePrefix = "U";
}

/**
 * Magnetic position sensor, 10-bit, SPI interface, QFN-16
 *
 * KiCad symbol: `Sensor_Magnetic:AS5050A`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.65mm*PullBack*.
 * @see https://ams.com/documents/20143/36005/AS5055A_DS000304_2-00.pdf
 * Keywords: sensor magnetic hall position rotation spi.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm_PullBack.
 */
export class AS5050A extends Component.withPins({
  "MOSI": "1",
  "MISO": "2",
  "SCK": "3",
  "~{SS}": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "TEST": "9",
  "~{EN_INT}": "10",
  "VDDp": "11",
  "VDD": "12",
  "VSS": "13",
  "WM": "14",
  "~{INT}": "15",
  "NC_16": "16",
  "NC_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { MOSI: "input", MISO: "output", SCK: "input", "~{SS}": "input", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", TEST: "passive", "~{EN_INT}": "input", VDDp: "power_in", VDD: "power_in", VSS: "power_in", WM: "input", "~{INT}": "output", NC_16: "no_connect", NC_17: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:AS5050A";
  override referencePrefix = "U";
}

/**
 * Linear Hall Sensor, 10-bit resolution, I2C, SOIC-8
 *
 * KiCad symbol: `Sensor_Magnetic:AS5510-DSO`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm?P1.27mm*.
 * @see https://look.ams-osram.com/m/19562c0de86ac97e/original/AS5510-DS000318.pdf
 * Keywords: ams-OSRAM.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AS5510_DSO extends Component.withPins({
  "NC_1": "1",
  "VSS": "2",
  "ADR": "3",
  "VDD": "4",
  "Test": "5",
  "SDA": "6",
  "SCL": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", VSS: "power_in", ADR: "passive", VDD: "power_in", Test: "input", SDA: "bidirectional", SCL: "input", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:AS5510-DSO";
  override referencePrefix = "U";
}

/**
 * Linear Hall Sensor, 10-bit resolution, I2C, WLCSP-6
 *
 * KiCad symbol: `Sensor_Magnetic:AS5510-DWL`. Reference prefix: `U`.
 * Footprint filters: WLCSP*1.46x1.1mm*P0.4mm*.
 * @see https://look.ams-osram.com/m/19562c0de86ac97e/original/AS5510-DS000318.pdf
 * Keywords: ams-OSRAM.
 * Default footprint: Package_CSP:WLCSP-6_1.46x1.1mm_Layout3x2_P0.4mm.
 */
export class AS5510_DWL extends Component.withPins({
  "VSS": "A1",
  "ADR": "A2",
  "VDD": "A3",
  "SDA": "B1",
  "SCL": "B2",
  "Test": "B3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", ADR: "passive", VDD: "power_in", SDA: "bidirectional", SCL: "input", Test: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:AS5510-DWL";
  override referencePrefix = "U";
}

/**
 * Low power 3axis magnetic sensor, I2C interface, MLGA010V020A
 *
 * KiCad symbol: `Sensor_Magnetic:BM1422AGMV`. Reference prefix: `U`.
 * Footprint filters: *MLGA010V020A*.
 * @see https://fscdn.rohm.com/en/products/databook/datasheet/ic/sensor/geomagnetic/bm1422agmv-e.pdf
 * Keywords: 3D 3axis magnetometer magnetic sensor I2C.
 * Default footprint: Package_LGA:Rohm_MLGA010V020A_LGA-10_2x2mm_P0.45mm_LayoutBorder2x3y.
 */
export class BM1422AGMV extends Component.withPins({
  "AVDD": "1",
  "GND": "2",
  "VREG": "3",
  "TEST1": "4",
  "SDA": "5",
  "TEST2": "6",
  "SCL": "7",
  "DRDY": "8",
  "ADDR": "9",
  "DVDD": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AVDD: "power_in", GND: "power_in", VREG: "passive", TEST1: "no_connect", SDA: "bidirectional", TEST2: "no_connect", SCL: "input", DRDY: "output", ADDR: "input", DVDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:BM1422AGMV";
  override referencePrefix = "U";
}

/**
 * Geomagnetic Sensor, WLCSP-12
 *
 * KiCad symbol: `Sensor_Magnetic:BMM150`. Reference prefix: `U`.
 * Footprint filters: WLCSP*1.56x1.56mm*P0.4mm*.
 * @see https://www.mouser.com/datasheet/2/783/BST-BMM150-DS001-01-786480.pdf
 * Keywords: BOSH Geomagnetic Sensor.
 * Default footprint: Package_CSP:WLCSP-12_1.56x1.56mm_P0.4mm.
 */
export class BMM150 extends Component.withPins({
  "PS": "A1",
  "SCK": "A3",
  "CSB": "A5",
  "VDDIO": "B2",
  "SDI": "B4",
  "SDO": "C1",
  "GND_C5": "C5",
  "INT": "D2",
  "DRDY": "D4",
  "GND_E1": "E1",
  "GND_E3": "E3",
  "VDD": "E5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PS: "input", SCK: "bidirectional", CSB: "input", VDDIO: "power_in", SDI: "bidirectional", SDO: "bidirectional", GND_C5: "power_in", INT: "output", DRDY: "output", GND_E1: "passive", GND_E3: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:BMM150";
  override referencePrefix = "U";
}

/**
 * 100 mV/mT,±21-mT, 20-kHz, 3.3/5V, SOT-23
 *
 * KiCad symbol: `Sensor_Magnetic:DRV5055A1xDBZxQ1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/drv5055-q1.pdf
 * Keywords: Automotive Ratiometric Linear Hall Effect Sensor AEC-Q100.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DRV5055A1xDBZxQ1 extends Component.withPins({
  "VCC": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", OUT: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:DRV5055A1xDBZxQ1";
  override referencePrefix = "U";
}

/**
 * ±6.9 / ±3.5 mT, 20-kHz, 2-38V, SOT-23
 *
 * KiCad symbol: `Sensor_Magnetic:DRV5033AJxDBZ`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/drv5033.pdf
 * Keywords: Digital Omnipolar Switch Hall Effect Sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DRV5033AJxDBZ extends Component.withPins({
  "VCC": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", OUT: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:DRV5033AJxDBZ";
  override referencePrefix = "U";
}

/**
 * 100 mV/mT,±21-mT, 20-kHz, 3.3/5V, TO-92
 *
 * KiCad symbol: `Sensor_Magnetic:DRV5055A1xLPGxQ1`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.ti.com/lit/ds/symlink/drv5055-q1.pdf
 * Keywords: Automotive Ratiometric Linear Hall Effect Sensor AEC-Q100.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class DRV5055A1xLPGxQ1 extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:DRV5055A1xLPGxQ1";
  override referencePrefix = "U";
}

/**
 * ±6.9 / ±3.5 mT, 20-kHz, 2-38V, TO-92
 *
 * KiCad symbol: `Sensor_Magnetic:DRV5033AJxLPG`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.ti.com/lit/ds/symlink/drv5033.pdf
 * Keywords: Digital Omnipolar Switch Hall Effect Sensor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class DRV5033AJxLPG extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:DRV5033AJxLPG";
  override referencePrefix = "U";
}

/**
 * ±3.5 / ±2 mT, 20-kHz, 2-38V, SOT-23
 *
 * KiCad symbol: `Sensor_Magnetic:DRV5033FAxDBZ`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/drv5033.pdf
 * Keywords: Digital Omnipolar Switch Hall Effect Sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DRV5033FAxDBZ extends Component.withPins({
  "VCC": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", OUT: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:DRV5033FAxDBZ";
  override referencePrefix = "U";
}

/**
 * ±3.5 / ±2 mT, 20-kHz, 2-38V, TO-92
 *
 * KiCad symbol: `Sensor_Magnetic:DRV5033FAxLPG`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.ti.com/lit/ds/symlink/drv5033.pdf
 * Keywords: Digital Omnipolar Switch Hall Effect Sensor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class DRV5033FAxLPG extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:DRV5033FAxLPG";
  override referencePrefix = "U";
}

/**
 * 50 mV/mT,±42-mT, 20-kHz, 3.3/5V, SOT-23
 *
 * KiCad symbol: `Sensor_Magnetic:DRV5055A2xDBZxQ1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/drv5055-q1.pdf
 * Keywords: Automotive Ratiometric Linear Hall Effect Sensor AEC-Q100.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DRV5055A2xDBZxQ1 extends Component.withPins({
  "VCC": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", OUT: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:DRV5055A2xDBZxQ1";
  override referencePrefix = "U";
}

/**
 * 50 mV/mT,±42-mT, 20-kHz, 3.3/5V, TO-92
 *
 * KiCad symbol: `Sensor_Magnetic:DRV5055A2xLPGxQ1`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.ti.com/lit/ds/symlink/drv5055-q1.pdf
 * Keywords: Automotive Ratiometric Linear Hall Effect Sensor AEC-Q100.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class DRV5055A2xLPGxQ1 extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:DRV5055A2xLPGxQ1";
  override referencePrefix = "U";
}

/**
 * 25 mV/mT,±85-mT, 20-kHz, 3.3/5V, SOT-23
 *
 * KiCad symbol: `Sensor_Magnetic:DRV5055A3xDBZxQ1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/drv5055-q1.pdf
 * Keywords: Automotive Ratiometric Linear Hall Effect Sensor AEC-Q100.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DRV5055A3xDBZxQ1 extends Component.withPins({
  "VCC": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", OUT: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:DRV5055A3xDBZxQ1";
  override referencePrefix = "U";
}

/**
 * 25 mV/mT,±85-mT, 20-kHz, 3.3/5V, TO-92
 *
 * KiCad symbol: `Sensor_Magnetic:DRV5055A3xLPGxQ1`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.ti.com/lit/ds/symlink/drv5055-q1.pdf
 * Keywords: Automotive Ratiometric Linear Hall Effect Sensor AEC-Q100.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class DRV5055A3xLPGxQ1 extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:DRV5055A3xLPGxQ1";
  override referencePrefix = "U";
}

/**
 * 12.5 mV/mT,±169-mT, 20-kHz, 3.3/5V, SOT-23
 *
 * KiCad symbol: `Sensor_Magnetic:DRV5055A4xDBZxQ1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/drv5055-q1.pdf
 * Keywords: Automotive Ratiometric Linear Hall Effect Sensor AEC-Q100.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DRV5055A4xDBZxQ1 extends Component.withPins({
  "VCC": "1",
  "OUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", OUT: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:DRV5055A4xDBZxQ1";
  override referencePrefix = "U";
}

/**
 * 12.5mV/mT,±169-mT, 20-kHz, 3.3/5V, TO-92
 *
 * KiCad symbol: `Sensor_Magnetic:DRV5055A4xLPGxQ1`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.ti.com/lit/ds/symlink/drv5055-q1.pdf
 * Keywords: Automotive Ratiometric Linear Hall Effect Sensor AEC-Q100.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class DRV5055A4xLPGxQ1 extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "OUT": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:DRV5055A4xLPGxQ1";
  override referencePrefix = "U";
}

/**
 * 3D Magnetometer, I2C Interface, LGA-16
 *
 * KiCad symbol: `Sensor_Magnetic:IST8310`. Reference prefix: `U`.
 * Footprint filters: LGA*3x3mm*P0.5mm*.
 * @see http://www.isentek.com/en/dlf.php?file=../ISENTEK/(201703-09)IST8310%20Datasheet%20v1.2_brief-105.09.20.pdf
 * Keywords: magnet field sensor compass.
 * Default footprint: Package_LGA:LGA-16_3x3mm_P0.5mm.
 */
export class IST8310 extends Component.withPins({
  "SCL": "1",
  "AVDD": "2",
  "NC_3": "3",
  "NC_4": "4",
  "CAD0": "5",
  "CAD1": "6",
  "VPP": "7",
  "NC_8": "8",
  "VSS_9": "9",
  "C1": "10",
  "VSS_11": "11",
  "NC_12": "12",
  "DVDD": "13",
  "~{RST}": "14",
  "DRDY": "15",
  "SDA": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", AVDD: "power_in", NC_3: "no_connect", NC_4: "no_connect", CAD0: "input", CAD1: "input", VPP: "passive", NC_8: "no_connect", VSS_9: "power_in", C1: "passive", VSS_11: "passive", NC_12: "no_connect", DVDD: "power_in", "~{RST}": "input", DRDY: "output", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:IST8310";
  override referencePrefix = "U";
}

/**
 * 3D Magnetometer, High Sensitivity, I2C Interface, LGA-16
 *
 * KiCad symbol: `Sensor_Magnetic:IST8308`. Reference prefix: `U`.
 * Footprint filters: LGA*3x3mm*P0.5mm*.
 * @see http://www.isentek.com/en/dlf.php?file=../ISENTEK/(201703-20)IST8308%20Datasheet%20v1.0_brief.pdf
 * Keywords: magnet field sensor compass.
 * Default footprint: Package_LGA:LGA-16_3x3mm_P0.5mm.
 */
export class IST8308 extends Component.withPins({
  "SCL": "1",
  "AVDD": "2",
  "NC_3": "3",
  "NC_4": "4",
  "CAD0": "5",
  "CAD1": "6",
  "VPP": "7",
  "NC_8": "8",
  "VSS_9": "9",
  "C1": "10",
  "VSS_11": "11",
  "NC_12": "12",
  "DVDD": "13",
  "~{RST}": "14",
  "DRDY": "15",
  "SDA": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", AVDD: "power_in", NC_3: "no_connect", NC_4: "no_connect", CAD0: "input", CAD1: "input", VPP: "passive", NC_8: "no_connect", VSS_9: "power_in", C1: "passive", VSS_11: "passive", NC_12: "no_connect", DVDD: "power_in", "~{RST}": "input", DRDY: "output", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:IST8308";
  override referencePrefix = "U";
}

/**
 * Ultra-low-power, 3-axis digital output magnetometer, LGA-12
 *
 * KiCad symbol: `Sensor_Magnetic:LIS2MDL`. Reference prefix: `U`.
 * Footprint filters: LGA*2x2mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/lis2mdl.pdf
 * Keywords: digital magnetometer.
 * Default footprint: Package_LGA:LGA-12_2x2mm_P0.5mm.
 */
export class LIS2MDL extends Component.withPins({
  "SCL/SPC": "1",
  "NC_2": "2",
  "~{CS}": "3",
  "SDA/SDI/SDO": "4",
  "C1": "5",
  "GND_6": "6",
  "DRDY": "7",
  "GND_8": "8",
  "Vdd": "9",
  "Vdd_IO": "10",
  "NC_11": "11",
  "NC_12": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SCL/SPC": "input", NC_2: "no_connect", "~{CS}": "input", "SDA/SDI/SDO": "bidirectional", C1: "power_out", GND_6: "power_in", DRDY: "output", GND_8: "passive", Vdd: "power_in", Vdd_IO: "power_in", NC_11: "no_connect", NC_12: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:LIS2MDL";
  override referencePrefix = "U";
}

/**
 * Ultra-low-power, 3-axis digital output magnetometer, LGA-12
 *
 * KiCad symbol: `Sensor_Magnetic:LIS3MDL`. Reference prefix: `U`.
 * Footprint filters: LGA*2x2mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/lis3mdl.pdf
 * Keywords: digital magnetometer.
 * Default footprint: Package_LGA:LGA-12_2x2mm_P0.5mm.
 */
export class LIS3MDL extends Component.withPins({
  "SCL/SPC": "1",
  "GND_2": "2",
  "GND_3": "3",
  "C1": "4",
  "Vdd": "5",
  "Vdd_IO": "6",
  "INT": "7",
  "DRDY": "8",
  "SDO/SA1": "9",
  "~{CS}": "10",
  "SDA/SDI/SDO": "11",
  "GND_12": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SCL/SPC": "input", GND_2: "passive", GND_3: "power_in", C1: "power_out", Vdd: "power_in", Vdd_IO: "power_in", INT: "output", DRDY: "output", "SDO/SA1": "bidirectional", "~{CS}": "input", "SDA/SDI/SDO": "bidirectional", GND_12: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:LIS3MDL";
  override referencePrefix = "U";
}

/**
 * Magnetic rotary angle sensor, 14-bit, SPI interface, ABZ, PWM, QFN-16
 *
 * KiCad symbol: `Sensor_Magnetic:MA730`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.monolithicpower.com/pub/media/document/m/a/ma730_r1.01.pdf
 * Keywords: sensor magnetic hall position rotation spi.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.75x1.75mm.
 */
export class MA730 extends Component.withPins({
  "SSD": "1",
  "A": "2",
  "Z": "3",
  "MOSI": "4",
  "~{CS}": "5",
  "B": "6",
  "MISO": "7",
  "GND": "8",
  "PWM": "9",
  "TEST": "10",
  "MGL": "11",
  "SCLK": "12",
  "VDD": "13",
  "NC": "14",
  "SSCK": "15",
  "MGH": "16",
  "PAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SSD: "output", A: "output", Z: "output", MOSI: "input", "~{CS}": "input", B: "output", MISO: "output", GND: "power_in", PWM: "output", TEST: "passive", MGL: "output", SCLK: "input", VDD: "power_in", NC: "no_connect", SSCK: "input", MGH: "output", PAD: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:MA730";
  override referencePrefix = "U";
}

/**
 * 3-axis Magnetometer Node, SPI / I2C interface, VQFN-16
 *
 * KiCad symbol: `Sensor_Magnetic:MLX90395xLW`. Reference prefix: `U`.
 * Footprint filters: *QFN*3x3mm*P0.5mm*EP1.675x1.675mm*.
 * @see https://www.melexis.com/en/documents/documentation/datasheets/datasheet-mlx90395
 * Keywords: Melexis Triaxis Hall-Sensor.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.675x1.675mm.
 */
export class MLX90395xLW extends Component.withPins({
  "INT": "1",
  "~{CS}": "2",
  "SCLK": "3",
  "V_{SS}_4": "4",
  "MOSI": "5",
  "MISO": "6",
  "INT/TRG": "7",
  "V_{SS}_8": "8",
  "V_{SS}_9": "9",
  "V_{SS}_10": "10",
  "A1": "11",
  "A0": "12",
  "V_{SS}_13": "13",
  "V_{SS}_14": "14",
  "V_{DD}": "15",
  "V_{SS}_16": "16",
  "V_{SS}_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { INT: "output", "~{CS}": "input", SCLK: "input", "V_{SS}_4": "passive", MOSI: "input", MISO: "output", "INT/TRG": "bidirectional", "V_{SS}_8": "passive", "V_{SS}_9": "passive", "V_{SS}_10": "passive", A1: "input", A0: "input", "V_{SS}_13": "power_in", "V_{SS}_14": "passive", "V_{DD}": "power_in", "V_{SS}_16": "passive", "V_{SS}_17": "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:MLX90395xLW";
  override referencePrefix = "U";
}

/**
 * 3-axis AMR Magnetometer, 30 G, I2C & I3C  Interface, 2mG RMS, WLP-4
 *
 * KiCad symbol: `Sensor_Magnetic:MMC5633NJL`. Reference prefix: `U`.
 * Footprint filters: WLP*0.86x0.86mm?P0.4mm*.
 * @see http://www.memsic.com/uploadfiles/2020/08/20200827165106864.pdf
 * Keywords: I2C I3C magnetic 3-axis sensor magnetometer AMR magnetoresistance.
 * Default footprint: Package_BGA:WLP-4_0.86x0.86mm_P0.4mm.
 */
export class MMC5633NJL extends Component.withPins({
  "VSA": "A1",
  "SCL": "A2",
  "VDD": "B1",
  "SDA": "B2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSA: "power_in", SCL: "input", VDD: "power_in", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:MMC5633NJL";
  override referencePrefix = "U";
}

/**
 * 3-axis Magnetic Sensor, I2C Interface, LGA-16
 *
 * KiCad symbol: `Sensor_Magnetic:MMC5883MA`. Reference prefix: `U`.
 * Footprint filters: *LGA*3x3mm*P0.5mm*.
 * @see http://www.memsic.com/userfiles/files/DataSheets/Magnetic-Sensors-Datasheets/MMC5883MA-RevC.pdf
 * Keywords: I2C magnetic 3-axis sensor.
 * Default footprint: Package_LGA:LGA-16_3x3mm_P0.5mm.
 */
export class MMC5883MA extends Component.withPins({
  "SCL": "1",
  "VDD": "2",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "GND_9": "9",
  "CAP": "10",
  "GND_11": "11",
  "NC_12": "12",
  "VDDIO": "13",
  "NC_14": "14",
  "INT": "15",
  "SDA": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", VDD: "power_in", NC_3: "no_connect", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", GND_9: "power_in", CAP: "passive", GND_11: "passive", NC_12: "no_connect", VDDIO: "power_in", NC_14: "no_connect", INT: "output", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:MMC5883MA";
  override referencePrefix = "U";
}

/**
 * Hall Based Angle Position Encoder Sensor, I2C, SSI, ABZ & UVW interfaces, 3.3..5V supply, SOIC-8
 *
 * KiCad symbol: `Sensor_Magnetic:MT6701CT`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.magntek.com.cn/upload/MT6701_Rev.1.5.pdf
 * Keywords: sensor magnetic hall rotation.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 */
export class MT6701CT extends Component.withPins({
  "VDD": "1",
  "MODE": "2",
  "OUT": "3",
  "GND": "4",
  "PUSH": "5",
  "A": "6",
  "B": "7",
  "Z": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", MODE: "input", OUT: "output", GND: "power_in", PUSH: "output", A: "output", B: "output", Z: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:MT6701CT";
  override referencePrefix = "U";
}

/**
 * Hall Based Angle Position Encoder Sensor, I2C, SSI, ABZ & UVW interfaces, 3.3..5V supply, QFN-16
 *
 * KiCad symbol: `Sensor_Magnetic:MT6701QT`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.magntek.com.cn/upload/MT6701_Rev.1.5.pdf
 * Keywords: sensor magnetic hall rotation.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.7x1.7mm.
 */
export class MT6701QT extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "PUSH": "5",
  "A": "6",
  "B": "7",
  "Z": "8",
  "W": "9",
  "NC_10": "10",
  "U": "11",
  "V": "12",
  "VDD": "13",
  "MODE": "14",
  "OUT": "15",
  "GND_16": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", NC_4: "no_connect", PUSH: "output", A: "output", B: "output", Z: "output", W: "output", NC_10: "no_connect", U: "output", V: "output", VDD: "power_in", MODE: "input", OUT: "output", GND_16: "power_in", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:MT6701QT";
  override referencePrefix = "U";
}

/**
 * High Speed & High Resolution Magnetic Angle Sensor IC, SOIC-8
 *
 * KiCad symbol: `Sensor_Magnetic:MT6816CT`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see http://www.magntek.com.cn/upload/MT6816_Rev.2.0.pdf
 * Keywords: ABZ UVW SPI 14bit AMR Incremental Absolute Position Encoder.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 */
export class MT6816CT extends Component.withPins({
  "~{CS}": "1",
  "HVPP": "2",
  "OUT": "3",
  "VDD": "4",
  "A/U": "5",
  "B/V": "6",
  "Z/W": "7",
  "GND": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{CS}": "input", HVPP: "input", OUT: "output", VDD: "power_in", "A/U": "output", "B/V": "output", "Z/W": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:MT6816CT";
  override referencePrefix = "U";
}

/**
 * Hall Effect Switch, SOT-23
 *
 * KiCad symbol: `Sensor_Magnetic:SM351LT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://sensing.honeywell.com/honeywell-sensing-nanopower-series-product-sheet-50095501-a-en.pdf
 * Keywords: Hall Effect Switch Sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class SM351LT extends Component.withPins({
  "VCC": "1",
  "OUTPUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", OUTPUT: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:SM351LT";
  override referencePrefix = "U";
}

/**
 * Hall Effect Switch, SOT-23
 *
 * KiCad symbol: `Sensor_Magnetic:SM353LT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://sensing.honeywell.com/honeywell-sensing-nanopower-series-product-sheet-50095501-a-en.pdf
 * Keywords: Hall Effect Switch Sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class SM353LT extends Component.withPins({
  "VCC": "1",
  "OUTPUT": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", OUTPUT: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:SM353LT";
  override referencePrefix = "U";
}

/**
 * I2C Hall Effect Magnetic Position and Temperature Sensor, TDFN-8
 *
 * KiCad symbol: `Sensor_Magnetic:Si7210-B-xx-IM2`. Reference prefix: `U`.
 * Footprint filters: TDFN-8*1.4x1.6mm*P0.4mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/si7210-datasheet.pdf
 * Keywords: I2C hall effect magnetic postition temperature sensor.
 * Default footprint: Package_DFN_QFN:TDFN-8_1.4x1.6mm_P0.4mm.
 */
export class Si7210_B_xx_IM2 extends Component.withPins({
  "GND_1": "1",
  "SCL": "2",
  "SDA": "4",
  "GND_5": "5",
  "Out": "6",
  "V_{DD}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", SCL: "input", SDA: "bidirectional", GND_5: "power_in", Out: "bidirectional", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:Si7210-B-xx-IM2";
  override referencePrefix = "U";
}

/**
 * I2C Hall Effect Magnetic Position and Temperature Sensor, SOT-23-5
 *
 * KiCad symbol: `Sensor_Magnetic:Si7210-B-xx-IV`. Reference prefix: `U`.
 * Footprint filters: SOT-23-5*.
 * @see https://www.silabs.com/documents/public/data-sheets/si7210-datasheet.pdf
 * Keywords: I2C hall effect magnetic postition temperature sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class Si7210_B_xx_IV extends Component.withPins({
  "SDA": "1",
  "GND": "2",
  "SCL": "3",
  "V_{DD}": "4",
  "ALERT": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", GND: "power_in", SCL: "input", "V_{DD}": "power_in", ALERT: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:Si7210-B-xx-IV";
  override referencePrefix = "U";
}

/**
 * 15bit magnetic angle sensor based on GMR principle with diagnostic functions, SOIC-8
 *
 * KiCad symbol: `Sensor_Magnetic:TLE5012B`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-TLE5012B_Exxxx-DataSheet-v02_01-EN.pdf?fileId=db3a304334fac4c601350f31c43c433f
 * Keywords: Infineon GMR Angle Position Rotation SPI SSC PWM IIF SPC SENT HSM BIST AEC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TLE5012B extends Component.withPins({
  "IFC": "1",
  "SCK": "2",
  "CSQ": "3",
  "DATA": "4",
  "IFA": "5",
  "VDD": "6",
  "GND": "7",
  "IFB": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IFC: "bidirectional", SCK: "input", CSQ: "input", DATA: "bidirectional", IFA: "bidirectional", VDD: "power_in", GND: "power_in", IFB: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TLE5012B";
  override referencePrefix = "U";
}

/**
 * Low power 3D magnetic sensor, I2C interface, SOT-23-6
 *
 * KiCad symbol: `Sensor_Magnetic:TLV493D`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.infineon.com/dgdl/Infineon-TLV493D-A1B6-DS-v01_00-EN.pdf?fileId=5546d462525dbac40152a6b85c760e80
 * Keywords: magnetic field i2c.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TLV493D extends Component.withPins({
  "SCL/INT": "1",
  "GND_2": "2",
  "GND_3": "3",
  "VDD": "4",
  "GND_5": "5",
  "SDA/ADDR": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SCL/INT": "bidirectional", GND_2: "power_in", GND_3: "power_in", VDD: "power_in", GND_5: "power_in", "SDA/ADDR": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TLV493D";
  override referencePrefix = "U";
}

/**
 * 2-dimensional, dual channel, Hall effect latch, XY, 1.4 mT, SOT-23-5
 *
 * KiCad symbol: `Sensor_Magnetic:TMAG5110A2xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmag5110.pdf
 * Keywords: hall switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TMAG5110A2xxDBV extends Component.withPins({
  "NC": "3",
  "OUT2": "5",
  "VCC": "1",
  "GND": "2",
  "OUT1": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "passive", OUT2: "open_collector", VCC: "power_in", GND: "power_in", OUT1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TMAG5110A2xxDBV";
  override referencePrefix = "U";
}

/**
 * 2-dimensional, dual channel, Hall effect latch, XY, 3 mT, SOT-23-5
 *
 * KiCad symbol: `Sensor_Magnetic:TMAG5110A4xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmag5110.pdf
 * Keywords: hall switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TMAG5110A4xxDBV extends Component.withPins({
  "NC": "3",
  "OUT2": "5",
  "VCC": "1",
  "GND": "2",
  "OUT1": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "passive", OUT2: "open_collector", VCC: "power_in", GND: "power_in", OUT1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TMAG5110A4xxDBV";
  override referencePrefix = "U";
}

/**
 * 2-dimensional, dual channel, Hall effect latch, ZX, 1.4 mT, SOT-23-5
 *
 * KiCad symbol: `Sensor_Magnetic:TMAG5110B2xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmag5110.pdf
 * Keywords: hall switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TMAG5110B2xxDBV extends Component.withPins({
  "NC": "3",
  "OUT2": "5",
  "VCC": "1",
  "GND": "2",
  "OUT1": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "passive", OUT2: "open_collector", VCC: "power_in", GND: "power_in", OUT1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TMAG5110B2xxDBV";
  override referencePrefix = "U";
}

/**
 * 2-dimensional, dual channel, Hall effect latch, ZX, 3 mT, SOT-23-5
 *
 * KiCad symbol: `Sensor_Magnetic:TMAG5110B4xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmag5110.pdf
 * Keywords: hall switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TMAG5110B4xxDBV extends Component.withPins({
  "NC": "3",
  "OUT2": "5",
  "VCC": "1",
  "GND": "2",
  "OUT1": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "passive", OUT2: "open_collector", VCC: "power_in", GND: "power_in", OUT1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TMAG5110B4xxDBV";
  override referencePrefix = "U";
}

/**
 * 2-dimensional, dual channel, Hall effect latch, ZY, 1.4 mT, SOT-23-5
 *
 * KiCad symbol: `Sensor_Magnetic:TMAG5110C2xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmag5110.pdf
 * Keywords: hall switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TMAG5110C2xxDBV extends Component.withPins({
  "NC": "3",
  "OUT2": "5",
  "VCC": "1",
  "GND": "2",
  "OUT1": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "passive", OUT2: "open_collector", VCC: "power_in", GND: "power_in", OUT1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TMAG5110C2xxDBV";
  override referencePrefix = "U";
}

/**
 * 2-dimensional, dual channel, Hall effect latch, ZY, 3  mT, SOT-23-5
 *
 * KiCad symbol: `Sensor_Magnetic:TMAG5110C4xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmag5110.pdf
 * Keywords: hall switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TMAG5110C4xxDBV extends Component.withPins({
  "NC": "3",
  "OUT2": "5",
  "VCC": "1",
  "GND": "2",
  "OUT1": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "passive", OUT2: "open_collector", VCC: "power_in", GND: "power_in", OUT1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TMAG5110C4xxDBV";
  override referencePrefix = "U";
}

/**
 * 2-dimensional, dual channel, speed & dir output, Hall effect latch, XY, 1.4 mT, SOT-23-5
 *
 * KiCad symbol: `Sensor_Magnetic:TMAG5111A2xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmag5111.pdf
 * Keywords: hall switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TMAG5111A2xxDBV extends Component.withPins({
  "NC": "3",
  "OUT2": "5",
  "VCC": "1",
  "GND": "2",
  "OUT1": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "passive", OUT2: "open_collector", VCC: "power_in", GND: "power_in", OUT1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TMAG5111A2xxDBV";
  override referencePrefix = "U";
}

/**
 * 2-dimensional, dual channel, speed & dir output, Hall effect latch, XY, 3 mT, SOT-23-5
 *
 * KiCad symbol: `Sensor_Magnetic:TMAG5111A4xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmag5111.pdf
 * Keywords: hall switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TMAG5111A4xxDBV extends Component.withPins({
  "NC": "3",
  "OUT2": "5",
  "VCC": "1",
  "GND": "2",
  "OUT1": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "passive", OUT2: "open_collector", VCC: "power_in", GND: "power_in", OUT1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TMAG5111A4xxDBV";
  override referencePrefix = "U";
}

/**
 * 2-dimensional, dual channel, speed & dir output, Hall effect latch, ZX, 1.4 mT, SOT-23-5
 *
 * KiCad symbol: `Sensor_Magnetic:TMAG5111B2xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmag5111.pdf
 * Keywords: hall switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TMAG5111B2xxDBV extends Component.withPins({
  "NC": "3",
  "OUT2": "5",
  "VCC": "1",
  "GND": "2",
  "OUT1": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "passive", OUT2: "open_collector", VCC: "power_in", GND: "power_in", OUT1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TMAG5111B2xxDBV";
  override referencePrefix = "U";
}

/**
 * 2-dimensional, dual channel, speed & dir output, Hall effect latch, ZX, 3 mT, SOT-23-5
 *
 * KiCad symbol: `Sensor_Magnetic:TMAG5111B4xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmag5111.pdf
 * Keywords: hall switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TMAG5111B4xxDBV extends Component.withPins({
  "NC": "3",
  "OUT2": "5",
  "VCC": "1",
  "GND": "2",
  "OUT1": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "passive", OUT2: "open_collector", VCC: "power_in", GND: "power_in", OUT1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TMAG5111B4xxDBV";
  override referencePrefix = "U";
}

/**
 * 2-dimensional, dual channel, speed & dir output, Hall effect latch, ZY, 1.4 mT, SOT-23-5
 *
 * KiCad symbol: `Sensor_Magnetic:TMAG5111C2xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmag5111.pdf
 * Keywords: hall switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TMAG5111C2xxDBV extends Component.withPins({
  "NC": "3",
  "OUT2": "5",
  "VCC": "1",
  "GND": "2",
  "OUT1": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "passive", OUT2: "open_collector", VCC: "power_in", GND: "power_in", OUT1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TMAG5111C2xxDBV";
  override referencePrefix = "U";
}

/**
 * 2-dimensional, dual channel, speed & dir output, Hall effect latch, ZY, 3  mT, SOT-23-5
 *
 * KiCad symbol: `Sensor_Magnetic:TMAG5111C4xxDBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmag5111.pdf
 * Keywords: hall switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TMAG5111C4xxDBV extends Component.withPins({
  "NC": "3",
  "OUT2": "5",
  "VCC": "1",
  "GND": "2",
  "OUT1": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "passive", OUT2: "open_collector", VCC: "power_in", GND: "power_in", OUT1: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TMAG5111C4xxDBV";
  override referencePrefix = "U";
}

/**
 * Magnetic 3-axis linear sensor, 12-bit, Automotive, SPI Interface, VSSOP-8
 *
 * KiCad symbol: `Sensor_Magnetic:TMAG5170-Q1`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmag5170-q1.pdf
 * Keywords: sensor magnetic hall position rotation spi.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class TMAG5170_Q1 extends Component.withPins({
  "SCLK": "1",
  "MOSI": "2",
  "MISO": "3",
  "~{CS}": "4",
  "VCC": "5",
  "GND": "6",
  "TEST": "7",
  "~{ALERT}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCLK: "input", MOSI: "input", MISO: "output", "~{CS}": "input", VCC: "power_in", GND: "power_in", TEST: "passive", "~{ALERT}": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Magnetic:TMAG5170-Q1";
  override referencePrefix = "U";
}
