// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 36V linear LED driver, adjustable current, maximum current 100mA, SOT-23-6
 *
 * KiCad symbol: `Driver_LED:AL5819W6`. Reference prefix: `U`.
 * Footprint filters: *SOT?23*.
 * @see https://www.diodes.com/datasheet/download/AL5819.pdf
 * Keywords: ccr low dropout constant current.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class AL5819W6 extends Component.withPins({
  "NC_1": "1",
  "GND": "2",
  "R_{SET}": "3",
  "V_{IN}": "4",
  "NC_5": "5",
  "LED": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", GND: "power_in", "R_{SET}": "input", "V_{IN}": "power_in", NC_5: "no_connect", LED: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:AL5819W6";
  override referencePrefix = "U";
}

/**
 * 40V 1.5A Constant Current Buck LED Driver IC, MSOP-8
 *
 * KiCad symbol: `Driver_LED:AL8860MP`. Reference prefix: `U`.
 * Footprint filters: MSOP*1EP*3x3mm*P0.65mm*.
 * @see https://www.diodes.com/assets/Datasheets/AL8860.pdf
 * Keywords: LED Driver Buck Constant Current.
 * Default footprint: Package_SO:MSOP-8-1EP_3x3mm_P0.65mm_EP1.5x1.8mm.
 */
export class AL8860MP extends Component.withPins({
  "SET": "1",
  "GND_2": "2",
  "GND_3": "3",
  "CTRL": "4",
  "SW_5": "5",
  "SW_6": "6",
  "NC": "7",
  "VIN": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SET: "input", GND_2: "power_in", GND_3: "passive", CTRL: "input", SW_5: "open_collector", SW_6: "open_collector", NC: "no_connect", VIN: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:AL8860MP";
  override referencePrefix = "U";
}

/**
 * 40V 1.5A Constant Current Buck LED Driver IC, TSOT-23-5
 *
 * KiCad symbol: `Driver_LED:AL8860WT`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AL8860.pdf
 * Keywords: LED Driver Buck Constant Current.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 */
export class AL8860WT extends Component.withPins({
  "SW": "1",
  "GND": "2",
  "CTRL": "3",
  "SET": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SW: "open_collector", GND: "power_in", CTRL: "input", SET: "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:AL8860WT";
  override referencePrefix = "U";
}

/**
 * 1.2MHz White LED Boost Drivers with Built-in Schottky, 2.5..16Vin, <30Vout, SOT-23-6
 *
 * KiCad symbol: `Driver_LED:AP3019AKTR`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP3019A.pdf
 * Keywords: Switching driver backlight.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class AP3019AKTR extends Component.withPins({
  "SW": "1",
  "GND": "2",
  "FB": "3",
  "CTRL": "4",
  "V_{OUT}": "5",
  "V_{IN}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SW: "input", GND: "power_in", FB: "input", CTRL: "input", "V_{OUT}": "power_out", "V_{IN}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:AP3019AKTR";
  override referencePrefix = "U";
}

/**
 * 1.2MHz White LED Boost Drivers with Built-in Schottky, 2.5..16Vin, <30Vout, ThinSOT-23-6
 *
 * KiCad symbol: `Driver_LED:AP3019AKTTR`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/AP3019A.pdf
 * Keywords: Switching driver backlight.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class AP3019AKTTR extends Component.withPins({
  "SW": "1",
  "GND": "2",
  "FB": "3",
  "CTRL": "4",
  "V_{OUT}": "5",
  "V_{IN}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SW: "input", GND: "power_in", FB: "input", CTRL: "input", "V_{OUT}": "power_out", "V_{IN}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:AP3019AKTTR";
  override referencePrefix = "U";
}

/**
 * 100 mA adjustable constant current driver (linear), max 42V, SOT26 (SC-74)
 *
 * KiCad symbol: `Driver_LED:BCR430UW6`. Reference prefix: `U`.
 * Footprint filters: SC?74*.
 * @see https://www.diodes.com/assets/Datasheets/BCR430UW6.pdf
 * Keywords: LED driver constant current.
 * Default footprint: Package_TO_SOT_SMD:SC-74-6_1.55x2.9mm_P0.95mm.
 */
export class BCR430UW6 extends Component.withPins({
  "NC_1": "1",
  "GND": "2",
  "REXT": "3",
  "VS": "4",
  "NC_5": "5",
  "OUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", GND: "power_in", REXT: "passive", VS: "power_in", NC_5: "no_connect", OUT: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:BCR430UW6";
  override referencePrefix = "U";
}

/**
 * Digital tube driver and keyboard scan (common cathode only), SOIC-16 (SOP-16)
 *
 * KiCad symbol: `Driver_LED:CH455G`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x9.9mm*P1.27mm*.
 * @see https://www.wch-ic.com/products/CH455.html
 * Keywords: WCH Nixie-tube cold-cathode-display I2C.
 * Default footprint: Package_SO:STC_SOP-16_3.9x9.9mm_P1.27mm.
 */
export class CH455G extends Component.withPins({
  "SEG4": "1",
  "SEG5": "2",
  "SEG6": "3",
  "SEG7": "4",
  "DIG0": "5",
  "SCL": "6",
  "SDA": "7",
  "GND": "8",
  "DIG1": "9",
  "DIG2": "10",
  "DIG3": "11",
  "SEG0": "12",
  "SEG1": "13",
  "VCC": "14",
  "SEG2": "15",
  "SEG3": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SEG4: "tri_state", SEG5: "tri_state", SEG6: "tri_state", SEG7: "tri_state", DIG0: "output", SCL: "input", SDA: "bidirectional", GND: "power_in", DIG1: "output", DIG2: "output", DIG3: "output", SEG0: "tri_state", SEG1: "tri_state", VCC: "power_in", SEG2: "tri_state", SEG3: "tri_state", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:CH455G";
  override referencePrefix = "U";
}

/**
 * Digital tube driver and keyboard scan (common cathode only), with interrupt/current setting, DIP-18
 *
 * KiCad symbol: `Driver_LED:CH455K`. Reference prefix: `U`.
 * Footprint filters: DIP-18*.
 * @see https://www.wch-ic.com/products/CH455.html
 * Keywords: WCH Nixie I2C.
 * Default footprint: Package_DIP:DIP-18_W7.62mm.
 */
export class CH455K extends Component.withPins({
  "DIG0": "1",
  "SCL": "2",
  "SDA": "3",
  "GND": "4",
  "DIG1": "5",
  "DIG2": "6",
  "DIG3": "7",
  "SEG0": "9",
  "SEG1": "10",
  "VCC": "11",
  "SEG2": "12",
  "SEG3": "13",
  "SEG4": "14",
  "SEG5": "15",
  "SEG6": "16",
  "SEG7": "17",
  "ISET": "8",
  "~{INT}": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DIG0: "output", SCL: "input", SDA: "bidirectional", GND: "power_in", DIG1: "output", DIG2: "output", DIG3: "output", SEG0: "tri_state", SEG1: "tri_state", VCC: "power_in", SEG2: "tri_state", SEG3: "tri_state", SEG4: "tri_state", SEG5: "tri_state", SEG6: "tri_state", SEG7: "tri_state", ISET: "input", "~{INT}": "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:CH455K";
  override referencePrefix = "U";
}

/**
 * Digital tube driver and keyboard scan (common cathode only), with interrupt/current setting, SOP-18
 *
 * KiCad symbol: `Driver_LED:CH455H`. Reference prefix: `U`.
 * Footprint filters: SO*-18*.
 * @see https://www.wch-ic.com/products/CH455.html
 * Keywords: WCH Nixie I2C.
 * Default footprint: Package_SO:SOP-18_7.495x11.515mm_P1.27mm.
 */
export class CH455H extends Component.withPins({
  "DIG0": "1",
  "SCL": "2",
  "SDA": "3",
  "GND": "4",
  "DIG1": "5",
  "DIG2": "6",
  "DIG3": "7",
  "SEG0": "9",
  "SEG1": "10",
  "VCC": "11",
  "SEG2": "12",
  "SEG3": "13",
  "SEG4": "14",
  "SEG5": "15",
  "SEG6": "16",
  "SEG7": "17",
  "ISET": "8",
  "~{INT}": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DIG0: "output", SCL: "input", SDA: "bidirectional", GND: "power_in", DIG1: "output", DIG2: "output", DIG3: "output", SEG0: "tri_state", SEG1: "tri_state", VCC: "power_in", SEG2: "tri_state", SEG3: "tri_state", SEG4: "tri_state", SEG5: "tri_state", SEG6: "tri_state", SEG7: "tri_state", ISET: "input", "~{INT}": "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:CH455H";
  override referencePrefix = "U";
}

/**
 * Temperature Compensated Constant Current LED IC, D-PAK
 *
 * KiCad symbol: `Driver_LED:CL220K4-G`. Reference prefix: `U`.
 * Footprint filters: TO?252*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005413A.pdf
 * Keywords: Constant Current LED Driver IC.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class CL220K4_G extends Component.withPins({
  "VA": "1",
  "VB": "2",
  "NC": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VA: "input", VB: "input", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:CL220K4-G";
  override referencePrefix = "U";
}

/**
 * Temperature Compensated Constant Current LED IC, TO-220
 *
 * KiCad symbol: `Driver_LED:CL220N5-G`. Reference prefix: `U`.
 * Footprint filters: TO?220*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005413A.pdf
 * Keywords: Constant Current LED Driver IC.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class CL220N5_G extends Component.withPins({
  "VA": "1",
  "VB": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VA: "input", VB: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:CL220N5-G";
  override referencePrefix = "U";
}

/**
 * 37V Step-up LED driver with PWM, 2.7-5.5Vin, 1.3A Iout max, DFN-6
 *
 * KiCad symbol: `Driver_LED:DIO5661CD6`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*2x2mm*P0.65mm*.
 * @see http://www.dioo.com/uploads/product/20190311/e6c7f30c0fbe92fbfa6965c8ef1c5b19.pdf
 * Keywords: LED driver single.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_2x2mm_P0.65mm_EP1x1.6mm.
 */
export class DIO5661CD6 extends Component.withPins({
  "FB": "1",
  "P2": "2",
  "GND_3": "3",
  "LX": "4",
  "EN": "5",
  "VIN": "6",
  "GND_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FB: "input", P2: "no_connect", GND_3: "power_in", LX: "open_collector", EN: "input", VIN: "power_in", GND_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:DIO5661CD6";
  override referencePrefix = "U";
}

/**
 * 37V Step-up LED driver with PWM, 2.7-5.5Vin, 1.3A Iout max, SOT23-6
 *
 * KiCad symbol: `Driver_LED:DIO5661ST6`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.dioo.com/uploads/product/20190311/e6c7f30c0fbe92fbfa6965c8ef1c5b19.pdf
 * Keywords: LED driver single.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class DIO5661ST6 extends Component.withPins({
  "LX": "1",
  "GND": "2",
  "FB": "3",
  "EN": "4",
  "P5": "5",
  "VIN": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LX: "open_collector", GND: "power_in", FB: "input", EN: "input", P5: "no_connect", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:DIO5661ST6";
  override referencePrefix = "U";
}

/**
 * 37V Step-up LED driver with PWM, 2.7-5.5Vin, 1.3A Iout max, TSOT23-6
 *
 * KiCad symbol: `Driver_LED:DIO5661TST6`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see http://www.dioo.com/uploads/product/20190311/e6c7f30c0fbe92fbfa6965c8ef1c5b19.pdf
 * Keywords: LED driver single.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class DIO5661TST6 extends Component.withPins({
  "LX": "1",
  "GND": "2",
  "FB": "3",
  "EN": "4",
  "P5": "5",
  "VIN": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LX: "open_collector", GND: "power_in", FB: "input", EN: "input", P5: "no_connect", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:DIO5661TST6";
  override referencePrefix = "U";
}

/**
 * LED Matrix Driver, 32×8 or 24×16, LQFP-52
 *
 * KiCad symbol: `Driver_LED:HT1632C-52LQFP`. Reference prefix: `U`.
 * Footprint filters: *LQFP*14x14mm*P1mm*.
 * @see https://web.archive.org/web/20180404050010/http://www.holtek.com/documents/10179/116711/HT1632Cv170.pdf
 * Keywords: LED Matrix Driver.
 * Default footprint: Package_QFP:LQFP-52_14x14mm_P1mm.
 */
export class HT1632C_52LQFP extends Component.withPins({
  "ROW11": "1",
  "ROW10": "2",
  "ROW9": "3",
  "ROW8": "4",
  "ROW7": "5",
  "ROW6": "6",
  "VDD_7": "7",
  "ROW5": "8",
  "ROW4": "9",
  "ROW3": "10",
  "ROW2": "11",
  "ROW1": "12",
  "ROW0": "13",
  "VSS_14": "14",
  "OSC": "15",
  "DATA": "16",
  "~{WR}": "17",
  "~{RD}": "18",
  "~{CS}": "19",
  "SYNC": "20",
  "VDD_21": "21",
  "COM0": "22",
  "COM1": "23",
  "COM2": "24",
  "VSS_25": "25",
  "COM3": "26",
  "COM4": "27",
  "COM5": "28",
  "COM6": "29",
  "COM7": "30",
  "ROW31/COM8": "31",
  "ROW30/COM9": "32",
  "ROW29/COM10": "33",
  "ROW28/COM11": "34",
  "ROW27/COM12": "35",
  "VSS_36": "36",
  "ROW26/COM13": "37",
  "VDD_38": "38",
  "ROW25/COM14": "39",
  "ROW24/COM15": "40",
  "ROW23": "41",
  "ROW22": "42",
  "ROW21": "43",
  "ROW20": "44",
  "ROW19": "45",
  "ROW18": "46",
  "ROW17": "47",
  "ROW16": "48",
  "ROW15": "49",
  "ROW14": "50",
  "ROW13": "51",
  "ROW12": "52",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ROW11: "output", ROW10: "output", ROW9: "output", ROW8: "output", ROW7: "output", ROW6: "output", VDD_7: "power_in", ROW5: "output", ROW4: "output", ROW3: "output", ROW2: "output", ROW1: "output", ROW0: "output", VSS_14: "power_in", OSC: "bidirectional", DATA: "bidirectional", "~{WR}": "input", "~{RD}": "input", "~{CS}": "input", SYNC: "bidirectional", VDD_21: "power_in", COM0: "output", COM1: "output", COM2: "output", VSS_25: "passive", COM3: "output", COM4: "output", COM5: "output", COM6: "output", COM7: "output", "ROW31/COM8": "output", "ROW30/COM9": "output", "ROW29/COM10": "output", "ROW28/COM11": "output", "ROW27/COM12": "output", VSS_36: "passive", "ROW26/COM13": "output", VDD_38: "power_in", "ROW25/COM14": "output", "ROW24/COM15": "output", ROW23: "output", ROW22: "output", ROW21: "output", ROW20: "output", ROW19: "output", ROW18: "output", ROW17: "output", ROW16: "output", ROW15: "output", ROW14: "output", ROW13: "output", ROW12: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:HT1632C-52LQFP";
  override referencePrefix = "U";
}

/**
 * 3pin Constant Current 20mA LED Driver, SOT89
 *
 * KiCad symbol: `Driver_LED:HV9921N8-G`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005311A.pdf
 * Keywords: CC LED Driver High Voltage.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class HV9921N8_G extends Component.withPins({
  "D": "1",
  "GND": "2",
  "VDD": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", GND: "power_in", VDD: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:HV9921N8-G";
  override referencePrefix = "U";
}

/**
 * 3pin Constant Current 50mA LED Driver, SOT89
 *
 * KiCad symbol: `Driver_LED:HV9922N8-G`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005311A.pdf
 * Keywords: CC LED Driver High Voltage.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class HV9922N8_G extends Component.withPins({
  "D": "1",
  "GND": "2",
  "VDD": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", GND: "power_in", VDD: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:HV9922N8-G";
  override referencePrefix = "U";
}

/**
 * 3pin Constant Current 30mA LED Driver, SOT89
 *
 * KiCad symbol: `Driver_LED:HV9923N8-G`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005311A.pdf
 * Keywords: CC LED Driver High Voltage.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class HV9923N8_G extends Component.withPins({
  "D": "1",
  "GND": "2",
  "VDD": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", GND: "power_in", VDD: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:HV9923N8-G";
  override referencePrefix = "U";
}

/**
 * Programmable Current LED Lamp Driver, SO8 w/Heat Slug
 *
 * KiCad symbol: `Driver_LED:HV9925SG-G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/hv9925.pdf
 * Keywords: Programmable Current LED Lamp Driver High Voltage.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class HV9925SG_G extends Component.withPins({
  "Rs": "1",
  "GND": "2",
  "PWMD": "3",
  "VDD": "4",
  "NC": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Rs: "passive", GND: "power_in", PWMD: "input", VDD: "power_out", NC: "no_connect", D_6: "input", D_7: "input", D_8: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:HV9925SG-G";
  override referencePrefix = "U";
}

/**
 * Boost-Buck LED Lamp Driver, SO8
 *
 * KiCad symbol: `Driver_LED:HV9930LG-G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/hv9930.pdf
 * Keywords: Buck-Boost LED Lamp Driver High Voltage.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class HV9930LG_G extends Component.withPins({
  "VIN": "1",
  "CS1": "2",
  "GND": "3",
  "GATE": "4",
  "PWMD": "5",
  "VDD": "6",
  "CS2": "7",
  "REF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", CS1: "input", GND: "power_in", GATE: "output", PWMD: "output", VDD: "power_out", CS2: "input", REF: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:HV9930LG-G";
  override referencePrefix = "U";
}

/**
 * PFC Boost-Buck LED Lamp Driver, SO8
 *
 * KiCad symbol: `Driver_LED:HV9931LG-G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/hv9931.pdf
 * Keywords: Buck-Boost LED Lamp Driver High Voltage PFC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class HV9931LG_G extends Component.withPins({
  "VIN": "1",
  "CS1": "2",
  "GND": "3",
  "GATE": "4",
  "PWMD": "5",
  "VDD": "6",
  "CS2": "7",
  "REF": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", CS1: "input", GND: "power_in", GATE: "output", PWMD: "output", VDD: "power_out", CS2: "input", REF: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:HV9931LG-G";
  override referencePrefix = "U";
}

/**
 * Buck LED Lamp Driver Average-Mode Constant Current, 8V-450V, SO8
 *
 * KiCad symbol: `Driver_LED:HV9961LG-G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005588A.pdf
 * Keywords: Buck LED Lamp Driver High Voltage Average CC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class HV9961LG_G extends Component.withPins({
  "VIN": "1",
  "CS": "2",
  "GND": "3",
  "GATE": "4",
  "PWMD": "5",
  "VDD": "6",
  "LD": "7",
  "RT": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", CS: "input", GND: "power_in", GATE: "output", PWMD: "input", VDD: "power_out", LD: "input", RT: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:HV9961LG-G";
  override referencePrefix = "U";
}

/**
 * Buck LED Lamp Driver Average-Mode Constant Current, 8V-450V, SO16
 *
 * KiCad symbol: `Driver_LED:HV9961NG-G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005588A.pdf
 * Keywords: Buck LED Lamp Driver High Voltage Average CC.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class HV9961NG_G extends Component.withPins({
  "VIN": "1",
  "NC_2": "2",
  "NC_3": "3",
  "CS": "4",
  "GND": "5",
  "NC_6": "6",
  "NC_7": "7",
  "GATE": "8",
  "PWMD": "9",
  "NC_10": "10",
  "NC_11": "11",
  "VDD": "12",
  "LD": "13",
  "RT": "14",
  "NC_15": "15",
  "NC_16": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", NC_2: "no_connect", NC_3: "no_connect", CS: "input", GND: "power_in", NC_6: "no_connect", NC_7: "no_connect", GATE: "output", PWMD: "input", NC_10: "no_connect", NC_11: "no_connect", VDD: "power_out", LD: "input", RT: "input", NC_15: "no_connect", NC_16: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:HV9961NG-G";
  override referencePrefix = "U";
}

/**
 * Buck LED Lamp Driver Average-Mode Constant Current, DFN8 (3x3mm)
 *
 * KiCad symbol: `Driver_LED:HV9967BK7-G`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/hv9967b.pdf
 * Keywords: Buck LED Lamp Driver Low Voltage Average CC.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.65mm_EP1.55x2.4mm.
 */
export class HV9967BK7_G extends Component.withPins({
  "SW": "1",
  "Rs": "2",
  "GND_3": "3",
  "PWMD": "4",
  "RT": "6",
  "GND_7": "7",
  "VDD": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SW: "output", Rs: "input", GND_3: "power_in", PWMD: "output", RT: "input", GND_7: "passive", VDD: "power_out", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:HV9967BK7-G";
  override referencePrefix = "U";
}

/**
 * Buck LED Lamp Driver Average-Mode Constant Current, MSOP8
 *
 * KiCad symbol: `Driver_LED:HV9967BMG-G`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/hv9967b.pdf
 * Keywords: Buck LED Lamp Driver Low Voltage Average CC.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class HV9967BMG_G extends Component.withPins({
  "SW": "1",
  "Rs": "2",
  "GND_3": "3",
  "PWMD": "4",
  "RT": "6",
  "GND_7": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SW: "output", Rs: "input", GND_3: "power_in", PWMD: "output", RT: "input", GND_7: "passive", VDD: "power_out", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:HV9967BMG-G";
  override referencePrefix = "U";
}

/**
 * Isolated LED Lamp Driver Constant Current, SO8
 *
 * KiCad symbol: `Driver_LED:HV9972LG-G`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.mouser.com/ds/2/268/HV9972-272498-1181261.pdf
 * Keywords: Isolated LED Lamp Driver High Voltage CC.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class HV9972LG_G extends Component.withPins({
  "BIAS": "1",
  "VIN": "2",
  "VD": "3",
  "PWMD": "4",
  "CS": "5",
  "GND": "6",
  "GATE": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BIAS: "passive", VIN: "input", VD: "input", PWMD: "output", CS: "input", GND: "power_in", GATE: "output", VDD: "power_out", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:HV9972LG-G";
  override referencePrefix = "U";
}

/**
 * 16 channel LED controller with audio modulation mode, QFN-28
 *
 * KiCad symbol: `Driver_LED:IS31FL3216`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.4mm*.
 * @see http://www.issi.com/WW/pdf/IS31FL3216.pdf
 * Keywords: led pwm audio.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_4x4mm_P0.4mm_EP2.4x2.4mm.
 */
export class IS31FL3216 extends Component.withPins({
  "CLK": "1",
  "IN": "2",
  "OUT1": "3",
  "OUT2": "4",
  "OUT3": "5",
  "OUT4": "6",
  "GND_7": "7",
  "OUT5": "8",
  "OUT6": "9",
  "OUT7": "10",
  "OUT8": "11",
  "GPIO9/OUT9": "12",
  "GPIO10/OUT10": "13",
  "GPIO11/OUT11": "14",
  "GPIO12/OUT12": "15",
  "GND_16": "16",
  "GPIO13/OUT13": "17",
  "GPIO14/OUT14": "18",
  "GPIO15/OUT15": "19",
  "GPIO16/OUT16": "20",
  "~{INTB}": "21",
  "~{SDB}": "22",
  "SCL": "23",
  "SDA": "24",
  "AD": "25",
  "VCC": "26",
  "C_FILT": "27",
  "R_EXT": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CLK: "bidirectional", IN: "input", OUT1: "open_collector", OUT2: "open_collector", OUT3: "open_collector", OUT4: "open_collector", GND_7: "power_in", OUT5: "open_collector", OUT6: "open_collector", OUT7: "open_collector", OUT8: "open_collector", "GPIO9/OUT9": "bidirectional", "GPIO10/OUT10": "bidirectional", "GPIO11/OUT11": "bidirectional", "GPIO12/OUT12": "bidirectional", GND_16: "passive", "GPIO13/OUT13": "bidirectional", "GPIO14/OUT14": "bidirectional", "GPIO15/OUT15": "bidirectional", "GPIO16/OUT16": "bidirectional", "~{INTB}": "output", "~{SDB}": "input", SCL: "input", SDA: "bidirectional", AD: "input", VCC: "power_in", C_FILT: "passive", R_EXT: "passive", GND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:IS31FL3216";
  override referencePrefix = "U";
}

/**
 * 16 channel LED controller with audio modulation mode, QFN-28
 *
 * KiCad symbol: `Driver_LED:IS31FL3216A`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.4mm*.
 * @see http://www.issi.com/WW/pdf/IS31FL3216A.pdf
 * Keywords: led pwm audio.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_4x4mm_P0.4mm_EP2.4x2.4mm.
 */
export class IS31FL3216A extends Component.withPins({
  "CLK": "1",
  "IN": "2",
  "OUT1": "3",
  "OUT2": "4",
  "OUT3": "5",
  "OUT4": "6",
  "GND_7": "7",
  "OUT5": "8",
  "OUT6": "9",
  "OUT7": "10",
  "OUT8": "11",
  "GPIO9/OUT9": "12",
  "GPIO10/OUT10": "13",
  "GPIO11/OUT11": "14",
  "GPIO12/OUT12": "15",
  "GND_16": "16",
  "GPIO13/OUT13": "17",
  "GPIO14/OUT14": "18",
  "GPIO15/OUT15": "19",
  "GPIO16/OUT16": "20",
  "~{INTB}": "21",
  "~{SDB}": "22",
  "SCL": "23",
  "SDA": "24",
  "AD": "25",
  "VCC": "26",
  "C_FILT": "27",
  "R_EXT": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CLK: "bidirectional", IN: "input", OUT1: "open_collector", OUT2: "open_collector", OUT3: "open_collector", OUT4: "open_collector", GND_7: "power_in", OUT5: "open_collector", OUT6: "open_collector", OUT7: "open_collector", OUT8: "open_collector", "GPIO9/OUT9": "bidirectional", "GPIO10/OUT10": "bidirectional", "GPIO11/OUT11": "bidirectional", "GPIO12/OUT12": "bidirectional", GND_16: "passive", "GPIO13/OUT13": "bidirectional", "GPIO14/OUT14": "bidirectional", "GPIO15/OUT15": "bidirectional", "GPIO16/OUT16": "bidirectional", "~{INTB}": "output", "~{SDB}": "input", SCL: "input", SDA: "bidirectional", AD: "input", VCC: "power_in", C_FILT: "passive", R_EXT: "passive", GND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:IS31FL3216A";
  override referencePrefix = "U";
}

/**
 * 18 LED matrix driver with 8-bit PWM, SOP-24
 *
 * KiCad symbol: `Driver_LED:IS31FL3218-GR`. Reference prefix: `U`.
 * Footprint filters: SOP*7.5x15.4mm*P1.27mm*.
 * @see http://www.issi.com/WW/pdf/31FL3218.pdf
 * Keywords: led matrix pwm.
 * Default footprint: Package_SO:SOP-24_7.5x15.4mm_P1.27mm.
 */
export class IS31FL3218_GR extends Component.withPins({
  "OUT18": "1",
  "R_EXT": "2",
  "VCC": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "OUT1": "7",
  "OUT2": "8",
  "OUT3": "9",
  "OUT4": "10",
  "OUT5": "11",
  "OUT6": "12",
  "OUT7": "13",
  "OUT8": "14",
  "OUT9": "15",
  "OUT10": "16",
  "OUT11": "17",
  "OUT12": "18",
  "OUT13": "19",
  "OUT14": "20",
  "OUT15": "21",
  "OUT16": "22",
  "OUT17": "23",
  "~{SDB}": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT18: "open_collector", R_EXT: "passive", VCC: "power_in", GND: "power_in", SDA: "bidirectional", SCL: "input", OUT1: "open_collector", OUT2: "open_collector", OUT3: "open_collector", OUT4: "open_collector", OUT5: "open_collector", OUT6: "open_collector", OUT7: "open_collector", OUT8: "open_collector", OUT9: "open_collector", OUT10: "open_collector", OUT11: "open_collector", OUT12: "open_collector", OUT13: "open_collector", OUT14: "open_collector", OUT15: "open_collector", OUT16: "open_collector", OUT17: "open_collector", "~{SDB}": "input", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:IS31FL3218-GR";
  override referencePrefix = "U";
}

/**
 * 18 LED matrix driver with 8-bit PWM, QFN-24
 *
 * KiCad symbol: `Driver_LED:IS31FL3218-QF`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.issi.com/WW/pdf/31FL3218.pdf
 * Keywords: led matrix pwm.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 */
export class IS31FL3218_QF extends Component.withPins({
  "OUT18": "1",
  "R_EXT": "2",
  "VCC": "3",
  "GND_4": "4",
  "SDA": "5",
  "SCL": "6",
  "OUT1": "7",
  "OUT2": "8",
  "OUT3": "9",
  "OUT4": "10",
  "OUT5": "11",
  "OUT6": "12",
  "OUT7": "13",
  "OUT8": "14",
  "OUT9": "15",
  "OUT10": "16",
  "OUT11": "17",
  "OUT12": "18",
  "OUT13": "19",
  "OUT14": "20",
  "OUT15": "21",
  "OUT16": "22",
  "OUT17": "23",
  "~{SDB}": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT18: "open_collector", R_EXT: "passive", VCC: "power_in", GND_4: "power_in", SDA: "bidirectional", SCL: "input", OUT1: "open_collector", OUT2: "open_collector", OUT3: "open_collector", OUT4: "open_collector", OUT5: "open_collector", OUT6: "open_collector", OUT7: "open_collector", OUT8: "open_collector", OUT9: "open_collector", OUT10: "open_collector", OUT11: "open_collector", OUT12: "open_collector", OUT13: "open_collector", OUT14: "open_collector", OUT15: "open_collector", OUT16: "open_collector", OUT17: "open_collector", "~{SDB}": "input", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:IS31FL3218-QF";
  override referencePrefix = "U";
}

/**
 * 36 LED matrix driver with 8-bit PWM, eTQFP-48
 *
 * KiCad symbol: `Driver_LED:IS31FL3236-TQ`. Reference prefix: `U`.
 * Footprint filters: TQFP*1EP*7x7mm*P0.5mm*.
 * @see https://www.lumissil.com/assets/pdf/core/IS31FL3236_DS.pdf
 * Keywords: led matrix pwm.
 * Default footprint: Package_QFP:TQFP-48-1EP_7x7mm_P0.5mm_EP4.11x4.11mm.
 */
export class IS31FL3236_TQ extends Component.withPins({
  "OUT3": "1",
  "OUT4": "2",
  "OUT5": "3",
  "GND_4": "4",
  "OUT6": "5",
  "OUT7": "6",
  "OUT8": "7",
  "OUT9": "8",
  "OUT10": "9",
  "OUT11": "10",
  "OUT12": "11",
  "OUT13": "12",
  "OUT14": "13",
  "OUT15": "14",
  "OUT16": "15",
  "OUT17": "16",
  "OUT18": "17",
  "GND_18": "18",
  "GND_19": "19",
  "OUT19": "20",
  "OUT20": "21",
  "OUT21": "22",
  "OUT22": "23",
  "OUT23": "24",
  "OUT24": "25",
  "OUT25": "26",
  "OUT26": "27",
  "OUT27": "28",
  "OUT28": "29",
  "OUT29": "30",
  "OUT30": "31",
  "OUT31": "32",
  "GND_33": "33",
  "OUT32": "34",
  "OUT33": "35",
  "OUT34": "36",
  "OUT35": "37",
  "OUT36": "38",
  "~{SDB}": "39",
  "AD": "40",
  "VCC": "41",
  "GND_42": "42",
  "GND_43": "43",
  "R_EXT": "44",
  "SDA": "45",
  "SCL": "46",
  "OUT1": "47",
  "OUT2": "48",
  "GND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT3: "output", OUT4: "output", OUT5: "output", GND_4: "power_in", OUT6: "output", OUT7: "output", OUT8: "output", OUT9: "output", OUT10: "output", OUT11: "output", OUT12: "output", OUT13: "output", OUT14: "output", OUT15: "output", OUT16: "output", OUT17: "output", OUT18: "output", GND_18: "passive", GND_19: "passive", OUT19: "output", OUT20: "output", OUT21: "output", OUT22: "output", OUT23: "output", OUT24: "output", OUT25: "output", OUT26: "output", OUT27: "output", OUT28: "output", OUT29: "output", OUT30: "output", OUT31: "output", GND_33: "passive", OUT32: "output", OUT33: "output", OUT34: "output", OUT35: "output", OUT36: "output", "~{SDB}": "input", AD: "input", VCC: "power_in", GND_42: "passive", GND_43: "passive", R_EXT: "passive", SDA: "open_collector", SCL: "input", OUT1: "output", OUT2: "output", GND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:IS31FL3236-TQ";
  override referencePrefix = "U";
}

/**
 * 36 LED matrix driver with 8-bit PWM, 3kHz/22kHz, eTQFP-48
 *
 * KiCad symbol: `Driver_LED:IS31FL3236A-TQ`. Reference prefix: `U`.
 * Footprint filters: TQFP*1EP*7x7mm*P0.5mm*.
 * @see https://www.lumissil.com/assets/pdf/core/IS31FL3236A_DS.pdf
 * Keywords: led matrix pwm.
 * Default footprint: Package_QFP:TQFP-48-1EP_7x7mm_P0.5mm_EP4.11x4.11mm.
 */
export class IS31FL3236A_TQ extends Component.withPins({
  "OUT3": "1",
  "OUT4": "2",
  "OUT5": "3",
  "GND_4": "4",
  "OUT6": "5",
  "OUT7": "6",
  "OUT8": "7",
  "OUT9": "8",
  "OUT10": "9",
  "OUT11": "10",
  "OUT12": "11",
  "OUT13": "12",
  "OUT14": "13",
  "OUT15": "14",
  "OUT16": "15",
  "OUT17": "16",
  "OUT18": "17",
  "GND_18": "18",
  "GND_19": "19",
  "OUT19": "20",
  "OUT20": "21",
  "OUT21": "22",
  "OUT22": "23",
  "OUT23": "24",
  "OUT24": "25",
  "OUT25": "26",
  "OUT26": "27",
  "OUT27": "28",
  "OUT28": "29",
  "OUT29": "30",
  "OUT30": "31",
  "OUT31": "32",
  "GND_33": "33",
  "OUT32": "34",
  "OUT33": "35",
  "OUT34": "36",
  "OUT35": "37",
  "OUT36": "38",
  "~{SDB}": "39",
  "AD": "40",
  "VCC": "41",
  "GND_42": "42",
  "GND_43": "43",
  "R_EXT": "44",
  "SDA": "45",
  "SCL": "46",
  "OUT1": "47",
  "OUT2": "48",
  "GND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT3: "output", OUT4: "output", OUT5: "output", GND_4: "power_in", OUT6: "output", OUT7: "output", OUT8: "output", OUT9: "output", OUT10: "output", OUT11: "output", OUT12: "output", OUT13: "output", OUT14: "output", OUT15: "output", OUT16: "output", OUT17: "output", OUT18: "output", GND_18: "passive", GND_19: "passive", OUT19: "output", OUT20: "output", OUT21: "output", OUT22: "output", OUT23: "output", OUT24: "output", OUT25: "output", OUT26: "output", OUT27: "output", OUT28: "output", OUT29: "output", OUT30: "output", OUT31: "output", GND_33: "passive", OUT32: "output", OUT33: "output", OUT34: "output", OUT35: "output", OUT36: "output", "~{SDB}": "input", AD: "input", VCC: "power_in", GND_42: "passive", GND_43: "passive", R_EXT: "passive", SDA: "open_collector", SCL: "input", OUT1: "output", OUT2: "output", GND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:IS31FL3236A-TQ";
  override referencePrefix = "U";
}

/**
 * 12-channel LED Driver, current sink, I2C, 8/12-bit PWM, 8-bit current control register, WQFN-20
 *
 * KiCad symbol: `Driver_LED:IS31FL3242`. Reference prefix: `U`.
 * Footprint filters: *QFN*3x3mm?P0.4mm?EP1.65x1.65mm*.
 * @see https://www.lumissil.com/assets/pdf/core/IS31FL3242_DS.pdf
 * Keywords: Lumissil IS31FL3242-QFLS4-TR.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_3x3mm_P0.4mm_EP1.65x1.65mm_ThermalVias.
 */
export class IS31FL3242 extends Component.withPins({
  "OUT1": "1",
  "OUT2": "2",
  "OUT3": "3",
  "OUT4": "4",
  "OUT5": "5",
  "OUT6": "6",
  "AD": "7",
  "SDA": "8",
  "SCL": "9",
  "~{SDB}": "10",
  "OUT7": "11",
  "OUT8": "12",
  "OUT9": "13",
  "OUT10": "14",
  "OUT11": "15",
  "OUT12": "16",
  "NC_17": "17",
  "NC_18": "18",
  "VCC": "19",
  "GND": "[20,21]",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT1: "open_collector", OUT2: "open_collector", OUT3: "open_collector", OUT4: "open_collector", OUT5: "open_collector", OUT6: "open_collector", AD: "input", SDA: "bidirectional", SCL: "input", "~{SDB}": "input", OUT7: "open_collector", OUT8: "open_collector", OUT9: "open_collector", OUT10: "open_collector", OUT11: "open_collector", OUT12: "open_collector", NC_17: "no_connect", NC_18: "no_connect", VCC: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:IS31FL3242";
  override referencePrefix = "U";
}

/**
 * 9x16 LED matrix driver with 8-bit PWM and breathing, QFN-28
 *
 * KiCad symbol: `Driver_LED:IS31FL3731-QF`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.4mm*.
 * @see http://www.issi.com/WW/pdf/31FL3731.pdf
 * Keywords: led matrix pwm.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_4x4mm_P0.4mm_EP2.3x2.3mm.
 */
export class IS31FL3731_QF extends Component.withPins({
  "CA9": "1",
  "VCC": "2",
  "~{SDB}": "3",
  "~{INTB}": "4",
  "GND_5": "5",
  "R_EXT": "6",
  "CB1": "7",
  "CB2": "8",
  "CB3": "9",
  "CB4": "10",
  "CB5": "11",
  "CB6": "12",
  "CB7": "13",
  "CB8": "14",
  "CB9": "15",
  "C_FILT": "16",
  "IN": "17",
  "AD": "18",
  "SDA": "19",
  "SCL": "20",
  "CA1": "21",
  "CA2": "22",
  "CA3": "23",
  "CA4": "24",
  "CA5": "25",
  "CA6": "26",
  "CA7": "27",
  "CA8": "28",
  "GND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CA9: "bidirectional", VCC: "power_in", "~{SDB}": "input", "~{INTB}": "open_collector", GND_5: "power_in", R_EXT: "passive", CB1: "bidirectional", CB2: "bidirectional", CB3: "bidirectional", CB4: "bidirectional", CB5: "bidirectional", CB6: "bidirectional", CB7: "bidirectional", CB8: "bidirectional", CB9: "bidirectional", C_FILT: "passive", IN: "input", AD: "input", SDA: "bidirectional", SCL: "input", CA1: "bidirectional", CA2: "bidirectional", CA3: "bidirectional", CA4: "bidirectional", CA5: "bidirectional", CA6: "bidirectional", CA7: "bidirectional", CA8: "bidirectional", GND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:IS31FL3731-QF";
  override referencePrefix = "U";
}

/**
 * 9x16 LED matrix driver with 8-bit PWM and breathing, SSOP-28
 *
 * KiCad symbol: `Driver_LED:IS31FL3731-SA`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://www.issi.com/WW/pdf/31FL3731.pdf
 * Keywords: led matrix pwm.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class IS31FL3731_SA extends Component.withPins({
  "CA9": "1",
  "VCC": "2",
  "~{SDB}": "3",
  "~{INTB}": "4",
  "GND": "5",
  "R_EXT": "6",
  "CB1": "7",
  "CB2": "8",
  "CB3": "9",
  "CB4": "10",
  "CB5": "11",
  "CB6": "12",
  "CB7": "13",
  "CB8": "14",
  "CB9": "15",
  "C_FILT": "16",
  "IN": "17",
  "AD": "18",
  "SDA": "19",
  "SCL": "20",
  "CA1": "21",
  "CA2": "22",
  "CA3": "23",
  "CA4": "24",
  "CA5": "25",
  "CA6": "26",
  "CA7": "27",
  "CA8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CA9: "bidirectional", VCC: "power_in", "~{SDB}": "input", "~{INTB}": "open_collector", GND: "power_in", R_EXT: "passive", CB1: "bidirectional", CB2: "bidirectional", CB3: "bidirectional", CB4: "bidirectional", CB5: "bidirectional", CB6: "bidirectional", CB7: "bidirectional", CB8: "bidirectional", CB9: "bidirectional", C_FILT: "passive", IN: "input", AD: "input", SDA: "bidirectional", SCL: "input", CA1: "bidirectional", CA2: "bidirectional", CA3: "bidirectional", CA4: "bidirectional", CA5: "bidirectional", CA6: "bidirectional", CA7: "bidirectional", CA8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:IS31FL3731-SA";
  override referencePrefix = "U";
}

/**
 * 12x16 LED matrix driver with 8-bit PWM and breathing, QFN-48
 *
 * KiCad symbol: `Driver_LED:IS31FL3733-QF`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.4mm*.
 * @see http://www.issi.com/WW/pdf/IS31FL3733.pdf
 * Keywords: led matrix pwm.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.2x4.2mm.
 */
export class IS31FL3733_QF extends Component.withPins({
  "NC_1": "1",
  "SW1": "2",
  "SW2": "3",
  "SW3": "4",
  "PGND_5": "5",
  "SW4": "6",
  "SW5": "7",
  "SW6": "8",
  "SW7": "9",
  "SW8": "10",
  "SW9": "11",
  "PGND_12": "12",
  "SW10": "13",
  "SW11": "14",
  "SW12": "15",
  "CS1": "16",
  "CS2": "17",
  "CS3": "18",
  "CS4": "19",
  "PVCC_20": "20",
  "CS5": "21",
  "CS6": "22",
  "CS7": "23",
  "CS8": "24",
  "CS9": "25",
  "CS10": "26",
  "CS11": "27",
  "CS12": "28",
  "PVCC_29": "29",
  "CS13": "30",
  "CS14": "31",
  "CS15": "32",
  "CS16": "33",
  "AGND": "34",
  "RSET": "35",
  "NC_36": "36",
  "AVCC": "37",
  "DVCC": "38",
  "VIO": "39",
  "SYNC": "40",
  "SDA": "41",
  "SCL": "42",
  "ADDR1": "43",
  "ADDR2": "44",
  "~{INTB}": "45",
  "~{SDB}": "46",
  "IICRST": "47",
  "GND_48": "48",
  "GND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", SW1: "input", SW2: "input", SW3: "input", PGND_5: "power_in", SW4: "input", SW5: "input", SW6: "input", SW7: "input", SW8: "input", SW9: "input", PGND_12: "passive", SW10: "input", SW11: "input", SW12: "input", CS1: "output", CS2: "output", CS3: "output", CS4: "output", PVCC_20: "power_in", CS5: "output", CS6: "output", CS7: "output", CS8: "output", CS9: "output", CS10: "output", CS11: "output", CS12: "output", PVCC_29: "power_in", CS13: "output", CS14: "output", CS15: "output", CS16: "output", AGND: "power_in", RSET: "passive", NC_36: "no_connect", AVCC: "power_in", DVCC: "power_in", VIO: "input", SYNC: "input", SDA: "bidirectional", SCL: "input", ADDR1: "input", ADDR2: "input", "~{INTB}": "open_collector", "~{SDB}": "input", IICRST: "input", GND_48: "power_in", GND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:IS31FL3733-QF";
  override referencePrefix = "U";
}

/**
 * 12x16 LED matrix driver with 8-bit PWM and breathing, TQFP-48
 *
 * KiCad symbol: `Driver_LED:IS31FL3733-TQ`. Reference prefix: `U`.
 * Footprint filters: TQFP*1EP*7x7mm*P0.5mm*.
 * @see http://www.issi.com/WW/pdf/IS31FL3733.pdf
 * Keywords: led matrix pwm.
 * Default footprint: Package_QFP:TQFP-48-1EP_7x7mm_P0.5mm_EP5x5mm.
 */
export class IS31FL3733_TQ extends Component.withPins({
  "NC_1": "1",
  "SW1": "2",
  "SW2": "3",
  "SW3": "4",
  "PGND_5": "5",
  "SW4": "6",
  "SW5": "7",
  "SW6": "8",
  "SW7": "9",
  "SW8": "10",
  "SW9": "11",
  "PGND_12": "12",
  "SW10": "13",
  "SW11": "14",
  "SW12": "15",
  "CS1": "16",
  "CS2": "17",
  "CS3": "18",
  "CS4": "19",
  "PVCC_20": "20",
  "CS5": "21",
  "CS6": "22",
  "CS7": "23",
  "CS8": "24",
  "CS9": "25",
  "CS10": "26",
  "CS11": "27",
  "CS12": "28",
  "PVCC_29": "29",
  "CS13": "30",
  "CS14": "31",
  "CS15": "32",
  "CS16": "33",
  "AGND": "34",
  "RSET": "35",
  "NC_36": "36",
  "AVCC": "37",
  "DVCC": "38",
  "VIO": "39",
  "SYNC": "40",
  "SDA": "41",
  "SCL": "42",
  "ADDR1": "43",
  "ADDR2": "44",
  "~{INTB}": "45",
  "~{SDB}": "46",
  "IICRST": "47",
  "GND_48": "48",
  "GND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", SW1: "input", SW2: "input", SW3: "input", PGND_5: "power_in", SW4: "input", SW5: "input", SW6: "input", SW7: "input", SW8: "input", SW9: "input", PGND_12: "passive", SW10: "input", SW11: "input", SW12: "input", CS1: "output", CS2: "output", CS3: "output", CS4: "output", PVCC_20: "power_in", CS5: "output", CS6: "output", CS7: "output", CS8: "output", CS9: "output", CS10: "output", CS11: "output", CS12: "output", PVCC_29: "power_in", CS13: "output", CS14: "output", CS15: "output", CS16: "output", AGND: "power_in", RSET: "passive", NC_36: "no_connect", AVCC: "power_in", DVCC: "power_in", VIO: "input", SYNC: "input", SDA: "bidirectional", SCL: "input", ADDR1: "input", ADDR2: "input", "~{INTB}": "open_collector", "~{SDB}": "input", IICRST: "input", GND_48: "power_in", GND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:IS31FL3733-TQ";
  override referencePrefix = "U";
}

/**
 * 12x8 LED matrix driver with 8-bit PWM and breathing, QFN-40
 *
 * KiCad symbol: `Driver_LED:IS31FL3736`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.4mm*.
 * @see http://www.issi.com/WW/pdf/31FL3736.pdf
 * Keywords: led matrix pwm.
 * Default footprint: Package_DFN_QFN:QFN-40-1EP_5x5mm_P0.4mm_EP3.8x3.8mm.
 */
export class IS31FL3736 extends Component.withPins({
  "SW1": "1",
  "SW2": "2",
  "SW3": "3",
  "PGND_4": "4",
  "SW4": "5",
  "SW5": "6",
  "SW6": "7",
  "SW7": "8",
  "SW8": "9",
  "SW9": "10",
  "PGND_11": "11",
  "SW10": "12",
  "SW11": "13",
  "SW12": "14",
  "CS1": "15",
  "CS2": "16",
  "PVCC_17": "17",
  "CS3": "18",
  "CS4": "19",
  "NC_20": "20",
  "CS5": "21",
  "CS6": "22",
  "PVCC_23": "23",
  "CS7": "24",
  "CS8": "25",
  "AGND": "26",
  "DVCC": "27",
  "AVCC": "28",
  "NC_29": "29",
  "RSET": "30",
  "VIO": "31",
  "SYNC": "32",
  "SDA": "33",
  "SCL": "34",
  "ADDR1": "35",
  "ADDR2": "36",
  "~{INTB}": "37",
  "~{SDB}": "38",
  "IICRST": "39",
  "GND_40": "40",
  "GND_41": "41",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SW1: "input", SW2: "input", SW3: "input", PGND_4: "power_in", SW4: "input", SW5: "input", SW6: "input", SW7: "input", SW8: "input", SW9: "input", PGND_11: "passive", SW10: "input", SW11: "input", SW12: "input", CS1: "output", CS2: "output", PVCC_17: "power_in", CS3: "output", CS4: "output", NC_20: "no_connect", CS5: "output", CS6: "output", PVCC_23: "power_in", CS7: "output", CS8: "output", AGND: "power_in", DVCC: "power_in", AVCC: "power_in", NC_29: "no_connect", RSET: "passive", VIO: "input", SYNC: "input", SDA: "bidirectional", SCL: "input", ADDR1: "input", ADDR2: "input", "~{INTB}": "open_collector", "~{SDB}": "input", IICRST: "input", GND_40: "power_in", GND_41: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:IS31FL3736";
  override referencePrefix = "U";
}

/**
 * 12x12 LED matrix driver with 8-bit PWM and breathing, QFN-40
 *
 * KiCad symbol: `Driver_LED:IS31FL3737`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.4mm*.
 * @see http://www.issi.com/WW/pdf/31FL3737.pdf
 * Keywords: led matrix pwm.
 * Default footprint: Package_DFN_QFN:QFN-40-1EP_5x5mm_P0.4mm_EP3.8x3.8mm.
 */
export class IS31FL3737 extends Component.withPins({
  "SW1": "1",
  "SW2": "2",
  "SW3": "3",
  "PGND_4": "4",
  "SW4": "5",
  "SW5": "6",
  "SW6": "7",
  "SW7": "8",
  "SW8": "9",
  "SW9": "10",
  "PGND_11": "11",
  "SW10": "12",
  "SW11": "13",
  "SW12": "14",
  "CS1": "15",
  "CS2": "16",
  "CS3": "17",
  "CS4": "18",
  "PVCC_19": "19",
  "CS5": "20",
  "CS6": "21",
  "CS7": "22",
  "CS8": "23",
  "CS9": "24",
  "CS10": "25",
  "PVCC_26": "26",
  "CS11": "27",
  "CS12": "28",
  "AGND": "29",
  "RSET": "30",
  "VCC": "31",
  "VIO": "32",
  "SYNC": "33",
  "SDA": "34",
  "SCL": "35",
  "ADDR": "36",
  "~{INTB}": "37",
  "~{SDB}": "38",
  "IICRST": "39",
  "GND_40": "40",
  "GND_41": "41",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SW1: "input", SW2: "input", SW3: "input", PGND_4: "power_in", SW4: "input", SW5: "input", SW6: "input", SW7: "input", SW8: "input", SW9: "input", PGND_11: "passive", SW10: "input", SW11: "input", SW12: "input", CS1: "output", CS2: "output", CS3: "output", CS4: "output", PVCC_19: "power_in", CS5: "output", CS6: "output", CS7: "output", CS8: "output", CS9: "output", CS10: "output", PVCC_26: "power_in", CS11: "output", CS12: "output", AGND: "power_in", RSET: "passive", VCC: "power_in", VIO: "input", SYNC: "input", SDA: "bidirectional", SCL: "input", ADDR: "input", "~{INTB}": "open_collector", "~{SDB}": "input", IICRST: "input", GND_40: "power_in", GND_41: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:IS31FL3737";
  override referencePrefix = "U";
}

/**
 * Constant current  LED driver, internal switch, up to 40V/1.2A, SOT-89-5
 *
 * KiCad symbol: `Driver_LED:IS31LT3360`. Reference prefix: `U`.
 * Footprint filters: SOT?89*.
 * @see http://www.issi.com/WW/pdf/31LT3360.pdf
 * Keywords: Switching LED driver.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-5.
 */
export class IS31LT3360 extends Component.withPins({
  "LX": "1",
  "GND": "2",
  "ADJ": "3",
  "ISENSE": "4",
  "VIN": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LX: "open_collector", GND: "power_in", ADJ: "input", ISENSE: "input", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:IS31LT3360";
  override referencePrefix = "U";
}

/**
 * 4-channel constant-current linear LED Driver, I2C interface, 0.125..24mAout, VIN 2.7..5.5V, DFN-8
 *
 * KiCad symbol: `Driver_LED:KTD2026`. Reference prefix: `U`.
 * Footprint filters: DFN*1.5x1.5mm*P0.4mm*.
 * @see https://www.kinet-ic.com/uploads/KTD2026-7-04h.pdf
 * Keywords: kinetic cc sink RGB.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_1.5x1.5mm_P0.4mm_EP0.7x1.2mm.
 */
export class KTD2026 extends Component.withPins({
  "ST": "1",
  "D3": "2",
  "D2": "3",
  "D1": "4",
  "VIN": "5",
  "SCL": "6",
  "SDA": "7",
  "GND_8": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ST: "open_collector", D3: "output", D2: "output", D1: "output", VIN: "power_in", SCL: "input", SDA: "bidirectional", GND_8: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:KTD2026";
  override referencePrefix = "U";
}

/**
 * 4-channel constant-current linear LED Driver, I2C interface, 0.125..24mAout, VIN 2.7..5.5V DFN-8
 *
 * KiCad symbol: `Driver_LED:KTD2027`. Reference prefix: `U`.
 * Footprint filters: DFN*1.5x1.5mm*P0.4mm*.
 * @see https://www.kinet-ic.com/uploads/KTD2026-7-04h.pdf
 * Keywords: kinetic cc sink RGB.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_1.5x1.5mm_P0.4mm_EP0.7x1.2mm.
 */
export class KTD2027 extends Component.withPins({
  "D4": "1",
  "D3": "2",
  "D2": "3",
  "D1": "4",
  "VIN": "5",
  "SCL": "6",
  "SDA": "7",
  "GND_8": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D4: "output", D3: "output", D2: "output", D1: "output", VIN: "power_in", SCL: "bidirectional", SDA: "bidirectional", GND_8: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:KTD2027";
  override referencePrefix = "U";
}

/**
 * 36-channel (12xRGB) LED driver with I²C Control, VCC = VIN = 2.5..5.5V, 23kHz MUX frequency, UQFN-20
 *
 * KiCad symbol: `Driver_LED:KTD2061xxUAC`. Reference prefix: `U`.
 * Footprint filters: *UQFN*3x3mm*P0.4mm*EP1.7x1.7mm*.
 * @see https://www.kinet-ic.com/uploads/web/KTD2058,%20KTD2059,%20KTD2060,%20KTD2061/KTD2061-58-59-60-04e.pdf
 * Keywords: KTD2058Q KTD2059Q KTD2060Q KTD2061Q I2C.
 * Default footprint: Package_DFN_QFN:UQFN-20-1EP_3x3mm_P0.4mm_EP1.7x1.7mm_ThermalVias.
 */
export class KTD2061xxUAC extends Component.withPins({
  "VIN_1": "1",
  "VIN_2": "2",
  "VCC": "3",
  "SCL": "4",
  "SDA": "5",
  "LEDA1": "6",
  "LEDA2": "7",
  "GND_8": "8",
  "LEDA3": "9",
  "LEDA4": "10",
  "LEDB1": "11",
  "LEDB2": "12",
  "GND_13": "13",
  "LEDB3": "14",
  "LEDB4": "15",
  "LEDC1": "16",
  "LEDC2": "17",
  "GND_18": "18",
  "LEDC3": "19",
  "LEDC4": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN_1: "power_in", VIN_2: "passive", VCC: "power_in", SCL: "input", SDA: "bidirectional", LEDA1: "output", LEDA2: "output", GND_8: "power_in", LEDA3: "output", LEDA4: "output", LEDB1: "output", LEDB2: "output", GND_13: "passive", LEDB3: "output", LEDB4: "output", LEDC1: "output", LEDC2: "output", GND_18: "passive", LEDC3: "output", LEDC4: "output", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:KTD2061xxUAC";
  override referencePrefix = "U";
}

/**
 * 16-channel LED driver with error detection, current gain control and 12/16 bit PWM brightness control, QSOP-24
 *
 * KiCad symbol: `Driver_LED:LED1642GWPTR`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x8.7mm*P0.635mm*.
 * @see https://www.st.com/resource/en/datasheet/led1642gw.pdf
 * Keywords: PWM LED driver error detection brightness QSOP-24.
 * Default footprint: Package_SO:QSOP-24_3.9x8.7mm_P0.635mm.
 */
export class LED1642GWPTR extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE": "4",
  "OUT0": "5",
  "OUT1": "6",
  "OUT2": "7",
  "OUT3": "8",
  "OUT4": "9",
  "OUT5": "10",
  "OUT6": "11",
  "OUT7": "12",
  "OUT8": "13",
  "OUT9": "14",
  "OUT10": "15",
  "OUT11": "16",
  "OUT12": "17",
  "OUT13": "18",
  "OUT14": "19",
  "OUT15": "20",
  "PWCLK": "21",
  "SDO": "22",
  "R-EXT": "23",
  "VDD": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", LE: "input", OUT0: "output", OUT1: "output", OUT2: "output", OUT3: "output", OUT4: "output", OUT5: "output", OUT6: "output", OUT7: "output", OUT8: "output", OUT9: "output", OUT10: "output", OUT11: "output", OUT12: "output", OUT13: "output", OUT14: "output", OUT15: "output", PWCLK: "input", SDO: "output", "R-EXT": "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LED1642GWPTR";
  override referencePrefix = "U";
}

/**
 * 16-channel LED driver with error detection, current gain control and 12/16 bit PWM brightness control, QFN-24
 *
 * KiCad symbol: `Driver_LED:LED1642GWQTR`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/led1642gw.pdf
 * Keywords: PWM LED driver error detection brightness QFN-24.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.15x2.15mm.
 */
export class LED1642GWQTR extends Component.withPins({
  "LE": "1",
  "OUT0": "2",
  "OUT1": "3",
  "OUT2": "4",
  "OUT3": "5",
  "OUT4": "6",
  "OUT5": "7",
  "OUT6": "8",
  "OUT7": "9",
  "OUT8": "10",
  "OUT9": "11",
  "OUT10": "12",
  "OUT11": "13",
  "OUT12": "14",
  "OUT13": "15",
  "OUT14": "16",
  "OUT15": "17",
  "PWCLK": "18",
  "SDO": "19",
  "R-EXT": "20",
  "VDD": "21",
  "GND": "22",
  "SDI": "23",
  "CLK": "24",
  "EP": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LE: "input", OUT0: "output", OUT1: "output", OUT2: "output", OUT3: "output", OUT4: "output", OUT5: "output", OUT6: "output", OUT7: "output", OUT8: "output", OUT9: "output", OUT10: "output", OUT11: "output", OUT12: "output", OUT13: "output", OUT14: "output", OUT15: "output", PWCLK: "input", SDO: "output", "R-EXT": "passive", VDD: "power_in", GND: "power_in", SDI: "input", CLK: "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LED1642GWQTR";
  override referencePrefix = "U";
}

/**
 * 16-channel LED driver with error detection, current gain control and 12/16 bit PWM brightness control, TSSOP-24
 *
 * KiCad symbol: `Driver_LED:LED1642GWTTR`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/led1642gw.pdf
 * Keywords: PWM LED driver error detection brightness TSSOP-24.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class LED1642GWTTR extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE": "4",
  "OUT0": "5",
  "OUT1": "6",
  "OUT2": "7",
  "OUT3": "8",
  "OUT4": "9",
  "OUT5": "10",
  "OUT6": "11",
  "OUT7": "12",
  "OUT8": "13",
  "OUT9": "14",
  "OUT10": "15",
  "OUT11": "16",
  "OUT12": "17",
  "OUT13": "18",
  "OUT14": "19",
  "OUT15": "20",
  "PWCLK": "21",
  "SDO": "22",
  "R-EXT": "23",
  "VDD": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", LE: "input", OUT0: "output", OUT1: "output", OUT2: "output", OUT3: "output", OUT4: "output", OUT5: "output", OUT6: "output", OUT7: "output", OUT8: "output", OUT9: "output", OUT10: "output", OUT11: "output", OUT12: "output", OUT13: "output", OUT14: "output", OUT15: "output", PWCLK: "input", SDO: "output", "R-EXT": "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LED1642GWTTR";
  override referencePrefix = "U";
}

/**
 * 16-channel LED driver with error detection, current gain control and 12/16 bit PWM brightness control, HTSSOP-24
 *
 * KiCad symbol: `Driver_LED:LED1642GWXTTR`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x7.8mm?P0.65mm?EP3.2x5mm*.
 * @see https://www.st.com/resource/en/datasheet/led1642gw.pdf
 * Keywords: STMicroeletronics Shift-Register.
 * Default footprint: Package_SO:HTSSOP-24-1EP_4.4x7.8mm_P0.65mm_EP3.2x5mm.
 */
export class LED1642GWXTTR extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE": "4",
  "OUT0": "5",
  "OUT1": "6",
  "OUT2": "7",
  "OUT3": "8",
  "OUT4": "9",
  "OUT5": "10",
  "OUT6": "11",
  "OUT7": "12",
  "OUT8": "13",
  "OUT9": "14",
  "OUT10": "15",
  "OUT11": "16",
  "OUT12": "17",
  "OUT13": "18",
  "OUT14": "19",
  "OUT15": "20",
  "PWCLK": "21",
  "SDO": "22",
  "R-EXT": "23",
  "VDD": "24",
  "EP": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", LE: "input", OUT0: "output", OUT1: "output", OUT2: "output", OUT3: "output", OUT4: "output", OUT5: "output", OUT6: "output", OUT7: "output", OUT8: "output", OUT9: "output", OUT10: "output", OUT11: "output", OUT12: "output", OUT13: "output", OUT14: "output", OUT15: "output", PWCLK: "input", SDO: "output", "R-EXT": "passive", VDD: "power_in", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LED1642GWXTTR";
  override referencePrefix = "U";
}

/**
 * 3A monolithic step-down current source with dimming, HSOP-8
 *
 * KiCad symbol: `Driver_LED:LED5000`. Reference prefix: `U`.
 * Footprint filters: HSOP*1EP*3.9x4.9mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/led5000.pdf
 * Keywords: LED buck driver.
 * Default footprint: Package_SO:HSOP-8-1EP_3.9x4.9mm_P1.27mm_EP2.41x3.1mm.
 */
export class LED5000 extends Component.withPins({
  "BOOT": "1",
  "DIM": "2",
  "INH": "3",
  "COMP": "4",
  "FB": "5",
  "GND_6": "6",
  "VIN": "7",
  "SW": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOT: "passive", DIM: "input", INH: "input", COMP: "passive", FB: "input", GND_6: "power_in", VIN: "power_in", SW: "output", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LED5000";
  override referencePrefix = "U";
}

/**
 * 10 LED Dot/Bar Display Driver, DIP-18
 *
 * KiCad symbol: `Driver_LED:LM3914N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm3914.pdf
 * Keywords: LED driver bar dot.
 * Default footprint: Package_DIP:DIP-18_W7.62mm.
 */
export class LM3914N extends Component.withPins({
  "LED1": "1",
  "V-": "2",
  "V+": "3",
  "RLO": "4",
  "SIG": "5",
  "RHI": "6",
  "REFOUT": "7",
  "REFADJ": "8",
  "MODE": "9",
  "LED10": "10",
  "LED9": "11",
  "LED8": "12",
  "LED7": "13",
  "LED6": "14",
  "LED5": "15",
  "LED4": "16",
  "LED3": "17",
  "LED2": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LED1: "open_collector", "V-": "power_in", "V+": "power_in", RLO: "input", SIG: "input", RHI: "input", REFOUT: "output", REFADJ: "input", MODE: "input", LED10: "open_collector", LED9: "open_collector", LED8: "open_collector", LED7: "open_collector", LED6: "open_collector", LED5: "open_collector", LED4: "open_collector", LED3: "open_collector", LED2: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LM3914N";
  override referencePrefix = "U";
}

/**
 * 10 LED Dot/Bar Display Driver, PLCC-20
 *
 * KiCad symbol: `Driver_LED:LM3914V`. Reference prefix: `U`.
 * Footprint filters: *PLCC*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm3914.pdf
 * Keywords: LED driver bar dot.
 * Default footprint: Package_LCC:PLCC-20_9.0x9.0mm_P1.27mm.
 */
export class LM3914V extends Component.withPins({
  "LED1": "1",
  "V-": "2",
  "V+": "3",
  "RLO": "4",
  "SIG": "5",
  "RHI": "6",
  "NC_7": "7",
  "REFOUT": "8",
  "NC_9": "9",
  "REFADJ": "10",
  "MODE": "11",
  "LED10": "12",
  "LED9": "13",
  "LED8": "14",
  "LED7": "15",
  "LED6": "16",
  "LED5": "17",
  "LED4": "18",
  "LED3": "19",
  "LED2": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LED1: "open_collector", "V-": "power_in", "V+": "power_in", RLO: "input", SIG: "input", RHI: "input", NC_7: "no_connect", REFOUT: "output", NC_9: "no_connect", REFADJ: "input", MODE: "input", LED10: "open_collector", LED9: "open_collector", LED8: "open_collector", LED7: "open_collector", LED6: "open_collector", LED5: "open_collector", LED4: "open_collector", LED3: "open_collector", LED2: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LM3914V";
  override referencePrefix = "U";
}

/**
 * 36-Channel 12-Bit PWM Ultra-low Quiescent Current I2C RGB LED Driver
 *
 * KiCad symbol: `Driver_LED:LP5036`. Reference prefix: `U`.
 * Footprint filters: VQFN?46?1EP?5x6mm?P0.4mm?EP2.8x3.8mm*.
 * @see http://www.ti.com/lit/ds/symlink/lp5036.pdf
 * Keywords: PWM LED driver I2C.
 * Default footprint: Package_DFN_QFN:VQFN-46-1EP_5x6mm_P0.4mm_EP2.8x3.8mm.
 */
export class LP5036 extends Component.withPins({
  "OUT0": "1",
  "OUT1": "2",
  "OUT2": "3",
  "OUT3": "4",
  "OUT4": "5",
  "OUT5": "6",
  "OUT6": "7",
  "OUT7": "8",
  "OUT8": "9",
  "OUT9": "10",
  "OUT10": "11",
  "OUT11": "12",
  "OUT12": "13",
  "OUT13": "14",
  "OUT14": "15",
  "OUT15": "16",
  "OUT16": "17",
  "OUT17": "18",
  "OUT18": "19",
  "OUT19": "20",
  "OUT20": "21",
  "OUT21": "22",
  "OUT22": "23",
  "OUT23": "24",
  "OUT24": "25",
  "OUT25": "26",
  "OUT26": "27",
  "OUT27": "28",
  "OUT28": "29",
  "OUT29": "30",
  "OUT30": "31",
  "OUT31": "32",
  "OUT32": "33",
  "OUT33": "34",
  "OUT34": "35",
  "OUT35": "36",
  "GND_37": "37",
  "ADDR0": "38",
  "ADDR1": "39",
  "VCC": "40",
  "SDA": "41",
  "SCL": "42",
  "EN": "43",
  "IREF": "44",
  "VCAP": "45",
  "GND_46": "46",
  "GND_47": "47",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT0: "power_out", OUT1: "power_out", OUT2: "power_out", OUT3: "power_out", OUT4: "power_out", OUT5: "power_out", OUT6: "power_out", OUT7: "power_out", OUT8: "power_out", OUT9: "power_out", OUT10: "power_out", OUT11: "power_out", OUT12: "power_out", OUT13: "power_out", OUT14: "power_out", OUT15: "power_out", OUT16: "power_out", OUT17: "power_out", OUT18: "power_out", OUT19: "power_out", OUT20: "power_out", OUT21: "power_out", OUT22: "power_out", OUT23: "power_out", OUT24: "power_out", OUT25: "power_out", OUT26: "power_out", OUT27: "power_out", OUT28: "power_out", OUT29: "power_out", OUT30: "power_out", OUT31: "power_out", OUT32: "power_out", OUT33: "power_out", OUT34: "power_out", OUT35: "power_out", GND_37: "power_in", ADDR0: "input", ADDR1: "input", VCC: "power_in", SDA: "bidirectional", SCL: "input", EN: "input", IREF: "passive", VCAP: "passive", GND_46: "passive", GND_47: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LP5036";
  override referencePrefix = "U";
}

/**
 * LED Driver Boost , Input 4.5-65V, with PWM Dimming, Automotive, VSON-14
 *
 * KiCad symbol: `Driver_LED:LP8868XQDMT`. Reference prefix: `U`.
 * Footprint filters: VSON*14*.
 * @see https://www.ti.com/lit/ds/symlink/lp8868x-q1.pdf
 * Keywords: LED Driver Boost PWM Dimming.
 * Default footprint: Package_SON:VSON-14-1EP_3x4.45mm_P0.65mm_EP1.6x4.2mm.
 */
export class LP8868XQDMT extends Component.withPins({
  "PGND_1": "1",
  "AGND": "2",
  "VIN": "3",
  "VCC": "4",
  "ADIM/HD": "5",
  "PWM/EN": "6",
  "FAULT": "7",
  "TEMP": "8",
  "FSET": "9",
  "COMP": "10",
  "OVP": "11",
  "CSN": "12",
  "CSP": "13",
  "SW": "14",
  "PGND_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PGND_1: "power_in", AGND: "power_in", VIN: "power_in", VCC: "power_in", "ADIM/HD": "input", "PWM/EN": "input", FAULT: "output", TEMP: "bidirectional", FSET: "bidirectional", COMP: "bidirectional", OVP: "input", CSN: "input", CSP: "input", SW: "power_out", PGND_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LP8868XQDMT";
  override referencePrefix = "U";
}

/**
 * 1.2MHz White LED Drivers with Built-in Schottky, ThinSOT-23-6
 *
 * KiCad symbol: `Driver_LED:LT3465`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3465fa.pdf
 * Keywords: Switching LED driver.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LT3465 extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "FB": "3",
  "CTRL": "4",
  "VIN": "5",
  "SW": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", FB: "input", CTRL: "input", VIN: "power_in", SW: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT3465";
  override referencePrefix = "U";
}

/**
 * 2.4MHz White LED Drivers with Built-in Schottky in ThinSOT
 *
 * KiCad symbol: `Driver_LED:LT3465A`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/3465fa.pdf
 * Keywords: Switching LED driver.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class LT3465A extends Component.withPins({
  "VOUT": "1",
  "GND": "2",
  "FB": "3",
  "CTRL": "4",
  "VIN": "5",
  "SW": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT: "power_out", GND: "power_in", FB: "input", CTRL: "input", VIN: "power_in", SW: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT3465A";
  override referencePrefix = "U";
}

/**
 * 40 Vin, 75 Vout, DC/DC LED Controllers, Hysteresis Open led Status pin, MSOP-16
 *
 * KiCad symbol: `Driver_LED:LT3755xMSE`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/37551fd.pdf
 * Keywords: Boost Buck Buck-Boost SEPIC Flyback.
 * Default footprint: Package_SO:MSOP-16-1EP_3x4.039mm_P0.5mm_EP1.651x2.845mm.
 */
export class LT3755xMSE extends Component.withPins({
  "PWMOUT": "1",
  "FB": "2",
  "ISN": "3",
  "ISP": "4",
  "VC": "5",
  "CTRL": "6",
  "VREF": "7",
  "PWM": "8",
  "~{OPENLED}": "9",
  "SS": "10",
  "RT": "11",
  "~{SHDN}/UVLO": "12",
  "INTVCC": "13",
  "VIN": "14",
  "SENSE": "15",
  "GATE": "16",
  "GND": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PWMOUT: "output", FB: "input", ISN: "input", ISP: "input", VC: "output", CTRL: "input", VREF: "output", PWM: "input", "~{OPENLED}": "open_collector", SS: "input", RT: "input", "~{SHDN}/UVLO": "input", INTVCC: "power_out", VIN: "power_in", SENSE: "input", GATE: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT3755xMSE";
  override referencePrefix = "U";
}

/**
 * 40 Vin, 75 Vout, DC/DC LED Controllers, Frequency Synchronisation, MSOP-16
 *
 * KiCad symbol: `Driver_LED:LT3755xMSE-1`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/37551fd.pdf
 * Keywords: Boost Buck Buck-Boost SEPIC Flyback.
 * Default footprint: Package_SO:MSOP-16-1EP_3x4.039mm_P0.5mm_EP1.651x2.845mm.
 */
export class LT3755xMSE_1 extends Component.withPins({
  "PWMOUT": "1",
  "FB": "2",
  "ISN": "3",
  "ISP": "4",
  "VC": "5",
  "CTRL": "6",
  "VREF": "7",
  "PWM": "8",
  "SYNC": "9",
  "SS": "10",
  "RT": "11",
  "~{SHDN}/UVLO": "12",
  "INTVCC": "13",
  "VIN": "14",
  "SENSE": "15",
  "GATE": "16",
  "GND": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PWMOUT: "output", FB: "input", ISN: "input", ISP: "input", VC: "output", CTRL: "input", VREF: "output", PWM: "input", SYNC: "input", SS: "input", RT: "input", "~{SHDN}/UVLO": "input", INTVCC: "power_out", VIN: "power_in", SENSE: "input", GATE: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT3755xMSE-1";
  override referencePrefix = "U";
}

/**
 * 40 Vin, 75 Vout, DC/DC LED Controllers, Improved Open Led Status Pin, MSOP-16
 *
 * KiCad symbol: `Driver_LED:LT3755xMSE-2`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/37551fd.pdf
 * Keywords: Boost Buck Buck-Boost SEPIC Flyback.
 * Default footprint: Package_SO:MSOP-16-1EP_3x4.039mm_P0.5mm_EP1.651x2.845mm.
 */
export class LT3755xMSE_2 extends Component.withPins({
  "PWMOUT": "1",
  "FB": "2",
  "ISN": "3",
  "ISP": "4",
  "VC": "5",
  "CTRL": "6",
  "VREF": "7",
  "PWM": "8",
  "~{OPENLED}": "9",
  "SS": "10",
  "RT": "11",
  "~{SHDN}/UVLO": "12",
  "INTVCC": "13",
  "VIN": "14",
  "SENSE": "15",
  "GATE": "16",
  "GND": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PWMOUT: "output", FB: "input", ISN: "input", ISP: "input", VC: "output", CTRL: "input", VREF: "output", PWM: "input", "~{OPENLED}": "open_collector", SS: "input", RT: "input", "~{SHDN}/UVLO": "input", INTVCC: "power_out", VIN: "power_in", SENSE: "input", GATE: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT3755xMSE-2";
  override referencePrefix = "U";
}

/**
 * 40 Vin, 75 Vout, DC/DC LED Controller, Hysteresis Open led Status pins, QFN-16
 *
 * KiCad symbol: `Driver_LED:LT3755xUD`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/37551fd.pdf
 * Keywords: Boost Buck Buck-Boost SEPIC Flyback.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.45x1.45mm.
 */
export class LT3755xUD extends Component.withPins({
  "VREF": "1",
  "PWM": "2",
  "~{OPENLED}": "3",
  "SS": "4",
  "RT": "5",
  "~{SHDN}/UVLO": "6",
  "INTVCC": "7",
  "VIN": "8",
  "SENSE": "9",
  "GATE": "10",
  "PWMOUT": "11",
  "FB": "12",
  "ISN": "13",
  "ISP": "14",
  "VC": "15",
  "CTRL": "16",
  "GND": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VREF: "output", PWM: "input", "~{OPENLED}": "input", SS: "input", RT: "input", "~{SHDN}/UVLO": "input", INTVCC: "power_out", VIN: "power_in", SENSE: "input", GATE: "output", PWMOUT: "output", FB: "input", ISN: "input", ISP: "input", VC: "output", CTRL: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT3755xUD";
  override referencePrefix = "U";
}

/**
 * 40 Vin, 75 Vout, DC/DC LED Controllers, Frequency Synchronisation, QFN-16
 *
 * KiCad symbol: `Driver_LED:LT3755xUD-1`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/37551fd.pdf
 * Keywords: Boost Buck Buck-Boost SEPIC Flyback.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.45x1.45mm.
 */
export class LT3755xUD_1 extends Component.withPins({
  "VREF": "1",
  "PWM": "2",
  "SYNC": "3",
  "SS": "4",
  "RT": "5",
  "SHDN/UVLO": "6",
  "INTVCC": "7",
  "VIN": "8",
  "SENSE": "9",
  "GATE": "10",
  "PWMOUT": "11",
  "FB": "12",
  "ISN": "13",
  "ISP": "14",
  "VC": "15",
  "CTRL": "16",
  "GND": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VREF: "output", PWM: "input", SYNC: "input", SS: "input", RT: "input", "SHDN/UVLO": "input", INTVCC: "power_out", VIN: "power_in", SENSE: "input", GATE: "output", PWMOUT: "output", FB: "input", ISN: "input", ISP: "input", VC: "output", CTRL: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT3755xUD-1";
  override referencePrefix = "U";
}

/**
 * 40 Vin, 75 Vout, DC/DC LED Controllers, Improved Open led Status pin, QFN-16
 *
 * KiCad symbol: `Driver_LED:LT3755xUD-2`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/37551fd.pdf
 * Keywords: Boost Buck Buck-Boost SEPIC Flyback.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.45x1.45mm.
 */
export class LT3755xUD_2 extends Component.withPins({
  "VREF": "1",
  "PWM": "2",
  "~{OPENLED}": "3",
  "SS": "4",
  "RT": "5",
  "~{SHDN}/UVLO": "6",
  "INTVCC": "7",
  "VIN": "8",
  "SENSE": "9",
  "GATE": "10",
  "PWMOUT": "11",
  "FB": "12",
  "ISN": "13",
  "ISP": "14",
  "VC": "15",
  "CTRL": "16",
  "GND": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VREF: "output", PWM: "input", "~{OPENLED}": "input", SS: "input", RT: "input", "~{SHDN}/UVLO": "input", INTVCC: "power_out", VIN: "power_in", SENSE: "input", GATE: "output", PWMOUT: "output", FB: "input", ISN: "input", ISP: "input", VC: "output", CTRL: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT3755xUD-2";
  override referencePrefix = "U";
}

/**
 * 100 Vin, 100 Vout, DC/DC LED Controllers, Hysteresis Open led Status pin, MSOP-16
 *
 * KiCad symbol: `Driver_LED:LT3756xMSE`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/375612fb.pdf
 * Keywords: Boost Buck Buck-Boost SEPIC Flyback.
 * Default footprint: Package_SO:MSOP-16-1EP_3x4.039mm_P0.5mm_EP1.651x2.845mm.
 */
export class LT3756xMSE extends Component.withPins({
  "PWMOUT": "1",
  "FB": "2",
  "ISN": "3",
  "ISP": "4",
  "VC": "5",
  "CTRL": "6",
  "VREF": "7",
  "PWM": "8",
  "~{OPENLED}": "9",
  "SS": "10",
  "RT": "11",
  "~{SHDN}/UVLO": "12",
  "INTVCC": "13",
  "VIN": "14",
  "SENSE": "15",
  "GATE": "16",
  "GND": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PWMOUT: "output", FB: "input", ISN: "input", ISP: "input", VC: "output", CTRL: "input", VREF: "output", PWM: "input", "~{OPENLED}": "open_collector", SS: "input", RT: "input", "~{SHDN}/UVLO": "input", INTVCC: "power_out", VIN: "power_in", SENSE: "input", GATE: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT3756xMSE";
  override referencePrefix = "U";
}

/**
 * 100 Vin, 100 Vout, DC/DC LED Controllers, Frequency Synchronisation, MSOP-16
 *
 * KiCad symbol: `Driver_LED:LT3756xMSE-1`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/375612fb.pdf
 * Keywords: Boost Buck Buck-Boost SEPIC Flyback.
 * Default footprint: Package_SO:MSOP-16-1EP_3x4.039mm_P0.5mm_EP1.651x2.845mm.
 */
export class LT3756xMSE_1 extends Component.withPins({
  "PWMOUT": "1",
  "FB": "2",
  "ISN": "3",
  "ISP": "4",
  "VC": "5",
  "CTRL": "6",
  "VREF": "7",
  "PWM": "8",
  "SYNC": "9",
  "SS": "10",
  "RT": "11",
  "~{SHDN}/UVLO": "12",
  "INTVCC": "13",
  "VIN": "14",
  "SENSE": "15",
  "GATE": "16",
  "GND": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PWMOUT: "output", FB: "input", ISN: "input", ISP: "input", VC: "output", CTRL: "input", VREF: "output", PWM: "input", SYNC: "input", SS: "input", RT: "input", "~{SHDN}/UVLO": "input", INTVCC: "power_out", VIN: "power_in", SENSE: "input", GATE: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT3756xMSE-1";
  override referencePrefix = "U";
}

/**
 * 100 Vin, 100 Vout, DC/DC LED Controllers, Improved Open Led Status Pin, MSOP-16
 *
 * KiCad symbol: `Driver_LED:LT3756xMSE-2`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x4.039mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/375612fb.pdf
 * Keywords: Boost Buck Buck-Boost SEPIC Flyback.
 * Default footprint: Package_SO:MSOP-16-1EP_3x4.039mm_P0.5mm_EP1.651x2.845mm.
 */
export class LT3756xMSE_2 extends Component.withPins({
  "PWMOUT": "1",
  "FB": "2",
  "ISN": "3",
  "ISP": "4",
  "VC": "5",
  "CTRL": "6",
  "VREF": "7",
  "PWM": "8",
  "~{OPENLED}": "9",
  "SS": "10",
  "RT": "11",
  "~{SHDN}/UVLO": "12",
  "INTVCC": "13",
  "VIN": "14",
  "SENSE": "15",
  "GATE": "16",
  "GND": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PWMOUT: "output", FB: "input", ISN: "input", ISP: "input", VC: "output", CTRL: "input", VREF: "output", PWM: "input", "~{OPENLED}": "open_collector", SS: "input", RT: "input", "~{SHDN}/UVLO": "input", INTVCC: "power_out", VIN: "power_in", SENSE: "input", GATE: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT3756xMSE-2";
  override referencePrefix = "U";
}

/**
 * 100 Vin, 100 Vout, DC/DC LED Controller, Hysteresis Open led Status pins, QFN-16
 *
 * KiCad symbol: `Driver_LED:LT3756xUD`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/375612fb.pdf
 * Keywords: Boost Buck Buck-Boost SEPIC Flyback.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.45x1.45mm.
 */
export class LT3756xUD extends Component.withPins({
  "VREF": "1",
  "PWM": "2",
  "~{OPENLED}": "3",
  "SS": "4",
  "RT": "5",
  "~{SHDN}/UVLO": "6",
  "INTVCC": "7",
  "VIN": "8",
  "SENSE": "9",
  "GATE": "10",
  "PWMOUT": "11",
  "FB": "12",
  "ISN": "13",
  "ISP": "14",
  "VC": "15",
  "CTRL": "16",
  "GND": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VREF: "output", PWM: "input", "~{OPENLED}": "input", SS: "input", RT: "input", "~{SHDN}/UVLO": "input", INTVCC: "power_out", VIN: "power_in", SENSE: "input", GATE: "output", PWMOUT: "output", FB: "input", ISN: "input", ISP: "input", VC: "output", CTRL: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT3756xUD";
  override referencePrefix = "U";
}

/**
 * 100 Vin, 100 Vout, DC/DC LED Controllers, Frequency Synchronisation, QFN-16
 *
 * KiCad symbol: `Driver_LED:LT3756xUD-1`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/375612fb.pdf
 * Keywords: Boost Buck Buck-Boost SEPIC Flyback.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.45x1.45mm.
 */
export class LT3756xUD_1 extends Component.withPins({
  "VREF": "1",
  "PWM": "2",
  "SYNC": "3",
  "SS": "4",
  "RT": "5",
  "SHDN/UVLO": "6",
  "INTVCC": "7",
  "VIN": "8",
  "SENSE": "9",
  "GATE": "10",
  "PWMOUT": "11",
  "FB": "12",
  "ISN": "13",
  "ISP": "14",
  "VC": "15",
  "CTRL": "16",
  "GND": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VREF: "output", PWM: "input", SYNC: "input", SS: "input", RT: "input", "SHDN/UVLO": "input", INTVCC: "power_out", VIN: "power_in", SENSE: "input", GATE: "output", PWMOUT: "output", FB: "input", ISN: "input", ISP: "input", VC: "output", CTRL: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT3756xUD-1";
  override referencePrefix = "U";
}

/**
 * 100 Vin, 100 Vout, DC/DC LED Controllers, Improved Open led Status pin, QFN-16
 *
 * KiCad symbol: `Driver_LED:LT3756xUD-2`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/375612fb.pdf
 * Keywords: Boost Buck Buck-Boost SEPIC Flyback.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.45x1.45mm.
 */
export class LT3756xUD_2 extends Component.withPins({
  "VREF": "1",
  "PWM": "2",
  "~{OPENLED}": "3",
  "SS": "4",
  "RT": "5",
  "~{SHDN}/UVLO": "6",
  "INTVCC": "7",
  "VIN": "8",
  "SENSE": "9",
  "GATE": "10",
  "PWMOUT": "11",
  "FB": "12",
  "ISN": "13",
  "ISP": "14",
  "VC": "15",
  "CTRL": "16",
  "GND": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VREF: "output", PWM: "input", "~{OPENLED}": "input", SS: "input", RT: "input", "~{SHDN}/UVLO": "input", INTVCC: "power_out", VIN: "power_in", SENSE: "input", GATE: "output", PWMOUT: "output", FB: "input", ISN: "input", ISP: "input", VC: "output", CTRL: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT3756xUD-2";
  override referencePrefix = "U";
}

/**
 * 60V Synchronous 4-Switch Buck-Boost LED Controller, TSSOP-28
 *
 * KiCad symbol: `Driver_LED:LT8391xFE`. Reference prefix: `U`.
 * Footprint filters: TSSOP*1EP*4.4x9.7mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/lt8391.pdf
 * Keywords: 60V Synchronous 4-Switch Buck-Boost LED Controller.
 * Default footprint: Package_SO:TSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP2.74x4.75mm_ThermalVias.
 */
export class LT8391xFE extends Component.withPins({
  "BG1": "1",
  "BST1": "2",
  "SW1": "3",
  "TG1": "4",
  "LSP": "5",
  "LSN": "6",
  "VIN": "7",
  "INTVCC": "8",
  "EN/UVLO": "9",
  "RP": "10",
  "PWM": "11",
  "VREF": "12",
  "CTRL1": "13",
  "ISP": "14",
  "ISN": "15",
  "CTRL2": "16",
  "~{FAULT}": "17",
  "SS": "18",
  "FB": "19",
  "VC": "20",
  "RT": "21",
  "SYNC/SPRD": "22",
  "PWMTG": "23",
  "VOUT": "24",
  "TG2": "25",
  "SW2": "26",
  "BST2": "27",
  "BG2": "28",
  "GND": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BG1: "output", BST1: "passive", SW1: "passive", TG1: "output", LSP: "input", LSN: "input", VIN: "power_in", INTVCC: "power_out", "EN/UVLO": "input", RP: "input", PWM: "input", VREF: "power_out", CTRL1: "input", ISP: "input", ISN: "input", CTRL2: "input", "~{FAULT}": "open_collector", SS: "passive", FB: "input", VC: "passive", RT: "passive", "SYNC/SPRD": "input", PWMTG: "output", VOUT: "power_in", TG2: "output", SW2: "passive", BST2: "passive", BG2: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:LT8391xFE";
  override referencePrefix = "U";
}

/**
 * 8-Digit LED Display Driver
 *
 * KiCad symbol: `Driver_LED:MAX7219`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*, DIP*7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7219-MAX7221.pdf
 * Keywords: LED 8-Digit Display Driver.
 */
export class MAX7219 extends Component.withPins({
  "DIN": "1",
  "DIG_0": "2",
  "DIG_4": "3",
  "GND_4": "4",
  "DIG_6": "5",
  "DIG_2": "6",
  "DIG_3": "7",
  "DIG_7": "8",
  "GND_9": "9",
  "DIG_5": "10",
  "DIG_1": "11",
  "LOAD": "12",
  "CLK": "13",
  "SEG_A": "14",
  "SEG_F": "15",
  "SEG_B": "16",
  "SEG_G": "17",
  "ISET": "18",
  "V+": "19",
  "SEG_C": "20",
  "SEG_E": "21",
  "SEG_DP": "22",
  "SEG_D": "23",
  "DOUT": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DIN: "input", DIG_0: "output", DIG_4: "output", GND_4: "power_in", DIG_6: "output", DIG_2: "output", DIG_3: "output", DIG_7: "output", GND_9: "passive", DIG_5: "output", DIG_1: "output", LOAD: "input", CLK: "input", SEG_A: "output", SEG_F: "output", SEG_B: "output", SEG_G: "output", ISET: "input", "V+": "power_in", SEG_C: "output", SEG_E: "output", SEG_DP: "output", SEG_D: "output", DOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:MAX7219";
  override referencePrefix = "U";
}

/**
 * Serially Interfaced, 8-Digit LED Display Driver, PDIP-24
 *
 * KiCad symbol: `Driver_LED:MAX7221xNG`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7219-MAX7221.pdf
 * Keywords: spi qspi microwire.
 * Default footprint: Package_DIP:DIP-24_W7.62mm.
 */
export class MAX7221xNG extends Component.withPins({
  "DIN": "1",
  "DIG_0": "2",
  "DIG_4": "3",
  "GND_4": "4",
  "DIG_6": "5",
  "DIG_2": "6",
  "DIG_3": "7",
  "DIG_7": "8",
  "GND_9": "9",
  "DIG_5": "10",
  "DIG_1": "11",
  "~{CS}": "12",
  "CLK": "13",
  "SEG_A": "14",
  "SEG_F": "15",
  "SEG_B": "16",
  "SEG_G": "17",
  "ISET": "18",
  "V+": "19",
  "SEG_C": "20",
  "SEG_E": "21",
  "SEG_DP": "22",
  "SEG_D": "23",
  "DOUT": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DIN: "input", DIG_0: "open_collector", DIG_4: "open_collector", GND_4: "power_in", DIG_6: "open_collector", DIG_2: "open_collector", DIG_3: "open_collector", DIG_7: "open_collector", GND_9: "passive", DIG_5: "open_collector", DIG_1: "open_collector", "~{CS}": "input", CLK: "input", SEG_A: "open_emitter", SEG_F: "open_emitter", SEG_B: "open_emitter", SEG_G: "open_emitter", ISET: "input", "V+": "power_in", SEG_C: "open_emitter", SEG_E: "open_emitter", SEG_DP: "open_emitter", SEG_D: "open_emitter", DOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:MAX7221xNG";
  override referencePrefix = "U";
}

/**
 * Serially Interfaced, 8-Digit LED Display Driver, CDIP-24
 *
 * KiCad symbol: `Driver_LED:MAX7221xRG`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7219-MAX7221.pdf
 * Keywords: spi qspi microwire.
 * Default footprint: Package_DIP:DIP-24_W7.62mm.
 */
export class MAX7221xRG extends Component.withPins({
  "DIN": "1",
  "DIG_0": "2",
  "DIG_4": "3",
  "GND_4": "4",
  "DIG_6": "5",
  "DIG_2": "6",
  "DIG_3": "7",
  "DIG_7": "8",
  "GND_9": "9",
  "DIG_5": "10",
  "DIG_1": "11",
  "~{CS}": "12",
  "CLK": "13",
  "SEG_A": "14",
  "SEG_F": "15",
  "SEG_B": "16",
  "SEG_G": "17",
  "ISET": "18",
  "V+": "19",
  "SEG_C": "20",
  "SEG_E": "21",
  "SEG_DP": "22",
  "SEG_D": "23",
  "DOUT": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DIN: "input", DIG_0: "open_collector", DIG_4: "open_collector", GND_4: "power_in", DIG_6: "open_collector", DIG_2: "open_collector", DIG_3: "open_collector", DIG_7: "open_collector", GND_9: "passive", DIG_5: "open_collector", DIG_1: "open_collector", "~{CS}": "input", CLK: "input", SEG_A: "open_emitter", SEG_F: "open_emitter", SEG_B: "open_emitter", SEG_G: "open_emitter", ISET: "input", "V+": "power_in", SEG_C: "open_emitter", SEG_E: "open_emitter", SEG_DP: "open_emitter", SEG_D: "open_emitter", DOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:MAX7221xRG";
  override referencePrefix = "U";
}

/**
 * Serially Interfaced, 8-Digit LED Display Driver, SOIC-24W
 *
 * KiCad symbol: `Driver_LED:MAX7221xWG`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7219-MAX7221.pdf
 * Keywords: spi qspi microwire.
 * Default footprint: Package_SO:SOIC-24W_7.5x15.4mm_P1.27mm.
 */
export class MAX7221xWG extends Component.withPins({
  "DIN": "1",
  "DIG_0": "2",
  "DIG_4": "3",
  "GND_4": "4",
  "DIG_6": "5",
  "DIG_2": "6",
  "DIG_3": "7",
  "DIG_7": "8",
  "GND_9": "9",
  "DIG_5": "10",
  "DIG_1": "11",
  "~{CS}": "12",
  "CLK": "13",
  "SEG_A": "14",
  "SEG_F": "15",
  "SEG_B": "16",
  "SEG_G": "17",
  "ISET": "18",
  "V+": "19",
  "SEG_C": "20",
  "SEG_E": "21",
  "SEG_DP": "22",
  "SEG_D": "23",
  "DOUT": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DIN: "input", DIG_0: "open_collector", DIG_4: "open_collector", GND_4: "power_in", DIG_6: "open_collector", DIG_2: "open_collector", DIG_3: "open_collector", DIG_7: "open_collector", GND_9: "passive", DIG_5: "open_collector", DIG_1: "open_collector", "~{CS}": "input", CLK: "input", SEG_A: "open_emitter", SEG_F: "open_emitter", SEG_B: "open_emitter", SEG_G: "open_emitter", ISET: "input", "V+": "power_in", SEG_C: "open_emitter", SEG_E: "open_emitter", SEG_DP: "open_emitter", SEG_D: "open_emitter", DOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:MAX7221xWG";
  override referencePrefix = "U";
}

/**
 * 16-Channel, 14-bit PWM constant current LED sink driver with built-in 8K-bit SRAM, 6-bit current gain, LED open detection, HVQFN-24
 *
 * KiCad symbol: `Driver_LED:MBI5252GFN`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm*P0.5mm*2.5x2.5mm*.
 * @see https://datasheet.lcsc.com/lcsc/1809031521_MBI-MBI5252GP-A_C261127.pdf
 * Keywords: Shift Register LED driver 16 bit.
 * Default footprint: Package_DFN_QFN:HVQFN-24-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class MBI5252GFN extends Component.withPins({
  "LE": "1",
  "~{OUT0}": "2",
  "~{OUT1}": "3",
  "~{OUT2}": "4",
  "~{OUT3}": "5",
  "~{OUT4}": "6",
  "~{OUT5}": "7",
  "~{OUT6}": "8",
  "~{OUT7}": "9",
  "GND": "10",
  "~{OUT8}": "11",
  "~{OUT9}": "12",
  "~{OUT10}": "13",
  "~{OUT11}": "14",
  "~{OUT12}": "15",
  "~{OUT13}": "16",
  "~{OUT14}": "17",
  "~{OUT15}": "18",
  "SDO": "19",
  "GCLK": "20",
  "R-EXT": "21",
  "VDD": "22",
  "SDI": "23",
  "DCLK": "24",
  "PAD": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LE: "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", GND: "power_in", "~{OUT8}": "open_collector", "~{OUT9}": "open_collector", "~{OUT10}": "open_collector", "~{OUT11}": "open_collector", "~{OUT12}": "open_collector", "~{OUT13}": "open_collector", "~{OUT14}": "open_collector", "~{OUT15}": "open_collector", SDO: "output", GCLK: "input", "R-EXT": "passive", VDD: "power_in", SDI: "input", DCLK: "input", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:MBI5252GFN";
  override referencePrefix = "U";
}

/**
 * 16-Channel, 14-bit PWM constant current LED sink driver with built-in 8K-bit SRAM, 6-bit current gain, LED open detection, SSOP-24
 *
 * KiCad symbol: `Driver_LED:MBI5252GP`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x8.7mm*P0.635mm*.
 * @see https://datasheet.lcsc.com/lcsc/1809031521_MBI-MBI5252GP-A_C261127.pdf
 * Keywords: Shift Register LED driver 16 bit.
 * Default footprint: Package_SO:SSOP-24_3.9x8.7mm_P0.635mm.
 */
export class MBI5252GP extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "DCLK": "3",
  "LE": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OUT8}": "13",
  "~{OUT9}": "14",
  "~{OUT10}": "15",
  "~{OUT11}": "16",
  "~{OUT12}": "17",
  "~{OUT13}": "18",
  "~{OUT14}": "19",
  "~{OUT15}": "20",
  "GCLK": "21",
  "SDO": "22",
  "R-EXT": "23",
  "VDD": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", DCLK: "input", LE: "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OUT8}": "open_collector", "~{OUT9}": "open_collector", "~{OUT10}": "open_collector", "~{OUT11}": "open_collector", "~{OUT12}": "open_collector", "~{OUT13}": "open_collector", "~{OUT14}": "open_collector", "~{OUT15}": "open_collector", GCLK: "input", SDO: "output", "R-EXT": "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:MBI5252GP";
  override referencePrefix = "U";
}

/**
 * C-MOS BCD-TO-SEVEN-SEGMENT 4-BIT LATCH / DECODER DRIVER, DIP-16
 *
 * KiCad symbol: `Driver_LED:MC14495P`. Reference prefix: `U`.
 * Footprint filters: DIP?16?W7.62*.
 * @see https://www.futurlec.com/Datasheet/Motorola/MC14495.pdf
 * Keywords: driver 7-segment.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class MC14495P extends Component.withPins({
  "e": "1",
  "f": "2",
  "g": "3",
  "h+i": "4",
  "A": "5",
  "B": "6",
  "~{CLK}": "7",
  "GND": "8",
  "C": "9",
  "D": "10",
  "~{VCR}": "11",
  "a": "12",
  "b": "13",
  "c": "14",
  "d": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { e: "output", f: "output", g: "output", "h+i": "output", A: "input", B: "input", "~{CLK}": "input", GND: "power_in", C: "input", D: "input", "~{VCR}": "input", a: "output", b: "output", c: "output", d: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:MC14495P";
  override referencePrefix = "U";
}

/**
 * Constant-current LED boost regulator, 0.65V startup, 550mA output, MSOP-8
 *
 * KiCad symbol: `Driver_LED:MCP1643xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/20005208A.pdf
 * Keywords: LED driver low voltage.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class MCP1643xMS extends Component.withPins({
  "EN": "1",
  "VFB": "2",
  "NC": "3",
  "VOUT": "4",
  "SW": "5",
  "PGND": "6",
  "SGND": "7",
  "VIN": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EN: "input", VFB: "input", NC: "no_connect", VOUT: "power_out", SW: "passive", PGND: "power_in", SGND: "power_in", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:MCP1643xMS";
  override referencePrefix = "U";
}

/**
 * Step-Up LED Driver w/ UVLO and Open Load Protection, 500kHz, SOT-23-5
 *
 * KiCad symbol: `Driver_LED:MCP1662-xOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/20005316E.pdf
 * Keywords: step-up led driver uvlo.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP1662_xOT extends Component.withPins({
  "SW": "1",
  "GND": "2",
  "V_{FB}": "3",
  "EN": "4",
  "V_{IN}": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SW: "power_out", GND: "power_in", "V_{FB}": "input", EN: "input", "V_{IN}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:MCP1662-xOT";
  override referencePrefix = "U";
}

/**
 * Single string LED driver, 3V to 36V input, 4A peak current limit, 200Khz to 2Mhz, SOT23-8
 *
 * KiCad symbol: `Driver_LED:MP3362GJ`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.monolithicpower.com/en/documentview/productdocument/index/version/2/document_type/Datasheet/lang/en/sku/MP3362GJ/document_id/9117/
 * Keywords: LED driver.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-8.
 */
export class MP3362GJ extends Component.withPins({
  "SW": "1",
  "VIN": "2",
  "COMP": "3",
  "EN": "4",
  "OSC": "5",
  "FB": "6",
  "OVP": "7",
  "GND": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SW: "passive", VIN: "power_in", COMP: "passive", EN: "input", OSC: "input", FB: "passive", OVP: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:MP3362GJ";
  override referencePrefix = "U";
}

/**
 * 55V, 2.5A Programmable Frequency LED Driver, DFN-10
 *
 * KiCad symbol: `Driver_LED:MPQ2483DQ`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.monolithicpower.com/pub/media/document/MPQ2483_r1.05.pdf
 * Keywords: LED driver.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.7x2.5mm.
 */
export class MPQ2483DQ extends Component.withPins({
  "VDD": "1",
  "VSS_2": "2",
  "OVP": "3",
  "FB": "4",
  "COMP": "5",
  "RSET": "6",
  "EN/DIM": "7",
  "INGND": "8",
  "BST": "9",
  "SW": "10",
  "VSS_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", VSS_2: "power_in", OVP: "input", FB: "input", COMP: "input", RSET: "input", "EN/DIM": "input", INGND: "power_in", BST: "output", SW: "output", VSS_11: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:MPQ2483DQ";
  override referencePrefix = "U";
}

/**
 * Single string LED driver, 3V to 36V input, 4A peak current limit, 200Khz to 2Mhz, AEC1-Q100, SOT23-8
 *
 * KiCad symbol: `Driver_LED:MPQ3362GJ-AEC1`. Reference prefix: `U`.
 * Footprint filters: TSOT?23*.
 * @see https://www.monolithicpower.com/en/documentview/productdocument/index/version/2/document_type/Datasheet/lang/en/sku/MPQ3362GJ-AEC1/document_id/9116/
 * Keywords: LED driver AEC AEC1-Q100.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-8.
 */
export class MPQ3362GJ_AEC1 extends Component.withPins({
  "SW": "1",
  "VIN": "2",
  "COMP": "3",
  "EN": "4",
  "OSC": "5",
  "FB": "6",
  "OVP": "7",
  "GND": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SW: "passive", VIN: "power_in", COMP: "passive", EN: "input", OSC: "input", FB: "passive", OVP: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:MPQ3362GJ-AEC1";
  override referencePrefix = "U";
}

/**
 * Triple Output I2C Controlled RGB LED Driver, TSSOP-14
 *
 * KiCad symbol: `Driver_LED:NCP5623DTBR2G`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCP5623-D.PDF
 * Keywords: LED RGB.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class NCP5623DTBR2G extends Component.withPins({
  "IC_1": "1",
  "GND_2": "2",
  "LED3": "3",
  "LED2": "4",
  "LED1": "5",
  "GND_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "SDA": "9",
  "I_{REF}": "10",
  "SCL": "11",
  "V_{DET}": "12",
  "V_{BAT}": "13",
  "IC_14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IC_1: "passive", GND_2: "power_in", LED3: "open_collector", LED2: "open_collector", LED1: "open_collector", GND_6: "passive", NC_7: "no_connect", NC_8: "no_connect", SDA: "bidirectional", "I_{REF}": "passive", SCL: "input", "V_{DET}": "input", "V_{BAT}": "power_in", IC_14: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:NCP5623DTBR2G";
  override referencePrefix = "U";
}

/**
 * 10mA (with external R up to 65mA) constant current driver (linear), max 40V, SOT457 (SC-74)
 *
 * KiCad symbol: `Driver_LED:NCR401U`. Reference prefix: `U`.
 * Footprint filters: SC?74*.
 * @see https://assets.nexperia.com/documents/data-sheet/NCR401U.pdf
 * Keywords: LED driver constant current.
 * Default footprint: Package_TO_SOT_SMD:SC-74-6_1.55x2.9mm_P0.95mm.
 */
export class NCR401U extends Component.withPins({
  "GND": "1",
  "IOUT_2": "2",
  "IOUT_3": "3",
  "VS": "4",
  "IOUT_5": "5",
  "REXT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IOUT_2: "output", IOUT_3: "passive", VS: "power_in", IOUT_5: "passive", REXT: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:NCR401U";
  override referencePrefix = "U";
}

/**
 * Boost WLED Driver, Vo = 40V maximum, Ilim = 1.5A, PWM dimming, OCP, OVP, UDFN-8 / USON-8
 *
 * KiCad symbol: `Driver_LED:PAM2841G`. Reference prefix: `U`.
 * Footprint filters: *2x2mm?P0.5mm?EP0.86x1.55mm*.
 * @see https://www.diodes.com/assets/Datasheets/PAM2841.pdf
 * Keywords: UVLO white-LED.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_2x2mm_P0.5mm_EP0.86x1.55mm.
 */
export class PAM2841G extends Component.withPins({
  "PGND": "1",
  "VIN": "2",
  "ENA": "3",
  "Comp": "4",
  "GND_5": "5",
  "FB": "6",
  "OVP": "7",
  "SW": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PGND: "power_in", VIN: "power_in", ENA: "input", Comp: "passive", GND_5: "power_in", FB: "input", OVP: "input", SW: "power_out", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:PAM2841G";
  override referencePrefix = "U";
}

/**
 * Boost WLED Driver, Vo = 40V maximum, Ilim = 1.5A, PWM dimming, OCP, OVP, MSOP-8
 *
 * KiCad symbol: `Driver_LED:PAM2841S`. Reference prefix: `U`.
 * Footprint filters: *MSOP*3x3mm?P0.65mm*.
 * @see https://www.diodes.com/assets/Datasheets/PAM2841.pdf
 * Keywords: UVLO white-LED.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class PAM2841S extends Component.withPins({
  "PGND": "1",
  "VIN": "2",
  "ENA": "3",
  "Comp": "4",
  "GND": "5",
  "FB": "6",
  "OVP": "7",
  "SW": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PGND: "power_in", VIN: "power_in", ENA: "input", Comp: "passive", GND: "power_in", FB: "input", OVP: "input", SW: "power_out", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:PAM2841S";
  override referencePrefix = "U";
}

/**
 * 8-bit PWM I2C eight LED driver, TSSOP-16
 *
 * KiCad symbol: `Driver_LED:PCA9531PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9531.pdf
 * Keywords: led pwm rgb smbus.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class PCA9531PW extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "LED0": "4",
  "LED1": "5",
  "LED2": "6",
  "LED3": "7",
  "V_{SS}": "8",
  "LED4": "9",
  "LED5": "10",
  "LED6": "11",
  "LED7": "12",
  "~{RESET}": "13",
  "SCL": "14",
  "SDA": "15",
  "V_{DD}": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", LED0: "open_collector", LED1: "open_collector", LED2: "open_collector", LED3: "open_collector", "V_{SS}": "power_in", LED4: "open_collector", LED5: "open_collector", LED6: "open_collector", LED7: "open_collector", "~{RESET}": "input", SCL: "input", SDA: "bidirectional", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:PCA9531PW";
  override referencePrefix = "U";
}

/**
 * 16-bit PWM Fm+ I2C-bus LED driver, TSSOP-28
 *
 * KiCad symbol: `Driver_LED:PCA9635`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9635.pdf
 * Keywords: led pwm rgb rgba.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class PCA9635 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "LED0": "6",
  "LED1": "7",
  "LED2": "8",
  "LED3": "9",
  "LED4": "10",
  "LED5": "11",
  "LED6": "12",
  "LED7": "13",
  "VSS": "14",
  "LED8": "15",
  "LED9": "16",
  "LED10": "17",
  "LED11": "18",
  "LED12": "19",
  "LED13": "20",
  "LED14": "21",
  "LED15": "22",
  "~{OE}": "23",
  "A5": "24",
  "A6": "25",
  "SCL": "26",
  "SDA": "27",
  "VDD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", LED0: "output", LED1: "output", LED2: "output", LED3: "output", LED4: "output", LED5: "output", LED6: "output", LED7: "output", VSS: "power_in", LED8: "output", LED9: "output", LED10: "output", LED11: "output", LED12: "output", LED13: "output", LED14: "output", LED15: "output", "~{OE}": "input", A5: "input", A6: "input", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:PCA9635";
  override referencePrefix = "U";
}

/**
 * 16-channel 12-bit PWM Fm+ I2C-bus LED controller RGBA QFN
 *
 * KiCad symbol: `Driver_LED:PCA9685BS`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/PCA9685.pdf
 * Keywords: PWM LED driver I2C QFN.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PCA9685BS extends Component.withPins({
  "A3": "1",
  "A4": "2",
  "LED0": "3",
  "LED1": "4",
  "LED2": "5",
  "LED3": "6",
  "LED4": "7",
  "LED5": "8",
  "LED6": "9",
  "LED7": "10",
  "VSS_11": "11",
  "LED8": "12",
  "LED9": "13",
  "LED10": "14",
  "LED11": "15",
  "LED12": "16",
  "LED13": "17",
  "LED14": "18",
  "LED15": "19",
  "~{OE}": "20",
  "A5": "21",
  "EXTCLK": "22",
  "SCL": "23",
  "SDA": "24",
  "VDD": "25",
  "A0": "26",
  "A1": "27",
  "A2": "28",
  "VSS_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A3: "input", A4: "input", LED0: "output", LED1: "output", LED2: "output", LED3: "output", LED4: "output", LED5: "output", LED6: "output", LED7: "output", VSS_11: "power_in", LED8: "output", LED9: "output", LED10: "output", LED11: "output", LED12: "output", LED13: "output", LED14: "output", LED15: "output", "~{OE}": "input", A5: "input", EXTCLK: "input", SCL: "input", SDA: "bidirectional", VDD: "power_in", A0: "input", A1: "input", A2: "input", VSS_29: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:PCA9685BS";
  override referencePrefix = "U";
}

/**
 * 16-channel 12-bit PWM Fm+ I2C-bus LED controller RGBA TSSOP
 *
 * KiCad symbol: `Driver_LED:PCA9685PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/PCA9685.pdf
 * Keywords: PWM LED driver I2C TSSOP.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class PCA9685PW extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "A3": "4",
  "A4": "5",
  "LED0": "6",
  "LED1": "7",
  "LED2": "8",
  "LED3": "9",
  "LED4": "10",
  "LED5": "11",
  "LED6": "12",
  "LED7": "13",
  "VSS": "14",
  "LED8": "15",
  "LED9": "16",
  "LED10": "17",
  "LED11": "18",
  "LED12": "19",
  "LED13": "20",
  "LED14": "21",
  "LED15": "22",
  "~{OE}": "23",
  "A5": "24",
  "EXTCLK": "25",
  "SCL": "26",
  "SDA": "27",
  "VDD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", LED0: "output", LED1: "output", LED2: "output", LED3: "output", LED4: "output", LED5: "output", LED6: "output", LED7: "output", VSS: "power_in", LED8: "output", LED9: "output", LED10: "output", LED11: "output", LED12: "output", LED13: "output", LED14: "output", LED15: "output", "~{OE}": "input", A5: "input", EXTCLK: "input", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:PCA9685PW";
  override referencePrefix = "U";
}

/**
 * 16-channel, 8-bit PWM, Constant Current, Dimming, LED controller, SPI, HTSSOP-28
 *
 * KiCad symbol: `Driver_LED:PCA9745BTW`. Reference prefix: `U`.
 * Footprint filters: NXP*HTSSOP*28*1EP*4.4x9.7mm*P0.65mm*EP2.2x3.4mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9745B.pdf
 * Keywords: pwm led current spi.
 * Default footprint: Package_SO:NXP_HTSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP2.2x3.4mm.
 */
export class PCA9745BTW extends Component.withPins({
  "REXT": "1",
  "V_{SS}_2": "2",
  "SDO": "3",
  "~{CS}": "4",
  "~{OE}": "5",
  "LED0": "6",
  "LED1": "7",
  "LED2": "8",
  "LED3": "9",
  "V_{SS}_10": "10",
  "LED4": "11",
  "LED5": "12",
  "LED6": "13",
  "LED7": "14",
  "LED8": "15",
  "LED9": "16",
  "LED10": "17",
  "LED11": "18",
  "V_{SS}_19": "19",
  "LED12": "20",
  "LED13": "21",
  "LED14": "22",
  "LED15": "23",
  "V_{SS}_24": "24",
  "~{RESET}": "25",
  "SCLK": "26",
  "SDI": "27",
  "V_{DD}": "28",
  "V_{SS}_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REXT: "input", "V_{SS}_2": "power_in", SDO: "output", "~{CS}": "input", "~{OE}": "input", LED0: "open_collector", LED1: "open_collector", LED2: "open_collector", LED3: "open_collector", "V_{SS}_10": "passive", LED4: "open_collector", LED5: "open_collector", LED6: "open_collector", LED7: "open_collector", LED8: "open_collector", LED9: "open_collector", LED10: "open_collector", LED11: "open_collector", "V_{SS}_19": "passive", LED12: "open_collector", LED13: "open_collector", LED14: "open_collector", LED15: "open_collector", "V_{SS}_24": "passive", "~{RESET}": "input", SCLK: "input", SDI: "input", "V_{DD}": "power_in", "V_{SS}_29": "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:PCA9745BTW";
  override referencePrefix = "U";
}

/**
 * LED Driver DC/DC Converter, input 4.5 to 36V, output current 0.3 to 1.2A
 *
 * KiCad symbol: `Driver_LED:RCD-24`. Reference prefix: `U`.
 * Footprint filters: Converter*DCDC*RECOM*RCD?24*.
 * @see https://g.recomcdn.com/media/Datasheet/pdf/.fYUQjOlW/.t2a80a771bdbb0ef300f7/Datasheet-93/RCD-24.pdf
 * Keywords: Led Driver DC-DC.
 * Default footprint: Converter_DCDC:Converter_DCDC_RECOM_RCD-24_THT.
 */
export class RCD_24 extends Component.withPins({
  "+Vin": "1",
  "Analogue_Dimming": "2",
  "PWM/ON/OFF": "3",
  "GND": "4",
  "-Vout": "5",
  "+Vout": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+Vin": "power_in", Analogue_Dimming: "passive", "PWM/ON/OFF": "passive", GND: "power_in", "-Vout": "power_out", "+Vout": "power_out", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:RCD-24";
  override referencePrefix = "U";
}

/**
 * 3A monolithic step-down current source with synchronous rectification, 3-18V Input Voltage, 850kHz, SO-8
 *
 * KiCad symbol: `Driver_LED:ST1CC40DR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/group3/71/e8/26/3c/c8/cc/46/e6/CD00292360/files/CD00292360.pdf/jcr:content/translations/en.CD00292360.pdf
 * Keywords: DC/DC Buck Conwerter 3A Low Voltage Input LED Lighting.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ST1CC40DR extends Component.withPins({
  "SW": "1",
  "PGND": "2",
  "VINA": "3",
  "INH": "4",
  "FB": "5",
  "AGND": "6",
  "GND": "7",
  "VINSW": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SW: "output", PGND: "power_out", VINA: "power_in", INH: "input", FB: "input", AGND: "power_in", GND: "power_in", VINSW: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:ST1CC40DR";
  override referencePrefix = "U";
}

/**
 * 3A monolithic step-down current source with synchronous rectification, 3-18V Input Voltage, 850kHz, DFN-8
 *
 * KiCad symbol: `Driver_LED:ST1CC40PUR`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*4x4mm*P0.8mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/group3/71/e8/26/3c/c8/cc/46/e6/CD00292360/files/CD00292360.pdf/jcr:content/translations/en.CD00292360.pdf
 * Keywords: DC/DC Buck Conwerter 3A Low Voltage Input LED Lighting.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_4x4mm_P0.8mm_EP2.5x3.6mm.
 */
export class ST1CC40PUR extends Component.withPins({
  "VINA": "1",
  "INH": "2",
  "FB": "3",
  "AGND": "4",
  "NC": "5",
  "VINSW": "6",
  "SW": "7",
  "PGND": "8",
  "PAD": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VINA: "power_in", INH: "input", FB: "input", AGND: "power_in", NC: "no_connect", VINSW: "power_in", SW: "output", PGND: "power_out", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:ST1CC40PUR";
  override referencePrefix = "U";
}

/**
 * 8-bit constant current LED sink driver, 5..100mA output current, 20V driving capability, 3.0..5.5V power supply, DIP-16
 *
 * KiCad symbol: `Driver_LED:STP08CP05B`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62mm*.
 * @see https://www.st.com/resource/en/datasheet/stp08cp05.pdf
 * Keywords: Shift Register.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class STP08CP05B extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OE}": "13",
  "SDO": "14",
  "R-EXT": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", LE: "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OE}": "input", SDO: "output", "R-EXT": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:STP08CP05B";
  override referencePrefix = "U";
}

/**
 * 8-bit constant current LED sink driver, 5..100mA output current, 20V driving capability, 3.0..5.5V power supply, SOIC-16
 *
 * KiCad symbol: `Driver_LED:STP08CP05M`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9*9.9*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/stp08cp05.pdf
 * Keywords: Shift Register.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class STP08CP05M extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OE}": "13",
  "SDO": "14",
  "R-EXT": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", LE: "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OE}": "input", SDO: "output", "R-EXT": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:STP08CP05M";
  override referencePrefix = "U";
}

/**
 * 8-bit constant current LED sink driver, 5..100mA output current, 20V driving capability, 3.0..5.5V power supply, TSSOP-16
 *
 * KiCad symbol: `Driver_LED:STP08CP05T`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4*5**P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stp08cp05.pdf
 * Keywords: Shift Register.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class STP08CP05T extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OE}": "13",
  "SDO": "14",
  "R-EXT": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", LE: "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OE}": "input", SDO: "output", "R-EXT": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:STP08CP05T";
  override referencePrefix = "U";
}

/**
 * 8-bit constant current LED sink driver, 5..100mA output current, 20V driving capability, 3.0..5.5V power supply, HTSSOP-16
 *
 * KiCad symbol: `Driver_LED:STP08CP05XT`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4*5*P0.65mm*EP3x3mm*.
 * @see https://www.st.com/resource/en/datasheet/stp08cp05.pdf
 * Keywords: Shift Register.
 * Default footprint: Package_SO:HTSSOP-16-1EP_4.4x5mm_P0.65mm_EP3x3mm.
 */
export class STP08CP05XT extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OE}": "13",
  "SDO": "14",
  "R-EXT": "15",
  "VDD": "16",
  "EPAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", LE: "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OE}": "input", SDO: "output", "R-EXT": "output", VDD: "power_in", EPAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:STP08CP05XT";
  override referencePrefix = "U";
}

/**
 * 16-bit constant current LED sink driver, 5..100mA output current, 20V driving capability, 3.0..5.5V power supply, SOIC-24
 *
 * KiCad symbol: `Driver_LED:STP16CP05M`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.5*15.*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/stp16cp05.pdf
 * Keywords: Shift Register.
 * Default footprint: Package_SO:SOIC-24W_7.5x15.4mm_P1.27mm.
 */
export class STP16CP05M extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE/DM1": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OUT8}": "13",
  "~{OUT9}": "14",
  "~{OUT10}": "15",
  "~{OUT11}": "16",
  "~{OUT12}": "17",
  "~{OUT13}": "18",
  "~{OUT14}": "19",
  "~{OUT15}": "20",
  "~{OE/DM2}": "21",
  "SDO": "22",
  "R-EXT": "23",
  "VDD": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", "LE/DM1": "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OUT8}": "open_collector", "~{OUT9}": "open_collector", "~{OUT10}": "open_collector", "~{OUT11}": "open_collector", "~{OUT12}": "open_collector", "~{OUT13}": "open_collector", "~{OUT14}": "open_collector", "~{OUT15}": "open_collector", "~{OE/DM2}": "input", SDO: "output", "R-EXT": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:STP16CP05M";
  override referencePrefix = "U";
}

/**
 * 16-bit constant current LED sink driver, 5..100mA output current, 20V driving capability, 3.0..5.5V power supply, QSOP-24
 *
 * KiCad symbol: `Driver_LED:STP16CP05P`. Reference prefix: `U`.
 * Footprint filters: *QSOP*3.9*8.*P0.635mm*.
 * @see https://www.st.com/resource/en/datasheet/stp16cp05.pdf
 * Keywords: Shift Register.
 * Default footprint: Package_SO:QSOP-24_3.9x8.7mm_P0.635mm.
 */
export class STP16CP05P extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE/DM1": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OUT8}": "13",
  "~{OUT9}": "14",
  "~{OUT10}": "15",
  "~{OUT11}": "16",
  "~{OUT12}": "17",
  "~{OUT13}": "18",
  "~{OUT14}": "19",
  "~{OUT15}": "20",
  "~{OE/DM2}": "21",
  "SDO": "22",
  "R-EXT": "23",
  "VDD": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", "LE/DM1": "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OUT8}": "open_collector", "~{OUT9}": "open_collector", "~{OUT10}": "open_collector", "~{OUT11}": "open_collector", "~{OUT12}": "open_collector", "~{OUT13}": "open_collector", "~{OUT14}": "open_collector", "~{OUT15}": "open_collector", "~{OE/DM2}": "input", SDO: "output", "R-EXT": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:STP16CP05P";
  override referencePrefix = "U";
}

/**
 * 16-bit constant current LED sink driver, 5..100mA output current, 20V driving capability, 3.0..5.5V power supply, SOIC-24
 *
 * KiCad symbol: `Driver_LED:STP16CP05T`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4*7.8*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stp16cp05.pdf
 * Keywords: Shift Register.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class STP16CP05T extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE/DM1": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OUT8}": "13",
  "~{OUT9}": "14",
  "~{OUT10}": "15",
  "~{OUT11}": "16",
  "~{OUT12}": "17",
  "~{OUT13}": "18",
  "~{OUT14}": "19",
  "~{OUT15}": "20",
  "~{OE/DM2}": "21",
  "SDO": "22",
  "R-EXT": "23",
  "VDD": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", "LE/DM1": "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OUT8}": "open_collector", "~{OUT9}": "open_collector", "~{OUT10}": "open_collector", "~{OUT11}": "open_collector", "~{OUT12}": "open_collector", "~{OUT13}": "open_collector", "~{OUT14}": "open_collector", "~{OUT15}": "open_collector", "~{OE/DM2}": "input", SDO: "output", "R-EXT": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:STP16CP05T";
  override referencePrefix = "U";
}

/**
 * 16-bit constant current LED sink driver, 5..100mA output current, 20V driving capability, 3.0..5.5V power supply, HTSSOP-24
 *
 * KiCad symbol: `Driver_LED:STP16CP05XT`. Reference prefix: `U`.
 * Footprint filters: *HTSSOP*1EP*4.4*7.8*P0.65mm*EP3.2x5mm*.
 * @see https://www.st.com/resource/en/datasheet/stp16cp05.pdf
 * Keywords: Shift-Register.
 * Default footprint: Package_SO:HTSSOP-24-1EP_4.4x7.8mm_P0.65mm_EP3.2x5mm.
 */
export class STP16CP05XT extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE/DM1": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OUT8}": "13",
  "~{OUT9}": "14",
  "~{OUT10}": "15",
  "~{OUT11}": "16",
  "~{OUT12}": "17",
  "~{OUT13}": "18",
  "~{OUT14}": "19",
  "~{OUT15}": "20",
  "~{OE/DM2}": "21",
  "SDO": "22",
  "R-EXT": "23",
  "VDD": "24",
  "EPAD": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", "LE/DM1": "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OUT8}": "open_collector", "~{OUT9}": "open_collector", "~{OUT10}": "open_collector", "~{OUT11}": "open_collector", "~{OUT12}": "open_collector", "~{OUT13}": "open_collector", "~{OUT14}": "open_collector", "~{OUT15}": "open_collector", "~{OE/DM2}": "input", SDO: "output", "R-EXT": "output", VDD: "power_in", EPAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:STP16CP05XT";
  override referencePrefix = "U";
}

/**
 * 16-bit constant current LED sink driver, 5..90mA output current, 20V driving capability, 3..5.5V power supply, TSSOP-24
 *
 * KiCad symbol: `Driver_LED:STP16CPC26T`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4*7.*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/STP16CPC26.pdf
 * Keywords: Shift Register .
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class STP16CPC26T extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OUT8}": "13",
  "~{OUT9}": "14",
  "~{OUT10}": "15",
  "~{OUT11}": "16",
  "~{OUT12}": "17",
  "~{OUT13}": "18",
  "~{OUT14}": "19",
  "~{OUT15}": "20",
  "~{OE}": "21",
  "SDO": "22",
  "R-EXT": "23",
  "VDD": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", LE: "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OUT8}": "open_collector", "~{OUT9}": "open_collector", "~{OUT10}": "open_collector", "~{OUT11}": "open_collector", "~{OUT12}": "open_collector", "~{OUT13}": "open_collector", "~{OUT14}": "open_collector", "~{OUT15}": "open_collector", "~{OE}": "input", SDO: "output", "R-EXT": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:STP16CPC26T";
  override referencePrefix = "U";
}

/**
 * 16-bit constant current LED sink driver, 5..90mA output current, 20V driving capability, 3..5.5V power supply, SOIC-24
 *
 * KiCad symbol: `Driver_LED:STP16CPC26M`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.5*15.*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/STP16CPC26.pdf
 * Keywords: Shift Register .
 * Default footprint: Package_SO:SOIC-24W_7.5x15.4mm_P1.27mm.
 */
export class STP16CPC26M extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OUT8}": "13",
  "~{OUT9}": "14",
  "~{OUT10}": "15",
  "~{OUT11}": "16",
  "~{OUT12}": "17",
  "~{OUT13}": "18",
  "~{OUT14}": "19",
  "~{OUT15}": "20",
  "~{OE}": "21",
  "SDO": "22",
  "R-EXT": "23",
  "VDD": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", LE: "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OUT8}": "open_collector", "~{OUT9}": "open_collector", "~{OUT10}": "open_collector", "~{OUT11}": "open_collector", "~{OUT12}": "open_collector", "~{OUT13}": "open_collector", "~{OUT14}": "open_collector", "~{OUT15}": "open_collector", "~{OE}": "input", SDO: "output", "R-EXT": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:STP16CPC26M";
  override referencePrefix = "U";
}

/**
 * 16-bit constant current LED sink driver, 5..90mA output current, 20V driving capability, 3..5.5V power supply, QSOP-24
 *
 * KiCad symbol: `Driver_LED:STP16CPC26P`. Reference prefix: `U`.
 * Footprint filters: *QSOP*3.9*8.*P0.635mm*.
 * @see https://www.st.com/resource/en/datasheet/STP16CPC26.pdf
 * Keywords: Shift Register .
 * Default footprint: Package_SO:QSOP-24_3.9x8.7mm_P0.635mm.
 */
export class STP16CPC26P extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OUT8}": "13",
  "~{OUT9}": "14",
  "~{OUT10}": "15",
  "~{OUT11}": "16",
  "~{OUT12}": "17",
  "~{OUT13}": "18",
  "~{OUT14}": "19",
  "~{OUT15}": "20",
  "~{OE}": "21",
  "SDO": "22",
  "R-EXT": "23",
  "VDD": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", LE: "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OUT8}": "open_collector", "~{OUT9}": "open_collector", "~{OUT10}": "open_collector", "~{OUT11}": "open_collector", "~{OUT12}": "open_collector", "~{OUT13}": "open_collector", "~{OUT14}": "open_collector", "~{OUT15}": "open_collector", "~{OE}": "input", SDO: "output", "R-EXT": "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:STP16CPC26P";
  override referencePrefix = "U";
}

/**
 * 16-bit constant current LED sink driver, 5..90mA output current, 20V driving capability, 3..5.5V power supply, HTSSOP-24
 *
 * KiCad symbol: `Driver_LED:STP16CPC26X`. Reference prefix: `U`.
 * Footprint filters: *HTSSOP*1EP*4.4*7.*P0.65*EP3.2x5mm*.
 * @see https://www.st.com/resource/en/datasheet/STP16CPC26.pdf
 * Keywords: Shift-Register.
 * Default footprint: Package_SO:HTSSOP-24-1EP_4.4x7.8mm_P0.65mm_EP3.2x5mm.
 */
export class STP16CPC26X extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OUT8}": "13",
  "~{OUT9}": "14",
  "~{OUT10}": "15",
  "~{OUT11}": "16",
  "~{OUT12}": "17",
  "~{OUT13}": "18",
  "~{OUT14}": "19",
  "~{OUT15}": "20",
  "~{OE}": "21",
  "SDO": "22",
  "R-EXT": "23",
  "VDD": "24",
  "EPAD": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", LE: "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OUT8}": "open_collector", "~{OUT9}": "open_collector", "~{OUT10}": "open_collector", "~{OUT11}": "open_collector", "~{OUT12}": "open_collector", "~{OUT13}": "open_collector", "~{OUT14}": "open_collector", "~{OUT15}": "open_collector", "~{OE}": "input", SDO: "output", "R-EXT": "output", VDD: "power_in", EPAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:STP16CPC26X";
  override referencePrefix = "U";
}

/**
 * 7-bit I2C/SMBus LED driver with intensity control, X2QFN-12
 *
 * KiCad symbol: `Driver_LED:TCA6507RUE`. Reference prefix: `U`.
 * Footprint filters: *X2QFN*RUE*.
 * @see https://www.ti.com/lit/gpn/tca6507
 * Keywords: led driver i2c 7-bit.
 * Default footprint: Package_DFN_QFN:Texas_X2QFN-RUE-12_1.4x2mm_P0.4mm.
 */
export class TCA6507RUE extends Component.withPins({
  "V_{CC}": "1",
  "SCL": "2",
  "SDA": "3",
  "EN": "4",
  "GND": "5",
  "P0": "6",
  "P1": "7",
  "P2": "8",
  "P3": "9",
  "P4": "10",
  "P5": "11",
  "P6": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", SCL: "input", SDA: "bidirectional", EN: "input", GND: "power_in", P0: "open_collector", P1: "open_collector", P2: "open_collector", P3: "open_collector", P4: "open_collector", P5: "open_collector", P6: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TCA6507RUE";
  override referencePrefix = "U";
}

/**
 * 8-Channel, 8-Bit Fm+ I2C-Bus Constant-Current LED Sink Driver, TSSOP-20
 *
 * KiCad symbol: `Driver_LED:TLC59108xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlc59108.pdf
 * Keywords: LED current driver.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class TLC59108xPW extends Component.withPins({
  "REXT": "1",
  "A0": "2",
  "A1": "3",
  "A2": "4",
  "A3": "5",
  "~{OUT0}": "6",
  "~{OUT1}": "7",
  "GND_8": "8",
  "~{OUT2}": "9",
  "~{OUT3}": "10",
  "~{OUT4}": "11",
  "~{OUT5}": "12",
  "GND_13": "13",
  "~{OUT6}": "14",
  "~{OUT7}": "15",
  "GND_16": "16",
  "~{RESET}": "17",
  "SCL": "18",
  "SDA": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { REXT: "passive", A0: "input", A1: "input", A2: "input", A3: "input", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", GND_8: "power_in", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", GND_13: "passive", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", GND_16: "passive", "~{RESET}": "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC59108xPW";
  override referencePrefix = "U";
}

/**
 * 8-Channel Constant-Current LED Sink Driver
 *
 * KiCad symbol: `Driver_LED:TLC5916`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlc5916.pdf
 * Keywords: LED Constant-Current Driver.
 */
export class TLC5916 extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE(ED1)": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OE}(ED2)": "13",
  "SDO": "14",
  "R-EXT": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", "LE(ED1)": "passive", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OE}(ED2)": "passive", SDO: "output", "R-EXT": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC5916";
  override referencePrefix = "U";
}

/**
 * 8-Channel Constant-Current LED Sink Driver, Short to VLED detection
 *
 * KiCad symbol: `Driver_LED:TLC5917`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlc5917.pdf
 * Keywords: LED Constant-Current Driver.
 */
export class TLC5917 extends Component.withPins({
  "GND": "1",
  "SDI": "2",
  "CLK": "3",
  "LE(ED1)": "4",
  "~{OUT0}": "5",
  "~{OUT1}": "6",
  "~{OUT2}": "7",
  "~{OUT3}": "8",
  "~{OUT4}": "9",
  "~{OUT5}": "10",
  "~{OUT6}": "11",
  "~{OUT7}": "12",
  "~{OE}(ED2)": "13",
  "SDO": "14",
  "R-EXT": "15",
  "VDD": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SDI: "input", CLK: "input", "LE(ED1)": "passive", "~{OUT0}": "open_collector", "~{OUT1}": "open_collector", "~{OUT2}": "open_collector", "~{OUT3}": "open_collector", "~{OUT4}": "open_collector", "~{OUT5}": "open_collector", "~{OUT6}": "open_collector", "~{OUT7}": "open_collector", "~{OE}(ED2)": "passive", SDO: "output", "R-EXT": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC5917";
  override referencePrefix = "U";
}

/**
 * 16-Channel LED Driver With DOT Correction and Grayscale PWM Control, DIP package
 *
 * KiCad symbol: `Driver_LED:TLC5940NT`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc5940.pdf
 * Keywords: PWM LED driver.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class TLC5940NT extends Component.withPins({
  "OUT1": "1",
  "OUT2": "2",
  "OUT3": "3",
  "OUT4": "4",
  "OUT5": "5",
  "OUT6": "6",
  "OUT7": "7",
  "OUT8": "8",
  "OUT9": "9",
  "OUT10": "10",
  "OUT11": "11",
  "OUT12": "12",
  "OUT13": "13",
  "OUT14": "14",
  "OUT15": "15",
  "XERR": "16",
  "SOUT": "17",
  "GSCLK": "18",
  "DCPRG": "19",
  "IREF": "20",
  "VCC": "21",
  "GND": "22",
  "BLANK": "23",
  "XLAT": "24",
  "SCLK": "25",
  "SIN": "26",
  "VPRG": "27",
  "OUT0": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT1: "open_collector", OUT2: "open_collector", OUT3: "open_collector", OUT4: "open_collector", OUT5: "open_collector", OUT6: "open_collector", OUT7: "open_collector", OUT8: "open_collector", OUT9: "open_collector", OUT10: "open_collector", OUT11: "open_collector", OUT12: "open_collector", OUT13: "open_collector", OUT14: "open_collector", OUT15: "open_collector", XERR: "open_collector", SOUT: "output", GSCLK: "input", DCPRG: "input", IREF: "input", VCC: "power_in", GND: "power_in", BLANK: "input", XLAT: "input", SCLK: "input", SIN: "input", VPRG: "input", OUT0: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC5940NT";
  override referencePrefix = "U";
}

/**
 * 16-Channel LED Driver With DOT Correction and Grayscale PWM Control, TSSOP package with thermal pad
 *
 * KiCad symbol: `Driver_LED:TLC5940PWP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc5940.pdf
 * Keywords: PWM LED driver.
 * Default footprint: Package_SO:HTSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP3.4x9.5mm_Mask2.4x6.17mm_ThermalVias.
 */
export class TLC5940PWP extends Component.withPins({
  "GND": "1",
  "BLANK": "2",
  "XLAT": "3",
  "SCLK": "4",
  "SIN": "5",
  "VPRG": "6",
  "OUT0": "7",
  "OUT1": "8",
  "OUT2": "9",
  "OUT3": "10",
  "OUT4": "11",
  "OUT5": "12",
  "OUT6": "13",
  "OUT7": "14",
  "OUT8": "15",
  "OUT9": "16",
  "OUT10": "17",
  "OUT11": "18",
  "OUT12": "19",
  "OUT13": "20",
  "OUT14": "21",
  "OUT15": "22",
  "XERR": "23",
  "SOUT": "24",
  "GSCLK": "25",
  "DCPRG": "26",
  "IREF": "27",
  "VCC": "28",
  "PAD": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", BLANK: "input", XLAT: "input", SCLK: "input", SIN: "input", VPRG: "input", OUT0: "open_collector", OUT1: "open_collector", OUT2: "open_collector", OUT3: "open_collector", OUT4: "open_collector", OUT5: "open_collector", OUT6: "open_collector", OUT7: "open_collector", OUT8: "open_collector", OUT9: "open_collector", OUT10: "open_collector", OUT11: "open_collector", OUT12: "open_collector", OUT13: "open_collector", OUT14: "open_collector", OUT15: "open_collector", XERR: "open_collector", SOUT: "output", GSCLK: "input", DCPRG: "input", IREF: "input", VCC: "power_in", PAD: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC5940PWP";
  override referencePrefix = "U";
}

/**
 * 24-Channel, 12-Bit PWM LED Driver, HTSSOP
 *
 * KiCad symbol: `Driver_LED:TLC5947DAP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*.
 * @see http://www.ti.com/lit/ds/symlink/tlc5947.pdf
 * Keywords: PWM LED driver HTSSOP.
 * Default footprint: Package_SO:HTSSOP-32-1EP_6.1x11mm_P0.65mm_EP5.2x11mm_Mask4.11x4.36mm_ThermalVias.
 */
export class TLC5947DAP extends Component.withPins({
  "GND": "1",
  "BLANK": "2",
  "SCLK": "3",
  "SIN": "4",
  "OUT0": "5",
  "OUT1": "6",
  "OUT2": "7",
  "OUT3": "8",
  "OUT4": "9",
  "OUT5": "10",
  "OUT6": "11",
  "OUT7": "12",
  "OUT8": "13",
  "OUT9": "14",
  "OUT10": "15",
  "OUT11": "16",
  "OUT12": "17",
  "OUT13": "18",
  "OUT14": "19",
  "OUT15": "20",
  "OUT16": "21",
  "OUT17": "22",
  "OUT18": "23",
  "OUT19": "24",
  "OUT20": "25",
  "OUT21": "26",
  "OUT22": "27",
  "OUT23": "28",
  "SOUT": "29",
  "XLAT": "30",
  "IREF": "31",
  "VCC": "32",
  "PowerPAD": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", BLANK: "input", SCLK: "input", SIN: "input", OUT0: "output", OUT1: "output", OUT2: "output", OUT3: "output", OUT4: "output", OUT5: "output", OUT6: "output", OUT7: "output", OUT8: "output", OUT9: "output", OUT10: "output", OUT11: "output", OUT12: "output", OUT13: "output", OUT14: "output", OUT15: "output", OUT16: "output", OUT17: "output", OUT18: "output", OUT19: "output", OUT20: "output", OUT21: "output", OUT22: "output", OUT23: "output", SOUT: "output", XLAT: "input", IREF: "input", VCC: "power_in", PowerPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC5947DAP";
  override referencePrefix = "U";
}

/**
 * 24-Channel, 12-Bit PWM LED Driver, QFN
 *
 * KiCad symbol: `Driver_LED:TLC5947RHB`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc5947.pdf
 * Keywords: PWM LED driver QFN.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class TLC5947RHB extends Component.withPins({
  "OUT0": "1",
  "OUT1": "2",
  "OUT2": "3",
  "OUT3": "4",
  "OUT4": "5",
  "OUT5": "6",
  "OUT6": "7",
  "OUT7": "8",
  "OUT8": "9",
  "OUT9": "10",
  "OUT10": "11",
  "OUT11": "12",
  "OUT12": "13",
  "OUT13": "14",
  "OUT14": "15",
  "OUT15": "16",
  "OUT16": "17",
  "OUT17": "18",
  "OUT18": "19",
  "OUT19": "20",
  "OUT20": "21",
  "OUT21": "22",
  "OUT22": "23",
  "OUT23": "24",
  "SOUT": "25",
  "XLAT": "26",
  "IREF": "27",
  "VCC": "28",
  "GND": "29",
  "BLANK": "30",
  "SCLK": "31",
  "SIN": "32",
  "PowerPAD": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT0: "output", OUT1: "output", OUT2: "output", OUT3: "output", OUT4: "output", OUT5: "output", OUT6: "output", OUT7: "output", OUT8: "output", OUT9: "output", OUT10: "output", OUT11: "output", OUT12: "output", OUT13: "output", OUT14: "output", OUT15: "output", OUT16: "output", OUT17: "output", OUT18: "output", OUT19: "output", OUT20: "output", OUT21: "output", OUT22: "output", OUT23: "output", SOUT: "output", XLAT: "input", IREF: "input", VCC: "power_in", GND: "power_in", BLANK: "input", SCLK: "input", SIN: "input", PowerPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC5947RHB";
  override referencePrefix = "U";
}

/**
 * 16-channel, 12-bit ES-PWM, constant-current sink LED driver, HTSSOP-24
 *
 * KiCad symbol: `Driver_LED:TLC5949PWP`. Reference prefix: `U`.
 * Footprint filters: *HTSSOP*1EP?4.4x7.8mm?P0.65mm*Mask2.44x3.42mm*.
 * @see https://www.ti.com/lit/ds/symlink/tlc5949.pdf
 * Keywords: Texas-Instruments.
 * Default footprint: Package_SO:HTSSOP-24-1EP_4.4x7.8mm_P0.65mm_EP3.4x7.8mm_Mask2.44x3.42mm_ThermalVias.
 */
export class TLC5949PWP extends Component.withPins({
  "GND_1": "1",
  "SIN": "2",
  "SCLK": "3",
  "LAT": "4",
  "OUT0": "5",
  "OUT1": "6",
  "OUT2": "7",
  "OUT3": "8",
  "OUT4": "9",
  "OUT5": "10",
  "OUT6": "11",
  "OUT7": "12",
  "OUT8": "13",
  "OUT9": "14",
  "OUT10": "15",
  "OUT11": "16",
  "OUT12": "17",
  "OUT13": "18",
  "OUT14": "19",
  "OUT15": "20",
  "GSCLK": "21",
  "SOUT": "22",
  "IREF": "23",
  "VCC": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", SIN: "input", SCLK: "input", LAT: "input", OUT0: "open_collector", OUT1: "open_collector", OUT2: "open_collector", OUT3: "open_collector", OUT4: "open_collector", OUT5: "open_collector", OUT6: "open_collector", OUT7: "open_collector", OUT8: "open_collector", OUT9: "open_collector", OUT10: "open_collector", OUT11: "open_collector", OUT12: "open_collector", OUT13: "open_collector", OUT14: "open_collector", OUT15: "open_collector", GSCLK: "input", SOUT: "output", IREF: "input", VCC: "power_in", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC5949PWP";
  override referencePrefix = "U";
}

/**
 * 24-Channel, 12-Bit PWM LED Driver With 7-Bit Dot Correction and 3-Group, 8-Bit Global Brightness Control, HTSSOP-38
 *
 * KiCad symbol: `Driver_LED:TLC5951DAP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*6.1x12.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc5951.pdf
 * Keywords: led driver.
 * Default footprint: Package_SO:HTSSOP-38-1EP_6.1x12.5mm_P0.65mm_EP5.2x12.5mm_Mask3.39x6.35mm_ThermalVias.
 */
export class TLC5951DAP extends Component.withPins({
  "GSSIN": "1",
  "GSSCK": "2",
  "GSLAT": "3",
  "GSCKG": "4",
  "GSCKR": "5",
  "GSCKB": "6",
  "OUTG0": "7",
  "OUTR0": "8",
  "OUTB0": "9",
  "OUTG1": "10",
  "OUTR1": "11",
  "OUTB1": "12",
  "OUTG2": "13",
  "OUTR2": "14",
  "OUTB2": "15",
  "OUTG3": "16",
  "OUTR3": "17",
  "OUTB3": "18",
  "OUTB4": "21",
  "OUTR4": "22",
  "OUTG4": "23",
  "OUTB5": "24",
  "OUTR5": "25",
  "OUTG5": "26",
  "OUTB6": "27",
  "OUTR6": "28",
  "OUTG6": "29",
  "OUTB7": "30",
  "OUTR7": "31",
  "OUTG7": "32",
  "GND_33": "33",
  "IREF": "34",
  "VCC": "35",
  "XBLNK": "36",
  "DCSCK": "37",
  "DCSIN": "38",
  "GND_39": "39",
  "GSSOUT": "19",
  "DCSOUT": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GSSIN: "input", GSSCK: "input", GSLAT: "input", GSCKG: "input", GSCKR: "input", GSCKB: "input", OUTG0: "open_collector", OUTR0: "open_collector", OUTB0: "open_collector", OUTG1: "open_collector", OUTR1: "open_collector", OUTB1: "open_collector", OUTG2: "open_collector", OUTR2: "open_collector", OUTB2: "open_collector", OUTG3: "open_collector", OUTR3: "open_collector", OUTB3: "open_collector", OUTB4: "open_collector", OUTR4: "open_collector", OUTG4: "open_collector", OUTB5: "open_collector", OUTR5: "open_collector", OUTG5: "open_collector", OUTB6: "open_collector", OUTR6: "open_collector", OUTG6: "open_collector", OUTB7: "open_collector", OUTR7: "open_collector", OUTG7: "open_collector", GND_33: "power_in", IREF: "passive", VCC: "power_in", XBLNK: "input", DCSCK: "input", DCSIN: "input", GND_39: "passive", GSSOUT: "output", DCSOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC5951DAP";
  override referencePrefix = "U";
}

/**
 * 24-Channel, 12-Bit PWM LED Driver With 7-Bit Dot Correction and 3-Group, 8-Bit Global Brightness Control, Texas S-PVQFN-N40
 *
 * KiCad symbol: `Driver_LED:TLC5951RHA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/tlc5951.pdf
 * Keywords: led driver.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm_ThermalVias.
 */
export class TLC5951RHA extends Component.withPins({
  "OUTG3": "1",
  "OUTR3": "2",
  "OUTB3": "3",
  "NC_4": "4",
  "NC_7": "7",
  "OUTB4": "8",
  "OUTR4": "9",
  "OUTG4": "10",
  "OUTB5": "11",
  "OUTR5": "12",
  "OUTG5": "13",
  "OUTB6": "14",
  "OUTR6": "15",
  "OUTG6": "16",
  "OUTB7": "17",
  "OUTR7": "18",
  "OUTG7": "19",
  "GND_20": "20",
  "IREF": "21",
  "VCC": "22",
  "XBLNK": "23",
  "DCSCK": "24",
  "DCSIN": "25",
  "GSSIN": "26",
  "GSSCK": "27",
  "GSLAT": "28",
  "GSCKG": "29",
  "GSCKR": "30",
  "GSCKB": "31",
  "OUTG0": "32",
  "OUTR0": "33",
  "OUTB0": "34",
  "OUTG1": "35",
  "OUTR1": "36",
  "OUTB1": "37",
  "OUTG2": "38",
  "OUTR2": "39",
  "OUTB2": "40",
  "GND_41": "41",
  "GSSOUT": "5",
  "DCSOUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUTG3: "open_collector", OUTR3: "open_collector", OUTB3: "open_collector", NC_4: "no_connect", NC_7: "no_connect", OUTB4: "open_collector", OUTR4: "open_collector", OUTG4: "open_collector", OUTB5: "open_collector", OUTR5: "open_collector", OUTG5: "open_collector", OUTB6: "open_collector", OUTR6: "open_collector", OUTG6: "open_collector", OUTB7: "open_collector", OUTR7: "open_collector", OUTG7: "open_collector", GND_20: "power_in", IREF: "passive", VCC: "power_in", XBLNK: "input", DCSCK: "input", DCSIN: "input", GSSIN: "input", GSSCK: "input", GSLAT: "input", GSCKG: "input", GSCKR: "input", GSCKB: "input", OUTG0: "open_collector", OUTR0: "open_collector", OUTB0: "open_collector", OUTG1: "open_collector", OUTR1: "open_collector", OUTB1: "open_collector", OUTG2: "open_collector", OUTR2: "open_collector", OUTB2: "open_collector", GND_41: "passive", GSSOUT: "output", DCSOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC5951RHA";
  override referencePrefix = "U";
}

/**
 * 24-Channel, 12-Bit PWM LED Driver With 7-Bit Dot Correction and 3-Group, 8-Bit Global Brightness Control, Texas S-PVQFN-N40
 *
 * KiCad symbol: `Driver_LED:TLC5951RTA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/tlc5951.pdf
 * Keywords: led driver.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm_ThermalVias.
 */
export class TLC5951RTA extends Component.withPins({
  "OUTG3": "1",
  "OUTR3": "2",
  "OUTB3": "3",
  "NC_4": "4",
  "NC_7": "7",
  "OUTB4": "8",
  "OUTR4": "9",
  "OUTG4": "10",
  "OUTB5": "11",
  "OUTR5": "12",
  "OUTG5": "13",
  "OUTB6": "14",
  "OUTR6": "15",
  "OUTG6": "16",
  "OUTB7": "17",
  "OUTR7": "18",
  "OUTG7": "19",
  "GND_20": "20",
  "IREF": "21",
  "VCC": "22",
  "XBLNK": "23",
  "DCSCK": "24",
  "DCSIN": "25",
  "GSSIN": "26",
  "GSSCK": "27",
  "GSLAT": "28",
  "GSCKG": "29",
  "GSCKR": "30",
  "GSCKB": "31",
  "OUTG0": "32",
  "OUTR0": "33",
  "OUTB0": "34",
  "OUTG1": "35",
  "OUTR1": "36",
  "OUTB1": "37",
  "OUTG2": "38",
  "OUTR2": "39",
  "OUTB2": "40",
  "GND_41": "41",
  "GSSOUT": "5",
  "DCSOUT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUTG3: "open_collector", OUTR3: "open_collector", OUTB3: "open_collector", NC_4: "no_connect", NC_7: "no_connect", OUTB4: "open_collector", OUTR4: "open_collector", OUTG4: "open_collector", OUTB5: "open_collector", OUTR5: "open_collector", OUTG5: "open_collector", OUTB6: "open_collector", OUTR6: "open_collector", OUTG6: "open_collector", OUTB7: "open_collector", OUTR7: "open_collector", OUTG7: "open_collector", GND_20: "power_in", IREF: "passive", VCC: "power_in", XBLNK: "input", DCSCK: "input", DCSIN: "input", GSSIN: "input", GSSCK: "input", GSLAT: "input", GSCKG: "input", GSCKR: "input", GSCKB: "input", OUTG0: "open_collector", OUTR0: "open_collector", OUTB0: "open_collector", OUTG1: "open_collector", OUTR1: "open_collector", OUTB1: "open_collector", OUTG2: "open_collector", OUTR2: "open_collector", OUTB2: "open_collector", GND_41: "passive", GSSOUT: "output", DCSOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC5951RTA";
  override referencePrefix = "U";
}

/**
 * 48-channel, 16bit ES-PWM LED driver with Pre-charge FET, LED OPEN Detection and Caterpillar Cancelling, QFN-56
 *
 * KiCad symbol: `Driver_LED:TLC5957RTQ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc5957.pdf
 * Keywords: led driver.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_8x8mm_P0.5mm_EP5.6x5.6mm_ThermalVias.
 */
export class TLC5957RTQ extends Component.withPins({
  "IREF": "1",
  "OUTR14": "2",
  "OUTG14": "3",
  "OUTB14": "4",
  "OUTR15": "5",
  "OUTG15": "6",
  "OUTB15": "7",
  "OUTR0": "8",
  "OUTG0": "9",
  "OUTB0": "10",
  "OUTR1": "11",
  "OUTG1": "12",
  "OUTB1": "13",
  "OUTR2": "14",
  "OUTG2": "15",
  "OUTB2": "16",
  "OUTR3": "17",
  "OUTG3": "18",
  "OUTB3": "19",
  "OUTR4": "20",
  "OUTG4": "21",
  "OUTB4": "22",
  "OUTR5": "23",
  "OUTG5": "24",
  "OUTB5": "25",
  "SIN": "26",
  "LAT": "27",
  "SCLK": "28",
  "GCLK": "29",
  "OUTR6": "30",
  "OUTG6": "31",
  "OUTB6": "32",
  "OUTR7": "33",
  "OUTG7": "34",
  "OUTB7": "35",
  "OUTR8": "36",
  "OUTG8": "37",
  "OUTB8": "38",
  "OUTR9": "39",
  "OUTG9": "40",
  "OUTB9": "41",
  "VCC": "43",
  "OUTR10": "44",
  "OUTG10": "45",
  "OUTB10": "46",
  "OUTR11": "47",
  "OUTG11": "48",
  "OUTB11": "49",
  "OUTR12": "50",
  "OUTG12": "51",
  "OUTB12": "52",
  "OUTR13": "53",
  "OUTG13": "54",
  "OUTB13": "55",
  "IREFGND": "56",
  "GND": "57",
  "SOUT": "42",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IREF: "passive", OUTR14: "open_collector", OUTG14: "open_collector", OUTB14: "open_collector", OUTR15: "open_collector", OUTG15: "open_collector", OUTB15: "open_collector", OUTR0: "open_collector", OUTG0: "open_collector", OUTB0: "open_collector", OUTR1: "open_collector", OUTG1: "open_collector", OUTB1: "open_collector", OUTR2: "open_collector", OUTG2: "open_collector", OUTB2: "open_collector", OUTR3: "open_collector", OUTG3: "open_collector", OUTB3: "open_collector", OUTR4: "open_collector", OUTG4: "open_collector", OUTB4: "open_collector", OUTR5: "open_collector", OUTG5: "open_collector", OUTB5: "open_collector", SIN: "input", LAT: "input", SCLK: "input", GCLK: "input", OUTR6: "open_collector", OUTG6: "open_collector", OUTB6: "open_collector", OUTR7: "open_collector", OUTG7: "open_collector", OUTB7: "open_collector", OUTR8: "open_collector", OUTG8: "open_collector", OUTB8: "open_collector", OUTR9: "open_collector", OUTG9: "open_collector", OUTB9: "open_collector", VCC: "power_in", OUTR10: "open_collector", OUTG10: "open_collector", OUTB10: "open_collector", OUTR11: "open_collector", OUTG11: "open_collector", OUTB11: "open_collector", OUTR12: "open_collector", OUTG12: "open_collector", OUTB12: "open_collector", OUTR13: "open_collector", OUTG13: "open_collector", OUTB13: "open_collector", IREFGND: "power_in", GND: "power_in", SOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC5957RTQ";
  override referencePrefix = "U";
}

/**
 * 12-Channel, 16-Bit, Enhanced Spectrum, PWM, RGB, LED Driver With 3.3-V Linear Regulator, HTSSOP-20
 *
 * KiCad symbol: `Driver_LED:TLC5971PWP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc5971.pdf
 * Keywords: led driver.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP3.4x6.5mm_Mask2.75x3.43mm_ThermalVias.
 */
export class TLC5971PWP extends Component.withPins({
  "GND_2": "2",
  "OUTR0": "3",
  "OUTG0": "4",
  "OUTB0": "5",
  "OUTR1": "6",
  "OUTG1": "7",
  "OUTB1": "8",
  "SDTI": "9",
  "SCKI": "10",
  "OUTR2": "13",
  "OUTG2": "14",
  "OUTB2": "15",
  "OUTR3": "16",
  "OUTG3": "17",
  "OUTB3": "18",
  "VCC": "19",
  "VREG": "20",
  "GND_21": "21",
  "IREF": "1",
  "SCKO": "11",
  "SDTO": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_2: "power_in", OUTR0: "open_collector", OUTG0: "open_collector", OUTB0: "open_collector", OUTR1: "open_collector", OUTG1: "open_collector", OUTB1: "open_collector", SDTI: "input", SCKI: "input", OUTR2: "open_collector", OUTG2: "open_collector", OUTB2: "open_collector", OUTR3: "open_collector", OUTG3: "open_collector", OUTB3: "open_collector", VCC: "power_in", VREG: "passive", GND_21: "passive", IREF: "passive", SCKO: "output", SDTO: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC5971PWP";
  override referencePrefix = "U";
}

/**
 * 12-Channel, 16-Bit, Enhanced Spectrum, PWM, RGB, LED Driver With 3.3-V Linear Regulator, VQFN-24
 *
 * KiCad symbol: `Driver_LED:TLC5971RGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024H*.
 * @see http://www.ti.com/lit/ds/symlink/tlc5971.pdf
 * Keywords: led driver.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024H_VQFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm_ThermalVias.
 */
export class TLC5971RGE extends Component.withPins({
  "SDTI": "1",
  "SCKI": "2",
  "NC_3": "3",
  "NC_4": "4",
  "SDTO": "6",
  "OUTR2": "7",
  "OUTG2": "8",
  "OUTB2": "9",
  "OUTR3": "10",
  "OUTG3": "11",
  "OUTB3": "12",
  "VCC": "13",
  "NC_14": "14",
  "NC_17": "17",
  "GND_18": "18",
  "OUTR0": "19",
  "OUTG0": "20",
  "OUTB0": "21",
  "OUTR1": "22",
  "OUTG1": "23",
  "OUTB1": "24",
  "GND_25": "25",
  "SCKO": "5",
  "VREG": "15",
  "IREF": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDTI: "input", SCKI: "input", NC_3: "no_connect", NC_4: "no_connect", SDTO: "output", OUTR2: "open_collector", OUTG2: "open_collector", OUTB2: "open_collector", OUTR3: "open_collector", OUTG3: "open_collector", OUTB3: "open_collector", VCC: "power_in", NC_14: "no_connect", NC_17: "no_connect", GND_18: "power_in", OUTR0: "open_collector", OUTG0: "open_collector", OUTB0: "open_collector", OUTR1: "open_collector", OUTG1: "open_collector", OUTB1: "open_collector", GND_25: "passive", SCKO: "output", VREG: "passive", IREF: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC5971RGE";
  override referencePrefix = "U";
}

/**
 * 3 Channel 12bit PWM constant currend LED Driver with single wire interface
 *
 * KiCad symbol: `Driver_LED:TLC5973`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tlc5973.pdf
 * Keywords: LED current driver 12bit PWM.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TLC5973 extends Component.withPins({
  "OUT0": "1",
  "OUT1": "2",
  "OUT2": "3",
  "GND": "4",
  "SDO": "5",
  "SDI": "6",
  "IREF": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUT0: "output", OUT1: "output", OUT2: "output", GND: "power_in", SDO: "output", SDI: "input", IREF: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TLC5973";
  override referencePrefix = "U";
}

/**
 * High-Brightness, White LED Driver, 3V to 18V input voltage range, internal switch, constant current, up to 38V/1.2A output, SOT-23-6
 *
 * KiCad symbol: `Driver_LED:TPS61165DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tps61165.pdf
 * Keywords: LED-backlight-display-driver PWM EasyScale-protocol.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TPS61165DBV extends Component.withPins({
  "VIN": "1",
  "CTRL": "2",
  "SW": "3",
  "GND": "4",
  "COMP": "5",
  "FB": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", CTRL: "input", SW: "power_out", GND: "power_in", COMP: "output", FB: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TPS61165DBV";
  override referencePrefix = "U";
}

/**
 * High-Brightness, White LED Driver, 3V to 18V input voltage range, internal switch, constant current, up to 38V/1.2A output, WSON-6
 *
 * KiCad symbol: `Driver_LED:TPS61165DRV`. Reference prefix: `U`.
 * Footprint filters: *WSON*2x2mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tps61165.pdf
 * Keywords: LED-backlight-display-driver PWM EasyScale-protocol.
 * Default footprint: Package_SON:WSON-6-1EP_2x2mm_P0.65mm_EP1x1.6mm.
 */
export class TPS61165DRV extends Component.withPins({
  "FB": "1",
  "COMP": "2",
  "GND_3": "3",
  "SW": "4",
  "CTRL": "5",
  "VIN": "6",
  "GND_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FB: "input", COMP: "output", GND_3: "power_in", SW: "power_out", CTRL: "input", VIN: "power_in", GND_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TPS61165DRV";
  override referencePrefix = "U";
}

/**
 * 1.5A Synchronous Buck LED Driver, PWM dimming, 4V to 30V supply, SOT-23-6
 *
 * KiCad symbol: `Driver_LED:TPS92200D1DDC`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tps92200.pdf
 * Keywords: Texas-Instruments.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TPS92200D1DDC extends Component.withPins({
  "FB": "1",
  "DIM": "2",
  "GND": "3",
  "VIN": "4",
  "SW": "5",
  "BOOT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FB: "input", DIM: "input", GND: "power_in", VIN: "power_in", SW: "power_out", BOOT: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TPS92200D1DDC";
  override referencePrefix = "U";
}

/**
 * 1.5A Synchronous Buck LED Driver, analog dimming, 4V to 30V supply, SOT-23-6
 *
 * KiCad symbol: `Driver_LED:TPS92200D2DDC`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tps92200.pdf
 * Keywords: Texas-Instruments.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TPS92200D2DDC extends Component.withPins({
  "FB": "1",
  "DIM": "2",
  "GND": "3",
  "VIN": "4",
  "SW": "5",
  "BOOT": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FB: "input", DIM: "input", GND: "power_in", VIN: "power_in", SW: "power_out", BOOT: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TPS92200D2DDC";
  override referencePrefix = "U";
}

/**
 * 500mA, 65V Constant Current Buck LED Driver, SOIC-8 / SOP-8 (Texas DDA0008A)
 *
 * KiCad symbol: `Driver_LED:TPS92511DDA`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm?P1.27mm*2.34x2.34mm*.
 * @see https://www.ti.com/lit/ds/symlink/tps92511.pdf
 * Keywords: Texas-Instruments.
 * Default footprint: Package_SO:SOIC-8-1EP_3.9x4.9mm_P1.27mm_EP2.95x4.9mm_Mask2.34x2.34mm_ThermalVias.
 */
export class TPS92511DDA extends Component.withPins({
  "GND_9": "9",
  "VCC": "1",
  "PGND": "2",
  "IADJ": "3",
  "GND_4": "4",
  "FS": "5",
  "DIM": "6",
  "LX": "7",
  "VIN": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_9: "passive", VCC: "power_out", PGND: "power_in", IADJ: "input", GND_4: "power_in", FS: "input", DIM: "input", LX: "open_collector", VIN: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TPS92511DDA";
  override referencePrefix = "U";
}

/**
 * Constant current LED Driver, 4.5V to 40V input voltage range, up to 40V/150mA output,  SOT-23-5
 *
 * KiCad symbol: `Driver_LED:TPS92612DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tps92612.pdf
 * Keywords: led driver PWM.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class TPS92612DBV extends Component.withPins({
  "GND": "1",
  "PWM": "2",
  "SUPPLY": "3",
  "IN": "4",
  "OUT": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", PWM: "input", SUPPLY: "power_in", IN: "input", OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TPS92612DBV";
  override referencePrefix = "U";
}

/**
 * LED Driver Buck Boost Sepic Flyback, Input 4.5-65V, with PWM Dimming, HTSSOP-20
 *
 * KiCad symbol: `Driver_LED:TPS92692PWP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x6.5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tps92692-q1.pdf
 * Keywords: LED Driver Buck Boost Sepic Flyback PWM Dimming.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP3.4x6.5mm_Mask2.4x3.7mm.
 */
export class TPS92692PWP extends Component.withPins({
  "VIN": "1",
  "VREF": "2",
  "~{FLT}": "3",
  "SS": "4",
  "DM": "5",
  "RT": "6",
  "COMP": "7",
  "IMON": "8",
  "IADJ": "9",
  "DIM/PWM": "10",
  "RAMP": "11",
  "PDRV": "12",
  "CSN": "13",
  "CSP": "14",
  "OV": "15",
  "SLOPE": "16",
  "GND_17": "17",
  "IS": "18",
  "GATE": "19",
  "VCC": "20",
  "GND_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VIN: "power_in", VREF: "power_out", "~{FLT}": "open_collector", SS: "passive", DM: "passive", RT: "passive", COMP: "passive", IMON: "output", IADJ: "input", "DIM/PWM": "input", RAMP: "passive", PDRV: "output", CSN: "input", CSP: "input", OV: "input", SLOPE: "passive", GND_17: "power_in", IS: "input", GATE: "output", VCC: "power_out", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:TPS92692PWP";
  override referencePrefix = "U";
}

/**
 * 3-Channel 8-Bit PWM LED Driver, DIP-8/SOIC-8
 *
 * KiCad symbol: `Driver_LED:WS2811`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://cdn-shop.adafruit.com/datasheets/WS2811.pdf
 * Keywords: PWM LED driver.
 */
export class WS2811 extends Component.withPins({
  "OUTR": "1",
  "OUTG": "2",
  "OUTB": "3",
  "GND": "4",
  "DO": "5",
  "DIN": "6",
  "SET": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OUTR: "output", OUTG: "output", OUTB: "output", GND: "power_in", DO: "output", DIN: "input", SET: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:WS2811";
  override referencePrefix = "U";
}

/**
 * LED Driver Boost Converter, PFM controlled, operating frequency 330kHz (Vled = 3.5V), TSOT-23-5
 *
 * KiCad symbol: `Driver_LED:ZXLD383`. Reference prefix: `U`.
 * Footprint filters: TSOT?23?5*.
 * @see https://www.diodes.com/assets/Datasheets/ZXLD383.pdf
 * Keywords: Zetex LCD-backlighting LED-Flashlight.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 */
export class ZXLD383 extends Component.withPins({
  "ENA": "1",
  "GND": "2",
  "NC": "3",
  "V_{OUT}": "4",
  "V_{CC}": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ENA: "input", GND: "power_in", NC: "no_connect", "V_{OUT}": "output", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:ZXLD383";
  override referencePrefix = "U";
}

/**
 * LED Driver Boost Converter, PFM controlled, up to 200kHz, SOT-23-5
 *
 * KiCad symbol: `Driver_LED:ZXSC310`. Reference prefix: `U`.
 * Footprint filters: SOT?23?5*.
 * @see https://www.diodes.com/assets/Datasheets/ZXSC310.pdf
 * Keywords: Zetex LCD-backlighting LED-flashlight.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class ZXSC310 extends Component.withPins({
  "V_{CC}": "1",
  "GND": "2",
  "STND": "3",
  "I_{SENSE}": "4",
  "V_{DRIVE}": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", GND: "power_in", STND: "input", "I_{SENSE}": "input", "V_{DRIVE}": "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:ZXSC310";
  override referencePrefix = "U";
}

/**
 * LED Driver Boost Converter, PFM controlled, maximum operating frequency 200kHz, SOT-23-6
 *
 * KiCad symbol: `Driver_LED:ZXSC400`. Reference prefix: `U`.
 * Footprint filters: SOT?23?6*.
 * @see https://www.diodes.com/assets/Datasheets/ZXSC400.pdf
 * Keywords: Zetex LCD-backlighting LED-Flashlight.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class ZXSC400 extends Component.withPins({
  "V_{CC}": "1",
  "GND": "2",
  "STND": "3",
  "I_{SENSE}": "4",
  "V_{FB}": "5",
  "V_{DRIVE}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{CC}": "power_in", GND: "power_in", STND: "input", "I_{SENSE}": "input", "V_{FB}": "input", "V_{DRIVE}": "output", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:ZXSC400";
  override referencePrefix = "U";
}

/**
 * CW power laser diode driver, external driver transistor, integrated DAC & ADC, SPI or I2C, 3 to 24V supply, temperature monitor, HVQFN-24
 *
 * KiCad symbol: `Driver_LED:iC-HTG`. Reference prefix: `U`.
 * Footprint filters: HVQFN*1EP*4x4mm*P0.5mm*EP2.5x2.5mm*.
 * @see https://www.ichaus.de/product/ic-htg/#documents
 * Keywords: ichaus continous wave monitoring adc.
 * Default footprint: Package_DFN_QFN:HVQFN-24-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class iC_HTG extends Component.withPins({
  "ID": "4",
  "EC": "5",
  "MISO/SDA": "8",
  "ANIN": "9",
  "MCH": "10",
  "MCL": "11",
  "MOD": "12",
  "CI": "13",
  "CIL": "14",
  "VBL": "17",
  "MD": "18",
  "MR": "19",
  "GND_20": "20",
  "DCO": "21",
  "VB": "24",
  "~{CHK}": "1",
  "~{STBY}": "2",
  "~{CS}/A1": "3",
  "MOSI/A0": "6",
  "SCLK/SCL": "7",
  "VRN": "15",
  "VRP": "16",
  "INS": "22",
  "VDD": "23",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ID: "input", EC: "input", "MISO/SDA": "bidirectional", ANIN: "bidirectional", MCH: "input", MCL: "input", MOD: "input", CI: "input", CIL: "input", VBL: "power_in", MD: "input", MR: "input", GND_20: "power_in", DCO: "passive", VB: "power_in", "~{CHK}": "open_collector", "~{STBY}": "passive", "~{CS}/A1": "input", "MOSI/A0": "passive", "SCLK/SCL": "input", VRN: "output", VRP: "output", INS: "passive", VDD: "output", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Driver_LED:iC-HTG";
  override referencePrefix = "U";
}
