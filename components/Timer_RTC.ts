// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Real-Time Clock, I2C Interface, 3 GPO, QFN-16
 *
 * KiCad symbol: `Timer_RTC:AB0805`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see https://abracon.com/Precisiontiming/AB08X5-RTC.PDF
 * Keywords: rtc.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AB0805 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: WDI; input. */
  "WDI": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: ~{IRQ2}; open_collector. */
  "~{IRQ2}": "4",
  /** Physical pin 5: VBAT; power_in. */
  "VBAT": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS_9": "9",
  /** Physical pin 10: EXTI; input. */
  "EXTI": "10",
  /** Physical pin 11: FOUT/~{IRQ}; open_collector. */
  "FOUT/~{IRQ}": "11",
  /** Physical pin 12: ~{TIRQ}; open_collector. */
  "~{TIRQ}": "12",
  /** Physical pin 13: VCC; power_in. */
  "VCC": "13",
  /** Physical pin 14: AF; passive. */
  "AF": "14",
  /** Physical pin 15: XO; output. */
  "XO": "15",
  /** Physical pin 16: XI; input. */
  "XI": "16",
  /** Physical pin 17: VSS; passive. */
  "VSS_17": "17",
}) {
  override schema = "Timer_RTC:AB0805";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI Interface, 2 GPO, QFN-16
 *
 * KiCad symbol: `Timer_RTC:AB0815`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see https://abracon.com/Precisiontiming/AB08X5-RTC.PDF
 * Keywords: rtc.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AB0815 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: WDI; input. */
  "WDI": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: ~{IRQ2}; open_collector. */
  "~{IRQ2}": "4",
  /** Physical pin 5: VBAT; power_in. */
  "VBAT": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: SDI; input. */
  "SDI": "9",
  /** Physical pin 10: EXTI; input. */
  "EXTI": "10",
  /** Physical pin 11: FOUT/~{IRQ}; open_collector. */
  "FOUT/~{IRQ}": "11",
  /** Physical pin 12: ~{CE}; input. */
  "~{CE}": "12",
  /** Physical pin 13: VCC; power_in. */
  "VCC": "13",
  /** Physical pin 14: AF; passive. */
  "AF": "14",
  /** Physical pin 15: XO; output. */
  "XO": "15",
  /** Physical pin 16: XI; input. */
  "XI": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS": "17",
}) {
  override schema = "Timer_RTC:AB0815";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, I2C Interface, 4 GPO, QFN-16
 *
 * KiCad symbol: `Timer_RTC:AB1805`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see https://abracon.com/Precisiontiming/AB18X5-RTC.pdf
 * Keywords: rtc.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AB1805 extends Component.withPins({
  /** Physical pin 1: ~{RST}; open_collector. */
  "~{RST}": "1",
  /** Physical pin 2: WDI; input. */
  "WDI": "2",
  /** Physical pin 3: ~{EXTR}; input. */
  "~{EXTR}": "3",
  /** Physical pin 4: ~{IRQ2}; open_collector. */
  "~{IRQ2}": "4",
  /** Physical pin 5: VBAT; power_in. */
  "VBAT": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: CLKOUT/~{IRQ3}; output. */
  "CLKOUT/~{IRQ3}": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS_9": "9",
  /** Physical pin 10: EXTI; input. */
  "EXTI": "10",
  /** Physical pin 11: FOUT/~{IRQ}; open_collector. */
  "FOUT/~{IRQ}": "11",
  /** Physical pin 12: ~{TIRQ}; open_collector. */
  "~{TIRQ}": "12",
  /** Physical pin 13: VCC; power_in. */
  "VCC": "13",
  /** Physical pin 14: AF; passive. */
  "AF": "14",
  /** Physical pin 15: XO; output. */
  "XO": "15",
  /** Physical pin 16: XI; input. */
  "XI": "16",
  /** Physical pin 17: VSS; passive. */
  "VSS_17": "17",
}) {
  override schema = "Timer_RTC:AB1805";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI Interface, 3 GPO, QFN-16
 *
 * KiCad symbol: `Timer_RTC:AB1815`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*.
 * @see https://abracon.com/Precisiontiming/AB18X5-RTC.pdf
 * Keywords: rtc.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AB1815 extends Component.withPins({
  /** Physical pin 1: ~{RST}; open_collector. */
  "~{RST}": "1",
  /** Physical pin 2: WDI; input. */
  "WDI": "2",
  /** Physical pin 3: ~{EXTR}; input. */
  "~{EXTR}": "3",
  /** Physical pin 4: ~{IRQ2}; open_collector. */
  "~{IRQ2}": "4",
  /** Physical pin 5: VBAT; power_in. */
  "VBAT": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: CLKOUT/~{IRQ3}; output. */
  "CLKOUT/~{IRQ3}": "8",
  /** Physical pin 9: SDI; input. */
  "SDI": "9",
  /** Physical pin 10: EXTI; input. */
  "EXTI": "10",
  /** Physical pin 11: FOUT/~{IRQ}; open_collector. */
  "FOUT/~{IRQ}": "11",
  /** Physical pin 12: ~{CE}; input. */
  "~{CE}": "12",
  /** Physical pin 13: VCC; power_in. */
  "VCC": "13",
  /** Physical pin 14: AF; passive. */
  "AF": "14",
  /** Physical pin 15: XO; output. */
  "XO": "15",
  /** Physical pin 16: XI; input. */
  "XI": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS": "17",
}) {
  override schema = "Timer_RTC:AB1815";
  override referencePrefix = "U";
}

/**
 * Serial, I2C Real-time clock, Trickle charger, 3V to 3.6V VCC, -40°C to +85°C, SOIC-8
 *
 * KiCad symbol: `Timer_RTC:BQ32000`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm?P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq32000.pdf
 * Keywords: RTC, I2C Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ32000 extends Component.withPins({
  /** Physical pin 1: OSCI; input. */
  "OSCI": "1",
  /** Physical pin 2: OSCO; input. */
  "OSCO": "2",
  /** Physical pin 3: VBACK; power_in. */
  "VBACK": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{IRQ}; open_collector. */
  "~{IRQ}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Timer_RTC:BQ32000";
  override referencePrefix = "U";
}

/**
 * Serial, I2C Real-time clock, 3V to 3.6V VCC, -40°C to +85°C, SOIC-8
 *
 * KiCad symbol: `Timer_RTC:BQ32002`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm?P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/bq32002.pdf
 * Keywords: RTC, I2C Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BQ32002 extends Component.withPins({
  /** Physical pin 1: OSCI; input. */
  "OSCI": "1",
  /** Physical pin 2: OSCO; input. */
  "OSCO": "2",
  /** Physical pin 3: VBACK; power_in. */
  "VBACK": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{IRQ}; open_collector. */
  "~{IRQ}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Timer_RTC:BQ32002";
  override referencePrefix = "U";
}

/**
 * Trickle-Charge Timekeeping Chip, 2.0V to 5.5V VCC, 0°C to +70°C, DIP-8
 *
 * KiCad symbol: `Timer_RTC:DS1302+`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1302.pdf
 * Keywords: RTC Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1302_ extends Component.withPins({
  /** Physical pin 1: VCC2; power_in. */
  "VCC2": "1",
  /** Physical pin 2: X1; input. */
  "X1": "2",
  /** Physical pin 3: X2; input. */
  "X2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: CE; input. */
  "CE": "5",
  /** Physical pin 6: I/O; bidirectional. */
  "I/O": "6",
  /** Physical pin 7: SCLK; input. */
  "SCLK": "7",
  /** Physical pin 8: VCC1; power_in. */
  "VCC1": "8",
}) {
  override schema = "Timer_RTC:DS1302+";
  override referencePrefix = "U";
}

/**
 * Trickle-Charge Timekeeping Chip, 2.0V to 5.5V VCC, -40°C to +85°C, DIP-8
 *
 * KiCad symbol: `Timer_RTC:DS1302N+`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1302.pdf
 * Keywords: RTC Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1302N_ extends Component.withPins({
  /** Physical pin 1: VCC2; power_in. */
  "VCC2": "1",
  /** Physical pin 2: X1; input. */
  "X1": "2",
  /** Physical pin 3: X2; input. */
  "X2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: CE; input. */
  "CE": "5",
  /** Physical pin 6: I/O; bidirectional. */
  "I/O": "6",
  /** Physical pin 7: SCLK; input. */
  "SCLK": "7",
  /** Physical pin 8: VCC1; power_in. */
  "VCC1": "8",
}) {
  override schema = "Timer_RTC:DS1302N+";
  override referencePrefix = "U";
}

/**
 * Trickle-Charge Timekeeping Chip, 2.0V to 5.5V VCC, 0°C to +70°C, SOIC-8 (208 mil)
 *
 * KiCad symbol: `Timer_RTC:DS1302S+`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1302.pdf
 * Keywords: RTC Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1302S_ extends Component.withPins({
  /** Physical pin 1: VCC2; power_in. */
  "VCC2": "1",
  /** Physical pin 2: X1; input. */
  "X1": "2",
  /** Physical pin 3: X2; input. */
  "X2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: CE; input. */
  "CE": "5",
  /** Physical pin 6: I/O; bidirectional. */
  "I/O": "6",
  /** Physical pin 7: SCLK; input. */
  "SCLK": "7",
  /** Physical pin 8: VCC1; power_in. */
  "VCC1": "8",
}) {
  override schema = "Timer_RTC:DS1302S+";
  override referencePrefix = "U";
}

/**
 * Trickle-Charge Timekeeping Chip, 2.0V to 5.5V VCC, -40°C to +85°C, SOIC-8 (208 mil)
 *
 * KiCad symbol: `Timer_RTC:DS1302SN+`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1302.pdf
 * Keywords: RTC Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1302SN_ extends Component.withPins({
  /** Physical pin 1: VCC2; power_in. */
  "VCC2": "1",
  /** Physical pin 2: X1; input. */
  "X1": "2",
  /** Physical pin 3: X2; input. */
  "X2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: CE; input. */
  "CE": "5",
  /** Physical pin 6: I/O; bidirectional. */
  "I/O": "6",
  /** Physical pin 7: SCLK; input. */
  "SCLK": "7",
  /** Physical pin 8: VCC1; power_in. */
  "VCC1": "8",
}) {
  override schema = "Timer_RTC:DS1302SN+";
  override referencePrefix = "U";
}

/**
 * Trickle-Charge Timekeeping Chip, 2.0V to 5.5V VCC, 0°C to +70°C, SOIC-8 (150 mil)
 *
 * KiCad symbol: `Timer_RTC:DS1302Z+`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm?P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1302.pdf
 * Keywords: RTC Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1302Z_ extends Component.withPins({
  /** Physical pin 1: VCC2; power_in. */
  "VCC2": "1",
  /** Physical pin 2: X1; input. */
  "X1": "2",
  /** Physical pin 3: X2; input. */
  "X2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: CE; input. */
  "CE": "5",
  /** Physical pin 6: I/O; bidirectional. */
  "I/O": "6",
  /** Physical pin 7: SCLK; input. */
  "SCLK": "7",
  /** Physical pin 8: VCC1; power_in. */
  "VCC1": "8",
}) {
  override schema = "Timer_RTC:DS1302Z+";
  override referencePrefix = "U";
}

/**
 * Trickle-Charge Timekeeping Chip, 2.0V to 5.5V VCC, -40°C to +85°C, SOIC-8 (150 mil)
 *
 * KiCad symbol: `Timer_RTC:DS1302ZN+`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm?P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1302.pdf
 * Keywords: RTC Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1302ZN_ extends Component.withPins({
  /** Physical pin 1: VCC2; power_in. */
  "VCC2": "1",
  /** Physical pin 2: X1; input. */
  "X1": "2",
  /** Physical pin 3: X2; input. */
  "X2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: CE; input. */
  "CE": "5",
  /** Physical pin 6: I/O; bidirectional. */
  "I/O": "6",
  /** Physical pin 7: SCLK; input. */
  "SCLK": "7",
  /** Physical pin 8: VCC1; power_in. */
  "VCC1": "8",
}) {
  override schema = "Timer_RTC:DS1302ZN+";
  override referencePrefix = "U";
}

/**
 * 64 x 8, Serial, I2C Real-time clock, 4.5V to 5.5V VCC, 0°C to +70°C, DIP-8
 *
 * KiCad symbol: `Timer_RTC:DS1307+`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1307.pdf
 * Keywords: RTC, Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1307_ extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; input. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SQW/OUT; open_collector. */
  "SQW/OUT": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Timer_RTC:DS1307+";
  override referencePrefix = "U";
}

/**
 * 64 x 8, Serial, I2C Real-time clock, 4.5V to 5.5V VCC, -40°C to +85°C, DIP-8
 *
 * KiCad symbol: `Timer_RTC:DS1307N+`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1307.pdf
 * Keywords: RTC, Trickle-Charge Timekeeping Chip.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1307N_ extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; input. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SQW/OUT; open_collector. */
  "SQW/OUT": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Timer_RTC:DS1307N+";
  override referencePrefix = "U";
}

/**
 * 64 x 8, Serial, I2C Real-time clock, 4.5V to 5.5V VCC, 0°C to +70°C, SOIC-8
 *
 * KiCad symbol: `Timer_RTC:DS1307Z+`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm?P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1307.pdf
 * Keywords: RTC, I2C Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1307Z_ extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; input. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SQW/OUT; open_collector. */
  "SQW/OUT": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Timer_RTC:DS1307Z+";
  override referencePrefix = "U";
}

/**
 * 64 x 8, Serial, I2C Real-time clock, 4.5V to 5.5V VCC, -40°C to +85°C, SOIC-8
 *
 * KiCad symbol: `Timer_RTC:DS1307ZN+`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm?P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1307.pdf
 * Keywords: RTC, I2C Timekeeping Chip.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1307ZN_ extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; input. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SQW/OUT; open_collector. */
  "SQW/OUT": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Timer_RTC:DS1307ZN+";
  override referencePrefix = "U";
}

/**
 * Elapsed Time Counter, -40 to +85 C, 2.5V to 5.5V VCC, DIP-8, SO-8
 *
 * KiCad symbol: `Timer_RTC:DS1602`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SO*5.3x6.2mm?P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1602.pdf
 * Keywords: Elapsed Time Counter.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1602 extends Component.withPins({
  /** Physical pin 1: ~{RST}; input. */
  "~{RST}": "1",
  /** Physical pin 2: DQ; bidirectional. */
  "DQ": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: VBAT; power_in. */
  "VBAT": "5",
  /** Physical pin 6: XTAL2; passive. */
  "XTAL2": "6",
  /** Physical pin 7: XTAL1; passive. */
  "XTAL1": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Timer_RTC:DS1602";
  override referencePrefix = "U";
}

/**
 * Extremely Accurate I2C-Integrated RTC/TCXO/Crystal SOIC-16
 *
 * KiCad symbol: `Timer_RTC:DS3231M`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS3231.pdf
 * Keywords: RTC TCXO Realtime Time Clock Crystal Oscillator I2C.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS3231M extends Component.withPins({
  /** Physical pin 1: 32KHZ; open_collector. */
  "32KHZ": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: ~{INT}/SQW; open_collector. */
  "~{INT}/SQW": "3",
  /** Physical pin 4: ~{RST}; bidirectional. */
  "~{RST}": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: VBAT; power_in. */
  "VBAT": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: SCL; input. */
  "SCL": "16",
}) {
  override schema = "Timer_RTC:DS3231M";
  override referencePrefix = "U";
}

/**
 * ±5ppm, I2C Real-Time Clock SOIC-8
 *
 * KiCad symbol: `Timer_RTC:DS3231MZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS3231M.pdf
 * Keywords: RTC TCXO Realtime Time Clock MEMS I2C.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS3231MZ extends Component.withPins({
  /** Physical pin 1: 32KHZ; open_collector. */
  "32KHZ": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: ~{INT}/SQW; open_collector. */
  "~{INT}/SQW": "3",
  /** Physical pin 4: ~{RST}; bidirectional. */
  "~{RST}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
}) {
  override schema = "Timer_RTC:DS3231MZ";
  override referencePrefix = "U";
}

/**
 * ±5ppm, I2C Real-Time Clock with SRAM SOIC-8
 *
 * KiCad symbol: `Timer_RTC:DS3232M`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS3232M.pdf
 * Keywords: RTC TCXO Realtime Time Clock MEMS SRAM I2C.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS3232M extends Component.withPins({
  /** Physical pin 1: 32KHZ; output. */
  "32KHZ": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: ~{INT}/SQW; open_collector. */
  "~{INT}/SQW": "3",
  /** Physical pin 4: ~{RST}; bidirectional. */
  "~{RST}": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
}) {
  override schema = "Timer_RTC:DS3232M";
  override referencePrefix = "U";
}

/**
 * Low-power I2C RTC with alarm interrupt QFN
 *
 * KiCad symbol: `Timer_RTC:M41T62Q`. Reference prefix: `U`.
 * Footprint filters: QFN*16*1EP*3x3mm*P0.5mm*EP1.8x1.8mm*.
 * @see http://www.st.com/resource/en/datasheet/m41t62.pdf
 * Keywords: I2C RTC Alarm interrupt.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.8x1.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M41T62Q extends Component.withPins({
  /** Physical pin 1: XI; input. */
  "XI": "1",
  /** Physical pin 2: XO; input. */
  "XO": "2",
  /** Physical pin 4: SQW; output. */
  "SQW": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
  /** Physical pin 11: ~{IRQ}/OUT; output. */
  "~{IRQ}/OUT": "11",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
  override schema = "Timer_RTC:M41T62Q";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, I2C, Battery Backup, TDFN-8
 *
 * KiCad symbol: `Timer_RTC:MCP7940N-xMNY`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005010F.pdf
 * Keywords: realtime clock RTC.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.36x1.46mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP7940N_xMNY extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; output. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: MFP; open_collector. */
  "MFP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: EP; power_in. */
  "EP": "9",
}) {
  override schema = "Timer_RTC:MCP7940N-xMNY";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, I2C, Battery Backup, MSOP-8
 *
 * KiCad symbol: `Timer_RTC:MCP7940N-xMS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005010F.pdf
 * Keywords: realtime clock RTC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP7940N_xMS extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; output. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: MFP; open_collector. */
  "MFP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Timer_RTC:MCP7940N-xMS";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, I2C, Battery Backup, DIP-8
 *
 * KiCad symbol: `Timer_RTC:MCP7940N-xP`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005010F.pdf
 * Keywords: realtime clock RTC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP7940N_xP extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; output. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: MFP; open_collector. */
  "MFP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Timer_RTC:MCP7940N-xP";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, I2C, Battery Backup, SOIC-8
 *
 * KiCad symbol: `Timer_RTC:MCP7940N-xSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005010F.pdf
 * Keywords: realtime clock RTC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP7940N_xSN extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; output. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: MFP; open_collector. */
  "MFP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Timer_RTC:MCP7940N-xSN";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, I2C, Battery Backup, TSSOP-8
 *
 * KiCad symbol: `Timer_RTC:MCP7940N-xST`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*, MSOP*3x3mm*P0.65mm*, DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005010F.pdf
 * Keywords: realtime clock RTC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP7940N_xST extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; output. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: MFP; open_collector. */
  "MFP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Timer_RTC:MCP7940N-xST";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI, 64Bytes SRAM, 1Kbit EEPROM, MSOP-10
 *
 * KiCad symbol: `Timer_RTC:MCP79510-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/MCP7951X-MCP7952X-Battery-Backed-SPI-RTCC-DS20002300.pdf
 * Keywords: realtime clock RTC SPI.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP79510_xMS extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; output. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: SI; input. */
  "SI": "6",
  /** Physical pin 7: SO; output. */
  "SO": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: MFP; open_collector. */
  "MFP": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
  override schema = "Timer_RTC:MCP79510-xMS";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI, 64Bytes SRAM, 1Kbit EEPROM, Unique ID EUI-48, MSOP-10
 *
 * KiCad symbol: `Timer_RTC:MCP79511-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/MCP7951X-MCP7952X-Battery-Backed-SPI-RTCC-DS20002300.pdf
 * Keywords: realtime clock RTC SPI.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP79511_xMS extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; output. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: SI; input. */
  "SI": "6",
  /** Physical pin 7: SO; output. */
  "SO": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: MFP; open_collector. */
  "MFP": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
  override schema = "Timer_RTC:MCP79511-xMS";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI, 64Bytes SRAM, 1Kbit EEPROM, Unique ID EUI-64, MSOP-10
 *
 * KiCad symbol: `Timer_RTC:MCP79512-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/MCP7951X-MCP7952X-Battery-Backed-SPI-RTCC-DS20002300.pdf
 * Keywords: realtime clock RTC SPI.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP79512_xMS extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; output. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: SI; input. */
  "SI": "6",
  /** Physical pin 7: SO; output. */
  "SO": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: MFP; open_collector. */
  "MFP": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
  override schema = "Timer_RTC:MCP79512-xMS";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI, 64Bytes SRAM, 2Kbit EEPROM, MSOP-10
 *
 * KiCad symbol: `Timer_RTC:MCP79520-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/MCP7951X-MCP7952X-Battery-Backed-SPI-RTCC-DS20002300.pdf
 * Keywords: realtime clock RTC SPI.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP79520_xMS extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; output. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: SI; input. */
  "SI": "6",
  /** Physical pin 7: SO; output. */
  "SO": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: MFP; open_collector. */
  "MFP": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
  override schema = "Timer_RTC:MCP79520-xMS";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI, 64Bytes SRAM, 2Kbit EEPROM, Unique ID EUI-48, MSOP-10
 *
 * KiCad symbol: `Timer_RTC:MCP79521-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/MCP7951X-MCP7952X-Battery-Backed-SPI-RTCC-DS20002300.pdf
 * Keywords: realtime clock RTC SPI.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP79521_xMS extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; output. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: SI; input. */
  "SI": "6",
  /** Physical pin 7: SO; output. */
  "SO": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: MFP; open_collector. */
  "MFP": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
  override schema = "Timer_RTC:MCP79521-xMS";
  override referencePrefix = "U";
}

/**
 * Real-Time Clock, SPI, 64Bytes SRAM, 2Kbit EEPROM, Unique ID EUI-64, MSOP-10
 *
 * KiCad symbol: `Timer_RTC:MCP79522-xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/MCP7951X-MCP7952X-Battery-Backed-SPI-RTCC-DS20002300.pdf
 * Keywords: realtime clock RTC SPI.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP79522_xMS extends Component.withPins({
  /** Physical pin 1: X1; input. */
  "X1": "1",
  /** Physical pin 2: X2; output. */
  "X2": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: SI; input. */
  "SI": "6",
  /** Physical pin 7: SO; output. */
  "SO": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: MFP; open_collector. */
  "MFP": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
  override schema = "Timer_RTC:MCP79522-xMS";
  override referencePrefix = "U";
}

/**
 * Nano-power highly accurate RTC with integrated quartz crystal for automotive, I2C / SPI interface, LSON-16
 *
 * KiCad symbol: `Timer_RTC:PCA2131`. Reference prefix: `U`.
 * Footprint filters: *LSON*3.5x4.5mm?P0.5mm?EP2x3.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA2131.pdf
 * Keywords: CMOS Real-Time-Clock PCA2131TF/Q900.
 * Default footprint: Package_SON:NXP_LSON-16-1EP_3.5x4.5mm_P0.5mm_EP2x3.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA2131 extends Component.withPins({
  /** Physical pin 1: IFS; input. */
  "IFS": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: SDI; input. */
  "SDI": "3",
  /** Physical pin 4: SDO; tri_state. */
  "SDO": "4",
  /** Physical pin 5: SDA/~{CE}; bidirectional. */
  "SDA/~{CE}": "5",
  /** Physical pin 6: CLKOUT; output. */
  "CLKOUT": "6",
  /** Physical pin 7: V_{SS}; power_in. */
  "V_{SS}": "7",
  /** Physical pin 8: ~{TS1}; input. */
  "~{TS1}": "8",
  /** Physical pin 9: ~{TS2}; input. */
  "~{TS2}": "9",
  /** Physical pin 10: ~{TS3}; input. */
  "~{TS3}": "10",
  /** Physical pin 11: ~{TS4}; input. */
  "~{TS4}": "11",
  /** Physical pin 12: ~{INTB}; open_collector. */
  "~{INTB}": "12",
  /** Physical pin 13: ~{INTA}; open_collector. */
  "~{INTA}": "13",
  /** Physical pin 14: BBS; power_out. */
  "BBS": "14",
  /** Physical pin 15: V_{DD}; power_in. */
  "V_{DD}": "15",
  /** Physical pin 16: V_{BAT}; power_in. */
  "V_{BAT}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
  override schema = "Timer_RTC:PCA2131";
  override referencePrefix = "U";
}

/**
 * I2C Real-Time Clock Calendar w/ Alarm, DFN-10
 *
 * KiCad symbol: `Timer_RTC:PCF85063ATL`. Reference prefix: `U`.
 * Footprint filters: DFN*2.6x2.6mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF85063A.pdf
 * Keywords: RTC I2C.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_2.6x2.6mm_P0.5mm_EP1.3x2.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF85063ATL extends Component.withPins({
  /** Physical pin 1: OSCI; input. */
  "OSCI": "1",
  /** Physical pin 2: OSCO; output. */
  "OSCO": "2",
  /** Physical pin 3: CLKOE; input. */
  "CLKOE": "3",
  /** Physical pin 4: ~{INT}; output. */
  "~{INT}": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
  /** Physical pin 9: CLKOUT; output. */
  "CLKOUT": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
}) {
  override schema = "Timer_RTC:PCF85063ATL";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, SOIC-8
 *
 * KiCad symbol: `Timer_RTC:PCF8523T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8523.pdf
 * Keywords: I2C RTC Clock Calendar.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF8523T extends Component.withPins({
  /** Physical pin 1: OSCI; input. */
  "OSCI": "1",
  /** Physical pin 2: OSCO; output. */
  "OSCO": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{INT1}/CLKOUT; open_collector. */
  "~{INT1}/CLKOUT": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Timer_RTC:PCF8523T";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, HVSON-8
 *
 * KiCad symbol: `Timer_RTC:PCF8523TK`. Reference prefix: `U`.
 * Footprint filters: HVSON*1EP*4x4mm*P0.8mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8523.pdf
 * Keywords: I2C RTC Clock Calendar.
 * Default footprint: Package_SON:HVSON-8-1EP_4x4mm_P0.8mm_EP2.2x3.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF8523TK extends Component.withPins({
  /** Physical pin 1: OSCI; input. */
  "OSCI": "1",
  /** Physical pin 2: OSCO; output. */
  "OSCO": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS_4": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{INT1}/CLKOUT; open_collector. */
  "~{INT1}/CLKOUT": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
  override schema = "Timer_RTC:PCF8523TK";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, TSSOP-14
 *
 * KiCad symbol: `Timer_RTC:PCF8523TS`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8523.pdf
 * Keywords: I2C RTC Clock Calendar.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF8523TS extends Component.withPins({
  /** Physical pin 1: OSCI; input. */
  "OSCI": "1",
  /** Physical pin 2: OSCO; output. */
  "OSCO": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: VBAT; power_in. */
  "VBAT": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: ~{INT2}; open_collector. */
  "~{INT2}": "7",
  /** Physical pin 8: CLKOUT; open_collector. */
  "CLKOUT": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: SDA; bidirectional. */
  "SDA": "10",
  /** Physical pin 11: SCL; input. */
  "SCL": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: ~{INT1}/CLKOUT; output. */
  "~{INT1}/CLKOUT": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
}) {
  override schema = "Timer_RTC:PCF8523TS";
  override referencePrefix = "U";
}

/**
 * Tiny Real-Time Clock/calendar with alarm function, battery switch-over, time stamp input, I2C bus, SO-8
 *
 * KiCad symbol: `Timer_RTC:PCF85263AT`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF85263A.pdf
 * Keywords: RTC battery I2C.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF85263AT extends Component.withPins({
  /** Physical pin 1: OSCI; input. */
  "OSCI": "1",
  /** Physical pin 2: OSCO; output. */
  "OSCO": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{INTA}; open_collector. */
  "~{INTA}": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Timer_RTC:PCF85263AT";
  override referencePrefix = "U";
}

/**
 * Tiny Real-Time Clock/calendar with alarm function, battery switch-over, time stamp input, I2C bus, DFN-10
 *
 * KiCad symbol: `Timer_RTC:PCF85263ATL`. Reference prefix: `U`.
 * Footprint filters: DFN*2.6x2.6mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF85263A.pdf
 * Keywords: RTC battery I2C.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_2.6x2.6mm_P0.5mm_EP1.3x2.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF85263ATL extends Component.withPins({
  /** Physical pin 1: OSCI; input. */
  "OSCI": "1",
  /** Physical pin 2: OSCO; output. */
  "OSCO": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: TS; bidirectional. */
  "TS": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: CLK; output. */
  "CLK": "8",
  /** Physical pin 9: ~{INTA}; open_collector. */
  "~{INTA}": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
  /** Physical pin 11: PAD; no_connect. */
  "PAD": "11",
}) {
  override schema = "Timer_RTC:PCF85263ATL";
  override referencePrefix = "U";
}

/**
 * Tiny Real-Time Clock/calendar with alarm function, battery switch-over, time stamp input, I2C bus, TSSOP-8
 *
 * KiCad symbol: `Timer_RTC:PCF85263ATT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF85263A.pdf
 * Keywords: RTC battery I2C.
 * Default footprint: Package_SO:TSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF85263ATT extends Component.withPins({
  /** Physical pin 1: OSCI; input. */
  "OSCI": "1",
  /** Physical pin 2: OSCO; output. */
  "OSCO": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{INTA}; open_collector. */
  "~{INTA}": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Timer_RTC:PCF85263ATT";
  override referencePrefix = "U";
}

/**
 * Tiny Real-Time Clock/calendar with alarm function, battery switch-over, time stamp input, I2C bus, TSSOP-10
 *
 * KiCad symbol: `Timer_RTC:PCF85263ATT1`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF85263A.pdf
 * Keywords: RTC battery I2C.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF85263ATT1 extends Component.withPins({
  /** Physical pin 1: OSCI; input. */
  "OSCI": "1",
  /** Physical pin 2: OSCO; output. */
  "OSCO": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: TS; bidirectional. */
  "TS": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: CLK; output. */
  "CLK": "8",
  /** Physical pin 9: ~{INTA}; open_collector. */
  "~{INTA}": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
}) {
  override schema = "Timer_RTC:PCF85263ATT1";
  override referencePrefix = "U";
}

/**
 * Tiny Real-Time Clock/calendar with 64 byte RAM, alarm function, battery switch-over, time stamp input, I2C bus, TSSOP-8
 *
 * KiCad symbol: `Timer_RTC:PCF85363ATT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF85363A.pdf
 * Keywords: RTC RAM battery I2C.
 * Default footprint: Package_SO:TSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF85363ATT extends Component.withPins({
  /** Physical pin 1: OSCI; input. */
  "OSCI": "1",
  /** Physical pin 2: OSCO; output. */
  "OSCO": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{INTA}; open_collector. */
  "~{INTA}": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Timer_RTC:PCF85363ATT";
  override referencePrefix = "U";
}

/**
 * Tiny Real-Time Clock/calendar with 64 byte RAM, alarm function, battery switch-over, time stamp input, I2C bus, TSSOP-10
 *
 * KiCad symbol: `Timer_RTC:PCF85363ATT1`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF85363A.pdf
 * Keywords: RTC RAM battery I2C.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF85363ATT1 extends Component.withPins({
  /** Physical pin 1: OSCI; input. */
  "OSCI": "1",
  /** Physical pin 2: OSCO; output. */
  "OSCO": "2",
  /** Physical pin 3: VBAT; power_in. */
  "VBAT": "3",
  /** Physical pin 4: TS; bidirectional. */
  "TS": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: CLK; output. */
  "CLK": "8",
  /** Physical pin 9: ~{INTA}; open_collector. */
  "~{INTA}": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
}) {
  override schema = "Timer_RTC:PCF85363ATT1";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, SOIC-8
 *
 * KiCad symbol: `Timer_RTC:PCF8563T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8563.pdf
 * Keywords: I2C RTC Clock Calendar.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF8563T extends Component.withPins({
  /** Physical pin 1: OSCI; input. */
  "OSCI": "1",
  /** Physical pin 2: OSCO; output. */
  "OSCO": "2",
  /** Physical pin 3: ~{INT}; output. */
  "~{INT}": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: CLKO; output. */
  "CLKO": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Timer_RTC:PCF8563T";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, TSSOP-8
 *
 * KiCad symbol: `Timer_RTC:PCF8563TS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8563.pdf
 * Keywords: I2C RTC Clock Calendar.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF8563TS extends Component.withPins({
  /** Physical pin 1: OSCI; input. */
  "OSCI": "1",
  /** Physical pin 2: OSCO; output. */
  "OSCO": "2",
  /** Physical pin 3: ~{INT}; output. */
  "~{INT}": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: CLKO; output. */
  "CLKO": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Timer_RTC:PCF8563TS";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, Extreme Low Power, MicroCrystal C3
 *
 * KiCad symbol: `Timer_RTC:RV-1805-C3`. Reference prefix: `U`.
 * Footprint filters: RTC*SMD*MicroCrystal*C3*2.5x3.7mm*.
 * @see https://www.microcrystal.com/fileadmin/Media/Products/RTC/Datasheet/RV-1805-C3.pdf
 * Keywords: Low Power RTC I2C.
 * Default footprint: Package_SON:RTC_SMD_MicroCrystal_C3_2.5x3.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RV_1805_C3 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: Cap_RC; passive. */
  "Cap_RC": "2",
  /** Physical pin 3: CLK/~{INT}; open_collector. */
  "CLK/~{INT}": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: VBACKUP; power_in. */
  "VBACKUP": "7",
  /** Physical pin 8: PSW; open_collector. */
  "PSW": "8",
  /** Physical pin 9: WDI; input. */
  "WDI": "9",
  /** Physical pin 10: ~{RST}; open_collector. */
  "~{RST}": "10",
}) {
  override schema = "Timer_RTC:RV-1805-C3";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, Extreme Low Power, 1.1 V to 5.5 V, MicroCrystal C7
 *
 * KiCad symbol: `Timer_RTC:RV-3028-C7`. Reference prefix: `U`.
 * Footprint filters: MicroCrystal*C7*1.5x3.2mm*.
 * @see https://www.microcrystal.com/fileadmin/Media/Products/RTC/Datasheet/RV-3028-C7.pdf
 * Keywords: Low-power RTC I2C.
 * Default footprint: Package_SON:MicroCrystal_C7_SON-8_1.5x3.2mm_P0.9mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RV_3028_C7 extends Component.withPins({
  /** Physical pin 1: CLKOUT; output. */
  "CLKOUT": "1",
  /** Physical pin 2: ~{INT}; open_collector. */
  "~{INT}": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: VBACKUP; power_in. */
  "VBACKUP": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: EVI; input. */
  "EVI": "8",
}) {
  override schema = "Timer_RTC:RV-3028-C7";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface, Low Power, 1.2 V to 5.5 V, MicroCrystal C3
 *
 * KiCad symbol: `Timer_RTC:RV-8523-C3`. Reference prefix: `U`.
 * Footprint filters: RTC*SMD*MicroCrystal*C3*2.5x3.7mm*.
 * @see https://www.microcrystal.com/fileadmin/Media/Products/RTC/Datasheet/RV-8523-C3.pdf
 * Keywords: Low Power RTC I2C.
 * Default footprint: Package_SON:RTC_SMD_MicroCrystal_C3_2.5x3.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RV_8523_C3 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: ~{INT_1}; open_collector. */
  "~{INT_1}": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: CLKOUT; open_collector. */
  "CLKOUT": "5",
  /** Physical pin 6: ~{INT_2}; open_collector. */
  "~{INT_2}": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: VBACKUP; power_in. */
  "VBACKUP": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
}) {
  override schema = "Timer_RTC:RV-8523-C3";
  override referencePrefix = "U";
}

/**
 * Realtime Clock/Calendar I2C Interface built-in crystal , SON-10
 *
 * KiCad symbol: `Timer_RTC:RX8901CE`. Reference prefix: `U`.
 * Footprint filters: *EPSON*CE*USON*10*USON*10*3.2x2.5mm*P0.7mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=app_RX8901CE&lang=en
 * Keywords: I2C RTC.
 * Default footprint: Package_SON:EPSON_CE-USON-10_USON-10_3.2x2.5mm_P0.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RX8901CE extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: V_{OUT}; power_out. */
  "V_{OUT}": "2",
  /** Physical pin 3: V_{BAT}; power_in. */
  "V_{BAT}": "3",
  /** Physical pin 4: FOUT/EVIN3; bidirectional. */
  "FOUT/EVIN3": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: EVIN1; passive. */
  "EVIN1": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: ~{INT}; open_collector. */
  "~{INT}": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: EVIN2/FOE; bidirectional. */
  "EVIN2/FOE": "10",
}) {
  override schema = "Timer_RTC:RX8901CE";
  override referencePrefix = "U";
}

