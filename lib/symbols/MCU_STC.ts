// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Single Chip MCU based on the 8051 architecture, 1KB Flash, 4KB EEPROM, SOP-16
 *
 * KiCad symbol: `MCU_STC:STC15W201S-35x-SOP16`. Reference prefix: `U`.
 * Footprint filters: STC?SOP*3.9x9.9mm*P1.27mm*.
 * @see www.stcmicro.com/datasheet/STC15F2K60S2-en.pdf
 * Keywords: STC 8051 microcontroller.
 * Default footprint: Package_SO:STC_SOP-16_3.9x9.9mm_P1.27mm.
 */
export class STC15W201S_35x_SOP16 extends Component.withPins({
  "P1.2/CMPO/T0": "1",
  "P1.3": "2",
  "P1.4/T0CLKO": "3",
  "P1.5": "4",
  "CMP-/MCLKO/RST/P5.4": "5",
  "VCC": "6",
  "CMP+/P5.5": "7",
  "GND": "8",
  "RxD/~{INT4}/T2CLKO/P3.0": "9",
  "TxD/T2/P3.1": "10",
  "INT0/P3.2": "11",
  "INT1/P3.3": "12",
  "~{INT2}/RxD_2/P3.6": "13",
  "~{INT3}/TxD_2/P3.7": "14",
  "P1.0/RSTOUT_LOW": "15",
  "P1.1": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.2/CMPO/T0": "bidirectional", "P1.3": "bidirectional", "P1.4/T0CLKO": "bidirectional", "P1.5": "bidirectional", "CMP-/MCLKO/RST/P5.4": "bidirectional", VCC: "power_in", "CMP+/P5.5": "bidirectional", GND: "power_in", "RxD/~{INT4}/T2CLKO/P3.0": "bidirectional", "TxD/T2/P3.1": "bidirectional", "INT0/P3.2": "bidirectional", "INT1/P3.3": "bidirectional", "~{INT2}/RxD_2/P3.6": "bidirectional", "~{INT3}/TxD_2/P3.7": "bidirectional", "P1.0/RSTOUT_LOW": "bidirectional", "P1.1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_STC:STC15W201S-35x-SOP16";
  override referencePrefix = "U";
}

/**
 * Single Chip MCU based on the 8051 architecture, 5KB Flash, unified program/data memory, SOP-16
 *
 * KiCad symbol: `MCU_STC:IAP15W205S-35x-SOP16`. Reference prefix: `U`.
 * Footprint filters: STC?SOP*3.9x9.9mm*P1.27mm*.
 * @see www.stcmicro.com/datasheet/STC15F2K60S2-en.pdf
 * Keywords: STC 8051 microcontroller.
 * Default footprint: Package_SO:STC_SOP-16_3.9x9.9mm_P1.27mm.
 */
export class IAP15W205S_35x_SOP16 extends Component.withPins({
  "P1.2/CMPO/T0": "1",
  "P1.3": "2",
  "P1.4/T0CLKO": "3",
  "P1.5": "4",
  "CMP-/MCLKO/RST/P5.4": "5",
  "VCC": "6",
  "CMP+/P5.5": "7",
  "GND": "8",
  "RxD/~{INT4}/T2CLKO/P3.0": "9",
  "TxD/T2/P3.1": "10",
  "INT0/P3.2": "11",
  "INT1/P3.3": "12",
  "~{INT2}/RxD_2/P3.6": "13",
  "~{INT3}/TxD_2/P3.7": "14",
  "P1.0/RSTOUT_LOW": "15",
  "P1.1": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.2/CMPO/T0": "bidirectional", "P1.3": "bidirectional", "P1.4/T0CLKO": "bidirectional", "P1.5": "bidirectional", "CMP-/MCLKO/RST/P5.4": "bidirectional", VCC: "power_in", "CMP+/P5.5": "bidirectional", GND: "power_in", "RxD/~{INT4}/T2CLKO/P3.0": "bidirectional", "TxD/T2/P3.1": "bidirectional", "INT0/P3.2": "bidirectional", "INT1/P3.3": "bidirectional", "~{INT2}/RxD_2/P3.6": "bidirectional", "~{INT3}/TxD_2/P3.7": "bidirectional", "P1.0/RSTOUT_LOW": "bidirectional", "P1.1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_STC:IAP15W205S-35x-SOP16";
  override referencePrefix = "U";
}

/**
 * Single Chip MCU based on the 8051 architecture, 7.5KB Flash, unified program/data memory, fixed 24MHz Clock, SOP-16
 *
 * KiCad symbol: `MCU_STC:IRC15W207S-35x-SOP16`. Reference prefix: `U`.
 * Footprint filters: STC?SOP*3.9x9.9mm*P1.27mm*.
 * @see www.stcmicro.com/datasheet/STC15F2K60S2-en.pdf
 * Keywords: STC 8051 microcontroller.
 * Default footprint: Package_SO:STC_SOP-16_3.9x9.9mm_P1.27mm.
 */
export class IRC15W207S_35x_SOP16 extends Component.withPins({
  "P1.2/CMPO/T0": "1",
  "P1.3": "2",
  "P1.4/T0CLKO": "3",
  "P1.5": "4",
  "CMP-/MCLKO/RST/P5.4": "5",
  "VCC": "6",
  "CMP+/P5.5": "7",
  "GND": "8",
  "RxD/~{INT4}/T2CLKO/P3.0": "9",
  "TxD/T2/P3.1": "10",
  "INT0/P3.2": "11",
  "INT1/P3.3": "12",
  "~{INT2}/RxD_2/P3.6": "13",
  "~{INT3}/TxD_2/P3.7": "14",
  "P1.0/RSTOUT_LOW": "15",
  "P1.1": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.2/CMPO/T0": "bidirectional", "P1.3": "bidirectional", "P1.4/T0CLKO": "bidirectional", "P1.5": "bidirectional", "CMP-/MCLKO/RST/P5.4": "bidirectional", VCC: "power_in", "CMP+/P5.5": "bidirectional", GND: "power_in", "RxD/~{INT4}/T2CLKO/P3.0": "bidirectional", "TxD/T2/P3.1": "bidirectional", "INT0/P3.2": "bidirectional", "INT1/P3.3": "bidirectional", "~{INT2}/RxD_2/P3.6": "bidirectional", "~{INT3}/TxD_2/P3.7": "bidirectional", "P1.0/RSTOUT_LOW": "bidirectional", "P1.1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_STC:IRC15W207S-35x-SOP16";
  override referencePrefix = "U";
}

/**
 * Single Chip MCU based on the 8051 architecture, 2KB Flash, 3KB EEPROM, SOP-16
 *
 * KiCad symbol: `MCU_STC:STC15W202S-35x-SOP16`. Reference prefix: `U`.
 * Footprint filters: STC?SOP*3.9x9.9mm*P1.27mm*.
 * @see www.stcmicro.com/datasheet/STC15F2K60S2-en.pdf
 * Keywords: STC 8051 microcontroller.
 * Default footprint: Package_SO:STC_SOP-16_3.9x9.9mm_P1.27mm.
 */
export class STC15W202S_35x_SOP16 extends Component.withPins({
  "P1.2/CMPO/T0": "1",
  "P1.3": "2",
  "P1.4/T0CLKO": "3",
  "P1.5": "4",
  "CMP-/MCLKO/RST/P5.4": "5",
  "VCC": "6",
  "CMP+/P5.5": "7",
  "GND": "8",
  "RxD/~{INT4}/T2CLKO/P3.0": "9",
  "TxD/T2/P3.1": "10",
  "INT0/P3.2": "11",
  "INT1/P3.3": "12",
  "~{INT2}/RxD_2/P3.6": "13",
  "~{INT3}/TxD_2/P3.7": "14",
  "P1.0/RSTOUT_LOW": "15",
  "P1.1": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.2/CMPO/T0": "bidirectional", "P1.3": "bidirectional", "P1.4/T0CLKO": "bidirectional", "P1.5": "bidirectional", "CMP-/MCLKO/RST/P5.4": "bidirectional", VCC: "power_in", "CMP+/P5.5": "bidirectional", GND: "power_in", "RxD/~{INT4}/T2CLKO/P3.0": "bidirectional", "TxD/T2/P3.1": "bidirectional", "INT0/P3.2": "bidirectional", "INT1/P3.3": "bidirectional", "~{INT2}/RxD_2/P3.6": "bidirectional", "~{INT3}/TxD_2/P3.7": "bidirectional", "P1.0/RSTOUT_LOW": "bidirectional", "P1.1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_STC:STC15W202S-35x-SOP16";
  override referencePrefix = "U";
}

/**
 * Single Chip MCU based on the 8051 architecture, 3KB Flash, 2KB EEPROM, SOP-16
 *
 * KiCad symbol: `MCU_STC:STC15W203S-35x-SOP16`. Reference prefix: `U`.
 * Footprint filters: STC?SOP*3.9x9.9mm*P1.27mm*.
 * @see www.stcmicro.com/datasheet/STC15F2K60S2-en.pdf
 * Keywords: STC 8051 microcontroller.
 * Default footprint: Package_SO:STC_SOP-16_3.9x9.9mm_P1.27mm.
 */
export class STC15W203S_35x_SOP16 extends Component.withPins({
  "P1.2/CMPO/T0": "1",
  "P1.3": "2",
  "P1.4/T0CLKO": "3",
  "P1.5": "4",
  "CMP-/MCLKO/RST/P5.4": "5",
  "VCC": "6",
  "CMP+/P5.5": "7",
  "GND": "8",
  "RxD/~{INT4}/T2CLKO/P3.0": "9",
  "TxD/T2/P3.1": "10",
  "INT0/P3.2": "11",
  "INT1/P3.3": "12",
  "~{INT2}/RxD_2/P3.6": "13",
  "~{INT3}/TxD_2/P3.7": "14",
  "P1.0/RSTOUT_LOW": "15",
  "P1.1": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.2/CMPO/T0": "bidirectional", "P1.3": "bidirectional", "P1.4/T0CLKO": "bidirectional", "P1.5": "bidirectional", "CMP-/MCLKO/RST/P5.4": "bidirectional", VCC: "power_in", "CMP+/P5.5": "bidirectional", GND: "power_in", "RxD/~{INT4}/T2CLKO/P3.0": "bidirectional", "TxD/T2/P3.1": "bidirectional", "INT0/P3.2": "bidirectional", "INT1/P3.3": "bidirectional", "~{INT2}/RxD_2/P3.6": "bidirectional", "~{INT3}/TxD_2/P3.7": "bidirectional", "P1.0/RSTOUT_LOW": "bidirectional", "P1.1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_STC:STC15W203S-35x-SOP16";
  override referencePrefix = "U";
}

/**
 * Single Chip MCU based on the 8051 architecture, 4KB Flash, 1KB EEPROM, SOP-16
 *
 * KiCad symbol: `MCU_STC:STC15W204S-35x-SOP16`. Reference prefix: `U`.
 * Footprint filters: STC?SOP*3.9x9.9mm*P1.27mm*.
 * @see www.stcmicro.com/datasheet/STC15F2K60S2-en.pdf
 * Keywords: STC 8051 microcontroller.
 * Default footprint: Package_SO:STC_SOP-16_3.9x9.9mm_P1.27mm.
 */
export class STC15W204S_35x_SOP16 extends Component.withPins({
  "P1.2/CMPO/T0": "1",
  "P1.3": "2",
  "P1.4/T0CLKO": "3",
  "P1.5": "4",
  "CMP-/MCLKO/RST/P5.4": "5",
  "VCC": "6",
  "CMP+/P5.5": "7",
  "GND": "8",
  "RxD/~{INT4}/T2CLKO/P3.0": "9",
  "TxD/T2/P3.1": "10",
  "INT0/P3.2": "11",
  "INT1/P3.3": "12",
  "~{INT2}/RxD_2/P3.6": "13",
  "~{INT3}/TxD_2/P3.7": "14",
  "P1.0/RSTOUT_LOW": "15",
  "P1.1": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.2/CMPO/T0": "bidirectional", "P1.3": "bidirectional", "P1.4/T0CLKO": "bidirectional", "P1.5": "bidirectional", "CMP-/MCLKO/RST/P5.4": "bidirectional", VCC: "power_in", "CMP+/P5.5": "bidirectional", GND: "power_in", "RxD/~{INT4}/T2CLKO/P3.0": "bidirectional", "TxD/T2/P3.1": "bidirectional", "INT0/P3.2": "bidirectional", "INT1/P3.3": "bidirectional", "~{INT2}/RxD_2/P3.6": "bidirectional", "~{INT3}/TxD_2/P3.7": "bidirectional", "P1.0/RSTOUT_LOW": "bidirectional", "P1.1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_STC:STC15W204S-35x-SOP16";
  override referencePrefix = "U";
}

/**
 * Single Chip MCU based on the 8051 architecture, 8KB Flash, 4KB EEPROM, TSSOP-20
 *
 * KiCad symbol: `MCU_STC:STC8G1K08-38I-TSSOP20`. Reference prefix: `U`.
 * Footprint filters: TSSOP?20*4.4x6.5mm*P0.65mm*.
 * @see www.stcmicro.com/datasheet/STC8G-en.pdf
 * Keywords: STC 8051 microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STC8G1K08_38I_TSSOP20 extends Component.withPins({
  "P1.2/ADC2/SS/T2/ECI": "1",
  "P1.3/ADC3/MOSI/T2CLKO": "2",
  "P1.4/ADC4/MISO/SDA": "3",
  "P1.5/ADC5/SCLK/SCL": "4",
  "P1.6/ADC6/RxD_3/MCLKO_2/XTALO": "5",
  "P1.7/ADC7/TxD_3/XTALI": "6",
  "MCLKO/RST/P5.4": "7",
  "VCC": "8",
  "P5.5": "9",
  "GND": "10",
  "INT4/RxD/ADC8/P3.0": "11",
  "TxD/ADC9/P3.1": "12",
  "INT0/SCLK_4/SCL_4/ADC10/P3.2": "13",
  "INT1/MISO_4/SDA_4/ADC11/P3.3": "14",
  "CMPO/ECI_2/T1CLKO/MOSI_4/T0/ADC12/P3.4": "15",
  "SS_4/CCP0_2/T0CLKO/T1/ADC13/P3.5": "16",
  "INT2/CMP-/CCP1_2/RxD_2/ADC14/P3.6": "17",
  "INT3/CMP+/CCP2/CCP2_2/TxD_2/P3.7": "18",
  "P1.0/ADC0/RxD2/CCP1": "19",
  "P1.1/ADC1/TxD2/CCP0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.2/ADC2/SS/T2/ECI": "bidirectional", "P1.3/ADC3/MOSI/T2CLKO": "bidirectional", "P1.4/ADC4/MISO/SDA": "bidirectional", "P1.5/ADC5/SCLK/SCL": "bidirectional", "P1.6/ADC6/RxD_3/MCLKO_2/XTALO": "bidirectional", "P1.7/ADC7/TxD_3/XTALI": "bidirectional", "MCLKO/RST/P5.4": "bidirectional", VCC: "power_in", "P5.5": "bidirectional", GND: "power_in", "INT4/RxD/ADC8/P3.0": "bidirectional", "TxD/ADC9/P3.1": "bidirectional", "INT0/SCLK_4/SCL_4/ADC10/P3.2": "bidirectional", "INT1/MISO_4/SDA_4/ADC11/P3.3": "bidirectional", "CMPO/ECI_2/T1CLKO/MOSI_4/T0/ADC12/P3.4": "bidirectional", "SS_4/CCP0_2/T0CLKO/T1/ADC13/P3.5": "bidirectional", "INT2/CMP-/CCP1_2/RxD_2/ADC14/P3.6": "bidirectional", "INT3/CMP+/CCP2/CCP2_2/TxD_2/P3.7": "bidirectional", "P1.0/ADC0/RxD2/CCP1": "bidirectional", "P1.1/ADC1/TxD2/CCP0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_STC:STC8G1K08-38I-TSSOP20";
  override referencePrefix = "U";
}

/**
 * Single Chip MCU based on the 8051 architecture, 4KB Flash, 8KB EEPROM, TSSOP-20
 *
 * KiCad symbol: `MCU_STC:STC8G1K04-38I-TSSOP20`. Reference prefix: `U`.
 * Footprint filters: TSSOP?20*4.4x6.5mm*P0.65mm*.
 * @see www.stcmicro.com/datasheet/STC8G-en.pdf
 * Keywords: STC 8051 microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STC8G1K04_38I_TSSOP20 extends Component.withPins({
  "P1.2/ADC2/SS/T2/ECI": "1",
  "P1.3/ADC3/MOSI/T2CLKO": "2",
  "P1.4/ADC4/MISO/SDA": "3",
  "P1.5/ADC5/SCLK/SCL": "4",
  "P1.6/ADC6/RxD_3/MCLKO_2/XTALO": "5",
  "P1.7/ADC7/TxD_3/XTALI": "6",
  "MCLKO/RST/P5.4": "7",
  "VCC": "8",
  "P5.5": "9",
  "GND": "10",
  "INT4/RxD/ADC8/P3.0": "11",
  "TxD/ADC9/P3.1": "12",
  "INT0/SCLK_4/SCL_4/ADC10/P3.2": "13",
  "INT1/MISO_4/SDA_4/ADC11/P3.3": "14",
  "CMPO/ECI_2/T1CLKO/MOSI_4/T0/ADC12/P3.4": "15",
  "SS_4/CCP0_2/T0CLKO/T1/ADC13/P3.5": "16",
  "INT2/CMP-/CCP1_2/RxD_2/ADC14/P3.6": "17",
  "INT3/CMP+/CCP2/CCP2_2/TxD_2/P3.7": "18",
  "P1.0/ADC0/RxD2/CCP1": "19",
  "P1.1/ADC1/TxD2/CCP0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.2/ADC2/SS/T2/ECI": "bidirectional", "P1.3/ADC3/MOSI/T2CLKO": "bidirectional", "P1.4/ADC4/MISO/SDA": "bidirectional", "P1.5/ADC5/SCLK/SCL": "bidirectional", "P1.6/ADC6/RxD_3/MCLKO_2/XTALO": "bidirectional", "P1.7/ADC7/TxD_3/XTALI": "bidirectional", "MCLKO/RST/P5.4": "bidirectional", VCC: "power_in", "P5.5": "bidirectional", GND: "power_in", "INT4/RxD/ADC8/P3.0": "bidirectional", "TxD/ADC9/P3.1": "bidirectional", "INT0/SCLK_4/SCL_4/ADC10/P3.2": "bidirectional", "INT1/MISO_4/SDA_4/ADC11/P3.3": "bidirectional", "CMPO/ECI_2/T1CLKO/MOSI_4/T0/ADC12/P3.4": "bidirectional", "SS_4/CCP0_2/T0CLKO/T1/ADC13/P3.5": "bidirectional", "INT2/CMP-/CCP1_2/RxD_2/ADC14/P3.6": "bidirectional", "INT3/CMP+/CCP2/CCP2_2/TxD_2/P3.7": "bidirectional", "P1.0/ADC0/RxD2/CCP1": "bidirectional", "P1.1/ADC1/TxD2/CCP0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_STC:STC8G1K04-38I-TSSOP20";
  override referencePrefix = "U";
}

/**
 * Single Chip MCU based on the 8051 architecture, 8KiB Flash, 1.25KiB SRAM, 4KiB EEPROM, 1.9..5.5V, 36 MHz, 6 GPIO, DFN-8
 *
 * KiCad symbol: `MCU_STC:STC8G1K08A-36I-DFN8`. Reference prefix: `U`.
 * Footprint filters: *DFN*3x3mm*P0.5mm*EP1.7x2.4mm*.
 * @see https://stcmicro.com/datasheet/STC8G-en.pdf
 * Keywords: STC microcontroller I2C SPI UART PWM ADC ISP.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.5mm_EP1.7x2.4mm.
 */
export class STC8G1K08A_36I_DFN8 extends Component.withPins({
  "EPAD": "9",
  "P5.4": "1",
  "VCC": "2",
  "P5.5": "3",
  "GND": "4",
  "P3.0": "5",
  "P3.1": "6",
  "P3.2": "7",
  "P3.3": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EPAD: "passive", "P5.4": "bidirectional", VCC: "power_in", "P5.5": "bidirectional", GND: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_STC:STC8G1K08A-36I-DFN8";
  override referencePrefix = "U";
}

/**
 * Single Chip MCU based on the 8051 architecture, 17KB Flash, IAP, TSSOP-20
 *
 * KiCad symbol: `MCU_STC:STC8G1K17-38I-TSSOP20`. Reference prefix: `U`.
 * Footprint filters: TSSOP?20*4.4x6.5mm*P0.65mm*.
 * @see www.stcmicro.com/datasheet/STC8G-en.pdf
 * Keywords: STC 8051 microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STC8G1K17_38I_TSSOP20 extends Component.withPins({
  "P1.2/ADC2/SS/T2/ECI": "1",
  "P1.3/ADC3/MOSI/T2CLKO": "2",
  "P1.4/ADC4/MISO/SDA": "3",
  "P1.5/ADC5/SCLK/SCL": "4",
  "P1.6/ADC6/RxD_3/MCLKO_2/XTALO": "5",
  "P1.7/ADC7/TxD_3/XTALI": "6",
  "MCLKO/RST/P5.4": "7",
  "VCC": "8",
  "P5.5": "9",
  "GND": "10",
  "INT4/RxD/ADC8/P3.0": "11",
  "TxD/ADC9/P3.1": "12",
  "INT0/SCLK_4/SCL_4/ADC10/P3.2": "13",
  "INT1/MISO_4/SDA_4/ADC11/P3.3": "14",
  "CMPO/ECI_2/T1CLKO/MOSI_4/T0/ADC12/P3.4": "15",
  "SS_4/CCP0_2/T0CLKO/T1/ADC13/P3.5": "16",
  "INT2/CMP-/CCP1_2/RxD_2/ADC14/P3.6": "17",
  "INT3/CMP+/CCP2/CCP2_2/TxD_2/P3.7": "18",
  "P1.0/ADC0/RxD2/CCP1": "19",
  "P1.1/ADC1/TxD2/CCP0": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P1.2/ADC2/SS/T2/ECI": "bidirectional", "P1.3/ADC3/MOSI/T2CLKO": "bidirectional", "P1.4/ADC4/MISO/SDA": "bidirectional", "P1.5/ADC5/SCLK/SCL": "bidirectional", "P1.6/ADC6/RxD_3/MCLKO_2/XTALO": "bidirectional", "P1.7/ADC7/TxD_3/XTALI": "bidirectional", "MCLKO/RST/P5.4": "bidirectional", VCC: "power_in", "P5.5": "bidirectional", GND: "power_in", "INT4/RxD/ADC8/P3.0": "bidirectional", "TxD/ADC9/P3.1": "bidirectional", "INT0/SCLK_4/SCL_4/ADC10/P3.2": "bidirectional", "INT1/MISO_4/SDA_4/ADC11/P3.3": "bidirectional", "CMPO/ECI_2/T1CLKO/MOSI_4/T0/ADC12/P3.4": "bidirectional", "SS_4/CCP0_2/T0CLKO/T1/ADC13/P3.5": "bidirectional", "INT2/CMP-/CCP1_2/RxD_2/ADC14/P3.6": "bidirectional", "INT3/CMP+/CCP2/CCP2_2/TxD_2/P3.7": "bidirectional", "P1.0/ADC0/RxD2/CCP1": "bidirectional", "P1.1/ADC1/TxD2/CCP0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_STC:STC8G1K17-38I-TSSOP20";
  override referencePrefix = "U";
}
