// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * OTP EPROM 128 KiBit, [Obsolete 2004-01]
 *
 * KiCad symbol: `Memory_EPROM:27C128`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/11003L.pdf
 * Keywords: OTP EPROM 128KiBit.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class _27C128 extends Component.withPins({
  "VPP": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "D0": "11",
  "D1": "12",
  "D2": "13",
  "GND": "14",
  "D3": "15",
  "D4": "16",
  "D5": "17",
  "D6": "18",
  "D7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "A13": "26",
  "~{PGM}": "27",
  "VCC": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VPP: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{PGM}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_EPROM:27C128";
  override referencePrefix = "U";
}

/**
 * UV Erasable EPROM 128 KiBit, [Obsolete 2000-11]
 *
 * KiCad symbol: `Memory_EPROM:27128`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://eeshop.unl.edu/pdf/27128.pdf
 * Keywords: Erasable OTP EPROM 128KiBit.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class _27128 extends Component.withPins({
  "VPP": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "D0": "11",
  "D1": "12",
  "D2": "13",
  "GND": "14",
  "D3": "15",
  "D4": "16",
  "D5": "17",
  "D6": "18",
  "D7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "A13": "26",
  "~{PGM}": "27",
  "VCC": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VPP: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{PGM}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_EPROM:27128";
  override referencePrefix = "U";
}

/**
 * OTP EPROM 256 KiBit
 *
 * KiCad symbol: `Memory_EPROM:27C256`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc0014.pdf
 * Keywords: OTP EPROM 256 KiBit.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class _27C256 extends Component.withPins({
  "VPP": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "D0": "11",
  "D1": "12",
  "D2": "13",
  "GND": "14",
  "D3": "15",
  "D4": "16",
  "D5": "17",
  "D6": "18",
  "D7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "A13": "26",
  "A14": "27",
  "VCC": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VPP: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", A14: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_EPROM:27C256";
  override referencePrefix = "U";
}

/**
 * UV Erasable EPROM 256 KiBit, [Obsolete 2000-11]
 *
 * KiCad symbol: `Memory_EPROM:27256`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://datasheet.octopart.com/D27256-2-Intel-datasheet-17852618.pdf
 * Keywords: Erasable EPROM 256 KiBit.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class _27256 extends Component.withPins({
  "VPP": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "D0": "11",
  "D1": "12",
  "D2": "13",
  "GND": "14",
  "D3": "15",
  "D4": "16",
  "D5": "17",
  "D6": "18",
  "D7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "A13": "26",
  "A14": "27",
  "VCC": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VPP: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", A14: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_EPROM:27256";
  override referencePrefix = "U";
}

/**
 * OTP EPROM 512 KiBit
 *
 * KiCad symbol: `Memory_EPROM:27C512`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc0015.pdf
 * Keywords: OTP EPROM 512KiBit.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class _27C512 extends Component.withPins({
  "A15": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "D0": "11",
  "D1": "12",
  "D2": "13",
  "GND": "14",
  "D3": "15",
  "D4": "16",
  "D5": "17",
  "D6": "18",
  "D7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "A13": "26",
  "A14": "27",
  "VCC": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A15: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", A14: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_EPROM:27C512";
  override referencePrefix = "U";
}

/**
 * UV Erasable EPROM 512 KiBit, [Obsolete 2007-01]
 *
 * KiCad symbol: `Memory_EPROM:27512`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://pdf.datasheetcatalog.com/datasheets/120/227190_DS.pdf
 * Keywords: Erasable EPROM 512KiBit.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class _27512 extends Component.withPins({
  "A15": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "D0": "11",
  "D1": "12",
  "D2": "13",
  "GND": "14",
  "D3": "15",
  "D4": "16",
  "D5": "17",
  "D6": "18",
  "D7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "A13": "26",
  "A14": "27",
  "VCC": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A15: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", A14: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_EPROM:27512";
  override referencePrefix = "U";
}

/**
 * OTP EPROM 64 KiBit, [Obsolete 2004-01]
 *
 * KiCad symbol: `Memory_EPROM:27C64`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11107M.pdf
 * Keywords: OTP EPROM 64KiBit.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class _27C64 extends Component.withPins({
  "VPP": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "D0": "11",
  "D1": "12",
  "D2": "13",
  "GND": "14",
  "D3": "15",
  "D4": "16",
  "D5": "17",
  "D6": "18",
  "D7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "NC": "26",
  "~{PGM}": "27",
  "VCC": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VPP: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", NC: "no_connect", "~{PGM}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_EPROM:27C64";
  override referencePrefix = "U";
}

/**
 * EPROM 64 KiBit, [Obsolete 2000-11]
 *
 * KiCad symbol: `Memory_EPROM:2764`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://downloads.reactivemicro.com/Electronics/ROM/2764%20EPROM.pdf
 * Keywords: EPROM 64KiBit.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class _2764 extends Component.withPins({
  "VPP": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "D0": "11",
  "D1": "12",
  "D2": "13",
  "GND": "14",
  "D3": "15",
  "D4": "16",
  "D5": "17",
  "D6": "18",
  "D7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "NC": "26",
  "~{PGM}": "27",
  "VCC": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VPP: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", NC: "no_connect", "~{PGM}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_EPROM:2764";
  override referencePrefix = "U";
}

/**
 * OTP EPROM 1 MiBit (128 Ki x 8 Bit)
 *
 * KiCad symbol: `Memory_EPROM:27C010`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PLCC*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc0321.pdf
 * Keywords: OTP EPROM 1MiBit.
 */
export class _27C010 extends Component.withPins({
  "VPP": "1",
  "A16": "2",
  "A15": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "D0": "13",
  "D1": "14",
  "D2": "15",
  "GND": "16",
  "D3": "17",
  "D4": "18",
  "D5": "19",
  "D6": "20",
  "D7": "21",
  "~{CE}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "A14": "29",
  "~{PGM}": "31",
  "VCC": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VPP: "input", A16: "input", A15: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", A14: "input", "~{PGM}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_EPROM:27C010";
  override referencePrefix = "U";
}

/**
 * OTP EPROM 2 MiBit (256 Ki x 8 Bit)
 *
 * KiCad symbol: `Memory_EPROM:27C020`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PLCC*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/doc0570.pdf
 * Keywords: OTP EPROM 2MiBit.
 */
export class _27C020 extends Component.withPins({
  "VPP": "1",
  "A16": "2",
  "A15": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "D0": "13",
  "D1": "14",
  "D2": "15",
  "GND": "16",
  "D3": "17",
  "D4": "18",
  "D5": "19",
  "D6": "20",
  "D7": "21",
  "~{CE}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "A14": "29",
  "A17": "30",
  "~{PGM}": "31",
  "VCC": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VPP: "input", A16: "input", A15: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", A14: "input", A17: "input", "~{PGM}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_EPROM:27C020";
  override referencePrefix = "U";
}

/**
 * OTP EPROM 4 MiBit (512 Ki x 8)
 *
 * KiCad symbol: `Memory_EPROM:27C040`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PLCC*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/doc0189.pdf
 * Keywords: OTP EPROM 4MiBit.
 */
export class _27C040 extends Component.withPins({
  "VPP": "1",
  "A16": "2",
  "A15": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "D0": "13",
  "D1": "14",
  "D2": "15",
  "GND": "16",
  "D3": "17",
  "D4": "18",
  "D5": "19",
  "D6": "20",
  "D7": "21",
  "~{CE}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "A14": "29",
  "A17": "30",
  "A18": "31",
  "VCC": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VPP: "input", A16: "input", A15: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", A14: "input", A17: "input", A18: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_EPROM:27C040";
  override referencePrefix = "U";
}

/**
 * OTP EPROM 8 MiBit (1 Mi x 8)
 *
 * KiCad symbol: `Memory_EPROM:27C080`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PLCC*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/doc0360.pdf
 * Keywords: OTP EPROM 8MiBit.
 */
export class _27C080 extends Component.withPins({
  "A19": "1",
  "A16": "2",
  "A15": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "A4": "8",
  "A3": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "D0": "13",
  "D1": "14",
  "D2": "15",
  "GND": "16",
  "D3": "17",
  "D4": "18",
  "D5": "19",
  "D6": "20",
  "D7": "21",
  "~{CE}": "22",
  "A10": "23",
  "~{OE}": "24",
  "A11": "25",
  "A9": "26",
  "A8": "27",
  "A13": "28",
  "A14": "29",
  "A17": "30",
  "A18": "31",
  "VCC": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A19: "input", A16: "input", A15: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", A14: "input", A17: "input", A18: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_EPROM:27C080";
  override referencePrefix = "U";
}

/**
 * OTP EPROM 512 KiBit PLCC-32
 *
 * KiCad symbol: `Memory_EPROM:27C512PLCC`. Reference prefix: `U`.
 * Footprint filters: PLCC?32*11.4x14.0mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc0015.pdf
 * Keywords: OTP EPROM 512KiBit.
 * Default footprint: Package_LCC:PLCC-32_11.4x14.0mm_P1.27mm.
 */
export class _27C512PLCC extends Component.withPins({
  "NC_1": "1",
  "A15": "2",
  "A12": "3",
  "A7": "4",
  "A6": "5",
  "A5": "6",
  "A4": "7",
  "A3": "8",
  "A2": "9",
  "A1": "10",
  "A0": "11",
  "NC_12": "12",
  "O0": "13",
  "O1": "14",
  "O2": "15",
  "GND": "16",
  "NC_17": "17",
  "O3": "18",
  "O4": "19",
  "O5": "20",
  "O6": "21",
  "O7": "22",
  "~{CE}": "23",
  "A10": "24",
  "~{OE}/VPP": "25",
  "NC_26": "26",
  "A11": "27",
  "A9": "28",
  "A8": "29",
  "A13": "30",
  "A14": "31",
  "VCC": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", A15: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", NC_12: "no_connect", O0: "tri_state", O1: "tri_state", O2: "tri_state", GND: "power_in", NC_17: "no_connect", O3: "tri_state", O4: "tri_state", O5: "tri_state", O6: "tri_state", O7: "tri_state", "~{CE}": "input", A10: "input", "~{OE}/VPP": "input", NC_26: "no_connect", A11: "input", A9: "input", A8: "input", A13: "input", A14: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_EPROM:27C512PLCC";
  override referencePrefix = "U";
}
