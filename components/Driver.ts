// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Haptic driver for solenoids and voice coils, up to 3A output, TSSOP-16
 *
 * KiCad symbol: `Driver:DRV2510-Q1`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*1EP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv2510-q1.pdf
 * Keywords: driver haptic solenoid coil.
 * Default footprint: Package_SO:HTSSOP-16-1EP_4.4x5mm_P0.65mm_EP3.4x5mm_Mask3x3mm_ThermalVias.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DRV2510_Q1 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: EN; input. */
  "EN": "2",
  /** Physical pin 3: REG; passive. */
  "REG": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: IN+; input. */
  "IN+": "6",
  /** Physical pin 7: IN-; input. */
  "IN-": "7",
  /** Physical pin 8: STDBY; input. */
  "STDBY": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: BSTN; passive. */
  "BSTN": "10",
  /** Physical pin 11: OUT-; power_out. */
  "OUT-": "11",
  /** Physical pin 12: OUT+; power_out. */
  "OUT+": "12",
  /** Physical pin 13: BSTP; passive. */
  "BSTP": "13",
  /** Physical pin 14: INTZ; open_collector. */
  "INTZ": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "Driver:DRV2510-Q1";
  override referencePrefix = "U";
}

/**
 * Haptic driver for LRAs and ERMs with effect library, 2-5.2V, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Driver:DRV2605LDGS`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv2605l.pdf
 * Keywords: haptic driver i2c.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DRV2605LDGS extends Component.withPins({
  /** Physical pin 1: REG; passive. */
  "REG": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: IN/TRIG; input. */
  "IN/TRIG": "4",
  /** Physical pin 5: EN; input. */
  "EN": "5",
  /** Physical pin 6: VDD/NC; power_in. */
  "VDD/NC": "6",
  /** Physical pin 7: OUT+; output. */
  "OUT+": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: OUT-; output. */
  "OUT-": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
}) {
  override schema = "Driver:DRV2605LDGS";
  override referencePrefix = "U";
}

/**
 * 8-Channel Serial Interface Low-Side Driver
 *
 * KiCad symbol: `Driver:DRV8860`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8860.pdf
 * Keywords: Relay Driver.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DRV8860 extends Component.withPins({
  /** Physical pin 1: VM; power_in. */
  "VM": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: SCLK; input. */
  "SCLK": "3",
  /** Physical pin 4: Latch; input. */
  "Latch": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: DOUT; output. */
  "DOUT": "6",
  /** Physical pin 7: FAULT; open_collector. */
  "FAULT": "7",
  /** Physical pin 8: ENABLE; input. */
  "ENABLE": "8",
  /** Physical pin 9: OUT8; output. */
  "OUT8": "9",
  /** Physical pin 10: OUT7; output. */
  "OUT7": "10",
  /** Physical pin 11: OUT6; output. */
  "OUT6": "11",
  /** Physical pin 12: OUT5; output. */
  "OUT5": "12",
  /** Physical pin 13: OUT4; output. */
  "OUT4": "13",
  /** Physical pin 14: OUT3; output. */
  "OUT3": "14",
  /** Physical pin 15: OUT2; output. */
  "OUT2": "15",
  /** Physical pin 16: OUT1; output. */
  "OUT1": "16",
}) {
  override schema = "Driver:DRV8860";
  override referencePrefix = "U";
}

/**
 * 8-Channel Serial Interface Low-Side Driver
 *
 * KiCad symbol: `Driver:DRV8860_PWPR`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/drv8860.pdf
 * Keywords: Relay Driver.
 * Default footprint: Package_SO:TSSOP-16-1EP_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DRV8860_PWPR extends Component.withPins({
  /** Physical pin 1: VM; power_in. */
  "VM": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: SCLK; input. */
  "SCLK": "3",
  /** Physical pin 4: Latch; input. */
  "Latch": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: DOUT; output. */
  "DOUT": "6",
  /** Physical pin 7: FAULT; open_collector. */
  "FAULT": "7",
  /** Physical pin 8: ENABLE; input. */
  "ENABLE": "8",
  /** Physical pin 9: OUT8; output. */
  "OUT8": "9",
  /** Physical pin 10: OUT7; output. */
  "OUT7": "10",
  /** Physical pin 11: OUT6; output. */
  "OUT6": "11",
  /** Physical pin 12: OUT5; output. */
  "OUT5": "12",
  /** Physical pin 13: OUT4; output. */
  "OUT4": "13",
  /** Physical pin 14: OUT3; output. */
  "OUT3": "14",
  /** Physical pin 15: OUT2; output. */
  "OUT2": "15",
  /** Physical pin 16: OUT1; output. */
  "OUT1": "16",
  /** Physical pin 17: PAD; power_in. */
  "PAD": "17",
}) {
  override schema = "Driver:DRV8860_PWPR";
  override referencePrefix = "U";
}

/**
 * Power Driver for Peltier TEC Modules, ±3A, HTSSOP-28
 *
 * KiCad symbol: `Driver:MAX1968xUI`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1968-MAX1969.pdf
 * Keywords: thermoelectric cooler.
 * Default footprint: Package_SO:HTSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP2.85x5.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1968xUI extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: CTLI; input. */
  "CTLI": "3",
  /** Physical pin 4: REF; output. */
  "REF": "4",
  /** Physical pin 5: PGND; power_in. */
  "PGND_5": "5",
  /** Physical pin 6: LX2; power_out. */
  "LX2_6": "6",
  /** Physical pin 7: PGND; passive. */
  "PGND_7": "7",
  /** Physical pin 8: LX2; passive. */
  "LX2_8": "8",
  /** Physical pin 9: PVDD2; power_in. */
  "PVDD2_9": "9",
  /** Physical pin 10: LX2; passive. */
  "LX2_10": "10",
  /** Physical pin 11: PVDD2; passive. */
  "PVDD2_11": "11",
  /** Physical pin 12: FREQ; input. */
  "FREQ": "12",
  /** Physical pin 13: ITEC; output. */
  "ITEC": "13",
  /** Physical pin 14: OS2; input. */
  "OS2": "14",
  /** Physical pin 15: OS1; input. */
  "OS1": "15",
  /** Physical pin 16: CS; input. */
  "CS": "16",
  /** Physical pin 17: ~{SHDN}; input. */
  "~{SHDN}": "17",
  /** Physical pin 18: PVDD1; power_in. */
  "PVDD1_18": "18",
  /** Physical pin 19: LX1; power_out. */
  "LX1_19": "19",
  /** Physical pin 20: PVDD1; passive. */
  "PVDD1_20": "20",
  /** Physical pin 21: LX1; passive. */
  "LX1_21": "21",
  /** Physical pin 22: PGND; passive. */
  "PGND_22": "22",
  /** Physical pin 23: LX1; passive. */
  "LX1_23": "23",
  /** Physical pin 24: PGND; passive. */
  "PGND_24": "24",
  /** Physical pin 25: COMP; passive. */
  "COMP": "25",
  /** Physical pin 26: MAXIN; input. */
  "MAXIN": "26",
  /** Physical pin 27: MAXIP; input. */
  "MAXIP": "27",
  /** Physical pin 28: MAXV; input. */
  "MAXV": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "Driver:MAX1968xUI";
  override referencePrefix = "U";
}

/**
 * Power Driver for Peltier TEC Modules, 6A, HTSSOP-28
 *
 * KiCad symbol: `Driver:MAX1969xUI`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*4.4x9.7mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX1968-MAX1969.pdf
 * Keywords: thermoelectric cooler.
 * Default footprint: Package_SO:HTSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP2.85x5.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX1969xUI extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: CTLI; input. */
  "CTLI": "3",
  /** Physical pin 4: REF; output. */
  "REF": "4",
  /** Physical pin 5: PGND; power_in. */
  "PGND_5": "5",
  /** Physical pin 6: LX2; power_out. */
  "LX2_6": "6",
  /** Physical pin 7: PGND; passive. */
  "PGND_7": "7",
  /** Physical pin 8: LX2; passive. */
  "LX2_8": "8",
  /** Physical pin 9: PVDD2; power_in. */
  "PVDD2_9": "9",
  /** Physical pin 10: LX2; passive. */
  "LX2_10": "10",
  /** Physical pin 11: PVDD2; passive. */
  "PVDD2_11": "11",
  /** Physical pin 12: FREQ; input. */
  "FREQ": "12",
  /** Physical pin 13: ITEC; output. */
  "ITEC": "13",
  /** Physical pin 14: OS2; input. */
  "OS2": "14",
  /** Physical pin 15: OS1; input. */
  "OS1": "15",
  /** Physical pin 16: CS; input. */
  "CS": "16",
  /** Physical pin 17: ~{SHDN}; input. */
  "~{SHDN}": "17",
  /** Physical pin 18: PVDD1; power_in. */
  "PVDD1_18": "18",
  /** Physical pin 19: LX1; power_out. */
  "LX1_19": "19",
  /** Physical pin 20: PVDD1; passive. */
  "PVDD1_20": "20",
  /** Physical pin 21: LX1; passive. */
  "LX1_21": "21",
  /** Physical pin 22: PGND; passive. */
  "PGND_22": "22",
  /** Physical pin 23: LX1; passive. */
  "LX1_23": "23",
  /** Physical pin 24: PGND; passive. */
  "PGND_24": "24",
  /** Physical pin 25: COMP; passive. */
  "COMP": "25",
  /** Physical pin 26: MAXIN; input. */
  "MAXIN": "26",
  /** Physical pin 27: MAXIP; input. */
  "MAXIP": "27",
  /** Physical pin 28: MAXV; input. */
  "MAXV": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "Driver:MAX1969xUI";
  override referencePrefix = "U";
}

/**
 * 8-Channel Serial Interface Low-Side Driver, TSSOP-20
 *
 * KiCad symbol: `Driver:MAX4820xUP`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX4820-MAX4821.pdf
 * Keywords: Relay Driver.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP2.85x4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX4820xUP extends Component.withPins({
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 17: OUT3; open_collector. */
  "OUT3": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: OUT2; open_collector. */
  "OUT2": "19",
  /** Physical pin 20: OUT1; open_collector. */
  "OUT1": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: ~{SET}; input. */
  "~{SET}": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: DIN; input. */
  "DIN": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 7: DOUT; output. */
  "DOUT": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
  /** Physical pin 10: OUT8; open_collector. */
  "OUT8": "10",
  /** Physical pin 11: OUT7; open_collector. */
  "OUT7": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: OUT6; open_collector. */
  "OUT6": "13",
  /** Physical pin 14: OUT5; open_collector. */
  "OUT5": "14",
  /** Physical pin 15: COM; passive. */
  "COM": "15",
  /** Physical pin 16: OUT4; open_collector. */
  "OUT4": "16",
}) {
  override schema = "Driver:MAX4820xUP";
  override referencePrefix = "U";
}

/**
 * 8-Channel Parallel Interface Low-Side Driver, TSSOP-20
 *
 * KiCad symbol: `Driver:MAX4821xUP`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX4820-MAX4821.pdf
 * Keywords: Relay Driver.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP2.85x4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX4821xUP extends Component.withPins({
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 17: OUT3; open_collector. */
  "OUT3": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: OUT2; open_collector. */
  "OUT2": "19",
  /** Physical pin 20: OUT1; open_collector. */
  "OUT1": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: ~{SET}; input. */
  "~{SET}": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: LVL; input. */
  "LVL": "5",
  /** Physical pin 6: A0; input. */
  "A0": "6",
  /** Physical pin 7: A1; input. */
  "A1": "7",
  /** Physical pin 8: A2; input. */
  "A2": "8",
  /** Physical pin 10: OUT8; open_collector. */
  "OUT8": "10",
  /** Physical pin 11: OUT7; open_collector. */
  "OUT7": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: OUT6; open_collector. */
  "OUT6": "13",
  /** Physical pin 14: OUT5; open_collector. */
  "OUT5": "14",
  /** Physical pin 15: COM; passive. */
  "COM": "15",
  /** Physical pin 16: OUT4; open_collector. */
  "OUT4": "16",
}) {
  override schema = "Driver:MAX4821xUP";
  override referencePrefix = "U";
}

/**
 * 8-CHANNEL RELAY DRIVER WITH INTEGRATED 5-V LDO AND ZERO-VOLT DETECTION TSSOP-20
 *
 * KiCad symbol: `Driver:TPL9201_TSSOP`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*4.4x6.5mm*P0.65mm*ThermalVias*.
 * @see http://www.ti.com/lit/ds/symlink/tpl9201.pdf
 * Keywords: Relay Driver.
 * Default footprint: Package_SO:HTSSOP-20-1EP_4.4x6.5mm_P0.65mm_EP3.4x6.5mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPL9201_TSSOP extends Component.withPins({
  /** Physical pin 1: ZVS; output. */
  "ZVS": "1",
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
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: EN1; input. */
  "EN1": "12",
  /** Physical pin 13: Rdelay; output. */
  "Rdelay": "13",
  /** Physical pin 14: RST; bidirectional. */
  "RST": "14",
  /** Physical pin 15: MOSI; input. */
  "MOSI": "15",
  /** Physical pin 16: CS; input. */
  "CS": "16",
  /** Physical pin 17: SCLK; input. */
  "SCLK": "17",
  /** Physical pin 18: 5Vout; power_out. */
  "5Vout": "18",
  /** Physical pin 19: Vin; power_in. */
  "Vin": "19",
  /** Physical pin 20: SYN; input. */
  "SYN": "20",
  /** Physical pin 21: PAD; power_in. */
  "PAD": "21",
}) {
  override schema = "Driver:TPL9201_TSSOP";
  override referencePrefix = "U";
}

/**
 * Direct Drive Ultrasonic Sensor IC with Logarithmic Amplifier, WQFN-20
 *
 * KiCad symbol: `Driver:TUSS4470`. Reference prefix: `U`.
 * Footprint filters: *WQFN*4x4mm?P0.5mm?EP2.7*x2.7*mm*.
 * @see https://www.ti.com/lit/ds/symlink/tuss4470.pdf
 * Keywords: Texas-Instruments SPI H-bridge TUSS4470TRTJT TUSS4470TRTJR.
 * Default footprint: Package_DFN_QFN:WQFN-20-1EP_4x4mm_P0.5mm_EP2.7x2.7mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TUSS4470 extends Component.withPins({
  /** Physical pin 1: OUT3; output. */
  "OUT3": "1",
  /** Physical pin 2: DGND; power_in. */
  "DGND": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: SCLK; input. */
  "SCLK": "4",
  /** Physical pin 5: SDI; input. */
  "SDI": "5",
  /** Physical pin 6: SDO; tri_state. */
  "SDO": "6",
  /** Physical pin 7: IO1; input. */
  "IO1": "7",
  /** Physical pin 8: IO2; input. */
  "IO2": "8",
  /** Physical pin 9: VOUT; output. */
  "VOUT": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
  /** Physical pin 11: INN; input. */
  "INN": "11",
  /** Physical pin 12: INP; input. */
  "INP": "12",
  /** Physical pin 13: SGND; power_in. */
  "SGND": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: OUTA; tri_state. */
  "OUTA": "15",
  /** Physical pin 16: OUTB; tri_state. */
  "OUTB": "16",
  /** Physical pin 17: VDRV; power_in. */
  "VDRV": "17",
  /** Physical pin 18: FLT; bidirectional. */
  "FLT": "18",
  /** Physical pin 19: OUT4; output. */
  "OUT4": "19",
  /** Physical pin 20: VPWR; power_in. */
  "VPWR": "20",
  /** Physical pin 21: EPAD; passive. */
  "EPAD": "21",
}) {
  override schema = "Driver:TUSS4470";
  override referencePrefix = "U";
}

