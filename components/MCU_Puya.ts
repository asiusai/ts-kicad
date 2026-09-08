// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Puya PY32 ARM Cortex-M0 MCU, 20 KB Flash, 3 KB RAM, 24 MHz, 1.7-5.5V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_Puya:PY32F002AF15P`. Reference prefix: `U`.
 * Footprint filters: TSSOP*P0.65mm*.
 * @see https://www.puyasemi.com/download_path/%E6%95%B0%E6%8D%AE%E6%89%8B%E5%86%8C/MCU%20%E5%BE%AE%E5%A4%84%E7%90%86%E5%99%A8/PY32F002A_Datasheet_V0.2.pdf
 * Keywords: puya py32 arm cortex-m0.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PY32F002AF15P extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: PA13/SWD; bidirectional. */
  "PA13/SWD": "2",
  /** Physical pin 3: PA14/SWC; bidirectional. */
  "PA14/SWC": "3",
  /** Physical pin 4: PB3; bidirectional. */
  "PB3": "4",
  /** Physical pin 5: PB6/PF4/BOOT0; bidirectional. */
  "PB6/PF4/BOOT0": "5",
  /** Physical pin 6: PA6; bidirectional. */
  "PA6": "6",
  /** Physical pin 7: PA5; bidirectional. */
  "PA5": "7",
  /** Physical pin 8: PF0/OSCIN; bidirectional. */
  "PF0/OSCIN": "8",
  /** Physical pin 9: PF1/OSCOUT; bidirectional. */
  "PF1/OSCOUT": "9",
  /** Physical pin 10: PF2/~{RST}; bidirectional. */
  "PF2/~{RST}": "10",
  /** Physical pin 11: PA0; bidirectional. */
  "PA0": "11",
  /** Physical pin 12: PA1; bidirectional. */
  "PA1": "12",
  /** Physical pin 13: PA2; bidirectional. */
  "PA2": "13",
  /** Physical pin 14: PA3; bidirectional. */
  "PA3": "14",
  /** Physical pin 15: PA4; bidirectional. */
  "PA4": "15",
  /** Physical pin 16: PA7; bidirectional. */
  "PA7": "16",
  /** Physical pin 17: PB0; bidirectional. */
  "PB0": "17",
  /** Physical pin 18: PB2; bidirectional. */
  "PB2": "18",
  /** Physical pin 19: PB1; bidirectional. */
  "PB1": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
}) {
  override schema = "MCU_Puya:PY32F002AF15P";
  override referencePrefix = "U";
}

/**
 * 32-bit ARM Cortex-M0+ Microcontroller, 20 KB Flash, 3 KB SRAM, 24 MHz, 1.7V - 5.5V, 15 GPIO, WQFN-16
 *
 * KiCad symbol: `MCU_Puya:PY32F002AW15U`. Reference prefix: `U`.
 * Footprint filters: *QFN*3x3mm*P0.5mm*EP1.7*x1.7*.
 * @see https://www.puyasemi.com/download_path/%E6%95%B0%E6%8D%AE%E6%89%8B%E5%86%8C/MCU%20%E5%BE%AE%E5%A4%84%E7%90%86%E5%99%A8/PY32F002A_Datasheet_V0.2.pdf
 * Keywords: MCU I2C SPI USART ADC SWD.
 * Default footprint: Package_DFN_QFN:WQFN-16-1EP_3x3mm_P0.5mm_EP1.75x1.75mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PY32F002AW15U extends Component.withPins({
  /** Physical pin 1: PB1; bidirectional. */
  "PB1": "1",
  /** Physical pin 2: PA12; bidirectional. */
  "PA12": "2",
  /** Physical pin 3: PA13/SWD; bidirectional. */
  "PA13/SWD": "3",
  /** Physical pin 4: PA14/SWC; bidirectional. */
  "PA14/SWC": "4",
  /** Physical pin 5: PF2/~{RST}; bidirectional. */
  "PF2/~{RST}": "5",
  /** Physical pin 6: PA0; bidirectional. */
  "PA0": "6",
  /** Physical pin 7: PA1; bidirectional. */
  "PA1": "7",
  /** Physical pin 8: PA2; bidirectional. */
  "PA2": "8",
  /** Physical pin 9: PA3; bidirectional. */
  "PA3": "9",
  /** Physical pin 10: PA4; bidirectional. */
  "PA4": "10",
  /** Physical pin 11: PA5; bidirectional. */
  "PA5": "11",
  /** Physical pin 12: PA6; bidirectional. */
  "PA6": "12",
  /** Physical pin 13: PA7; bidirectional. */
  "PA7": "13",
  /** Physical pin 14: PB0; bidirectional. */
  "PB0": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC": "15",
  /** Physical pin 16: PA8; bidirectional. */
  "PA8": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS": "17",
}) {
  override schema = "MCU_Puya:PY32F002AW15U";
  override referencePrefix = "U";
}

