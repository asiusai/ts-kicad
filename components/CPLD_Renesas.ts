// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * GreenPAK Programmable Mixed-signal Matrix with Asynchronous State Machine, four 150mA LDO Regulators, UQFN-20
 *
 * KiCad symbol: `CPLD_Renesas:SLG46580`. Reference prefix: `U`.
 * Footprint filters: *QFN*2x3mm*P0.4mm*.
 * @see https://www.renesas.com/en/document/dst/slg465808283-datasheet
 * Keywords: Renesas Dialog-Semiconductor Silego-Technology GPIO ACMP ASM LUT CNT DLY DFF LATCH I2C NVM.
 * Default footprint: Package_DFN_QFN:Renesas_UQFN-20_2x3mm_P0.4mm_LayoutBorder4x6y.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SLG46580 extends Component.withPins({
  /** Physical pin 1: IO0/EXT_CLK; bidirectional. */
  "IO0/EXT_CLK": "1",
  /** Physical pin 2: IO1/ACMP0+; bidirectional. */
  "IO1/ACMP0+": "2",
  /** Physical pin 3: IO2; bidirectional. */
  "IO2": "3",
  /** Physical pin 4: IO3; bidirectional. */
  "IO3": "4",
  /** Physical pin 5: IO4/ACMP1+; bidirectional. */
  "IO4/ACMP1+": "5",
  /** Physical pin 6: IO5; input. */
  "IO5": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: IO6/EXT_VREF; bidirectional. */
  "IO6/EXT_VREF": "10",
  /** Physical pin 11: LDO0_VOUT; power_out. */
  "LDO0_VOUT": "11",
  /** Physical pin 12: LDO0,1_VIN; power_in. */
  "LDO0,1_VIN": "12",
  /** Physical pin 13: LDO1_VOUT; power_out. */
  "LDO1_VOUT": "13",
  /** Physical pin 14: LDO2_VOUT; power_out. */
  "LDO2_VOUT": "14",
  /** Physical pin 15: LDO2,3_VIN; power_in. */
  "LDO2,3_VIN": "15",
  /** Physical pin 16: LDO3_VOUT; power_out. */
  "LDO3_VOUT": "16",
  /** Physical pin 17: AGND; power_in. */
  "AGND": "17",
  /** Physical pin 18: IO7/ACMP2+; bidirectional. */
  "IO7/ACMP2+": "18",
  /** Physical pin 19: IO8/ACMP3+; bidirectional. */
  "IO8/ACMP3+": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
}) {
  override schema = "CPLD_Renesas:SLG46580";
  override referencePrefix = "U";
}

/**
 * GreenPAK Programmable Mixed-signal Matrix with Asynchronous State Machine, two 300mA LDO Regulators, UQFN-20
 *
 * KiCad symbol: `CPLD_Renesas:SLG46582`. Reference prefix: `U`.
 * Footprint filters: *QFN*2x3mm*P0.4mm*.
 * @see https://www.renesas.com/en/document/dst/slg465808283-datasheet
 * Keywords: Renesas Dialog-Semiconductor Silego-Technology GPIO ACMP ASM LUT CNT DLY DFF LATCH I2C NVM.
 * Default footprint: Package_DFN_QFN:Renesas_UQFN-20_2x3mm_P0.4mm_LayoutBorder4x6y.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SLG46582 extends Component.withPins({
  /** Physical pin 1: IO0/EXT_CLK; bidirectional. */
  "IO0/EXT_CLK": "1",
  /** Physical pin 2: IO1/ACMP0+; bidirectional. */
  "IO1/ACMP0+": "2",
  /** Physical pin 3: IO2; bidirectional. */
  "IO2": "3",
  /** Physical pin 4: IO3; bidirectional. */
  "IO3": "4",
  /** Physical pin 5: IO4/ACMP1+; bidirectional. */
  "IO4/ACMP1+": "5",
  /** Physical pin 6: IO5; input. */
  "IO5": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: IO6/EXT_VREF; bidirectional. */
  "IO6/EXT_VREF": "10",
  /** Physical pin 11: LDO0_VOUT; power_out. */
  "LDO0_VOUT_11": "11",
  /** Physical pin 12: LDO0_VIN; power_in. */
  "LDO0_VIN": "12",
  /** Physical pin 13: LDO0_VOUT; passive. */
  "LDO0_VOUT_13": "13",
  /** Physical pin 14: LDO1_VOUT; power_out. */
  "LDO1_VOUT_14": "14",
  /** Physical pin 15: LDO1_VIN; power_in. */
  "LDO1_VIN": "15",
  /** Physical pin 16: LDO1_VOUT; passive. */
  "LDO1_VOUT_16": "16",
  /** Physical pin 17: AGND; power_in. */
  "AGND": "17",
  /** Physical pin 18: IO7/ACMP2+; bidirectional. */
  "IO7/ACMP2+": "18",
  /** Physical pin 19: IO8/ACMP3+; bidirectional. */
  "IO8/ACMP3+": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
}) {
  override schema = "CPLD_Renesas:SLG46582";
  override referencePrefix = "U";
}

/**
 * GreenPAK Programmable Mixed-signal Matrix with Asynchronous State Machine, one 600mA LDO Regulator, UQFN-20
 *
 * KiCad symbol: `CPLD_Renesas:SLG46583`. Reference prefix: `U`.
 * Footprint filters: *QFN*2x3mm*P0.4mm*.
 * @see https://www.renesas.com/en/document/dst/slg465808283-datasheet
 * Keywords: Renesas Dialog-Semiconductor Silego-Technology GPIO ACMP ASM LUT CNT DLY DFF LATCH I2C NVM.
 * Default footprint: Package_DFN_QFN:Renesas_UQFN-20_2x3mm_P0.4mm_LayoutBorder4x6y.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SLG46583 extends Component.withPins({
  /** Physical pin 1: IO0/EXT_CLK; bidirectional. */
  "IO0/EXT_CLK": "1",
  /** Physical pin 2: IO1/ACMP0+; bidirectional. */
  "IO1/ACMP0+": "2",
  /** Physical pin 3: IO2; bidirectional. */
  "IO2": "3",
  /** Physical pin 4: IO3; bidirectional. */
  "IO3": "4",
  /** Physical pin 5: IO4/ACMP1+; bidirectional. */
  "IO4/ACMP1+": "5",
  /** Physical pin 6: IO5; input. */
  "IO5": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: IO6/EXT_VREF; bidirectional. */
  "IO6/EXT_VREF": "10",
  /** Physical pin 11: LDO_VOUT; power_out. */
  "LDO_VOUT_11": "11",
  /** Physical pin 12: LDO_VIN; power_in. */
  "LDO_VIN_12": "12",
  /** Physical pin 13: LDO_VOUT; passive. */
  "LDO_VOUT_13": "13",
  /** Physical pin 14: LDO_VOUT; passive. */
  "LDO_VOUT_14": "14",
  /** Physical pin 15: LDO_VIN; passive. */
  "LDO_VIN_15": "15",
  /** Physical pin 16: LDO_VOUT; passive. */
  "LDO_VOUT_16": "16",
  /** Physical pin 17: AGND; power_in. */
  "AGND": "17",
  /** Physical pin 18: IO7/ACMP2+; bidirectional. */
  "IO7/ACMP2+": "18",
  /** Physical pin 19: IO8/ACMP3+; bidirectional. */
  "IO8/ACMP3+": "19",
  /** Physical pin 20: GND; power_in. */
  "GND": "20",
}) {
  override schema = "CPLD_Renesas:SLG46583";
  override referencePrefix = "U";
}

/**
 * GreenPAK Programmable Mixed-Signal Matrix with In-System Programmability, TSSOP-20
 *
 * KiCad symbol: `CPLD_Renesas:SLG46826G`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65*.
 * @see https://www.renesas.com/in/en/document/dst/slg46826-datasheet
 * Keywords: cpld programmable logic low-cost renesas silego.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SLG46826G extends Component.withPins({
  /** Physical pin 1: IO14; bidirectional. */
  "IO14": "1",
  /** Physical pin 2: IO13; bidirectional. */
  "IO13": "2",
  /** Physical pin 3: IO12; bidirectional. */
  "IO12": "3",
  /** Physical pin 4: IO11; bidirectional. */
  "IO11": "4",
  /** Physical pin 5: IO10; bidirectional. */
  "IO10": "5",
  /** Physical pin 6: IO9; bidirectional. */
  "IO9": "6",
  /** Physical pin 7: V_{DD2}; power_in. */
  "V_{DD2}": "7",
  /** Physical pin 8: IO8; bidirectional. */
  "IO8": "8",
  /** Physical pin 9: IO7; output. */
  "IO7": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: IO6; output. */
  "IO6": "11",
  /** Physical pin 12: SDA; bidirectional. */
  "SDA": "12",
  /** Physical pin 13: SCL; bidirectional. */
  "SCL": "13",
  /** Physical pin 14: IO5; bidirectional. */
  "IO5": "14",
  /** Physical pin 15: IO4; bidirectional. */
  "IO4": "15",
  /** Physical pin 16: IO3; bidirectional. */
  "IO3": "16",
  /** Physical pin 17: IO2; bidirectional. */
  "IO2": "17",
  /** Physical pin 18: IO1; bidirectional. */
  "IO1": "18",
  /** Physical pin 19: IO0; bidirectional. */
  "IO0": "19",
  /** Physical pin 20: V_{DD}; power_in. */
  "V_{DD}": "20",
}) {
  override schema = "CPLD_Renesas:SLG46826G";
  override referencePrefix = "U";
}

/**
 * GreenPAK Programmable Mixed-Signal Matrix, 8/10/12/14-bit SAR ADC, 13 GPIO + 1 GPI, 1.71V - 3.6V supply, UQFN-16
 *
 * KiCad symbol: `CPLD_Renesas:SLG47011V`. Reference prefix: `U`.
 * Footprint filters: *QFN*2x2mm*P0.4*.
 * @see https://www.renesas.com/en/document/dst/slg47011-datasheet
 * Keywords: Renesas DAC I2C SPI PWM NVM LUT PGA macrocells.
 * Default footprint: Package_DFN_QFN:Renesas_UQFN-16_2x2mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SLG47011V extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: GPI; input. */
  "GPI": "3",
  /** Physical pin 4: GPIO0; bidirectional. */
  "GPIO0": "4",
  /** Physical pin 5: GPIO1; bidirectional. */
  "GPIO1": "5",
  /** Physical pin 6: GPIO2; bidirectional. */
  "GPIO2": "6",
  /** Physical pin 7: GPIO3; bidirectional. */
  "GPIO3": "7",
  /** Physical pin 8: GPIO4; bidirectional. */
  "GPIO4": "8",
  /** Physical pin 9: GPIO5; bidirectional. */
  "GPIO5": "9",
  /** Physical pin 10: GPIO6; bidirectional. */
  "GPIO6": "10",
  /** Physical pin 11: GPIO7; bidirectional. */
  "GPIO7": "11",
  /** Physical pin 12: GPIO8; bidirectional. */
  "GPIO8": "12",
  /** Physical pin 13: GPIO9; bidirectional. */
  "GPIO9": "13",
  /** Physical pin 14: GPIO10; bidirectional. */
  "GPIO10": "14",
  /** Physical pin 15: GPIO11; bidirectional. */
  "GPIO11": "15",
  /** Physical pin 16: GPIO12; bidirectional. */
  "GPIO12": "16",
}) {
  override schema = "CPLD_Renesas:SLG47011V";
  override referencePrefix = "U";
}

