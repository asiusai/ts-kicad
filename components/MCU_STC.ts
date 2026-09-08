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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STC15W201S_35x_SOP16 extends Component.withPins({
  /** Physical pin 1: P1.2/CMPO/T0; bidirectional. */
  "P1.2/CMPO/T0": "1",
  /** Physical pin 2: P1.3; bidirectional. */
  "P1.3": "2",
  /** Physical pin 3: P1.4/T0CLKO; bidirectional. */
  "P1.4/T0CLKO": "3",
  /** Physical pin 4: P1.5; bidirectional. */
  "P1.5": "4",
  /** Physical pin 5: CMP-/MCLKO/RST/P5.4; bidirectional. */
  "CMP-/MCLKO/RST/P5.4": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: CMP+/P5.5; bidirectional. */
  "CMP+/P5.5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: RxD/~{INT4}/T2CLKO/P3.0; bidirectional. */
  "RxD/~{INT4}/T2CLKO/P3.0": "9",
  /** Physical pin 10: TxD/T2/P3.1; bidirectional. */
  "TxD/T2/P3.1": "10",
  /** Physical pin 11: INT0/P3.2; bidirectional. */
  "INT0/P3.2": "11",
  /** Physical pin 12: INT1/P3.3; bidirectional. */
  "INT1/P3.3": "12",
  /** Physical pin 13: ~{INT2}/RxD_2/P3.6; bidirectional. */
  "~{INT2}/RxD_2/P3.6": "13",
  /** Physical pin 14: ~{INT3}/TxD_2/P3.7; bidirectional. */
  "~{INT3}/TxD_2/P3.7": "14",
  /** Physical pin 15: P1.0/RSTOUT_LOW; bidirectional. */
  "P1.0/RSTOUT_LOW": "15",
  /** Physical pin 16: P1.1; bidirectional. */
  "P1.1": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IAP15W205S_35x_SOP16 extends Component.withPins({
  /** Physical pin 1: P1.2/CMPO/T0; bidirectional. */
  "P1.2/CMPO/T0": "1",
  /** Physical pin 2: P1.3; bidirectional. */
  "P1.3": "2",
  /** Physical pin 3: P1.4/T0CLKO; bidirectional. */
  "P1.4/T0CLKO": "3",
  /** Physical pin 4: P1.5; bidirectional. */
  "P1.5": "4",
  /** Physical pin 5: CMP-/MCLKO/RST/P5.4; bidirectional. */
  "CMP-/MCLKO/RST/P5.4": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: CMP+/P5.5; bidirectional. */
  "CMP+/P5.5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: RxD/~{INT4}/T2CLKO/P3.0; bidirectional. */
  "RxD/~{INT4}/T2CLKO/P3.0": "9",
  /** Physical pin 10: TxD/T2/P3.1; bidirectional. */
  "TxD/T2/P3.1": "10",
  /** Physical pin 11: INT0/P3.2; bidirectional. */
  "INT0/P3.2": "11",
  /** Physical pin 12: INT1/P3.3; bidirectional. */
  "INT1/P3.3": "12",
  /** Physical pin 13: ~{INT2}/RxD_2/P3.6; bidirectional. */
  "~{INT2}/RxD_2/P3.6": "13",
  /** Physical pin 14: ~{INT3}/TxD_2/P3.7; bidirectional. */
  "~{INT3}/TxD_2/P3.7": "14",
  /** Physical pin 15: P1.0/RSTOUT_LOW; bidirectional. */
  "P1.0/RSTOUT_LOW": "15",
  /** Physical pin 16: P1.1; bidirectional. */
  "P1.1": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRC15W207S_35x_SOP16 extends Component.withPins({
  /** Physical pin 1: P1.2/CMPO/T0; bidirectional. */
  "P1.2/CMPO/T0": "1",
  /** Physical pin 2: P1.3; bidirectional. */
  "P1.3": "2",
  /** Physical pin 3: P1.4/T0CLKO; bidirectional. */
  "P1.4/T0CLKO": "3",
  /** Physical pin 4: P1.5; bidirectional. */
  "P1.5": "4",
  /** Physical pin 5: CMP-/MCLKO/RST/P5.4; bidirectional. */
  "CMP-/MCLKO/RST/P5.4": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: CMP+/P5.5; bidirectional. */
  "CMP+/P5.5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: RxD/~{INT4}/T2CLKO/P3.0; bidirectional. */
  "RxD/~{INT4}/T2CLKO/P3.0": "9",
  /** Physical pin 10: TxD/T2/P3.1; bidirectional. */
  "TxD/T2/P3.1": "10",
  /** Physical pin 11: INT0/P3.2; bidirectional. */
  "INT0/P3.2": "11",
  /** Physical pin 12: INT1/P3.3; bidirectional. */
  "INT1/P3.3": "12",
  /** Physical pin 13: ~{INT2}/RxD_2/P3.6; bidirectional. */
  "~{INT2}/RxD_2/P3.6": "13",
  /** Physical pin 14: ~{INT3}/TxD_2/P3.7; bidirectional. */
  "~{INT3}/TxD_2/P3.7": "14",
  /** Physical pin 15: P1.0/RSTOUT_LOW; bidirectional. */
  "P1.0/RSTOUT_LOW": "15",
  /** Physical pin 16: P1.1; bidirectional. */
  "P1.1": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STC15W202S_35x_SOP16 extends Component.withPins({
  /** Physical pin 1: P1.2/CMPO/T0; bidirectional. */
  "P1.2/CMPO/T0": "1",
  /** Physical pin 2: P1.3; bidirectional. */
  "P1.3": "2",
  /** Physical pin 3: P1.4/T0CLKO; bidirectional. */
  "P1.4/T0CLKO": "3",
  /** Physical pin 4: P1.5; bidirectional. */
  "P1.5": "4",
  /** Physical pin 5: CMP-/MCLKO/RST/P5.4; bidirectional. */
  "CMP-/MCLKO/RST/P5.4": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: CMP+/P5.5; bidirectional. */
  "CMP+/P5.5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: RxD/~{INT4}/T2CLKO/P3.0; bidirectional. */
  "RxD/~{INT4}/T2CLKO/P3.0": "9",
  /** Physical pin 10: TxD/T2/P3.1; bidirectional. */
  "TxD/T2/P3.1": "10",
  /** Physical pin 11: INT0/P3.2; bidirectional. */
  "INT0/P3.2": "11",
  /** Physical pin 12: INT1/P3.3; bidirectional. */
  "INT1/P3.3": "12",
  /** Physical pin 13: ~{INT2}/RxD_2/P3.6; bidirectional. */
  "~{INT2}/RxD_2/P3.6": "13",
  /** Physical pin 14: ~{INT3}/TxD_2/P3.7; bidirectional. */
  "~{INT3}/TxD_2/P3.7": "14",
  /** Physical pin 15: P1.0/RSTOUT_LOW; bidirectional. */
  "P1.0/RSTOUT_LOW": "15",
  /** Physical pin 16: P1.1; bidirectional. */
  "P1.1": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STC15W203S_35x_SOP16 extends Component.withPins({
  /** Physical pin 1: P1.2/CMPO/T0; bidirectional. */
  "P1.2/CMPO/T0": "1",
  /** Physical pin 2: P1.3; bidirectional. */
  "P1.3": "2",
  /** Physical pin 3: P1.4/T0CLKO; bidirectional. */
  "P1.4/T0CLKO": "3",
  /** Physical pin 4: P1.5; bidirectional. */
  "P1.5": "4",
  /** Physical pin 5: CMP-/MCLKO/RST/P5.4; bidirectional. */
  "CMP-/MCLKO/RST/P5.4": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: CMP+/P5.5; bidirectional. */
  "CMP+/P5.5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: RxD/~{INT4}/T2CLKO/P3.0; bidirectional. */
  "RxD/~{INT4}/T2CLKO/P3.0": "9",
  /** Physical pin 10: TxD/T2/P3.1; bidirectional. */
  "TxD/T2/P3.1": "10",
  /** Physical pin 11: INT0/P3.2; bidirectional. */
  "INT0/P3.2": "11",
  /** Physical pin 12: INT1/P3.3; bidirectional. */
  "INT1/P3.3": "12",
  /** Physical pin 13: ~{INT2}/RxD_2/P3.6; bidirectional. */
  "~{INT2}/RxD_2/P3.6": "13",
  /** Physical pin 14: ~{INT3}/TxD_2/P3.7; bidirectional. */
  "~{INT3}/TxD_2/P3.7": "14",
  /** Physical pin 15: P1.0/RSTOUT_LOW; bidirectional. */
  "P1.0/RSTOUT_LOW": "15",
  /** Physical pin 16: P1.1; bidirectional. */
  "P1.1": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STC15W204S_35x_SOP16 extends Component.withPins({
  /** Physical pin 1: P1.2/CMPO/T0; bidirectional. */
  "P1.2/CMPO/T0": "1",
  /** Physical pin 2: P1.3; bidirectional. */
  "P1.3": "2",
  /** Physical pin 3: P1.4/T0CLKO; bidirectional. */
  "P1.4/T0CLKO": "3",
  /** Physical pin 4: P1.5; bidirectional. */
  "P1.5": "4",
  /** Physical pin 5: CMP-/MCLKO/RST/P5.4; bidirectional. */
  "CMP-/MCLKO/RST/P5.4": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
  /** Physical pin 7: CMP+/P5.5; bidirectional. */
  "CMP+/P5.5": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: RxD/~{INT4}/T2CLKO/P3.0; bidirectional. */
  "RxD/~{INT4}/T2CLKO/P3.0": "9",
  /** Physical pin 10: TxD/T2/P3.1; bidirectional. */
  "TxD/T2/P3.1": "10",
  /** Physical pin 11: INT0/P3.2; bidirectional. */
  "INT0/P3.2": "11",
  /** Physical pin 12: INT1/P3.3; bidirectional. */
  "INT1/P3.3": "12",
  /** Physical pin 13: ~{INT2}/RxD_2/P3.6; bidirectional. */
  "~{INT2}/RxD_2/P3.6": "13",
  /** Physical pin 14: ~{INT3}/TxD_2/P3.7; bidirectional. */
  "~{INT3}/TxD_2/P3.7": "14",
  /** Physical pin 15: P1.0/RSTOUT_LOW; bidirectional. */
  "P1.0/RSTOUT_LOW": "15",
  /** Physical pin 16: P1.1; bidirectional. */
  "P1.1": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STC8G1K08_38I_TSSOP20 extends Component.withPins({
  /** Physical pin 1: P1.2/ADC2/SS/T2/ECI; bidirectional. */
  "P1.2/ADC2/SS/T2/ECI": "1",
  /** Physical pin 2: P1.3/ADC3/MOSI/T2CLKO; bidirectional. */
  "P1.3/ADC3/MOSI/T2CLKO": "2",
  /** Physical pin 3: P1.4/ADC4/MISO/SDA; bidirectional. */
  "P1.4/ADC4/MISO/SDA": "3",
  /** Physical pin 4: P1.5/ADC5/SCLK/SCL; bidirectional. */
  "P1.5/ADC5/SCLK/SCL": "4",
  /** Physical pin 5: P1.6/ADC6/RxD_3/MCLKO_2/XTALO; bidirectional. */
  "P1.6/ADC6/RxD_3/MCLKO_2/XTALO": "5",
  /** Physical pin 6: P1.7/ADC7/TxD_3/XTALI; bidirectional. */
  "P1.7/ADC7/TxD_3/XTALI": "6",
  /** Physical pin 7: MCLKO/RST/P5.4; bidirectional. */
  "MCLKO/RST/P5.4": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: P5.5; bidirectional. */
  "P5.5": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: INT4/RxD/ADC8/P3.0; bidirectional. */
  "INT4/RxD/ADC8/P3.0": "11",
  /** Physical pin 12: TxD/ADC9/P3.1; bidirectional. */
  "TxD/ADC9/P3.1": "12",
  /** Physical pin 13: INT0/SCLK_4/SCL_4/ADC10/P3.2; bidirectional. */
  "INT0/SCLK_4/SCL_4/ADC10/P3.2": "13",
  /** Physical pin 14: INT1/MISO_4/SDA_4/ADC11/P3.3; bidirectional. */
  "INT1/MISO_4/SDA_4/ADC11/P3.3": "14",
  /** Physical pin 15: CMPO/ECI_2/T1CLKO/MOSI_4/T0/ADC12/P3.4; bidirectional. */
  "CMPO/ECI_2/T1CLKO/MOSI_4/T0/ADC12/P3.4": "15",
  /** Physical pin 16: SS_4/CCP0_2/T0CLKO/T1/ADC13/P3.5; bidirectional. */
  "SS_4/CCP0_2/T0CLKO/T1/ADC13/P3.5": "16",
  /** Physical pin 17: INT2/CMP-/CCP1_2/RxD_2/ADC14/P3.6; bidirectional. */
  "INT2/CMP-/CCP1_2/RxD_2/ADC14/P3.6": "17",
  /** Physical pin 18: INT3/CMP+/CCP2/CCP2_2/TxD_2/P3.7; bidirectional. */
  "INT3/CMP+/CCP2/CCP2_2/TxD_2/P3.7": "18",
  /** Physical pin 19: P1.0/ADC0/RxD2/CCP1; bidirectional. */
  "P1.0/ADC0/RxD2/CCP1": "19",
  /** Physical pin 20: P1.1/ADC1/TxD2/CCP0; bidirectional. */
  "P1.1/ADC1/TxD2/CCP0": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STC8G1K04_38I_TSSOP20 extends Component.withPins({
  /** Physical pin 1: P1.2/ADC2/SS/T2/ECI; bidirectional. */
  "P1.2/ADC2/SS/T2/ECI": "1",
  /** Physical pin 2: P1.3/ADC3/MOSI/T2CLKO; bidirectional. */
  "P1.3/ADC3/MOSI/T2CLKO": "2",
  /** Physical pin 3: P1.4/ADC4/MISO/SDA; bidirectional. */
  "P1.4/ADC4/MISO/SDA": "3",
  /** Physical pin 4: P1.5/ADC5/SCLK/SCL; bidirectional. */
  "P1.5/ADC5/SCLK/SCL": "4",
  /** Physical pin 5: P1.6/ADC6/RxD_3/MCLKO_2/XTALO; bidirectional. */
  "P1.6/ADC6/RxD_3/MCLKO_2/XTALO": "5",
  /** Physical pin 6: P1.7/ADC7/TxD_3/XTALI; bidirectional. */
  "P1.7/ADC7/TxD_3/XTALI": "6",
  /** Physical pin 7: MCLKO/RST/P5.4; bidirectional. */
  "MCLKO/RST/P5.4": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: P5.5; bidirectional. */
  "P5.5": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: INT4/RxD/ADC8/P3.0; bidirectional. */
  "INT4/RxD/ADC8/P3.0": "11",
  /** Physical pin 12: TxD/ADC9/P3.1; bidirectional. */
  "TxD/ADC9/P3.1": "12",
  /** Physical pin 13: INT0/SCLK_4/SCL_4/ADC10/P3.2; bidirectional. */
  "INT0/SCLK_4/SCL_4/ADC10/P3.2": "13",
  /** Physical pin 14: INT1/MISO_4/SDA_4/ADC11/P3.3; bidirectional. */
  "INT1/MISO_4/SDA_4/ADC11/P3.3": "14",
  /** Physical pin 15: CMPO/ECI_2/T1CLKO/MOSI_4/T0/ADC12/P3.4; bidirectional. */
  "CMPO/ECI_2/T1CLKO/MOSI_4/T0/ADC12/P3.4": "15",
  /** Physical pin 16: SS_4/CCP0_2/T0CLKO/T1/ADC13/P3.5; bidirectional. */
  "SS_4/CCP0_2/T0CLKO/T1/ADC13/P3.5": "16",
  /** Physical pin 17: INT2/CMP-/CCP1_2/RxD_2/ADC14/P3.6; bidirectional. */
  "INT2/CMP-/CCP1_2/RxD_2/ADC14/P3.6": "17",
  /** Physical pin 18: INT3/CMP+/CCP2/CCP2_2/TxD_2/P3.7; bidirectional. */
  "INT3/CMP+/CCP2/CCP2_2/TxD_2/P3.7": "18",
  /** Physical pin 19: P1.0/ADC0/RxD2/CCP1; bidirectional. */
  "P1.0/ADC0/RxD2/CCP1": "19",
  /** Physical pin 20: P1.1/ADC1/TxD2/CCP0; bidirectional. */
  "P1.1/ADC1/TxD2/CCP0": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STC8G1K08A_36I_DFN8 extends Component.withPins({
  /** Physical pin 9: EPAD; passive. */
  "EPAD": "9",
  /** Physical pin 1: P5.4; bidirectional. */
  "P5.4": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: P5.5; bidirectional. */
  "P5.5": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: P3.0; bidirectional. */
  "P3.0": "5",
  /** Physical pin 6: P3.1; bidirectional. */
  "P3.1": "6",
  /** Physical pin 7: P3.2; bidirectional. */
  "P3.2": "7",
  /** Physical pin 8: P3.3; bidirectional. */
  "P3.3": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STC8G1K17_38I_TSSOP20 extends Component.withPins({
  /** Physical pin 1: P1.2/ADC2/SS/T2/ECI; bidirectional. */
  "P1.2/ADC2/SS/T2/ECI": "1",
  /** Physical pin 2: P1.3/ADC3/MOSI/T2CLKO; bidirectional. */
  "P1.3/ADC3/MOSI/T2CLKO": "2",
  /** Physical pin 3: P1.4/ADC4/MISO/SDA; bidirectional. */
  "P1.4/ADC4/MISO/SDA": "3",
  /** Physical pin 4: P1.5/ADC5/SCLK/SCL; bidirectional. */
  "P1.5/ADC5/SCLK/SCL": "4",
  /** Physical pin 5: P1.6/ADC6/RxD_3/MCLKO_2/XTALO; bidirectional. */
  "P1.6/ADC6/RxD_3/MCLKO_2/XTALO": "5",
  /** Physical pin 6: P1.7/ADC7/TxD_3/XTALI; bidirectional. */
  "P1.7/ADC7/TxD_3/XTALI": "6",
  /** Physical pin 7: MCLKO/RST/P5.4; bidirectional. */
  "MCLKO/RST/P5.4": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: P5.5; bidirectional. */
  "P5.5": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: INT4/RxD/ADC8/P3.0; bidirectional. */
  "INT4/RxD/ADC8/P3.0": "11",
  /** Physical pin 12: TxD/ADC9/P3.1; bidirectional. */
  "TxD/ADC9/P3.1": "12",
  /** Physical pin 13: INT0/SCLK_4/SCL_4/ADC10/P3.2; bidirectional. */
  "INT0/SCLK_4/SCL_4/ADC10/P3.2": "13",
  /** Physical pin 14: INT1/MISO_4/SDA_4/ADC11/P3.3; bidirectional. */
  "INT1/MISO_4/SDA_4/ADC11/P3.3": "14",
  /** Physical pin 15: CMPO/ECI_2/T1CLKO/MOSI_4/T0/ADC12/P3.4; bidirectional. */
  "CMPO/ECI_2/T1CLKO/MOSI_4/T0/ADC12/P3.4": "15",
  /** Physical pin 16: SS_4/CCP0_2/T0CLKO/T1/ADC13/P3.5; bidirectional. */
  "SS_4/CCP0_2/T0CLKO/T1/ADC13/P3.5": "16",
  /** Physical pin 17: INT2/CMP-/CCP1_2/RxD_2/ADC14/P3.6; bidirectional. */
  "INT2/CMP-/CCP1_2/RxD_2/ADC14/P3.6": "17",
  /** Physical pin 18: INT3/CMP+/CCP2/CCP2_2/TxD_2/P3.7; bidirectional. */
  "INT3/CMP+/CCP2/CCP2_2/TxD_2/P3.7": "18",
  /** Physical pin 19: P1.0/ADC0/RxD2/CCP1; bidirectional. */
  "P1.0/ADC0/RxD2/CCP1": "19",
  /** Physical pin 20: P1.1/ADC1/TxD2/CCP0; bidirectional. */
  "P1.1/ADC1/TxD2/CCP0": "20",
}) {
  override schema = "MCU_STC:STC8G1K17-38I-TSSOP20";
  override referencePrefix = "U";
}

