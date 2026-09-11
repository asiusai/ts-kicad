// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Microchip CPLD, 32 Macrocell, 5 V, TQFP-44
 *
 * KiCad symbol: `CPLD_Microchip:ATF1502AS-xAx44`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-0995-CPLD-ATF1502AS(L)-Datasheet.pdf
 * Keywords: CPLD.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class ATF1502AS_xAx44 extends Component.withPins({
  "I/O/TDI": "1",
  "I/O_2": "2",
  "I/O_3": "3",
  "GND_4": "4",
  "I/O/PD1": "5",
  "I/O_6": "6",
  "I/O/TMS": "7",
  "I/O_8": "8",
  "VCC_9": "9",
  "I/O_10": "10",
  "I/O_11": "11",
  "I/O_12": "12",
  "I/O_13": "13",
  "I/O_14": "14",
  "I/O_15": "15",
  "GND_16": "16",
  "VCC_17": "17",
  "I/O_18": "18",
  "I/O/PD2": "19",
  "I/O_20": "20",
  "I/O_21": "21",
  "I/O_22": "22",
  "I/O_23": "23",
  "GND_24": "24",
  "I/O_25": "25",
  "I/O/TCK": "26",
  "I/O_27": "27",
  "I/O_28": "28",
  "VCC_29": "29",
  "I/O_30": "30",
  "I/O_31": "31",
  "I/O/TDO": "32",
  "I/O_33": "33",
  "I/O_34": "34",
  "I/O/GCLK3": "35",
  "GND_36": "36",
  "I/GCLK1": "37",
  "I/OE1/Vpp": "38",
  "I/GCLR": "39",
  "I/OE2/GCLK2": "40",
  "VCC_41": "41",
  "I/O_42": "42",
  "I/O_43": "43",
  "I/O_44": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I/O/TDI": "bidirectional", "I/O_2": "bidirectional", "I/O_3": "bidirectional", GND_4: "power_in", "I/O/PD1": "bidirectional", "I/O_6": "bidirectional", "I/O/TMS": "bidirectional", "I/O_8": "bidirectional", VCC_9: "power_in", "I/O_10": "bidirectional", "I/O_11": "bidirectional", "I/O_12": "bidirectional", "I/O_13": "bidirectional", "I/O_14": "bidirectional", "I/O_15": "bidirectional", GND_16: "passive", VCC_17: "passive", "I/O_18": "bidirectional", "I/O/PD2": "bidirectional", "I/O_20": "bidirectional", "I/O_21": "bidirectional", "I/O_22": "bidirectional", "I/O_23": "bidirectional", GND_24: "passive", "I/O_25": "bidirectional", "I/O/TCK": "bidirectional", "I/O_27": "bidirectional", "I/O_28": "bidirectional", VCC_29: "passive", "I/O_30": "bidirectional", "I/O_31": "bidirectional", "I/O/TDO": "bidirectional", "I/O_33": "bidirectional", "I/O_34": "bidirectional", "I/O/GCLK3": "bidirectional", GND_36: "passive", "I/GCLK1": "input", "I/OE1/Vpp": "input", "I/GCLR": "input", "I/OE2/GCLK2": "input", VCC_41: "passive", "I/O_42": "bidirectional", "I/O_43": "bidirectional", "I/O_44": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "CPLD_Microchip:ATF1502AS-xAx44";
  override referencePrefix = "U";
}

/**
 * Microchip CPLD, 32 Macrocell, 5 V, Low Power, TQFP-44
 *
 * KiCad symbol: `CPLD_Microchip:ATF1502ASL-xAx44`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-0995-CPLD-ATF1502AS(L)-Datasheet.pdf
 * Keywords: CPLD.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class ATF1502ASL_xAx44 extends Component.withPins({
  "I/O/TDI": "1",
  "I/O_2": "2",
  "I/O_3": "3",
  "GND_4": "4",
  "I/O/PD1": "5",
  "I/O_6": "6",
  "I/O/TMS": "7",
  "I/O_8": "8",
  "VCC_9": "9",
  "I/O_10": "10",
  "I/O_11": "11",
  "I/O_12": "12",
  "I/O_13": "13",
  "I/O_14": "14",
  "I/O_15": "15",
  "GND_16": "16",
  "VCC_17": "17",
  "I/O_18": "18",
  "I/O/PD2": "19",
  "I/O_20": "20",
  "I/O_21": "21",
  "I/O_22": "22",
  "I/O_23": "23",
  "GND_24": "24",
  "I/O_25": "25",
  "I/O/TCK": "26",
  "I/O_27": "27",
  "I/O_28": "28",
  "VCC_29": "29",
  "I/O_30": "30",
  "I/O_31": "31",
  "I/O/TDO": "32",
  "I/O_33": "33",
  "I/O_34": "34",
  "I/O/GCLK3": "35",
  "GND_36": "36",
  "I/GCLK1": "37",
  "I/OE1/Vpp": "38",
  "I/GCLR": "39",
  "I/OE2/GCLK2": "40",
  "VCC_41": "41",
  "I/O_42": "42",
  "I/O_43": "43",
  "I/O_44": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I/O/TDI": "bidirectional", "I/O_2": "bidirectional", "I/O_3": "bidirectional", GND_4: "power_in", "I/O/PD1": "bidirectional", "I/O_6": "bidirectional", "I/O/TMS": "bidirectional", "I/O_8": "bidirectional", VCC_9: "power_in", "I/O_10": "bidirectional", "I/O_11": "bidirectional", "I/O_12": "bidirectional", "I/O_13": "bidirectional", "I/O_14": "bidirectional", "I/O_15": "bidirectional", GND_16: "passive", VCC_17: "passive", "I/O_18": "bidirectional", "I/O/PD2": "bidirectional", "I/O_20": "bidirectional", "I/O_21": "bidirectional", "I/O_22": "bidirectional", "I/O_23": "bidirectional", GND_24: "passive", "I/O_25": "bidirectional", "I/O/TCK": "bidirectional", "I/O_27": "bidirectional", "I/O_28": "bidirectional", VCC_29: "passive", "I/O_30": "bidirectional", "I/O_31": "bidirectional", "I/O/TDO": "bidirectional", "I/O_33": "bidirectional", "I/O_34": "bidirectional", "I/O/GCLK3": "bidirectional", GND_36: "passive", "I/GCLK1": "input", "I/OE1/Vpp": "input", "I/GCLR": "input", "I/OE2/GCLK2": "input", VCC_41: "passive", "I/O_42": "bidirectional", "I/O_43": "bidirectional", "I/O_44": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "CPLD_Microchip:ATF1502ASL-xAx44";
  override referencePrefix = "U";
}

/**
 * Microchip CPLD, 32 Macrocell, 3.3 V, TQFP-44
 *
 * KiCad symbol: `CPLD_Microchip:ATF1502ASV-xAx44`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc1615.pdf
 * Keywords: CPLD.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class ATF1502ASV_xAx44 extends Component.withPins({
  "I/O/TDI": "1",
  "I/O_2": "2",
  "I/O_3": "3",
  "GND_4": "4",
  "I/O/PD1": "5",
  "I/O_6": "6",
  "I/O/TMS": "7",
  "I/O_8": "8",
  "VCC_9": "9",
  "I/O_10": "10",
  "I/O_11": "11",
  "I/O_12": "12",
  "I/O_13": "13",
  "I/O_14": "14",
  "I/O_15": "15",
  "GND_16": "16",
  "VCC_17": "17",
  "I/O_18": "18",
  "I/O/PD2": "19",
  "I/O_20": "20",
  "I/O_21": "21",
  "I/O_22": "22",
  "I/O_23": "23",
  "GND_24": "24",
  "I/O_25": "25",
  "I/O/TCK": "26",
  "I/O_27": "27",
  "I/O_28": "28",
  "VCC_29": "29",
  "I/O_30": "30",
  "I/O_31": "31",
  "I/O/TDO": "32",
  "I/O_33": "33",
  "I/O_34": "34",
  "I/O/GCLK3": "35",
  "GND_36": "36",
  "I/GCLK1": "37",
  "I/OE1/Vpp": "38",
  "I/GCLR": "39",
  "I/OE2/GCLK2": "40",
  "VCC_41": "41",
  "I/O_42": "42",
  "I/O_43": "43",
  "I/O_44": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I/O/TDI": "bidirectional", "I/O_2": "bidirectional", "I/O_3": "bidirectional", GND_4: "power_in", "I/O/PD1": "bidirectional", "I/O_6": "bidirectional", "I/O/TMS": "bidirectional", "I/O_8": "bidirectional", VCC_9: "power_in", "I/O_10": "bidirectional", "I/O_11": "bidirectional", "I/O_12": "bidirectional", "I/O_13": "bidirectional", "I/O_14": "bidirectional", "I/O_15": "bidirectional", GND_16: "passive", VCC_17: "passive", "I/O_18": "bidirectional", "I/O/PD2": "bidirectional", "I/O_20": "bidirectional", "I/O_21": "bidirectional", "I/O_22": "bidirectional", "I/O_23": "bidirectional", GND_24: "passive", "I/O_25": "bidirectional", "I/O/TCK": "bidirectional", "I/O_27": "bidirectional", "I/O_28": "bidirectional", VCC_29: "passive", "I/O_30": "bidirectional", "I/O_31": "bidirectional", "I/O/TDO": "bidirectional", "I/O_33": "bidirectional", "I/O_34": "bidirectional", "I/O/GCLK3": "bidirectional", GND_36: "passive", "I/GCLK1": "input", "I/OE1/Vpp": "input", "I/GCLR": "input", "I/OE2/GCLK2": "input", VCC_41: "passive", "I/O_42": "bidirectional", "I/O_43": "bidirectional", "I/O_44": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "CPLD_Microchip:ATF1502ASV-xAx44";
  override referencePrefix = "U";
}

/**
 * Microchip CPLD, 64 Macrocell, 5 V, TQFP-44
 *
 * KiCad symbol: `CPLD_Microchip:ATF1504AS-xAx44`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-0950-CPLD-ATF1504AS(L)-Datasheet.pdf
 * Keywords: CPLD.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class ATF1504AS_xAx44 extends Component.withPins({
  "I/O/TDI": "1",
  "I/O_2": "2",
  "I/O_3": "3",
  "GND_4": "4",
  "I/O/PD1": "5",
  "I/O_6": "6",
  "I/O/TMS": "7",
  "I/O_8": "8",
  "VCC_9": "9",
  "I/O_10": "10",
  "I/O_11": "11",
  "I/O_12": "12",
  "I/O_13": "13",
  "I/O_14": "14",
  "I/O_15": "15",
  "GND_16": "16",
  "VCC_17": "17",
  "I/O_18": "18",
  "I/O/PD2": "19",
  "I/O_20": "20",
  "I/O_21": "21",
  "I/O_22": "22",
  "I/O_23": "23",
  "GND_24": "24",
  "I/O_25": "25",
  "I/O/TCK": "26",
  "I/O_27": "27",
  "I/O_28": "28",
  "VCC_29": "29",
  "I/O_30": "30",
  "I/O_31": "31",
  "I/O/TDO": "32",
  "I/O_33": "33",
  "I/O_34": "34",
  "I/O/GCLK3": "35",
  "GND_36": "36",
  "I/GCLK1": "37",
  "I/OE1/Vpp": "38",
  "I/GCLR": "39",
  "I/OE2/GCLK2": "40",
  "VCC_41": "41",
  "I/O_42": "42",
  "I/O_43": "43",
  "I/O_44": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I/O/TDI": "bidirectional", "I/O_2": "bidirectional", "I/O_3": "bidirectional", GND_4: "power_in", "I/O/PD1": "bidirectional", "I/O_6": "bidirectional", "I/O/TMS": "bidirectional", "I/O_8": "bidirectional", VCC_9: "power_in", "I/O_10": "bidirectional", "I/O_11": "bidirectional", "I/O_12": "bidirectional", "I/O_13": "bidirectional", "I/O_14": "bidirectional", "I/O_15": "bidirectional", GND_16: "passive", VCC_17: "passive", "I/O_18": "bidirectional", "I/O/PD2": "bidirectional", "I/O_20": "bidirectional", "I/O_21": "bidirectional", "I/O_22": "bidirectional", "I/O_23": "bidirectional", GND_24: "passive", "I/O_25": "bidirectional", "I/O/TCK": "bidirectional", "I/O_27": "bidirectional", "I/O_28": "bidirectional", VCC_29: "passive", "I/O_30": "bidirectional", "I/O_31": "bidirectional", "I/O/TDO": "bidirectional", "I/O_33": "bidirectional", "I/O_34": "bidirectional", "I/O/GCLK3": "bidirectional", GND_36: "passive", "I/GCLK1": "input", "I/OE1/Vpp": "input", "I/GCLR": "input", "I/OE2/GCLK2": "input", VCC_41: "passive", "I/O_42": "bidirectional", "I/O_43": "bidirectional", "I/O_44": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "CPLD_Microchip:ATF1504AS-xAx44";
  override referencePrefix = "U";
}

/**
 * Microchip CPLD, 64 Macrocell, 5 V, Low Power, TQFP-44
 *
 * KiCad symbol: `CPLD_Microchip:ATF1504ASL-xAx44`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-0950-CPLD-ATF1504AS(L)-Datasheet.pdf
 * Keywords: CPLD.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class ATF1504ASL_xAx44 extends Component.withPins({
  "I/O/TDI": "1",
  "I/O_2": "2",
  "I/O_3": "3",
  "GND_4": "4",
  "I/O/PD1": "5",
  "I/O_6": "6",
  "I/O/TMS": "7",
  "I/O_8": "8",
  "VCC_9": "9",
  "I/O_10": "10",
  "I/O_11": "11",
  "I/O_12": "12",
  "I/O_13": "13",
  "I/O_14": "14",
  "I/O_15": "15",
  "GND_16": "16",
  "VCC_17": "17",
  "I/O_18": "18",
  "I/O/PD2": "19",
  "I/O_20": "20",
  "I/O_21": "21",
  "I/O_22": "22",
  "I/O_23": "23",
  "GND_24": "24",
  "I/O_25": "25",
  "I/O/TCK": "26",
  "I/O_27": "27",
  "I/O_28": "28",
  "VCC_29": "29",
  "I/O_30": "30",
  "I/O_31": "31",
  "I/O/TDO": "32",
  "I/O_33": "33",
  "I/O_34": "34",
  "I/O/GCLK3": "35",
  "GND_36": "36",
  "I/GCLK1": "37",
  "I/OE1/Vpp": "38",
  "I/GCLR": "39",
  "I/OE2/GCLK2": "40",
  "VCC_41": "41",
  "I/O_42": "42",
  "I/O_43": "43",
  "I/O_44": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I/O/TDI": "bidirectional", "I/O_2": "bidirectional", "I/O_3": "bidirectional", GND_4: "power_in", "I/O/PD1": "bidirectional", "I/O_6": "bidirectional", "I/O/TMS": "bidirectional", "I/O_8": "bidirectional", VCC_9: "power_in", "I/O_10": "bidirectional", "I/O_11": "bidirectional", "I/O_12": "bidirectional", "I/O_13": "bidirectional", "I/O_14": "bidirectional", "I/O_15": "bidirectional", GND_16: "passive", VCC_17: "passive", "I/O_18": "bidirectional", "I/O/PD2": "bidirectional", "I/O_20": "bidirectional", "I/O_21": "bidirectional", "I/O_22": "bidirectional", "I/O_23": "bidirectional", GND_24: "passive", "I/O_25": "bidirectional", "I/O/TCK": "bidirectional", "I/O_27": "bidirectional", "I/O_28": "bidirectional", VCC_29: "passive", "I/O_30": "bidirectional", "I/O_31": "bidirectional", "I/O/TDO": "bidirectional", "I/O_33": "bidirectional", "I/O_34": "bidirectional", "I/O/GCLK3": "bidirectional", GND_36: "passive", "I/GCLK1": "input", "I/OE1/Vpp": "input", "I/GCLR": "input", "I/OE2/GCLK2": "input", VCC_41: "passive", "I/O_42": "bidirectional", "I/O_43": "bidirectional", "I/O_44": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "CPLD_Microchip:ATF1504ASL-xAx44";
  override referencePrefix = "U";
}

/**
 * Microchip CPLD, 64 Macrocell, 3.3 V, TQFP-44
 *
 * KiCad symbol: `CPLD_Microchip:ATF1504ASV-xAx44`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/ATF1504ASV-ATF1504ASVL-Data-Sheet-20006185A.pdf
 * Keywords: CPLD.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class ATF1504ASV_xAx44 extends Component.withPins({
  "I/O/TDI": "1",
  "I/O_2": "2",
  "I/O_3": "3",
  "GND_4": "4",
  "I/O/PD1": "5",
  "I/O_6": "6",
  "I/O/TMS": "7",
  "I/O_8": "8",
  "VCC_9": "9",
  "I/O_10": "10",
  "I/O_11": "11",
  "I/O_12": "12",
  "I/O_13": "13",
  "I/O_14": "14",
  "I/O_15": "15",
  "GND_16": "16",
  "VCC_17": "17",
  "I/O_18": "18",
  "I/O/PD2": "19",
  "I/O_20": "20",
  "I/O_21": "21",
  "I/O_22": "22",
  "I/O_23": "23",
  "GND_24": "24",
  "I/O_25": "25",
  "I/O/TCK": "26",
  "I/O_27": "27",
  "I/O_28": "28",
  "VCC_29": "29",
  "I/O_30": "30",
  "I/O_31": "31",
  "I/O/TDO": "32",
  "I/O_33": "33",
  "I/O_34": "34",
  "I/O/GCLK3": "35",
  "GND_36": "36",
  "I/GCLK1": "37",
  "I/OE1/Vpp": "38",
  "I/GCLR": "39",
  "I/OE2/GCLK2": "40",
  "VCC_41": "41",
  "I/O_42": "42",
  "I/O_43": "43",
  "I/O_44": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I/O/TDI": "bidirectional", "I/O_2": "bidirectional", "I/O_3": "bidirectional", GND_4: "power_in", "I/O/PD1": "bidirectional", "I/O_6": "bidirectional", "I/O/TMS": "bidirectional", "I/O_8": "bidirectional", VCC_9: "power_in", "I/O_10": "bidirectional", "I/O_11": "bidirectional", "I/O_12": "bidirectional", "I/O_13": "bidirectional", "I/O_14": "bidirectional", "I/O_15": "bidirectional", GND_16: "passive", VCC_17: "passive", "I/O_18": "bidirectional", "I/O/PD2": "bidirectional", "I/O_20": "bidirectional", "I/O_21": "bidirectional", "I/O_22": "bidirectional", "I/O_23": "bidirectional", GND_24: "passive", "I/O_25": "bidirectional", "I/O/TCK": "bidirectional", "I/O_27": "bidirectional", "I/O_28": "bidirectional", VCC_29: "passive", "I/O_30": "bidirectional", "I/O_31": "bidirectional", "I/O/TDO": "bidirectional", "I/O_33": "bidirectional", "I/O_34": "bidirectional", "I/O/GCLK3": "bidirectional", GND_36: "passive", "I/GCLK1": "input", "I/OE1/Vpp": "input", "I/GCLR": "input", "I/OE2/GCLK2": "input", VCC_41: "passive", "I/O_42": "bidirectional", "I/O_43": "bidirectional", "I/O_44": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "CPLD_Microchip:ATF1504ASV-xAx44";
  override referencePrefix = "U";
}

/**
 * Microchip CPLD, 32 Macrocell, 3.3 V, Low Power, TQFP-44
 *
 * KiCad symbol: `CPLD_Microchip:ATF1504ASVL-xAx44`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/ATF1504ASV-ATF1504ASVL-Data-Sheet-20006185A.pdf
 * Keywords: CPLD.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class ATF1504ASVL_xAx44 extends Component.withPins({
  "I/O/TDI": "1",
  "I/O_2": "2",
  "I/O_3": "3",
  "GND_4": "4",
  "I/O/PD1": "5",
  "I/O_6": "6",
  "I/O/TMS": "7",
  "I/O_8": "8",
  "VCC_9": "9",
  "I/O_10": "10",
  "I/O_11": "11",
  "I/O_12": "12",
  "I/O_13": "13",
  "I/O_14": "14",
  "I/O_15": "15",
  "GND_16": "16",
  "VCC_17": "17",
  "I/O_18": "18",
  "I/O/PD2": "19",
  "I/O_20": "20",
  "I/O_21": "21",
  "I/O_22": "22",
  "I/O_23": "23",
  "GND_24": "24",
  "I/O_25": "25",
  "I/O/TCK": "26",
  "I/O_27": "27",
  "I/O_28": "28",
  "VCC_29": "29",
  "I/O_30": "30",
  "I/O_31": "31",
  "I/O/TDO": "32",
  "I/O_33": "33",
  "I/O_34": "34",
  "I/O/GCLK3": "35",
  "GND_36": "36",
  "I/GCLK1": "37",
  "I/OE1/Vpp": "38",
  "I/GCLR": "39",
  "I/OE2/GCLK2": "40",
  "VCC_41": "41",
  "I/O_42": "42",
  "I/O_43": "43",
  "I/O_44": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "I/O/TDI": "bidirectional", "I/O_2": "bidirectional", "I/O_3": "bidirectional", GND_4: "power_in", "I/O/PD1": "bidirectional", "I/O_6": "bidirectional", "I/O/TMS": "bidirectional", "I/O_8": "bidirectional", VCC_9: "power_in", "I/O_10": "bidirectional", "I/O_11": "bidirectional", "I/O_12": "bidirectional", "I/O_13": "bidirectional", "I/O_14": "bidirectional", "I/O_15": "bidirectional", GND_16: "passive", VCC_17: "passive", "I/O_18": "bidirectional", "I/O/PD2": "bidirectional", "I/O_20": "bidirectional", "I/O_21": "bidirectional", "I/O_22": "bidirectional", "I/O_23": "bidirectional", GND_24: "passive", "I/O_25": "bidirectional", "I/O/TCK": "bidirectional", "I/O_27": "bidirectional", "I/O_28": "bidirectional", VCC_29: "passive", "I/O_30": "bidirectional", "I/O_31": "bidirectional", "I/O/TDO": "bidirectional", "I/O_33": "bidirectional", "I/O_34": "bidirectional", "I/O/GCLK3": "bidirectional", GND_36: "passive", "I/GCLK1": "input", "I/OE1/Vpp": "input", "I/GCLR": "input", "I/OE2/GCLK2": "input", VCC_41: "passive", "I/O_42": "bidirectional", "I/O_43": "bidirectional", "I/O_44": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "CPLD_Microchip:ATF1504ASVL-xAx44";
  override referencePrefix = "U";
}

/**
 * Atmel/Microchip CPLD, 128 Macrocell, 5V supply, PLCC-84
 *
 * KiCad symbol: `CPLD_Microchip:ATF1508ASx-xxJx84`. Reference prefix: `U`.
 * Footprint filters: *PLCC*29.3*x29.3*mm?P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/doc0784.pdf
 * Keywords: EE-PLD electrically-erasable-PLD JTAG ATF1508AS-7JC84 ATF1508AS-10JC84 ATF1508AS-10JI84 ATF1508AS-15JC84 ATF1508AS-15JI84 ATF1508AS-7JX84 ATF1508AS-10JU84 ATF1508ASL-20JC84 ATF1508ASL-25JI84 ATF1508ASL-25JU84 EPM7128SLI84-10 EPM7128SLI84-15 EPM7128SLC84-7 EPM7128SLC84-10 EPM7128SLC84-15.
 * Default footprint: Package_LCC:PLCC-84_29.3x29.3mm_P1.27mm.
 */
export class ATF1508ASx_xxJx84 extends Component.withPins({
  "VCCIO_13": "13",
  "I/O/PD2": "45",
  "I/O_46": "46",
  "GND_47": "47",
  "I/O_48": "48",
  "I/O_49": "49",
  "I/O_50": "50",
  "I/O_51": "51",
  "I/O_52": "52",
  "I/O_54": "54",
  "I/O_55": "55",
  "I/O_56": "56",
  "I/O_57": "57",
  "I/O_58": "58",
  "GND_59": "59",
  "I/O_60": "60",
  "I/O_61": "61",
  "I/O/TCK": "62",
  "I/O_63": "63",
  "I/O_64": "64",
  "I/O_65": "65",
  "VCCIO_66": "66",
  "I/O_67": "67",
  "I/O_68": "68",
  "I/O_69": "69",
  "I/O_70": "70",
  "I/O/TDO": "71",
  "GND_72": "72",
  "I/O_73": "73",
  "I/O_74": "74",
  "I/O_75": "75",
  "I/O_76": "76",
  "I/O_77": "77",
  "VCCIO_78": "78",
  "I/O_79": "79",
  "I/O_80": "80",
  "I/O/GCLK3": "81",
  "GND_82": "82",
  "INPUT/GCLK1": "83",
  "INPUT/OE1": "84",
  "INPUT/GCLR": "1",
  "INPUT/OE2/GCLK2": "2",
  "VCCINT_3": "3",
  "I/O_4": "4",
  "I/O_5": "5",
  "I/O_6": "6",
  "GND_7": "7",
  "I/O_8": "8",
  "I/O_9": "9",
  "I/O_10": "10",
  "I/O_11": "11",
  "I/O/PD1": "12",
  "I/O/TDI": "14",
  "I/O_15": "15",
  "I/O_16": "16",
  "I/O_17": "17",
  "I/O_18": "18",
  "GND_19": "19",
  "I/O_20": "20",
  "I/O_21": "21",
  "I/O_22": "22",
  "I/O/TMS": "23",
  "I/O_24": "24",
  "I/O_25": "25",
  "VCCIO_26": "26",
  "I/O_27": "27",
  "I/O_28": "28",
  "I/O_29": "29",
  "I/O_30": "30",
  "I/O_31": "31",
  "GND_32": "32",
  "I/O_33": "33",
  "I/O_34": "34",
  "I/O_35": "35",
  "I/O_36": "36",
  "I/O_37": "37",
  "VCCIO_38": "38",
  "I/O_39": "39",
  "I/O_40": "40",
  "I/O_41": "41",
  "GND_42": "42",
  "VCCINT_43": "43",
  "I/O_44": "44",
  "VCCIO_53": "53",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCCIO_13: "power_in", "I/O/PD2": "bidirectional", "I/O_46": "bidirectional", GND_47: "passive", "I/O_48": "bidirectional", "I/O_49": "bidirectional", "I/O_50": "bidirectional", "I/O_51": "bidirectional", "I/O_52": "bidirectional", "I/O_54": "bidirectional", "I/O_55": "bidirectional", "I/O_56": "bidirectional", "I/O_57": "bidirectional", "I/O_58": "bidirectional", GND_59: "passive", "I/O_60": "bidirectional", "I/O_61": "bidirectional", "I/O/TCK": "bidirectional", "I/O_63": "bidirectional", "I/O_64": "bidirectional", "I/O_65": "bidirectional", VCCIO_66: "passive", "I/O_67": "bidirectional", "I/O_68": "bidirectional", "I/O_69": "bidirectional", "I/O_70": "bidirectional", "I/O/TDO": "bidirectional", GND_72: "passive", "I/O_73": "bidirectional", "I/O_74": "bidirectional", "I/O_75": "bidirectional", "I/O_76": "bidirectional", "I/O_77": "bidirectional", VCCIO_78: "passive", "I/O_79": "bidirectional", "I/O_80": "bidirectional", "I/O/GCLK3": "bidirectional", GND_82: "passive", "INPUT/GCLK1": "input", "INPUT/OE1": "input", "INPUT/GCLR": "input", "INPUT/OE2/GCLK2": "input", VCCINT_3: "power_in", "I/O_4": "bidirectional", "I/O_5": "bidirectional", "I/O_6": "bidirectional", GND_7: "power_in", "I/O_8": "bidirectional", "I/O_9": "bidirectional", "I/O_10": "bidirectional", "I/O_11": "bidirectional", "I/O/PD1": "bidirectional", "I/O/TDI": "bidirectional", "I/O_15": "bidirectional", "I/O_16": "bidirectional", "I/O_17": "bidirectional", "I/O_18": "bidirectional", GND_19: "passive", "I/O_20": "bidirectional", "I/O_21": "bidirectional", "I/O_22": "bidirectional", "I/O/TMS": "bidirectional", "I/O_24": "bidirectional", "I/O_25": "bidirectional", VCCIO_26: "passive", "I/O_27": "bidirectional", "I/O_28": "bidirectional", "I/O_29": "bidirectional", "I/O_30": "bidirectional", "I/O_31": "bidirectional", GND_32: "passive", "I/O_33": "bidirectional", "I/O_34": "bidirectional", "I/O_35": "bidirectional", "I/O_36": "bidirectional", "I/O_37": "bidirectional", VCCIO_38: "passive", "I/O_39": "bidirectional", "I/O_40": "bidirectional", "I/O_41": "bidirectional", GND_42: "passive", VCCINT_43: "passive", "I/O_44": "bidirectional", VCCIO_53: "passive", ...opts.pinTypes } });
  }
  override schema = "CPLD_Microchip:ATF1508ASx-xxJx84";
  override referencePrefix = "U";
}
