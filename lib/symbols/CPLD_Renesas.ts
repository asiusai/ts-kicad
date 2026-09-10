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
 */
export class SLG46580 extends Component.withPins({
  "IO0/EXT_CLK": "1",
  "IO1/ACMP0+": "2",
  "IO2": "3",
  "IO3": "4",
  "IO4/ACMP1+": "5",
  "IO5": "6",
  "VDD": "7",
  "SCL": "8",
  "SDA": "9",
  "IO6/EXT_VREF": "10",
  "LDO0_VOUT": "11",
  "LDO0,1_VIN": "12",
  "LDO1_VOUT": "13",
  "LDO2_VOUT": "14",
  "LDO2,3_VIN": "15",
  "LDO3_VOUT": "16",
  "AGND": "17",
  "IO7/ACMP2+": "18",
  "IO8/ACMP3+": "19",
  "GND": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IO0/EXT_CLK": "bidirectional", "IO1/ACMP0+": "bidirectional", IO2: "bidirectional", IO3: "bidirectional", "IO4/ACMP1+": "bidirectional", IO5: "input", VDD: "power_in", SCL: "input", SDA: "bidirectional", "IO6/EXT_VREF": "bidirectional", LDO0_VOUT: "power_out", "LDO0,1_VIN": "power_in", LDO1_VOUT: "power_out", LDO2_VOUT: "power_out", "LDO2,3_VIN": "power_in", LDO3_VOUT: "power_out", AGND: "power_in", "IO7/ACMP2+": "bidirectional", "IO8/ACMP3+": "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SLG46582 extends Component.withPins({
  "IO0/EXT_CLK": "1",
  "IO1/ACMP0+": "2",
  "IO2": "3",
  "IO3": "4",
  "IO4/ACMP1+": "5",
  "IO5": "6",
  "VDD": "7",
  "SCL": "8",
  "SDA": "9",
  "IO6/EXT_VREF": "10",
  "LDO0_VOUT_11": "11",
  "LDO0_VIN": "12",
  "LDO0_VOUT_13": "13",
  "LDO1_VOUT_14": "14",
  "LDO1_VIN": "15",
  "LDO1_VOUT_16": "16",
  "AGND": "17",
  "IO7/ACMP2+": "18",
  "IO8/ACMP3+": "19",
  "GND": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IO0/EXT_CLK": "bidirectional", "IO1/ACMP0+": "bidirectional", IO2: "bidirectional", IO3: "bidirectional", "IO4/ACMP1+": "bidirectional", IO5: "input", VDD: "power_in", SCL: "input", SDA: "bidirectional", "IO6/EXT_VREF": "bidirectional", LDO0_VOUT_11: "power_out", LDO0_VIN: "power_in", LDO0_VOUT_13: "passive", LDO1_VOUT_14: "power_out", LDO1_VIN: "power_in", LDO1_VOUT_16: "passive", AGND: "power_in", "IO7/ACMP2+": "bidirectional", "IO8/ACMP3+": "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SLG46583 extends Component.withPins({
  "IO0/EXT_CLK": "1",
  "IO1/ACMP0+": "2",
  "IO2": "3",
  "IO3": "4",
  "IO4/ACMP1+": "5",
  "IO5": "6",
  "VDD": "7",
  "SCL": "8",
  "SDA": "9",
  "IO6/EXT_VREF": "10",
  "LDO_VOUT_11": "11",
  "LDO_VIN_12": "12",
  "LDO_VOUT_13": "13",
  "LDO_VOUT_14": "14",
  "LDO_VIN_15": "15",
  "LDO_VOUT_16": "16",
  "AGND": "17",
  "IO7/ACMP2+": "18",
  "IO8/ACMP3+": "19",
  "GND": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IO0/EXT_CLK": "bidirectional", "IO1/ACMP0+": "bidirectional", IO2: "bidirectional", IO3: "bidirectional", "IO4/ACMP1+": "bidirectional", IO5: "input", VDD: "power_in", SCL: "input", SDA: "bidirectional", "IO6/EXT_VREF": "bidirectional", LDO_VOUT_11: "power_out", LDO_VIN_12: "power_in", LDO_VOUT_13: "passive", LDO_VOUT_14: "passive", LDO_VIN_15: "passive", LDO_VOUT_16: "passive", AGND: "power_in", "IO7/ACMP2+": "bidirectional", "IO8/ACMP3+": "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SLG46826G extends Component.withPins({
  "IO14": "1",
  "IO13": "2",
  "IO12": "3",
  "IO11": "4",
  "IO10": "5",
  "IO9": "6",
  "V_{DD2}": "7",
  "IO8": "8",
  "IO7": "9",
  "GND": "10",
  "IO6": "11",
  "SDA": "12",
  "SCL": "13",
  "IO5": "14",
  "IO4": "15",
  "IO3": "16",
  "IO2": "17",
  "IO1": "18",
  "IO0": "19",
  "V_{DD}": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IO14: "bidirectional", IO13: "bidirectional", IO12: "bidirectional", IO11: "bidirectional", IO10: "bidirectional", IO9: "bidirectional", "V_{DD2}": "power_in", IO8: "bidirectional", IO7: "output", GND: "power_in", IO6: "output", SDA: "bidirectional", SCL: "bidirectional", IO5: "bidirectional", IO4: "bidirectional", IO3: "bidirectional", IO2: "bidirectional", IO1: "bidirectional", IO0: "bidirectional", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class SLG47011V extends Component.withPins({
  "V_{DD}": "1",
  "GND": "2",
  "GPI": "3",
  "GPIO0": "4",
  "GPIO1": "5",
  "GPIO2": "6",
  "GPIO3": "7",
  "GPIO4": "8",
  "GPIO5": "9",
  "GPIO6": "10",
  "GPIO7": "11",
  "GPIO8": "12",
  "GPIO9": "13",
  "GPIO10": "14",
  "GPIO11": "15",
  "GPIO12": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", GND: "power_in", GPI: "input", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", GPIO6: "bidirectional", GPIO7: "bidirectional", GPIO8: "bidirectional", GPIO9: "bidirectional", GPIO10: "bidirectional", GPIO11: "bidirectional", GPIO12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "CPLD_Renesas:SLG47011V";
  override referencePrefix = "U";
}
