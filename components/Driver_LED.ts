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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AL5819W6 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: R_{SET}; input. */
  "R_{SET}": "3",
  /** Physical pin 4: V_{IN}; power_in. */
  "V_{IN}": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: LED; output. */
  "LED": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AL8860MP extends Component.withPins({
  /** Physical pin 1: SET; input. */
  "SET": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: CTRL; input. */
  "CTRL": "4",
  /** Physical pin 5: SW; open_collector. */
  "SW_5": "5",
  /** Physical pin 6: SW; open_collector. */
  "SW_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AL8860WT extends Component.withPins({
  /** Physical pin 1: SW; open_collector. */
  "SW": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: CTRL; input. */
  "CTRL": "3",
  /** Physical pin 4: SET; input. */
  "SET": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP3019AKTR extends Component.withPins({
  /** Physical pin 1: SW; input. */
  "SW": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: CTRL; input. */
  "CTRL": "4",
  /** Physical pin 5: V_{OUT}; power_out. */
  "V_{OUT}": "5",
  /** Physical pin 6: V_{IN}; power_in. */
  "V_{IN}": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AP3019AKTTR extends Component.withPins({
  /** Physical pin 1: SW; input. */
  "SW": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: CTRL; input. */
  "CTRL": "4",
  /** Physical pin 5: V_{OUT}; power_out. */
  "V_{OUT}": "5",
  /** Physical pin 6: V_{IN}; power_in. */
  "V_{IN}": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BCR430UW6 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: REXT; passive. */
  "REXT": "3",
  /** Physical pin 4: VS; power_in. */
  "VS": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: OUT; output. */
  "OUT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH455G extends Component.withPins({
  /** Physical pin 1: SEG4; tri_state. */
  "SEG4": "1",
  /** Physical pin 2: SEG5; tri_state. */
  "SEG5": "2",
  /** Physical pin 3: SEG6; tri_state. */
  "SEG6": "3",
  /** Physical pin 4: SEG7; tri_state. */
  "SEG7": "4",
  /** Physical pin 5: DIG0; output. */
  "DIG0": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: DIG1; output. */
  "DIG1": "9",
  /** Physical pin 10: DIG2; output. */
  "DIG2": "10",
  /** Physical pin 11: DIG3; output. */
  "DIG3": "11",
  /** Physical pin 12: SEG0; tri_state. */
  "SEG0": "12",
  /** Physical pin 13: SEG1; tri_state. */
  "SEG1": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: SEG2; tri_state. */
  "SEG2": "15",
  /** Physical pin 16: SEG3; tri_state. */
  "SEG3": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH455K extends Component.withPins({
  /** Physical pin 1: DIG0; output. */
  "DIG0": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DIG1; output. */
  "DIG1": "5",
  /** Physical pin 6: DIG2; output. */
  "DIG2": "6",
  /** Physical pin 7: DIG3; output. */
  "DIG3": "7",
  /** Physical pin 9: SEG0; tri_state. */
  "SEG0": "9",
  /** Physical pin 10: SEG1; tri_state. */
  "SEG1": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: SEG2; tri_state. */
  "SEG2": "12",
  /** Physical pin 13: SEG3; tri_state. */
  "SEG3": "13",
  /** Physical pin 14: SEG4; tri_state. */
  "SEG4": "14",
  /** Physical pin 15: SEG5; tri_state. */
  "SEG5": "15",
  /** Physical pin 16: SEG6; tri_state. */
  "SEG6": "16",
  /** Physical pin 17: SEG7; tri_state. */
  "SEG7": "17",
  /** Physical pin 8: ISET; input. */
  "ISET": "8",
  /** Physical pin 18: ~{INT}; output. */
  "~{INT}": "18",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CH455H extends Component.withPins({
  /** Physical pin 1: DIG0; output. */
  "DIG0": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DIG1; output. */
  "DIG1": "5",
  /** Physical pin 6: DIG2; output. */
  "DIG2": "6",
  /** Physical pin 7: DIG3; output. */
  "DIG3": "7",
  /** Physical pin 9: SEG0; tri_state. */
  "SEG0": "9",
  /** Physical pin 10: SEG1; tri_state. */
  "SEG1": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: SEG2; tri_state. */
  "SEG2": "12",
  /** Physical pin 13: SEG3; tri_state. */
  "SEG3": "13",
  /** Physical pin 14: SEG4; tri_state. */
  "SEG4": "14",
  /** Physical pin 15: SEG5; tri_state. */
  "SEG5": "15",
  /** Physical pin 16: SEG6; tri_state. */
  "SEG6": "16",
  /** Physical pin 17: SEG7; tri_state. */
  "SEG7": "17",
  /** Physical pin 8: ISET; input. */
  "ISET": "8",
  /** Physical pin 18: ~{INT}; output. */
  "~{INT}": "18",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CL220K4_G extends Component.withPins({
  /** Physical pin 1: VA; input. */
  "VA": "1",
  /** Physical pin 2: VB; input. */
  "VB": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CL220N5_G extends Component.withPins({
  /** Physical pin 1: VA; input. */
  "VA": "1",
  /** Physical pin 2: VB; input. */
  "VB": "2",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DIO5661CD6 extends Component.withPins({
  /** Physical pin 1: FB; input. */
  "FB": "1",
  /** Physical pin 2: unnamed; no_connect. */
  "P2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: LX; open_collector. */
  "LX": "4",
  /** Physical pin 5: EN; input. */
  "EN": "5",
  /** Physical pin 6: VIN; power_in. */
  "VIN": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DIO5661ST6 extends Component.withPins({
  /** Physical pin 1: LX; open_collector. */
  "LX": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: unnamed; no_connect. */
  "P5": "5",
  /** Physical pin 6: VIN; power_in. */
  "VIN": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DIO5661TST6 extends Component.withPins({
  /** Physical pin 1: LX; open_collector. */
  "LX": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: unnamed; no_connect. */
  "P5": "5",
  /** Physical pin 6: VIN; power_in. */
  "VIN": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HT1632C_52LQFP extends Component.withPins({
  /** Physical pin 1: ROW11; output. */
  "ROW11": "1",
  /** Physical pin 2: ROW10; output. */
  "ROW10": "2",
  /** Physical pin 3: ROW9; output. */
  "ROW9": "3",
  /** Physical pin 4: ROW8; output. */
  "ROW8": "4",
  /** Physical pin 5: ROW7; output. */
  "ROW7": "5",
  /** Physical pin 6: ROW6; output. */
  "ROW6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: ROW5; output. */
  "ROW5": "8",
  /** Physical pin 9: ROW4; output. */
  "ROW4": "9",
  /** Physical pin 10: ROW3; output. */
  "ROW3": "10",
  /** Physical pin 11: ROW2; output. */
  "ROW2": "11",
  /** Physical pin 12: ROW1; output. */
  "ROW1": "12",
  /** Physical pin 13: ROW0; output. */
  "ROW0": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS_14": "14",
  /** Physical pin 15: OSC; bidirectional. */
  "OSC": "15",
  /** Physical pin 16: DATA; bidirectional. */
  "DATA": "16",
  /** Physical pin 17: ~{WR}; input. */
  "~{WR}": "17",
  /** Physical pin 18: ~{RD}; input. */
  "~{RD}": "18",
  /** Physical pin 19: ~{CS}; input. */
  "~{CS}": "19",
  /** Physical pin 20: SYNC; bidirectional. */
  "SYNC": "20",
  /** Physical pin 21: VDD; power_in. */
  "VDD_21": "21",
  /** Physical pin 22: COM0; output. */
  "COM0": "22",
  /** Physical pin 23: COM1; output. */
  "COM1": "23",
  /** Physical pin 24: COM2; output. */
  "COM2": "24",
  /** Physical pin 25: VSS; passive. */
  "VSS_25": "25",
  /** Physical pin 26: COM3; output. */
  "COM3": "26",
  /** Physical pin 27: COM4; output. */
  "COM4": "27",
  /** Physical pin 28: COM5; output. */
  "COM5": "28",
  /** Physical pin 29: COM6; output. */
  "COM6": "29",
  /** Physical pin 30: COM7; output. */
  "COM7": "30",
  /** Physical pin 31: ROW31/COM8; output. */
  "ROW31/COM8": "31",
  /** Physical pin 32: ROW30/COM9; output. */
  "ROW30/COM9": "32",
  /** Physical pin 33: ROW29/COM10; output. */
  "ROW29/COM10": "33",
  /** Physical pin 34: ROW28/COM11; output. */
  "ROW28/COM11": "34",
  /** Physical pin 35: ROW27/COM12; output. */
  "ROW27/COM12": "35",
  /** Physical pin 36: VSS; passive. */
  "VSS_36": "36",
  /** Physical pin 37: ROW26/COM13; output. */
  "ROW26/COM13": "37",
  /** Physical pin 38: VDD; power_in. */
  "VDD_38": "38",
  /** Physical pin 39: ROW25/COM14; output. */
  "ROW25/COM14": "39",
  /** Physical pin 40: ROW24/COM15; output. */
  "ROW24/COM15": "40",
  /** Physical pin 41: ROW23; output. */
  "ROW23": "41",
  /** Physical pin 42: ROW22; output. */
  "ROW22": "42",
  /** Physical pin 43: ROW21; output. */
  "ROW21": "43",
  /** Physical pin 44: ROW20; output. */
  "ROW20": "44",
  /** Physical pin 45: ROW19; output. */
  "ROW19": "45",
  /** Physical pin 46: ROW18; output. */
  "ROW18": "46",
  /** Physical pin 47: ROW17; output. */
  "ROW17": "47",
  /** Physical pin 48: ROW16; output. */
  "ROW16": "48",
  /** Physical pin 49: ROW15; output. */
  "ROW15": "49",
  /** Physical pin 50: ROW14; output. */
  "ROW14": "50",
  /** Physical pin 51: ROW13; output. */
  "ROW13": "51",
  /** Physical pin 52: ROW12; output. */
  "ROW12": "52",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HV9921N8_G extends Component.withPins({
  /** Physical pin 1: D; passive. */
  "D": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VDD; output. */
  "VDD": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HV9922N8_G extends Component.withPins({
  /** Physical pin 1: D; passive. */
  "D": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VDD; output. */
  "VDD": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HV9923N8_G extends Component.withPins({
  /** Physical pin 1: D; passive. */
  "D": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VDD; output. */
  "VDD": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HV9925SG_G extends Component.withPins({
  /** Physical pin 1: Rs; passive. */
  "Rs": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: PWMD; input. */
  "PWMD": "3",
  /** Physical pin 4: VDD; power_out. */
  "VDD": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: D; input. */
  "D_6": "6",
  /** Physical pin 7: D; input. */
  "D_7": "7",
  /** Physical pin 8: D; input. */
  "D_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HV9930LG_G extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: CS1; input. */
  "CS1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: GATE; output. */
  "GATE": "4",
  /** Physical pin 5: PWMD; output. */
  "PWMD": "5",
  /** Physical pin 6: VDD; power_out. */
  "VDD": "6",
  /** Physical pin 7: CS2; input. */
  "CS2": "7",
  /** Physical pin 8: REF; input. */
  "REF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HV9931LG_G extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: CS1; input. */
  "CS1": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: GATE; output. */
  "GATE": "4",
  /** Physical pin 5: PWMD; output. */
  "PWMD": "5",
  /** Physical pin 6: VDD; power_out. */
  "VDD": "6",
  /** Physical pin 7: CS2; input. */
  "CS2": "7",
  /** Physical pin 8: REF; input. */
  "REF": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HV9961LG_G extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: CS; input. */
  "CS": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: GATE; output. */
  "GATE": "4",
  /** Physical pin 5: PWMD; input. */
  "PWMD": "5",
  /** Physical pin 6: VDD; power_out. */
  "VDD": "6",
  /** Physical pin 7: LD; input. */
  "LD": "7",
  /** Physical pin 8: RT; input. */
  "RT": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HV9961NG_G extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: CS; input. */
  "CS": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: GATE; output. */
  "GATE": "8",
  /** Physical pin 9: PWMD; input. */
  "PWMD": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: VDD; power_out. */
  "VDD": "12",
  /** Physical pin 13: LD; input. */
  "LD": "13",
  /** Physical pin 14: RT; input. */
  "RT": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HV9967BK7_G extends Component.withPins({
  /** Physical pin 1: SW; output. */
  "SW": "1",
  /** Physical pin 2: Rs; input. */
  "Rs": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: PWMD; output. */
  "PWMD": "4",
  /** Physical pin 6: RT; input. */
  "RT": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: VDD; power_out. */
  "VDD": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HV9967BMG_G extends Component.withPins({
  /** Physical pin 1: SW; output. */
  "SW": "1",
  /** Physical pin 2: Rs; input. */
  "Rs": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: PWMD; output. */
  "PWMD": "4",
  /** Physical pin 6: RT; input. */
  "RT": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: VDD; power_out. */
  "VDD": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HV9972LG_G extends Component.withPins({
  /** Physical pin 1: BIAS; passive. */
  "BIAS": "1",
  /** Physical pin 2: VIN; input. */
  "VIN": "2",
  /** Physical pin 3: VD; input. */
  "VD": "3",
  /** Physical pin 4: PWMD; output. */
  "PWMD": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: GATE; output. */
  "GATE": "7",
  /** Physical pin 8: VDD; power_out. */
  "VDD": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31FL3216 extends Component.withPins({
  /** Physical pin 1: CLK; bidirectional. */
  "CLK": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: OUT1; open_collector. */
  "OUT1": "3",
  /** Physical pin 4: OUT2; open_collector. */
  "OUT2": "4",
  /** Physical pin 5: OUT3; open_collector. */
  "OUT3": "5",
  /** Physical pin 6: OUT4; open_collector. */
  "OUT4": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: OUT5; open_collector. */
  "OUT5": "8",
  /** Physical pin 9: OUT6; open_collector. */
  "OUT6": "9",
  /** Physical pin 10: OUT7; open_collector. */
  "OUT7": "10",
  /** Physical pin 11: OUT8; open_collector. */
  "OUT8": "11",
  /** Physical pin 12: GPIO9/OUT9; bidirectional. */
  "GPIO9/OUT9": "12",
  /** Physical pin 13: GPIO10/OUT10; bidirectional. */
  "GPIO10/OUT10": "13",
  /** Physical pin 14: GPIO11/OUT11; bidirectional. */
  "GPIO11/OUT11": "14",
  /** Physical pin 15: GPIO12/OUT12; bidirectional. */
  "GPIO12/OUT12": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: GPIO13/OUT13; bidirectional. */
  "GPIO13/OUT13": "17",
  /** Physical pin 18: GPIO14/OUT14; bidirectional. */
  "GPIO14/OUT14": "18",
  /** Physical pin 19: GPIO15/OUT15; bidirectional. */
  "GPIO15/OUT15": "19",
  /** Physical pin 20: GPIO16/OUT16; bidirectional. */
  "GPIO16/OUT16": "20",
  /** Physical pin 21: ~{INTB}; output. */
  "~{INTB}": "21",
  /** Physical pin 22: ~{SDB}; input. */
  "~{SDB}": "22",
  /** Physical pin 23: SCL; input. */
  "SCL": "23",
  /** Physical pin 24: SDA; bidirectional. */
  "SDA": "24",
  /** Physical pin 25: AD; input. */
  "AD": "25",
  /** Physical pin 26: VCC; power_in. */
  "VCC": "26",
  /** Physical pin 27: C_FILT; passive. */
  "C_FILT": "27",
  /** Physical pin 28: R_EXT; passive. */
  "R_EXT": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31FL3216A extends Component.withPins({
  /** Physical pin 1: CLK; bidirectional. */
  "CLK": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: OUT1; open_collector. */
  "OUT1": "3",
  /** Physical pin 4: OUT2; open_collector. */
  "OUT2": "4",
  /** Physical pin 5: OUT3; open_collector. */
  "OUT3": "5",
  /** Physical pin 6: OUT4; open_collector. */
  "OUT4": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: OUT5; open_collector. */
  "OUT5": "8",
  /** Physical pin 9: OUT6; open_collector. */
  "OUT6": "9",
  /** Physical pin 10: OUT7; open_collector. */
  "OUT7": "10",
  /** Physical pin 11: OUT8; open_collector. */
  "OUT8": "11",
  /** Physical pin 12: GPIO9/OUT9; bidirectional. */
  "GPIO9/OUT9": "12",
  /** Physical pin 13: GPIO10/OUT10; bidirectional. */
  "GPIO10/OUT10": "13",
  /** Physical pin 14: GPIO11/OUT11; bidirectional. */
  "GPIO11/OUT11": "14",
  /** Physical pin 15: GPIO12/OUT12; bidirectional. */
  "GPIO12/OUT12": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: GPIO13/OUT13; bidirectional. */
  "GPIO13/OUT13": "17",
  /** Physical pin 18: GPIO14/OUT14; bidirectional. */
  "GPIO14/OUT14": "18",
  /** Physical pin 19: GPIO15/OUT15; bidirectional. */
  "GPIO15/OUT15": "19",
  /** Physical pin 20: GPIO16/OUT16; bidirectional. */
  "GPIO16/OUT16": "20",
  /** Physical pin 21: ~{INTB}; output. */
  "~{INTB}": "21",
  /** Physical pin 22: ~{SDB}; input. */
  "~{SDB}": "22",
  /** Physical pin 23: SCL; input. */
  "SCL": "23",
  /** Physical pin 24: SDA; bidirectional. */
  "SDA": "24",
  /** Physical pin 25: AD; input. */
  "AD": "25",
  /** Physical pin 26: VCC; power_in. */
  "VCC": "26",
  /** Physical pin 27: C_FILT; passive. */
  "C_FILT": "27",
  /** Physical pin 28: R_EXT; passive. */
  "R_EXT": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31FL3218_GR extends Component.withPins({
  /** Physical pin 1: OUT18; open_collector. */
  "OUT18": "1",
  /** Physical pin 2: R_EXT; passive. */
  "R_EXT": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: OUT1; open_collector. */
  "OUT1": "7",
  /** Physical pin 8: OUT2; open_collector. */
  "OUT2": "8",
  /** Physical pin 9: OUT3; open_collector. */
  "OUT3": "9",
  /** Physical pin 10: OUT4; open_collector. */
  "OUT4": "10",
  /** Physical pin 11: OUT5; open_collector. */
  "OUT5": "11",
  /** Physical pin 12: OUT6; open_collector. */
  "OUT6": "12",
  /** Physical pin 13: OUT7; open_collector. */
  "OUT7": "13",
  /** Physical pin 14: OUT8; open_collector. */
  "OUT8": "14",
  /** Physical pin 15: OUT9; open_collector. */
  "OUT9": "15",
  /** Physical pin 16: OUT10; open_collector. */
  "OUT10": "16",
  /** Physical pin 17: OUT11; open_collector. */
  "OUT11": "17",
  /** Physical pin 18: OUT12; open_collector. */
  "OUT12": "18",
  /** Physical pin 19: OUT13; open_collector. */
  "OUT13": "19",
  /** Physical pin 20: OUT14; open_collector. */
  "OUT14": "20",
  /** Physical pin 21: OUT15; open_collector. */
  "OUT15": "21",
  /** Physical pin 22: OUT16; open_collector. */
  "OUT16": "22",
  /** Physical pin 23: OUT17; open_collector. */
  "OUT17": "23",
  /** Physical pin 24: ~{SDB}; input. */
  "~{SDB}": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31FL3218_QF extends Component.withPins({
  /** Physical pin 1: OUT18; open_collector. */
  "OUT18": "1",
  /** Physical pin 2: R_EXT; passive. */
  "R_EXT": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: OUT1; open_collector. */
  "OUT1": "7",
  /** Physical pin 8: OUT2; open_collector. */
  "OUT2": "8",
  /** Physical pin 9: OUT3; open_collector. */
  "OUT3": "9",
  /** Physical pin 10: OUT4; open_collector. */
  "OUT4": "10",
  /** Physical pin 11: OUT5; open_collector. */
  "OUT5": "11",
  /** Physical pin 12: OUT6; open_collector. */
  "OUT6": "12",
  /** Physical pin 13: OUT7; open_collector. */
  "OUT7": "13",
  /** Physical pin 14: OUT8; open_collector. */
  "OUT8": "14",
  /** Physical pin 15: OUT9; open_collector. */
  "OUT9": "15",
  /** Physical pin 16: OUT10; open_collector. */
  "OUT10": "16",
  /** Physical pin 17: OUT11; open_collector. */
  "OUT11": "17",
  /** Physical pin 18: OUT12; open_collector. */
  "OUT12": "18",
  /** Physical pin 19: OUT13; open_collector. */
  "OUT13": "19",
  /** Physical pin 20: OUT14; open_collector. */
  "OUT14": "20",
  /** Physical pin 21: OUT15; open_collector. */
  "OUT15": "21",
  /** Physical pin 22: OUT16; open_collector. */
  "OUT16": "22",
  /** Physical pin 23: OUT17; open_collector. */
  "OUT17": "23",
  /** Physical pin 24: ~{SDB}; input. */
  "~{SDB}": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31FL3236_TQ extends Component.withPins({
  /** Physical pin 1: OUT3; output. */
  "OUT3": "1",
  /** Physical pin 2: OUT4; output. */
  "OUT4": "2",
  /** Physical pin 3: OUT5; output. */
  "OUT5": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: OUT6; output. */
  "OUT6": "5",
  /** Physical pin 6: OUT7; output. */
  "OUT7": "6",
  /** Physical pin 7: OUT8; output. */
  "OUT8": "7",
  /** Physical pin 8: OUT9; output. */
  "OUT9": "8",
  /** Physical pin 9: OUT10; output. */
  "OUT10": "9",
  /** Physical pin 10: OUT11; output. */
  "OUT11": "10",
  /** Physical pin 11: OUT12; output. */
  "OUT12": "11",
  /** Physical pin 12: OUT13; output. */
  "OUT13": "12",
  /** Physical pin 13: OUT14; output. */
  "OUT14": "13",
  /** Physical pin 14: OUT15; output. */
  "OUT15": "14",
  /** Physical pin 15: OUT16; output. */
  "OUT16": "15",
  /** Physical pin 16: OUT17; output. */
  "OUT17": "16",
  /** Physical pin 17: OUT18; output. */
  "OUT18": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: OUT19; output. */
  "OUT19": "20",
  /** Physical pin 21: OUT20; output. */
  "OUT20": "21",
  /** Physical pin 22: OUT21; output. */
  "OUT21": "22",
  /** Physical pin 23: OUT22; output. */
  "OUT22": "23",
  /** Physical pin 24: OUT23; output. */
  "OUT23": "24",
  /** Physical pin 25: OUT24; output. */
  "OUT24": "25",
  /** Physical pin 26: OUT25; output. */
  "OUT25": "26",
  /** Physical pin 27: OUT26; output. */
  "OUT26": "27",
  /** Physical pin 28: OUT27; output. */
  "OUT27": "28",
  /** Physical pin 29: OUT28; output. */
  "OUT28": "29",
  /** Physical pin 30: OUT29; output. */
  "OUT29": "30",
  /** Physical pin 31: OUT30; output. */
  "OUT30": "31",
  /** Physical pin 32: OUT31; output. */
  "OUT31": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: OUT32; output. */
  "OUT32": "34",
  /** Physical pin 35: OUT33; output. */
  "OUT33": "35",
  /** Physical pin 36: OUT34; output. */
  "OUT34": "36",
  /** Physical pin 37: OUT35; output. */
  "OUT35": "37",
  /** Physical pin 38: OUT36; output. */
  "OUT36": "38",
  /** Physical pin 39: ~{SDB}; input. */
  "~{SDB}": "39",
  /** Physical pin 40: AD; input. */
  "AD": "40",
  /** Physical pin 41: VCC; power_in. */
  "VCC": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: R_EXT; passive. */
  "R_EXT": "44",
  /** Physical pin 45: SDA; open_collector. */
  "SDA": "45",
  /** Physical pin 46: SCL; input. */
  "SCL": "46",
  /** Physical pin 47: OUT1; output. */
  "OUT1": "47",
  /** Physical pin 48: OUT2; output. */
  "OUT2": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31FL3236A_TQ extends Component.withPins({
  /** Physical pin 1: OUT3; output. */
  "OUT3": "1",
  /** Physical pin 2: OUT4; output. */
  "OUT4": "2",
  /** Physical pin 3: OUT5; output. */
  "OUT5": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: OUT6; output. */
  "OUT6": "5",
  /** Physical pin 6: OUT7; output. */
  "OUT7": "6",
  /** Physical pin 7: OUT8; output. */
  "OUT8": "7",
  /** Physical pin 8: OUT9; output. */
  "OUT9": "8",
  /** Physical pin 9: OUT10; output. */
  "OUT10": "9",
  /** Physical pin 10: OUT11; output. */
  "OUT11": "10",
  /** Physical pin 11: OUT12; output. */
  "OUT12": "11",
  /** Physical pin 12: OUT13; output. */
  "OUT13": "12",
  /** Physical pin 13: OUT14; output. */
  "OUT14": "13",
  /** Physical pin 14: OUT15; output. */
  "OUT15": "14",
  /** Physical pin 15: OUT16; output. */
  "OUT16": "15",
  /** Physical pin 16: OUT17; output. */
  "OUT17": "16",
  /** Physical pin 17: OUT18; output. */
  "OUT18": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: OUT19; output. */
  "OUT19": "20",
  /** Physical pin 21: OUT20; output. */
  "OUT20": "21",
  /** Physical pin 22: OUT21; output. */
  "OUT21": "22",
  /** Physical pin 23: OUT22; output. */
  "OUT22": "23",
  /** Physical pin 24: OUT23; output. */
  "OUT23": "24",
  /** Physical pin 25: OUT24; output. */
  "OUT24": "25",
  /** Physical pin 26: OUT25; output. */
  "OUT25": "26",
  /** Physical pin 27: OUT26; output. */
  "OUT26": "27",
  /** Physical pin 28: OUT27; output. */
  "OUT27": "28",
  /** Physical pin 29: OUT28; output. */
  "OUT28": "29",
  /** Physical pin 30: OUT29; output. */
  "OUT29": "30",
  /** Physical pin 31: OUT30; output. */
  "OUT30": "31",
  /** Physical pin 32: OUT31; output. */
  "OUT31": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: OUT32; output. */
  "OUT32": "34",
  /** Physical pin 35: OUT33; output. */
  "OUT33": "35",
  /** Physical pin 36: OUT34; output. */
  "OUT34": "36",
  /** Physical pin 37: OUT35; output. */
  "OUT35": "37",
  /** Physical pin 38: OUT36; output. */
  "OUT36": "38",
  /** Physical pin 39: ~{SDB}; input. */
  "~{SDB}": "39",
  /** Physical pin 40: AD; input. */
  "AD": "40",
  /** Physical pin 41: VCC; power_in. */
  "VCC": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: R_EXT; passive. */
  "R_EXT": "44",
  /** Physical pin 45: SDA; open_collector. */
  "SDA": "45",
  /** Physical pin 46: SCL; input. */
  "SCL": "46",
  /** Physical pin 47: OUT1; output. */
  "OUT1": "47",
  /** Physical pin 48: OUT2; output. */
  "OUT2": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31FL3242 extends Component.withPins({
  /** Physical pin 1: OUT1; open_collector. */
  "OUT1": "1",
  /** Physical pin 2: OUT2; open_collector. */
  "OUT2": "2",
  /** Physical pin 3: OUT3; open_collector. */
  "OUT3": "3",
  /** Physical pin 4: OUT4; open_collector. */
  "OUT4": "4",
  /** Physical pin 5: OUT5; open_collector. */
  "OUT5": "5",
  /** Physical pin 6: OUT6; open_collector. */
  "OUT6": "6",
  /** Physical pin 7: AD; input. */
  "AD": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: SCL; input. */
  "SCL": "9",
  /** Physical pin 10: ~{SDB}; input. */
  "~{SDB}": "10",
  /** Physical pin 11: OUT7; open_collector. */
  "OUT7": "11",
  /** Physical pin 12: OUT8; open_collector. */
  "OUT8": "12",
  /** Physical pin 13: OUT9; open_collector. */
  "OUT9": "13",
  /** Physical pin 14: OUT10; open_collector. */
  "OUT10": "14",
  /** Physical pin 15: OUT11; open_collector. */
  "OUT11": "15",
  /** Physical pin 16: OUT12; open_collector. */
  "OUT12": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: VCC; power_in. */
  "VCC": "19",
  /** Physical pin [20,21]: GND; power_in. */
  "GND": "[20,21]",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31FL3731_QF extends Component.withPins({
  /** Physical pin 1: CA9; bidirectional. */
  "CA9": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: ~{SDB}; input. */
  "~{SDB}": "3",
  /** Physical pin 4: ~{INTB}; open_collector. */
  "~{INTB}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: R_EXT; passive. */
  "R_EXT": "6",
  /** Physical pin 7: CB1; bidirectional. */
  "CB1": "7",
  /** Physical pin 8: CB2; bidirectional. */
  "CB2": "8",
  /** Physical pin 9: CB3; bidirectional. */
  "CB3": "9",
  /** Physical pin 10: CB4; bidirectional. */
  "CB4": "10",
  /** Physical pin 11: CB5; bidirectional. */
  "CB5": "11",
  /** Physical pin 12: CB6; bidirectional. */
  "CB6": "12",
  /** Physical pin 13: CB7; bidirectional. */
  "CB7": "13",
  /** Physical pin 14: CB8; bidirectional. */
  "CB8": "14",
  /** Physical pin 15: CB9; bidirectional. */
  "CB9": "15",
  /** Physical pin 16: C_FILT; passive. */
  "C_FILT": "16",
  /** Physical pin 17: IN; input. */
  "IN": "17",
  /** Physical pin 18: AD; input. */
  "AD": "18",
  /** Physical pin 19: SDA; bidirectional. */
  "SDA": "19",
  /** Physical pin 20: SCL; input. */
  "SCL": "20",
  /** Physical pin 21: CA1; bidirectional. */
  "CA1": "21",
  /** Physical pin 22: CA2; bidirectional. */
  "CA2": "22",
  /** Physical pin 23: CA3; bidirectional. */
  "CA3": "23",
  /** Physical pin 24: CA4; bidirectional. */
  "CA4": "24",
  /** Physical pin 25: CA5; bidirectional. */
  "CA5": "25",
  /** Physical pin 26: CA6; bidirectional. */
  "CA6": "26",
  /** Physical pin 27: CA7; bidirectional. */
  "CA7": "27",
  /** Physical pin 28: CA8; bidirectional. */
  "CA8": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31FL3731_SA extends Component.withPins({
  /** Physical pin 1: CA9; bidirectional. */
  "CA9": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: ~{SDB}; input. */
  "~{SDB}": "3",
  /** Physical pin 4: ~{INTB}; open_collector. */
  "~{INTB}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: R_EXT; passive. */
  "R_EXT": "6",
  /** Physical pin 7: CB1; bidirectional. */
  "CB1": "7",
  /** Physical pin 8: CB2; bidirectional. */
  "CB2": "8",
  /** Physical pin 9: CB3; bidirectional. */
  "CB3": "9",
  /** Physical pin 10: CB4; bidirectional. */
  "CB4": "10",
  /** Physical pin 11: CB5; bidirectional. */
  "CB5": "11",
  /** Physical pin 12: CB6; bidirectional. */
  "CB6": "12",
  /** Physical pin 13: CB7; bidirectional. */
  "CB7": "13",
  /** Physical pin 14: CB8; bidirectional. */
  "CB8": "14",
  /** Physical pin 15: CB9; bidirectional. */
  "CB9": "15",
  /** Physical pin 16: C_FILT; passive. */
  "C_FILT": "16",
  /** Physical pin 17: IN; input. */
  "IN": "17",
  /** Physical pin 18: AD; input. */
  "AD": "18",
  /** Physical pin 19: SDA; bidirectional. */
  "SDA": "19",
  /** Physical pin 20: SCL; input. */
  "SCL": "20",
  /** Physical pin 21: CA1; bidirectional. */
  "CA1": "21",
  /** Physical pin 22: CA2; bidirectional. */
  "CA2": "22",
  /** Physical pin 23: CA3; bidirectional. */
  "CA3": "23",
  /** Physical pin 24: CA4; bidirectional. */
  "CA4": "24",
  /** Physical pin 25: CA5; bidirectional. */
  "CA5": "25",
  /** Physical pin 26: CA6; bidirectional. */
  "CA6": "26",
  /** Physical pin 27: CA7; bidirectional. */
  "CA7": "27",
  /** Physical pin 28: CA8; bidirectional. */
  "CA8": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31FL3733_QF extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: SW1; input. */
  "SW1": "2",
  /** Physical pin 3: SW2; input. */
  "SW2": "3",
  /** Physical pin 4: SW3; input. */
  "SW3": "4",
  /** Physical pin 5: PGND; power_in. */
  "PGND_5": "5",
  /** Physical pin 6: SW4; input. */
  "SW4": "6",
  /** Physical pin 7: SW5; input. */
  "SW5": "7",
  /** Physical pin 8: SW6; input. */
  "SW6": "8",
  /** Physical pin 9: SW7; input. */
  "SW7": "9",
  /** Physical pin 10: SW8; input. */
  "SW8": "10",
  /** Physical pin 11: SW9; input. */
  "SW9": "11",
  /** Physical pin 12: PGND; passive. */
  "PGND_12": "12",
  /** Physical pin 13: SW10; input. */
  "SW10": "13",
  /** Physical pin 14: SW11; input. */
  "SW11": "14",
  /** Physical pin 15: SW12; input. */
  "SW12": "15",
  /** Physical pin 16: CS1; output. */
  "CS1": "16",
  /** Physical pin 17: CS2; output. */
  "CS2": "17",
  /** Physical pin 18: CS3; output. */
  "CS3": "18",
  /** Physical pin 19: CS4; output. */
  "CS4": "19",
  /** Physical pin 20: PVCC; power_in. */
  "PVCC_20": "20",
  /** Physical pin 21: CS5; output. */
  "CS5": "21",
  /** Physical pin 22: CS6; output. */
  "CS6": "22",
  /** Physical pin 23: CS7; output. */
  "CS7": "23",
  /** Physical pin 24: CS8; output. */
  "CS8": "24",
  /** Physical pin 25: CS9; output. */
  "CS9": "25",
  /** Physical pin 26: CS10; output. */
  "CS10": "26",
  /** Physical pin 27: CS11; output. */
  "CS11": "27",
  /** Physical pin 28: CS12; output. */
  "CS12": "28",
  /** Physical pin 29: PVCC; power_in. */
  "PVCC_29": "29",
  /** Physical pin 30: CS13; output. */
  "CS13": "30",
  /** Physical pin 31: CS14; output. */
  "CS14": "31",
  /** Physical pin 32: CS15; output. */
  "CS15": "32",
  /** Physical pin 33: CS16; output. */
  "CS16": "33",
  /** Physical pin 34: AGND; power_in. */
  "AGND": "34",
  /** Physical pin 35: RSET; passive. */
  "RSET": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: AVCC; power_in. */
  "AVCC": "37",
  /** Physical pin 38: DVCC; power_in. */
  "DVCC": "38",
  /** Physical pin 39: VIO; input. */
  "VIO": "39",
  /** Physical pin 40: SYNC; input. */
  "SYNC": "40",
  /** Physical pin 41: SDA; bidirectional. */
  "SDA": "41",
  /** Physical pin 42: SCL; input. */
  "SCL": "42",
  /** Physical pin 43: ADDR1; input. */
  "ADDR1": "43",
  /** Physical pin 44: ADDR2; input. */
  "ADDR2": "44",
  /** Physical pin 45: ~{INTB}; open_collector. */
  "~{INTB}": "45",
  /** Physical pin 46: ~{SDB}; input. */
  "~{SDB}": "46",
  /** Physical pin 47: IICRST; input. */
  "IICRST": "47",
  /** Physical pin 48: GND; power_in. */
  "GND_48": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31FL3733_TQ extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: SW1; input. */
  "SW1": "2",
  /** Physical pin 3: SW2; input. */
  "SW2": "3",
  /** Physical pin 4: SW3; input. */
  "SW3": "4",
  /** Physical pin 5: PGND; power_in. */
  "PGND_5": "5",
  /** Physical pin 6: SW4; input. */
  "SW4": "6",
  /** Physical pin 7: SW5; input. */
  "SW5": "7",
  /** Physical pin 8: SW6; input. */
  "SW6": "8",
  /** Physical pin 9: SW7; input. */
  "SW7": "9",
  /** Physical pin 10: SW8; input. */
  "SW8": "10",
  /** Physical pin 11: SW9; input. */
  "SW9": "11",
  /** Physical pin 12: PGND; passive. */
  "PGND_12": "12",
  /** Physical pin 13: SW10; input. */
  "SW10": "13",
  /** Physical pin 14: SW11; input. */
  "SW11": "14",
  /** Physical pin 15: SW12; input. */
  "SW12": "15",
  /** Physical pin 16: CS1; output. */
  "CS1": "16",
  /** Physical pin 17: CS2; output. */
  "CS2": "17",
  /** Physical pin 18: CS3; output. */
  "CS3": "18",
  /** Physical pin 19: CS4; output. */
  "CS4": "19",
  /** Physical pin 20: PVCC; power_in. */
  "PVCC_20": "20",
  /** Physical pin 21: CS5; output. */
  "CS5": "21",
  /** Physical pin 22: CS6; output. */
  "CS6": "22",
  /** Physical pin 23: CS7; output. */
  "CS7": "23",
  /** Physical pin 24: CS8; output. */
  "CS8": "24",
  /** Physical pin 25: CS9; output. */
  "CS9": "25",
  /** Physical pin 26: CS10; output. */
  "CS10": "26",
  /** Physical pin 27: CS11; output. */
  "CS11": "27",
  /** Physical pin 28: CS12; output. */
  "CS12": "28",
  /** Physical pin 29: PVCC; power_in. */
  "PVCC_29": "29",
  /** Physical pin 30: CS13; output. */
  "CS13": "30",
  /** Physical pin 31: CS14; output. */
  "CS14": "31",
  /** Physical pin 32: CS15; output. */
  "CS15": "32",
  /** Physical pin 33: CS16; output. */
  "CS16": "33",
  /** Physical pin 34: AGND; power_in. */
  "AGND": "34",
  /** Physical pin 35: RSET; passive. */
  "RSET": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: AVCC; power_in. */
  "AVCC": "37",
  /** Physical pin 38: DVCC; power_in. */
  "DVCC": "38",
  /** Physical pin 39: VIO; input. */
  "VIO": "39",
  /** Physical pin 40: SYNC; input. */
  "SYNC": "40",
  /** Physical pin 41: SDA; bidirectional. */
  "SDA": "41",
  /** Physical pin 42: SCL; input. */
  "SCL": "42",
  /** Physical pin 43: ADDR1; input. */
  "ADDR1": "43",
  /** Physical pin 44: ADDR2; input. */
  "ADDR2": "44",
  /** Physical pin 45: ~{INTB}; open_collector. */
  "~{INTB}": "45",
  /** Physical pin 46: ~{SDB}; input. */
  "~{SDB}": "46",
  /** Physical pin 47: IICRST; input. */
  "IICRST": "47",
  /** Physical pin 48: GND; power_in. */
  "GND_48": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31FL3736 extends Component.withPins({
  /** Physical pin 1: SW1; input. */
  "SW1": "1",
  /** Physical pin 2: SW2; input. */
  "SW2": "2",
  /** Physical pin 3: SW3; input. */
  "SW3": "3",
  /** Physical pin 4: PGND; power_in. */
  "PGND_4": "4",
  /** Physical pin 5: SW4; input. */
  "SW4": "5",
  /** Physical pin 6: SW5; input. */
  "SW5": "6",
  /** Physical pin 7: SW6; input. */
  "SW6": "7",
  /** Physical pin 8: SW7; input. */
  "SW7": "8",
  /** Physical pin 9: SW8; input. */
  "SW8": "9",
  /** Physical pin 10: SW9; input. */
  "SW9": "10",
  /** Physical pin 11: PGND; passive. */
  "PGND_11": "11",
  /** Physical pin 12: SW10; input. */
  "SW10": "12",
  /** Physical pin 13: SW11; input. */
  "SW11": "13",
  /** Physical pin 14: SW12; input. */
  "SW12": "14",
  /** Physical pin 15: CS1; output. */
  "CS1": "15",
  /** Physical pin 16: CS2; output. */
  "CS2": "16",
  /** Physical pin 17: PVCC; power_in. */
  "PVCC_17": "17",
  /** Physical pin 18: CS3; output. */
  "CS3": "18",
  /** Physical pin 19: CS4; output. */
  "CS4": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: CS5; output. */
  "CS5": "21",
  /** Physical pin 22: CS6; output. */
  "CS6": "22",
  /** Physical pin 23: PVCC; power_in. */
  "PVCC_23": "23",
  /** Physical pin 24: CS7; output. */
  "CS7": "24",
  /** Physical pin 25: CS8; output. */
  "CS8": "25",
  /** Physical pin 26: AGND; power_in. */
  "AGND": "26",
  /** Physical pin 27: DVCC; power_in. */
  "DVCC": "27",
  /** Physical pin 28: AVCC; power_in. */
  "AVCC": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: RSET; passive. */
  "RSET": "30",
  /** Physical pin 31: VIO; input. */
  "VIO": "31",
  /** Physical pin 32: SYNC; input. */
  "SYNC": "32",
  /** Physical pin 33: SDA; bidirectional. */
  "SDA": "33",
  /** Physical pin 34: SCL; input. */
  "SCL": "34",
  /** Physical pin 35: ADDR1; input. */
  "ADDR1": "35",
  /** Physical pin 36: ADDR2; input. */
  "ADDR2": "36",
  /** Physical pin 37: ~{INTB}; open_collector. */
  "~{INTB}": "37",
  /** Physical pin 38: ~{SDB}; input. */
  "~{SDB}": "38",
  /** Physical pin 39: IICRST; input. */
  "IICRST": "39",
  /** Physical pin 40: GND; power_in. */
  "GND_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31FL3737 extends Component.withPins({
  /** Physical pin 1: SW1; input. */
  "SW1": "1",
  /** Physical pin 2: SW2; input. */
  "SW2": "2",
  /** Physical pin 3: SW3; input. */
  "SW3": "3",
  /** Physical pin 4: PGND; power_in. */
  "PGND_4": "4",
  /** Physical pin 5: SW4; input. */
  "SW4": "5",
  /** Physical pin 6: SW5; input. */
  "SW5": "6",
  /** Physical pin 7: SW6; input. */
  "SW6": "7",
  /** Physical pin 8: SW7; input. */
  "SW7": "8",
  /** Physical pin 9: SW8; input. */
  "SW8": "9",
  /** Physical pin 10: SW9; input. */
  "SW9": "10",
  /** Physical pin 11: PGND; passive. */
  "PGND_11": "11",
  /** Physical pin 12: SW10; input. */
  "SW10": "12",
  /** Physical pin 13: SW11; input. */
  "SW11": "13",
  /** Physical pin 14: SW12; input. */
  "SW12": "14",
  /** Physical pin 15: CS1; output. */
  "CS1": "15",
  /** Physical pin 16: CS2; output. */
  "CS2": "16",
  /** Physical pin 17: CS3; output. */
  "CS3": "17",
  /** Physical pin 18: CS4; output. */
  "CS4": "18",
  /** Physical pin 19: PVCC; power_in. */
  "PVCC_19": "19",
  /** Physical pin 20: CS5; output. */
  "CS5": "20",
  /** Physical pin 21: CS6; output. */
  "CS6": "21",
  /** Physical pin 22: CS7; output. */
  "CS7": "22",
  /** Physical pin 23: CS8; output. */
  "CS8": "23",
  /** Physical pin 24: CS9; output. */
  "CS9": "24",
  /** Physical pin 25: CS10; output. */
  "CS10": "25",
  /** Physical pin 26: PVCC; power_in. */
  "PVCC_26": "26",
  /** Physical pin 27: CS11; output. */
  "CS11": "27",
  /** Physical pin 28: CS12; output. */
  "CS12": "28",
  /** Physical pin 29: AGND; power_in. */
  "AGND": "29",
  /** Physical pin 30: RSET; passive. */
  "RSET": "30",
  /** Physical pin 31: VCC; power_in. */
  "VCC": "31",
  /** Physical pin 32: VIO; input. */
  "VIO": "32",
  /** Physical pin 33: SYNC; input. */
  "SYNC": "33",
  /** Physical pin 34: SDA; bidirectional. */
  "SDA": "34",
  /** Physical pin 35: SCL; input. */
  "SCL": "35",
  /** Physical pin 36: ADDR; input. */
  "ADDR": "36",
  /** Physical pin 37: ~{INTB}; open_collector. */
  "~{INTB}": "37",
  /** Physical pin 38: ~{SDB}; input. */
  "~{SDB}": "38",
  /** Physical pin 39: IICRST; input. */
  "IICRST": "39",
  /** Physical pin 40: GND; power_in. */
  "GND_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31LT3360 extends Component.withPins({
  /** Physical pin 1: LX; open_collector. */
  "LX": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ADJ; input. */
  "ADJ": "3",
  /** Physical pin 4: ISENSE; input. */
  "ISENSE": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KTD2026 extends Component.withPins({
  /** Physical pin 1: ST; open_collector. */
  "ST": "1",
  /** Physical pin 2: D3; output. */
  "D3": "2",
  /** Physical pin 3: D2; output. */
  "D2": "3",
  /** Physical pin 4: D1; output. */
  "D1": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KTD2027 extends Component.withPins({
  /** Physical pin 1: D4; output. */
  "D4": "1",
  /** Physical pin 2: D3; output. */
  "D3": "2",
  /** Physical pin 3: D2; output. */
  "D2": "3",
  /** Physical pin 4: D1; output. */
  "D1": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
  /** Physical pin 6: SCL; bidirectional. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KTD2061xxUAC extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN_1": "1",
  /** Physical pin 2: VIN; passive. */
  "VIN_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: LEDA1; output. */
  "LEDA1": "6",
  /** Physical pin 7: LEDA2; output. */
  "LEDA2": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: LEDA3; output. */
  "LEDA3": "9",
  /** Physical pin 10: LEDA4; output. */
  "LEDA4": "10",
  /** Physical pin 11: LEDB1; output. */
  "LEDB1": "11",
  /** Physical pin 12: LEDB2; output. */
  "LEDB2": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: LEDB3; output. */
  "LEDB3": "14",
  /** Physical pin 15: LEDB4; output. */
  "LEDB4": "15",
  /** Physical pin 16: LEDC1; output. */
  "LEDC1": "16",
  /** Physical pin 17: LEDC2; output. */
  "LEDC2": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: LEDC3; output. */
  "LEDC3": "19",
  /** Physical pin 20: LEDC4; output. */
  "LEDC4": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED1642GWPTR extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE; input. */
  "LE": "4",
  /** Physical pin 5: OUT0; output. */
  "OUT0": "5",
  /** Physical pin 6: OUT1; output. */
  "OUT1": "6",
  /** Physical pin 7: OUT2; output. */
  "OUT2": "7",
  /** Physical pin 8: OUT3; output. */
  "OUT3": "8",
  /** Physical pin 9: OUT4; output. */
  "OUT4": "9",
  /** Physical pin 10: OUT5; output. */
  "OUT5": "10",
  /** Physical pin 11: OUT6; output. */
  "OUT6": "11",
  /** Physical pin 12: OUT7; output. */
  "OUT7": "12",
  /** Physical pin 13: OUT8; output. */
  "OUT8": "13",
  /** Physical pin 14: OUT9; output. */
  "OUT9": "14",
  /** Physical pin 15: OUT10; output. */
  "OUT10": "15",
  /** Physical pin 16: OUT11; output. */
  "OUT11": "16",
  /** Physical pin 17: OUT12; output. */
  "OUT12": "17",
  /** Physical pin 18: OUT13; output. */
  "OUT13": "18",
  /** Physical pin 19: OUT14; output. */
  "OUT14": "19",
  /** Physical pin 20: OUT15; output. */
  "OUT15": "20",
  /** Physical pin 21: PWCLK; input. */
  "PWCLK": "21",
  /** Physical pin 22: SDO; output. */
  "SDO": "22",
  /** Physical pin 23: R-EXT; passive. */
  "R-EXT": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED1642GWQTR extends Component.withPins({
  /** Physical pin 1: LE; input. */
  "LE": "1",
  /** Physical pin 2: OUT0; output. */
  "OUT0": "2",
  /** Physical pin 3: OUT1; output. */
  "OUT1": "3",
  /** Physical pin 4: OUT2; output. */
  "OUT2": "4",
  /** Physical pin 5: OUT3; output. */
  "OUT3": "5",
  /** Physical pin 6: OUT4; output. */
  "OUT4": "6",
  /** Physical pin 7: OUT5; output. */
  "OUT5": "7",
  /** Physical pin 8: OUT6; output. */
  "OUT6": "8",
  /** Physical pin 9: OUT7; output. */
  "OUT7": "9",
  /** Physical pin 10: OUT8; output. */
  "OUT8": "10",
  /** Physical pin 11: OUT9; output. */
  "OUT9": "11",
  /** Physical pin 12: OUT10; output. */
  "OUT10": "12",
  /** Physical pin 13: OUT11; output. */
  "OUT11": "13",
  /** Physical pin 14: OUT12; output. */
  "OUT12": "14",
  /** Physical pin 15: OUT13; output. */
  "OUT13": "15",
  /** Physical pin 16: OUT14; output. */
  "OUT14": "16",
  /** Physical pin 17: OUT15; output. */
  "OUT15": "17",
  /** Physical pin 18: PWCLK; input. */
  "PWCLK": "18",
  /** Physical pin 19: SDO; output. */
  "SDO": "19",
  /** Physical pin 20: R-EXT; passive. */
  "R-EXT": "20",
  /** Physical pin 21: VDD; power_in. */
  "VDD": "21",
  /** Physical pin 22: GND; power_in. */
  "GND": "22",
  /** Physical pin 23: SDI; input. */
  "SDI": "23",
  /** Physical pin 24: CLK; input. */
  "CLK": "24",
  /** Physical pin 25: EP; passive. */
  "EP": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED1642GWTTR extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE; input. */
  "LE": "4",
  /** Physical pin 5: OUT0; output. */
  "OUT0": "5",
  /** Physical pin 6: OUT1; output. */
  "OUT1": "6",
  /** Physical pin 7: OUT2; output. */
  "OUT2": "7",
  /** Physical pin 8: OUT3; output. */
  "OUT3": "8",
  /** Physical pin 9: OUT4; output. */
  "OUT4": "9",
  /** Physical pin 10: OUT5; output. */
  "OUT5": "10",
  /** Physical pin 11: OUT6; output. */
  "OUT6": "11",
  /** Physical pin 12: OUT7; output. */
  "OUT7": "12",
  /** Physical pin 13: OUT8; output. */
  "OUT8": "13",
  /** Physical pin 14: OUT9; output. */
  "OUT9": "14",
  /** Physical pin 15: OUT10; output. */
  "OUT10": "15",
  /** Physical pin 16: OUT11; output. */
  "OUT11": "16",
  /** Physical pin 17: OUT12; output. */
  "OUT12": "17",
  /** Physical pin 18: OUT13; output. */
  "OUT13": "18",
  /** Physical pin 19: OUT14; output. */
  "OUT14": "19",
  /** Physical pin 20: OUT15; output. */
  "OUT15": "20",
  /** Physical pin 21: PWCLK; input. */
  "PWCLK": "21",
  /** Physical pin 22: SDO; output. */
  "SDO": "22",
  /** Physical pin 23: R-EXT; passive. */
  "R-EXT": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED1642GWXTTR extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE; input. */
  "LE": "4",
  /** Physical pin 5: OUT0; output. */
  "OUT0": "5",
  /** Physical pin 6: OUT1; output. */
  "OUT1": "6",
  /** Physical pin 7: OUT2; output. */
  "OUT2": "7",
  /** Physical pin 8: OUT3; output. */
  "OUT3": "8",
  /** Physical pin 9: OUT4; output. */
  "OUT4": "9",
  /** Physical pin 10: OUT5; output. */
  "OUT5": "10",
  /** Physical pin 11: OUT6; output. */
  "OUT6": "11",
  /** Physical pin 12: OUT7; output. */
  "OUT7": "12",
  /** Physical pin 13: OUT8; output. */
  "OUT8": "13",
  /** Physical pin 14: OUT9; output. */
  "OUT9": "14",
  /** Physical pin 15: OUT10; output. */
  "OUT10": "15",
  /** Physical pin 16: OUT11; output. */
  "OUT11": "16",
  /** Physical pin 17: OUT12; output. */
  "OUT12": "17",
  /** Physical pin 18: OUT13; output. */
  "OUT13": "18",
  /** Physical pin 19: OUT14; output. */
  "OUT14": "19",
  /** Physical pin 20: OUT15; output. */
  "OUT15": "20",
  /** Physical pin 21: PWCLK; input. */
  "PWCLK": "21",
  /** Physical pin 22: SDO; output. */
  "SDO": "22",
  /** Physical pin 23: R-EXT; passive. */
  "R-EXT": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
  /** Physical pin 25: EP; passive. */
  "EP": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED5000 extends Component.withPins({
  /** Physical pin 1: BOOT; passive. */
  "BOOT": "1",
  /** Physical pin 2: DIM; input. */
  "DIM": "2",
  /** Physical pin 3: INH; input. */
  "INH": "3",
  /** Physical pin 4: COMP; passive. */
  "COMP": "4",
  /** Physical pin 5: FB; input. */
  "FB": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: VIN; power_in. */
  "VIN": "7",
  /** Physical pin 8: SW; output. */
  "SW": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM3914N extends Component.withPins({
  /** Physical pin 1: LED1; open_collector. */
  "LED1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 4: RLO; input. */
  "RLO": "4",
  /** Physical pin 5: SIG; input. */
  "SIG": "5",
  /** Physical pin 6: RHI; input. */
  "RHI": "6",
  /** Physical pin 7: REFOUT; output. */
  "REFOUT": "7",
  /** Physical pin 8: REFADJ; input. */
  "REFADJ": "8",
  /** Physical pin 9: MODE; input. */
  "MODE": "9",
  /** Physical pin 10: LED10; open_collector. */
  "LED10": "10",
  /** Physical pin 11: LED9; open_collector. */
  "LED9": "11",
  /** Physical pin 12: LED8; open_collector. */
  "LED8": "12",
  /** Physical pin 13: LED7; open_collector. */
  "LED7": "13",
  /** Physical pin 14: LED6; open_collector. */
  "LED6": "14",
  /** Physical pin 15: LED5; open_collector. */
  "LED5": "15",
  /** Physical pin 16: LED4; open_collector. */
  "LED4": "16",
  /** Physical pin 17: LED3; open_collector. */
  "LED3": "17",
  /** Physical pin 18: LED2; open_collector. */
  "LED2": "18",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM3914V extends Component.withPins({
  /** Physical pin 1: LED1; open_collector. */
  "LED1": "1",
  /** Physical pin 2: V-; power_in. */
  "V-": "2",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 4: RLO; input. */
  "RLO": "4",
  /** Physical pin 5: SIG; input. */
  "SIG": "5",
  /** Physical pin 6: RHI; input. */
  "RHI": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: REFOUT; output. */
  "REFOUT": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: REFADJ; input. */
  "REFADJ": "10",
  /** Physical pin 11: MODE; input. */
  "MODE": "11",
  /** Physical pin 12: LED10; open_collector. */
  "LED10": "12",
  /** Physical pin 13: LED9; open_collector. */
  "LED9": "13",
  /** Physical pin 14: LED8; open_collector. */
  "LED8": "14",
  /** Physical pin 15: LED7; open_collector. */
  "LED7": "15",
  /** Physical pin 16: LED6; open_collector. */
  "LED6": "16",
  /** Physical pin 17: LED5; open_collector. */
  "LED5": "17",
  /** Physical pin 18: LED4; open_collector. */
  "LED4": "18",
  /** Physical pin 19: LED3; open_collector. */
  "LED3": "19",
  /** Physical pin 20: LED2; open_collector. */
  "LED2": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LP5036 extends Component.withPins({
  /** Physical pin 1: OUT0; power_out. */
  "OUT0": "1",
  /** Physical pin 2: OUT1; power_out. */
  "OUT1": "2",
  /** Physical pin 3: OUT2; power_out. */
  "OUT2": "3",
  /** Physical pin 4: OUT3; power_out. */
  "OUT3": "4",
  /** Physical pin 5: OUT4; power_out. */
  "OUT4": "5",
  /** Physical pin 6: OUT5; power_out. */
  "OUT5": "6",
  /** Physical pin 7: OUT6; power_out. */
  "OUT6": "7",
  /** Physical pin 8: OUT7; power_out. */
  "OUT7": "8",
  /** Physical pin 9: OUT8; power_out. */
  "OUT8": "9",
  /** Physical pin 10: OUT9; power_out. */
  "OUT9": "10",
  /** Physical pin 11: OUT10; power_out. */
  "OUT10": "11",
  /** Physical pin 12: OUT11; power_out. */
  "OUT11": "12",
  /** Physical pin 13: OUT12; power_out. */
  "OUT12": "13",
  /** Physical pin 14: OUT13; power_out. */
  "OUT13": "14",
  /** Physical pin 15: OUT14; power_out. */
  "OUT14": "15",
  /** Physical pin 16: OUT15; power_out. */
  "OUT15": "16",
  /** Physical pin 17: OUT16; power_out. */
  "OUT16": "17",
  /** Physical pin 18: OUT17; power_out. */
  "OUT17": "18",
  /** Physical pin 19: OUT18; power_out. */
  "OUT18": "19",
  /** Physical pin 20: OUT19; power_out. */
  "OUT19": "20",
  /** Physical pin 21: OUT20; power_out. */
  "OUT20": "21",
  /** Physical pin 22: OUT21; power_out. */
  "OUT21": "22",
  /** Physical pin 23: OUT22; power_out. */
  "OUT22": "23",
  /** Physical pin 24: OUT23; power_out. */
  "OUT23": "24",
  /** Physical pin 25: OUT24; power_out. */
  "OUT24": "25",
  /** Physical pin 26: OUT25; power_out. */
  "OUT25": "26",
  /** Physical pin 27: OUT26; power_out. */
  "OUT26": "27",
  /** Physical pin 28: OUT27; power_out. */
  "OUT27": "28",
  /** Physical pin 29: OUT28; power_out. */
  "OUT28": "29",
  /** Physical pin 30: OUT29; power_out. */
  "OUT29": "30",
  /** Physical pin 31: OUT30; power_out. */
  "OUT30": "31",
  /** Physical pin 32: OUT31; power_out. */
  "OUT31": "32",
  /** Physical pin 33: OUT32; power_out. */
  "OUT32": "33",
  /** Physical pin 34: OUT33; power_out. */
  "OUT33": "34",
  /** Physical pin 35: OUT34; power_out. */
  "OUT34": "35",
  /** Physical pin 36: OUT35; power_out. */
  "OUT35": "36",
  /** Physical pin 37: GND; power_in. */
  "GND_37": "37",
  /** Physical pin 38: ADDR0; input. */
  "ADDR0": "38",
  /** Physical pin 39: ADDR1; input. */
  "ADDR1": "39",
  /** Physical pin 40: VCC; power_in. */
  "VCC": "40",
  /** Physical pin 41: SDA; bidirectional. */
  "SDA": "41",
  /** Physical pin 42: SCL; input. */
  "SCL": "42",
  /** Physical pin 43: EN; input. */
  "EN": "43",
  /** Physical pin 44: IREF; passive. */
  "IREF": "44",
  /** Physical pin 45: VCAP; passive. */
  "VCAP": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: GND; passive. */
  "GND_47": "47",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LP8868XQDMT extends Component.withPins({
  /** Physical pin 1: PGND; power_in. */
  "PGND_1": "1",
  /** Physical pin 2: AGND; power_in. */
  "AGND": "2",
  /** Physical pin 3: VIN; power_in. */
  "VIN": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: ADIM/HD; input. */
  "ADIM/HD": "5",
  /** Physical pin 6: PWM/EN; input. */
  "PWM/EN": "6",
  /** Physical pin 7: FAULT; output. */
  "FAULT": "7",
  /** Physical pin 8: TEMP; bidirectional. */
  "TEMP": "8",
  /** Physical pin 9: FSET; bidirectional. */
  "FSET": "9",
  /** Physical pin 10: COMP; bidirectional. */
  "COMP": "10",
  /** Physical pin 11: OVP; input. */
  "OVP": "11",
  /** Physical pin 12: CSN; input. */
  "CSN": "12",
  /** Physical pin 13: CSP; input. */
  "CSP": "13",
  /** Physical pin 14: SW; power_out. */
  "SW": "14",
  /** Physical pin 15: PGND; passive. */
  "PGND_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3465 extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: CTRL; input. */
  "CTRL": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
  /** Physical pin 6: SW; output. */
  "SW": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3465A extends Component.withPins({
  /** Physical pin 1: VOUT; power_out. */
  "VOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: CTRL; input. */
  "CTRL": "4",
  /** Physical pin 5: VIN; power_in. */
  "VIN": "5",
  /** Physical pin 6: SW; output. */
  "SW": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3755xMSE extends Component.withPins({
  /** Physical pin 1: PWMOUT; output. */
  "PWMOUT": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: ISN; input. */
  "ISN": "3",
  /** Physical pin 4: ISP; input. */
  "ISP": "4",
  /** Physical pin 5: VC; output. */
  "VC": "5",
  /** Physical pin 6: CTRL; input. */
  "CTRL": "6",
  /** Physical pin 7: VREF; output. */
  "VREF": "7",
  /** Physical pin 8: PWM; input. */
  "PWM": "8",
  /** Physical pin 9: ~{OPENLED}; open_collector. */
  "~{OPENLED}": "9",
  /** Physical pin 10: SS; input. */
  "SS": "10",
  /** Physical pin 11: RT; input. */
  "RT": "11",
  /** Physical pin 12: ~{SHDN}/UVLO; input. */
  "~{SHDN}/UVLO": "12",
  /** Physical pin 13: INTVCC; power_out. */
  "INTVCC": "13",
  /** Physical pin 14: VIN; power_in. */
  "VIN": "14",
  /** Physical pin 15: SENSE; input. */
  "SENSE": "15",
  /** Physical pin 16: GATE; output. */
  "GATE": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3755xMSE_1 extends Component.withPins({
  /** Physical pin 1: PWMOUT; output. */
  "PWMOUT": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: ISN; input. */
  "ISN": "3",
  /** Physical pin 4: ISP; input. */
  "ISP": "4",
  /** Physical pin 5: VC; output. */
  "VC": "5",
  /** Physical pin 6: CTRL; input. */
  "CTRL": "6",
  /** Physical pin 7: VREF; output. */
  "VREF": "7",
  /** Physical pin 8: PWM; input. */
  "PWM": "8",
  /** Physical pin 9: SYNC; input. */
  "SYNC": "9",
  /** Physical pin 10: SS; input. */
  "SS": "10",
  /** Physical pin 11: RT; input. */
  "RT": "11",
  /** Physical pin 12: ~{SHDN}/UVLO; input. */
  "~{SHDN}/UVLO": "12",
  /** Physical pin 13: INTVCC; power_out. */
  "INTVCC": "13",
  /** Physical pin 14: VIN; power_in. */
  "VIN": "14",
  /** Physical pin 15: SENSE; input. */
  "SENSE": "15",
  /** Physical pin 16: GATE; output. */
  "GATE": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3755xMSE_2 extends Component.withPins({
  /** Physical pin 1: PWMOUT; output. */
  "PWMOUT": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: ISN; input. */
  "ISN": "3",
  /** Physical pin 4: ISP; input. */
  "ISP": "4",
  /** Physical pin 5: VC; output. */
  "VC": "5",
  /** Physical pin 6: CTRL; input. */
  "CTRL": "6",
  /** Physical pin 7: VREF; output. */
  "VREF": "7",
  /** Physical pin 8: PWM; input. */
  "PWM": "8",
  /** Physical pin 9: ~{OPENLED}; open_collector. */
  "~{OPENLED}": "9",
  /** Physical pin 10: SS; input. */
  "SS": "10",
  /** Physical pin 11: RT; input. */
  "RT": "11",
  /** Physical pin 12: ~{SHDN}/UVLO; input. */
  "~{SHDN}/UVLO": "12",
  /** Physical pin 13: INTVCC; power_out. */
  "INTVCC": "13",
  /** Physical pin 14: VIN; power_in. */
  "VIN": "14",
  /** Physical pin 15: SENSE; input. */
  "SENSE": "15",
  /** Physical pin 16: GATE; output. */
  "GATE": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3755xUD extends Component.withPins({
  /** Physical pin 1: VREF; output. */
  "VREF": "1",
  /** Physical pin 2: PWM; input. */
  "PWM": "2",
  /** Physical pin 3: ~{OPENLED}; input. */
  "~{OPENLED}": "3",
  /** Physical pin 4: SS; input. */
  "SS": "4",
  /** Physical pin 5: RT; input. */
  "RT": "5",
  /** Physical pin 6: ~{SHDN}/UVLO; input. */
  "~{SHDN}/UVLO": "6",
  /** Physical pin 7: INTVCC; power_out. */
  "INTVCC": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
  /** Physical pin 9: SENSE; input. */
  "SENSE": "9",
  /** Physical pin 10: GATE; output. */
  "GATE": "10",
  /** Physical pin 11: PWMOUT; output. */
  "PWMOUT": "11",
  /** Physical pin 12: FB; input. */
  "FB": "12",
  /** Physical pin 13: ISN; input. */
  "ISN": "13",
  /** Physical pin 14: ISP; input. */
  "ISP": "14",
  /** Physical pin 15: VC; output. */
  "VC": "15",
  /** Physical pin 16: CTRL; input. */
  "CTRL": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3755xUD_1 extends Component.withPins({
  /** Physical pin 1: VREF; output. */
  "VREF": "1",
  /** Physical pin 2: PWM; input. */
  "PWM": "2",
  /** Physical pin 3: SYNC; input. */
  "SYNC": "3",
  /** Physical pin 4: SS; input. */
  "SS": "4",
  /** Physical pin 5: RT; input. */
  "RT": "5",
  /** Physical pin 6: SHDN/UVLO; input. */
  "SHDN/UVLO": "6",
  /** Physical pin 7: INTVCC; power_out. */
  "INTVCC": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
  /** Physical pin 9: SENSE; input. */
  "SENSE": "9",
  /** Physical pin 10: GATE; output. */
  "GATE": "10",
  /** Physical pin 11: PWMOUT; output. */
  "PWMOUT": "11",
  /** Physical pin 12: FB; input. */
  "FB": "12",
  /** Physical pin 13: ISN; input. */
  "ISN": "13",
  /** Physical pin 14: ISP; input. */
  "ISP": "14",
  /** Physical pin 15: VC; output. */
  "VC": "15",
  /** Physical pin 16: CTRL; input. */
  "CTRL": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3755xUD_2 extends Component.withPins({
  /** Physical pin 1: VREF; output. */
  "VREF": "1",
  /** Physical pin 2: PWM; input. */
  "PWM": "2",
  /** Physical pin 3: ~{OPENLED}; input. */
  "~{OPENLED}": "3",
  /** Physical pin 4: SS; input. */
  "SS": "4",
  /** Physical pin 5: RT; input. */
  "RT": "5",
  /** Physical pin 6: ~{SHDN}/UVLO; input. */
  "~{SHDN}/UVLO": "6",
  /** Physical pin 7: INTVCC; power_out. */
  "INTVCC": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
  /** Physical pin 9: SENSE; input. */
  "SENSE": "9",
  /** Physical pin 10: GATE; output. */
  "GATE": "10",
  /** Physical pin 11: PWMOUT; output. */
  "PWMOUT": "11",
  /** Physical pin 12: FB; input. */
  "FB": "12",
  /** Physical pin 13: ISN; input. */
  "ISN": "13",
  /** Physical pin 14: ISP; input. */
  "ISP": "14",
  /** Physical pin 15: VC; output. */
  "VC": "15",
  /** Physical pin 16: CTRL; input. */
  "CTRL": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3756xMSE extends Component.withPins({
  /** Physical pin 1: PWMOUT; output. */
  "PWMOUT": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: ISN; input. */
  "ISN": "3",
  /** Physical pin 4: ISP; input. */
  "ISP": "4",
  /** Physical pin 5: VC; output. */
  "VC": "5",
  /** Physical pin 6: CTRL; input. */
  "CTRL": "6",
  /** Physical pin 7: VREF; output. */
  "VREF": "7",
  /** Physical pin 8: PWM; input. */
  "PWM": "8",
  /** Physical pin 9: ~{OPENLED}; open_collector. */
  "~{OPENLED}": "9",
  /** Physical pin 10: SS; input. */
  "SS": "10",
  /** Physical pin 11: RT; input. */
  "RT": "11",
  /** Physical pin 12: ~{SHDN}/UVLO; input. */
  "~{SHDN}/UVLO": "12",
  /** Physical pin 13: INTVCC; power_out. */
  "INTVCC": "13",
  /** Physical pin 14: VIN; power_in. */
  "VIN": "14",
  /** Physical pin 15: SENSE; input. */
  "SENSE": "15",
  /** Physical pin 16: GATE; output. */
  "GATE": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3756xMSE_1 extends Component.withPins({
  /** Physical pin 1: PWMOUT; output. */
  "PWMOUT": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: ISN; input. */
  "ISN": "3",
  /** Physical pin 4: ISP; input. */
  "ISP": "4",
  /** Physical pin 5: VC; output. */
  "VC": "5",
  /** Physical pin 6: CTRL; input. */
  "CTRL": "6",
  /** Physical pin 7: VREF; output. */
  "VREF": "7",
  /** Physical pin 8: PWM; input. */
  "PWM": "8",
  /** Physical pin 9: SYNC; input. */
  "SYNC": "9",
  /** Physical pin 10: SS; input. */
  "SS": "10",
  /** Physical pin 11: RT; input. */
  "RT": "11",
  /** Physical pin 12: ~{SHDN}/UVLO; input. */
  "~{SHDN}/UVLO": "12",
  /** Physical pin 13: INTVCC; power_out. */
  "INTVCC": "13",
  /** Physical pin 14: VIN; power_in. */
  "VIN": "14",
  /** Physical pin 15: SENSE; input. */
  "SENSE": "15",
  /** Physical pin 16: GATE; output. */
  "GATE": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3756xMSE_2 extends Component.withPins({
  /** Physical pin 1: PWMOUT; output. */
  "PWMOUT": "1",
  /** Physical pin 2: FB; input. */
  "FB": "2",
  /** Physical pin 3: ISN; input. */
  "ISN": "3",
  /** Physical pin 4: ISP; input. */
  "ISP": "4",
  /** Physical pin 5: VC; output. */
  "VC": "5",
  /** Physical pin 6: CTRL; input. */
  "CTRL": "6",
  /** Physical pin 7: VREF; output. */
  "VREF": "7",
  /** Physical pin 8: PWM; input. */
  "PWM": "8",
  /** Physical pin 9: ~{OPENLED}; open_collector. */
  "~{OPENLED}": "9",
  /** Physical pin 10: SS; input. */
  "SS": "10",
  /** Physical pin 11: RT; input. */
  "RT": "11",
  /** Physical pin 12: ~{SHDN}/UVLO; input. */
  "~{SHDN}/UVLO": "12",
  /** Physical pin 13: INTVCC; power_out. */
  "INTVCC": "13",
  /** Physical pin 14: VIN; power_in. */
  "VIN": "14",
  /** Physical pin 15: SENSE; input. */
  "SENSE": "15",
  /** Physical pin 16: GATE; output. */
  "GATE": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3756xUD extends Component.withPins({
  /** Physical pin 1: VREF; output. */
  "VREF": "1",
  /** Physical pin 2: PWM; input. */
  "PWM": "2",
  /** Physical pin 3: ~{OPENLED}; input. */
  "~{OPENLED}": "3",
  /** Physical pin 4: SS; input. */
  "SS": "4",
  /** Physical pin 5: RT; input. */
  "RT": "5",
  /** Physical pin 6: ~{SHDN}/UVLO; input. */
  "~{SHDN}/UVLO": "6",
  /** Physical pin 7: INTVCC; power_out. */
  "INTVCC": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
  /** Physical pin 9: SENSE; input. */
  "SENSE": "9",
  /** Physical pin 10: GATE; output. */
  "GATE": "10",
  /** Physical pin 11: PWMOUT; output. */
  "PWMOUT": "11",
  /** Physical pin 12: FB; input. */
  "FB": "12",
  /** Physical pin 13: ISN; input. */
  "ISN": "13",
  /** Physical pin 14: ISP; input. */
  "ISP": "14",
  /** Physical pin 15: VC; output. */
  "VC": "15",
  /** Physical pin 16: CTRL; input. */
  "CTRL": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3756xUD_1 extends Component.withPins({
  /** Physical pin 1: VREF; output. */
  "VREF": "1",
  /** Physical pin 2: PWM; input. */
  "PWM": "2",
  /** Physical pin 3: SYNC; input. */
  "SYNC": "3",
  /** Physical pin 4: SS; input. */
  "SS": "4",
  /** Physical pin 5: RT; input. */
  "RT": "5",
  /** Physical pin 6: SHDN/UVLO; input. */
  "SHDN/UVLO": "6",
  /** Physical pin 7: INTVCC; power_out. */
  "INTVCC": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
  /** Physical pin 9: SENSE; input. */
  "SENSE": "9",
  /** Physical pin 10: GATE; output. */
  "GATE": "10",
  /** Physical pin 11: PWMOUT; output. */
  "PWMOUT": "11",
  /** Physical pin 12: FB; input. */
  "FB": "12",
  /** Physical pin 13: ISN; input. */
  "ISN": "13",
  /** Physical pin 14: ISP; input. */
  "ISP": "14",
  /** Physical pin 15: VC; output. */
  "VC": "15",
  /** Physical pin 16: CTRL; input. */
  "CTRL": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT3756xUD_2 extends Component.withPins({
  /** Physical pin 1: VREF; output. */
  "VREF": "1",
  /** Physical pin 2: PWM; input. */
  "PWM": "2",
  /** Physical pin 3: ~{OPENLED}; input. */
  "~{OPENLED}": "3",
  /** Physical pin 4: SS; input. */
  "SS": "4",
  /** Physical pin 5: RT; input. */
  "RT": "5",
  /** Physical pin 6: ~{SHDN}/UVLO; input. */
  "~{SHDN}/UVLO": "6",
  /** Physical pin 7: INTVCC; power_out. */
  "INTVCC": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
  /** Physical pin 9: SENSE; input. */
  "SENSE": "9",
  /** Physical pin 10: GATE; output. */
  "GATE": "10",
  /** Physical pin 11: PWMOUT; output. */
  "PWMOUT": "11",
  /** Physical pin 12: FB; input. */
  "FB": "12",
  /** Physical pin 13: ISN; input. */
  "ISN": "13",
  /** Physical pin 14: ISP; input. */
  "ISP": "14",
  /** Physical pin 15: VC; output. */
  "VC": "15",
  /** Physical pin 16: CTRL; input. */
  "CTRL": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LT8391xFE extends Component.withPins({
  /** Physical pin 1: BG1; output. */
  "BG1": "1",
  /** Physical pin 2: BST1; passive. */
  "BST1": "2",
  /** Physical pin 3: SW1; passive. */
  "SW1": "3",
  /** Physical pin 4: TG1; output. */
  "TG1": "4",
  /** Physical pin 5: LSP; input. */
  "LSP": "5",
  /** Physical pin 6: LSN; input. */
  "LSN": "6",
  /** Physical pin 7: VIN; power_in. */
  "VIN": "7",
  /** Physical pin 8: INTVCC; power_out. */
  "INTVCC": "8",
  /** Physical pin 9: EN/UVLO; input. */
  "EN/UVLO": "9",
  /** Physical pin 10: RP; input. */
  "RP": "10",
  /** Physical pin 11: PWM; input. */
  "PWM": "11",
  /** Physical pin 12: VREF; power_out. */
  "VREF": "12",
  /** Physical pin 13: CTRL1; input. */
  "CTRL1": "13",
  /** Physical pin 14: ISP; input. */
  "ISP": "14",
  /** Physical pin 15: ISN; input. */
  "ISN": "15",
  /** Physical pin 16: CTRL2; input. */
  "CTRL2": "16",
  /** Physical pin 17: ~{FAULT}; open_collector. */
  "~{FAULT}": "17",
  /** Physical pin 18: SS; passive. */
  "SS": "18",
  /** Physical pin 19: FB; input. */
  "FB": "19",
  /** Physical pin 20: VC; passive. */
  "VC": "20",
  /** Physical pin 21: RT; passive. */
  "RT": "21",
  /** Physical pin 22: SYNC/SPRD; input. */
  "SYNC/SPRD": "22",
  /** Physical pin 23: PWMTG; output. */
  "PWMTG": "23",
  /** Physical pin 24: VOUT; power_in. */
  "VOUT": "24",
  /** Physical pin 25: TG2; output. */
  "TG2": "25",
  /** Physical pin 26: SW2; passive. */
  "SW2": "26",
  /** Physical pin 27: BST2; passive. */
  "BST2": "27",
  /** Physical pin 28: BG2; output. */
  "BG2": "28",
  /** Physical pin 29: GND; power_in. */
  "GND": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX7219 extends Component.withPins({
  /** Physical pin 1: DIN; input. */
  "DIN": "1",
  /** Physical pin 2: DIG_0; output. */
  "DIG_0": "2",
  /** Physical pin 3: DIG_4; output. */
  "DIG_4": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: DIG_6; output. */
  "DIG_6": "5",
  /** Physical pin 6: DIG_2; output. */
  "DIG_2": "6",
  /** Physical pin 7: DIG_3; output. */
  "DIG_3": "7",
  /** Physical pin 8: DIG_7; output. */
  "DIG_7": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: DIG_5; output. */
  "DIG_5": "10",
  /** Physical pin 11: DIG_1; output. */
  "DIG_1": "11",
  /** Physical pin 12: LOAD; input. */
  "LOAD": "12",
  /** Physical pin 13: CLK; input. */
  "CLK": "13",
  /** Physical pin 14: SEG_A; output. */
  "SEG_A": "14",
  /** Physical pin 15: SEG_F; output. */
  "SEG_F": "15",
  /** Physical pin 16: SEG_B; output. */
  "SEG_B": "16",
  /** Physical pin 17: SEG_G; output. */
  "SEG_G": "17",
  /** Physical pin 18: ISET; input. */
  "ISET": "18",
  /** Physical pin 19: V+; power_in. */
  "V+": "19",
  /** Physical pin 20: SEG_C; output. */
  "SEG_C": "20",
  /** Physical pin 21: SEG_E; output. */
  "SEG_E": "21",
  /** Physical pin 22: SEG_DP; output. */
  "SEG_DP": "22",
  /** Physical pin 23: SEG_D; output. */
  "SEG_D": "23",
  /** Physical pin 24: DOUT; output. */
  "DOUT": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX7221xNG extends Component.withPins({
  /** Physical pin 1: DIN; input. */
  "DIN": "1",
  /** Physical pin 2: DIG_0; open_collector. */
  "DIG_0": "2",
  /** Physical pin 3: DIG_4; open_collector. */
  "DIG_4": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: DIG_6; open_collector. */
  "DIG_6": "5",
  /** Physical pin 6: DIG_2; open_collector. */
  "DIG_2": "6",
  /** Physical pin 7: DIG_3; open_collector. */
  "DIG_3": "7",
  /** Physical pin 8: DIG_7; open_collector. */
  "DIG_7": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: DIG_5; open_collector. */
  "DIG_5": "10",
  /** Physical pin 11: DIG_1; open_collector. */
  "DIG_1": "11",
  /** Physical pin 12: ~{CS}; input. */
  "~{CS}": "12",
  /** Physical pin 13: CLK; input. */
  "CLK": "13",
  /** Physical pin 14: SEG_A; open_emitter. */
  "SEG_A": "14",
  /** Physical pin 15: SEG_F; open_emitter. */
  "SEG_F": "15",
  /** Physical pin 16: SEG_B; open_emitter. */
  "SEG_B": "16",
  /** Physical pin 17: SEG_G; open_emitter. */
  "SEG_G": "17",
  /** Physical pin 18: ISET; input. */
  "ISET": "18",
  /** Physical pin 19: V+; power_in. */
  "V+": "19",
  /** Physical pin 20: SEG_C; open_emitter. */
  "SEG_C": "20",
  /** Physical pin 21: SEG_E; open_emitter. */
  "SEG_E": "21",
  /** Physical pin 22: SEG_DP; open_emitter. */
  "SEG_DP": "22",
  /** Physical pin 23: SEG_D; open_emitter. */
  "SEG_D": "23",
  /** Physical pin 24: DOUT; output. */
  "DOUT": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX7221xRG extends Component.withPins({
  /** Physical pin 1: DIN; input. */
  "DIN": "1",
  /** Physical pin 2: DIG_0; open_collector. */
  "DIG_0": "2",
  /** Physical pin 3: DIG_4; open_collector. */
  "DIG_4": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: DIG_6; open_collector. */
  "DIG_6": "5",
  /** Physical pin 6: DIG_2; open_collector. */
  "DIG_2": "6",
  /** Physical pin 7: DIG_3; open_collector. */
  "DIG_3": "7",
  /** Physical pin 8: DIG_7; open_collector. */
  "DIG_7": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: DIG_5; open_collector. */
  "DIG_5": "10",
  /** Physical pin 11: DIG_1; open_collector. */
  "DIG_1": "11",
  /** Physical pin 12: ~{CS}; input. */
  "~{CS}": "12",
  /** Physical pin 13: CLK; input. */
  "CLK": "13",
  /** Physical pin 14: SEG_A; open_emitter. */
  "SEG_A": "14",
  /** Physical pin 15: SEG_F; open_emitter. */
  "SEG_F": "15",
  /** Physical pin 16: SEG_B; open_emitter. */
  "SEG_B": "16",
  /** Physical pin 17: SEG_G; open_emitter. */
  "SEG_G": "17",
  /** Physical pin 18: ISET; input. */
  "ISET": "18",
  /** Physical pin 19: V+; power_in. */
  "V+": "19",
  /** Physical pin 20: SEG_C; open_emitter. */
  "SEG_C": "20",
  /** Physical pin 21: SEG_E; open_emitter. */
  "SEG_E": "21",
  /** Physical pin 22: SEG_DP; open_emitter. */
  "SEG_DP": "22",
  /** Physical pin 23: SEG_D; open_emitter. */
  "SEG_D": "23",
  /** Physical pin 24: DOUT; output. */
  "DOUT": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX7221xWG extends Component.withPins({
  /** Physical pin 1: DIN; input. */
  "DIN": "1",
  /** Physical pin 2: DIG_0; open_collector. */
  "DIG_0": "2",
  /** Physical pin 3: DIG_4; open_collector. */
  "DIG_4": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: DIG_6; open_collector. */
  "DIG_6": "5",
  /** Physical pin 6: DIG_2; open_collector. */
  "DIG_2": "6",
  /** Physical pin 7: DIG_3; open_collector. */
  "DIG_3": "7",
  /** Physical pin 8: DIG_7; open_collector. */
  "DIG_7": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: DIG_5; open_collector. */
  "DIG_5": "10",
  /** Physical pin 11: DIG_1; open_collector. */
  "DIG_1": "11",
  /** Physical pin 12: ~{CS}; input. */
  "~{CS}": "12",
  /** Physical pin 13: CLK; input. */
  "CLK": "13",
  /** Physical pin 14: SEG_A; open_emitter. */
  "SEG_A": "14",
  /** Physical pin 15: SEG_F; open_emitter. */
  "SEG_F": "15",
  /** Physical pin 16: SEG_B; open_emitter. */
  "SEG_B": "16",
  /** Physical pin 17: SEG_G; open_emitter. */
  "SEG_G": "17",
  /** Physical pin 18: ISET; input. */
  "ISET": "18",
  /** Physical pin 19: V+; power_in. */
  "V+": "19",
  /** Physical pin 20: SEG_C; open_emitter. */
  "SEG_C": "20",
  /** Physical pin 21: SEG_E; open_emitter. */
  "SEG_E": "21",
  /** Physical pin 22: SEG_DP; open_emitter. */
  "SEG_DP": "22",
  /** Physical pin 23: SEG_D; open_emitter. */
  "SEG_D": "23",
  /** Physical pin 24: DOUT; output. */
  "DOUT": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MBI5252GFN extends Component.withPins({
  /** Physical pin 1: LE; input. */
  "LE": "1",
  /** Physical pin 2: ~{OUT0}; open_collector. */
  "~{OUT0}": "2",
  /** Physical pin 3: ~{OUT1}; open_collector. */
  "~{OUT1}": "3",
  /** Physical pin 4: ~{OUT2}; open_collector. */
  "~{OUT2}": "4",
  /** Physical pin 5: ~{OUT3}; open_collector. */
  "~{OUT3}": "5",
  /** Physical pin 6: ~{OUT4}; open_collector. */
  "~{OUT4}": "6",
  /** Physical pin 7: ~{OUT5}; open_collector. */
  "~{OUT5}": "7",
  /** Physical pin 8: ~{OUT6}; open_collector. */
  "~{OUT6}": "8",
  /** Physical pin 9: ~{OUT7}; open_collector. */
  "~{OUT7}": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: ~{OUT8}; open_collector. */
  "~{OUT8}": "11",
  /** Physical pin 12: ~{OUT9}; open_collector. */
  "~{OUT9}": "12",
  /** Physical pin 13: ~{OUT10}; open_collector. */
  "~{OUT10}": "13",
  /** Physical pin 14: ~{OUT11}; open_collector. */
  "~{OUT11}": "14",
  /** Physical pin 15: ~{OUT12}; open_collector. */
  "~{OUT12}": "15",
  /** Physical pin 16: ~{OUT13}; open_collector. */
  "~{OUT13}": "16",
  /** Physical pin 17: ~{OUT14}; open_collector. */
  "~{OUT14}": "17",
  /** Physical pin 18: ~{OUT15}; open_collector. */
  "~{OUT15}": "18",
  /** Physical pin 19: SDO; output. */
  "SDO": "19",
  /** Physical pin 20: GCLK; input. */
  "GCLK": "20",
  /** Physical pin 21: R-EXT; passive. */
  "R-EXT": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD": "22",
  /** Physical pin 23: SDI; input. */
  "SDI": "23",
  /** Physical pin 24: DCLK; input. */
  "DCLK": "24",
  /** Physical pin 25: PAD; power_in. */
  "PAD": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MBI5252GP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: DCLK; input. */
  "DCLK": "3",
  /** Physical pin 4: LE; input. */
  "LE": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OUT8}; open_collector. */
  "~{OUT8}": "13",
  /** Physical pin 14: ~{OUT9}; open_collector. */
  "~{OUT9}": "14",
  /** Physical pin 15: ~{OUT10}; open_collector. */
  "~{OUT10}": "15",
  /** Physical pin 16: ~{OUT11}; open_collector. */
  "~{OUT11}": "16",
  /** Physical pin 17: ~{OUT12}; open_collector. */
  "~{OUT12}": "17",
  /** Physical pin 18: ~{OUT13}; open_collector. */
  "~{OUT13}": "18",
  /** Physical pin 19: ~{OUT14}; open_collector. */
  "~{OUT14}": "19",
  /** Physical pin 20: ~{OUT15}; open_collector. */
  "~{OUT15}": "20",
  /** Physical pin 21: GCLK; input. */
  "GCLK": "21",
  /** Physical pin 22: SDO; output. */
  "SDO": "22",
  /** Physical pin 23: R-EXT; passive. */
  "R-EXT": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC14495P extends Component.withPins({
  /** Physical pin 1: e; output. */
  "e": "1",
  /** Physical pin 2: f; output. */
  "f": "2",
  /** Physical pin 3: g; output. */
  "g": "3",
  /** Physical pin 4: h+i; output. */
  "h+i": "4",
  /** Physical pin 5: A; input. */
  "A": "5",
  /** Physical pin 6: B; input. */
  "B": "6",
  /** Physical pin 7: ~{CLK}; input. */
  "~{CLK}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: C; input. */
  "C": "9",
  /** Physical pin 10: D; input. */
  "D": "10",
  /** Physical pin 11: ~{VCR}; input. */
  "~{VCR}": "11",
  /** Physical pin 12: a; output. */
  "a": "12",
  /** Physical pin 13: b; output. */
  "b": "13",
  /** Physical pin 14: c; output. */
  "c": "14",
  /** Physical pin 15: d; output. */
  "d": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP1643xMS extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: VFB; input. */
  "VFB": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: VOUT; power_out. */
  "VOUT": "4",
  /** Physical pin 5: SW; passive. */
  "SW": "5",
  /** Physical pin 6: PGND; power_in. */
  "PGND": "6",
  /** Physical pin 7: SGND; power_in. */
  "SGND": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP1662_xOT extends Component.withPins({
  /** Physical pin 1: SW; power_out. */
  "SW": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: V_{FB}; input. */
  "V_{FB}": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: V_{IN}; power_in. */
  "V_{IN}": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MP3362GJ extends Component.withPins({
  /** Physical pin 1: SW; passive. */
  "SW": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: COMP; passive. */
  "COMP": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: OSC; input. */
  "OSC": "5",
  /** Physical pin 6: FB; passive. */
  "FB": "6",
  /** Physical pin 7: OVP; input. */
  "OVP": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MPQ2483DQ extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS_2": "2",
  /** Physical pin 3: OVP; input. */
  "OVP": "3",
  /** Physical pin 4: FB; input. */
  "FB": "4",
  /** Physical pin 5: COMP; input. */
  "COMP": "5",
  /** Physical pin 6: RSET; input. */
  "RSET": "6",
  /** Physical pin 7: EN/DIM; input. */
  "EN/DIM": "7",
  /** Physical pin 8: INGND; power_in. */
  "INGND": "8",
  /** Physical pin 9: BST; output. */
  "BST": "9",
  /** Physical pin 10: SW; output. */
  "SW": "10",
  /** Physical pin 11: VSS; passive. */
  "VSS_11": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MPQ3362GJ_AEC1 extends Component.withPins({
  /** Physical pin 1: SW; passive. */
  "SW": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: COMP; passive. */
  "COMP": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: OSC; input. */
  "OSC": "5",
  /** Physical pin 6: FB; passive. */
  "FB": "6",
  /** Physical pin 7: OVP; input. */
  "OVP": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCP5623DTBR2G extends Component.withPins({
  /** Physical pin 1: IC; passive. */
  "IC_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: LED3; open_collector. */
  "LED3": "3",
  /** Physical pin 4: LED2; open_collector. */
  "LED2": "4",
  /** Physical pin 5: LED1; open_collector. */
  "LED1": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: I_{REF}; passive. */
  "I_{REF}": "10",
  /** Physical pin 11: SCL; input. */
  "SCL": "11",
  /** Physical pin 12: V_{DET}; input. */
  "V_{DET}": "12",
  /** Physical pin 13: V_{BAT}; power_in. */
  "V_{BAT}": "13",
  /** Physical pin 14: IC; passive. */
  "IC_14": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NCR401U extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IOUT; output. */
  "IOUT_2": "2",
  /** Physical pin 3: IOUT; passive. */
  "IOUT_3": "3",
  /** Physical pin 4: VS; power_in. */
  "VS": "4",
  /** Physical pin 5: IOUT; passive. */
  "IOUT_5": "5",
  /** Physical pin 6: REXT; passive. */
  "REXT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAM2841G extends Component.withPins({
  /** Physical pin 1: PGND; power_in. */
  "PGND": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: ENA; input. */
  "ENA": "3",
  /** Physical pin 4: Comp; passive. */
  "Comp": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: FB; input. */
  "FB": "6",
  /** Physical pin 7: OVP; input. */
  "OVP": "7",
  /** Physical pin 8: SW; power_out. */
  "SW": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAM2841S extends Component.withPins({
  /** Physical pin 1: PGND; power_in. */
  "PGND": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: ENA; input. */
  "ENA": "3",
  /** Physical pin 4: Comp; passive. */
  "Comp": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: FB; input. */
  "FB": "6",
  /** Physical pin 7: OVP; input. */
  "OVP": "7",
  /** Physical pin 8: SW; power_out. */
  "SW": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9531PW extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: LED0; open_collector. */
  "LED0": "4",
  /** Physical pin 5: LED1; open_collector. */
  "LED1": "5",
  /** Physical pin 6: LED2; open_collector. */
  "LED2": "6",
  /** Physical pin 7: LED3; open_collector. */
  "LED3": "7",
  /** Physical pin 8: V_{SS}; power_in. */
  "V_{SS}": "8",
  /** Physical pin 9: LED4; open_collector. */
  "LED4": "9",
  /** Physical pin 10: LED5; open_collector. */
  "LED5": "10",
  /** Physical pin 11: LED6; open_collector. */
  "LED6": "11",
  /** Physical pin 12: LED7; open_collector. */
  "LED7": "12",
  /** Physical pin 13: ~{RESET}; input. */
  "~{RESET}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: V_{DD}; power_in. */
  "V_{DD}": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9635 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: A3; input. */
  "A3": "4",
  /** Physical pin 5: A4; input. */
  "A4": "5",
  /** Physical pin 6: LED0; output. */
  "LED0": "6",
  /** Physical pin 7: LED1; output. */
  "LED1": "7",
  /** Physical pin 8: LED2; output. */
  "LED2": "8",
  /** Physical pin 9: LED3; output. */
  "LED3": "9",
  /** Physical pin 10: LED4; output. */
  "LED4": "10",
  /** Physical pin 11: LED5; output. */
  "LED5": "11",
  /** Physical pin 12: LED6; output. */
  "LED6": "12",
  /** Physical pin 13: LED7; output. */
  "LED7": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS": "14",
  /** Physical pin 15: LED8; output. */
  "LED8": "15",
  /** Physical pin 16: LED9; output. */
  "LED9": "16",
  /** Physical pin 17: LED10; output. */
  "LED10": "17",
  /** Physical pin 18: LED11; output. */
  "LED11": "18",
  /** Physical pin 19: LED12; output. */
  "LED12": "19",
  /** Physical pin 20: LED13; output. */
  "LED13": "20",
  /** Physical pin 21: LED14; output. */
  "LED14": "21",
  /** Physical pin 22: LED15; output. */
  "LED15": "22",
  /** Physical pin 23: ~{OE}; input. */
  "~{OE}": "23",
  /** Physical pin 24: A5; input. */
  "A5": "24",
  /** Physical pin 25: A6; input. */
  "A6": "25",
  /** Physical pin 26: SCL; input. */
  "SCL": "26",
  /** Physical pin 27: SDA; bidirectional. */
  "SDA": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9685BS extends Component.withPins({
  /** Physical pin 1: A3; input. */
  "A3": "1",
  /** Physical pin 2: A4; input. */
  "A4": "2",
  /** Physical pin 3: LED0; output. */
  "LED0": "3",
  /** Physical pin 4: LED1; output. */
  "LED1": "4",
  /** Physical pin 5: LED2; output. */
  "LED2": "5",
  /** Physical pin 6: LED3; output. */
  "LED3": "6",
  /** Physical pin 7: LED4; output. */
  "LED4": "7",
  /** Physical pin 8: LED5; output. */
  "LED5": "8",
  /** Physical pin 9: LED6; output. */
  "LED6": "9",
  /** Physical pin 10: LED7; output. */
  "LED7": "10",
  /** Physical pin 11: VSS; power_in. */
  "VSS_11": "11",
  /** Physical pin 12: LED8; output. */
  "LED8": "12",
  /** Physical pin 13: LED9; output. */
  "LED9": "13",
  /** Physical pin 14: LED10; output. */
  "LED10": "14",
  /** Physical pin 15: LED11; output. */
  "LED11": "15",
  /** Physical pin 16: LED12; output. */
  "LED12": "16",
  /** Physical pin 17: LED13; output. */
  "LED13": "17",
  /** Physical pin 18: LED14; output. */
  "LED14": "18",
  /** Physical pin 19: LED15; output. */
  "LED15": "19",
  /** Physical pin 20: ~{OE}; input. */
  "~{OE}": "20",
  /** Physical pin 21: A5; input. */
  "A5": "21",
  /** Physical pin 22: EXTCLK; input. */
  "EXTCLK": "22",
  /** Physical pin 23: SCL; input. */
  "SCL": "23",
  /** Physical pin 24: SDA; bidirectional. */
  "SDA": "24",
  /** Physical pin 25: VDD; power_in. */
  "VDD": "25",
  /** Physical pin 26: A0; input. */
  "A0": "26",
  /** Physical pin 27: A1; input. */
  "A1": "27",
  /** Physical pin 28: A2; input. */
  "A2": "28",
  /** Physical pin 29: VSS; power_in. */
  "VSS_29": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9685PW extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: A3; input. */
  "A3": "4",
  /** Physical pin 5: A4; input. */
  "A4": "5",
  /** Physical pin 6: LED0; output. */
  "LED0": "6",
  /** Physical pin 7: LED1; output. */
  "LED1": "7",
  /** Physical pin 8: LED2; output. */
  "LED2": "8",
  /** Physical pin 9: LED3; output. */
  "LED3": "9",
  /** Physical pin 10: LED4; output. */
  "LED4": "10",
  /** Physical pin 11: LED5; output. */
  "LED5": "11",
  /** Physical pin 12: LED6; output. */
  "LED6": "12",
  /** Physical pin 13: LED7; output. */
  "LED7": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS": "14",
  /** Physical pin 15: LED8; output. */
  "LED8": "15",
  /** Physical pin 16: LED9; output. */
  "LED9": "16",
  /** Physical pin 17: LED10; output. */
  "LED10": "17",
  /** Physical pin 18: LED11; output. */
  "LED11": "18",
  /** Physical pin 19: LED12; output. */
  "LED12": "19",
  /** Physical pin 20: LED13; output. */
  "LED13": "20",
  /** Physical pin 21: LED14; output. */
  "LED14": "21",
  /** Physical pin 22: LED15; output. */
  "LED15": "22",
  /** Physical pin 23: ~{OE}; input. */
  "~{OE}": "23",
  /** Physical pin 24: A5; input. */
  "A5": "24",
  /** Physical pin 25: EXTCLK; input. */
  "EXTCLK": "25",
  /** Physical pin 26: SCL; input. */
  "SCL": "26",
  /** Physical pin 27: SDA; bidirectional. */
  "SDA": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9745BTW extends Component.withPins({
  /** Physical pin 1: REXT; input. */
  "REXT": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}_2": "2",
  /** Physical pin 3: SDO; output. */
  "SDO": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: ~{OE}; input. */
  "~{OE}": "5",
  /** Physical pin 6: LED0; open_collector. */
  "LED0": "6",
  /** Physical pin 7: LED1; open_collector. */
  "LED1": "7",
  /** Physical pin 8: LED2; open_collector. */
  "LED2": "8",
  /** Physical pin 9: LED3; open_collector. */
  "LED3": "9",
  /** Physical pin 10: V_{SS}; passive. */
  "V_{SS}_10": "10",
  /** Physical pin 11: LED4; open_collector. */
  "LED4": "11",
  /** Physical pin 12: LED5; open_collector. */
  "LED5": "12",
  /** Physical pin 13: LED6; open_collector. */
  "LED6": "13",
  /** Physical pin 14: LED7; open_collector. */
  "LED7": "14",
  /** Physical pin 15: LED8; open_collector. */
  "LED8": "15",
  /** Physical pin 16: LED9; open_collector. */
  "LED9": "16",
  /** Physical pin 17: LED10; open_collector. */
  "LED10": "17",
  /** Physical pin 18: LED11; open_collector. */
  "LED11": "18",
  /** Physical pin 19: V_{SS}; passive. */
  "V_{SS}_19": "19",
  /** Physical pin 20: LED12; open_collector. */
  "LED12": "20",
  /** Physical pin 21: LED13; open_collector. */
  "LED13": "21",
  /** Physical pin 22: LED14; open_collector. */
  "LED14": "22",
  /** Physical pin 23: LED15; open_collector. */
  "LED15": "23",
  /** Physical pin 24: V_{SS}; passive. */
  "V_{SS}_24": "24",
  /** Physical pin 25: ~{RESET}; input. */
  "~{RESET}": "25",
  /** Physical pin 26: SCLK; input. */
  "SCLK": "26",
  /** Physical pin 27: SDI; input. */
  "SDI": "27",
  /** Physical pin 28: V_{DD}; power_in. */
  "V_{DD}": "28",
  /** Physical pin 29: V_{SS}; passive. */
  "V_{SS}_29": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RCD_24 extends Component.withPins({
  /** Physical pin 1: +Vin; power_in. */
  "+Vin": "1",
  /** Physical pin 2: Analogue_Dimming; passive. */
  "Analogue_Dimming": "2",
  /** Physical pin 3: PWM/ON/OFF; passive. */
  "PWM/ON/OFF": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: -Vout; power_out. */
  "-Vout": "5",
  /** Physical pin 6: +Vout; power_out. */
  "+Vout": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ST1CC40DR extends Component.withPins({
  /** Physical pin 1: SW; output. */
  "SW": "1",
  /** Physical pin 2: PGND; power_out. */
  "PGND": "2",
  /** Physical pin 3: VINA; power_in. */
  "VINA": "3",
  /** Physical pin 4: INH; input. */
  "INH": "4",
  /** Physical pin 5: FB; input. */
  "FB": "5",
  /** Physical pin 6: AGND; power_in. */
  "AGND": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: VINSW; power_in. */
  "VINSW": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ST1CC40PUR extends Component.withPins({
  /** Physical pin 1: VINA; power_in. */
  "VINA": "1",
  /** Physical pin 2: INH; input. */
  "INH": "2",
  /** Physical pin 3: FB; input. */
  "FB": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: VINSW; power_in. */
  "VINSW": "6",
  /** Physical pin 7: SW; output. */
  "SW": "7",
  /** Physical pin 8: PGND; power_out. */
  "PGND": "8",
  /** Physical pin 9: PAD; passive. */
  "PAD": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STP08CP05B extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE; input. */
  "LE": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OE}; input. */
  "~{OE}": "13",
  /** Physical pin 14: SDO; output. */
  "SDO": "14",
  /** Physical pin 15: R-EXT; output. */
  "R-EXT": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STP08CP05M extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE; input. */
  "LE": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OE}; input. */
  "~{OE}": "13",
  /** Physical pin 14: SDO; output. */
  "SDO": "14",
  /** Physical pin 15: R-EXT; output. */
  "R-EXT": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STP08CP05T extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE; input. */
  "LE": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OE}; input. */
  "~{OE}": "13",
  /** Physical pin 14: SDO; output. */
  "SDO": "14",
  /** Physical pin 15: R-EXT; output. */
  "R-EXT": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STP08CP05XT extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE; input. */
  "LE": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OE}; input. */
  "~{OE}": "13",
  /** Physical pin 14: SDO; output. */
  "SDO": "14",
  /** Physical pin 15: R-EXT; output. */
  "R-EXT": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
  /** Physical pin 17: EPAD; passive. */
  "EPAD": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STP16CP05M extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE/DM1; input. */
  "LE/DM1": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OUT8}; open_collector. */
  "~{OUT8}": "13",
  /** Physical pin 14: ~{OUT9}; open_collector. */
  "~{OUT9}": "14",
  /** Physical pin 15: ~{OUT10}; open_collector. */
  "~{OUT10}": "15",
  /** Physical pin 16: ~{OUT11}; open_collector. */
  "~{OUT11}": "16",
  /** Physical pin 17: ~{OUT12}; open_collector. */
  "~{OUT12}": "17",
  /** Physical pin 18: ~{OUT13}; open_collector. */
  "~{OUT13}": "18",
  /** Physical pin 19: ~{OUT14}; open_collector. */
  "~{OUT14}": "19",
  /** Physical pin 20: ~{OUT15}; open_collector. */
  "~{OUT15}": "20",
  /** Physical pin 21: ~{OE/DM2}; input. */
  "~{OE/DM2}": "21",
  /** Physical pin 22: SDO; output. */
  "SDO": "22",
  /** Physical pin 23: R-EXT; output. */
  "R-EXT": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STP16CP05P extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE/DM1; input. */
  "LE/DM1": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OUT8}; open_collector. */
  "~{OUT8}": "13",
  /** Physical pin 14: ~{OUT9}; open_collector. */
  "~{OUT9}": "14",
  /** Physical pin 15: ~{OUT10}; open_collector. */
  "~{OUT10}": "15",
  /** Physical pin 16: ~{OUT11}; open_collector. */
  "~{OUT11}": "16",
  /** Physical pin 17: ~{OUT12}; open_collector. */
  "~{OUT12}": "17",
  /** Physical pin 18: ~{OUT13}; open_collector. */
  "~{OUT13}": "18",
  /** Physical pin 19: ~{OUT14}; open_collector. */
  "~{OUT14}": "19",
  /** Physical pin 20: ~{OUT15}; open_collector. */
  "~{OUT15}": "20",
  /** Physical pin 21: ~{OE/DM2}; input. */
  "~{OE/DM2}": "21",
  /** Physical pin 22: SDO; output. */
  "SDO": "22",
  /** Physical pin 23: R-EXT; output. */
  "R-EXT": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STP16CP05T extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE/DM1; input. */
  "LE/DM1": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OUT8}; open_collector. */
  "~{OUT8}": "13",
  /** Physical pin 14: ~{OUT9}; open_collector. */
  "~{OUT9}": "14",
  /** Physical pin 15: ~{OUT10}; open_collector. */
  "~{OUT10}": "15",
  /** Physical pin 16: ~{OUT11}; open_collector. */
  "~{OUT11}": "16",
  /** Physical pin 17: ~{OUT12}; open_collector. */
  "~{OUT12}": "17",
  /** Physical pin 18: ~{OUT13}; open_collector. */
  "~{OUT13}": "18",
  /** Physical pin 19: ~{OUT14}; open_collector. */
  "~{OUT14}": "19",
  /** Physical pin 20: ~{OUT15}; open_collector. */
  "~{OUT15}": "20",
  /** Physical pin 21: ~{OE/DM2}; input. */
  "~{OE/DM2}": "21",
  /** Physical pin 22: SDO; output. */
  "SDO": "22",
  /** Physical pin 23: R-EXT; output. */
  "R-EXT": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STP16CP05XT extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE/DM1; input. */
  "LE/DM1": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OUT8}; open_collector. */
  "~{OUT8}": "13",
  /** Physical pin 14: ~{OUT9}; open_collector. */
  "~{OUT9}": "14",
  /** Physical pin 15: ~{OUT10}; open_collector. */
  "~{OUT10}": "15",
  /** Physical pin 16: ~{OUT11}; open_collector. */
  "~{OUT11}": "16",
  /** Physical pin 17: ~{OUT12}; open_collector. */
  "~{OUT12}": "17",
  /** Physical pin 18: ~{OUT13}; open_collector. */
  "~{OUT13}": "18",
  /** Physical pin 19: ~{OUT14}; open_collector. */
  "~{OUT14}": "19",
  /** Physical pin 20: ~{OUT15}; open_collector. */
  "~{OUT15}": "20",
  /** Physical pin 21: ~{OE/DM2}; input. */
  "~{OE/DM2}": "21",
  /** Physical pin 22: SDO; output. */
  "SDO": "22",
  /** Physical pin 23: R-EXT; output. */
  "R-EXT": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
  /** Physical pin 25: EPAD; passive. */
  "EPAD": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STP16CPC26T extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE; input. */
  "LE": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OUT8}; open_collector. */
  "~{OUT8}": "13",
  /** Physical pin 14: ~{OUT9}; open_collector. */
  "~{OUT9}": "14",
  /** Physical pin 15: ~{OUT10}; open_collector. */
  "~{OUT10}": "15",
  /** Physical pin 16: ~{OUT11}; open_collector. */
  "~{OUT11}": "16",
  /** Physical pin 17: ~{OUT12}; open_collector. */
  "~{OUT12}": "17",
  /** Physical pin 18: ~{OUT13}; open_collector. */
  "~{OUT13}": "18",
  /** Physical pin 19: ~{OUT14}; open_collector. */
  "~{OUT14}": "19",
  /** Physical pin 20: ~{OUT15}; open_collector. */
  "~{OUT15}": "20",
  /** Physical pin 21: ~{OE}; input. */
  "~{OE}": "21",
  /** Physical pin 22: SDO; output. */
  "SDO": "22",
  /** Physical pin 23: R-EXT; output. */
  "R-EXT": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STP16CPC26M extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE; input. */
  "LE": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OUT8}; open_collector. */
  "~{OUT8}": "13",
  /** Physical pin 14: ~{OUT9}; open_collector. */
  "~{OUT9}": "14",
  /** Physical pin 15: ~{OUT10}; open_collector. */
  "~{OUT10}": "15",
  /** Physical pin 16: ~{OUT11}; open_collector. */
  "~{OUT11}": "16",
  /** Physical pin 17: ~{OUT12}; open_collector. */
  "~{OUT12}": "17",
  /** Physical pin 18: ~{OUT13}; open_collector. */
  "~{OUT13}": "18",
  /** Physical pin 19: ~{OUT14}; open_collector. */
  "~{OUT14}": "19",
  /** Physical pin 20: ~{OUT15}; open_collector. */
  "~{OUT15}": "20",
  /** Physical pin 21: ~{OE}; input. */
  "~{OE}": "21",
  /** Physical pin 22: SDO; output. */
  "SDO": "22",
  /** Physical pin 23: R-EXT; output. */
  "R-EXT": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STP16CPC26P extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE; input. */
  "LE": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OUT8}; open_collector. */
  "~{OUT8}": "13",
  /** Physical pin 14: ~{OUT9}; open_collector. */
  "~{OUT9}": "14",
  /** Physical pin 15: ~{OUT10}; open_collector. */
  "~{OUT10}": "15",
  /** Physical pin 16: ~{OUT11}; open_collector. */
  "~{OUT11}": "16",
  /** Physical pin 17: ~{OUT12}; open_collector. */
  "~{OUT12}": "17",
  /** Physical pin 18: ~{OUT13}; open_collector. */
  "~{OUT13}": "18",
  /** Physical pin 19: ~{OUT14}; open_collector. */
  "~{OUT14}": "19",
  /** Physical pin 20: ~{OUT15}; open_collector. */
  "~{OUT15}": "20",
  /** Physical pin 21: ~{OE}; input. */
  "~{OE}": "21",
  /** Physical pin 22: SDO; output. */
  "SDO": "22",
  /** Physical pin 23: R-EXT; output. */
  "R-EXT": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STP16CPC26X extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE; input. */
  "LE": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OUT8}; open_collector. */
  "~{OUT8}": "13",
  /** Physical pin 14: ~{OUT9}; open_collector. */
  "~{OUT9}": "14",
  /** Physical pin 15: ~{OUT10}; open_collector. */
  "~{OUT10}": "15",
  /** Physical pin 16: ~{OUT11}; open_collector. */
  "~{OUT11}": "16",
  /** Physical pin 17: ~{OUT12}; open_collector. */
  "~{OUT12}": "17",
  /** Physical pin 18: ~{OUT13}; open_collector. */
  "~{OUT13}": "18",
  /** Physical pin 19: ~{OUT14}; open_collector. */
  "~{OUT14}": "19",
  /** Physical pin 20: ~{OUT15}; open_collector. */
  "~{OUT15}": "20",
  /** Physical pin 21: ~{OE}; input. */
  "~{OE}": "21",
  /** Physical pin 22: SDO; output. */
  "SDO": "22",
  /** Physical pin 23: R-EXT; output. */
  "R-EXT": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
  /** Physical pin 25: EPAD; passive. */
  "EPAD": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA6507RUE extends Component.withPins({
  /** Physical pin 1: V_{CC}; power_in. */
  "V_{CC}": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: EN; input. */
  "EN": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: P0; open_collector. */
  "P0": "6",
  /** Physical pin 7: P1; open_collector. */
  "P1": "7",
  /** Physical pin 8: P2; open_collector. */
  "P2": "8",
  /** Physical pin 9: P3; open_collector. */
  "P3": "9",
  /** Physical pin 10: P4; open_collector. */
  "P4": "10",
  /** Physical pin 11: P5; open_collector. */
  "P5": "11",
  /** Physical pin 12: P6; open_collector. */
  "P6": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC59108xPW extends Component.withPins({
  /** Physical pin 1: REXT; passive. */
  "REXT": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: A1; input. */
  "A1": "3",
  /** Physical pin 4: A2; input. */
  "A2": "4",
  /** Physical pin 5: A3; input. */
  "A3": "5",
  /** Physical pin 6: ~{OUT0}; open_collector. */
  "~{OUT0}": "6",
  /** Physical pin 7: ~{OUT1}; open_collector. */
  "~{OUT1}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: ~{OUT2}; open_collector. */
  "~{OUT2}": "9",
  /** Physical pin 10: ~{OUT3}; open_collector. */
  "~{OUT3}": "10",
  /** Physical pin 11: ~{OUT4}; open_collector. */
  "~{OUT4}": "11",
  /** Physical pin 12: ~{OUT5}; open_collector. */
  "~{OUT5}": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: ~{OUT6}; open_collector. */
  "~{OUT6}": "14",
  /** Physical pin 15: ~{OUT7}; open_collector. */
  "~{OUT7}": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: ~{RESET}; input. */
  "~{RESET}": "17",
  /** Physical pin 18: SCL; input. */
  "SCL": "18",
  /** Physical pin 19: SDA; bidirectional. */
  "SDA": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC5916 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE(ED1); passive. */
  "LE(ED1)": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OE}(ED2); passive. */
  "~{OE}(ED2)": "13",
  /** Physical pin 14: SDO; output. */
  "SDO": "14",
  /** Physical pin 15: R-EXT; input. */
  "R-EXT": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC5917 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: LE(ED1); passive. */
  "LE(ED1)": "4",
  /** Physical pin 5: ~{OUT0}; open_collector. */
  "~{OUT0}": "5",
  /** Physical pin 6: ~{OUT1}; open_collector. */
  "~{OUT1}": "6",
  /** Physical pin 7: ~{OUT2}; open_collector. */
  "~{OUT2}": "7",
  /** Physical pin 8: ~{OUT3}; open_collector. */
  "~{OUT3}": "8",
  /** Physical pin 9: ~{OUT4}; open_collector. */
  "~{OUT4}": "9",
  /** Physical pin 10: ~{OUT5}; open_collector. */
  "~{OUT5}": "10",
  /** Physical pin 11: ~{OUT6}; open_collector. */
  "~{OUT6}": "11",
  /** Physical pin 12: ~{OUT7}; open_collector. */
  "~{OUT7}": "12",
  /** Physical pin 13: ~{OE}(ED2); passive. */
  "~{OE}(ED2)": "13",
  /** Physical pin 14: SDO; output. */
  "SDO": "14",
  /** Physical pin 15: R-EXT; input. */
  "R-EXT": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC5940NT extends Component.withPins({
  /** Physical pin 1: OUT1; open_collector. */
  "OUT1": "1",
  /** Physical pin 2: OUT2; open_collector. */
  "OUT2": "2",
  /** Physical pin 3: OUT3; open_collector. */
  "OUT3": "3",
  /** Physical pin 4: OUT4; open_collector. */
  "OUT4": "4",
  /** Physical pin 5: OUT5; open_collector. */
  "OUT5": "5",
  /** Physical pin 6: OUT6; open_collector. */
  "OUT6": "6",
  /** Physical pin 7: OUT7; open_collector. */
  "OUT7": "7",
  /** Physical pin 8: OUT8; open_collector. */
  "OUT8": "8",
  /** Physical pin 9: OUT9; open_collector. */
  "OUT9": "9",
  /** Physical pin 10: OUT10; open_collector. */
  "OUT10": "10",
  /** Physical pin 11: OUT11; open_collector. */
  "OUT11": "11",
  /** Physical pin 12: OUT12; open_collector. */
  "OUT12": "12",
  /** Physical pin 13: OUT13; open_collector. */
  "OUT13": "13",
  /** Physical pin 14: OUT14; open_collector. */
  "OUT14": "14",
  /** Physical pin 15: OUT15; open_collector. */
  "OUT15": "15",
  /** Physical pin 16: XERR; open_collector. */
  "XERR": "16",
  /** Physical pin 17: SOUT; output. */
  "SOUT": "17",
  /** Physical pin 18: GSCLK; input. */
  "GSCLK": "18",
  /** Physical pin 19: DCPRG; input. */
  "DCPRG": "19",
  /** Physical pin 20: IREF; input. */
  "IREF": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: GND; power_in. */
  "GND": "22",
  /** Physical pin 23: BLANK; input. */
  "BLANK": "23",
  /** Physical pin 24: XLAT; input. */
  "XLAT": "24",
  /** Physical pin 25: SCLK; input. */
  "SCLK": "25",
  /** Physical pin 26: SIN; input. */
  "SIN": "26",
  /** Physical pin 27: VPRG; input. */
  "VPRG": "27",
  /** Physical pin 28: OUT0; open_collector. */
  "OUT0": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC5940PWP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: BLANK; input. */
  "BLANK": "2",
  /** Physical pin 3: XLAT; input. */
  "XLAT": "3",
  /** Physical pin 4: SCLK; input. */
  "SCLK": "4",
  /** Physical pin 5: SIN; input. */
  "SIN": "5",
  /** Physical pin 6: VPRG; input. */
  "VPRG": "6",
  /** Physical pin 7: OUT0; open_collector. */
  "OUT0": "7",
  /** Physical pin 8: OUT1; open_collector. */
  "OUT1": "8",
  /** Physical pin 9: OUT2; open_collector. */
  "OUT2": "9",
  /** Physical pin 10: OUT3; open_collector. */
  "OUT3": "10",
  /** Physical pin 11: OUT4; open_collector. */
  "OUT4": "11",
  /** Physical pin 12: OUT5; open_collector. */
  "OUT5": "12",
  /** Physical pin 13: OUT6; open_collector. */
  "OUT6": "13",
  /** Physical pin 14: OUT7; open_collector. */
  "OUT7": "14",
  /** Physical pin 15: OUT8; open_collector. */
  "OUT8": "15",
  /** Physical pin 16: OUT9; open_collector. */
  "OUT9": "16",
  /** Physical pin 17: OUT10; open_collector. */
  "OUT10": "17",
  /** Physical pin 18: OUT11; open_collector. */
  "OUT11": "18",
  /** Physical pin 19: OUT12; open_collector. */
  "OUT12": "19",
  /** Physical pin 20: OUT13; open_collector. */
  "OUT13": "20",
  /** Physical pin 21: OUT14; open_collector. */
  "OUT14": "21",
  /** Physical pin 22: OUT15; open_collector. */
  "OUT15": "22",
  /** Physical pin 23: XERR; open_collector. */
  "XERR": "23",
  /** Physical pin 24: SOUT; output. */
  "SOUT": "24",
  /** Physical pin 25: GSCLK; input. */
  "GSCLK": "25",
  /** Physical pin 26: DCPRG; input. */
  "DCPRG": "26",
  /** Physical pin 27: IREF; input. */
  "IREF": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
  /** Physical pin 29: PAD; input. */
  "PAD": "29",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC5947DAP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: BLANK; input. */
  "BLANK": "2",
  /** Physical pin 3: SCLK; input. */
  "SCLK": "3",
  /** Physical pin 4: SIN; input. */
  "SIN": "4",
  /** Physical pin 5: OUT0; output. */
  "OUT0": "5",
  /** Physical pin 6: OUT1; output. */
  "OUT1": "6",
  /** Physical pin 7: OUT2; output. */
  "OUT2": "7",
  /** Physical pin 8: OUT3; output. */
  "OUT3": "8",
  /** Physical pin 9: OUT4; output. */
  "OUT4": "9",
  /** Physical pin 10: OUT5; output. */
  "OUT5": "10",
  /** Physical pin 11: OUT6; output. */
  "OUT6": "11",
  /** Physical pin 12: OUT7; output. */
  "OUT7": "12",
  /** Physical pin 13: OUT8; output. */
  "OUT8": "13",
  /** Physical pin 14: OUT9; output. */
  "OUT9": "14",
  /** Physical pin 15: OUT10; output. */
  "OUT10": "15",
  /** Physical pin 16: OUT11; output. */
  "OUT11": "16",
  /** Physical pin 17: OUT12; output. */
  "OUT12": "17",
  /** Physical pin 18: OUT13; output. */
  "OUT13": "18",
  /** Physical pin 19: OUT14; output. */
  "OUT14": "19",
  /** Physical pin 20: OUT15; output. */
  "OUT15": "20",
  /** Physical pin 21: OUT16; output. */
  "OUT16": "21",
  /** Physical pin 22: OUT17; output. */
  "OUT17": "22",
  /** Physical pin 23: OUT18; output. */
  "OUT18": "23",
  /** Physical pin 24: OUT19; output. */
  "OUT19": "24",
  /** Physical pin 25: OUT20; output. */
  "OUT20": "25",
  /** Physical pin 26: OUT21; output. */
  "OUT21": "26",
  /** Physical pin 27: OUT22; output. */
  "OUT22": "27",
  /** Physical pin 28: OUT23; output. */
  "OUT23": "28",
  /** Physical pin 29: SOUT; output. */
  "SOUT": "29",
  /** Physical pin 30: XLAT; input. */
  "XLAT": "30",
  /** Physical pin 31: IREF; input. */
  "IREF": "31",
  /** Physical pin 32: VCC; power_in. */
  "VCC": "32",
  /** Physical pin 33: PowerPAD; power_in. */
  "PowerPAD": "33",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC5947RHB extends Component.withPins({
  /** Physical pin 1: OUT0; output. */
  "OUT0": "1",
  /** Physical pin 2: OUT1; output. */
  "OUT1": "2",
  /** Physical pin 3: OUT2; output. */
  "OUT2": "3",
  /** Physical pin 4: OUT3; output. */
  "OUT3": "4",
  /** Physical pin 5: OUT4; output. */
  "OUT4": "5",
  /** Physical pin 6: OUT5; output. */
  "OUT5": "6",
  /** Physical pin 7: OUT6; output. */
  "OUT6": "7",
  /** Physical pin 8: OUT7; output. */
  "OUT7": "8",
  /** Physical pin 9: OUT8; output. */
  "OUT8": "9",
  /** Physical pin 10: OUT9; output. */
  "OUT9": "10",
  /** Physical pin 11: OUT10; output. */
  "OUT10": "11",
  /** Physical pin 12: OUT11; output. */
  "OUT11": "12",
  /** Physical pin 13: OUT12; output. */
  "OUT12": "13",
  /** Physical pin 14: OUT13; output. */
  "OUT13": "14",
  /** Physical pin 15: OUT14; output. */
  "OUT14": "15",
  /** Physical pin 16: OUT15; output. */
  "OUT15": "16",
  /** Physical pin 17: OUT16; output. */
  "OUT16": "17",
  /** Physical pin 18: OUT17; output. */
  "OUT17": "18",
  /** Physical pin 19: OUT18; output. */
  "OUT18": "19",
  /** Physical pin 20: OUT19; output. */
  "OUT19": "20",
  /** Physical pin 21: OUT20; output. */
  "OUT20": "21",
  /** Physical pin 22: OUT21; output. */
  "OUT21": "22",
  /** Physical pin 23: OUT22; output. */
  "OUT22": "23",
  /** Physical pin 24: OUT23; output. */
  "OUT23": "24",
  /** Physical pin 25: SOUT; output. */
  "SOUT": "25",
  /** Physical pin 26: XLAT; input. */
  "XLAT": "26",
  /** Physical pin 27: IREF; input. */
  "IREF": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
  /** Physical pin 29: GND; power_in. */
  "GND": "29",
  /** Physical pin 30: BLANK; input. */
  "BLANK": "30",
  /** Physical pin 31: SCLK; input. */
  "SCLK": "31",
  /** Physical pin 32: SIN; input. */
  "SIN": "32",
  /** Physical pin 33: PowerPAD; power_in. */
  "PowerPAD": "33",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC5949PWP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: SIN; input. */
  "SIN": "2",
  /** Physical pin 3: SCLK; input. */
  "SCLK": "3",
  /** Physical pin 4: LAT; input. */
  "LAT": "4",
  /** Physical pin 5: OUT0; open_collector. */
  "OUT0": "5",
  /** Physical pin 6: OUT1; open_collector. */
  "OUT1": "6",
  /** Physical pin 7: OUT2; open_collector. */
  "OUT2": "7",
  /** Physical pin 8: OUT3; open_collector. */
  "OUT3": "8",
  /** Physical pin 9: OUT4; open_collector. */
  "OUT4": "9",
  /** Physical pin 10: OUT5; open_collector. */
  "OUT5": "10",
  /** Physical pin 11: OUT6; open_collector. */
  "OUT6": "11",
  /** Physical pin 12: OUT7; open_collector. */
  "OUT7": "12",
  /** Physical pin 13: OUT8; open_collector. */
  "OUT8": "13",
  /** Physical pin 14: OUT9; open_collector. */
  "OUT9": "14",
  /** Physical pin 15: OUT10; open_collector. */
  "OUT10": "15",
  /** Physical pin 16: OUT11; open_collector. */
  "OUT11": "16",
  /** Physical pin 17: OUT12; open_collector. */
  "OUT12": "17",
  /** Physical pin 18: OUT13; open_collector. */
  "OUT13": "18",
  /** Physical pin 19: OUT14; open_collector. */
  "OUT14": "19",
  /** Physical pin 20: OUT15; open_collector. */
  "OUT15": "20",
  /** Physical pin 21: GSCLK; input. */
  "GSCLK": "21",
  /** Physical pin 22: SOUT; output. */
  "SOUT": "22",
  /** Physical pin 23: IREF; input. */
  "IREF": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC5951DAP extends Component.withPins({
  /** Physical pin 1: GSSIN; input. */
  "GSSIN": "1",
  /** Physical pin 2: GSSCK; input. */
  "GSSCK": "2",
  /** Physical pin 3: GSLAT; input. */
  "GSLAT": "3",
  /** Physical pin 4: GSCKG; input. */
  "GSCKG": "4",
  /** Physical pin 5: GSCKR; input. */
  "GSCKR": "5",
  /** Physical pin 6: GSCKB; input. */
  "GSCKB": "6",
  /** Physical pin 7: OUTG0; open_collector. */
  "OUTG0": "7",
  /** Physical pin 8: OUTR0; open_collector. */
  "OUTR0": "8",
  /** Physical pin 9: OUTB0; open_collector. */
  "OUTB0": "9",
  /** Physical pin 10: OUTG1; open_collector. */
  "OUTG1": "10",
  /** Physical pin 11: OUTR1; open_collector. */
  "OUTR1": "11",
  /** Physical pin 12: OUTB1; open_collector. */
  "OUTB1": "12",
  /** Physical pin 13: OUTG2; open_collector. */
  "OUTG2": "13",
  /** Physical pin 14: OUTR2; open_collector. */
  "OUTR2": "14",
  /** Physical pin 15: OUTB2; open_collector. */
  "OUTB2": "15",
  /** Physical pin 16: OUTG3; open_collector. */
  "OUTG3": "16",
  /** Physical pin 17: OUTR3; open_collector. */
  "OUTR3": "17",
  /** Physical pin 18: OUTB3; open_collector. */
  "OUTB3": "18",
  /** Physical pin 21: OUTB4; open_collector. */
  "OUTB4": "21",
  /** Physical pin 22: OUTR4; open_collector. */
  "OUTR4": "22",
  /** Physical pin 23: OUTG4; open_collector. */
  "OUTG4": "23",
  /** Physical pin 24: OUTB5; open_collector. */
  "OUTB5": "24",
  /** Physical pin 25: OUTR5; open_collector. */
  "OUTR5": "25",
  /** Physical pin 26: OUTG5; open_collector. */
  "OUTG5": "26",
  /** Physical pin 27: OUTB6; open_collector. */
  "OUTB6": "27",
  /** Physical pin 28: OUTR6; open_collector. */
  "OUTR6": "28",
  /** Physical pin 29: OUTG6; open_collector. */
  "OUTG6": "29",
  /** Physical pin 30: OUTB7; open_collector. */
  "OUTB7": "30",
  /** Physical pin 31: OUTR7; open_collector. */
  "OUTR7": "31",
  /** Physical pin 32: OUTG7; open_collector. */
  "OUTG7": "32",
  /** Physical pin 33: GND; power_in. */
  "GND_33": "33",
  /** Physical pin 34: IREF; passive. */
  "IREF": "34",
  /** Physical pin 35: VCC; power_in. */
  "VCC": "35",
  /** Physical pin 36: XBLNK; input. */
  "XBLNK": "36",
  /** Physical pin 37: DCSCK; input. */
  "DCSCK": "37",
  /** Physical pin 38: DCSIN; input. */
  "DCSIN": "38",
  /** Physical pin 39: GND; passive. */
  "GND_39": "39",
  /** Physical pin 19: GSSOUT; output. */
  "GSSOUT": "19",
  /** Physical pin 20: DCSOUT; output. */
  "DCSOUT": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC5951RHA extends Component.withPins({
  /** Physical pin 1: OUTG3; open_collector. */
  "OUTG3": "1",
  /** Physical pin 2: OUTR3; open_collector. */
  "OUTR3": "2",
  /** Physical pin 3: OUTB3; open_collector. */
  "OUTB3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: OUTB4; open_collector. */
  "OUTB4": "8",
  /** Physical pin 9: OUTR4; open_collector. */
  "OUTR4": "9",
  /** Physical pin 10: OUTG4; open_collector. */
  "OUTG4": "10",
  /** Physical pin 11: OUTB5; open_collector. */
  "OUTB5": "11",
  /** Physical pin 12: OUTR5; open_collector. */
  "OUTR5": "12",
  /** Physical pin 13: OUTG5; open_collector. */
  "OUTG5": "13",
  /** Physical pin 14: OUTB6; open_collector. */
  "OUTB6": "14",
  /** Physical pin 15: OUTR6; open_collector. */
  "OUTR6": "15",
  /** Physical pin 16: OUTG6; open_collector. */
  "OUTG6": "16",
  /** Physical pin 17: OUTB7; open_collector. */
  "OUTB7": "17",
  /** Physical pin 18: OUTR7; open_collector. */
  "OUTR7": "18",
  /** Physical pin 19: OUTG7; open_collector. */
  "OUTG7": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: IREF; passive. */
  "IREF": "21",
  /** Physical pin 22: VCC; power_in. */
  "VCC": "22",
  /** Physical pin 23: XBLNK; input. */
  "XBLNK": "23",
  /** Physical pin 24: DCSCK; input. */
  "DCSCK": "24",
  /** Physical pin 25: DCSIN; input. */
  "DCSIN": "25",
  /** Physical pin 26: GSSIN; input. */
  "GSSIN": "26",
  /** Physical pin 27: GSSCK; input. */
  "GSSCK": "27",
  /** Physical pin 28: GSLAT; input. */
  "GSLAT": "28",
  /** Physical pin 29: GSCKG; input. */
  "GSCKG": "29",
  /** Physical pin 30: GSCKR; input. */
  "GSCKR": "30",
  /** Physical pin 31: GSCKB; input. */
  "GSCKB": "31",
  /** Physical pin 32: OUTG0; open_collector. */
  "OUTG0": "32",
  /** Physical pin 33: OUTR0; open_collector. */
  "OUTR0": "33",
  /** Physical pin 34: OUTB0; open_collector. */
  "OUTB0": "34",
  /** Physical pin 35: OUTG1; open_collector. */
  "OUTG1": "35",
  /** Physical pin 36: OUTR1; open_collector. */
  "OUTR1": "36",
  /** Physical pin 37: OUTB1; open_collector. */
  "OUTB1": "37",
  /** Physical pin 38: OUTG2; open_collector. */
  "OUTG2": "38",
  /** Physical pin 39: OUTR2; open_collector. */
  "OUTR2": "39",
  /** Physical pin 40: OUTB2; open_collector. */
  "OUTB2": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 5: GSSOUT; output. */
  "GSSOUT": "5",
  /** Physical pin 6: DCSOUT; output. */
  "DCSOUT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC5951RTA extends Component.withPins({
  /** Physical pin 1: OUTG3; open_collector. */
  "OUTG3": "1",
  /** Physical pin 2: OUTR3; open_collector. */
  "OUTR3": "2",
  /** Physical pin 3: OUTB3; open_collector. */
  "OUTB3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: OUTB4; open_collector. */
  "OUTB4": "8",
  /** Physical pin 9: OUTR4; open_collector. */
  "OUTR4": "9",
  /** Physical pin 10: OUTG4; open_collector. */
  "OUTG4": "10",
  /** Physical pin 11: OUTB5; open_collector. */
  "OUTB5": "11",
  /** Physical pin 12: OUTR5; open_collector. */
  "OUTR5": "12",
  /** Physical pin 13: OUTG5; open_collector. */
  "OUTG5": "13",
  /** Physical pin 14: OUTB6; open_collector. */
  "OUTB6": "14",
  /** Physical pin 15: OUTR6; open_collector. */
  "OUTR6": "15",
  /** Physical pin 16: OUTG6; open_collector. */
  "OUTG6": "16",
  /** Physical pin 17: OUTB7; open_collector. */
  "OUTB7": "17",
  /** Physical pin 18: OUTR7; open_collector. */
  "OUTR7": "18",
  /** Physical pin 19: OUTG7; open_collector. */
  "OUTG7": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: IREF; passive. */
  "IREF": "21",
  /** Physical pin 22: VCC; power_in. */
  "VCC": "22",
  /** Physical pin 23: XBLNK; input. */
  "XBLNK": "23",
  /** Physical pin 24: DCSCK; input. */
  "DCSCK": "24",
  /** Physical pin 25: DCSIN; input. */
  "DCSIN": "25",
  /** Physical pin 26: GSSIN; input. */
  "GSSIN": "26",
  /** Physical pin 27: GSSCK; input. */
  "GSSCK": "27",
  /** Physical pin 28: GSLAT; input. */
  "GSLAT": "28",
  /** Physical pin 29: GSCKG; input. */
  "GSCKG": "29",
  /** Physical pin 30: GSCKR; input. */
  "GSCKR": "30",
  /** Physical pin 31: GSCKB; input. */
  "GSCKB": "31",
  /** Physical pin 32: OUTG0; open_collector. */
  "OUTG0": "32",
  /** Physical pin 33: OUTR0; open_collector. */
  "OUTR0": "33",
  /** Physical pin 34: OUTB0; open_collector. */
  "OUTB0": "34",
  /** Physical pin 35: OUTG1; open_collector. */
  "OUTG1": "35",
  /** Physical pin 36: OUTR1; open_collector. */
  "OUTR1": "36",
  /** Physical pin 37: OUTB1; open_collector. */
  "OUTB1": "37",
  /** Physical pin 38: OUTG2; open_collector. */
  "OUTG2": "38",
  /** Physical pin 39: OUTR2; open_collector. */
  "OUTR2": "39",
  /** Physical pin 40: OUTB2; open_collector. */
  "OUTB2": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 5: GSSOUT; output. */
  "GSSOUT": "5",
  /** Physical pin 6: DCSOUT; output. */
  "DCSOUT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC5957RTQ extends Component.withPins({
  /** Physical pin 1: IREF; passive. */
  "IREF": "1",
  /** Physical pin 2: OUTR14; open_collector. */
  "OUTR14": "2",
  /** Physical pin 3: OUTG14; open_collector. */
  "OUTG14": "3",
  /** Physical pin 4: OUTB14; open_collector. */
  "OUTB14": "4",
  /** Physical pin 5: OUTR15; open_collector. */
  "OUTR15": "5",
  /** Physical pin 6: OUTG15; open_collector. */
  "OUTG15": "6",
  /** Physical pin 7: OUTB15; open_collector. */
  "OUTB15": "7",
  /** Physical pin 8: OUTR0; open_collector. */
  "OUTR0": "8",
  /** Physical pin 9: OUTG0; open_collector. */
  "OUTG0": "9",
  /** Physical pin 10: OUTB0; open_collector. */
  "OUTB0": "10",
  /** Physical pin 11: OUTR1; open_collector. */
  "OUTR1": "11",
  /** Physical pin 12: OUTG1; open_collector. */
  "OUTG1": "12",
  /** Physical pin 13: OUTB1; open_collector. */
  "OUTB1": "13",
  /** Physical pin 14: OUTR2; open_collector. */
  "OUTR2": "14",
  /** Physical pin 15: OUTG2; open_collector. */
  "OUTG2": "15",
  /** Physical pin 16: OUTB2; open_collector. */
  "OUTB2": "16",
  /** Physical pin 17: OUTR3; open_collector. */
  "OUTR3": "17",
  /** Physical pin 18: OUTG3; open_collector. */
  "OUTG3": "18",
  /** Physical pin 19: OUTB3; open_collector. */
  "OUTB3": "19",
  /** Physical pin 20: OUTR4; open_collector. */
  "OUTR4": "20",
  /** Physical pin 21: OUTG4; open_collector. */
  "OUTG4": "21",
  /** Physical pin 22: OUTB4; open_collector. */
  "OUTB4": "22",
  /** Physical pin 23: OUTR5; open_collector. */
  "OUTR5": "23",
  /** Physical pin 24: OUTG5; open_collector. */
  "OUTG5": "24",
  /** Physical pin 25: OUTB5; open_collector. */
  "OUTB5": "25",
  /** Physical pin 26: SIN; input. */
  "SIN": "26",
  /** Physical pin 27: LAT; input. */
  "LAT": "27",
  /** Physical pin 28: SCLK; input. */
  "SCLK": "28",
  /** Physical pin 29: GCLK; input. */
  "GCLK": "29",
  /** Physical pin 30: OUTR6; open_collector. */
  "OUTR6": "30",
  /** Physical pin 31: OUTG6; open_collector. */
  "OUTG6": "31",
  /** Physical pin 32: OUTB6; open_collector. */
  "OUTB6": "32",
  /** Physical pin 33: OUTR7; open_collector. */
  "OUTR7": "33",
  /** Physical pin 34: OUTG7; open_collector. */
  "OUTG7": "34",
  /** Physical pin 35: OUTB7; open_collector. */
  "OUTB7": "35",
  /** Physical pin 36: OUTR8; open_collector. */
  "OUTR8": "36",
  /** Physical pin 37: OUTG8; open_collector. */
  "OUTG8": "37",
  /** Physical pin 38: OUTB8; open_collector. */
  "OUTB8": "38",
  /** Physical pin 39: OUTR9; open_collector. */
  "OUTR9": "39",
  /** Physical pin 40: OUTG9; open_collector. */
  "OUTG9": "40",
  /** Physical pin 41: OUTB9; open_collector. */
  "OUTB9": "41",
  /** Physical pin 43: VCC; power_in. */
  "VCC": "43",
  /** Physical pin 44: OUTR10; open_collector. */
  "OUTR10": "44",
  /** Physical pin 45: OUTG10; open_collector. */
  "OUTG10": "45",
  /** Physical pin 46: OUTB10; open_collector. */
  "OUTB10": "46",
  /** Physical pin 47: OUTR11; open_collector. */
  "OUTR11": "47",
  /** Physical pin 48: OUTG11; open_collector. */
  "OUTG11": "48",
  /** Physical pin 49: OUTB11; open_collector. */
  "OUTB11": "49",
  /** Physical pin 50: OUTR12; open_collector. */
  "OUTR12": "50",
  /** Physical pin 51: OUTG12; open_collector. */
  "OUTG12": "51",
  /** Physical pin 52: OUTB12; open_collector. */
  "OUTB12": "52",
  /** Physical pin 53: OUTR13; open_collector. */
  "OUTR13": "53",
  /** Physical pin 54: OUTG13; open_collector. */
  "OUTG13": "54",
  /** Physical pin 55: OUTB13; open_collector. */
  "OUTB13": "55",
  /** Physical pin 56: IREFGND; power_in. */
  "IREFGND": "56",
  /** Physical pin 57: GND; power_in. */
  "GND": "57",
  /** Physical pin 42: SOUT; output. */
  "SOUT": "42",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC5971PWP extends Component.withPins({
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: OUTR0; open_collector. */
  "OUTR0": "3",
  /** Physical pin 4: OUTG0; open_collector. */
  "OUTG0": "4",
  /** Physical pin 5: OUTB0; open_collector. */
  "OUTB0": "5",
  /** Physical pin 6: OUTR1; open_collector. */
  "OUTR1": "6",
  /** Physical pin 7: OUTG1; open_collector. */
  "OUTG1": "7",
  /** Physical pin 8: OUTB1; open_collector. */
  "OUTB1": "8",
  /** Physical pin 9: SDTI; input. */
  "SDTI": "9",
  /** Physical pin 10: SCKI; input. */
  "SCKI": "10",
  /** Physical pin 13: OUTR2; open_collector. */
  "OUTR2": "13",
  /** Physical pin 14: OUTG2; open_collector. */
  "OUTG2": "14",
  /** Physical pin 15: OUTB2; open_collector. */
  "OUTB2": "15",
  /** Physical pin 16: OUTR3; open_collector. */
  "OUTR3": "16",
  /** Physical pin 17: OUTG3; open_collector. */
  "OUTG3": "17",
  /** Physical pin 18: OUTB3; open_collector. */
  "OUTB3": "18",
  /** Physical pin 19: VCC; power_in. */
  "VCC": "19",
  /** Physical pin 20: VREG; passive. */
  "VREG": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 1: IREF; passive. */
  "IREF": "1",
  /** Physical pin 11: SCKO; output. */
  "SCKO": "11",
  /** Physical pin 12: SDTO; output. */
  "SDTO": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC5971RGE extends Component.withPins({
  /** Physical pin 1: SDTI; input. */
  "SDTI": "1",
  /** Physical pin 2: SCKI; input. */
  "SCKI": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 6: SDTO; output. */
  "SDTO": "6",
  /** Physical pin 7: OUTR2; open_collector. */
  "OUTR2": "7",
  /** Physical pin 8: OUTG2; open_collector. */
  "OUTG2": "8",
  /** Physical pin 9: OUTB2; open_collector. */
  "OUTB2": "9",
  /** Physical pin 10: OUTR3; open_collector. */
  "OUTR3": "10",
  /** Physical pin 11: OUTG3; open_collector. */
  "OUTG3": "11",
  /** Physical pin 12: OUTB3; open_collector. */
  "OUTB3": "12",
  /** Physical pin 13: VCC; power_in. */
  "VCC": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: OUTR0; open_collector. */
  "OUTR0": "19",
  /** Physical pin 20: OUTG0; open_collector. */
  "OUTG0": "20",
  /** Physical pin 21: OUTB0; open_collector. */
  "OUTB0": "21",
  /** Physical pin 22: OUTR1; open_collector. */
  "OUTR1": "22",
  /** Physical pin 23: OUTG1; open_collector. */
  "OUTG1": "23",
  /** Physical pin 24: OUTB1; open_collector. */
  "OUTB1": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 5: SCKO; output. */
  "SCKO": "5",
  /** Physical pin 15: VREG; passive. */
  "VREG": "15",
  /** Physical pin 16: IREF; passive. */
  "IREF": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TLC5973 extends Component.withPins({
  /** Physical pin 1: OUT0; output. */
  "OUT0": "1",
  /** Physical pin 2: OUT1; output. */
  "OUT1": "2",
  /** Physical pin 3: OUT2; output. */
  "OUT2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDO; output. */
  "SDO": "5",
  /** Physical pin 6: SDI; input. */
  "SDI": "6",
  /** Physical pin 7: IREF; bidirectional. */
  "IREF": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS61165DBV extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: CTRL; input. */
  "CTRL": "2",
  /** Physical pin 3: SW; power_out. */
  "SW": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: COMP; output. */
  "COMP": "5",
  /** Physical pin 6: FB; input. */
  "FB": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS61165DRV extends Component.withPins({
  /** Physical pin 1: FB; input. */
  "FB": "1",
  /** Physical pin 2: COMP; output. */
  "COMP": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: SW; power_out. */
  "SW": "4",
  /** Physical pin 5: CTRL; input. */
  "CTRL": "5",
  /** Physical pin 6: VIN; power_in. */
  "VIN": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS92200D1DDC extends Component.withPins({
  /** Physical pin 1: FB; input. */
  "FB": "1",
  /** Physical pin 2: DIM; input. */
  "DIM": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: VIN; power_in. */
  "VIN": "4",
  /** Physical pin 5: SW; power_out. */
  "SW": "5",
  /** Physical pin 6: BOOT; passive. */
  "BOOT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS92200D2DDC extends Component.withPins({
  /** Physical pin 1: FB; input. */
  "FB": "1",
  /** Physical pin 2: DIM; input. */
  "DIM": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: VIN; power_in. */
  "VIN": "4",
  /** Physical pin 5: SW; power_out. */
  "SW": "5",
  /** Physical pin 6: BOOT; passive. */
  "BOOT": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS92511DDA extends Component.withPins({
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 1: VCC; power_out. */
  "VCC": "1",
  /** Physical pin 2: PGND; power_in. */
  "PGND": "2",
  /** Physical pin 3: IADJ; input. */
  "IADJ": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: FS; input. */
  "FS": "5",
  /** Physical pin 6: DIM; input. */
  "DIM": "6",
  /** Physical pin 7: LX; open_collector. */
  "LX": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS92612DBV extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: PWM; input. */
  "PWM": "2",
  /** Physical pin 3: SUPPLY; power_in. */
  "SUPPLY": "3",
  /** Physical pin 4: IN; input. */
  "IN": "4",
  /** Physical pin 5: OUT; power_out. */
  "OUT": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPS92692PWP extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: VREF; power_out. */
  "VREF": "2",
  /** Physical pin 3: ~{FLT}; open_collector. */
  "~{FLT}": "3",
  /** Physical pin 4: SS; passive. */
  "SS": "4",
  /** Physical pin 5: DM; passive. */
  "DM": "5",
  /** Physical pin 6: RT; passive. */
  "RT": "6",
  /** Physical pin 7: COMP; passive. */
  "COMP": "7",
  /** Physical pin 8: IMON; output. */
  "IMON": "8",
  /** Physical pin 9: IADJ; input. */
  "IADJ": "9",
  /** Physical pin 10: DIM/PWM; input. */
  "DIM/PWM": "10",
  /** Physical pin 11: RAMP; passive. */
  "RAMP": "11",
  /** Physical pin 12: PDRV; output. */
  "PDRV": "12",
  /** Physical pin 13: CSN; input. */
  "CSN": "13",
  /** Physical pin 14: CSP; input. */
  "CSP": "14",
  /** Physical pin 15: OV; input. */
  "OV": "15",
  /** Physical pin 16: SLOPE; passive. */
  "SLOPE": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: IS; input. */
  "IS": "18",
  /** Physical pin 19: GATE; output. */
  "GATE": "19",
  /** Physical pin 20: VCC; power_out. */
  "VCC": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WS2811 extends Component.withPins({
  /** Physical pin 1: OUTR; output. */
  "OUTR": "1",
  /** Physical pin 2: OUTG; output. */
  "OUTG": "2",
  /** Physical pin 3: OUTB; output. */
  "OUTB": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DO; output. */
  "DO": "5",
  /** Physical pin 6: DIN; input. */
  "DIN": "6",
  /** Physical pin 7: SET; input. */
  "SET": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZXLD383 extends Component.withPins({
  /** Physical pin 1: ENA; input. */
  "ENA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: V_{OUT}; output. */
  "V_{OUT}": "4",
  /** Physical pin 5: V_{CC}; power_in. */
  "V_{CC}": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZXSC310 extends Component.withPins({
  /** Physical pin 1: V_{CC}; power_in. */
  "V_{CC}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: STND; input. */
  "STND": "3",
  /** Physical pin 4: I_{SENSE}; input. */
  "I_{SENSE}": "4",
  /** Physical pin 5: V_{DRIVE}; output. */
  "V_{DRIVE}": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ZXSC400 extends Component.withPins({
  /** Physical pin 1: V_{CC}; power_in. */
  "V_{CC}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: STND; input. */
  "STND": "3",
  /** Physical pin 4: I_{SENSE}; input. */
  "I_{SENSE}": "4",
  /** Physical pin 5: V_{FB}; input. */
  "V_{FB}": "5",
  /** Physical pin 6: V_{DRIVE}; output. */
  "V_{DRIVE}": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class iC_HTG extends Component.withPins({
  /** Physical pin 4: ID; input. */
  "ID": "4",
  /** Physical pin 5: EC; input. */
  "EC": "5",
  /** Physical pin 8: MISO/SDA; bidirectional. */
  "MISO/SDA": "8",
  /** Physical pin 9: ANIN; bidirectional. */
  "ANIN": "9",
  /** Physical pin 10: MCH; input. */
  "MCH": "10",
  /** Physical pin 11: MCL; input. */
  "MCL": "11",
  /** Physical pin 12: MOD; input. */
  "MOD": "12",
  /** Physical pin 13: CI; input. */
  "CI": "13",
  /** Physical pin 14: CIL; input. */
  "CIL": "14",
  /** Physical pin 17: VBL; power_in. */
  "VBL": "17",
  /** Physical pin 18: MD; input. */
  "MD": "18",
  /** Physical pin 19: MR; input. */
  "MR": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: DCO; passive. */
  "DCO": "21",
  /** Physical pin 24: VB; power_in. */
  "VB": "24",
  /** Physical pin 1: ~{CHK}; open_collector. */
  "~{CHK}": "1",
  /** Physical pin 2: ~{STBY}; passive. */
  "~{STBY}": "2",
  /** Physical pin 3: ~{CS}/A1; input. */
  "~{CS}/A1": "3",
  /** Physical pin 6: MOSI/A0; passive. */
  "MOSI/A0": "6",
  /** Physical pin 7: SCLK/SCL; input. */
  "SCLK/SCL": "7",
  /** Physical pin 15: VRN; output. */
  "VRN": "15",
  /** Physical pin 16: VRP; output. */
  "VRP": "16",
  /** Physical pin 22: INS; passive. */
  "INS": "22",
  /** Physical pin 23: VDD; output. */
  "VDD": "23",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Driver_LED:iC-HTG";
  override referencePrefix = "U";
}

