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
 */
export class PY32F002AF15P extends Component.withPins({
  "GND": "1",
  "PA13/SWD": "2",
  "PA14/SWC": "3",
  "PB3": "4",
  "PB6/PF4/BOOT0": "5",
  "PA6": "6",
  "PA5": "7",
  "PF0/OSCIN": "8",
  "PF1/OSCOUT": "9",
  "PF2/~{RST}": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA7": "16",
  "PB0": "17",
  "PB2": "18",
  "PB1": "19",
  "VCC": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", "PA13/SWD": "bidirectional", "PA14/SWC": "bidirectional", PB3: "bidirectional", "PB6/PF4/BOOT0": "bidirectional", PA6: "bidirectional", PA5: "bidirectional", "PF0/OSCIN": "bidirectional", "PF1/OSCOUT": "bidirectional", "PF2/~{RST}": "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PY32F002AW15U extends Component.withPins({
  "PB1": "1",
  "PA12": "2",
  "PA13/SWD": "3",
  "PA14/SWC": "4",
  "PF2/~{RST}": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "VCC": "15",
  "PA8": "16",
  "VSS": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB1: "bidirectional", PA12: "bidirectional", "PA13/SWD": "bidirectional", "PA14/SWC": "bidirectional", "PF2/~{RST}": "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", VCC: "power_in", PA8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Puya:PY32F002AW15U";
  override referencePrefix = "U";
}
