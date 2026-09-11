// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 1024W FLASH, 72B SRAM, DIP14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F505-IP`. Reference prefix: `U`.
 * Footprint filters: PDIP*, DIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: FLASH-Based 8bit Microcontroller.
 */
export class PIC16F505_IP extends Component.withPins({
  "VDD": "1",
  "CLKIN/OSC1/RB5": "2",
  "CLKOUT/OSC2/RB4": "3",
  "Vpp/~{MCLR}/RB3": "4",
  "RC5/T0CKI": "5",
  "RC4": "6",
  "RC3": "7",
  "RC2": "8",
  "RC1": "9",
  "RC0": "10",
  "RB2": "11",
  "ICSPCLK/RB1": "12",
  "ICSPDAT/RB0": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "CLKIN/OSC1/RB5": "bidirectional", "CLKOUT/OSC2/RB4": "bidirectional", "Vpp/~{MCLR}/RB3": "input", "RC5/T0CKI": "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RB2: "bidirectional", "ICSPCLK/RB1": "bidirectional", "ICSPDAT/RB0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F505-IP";
  override referencePrefix = "U";
}

/**
 * 1024W ROM, 72B SRAM, DIP14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16C505-IP`. Reference prefix: `U`.
 * Footprint filters: PDIP*, DIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: ROM-Based 8bit Microcontroller.
 */
export class PIC16C505_IP extends Component.withPins({
  "VDD": "1",
  "CLKIN/OSC1/RB5": "2",
  "CLKOUT/OSC2/RB4": "3",
  "Vpp/~{MCLR}/RB3": "4",
  "RC5/T0CKI": "5",
  "RC4": "6",
  "RC3": "7",
  "RC2": "8",
  "RC1": "9",
  "RC0": "10",
  "RB2": "11",
  "ICSPCLK/RB1": "12",
  "ICSPDAT/RB0": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "CLKIN/OSC1/RB5": "bidirectional", "CLKOUT/OSC2/RB4": "bidirectional", "Vpp/~{MCLR}/RB3": "input", "RC5/T0CKI": "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RB2: "bidirectional", "ICSPCLK/RB1": "bidirectional", "ICSPDAT/RB0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16C505-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F505, 1024W FLASH, 72B SRAM, SO14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F505-ISL`. Reference prefix: `U`.
 * Footprint filters: SO*, SOIC*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: FLASH-Based 8bit Microcontroller.
 */
export class PIC16F505_ISL extends Component.withPins({
  "VDD": "1",
  "CLKIN/OSC1/RB5": "2",
  "CLKOUT/OSC2/RB4": "3",
  "Vpp/~{MCLR}/RB3": "4",
  "RC5/T0CKI": "5",
  "RC4": "6",
  "RC3": "7",
  "RC2": "8",
  "RC1": "9",
  "RC0": "10",
  "RB2": "11",
  "ICSPCLK/RB1": "12",
  "ICSPDAT/RB0": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "CLKIN/OSC1/RB5": "bidirectional", "CLKOUT/OSC2/RB4": "bidirectional", "Vpp/~{MCLR}/RB3": "input", "RC5/T0CKI": "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RB2: "bidirectional", "ICSPCLK/RB1": "bidirectional", "ICSPDAT/RB0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F505-ISL";
  override referencePrefix = "U";
}

/**
 * PIC16C505, 1024W ROM, 72B SRAM, SO14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16C505-ISL`. Reference prefix: `U`.
 * Footprint filters: SO*, SOIC*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: ROM-Based 8bit Microcontroller.
 */
export class PIC16C505_ISL extends Component.withPins({
  "VDD": "1",
  "CLKIN/OSC1/RB5": "2",
  "CLKOUT/OSC2/RB4": "3",
  "Vpp/~{MCLR}/RB3": "4",
  "RC5/T0CKI": "5",
  "RC4": "6",
  "RC3": "7",
  "RC2": "8",
  "RC1": "9",
  "RC0": "10",
  "RB2": "11",
  "ICSPCLK/RB1": "12",
  "ICSPDAT/RB0": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "CLKIN/OSC1/RB5": "bidirectional", "CLKOUT/OSC2/RB4": "bidirectional", "Vpp/~{MCLR}/RB3": "input", "RC5/T0CKI": "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RB2: "bidirectional", "ICSPCLK/RB1": "bidirectional", "ICSPDAT/RB0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16C505-ISL";
  override referencePrefix = "U";
}

/**
 * PIC16F505, 1024W FLASH, 72B SRAM, TSSOP14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F505-IST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: FLASH-Based 8bit Microcontroller.
 */
export class PIC16F505_IST extends Component.withPins({
  "VDD": "1",
  "CLKIN/OSC1/RB5": "2",
  "CLKOUT/OSC2/RB4": "3",
  "Vpp/~{MCLR}/RB3": "4",
  "RC5/T0CKI": "5",
  "RC4": "6",
  "RC3": "7",
  "RC2": "8",
  "RC1": "9",
  "RC0": "10",
  "RB2": "11",
  "ICSPCLK/RB1": "12",
  "ICSPDAT/RB0": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "CLKIN/OSC1/RB5": "bidirectional", "CLKOUT/OSC2/RB4": "bidirectional", "Vpp/~{MCLR}/RB3": "input", "RC5/T0CKI": "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RB2: "bidirectional", "ICSPCLK/RB1": "bidirectional", "ICSPDAT/RB0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F505-IST";
  override referencePrefix = "U";
}

/**
 * PIC16C505, 1024W ROM, 72B SRAM, TSSOP14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16C505-IST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: ROM-Based 8bit Microcontroller.
 */
export class PIC16C505_IST extends Component.withPins({
  "VDD": "1",
  "CLKIN/OSC1/RB5": "2",
  "CLKOUT/OSC2/RB4": "3",
  "Vpp/~{MCLR}/RB3": "4",
  "RC5/T0CKI": "5",
  "RC4": "6",
  "RC3": "7",
  "RC2": "8",
  "RC1": "9",
  "RC0": "10",
  "RB2": "11",
  "ICSPCLK/RB1": "12",
  "ICSPDAT/RB0": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "CLKIN/OSC1/RB5": "bidirectional", "CLKOUT/OSC2/RB4": "bidirectional", "Vpp/~{MCLR}/RB3": "input", "RC5/T0CKI": "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RB2: "bidirectional", "ICSPCLK/RB1": "bidirectional", "ICSPDAT/RB0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16C505-IST";
  override referencePrefix = "U";
}

/**
 * 14kB FLASH, 1024B SRAM, PDIP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F13145-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU08/ProductDocuments/DataSheets/PIC16F13145-Family-Microcontroller-Data-Sheet-DS40002519.pdf
 * Keywords: 8-bit microcontroller Configurable Logic Block.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class PIC16F13145_xP extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "~{MCLR}/VPP/RA3": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "~{MCLR}/VPP/RA3": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F13145-xP";
  override referencePrefix = "U";
}

/**
 * PIC16F1454, 8192W FLASH, 1024B SRAM, QFN-16
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1454-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41639A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1454_IML extends Component.withPins({
  "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "1",
  "RA4/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "2",
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "3",
  "PWM1/DT/RX/T0CKI/RC5": "4",
  "CK/TX/RC4": "5",
  "CLKR/~{SS}/PWM2/RC3": "6",
  "SDO/RC2": "7",
  "ICSPCLK/SDI/SDA/RC1": "8",
  "ICSPDAT/SCK/SCL/RC0": "9",
  "Vusb3v3": "10",
  "RA1/D-/ICSPCLK": "11",
  "RA0/D+/ICSPDAT": "12",
  "VSS": "13",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "bidirectional", "RA4/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "bidirectional", "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/DT/RX/T0CKI/RC5": "bidirectional", "CK/TX/RC4": "bidirectional", "CLKR/~{SS}/PWM2/RC3": "bidirectional", "SDO/RC2": "bidirectional", "ICSPCLK/SDI/SDA/RC1": "bidirectional", "ICSPDAT/SCK/SCL/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1454-IML";
  override referencePrefix = "U";
}

/**
 * 8192W FLASH, 1024B SRAM, PDIP-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1454-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41639A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1454_IP extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "2",
  "RA4/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "3",
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/DT/RX/T0CKI/RC5": "5",
  "CK/TX/RC4": "6",
  "CLKR/~{SS}/PWM2/RC3": "7",
  "SDO/RC2": "8",
  "ICSPCLK/SDI/SDA/RC1": "9",
  "ICSPDAT/SCK/SCL/RC0": "10",
  "Vusb3v3": "11",
  "RA1/D-/ICSPCLK": "12",
  "RA0/D+/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "bidirectional", "RA4/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "bidirectional", "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/DT/RX/T0CKI/RC5": "bidirectional", "CK/TX/RC4": "bidirectional", "CLKR/~{SS}/PWM2/RC3": "bidirectional", "SDO/RC2": "bidirectional", "ICSPCLK/SDI/SDA/RC1": "bidirectional", "ICSPDAT/SCK/SCL/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1454-IP";
  override referencePrefix = "U";
}

/**
 * 8192W FLASH, 1024B SRAM, PDIP-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1454-ISL`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1454_ISL extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "2",
  "RA4/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "3",
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/DT/RX/T0CKI/RC5": "5",
  "CK/TX/RC4": "6",
  "CLKR/~{SS}/PWM2/RC3": "7",
  "SDO/RC2": "8",
  "ICSPCLK/SDI/SDA/RC1": "9",
  "ICSPDAT/SCK/SCL/RC0": "10",
  "Vusb3v3": "11",
  "RA1/D-/ICSPCLK": "12",
  "RA0/D+/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "bidirectional", "RA4/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "bidirectional", "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/DT/RX/T0CKI/RC5": "bidirectional", "CK/TX/RC4": "bidirectional", "CLKR/~{SS}/PWM2/RC3": "bidirectional", "SDO/RC2": "bidirectional", "ICSPCLK/SDI/SDA/RC1": "bidirectional", "ICSPDAT/SCK/SCL/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1454-ISL";
  override referencePrefix = "U";
}

/**
 * 8192W FLASH, 1024B SRAM, PDIP-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1454-ISS`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1454_ISS extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "2",
  "RA4/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "3",
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/DT/RX/T0CKI/RC5": "5",
  "CK/TX/RC4": "6",
  "CLKR/~{SS}/PWM2/RC3": "7",
  "SDO/RC2": "8",
  "ICSPCLK/SDI/SDA/RC1": "9",
  "ICSPDAT/SCK/SCL/RC0": "10",
  "Vusb3v3": "11",
  "RA1/D-/ICSPCLK": "12",
  "RA0/D+/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "bidirectional", "RA4/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "bidirectional", "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/DT/RX/T0CKI/RC5": "bidirectional", "CK/TX/RC4": "bidirectional", "CLKR/~{SS}/PWM2/RC3": "bidirectional", "SDO/RC2": "bidirectional", "ICSPCLK/SDI/SDA/RC1": "bidirectional", "ICSPDAT/SCK/SCL/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1454-ISS";
  override referencePrefix = "U";
}

/**
 * 8192W FLASH, 1024B SRAM, PDIP-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1454-IST`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1454_IST extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "2",
  "RA4/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "3",
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/DT/RX/T0CKI/RC5": "5",
  "CK/TX/RC4": "6",
  "CLKR/~{SS}/PWM2/RC3": "7",
  "SDO/RC2": "8",
  "ICSPCLK/SDI/SDA/RC1": "9",
  "ICSPDAT/SCK/SCL/RC0": "10",
  "Vusb3v3": "11",
  "RA1/D-/ICSPCLK": "12",
  "RA0/D+/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "bidirectional", "RA4/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "bidirectional", "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/DT/RX/T0CKI/RC5": "bidirectional", "CK/TX/RC4": "bidirectional", "CLKR/~{SS}/PWM2/RC3": "bidirectional", "SDO/RC2": "bidirectional", "ICSPCLK/SDI/SDA/RC1": "bidirectional", "ICSPDAT/SCK/SCL/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1454-IST";
  override referencePrefix = "U";
}

/**
 * PIC16F1454, 8192W FLASH, 1024B SRAM, QFN-16
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1455-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41639A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1455_IML extends Component.withPins({
  "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "1",
  "RA4/AN3/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "2",
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "3",
  "PWM1/DT/RX/CWG1A/T0CKI/RC5": "4",
  "CK/TX/CWG1B/C1OUT/C2OUT/RC4": "5",
  "CLKR/~{SS}/PWM2/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "6",
  "SDO/C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "7",
  "ICSPCLK/SDI/SDA/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "8",
  "ICSPDAT/SCK/SCL/C2IN+/C1IN+/Vref+/AN4/RC0": "9",
  "Vusb3v3": "10",
  "RA1/D-/ICSPCLK": "11",
  "RA0/D+/ICSPDAT": "12",
  "VSS": "13",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "bidirectional", "RA4/AN3/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "bidirectional", "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/DT/RX/CWG1A/T0CKI/RC5": "bidirectional", "CK/TX/CWG1B/C1OUT/C2OUT/RC4": "bidirectional", "CLKR/~{SS}/PWM2/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "bidirectional", "SDO/C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "bidirectional", "ICSPCLK/SDI/SDA/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "bidirectional", "ICSPDAT/SCK/SCL/C2IN+/C1IN+/Vref+/AN4/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1455-IML";
  override referencePrefix = "U";
}

/**
 * PIC16F1454, 8192W FLASH, 1024B SRAM, PDIP-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1455-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41639A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1455_IP extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "2",
  "RA4/AN3/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "3",
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/DT/RX/CWG1A/T0CKI/RC5": "5",
  "CK/TX/CWG1B/C1OUT/C2OUT/RC4": "6",
  "CLKR/~{SS}/PWM2/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "7",
  "SDO/C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "8",
  "ICSPCLK/SDI/SDA/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "9",
  "ICSPDAT/SCK/SCL/C2IN+/C1IN+/Vref+/AN4/RC0": "10",
  "Vusb3v3": "11",
  "RA1/D-/ICSPCLK": "12",
  "RA0/D+/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "bidirectional", "RA4/AN3/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "bidirectional", "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/DT/RX/CWG1A/T0CKI/RC5": "bidirectional", "CK/TX/CWG1B/C1OUT/C2OUT/RC4": "bidirectional", "CLKR/~{SS}/PWM2/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "bidirectional", "SDO/C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "bidirectional", "ICSPCLK/SDI/SDA/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "bidirectional", "ICSPDAT/SCK/SCL/C2IN+/C1IN+/Vref+/AN4/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1455-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F1454, 8192W FLASH, 1024B SRAM, PDIP-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1455-ISL`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1455_ISL extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "2",
  "RA4/AN3/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "3",
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/DT/RX/CWG1A/T0CKI/RC5": "5",
  "CK/TX/CWG1B/C1OUT/C2OUT/RC4": "6",
  "CLKR/~{SS}/PWM2/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "7",
  "SDO/C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "8",
  "ICSPCLK/SDI/SDA/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "9",
  "ICSPDAT/SCK/SCL/C2IN+/C1IN+/Vref+/AN4/RC0": "10",
  "Vusb3v3": "11",
  "RA1/D-/ICSPCLK": "12",
  "RA0/D+/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "bidirectional", "RA4/AN3/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "bidirectional", "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/DT/RX/CWG1A/T0CKI/RC5": "bidirectional", "CK/TX/CWG1B/C1OUT/C2OUT/RC4": "bidirectional", "CLKR/~{SS}/PWM2/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "bidirectional", "SDO/C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "bidirectional", "ICSPCLK/SDI/SDA/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "bidirectional", "ICSPDAT/SCK/SCL/C2IN+/C1IN+/Vref+/AN4/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1455-ISL";
  override referencePrefix = "U";
}

/**
 * PIC16F1454, 8192W FLASH, 1024B SRAM, PDIP-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1455-ISS`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1455_ISS extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "2",
  "RA4/AN3/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "3",
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/DT/RX/CWG1A/T0CKI/RC5": "5",
  "CK/TX/CWG1B/C1OUT/C2OUT/RC4": "6",
  "CLKR/~{SS}/PWM2/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "7",
  "SDO/C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "8",
  "ICSPCLK/SDI/SDA/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "9",
  "ICSPDAT/SCK/SCL/C2IN+/C1IN+/Vref+/AN4/RC0": "10",
  "Vusb3v3": "11",
  "RA1/D-/ICSPCLK": "12",
  "RA0/D+/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "bidirectional", "RA4/AN3/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "bidirectional", "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/DT/RX/CWG1A/T0CKI/RC5": "bidirectional", "CK/TX/CWG1B/C1OUT/C2OUT/RC4": "bidirectional", "CLKR/~{SS}/PWM2/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "bidirectional", "SDO/C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "bidirectional", "ICSPCLK/SDI/SDA/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "bidirectional", "ICSPDAT/SCK/SCL/C2IN+/C1IN+/Vref+/AN4/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1455-ISS";
  override referencePrefix = "U";
}

/**
 * PIC16F1454, 8192W FLASH, 1024B SRAM, PDIP-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1455-IST`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1455_IST extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "2",
  "RA4/AN3/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "3",
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/DT/RX/CWG1A/T0CKI/RC5": "5",
  "CK/TX/CWG1B/C1OUT/C2OUT/RC4": "6",
  "CLKR/~{SS}/PWM2/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "7",
  "SDO/C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "8",
  "ICSPCLK/SDI/SDA/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "9",
  "ICSPDAT/SCK/SCL/C2IN+/C1IN+/Vref+/AN4/RC0": "10",
  "Vusb3v3": "11",
  "RA1/D-/ICSPCLK": "12",
  "RA0/D+/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/PWM2/CLKIN/OSC1": "bidirectional", "RA4/AN3/SOSCO/T1G/SDO/CLKOUT/OSC2/CLKR": "bidirectional", "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/DT/RX/CWG1A/T0CKI/RC5": "bidirectional", "CK/TX/CWG1B/C1OUT/C2OUT/RC4": "bidirectional", "CLKR/~{SS}/PWM2/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "bidirectional", "SDO/C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "bidirectional", "ICSPCLK/SDI/SDA/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "bidirectional", "ICSPDAT/SCK/SCL/C2IN+/C1IN+/Vref+/AN4/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1455-IST";
  override referencePrefix = "U";
}

/**
 * PIC16F1454, 8192W FLASH, 1024B SRAM, QFN-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1459-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41639A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1459_IML extends Component.withPins({
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "1",
  "PWM1/CWG1A/T0CKI/RC5": "2",
  "CWG1B/C1OUT/C2OUT/RC4": "3",
  "CLKR/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "4",
  "~{SS}/PWM2/AN8/RC6": "5",
  "SDO/AN9/RC7": "6",
  "RB7/TX/CK": "7",
  "RB6/SCL/SCK": "8",
  "RB5/AN11/RX/DX": "9",
  "RB4/AN10/SDA/SDI": "10",
  "C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "11",
  "ICSPCLK/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "12",
  "ICSPDAT/C2IN+/C1IN+/Vref+/AN4/RC0": "13",
  "Vusb3v3": "14",
  "RA1/D-/ICSPCLK": "15",
  "RA0/D+/ICSPDAT": "16",
  "VSS": "17",
  "VDD": "18",
  "RA5/SOSCI/T1CKI/OSC1/CLKIN": "19",
  "RA4/AN3/SOSCO/T1G/OSC2/CLKOUT/CLKR": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/CWG1A/T0CKI/RC5": "bidirectional", "CWG1B/C1OUT/C2OUT/RC4": "bidirectional", "CLKR/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "bidirectional", "~{SS}/PWM2/AN8/RC6": "bidirectional", "SDO/AN9/RC7": "bidirectional", "RB7/TX/CK": "bidirectional", "RB6/SCL/SCK": "bidirectional", "RB5/AN11/RX/DX": "bidirectional", "RB4/AN10/SDA/SDI": "bidirectional", "C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "bidirectional", "ICSPCLK/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "bidirectional", "ICSPDAT/C2IN+/C1IN+/Vref+/AN4/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", VDD: "power_in", "RA5/SOSCI/T1CKI/OSC1/CLKIN": "bidirectional", "RA4/AN3/SOSCO/T1G/OSC2/CLKOUT/CLKR": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1459-IML";
  override referencePrefix = "U";
}

/**
 * PIC16F1454, 8192W FLASH, 1024B SRAM, PDIP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1459-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41639A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1459_IP extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/OSC1/CLKIN": "2",
  "RA4/AN3/SOSCO/T1G/OSC2/CLKOUT/CLKR": "3",
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/CWG1A/T0CKI/RC5": "5",
  "CWG1B/C1OUT/C2OUT/RC4": "6",
  "CLKR/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "7",
  "~{SS}/PWM2/AN8/RC6": "8",
  "SDO/AN9/RC7": "9",
  "RB7/TX/CK": "10",
  "RB6/SCL/SCK": "11",
  "RB5/AN11/RX/DX": "12",
  "RB4/AN10/SDA/SDI": "13",
  "C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "14",
  "ICSPCLK/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "15",
  "ICSPDAT/C2IN+/C1IN+/Vref+/AN4/RC0": "16",
  "Vusb3v3": "17",
  "RA1/D-/ICSPCLK": "18",
  "RA0/D+/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/OSC1/CLKIN": "bidirectional", "RA4/AN3/SOSCO/T1G/OSC2/CLKOUT/CLKR": "bidirectional", "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/CWG1A/T0CKI/RC5": "bidirectional", "CWG1B/C1OUT/C2OUT/RC4": "bidirectional", "CLKR/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "bidirectional", "~{SS}/PWM2/AN8/RC6": "bidirectional", "SDO/AN9/RC7": "bidirectional", "RB7/TX/CK": "bidirectional", "RB6/SCL/SCK": "bidirectional", "RB5/AN11/RX/DX": "bidirectional", "RB4/AN10/SDA/SDI": "bidirectional", "C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "bidirectional", "ICSPCLK/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "bidirectional", "ICSPDAT/C2IN+/C1IN+/Vref+/AN4/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1459-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F1454, 8192W FLASH, 1024B SRAM, PDIP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1459-ISO`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1459_ISO extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/OSC1/CLKIN": "2",
  "RA4/AN3/SOSCO/T1G/OSC2/CLKOUT/CLKR": "3",
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/CWG1A/T0CKI/RC5": "5",
  "CWG1B/C1OUT/C2OUT/RC4": "6",
  "CLKR/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "7",
  "~{SS}/PWM2/AN8/RC6": "8",
  "SDO/AN9/RC7": "9",
  "RB7/TX/CK": "10",
  "RB6/SCL/SCK": "11",
  "RB5/AN11/RX/DX": "12",
  "RB4/AN10/SDA/SDI": "13",
  "C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "14",
  "ICSPCLK/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "15",
  "ICSPDAT/C2IN+/C1IN+/Vref+/AN4/RC0": "16",
  "Vusb3v3": "17",
  "RA1/D-/ICSPCLK": "18",
  "RA0/D+/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/OSC1/CLKIN": "bidirectional", "RA4/AN3/SOSCO/T1G/OSC2/CLKOUT/CLKR": "bidirectional", "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/CWG1A/T0CKI/RC5": "bidirectional", "CWG1B/C1OUT/C2OUT/RC4": "bidirectional", "CLKR/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "bidirectional", "~{SS}/PWM2/AN8/RC6": "bidirectional", "SDO/AN9/RC7": "bidirectional", "RB7/TX/CK": "bidirectional", "RB6/SCL/SCK": "bidirectional", "RB5/AN11/RX/DX": "bidirectional", "RB4/AN10/SDA/SDI": "bidirectional", "C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "bidirectional", "ICSPCLK/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "bidirectional", "ICSPDAT/C2IN+/C1IN+/Vref+/AN4/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1459-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F1454, 8192W FLASH, 1024B SRAM, PDIP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1459-ISS`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1459_ISS extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/OSC1/CLKIN": "2",
  "RA4/AN3/SOSCO/T1G/OSC2/CLKOUT/CLKR": "3",
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/CWG1A/T0CKI/RC5": "5",
  "CWG1B/C1OUT/C2OUT/RC4": "6",
  "CLKR/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "7",
  "~{SS}/PWM2/AN8/RC6": "8",
  "SDO/AN9/RC7": "9",
  "RB7/TX/CK": "10",
  "RB6/SCL/SCK": "11",
  "RB5/AN11/RX/DX": "12",
  "RB4/AN10/SDA/SDI": "13",
  "C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "14",
  "ICSPCLK/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "15",
  "ICSPDAT/C2IN+/C1IN+/Vref+/AN4/RC0": "16",
  "Vusb3v3": "17",
  "RA1/D-/ICSPCLK": "18",
  "RA0/D+/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/OSC1/CLKIN": "bidirectional", "RA4/AN3/SOSCO/T1G/OSC2/CLKOUT/CLKR": "bidirectional", "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/CWG1A/T0CKI/RC5": "bidirectional", "CWG1B/C1OUT/C2OUT/RC4": "bidirectional", "CLKR/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "bidirectional", "~{SS}/PWM2/AN8/RC6": "bidirectional", "SDO/AN9/RC7": "bidirectional", "RB7/TX/CK": "bidirectional", "RB6/SCL/SCK": "bidirectional", "RB5/AN11/RX/DX": "bidirectional", "RB4/AN10/SDA/SDI": "bidirectional", "C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "bidirectional", "ICSPCLK/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "bidirectional", "ICSPDAT/C2IN+/C1IN+/Vref+/AN4/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1459-ISS";
  override referencePrefix = "U";
}

/**
 * PIC16F1454, 8192W FLASH, 1024B SRAM, PDIP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1459-IST`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1459_IST extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/OSC1/CLKIN": "2",
  "RA4/AN3/SOSCO/T1G/OSC2/CLKOUT/CLKR": "3",
  "RA3/T1G/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/CWG1A/T0CKI/RC5": "5",
  "CWG1B/C1OUT/C2OUT/RC4": "6",
  "CLKR/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "7",
  "~{SS}/PWM2/AN8/RC6": "8",
  "SDO/AN9/RC7": "9",
  "RB7/TX/CK": "10",
  "RB6/SCL/SCK": "11",
  "RB5/AN11/RX/DX": "12",
  "RB4/AN10/SDA/SDI": "13",
  "C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "14",
  "ICSPCLK/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "15",
  "ICSPDAT/C2IN+/C1IN+/Vref+/AN4/RC0": "16",
  "Vusb3v3": "17",
  "RA1/D-/ICSPCLK": "18",
  "RA0/D+/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/OSC1/CLKIN": "bidirectional", "RA4/AN3/SOSCO/T1G/OSC2/CLKOUT/CLKR": "bidirectional", "RA3/T1G/~{SS}/~{MCLR}/Vpp": "input", "PWM1/CWG1A/T0CKI/RC5": "bidirectional", "CWG1B/C1OUT/C2OUT/RC4": "bidirectional", "CLKR/C1IN3-/C2IN3-/DACOUT2/AN7/RC3": "bidirectional", "~{SS}/PWM2/AN8/RC6": "bidirectional", "SDO/AN9/RC7": "bidirectional", "RB7/TX/CK": "bidirectional", "RB6/SCL/SCK": "bidirectional", "RB5/AN11/RX/DX": "bidirectional", "RB4/AN10/SDA/SDI": "bidirectional", "C2IN2-/C1IN2-/DACOUT1/AN6/RC2": "bidirectional", "ICSPCLK/~{CWGFLT}/C2IN-/C1IN-/AN5/RC1": "bidirectional", "ICSPDAT/C2IN+/C1IN+/Vref+/AN4/RC0": "bidirectional", Vusb3v3: "bidirectional", "RA1/D-/ICSPCLK": "bidirectional", "RA0/D+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1459-IST";
  override referencePrefix = "U";
}

/**
 * PIC16F1503, 2048W FLASH, 128B SRAM, QFN-16
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1503-IMG`. Reference prefix: `U`.
 * Footprint filters: QFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41607A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1503_IMG extends Component.withPins({
  "RA5/T1CKI/NCO1CLK/CLCIN1/CLKIN": "1",
  "RA4/AN3/T1G/NCO1/SDO/CLKOUT": "2",
  "RA3/T1G/CLC1IN0/~{SS}/~{MCLR}/Vpp": "3",
  "PWM1/CLC1/CWG1A/RC5": "4",
  "CLC2IN1/CWG1B/C2OUT/RC4": "5",
  "~{SS}/PWM2/CLCIN0/C2IN3-/C1IN3-/AN7/RC3": "6",
  "SDO/C2IN2-/C1IN2-/AN6/RC2": "7",
  "SDI/SDA/PWM4/NCO1/C2IN1-/C1IN1-/AN5/RC1": "8",
  "SCK/SCL/CLC2/C2IN+/AN4/RC0": "9",
  "RA2/AN2/DACOUT2/C1OUT/T0CKI/~{CWG1FLT}/CLC1/PWM3/INT": "10",
  "RA1/AN1/Vref+/C1IN0-/C2IN0-/ICSPCLK": "11",
  "RA0/AN0/DACOUT1/C1IN+/ICSPDAT": "12",
  "VSS": "13",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA5/T1CKI/NCO1CLK/CLCIN1/CLKIN": "bidirectional", "RA4/AN3/T1G/NCO1/SDO/CLKOUT": "bidirectional", "RA3/T1G/CLC1IN0/~{SS}/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC2IN1/CWG1B/C2OUT/RC4": "bidirectional", "~{SS}/PWM2/CLCIN0/C2IN3-/C1IN3-/AN7/RC3": "bidirectional", "SDO/C2IN2-/C1IN2-/AN6/RC2": "bidirectional", "SDI/SDA/PWM4/NCO1/C2IN1-/C1IN1-/AN5/RC1": "bidirectional", "SCK/SCL/CLC2/C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/DACOUT2/C1OUT/T0CKI/~{CWG1FLT}/CLC1/PWM3/INT": "bidirectional", "RA1/AN1/Vref+/C1IN0-/C2IN0-/ICSPCLK": "bidirectional", "RA0/AN0/DACOUT1/C1IN+/ICSPDAT": "bidirectional", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1503-IMG";
  override referencePrefix = "U";
}

/**
 * 2048W FLASH, 128B SRAM, PDIP-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1503-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41607A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1503_IP extends Component.withPins({
  "VDD": "1",
  "RA5/T1CKI/NCO1CLK/CLCIN1/CLKIN": "2",
  "RA4/AN3/T1G/NCO1/SDO/CLKOUT": "3",
  "RA3/T1G/CLC1IN0/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/CLC1/CWG1A/RC5": "5",
  "CLC2IN1/CWG1B/C2OUT/RC4": "6",
  "~{SS}/PWM2/CLCIN0/C2IN3-/C1IN3-/AN7/RC3": "7",
  "SDO/C2IN2-/C1IN2-/AN6/RC2": "8",
  "SDI/SDA/PWM4/NCO1/C2IN1-/C1IN1-/AN5/RC1": "9",
  "SCK/SCL/CLC2/C2IN+/AN4/RC0": "10",
  "RA2/AN2/DACOUT2/C1OUT/T0CKI/~{CWG1FLT}/CLC1/PWM3/INT": "11",
  "RA1/AN1/Vref+/C1IN0-/C2IN0-/ICSPCLK": "12",
  "RA0/AN0/DACOUT1/C1IN+/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/T1CKI/NCO1CLK/CLCIN1/CLKIN": "bidirectional", "RA4/AN3/T1G/NCO1/SDO/CLKOUT": "bidirectional", "RA3/T1G/CLC1IN0/~{SS}/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC2IN1/CWG1B/C2OUT/RC4": "bidirectional", "~{SS}/PWM2/CLCIN0/C2IN3-/C1IN3-/AN7/RC3": "bidirectional", "SDO/C2IN2-/C1IN2-/AN6/RC2": "bidirectional", "SDI/SDA/PWM4/NCO1/C2IN1-/C1IN1-/AN5/RC1": "bidirectional", "SCK/SCL/CLC2/C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/DACOUT2/C1OUT/T0CKI/~{CWG1FLT}/CLC1/PWM3/INT": "bidirectional", "RA1/AN1/Vref+/C1IN0-/C2IN0-/ICSPCLK": "bidirectional", "RA0/AN0/DACOUT1/C1IN+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1503-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F1503, 2048W FLASH, 128B SRAM, SO-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1503-ISL`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41607A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1503_ISL extends Component.withPins({
  "VDD": "1",
  "RA5/T1CKI/NCO1CLK/CLCIN1/CLKIN": "2",
  "RA4/AN3/T1G/NCO1/SDO/CLKOUT": "3",
  "RA3/T1G/CLC1IN0/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/CLC1/CWG1A/RC5": "5",
  "CLC2IN1/CWG1B/C2OUT/RC4": "6",
  "~{SS}/PWM2/CLCIN0/C2IN3-/C1IN3-/AN7/RC3": "7",
  "SDO/C2IN2-/C1IN2-/AN6/RC2": "8",
  "SDI/SDA/PWM4/NCO1/C2IN1-/C1IN1-/AN5/RC1": "9",
  "SCK/SCL/CLC2/C2IN+/AN4/RC0": "10",
  "RA2/AN2/DACOUT2/C1OUT/T0CKI/~{CWG1FLT}/CLC1/PWM3/INT": "11",
  "RA1/AN1/Vref+/C1IN0-/C2IN0-/ICSPCLK": "12",
  "RA0/AN0/DACOUT1/C1IN+/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/T1CKI/NCO1CLK/CLCIN1/CLKIN": "bidirectional", "RA4/AN3/T1G/NCO1/SDO/CLKOUT": "bidirectional", "RA3/T1G/CLC1IN0/~{SS}/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC2IN1/CWG1B/C2OUT/RC4": "bidirectional", "~{SS}/PWM2/CLCIN0/C2IN3-/C1IN3-/AN7/RC3": "bidirectional", "SDO/C2IN2-/C1IN2-/AN6/RC2": "bidirectional", "SDI/SDA/PWM4/NCO1/C2IN1-/C1IN1-/AN5/RC1": "bidirectional", "SCK/SCL/CLC2/C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/DACOUT2/C1OUT/T0CKI/~{CWG1FLT}/CLC1/PWM3/INT": "bidirectional", "RA1/AN1/Vref+/C1IN0-/C2IN0-/ICSPCLK": "bidirectional", "RA0/AN0/DACOUT1/C1IN+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1503-ISL";
  override referencePrefix = "U";
}

/**
 * PIC16F1503, 2048W FLASH, 128B SRAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1503-IST`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41607A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1503_IST extends Component.withPins({
  "VDD": "1",
  "RA5/T1CKI/NCO1CLK/CLCIN1/CLKIN": "2",
  "RA4/AN3/T1G/NCO1/SDO/CLKOUT": "3",
  "RA3/T1G/CLC1IN0/~{SS}/~{MCLR}/Vpp": "4",
  "PWM1/CLC1/CWG1A/RC5": "5",
  "CLC2IN1/CWG1B/C2OUT/RC4": "6",
  "~{SS}/PWM2/CLCIN0/C2IN3-/C1IN3-/AN7/RC3": "7",
  "SDO/C2IN2-/C1IN2-/AN6/RC2": "8",
  "SDI/SDA/PWM4/NCO1/C2IN1-/C1IN1-/AN5/RC1": "9",
  "SCK/SCL/CLC2/C2IN+/AN4/RC0": "10",
  "RA2/AN2/DACOUT2/C1OUT/T0CKI/~{CWG1FLT}/CLC1/PWM3/INT": "11",
  "RA1/AN1/Vref+/C1IN0-/C2IN0-/ICSPCLK": "12",
  "RA0/AN0/DACOUT1/C1IN+/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/T1CKI/NCO1CLK/CLCIN1/CLKIN": "bidirectional", "RA4/AN3/T1G/NCO1/SDO/CLKOUT": "bidirectional", "RA3/T1G/CLC1IN0/~{SS}/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC2IN1/CWG1B/C2OUT/RC4": "bidirectional", "~{SS}/PWM2/CLCIN0/C2IN3-/C1IN3-/AN7/RC3": "bidirectional", "SDO/C2IN2-/C1IN2-/AN6/RC2": "bidirectional", "SDI/SDA/PWM4/NCO1/C2IN1-/C1IN1-/AN5/RC1": "bidirectional", "SCK/SCL/CLC2/C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/DACOUT2/C1OUT/T0CKI/~{CWG1FLT}/CLC1/PWM3/INT": "bidirectional", "RA1/AN1/Vref+/C1IN0-/C2IN0-/ICSPCLK": "bidirectional", "RA0/AN0/DACOUT1/C1IN+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1503-IST";
  override referencePrefix = "U";
}

/**
 * PIC16F1507, 2048W FLASH, 128B SRAM, QFN-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1507-IML`. Reference prefix: `U`.
 * Footprint filters: MLF*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41586A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1507_IML extends Component.withPins({
  "RA3/CLC1IN0/~{MCLR}/Vpp": "1",
  "PWM1/CLC1/CWG1A/RC5": "2",
  "CLC2IN1/CWG1B/RC4": "3",
  "PWM2/CLC2IN0/AN7/RC3": "4",
  "NCO1/AN8/RC6": "5",
  "CLCIN1/AN9/RC7": "6",
  "RB7": "7",
  "RB6": "8",
  "RB5/AN11": "9",
  "RB4/AN10": "10",
  "AN6/RC2": "11",
  "PWM4/NCO1/AN5/RC1": "12",
  "CLC2/AN4/RC0": "13",
  "RA2/AN2/~{CWG1FLT}/CLC1/T0CKI/PWM3": "14",
  "RA1/AN1/Vref+/ICSPCLK": "15",
  "RA0/AN0/ICSPDAT": "16",
  "VSS": "17",
  "VDD": "18",
  "RA5/NCO1CLK/T1CKI/CLKIN": "19",
  "RA4/AN3/~{T1G}/CLKOUT": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA3/CLC1IN0/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC2IN1/CWG1B/RC4": "bidirectional", "PWM2/CLC2IN0/AN7/RC3": "bidirectional", "NCO1/AN8/RC6": "bidirectional", "CLCIN1/AN9/RC7": "bidirectional", RB7: "bidirectional", RB6: "bidirectional", "RB5/AN11": "bidirectional", "RB4/AN10": "bidirectional", "AN6/RC2": "bidirectional", "PWM4/NCO1/AN5/RC1": "bidirectional", "CLC2/AN4/RC0": "bidirectional", "RA2/AN2/~{CWG1FLT}/CLC1/T0CKI/PWM3": "bidirectional", "RA1/AN1/Vref+/ICSPCLK": "bidirectional", "RA0/AN0/ICSPDAT": "bidirectional", VSS: "power_in", VDD: "power_in", "RA5/NCO1CLK/T1CKI/CLKIN": "bidirectional", "RA4/AN3/~{T1G}/CLKOUT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1507-IML";
  override referencePrefix = "U";
}

/**
 * 2048W FLASH, 128B SRAM, PDIP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1507-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41586A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1507_IP extends Component.withPins({
  "VDD": "1",
  "RA5/NCO1CLK/T1CKI/CLKIN": "2",
  "RA4/AN3/~{T1G}/CLKOUT": "3",
  "RA3/CLC1IN0/~{MCLR}/Vpp": "4",
  "PWM1/CLC1/CWG1A/RC5": "5",
  "CLC2IN1/CWG1B/RC4": "6",
  "PWM2/CLC2IN0/AN7/RC3": "7",
  "NCO1/AN8/RC6": "8",
  "CLCIN1/AN9/RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5/AN11": "12",
  "RB4/AN10": "13",
  "AN6/RC2": "14",
  "PWM4/NCO1/AN5/RC1": "15",
  "CLC2/AN4/RC0": "16",
  "RA2/AN2/~{CWG1FLT}/CLC1/T0CKI/PWM3": "17",
  "RA1/AN1/Vref+/ICSPCLK": "18",
  "RA0/AN0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/NCO1CLK/T1CKI/CLKIN": "bidirectional", "RA4/AN3/~{T1G}/CLKOUT": "bidirectional", "RA3/CLC1IN0/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC2IN1/CWG1B/RC4": "bidirectional", "PWM2/CLC2IN0/AN7/RC3": "bidirectional", "NCO1/AN8/RC6": "bidirectional", "CLCIN1/AN9/RC7": "bidirectional", RB7: "bidirectional", RB6: "bidirectional", "RB5/AN11": "bidirectional", "RB4/AN10": "bidirectional", "AN6/RC2": "bidirectional", "PWM4/NCO1/AN5/RC1": "bidirectional", "CLC2/AN4/RC0": "bidirectional", "RA2/AN2/~{CWG1FLT}/CLC1/T0CKI/PWM3": "bidirectional", "RA1/AN1/Vref+/ICSPCLK": "bidirectional", "RA0/AN0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1507-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F1507, 2048W FLASH, 128B SRAM, SO-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1507-ISO`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41586A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1507_ISO extends Component.withPins({
  "VDD": "1",
  "RA5/NCO1CLK/T1CKI/CLKIN": "2",
  "RA4/AN3/~{T1G}/CLKOUT": "3",
  "RA3/CLC1IN0/~{MCLR}/Vpp": "4",
  "PWM1/CLC1/CWG1A/RC5": "5",
  "CLC2IN1/CWG1B/RC4": "6",
  "PWM2/CLC2IN0/AN7/RC3": "7",
  "NCO1/AN8/RC6": "8",
  "CLCIN1/AN9/RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5/AN11": "12",
  "RB4/AN10": "13",
  "AN6/RC2": "14",
  "PWM4/NCO1/AN5/RC1": "15",
  "CLC2/AN4/RC0": "16",
  "RA2/AN2/~{CWG1FLT}/CLC1/T0CKI/PWM3": "17",
  "RA1/AN1/Vref+/ICSPCLK": "18",
  "RA0/AN0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/NCO1CLK/T1CKI/CLKIN": "bidirectional", "RA4/AN3/~{T1G}/CLKOUT": "bidirectional", "RA3/CLC1IN0/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC2IN1/CWG1B/RC4": "bidirectional", "PWM2/CLC2IN0/AN7/RC3": "bidirectional", "NCO1/AN8/RC6": "bidirectional", "CLCIN1/AN9/RC7": "bidirectional", RB7: "bidirectional", RB6: "bidirectional", "RB5/AN11": "bidirectional", "RB4/AN10": "bidirectional", "AN6/RC2": "bidirectional", "PWM4/NCO1/AN5/RC1": "bidirectional", "CLC2/AN4/RC0": "bidirectional", "RA2/AN2/~{CWG1FLT}/CLC1/T0CKI/PWM3": "bidirectional", "RA1/AN1/Vref+/ICSPCLK": "bidirectional", "RA0/AN0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1507-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F1507, 2048W FLASH, 128B SRAM, SSOP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1507-ISS`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41586A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1507_ISS extends Component.withPins({
  "VDD": "1",
  "RA5/NCO1CLK/T1CKI/CLKIN": "2",
  "RA4/AN3/~{T1G}/CLKOUT": "3",
  "RA3/CLC1IN0/~{MCLR}/Vpp": "4",
  "PWM1/CLC1/CWG1A/RC5": "5",
  "CLC2IN1/CWG1B/RC4": "6",
  "PWM2/CLC2IN0/AN7/RC3": "7",
  "NCO1/AN8/RC6": "8",
  "CLCIN1/AN9/RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5/AN11": "12",
  "RB4/AN10": "13",
  "AN6/RC2": "14",
  "PWM4/NCO1/AN5/RC1": "15",
  "CLC2/AN4/RC0": "16",
  "RA2/AN2/~{CWG1FLT}/CLC1/T0CKI/PWM3": "17",
  "RA1/AN1/Vref+/ICSPCLK": "18",
  "RA0/AN0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/NCO1CLK/T1CKI/CLKIN": "bidirectional", "RA4/AN3/~{T1G}/CLKOUT": "bidirectional", "RA3/CLC1IN0/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC2IN1/CWG1B/RC4": "bidirectional", "PWM2/CLC2IN0/AN7/RC3": "bidirectional", "NCO1/AN8/RC6": "bidirectional", "CLCIN1/AN9/RC7": "bidirectional", RB7: "bidirectional", RB6: "bidirectional", "RB5/AN11": "bidirectional", "RB4/AN10": "bidirectional", "AN6/RC2": "bidirectional", "PWM4/NCO1/AN5/RC1": "bidirectional", "CLC2/AN4/RC0": "bidirectional", "RA2/AN2/~{CWG1FLT}/CLC1/T0CKI/PWM3": "bidirectional", "RA1/AN1/Vref+/ICSPCLK": "bidirectional", "RA0/AN0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1507-ISS";
  override referencePrefix = "U";
}

/**
 * PIC16F1508, 4096W FLASH, 256B SRAM, QFN-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1508-IML`. Reference prefix: `U`.
 * Footprint filters: MLF*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41609A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1508_IML extends Component.withPins({
  "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "1",
  "PWM1/CLC1/CWG1A/RC5": "2",
  "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "3",
  "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "4",
  "CLC3IN1/NCO1/~{SS}/AN8/RC6": "5",
  "CLC1IN1/SDO/AN9/RC7": "6",
  "RB7/TX/CK/CLC3": "7",
  "RB6/SCL/SCK": "8",
  "RB5/AN11/RX/DT/CLC4IN0": "9",
  "RB4/AN10/SDA/SDI/CLC3IN0": "10",
  "C1IN2-/C2IN2-/AN6/RC2": "11",
  "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "12",
  "CLC2/C2IN+/AN4/RC0": "13",
  "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "14",
  "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "15",
  "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "16",
  "VSS": "17",
  "VDD": "18",
  "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "19",
  "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "bidirectional", "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "bidirectional", "CLC3IN1/NCO1/~{SS}/AN8/RC6": "bidirectional", "CLC1IN1/SDO/AN9/RC7": "bidirectional", "RB7/TX/CK/CLC3": "bidirectional", "RB6/SCL/SCK": "bidirectional", "RB5/AN11/RX/DT/CLC4IN0": "bidirectional", "RB4/AN10/SDA/SDI/CLC3IN0": "bidirectional", "C1IN2-/C2IN2-/AN6/RC2": "bidirectional", "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "bidirectional", "CLC2/C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "bidirectional", "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "bidirectional", "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "bidirectional", VSS: "power_in", VDD: "power_in", "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "bidirectional", "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1508-IML";
  override referencePrefix = "U";
}

/**
 * 4096W FLASH, 256B SRAM, PDIP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1508-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41609A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1508_IP extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "2",
  "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "3",
  "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "4",
  "PWM1/CLC1/CWG1A/RC5": "5",
  "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "6",
  "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "7",
  "CLC3IN1/NCO1/~{SS}/AN8/RC6": "8",
  "CLC1IN1/SDO/AN9/RC7": "9",
  "RB7/TX/CK/CLC3": "10",
  "RB6/SCL/SCK": "11",
  "RB5/AN11/RX/DT/CLC4IN0": "12",
  "RB4/AN10/SDA/SDI/CLC3IN0": "13",
  "C1IN2-/C2IN2-/AN6/RC2": "14",
  "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "15",
  "CLC2/C2IN+/AN4/RC0": "16",
  "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "17",
  "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "18",
  "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "bidirectional", "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "bidirectional", "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "bidirectional", "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "bidirectional", "CLC3IN1/NCO1/~{SS}/AN8/RC6": "bidirectional", "CLC1IN1/SDO/AN9/RC7": "bidirectional", "RB7/TX/CK/CLC3": "bidirectional", "RB6/SCL/SCK": "bidirectional", "RB5/AN11/RX/DT/CLC4IN0": "bidirectional", "RB4/AN10/SDA/SDI/CLC3IN0": "bidirectional", "C1IN2-/C2IN2-/AN6/RC2": "bidirectional", "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "bidirectional", "CLC2/C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "bidirectional", "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "bidirectional", "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1508-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F1508, 4096W FLASH, 256B SRAM, SO-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1508-ISO`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41609A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1508_ISO extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "2",
  "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "3",
  "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "4",
  "PWM1/CLC1/CWG1A/RC5": "5",
  "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "6",
  "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "7",
  "CLC3IN1/NCO1/~{SS}/AN8/RC6": "8",
  "CLC1IN1/SDO/AN9/RC7": "9",
  "RB7/TX/CK/CLC3": "10",
  "RB6/SCL/SCK": "11",
  "RB5/AN11/RX/DT/CLC4IN0": "12",
  "RB4/AN10/SDA/SDI/CLC3IN0": "13",
  "C1IN2-/C2IN2-/AN6/RC2": "14",
  "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "15",
  "CLC2/C2IN+/AN4/RC0": "16",
  "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "17",
  "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "18",
  "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "bidirectional", "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "bidirectional", "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "bidirectional", "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "bidirectional", "CLC3IN1/NCO1/~{SS}/AN8/RC6": "bidirectional", "CLC1IN1/SDO/AN9/RC7": "bidirectional", "RB7/TX/CK/CLC3": "bidirectional", "RB6/SCL/SCK": "bidirectional", "RB5/AN11/RX/DT/CLC4IN0": "bidirectional", "RB4/AN10/SDA/SDI/CLC3IN0": "bidirectional", "C1IN2-/C2IN2-/AN6/RC2": "bidirectional", "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "bidirectional", "CLC2/C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "bidirectional", "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "bidirectional", "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1508-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F1508, 4096W FLASH, 256B SRAM, SSOP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1508-ISS`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41609A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1508_ISS extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "2",
  "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "3",
  "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "4",
  "PWM1/CLC1/CWG1A/RC5": "5",
  "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "6",
  "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "7",
  "CLC3IN1/NCO1/~{SS}/AN8/RC6": "8",
  "CLC1IN1/SDO/AN9/RC7": "9",
  "RB7/TX/CK/CLC3": "10",
  "RB6/SCL/SCK": "11",
  "RB5/AN11/RX/DT/CLC4IN0": "12",
  "RB4/AN10/SDA/SDI/CLC3IN0": "13",
  "C1IN2-/C2IN2-/AN6/RC2": "14",
  "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "15",
  "CLC2/C2IN+/AN4/RC0": "16",
  "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "17",
  "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "18",
  "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "bidirectional", "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "bidirectional", "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "bidirectional", "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "bidirectional", "CLC3IN1/NCO1/~{SS}/AN8/RC6": "bidirectional", "CLC1IN1/SDO/AN9/RC7": "bidirectional", "RB7/TX/CK/CLC3": "bidirectional", "RB6/SCL/SCK": "bidirectional", "RB5/AN11/RX/DT/CLC4IN0": "bidirectional", "RB4/AN10/SDA/SDI/CLC3IN0": "bidirectional", "C1IN2-/C2IN2-/AN6/RC2": "bidirectional", "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "bidirectional", "CLC2/C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "bidirectional", "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "bidirectional", "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1508-ISS";
  override referencePrefix = "U";
}

/**
 * PIC16F1509, 9192W FLASH, 512B SRAM, QFN-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1509-IML`. Reference prefix: `U`.
 * Footprint filters: MLF*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41609A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1509_IML extends Component.withPins({
  "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "1",
  "PWM1/CLC1/CWG1A/RC5": "2",
  "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "3",
  "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "4",
  "CLC3IN1/NCO1/~{SS}/AN8/RC6": "5",
  "CLC1IN1/SDO/AN9/RC7": "6",
  "RB7/TX/CK/CLC3": "7",
  "RB6/SCL/SCK": "8",
  "RB5/AN11/RX/DT/CLC4IN0": "9",
  "RB4/AN10/SDA/SDI/CLC3IN0": "10",
  "C1IN2-/C2IN2-/AN6/RC2": "11",
  "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "12",
  "CLC2/C2IN+/AN4/RC0": "13",
  "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "14",
  "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "15",
  "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "16",
  "VSS": "17",
  "VDD": "18",
  "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "19",
  "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "bidirectional", "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "bidirectional", "CLC3IN1/NCO1/~{SS}/AN8/RC6": "bidirectional", "CLC1IN1/SDO/AN9/RC7": "bidirectional", "RB7/TX/CK/CLC3": "bidirectional", "RB6/SCL/SCK": "bidirectional", "RB5/AN11/RX/DT/CLC4IN0": "bidirectional", "RB4/AN10/SDA/SDI/CLC3IN0": "bidirectional", "C1IN2-/C2IN2-/AN6/RC2": "bidirectional", "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "bidirectional", "CLC2/C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "bidirectional", "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "bidirectional", "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "bidirectional", VSS: "power_in", VDD: "power_in", "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "bidirectional", "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1509-IML";
  override referencePrefix = "U";
}

/**
 * 8192W FLASH, 512B SRAM, PDIP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1509-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41609A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1509_IP extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "2",
  "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "3",
  "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "4",
  "PWM1/CLC1/CWG1A/RC5": "5",
  "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "6",
  "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "7",
  "CLC3IN1/NCO1/~{SS}/AN8/RC6": "8",
  "CLC1IN1/SDO/AN9/RC7": "9",
  "RB7/TX/CK/CLC3": "10",
  "RB6/SCL/SCK": "11",
  "RB5/AN11/RX/DT/CLC4IN0": "12",
  "RB4/AN10/SDA/SDI/CLC3IN0": "13",
  "C1IN2-/C2IN2-/AN6/RC2": "14",
  "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "15",
  "CLC2/C2IN+/AN4/RC0": "16",
  "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "17",
  "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "18",
  "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "bidirectional", "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "bidirectional", "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "bidirectional", "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "bidirectional", "CLC3IN1/NCO1/~{SS}/AN8/RC6": "bidirectional", "CLC1IN1/SDO/AN9/RC7": "bidirectional", "RB7/TX/CK/CLC3": "bidirectional", "RB6/SCL/SCK": "bidirectional", "RB5/AN11/RX/DT/CLC4IN0": "bidirectional", "RB4/AN10/SDA/SDI/CLC3IN0": "bidirectional", "C1IN2-/C2IN2-/AN6/RC2": "bidirectional", "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "bidirectional", "CLC2/C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "bidirectional", "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "bidirectional", "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1509-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F1509, 8192W FLASH, 512B SRAM, SO-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1509-ISO`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41609A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1509_ISO extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "2",
  "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "3",
  "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "4",
  "PWM1/CLC1/CWG1A/RC5": "5",
  "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "6",
  "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "7",
  "CLC3IN1/NCO1/~{SS}/AN8/RC6": "8",
  "CLC1IN1/SDO/AN9/RC7": "9",
  "RB7/TX/CK/CLC3": "10",
  "RB6/SCL/SCK": "11",
  "RB5/AN11/RX/DT/CLC4IN0": "12",
  "RB4/AN10/SDA/SDI/CLC3IN0": "13",
  "C1IN2-/C2IN2-/AN6/RC2": "14",
  "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "15",
  "CLC2/C2IN+/AN4/RC0": "16",
  "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "17",
  "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "18",
  "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "bidirectional", "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "bidirectional", "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "bidirectional", "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "bidirectional", "CLC3IN1/NCO1/~{SS}/AN8/RC6": "bidirectional", "CLC1IN1/SDO/AN9/RC7": "bidirectional", "RB7/TX/CK/CLC3": "bidirectional", "RB6/SCL/SCK": "bidirectional", "RB5/AN11/RX/DT/CLC4IN0": "bidirectional", "RB4/AN10/SDA/SDI/CLC3IN0": "bidirectional", "C1IN2-/C2IN2-/AN6/RC2": "bidirectional", "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "bidirectional", "CLC2/C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "bidirectional", "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "bidirectional", "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1509-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F1509, 8192W FLASH, 512B SRAM, SSOP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1509-ISS`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41609A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1509_ISS extends Component.withPins({
  "VDD": "1",
  "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "2",
  "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "3",
  "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "4",
  "PWM1/CLC1/CWG1A/RC5": "5",
  "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "6",
  "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "7",
  "CLC3IN1/NCO1/~{SS}/AN8/RC6": "8",
  "CLC1IN1/SDO/AN9/RC7": "9",
  "RB7/TX/CK/CLC3": "10",
  "RB6/SCL/SCK": "11",
  "RB5/AN11/RX/DT/CLC4IN0": "12",
  "RB4/AN10/SDA/SDI/CLC3IN0": "13",
  "C1IN2-/C2IN2-/AN6/RC2": "14",
  "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "15",
  "CLC2/C2IN+/AN4/RC0": "16",
  "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "17",
  "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "18",
  "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/SOSCI/T1CKI/NCO1CLK/CLKIN/OSC1": "bidirectional", "RA4/AN3/SOSCO/T1G/CLKOUT/OSC2": "bidirectional", "RA3/T1G/~{SS}/CLC1IN0/~{MCLR}/Vpp": "input", "PWM1/CLC1/CWG1A/RC5": "bidirectional", "CLC4/CLC2IN1/CWG1B/C2OUT/RC4": "bidirectional", "PWM2/CLC2IN0/C1IN3-/AN7/RC3": "bidirectional", "CLC3IN1/NCO1/~{SS}/AN8/RC6": "bidirectional", "CLC1IN1/SDO/AN9/RC7": "bidirectional", "RB7/TX/CK/CLC3": "bidirectional", "RB6/SCL/SCK": "bidirectional", "RB5/AN11/RX/DT/CLC4IN0": "bidirectional", "RB4/AN10/SDA/SDI/CLC3IN0": "bidirectional", "C1IN2-/C2IN2-/AN6/RC2": "bidirectional", "PWM4/NCO1/C1IN1-/C2IN1-/AN5/RC1": "bidirectional", "CLC2/C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/DACOUT2/C1OUT/T0CLKI/~{CWG1FLT}/CLC1/PWM3": "bidirectional", "RA1/AN1/Vref+/C1IN0-/C2IN0-/CLC4IN1/ICSPCLK/ICDCLK": "bidirectional", "RA0/AN0/DACOUT1/C1IN+/ICSPDAT/ICDDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1509-ISS";
  override referencePrefix = "U";
}

/**
 * PIC16F1512, 2048W FLASH, 128B SRAM, UQFN-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1512-IMV`. Reference prefix: `U`.
 * Footprint filters: UQFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41624A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1512_IMV extends Component.withPins({
  "RA2/AN2": "1",
  "RA3/AN3/Vref+": "2",
  "RA4/T0CKI": "3",
  "RA5/AN4/VCAP/~{SS}": "4",
  "VSS_5": "5",
  "RA7/OSC1/CLKIN": "6",
  "RA6/OSC2/CLKOUT": "7",
  "SOSCO/T1CKI/RC0": "8",
  "SOSCI/CCP2/RC1": "9",
  "CCP1/AN14/RC2": "10",
  "SCK/SCL/AN15/RC3": "11",
  "SDI/SDA/AN16/RC4": "12",
  "SDO/AN17/RC5": "13",
  "TX/CK/AN18/RC6": "14",
  "RX/DT/AN19/RC7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "RB0/AN12/INT/IOC": "18",
  "RB1/AN10/IOC": "19",
  "RB2/AN8/IOC": "20",
  "RB3/AN9/CCP2/IOC": "21",
  "RB4/AN11/ADOUT/IOC": "22",
  "RB5/AN13/T1G/IOC": "23",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "24",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "25",
  "Vpp/~{MCLR}/RE3": "26",
  "RA0/AN0/~{SS}": "27",
  "RA1/AN1": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/VCAP/~{SS}": "bidirectional", VSS_5: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_16: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1512-IMV";
  override referencePrefix = "U";
}

/**
 * PIC16F1512, 2048W FLASH, 128B SRAM, SPDIP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1512-ISP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41624A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1512_ISP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0/~{SS}": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI": "6",
  "RA5/AN4/Vcap/~{SS}": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "SOSCO/T1CKI/RC0": "11",
  "SOSCI/CCP2/RC1": "12",
  "CCP1/AN14/RC2": "13",
  "SCK/SCL/AN15/RC3": "14",
  "SDI/SDA/AN16/RC4": "15",
  "SDO/AN17/RC5": "16",
  "TX/CK/AN18/RC6": "17",
  "RX/DT/AN19/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT/IOC": "21",
  "RB1/AN10/IOC": "22",
  "RB2/AN8/IOC": "23",
  "RB3/AN9/CCP2/IOC": "24",
  "RB4/AN11/ADOUT/IOC": "25",
  "RB5/AN13/T1G/IOC": "26",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "27",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/Vcap/~{SS}": "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1512-ISP";
  override referencePrefix = "U";
}

/**
 * PIC16F1512, 2048W FLASH, 128B SRAM, SO-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1512-ISO`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41624A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1512_ISO extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0/~{SS}": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI": "6",
  "RA5/AN4/Vcap/~{SS}": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "SOSCO/T1CKI/RC0": "11",
  "SOSCI/CCP2/RC1": "12",
  "CCP1/AN14/RC2": "13",
  "SCK/SCL/AN15/RC3": "14",
  "SDI/SDA/AN16/RC4": "15",
  "SDO/AN17/RC5": "16",
  "TX/CK/AN18/RC6": "17",
  "RX/DT/AN19/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT/IOC": "21",
  "RB1/AN10/IOC": "22",
  "RB2/AN8/IOC": "23",
  "RB3/AN9/CCP2/IOC": "24",
  "RB4/AN11/ADOUT/IOC": "25",
  "RB5/AN13/T1G/IOC": "26",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "27",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/Vcap/~{SS}": "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1512-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F1512, 2048W FLASH, 128B SRAM, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1512-ISS`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41624A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1512_ISS extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0/~{SS}": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI": "6",
  "RA5/AN4/Vcap/~{SS}": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "SOSCO/T1CKI/RC0": "11",
  "SOSCI/CCP2/RC1": "12",
  "CCP1/AN14/RC2": "13",
  "SCK/SCL/AN15/RC3": "14",
  "SDI/SDA/AN16/RC4": "15",
  "SDO/AN17/RC5": "16",
  "TX/CK/AN18/RC6": "17",
  "RX/DT/AN19/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT/IOC": "21",
  "RB1/AN10/IOC": "22",
  "RB2/AN8/IOC": "23",
  "RB3/AN9/CCP2/IOC": "24",
  "RB4/AN11/ADOUT/IOC": "25",
  "RB5/AN13/T1G/IOC": "26",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "27",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/Vcap/~{SS}": "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1512-ISS";
  override referencePrefix = "U";
}

/**
 * PIC16F1513, 4096W FLASH, 256B SRAM, UQFN-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1513-IMV`. Reference prefix: `U`.
 * Footprint filters: UQFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41624A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1513_IMV extends Component.withPins({
  "RA2/AN2": "1",
  "RA3/AN3/Vref+": "2",
  "RA4/T0CKI": "3",
  "RA5/AN4/Vcap/~{SS}": "4",
  "VSS_5": "5",
  "RA7/OSC1/CLKIN": "6",
  "RA6/OSC2/CLKOUT": "7",
  "SOSCO/T1CKI/RC0": "8",
  "SOSCI/CCP2/RC1": "9",
  "CCP1/AN14/RC2": "10",
  "SCK/SCL/AN15/RC3": "11",
  "SDI/SDA/AN16/RC4": "12",
  "SDO/AN17/RC5": "13",
  "TX/CK/AN18/RC6": "14",
  "RX/DT/AN19/RC7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "RB0/AN12/INT/IOC": "18",
  "RB1/AN10/IOC": "19",
  "RB2/AN8/IOC": "20",
  "RB3/AN9/CCP2/IOC": "21",
  "RB4/AN11/ADOUT/IOC": "22",
  "RB5/AN13/T1G/IOC": "23",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "24",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "25",
  "Vpp/~{MCLR}/RE3": "26",
  "RA0/AN0/~{SS}": "27",
  "RA1/AN1": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/Vcap/~{SS}": "bidirectional", VSS_5: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_16: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1513-IMV";
  override referencePrefix = "U";
}

/**
 * PIC16F1513, 4096W FLASH, 2568B SRAM, SPDIP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1513-ISP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41624A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1513_ISP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0/~{SS}": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI": "6",
  "RA5/AN4/Vcap/~{SS}": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "SOSCO/T1CKI/RC0": "11",
  "SOSCI/CCP2/RC1": "12",
  "CCP1/AN14/RC2": "13",
  "SCK/SCL/AN15/RC3": "14",
  "SDI/SDA/AN16/RC4": "15",
  "SDO/AN17/RC5": "16",
  "TX/CK/AN18/RC6": "17",
  "RX/DT/AN19/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT/IOC": "21",
  "RB1/AN10/IOC": "22",
  "RB2/AN8/IOC": "23",
  "RB3/AN9/CCP2/IOC": "24",
  "RB4/AN11/ADOUT/IOC": "25",
  "RB5/AN13/T1G/IOC": "26",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "27",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/Vcap/~{SS}": "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1513-ISP";
  override referencePrefix = "U";
}

/**
 * PIC16F1513, 4096W FLASH, 2568B SRAM, SO-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1513-ISO`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41624A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1513_ISO extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0/~{SS}": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI": "6",
  "RA5/AN4/Vcap/~{SS}": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "SOSCO/T1CKI/RC0": "11",
  "SOSCI/CCP2/RC1": "12",
  "CCP1/AN14/RC2": "13",
  "SCK/SCL/AN15/RC3": "14",
  "SDI/SDA/AN16/RC4": "15",
  "SDO/AN17/RC5": "16",
  "TX/CK/AN18/RC6": "17",
  "RX/DT/AN19/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT/IOC": "21",
  "RB1/AN10/IOC": "22",
  "RB2/AN8/IOC": "23",
  "RB3/AN9/CCP2/IOC": "24",
  "RB4/AN11/ADOUT/IOC": "25",
  "RB5/AN13/T1G/IOC": "26",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "27",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/Vcap/~{SS}": "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1513-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F1513, 4096W FLASH, 2568B SRAM, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1513-ISS`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41624A.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1513_ISS extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0/~{SS}": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI": "6",
  "RA5/AN4/Vcap/~{SS}": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "SOSCO/T1CKI/RC0": "11",
  "SOSCI/CCP2/RC1": "12",
  "CCP1/AN14/RC2": "13",
  "SCK/SCL/AN15/RC3": "14",
  "SDI/SDA/AN16/RC4": "15",
  "SDO/AN17/RC5": "16",
  "TX/CK/AN18/RC6": "17",
  "RX/DT/AN19/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT/IOC": "21",
  "RB1/AN10/IOC": "22",
  "RB2/AN8/IOC": "23",
  "RB3/AN9/CCP2/IOC": "24",
  "RB4/AN11/ADOUT/IOC": "25",
  "RB5/AN13/T1G/IOC": "26",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "27",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/Vcap/~{SS}": "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1513-ISS";
  override referencePrefix = "U";
}

/**
 * PIC16F1516, 8192W FLASH, 512B SRAM, UQFN-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1516-IMV`. Reference prefix: `U`.
 * Footprint filters: UQFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41452B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1516_IMV extends Component.withPins({
  "RA2/AN2": "1",
  "RA3/AN3/Vref+": "2",
  "RA4/T0CKI": "3",
  "RA5/AN4/Vcap/~{SS}": "4",
  "VSS_5": "5",
  "RA7/OSC1/CLKIN": "6",
  "RA6/OSC2/CLKOUT": "7",
  "SOSCO/T1CKI/RC0": "8",
  "SOSCI/CCP2/RC1": "9",
  "CCP1/AN14/RC2": "10",
  "SCK/SCL/AN15/RC3": "11",
  "SDI/SDA/AN16/RC4": "12",
  "SDO/AN17/RC5": "13",
  "TX/CK/AN18/RC6": "14",
  "RX/DT/AN19/RC7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "RB0/AN12/INT/IOC": "18",
  "RB1/AN10/IOC": "19",
  "RB2/AN8/IOC": "20",
  "RB3/AN9/CCP2/IOC": "21",
  "RB4/AN11/ADOUT/IOC": "22",
  "RB5/AN13/T1G/IOC": "23",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "24",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "25",
  "Vpp/~{MCLR}/RE3": "26",
  "RA0/AN0/~{SS}": "27",
  "RA1/AN1": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/Vcap/~{SS}": "bidirectional", VSS_5: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_16: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1516-IMV";
  override referencePrefix = "U";
}

/**
 * PIC16F1516, 8192W FLASH, 512B SRAM, SPDIP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1516-ISP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41452B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1516_ISP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0/~{SS}": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI": "6",
  "RA5/AN4/Vcap/~{SS}": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "SOSCO/T1CKI/RC0": "11",
  "SOSCI/CCP2/RC1": "12",
  "CCP1/AN14/RC2": "13",
  "SCK/SCL/AN15/RC3": "14",
  "SDI/SDA/AN16/RC4": "15",
  "SDO/AN17/RC5": "16",
  "TX/CK/AN18/RC6": "17",
  "RX/DT/AN19/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT/IOC": "21",
  "RB1/AN10/IOC": "22",
  "RB2/AN8/IOC": "23",
  "RB3/AN9/CCP2/IOC": "24",
  "RB4/AN11/ADOUT/IOC": "25",
  "RB5/AN13/T1G/IOC": "26",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "27",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/Vcap/~{SS}": "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1516-ISP";
  override referencePrefix = "U";
}

/**
 * PIC16F1516, 8192W FLASH, 512B SRAM, SO-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1516-ISO`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41452B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1516_ISO extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0/~{SS}": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI": "6",
  "RA5/AN4/Vcap/~{SS}": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "SOSCO/T1CKI/RC0": "11",
  "SOSCI/CCP2/RC1": "12",
  "CCP1/AN14/RC2": "13",
  "SCK/SCL/AN15/RC3": "14",
  "SDI/SDA/AN16/RC4": "15",
  "SDO/AN17/RC5": "16",
  "TX/CK/AN18/RC6": "17",
  "RX/DT/AN19/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT/IOC": "21",
  "RB1/AN10/IOC": "22",
  "RB2/AN8/IOC": "23",
  "RB3/AN9/CCP2/IOC": "24",
  "RB4/AN11/ADOUT/IOC": "25",
  "RB5/AN13/T1G/IOC": "26",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "27",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/Vcap/~{SS}": "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1516-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F1516, 8192W FLASH, 512B SRAM, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1516-ISS`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41452B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1516_ISS extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0/~{SS}": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI": "6",
  "RA5/AN4/Vcap/~{SS}": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "SOSCO/T1CKI/RC0": "11",
  "SOSCI/CCP2/RC1": "12",
  "CCP1/AN14/RC2": "13",
  "SCK/SCL/AN15/RC3": "14",
  "SDI/SDA/AN16/RC4": "15",
  "SDO/AN17/RC5": "16",
  "TX/CK/AN18/RC6": "17",
  "RX/DT/AN19/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT/IOC": "21",
  "RB1/AN10/IOC": "22",
  "RB2/AN8/IOC": "23",
  "RB3/AN9/CCP2/IOC": "24",
  "RB4/AN11/ADOUT/IOC": "25",
  "RB5/AN13/T1G/IOC": "26",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "27",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/Vcap/~{SS}": "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1516-ISS";
  override referencePrefix = "U";
}

/**
 * PIC16F1517, 8192W FLASH, 512B SRAM, UQFN-40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1517-IMV`. Reference prefix: `U`.
 * Footprint filters: UQFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41452B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1517_IMV extends Component.withPins({
  "RX/DT/AN19/RC7": "1",
  "AN24/RD4": "2",
  "AN25/RD5": "3",
  "AN26/RD6": "4",
  "AN27/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/INT": "8",
  "RB1/AN10": "9",
  "RB2/AN8": "10",
  "RB3/AN9/CCP2": "11",
  "RB4/AN11": "12",
  "RB5/AN13/T1G": "13",
  "RB6/ICSPCLK/ICDCLK": "14",
  "RB7/ICSPDAT/ICDDAT": "15",
  "RE3/~{MCLR}/Vpp": "16",
  "RA0/AN0/~{SS}": "17",
  "RA1/AN1": "18",
  "RA2/AN2": "19",
  "RA3/AN3/Vref+": "20",
  "RA4/T0CKI": "21",
  "RA5/AN4/VCAP/~{SS}": "22",
  "RE0/AN5": "23",
  "RE1/AN6": "24",
  "RE2/AN7": "25",
  "VDD_26": "26",
  "VSS_27": "27",
  "RA7/OSC1/CLKIN": "28",
  "RA6/OSC2/CLKOUT": "29",
  "SOSCO/T1CKI/RC0": "30",
  "SOSCI/CCP2/RC1": "31",
  "CCP1/AN14/RC2": "32",
  "SCK/SCL/AN15/RC3": "33",
  "AN20/RD0": "34",
  "AN21/RD1": "35",
  "AN22/RD2": "36",
  "AN23/RD3": "37",
  "SDI/SDA/AN16/RC4": "38",
  "SDO/AN17/RC5": "39",
  "TX/CK/AN18/RC6": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RX/DT/AN19/RC7": "bidirectional", "AN24/RD4": "bidirectional", "AN25/RD5": "bidirectional", "AN26/RD6": "bidirectional", "AN27/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/AN12/INT": "bidirectional", "RB1/AN10": "bidirectional", "RB2/AN8": "bidirectional", "RB3/AN9/CCP2": "bidirectional", "RB4/AN11": "bidirectional", "RB5/AN13/T1G": "bidirectional", "RB6/ICSPCLK/ICDCLK": "bidirectional", "RB7/ICSPDAT/ICDDAT": "bidirectional", "RE3/~{MCLR}/Vpp": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/VCAP/~{SS}": "bidirectional", "RE0/AN5": "bidirectional", "RE1/AN6": "bidirectional", "RE2/AN7": "bidirectional", VDD_26: "power_in", VSS_27: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "AN20/RD0": "bidirectional", "AN21/RD1": "bidirectional", "AN22/RD2": "bidirectional", "AN23/RD3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1517-IMV";
  override referencePrefix = "U";
}

/**
 * 8192W FLASH, 512B SRAM, PDIP-40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1517-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41452B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1517_IP extends Component.withPins({
  "RE3/~{MCLR}/Vpp": "1",
  "RA0/AN0/~{SS}": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI": "6",
  "RA5/AN4/VCAP/~{SS}": "7",
  "RE0/AN5": "8",
  "RE1/AN6": "9",
  "RE2/AN7": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "RA7/OSC1/CLKIN": "13",
  "RA6/OSC2/CLKOUT": "14",
  "SOSCO/T1CKI/RC0": "15",
  "SOSCI/CCP2/RC1": "16",
  "CCP1/AN14/RC2": "17",
  "SCK/SCL/AN15/RC3": "18",
  "AN20/RD0": "19",
  "AN21/RD1": "20",
  "AN22/RD2": "21",
  "AN23/RD3": "22",
  "SDI/SDA/AN16/RC4": "23",
  "SDO/AN17/RC5": "24",
  "TX/CK/AN18/RC6": "25",
  "RX/DT/AN19/RC7": "26",
  "AN24/RD4": "27",
  "AN25/RD5": "28",
  "AN26/RD6": "29",
  "AN27/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/AN12/INT": "33",
  "RB1/AN10": "34",
  "RB2/AN8": "35",
  "RB3/AN9/CCP2": "36",
  "RB4/AN11": "37",
  "RB5/AN13/T1G": "38",
  "RB6/ICSPCLK/ICDCLK": "39",
  "RB7/ICSPDAT/ICDDAT": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/Vpp": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/VCAP/~{SS}": "bidirectional", "RE0/AN5": "bidirectional", "RE1/AN6": "bidirectional", "RE2/AN7": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "AN20/RD0": "bidirectional", "AN21/RD1": "bidirectional", "AN22/RD2": "bidirectional", "AN23/RD3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", "AN24/RD4": "bidirectional", "AN25/RD5": "bidirectional", "AN26/RD6": "bidirectional", "AN27/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/AN12/INT": "bidirectional", "RB1/AN10": "bidirectional", "RB2/AN8": "bidirectional", "RB3/AN9/CCP2": "bidirectional", "RB4/AN11": "bidirectional", "RB5/AN13/T1G": "bidirectional", "RB6/ICSPCLK/ICDCLK": "bidirectional", "RB7/ICSPDAT/ICDDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1517-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F1517, 8192W FLASH, 512B SRAM, TQFP-40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1517-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41452B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1517_IPT extends Component.withPins({
  "RX/DT/AN19/RC7": "1",
  "AN24/RD4": "2",
  "AN25/RD5": "3",
  "AN26/RD6": "4",
  "AN27/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/INT": "8",
  "RB1/AN10": "9",
  "RB2/AN8": "10",
  "RB3/AN9/CCP2": "11",
  "RB4/AN11": "14",
  "RB5/AN13/T1G": "15",
  "RB6/ICSPCLK/ICDCLK": "16",
  "RB7/ICSPDAT/ICDDAT": "17",
  "RE3/~{MCLR}/Vpp": "18",
  "RA0/AN0/~{SS}": "19",
  "RA1/AN1": "20",
  "RA2/AN2": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI": "23",
  "RA5/AN4/VCAP/~{SS}": "24",
  "RE0/AN5": "25",
  "RE1/AN6": "26",
  "RE2/AN7": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA7/OSC1/CLKIN": "30",
  "RA6/OSC2/CLKOUT": "31",
  "SOSCO/T1CKI/RC0": "32",
  "SOSCI/CCP2/RC1": "35",
  "CCP1/AN14/RC2": "36",
  "SCK/SCL/AN15/RC3": "37",
  "AN20/RD0": "38",
  "AN21/RD1": "39",
  "AN22/RD2": "40",
  "AN23/RD3": "41",
  "SDI/SDA/AN16/RC4": "42",
  "SDO/AN17/RC5": "43",
  "TX/CK/AN18/RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RX/DT/AN19/RC7": "bidirectional", "AN24/RD4": "bidirectional", "AN25/RD5": "bidirectional", "AN26/RD6": "bidirectional", "AN27/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/AN12/INT": "bidirectional", "RB1/AN10": "bidirectional", "RB2/AN8": "bidirectional", "RB3/AN9/CCP2": "bidirectional", "RB4/AN11": "bidirectional", "RB5/AN13/T1G": "bidirectional", "RB6/ICSPCLK/ICDCLK": "bidirectional", "RB7/ICSPDAT/ICDDAT": "bidirectional", "RE3/~{MCLR}/Vpp": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/VCAP/~{SS}": "bidirectional", "RE0/AN5": "bidirectional", "RE1/AN6": "bidirectional", "RE2/AN7": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "AN20/RD0": "bidirectional", "AN21/RD1": "bidirectional", "AN22/RD2": "bidirectional", "AN23/RD3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1517-IPT";
  override referencePrefix = "U";
}

/**
 * PIC16F1518, 16384W FLASH, 1204B SRAM, UQFN-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1518-IMV`. Reference prefix: `U`.
 * Footprint filters: UQFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41452B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1518_IMV extends Component.withPins({
  "RA2/AN2": "1",
  "RA3/AN3/Vref+": "2",
  "RA4/T0CKI": "3",
  "RA5/AN4/VCAP/~{SS}": "4",
  "VSS_5": "5",
  "RA7/OSC1/CLKIN": "6",
  "RA6/OSC2/CLKOUT": "7",
  "SOSCO/T1CKI/RC0": "8",
  "SOSCI/CCP2/RC1": "9",
  "CCP1/AN14/RC2": "10",
  "SCK/SCL/AN15/RC3": "11",
  "SDI/SDA/AN16/RC4": "12",
  "SDO/AN17/RC5": "13",
  "TX/CK/AN18/RC6": "14",
  "RX/DT/AN19/RC7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "RB0/AN12/INT/IOC": "18",
  "RB1/AN10/IOC": "19",
  "RB2/AN8/IOC": "20",
  "RB3/AN9/CCP2/IOC": "21",
  "RB4/AN11/ADOUT/IOC": "22",
  "RB5/AN13/T1G/IOC": "23",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "24",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "25",
  "Vpp/~{MCLR}/RE3": "26",
  "RA0/AN0/~{SS}": "27",
  "RA1/AN1": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/VCAP/~{SS}": "bidirectional", VSS_5: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_16: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1518-IMV";
  override referencePrefix = "U";
}

/**
 * PIC16F1518, 16384W FLASH, 1024B SRAM, SPDIP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1518-ISP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41452B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1518_ISP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0/~{SS}": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI": "6",
  "RA5/AN4/VCAP/~{SS}": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "SOSCO/T1CKI/RC0": "11",
  "SOSCI/CCP2/RC1": "12",
  "CCP1/AN14/RC2": "13",
  "SCK/SCL/AN15/RC3": "14",
  "SDI/SDA/AN16/RC4": "15",
  "SDO/AN17/RC5": "16",
  "TX/CK/AN18/RC6": "17",
  "RX/DT/AN19/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT/IOC": "21",
  "RB1/AN10/IOC": "22",
  "RB2/AN8/IOC": "23",
  "RB3/AN9/CCP2/IOC": "24",
  "RB4/AN11/ADOUT/IOC": "25",
  "RB5/AN13/T1G/IOC": "26",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "27",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/VCAP/~{SS}": "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1518-ISP";
  override referencePrefix = "U";
}

/**
 * PIC16F1518, 16384W FLASH, 1024B SRAM, SO-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1518-ISO`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41452B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1518_ISO extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0/~{SS}": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI": "6",
  "RA5/AN4/VCAP/~{SS}": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "SOSCO/T1CKI/RC0": "11",
  "SOSCI/CCP2/RC1": "12",
  "CCP1/AN14/RC2": "13",
  "SCK/SCL/AN15/RC3": "14",
  "SDI/SDA/AN16/RC4": "15",
  "SDO/AN17/RC5": "16",
  "TX/CK/AN18/RC6": "17",
  "RX/DT/AN19/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT/IOC": "21",
  "RB1/AN10/IOC": "22",
  "RB2/AN8/IOC": "23",
  "RB3/AN9/CCP2/IOC": "24",
  "RB4/AN11/ADOUT/IOC": "25",
  "RB5/AN13/T1G/IOC": "26",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "27",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/VCAP/~{SS}": "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1518-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F1518, 16384W FLASH, 1024B SRAM, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1518-ISS`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41452B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1518_ISS extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0/~{SS}": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI": "6",
  "RA5/AN4/VCAP/~{SS}": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "SOSCO/T1CKI/RC0": "11",
  "SOSCI/CCP2/RC1": "12",
  "CCP1/AN14/RC2": "13",
  "SCK/SCL/AN15/RC3": "14",
  "SDI/SDA/AN16/RC4": "15",
  "SDO/AN17/RC5": "16",
  "TX/CK/AN18/RC6": "17",
  "RX/DT/AN19/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT/IOC": "21",
  "RB1/AN10/IOC": "22",
  "RB2/AN8/IOC": "23",
  "RB3/AN9/CCP2/IOC": "24",
  "RB4/AN11/ADOUT/IOC": "25",
  "RB5/AN13/T1G/IOC": "26",
  "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "27",
  "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/VCAP/~{SS}": "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT/IOC": "bidirectional", "RB1/AN10/IOC": "bidirectional", "RB2/AN8/IOC": "bidirectional", "RB3/AN9/CCP2/IOC": "bidirectional", "RB4/AN11/ADOUT/IOC": "bidirectional", "RB5/AN13/T1G/IOC": "bidirectional", "RB6/ADGRDA/IOC/ICSPCLK/ICDCLK": "bidirectional", "RB7/ADGRDB/IOC/ICSPDAT/ICDDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1518-ISS";
  override referencePrefix = "U";
}

/**
 * PIC16F1519, 16384W FLASH, 1024B SRAM, UQFN-40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1519-IMV`. Reference prefix: `U`.
 * Footprint filters: UQFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41452B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1519_IMV extends Component.withPins({
  "RX/DT/AN19/RC7": "1",
  "AN24/RD4": "2",
  "AN25/RD5": "3",
  "AN26/RD6": "4",
  "AN27/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/INT": "8",
  "RB1/AN10": "9",
  "RB2/AN8": "10",
  "RB3/AN9/CCP2": "11",
  "RB4/AN11": "12",
  "RB5/AN13/T1G": "13",
  "RB6/ICSPCLK/ICDCLK": "14",
  "RB7/ICSPDAT/ICDDAT": "15",
  "RE3/~{MCLR}/Vpp": "16",
  "RA0/AN0/~{SS}": "17",
  "RA1/AN1": "18",
  "RA2/AN2": "19",
  "RA3/AN3/Vref+": "20",
  "RA4/T0CKI": "21",
  "RA5/AN4/VCAP/~{SS}": "22",
  "RE0/AN5": "23",
  "RE1/AN6": "24",
  "RE2/AN7": "25",
  "VDD_26": "26",
  "VSS_27": "27",
  "RA7/OSC1/CLKIN": "28",
  "RA6/OSC2/CLKOUT": "29",
  "SOSCO/T1CKI/RC0": "30",
  "SOSCI/CCP2/RC1": "31",
  "CCP1/AN14/RC2": "32",
  "SCK/SCL/AN15/RC3": "33",
  "AN20/RD0": "34",
  "AN21/RD1": "35",
  "AN22/RD2": "36",
  "AN23/RD3": "37",
  "SDI/SDA/AN16/RC4": "38",
  "SDO/AN17/RC5": "39",
  "TX/CK/AN18/RC6": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RX/DT/AN19/RC7": "bidirectional", "AN24/RD4": "bidirectional", "AN25/RD5": "bidirectional", "AN26/RD6": "bidirectional", "AN27/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/AN12/INT": "bidirectional", "RB1/AN10": "bidirectional", "RB2/AN8": "bidirectional", "RB3/AN9/CCP2": "bidirectional", "RB4/AN11": "bidirectional", "RB5/AN13/T1G": "bidirectional", "RB6/ICSPCLK/ICDCLK": "bidirectional", "RB7/ICSPDAT/ICDDAT": "bidirectional", "RE3/~{MCLR}/Vpp": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/VCAP/~{SS}": "bidirectional", "RE0/AN5": "bidirectional", "RE1/AN6": "bidirectional", "RE2/AN7": "bidirectional", VDD_26: "power_in", VSS_27: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "AN20/RD0": "bidirectional", "AN21/RD1": "bidirectional", "AN22/RD2": "bidirectional", "AN23/RD3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1519-IMV";
  override referencePrefix = "U";
}

/**
 * 16384W FLASH, 1024B SRAM, PDIP-40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1519-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41452B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1519_IP extends Component.withPins({
  "RE3/~{MCLR}/Vpp": "1",
  "RA0/AN0/~{SS}": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI": "6",
  "RA5/AN4/VCAP/~{SS}": "7",
  "RE0/AN5": "8",
  "RE1/AN6": "9",
  "RE2/AN7": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "RA7/OSC1/CLKIN": "13",
  "RA6/OSC2/CLKOUT": "14",
  "SOSCO/T1CKI/RC0": "15",
  "SOSCI/CCP2/RC1": "16",
  "CCP1/AN14/RC2": "17",
  "SCK/SCL/AN15/RC3": "18",
  "AN20/RD0": "19",
  "AN21/RD1": "20",
  "AN22/RD2": "21",
  "AN23/RD3": "22",
  "SDI/SDA/AN16/RC4": "23",
  "SDO/AN17/RC5": "24",
  "TX/CK/AN18/RC6": "25",
  "RX/DT/AN19/RC7": "26",
  "AN24/RD4": "27",
  "AN25/RD5": "28",
  "AN26/RD6": "29",
  "AN27/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/AN12/INT": "33",
  "RB1/AN10": "34",
  "RB2/AN8": "35",
  "RB3/AN9/CCP2": "36",
  "RB4/AN11": "37",
  "RB5/AN13/T1G": "38",
  "RB6/ICSPCLK/ICDCLK": "39",
  "RB7/ICSPDAT/ICDDAT": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/Vpp": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/VCAP/~{SS}": "bidirectional", "RE0/AN5": "bidirectional", "RE1/AN6": "bidirectional", "RE2/AN7": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "AN20/RD0": "bidirectional", "AN21/RD1": "bidirectional", "AN22/RD2": "bidirectional", "AN23/RD3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", "RX/DT/AN19/RC7": "bidirectional", "AN24/RD4": "bidirectional", "AN25/RD5": "bidirectional", "AN26/RD6": "bidirectional", "AN27/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/AN12/INT": "bidirectional", "RB1/AN10": "bidirectional", "RB2/AN8": "bidirectional", "RB3/AN9/CCP2": "bidirectional", "RB4/AN11": "bidirectional", "RB5/AN13/T1G": "bidirectional", "RB6/ICSPCLK/ICDCLK": "bidirectional", "RB7/ICSPDAT/ICDDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1519-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F1519, 16384W FLASH, 1024B SRAM, TQFP-40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1519-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41452B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1519_IPT extends Component.withPins({
  "RX/DT/AN19/RC7": "1",
  "AN24/RD4": "2",
  "AN25/RD5": "3",
  "AN26/RD6": "4",
  "AN27/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/INT": "8",
  "RB1/AN10": "9",
  "RB2/AN8": "10",
  "RB3/AN9/CCP2": "11",
  "RB4/AN11": "14",
  "RB5/AN13/T1G": "15",
  "RB6/ICSPCLK/ICDCLK": "16",
  "RB7/ICSPDAT/ICDDAT": "17",
  "RE3/~{MCLR}/Vpp": "18",
  "RA0/AN0/~{SS}": "19",
  "RA1/AN1": "20",
  "RA2/AN2": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI": "23",
  "RA5/AN4/VCAP/~{SS}": "24",
  "RE0/AN5": "25",
  "RE1/AN6": "26",
  "RE2/AN7": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA7/OSC1/CLKIN": "30",
  "RA6/OSC2/CLKOUT": "31",
  "SOSCO/T1CKI/RC0": "32",
  "SOSCI/CCP2/RC1": "35",
  "CCP1/AN14/RC2": "36",
  "SCK/SCL/AN15/RC3": "37",
  "AN20/RD0": "38",
  "AN21/RD1": "39",
  "AN22/RD2": "40",
  "AN23/RD3": "41",
  "SDI/SDA/AN16/RC4": "42",
  "SDO/AN17/RC5": "43",
  "TX/CK/AN18/RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RX/DT/AN19/RC7": "bidirectional", "AN24/RD4": "bidirectional", "AN25/RD5": "bidirectional", "AN26/RD6": "bidirectional", "AN27/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/AN12/INT": "bidirectional", "RB1/AN10": "bidirectional", "RB2/AN8": "bidirectional", "RB3/AN9/CCP2": "bidirectional", "RB4/AN11": "bidirectional", "RB5/AN13/T1G": "bidirectional", "RB6/ICSPCLK/ICDCLK": "bidirectional", "RB7/ICSPDAT/ICDDAT": "bidirectional", "RE3/~{MCLR}/Vpp": "input", "RA0/AN0/~{SS}": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/VCAP/~{SS}": "bidirectional", "RE0/AN5": "bidirectional", "RE1/AN6": "bidirectional", "RE2/AN7": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "SOSCO/T1CKI/RC0": "bidirectional", "SOSCI/CCP2/RC1": "bidirectional", "CCP1/AN14/RC2": "bidirectional", "SCK/SCL/AN15/RC3": "bidirectional", "AN20/RD0": "bidirectional", "AN21/RD1": "bidirectional", "AN22/RD2": "bidirectional", "AN23/RD3": "bidirectional", "SDI/SDA/AN16/RC4": "bidirectional", "SDO/AN17/RC5": "bidirectional", "TX/CK/AN18/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1519-IPT";
  override referencePrefix = "U";
}

/**
 * PIC16F1526, 8192W FLASH, 768B SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1526-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*, QFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41458B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1526_IPT extends Component.withPins({
  "AN28/RE1": "1",
  "AN27/RE0": "2",
  "CCP3/RG0": "3",
  "TX2/CK2/AN15/RG1": "4",
  "RX2/DT2/AN14/RG2": "5",
  "CCP4/RG3": "6",
  "Vpp/~{MCLR}/RG5": "7",
  "CCP5/T5G/AN12/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "~{SS1}/AN5/RF7": "11",
  "AN11/RF6": "12",
  "AN10/RF5": "13",
  "AN9/RF4": "14",
  "AN8/RF3": "15",
  "AN7/RF2": "16",
  "AN6/RF1": "17",
  "VCAP/AN16/RF0": "18",
  "AVDD": "19",
  "AVSS": "20",
  "RA3/AN3/Vref+": "21",
  "RA2/AN2": "22",
  "RA1/AN1": "23",
  "RA0/AN0": "24",
  "VSS_25": "25",
  "VDD_26": "26",
  "RA5/AN4/T3G": "27",
  "RA4/T0CKI": "28",
  "RC1/SOSCI/CCP2": "29",
  "RC0/SOSCO/T1CKI": "30",
  "RC6/TX1/CK1": "31",
  "RC7/RX1/DT1": "32",
  "RC2/CCP1": "33",
  "RC3/SCK1/SCL1": "34",
  "RC4/SDI1/SDA1": "35",
  "RC5/SDO1": "36",
  "RB7/ICSPDAT/ISCDAT": "37",
  "VDD_38": "38",
  "RA7/OSC1/CKLIN": "39",
  "RA6/OSC2/CLKOUT": "40",
  "VSS_41": "41",
  "RB6/ICSPLCK/ICDCLK": "42",
  "RB5/AN22/T1G/T3CKI": "43",
  "RB4/AN21/T3CKI": "44",
  "RB3/AN20": "45",
  "RB2/AN19": "46",
  "RB1/AN18": "47",
  "RB0/AN17/INT": "48",
  "~{SS2}/RD7": "49",
  "SCK2/SCL2/RD6": "50",
  "SDI2/SDA2/RD5": "51",
  "SDO2/RD4": "52",
  "AN26/RD3": "53",
  "AN25/RD2": "54",
  "T5CKI/AN24/RD1": "55",
  "VSS_56": "56",
  "VDD_57": "57",
  "AN23/RD0": "58",
  "CCP2/RE7": "59",
  "CCP6/RE6": "60",
  "CCP7/RE5": "61",
  "CCP8/RE4": "62",
  "CCP9/RE3": "63",
  "CCP10/AN29/RE2": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AN28/RE1": "bidirectional", "AN27/RE0": "bidirectional", "CCP3/RG0": "bidirectional", "TX2/CK2/AN15/RG1": "bidirectional", "RX2/DT2/AN14/RG2": "bidirectional", "CCP4/RG3": "bidirectional", "Vpp/~{MCLR}/RG5": "input", "CCP5/T5G/AN12/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "~{SS1}/AN5/RF7": "bidirectional", "AN11/RF6": "bidirectional", "AN10/RF5": "bidirectional", "AN9/RF4": "bidirectional", "AN8/RF3": "bidirectional", "AN7/RF2": "bidirectional", "AN6/RF1": "bidirectional", "VCAP/AN16/RF0": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA3/AN3/Vref+": "bidirectional", "RA2/AN2": "bidirectional", "RA1/AN1": "bidirectional", "RA0/AN0": "bidirectional", VSS_25: "power_in", VDD_26: "power_in", "RA5/AN4/T3G": "bidirectional", "RA4/T0CKI": "bidirectional", "RC1/SOSCI/CCP2": "bidirectional", "RC0/SOSCO/T1CKI": "bidirectional", "RC6/TX1/CK1": "bidirectional", "RC7/RX1/DT1": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK1/SCL1": "bidirectional", "RC4/SDI1/SDA1": "bidirectional", "RC5/SDO1": "bidirectional", "RB7/ICSPDAT/ISCDAT": "bidirectional", VDD_38: "power_in", "RA7/OSC1/CKLIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", VSS_41: "power_in", "RB6/ICSPLCK/ICDCLK": "bidirectional", "RB5/AN22/T1G/T3CKI": "bidirectional", "RB4/AN21/T3CKI": "bidirectional", "RB3/AN20": "bidirectional", "RB2/AN19": "bidirectional", "RB1/AN18": "bidirectional", "RB0/AN17/INT": "bidirectional", "~{SS2}/RD7": "bidirectional", "SCK2/SCL2/RD6": "bidirectional", "SDI2/SDA2/RD5": "bidirectional", "SDO2/RD4": "bidirectional", "AN26/RD3": "bidirectional", "AN25/RD2": "bidirectional", "T5CKI/AN24/RD1": "bidirectional", VSS_56: "power_in", VDD_57: "power_in", "AN23/RD0": "bidirectional", "CCP2/RE7": "bidirectional", "CCP6/RE6": "bidirectional", "CCP7/RE5": "bidirectional", "CCP8/RE4": "bidirectional", "CCP9/RE3": "bidirectional", "CCP10/AN29/RE2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1526-IPT";
  override referencePrefix = "U";
}

/**
 * PIC16F1526, 8192W FLASH, 768B SRAM, UQFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1526-IMR`. Reference prefix: `U`.
 * Footprint filters: TQFP*, QFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41458B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1526_IMR extends Component.withPins({
  "AN28/RE1": "1",
  "AN27/RE0": "2",
  "CCP3/RG0": "3",
  "TX2/CK2/AN15/RG1": "4",
  "RX2/DT2/AN14/RG2": "5",
  "CCP4/RG3": "6",
  "Vpp/~{MCLR}/RG5": "7",
  "CCP5/T5G/AN12/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "~{SS1}/AN5/RF7": "11",
  "AN11/RF6": "12",
  "AN10/RF5": "13",
  "AN9/RF4": "14",
  "AN8/RF3": "15",
  "AN7/RF2": "16",
  "AN6/RF1": "17",
  "VCAP/AN16/RF0": "18",
  "AVDD": "19",
  "AVSS": "20",
  "RA3/AN3/Vref+": "21",
  "RA2/AN2": "22",
  "RA1/AN1": "23",
  "RA0/AN0": "24",
  "VSS_25": "25",
  "VDD_26": "26",
  "RA5/AN4/T3G": "27",
  "RA4/T0CKI": "28",
  "RC1/SOSCI/CCP2": "29",
  "RC0/SOSCO/T1CKI": "30",
  "RC6/TX1/CK1": "31",
  "RC7/RX1/DT1": "32",
  "RC2/CCP1": "33",
  "RC3/SCK1/SCL1": "34",
  "RC4/SDI1/SDA1": "35",
  "RC5/SDO1": "36",
  "RB7/ICSPDAT/ISCDAT": "37",
  "VDD_38": "38",
  "RA7/OSC1/CKLIN": "39",
  "RA6/OSC2/CLKOUT": "40",
  "VSS_41": "41",
  "RB6/ICSPLCK/ICDCLK": "42",
  "RB5/AN22/T1G/T3CKI": "43",
  "RB4/AN21/T3CKI": "44",
  "RB3/AN20": "45",
  "RB2/AN19": "46",
  "RB1/AN18": "47",
  "RB0/AN17/INT": "48",
  "~{SS2}/RD7": "49",
  "SCK2/SCL2/RD6": "50",
  "SDI2/SDA2/RD5": "51",
  "SDO2/RD4": "52",
  "AN26/RD3": "53",
  "AN25/RD2": "54",
  "T5CKI/AN24/RD1": "55",
  "VSS_56": "56",
  "VDD_57": "57",
  "AN23/RD0": "58",
  "CCP2/RE7": "59",
  "CCP6/RE6": "60",
  "CCP7/RE5": "61",
  "CCP8/RE4": "62",
  "CCP9/RE3": "63",
  "CCP10/AN29/RE2": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AN28/RE1": "bidirectional", "AN27/RE0": "bidirectional", "CCP3/RG0": "bidirectional", "TX2/CK2/AN15/RG1": "bidirectional", "RX2/DT2/AN14/RG2": "bidirectional", "CCP4/RG3": "bidirectional", "Vpp/~{MCLR}/RG5": "input", "CCP5/T5G/AN12/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "~{SS1}/AN5/RF7": "bidirectional", "AN11/RF6": "bidirectional", "AN10/RF5": "bidirectional", "AN9/RF4": "bidirectional", "AN8/RF3": "bidirectional", "AN7/RF2": "bidirectional", "AN6/RF1": "bidirectional", "VCAP/AN16/RF0": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA3/AN3/Vref+": "bidirectional", "RA2/AN2": "bidirectional", "RA1/AN1": "bidirectional", "RA0/AN0": "bidirectional", VSS_25: "power_in", VDD_26: "power_in", "RA5/AN4/T3G": "bidirectional", "RA4/T0CKI": "bidirectional", "RC1/SOSCI/CCP2": "bidirectional", "RC0/SOSCO/T1CKI": "bidirectional", "RC6/TX1/CK1": "bidirectional", "RC7/RX1/DT1": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK1/SCL1": "bidirectional", "RC4/SDI1/SDA1": "bidirectional", "RC5/SDO1": "bidirectional", "RB7/ICSPDAT/ISCDAT": "bidirectional", VDD_38: "power_in", "RA7/OSC1/CKLIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", VSS_41: "power_in", "RB6/ICSPLCK/ICDCLK": "bidirectional", "RB5/AN22/T1G/T3CKI": "bidirectional", "RB4/AN21/T3CKI": "bidirectional", "RB3/AN20": "bidirectional", "RB2/AN19": "bidirectional", "RB1/AN18": "bidirectional", "RB0/AN17/INT": "bidirectional", "~{SS2}/RD7": "bidirectional", "SCK2/SCL2/RD6": "bidirectional", "SDI2/SDA2/RD5": "bidirectional", "SDO2/RD4": "bidirectional", "AN26/RD3": "bidirectional", "AN25/RD2": "bidirectional", "T5CKI/AN24/RD1": "bidirectional", VSS_56: "power_in", VDD_57: "power_in", "AN23/RD0": "bidirectional", "CCP2/RE7": "bidirectional", "CCP6/RE6": "bidirectional", "CCP7/RE5": "bidirectional", "CCP8/RE4": "bidirectional", "CCP9/RE3": "bidirectional", "CCP10/AN29/RE2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1526-IMR";
  override referencePrefix = "U";
}

/**
 * PIC16F1527, 16384W FLASH, 1536B SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1527-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*, QFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41458B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1527_IPT extends Component.withPins({
  "AN28/RE1": "1",
  "AN27/RE0": "2",
  "CCP3/RG0": "3",
  "TX2/CK2/AN15/RG1": "4",
  "RX2/DT2/AN14/RG2": "5",
  "CCP4/RG3": "6",
  "Vpp/~{MCLR}/RG5": "7",
  "CCP5/T5G/AN12/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "~{SS1}/AN5/RF7": "11",
  "AN11/RF6": "12",
  "AN10/RF5": "13",
  "AN9/RF4": "14",
  "AN8/RF3": "15",
  "AN7/RF2": "16",
  "AN6/RF1": "17",
  "VCAP/AN16/RF0": "18",
  "AVDD": "19",
  "AVSS": "20",
  "RA3/AN3/Vref+": "21",
  "RA2/AN2": "22",
  "RA1/AN1": "23",
  "RA0/AN0": "24",
  "VSS_25": "25",
  "VDD_26": "26",
  "RA5/AN4/T3G": "27",
  "RA4/T0CKI": "28",
  "RC1/SOSCI/CCP2": "29",
  "RC0/SOSCO/T1CKI": "30",
  "RC6/TX1/CK1": "31",
  "RC7/RX1/DT1": "32",
  "RC2/CCP1": "33",
  "RC3/SCK1/SCL1": "34",
  "RC4/SDI1/SDA1": "35",
  "RC5/SDO1": "36",
  "RB7/ICSPDAT/ISCDAT": "37",
  "VDD_38": "38",
  "RA7/OSC1/CKLIN": "39",
  "RA6/OSC2/CLKOUT": "40",
  "VSS_41": "41",
  "RB6/ICSPLCK/ICDCLK": "42",
  "RB5/AN22/T1G/T3CKI": "43",
  "RB4/AN21/T3CKI": "44",
  "RB3/AN20": "45",
  "RB2/AN19": "46",
  "RB1/AN18": "47",
  "RB0/AN17/INT": "48",
  "~{SS2}/RD7": "49",
  "SCK2/SCL2/RD6": "50",
  "SDI2/SDA2/RD5": "51",
  "SDO2/RD4": "52",
  "AN26/RD3": "53",
  "AN25/RD2": "54",
  "T5CKI/AN24/RD1": "55",
  "VSS_56": "56",
  "VDD_57": "57",
  "AN23/RD0": "58",
  "CCP2/RE7": "59",
  "CCP6/RE6": "60",
  "CCP7/RE5": "61",
  "CCP8/RE4": "62",
  "CCP9/RE3": "63",
  "CCP10/AN29/RE2": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AN28/RE1": "bidirectional", "AN27/RE0": "bidirectional", "CCP3/RG0": "bidirectional", "TX2/CK2/AN15/RG1": "bidirectional", "RX2/DT2/AN14/RG2": "bidirectional", "CCP4/RG3": "bidirectional", "Vpp/~{MCLR}/RG5": "input", "CCP5/T5G/AN12/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "~{SS1}/AN5/RF7": "bidirectional", "AN11/RF6": "bidirectional", "AN10/RF5": "bidirectional", "AN9/RF4": "bidirectional", "AN8/RF3": "bidirectional", "AN7/RF2": "bidirectional", "AN6/RF1": "bidirectional", "VCAP/AN16/RF0": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA3/AN3/Vref+": "bidirectional", "RA2/AN2": "bidirectional", "RA1/AN1": "bidirectional", "RA0/AN0": "bidirectional", VSS_25: "power_in", VDD_26: "power_in", "RA5/AN4/T3G": "bidirectional", "RA4/T0CKI": "bidirectional", "RC1/SOSCI/CCP2": "bidirectional", "RC0/SOSCO/T1CKI": "bidirectional", "RC6/TX1/CK1": "bidirectional", "RC7/RX1/DT1": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK1/SCL1": "bidirectional", "RC4/SDI1/SDA1": "bidirectional", "RC5/SDO1": "bidirectional", "RB7/ICSPDAT/ISCDAT": "bidirectional", VDD_38: "power_in", "RA7/OSC1/CKLIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", VSS_41: "power_in", "RB6/ICSPLCK/ICDCLK": "bidirectional", "RB5/AN22/T1G/T3CKI": "bidirectional", "RB4/AN21/T3CKI": "bidirectional", "RB3/AN20": "bidirectional", "RB2/AN19": "bidirectional", "RB1/AN18": "bidirectional", "RB0/AN17/INT": "bidirectional", "~{SS2}/RD7": "bidirectional", "SCK2/SCL2/RD6": "bidirectional", "SDI2/SDA2/RD5": "bidirectional", "SDO2/RD4": "bidirectional", "AN26/RD3": "bidirectional", "AN25/RD2": "bidirectional", "T5CKI/AN24/RD1": "bidirectional", VSS_56: "power_in", VDD_57: "power_in", "AN23/RD0": "bidirectional", "CCP2/RE7": "bidirectional", "CCP6/RE6": "bidirectional", "CCP7/RE5": "bidirectional", "CCP8/RE4": "bidirectional", "CCP9/RE3": "bidirectional", "CCP10/AN29/RE2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1527-IPT";
  override referencePrefix = "U";
}

/**
 * PIC16F1527, 16384W FLASH, 1536B SRAM, UQFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1527-IMR`. Reference prefix: `U`.
 * Footprint filters: TQFP*, QFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41458B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 */
export class PIC16F1527_IMR extends Component.withPins({
  "AN28/RE1": "1",
  "AN27/RE0": "2",
  "CCP3/RG0": "3",
  "TX2/CK2/AN15/RG1": "4",
  "RX2/DT2/AN14/RG2": "5",
  "CCP4/RG3": "6",
  "Vpp/~{MCLR}/RG5": "7",
  "CCP5/T5G/AN12/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "~{SS1}/AN5/RF7": "11",
  "AN11/RF6": "12",
  "AN10/RF5": "13",
  "AN9/RF4": "14",
  "AN8/RF3": "15",
  "AN7/RF2": "16",
  "AN6/RF1": "17",
  "VCAP/AN16/RF0": "18",
  "AVDD": "19",
  "AVSS": "20",
  "RA3/AN3/Vref+": "21",
  "RA2/AN2": "22",
  "RA1/AN1": "23",
  "RA0/AN0": "24",
  "VSS_25": "25",
  "VDD_26": "26",
  "RA5/AN4/T3G": "27",
  "RA4/T0CKI": "28",
  "RC1/SOSCI/CCP2": "29",
  "RC0/SOSCO/T1CKI": "30",
  "RC6/TX1/CK1": "31",
  "RC7/RX1/DT1": "32",
  "RC2/CCP1": "33",
  "RC3/SCK1/SCL1": "34",
  "RC4/SDI1/SDA1": "35",
  "RC5/SDO1": "36",
  "RB7/ICSPDAT/ISCDAT": "37",
  "VDD_38": "38",
  "RA7/OSC1/CKLIN": "39",
  "RA6/OSC2/CLKOUT": "40",
  "VSS_41": "41",
  "RB6/ICSPLCK/ICDCLK": "42",
  "RB5/AN22/T1G/T3CKI": "43",
  "RB4/AN21/T3CKI": "44",
  "RB3/AN20": "45",
  "RB2/AN19": "46",
  "RB1/AN18": "47",
  "RB0/AN17/INT": "48",
  "~{SS2}/RD7": "49",
  "SCK2/SCL2/RD6": "50",
  "SDI2/SDA2/RD5": "51",
  "SDO2/RD4": "52",
  "AN26/RD3": "53",
  "AN25/RD2": "54",
  "T5CKI/AN24/RD1": "55",
  "VSS_56": "56",
  "VDD_57": "57",
  "AN23/RD0": "58",
  "CCP2/RE7": "59",
  "CCP6/RE6": "60",
  "CCP7/RE5": "61",
  "CCP8/RE4": "62",
  "CCP9/RE3": "63",
  "CCP10/AN29/RE2": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AN28/RE1": "bidirectional", "AN27/RE0": "bidirectional", "CCP3/RG0": "bidirectional", "TX2/CK2/AN15/RG1": "bidirectional", "RX2/DT2/AN14/RG2": "bidirectional", "CCP4/RG3": "bidirectional", "Vpp/~{MCLR}/RG5": "input", "CCP5/T5G/AN12/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "~{SS1}/AN5/RF7": "bidirectional", "AN11/RF6": "bidirectional", "AN10/RF5": "bidirectional", "AN9/RF4": "bidirectional", "AN8/RF3": "bidirectional", "AN7/RF2": "bidirectional", "AN6/RF1": "bidirectional", "VCAP/AN16/RF0": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA3/AN3/Vref+": "bidirectional", "RA2/AN2": "bidirectional", "RA1/AN1": "bidirectional", "RA0/AN0": "bidirectional", VSS_25: "power_in", VDD_26: "power_in", "RA5/AN4/T3G": "bidirectional", "RA4/T0CKI": "bidirectional", "RC1/SOSCI/CCP2": "bidirectional", "RC0/SOSCO/T1CKI": "bidirectional", "RC6/TX1/CK1": "bidirectional", "RC7/RX1/DT1": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK1/SCL1": "bidirectional", "RC4/SDI1/SDA1": "bidirectional", "RC5/SDO1": "bidirectional", "RB7/ICSPDAT/ISCDAT": "bidirectional", VDD_38: "power_in", "RA7/OSC1/CKLIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", VSS_41: "power_in", "RB6/ICSPLCK/ICDCLK": "bidirectional", "RB5/AN22/T1G/T3CKI": "bidirectional", "RB4/AN21/T3CKI": "bidirectional", "RB3/AN20": "bidirectional", "RB2/AN19": "bidirectional", "RB1/AN18": "bidirectional", "RB0/AN17/INT": "bidirectional", "~{SS2}/RD7": "bidirectional", "SCK2/SCL2/RD6": "bidirectional", "SDI2/SDA2/RD5": "bidirectional", "SDO2/RD4": "bidirectional", "AN26/RD3": "bidirectional", "AN25/RD2": "bidirectional", "T5CKI/AN24/RD1": "bidirectional", VSS_56: "power_in", VDD_57: "power_in", "AN23/RD0": "bidirectional", "CCP2/RE7": "bidirectional", "CCP6/RE6": "bidirectional", "CCP7/RE5": "bidirectional", "CCP8/RE4": "bidirectional", "CCP9/RE3": "bidirectional", "CCP10/AN29/RE2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1527-IMR";
  override referencePrefix = "U";
}

/**
 * 8-bit Low Power Microcontroller, 2KB Flash, 256B SRAM, SOIC-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15323-xSL`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x8.65mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PIC16_L_F15313_23_Data_Sheet_40001897C.pdf
 * Keywords: 8-bit microcontroller low power.
 * Default footprint: Package_SO:SO-14_3.9x8.65mm_P1.27mm.
 */
export class PIC16F15323_xSL extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "~{MCLR}/VPP/RA3": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC2": "8",
  "RC1": "9",
  "RC0": "10",
  "RA2": "11",
  "RA1/ICSPCLK": "12",
  "RA0/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "~{MCLR}/VPP/RA3": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15323-xSL";
  override referencePrefix = "U";
}

/**
 * 16KW FLASH, 2048B SRAM, QFN-28(6x6mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15356-xML`. Reference prefix: `U?`.
 * Footprint filters: QFN*6x6mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC16F15356_xML extends Component.withPins({
  "PAD": "29",
  "RA2": "1",
  "RA3": "2",
  "RA4": "3",
  "RA5": "4",
  "VSS_5": "5",
  "RA7": "6",
  "RA6": "7",
  "RC0": "8",
  "RC1": "9",
  "RC2": "10",
  "RC3": "11",
  "RC4": "12",
  "RC5": "13",
  "RC6": "14",
  "RC7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "RB0": "18",
  "RB1": "19",
  "RB2": "20",
  "RB3": "21",
  "RB4": "22",
  "RB5": "23",
  "RB6/ICSPCLK": "24",
  "RB7/ICSPDAT": "25",
  "RE3/~{MCLR}/VPP": "26",
  "RA0": "27",
  "RA1": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PAD: "power_in", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_5: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_16: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "RE3/~{MCLR}/VPP": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15356-xML";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, QFN-28(4x4mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15356-xMV`. Reference prefix: `U?`.
 * Footprint filters: QFN*4x4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_4x4mm_P0.4mm_EP2.3x2.3mm.
 */
export class PIC16F15356_xMV extends Component.withPins({
  "PAD": "29",
  "RA2": "1",
  "RA3": "2",
  "RA4": "3",
  "RA5": "4",
  "VSS_5": "5",
  "RA7": "6",
  "RA6": "7",
  "RC0": "8",
  "RC1": "9",
  "RC2": "10",
  "RC3": "11",
  "RC4": "12",
  "RC5": "13",
  "RC6": "14",
  "RC7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "RB0": "18",
  "RB1": "19",
  "RB2": "20",
  "RB3": "21",
  "RB4": "22",
  "RB5": "23",
  "RB6/ICSPCLK": "24",
  "RB7/ICSPDAT": "25",
  "RE3/~{MCLR}/VPP": "26",
  "RA0": "27",
  "RA1": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PAD: "power_in", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_5: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_16: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "RE3/~{MCLR}/VPP": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15356-xMV";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, SOIC-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15356-xSO`. Reference prefix: `U?`.
 * Footprint filters: SOIC*.5x17.9mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC16F15356_xSO extends Component.withPins({
  "VPP/~{MCLR}/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7": "9",
  "RA6": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6": "17",
  "RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "RB6/ICSPCLK": "27",
  "RB7/ICSPDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VPP/~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15356-xSO";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, DIP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15356-xSP`. Reference prefix: `U?`.
 * Footprint filters: DIP*7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC16F15356_xSP extends Component.withPins({
  "VPP/~{MCLR}/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7": "9",
  "RA6": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6": "17",
  "RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "RB6/ICSPCLK": "27",
  "RB7/ICSPDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VPP/~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15356-xSP";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15356-xSS`. Reference prefix: `U?`.
 * Footprint filters: SSOP*5.3x10.2mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC16F15356_xSS extends Component.withPins({
  "VPP/~{MCLR}/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7": "9",
  "RA6": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6": "17",
  "RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "RB6/ICSPCLK": "27",
  "RB7/ICSPDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VPP/~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15356-xSS";
  override referencePrefix = "U?";
}

/**
 * 8KW FLASH, 1024B SRAM, QFN-44(8x8mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15375-xML`. Reference prefix: `U?`.
 * Footprint filters: QFN*8x8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC16F15375_xML extends Component.withPins({
  "NC_8": "8",
  "NC_13": "13",
  "NC_29": "29",
  "NC_31": "31",
  "PAD": "45",
  "RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "9",
  "RB1": "10",
  "RB2": "11",
  "RB4": "14",
  "RB5": "15",
  "RB6/ICSPCLK": "16",
  "RB7/ICSPDAT": "17",
  "VPP/MCLR/RE3": "18",
  "RA0": "19",
  "RA1": "20",
  "RA2": "21",
  "RA3": "22",
  "RA4": "23",
  "RA5": "24",
  "RE0": "25",
  "RE1": "26",
  "RE2": "27",
  "VDD_28": "28",
  "VSS_30": "30",
  "RA7": "32",
  "RA6": "33",
  "RC0": "34",
  "RC1": "35",
  "RC2": "36",
  "RC3": "37",
  "RD0": "38",
  "RD1": "39",
  "RD2": "40",
  "RD3": "41",
  "RC4": "42",
  "RC5": "43",
  "RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_8: "no_connect", NC_13: "no_connect", NC_29: "no_connect", NC_31: "no_connect", PAD: "power_in", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "VPP/MCLR/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_28: "power_in", VSS_30: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15375-xML";
  override referencePrefix = "U?";
}

/**
 * 8KW FLASH, 1024B SRAM, QFN-40(5x5mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15375-xMV`. Reference prefix: `U?`.
 * Footprint filters: QFN*1EP*5x5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-40-1EP_5x5mm_P0.4mm_EP3.8x3.8mm.
 */
export class PIC16F15375_xMV extends Component.withPins({
  "PAD": "41",
  "RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RB4": "12",
  "RB5": "13",
  "RB6/ICSPCLK": "14",
  "RB7/ICSPDAT": "15",
  "VPP/MCLR/RE3": "16",
  "RA0": "17",
  "RA1": "18",
  "RA2": "19",
  "RA3": "20",
  "RA4": "21",
  "RA5": "22",
  "RE0": "23",
  "RE1": "24",
  "RE2": "25",
  "VDD_26": "26",
  "VSS_27": "27",
  "RA7": "28",
  "RA6": "29",
  "RC0": "30",
  "RC1": "31",
  "RC2": "32",
  "RC3": "33",
  "RD0": "34",
  "RD1": "35",
  "RD2": "36",
  "RD3": "37",
  "RC4": "38",
  "RC5": "39",
  "RC6": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PAD: "power_in", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "VPP/MCLR/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_26: "power_in", VSS_27: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15375-xMV";
  override referencePrefix = "U?";
}

/**
 * 8KW FLASH, 1024B SRAM, DIP-40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15375-xP`. Reference prefix: `U?`.
 * Footprint filters: DIP*15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC16F15375_xP extends Component.withPins({
  "VPP/MCLR/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "RE0": "8",
  "RE1": "9",
  "RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "RA7": "13",
  "RA6": "14",
  "RC0": "15",
  "RC1": "16",
  "RC2": "17",
  "RC3": "18",
  "RD0": "19",
  "RD1": "20",
  "RD2": "21",
  "RD3": "22",
  "RC4": "23",
  "RC5": "24",
  "RC6": "25",
  "RC7": "26",
  "RD4": "27",
  "RD5": "28",
  "RD6": "29",
  "RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "RB6/ICSPCLK": "39",
  "RB7/ICSPDAT": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VPP/MCLR/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_11: "power_in", VSS_12: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15375-xP";
  override referencePrefix = "U?";
}

/**
 * 8KW FLASH, 1024B SRAM, TQFP-44(10x10mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15375-xPT`. Reference prefix: `U?`.
 * Footprint filters: TQFP*10x10mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC16F15375_xPT extends Component.withPins({
  "NC_12": "12",
  "NC_13": "13",
  "NC_33": "33",
  "NC_34": "34",
  "RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RB4": "14",
  "RB5": "15",
  "RB6/ICSPCLK": "16",
  "RB7/ICSPDAT": "17",
  "VPP/MCLR/RE3": "18",
  "AN0/RA0": "19",
  "RA1": "20",
  "RA2": "21",
  "RA3": "22",
  "RA4": "23",
  "RA5": "24",
  "RE0": "25",
  "RE1": "26",
  "RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA7": "30",
  "RA6": "31",
  "RC0": "32",
  "RC1": "35",
  "RC2": "36",
  "RC3": "37",
  "RD0": "38",
  "RD1": "39",
  "RD2": "40",
  "RD3": "41",
  "RC4": "42",
  "RC5": "43",
  "RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_12: "no_connect", NC_13: "no_connect", NC_33: "no_connect", NC_34: "no_connect", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "VPP/MCLR/RE3": "bidirectional", "AN0/RA0": "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_28: "power_in", VSS_29: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15375-xPT";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, QFN-44(8x8mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15376-xML`. Reference prefix: `U?`.
 * Footprint filters: QFN*8x8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC16F15376_xML extends Component.withPins({
  "NC_8": "8",
  "NC_13": "13",
  "NC_29": "29",
  "NC_31": "31",
  "PAD": "45",
  "RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "9",
  "RB1": "10",
  "RB2": "11",
  "RB4": "14",
  "RB5": "15",
  "RB6/ICSPCLK": "16",
  "RB7/ICSPDAT": "17",
  "VPP/MCLR/RE3": "18",
  "RA0": "19",
  "RA1": "20",
  "RA2": "21",
  "RA3": "22",
  "RA4": "23",
  "RA5": "24",
  "RE0": "25",
  "RE1": "26",
  "RE2": "27",
  "VDD_28": "28",
  "VSS_30": "30",
  "RA7": "32",
  "RA6": "33",
  "RC0": "34",
  "RC1": "35",
  "RC2": "36",
  "RC3": "37",
  "RD0": "38",
  "RD1": "39",
  "RD2": "40",
  "RD3": "41",
  "RC4": "42",
  "RC5": "43",
  "RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_8: "no_connect", NC_13: "no_connect", NC_29: "no_connect", NC_31: "no_connect", PAD: "power_in", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "VPP/MCLR/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_28: "power_in", VSS_30: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15376-xML";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, QFN-40(5x5mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15376-xMV`. Reference prefix: `U?`.
 * Footprint filters: QFN*1EP*5x5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-40-1EP_5x5mm_P0.4mm_EP3.8x3.8mm.
 */
export class PIC16F15376_xMV extends Component.withPins({
  "PAD": "41",
  "RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RB4": "12",
  "RB5": "13",
  "RB6/ICSPCLK": "14",
  "RB7/ICSPDAT": "15",
  "VPP/MCLR/RE3": "16",
  "RA0": "17",
  "RA1": "18",
  "RA2": "19",
  "RA3": "20",
  "RA4": "21",
  "RA5": "22",
  "RE0": "23",
  "RE1": "24",
  "RE2": "25",
  "VDD_26": "26",
  "VSS_27": "27",
  "RA7": "28",
  "RA6": "29",
  "RC0": "30",
  "RC1": "31",
  "RC2": "32",
  "RC3": "33",
  "RD0": "34",
  "RD1": "35",
  "RD2": "36",
  "RD3": "37",
  "RC4": "38",
  "RC5": "39",
  "RC6": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PAD: "power_in", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "VPP/MCLR/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_26: "power_in", VSS_27: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15376-xMV";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, DIP-40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15376-xP`. Reference prefix: `U?`.
 * Footprint filters: DIP*15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC16F15376_xP extends Component.withPins({
  "VPP/MCLR/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "RE0": "8",
  "RE1": "9",
  "RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "RA7": "13",
  "RA6": "14",
  "RC0": "15",
  "RC1": "16",
  "RC2": "17",
  "RC3": "18",
  "RD0": "19",
  "RD1": "20",
  "RD2": "21",
  "RD3": "22",
  "RC4": "23",
  "RC5": "24",
  "RC6": "25",
  "RC7": "26",
  "RD4": "27",
  "RD5": "28",
  "RD6": "29",
  "RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "RB6/ICSPCLK": "39",
  "RB7/ICSPDAT": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VPP/MCLR/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_11: "power_in", VSS_12: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15376-xP";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, TQFP-44(10x10mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15376-xPT`. Reference prefix: `U?`.
 * Footprint filters: TQFP*10x10mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC16F15376_xPT extends Component.withPins({
  "NC_12": "12",
  "NC_13": "13",
  "NC_33": "33",
  "NC_34": "34",
  "RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RB4": "14",
  "RB5": "15",
  "RB6/ICSPCLK": "16",
  "RB7/ICSPDAT": "17",
  "VPP/MCLR/RE3": "18",
  "AN0/RA0": "19",
  "RA1": "20",
  "RA2": "21",
  "RA3": "22",
  "RA4": "23",
  "RA5": "24",
  "RE0": "25",
  "RE1": "26",
  "RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA7": "30",
  "RA6": "31",
  "RC0": "32",
  "RC1": "35",
  "RC2": "36",
  "RC3": "37",
  "RD0": "38",
  "RD1": "39",
  "RD2": "40",
  "RD3": "41",
  "RC4": "42",
  "RC5": "43",
  "RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_12: "no_connect", NC_13: "no_connect", NC_33: "no_connect", NC_34: "no_connect", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "VPP/MCLR/RE3": "bidirectional", "AN0/RA0": "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_28: "power_in", VSS_29: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15376-xPT";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, QFN-48(6x6mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15386-xMV`. Reference prefix: `U?`.
 * Footprint filters: QFN*6x6mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.6x4.6mm.
 */
export class PIC16F15386_xMV extends Component.withPins({
  "RD5": "3",
  "RD6": "4",
  "PAD": "49",
  "RC7": "1",
  "RD4": "2",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RF4": "12",
  "RF5": "13",
  "RF6": "14",
  "RF7": "15",
  "RB4": "16",
  "RB5": "17",
  "ICSPCLK/RB6": "18",
  "ICSPDAT/RB7": "19",
  "VPP/~{MCLR}/RE3": "20",
  "RA0": "21",
  "RA1": "22",
  "RA2": "23",
  "RA3": "24",
  "RA4": "25",
  "RA5": "26",
  "RE0": "27",
  "RE1": "28",
  "RE2": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "RA7": "32",
  "RA6": "33",
  "RC0": "34",
  "RC1": "35",
  "RF0": "36",
  "RF1": "37",
  "RF2": "38",
  "RF3": "39",
  "RC2": "40",
  "RC3": "41",
  "RD0": "42",
  "RD1": "43",
  "RD2": "44",
  "RD3": "45",
  "RC4": "46",
  "RC5": "47",
  "RC6": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RD5: "bidirectional", RD6: "bidirectional", PAD: "power_in", RC7: "bidirectional", RD4: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RF4: "bidirectional", RF5: "bidirectional", RF6: "bidirectional", RF7: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", "VPP/~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_30: "power_in", VSS_31: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RF0: "bidirectional", RF1: "bidirectional", RF2: "bidirectional", RF3: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15386-xMV";
  override referencePrefix = "U?";
}

/**
 * 8KW FLASH, 1024B SRAM, QFN-48(6x6mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15385-xMV`. Reference prefix: `U?`.
 * Footprint filters: QFN*6x6mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.6x4.6mm.
 */
export class PIC16F15385_xMV extends Component.withPins({
  "RD5": "3",
  "RD6": "4",
  "PAD": "49",
  "RC7": "1",
  "RD4": "2",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RF4": "12",
  "RF5": "13",
  "RF6": "14",
  "RF7": "15",
  "RB4": "16",
  "RB5": "17",
  "ICSPCLK/RB6": "18",
  "ICSPDAT/RB7": "19",
  "VPP/~{MCLR}/RE3": "20",
  "RA0": "21",
  "RA1": "22",
  "RA2": "23",
  "RA3": "24",
  "RA4": "25",
  "RA5": "26",
  "RE0": "27",
  "RE1": "28",
  "RE2": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "RA7": "32",
  "RA6": "33",
  "RC0": "34",
  "RC1": "35",
  "RF0": "36",
  "RF1": "37",
  "RF2": "38",
  "RF3": "39",
  "RC2": "40",
  "RC3": "41",
  "RD0": "42",
  "RD1": "43",
  "RD2": "44",
  "RD3": "45",
  "RC4": "46",
  "RC5": "47",
  "RC6": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RD5: "bidirectional", RD6: "bidirectional", PAD: "power_in", RC7: "bidirectional", RD4: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RF4: "bidirectional", RF5: "bidirectional", RF6: "bidirectional", RF7: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", "VPP/~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_30: "power_in", VSS_31: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RF0: "bidirectional", RF1: "bidirectional", RF2: "bidirectional", RF3: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15385-xMV";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, TQFP-48(7x7mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15386-xPT`. Reference prefix: `U?`.
 * Footprint filters: TQFP*7x7mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class PIC16F15386_xPT extends Component.withPins({
  "RD5": "3",
  "RD6": "4",
  "RC7": "1",
  "RD4": "2",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RF4": "12",
  "RF5": "13",
  "RF6": "14",
  "RF7": "15",
  "RB4": "16",
  "RB5": "17",
  "ICSPCLK/RB6": "18",
  "ICSPDAT/RB7": "19",
  "VPP/~{MCLR}/RE3": "20",
  "RA0": "21",
  "RA1": "22",
  "RA2": "23",
  "RA3": "24",
  "RA4": "25",
  "RA5": "26",
  "RE0": "27",
  "RE1": "28",
  "RE2": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "RA7": "32",
  "RA6": "33",
  "RC0": "34",
  "RC1": "35",
  "RF0": "36",
  "RF1": "37",
  "RF2": "38",
  "RF3": "39",
  "RC2": "40",
  "RC3": "41",
  "RD0": "42",
  "RD1": "43",
  "RD2": "44",
  "RD3": "45",
  "RC4": "46",
  "RC5": "47",
  "RC6": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RD5: "bidirectional", RD6: "bidirectional", RC7: "bidirectional", RD4: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RF4: "bidirectional", RF5: "bidirectional", RF6: "bidirectional", RF7: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", "VPP/~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_30: "power_in", VSS_31: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RF0: "bidirectional", RF1: "bidirectional", RF2: "bidirectional", RF3: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15386-xPT";
  override referencePrefix = "U?";
}

/**
 * 8KW FLASH, 1024B SRAM, TQFP-48(7x7mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F15385-xPT`. Reference prefix: `U?`.
 * Footprint filters: TQFP*7x7mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class PIC16F15385_xPT extends Component.withPins({
  "RD5": "3",
  "RD6": "4",
  "RC7": "1",
  "RD4": "2",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RF4": "12",
  "RF5": "13",
  "RF6": "14",
  "RF7": "15",
  "RB4": "16",
  "RB5": "17",
  "ICSPCLK/RB6": "18",
  "ICSPDAT/RB7": "19",
  "VPP/~{MCLR}/RE3": "20",
  "RA0": "21",
  "RA1": "22",
  "RA2": "23",
  "RA3": "24",
  "RA4": "25",
  "RA5": "26",
  "RE0": "27",
  "RE1": "28",
  "RE2": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "RA7": "32",
  "RA6": "33",
  "RC0": "34",
  "RC1": "35",
  "RF0": "36",
  "RF1": "37",
  "RF2": "38",
  "RF3": "39",
  "RC2": "40",
  "RC3": "41",
  "RD0": "42",
  "RD1": "43",
  "RD2": "44",
  "RD3": "45",
  "RC4": "46",
  "RC5": "47",
  "RC6": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RD5: "bidirectional", RD6: "bidirectional", RC7: "bidirectional", RD4: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RF4: "bidirectional", RF5: "bidirectional", RF6: "bidirectional", RF7: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", "VPP/~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_30: "power_in", VSS_31: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RF0: "bidirectional", RF1: "bidirectional", RF2: "bidirectional", RF3: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F15385-xPT";
  override referencePrefix = "U?";
}

/**
 * 8-bit Flash MCU, 32MHz, 14KB Flash, 1KB RAM, 1K High Endurance Flash (EEPROM), UQFN-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1619-xGZ`. Reference prefix: `U`.
 * Footprint filters: UQFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001770D.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:UQFN-20-1EP_4x4mm_P0.5mm_EP2.8x2.8mm.
 */
export class PIC16F1619_xGZ extends Component.withPins({
  "EP": "21",
  "RA3/~{MCLR}/VPP": "1",
  "RC5": "2",
  "RC4": "3",
  "RC3": "4",
  "RC6": "5",
  "RC7": "6",
  "RB7": "7",
  "RB6": "8",
  "RB5": "9",
  "RB4": "10",
  "RC2": "11",
  "RC1": "12",
  "RC0": "13",
  "RA2": "14",
  "RA1/ICSPCLK": "15",
  "RA0/ICSPDAT": "16",
  "VSS": "17",
  "VDD": "18",
  "RA5": "19",
  "RA4": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EP: "passive", "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1619-xGZ";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 14KB Flash, 1KB RAM, 1K High Endurance Flash (EEPROM), QFN-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1619-xML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001770D.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class PIC16F1619_xML extends Component.withPins({
  "EP": "21",
  "RA3/~{MCLR}/VPP": "1",
  "RC5": "2",
  "RC4": "3",
  "RC3": "4",
  "RC6": "5",
  "RC7": "6",
  "RB7": "7",
  "RB6": "8",
  "RB5": "9",
  "RB4": "10",
  "RC2": "11",
  "RC1": "12",
  "RC0": "13",
  "RA2": "14",
  "RA1/ICSPCLK": "15",
  "RA0/ICSPDAT": "16",
  "VSS": "17",
  "VDD": "18",
  "RA5": "19",
  "RA4": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { EP: "passive", "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1619-xML";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 14KB Flash, 1KB RAM, 1K High Endurance Flash (EEPROM), PDIP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1619-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001770D.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class PIC16F1619_xP extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/~{MCLR}/VPP": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1619-xP";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 14KB Flash, 1KB RAM, 1K High Endurance Flash (EEPROM), SOIC-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1619-xSO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001770D.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class PIC16F1619_xSO extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/~{MCLR}/VPP": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1619-xSO";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 14KB Flash, 1KB RAM, 1K High Endurance Flash (EEPROM), SSOP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1619-xSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001770D.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 */
export class PIC16F1619_xSS extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/~{MCLR}/VPP": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1619-xSS";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 16KB Flash, 1KB RAM, 256B EEPROM, QFN-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1786-xML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001637C.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC16F1786_xML extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "RA4": "3",
  "RA5": "4",
  "V_{SS}_5": "5",
  "RA7": "6",
  "RA6": "7",
  "RC0": "8",
  "RC1": "9",
  "RC2": "10",
  "RC3": "11",
  "RC4": "12",
  "RC5": "13",
  "RC6": "14",
  "RC7": "15",
  "V_{SS}_16": "16",
  "V_{DD}": "17",
  "RB0": "18",
  "RB1": "19",
  "RB2": "20",
  "RB3": "21",
  "RB4": "22",
  "RB5": "23",
  "ICSPCLK/RB6": "24",
  "ICSPDAT/RB7": "25",
  "RE3/~{MCLR}/V_{PP}": "26",
  "RA0": "27",
  "RA1": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", "V_{SS}_5": "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", "V_{SS}_16": "passive", "V_{DD}": "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", "RE3/~{MCLR}/V_{PP}": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1786-xML";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 16KB Flash, 1KB RAM, 256B EEPROM, PDIP-40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1786-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001637C.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC16F1786_xP extends Component.withPins({
  "RE3/~{MCLR}/V_{PP}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "RE0": "8",
  "RE1": "9",
  "RE2": "10",
  "V_{DD}_11": "11",
  "V_{SS}_12": "12",
  "RA7": "13",
  "RA6": "14",
  "RC0": "15",
  "RC1": "16",
  "RC2": "17",
  "RC3": "18",
  "RD0": "19",
  "RD1": "20",
  "RD2": "21",
  "RD3": "22",
  "RC4": "23",
  "RC5": "24",
  "RC6": "25",
  "RC7": "26",
  "RD4": "27",
  "RD5": "28",
  "RD6": "29",
  "RD7": "30",
  "V_{SS}_31": "31",
  "V_{DD}_32": "32",
  "RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "ICSPCLK/RB6": "39",
  "ICSPDAT/RB7": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/V_{PP}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", "V_{DD}_11": "power_in", "V_{SS}_12": "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", "V_{SS}_31": "passive", "V_{DD}_32": "passive", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1786-xP";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 16KB Flash, 1KB RAM, 256B EEPROM, SPDIP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1786-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001637C.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC16F1786_xSP extends Component.withPins({
  "RE3/~{MCLR}/V_{PP}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "V_{SS}_8": "8",
  "RA7": "9",
  "RA6": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6": "17",
  "RC7": "18",
  "V_{SS}_19": "19",
  "V_{DD}": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "ICSPCLK/RB6": "27",
  "ICSPDAT/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/V_{PP}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", "V_{SS}_8": "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", "V_{SS}_19": "passive", "V_{DD}": "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1786-xSP";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 16KB Flash, 1KB RAM, 256B EEPROM, SOIC-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1786-xSO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001637C.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC16F1786_xSO extends Component.withPins({
  "RE3/~{MCLR}/V_{PP}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "V_{SS}_8": "8",
  "RA7": "9",
  "RA6": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6": "17",
  "RC7": "18",
  "V_{SS}_19": "19",
  "V_{DD}": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "ICSPCLK/RB6": "27",
  "ICSPDAT/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/V_{PP}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", "V_{SS}_8": "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", "V_{SS}_19": "passive", "V_{DD}": "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1786-xSO";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 16KB Flash, 1KB RAM, 256B EEPROM, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1786-xSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001637C.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC16F1786_xSS extends Component.withPins({
  "RE3/~{MCLR}/V_{PP}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "V_{SS}_8": "8",
  "RA7": "9",
  "RA6": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6": "17",
  "RC7": "18",
  "V_{SS}_19": "19",
  "V_{DD}": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "ICSPCLK/RB6": "27",
  "ICSPDAT/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/V_{PP}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", "V_{SS}_8": "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", "V_{SS}_19": "passive", "V_{DD}": "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1786-xSS";
  override referencePrefix = "U";
}

/**
 * Flash-Based, 8-Bit CMOS Microcontrollers, QFN
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1829-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41440C.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class PIC16F1829_IML extends Component.withPins({
  "RA3/MCLR/VPP": "1",
  "RC5": "2",
  "RC4": "3",
  "RC3": "4",
  "RC6": "5",
  "RC7": "6",
  "RB7": "7",
  "RB6": "8",
  "RB5": "9",
  "RB4": "10",
  "RC2": "11",
  "RC1": "12",
  "RC0": "13",
  "RA2": "14",
  "RA1/ICSPCLK": "15",
  "RA0/ICSPDAT": "16",
  "VSS": "17",
  "VDD": "18",
  "RA5": "19",
  "RA4": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA3/MCLR/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1829-IML";
  override referencePrefix = "U";
}

/**
 * Flash-Based, 8-Bit CMOS Microcontrollers, PDIP
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1829-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41440C.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1829_IP extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/MCLR/VPP": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/MCLR/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1829-IP";
  override referencePrefix = "U";
}

/**
 * Flash-Based, 8-Bit CMOS Microcontrollers, SOIC
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1829-ISL`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41440C.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1829_ISL extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/MCLR/VPP": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/MCLR/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1829-ISL";
  override referencePrefix = "U";
}

/**
 * Flash-Based, 8-Bit CMOS Microcontrollers, SOIC
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1829-ISO`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41440C.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1829_ISO extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/MCLR/VPP": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/MCLR/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1829-ISO";
  override referencePrefix = "U";
}

/**
 * Flash-Based, 8-Bit CMOS Microcontrollers, SSOP
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1829-ISS`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41440C.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1829_ISS extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/MCLR/VPP": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/MCLR/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1829-ISS";
  override referencePrefix = "U";
}

/**
 * Flash-Based, 8-Bit CMOS Microcontrollers, TSSOP
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1829-IST`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41440C.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F1829_IST extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/MCLR/VPP": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/MCLR/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1829-IST";
  override referencePrefix = "U";
}

/**
 * Flash-Based, 8-Bit CMOS Microcontrollers with integrated voltage regulator and LIN transceiver
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1829LIN-ESS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41673A.pdf
 * Keywords: Flash-Based 8-Bit CMOS microcontroller regulator LIN.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 */
export class PIC16F1829LIN_ESS extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/MCLR": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "LINVSS": "8",
  "LBUS": "9",
  "VREG": "10",
  "VBAT": "11",
  "/FAULT": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/MCLR": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", LINVSS: "power_in", LBUS: "bidirectional", VREG: "power_out", VBAT: "power_in", "/FAULT": "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1829LIN-ESS";
  override referencePrefix = "U";
}

/**
 * PIC16F18324, 4096W FLASH, 512B SRAM, 256B EEPROM, SOIC14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18324-xSL`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/40001800c.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class PIC16F18324_xSL extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/~{MCLR}": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC2": "8",
  "RC1": "9",
  "RC0": "10",
  "RA2": "11",
  "RA1": "12",
  "RA0": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/~{MCLR}": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18324-xSL";
  override referencePrefix = "U";
}

/**
 * PIC16F18325, 8192W FLASH, 1024B SRAM, SOIC14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18325-ISL`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/40001795b.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class PIC16F18325_ISL extends Component.withPins({
  "VDD": "1",
  "RA5/ANA5/T1CKI/SOSCIN/SOSCI/CLCIN3/CLKIN/OSC1": "2",
  "RA4/ANA4/T1G/SOSCO/CLKOUT/OSC2": "3",
  "RA3/~{MCLR}/VPP": "4",
  "DT/RX/SDA2/SDI2/CCP1/T3CKI/MDCIN2/ANC5/RC5": "5",
  "CLCIN1/SCL2/SCK2/T3G/ANC4/RC4": "6",
  "CLCIN0/~{SS1}/CCP2/T5G/MDMIN/C2IN3-/C1IN3-/ANC3/RC3": "7",
  "MDCIN1/C2IN2-/C1IN2-/ANC2/RC2": "8",
  "CLCIN2/SDA1/SDI/CCP4/C2IN1-/C1IN1-/ANC1/RC1": "9",
  "SCL1/SCK/T5CKI/C2IN0+/ANC0/RC0": "10",
  "RA2/ANA2/Vref-/DAC1Ref-/T0CKI/CCP3/CWG1IN/CWG2IN": "11",
  "RA1/ANA1/Vref+/C1IN0-/C2IN0-/DAC1Ref+/ICSPCLK": "12",
  "RA0/ANA0/C1IN0+/DAC1OUT/~{SS2}/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/ANA5/T1CKI/SOSCIN/SOSCI/CLCIN3/CLKIN/OSC1": "bidirectional", "RA4/ANA4/T1G/SOSCO/CLKOUT/OSC2": "bidirectional", "RA3/~{MCLR}/VPP": "bidirectional", "DT/RX/SDA2/SDI2/CCP1/T3CKI/MDCIN2/ANC5/RC5": "bidirectional", "CLCIN1/SCL2/SCK2/T3G/ANC4/RC4": "bidirectional", "CLCIN0/~{SS1}/CCP2/T5G/MDMIN/C2IN3-/C1IN3-/ANC3/RC3": "bidirectional", "MDCIN1/C2IN2-/C1IN2-/ANC2/RC2": "bidirectional", "CLCIN2/SDA1/SDI/CCP4/C2IN1-/C1IN1-/ANC1/RC1": "bidirectional", "SCL1/SCK/T5CKI/C2IN0+/ANC0/RC0": "bidirectional", "RA2/ANA2/Vref-/DAC1Ref-/T0CKI/CCP3/CWG1IN/CWG2IN": "bidirectional", "RA1/ANA1/Vref+/C1IN0-/C2IN0-/DAC1Ref+/ICSPCLK": "bidirectional", "RA0/ANA0/C1IN0+/DAC1OUT/~{SS2}/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18325-ISL";
  override referencePrefix = "U";
}

/**
 * 8192W FLASH, 1024B SRAM, 256B EEPROM, QFN-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18325-xGZ`. Reference prefix: `U`.
 * Footprint filters: UQFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001795E.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:UQFN-20-1EP_4x4mm_P0.5mm_EP2.8x2.8mm.
 */
export class PIC16F18325_xGZ extends Component.withPins({
  "RA3/~{MCLR}/VPP": "1",
  "RC5": "2",
  "RC4": "3",
  "RC3": "4",
  "RC6": "5",
  "RC7": "6",
  "RB7": "7",
  "RB6": "8",
  "RB5": "9",
  "RB4": "10",
  "RC2": "11",
  "RC1": "12",
  "RC0": "13",
  "RA2": "14",
  "RA1/ICSPCLK": "15",
  "RA0/ICSPDAT": "16",
  "VSS_17": "17",
  "VDD": "18",
  "RA5": "19",
  "RA4": "20",
  "VSS_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS_17: "power_in", VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", VSS_21: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18325-xGZ";
  override referencePrefix = "U";
}

/**
 * 8192W FLASH, 1024B SRAM, 256B EEPROM, QFN-16
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18325-xJQ`. Reference prefix: `U`.
 * Footprint filters: UQFN*1EP*4x4mm*P0.65mm*EP2.6x2.6mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001795E.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:UQFN-16-1EP_4x4mm_P0.65mm_EP2.6x2.6mm.
 */
export class PIC16F18325_xJQ extends Component.withPins({
  "RA5": "1",
  "RA4": "2",
  "RA3/~{MCLR}": "3",
  "RC5": "4",
  "RC4": "5",
  "RC3": "6",
  "RC2": "7",
  "RC1": "8",
  "RC0": "9",
  "RA2": "10",
  "RA1/ICSPCLK": "11",
  "RA0/ICSPDAT": "12",
  "VSS": "13",
  "NC_14": "14",
  "NC_15": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA5: "bidirectional", RA4: "bidirectional", "RA3/~{MCLR}": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", NC_14: "no_connect", NC_15: "no_connect", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18325-xJQ";
  override referencePrefix = "U";
}

/**
 * 4096W FLASH, 512B RAM, 256B EEPROM, UQFN-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18344-GZ`. Reference prefix: `U`.
 * Footprint filters: *UQFN*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001839B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:UQFN-20-1EP_4x4mm_P0.5mm_EP2.8x2.8mm.
 */
export class PIC16F18344_GZ extends Component.withPins({
  "RA3/~{MCLR}/VPP": "1",
  "RC5": "2",
  "RC4": "3",
  "RC3": "4",
  "RC6": "5",
  "RC7": "6",
  "RB7": "7",
  "RB6": "8",
  "RB5": "9",
  "RB4": "10",
  "RC2": "11",
  "RC1": "12",
  "RC0": "13",
  "RA2": "14",
  "RA1/ICSPCLK": "15",
  "RA0/ICSPDAT": "16",
  "VSS": "17",
  "VDD": "18",
  "RA5": "19",
  "RA4": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18344-GZ";
  override referencePrefix = "U";
}

/**
 * 4096W FLASH, 512B RAM, 256B EEPROM, PDIP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18344-P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/40001800a.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class PIC16F18344_P extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/~{MCLR}/VPP": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18344-P";
  override referencePrefix = "U";
}

/**
 * 4096W FLASH, 512B RAM, 256B EEPROM, SOIC-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18344-SO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/40001800a.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class PIC16F18344_SO extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/~{MCLR}/VPP": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18344-SO";
  override referencePrefix = "U";
}

/**
 * 4096W FLASH, 512B RAM, 256B EEPROM, SSOP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18344-SS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/40001800a.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 */
export class PIC16F18344_SS extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/~{MCLR}/VPP": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18344-SS";
  override referencePrefix = "U";
}

/**
 * PIC16F18324, 4096W FLASH, 512B SRAM, 256B EEPROM, SOIC14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18344-xSL`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/40001800c.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class PIC16F18344_xSL extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/~{MCLR}": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC2": "8",
  "RC1": "9",
  "RC0": "10",
  "RA2": "11",
  "RA1": "12",
  "RA0": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/~{MCLR}": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", RA1: "bidirectional", RA0: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18344-xSL";
  override referencePrefix = "U";
}

/**
 * 16384W FLASH, 2048B RAM, 256B EEPROM, UQFN-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18346-GZ`. Reference prefix: `U`.
 * Footprint filters: *UQFN*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001839B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:UQFN-20-1EP_4x4mm_P0.5mm_EP2.8x2.8mm.
 */
export class PIC16F18346_GZ extends Component.withPins({
  "RA3/~{MCLR}/VPP": "1",
  "RC5": "2",
  "RC4": "3",
  "RC3": "4",
  "RC6": "5",
  "RC7": "6",
  "RB7": "7",
  "RB6": "8",
  "RB5": "9",
  "RB4": "10",
  "RC2": "11",
  "RC1": "12",
  "RC0": "13",
  "RA2": "14",
  "RA1/ICSPCLK": "15",
  "RA0/ICSPDAT": "16",
  "VSS": "17",
  "VDD": "18",
  "RA5": "19",
  "RA4": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18346-GZ";
  override referencePrefix = "U";
}

/**
 * 16384W FLASH, 2048B RAM, 256B EEPROM, PDIP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18346-P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001839B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class PIC16F18346_P extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/~{MCLR}/VPP": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18346-P";
  override referencePrefix = "U";
}

/**
 * 16384W FLASH, 2048B RAM, 256B EEPROM, SOIC-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18346-SO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001839B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class PIC16F18346_SO extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/~{MCLR}/VPP": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18346-SO";
  override referencePrefix = "U";
}

/**
 * 16384W FLASH, 2048B RAM, 256B EEPROM, SSOP-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18346-SS_0`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001839B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 */
export class PIC16F18346_SS_0 extends Component.withPins({
  "VDD": "1",
  "RA5": "2",
  "RA4": "3",
  "RA3/~{MCLR}/VPP": "4",
  "RC5": "5",
  "RC4": "6",
  "RC3": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2": "14",
  "RC1": "15",
  "RC0": "16",
  "RA2": "17",
  "RA1/ICSPCLK": "18",
  "RA0/ICSPDAT": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18346-SS_0";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 7KB Flash, 512B RAM 256B EEPROM, SOIC-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18854-xSO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF18855-75-Data-Sheet-40001802F.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power CRC DSM  ADC^2 CLC PLL 32MHz.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC16F18854_xSO extends Component.withPins({
  "VSS_19": "19",
  "RE3/~{MCLR}/VPP": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7": "9",
  "RA6": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6": "17",
  "RC7": "18",
  "VDD": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "RB6/ICSPCLK": "27",
  "RB7/ICSPDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS_19: "passive", "RE3/~{MCLR}/VPP": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18854-xSO";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 14KB Flash, 1KB RAM 256B EEPROM, UQFN-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18855-xMV`. Reference prefix: `U`.
 * Footprint filters: UQFN*1EP*4x4mm*P0.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF18855-75-Data-Sheet-40001802F.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power CRC DSM  ADC^2 CLC PLL 32MHz.
 * Default footprint: Package_DFN_QFN:UQFN-28-1EP_4x4mm_P0.4mm_EP2.35x2.35mm.
 */
export class PIC16F18855_xMV extends Component.withPins({
  "VSS_29": "29",
  "RA2": "1",
  "RA3": "2",
  "RA4": "3",
  "RA5": "4",
  "VSS_5": "5",
  "RA7": "6",
  "RA6": "7",
  "RC0": "8",
  "RC1": "9",
  "RC2": "10",
  "RC3": "11",
  "RC4": "12",
  "RC5": "13",
  "RC6": "14",
  "RC7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "RB0": "18",
  "RB1": "19",
  "RB2": "20",
  "RB3": "21",
  "RB4": "22",
  "RB5": "23",
  "RB6/ICSPCLK": "24",
  "RB7/ICSPDAT": "25",
  "RE3/~{MCLR}/VPP": "26",
  "RA0": "27",
  "RA1": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS_29: "passive", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_5: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_16: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "RE3/~{MCLR}/VPP": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18855-xMV";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 14KB Flash, 1024B RAM 256B EEPROM, SOIC-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F18855-xSO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001802G.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power CRC DSM  ADC^2 CLC PLL 32MHz.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC16F18855_xSO extends Component.withPins({
  "VSS_19": "19",
  "RE3/~{MCLR}/VPP": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7": "9",
  "RA6": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6": "17",
  "RC7": "18",
  "VDD": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "RB6/ICSPCLK": "27",
  "RB7/ICSPDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS_19: "passive", "RE3/~{MCLR}/VPP": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F18855-xSO";
  override referencePrefix = "U";
}

/**
 * 8kW FLASH, 1kB RAM, 256B EEPROM, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F19195-x5LX`. Reference prefix: `U`.
 * Footprint filters: VQFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:VQFN-64-1EP_9x9mm_P0.5mm_EP5.4x5.4mm.
 */
export class PIC16F19195_x5LX extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
  "VSS_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", VSS_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F19195-x5LX";
  override referencePrefix = "U";
}

/**
 * 8kW FLASH, 1kB RAM, 256B EEPROM, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F19195-xMR`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.4x5.4mm.
 */
export class PIC16F19195_xMR extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
  "VSS_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", VSS_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F19195-xMR";
  override referencePrefix = "U";
}

/**
 * 8kW FLASH, 1kB RAM, 256B EEPROM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F19195-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class PIC16F19195_xPT extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F19195-xPT";
  override referencePrefix = "U";
}

/**
 * 16kW FLASH, 2kB RAM, 256B EEPROM, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F19196-x5LX`. Reference prefix: `U`.
 * Footprint filters: VQFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:VQFN-64-1EP_9x9mm_P0.5mm_EP5.4x5.4mm.
 */
export class PIC16F19196_x5LX extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
  "VSS_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", VSS_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F19196-x5LX";
  override referencePrefix = "U";
}

/**
 * 16kW FLASH, 2kB RAM, 256B EEPROM, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F19196-xMR`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.4x5.4mm.
 */
export class PIC16F19196_xMR extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
  "VSS_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", VSS_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F19196-xMR";
  override referencePrefix = "U";
}

/**
 * 16kW FLASH, 2kB RAM, 256B EEPROM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F19196-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class PIC16F19196_xPT extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F19196-xPT";
  override referencePrefix = "U";
}

/**
 * 32kW FLASH, 4kB RAM, 256B EEPROM, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F19197-x5LX`. Reference prefix: `U`.
 * Footprint filters: VQFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:VQFN-64-1EP_9x9mm_P0.5mm_EP5.4x5.4mm.
 */
export class PIC16F19197_x5LX extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
  "VSS_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", VSS_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F19197-x5LX";
  override referencePrefix = "U";
}

/**
 * 32kW FLASH, 4kB RAM, 256B EEPROM, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F19197-xMR`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.4x5.4mm.
 */
export class PIC16F19197_xMR extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
  "VSS_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", VSS_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F19197-xMR";
  override referencePrefix = "U";
}

/**
 * 32kW FLASH, 4kB RAM, 256B EEPROM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F19197-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class PIC16F19197_xPT extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F19197-xPT";
  override referencePrefix = "U";
}

/**
 * PIC16F193XLF193X - Flash-Based, 8-Bit CMOS Microcontrollers, QFN-44
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1934-IML`. Reference prefix: `U`.
 * Footprint filters: MLF*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41364E.pdf
 */
export class PIC16F1934_IML extends Component.withPins({
  "SEG8/DT/RX/RC7": "1",
  "SEG17/P2D/CPS12/RD4": "2",
  "SEG18/P1B/CPS13/RD5": "3",
  "SEG19/P1C/CPS14/RD6": "4",
  "SEG20/P1D/CPS15/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "RB0/AN12/CPS0/SRI/INT/SEG0": "9",
  "RB1/AN10/C12IN3-/CPS1/VLCD1": "10",
  "RB2/AN8/CPS2/VLCD2": "11",
  "RB3/AN9/C12IN2-/CPS3/CCP2/P2A/VLCD3": "12",
  "NC_13": "13",
  "RB4/AN11/CPS4/COM0": "14",
  "RB5/AN13/CPS5/CCP3/P3A/T1G/COM1": "15",
  "RB6/ICSPCLK/ICDCLK/SEG14": "16",
  "RB7/ICSPDAT/ICDDAT/SEG13": "17",
  "RE3/MCLR/Vpp": "18",
  "RA0/AN0/C12IN0-/C2OUT/SRNQ/SS/VCAP/SEG12": "19",
  "RA1/AN1/C12IN1-/SEG7": "20",
  "RA2/AN2/C2IN+/Vref-/DACOUT/COM2": "21",
  "RA3/AN3/C1IN+/Vref+/SEG15": "22",
  "RA4/C1OUT/CPS6/T0CKI/SRQ/SEG4": "23",
  "RA5/AN4/C2OUT/CPS7/SRNQ/SS/VCAP/SEG5": "24",
  "SEG21/P3A/CCP3/AN5/RE0": "25",
  "SEG22/P3B/AN6/RE1": "26",
  "SEG23/CCP5/AN7/RE2": "27",
  "VDD_28": "28",
  "NC_29": "29",
  "VSS_30": "30",
  "VSS_31": "31",
  "RA7/OSC1/CLKIN/SEG2": "32",
  "RA6/OSC2/CLKOUT/VCAP/SEG1": "33",
  "P2B/T1CLKI/T1OSO/RC0": "34",
  "P2A/CCP2/T1OSI/RC1": "35",
  "SEG3/P1A/CCP1/RC2": "36",
  "SEG6/SCLK/SCL/RC3": "37",
  "COM3/CPS8/RD0": "38",
  "CCP4/CPS9/RD1": "39",
  "P2B/CPS10/RD2": "40",
  "SEG16/P2C/CPS11/RD3": "41",
  "SEG11/T1G/SDA/SDI/RC4": "42",
  "SEG10/SDO/RC5": "43",
  "SEG9/CK/TX/RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SEG8/DT/RX/RC7": "bidirectional", "SEG17/P2D/CPS12/RD4": "bidirectional", "SEG18/P1B/CPS13/RD5": "bidirectional", "SEG19/P1C/CPS14/RD6": "bidirectional", "SEG20/P1D/CPS15/RD7": "bidirectional", VSS_6: "bidirectional", VDD_7: "bidirectional", VDD_8: "bidirectional", "RB0/AN12/CPS0/SRI/INT/SEG0": "bidirectional", "RB1/AN10/C12IN3-/CPS1/VLCD1": "bidirectional", "RB2/AN8/CPS2/VLCD2": "bidirectional", "RB3/AN9/C12IN2-/CPS3/CCP2/P2A/VLCD3": "bidirectional", NC_13: "no_connect", "RB4/AN11/CPS4/COM0": "bidirectional", "RB5/AN13/CPS5/CCP3/P3A/T1G/COM1": "bidirectional", "RB6/ICSPCLK/ICDCLK/SEG14": "bidirectional", "RB7/ICSPDAT/ICDDAT/SEG13": "bidirectional", "RE3/MCLR/Vpp": "bidirectional", "RA0/AN0/C12IN0-/C2OUT/SRNQ/SS/VCAP/SEG12": "bidirectional", "RA1/AN1/C12IN1-/SEG7": "bidirectional", "RA2/AN2/C2IN+/Vref-/DACOUT/COM2": "bidirectional", "RA3/AN3/C1IN+/Vref+/SEG15": "bidirectional", "RA4/C1OUT/CPS6/T0CKI/SRQ/SEG4": "bidirectional", "RA5/AN4/C2OUT/CPS7/SRNQ/SS/VCAP/SEG5": "bidirectional", "SEG21/P3A/CCP3/AN5/RE0": "bidirectional", "SEG22/P3B/AN6/RE1": "bidirectional", "SEG23/CCP5/AN7/RE2": "bidirectional", VDD_28: "power_in", NC_29: "no_connect", VSS_30: "power_in", VSS_31: "power_in", "RA7/OSC1/CLKIN/SEG2": "bidirectional", "RA6/OSC2/CLKOUT/VCAP/SEG1": "bidirectional", "P2B/T1CLKI/T1OSO/RC0": "bidirectional", "P2A/CCP2/T1OSI/RC1": "bidirectional", "SEG3/P1A/CCP1/RC2": "bidirectional", "SEG6/SCLK/SCL/RC3": "bidirectional", "COM3/CPS8/RD0": "bidirectional", "CCP4/CPS9/RD1": "bidirectional", "P2B/CPS10/RD2": "bidirectional", "SEG16/P2C/CPS11/RD3": "bidirectional", "SEG11/T1G/SDA/SDI/RC4": "bidirectional", "SEG10/SDO/RC5": "bidirectional", "SEG9/CK/TX/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1934-IML";
  override referencePrefix = "U";
}

/**
 * PIC16F193XLF193X - Flash-Based, 8-Bit CMOS Microcontrollers, TQFP-44
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1934-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41364E.pdf
 */
export class PIC16F1934_IPT extends Component.withPins({
  "SEG8/DT/RX/RC7": "1",
  "SEG17/P2D/CPS12/RD4": "2",
  "SEG18/P1B/CPS13/RD5": "3",
  "SEG19/P1C/CPS14/RD6": "4",
  "SEG20/P1D/CPS15/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/CPS0/SRI/INT/SEG0": "8",
  "RB1/AN10/C12IN3-/CPS1/VLCD1": "9",
  "RB2/AN8/CPS2/VLCD2": "10",
  "RB3/AN9/C12IN2-/CPS3/CCP2/P2A/VLCD3": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4/AN11/CPS4/COM0": "14",
  "RB5/AN13/CPS5/CCP3/P3A/T1G/COM1": "15",
  "RB6/ICSPCLK/ICDCLK/SEG14": "16",
  "RB7/ICSPDAT/ICDDAT/SEG13": "17",
  "RE3/MCLR/Vpp": "18",
  "RA0/AN0/C12IN0-/C2OUT/SRNQ/SS/VCAP/SEG12": "19",
  "RA1/AN1/C12IN1-/SEG7": "20",
  "RA2/AN2/C2IN+/Vref-/DACOUT/COM2": "21",
  "RA3/AN3/C1IN+/Vref+/SEG15": "22",
  "RA4/C1OUT/CPS6/T0CKI/SRQ/SEG4": "23",
  "RA5/AN4/C2OUT/CPS7/SRNQ/SS/VCAP/SEG5": "24",
  "SEG21/P3A/CCP3/AN5/RE0": "25",
  "SEG22/P3B/AN6/RE1": "26",
  "SEG23/CCP5/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA7/OSC1/CLKIN/SEG2": "30",
  "RA6/OSC2/CLKOUT/VCAP/SEG1": "31",
  "P2B/T1CKI/T1OSO/RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "P2A/CCP2/T1OSI/RC1": "35",
  "SEG3/P1A/CCP1/RC2": "36",
  "SEG6/SCLK/SCL/RC3": "37",
  "COM3/CPS8/RD0": "38",
  "CCP4/CPS9/RD1": "39",
  "P2B/CPS10/RD2": "40",
  "SEG16/P2C/CPS11/RD3": "41",
  "SEG11/T1G/SDA/SDI/RC4": "42",
  "SEG10/SDO/RC5": "43",
  "SEG9/CK/TX/RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SEG8/DT/RX/RC7": "bidirectional", "SEG17/P2D/CPS12/RD4": "bidirectional", "SEG18/P1B/CPS13/RD5": "bidirectional", "SEG19/P1C/CPS14/RD6": "bidirectional", "SEG20/P1D/CPS15/RD7": "bidirectional", VSS_6: "bidirectional", VDD_7: "bidirectional", "RB0/AN12/CPS0/SRI/INT/SEG0": "bidirectional", "RB1/AN10/C12IN3-/CPS1/VLCD1": "bidirectional", "RB2/AN8/CPS2/VLCD2": "bidirectional", "RB3/AN9/C12IN2-/CPS3/CCP2/P2A/VLCD3": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", "RB4/AN11/CPS4/COM0": "bidirectional", "RB5/AN13/CPS5/CCP3/P3A/T1G/COM1": "bidirectional", "RB6/ICSPCLK/ICDCLK/SEG14": "bidirectional", "RB7/ICSPDAT/ICDDAT/SEG13": "bidirectional", "RE3/MCLR/Vpp": "bidirectional", "RA0/AN0/C12IN0-/C2OUT/SRNQ/SS/VCAP/SEG12": "bidirectional", "RA1/AN1/C12IN1-/SEG7": "bidirectional", "RA2/AN2/C2IN+/Vref-/DACOUT/COM2": "bidirectional", "RA3/AN3/C1IN+/Vref+/SEG15": "bidirectional", "RA4/C1OUT/CPS6/T0CKI/SRQ/SEG4": "bidirectional", "RA5/AN4/C2OUT/CPS7/SRNQ/SS/VCAP/SEG5": "bidirectional", "SEG21/P3A/CCP3/AN5/RE0": "bidirectional", "SEG22/P3B/AN6/RE1": "bidirectional", "SEG23/CCP5/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "RA7/OSC1/CLKIN/SEG2": "bidirectional", "RA6/OSC2/CLKOUT/VCAP/SEG1": "bidirectional", "P2B/T1CKI/T1OSO/RC0": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", "P2A/CCP2/T1OSI/RC1": "bidirectional", "SEG3/P1A/CCP1/RC2": "bidirectional", "SEG6/SCLK/SCL/RC3": "bidirectional", "COM3/CPS8/RD0": "bidirectional", "CCP4/CPS9/RD1": "bidirectional", "P2B/CPS10/RD2": "bidirectional", "SEG16/P2C/CPS11/RD3": "bidirectional", "SEG11/T1G/SDA/SDI/RC4": "bidirectional", "SEG10/SDO/RC5": "bidirectional", "SEG9/CK/TX/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1934-IPT";
  override referencePrefix = "U";
}

/**
 * PIC16F193XLF193X - Flash-Based, 8-Bit CMOS Microcontrollers, QFN-44
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1937-IML`. Reference prefix: `U`.
 * Footprint filters: MLF*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41364E.pdf
 */
export class PIC16F1937_IML extends Component.withPins({
  "SEG8/DT/RX/RC7": "1",
  "SEG17/P2D/CPS12/RD4": "2",
  "SEG18/P1B/CPS13/RD5": "3",
  "SEG19/P1C/CPS14/RD6": "4",
  "SEG20/P1D/CPS15/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "RB0/AN12/CPS0/SRI/INT/SEG0": "9",
  "RB1/AN10/C12IN3-/CPS1/VLCD1": "10",
  "RB2/AN8/CPS2/VLCD2": "11",
  "RB3/AN9/C12IN2-/CPS3/CCP2/P2A/VLCD3": "12",
  "NC_13": "13",
  "RB4/AN11/CPS4/COM0": "14",
  "RB5/AN13/CPS5/CCP3/P3A/T1G/COM1": "15",
  "RB6/ICSPCLK/ICDCLK/SEG14": "16",
  "RB7/ICSPDAT/ICDDAT/SEG13": "17",
  "RE3/MCLR/Vpp": "18",
  "RA0/AN0/C12IN0-/C2OUT/SRNQ/SS/VCAP/SEG12": "19",
  "RA1/AN1/C12IN1-/SEG7": "20",
  "RA2/AN2/C2IN+/Vref-/DACOUT/COM2": "21",
  "RA3/AN3/C1IN+/Vref+/SEG15": "22",
  "RA4/C1OUT/CPS6/T0CKI/SRQ/SEG4": "23",
  "RA5/AN4/C2OUT/CPS7/SRNQ/SS/VCAP/SEG5": "24",
  "SEG21/P3A/CCP3/AN5/RE0": "25",
  "SEG22/P3B/AN6/RE1": "26",
  "SEG23/CCP5/AN7/RE2": "27",
  "VDD_28": "28",
  "NC_29": "29",
  "VSS_30": "30",
  "VSS_31": "31",
  "RA7/OSC1/CLKIN/SEG2": "32",
  "RA6/OSC2/CLKOUT/VCAP/SEG1": "33",
  "P2B/T1CLKI/T1OSO/RC0": "34",
  "P2A/CCP2/T1OSI/RC1": "35",
  "SEG3/P1A/CCP1/RC2": "36",
  "SEG6/SCLK/SCL/RC3": "37",
  "COM3/CPS8/RD0": "38",
  "CCP4/CPS9/RD1": "39",
  "P2B/CPS10/RD2": "40",
  "SEG16/P2C/CPS11/RD3": "41",
  "SEG11/T1G/SDA/SDI/RC4": "42",
  "SEG10/SDO/RC5": "43",
  "SEG9/CK/TX/RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SEG8/DT/RX/RC7": "bidirectional", "SEG17/P2D/CPS12/RD4": "bidirectional", "SEG18/P1B/CPS13/RD5": "bidirectional", "SEG19/P1C/CPS14/RD6": "bidirectional", "SEG20/P1D/CPS15/RD7": "bidirectional", VSS_6: "bidirectional", VDD_7: "bidirectional", VDD_8: "bidirectional", "RB0/AN12/CPS0/SRI/INT/SEG0": "bidirectional", "RB1/AN10/C12IN3-/CPS1/VLCD1": "bidirectional", "RB2/AN8/CPS2/VLCD2": "bidirectional", "RB3/AN9/C12IN2-/CPS3/CCP2/P2A/VLCD3": "bidirectional", NC_13: "no_connect", "RB4/AN11/CPS4/COM0": "bidirectional", "RB5/AN13/CPS5/CCP3/P3A/T1G/COM1": "bidirectional", "RB6/ICSPCLK/ICDCLK/SEG14": "bidirectional", "RB7/ICSPDAT/ICDDAT/SEG13": "bidirectional", "RE3/MCLR/Vpp": "bidirectional", "RA0/AN0/C12IN0-/C2OUT/SRNQ/SS/VCAP/SEG12": "bidirectional", "RA1/AN1/C12IN1-/SEG7": "bidirectional", "RA2/AN2/C2IN+/Vref-/DACOUT/COM2": "bidirectional", "RA3/AN3/C1IN+/Vref+/SEG15": "bidirectional", "RA4/C1OUT/CPS6/T0CKI/SRQ/SEG4": "bidirectional", "RA5/AN4/C2OUT/CPS7/SRNQ/SS/VCAP/SEG5": "bidirectional", "SEG21/P3A/CCP3/AN5/RE0": "bidirectional", "SEG22/P3B/AN6/RE1": "bidirectional", "SEG23/CCP5/AN7/RE2": "bidirectional", VDD_28: "power_in", NC_29: "no_connect", VSS_30: "power_in", VSS_31: "power_in", "RA7/OSC1/CLKIN/SEG2": "bidirectional", "RA6/OSC2/CLKOUT/VCAP/SEG1": "bidirectional", "P2B/T1CLKI/T1OSO/RC0": "bidirectional", "P2A/CCP2/T1OSI/RC1": "bidirectional", "SEG3/P1A/CCP1/RC2": "bidirectional", "SEG6/SCLK/SCL/RC3": "bidirectional", "COM3/CPS8/RD0": "bidirectional", "CCP4/CPS9/RD1": "bidirectional", "P2B/CPS10/RD2": "bidirectional", "SEG16/P2C/CPS11/RD3": "bidirectional", "SEG11/T1G/SDA/SDI/RC4": "bidirectional", "SEG10/SDO/RC5": "bidirectional", "SEG9/CK/TX/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1937-IML";
  override referencePrefix = "U";
}

/**
 * PIC16F193XLF193X - Flash-Based, 8-Bit CMOS Microcontrollers, TQFP-44
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1937-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41364E.pdf
 */
export class PIC16F1937_IPT extends Component.withPins({
  "SEG8/DT/RX/RC7": "1",
  "SEG17/P2D/CPS12/RD4": "2",
  "SEG18/P1B/CPS13/RD5": "3",
  "SEG19/P1C/CPS14/RD6": "4",
  "SEG20/P1D/CPS15/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/CPS0/SRI/INT/SEG0": "8",
  "RB1/AN10/C12IN3-/CPS1/VLCD1": "9",
  "RB2/AN8/CPS2/VLCD2": "10",
  "RB3/AN9/C12IN2-/CPS3/CCP2/P2A/VLCD3": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4/AN11/CPS4/COM0": "14",
  "RB5/AN13/CPS5/CCP3/P3A/T1G/COM1": "15",
  "RB6/ICSPCLK/ICDCLK/SEG14": "16",
  "RB7/ICSPDAT/ICDDAT/SEG13": "17",
  "RE3/MCLR/Vpp": "18",
  "RA0/AN0/C12IN0-/C2OUT/SRNQ/SS/VCAP/SEG12": "19",
  "RA1/AN1/C12IN1-/SEG7": "20",
  "RA2/AN2/C2IN+/Vref-/DACOUT/COM2": "21",
  "RA3/AN3/C1IN+/Vref+/SEG15": "22",
  "RA4/C1OUT/CPS6/T0CKI/SRQ/SEG4": "23",
  "RA5/AN4/C2OUT/CPS7/SRNQ/SS/VCAP/SEG5": "24",
  "SEG21/P3A/CCP3/AN5/RE0": "25",
  "SEG22/P3B/AN6/RE1": "26",
  "SEG23/CCP5/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA7/OSC1/CLKIN/SEG2": "30",
  "RA6/OSC2/CLKOUT/VCAP/SEG1": "31",
  "P2B/T1CKI/T1OSO/RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "P2A/CCP2/T1OSI/RC1": "35",
  "SEG3/P1A/CCP1/RC2": "36",
  "SEG6/SCLK/SCL/RC3": "37",
  "COM3/CPS8/RD0": "38",
  "CCP4/CPS9/RD1": "39",
  "P2B/CPS10/RD2": "40",
  "SEG16/P2C/CPS11/RD3": "41",
  "SEG11/T1G/SDA/SDI/RC4": "42",
  "SEG10/SDO/RC5": "43",
  "SEG9/CK/TX/RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SEG8/DT/RX/RC7": "bidirectional", "SEG17/P2D/CPS12/RD4": "bidirectional", "SEG18/P1B/CPS13/RD5": "bidirectional", "SEG19/P1C/CPS14/RD6": "bidirectional", "SEG20/P1D/CPS15/RD7": "bidirectional", VSS_6: "bidirectional", VDD_7: "bidirectional", "RB0/AN12/CPS0/SRI/INT/SEG0": "bidirectional", "RB1/AN10/C12IN3-/CPS1/VLCD1": "bidirectional", "RB2/AN8/CPS2/VLCD2": "bidirectional", "RB3/AN9/C12IN2-/CPS3/CCP2/P2A/VLCD3": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", "RB4/AN11/CPS4/COM0": "bidirectional", "RB5/AN13/CPS5/CCP3/P3A/T1G/COM1": "bidirectional", "RB6/ICSPCLK/ICDCLK/SEG14": "bidirectional", "RB7/ICSPDAT/ICDDAT/SEG13": "bidirectional", "RE3/MCLR/Vpp": "bidirectional", "RA0/AN0/C12IN0-/C2OUT/SRNQ/SS/VCAP/SEG12": "bidirectional", "RA1/AN1/C12IN1-/SEG7": "bidirectional", "RA2/AN2/C2IN+/Vref-/DACOUT/COM2": "bidirectional", "RA3/AN3/C1IN+/Vref+/SEG15": "bidirectional", "RA4/C1OUT/CPS6/T0CKI/SRQ/SEG4": "bidirectional", "RA5/AN4/C2OUT/CPS7/SRNQ/SS/VCAP/SEG5": "bidirectional", "SEG21/P3A/CCP3/AN5/RE0": "bidirectional", "SEG22/P3B/AN6/RE1": "bidirectional", "SEG23/CCP5/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "RA7/OSC1/CLKIN/SEG2": "bidirectional", "RA6/OSC2/CLKOUT/VCAP/SEG1": "bidirectional", "P2B/T1CKI/T1OSO/RC0": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", "P2A/CCP2/T1OSI/RC1": "bidirectional", "SEG3/P1A/CCP1/RC2": "bidirectional", "SEG6/SCLK/SCL/RC3": "bidirectional", "COM3/CPS8/RD0": "bidirectional", "CCP4/CPS9/RD1": "bidirectional", "P2B/CPS10/RD2": "bidirectional", "SEG16/P2C/CPS11/RD3": "bidirectional", "SEG11/T1G/SDA/SDI/RC4": "bidirectional", "SEG10/SDO/RC5": "bidirectional", "SEG9/CK/TX/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1937-IPT";
  override referencePrefix = "U";
}

/**
 * PIC16F193XLF193X - Flash-Based, 8-Bit CMOS Microcontrollers, QFN-44
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1939-IML`. Reference prefix: `U`.
 * Footprint filters: MLF*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41364E.pdf
 */
export class PIC16F1939_IML extends Component.withPins({
  "SEG8/DT/RX/RC7": "1",
  "SEG17/P2D/CPS12/RD4": "2",
  "SEG18/P1B/CPS13/RD5": "3",
  "SEG19/P1C/CPS14/RD6": "4",
  "SEG20/P1D/CPS15/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "RB0/AN12/CPS0/SRI/INT/SEG0": "9",
  "RB1/AN10/C12IN3-/CPS1/VLCD1": "10",
  "RB2/AN8/CPS2/VLCD2": "11",
  "RB3/AN9/C12IN2-/CPS3/CCP2/P2A/VLCD3": "12",
  "NC_13": "13",
  "RB4/AN11/CPS4/COM0": "14",
  "RB5/AN13/CPS5/CCP3/P3A/T1G/COM1": "15",
  "RB6/ICSPCLK/ICDCLK/SEG14": "16",
  "RB7/ICSPDAT/ICDDAT/SEG13": "17",
  "RE3/MCLR/Vpp": "18",
  "RA0/AN0/C12IN0-/C2OUT/SRNQ/SS/VCAP/SEG12": "19",
  "RA1/AN1/C12IN1-/SEG7": "20",
  "RA2/AN2/C2IN+/Vref-/DACOUT/COM2": "21",
  "RA3/AN3/C1IN+/Vref+/SEG15": "22",
  "RA4/C1OUT/CPS6/T0CKI/SRQ/SEG4": "23",
  "RA5/AN4/C2OUT/CPS7/SRNQ/SS/VCAP/SEG5": "24",
  "SEG21/P3A/CCP3/AN5/RE0": "25",
  "SEG22/P3B/AN6/RE1": "26",
  "SEG23/CCP5/AN7/RE2": "27",
  "VDD_28": "28",
  "NC_29": "29",
  "VSS_30": "30",
  "VSS_31": "31",
  "RA7/OSC1/CLKIN/SEG2": "32",
  "RA6/OSC2/CLKOUT/VCAP/SEG1": "33",
  "P2B/T1CLKI/T1OSO/RC0": "34",
  "P2A/CCP2/T1OSI/RC1": "35",
  "SEG3/P1A/CCP1/RC2": "36",
  "SEG6/SCLK/SCL/RC3": "37",
  "COM3/CPS8/RD0": "38",
  "CCP4/CPS9/RD1": "39",
  "P2B/CPS10/RD2": "40",
  "SEG16/P2C/CPS11/RD3": "41",
  "SEG11/T1G/SDA/SDI/RC4": "42",
  "SEG10/SDO/RC5": "43",
  "SEG9/CK/TX/RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SEG8/DT/RX/RC7": "bidirectional", "SEG17/P2D/CPS12/RD4": "bidirectional", "SEG18/P1B/CPS13/RD5": "bidirectional", "SEG19/P1C/CPS14/RD6": "bidirectional", "SEG20/P1D/CPS15/RD7": "bidirectional", VSS_6: "bidirectional", VDD_7: "bidirectional", VDD_8: "bidirectional", "RB0/AN12/CPS0/SRI/INT/SEG0": "bidirectional", "RB1/AN10/C12IN3-/CPS1/VLCD1": "bidirectional", "RB2/AN8/CPS2/VLCD2": "bidirectional", "RB3/AN9/C12IN2-/CPS3/CCP2/P2A/VLCD3": "bidirectional", NC_13: "no_connect", "RB4/AN11/CPS4/COM0": "bidirectional", "RB5/AN13/CPS5/CCP3/P3A/T1G/COM1": "bidirectional", "RB6/ICSPCLK/ICDCLK/SEG14": "bidirectional", "RB7/ICSPDAT/ICDDAT/SEG13": "bidirectional", "RE3/MCLR/Vpp": "bidirectional", "RA0/AN0/C12IN0-/C2OUT/SRNQ/SS/VCAP/SEG12": "bidirectional", "RA1/AN1/C12IN1-/SEG7": "bidirectional", "RA2/AN2/C2IN+/Vref-/DACOUT/COM2": "bidirectional", "RA3/AN3/C1IN+/Vref+/SEG15": "bidirectional", "RA4/C1OUT/CPS6/T0CKI/SRQ/SEG4": "bidirectional", "RA5/AN4/C2OUT/CPS7/SRNQ/SS/VCAP/SEG5": "bidirectional", "SEG21/P3A/CCP3/AN5/RE0": "bidirectional", "SEG22/P3B/AN6/RE1": "bidirectional", "SEG23/CCP5/AN7/RE2": "bidirectional", VDD_28: "power_in", NC_29: "no_connect", VSS_30: "power_in", VSS_31: "power_in", "RA7/OSC1/CLKIN/SEG2": "bidirectional", "RA6/OSC2/CLKOUT/VCAP/SEG1": "bidirectional", "P2B/T1CLKI/T1OSO/RC0": "bidirectional", "P2A/CCP2/T1OSI/RC1": "bidirectional", "SEG3/P1A/CCP1/RC2": "bidirectional", "SEG6/SCLK/SCL/RC3": "bidirectional", "COM3/CPS8/RD0": "bidirectional", "CCP4/CPS9/RD1": "bidirectional", "P2B/CPS10/RD2": "bidirectional", "SEG16/P2C/CPS11/RD3": "bidirectional", "SEG11/T1G/SDA/SDI/RC4": "bidirectional", "SEG10/SDO/RC5": "bidirectional", "SEG9/CK/TX/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1939-IML";
  override referencePrefix = "U";
}

/**
 * PIC16F193XLF193X - Flash-Based, 8-Bit CMOS Microcontrollers, TQFP-44
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F1939-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41364E.pdf
 */
export class PIC16F1939_IPT extends Component.withPins({
  "SEG8/DT/RX/RC7": "1",
  "SEG17/P2D/CPS12/RD4": "2",
  "SEG18/P1B/CPS13/RD5": "3",
  "SEG19/P1C/CPS14/RD6": "4",
  "SEG20/P1D/CPS15/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/CPS0/SRI/INT/SEG0": "8",
  "RB1/AN10/C12IN3-/CPS1/VLCD1": "9",
  "RB2/AN8/CPS2/VLCD2": "10",
  "RB3/AN9/C12IN2-/CPS3/CCP2/P2A/VLCD3": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4/AN11/CPS4/COM0": "14",
  "RB5/AN13/CPS5/CCP3/P3A/T1G/COM1": "15",
  "RB6/ICSPCLK/ICDCLK/SEG14": "16",
  "RB7/ICSPDAT/ICDDAT/SEG13": "17",
  "RE3/MCLR/Vpp": "18",
  "RA0/AN0/C12IN0-/C2OUT/SRNQ/SS/VCAP/SEG12": "19",
  "RA1/AN1/C12IN1-/SEG7": "20",
  "RA2/AN2/C2IN+/Vref-/DACOUT/COM2": "21",
  "RA3/AN3/C1IN+/Vref+/SEG15": "22",
  "RA4/C1OUT/CPS6/T0CKI/SRQ/SEG4": "23",
  "RA5/AN4/C2OUT/CPS7/SRNQ/SS/VCAP/SEG5": "24",
  "SEG21/P3A/CCP3/AN5/RE0": "25",
  "SEG22/P3B/AN6/RE1": "26",
  "SEG23/CCP5/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA7/OSC1/CLKIN/SEG2": "30",
  "RA6/OSC2/CLKOUT/VCAP/SEG1": "31",
  "P2B/T1CKI/T1OSO/RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "P2A/CCP2/T1OSI/RC1": "35",
  "SEG3/P1A/CCP1/RC2": "36",
  "SEG6/SCLK/SCL/RC3": "37",
  "COM3/CPS8/RD0": "38",
  "CCP4/CPS9/RD1": "39",
  "P2B/CPS10/RD2": "40",
  "SEG16/P2C/CPS11/RD3": "41",
  "SEG11/T1G/SDA/SDI/RC4": "42",
  "SEG10/SDO/RC5": "43",
  "SEG9/CK/TX/RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SEG8/DT/RX/RC7": "bidirectional", "SEG17/P2D/CPS12/RD4": "bidirectional", "SEG18/P1B/CPS13/RD5": "bidirectional", "SEG19/P1C/CPS14/RD6": "bidirectional", "SEG20/P1D/CPS15/RD7": "bidirectional", VSS_6: "bidirectional", VDD_7: "bidirectional", "RB0/AN12/CPS0/SRI/INT/SEG0": "bidirectional", "RB1/AN10/C12IN3-/CPS1/VLCD1": "bidirectional", "RB2/AN8/CPS2/VLCD2": "bidirectional", "RB3/AN9/C12IN2-/CPS3/CCP2/P2A/VLCD3": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", "RB4/AN11/CPS4/COM0": "bidirectional", "RB5/AN13/CPS5/CCP3/P3A/T1G/COM1": "bidirectional", "RB6/ICSPCLK/ICDCLK/SEG14": "bidirectional", "RB7/ICSPDAT/ICDDAT/SEG13": "bidirectional", "RE3/MCLR/Vpp": "bidirectional", "RA0/AN0/C12IN0-/C2OUT/SRNQ/SS/VCAP/SEG12": "bidirectional", "RA1/AN1/C12IN1-/SEG7": "bidirectional", "RA2/AN2/C2IN+/Vref-/DACOUT/COM2": "bidirectional", "RA3/AN3/C1IN+/Vref+/SEG15": "bidirectional", "RA4/C1OUT/CPS6/T0CKI/SRQ/SEG4": "bidirectional", "RA5/AN4/C2OUT/CPS7/SRNQ/SS/VCAP/SEG5": "bidirectional", "SEG21/P3A/CCP3/AN5/RE0": "bidirectional", "SEG22/P3B/AN6/RE1": "bidirectional", "SEG23/CCP5/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "RA7/OSC1/CLKIN/SEG2": "bidirectional", "RA6/OSC2/CLKOUT/VCAP/SEG1": "bidirectional", "P2B/T1CKI/T1OSO/RC0": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", "P2A/CCP2/T1OSI/RC1": "bidirectional", "SEG3/P1A/CCP1/RC2": "bidirectional", "SEG6/SCLK/SCL/RC3": "bidirectional", "COM3/CPS8/RD0": "bidirectional", "CCP4/CPS9/RD1": "bidirectional", "P2B/CPS10/RD2": "bidirectional", "SEG16/P2C/CPS11/RD3": "bidirectional", "SEG11/T1G/SDA/SDI/RC4": "bidirectional", "SEG10/SDO/RC5": "bidirectional", "SEG9/CK/TX/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F1939-IPT";
  override referencePrefix = "U";
}

/**
 * PIC16F505, 1024W FLASH, 72B SRAM, QFN16
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F505-IMG`. Reference prefix: `U`.
 * Footprint filters: QFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41236E.pdf
 * Keywords: FLASH-Based 8bit Microcontroller.
 */
export class PIC16F505_IMG extends Component.withPins({
  "CLKIN/OSC1/RB5": "1",
  "CLKOUT/OSC2/RB4": "2",
  "Vpp/~{MCLR}/RB3": "3",
  "RC5/T0CKI": "4",
  "RC4": "5",
  "RC3": "6",
  "RC2": "7",
  "RC1": "8",
  "RC0": "9",
  "RB2": "10",
  "ICSPCLK/RB1": "11",
  "ICSPDAT/RB0": "12",
  "VSS": "13",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "CLKIN/OSC1/RB5": "bidirectional", "CLKOUT/OSC2/RB4": "bidirectional", "Vpp/~{MCLR}/RB3": "input", "RC5/T0CKI": "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RB2: "bidirectional", "ICSPCLK/RB1": "bidirectional", "ICSPDAT/RB0": "bidirectional", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F505-IMG";
  override referencePrefix = "U";
}

/**
 * 512W FLASH, 25B SRAM, DIP18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F54-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41213D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F54_IP extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "T0CKI": "3",
  "~{MCLR}/Vpp": "4",
  "VSS": "5",
  "RB0": "6",
  "RB1": "7",
  "RB2": "8",
  "RB3": "9",
  "RB4": "10",
  "RB5": "11",
  "ICSPCLK/RB6": "12",
  "ICSPDAT/RB7": "13",
  "VDD": "14",
  "OSC2/CLKO": "15",
  "OSC1/CLKI": "16",
  "RA0": "17",
  "RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", T0CKI: "input", "~{MCLR}/Vpp": "input", VSS: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", VDD: "power_in", "OSC2/CLKO": "output", "OSC1/CLKI": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F54-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F54, 512W FLASH, 25B SRAM, SO18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F54-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*, SOIC*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41213D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F54_ISO extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "T0CKI": "3",
  "~{MCLR}/Vpp": "4",
  "VSS": "5",
  "RB0": "6",
  "RB1": "7",
  "RB2": "8",
  "RB3": "9",
  "RB4": "10",
  "RB5": "11",
  "ICSPCLK/RB6": "12",
  "ICSPDAT/RB7": "13",
  "VDD": "14",
  "OSC2/CLKO": "15",
  "OSC1/CLKI": "16",
  "RA0": "17",
  "RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", T0CKI: "input", "~{MCLR}/Vpp": "input", VSS: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", VDD: "power_in", "OSC2/CLKO": "output", "OSC1/CLKI": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F54-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F54, 512W FLASH, 25B SRAM, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F54-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41213D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F54_ISS extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "T0CKI": "3",
  "~{MCLR}/Vpp": "4",
  "VSS_5": "5",
  "VSS_6": "6",
  "RB0": "7",
  "RB1": "8",
  "RB2": "9",
  "RB3": "10",
  "RB4": "11",
  "RB5": "12",
  "ICSPCLK/RB6": "13",
  "ICSPDAT/RB7": "14",
  "VDD_15": "15",
  "VDD_16": "16",
  "OSC2/CLKOUT": "17",
  "OSC1/CLKIN": "18",
  "RA0": "19",
  "RA1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", T0CKI: "input", "~{MCLR}/Vpp": "input", VSS_5: "power_in", VSS_6: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", VDD_15: "power_in", VDD_16: "power_in", "OSC2/CLKOUT": "output", "OSC1/CLKIN": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F54-ISS";
  override referencePrefix = "U";
}

/**
 * PIC16F610, 1024W FLASH, 64B SRAM, QFN-16
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F610-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41288F.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F610_IML extends Component.withPins({
  "RA5/T1CKI/OSC1/CLKIN": "1",
  "RA4/~{T1G}/OSC2/CLKOUT": "2",
  "RA3/~{MCLR}/Vpp": "3",
  "RC5": "4",
  "C2OUT/RC4": "5",
  "C12IN3-/RC3": "6",
  "C12IN2-/RC2": "7",
  "C12IN1-/RC1": "8",
  "C2IN+/RC0": "9",
  "RA2/T0CKI/INT/C1OUT": "10",
  "RA1/C12IN0-/ICSPCLK": "11",
  "RA0/C1IN+/ICSPDAT": "12",
  "VSS": "13",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA5/T1CKI/OSC1/CLKIN": "bidirectional", "RA4/~{T1G}/OSC2/CLKOUT": "bidirectional", "RA3/~{MCLR}/Vpp": "input", RC5: "bidirectional", "C2OUT/RC4": "bidirectional", "C12IN3-/RC3": "bidirectional", "C12IN2-/RC2": "bidirectional", "C12IN1-/RC1": "bidirectional", "C2IN+/RC0": "bidirectional", "RA2/T0CKI/INT/C1OUT": "bidirectional", "RA1/C12IN0-/ICSPCLK": "bidirectional", "RA0/C1IN+/ICSPDAT": "bidirectional", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F610-IML";
  override referencePrefix = "U";
}

/**
 * 1024W FLASH, 64B SRAM, PDIP-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F610-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41288F.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F610_IP extends Component.withPins({
  "VDD": "1",
  "RA5/T1CKI/OSC1/CLKIN": "2",
  "RA4/~{T1G}/OSC2/CLKOUT": "3",
  "RA3/~{MCLR}/Vpp": "4",
  "RC5": "5",
  "C2OUT/RC4": "6",
  "C12IN3-/RC3": "7",
  "C12IN2-/RC2": "8",
  "C12IN1-/RC1": "9",
  "C2IN+/RC0": "10",
  "RA2/T0CKI/INT/C1OUT": "11",
  "RA1/C12IN0-/ICSPCLK": "12",
  "RA0/C1IN+/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/T1CKI/OSC1/CLKIN": "bidirectional", "RA4/~{T1G}/OSC2/CLKOUT": "bidirectional", "RA3/~{MCLR}/Vpp": "input", RC5: "bidirectional", "C2OUT/RC4": "bidirectional", "C12IN3-/RC3": "bidirectional", "C12IN2-/RC2": "bidirectional", "C12IN1-/RC1": "bidirectional", "C2IN+/RC0": "bidirectional", "RA2/T0CKI/INT/C1OUT": "bidirectional", "RA1/C12IN0-/ICSPCLK": "bidirectional", "RA0/C1IN+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F610-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F616, 2048W FLASH, 128B SRAM, QFN-16
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F616-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41288F.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F616_IML extends Component.withPins({
  "RA5/T1CKI/OSC1/CLKIN": "1",
  "RA4/AN3/~{T1G}/OSC2/CLKOUT": "2",
  "RA3/~{MCLR}/Vpp": "3",
  "P1A/CCP1/RC5": "4",
  "P1B/C2OUT/RC4": "5",
  "P1C/C12IN3-/AN7/RC3": "6",
  "P1D/C12IN2-/AN6/RC2": "7",
  "C12IN1-/AN5/RC1": "8",
  "C2IN+/AN4/RC0": "9",
  "RA2/AN2/T0CKI/INT/C1OUT": "10",
  "RA1/AN1/C12IN0-/Vref/ICSPCLK": "11",
  "RA0/AN0/C1IN+/ICSPDAT": "12",
  "VSS": "13",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA5/T1CKI/OSC1/CLKIN": "bidirectional", "RA4/AN3/~{T1G}/OSC2/CLKOUT": "bidirectional", "RA3/~{MCLR}/Vpp": "input", "P1A/CCP1/RC5": "bidirectional", "P1B/C2OUT/RC4": "bidirectional", "P1C/C12IN3-/AN7/RC3": "bidirectional", "P1D/C12IN2-/AN6/RC2": "bidirectional", "C12IN1-/AN5/RC1": "bidirectional", "C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/T0CKI/INT/C1OUT": "bidirectional", "RA1/AN1/C12IN0-/Vref/ICSPCLK": "bidirectional", "RA0/AN0/C1IN+/ICSPDAT": "bidirectional", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F616-IML";
  override referencePrefix = "U";
}

/**
 * 2048W FLASH, 128B SRAM, PDIP-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F616-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41288F.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F616_IP extends Component.withPins({
  "VDD": "1",
  "RA5/T1CKI/OSC1/CLKIN": "2",
  "RA4/AN3/~{T1G}/OSC2/CLKOUT": "3",
  "RA3/~{MCLR}/Vpp": "4",
  "P1A/CCP1/RC5": "5",
  "P1B/C2OUT/RC4": "6",
  "P1C/C12IN3-/AN7/RC3": "7",
  "P1D/C12IN2-/AN6/RC2": "8",
  "C12IN1-/AN5/RC1": "9",
  "C2IN+/AN4/RC0": "10",
  "RA2/AN2/T0CKI/INT/C1OUT": "11",
  "RA1/AN1/C12IN0-/Vref/ICSPCLK": "12",
  "RA0/AN0/C1IN+/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/T1CKI/OSC1/CLKIN": "bidirectional", "RA4/AN3/~{T1G}/OSC2/CLKOUT": "bidirectional", "RA3/~{MCLR}/Vpp": "input", "P1A/CCP1/RC5": "bidirectional", "P1B/C2OUT/RC4": "bidirectional", "P1C/C12IN3-/AN7/RC3": "bidirectional", "P1D/C12IN2-/AN6/RC2": "bidirectional", "C12IN1-/AN5/RC1": "bidirectional", "C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/T0CKI/INT/C1OUT": "bidirectional", "RA1/AN1/C12IN0-/Vref/ICSPCLK": "bidirectional", "RA0/AN0/C1IN+/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F616-IP";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 224B SRAM, 128B EEPROM, DIP18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F627-xxIP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40300c.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F627_xxIP extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS": "5",
  "RB0/INT": "6",
  "RB1/RX/DT": "7",
  "RB2/TX/CK": "8",
  "RB3/CCP1": "9",
  "RB4/PGM": "10",
  "RB5": "11",
  "RB6/T1OSC0/T1CKI/PGC": "12",
  "RB7/T1OSI/PGD": "13",
  "VDD": "14",
  "CLKOUT/OSC2/RA6": "15",
  "CLKIN/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F627-xxIP";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 224B SRAM, 128B EEPROM, SO18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F627-xxISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40300c.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F627_xxISO extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS": "5",
  "RB0/INT": "6",
  "RB1/RX/DT": "7",
  "RB2/TX/CK": "8",
  "RB3/CCP1": "9",
  "RB4/PGM": "10",
  "RB5": "11",
  "RB6/T1OSC0/T1CKI/PGC": "12",
  "RB7/T1OSI/PGD": "13",
  "VDD": "14",
  "CLKOUT/OSC2/RA6": "15",
  "CLKIN/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F627-xxISO";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 224B SRAM, 128B EEPROM, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F627-xxISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40300c.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F627_xxISS extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS_5": "5",
  "VSS_6": "6",
  "RB0/INT": "7",
  "RB1/RX/DT": "8",
  "RB2/TX/CK": "9",
  "RB3/CCP1": "10",
  "RB4/PGM": "11",
  "RB5": "12",
  "RB6/T1OSC0/T1CKI/PGC": "13",
  "RB7/T1OSI/PGD": "14",
  "VDD_15": "15",
  "VDD_16": "16",
  "CLKOUT/OSC2/RA6": "17",
  "CLKIN/OSC1/RA7": "18",
  "AN0/RA0": "19",
  "AN1/RA1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS_5: "power_in", VSS_6: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD_15: "power_in", VDD_16: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F627-xxISS";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 224B SRAM, 128B EEPROM, DIP18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F627A-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40300c.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F627A_IP extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS": "5",
  "RB0/INT": "6",
  "RB1/RX/DT": "7",
  "RB2/TX/CK": "8",
  "RB3/CCP1": "9",
  "RB4/PGM": "10",
  "RB5": "11",
  "RB6/T1OSC0/T1CKI/PGC": "12",
  "RB7/T1OSI/PGD": "13",
  "VDD": "14",
  "CLKOUT/OSC2/RA6": "15",
  "CLKIN/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F627A-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F627A, 1024W Flash, 224B SRAM, 128B EEPROM, SO18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F627A-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40300c.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F627A_ISO extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS": "5",
  "RB0/INT": "6",
  "RB1/RX/DT": "7",
  "RB2/TX/CK": "8",
  "RB3/CCP1": "9",
  "RB4/PGM": "10",
  "RB5": "11",
  "RB6/T1OSC0/T1CKI/PGC": "12",
  "RB7/T1OSI/PGD": "13",
  "VDD": "14",
  "CLKOUT/OSC2/RA6": "15",
  "CLKIN/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F627A-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F627A, 1024W Flash, 224B SRAM, 128B EEPROM, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F627A-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40044G.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F627A_ISS extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS_5": "5",
  "VSS_6": "6",
  "RB0/INT": "7",
  "RB1/RX/DT": "8",
  "RB2/TX/CK": "9",
  "RB3/CCP1": "10",
  "RB4/PGM": "11",
  "RB5": "12",
  "RB6/T1OSC0/T1CKI/PGC": "13",
  "RB7/T1OSI/PGD": "14",
  "VDD_15": "15",
  "VDD_16": "16",
  "CLKOUT/OSC2/RA6": "17",
  "CLKIN/OSC1/RA7": "18",
  "AN0/RA0": "19",
  "AN1/RA1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS_5: "power_in", VSS_6: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD_15: "power_in", VDD_16: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F627A-ISS";
  override referencePrefix = "U";
}

/**
 * 2048W Flash, 224B SRAM, 128B EEPROM, DIP18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F628-xxIP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40300c.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F628_xxIP extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS": "5",
  "RB0/INT": "6",
  "RB1/RX/DT": "7",
  "RB2/TX/CK": "8",
  "RB3/CCP1": "9",
  "RB4/PGM": "10",
  "RB5": "11",
  "RB6/T1OSC0/T1CKI/PGC": "12",
  "RB7/T1OSI/PGD": "13",
  "VDD": "14",
  "CLKOUT/OSC2/RA6": "15",
  "CLKIN/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F628-xxIP";
  override referencePrefix = "U";
}

/**
 * 2048W Flash, 224B SRAM, 128B EEPROM, SO18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F628-xxISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40300c.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F628_xxISO extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS": "5",
  "RB0/INT": "6",
  "RB1/RX/DT": "7",
  "RB2/TX/CK": "8",
  "RB3/CCP1": "9",
  "RB4/PGM": "10",
  "RB5": "11",
  "RB6/T1OSC0/T1CKI/PGC": "12",
  "RB7/T1OSI/PGD": "13",
  "VDD": "14",
  "CLKOUT/OSC2/RA6": "15",
  "CLKIN/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F628-xxISO";
  override referencePrefix = "U";
}

/**
 * 2048W Flash, 224B SRAM, 128B EEPROM, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F628-xxISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40300c.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F628_xxISS extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS_5": "5",
  "VSS_6": "6",
  "RB0/INT": "7",
  "RB1/RX/DT": "8",
  "RB2/TX/CK": "9",
  "RB3/CCP1": "10",
  "RB4/PGM": "11",
  "RB5": "12",
  "RB6/T1OSC0/T1CKI/PGC": "13",
  "RB7/T1OSI/PGD": "14",
  "VDD_15": "15",
  "VDD_16": "16",
  "CLKOUT/OSC2/RA6": "17",
  "CLKIN/OSC1/RA7": "18",
  "AN0/RA0": "19",
  "AN1/RA1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS_5: "power_in", VSS_6: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD_15: "power_in", VDD_16: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F628-xxISS";
  override referencePrefix = "U";
}

/**
 * 2048W Flash, 224B SRAM, 128B EEPROM, DIP18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F628A-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40300c.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F628A_IP extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS": "5",
  "RB0/INT": "6",
  "RB1/RX/DT": "7",
  "RB2/TX/CK": "8",
  "RB3/CCP1": "9",
  "RB4/PGM": "10",
  "RB5": "11",
  "RB6/T1OSC0/T1CKI/PGC": "12",
  "RB7/T1OSI/PGD": "13",
  "VDD": "14",
  "CLKOUT/OSC2/RA6": "15",
  "CLKIN/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F628A-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F628A, 2048W Flash, 224B SRAM, 128B EEPROM, SO18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F628A-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40300c.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F628A_ISO extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS": "5",
  "RB0/INT": "6",
  "RB1/RX/DT": "7",
  "RB2/TX/CK": "8",
  "RB3/CCP1": "9",
  "RB4/PGM": "10",
  "RB5": "11",
  "RB6/T1OSC0/T1CKI/PGC": "12",
  "RB7/T1OSI/PGD": "13",
  "VDD": "14",
  "CLKOUT/OSC2/RA6": "15",
  "CLKIN/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F628A-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F628A, 2048W Flash, 224B SRAM, 128B EEPROM, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F628A-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40044G.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F628A_ISS extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS_5": "5",
  "VSS_6": "6",
  "RB0/INT": "7",
  "RB1/RX/DT": "8",
  "RB2/TX/CK": "9",
  "RB3/CCP1": "10",
  "RB4/PGM": "11",
  "RB5": "12",
  "RB6/T1OSC0/T1CKI/PGC": "13",
  "RB7/T1OSI/PGD": "14",
  "VDD_15": "15",
  "VDD_16": "16",
  "CLKOUT/OSC2/RA6": "17",
  "CLKIN/OSC1/RA7": "18",
  "AN0/RA0": "19",
  "AN1/RA1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS_5: "power_in", VSS_6: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD_15: "power_in", VDD_16: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F628A-ISS";
  override referencePrefix = "U";
}

/**
 * 1024W Flash, 64B SRAM, 128B EEPROM, DIP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F631-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F631_IP extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5": "5",
  "RC4/C2OUT": "6",
  "RC3/C12IN3-": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2/C12IN2-": "14",
  "RC1/C12IN1-": "15",
  "RC0/C2IN+": "16",
  "T0CKI/INT/C1OUT/RA2": "17",
  "C12IN0-/ICSPCLK/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", RC5: "bidirectional", "RC4/C2OUT": "bidirectional", "RC3/C12IN3-": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", "RC2/C12IN2-": "bidirectional", "RC1/C12IN1-": "bidirectional", "RC0/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/RA2": "bidirectional", "C12IN0-/ICSPCLK/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F631-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F631, 1024W Flash, 64B SRAM, 128B EEPROM, SO20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F631-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F631_ISO extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5": "5",
  "RC4/C2OUT": "6",
  "RC3/C12IN3-": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2/C12IN2-": "14",
  "RC1/C12IN1-": "15",
  "RC0/C2IN+": "16",
  "T0CKI/INT/C1OUT/RA2": "17",
  "C12IN0-/ICSPCLK/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", RC5: "bidirectional", "RC4/C2OUT": "bidirectional", "RC3/C12IN3-": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", "RC2/C12IN2-": "bidirectional", "RC1/C12IN1-": "bidirectional", "RC0/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/RA2": "bidirectional", "C12IN0-/ICSPCLK/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F631-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F631, 1024W Flash, 64B SRAM, 128B EEPROM, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F631-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F631_ISS extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5": "5",
  "RC4/C2OUT": "6",
  "RC3/C12IN3-": "7",
  "RC6": "8",
  "RC7": "9",
  "RB7": "10",
  "RB6": "11",
  "RB5": "12",
  "RB4": "13",
  "RC2/C12IN2-": "14",
  "RC1/C12IN1-": "15",
  "RC0/C2IN+": "16",
  "T0CKI/INT/C1OUT/RA2": "17",
  "C12IN0-/ICSPCLK/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", RC5: "bidirectional", "RC4/C2OUT": "bidirectional", "RC3/C12IN3-": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", "RC2/C12IN2-": "bidirectional", "RC1/C12IN1-": "bidirectional", "RC0/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/RA2": "bidirectional", "C12IN0-/ICSPCLK/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F631-ISS";
  override referencePrefix = "U";
}

/**
 * 4096W Flash, 256B SRAM, 256B EEPROM, DIP18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F648A-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40300c.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F648A_IP extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS": "5",
  "RB0/INT": "6",
  "RB1/RX/DT": "7",
  "RB2/TX/CK": "8",
  "RB3/CCP1": "9",
  "RB4/PGM": "10",
  "RB5": "11",
  "RB6/T1OSC0/T1CKI/PGC": "12",
  "RB7/T1OSI/PGD": "13",
  "VDD": "14",
  "CLKOUT/OSC2/RA6": "15",
  "CLKIN/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F648A-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F648A, 4096W Flash, 256B SRAM, 256B EEPROM, SO18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F648A-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40300c.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F648A_ISO extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS": "5",
  "RB0/INT": "6",
  "RB1/RX/DT": "7",
  "RB2/TX/CK": "8",
  "RB3/CCP1": "9",
  "RB4/PGM": "10",
  "RB5": "11",
  "RB6/T1OSC0/T1CKI/PGC": "12",
  "RB7/T1OSI/PGD": "13",
  "VDD": "14",
  "CLKOUT/OSC2/RA6": "15",
  "CLKIN/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F648A-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F648A, 4096W Flash, 256B SRAM, 256B EEPROM, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F648A-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40044G.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F648A_ISS extends Component.withPins({
  "Vref/AN2/RA2": "1",
  "CMP1/AN3/RA3": "2",
  "TOCKI/CMP2/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS_5": "5",
  "VSS_6": "6",
  "RB0/INT": "7",
  "RB1/RX/DT": "8",
  "RB2/TX/CK": "9",
  "RB3/CCP1": "10",
  "RB4/PGM": "11",
  "RB5": "12",
  "RB6/T1OSC0/T1CKI/PGC": "13",
  "RB7/T1OSI/PGD": "14",
  "VDD_15": "15",
  "VDD_16": "16",
  "CLKOUT/OSC2/RA6": "17",
  "CLKIN/OSC1/RA7": "18",
  "AN0/RA0": "19",
  "AN1/RA1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref/AN2/RA2": "bidirectional", "CMP1/AN3/RA3": "bidirectional", "TOCKI/CMP2/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS_5: "power_in", VSS_6: "power_in", "RB0/INT": "bidirectional", "RB1/RX/DT": "bidirectional", "RB2/TX/CK": "bidirectional", "RB3/CCP1": "bidirectional", "RB4/PGM": "bidirectional", RB5: "bidirectional", "RB6/T1OSC0/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD_15: "power_in", VDD_16: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F648A-ISS";
  override referencePrefix = "U";
}

/**
 * 2048W Flash, 128B SRAM, 128B EEPROM, DIP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F677-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F677_IP extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5": "5",
  "RC4/C2OUT": "6",
  "RC3/AN7/C12IN3-": "7",
  "RC6/AN8/~{SS}": "8",
  "RC7/AN9/SDO": "9",
  "RB7": "10",
  "SCL/SCK/RB6": "11",
  "AN11/RB5": "12",
  "SDA/SDI/AN10/RB4": "13",
  "RC2/AN6/C12IN2-": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "T0CKI/INT/C1OUT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", RC5: "bidirectional", "RC4/C2OUT": "bidirectional", "RC3/AN7/C12IN3-": "bidirectional", "RC6/AN8/~{SS}": "bidirectional", "RC7/AN9/SDO": "bidirectional", RB7: "bidirectional", "SCL/SCK/RB6": "bidirectional", "AN11/RB5": "bidirectional", "SDA/SDI/AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F677-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F677, 2048W Flash, 128B SRAM, 128B EEPROM, SO20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F677-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F677_ISO extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5": "5",
  "RC4/C2OUT": "6",
  "RC3/AN7/C12IN3-": "7",
  "RC6/AN8/~{SS}": "8",
  "RC7/AN9/SDO": "9",
  "RB7": "10",
  "SCL/SCK/RB6": "11",
  "AN11/RB5": "12",
  "SDA/SDI/AN10/RB4": "13",
  "RC2/AN6/C12IN2-": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "T0CKI/INT/C1OUT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", RC5: "bidirectional", "RC4/C2OUT": "bidirectional", "RC3/AN7/C12IN3-": "bidirectional", "RC6/AN8/~{SS}": "bidirectional", "RC7/AN9/SDO": "bidirectional", RB7: "bidirectional", "SCL/SCK/RB6": "bidirectional", "AN11/RB5": "bidirectional", "SDA/SDI/AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F677-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F677, 2048W Flash, 128B SRAM, 128B EEPROM, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F677-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F677_ISS extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5": "5",
  "RC4/C2OUT": "6",
  "RC3/AN7/C12IN3-": "7",
  "RC6/AN8/~{SS}": "8",
  "RC7/AN9/SDO": "9",
  "RB7": "10",
  "SCL/SCK/RB6": "11",
  "AN11/RB5": "12",
  "SDA/SDI/AN10/RB4": "13",
  "RC2/AN6/C12IN2-": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "T0CKI/INT/C1OUT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", RC5: "bidirectional", "RC4/C2OUT": "bidirectional", "RC3/AN7/C12IN3-": "bidirectional", "RC6/AN8/~{SS}": "bidirectional", "RC7/AN9/SDO": "bidirectional", RB7: "bidirectional", "SCL/SCK/RB6": "bidirectional", "AN11/RB5": "bidirectional", "SDA/SDI/AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F677-ISS";
  override referencePrefix = "U";
}

/**
 * PIC16F684 , 2048W FLASH, 128B SRAM, 256B EEPROM, QFN-16
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F684-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41202F-print.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F684_IML extends Component.withPins({
  "RA5/T1CKI/OSC1/CLKIN": "1",
  "RA4/AN3/~{T1G}/OSC2/CLKOUT": "2",
  "RA3/~{MCLR}/Vpp": "3",
  "P1A/CCP1/RC5": "4",
  "P1B/C2OUT/RC4": "5",
  "P1C/AN7/RC3": "6",
  "P1D/AN6/RC2": "7",
  "C2IN-/AN5/RC1": "8",
  "C2IN+/AN4/RC0": "9",
  "RA2/AN2/T0CKI/INT/C1OUT": "10",
  "RA1/AN1/C1IN-/Vref/ICSPCLK": "11",
  "RA0/AN0/C1IN+/ICSPDAT/ULPWU": "12",
  "VSS": "13",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA5/T1CKI/OSC1/CLKIN": "bidirectional", "RA4/AN3/~{T1G}/OSC2/CLKOUT": "bidirectional", "RA3/~{MCLR}/Vpp": "input", "P1A/CCP1/RC5": "bidirectional", "P1B/C2OUT/RC4": "bidirectional", "P1C/AN7/RC3": "bidirectional", "P1D/AN6/RC2": "bidirectional", "C2IN-/AN5/RC1": "bidirectional", "C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/T0CKI/INT/C1OUT": "bidirectional", "RA1/AN1/C1IN-/Vref/ICSPCLK": "bidirectional", "RA0/AN0/C1IN+/ICSPDAT/ULPWU": "bidirectional", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F684-IML";
  override referencePrefix = "U";
}

/**
 * 2048W FLASH, 128B SRAM, 256B EEPROM, PDIP-14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F684-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41202F-print.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 */
export class PIC16F684_IP extends Component.withPins({
  "VDD": "1",
  "RA5/T1CKI/OSC1/CLKIN": "2",
  "RA4/AN3/~{T1G}/OSC2/CLKOUT": "3",
  "RA3/~{MCLR}/Vpp": "4",
  "P1A/CCP1/RC5": "5",
  "P1B/C2OUT/RC4": "6",
  "P1C/AN7/RC3": "7",
  "P1D/AN6/RC2": "8",
  "C2IN-/AN5/RC1": "9",
  "C2IN+/AN4/RC0": "10",
  "RA2/AN2/T0CKI/INT/C1OUT": "11",
  "RA1/AN1/C1IN-/Vref/ICSPCLK": "12",
  "RA0/AN0/C1IN+/ICSPDAT/ULPWU": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/T1CKI/OSC1/CLKIN": "bidirectional", "RA4/AN3/~{T1G}/OSC2/CLKOUT": "bidirectional", "RA3/~{MCLR}/Vpp": "input", "P1A/CCP1/RC5": "bidirectional", "P1B/C2OUT/RC4": "bidirectional", "P1C/AN7/RC3": "bidirectional", "P1D/AN6/RC2": "bidirectional", "C2IN-/AN5/RC1": "bidirectional", "C2IN+/AN4/RC0": "bidirectional", "RA2/AN2/T0CKI/INT/C1OUT": "bidirectional", "RA1/AN1/C1IN-/Vref/ICSPCLK": "bidirectional", "RA0/AN0/C1IN+/ICSPDAT/ULPWU": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F684-IP";
  override referencePrefix = "U";
}

/**
 * 4096W Flash, 256B SRAM, 256B EEPROM, DIP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F685-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F685_IP extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5/CCP1/P1A": "5",
  "RC4/C2OUT/P1B": "6",
  "RC3/AN7/C12IN3-/P1C": "7",
  "RC6/AN8": "8",
  "RC7/AN9": "9",
  "RB7": "10",
  "RB6": "11",
  "AN11/RB5": "12",
  "AN10/RB4": "13",
  "RC2/AN6/C12IN2-/P1D": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "T0CKI/INT/C1OUT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", "RC5/CCP1/P1A": "bidirectional", "RC4/C2OUT/P1B": "bidirectional", "RC3/AN7/C12IN3-/P1C": "bidirectional", "RC6/AN8": "bidirectional", "RC7/AN9": "bidirectional", RB7: "bidirectional", RB6: "bidirectional", "AN11/RB5": "bidirectional", "AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-/P1D": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F685-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F685, 4096W Flash, 256B SRAM, 256B EEPROM, SO20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F685-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F685_ISO extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5/CCP1/P1A": "5",
  "RC4/C2OUT/P1B": "6",
  "RC3/AN7/C12IN3-/P1C": "7",
  "RC6/AN8": "8",
  "RC7/AN9": "9",
  "RB7": "10",
  "RB6": "11",
  "AN11/RB5": "12",
  "AN10/RB4": "13",
  "RC2/AN6/C12IN2-/P1D": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "T0CKI/INT/C1OUT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", "RC5/CCP1/P1A": "bidirectional", "RC4/C2OUT/P1B": "bidirectional", "RC3/AN7/C12IN3-/P1C": "bidirectional", "RC6/AN8": "bidirectional", "RC7/AN9": "bidirectional", RB7: "bidirectional", RB6: "bidirectional", "AN11/RB5": "bidirectional", "AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-/P1D": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F685-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F685, 4096W Flash, 256B SRAM, 256B EEPROM, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F685-ISS`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F685_ISS extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5/CCP1/P1A": "5",
  "RC4/C2OUT/P1B": "6",
  "RC3/AN7/C12IN3-/P1C": "7",
  "RC6/AN8": "8",
  "RC7/AN9": "9",
  "RB7": "10",
  "RB6": "11",
  "AN11/RB5": "12",
  "AN10/RB4": "13",
  "RC2/AN6/C12IN2-/P1D": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "T0CKI/INT/C1OUT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", "RC5/CCP1/P1A": "bidirectional", "RC4/C2OUT/P1B": "bidirectional", "RC3/AN7/C12IN3-/P1C": "bidirectional", "RC6/AN8": "bidirectional", "RC7/AN9": "bidirectional", RB7: "bidirectional", RB6: "bidirectional", "AN11/RB5": "bidirectional", "AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-/P1D": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F685-ISS";
  override referencePrefix = "U";
}

/**
 * 2048W Flash, 128B SRAM, 256B EEPROM, DIP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F687-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F687_IP extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5": "5",
  "RC4/C2OUT": "6",
  "RC3/AN7/C12IN3-": "7",
  "RC6/AN8/~{SS}": "8",
  "RC7/AN9/SDO": "9",
  "TX/CK/RB7": "10",
  "SCK/SCL/RB6": "11",
  "RX/DT/AN11/RB5": "12",
  "SDI/SDA/AN10/RB4": "13",
  "RC2/AN6/C12IN2-": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "T0CKI/INT/C1OUT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", RC5: "bidirectional", "RC4/C2OUT": "bidirectional", "RC3/AN7/C12IN3-": "bidirectional", "RC6/AN8/~{SS}": "bidirectional", "RC7/AN9/SDO": "bidirectional", "TX/CK/RB7": "bidirectional", "SCK/SCL/RB6": "bidirectional", "RX/DT/AN11/RB5": "bidirectional", "SDI/SDA/AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F687-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F687, 2048W Flash, 128B SRAM, 256B EEPROM, SO20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F687-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F687_ISO extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5": "5",
  "RC4/C2OUT": "6",
  "RC3/AN7/C12IN3-": "7",
  "RC6/AN8/~{SS}": "8",
  "RC7/AN9/SDO": "9",
  "TX/CK/RB7": "10",
  "SCK/SCL/RB6": "11",
  "RX/DT/AN11/RB5": "12",
  "SDI/SDA/AN10/RB4": "13",
  "RC2/AN6/C12IN2-": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "T0CKI/INT/C1OUT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", RC5: "bidirectional", "RC4/C2OUT": "bidirectional", "RC3/AN7/C12IN3-": "bidirectional", "RC6/AN8/~{SS}": "bidirectional", "RC7/AN9/SDO": "bidirectional", "TX/CK/RB7": "bidirectional", "SCK/SCL/RB6": "bidirectional", "RX/DT/AN11/RB5": "bidirectional", "SDI/SDA/AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F687-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F687, 2048W Flash, 128B SRAM, 256B EEPROM, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F687-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F687_ISS extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5": "5",
  "RC4/C2OUT": "6",
  "RC3/AN7/C12IN3-": "7",
  "RC6/AN8/~{SS}": "8",
  "RC7/AN9/SDO": "9",
  "TX/CK/RB7": "10",
  "SCK/SCL/RB6": "11",
  "RX/DT/AN11/RB5": "12",
  "SDI/SDA/AN10/RB4": "13",
  "RC2/AN6/C12IN2-": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "T0CKI/INT/C1OUT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", RC5: "bidirectional", "RC4/C2OUT": "bidirectional", "RC3/AN7/C12IN3-": "bidirectional", "RC6/AN8/~{SS}": "bidirectional", "RC7/AN9/SDO": "bidirectional", "TX/CK/RB7": "bidirectional", "SCK/SCL/RB6": "bidirectional", "RX/DT/AN11/RB5": "bidirectional", "SDI/SDA/AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F687-ISS";
  override referencePrefix = "U";
}

/**
 * 4096W Flash, 256B SRAM, 256B EEPROM, DIP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F689-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F689_IP extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5": "5",
  "RC4/C2OUT": "6",
  "RC3/AN7/C12IN3-": "7",
  "RC6/AN8/~{SS}": "8",
  "RC7/AN9/SDO": "9",
  "TX/CK/RB7": "10",
  "SCK/SCL/RB6": "11",
  "RX/DT/AN11/RB5": "12",
  "SDI/SDA/AN10/RB4": "13",
  "RC2/AN6/C12IN2-": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "T0CKI/INT/C1OUT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", RC5: "bidirectional", "RC4/C2OUT": "bidirectional", "RC3/AN7/C12IN3-": "bidirectional", "RC6/AN8/~{SS}": "bidirectional", "RC7/AN9/SDO": "bidirectional", "TX/CK/RB7": "bidirectional", "SCK/SCL/RB6": "bidirectional", "RX/DT/AN11/RB5": "bidirectional", "SDI/SDA/AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F689-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F689, 4096W Flash, 256B SRAM, 256B EEPROM, SO20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F689-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F689_ISO extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5": "5",
  "RC4/C2OUT": "6",
  "RC3/AN7/C12IN3-": "7",
  "RC6/AN8/~{SS}": "8",
  "RC7/AN9/SDO": "9",
  "TX/CK/RB7": "10",
  "SCK/SCL/RB6": "11",
  "RX/DT/AN11/RB5": "12",
  "SDI/SDA/AN10/RB4": "13",
  "RC2/AN6/C12IN2-": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "T0CKI/INT/C1OUT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", RC5: "bidirectional", "RC4/C2OUT": "bidirectional", "RC3/AN7/C12IN3-": "bidirectional", "RC6/AN8/~{SS}": "bidirectional", "RC7/AN9/SDO": "bidirectional", "TX/CK/RB7": "bidirectional", "SCK/SCL/RB6": "bidirectional", "RX/DT/AN11/RB5": "bidirectional", "SDI/SDA/AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F689-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F689, 4096W Flash, 256B SRAM, 256B EEPROM, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F689-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F689_ISS extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5": "5",
  "RC4/C2OUT": "6",
  "RC3/AN7/C12IN3-": "7",
  "RC6/AN8/~{SS}": "8",
  "RC7/AN9/SDO": "9",
  "TX/CK/RB7": "10",
  "SCK/SCL/RB6": "11",
  "RX/DT/AN11/RB5": "12",
  "SDI/SDA/AN10/RB4": "13",
  "RC2/AN6/C12IN2-": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "T0CKI/INT/C1OUT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", RC5: "bidirectional", "RC4/C2OUT": "bidirectional", "RC3/AN7/C12IN3-": "bidirectional", "RC6/AN8/~{SS}": "bidirectional", "RC7/AN9/SDO": "bidirectional", "TX/CK/RB7": "bidirectional", "SCK/SCL/RB6": "bidirectional", "RX/DT/AN11/RB5": "bidirectional", "SDI/SDA/AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "T0CKI/INT/C1OUT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F689-ISS";
  override referencePrefix = "U";
}

/**
 * 4096W Flash, 256B SRAM, 256B EEPROM, DIP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F690-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F690_IP extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5/CCP1/P1A": "5",
  "RC4/C2OUT/P1B": "6",
  "RC3/AN7/C12IN3-/P1C": "7",
  "RC6/AN8/~{SS}": "8",
  "RC7/AN9/SDO": "9",
  "TX/CK/RB7": "10",
  "SCK/SCL/RB6": "11",
  "RX/DT/AN11/RB5": "12",
  "SDI/SDA/AN10/RB4": "13",
  "RC2/AN6/C12IN2-/P1D": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "C1OUT/T0CKI/INT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", "RC5/CCP1/P1A": "bidirectional", "RC4/C2OUT/P1B": "bidirectional", "RC3/AN7/C12IN3-/P1C": "bidirectional", "RC6/AN8/~{SS}": "bidirectional", "RC7/AN9/SDO": "bidirectional", "TX/CK/RB7": "bidirectional", "SCK/SCL/RB6": "bidirectional", "RX/DT/AN11/RB5": "bidirectional", "SDI/SDA/AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-/P1D": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "C1OUT/T0CKI/INT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F690-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F690, 4096W Flash, 256B SRAM, 256B EEPROM, SO20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F690-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F690_ISO extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5/CCP1/P1A": "5",
  "RC4/C2OUT/P1B": "6",
  "RC3/AN7/C12IN3-/P1C": "7",
  "RC6/AN8/~{SS}": "8",
  "RC7/AN9/SDO": "9",
  "TX/CK/RB7": "10",
  "SCK/SCL/RB6": "11",
  "RX/DT/AN11/RB5": "12",
  "SDI/SDA/AN10/RB4": "13",
  "RC2/AN6/C12IN2-/P1D": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "C1OUT/T0CKI/INT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", "RC5/CCP1/P1A": "bidirectional", "RC4/C2OUT/P1B": "bidirectional", "RC3/AN7/C12IN3-/P1C": "bidirectional", "RC6/AN8/~{SS}": "bidirectional", "RC7/AN9/SDO": "bidirectional", "TX/CK/RB7": "bidirectional", "SCK/SCL/RB6": "bidirectional", "RX/DT/AN11/RB5": "bidirectional", "SDI/SDA/AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-/P1D": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "C1OUT/T0CKI/INT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F690-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F690, 4096W Flash, 256B SRAM, 256B EEPROM, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F690-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41262E.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller nanoWatt.
 */
export class PIC16F690_ISS extends Component.withPins({
  "VDD": "1",
  "T1CKI/OSC1/CLKIN/RA5": "2",
  "~{T1G}/OSC2/CLKOUT/AN3/RA4": "3",
  "Vpp/~{MCLR}/RA3": "4",
  "RC5/CCP1/P1A": "5",
  "RC4/C2OUT/P1B": "6",
  "RC3/AN7/C12IN3-/P1C": "7",
  "RC6/AN8/~{SS}": "8",
  "RC7/AN9/SDO": "9",
  "TX/CK/RB7": "10",
  "SCK/SCL/RB6": "11",
  "RX/DT/AN11/RB5": "12",
  "SDI/SDA/AN10/RB4": "13",
  "RC2/AN6/C12IN2-/P1D": "14",
  "RC1/AN5/C12IN1-": "15",
  "RC0/AN4/C2IN+": "16",
  "C1OUT/T0CKI/INT/AN2/RA2": "17",
  "C12IN0-/ICSPCLK/Vref/AN1/RA1": "18",
  "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "19",
  "VSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "T1CKI/OSC1/CLKIN/RA5": "bidirectional", "~{T1G}/OSC2/CLKOUT/AN3/RA4": "bidirectional", "Vpp/~{MCLR}/RA3": "input", "RC5/CCP1/P1A": "bidirectional", "RC4/C2OUT/P1B": "bidirectional", "RC3/AN7/C12IN3-/P1C": "bidirectional", "RC6/AN8/~{SS}": "bidirectional", "RC7/AN9/SDO": "bidirectional", "TX/CK/RB7": "bidirectional", "SCK/SCL/RB6": "bidirectional", "RX/DT/AN11/RB5": "bidirectional", "SDI/SDA/AN10/RB4": "bidirectional", "RC2/AN6/C12IN2-/P1D": "bidirectional", "RC1/AN5/C12IN1-": "bidirectional", "RC0/AN4/C2IN+": "bidirectional", "C1OUT/T0CKI/INT/AN2/RA2": "bidirectional", "C12IN0-/ICSPCLK/Vref/AN1/RA1": "bidirectional", "C1IN+/ICSPDAT/ULPWU/AN0/RA0": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F690-ISS";
  override referencePrefix = "U";
}

/**
 * 2048W Flash, 128B SRAM, DIP18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F716-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41206B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F716_IP extends Component.withPins({
  "AN2/RA2": "1",
  "Vref/AN3/RA3": "2",
  "T0CKI/RA4": "3",
  "~{MCLR}/Vpp": "4",
  "VSS": "5",
  "INT/~{ECCPAS2}/RB0": "6",
  "T1OSO/T1CKI/RB1": "7",
  "T1OSI/RB2": "8",
  "CCP1/P1A/RB3": "9",
  "~{ECCPAS0}/RB4": "10",
  "P1B/RB5": "11",
  "P1C/RB6": "12",
  "P1D/RB7": "13",
  "VDD": "14",
  "OSC2/CLKO": "15",
  "OSC1/CLKI": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AN2/RA2": "bidirectional", "Vref/AN3/RA3": "bidirectional", "T0CKI/RA4": "output", "~{MCLR}/Vpp": "input", VSS: "power_in", "INT/~{ECCPAS2}/RB0": "bidirectional", "T1OSO/T1CKI/RB1": "bidirectional", "T1OSI/RB2": "bidirectional", "CCP1/P1A/RB3": "bidirectional", "~{ECCPAS0}/RB4": "bidirectional", "P1B/RB5": "bidirectional", "P1C/RB6": "bidirectional", "P1D/RB7": "bidirectional", VDD: "power_in", "OSC2/CLKO": "output", "OSC1/CLKI": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F716-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F716, 2048W Flash, 128B SRAM, SO18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F716-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41206B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F716_ISO extends Component.withPins({
  "AN2/RA2": "1",
  "Vref/AN3/RA3": "2",
  "T0CKI/RA4": "3",
  "~{MCLR}/Vpp": "4",
  "VSS": "5",
  "INT/~{ECCPAS2}/RB0": "6",
  "T1OSO/T1CKI/RB1": "7",
  "T1OSI/RB2": "8",
  "CCP1/P1A/RB3": "9",
  "~{ECCPAS0}/RB4": "10",
  "P1B/RB5": "11",
  "P1C/RB6": "12",
  "P1D/RB7": "13",
  "VDD": "14",
  "OSC2/CLKO": "15",
  "OSC1/CLKI": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AN2/RA2": "bidirectional", "Vref/AN3/RA3": "bidirectional", "T0CKI/RA4": "output", "~{MCLR}/Vpp": "input", VSS: "power_in", "INT/~{ECCPAS2}/RB0": "bidirectional", "T1OSO/T1CKI/RB1": "bidirectional", "T1OSI/RB2": "bidirectional", "CCP1/P1A/RB3": "bidirectional", "~{ECCPAS0}/RB4": "bidirectional", "P1B/RB5": "bidirectional", "P1C/RB6": "bidirectional", "P1D/RB7": "bidirectional", VDD: "power_in", "OSC2/CLKO": "output", "OSC1/CLKI": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F716-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F716, 2048W Flash, 128B SRAM, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F716-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41206B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F716_ISS extends Component.withPins({
  "AN2/RA2": "1",
  "Vref/AN3/RA3": "2",
  "T0CKI/RA4": "3",
  "~{MCLR}/Vpp": "4",
  "VSS_5": "5",
  "VSS_6": "6",
  "INT/~{ECCPAS2}/RB0": "7",
  "T1OSO/T1CKI/RB1": "8",
  "T1OSI/RB2": "9",
  "CCP1/P1A/RB3": "10",
  "~{ECCPAS0}/RB4": "11",
  "P1B/RB5": "12",
  "P1C/RB6": "13",
  "P1D/RB7": "14",
  "VDD_15": "15",
  "VDD_16": "16",
  "OSC2/CLKO": "17",
  "OSC1/CLKI": "18",
  "AN0/RA0": "19",
  "AN1/RA1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AN2/RA2": "bidirectional", "Vref/AN3/RA3": "bidirectional", "T0CKI/RA4": "output", "~{MCLR}/Vpp": "input", VSS_5: "power_in", VSS_6: "power_in", "INT/~{ECCPAS2}/RB0": "bidirectional", "T1OSO/T1CKI/RB1": "bidirectional", "T1OSI/RB2": "bidirectional", "CCP1/P1A/RB3": "bidirectional", "~{ECCPAS0}/RB4": "bidirectional", "P1B/RB5": "bidirectional", "P1C/RB6": "bidirectional", "P1D/RB7": "bidirectional", VDD_15: "power_in", VDD_16: "power_in", "OSC2/CLKO": "output", "OSC1/CLKI": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F716-ISS";
  override referencePrefix = "U";
}

/**
 * PIC16F73, 4K Flash, 192B SRAM, ADC, PWM, MLF28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F73-IML`. Reference prefix: `U`.
 * Footprint filters: MLF*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30325b.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F73_IML extends Component.withPins({
  "AN2/RA2": "1",
  "Vref/AN3/RA3": "2",
  "T0CKI/RA4": "3",
  "~{SS}/AN4/RA5": "4",
  "VSS_5": "5",
  "OSC1/CLKIN": "6",
  "OSC2/CLKOUT": "7",
  "RC0/T10S0/T1CKI": "8",
  "RC1/CCP2/T1OSI": "9",
  "RC2/CCP1": "10",
  "RC3/SCK/SCL": "11",
  "RC4/SDI/SDA": "12",
  "RC5/SDO": "13",
  "RC6/TX/CK": "14",
  "RC7/RX/DT": "15",
  "VSS_16": "16",
  "VDD": "17",
  "INT/RB0": "18",
  "RB1": "19",
  "RB2": "20",
  "PGM/RB3": "21",
  "RB4": "22",
  "RB5": "23",
  "PGC/RB6": "24",
  "PGD/RB7": "25",
  "~{MCLR}/Vpp": "26",
  "AN0/RA0": "27",
  "AN1/RA1": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AN2/RA2": "bidirectional", "Vref/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "~{SS}/AN4/RA5": "bidirectional", VSS_5: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "RC0/T10S0/T1CKI": "bidirectional", "RC1/CCP2/T1OSI": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/TX/CK": "bidirectional", "RC7/RX/DT": "bidirectional", VSS_16: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F73-IML";
  override referencePrefix = "U";
}

/**
 * PIC16F73, 4K Flash, 192B SRAM, ADC, PWM, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F73-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30325b.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F73_ISO extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "AN2/RA2": "4",
  "Vref/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "~{SS}/AN4/RA5": "7",
  "VSS_8": "8",
  "OSC1/CLKIN": "9",
  "OSC2/CLKOUT": "10",
  "RC0/T10S0/T1CKI": "11",
  "RC1/CCP2/T1OSI": "12",
  "RC2/CCP1": "13",
  "RC3/SCK/SCL": "14",
  "RC4/SDI/SDA": "15",
  "RC5/SDO": "16",
  "RC6/TX/CK": "17",
  "RC7/RX/DT": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "PGM/RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "AN2/RA2": "bidirectional", "Vref/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "~{SS}/AN4/RA5": "bidirectional", VSS_8: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "RC0/T10S0/T1CKI": "bidirectional", "RC1/CCP2/T1OSI": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/TX/CK": "bidirectional", "RC7/RX/DT": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F73-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F73, 4K Flash, 192B SRAM, ADC, PWM, SDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F73-ISP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30325b.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F73_ISP extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "AN2/RA2": "4",
  "Vref/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "~{SS}/AN4/RA5": "7",
  "VSS_8": "8",
  "OSC1/CLKIN": "9",
  "OSC2/CLKOUT": "10",
  "RC0/T10S0/T1CKI": "11",
  "RC1/CCP2/T1OSI": "12",
  "RC2/CCP1": "13",
  "RC3/SCK/SCL": "14",
  "RC4/SDI/SDA": "15",
  "RC5/SDO": "16",
  "RC6/TX/CK": "17",
  "RC7/RX/DT": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "PGM/RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "AN2/RA2": "bidirectional", "Vref/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "~{SS}/AN4/RA5": "bidirectional", VSS_8: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "RC0/T10S0/T1CKI": "bidirectional", "RC1/CCP2/T1OSI": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/TX/CK": "bidirectional", "RC7/RX/DT": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F73-ISP";
  override referencePrefix = "U";
}

/**
 * PIC16F73, 4K Flash, 192B SRAM, ADC, PWM, SSOP28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F73-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30325b.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F73_ISS extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "AN2/RA2": "4",
  "Vref/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "~{SS}/AN4/RA5": "7",
  "VSS_8": "8",
  "OSC1/CLKIN": "9",
  "OSC2/CLKOUT": "10",
  "RC0/T10S0/T1CKI": "11",
  "RC1/CCP2/T1OSI": "12",
  "RC2/CCP1": "13",
  "RC3/SCK/SCL": "14",
  "RC4/SDI/SDA": "15",
  "RC5/SDO": "16",
  "RC6/TX/CK": "17",
  "RC7/RX/DT": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "PGM/RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "AN2/RA2": "bidirectional", "Vref/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "~{SS}/AN4/RA5": "bidirectional", VSS_8: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "RC0/T10S0/T1CKI": "bidirectional", "RC1/CCP2/T1OSI": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/TX/CK": "bidirectional", "RC7/RX/DT": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F73-ISS";
  override referencePrefix = "U";
}

/**
 * 4K Flash, 192B SRAM, ADC, PWM, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F74-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30325b.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F74_IP extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "CVref/Vref-/AN2/RA2": "4",
  "Vref+/AN3/RA3": "5",
  "T0CKI/C1OUT/RA4": "6",
  "~{SS}/C2OUT/AN4/RA5": "7",
  "RE0/~{RD}/AN5": "8",
  "RE1/~{WR}/AN6": "9",
  "RE2/~{CS}/AN7": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKIN": "13",
  "OSC2/CLKOUT": "14",
  "T10S0/T1CKI/RC0": "15",
  "CCP2/T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "SCK/SCL/RC3": "18",
  "RD0/PSP0": "19",
  "RD1/PSP1": "20",
  "RD2/PSP2": "21",
  "RD3/PSP3": "22",
  "SDI/SDA/RC4": "23",
  "SDO/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "RD4/PSP4": "27",
  "RD5/PSP5": "28",
  "RD6/PSP6": "29",
  "RD7/PSP7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "INT/RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "PGM/RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "PGC/RB6": "39",
  "PGD/RB7": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "CVref/Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKI/C1OUT/RA4": "bidirectional", "~{SS}/C2OUT/AN4/RA5": "bidirectional", "RE0/~{RD}/AN5": "bidirectional", "RE1/~{WR}/AN6": "bidirectional", "RE2/~{CS}/AN7": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "T10S0/T1CKI/RC0": "bidirectional", "CCP2/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "RD0/PSP0": "bidirectional", "RD1/PSP1": "bidirectional", "RD2/PSP2": "bidirectional", "RD3/PSP3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", "RD4/PSP4": "bidirectional", "RD5/PSP5": "bidirectional", "RD6/PSP6": "bidirectional", "RD7/PSP7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F74-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F76, 8K Flash, 368B SRAM, ADC, PWM, MLF28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F76-IML`. Reference prefix: `U`.
 * Footprint filters: MLF*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30325b.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F76_IML extends Component.withPins({
  "AN2/RA2": "1",
  "Vref/AN3/RA3": "2",
  "T0CKI/RA4": "3",
  "~{SS}/AN4/RA5": "4",
  "VSS_5": "5",
  "OSC1/CLKIN": "6",
  "OSC2/CLKOUT": "7",
  "RC0/T10S0/T1CKI": "8",
  "RC1/CCP2/T1OSI": "9",
  "RC2/CCP1": "10",
  "RC3/SCK/SCL": "11",
  "RC4/SDI/SDA": "12",
  "RC5/SDO": "13",
  "RC6/TX/CK": "14",
  "RC7/RX/DT": "15",
  "VSS_16": "16",
  "VDD": "17",
  "INT/RB0": "18",
  "RB1": "19",
  "RB2": "20",
  "PGM/RB3": "21",
  "RB4": "22",
  "RB5": "23",
  "PGC/RB6": "24",
  "PGD/RB7": "25",
  "~{MCLR}/Vpp": "26",
  "AN0/RA0": "27",
  "AN1/RA1": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AN2/RA2": "bidirectional", "Vref/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "~{SS}/AN4/RA5": "bidirectional", VSS_5: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "RC0/T10S0/T1CKI": "bidirectional", "RC1/CCP2/T1OSI": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/TX/CK": "bidirectional", "RC7/RX/DT": "bidirectional", VSS_16: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F76-IML";
  override referencePrefix = "U";
}

/**
 * PIC16F76, 8K Flash, 368B SRAM, ADC, PWM, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F76-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30325b.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F76_ISO extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "AN2/RA2": "4",
  "Vref/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "~{SS}/AN4/RA5": "7",
  "VSS_8": "8",
  "OSC1/CLKIN": "9",
  "OSC2/CLKOUT": "10",
  "RC0/T10S0/T1CKI": "11",
  "RC1/CCP2/T1OSI": "12",
  "RC2/CCP1": "13",
  "RC3/SCK/SCL": "14",
  "RC4/SDI/SDA": "15",
  "RC5/SDO": "16",
  "RC6/TX/CK": "17",
  "RC7/RX/DT": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "PGM/RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "AN2/RA2": "bidirectional", "Vref/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "~{SS}/AN4/RA5": "bidirectional", VSS_8: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "RC0/T10S0/T1CKI": "bidirectional", "RC1/CCP2/T1OSI": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/TX/CK": "bidirectional", "RC7/RX/DT": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F76-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F76, 8K Flash, 368B SRAM, ADC, PWM, SDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F76-ISP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30325b.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F76_ISP extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "AN2/RA2": "4",
  "Vref/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "~{SS}/AN4/RA5": "7",
  "VSS_8": "8",
  "OSC1/CLKIN": "9",
  "OSC2/CLKOUT": "10",
  "RC0/T10S0/T1CKI": "11",
  "RC1/CCP2/T1OSI": "12",
  "RC2/CCP1": "13",
  "RC3/SCK/SCL": "14",
  "RC4/SDI/SDA": "15",
  "RC5/SDO": "16",
  "RC6/TX/CK": "17",
  "RC7/RX/DT": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "PGM/RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "AN2/RA2": "bidirectional", "Vref/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "~{SS}/AN4/RA5": "bidirectional", VSS_8: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "RC0/T10S0/T1CKI": "bidirectional", "RC1/CCP2/T1OSI": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/TX/CK": "bidirectional", "RC7/RX/DT": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F76-ISP";
  override referencePrefix = "U";
}

/**
 * PIC16F76, 8K Flash, 368B SRAM, ADC, PWM, SSOP28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F76-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30325b.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F76_ISS extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "AN2/RA2": "4",
  "Vref/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "~{SS}/AN4/RA5": "7",
  "VSS_8": "8",
  "OSC1/CLKIN": "9",
  "OSC2/CLKOUT": "10",
  "RC0/T10S0/T1CKI": "11",
  "RC1/CCP2/T1OSI": "12",
  "RC2/CCP1": "13",
  "RC3/SCK/SCL": "14",
  "RC4/SDI/SDA": "15",
  "RC5/SDO": "16",
  "RC6/TX/CK": "17",
  "RC7/RX/DT": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "PGM/RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "AN2/RA2": "bidirectional", "Vref/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "~{SS}/AN4/RA5": "bidirectional", VSS_8: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "RC0/T10S0/T1CKI": "bidirectional", "RC1/CCP2/T1OSI": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/TX/CK": "bidirectional", "RC7/RX/DT": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F76-ISS";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 368B SRAM, ADC, PWM, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F77-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30325b.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F77_IP extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "CVref/Vref-/AN2/RA2": "4",
  "Vref+/AN3/RA3": "5",
  "T0CKI/C1OUT/RA4": "6",
  "~{SS}/C2OUT/AN4/RA5": "7",
  "RE0/~{RD}/AN5": "8",
  "RE1/~{WR}/AN6": "9",
  "RE2/~{CS}/AN7": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKIN": "13",
  "OSC2/CLKOUT": "14",
  "T10S0/T1CKI/RC0": "15",
  "CCP2/T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "SCK/SCL/RC3": "18",
  "RD0/PSP0": "19",
  "RD1/PSP1": "20",
  "RD2/PSP2": "21",
  "RD3/PSP3": "22",
  "SDI/SDA/RC4": "23",
  "SDO/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "RD4/PSP4": "27",
  "RD5/PSP5": "28",
  "RD6/PSP6": "29",
  "RD7/PSP7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "INT/RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "PGM/RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "PGC/RB6": "39",
  "PGD/RB7": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "CVref/Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKI/C1OUT/RA4": "bidirectional", "~{SS}/C2OUT/AN4/RA5": "bidirectional", "RE0/~{RD}/AN5": "bidirectional", "RE1/~{WR}/AN6": "bidirectional", "RE2/~{CS}/AN7": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "T10S0/T1CKI/RC0": "bidirectional", "CCP2/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "RD0/PSP0": "bidirectional", "RD1/PSP1": "bidirectional", "RD2/PSP2": "bidirectional", "RD3/PSP3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", "RD4/PSP4": "bidirectional", "RD5/PSP5": "bidirectional", "RD6/PSP6": "bidirectional", "RD7/PSP7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F77-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F818, 1792B Flash, 128B SRAM, 128B EEPROM, ADC, QFN28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F818-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39598F.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller nanoWatt.
 */
export class PIC16F818_IML extends Component.withPins({
  "Vpp/~{MCLR}/RA5": "1",
  "VSS_3": "3",
  "VSS_5": "5",
  "RB0/INT": "7",
  "RB1/SDI/SDA": "8",
  "RB2/SDO/CCP1": "9",
  "RB3/CCP1/PGM": "10",
  "RB4/SCK/SCL": "12",
  "RB5/~{SS}": "13",
  "RB6/T1OSO/T1CKI/PGC": "15",
  "RB7/T1OSI/PGD": "16",
  "VDD_17": "17",
  "VDD_19": "19",
  "CLKO/OSC2/RA6": "20",
  "CLKI/OSC1/RA7": "21",
  "AN0/RA0": "23",
  "AN1/RA1": "24",
  "Vref-/AN2/RA2": "26",
  "Vref+/AN3/RA3": "27",
  "T0CKL/AN4/RA4": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RA5": "input", VSS_3: "power_in", VSS_5: "power_in", "RB0/INT": "bidirectional", "RB1/SDI/SDA": "bidirectional", "RB2/SDO/CCP1": "bidirectional", "RB3/CCP1/PGM": "bidirectional", "RB4/SCK/SCL": "bidirectional", "RB5/~{SS}": "bidirectional", "RB6/T1OSO/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD_17: "power_in", VDD_19: "power_in", "CLKO/OSC2/RA6": "bidirectional", "CLKI/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKL/AN4/RA4": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F818-IML";
  override referencePrefix = "U";
}

/**
 * 1792B Flash, 128B SRAM, 128B EEPROM, ADC, DIP18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F818-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39598F.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller nanoWatt.
 */
export class PIC16F818_IP extends Component.withPins({
  "Vref-/AN2/RA2": "1",
  "Vref+/AN3/RA3": "2",
  "T0CKL/AN4/RA4": "3",
  "Vpp/~{MCLR}/RA5": "4",
  "VSS": "5",
  "RB0/INT": "6",
  "RB1/SDI/SDA": "7",
  "RB2/SDO/CCP1": "8",
  "RB3/CCP1/PGM": "9",
  "RB4/SCK/SCL": "10",
  "RB5/~{SS}": "11",
  "RB6/T1OSO/T1CKI/PGC": "12",
  "RB7/T1OSI/PGD": "13",
  "VDD": "14",
  "CLKO/OSC2/RA6": "15",
  "CLKI/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKL/AN4/RA4": "bidirectional", "Vpp/~{MCLR}/RA5": "input", VSS: "power_in", "RB0/INT": "bidirectional", "RB1/SDI/SDA": "bidirectional", "RB2/SDO/CCP1": "bidirectional", "RB3/CCP1/PGM": "bidirectional", "RB4/SCK/SCL": "bidirectional", "RB5/~{SS}": "bidirectional", "RB6/T1OSO/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD: "power_in", "CLKO/OSC2/RA6": "bidirectional", "CLKI/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F818-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F818, 1792B Flash, 128B SRAM, 128B EEPROM, ADC, SOIC18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F818-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39598F.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller nanoWatt.
 */
export class PIC16F818_ISO extends Component.withPins({
  "Vref-/AN2/RA2": "1",
  "Vref+/AN3/RA3": "2",
  "T0CKL/AN4/RA4": "3",
  "Vpp/~{MCLR}/RA5": "4",
  "VSS": "5",
  "RB0/INT": "6",
  "RB1/SDI/SDA": "7",
  "RB2/SDO/CCP1": "8",
  "RB3/CCP1/PGM": "9",
  "RB4/SCK/SCL": "10",
  "RB5/~{SS}": "11",
  "RB6/T1OSO/T1CKI/PGC": "12",
  "RB7/T1OSI/PGD": "13",
  "VDD": "14",
  "CLKO/OSC2/RA6": "15",
  "CLKI/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKL/AN4/RA4": "bidirectional", "Vpp/~{MCLR}/RA5": "input", VSS: "power_in", "RB0/INT": "bidirectional", "RB1/SDI/SDA": "bidirectional", "RB2/SDO/CCP1": "bidirectional", "RB3/CCP1/PGM": "bidirectional", "RB4/SCK/SCL": "bidirectional", "RB5/~{SS}": "bidirectional", "RB6/T1OSO/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD: "power_in", "CLKO/OSC2/RA6": "bidirectional", "CLKI/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F818-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F818, 1792B Flash, 128B SRAM, 128B EEPROM, ADC, SSSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F818-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39598F.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller nanoWatt.
 */
export class PIC16F818_ISS extends Component.withPins({
  "Vref-/AN2/RA2": "1",
  "Vref+/AN3/RA3": "2",
  "T0CKL/AN4/RA4": "3",
  "Vpp/~{MCLR}/RA5": "4",
  "VSS_5": "5",
  "VSS_6": "6",
  "RB0/INT": "7",
  "RB1/SDI/SDA": "8",
  "RB2/SDO/CCP1": "9",
  "RB3/CCP1/PGM": "10",
  "RB4/SCK/SCL": "11",
  "RB5/~{SS}": "12",
  "RB6/T1OSO/T1CKI/PGC": "13",
  "RB7/T1OSI/PGD": "14",
  "VDD_15": "15",
  "VDD_16": "16",
  "CLKO/OSC2/RA6": "17",
  "CLKI/OSC1/RA7": "18",
  "AN0/RA0": "19",
  "AN1/RA1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKL/AN4/RA4": "bidirectional", "Vpp/~{MCLR}/RA5": "input", VSS_5: "power_in", VSS_6: "power_in", "RB0/INT": "bidirectional", "RB1/SDI/SDA": "bidirectional", "RB2/SDO/CCP1": "bidirectional", "RB3/CCP1/PGM": "bidirectional", "RB4/SCK/SCL": "bidirectional", "RB5/~{SS}": "bidirectional", "RB6/T1OSO/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD_15: "power_in", VDD_16: "power_in", "CLKO/OSC2/RA6": "bidirectional", "CLKI/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F818-ISS";
  override referencePrefix = "U";
}

/**
 * PIC16F819, 3584B Flash, 256B SRAM, 256B EEPROM, ADC, QFN28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F819-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39598F.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller nanoWatt.
 */
export class PIC16F819_IML extends Component.withPins({
  "Vpp/~{MCLR}/RA5": "1",
  "VSS_3": "3",
  "VSS_5": "5",
  "RB0/INT": "7",
  "RB1/SDI/SDA": "8",
  "RB2/SDO/CCP1": "9",
  "RB3/CCP1/PGM": "10",
  "RB4/SCK/SCL": "12",
  "RB5/~{SS}": "13",
  "RB6/T1OSO/T1CKI/PGC": "15",
  "RB7/T1OSI/PGD": "16",
  "VDD_17": "17",
  "VDD_19": "19",
  "CLKO/OSC2/RA6": "20",
  "CLKI/OSC1/RA7": "21",
  "AN0/RA0": "23",
  "AN1/RA1": "24",
  "Vref-/AN2/RA2": "26",
  "Vref+/AN3/RA3": "27",
  "T0CKL/AN4/RA4": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RA5": "input", VSS_3: "power_in", VSS_5: "power_in", "RB0/INT": "bidirectional", "RB1/SDI/SDA": "bidirectional", "RB2/SDO/CCP1": "bidirectional", "RB3/CCP1/PGM": "bidirectional", "RB4/SCK/SCL": "bidirectional", "RB5/~{SS}": "bidirectional", "RB6/T1OSO/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD_17: "power_in", VDD_19: "power_in", "CLKO/OSC2/RA6": "bidirectional", "CLKI/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKL/AN4/RA4": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F819-IML";
  override referencePrefix = "U";
}

/**
 * 3584B Flash, 256B SRAM, 256B EEPROM, ADC, DIP18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F819-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39598F.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller nanoWatt.
 */
export class PIC16F819_IP extends Component.withPins({
  "Vref-/AN2/RA2": "1",
  "Vref+/AN3/RA3": "2",
  "T0CKL/AN4/RA4": "3",
  "Vpp/~{MCLR}/RA5": "4",
  "VSS": "5",
  "RB0/INT": "6",
  "RB1/SDI/SDA": "7",
  "RB2/SDO/CCP1": "8",
  "RB3/CCP1/PGM": "9",
  "RB4/SCK/SCL": "10",
  "RB5/~{SS}": "11",
  "RB6/T1OSO/T1CKI/PGC": "12",
  "RB7/T1OSI/PGD": "13",
  "VDD": "14",
  "CLKO/OSC2/RA6": "15",
  "CLKI/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKL/AN4/RA4": "bidirectional", "Vpp/~{MCLR}/RA5": "input", VSS: "power_in", "RB0/INT": "bidirectional", "RB1/SDI/SDA": "bidirectional", "RB2/SDO/CCP1": "bidirectional", "RB3/CCP1/PGM": "bidirectional", "RB4/SCK/SCL": "bidirectional", "RB5/~{SS}": "bidirectional", "RB6/T1OSO/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD: "power_in", "CLKO/OSC2/RA6": "bidirectional", "CLKI/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F819-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F819, 3584B Flash, 256B SRAM, 256B EEPROM, ADC, SOIC18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F819-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39598F.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller nanoWatt.
 */
export class PIC16F819_ISO extends Component.withPins({
  "Vref-/AN2/RA2": "1",
  "Vref+/AN3/RA3": "2",
  "T0CKL/AN4/RA4": "3",
  "Vpp/~{MCLR}/RA5": "4",
  "VSS": "5",
  "RB0/INT": "6",
  "RB1/SDI/SDA": "7",
  "RB2/SDO/CCP1": "8",
  "RB3/CCP1/PGM": "9",
  "RB4/SCK/SCL": "10",
  "RB5/~{SS}": "11",
  "RB6/T1OSO/T1CKI/PGC": "12",
  "RB7/T1OSI/PGD": "13",
  "VDD": "14",
  "CLKO/OSC2/RA6": "15",
  "CLKI/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKL/AN4/RA4": "bidirectional", "Vpp/~{MCLR}/RA5": "input", VSS: "power_in", "RB0/INT": "bidirectional", "RB1/SDI/SDA": "bidirectional", "RB2/SDO/CCP1": "bidirectional", "RB3/CCP1/PGM": "bidirectional", "RB4/SCK/SCL": "bidirectional", "RB5/~{SS}": "bidirectional", "RB6/T1OSO/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD: "power_in", "CLKO/OSC2/RA6": "bidirectional", "CLKI/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F819-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F819, 3584B Flash, 256B SRAM, 256B EEPROM, ADC, SSSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F819-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39598F.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller nanoWatt.
 */
export class PIC16F819_ISS extends Component.withPins({
  "Vref-/AN2/RA2": "1",
  "Vref+/AN3/RA3": "2",
  "T0CKL/AN4/RA4": "3",
  "Vpp/~{MCLR}/RA5": "4",
  "VSS_5": "5",
  "VSS_6": "6",
  "RB0/INT": "7",
  "RB1/SDI/SDA": "8",
  "RB2/SDO/CCP1": "9",
  "RB3/CCP1/PGM": "10",
  "RB4/SCK/SCL": "11",
  "RB5/~{SS}": "12",
  "RB6/T1OSO/T1CKI/PGC": "13",
  "RB7/T1OSI/PGD": "14",
  "VDD_15": "15",
  "VDD_16": "16",
  "CLKO/OSC2/RA6": "17",
  "CLKI/OSC1/RA7": "18",
  "AN0/RA0": "19",
  "AN1/RA1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKL/AN4/RA4": "bidirectional", "Vpp/~{MCLR}/RA5": "input", VSS_5: "power_in", VSS_6: "power_in", "RB0/INT": "bidirectional", "RB1/SDI/SDA": "bidirectional", "RB2/SDO/CCP1": "bidirectional", "RB3/CCP1/PGM": "bidirectional", "RB4/SCK/SCL": "bidirectional", "RB5/~{SS}": "bidirectional", "RB6/T1OSO/T1CKI/PGC": "bidirectional", "RB7/T1OSI/PGD": "bidirectional", VDD_15: "power_in", VDD_16: "power_in", "CLKO/OSC2/RA6": "bidirectional", "CLKI/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F819-ISS";
  override referencePrefix = "U";
}

/**
 * PIC16F83, 512B Flash, 36B SRAM, 64B EEPROM, DIP18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F83-XXP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30430c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F83_XXP extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "TOCKI/RA4": "3",
  "~{MCLR}": "4",
  "VSS": "5",
  "INT/RB0": "6",
  "RB1": "7",
  "RB2": "8",
  "RB3": "9",
  "RB4": "10",
  "RB5": "11",
  "RB6": "12",
  "RB7": "13",
  "VDD": "14",
  "OSC2/CLKOUT": "15",
  "OSC1/CLKIN": "16",
  "RA0": "17",
  "RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", "TOCKI/RA4": "bidirectional", "~{MCLR}": "input", VSS: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", VDD: "power_in", "OSC2/CLKOUT": "output", "OSC1/CLKIN": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F83-XXP";
  override referencePrefix = "U";
}

/**
 * PIC16F83, 512B Flash, 36B SRAM, 64B EEPROM, SOIC18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F83-XXSO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30430c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F83_XXSO extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "TOCKI/RA4": "3",
  "~{MCLR}": "4",
  "VSS": "5",
  "INT/RB0": "6",
  "RB1": "7",
  "RB2": "8",
  "RB3": "9",
  "RB4": "10",
  "RB5": "11",
  "RB6": "12",
  "RB7": "13",
  "VDD": "14",
  "OSC2/CLKOUT": "15",
  "OSC1/CLKIN": "16",
  "RA0": "17",
  "RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", "TOCKI/RA4": "bidirectional", "~{MCLR}": "input", VSS: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", VDD: "power_in", "OSC2/CLKOUT": "output", "OSC1/CLKIN": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F83-XXSO";
  override referencePrefix = "U";
}

/**
 * PIC16F84, 1K Flash, 68B SRAM, 64B EEPROM, DIP18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F84-XXP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30430c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F84_XXP extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "TOCKI/RA4": "3",
  "~{MCLR}": "4",
  "VSS": "5",
  "INT/RB0": "6",
  "RB1": "7",
  "RB2": "8",
  "RB3": "9",
  "RB4": "10",
  "RB5": "11",
  "RB6": "12",
  "RB7": "13",
  "VDD": "14",
  "OSC2/CLKOUT": "15",
  "OSC1/CLKIN": "16",
  "RA0": "17",
  "RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", "TOCKI/RA4": "bidirectional", "~{MCLR}": "input", VSS: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", VDD: "power_in", "OSC2/CLKOUT": "output", "OSC1/CLKIN": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F84-XXP";
  override referencePrefix = "U";
}

/**
 * PIC16F84, 1KB Flash, 68B SRAM, 64B EEPROM, SOIC18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F84-XXSO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30430c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F84_XXSO extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "TOCKI/RA4": "3",
  "~{MCLR}": "4",
  "VSS": "5",
  "INT/RB0": "6",
  "RB1": "7",
  "RB2": "8",
  "RB3": "9",
  "RB4": "10",
  "RB5": "11",
  "RB6": "12",
  "RB7": "13",
  "VDD": "14",
  "OSC2/CLKOUT": "15",
  "OSC1/CLKIN": "16",
  "RA0": "17",
  "RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", "TOCKI/RA4": "bidirectional", "~{MCLR}": "input", VSS: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", VDD: "power_in", "OSC2/CLKOUT": "output", "OSC1/CLKIN": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F84-XXSO";
  override referencePrefix = "U";
}

/**
 * PIC16F84A, 1K Flash, 68B SRAM, 64B EEPROM, DIP18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F84A-XXP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/35007b.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F84A_XXP extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "TOCKI/RA4": "3",
  "~{MCLR}": "4",
  "VSS": "5",
  "INT/RB0": "6",
  "RB1": "7",
  "RB2": "8",
  "RB3": "9",
  "RB4": "10",
  "RB5": "11",
  "RB6": "12",
  "RB7": "13",
  "VDD": "14",
  "OSC2/CLKOUT": "15",
  "OSC1/CLKIN": "16",
  "RA0": "17",
  "RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", "TOCKI/RA4": "bidirectional", "~{MCLR}": "input", VSS: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", VDD: "power_in", "OSC2/CLKOUT": "output", "OSC1/CLKIN": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F84A-XXP";
  override referencePrefix = "U";
}

/**
 * PIC16F84A, 1KB Flash, 68B SRAM, 64B EEPROM, SOIC18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F84A-XXSO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/35007b.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F84A_XXSO extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "TOCKI/RA4": "3",
  "~{MCLR}": "4",
  "VSS": "5",
  "INT/RB0": "6",
  "RB1": "7",
  "RB2": "8",
  "RB3": "9",
  "RB4": "10",
  "RB5": "11",
  "RB6": "12",
  "RB7": "13",
  "VDD": "14",
  "OSC2/CLKOUT": "15",
  "OSC1/CLKIN": "16",
  "RA0": "17",
  "RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", "TOCKI/RA4": "bidirectional", "~{MCLR}": "input", VSS: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", VDD: "power_in", "OSC2/CLKOUT": "output", "OSC1/CLKIN": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F84A-XXSO";
  override referencePrefix = "U";
}

/**
 * PIC16F84A, 1KB Flash, 68B SRAM, 64B EEPROM, SSOP18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F84A-XXSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/35007b.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 */
export class PIC16F84A_XXSS extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "T0CKI/RA4": "3",
  "~{MCLR}": "4",
  "VSS_5": "5",
  "VSS_6": "6",
  "INT/RB0": "7",
  "RB1": "8",
  "RB2": "9",
  "RB3": "10",
  "RB4": "11",
  "RB5": "12",
  "RB6": "13",
  "RB7": "14",
  "VDD_15": "15",
  "VDD_16": "16",
  "OSC2/CLKOUT": "17",
  "OSC1/CLKIN": "18",
  "RA0": "19",
  "RA1": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", "T0CKI/RA4": "bidirectional", "~{MCLR}": "input", VSS_5: "power_in", VSS_6: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", VDD_15: "power_in", VDD_16: "power_in", "OSC2/CLKOUT": "output", "OSC1/CLKIN": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F84A-XXSS";
  override referencePrefix = "U";
}

/**
 * PIC16F870, 2K Flash, 128B SRAM, 64B EEPROM, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F870-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30569b.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F870_ISO extends Component.withPins({
  "~{MCLR}/Vpp/THV": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "Vref-/AN2/RA2": "4",
  "Vref+/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "AN4/RA5": "7",
  "VSS_8": "8",
  "OSC1/CLKIN": "9",
  "OSC2/CLKOUT": "10",
  "RC0/T10S0/T1CKI": "11",
  "RC1/T1OSI": "12",
  "RC2/CCP1": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6/TX/CK": "17",
  "RC7/RX/DT": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "PGM/RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp/THV": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "AN4/RA5": "bidirectional", VSS_8: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "RC0/T10S0/T1CKI": "bidirectional", "RC1/T1OSI": "bidirectional", "RC2/CCP1": "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", "RC6/TX/CK": "bidirectional", "RC7/RX/DT": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F870-ISO";
  override referencePrefix = "U";
}

/**
 * PIC16F870, 2K Flash, 128B SRAM, 64B EEPROM, DIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F870-ISP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30569b.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F870_ISP extends Component.withPins({
  "~{MCLR}/Vpp/THV": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "Vref-/AN2/RA2": "4",
  "Vref+/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "AN4/RA5": "7",
  "VSS_8": "8",
  "OSC1/CLKIN": "9",
  "OSC2/CLKOUT": "10",
  "RC0/T10S0/T1CKI": "11",
  "RC1/T1OSI": "12",
  "RC2/CCP1": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6/TX/CK": "17",
  "RC7/RX/DT": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "PGM/RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp/THV": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "AN4/RA5": "bidirectional", VSS_8: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "RC0/T10S0/T1CKI": "bidirectional", "RC1/T1OSI": "bidirectional", "RC2/CCP1": "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", "RC6/TX/CK": "bidirectional", "RC7/RX/DT": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F870-ISP";
  override referencePrefix = "U";
}

/**
 * PIC16F870, 2K Flash, 128B SRAM, 64B EEPROM, SSOP28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F870-ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30569b.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F870_ISS extends Component.withPins({
  "~{MCLR}/Vpp/THV": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "Vref-/AN2/RA2": "4",
  "Vref+/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "AN4/RA5": "7",
  "VSS_8": "8",
  "OSC1/CLKIN": "9",
  "OSC2/CLKOUT": "10",
  "RC0/T10S0/T1CKI": "11",
  "RC1/T1OSI": "12",
  "RC2/CCP1": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6/TX/CK": "17",
  "RC7/RX/DT": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "PGM/RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp/THV": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "AN4/RA5": "bidirectional", VSS_8: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "RC0/T10S0/T1CKI": "bidirectional", "RC1/T1OSI": "bidirectional", "RC2/CCP1": "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", "RC6/TX/CK": "bidirectional", "RC7/RX/DT": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F870-ISS";
  override referencePrefix = "U";
}

/**
 * 2K Flash, 128B SRAM, 64B EEPROM, PLCC44
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F871-IL`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30569b.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F871_IL extends Component.withPins({
  "~{MCLR}/Vpp/THV": "2",
  "AN0/RA0": "3",
  "AN1/RA1": "4",
  "Vref-/AN2/RA2": "5",
  "Vref+/AN3/RA3": "6",
  "T0CKI/RA4": "7",
  "AN4/RA5": "8",
  "RE0/~{RD}/AN5": "9",
  "RE1/~{WR}/AN6": "10",
  "RE2/~{CS}/AN7": "11",
  "VDD_12": "12",
  "VSS_13": "13",
  "OSC1/CLKIN": "14",
  "OSC2/CLKOUT": "15",
  "T10S0/T1CKI/RC0": "16",
  "T1OSI/RC1": "18",
  "CCP1/RC2": "19",
  "RC3": "20",
  "RD0/PSP0": "21",
  "RD1/PSP1": "22",
  "RD2/PSP2": "23",
  "RD3/PSP3": "24",
  "RC4": "25",
  "RC5": "26",
  "TX/CK/RC6": "27",
  "RX/DT/RC7": "29",
  "RD4/PSP4": "30",
  "RD5/PSP5": "31",
  "RD6/PSP6": "32",
  "RD7/PSP7": "33",
  "VSS_34": "34",
  "VDD_35": "35",
  "INT/RB0": "36",
  "RB1": "37",
  "RB2": "38",
  "PGM/RB3": "39",
  "RB4": "41",
  "RB5": "42",
  "PGC/RB6": "43",
  "PGD/RB7": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp/THV": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "AN4/RA5": "bidirectional", "RE0/~{RD}/AN5": "bidirectional", "RE1/~{WR}/AN6": "bidirectional", "RE2/~{CS}/AN7": "bidirectional", VDD_12: "power_in", VSS_13: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "T10S0/T1CKI/RC0": "bidirectional", "T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", RC3: "bidirectional", "RD0/PSP0": "bidirectional", "RD1/PSP1": "bidirectional", "RD2/PSP2": "bidirectional", "RD3/PSP3": "bidirectional", RC4: "bidirectional", RC5: "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", "RD4/PSP4": "bidirectional", "RD5/PSP5": "bidirectional", "RD6/PSP6": "bidirectional", "RD7/PSP7": "bidirectional", VSS_34: "power_in", VDD_35: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F871-IL";
  override referencePrefix = "U";
}

/**
 * 2K Flash, 128B SRAM, 64B EEPROM, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F871-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30569b.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F871_IP extends Component.withPins({
  "~{MCLR}/Vpp/THV": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "Vref-/AN2/RA2": "4",
  "Vref+/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "AN4/RA5": "7",
  "RE0/~{RD}/AN5": "8",
  "RE1/~{WR}/AN6": "9",
  "RE2/~{CS}/AN7": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKIN": "13",
  "OSC2/CLKOUT": "14",
  "T10S0/T1CKI/RC0": "15",
  "T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "RC3": "18",
  "RD0/PSP0": "19",
  "RD1/PSP1": "20",
  "RD2/PSP2": "21",
  "RD3/PSP3": "22",
  "RC4": "23",
  "RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "RD4/PSP4": "27",
  "RD5/PSP5": "28",
  "RD6/PSP6": "29",
  "RD7/PSP7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "INT/RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "PGM/RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "PGC/RB6": "39",
  "PGD/RB7": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp/THV": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "AN4/RA5": "bidirectional", "RE0/~{RD}/AN5": "bidirectional", "RE1/~{WR}/AN6": "bidirectional", "RE2/~{CS}/AN7": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "T10S0/T1CKI/RC0": "bidirectional", "T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", RC3: "bidirectional", "RD0/PSP0": "bidirectional", "RD1/PSP1": "bidirectional", "RD2/PSP2": "bidirectional", "RD3/PSP3": "bidirectional", RC4: "bidirectional", RC5: "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", "RD4/PSP4": "bidirectional", "RD5/PSP5": "bidirectional", "RD6/PSP6": "bidirectional", "RD7/PSP7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F871-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F871, 2K Flash, 128B SRAM, 64B EEPROM, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F871-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30569b.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F871_IPT extends Component.withPins({
  "PGD/RB7": "1",
  "RD4/PSP4": "2",
  "RD5/PSP5": "3",
  "RD6/PSP6": "4",
  "RD7/PSP7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "INT/RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "PGM/RB3": "11",
  "~{MCLR}/Vpp/THV": "18",
  "AN0/RA0": "19",
  "AN1/RA1": "20",
  "Vref-/AN2/RA2": "21",
  "Vref+/AN3/RA3": "22",
  "T0CKI/RA4": "23",
  "AN4/RA5": "24",
  "RE0/~{RD}/AN5": "25",
  "RE1/~{WR}/AN6": "26",
  "RE2/~{CS}/AN7": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKIN": "30",
  "OSC2/CLKOUT": "31",
  "T10S0/T1CKI/RC0": "32",
  "T1OSI/RC1": "35",
  "CCP1/RC2": "36",
  "RC3": "37",
  "RD0/PSP0": "38",
  "RD1/PSP1": "39",
  "RD2/PSP2": "40",
  "RD3/PSP3": "41",
  "RB4": "42",
  "RB5": "43",
  "PGC/RB6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PGD/RB7": "bidirectional", "RD4/PSP4": "bidirectional", "RD5/PSP5": "bidirectional", "RD6/PSP6": "bidirectional", "RD7/PSP7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", "~{MCLR}/Vpp/THV": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "AN4/RA5": "bidirectional", "RE0/~{RD}/AN5": "bidirectional", "RE1/~{WR}/AN6": "bidirectional", "RE2/~{CS}/AN7": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "output", "T10S0/T1CKI/RC0": "bidirectional", "T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", RC3: "bidirectional", "RD0/PSP0": "bidirectional", "RD1/PSP1": "bidirectional", "RD2/PSP2": "bidirectional", "RD3/PSP3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F871-IPT";
  override referencePrefix = "U";
}

/**
 * PIC16F873, 4K Flash, 192B SRAM, 128B EEPROM, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F873-XXISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30292C.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F873_XXISO extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "Vref-/AN2/RA2": "4",
  "Vref+/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "~{SS}/AN4/RA5": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "OSC2/CLKO": "10",
  "RC0/T1OSO/T1CKI": "11",
  "RC1/T1OSI/CCP2": "12",
  "RC2/CCP1": "13",
  "RC3/SCK/SCL": "14",
  "RC4/SDI/SDA": "15",
  "RC5/SDO": "16",
  "RC6/CK/TX": "17",
  "RC7/DT/RX": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "PGM/RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "~{SS}/AN4/RA5": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "OSC2/CLKO": "output", "RC0/T1OSO/T1CKI": "bidirectional", "RC1/T1OSI/CCP2": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/CK/TX": "bidirectional", "RC7/DT/RX": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F873-XXISO";
  override referencePrefix = "U";
}

/**
 * PIC16F873,  4K Flash, 192B SRAM, 128B EEPROM, SDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F873-XXISP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30292C.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F873_XXISP extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "Vref-/AN2/RA2": "4",
  "Vref+/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "~{SS}/AN4/RA5": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "OSC2/CLKO": "10",
  "RC0/T1OSO/T1CKI": "11",
  "RC1/T1OSI/CCP2": "12",
  "RC2/CCP1": "13",
  "RC3/SCK/SCL": "14",
  "RC4/SDI/SDA": "15",
  "RC5/SDO": "16",
  "RC6/CK/TX": "17",
  "RC7/DT/RX": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "PGM/RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "~{SS}/AN4/RA5": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "OSC2/CLKO": "output", "RC0/T1OSO/T1CKI": "bidirectional", "RC1/T1OSI/CCP2": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/CK/TX": "bidirectional", "RC7/DT/RX": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F873-XXISP";
  override referencePrefix = "U";
}

/**
 * PIC16F874, 4K Flash, 192B SRAM, 128B EEPROM, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F874-XXIP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30292C.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F874_XXIP extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "Vref-/AN2/RA2": "4",
  "Vref+/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "~{SS}/AN4/RA5": "7",
  "RE0/~{RD}/AN5": "8",
  "RE1/~{WR}/AN6": "9",
  "RE2/~{CS}/AN7": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "OSC2/CLKO": "14",
  "T1OSO/T1CKI/RC0": "15",
  "T1OSI/CCP2/RC1": "16",
  "CCP1/RC2": "17",
  "SCK/SCL/RC3": "18",
  "RD0/PSP0": "19",
  "RD1/PSP1": "20",
  "RD2/PSP2": "21",
  "RD3/PSP3": "22",
  "SDI/SDA/RC4": "23",
  "SDO/RC5": "24",
  "CK/TX/RC6": "25",
  "DT/RX/RC7": "26",
  "RD4/PSP4": "27",
  "RD5/PSP5": "28",
  "RD6/PSP6": "29",
  "RD7/PSP7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "INT/RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "PGM/RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "PGC/RB6": "39",
  "PGD/RB7": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "~{SS}/AN4/RA5": "bidirectional", "RE0/~{RD}/AN5": "bidirectional", "RE1/~{WR}/AN6": "bidirectional", "RE2/~{CS}/AN7": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "T1OSI/CCP2/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "RD0/PSP0": "bidirectional", "RD1/PSP1": "bidirectional", "RD2/PSP2": "bidirectional", "RD3/PSP3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CK/TX/RC6": "bidirectional", "DT/RX/RC7": "bidirectional", "RD4/PSP4": "bidirectional", "RD5/PSP5": "bidirectional", "RD6/PSP6": "bidirectional", "RD7/PSP7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F874-XXIP";
  override referencePrefix = "U";
}

/**
 * 4096W Flash, 192B SRAM, 128B EEPROM, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F874A-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39582b.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F874A_IP extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "CVref/Vref-/AN2/RA2": "4",
  "Vref+/AN3/RA3": "5",
  "C1OUT/T0CKI/RA4": "6",
  "~{SS}/C2OUT/AN4/RA5": "7",
  "RE0/~{RD}/AN5": "8",
  "RE1/~{WR}/AN6": "9",
  "RE2/~{CS}/AN7": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "OSC2/CLKO": "14",
  "T1OSO/T1CKI/RC0": "15",
  "T1OSI/CCP2/RC1": "16",
  "CCP1/RC2": "17",
  "SCK/SCL/RC3": "18",
  "RD0/PSP0": "19",
  "RD1/PSP1": "20",
  "RD2/PSP2": "21",
  "RD3/PSP3": "22",
  "SDI/SDA/RC4": "23",
  "SDO/RC5": "24",
  "CK/TX/RC6": "25",
  "DT/RX/RC7": "26",
  "RD4/PSP4": "27",
  "RD5/PSP5": "28",
  "RD6/PSP6": "29",
  "RD7/PSP7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "INT/RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "PGM/RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "PGC/RB6": "39",
  "PGD/RB7": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "CVref/Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "C1OUT/T0CKI/RA4": "bidirectional", "~{SS}/C2OUT/AN4/RA5": "bidirectional", "RE0/~{RD}/AN5": "bidirectional", "RE1/~{WR}/AN6": "bidirectional", "RE2/~{CS}/AN7": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "T1OSI/CCP2/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "RD0/PSP0": "bidirectional", "RD1/PSP1": "bidirectional", "RD2/PSP2": "bidirectional", "RD3/PSP3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CK/TX/RC6": "bidirectional", "DT/RX/RC7": "bidirectional", "RD4/PSP4": "bidirectional", "RD5/PSP5": "bidirectional", "RD6/PSP6": "bidirectional", "RD7/PSP7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F874A-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F874A, 4096W Flash, 192B SRAM, 128B EEPROM, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F874A-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39582b.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC16F874A_IPT extends Component.withPins({
  "DT/RX/RC7": "1",
  "RD4/PSP4": "2",
  "RD5/PSP5": "3",
  "RD6/PSP6": "4",
  "RD7/PSP7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "INT/RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "PGM/RB3": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4": "14",
  "RB5": "15",
  "PGC/RB6": "16",
  "PGD/RB7": "17",
  "~{MCLR}/Vpp": "18",
  "AN0/RA0": "19",
  "AN1/RA1": "20",
  "CVref/Vref-/AN2/RA2": "21",
  "Vref+/AN3/RA3": "22",
  "C1OUT/T0CKI/RA4": "23",
  "~{SS}/C2OUT/AN4/RA5": "24",
  "RE0/~{RD}/AN5": "25",
  "RE1/~{WR}/AN6": "26",
  "RE2/~{CS}/AN7": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "OSC2/CLKO": "31",
  "T1OSO/T1CKI/RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "T1OSI/CCP2/RC1": "35",
  "CCP1/RC2": "36",
  "SCK/SCL/RC3": "37",
  "RD0/PSP0": "38",
  "RD1/PSP1": "39",
  "RD2/PSP2": "40",
  "RD3/PSP3": "41",
  "SDI/SDA/RC4": "42",
  "SDO/RC5": "43",
  "CK/TX/RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "DT/RX/RC7": "bidirectional", "RD4/PSP4": "bidirectional", "RD5/PSP5": "bidirectional", "RD6/PSP6": "bidirectional", "RD7/PSP7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "CVref/Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "C1OUT/T0CKI/RA4": "bidirectional", "~{SS}/C2OUT/AN4/RA5": "bidirectional", "RE0/~{RD}/AN5": "bidirectional", "RE1/~{WR}/AN6": "bidirectional", "RE2/~{CS}/AN7": "bidirectional", VDD_28: "passive", VSS_29: "passive", "OSC1/CLKI": "input", "OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", "T1OSI/CCP2/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "RD0/PSP0": "bidirectional", "RD1/PSP1": "bidirectional", "RD2/PSP2": "bidirectional", "RD3/PSP3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CK/TX/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F874A-IPT";
  override referencePrefix = "U";
}

/**
 * PIC16F876, 8K Flash, 386B SRAM, 256B EEPROM, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F876-XXISO`. Reference prefix: `U`.
 * Footprint filters: SO*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30292C.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F876_XXISO extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "Vref-/AN2/RA2": "4",
  "Vref+/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "~{SS}/AN4/RA5": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "OSC2/CLKO": "10",
  "RC0/T1OSO/T1CKI": "11",
  "RC1/T1OSI/CCP2": "12",
  "RC2/CCP1": "13",
  "RC3/SCK/SCL": "14",
  "RC4/SDI/SDA": "15",
  "RC5/SDO": "16",
  "RC6/CK/TX": "17",
  "RC7/DT/RX": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "PGM/RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "~{SS}/AN4/RA5": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "OSC2/CLKO": "output", "RC0/T1OSO/T1CKI": "bidirectional", "RC1/T1OSI/CCP2": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/CK/TX": "bidirectional", "RC7/DT/RX": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F876-XXISO";
  override referencePrefix = "U";
}

/**
 * PIC16F876, 8K Flash, 386B SRAM, 256B EEPROM, SDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F876-XXISP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30292C.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F876_XXISP extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "Vref-/AN2/RA2": "4",
  "Vref+/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "~{SS}/AN4/RA5": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "OSC2/CLKO": "10",
  "RC0/T1OSO/T1CKI": "11",
  "RC1/T1OSI/CCP2": "12",
  "RC2/CCP1": "13",
  "RC3/SCK/SCL": "14",
  "RC4/SDI/SDA": "15",
  "RC5/SDO": "16",
  "RC6/CK/TX": "17",
  "RC7/DT/RX": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "PGM/RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "~{SS}/AN4/RA5": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "OSC2/CLKO": "output", "RC0/T1OSO/T1CKI": "bidirectional", "RC1/T1OSI/CCP2": "bidirectional", "RC2/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/CK/TX": "bidirectional", "RC7/DT/RX": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F876-XXISP";
  override referencePrefix = "U";
}

/**
 * PIC16F877, 8K Flash, 386B SRAM, 256B EEPROM, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F877-XXIP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30292C.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F877_XXIP extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "Vref-/AN2/RA2": "4",
  "Vref+/AN3/RA3": "5",
  "T0CKI/RA4": "6",
  "~{SS}/AN4/RA5": "7",
  "RE0/~{RD}/AN5": "8",
  "RE1/~{WR}/AN6": "9",
  "RE2/~{CS}/AN7": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "OSC2/CLKO": "14",
  "T1OSO/T1CKI/RC0": "15",
  "T1OSI/CCP2/RC1": "16",
  "CCP1/RC2": "17",
  "SCK/SCL/RC3": "18",
  "RD0/PSP0": "19",
  "RD1/PSP1": "20",
  "RD2/PSP2": "21",
  "RD3/PSP3": "22",
  "SDI/SDA/RC4": "23",
  "SDO/RC5": "24",
  "CK/TX/RC6": "25",
  "DT/RX/RC7": "26",
  "RD4/PSP4": "27",
  "RD5/PSP5": "28",
  "RD6/PSP6": "29",
  "RD7/PSP7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "INT/RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "PGM/RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "PGC/RB6": "39",
  "PGD/RB7": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "T0CKI/RA4": "bidirectional", "~{SS}/AN4/RA5": "bidirectional", "RE0/~{RD}/AN5": "bidirectional", "RE1/~{WR}/AN6": "bidirectional", "RE2/~{CS}/AN7": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "T1OSI/CCP2/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "RD0/PSP0": "bidirectional", "RD1/PSP1": "bidirectional", "RD2/PSP2": "bidirectional", "RD3/PSP3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CK/TX/RC6": "bidirectional", "DT/RX/RC7": "bidirectional", "RD4/PSP4": "bidirectional", "RD5/PSP5": "bidirectional", "RD6/PSP6": "bidirectional", "RD7/PSP7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F877-XXIP";
  override referencePrefix = "U";
}

/**
 * 8W Flash, 386B SRAM, 256B EEPROM, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F877A-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39582b.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F877A_IP extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "AN0/RA0": "2",
  "AN1/RA1": "3",
  "CVref/Vref-/AN2/RA2": "4",
  "Vref+/AN3/RA3": "5",
  "C1OUT/T0CKI/RA4": "6",
  "~{SS}/C2OUT/AN4/RA5": "7",
  "RE0/~{RD}/AN5": "8",
  "RE1/~{WR}/AN6": "9",
  "RE2/~{CS}/AN7": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "OSC2/CLKO": "14",
  "T1OSO/T1CKI/RC0": "15",
  "T1OSI/CCP2/RC1": "16",
  "CCP1/RC2": "17",
  "SCK/SCL/RC3": "18",
  "RD0/PSP0": "19",
  "RD1/PSP1": "20",
  "RD2/PSP2": "21",
  "RD3/PSP3": "22",
  "SDI/SDA/RC4": "23",
  "SDO/RC5": "24",
  "CK/TX/RC6": "25",
  "DT/RX/RC7": "26",
  "RD4/PSP4": "27",
  "RD5/PSP5": "28",
  "RD6/PSP6": "29",
  "RD7/PSP7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "INT/RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "PGM/RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "PGC/RB6": "39",
  "PGD/RB7": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "CVref/Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "C1OUT/T0CKI/RA4": "bidirectional", "~{SS}/C2OUT/AN4/RA5": "bidirectional", "RE0/~{RD}/AN5": "bidirectional", "RE1/~{WR}/AN6": "bidirectional", "RE2/~{CS}/AN7": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "T1OSI/CCP2/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "RD0/PSP0": "bidirectional", "RD1/PSP1": "bidirectional", "RD2/PSP2": "bidirectional", "RD3/PSP3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CK/TX/RC6": "bidirectional", "DT/RX/RC7": "bidirectional", "RD4/PSP4": "bidirectional", "RD5/PSP5": "bidirectional", "RD6/PSP6": "bidirectional", "RD7/PSP7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F877A-IP";
  override referencePrefix = "U";
}

/**
 * PIC16F874A, 4W Flash, 192B SRAM, 128B EEPROM, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F877A-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*.
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F877A_IPT extends Component.withPins({
  "DT/RX/RC7": "1",
  "RD4/PSP4": "2",
  "RD5/PSP5": "3",
  "RD6/PSP6": "4",
  "RD7/PSP7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "INT/RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "PGM/RB3": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4": "14",
  "RB5": "15",
  "PGC/RB6": "16",
  "PGD/RB7": "17",
  "~{MCLR}/Vpp": "18",
  "AN0/RA0": "19",
  "AN1/RA1": "20",
  "CVref/Vref-/AN2/RA2": "21",
  "Vref+/AN3/RA3": "22",
  "C1OUT/T0CKI/RA4": "23",
  "~{SS}/C2OUT/AN4/RA5": "24",
  "RE0/~{RD}/AN5": "25",
  "RE1/~{WR}/AN6": "26",
  "RE2/~{CS}/AN7": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "OSC2/CLKO": "31",
  "T1OSO/T1CKI/RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "T1OSI/CCP2/RC1": "35",
  "CCP1/RC2": "36",
  "SCK/SCL/RC3": "37",
  "RD0/PSP0": "38",
  "RD1/PSP1": "39",
  "RD2/PSP2": "40",
  "RD3/PSP3": "41",
  "SDI/SDA/RC4": "42",
  "SDO/RC5": "43",
  "CK/TX/RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "DT/RX/RC7": "bidirectional", "RD4/PSP4": "bidirectional", "RD5/PSP5": "bidirectional", "RD6/PSP6": "bidirectional", "RD7/PSP7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "INT/RB0": "bidirectional", RB1: "bidirectional", RB2: "bidirectional", "PGM/RB3": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", RB4: "bidirectional", RB5: "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", "~{MCLR}/Vpp": "input", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "CVref/Vref-/AN2/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "C1OUT/T0CKI/RA4": "bidirectional", "~{SS}/C2OUT/AN4/RA5": "bidirectional", "RE0/~{RD}/AN5": "bidirectional", "RE1/~{WR}/AN6": "bidirectional", "RE2/~{CS}/AN7": "bidirectional", VDD_28: "passive", VSS_29: "passive", "OSC1/CLKI": "input", "OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", "T1OSI/CCP2/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "RD0/PSP0": "bidirectional", "RD1/PSP1": "bidirectional", "RD2/PSP2": "bidirectional", "RD3/PSP3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CK/TX/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F877A-IPT";
  override referencePrefix = "U";
}

/**
 * PIC16F88, 4096W Flash, 368B SRAM, 256B EEPROM, QFN-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F88-IML`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30487D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F88_IML extends Component.withPins({
  "~{MCLR}/Vpp/RA5": "1",
  "VSS_3": "3",
  "VSS_5": "5",
  "RB0/INT/CCP1": "7",
  "RB1/SDI/SDA": "8",
  "RB2/SDO/RX/DT": "9",
  "RB3/PGM/CCP1": "10",
  "RB4/SCK/SCL": "12",
  "RB5/~{SS}/TX/CK": "13",
  "RB6/AN5/PGC/T1CKI": "15",
  "RB7/AN6/PGD/T1OSI": "16",
  "VDD_17": "17",
  "VDD_19": "19",
  "CLKOUT/OSC2/RA6": "20",
  "CLKIN/OSC1/RA7": "21",
  "AN0/RA0": "23",
  "AN1/RA1": "24",
  "Vref-/CVref/AN2/RA2": "26",
  "C1OUT/Vref+/AN3/RA3": "27",
  "C2OUT/T0CKI/AN4/RA4": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp/RA5": "input", VSS_3: "power_in", VSS_5: "power_in", "RB0/INT/CCP1": "bidirectional", "RB1/SDI/SDA": "bidirectional", "RB2/SDO/RX/DT": "bidirectional", "RB3/PGM/CCP1": "bidirectional", "RB4/SCK/SCL": "bidirectional", "RB5/~{SS}/TX/CK": "bidirectional", "RB6/AN5/PGC/T1CKI": "bidirectional", "RB7/AN6/PGD/T1OSI": "bidirectional", VDD_17: "power_in", VDD_19: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", "Vref-/CVref/AN2/RA2": "bidirectional", "C1OUT/Vref+/AN3/RA3": "bidirectional", "C2OUT/T0CKI/AN4/RA4": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F88-IML";
  override referencePrefix = "U";
}

/**
 * PIC16F88, 4096W Flash, 368B SRAM, 256B EEPROM, DIP18
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F88-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30487D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F88_IP extends Component.withPins({
  "Vref-/CVref/AN2/RA2": "1",
  "C1OUT/Vref+/AN3/RA3": "2",
  "C2OUT/T0CKI/AN4/RA4": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "VSS": "5",
  "RB0/INT/CCP1": "6",
  "RB1/SDI/SDA": "7",
  "RB2/SDO/RX/DT": "8",
  "RB3/PGM/CCP1": "9",
  "RB4/SCK/SCL": "10",
  "RB5/~{SS}/TX/CK": "11",
  "RB6/AN5/PGC/T1CKI": "12",
  "RB7/AN6/PGD/T1OSI": "13",
  "VDD": "14",
  "CLKOUT/OSC2/RA6": "15",
  "CLKIN/OSC1/RA7": "16",
  "AN0/RA0": "17",
  "AN1/RA1": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vref-/CVref/AN2/RA2": "bidirectional", "C1OUT/Vref+/AN3/RA3": "bidirectional", "C2OUT/T0CKI/AN4/RA4": "bidirectional", "~{MCLR}/Vpp/RA5": "input", VSS: "power_in", "RB0/INT/CCP1": "bidirectional", "RB1/SDI/SDA": "bidirectional", "RB2/SDO/RX/DT": "bidirectional", "RB3/PGM/CCP1": "bidirectional", "RB4/SCK/SCL": "bidirectional", "RB5/~{SS}/TX/CK": "bidirectional", "RB6/AN5/PGC/T1CKI": "bidirectional", "RB7/AN6/PGD/T1OSI": "bidirectional", VDD: "power_in", "CLKOUT/OSC2/RA6": "bidirectional", "CLKIN/OSC1/RA7": "bidirectional", "AN0/RA0": "bidirectional", "AN1/RA1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F88-IP";
  override referencePrefix = "U";
}

/**
 * 2K Flash, 128B SRAM, 128B EEPROM, XLP, DIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F882-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41291D.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F882_IP extends Component.withPins({
  "RE3/~{MCLR}/Vpp": "1",
  "ULPWU/C12IN0-/AN0/RA0": "2",
  "C12IN1-/AN1/RA1": "3",
  "CVref/C2IN1+/Vref-/AN2/RA2": "4",
  "C1IN+/Vref+/AN3/RA3": "5",
  "T0CKI/C1OUT/RA4": "6",
  "~{SS}/C2OUT/AN4/RA5": "7",
  "VSS_8": "8",
  "CLKIN/OSC1/RA7": "9",
  "CLKOUT/OSC2/RA6": "10",
  "RC0/T1OSO/T1CK1": "11",
  "RC1/T1OSI/CCP2": "12",
  "RC2/P1A/CCP1": "13",
  "RC3/SCK/SCL": "14",
  "RC4/SDI/SDA": "15",
  "RC5/SDO": "16",
  "RC6/TX/CK": "17",
  "RC7/RX/DT": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/AN12/RB0": "21",
  "P1C/AN10/RB1": "22",
  "P1B/AN8/RB2": "23",
  "PGM/C12IN2-/AN8/RB3": "24",
  "P1D/AN11/RB4": "25",
  "~{T1G}/AN13/RB5": "26",
  "ICSPCLK/RB6": "27",
  "ICSPDAT/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/Vpp": "bidirectional", "ULPWU/C12IN0-/AN0/RA0": "bidirectional", "C12IN1-/AN1/RA1": "bidirectional", "CVref/C2IN1+/Vref-/AN2/RA2": "bidirectional", "C1IN+/Vref+/AN3/RA3": "bidirectional", "T0CKI/C1OUT/RA4": "bidirectional", "~{SS}/C2OUT/AN4/RA5": "bidirectional", VSS_8: "power_in", "CLKIN/OSC1/RA7": "input", "CLKOUT/OSC2/RA6": "bidirectional", "RC0/T1OSO/T1CK1": "bidirectional", "RC1/T1OSI/CCP2": "bidirectional", "RC2/P1A/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/TX/CK": "bidirectional", "RC7/RX/DT": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/AN12/RB0": "bidirectional", "P1C/AN10/RB1": "bidirectional", "P1B/AN8/RB2": "bidirectional", "PGM/C12IN2-/AN8/RB3": "bidirectional", "P1D/AN11/RB4": "bidirectional", "~{T1G}/AN13/RB5": "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F882-IP";
  override referencePrefix = "U";
}

/**
 * 4K Flash, 256B SRAM, 256B EEPROM, XLP, DIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F883-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41291D.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F883_IP extends Component.withPins({
  "RE3/~{MCLR}/Vpp": "1",
  "ULPWU/C12IN0-/AN0/RA0": "2",
  "C12IN1-/AN1/RA1": "3",
  "CVref/C2IN1+/Vref-/AN2/RA2": "4",
  "C1IN+/Vref+/AN3/RA3": "5",
  "T0CKI/C1OUT/RA4": "6",
  "~{SS}/C2OUT/AN4/RA5": "7",
  "VSS_8": "8",
  "CLKIN/OSC1/RA7": "9",
  "CLKOUT/OSC2/RA6": "10",
  "RC0/T1OSO/T1CK1": "11",
  "RC1/T1OSI/CCP2": "12",
  "RC2/P1A/CCP1": "13",
  "RC3/SCK/SCL": "14",
  "RC4/SDI/SDA": "15",
  "RC5/SDO": "16",
  "RC6/TX/CK": "17",
  "RC7/RX/DT": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/AN12/RB0": "21",
  "P1C/AN10/RB1": "22",
  "P1B/AN8/RB2": "23",
  "PGM/C12IN2-/AN8/RB3": "24",
  "P1D/AN11/RB4": "25",
  "~{T1G}/AN13/RB5": "26",
  "ICSPCLK/RB6": "27",
  "ICSPDAT/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/Vpp": "bidirectional", "ULPWU/C12IN0-/AN0/RA0": "bidirectional", "C12IN1-/AN1/RA1": "bidirectional", "CVref/C2IN1+/Vref-/AN2/RA2": "bidirectional", "C1IN+/Vref+/AN3/RA3": "bidirectional", "T0CKI/C1OUT/RA4": "bidirectional", "~{SS}/C2OUT/AN4/RA5": "bidirectional", VSS_8: "power_in", "CLKIN/OSC1/RA7": "input", "CLKOUT/OSC2/RA6": "bidirectional", "RC0/T1OSO/T1CK1": "bidirectional", "RC1/T1OSI/CCP2": "bidirectional", "RC2/P1A/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/TX/CK": "bidirectional", "RC7/RX/DT": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/AN12/RB0": "bidirectional", "P1C/AN10/RB1": "bidirectional", "P1B/AN8/RB2": "bidirectional", "PGM/C12IN2-/AN8/RB3": "bidirectional", "P1D/AN11/RB4": "bidirectional", "~{T1G}/AN13/RB5": "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F883-IP";
  override referencePrefix = "U";
}

/**
 * 4K Flash, 256B SRAM, 256B EEPROM, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F884-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41291D.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F884_IP extends Component.withPins({
  "RE3/~{MCLR}/Vpp": "1",
  "C12IN0-/ULPWU/AN0/RA0": "2",
  "C12IN1-/AN1/RA1": "3",
  "C2IN+/CVref/Vref-/AN2/RA2": "4",
  "C1IN+/Vref+/AN3/RA3": "5",
  "C1OUT/T0CKI/RA4": "6",
  "C2OUT/~{SS}/AN4/RA5": "7",
  "RE0/AN5": "8",
  "RE1/AN6": "9",
  "RE2/AN7": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "RA7/OSC1/CLKIN": "13",
  "RA6/OSC2/CLKOUT": "14",
  "T10S0/T1CKI/RC0": "15",
  "T1OSI/CCP2/RC1": "16",
  "P1A/CCP1/RC2": "17",
  "SCL/SCK/RC3": "18",
  "RD0": "19",
  "RD1": "20",
  "RD2": "21",
  "RD3": "22",
  "SDA/SDI/RC4": "23",
  "SDO/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "RD4": "27",
  "RD5/P1B": "28",
  "RD6/P1C": "29",
  "RD7/P1D": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "INT/AN12/RB0": "33",
  "C12IN3-/AN10/RB1": "34",
  "AN8/RB2": "35",
  "C12IN2-/PGM/AN9/RB3": "36",
  "AN11/RB4": "37",
  "~{T1G}/AN13/RB5": "38",
  "ICSPCLK/RB6": "39",
  "ICSPDAT/RB7": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/Vpp": "input", "C12IN0-/ULPWU/AN0/RA0": "bidirectional", "C12IN1-/AN1/RA1": "bidirectional", "C2IN+/CVref/Vref-/AN2/RA2": "bidirectional", "C1IN+/Vref+/AN3/RA3": "bidirectional", "C1OUT/T0CKI/RA4": "bidirectional", "C2OUT/~{SS}/AN4/RA5": "bidirectional", "RE0/AN5": "bidirectional", "RE1/AN6": "bidirectional", "RE2/AN7": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "T10S0/T1CKI/RC0": "bidirectional", "T1OSI/CCP2/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", RD4: "bidirectional", "RD5/P1B": "bidirectional", "RD6/P1C": "bidirectional", "RD7/P1D": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "INT/AN12/RB0": "bidirectional", "C12IN3-/AN10/RB1": "bidirectional", "AN8/RB2": "bidirectional", "C12IN2-/PGM/AN9/RB3": "bidirectional", "AN11/RB4": "bidirectional", "~{T1G}/AN13/RB5": "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F884-IP";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 256B SRAM, 256B EEPROM, XLP, DIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F886-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41291D.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F886_IP extends Component.withPins({
  "RE3/~{MCLR}/Vpp": "1",
  "ULPWU/C12IN0-/AN0/RA0": "2",
  "C12IN1-/AN1/RA1": "3",
  "CVref/C2IN1+/Vref-/AN2/RA2": "4",
  "C1IN+/Vref+/AN3/RA3": "5",
  "T0CKI/C1OUT/RA4": "6",
  "~{SS}/C2OUT/AN4/RA5": "7",
  "VSS_8": "8",
  "CLKIN/OSC1/RA7": "9",
  "CLKOUT/OSC2/RA6": "10",
  "RC0/T1OSO/T1CK1": "11",
  "RC1/T1OSI/CCP2": "12",
  "RC2/P1A/CCP1": "13",
  "RC3/SCK/SCL": "14",
  "RC4/SDI/SDA": "15",
  "RC5/SDO": "16",
  "RC6/TX/CK": "17",
  "RC7/RX/DT": "18",
  "VSS_19": "19",
  "VDD": "20",
  "INT/AN12/RB0": "21",
  "P1C/AN10/RB1": "22",
  "P1B/AN8/RB2": "23",
  "PGM/C12IN2-/AN8/RB3": "24",
  "P1D/AN11/RB4": "25",
  "~{T1G}/AN13/RB5": "26",
  "ICSPCLK/RB6": "27",
  "ICSPDAT/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/Vpp": "bidirectional", "ULPWU/C12IN0-/AN0/RA0": "bidirectional", "C12IN1-/AN1/RA1": "bidirectional", "CVref/C2IN1+/Vref-/AN2/RA2": "bidirectional", "C1IN+/Vref+/AN3/RA3": "bidirectional", "T0CKI/C1OUT/RA4": "bidirectional", "~{SS}/C2OUT/AN4/RA5": "bidirectional", VSS_8: "power_in", "CLKIN/OSC1/RA7": "input", "CLKOUT/OSC2/RA6": "bidirectional", "RC0/T1OSO/T1CK1": "bidirectional", "RC1/T1OSI/CCP2": "bidirectional", "RC2/P1A/CCP1": "bidirectional", "RC3/SCK/SCL": "bidirectional", "RC4/SDI/SDA": "bidirectional", "RC5/SDO": "bidirectional", "RC6/TX/CK": "bidirectional", "RC7/RX/DT": "bidirectional", VSS_19: "power_in", VDD: "power_in", "INT/AN12/RB0": "bidirectional", "P1C/AN10/RB1": "bidirectional", "P1B/AN8/RB2": "bidirectional", "PGM/C12IN2-/AN8/RB3": "bidirectional", "P1D/AN11/RB4": "bidirectional", "~{T1G}/AN13/RB5": "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F886-IP";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 368B SRAM, 256B EEPROM, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16F887-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41291D.pdf
 * Keywords: Flash-Based 8-Bit CMOS Microcontroller.
 */
export class PIC16F887_IP extends Component.withPins({
  "RE3/~{MCLR}/Vpp": "1",
  "C12IN0-/ULPWU/AN0/RA0": "2",
  "C12IN1-/AN1/RA1": "3",
  "C2IN+/CVref/Vref-/AN2/RA2": "4",
  "C1IN+/Vref+/AN3/RA3": "5",
  "C1OUT/T0CKI/RA4": "6",
  "C2OUT/~{SS}/AN4/RA5": "7",
  "RE0/AN5": "8",
  "RE1/AN6": "9",
  "RE2/AN7": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "RA7/OSC1/CLKIN": "13",
  "RA6/OSC2/CLKOUT": "14",
  "T10S0/T1CKI/RC0": "15",
  "T1OSI/CCP2/RC1": "16",
  "P1A/CCP1/RC2": "17",
  "SCL/SCK/RC3": "18",
  "RD0": "19",
  "RD1": "20",
  "RD2": "21",
  "RD3": "22",
  "SDA/SDI/RC4": "23",
  "SDO/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "RD4": "27",
  "RD5/P1B": "28",
  "RD6/P1C": "29",
  "RD7/P1D": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "INT/AN12/RB0": "33",
  "C12IN3-/AN10/RB1": "34",
  "AN8/RB2": "35",
  "C12IN2-/PGM/AN9/RB3": "36",
  "AN11/RB4": "37",
  "~{T1G}/AN13/RB5": "38",
  "ICSPCLK/RB6": "39",
  "ICSPDAT/RB7": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/Vpp": "input", "C12IN0-/ULPWU/AN0/RA0": "bidirectional", "C12IN1-/AN1/RA1": "bidirectional", "C2IN+/CVref/Vref-/AN2/RA2": "bidirectional", "C1IN+/Vref+/AN3/RA3": "bidirectional", "C1OUT/T0CKI/RA4": "bidirectional", "C2OUT/~{SS}/AN4/RA5": "bidirectional", "RE0/AN5": "bidirectional", "RE1/AN6": "bidirectional", "RE2/AN7": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "RA7/OSC1/CLKIN": "bidirectional", "RA6/OSC2/CLKOUT": "bidirectional", "T10S0/T1CKI/RC0": "bidirectional", "T1OSI/CCP2/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", RD4: "bidirectional", "RD5/P1B": "bidirectional", "RD6/P1C": "bidirectional", "RD7/P1D": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "INT/AN12/RB0": "bidirectional", "C12IN3-/AN10/RB1": "bidirectional", "AN8/RB2": "bidirectional", "C12IN2-/PGM/AN9/RB3": "bidirectional", "AN11/RB4": "bidirectional", "~{T1G}/AN13/RB5": "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16F887-IP";
  override referencePrefix = "U";
}

/**
 * 16KW FLASH, 2048B SRAM, QFN-28(6x6mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15356-xML`. Reference prefix: `U?`.
 * Footprint filters: QFN*6x6mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC16LF15356_xML extends Component.withPins({
  "PAD": "29",
  "RA2": "1",
  "RA3": "2",
  "RA4": "3",
  "RA5": "4",
  "VSS_5": "5",
  "RA7": "6",
  "RA6": "7",
  "RC0": "8",
  "RC1": "9",
  "RC2": "10",
  "RC3": "11",
  "RC4": "12",
  "RC5": "13",
  "RC6": "14",
  "RC7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "RB0": "18",
  "RB1": "19",
  "RB2": "20",
  "RB3": "21",
  "RB4": "22",
  "RB5": "23",
  "RB6/ICSPCLK": "24",
  "RB7/ICSPDAT": "25",
  "RE3/~{MCLR}/VPP": "26",
  "RA0": "27",
  "RA1": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PAD: "power_in", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_5: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_16: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "RE3/~{MCLR}/VPP": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15356-xML";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, QFN-28(4x4mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15356-xMV`. Reference prefix: `U?`.
 * Footprint filters: QFN*4x4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_4x4mm_P0.4mm_EP2.3x2.3mm.
 */
export class PIC16LF15356_xMV extends Component.withPins({
  "PAD": "29",
  "RA2": "1",
  "RA3": "2",
  "RA4": "3",
  "RA5": "4",
  "VSS_5": "5",
  "RA7": "6",
  "RA6": "7",
  "RC0": "8",
  "RC1": "9",
  "RC2": "10",
  "RC3": "11",
  "RC4": "12",
  "RC5": "13",
  "RC6": "14",
  "RC7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "RB0": "18",
  "RB1": "19",
  "RB2": "20",
  "RB3": "21",
  "RB4": "22",
  "RB5": "23",
  "RB6/ICSPCLK": "24",
  "RB7/ICSPDAT": "25",
  "RE3/~{MCLR}/VPP": "26",
  "RA0": "27",
  "RA1": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PAD: "power_in", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_5: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_16: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "RE3/~{MCLR}/VPP": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15356-xMV";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, SOIC-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15356-xSO`. Reference prefix: `U?`.
 * Footprint filters: SOIC*.5x17.9mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC16LF15356_xSO extends Component.withPins({
  "VPP/~{MCLR}/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7": "9",
  "RA6": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6": "17",
  "RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "RB6/ICSPCLK": "27",
  "RB7/ICSPDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VPP/~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15356-xSO";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, DIP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15356-xSP`. Reference prefix: `U?`.
 * Footprint filters: DIP*7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC16LF15356_xSP extends Component.withPins({
  "VPP/~{MCLR}/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7": "9",
  "RA6": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6": "17",
  "RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "RB6/ICSPCLK": "27",
  "RB7/ICSPDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VPP/~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15356-xSP";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15356-xSS`. Reference prefix: `U?`.
 * Footprint filters: SSOP*5.3x10.2mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC16LF15356_xSS extends Component.withPins({
  "VPP/~{MCLR}/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7": "9",
  "RA6": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6": "17",
  "RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "RB6/ICSPCLK": "27",
  "RB7/ICSPDAT": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VPP/~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15356-xSS";
  override referencePrefix = "U?";
}

/**
 * 8KW FLASH, 1024B SRAM, QFN-44(8x8mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15375-xML`. Reference prefix: `U?`.
 * Footprint filters: QFN*8x8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC16LF15375_xML extends Component.withPins({
  "NC_8": "8",
  "NC_13": "13",
  "NC_29": "29",
  "NC_31": "31",
  "PAD": "45",
  "RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "9",
  "RB1": "10",
  "RB2": "11",
  "RB4": "14",
  "RB5": "15",
  "RB6/ICSPCLK": "16",
  "RB7/ICSPDAT": "17",
  "VPP/MCLR/RE3": "18",
  "RA0": "19",
  "RA1": "20",
  "RA2": "21",
  "RA3": "22",
  "RA4": "23",
  "RA5": "24",
  "RE0": "25",
  "RE1": "26",
  "RE2": "27",
  "VDD_28": "28",
  "VSS_30": "30",
  "RA7": "32",
  "RA6": "33",
  "RC0": "34",
  "RC1": "35",
  "RC2": "36",
  "RC3": "37",
  "RD0": "38",
  "RD1": "39",
  "RD2": "40",
  "RD3": "41",
  "RC4": "42",
  "RC5": "43",
  "RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_8: "no_connect", NC_13: "no_connect", NC_29: "no_connect", NC_31: "no_connect", PAD: "power_in", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "VPP/MCLR/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_28: "power_in", VSS_30: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15375-xML";
  override referencePrefix = "U?";
}

/**
 * 8KW FLASH, 1024B SRAM, QFN-40(5x5mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15375-xMV`. Reference prefix: `U?`.
 * Footprint filters: QFN*1EP*5x5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-40-1EP_5x5mm_P0.4mm_EP3.8x3.8mm.
 */
export class PIC16LF15375_xMV extends Component.withPins({
  "PAD": "41",
  "RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RB4": "12",
  "RB5": "13",
  "RB6/ICSPCLK": "14",
  "RB7/ICSPDAT": "15",
  "VPP/MCLR/RE3": "16",
  "RA0": "17",
  "RA1": "18",
  "RA2": "19",
  "RA3": "20",
  "RA4": "21",
  "RA5": "22",
  "RE0": "23",
  "RE1": "24",
  "RE2": "25",
  "VDD_26": "26",
  "VSS_27": "27",
  "RA7": "28",
  "RA6": "29",
  "RC0": "30",
  "RC1": "31",
  "RC2": "32",
  "RC3": "33",
  "RD0": "34",
  "RD1": "35",
  "RD2": "36",
  "RD3": "37",
  "RC4": "38",
  "RC5": "39",
  "RC6": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PAD: "power_in", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "VPP/MCLR/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_26: "power_in", VSS_27: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15375-xMV";
  override referencePrefix = "U?";
}

/**
 * 8KW FLASH, 1024B SRAM, DIP-40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15375-xP`. Reference prefix: `U?`.
 * Footprint filters: DIP*15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC16LF15375_xP extends Component.withPins({
  "VPP/MCLR/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "RE0": "8",
  "RE1": "9",
  "RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "RA7": "13",
  "RA6": "14",
  "RC0": "15",
  "RC1": "16",
  "RC2": "17",
  "RC3": "18",
  "RD0": "19",
  "RD1": "20",
  "RD2": "21",
  "RD3": "22",
  "RC4": "23",
  "RC5": "24",
  "RC6": "25",
  "RC7": "26",
  "RD4": "27",
  "RD5": "28",
  "RD6": "29",
  "RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "RB6/ICSPCLK": "39",
  "RB7/ICSPDAT": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VPP/MCLR/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_11: "power_in", VSS_12: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15375-xP";
  override referencePrefix = "U?";
}

/**
 * 8KW FLASH, 1024B SRAM, TQFP-44(10x10mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15375-xPT`. Reference prefix: `U?`.
 * Footprint filters: TQFP*10x10mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC16LF15375_xPT extends Component.withPins({
  "NC_12": "12",
  "NC_13": "13",
  "NC_33": "33",
  "NC_34": "34",
  "RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RB4": "14",
  "RB5": "15",
  "RB6/ICSPCLK": "16",
  "RB7/ICSPDAT": "17",
  "VPP/MCLR/RE3": "18",
  "AN0/RA0": "19",
  "RA1": "20",
  "RA2": "21",
  "RA3": "22",
  "RA4": "23",
  "RA5": "24",
  "RE0": "25",
  "RE1": "26",
  "RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA7": "30",
  "RA6": "31",
  "RC0": "32",
  "RC1": "35",
  "RC2": "36",
  "RC3": "37",
  "RD0": "38",
  "RD1": "39",
  "RD2": "40",
  "RD3": "41",
  "RC4": "42",
  "RC5": "43",
  "RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_12: "no_connect", NC_13: "no_connect", NC_33: "no_connect", NC_34: "no_connect", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "VPP/MCLR/RE3": "bidirectional", "AN0/RA0": "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_28: "power_in", VSS_29: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15375-xPT";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, QFN-44(8x8mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15376-xML`. Reference prefix: `U?`.
 * Footprint filters: QFN*8x8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC16LF15376_xML extends Component.withPins({
  "NC_8": "8",
  "NC_13": "13",
  "NC_29": "29",
  "NC_31": "31",
  "PAD": "45",
  "RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "9",
  "RB1": "10",
  "RB2": "11",
  "RB4": "14",
  "RB5": "15",
  "RB6/ICSPCLK": "16",
  "RB7/ICSPDAT": "17",
  "VPP/MCLR/RE3": "18",
  "RA0": "19",
  "RA1": "20",
  "RA2": "21",
  "RA3": "22",
  "RA4": "23",
  "RA5": "24",
  "RE0": "25",
  "RE1": "26",
  "RE2": "27",
  "VDD_28": "28",
  "VSS_30": "30",
  "RA7": "32",
  "RA6": "33",
  "RC0": "34",
  "RC1": "35",
  "RC2": "36",
  "RC3": "37",
  "RD0": "38",
  "RD1": "39",
  "RD2": "40",
  "RD3": "41",
  "RC4": "42",
  "RC5": "43",
  "RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_8: "no_connect", NC_13: "no_connect", NC_29: "no_connect", NC_31: "no_connect", PAD: "power_in", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "VPP/MCLR/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_28: "power_in", VSS_30: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15376-xML";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, QFN-40(5x5mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15376-xMV`. Reference prefix: `U?`.
 * Footprint filters: QFN*1EP*5x5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-40-1EP_5x5mm_P0.4mm_EP3.8x3.8mm.
 */
export class PIC16LF15376_xMV extends Component.withPins({
  "PAD": "41",
  "RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RB4": "12",
  "RB5": "13",
  "RB6/ICSPCLK": "14",
  "RB7/ICSPDAT": "15",
  "VPP/MCLR/RE3": "16",
  "RA0": "17",
  "RA1": "18",
  "RA2": "19",
  "RA3": "20",
  "RA4": "21",
  "RA5": "22",
  "RE0": "23",
  "RE1": "24",
  "RE2": "25",
  "VDD_26": "26",
  "VSS_27": "27",
  "RA7": "28",
  "RA6": "29",
  "RC0": "30",
  "RC1": "31",
  "RC2": "32",
  "RC3": "33",
  "RD0": "34",
  "RD1": "35",
  "RD2": "36",
  "RD3": "37",
  "RC4": "38",
  "RC5": "39",
  "RC6": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PAD: "power_in", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "VPP/MCLR/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_26: "power_in", VSS_27: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15376-xMV";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, DIP-40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15376-xP`. Reference prefix: `U?`.
 * Footprint filters: DIP*15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC16LF15376_xP extends Component.withPins({
  "VPP/MCLR/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "RE0": "8",
  "RE1": "9",
  "RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "RA7": "13",
  "RA6": "14",
  "RC0": "15",
  "RC1": "16",
  "RC2": "17",
  "RC3": "18",
  "RD0": "19",
  "RD1": "20",
  "RD2": "21",
  "RD3": "22",
  "RC4": "23",
  "RC5": "24",
  "RC6": "25",
  "RC7": "26",
  "RD4": "27",
  "RD5": "28",
  "RD6": "29",
  "RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "RB6/ICSPCLK": "39",
  "RB7/ICSPDAT": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VPP/MCLR/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_11: "power_in", VSS_12: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15376-xP";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, TQFP-44(10x10mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15376-xPT`. Reference prefix: `U?`.
 * Footprint filters: TQFP*10x10mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC16LF15376_xPT extends Component.withPins({
  "NC_12": "12",
  "NC_13": "13",
  "NC_33": "33",
  "NC_34": "34",
  "RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RB4": "14",
  "RB5": "15",
  "RB6/ICSPCLK": "16",
  "RB7/ICSPDAT": "17",
  "VPP/MCLR/RE3": "18",
  "AN0/RA0": "19",
  "RA1": "20",
  "RA2": "21",
  "RA3": "22",
  "RA4": "23",
  "RA5": "24",
  "RE0": "25",
  "RE1": "26",
  "RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA7": "30",
  "RA6": "31",
  "RC0": "32",
  "RC1": "35",
  "RC2": "36",
  "RC3": "37",
  "RD0": "38",
  "RD1": "39",
  "RD2": "40",
  "RD3": "41",
  "RC4": "42",
  "RC5": "43",
  "RC6": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_12: "no_connect", NC_13: "no_connect", NC_33: "no_connect", NC_34: "no_connect", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", "VPP/MCLR/RE3": "bidirectional", "AN0/RA0": "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_28: "power_in", VSS_29: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15376-xPT";
  override referencePrefix = "U?";
}

/**
 * 8KW FLASH, 1024B SRAM, QFN-48(6x6mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15385-xMV`. Reference prefix: `U?`.
 * Footprint filters: QFN*6x6mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.6x4.6mm.
 */
export class PIC16LF15385_xMV extends Component.withPins({
  "RD5": "3",
  "RD6": "4",
  "PAD": "49",
  "RC7": "1",
  "RD4": "2",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RF4": "12",
  "RF5": "13",
  "RF6": "14",
  "RF7": "15",
  "RB4": "16",
  "RB5": "17",
  "ICSPCLK/RB6": "18",
  "ICSPDAT/RB7": "19",
  "VPP/~{MCLR}/RE3": "20",
  "RA0": "21",
  "RA1": "22",
  "RA2": "23",
  "RA3": "24",
  "RA4": "25",
  "RA5": "26",
  "RE0": "27",
  "RE1": "28",
  "RE2": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "RA7": "32",
  "RA6": "33",
  "RC0": "34",
  "RC1": "35",
  "RF0": "36",
  "RF1": "37",
  "RF2": "38",
  "RF3": "39",
  "RC2": "40",
  "RC3": "41",
  "RD0": "42",
  "RD1": "43",
  "RD2": "44",
  "RD3": "45",
  "RC4": "46",
  "RC5": "47",
  "RC6": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RD5: "bidirectional", RD6: "bidirectional", PAD: "power_in", RC7: "bidirectional", RD4: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RF4: "bidirectional", RF5: "bidirectional", RF6: "bidirectional", RF7: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", "VPP/~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_30: "power_in", VSS_31: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RF0: "bidirectional", RF1: "bidirectional", RF2: "bidirectional", RF3: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15385-xMV";
  override referencePrefix = "U?";
}

/**
 * 8KW FLASH, 1024B SRAM, TQFP-48(7x7mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15385-xPT`. Reference prefix: `U?`.
 * Footprint filters: TQFP*7x7mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class PIC16LF15385_xPT extends Component.withPins({
  "RD5": "3",
  "RD6": "4",
  "RC7": "1",
  "RD4": "2",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RF4": "12",
  "RF5": "13",
  "RF6": "14",
  "RF7": "15",
  "RB4": "16",
  "RB5": "17",
  "ICSPCLK/RB6": "18",
  "ICSPDAT/RB7": "19",
  "VPP/~{MCLR}/RE3": "20",
  "RA0": "21",
  "RA1": "22",
  "RA2": "23",
  "RA3": "24",
  "RA4": "25",
  "RA5": "26",
  "RE0": "27",
  "RE1": "28",
  "RE2": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "RA7": "32",
  "RA6": "33",
  "RC0": "34",
  "RC1": "35",
  "RF0": "36",
  "RF1": "37",
  "RF2": "38",
  "RF3": "39",
  "RC2": "40",
  "RC3": "41",
  "RD0": "42",
  "RD1": "43",
  "RD2": "44",
  "RD3": "45",
  "RC4": "46",
  "RC5": "47",
  "RC6": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RD5: "bidirectional", RD6: "bidirectional", RC7: "bidirectional", RD4: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RF4: "bidirectional", RF5: "bidirectional", RF6: "bidirectional", RF7: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", "VPP/~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_30: "power_in", VSS_31: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RF0: "bidirectional", RF1: "bidirectional", RF2: "bidirectional", RF3: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15385-xPT";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, QFN-48(6x6mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15386-xMV`. Reference prefix: `U?`.
 * Footprint filters: QFN*6x6mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_6x6mm_P0.4mm_EP4.6x4.6mm.
 */
export class PIC16LF15386_xMV extends Component.withPins({
  "RD5": "3",
  "RD6": "4",
  "PAD": "49",
  "RC7": "1",
  "RD4": "2",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RF4": "12",
  "RF5": "13",
  "RF6": "14",
  "RF7": "15",
  "RB4": "16",
  "RB5": "17",
  "ICSPCLK/RB6": "18",
  "ICSPDAT/RB7": "19",
  "VPP/~{MCLR}/RE3": "20",
  "RA0": "21",
  "RA1": "22",
  "RA2": "23",
  "RA3": "24",
  "RA4": "25",
  "RA5": "26",
  "RE0": "27",
  "RE1": "28",
  "RE2": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "RA7": "32",
  "RA6": "33",
  "RC0": "34",
  "RC1": "35",
  "RF0": "36",
  "RF1": "37",
  "RF2": "38",
  "RF3": "39",
  "RC2": "40",
  "RC3": "41",
  "RD0": "42",
  "RD1": "43",
  "RD2": "44",
  "RD3": "45",
  "RC4": "46",
  "RC5": "47",
  "RC6": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RD5: "bidirectional", RD6: "bidirectional", PAD: "power_in", RC7: "bidirectional", RD4: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RF4: "bidirectional", RF5: "bidirectional", RF6: "bidirectional", RF7: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", "VPP/~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_30: "power_in", VSS_31: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RF0: "bidirectional", RF1: "bidirectional", RF2: "bidirectional", RF3: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15386-xMV";
  override referencePrefix = "U?";
}

/**
 * 16KW FLASH, 2048B SRAM, TQFP-48(7x7mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF15386-xPT`. Reference prefix: `U?`.
 * Footprint filters: TQFP*7x7mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF15356-75-76-85-86-Data%20Sheet-40001866B.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class PIC16LF15386_xPT extends Component.withPins({
  "RD5": "3",
  "RD6": "4",
  "RC7": "1",
  "RD4": "2",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0": "8",
  "RB1": "9",
  "RB2": "10",
  "RB3": "11",
  "RF4": "12",
  "RF5": "13",
  "RF6": "14",
  "RF7": "15",
  "RB4": "16",
  "RB5": "17",
  "ICSPCLK/RB6": "18",
  "ICSPDAT/RB7": "19",
  "VPP/~{MCLR}/RE3": "20",
  "RA0": "21",
  "RA1": "22",
  "RA2": "23",
  "RA3": "24",
  "RA4": "25",
  "RA5": "26",
  "RE0": "27",
  "RE1": "28",
  "RE2": "29",
  "VDD_30": "30",
  "VSS_31": "31",
  "RA7": "32",
  "RA6": "33",
  "RC0": "34",
  "RC1": "35",
  "RF0": "36",
  "RF1": "37",
  "RF2": "38",
  "RF3": "39",
  "RC2": "40",
  "RC3": "41",
  "RD0": "42",
  "RD1": "43",
  "RD2": "44",
  "RD3": "45",
  "RC4": "46",
  "RC5": "47",
  "RC6": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RD5: "bidirectional", RD6: "bidirectional", RC7: "bidirectional", RD4: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RF4: "bidirectional", RF5: "bidirectional", RF6: "bidirectional", RF7: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", "VPP/~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_30: "power_in", VSS_31: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RF0: "bidirectional", RF1: "bidirectional", RF2: "bidirectional", RF3: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF15386-xPT";
  override referencePrefix = "U?";
}

/**
 * 8-bit Flash MCU, 32MHz, 16KB Flash, 1KB RAM, 256B EEPROM, QFN-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF1786-xML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001637C.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC16LF1786_xML extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "RA4": "3",
  "RA5": "4",
  "V_{SS}_5": "5",
  "RA7": "6",
  "RA6": "7",
  "RC0": "8",
  "RC1": "9",
  "RC2": "10",
  "RC3": "11",
  "RC4": "12",
  "RC5": "13",
  "RC6": "14",
  "RC7": "15",
  "V_{SS}_16": "16",
  "V_{DD}": "17",
  "RB0": "18",
  "RB1": "19",
  "RB2": "20",
  "RB3": "21",
  "RB4": "22",
  "RB5": "23",
  "ICSPCLK/RB6": "24",
  "ICSPDAT/RB7": "25",
  "RE3/~{MCLR}/V_{PP}": "26",
  "RA0": "27",
  "RA1": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", "V_{SS}_5": "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", "V_{SS}_16": "passive", "V_{DD}": "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", "RE3/~{MCLR}/V_{PP}": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF1786-xML";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 16KB Flash, 1KB RAM, 256B EEPROM, PDIP-40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF1786-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001637C.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC16LF1786_xP extends Component.withPins({
  "RE3/~{MCLR}/V_{PP}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "RE0": "8",
  "RE1": "9",
  "RE2": "10",
  "V_{DD}_11": "11",
  "V_{SS}_12": "12",
  "RA7": "13",
  "RA6": "14",
  "RC0": "15",
  "RC1": "16",
  "RC2": "17",
  "RC3": "18",
  "RD0": "19",
  "RD1": "20",
  "RD2": "21",
  "RD3": "22",
  "RC4": "23",
  "RC5": "24",
  "RC6": "25",
  "RC7": "26",
  "RD4": "27",
  "RD5": "28",
  "RD6": "29",
  "RD7": "30",
  "V_{SS}_31": "31",
  "V_{DD}_32": "32",
  "RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "ICSPCLK/RB6": "39",
  "ICSPDAT/RB7": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/V_{PP}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", "V_{DD}_11": "power_in", "V_{SS}_12": "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", "V_{SS}_31": "passive", "V_{DD}_32": "passive", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF1786-xP";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 16KB Flash, 1KB RAM, 256B EEPROM, SOIC-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF1786-xSO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001637C.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC16LF1786_xSO extends Component.withPins({
  "RE3/~{MCLR}/V_{PP}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "V_{SS}_8": "8",
  "RA7": "9",
  "RA6": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6": "17",
  "RC7": "18",
  "V_{SS}_19": "19",
  "V_{DD}": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "ICSPCLK/RB6": "27",
  "ICSPDAT/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/V_{PP}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", "V_{SS}_8": "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", "V_{SS}_19": "passive", "V_{DD}": "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF1786-xSO";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 16KB Flash, 1KB RAM, 256B EEPROM, SPDIP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF1786-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001637C.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC16LF1786_xSP extends Component.withPins({
  "RE3/~{MCLR}/V_{PP}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "V_{SS}_8": "8",
  "RA7": "9",
  "RA6": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6": "17",
  "RC7": "18",
  "V_{SS}_19": "19",
  "V_{DD}": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "ICSPCLK/RB6": "27",
  "ICSPDAT/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/V_{PP}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", "V_{SS}_8": "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", "V_{SS}_19": "passive", "V_{DD}": "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF1786-xSP";
  override referencePrefix = "U";
}

/**
 * 8-bit Flash MCU, 32MHz, 16KB Flash, 1KB RAM, 256B EEPROM, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF1786-xSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001637C.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC16LF1786_xSS extends Component.withPins({
  "RE3/~{MCLR}/V_{PP}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "V_{SS}_8": "8",
  "RA7": "9",
  "RA6": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "RC3": "14",
  "RC4": "15",
  "RC5": "16",
  "RC6": "17",
  "RC7": "18",
  "V_{SS}_19": "19",
  "V_{DD}": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RB4": "25",
  "RB5": "26",
  "ICSPCLK/RB6": "27",
  "ICSPDAT/RB7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RE3/~{MCLR}/V_{PP}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", "V_{SS}_8": "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", "V_{SS}_19": "passive", "V_{DD}": "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF1786-xSS";
  override referencePrefix = "U";
}

/**
 * PIC16LF18325, 8192W FLASH, 1024B SRAM, SOIC14
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF18325-ISL`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/40001795b.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class PIC16LF18325_ISL extends Component.withPins({
  "VDD": "1",
  "RA5/ANA5/T1CKI/SOSCIN/SOSCI/CLCIN3/CLKIN/OSC1": "2",
  "RA4/ANA4/T1G/SOSCO/CLKOUT/OSC2": "3",
  "RA3/~{MCLR}/VPP": "4",
  "DT/RX/SDA2/SDI2/CCP1/T3CKI/MDCIN2/ANC5/RC5": "5",
  "CLCIN1/SCL2/SCK2/T3G/ANC4/RC4": "6",
  "CLCIN0/~{SS1}/CCP2/T5G/MDMIN/C2IN3-/C1IN3-/ANC3/RC3": "7",
  "MDCIN1/C2IN2-/C1IN2-/ANC2/RC2": "8",
  "CLCIN2/SDA1/SDI/CCP4/C2IN1-/C1IN1-/ANC1/RC1": "9",
  "SCL1/SCK/T5CKI/C2IN0+/ANC0/RC0": "10",
  "RA2/ANA2/Vref-/DAC1Ref-/T0CKI/CCP3/CWG1IN/CWG2IN": "11",
  "RA1/ANA1/Vref+/C1IN0-/C2IN0-/DAC1Ref+/ICSPCLK": "12",
  "RA0/ANA0/C1IN0+/DAC1OUT/~{SS2}/ICSPDAT": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/ANA5/T1CKI/SOSCIN/SOSCI/CLCIN3/CLKIN/OSC1": "bidirectional", "RA4/ANA4/T1G/SOSCO/CLKOUT/OSC2": "bidirectional", "RA3/~{MCLR}/VPP": "bidirectional", "DT/RX/SDA2/SDI2/CCP1/T3CKI/MDCIN2/ANC5/RC5": "bidirectional", "CLCIN1/SCL2/SCK2/T3G/ANC4/RC4": "bidirectional", "CLCIN0/~{SS1}/CCP2/T5G/MDMIN/C2IN3-/C1IN3-/ANC3/RC3": "bidirectional", "MDCIN1/C2IN2-/C1IN2-/ANC2/RC2": "bidirectional", "CLCIN2/SDA1/SDI/CCP4/C2IN1-/C1IN1-/ANC1/RC1": "bidirectional", "SCL1/SCK/T5CKI/C2IN0+/ANC0/RC0": "bidirectional", "RA2/ANA2/Vref-/DAC1Ref-/T0CKI/CCP3/CWG1IN/CWG2IN": "bidirectional", "RA1/ANA1/Vref+/C1IN0-/C2IN0-/DAC1Ref+/ICSPCLK": "bidirectional", "RA0/ANA0/C1IN0+/DAC1OUT/~{SS2}/ICSPDAT": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF18325-ISL";
  override referencePrefix = "U";
}

/**
 * 8192W FLASH, 1024B SRAM, 256B EEPROM, QFN-20
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF18325-xGZ`. Reference prefix: `U`.
 * Footprint filters: UQFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001795E.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:UQFN-20-1EP_4x4mm_P0.5mm_EP2.8x2.8mm.
 */
export class PIC16LF18325_xGZ extends Component.withPins({
  "RA3/~{MCLR}/VPP": "1",
  "RC5": "2",
  "RC4": "3",
  "RC3": "4",
  "RC6": "5",
  "RC7": "6",
  "RB7": "7",
  "RB6": "8",
  "RB5": "9",
  "RB4": "10",
  "RC2": "11",
  "RC1": "12",
  "RC0": "13",
  "RA2": "14",
  "RA1/ICSPCLK": "15",
  "RA0/ICSPDAT": "16",
  "VSS_17": "17",
  "VDD": "18",
  "RA5": "19",
  "RA4": "20",
  "VSS_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RA3/~{MCLR}/VPP": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RB7: "bidirectional", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS_17: "power_in", VDD: "power_in", RA5: "bidirectional", RA4: "bidirectional", VSS_21: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF18325-xGZ";
  override referencePrefix = "U";
}

/**
 * 8192W FLASH, 1024B SRAM, 256B EEPROM,  QFN-16
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF18325-xJQ`. Reference prefix: `U`.
 * Footprint filters: UQFN*1EP*4x4mm*P0.65mm*EP2.6x2.6mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001795E.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:UQFN-16-1EP_4x4mm_P0.65mm_EP2.6x2.6mm.
 */
export class PIC16LF18325_xJQ extends Component.withPins({
  "RA5": "1",
  "RA4": "2",
  "RA3/~{MCLR}": "3",
  "RC5": "4",
  "RC4": "5",
  "RC3": "6",
  "RC2": "7",
  "RC1": "8",
  "RC0": "9",
  "RA2": "10",
  "RA1/ICSPCLK": "11",
  "RA0/ICSPDAT": "12",
  "VSS": "13",
  "NC_14": "14",
  "NC_15": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RA5: "bidirectional", RA4: "bidirectional", "RA3/~{MCLR}": "bidirectional", RC5: "bidirectional", RC4: "bidirectional", RC3: "bidirectional", RC2: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RA2: "bidirectional", "RA1/ICSPCLK": "bidirectional", "RA0/ICSPDAT": "bidirectional", VSS: "power_in", NC_14: "no_connect", NC_15: "no_connect", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF18325-xJQ";
  override referencePrefix = "U";
}

/**
 * 4096W FLASH, 256B SRAM, PDIP-40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF1904-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*40*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/40001569D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC16LF1904_IP extends Component.withPins({
  "~{MCLR}/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "RE0": "8",
  "RE1": "9",
  "RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "RA7": "13",
  "RA6": "14",
  "RC0": "15",
  "RC1": "16",
  "RC2": "17",
  "RC3": "18",
  "RD0": "19",
  "RD1": "20",
  "RD2": "21",
  "RD3": "22",
  "RC4": "23",
  "RC5": "24",
  "RC6": "25",
  "RC7": "26",
  "RD4": "27",
  "RD5": "28",
  "RD6": "29",
  "RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "RB6/ICSPCLK": "39",
  "RB7/ICSPDAT": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_11: "power_in", VSS_12: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_31: "passive", VDD_32: "passive", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF1904-IP";
  override referencePrefix = "U";
}

/**
 * 8192W FLASH, 512B SRAM, PDIP-40
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF1907-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*40*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/40001569D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC16LF1907_IP extends Component.withPins({
  "~{MCLR}/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "RE0": "8",
  "RE1": "9",
  "RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "RA7": "13",
  "RA6": "14",
  "RC0": "15",
  "RC1": "16",
  "RC2": "17",
  "RC3": "18",
  "RD0": "19",
  "RD1": "20",
  "RD2": "21",
  "RD3": "22",
  "RC4": "23",
  "RC5": "24",
  "RC6": "25",
  "RC7": "26",
  "RD4": "27",
  "RD5": "28",
  "RD6": "29",
  "RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0": "33",
  "RB1": "34",
  "RB2": "35",
  "RB3": "36",
  "RB4": "37",
  "RB5": "38",
  "RB6/ICSPCLK": "39",
  "RB7/ICSPDAT": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}/RE3": "bidirectional", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_11: "power_in", VSS_12: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_31: "passive", VDD_32: "passive", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/ICSPCLK": "bidirectional", "RB7/ICSPDAT": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF1907-IP";
  override referencePrefix = "U";
}

/**
 * 8kW FLASH, 1kB RAM, 256B EEPROM, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF19195-x5LX`. Reference prefix: `U`.
 * Footprint filters: VQFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:VQFN-64-1EP_9x9mm_P0.5mm_EP5.4x5.4mm.
 */
export class PIC16LF19195_x5LX extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
  "VSS_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", VSS_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF19195-x5LX";
  override referencePrefix = "U";
}

/**
 * 8kW FLASH, 1kB RAM, 256B EEPROM, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF19195-xMR`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.4x5.4mm.
 */
export class PIC16LF19195_xMR extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
  "VSS_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", VSS_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF19195-xMR";
  override referencePrefix = "U";
}

/**
 * 8kW FLASH, 1kB RAM, 256B EEPROM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF19195-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class PIC16LF19195_xPT extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF19195-xPT";
  override referencePrefix = "U";
}

/**
 * 16kW FLASH, 2kB RAM, 256B EEPROM, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF19196-x5LX`. Reference prefix: `U`.
 * Footprint filters: VQFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:VQFN-64-1EP_9x9mm_P0.5mm_EP5.4x5.4mm.
 */
export class PIC16LF19196_x5LX extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
  "VSS_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", VSS_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF19196-x5LX";
  override referencePrefix = "U";
}

/**
 * 16kW FLASH, 2kB RAM, 256B EEPROM, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF19196-xMR`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.4x5.4mm.
 */
export class PIC16LF19196_xMR extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
  "VSS_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", VSS_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF19196-xMR";
  override referencePrefix = "U";
}

/**
 * 16kW FLASH, 2kB RAM, 256B EEPROM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF19196-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class PIC16LF19196_xPT extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF19196-xPT";
  override referencePrefix = "U";
}

/**
 * 32kW FLASH, 4kB RAM, 256B EEPROM, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF19197-x5LX`. Reference prefix: `U`.
 * Footprint filters: VQFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:VQFN-64-1EP_9x9mm_P0.5mm_EP5.4x5.4mm.
 */
export class PIC16LF19197_x5LX extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
  "VSS_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", VSS_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF19197-x5LX";
  override referencePrefix = "U";
}

/**
 * 32kW FLASH, 4kB RAM, 256B EEPROM, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF19197-xMR`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.4x5.4mm.
 */
export class PIC16LF19197_xMR extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
  "VSS_65": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", VSS_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF19197-xMR";
  override referencePrefix = "U";
}

/**
 * 32kW FLASH, 4kB RAM, 256B EEPROM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_PIC16:PIC16LF19197-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC16LF19195-6-7-Data-Sheet-40001873D.pdf
 * Keywords: FLASH-Based 8-Bit CMOS Microcontroller Low Power.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class PIC16LF19197_xPT extends Component.withPins({
  "VLCD2/RE1": "1",
  "VLCD1/RE0": "2",
  "SEG42/RG0": "3",
  "SEG43/RG1": "4",
  "SEG44/RG2": "5",
  "SEG45/RG3": "6",
  "VPP/~{MCLR}/RG5": "7",
  "SEG26/RG4": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "SEG25/RF7": "11",
  "SEG24/RF6": "12",
  "SEG23/RF5": "13",
  "SEG22/RF4": "14",
  "SEG21/RF3": "15",
  "SEG20/RF2": "16",
  "SEG19/RF1": "17",
  "SEG41/RF0": "18",
  "COM7/SEG15/RG7": "19",
  "COM6/RG6": "20",
  "RA3/SEG35": "21",
  "RA2/SEG34": "22",
  "RA1/SEG18": "23",
  "RA0/SEG33": "24",
  "COM5/RH1": "25",
  "COM4/RH0": "26",
  "RA5": "27",
  "RA4/SEG14": "28",
  "RC1": "29",
  "RC0": "30",
  "RC6/SEG27": "31",
  "RC7/SEG28": "32",
  "RC2/SEG13": "33",
  "RC3/SEG17": "34",
  "RC4/SEG16": "35",
  "RC5/SEG12": "36",
  "RB7/SEG39/ICSPDAT": "37",
  "VDD_38": "38",
  "RA7/SEG37": "39",
  "RA6/SEG36": "40",
  "VSS_41": "41",
  "RB6/SEG38/ICSPCLK": "42",
  "RB5/SEG29": "43",
  "RB4/SEG11": "44",
  "RB3/SEG10": "45",
  "RB2/SEG9": "46",
  "RB1/SEG8": "47",
  "RB0/SEG30": "48",
  "RD7/SEG7": "49",
  "RD6/SEG6": "50",
  "RD5/SEG5": "51",
  "RD4/SEG4": "52",
  "RD3/SEG3": "53",
  "RD2/SEG2": "54",
  "RD1/SEG1": "55",
  "CFLY2/SEG40/RH3": "56",
  "CFLY1/SEG32/RH2": "57",
  "RD0/SEG0": "58",
  "SEG31/RE7": "59",
  "COM3/RE6": "60",
  "COM2/RE5": "61",
  "COM1/RE4": "62",
  "COM0/RE3": "63",
  "VLCD3": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VLCD2/RE1": "bidirectional", "VLCD1/RE0": "bidirectional", "SEG42/RG0": "bidirectional", "SEG43/RG1": "bidirectional", "SEG44/RG2": "bidirectional", "SEG45/RG3": "bidirectional", "VPP/~{MCLR}/RG5": "bidirectional", "SEG26/RG4": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "SEG25/RF7": "bidirectional", "SEG24/RF6": "bidirectional", "SEG23/RF5": "bidirectional", "SEG22/RF4": "bidirectional", "SEG21/RF3": "bidirectional", "SEG20/RF2": "bidirectional", "SEG19/RF1": "bidirectional", "SEG41/RF0": "bidirectional", "COM7/SEG15/RG7": "bidirectional", "COM6/RG6": "bidirectional", "RA3/SEG35": "bidirectional", "RA2/SEG34": "bidirectional", "RA1/SEG18": "bidirectional", "RA0/SEG33": "bidirectional", "COM5/RH1": "bidirectional", "COM4/RH0": "bidirectional", RA5: "bidirectional", "RA4/SEG14": "bidirectional", RC1: "bidirectional", RC0: "bidirectional", "RC6/SEG27": "bidirectional", "RC7/SEG28": "bidirectional", "RC2/SEG13": "bidirectional", "RC3/SEG17": "bidirectional", "RC4/SEG16": "bidirectional", "RC5/SEG12": "bidirectional", "RB7/SEG39/ICSPDAT": "bidirectional", VDD_38: "power_in", "RA7/SEG37": "bidirectional", "RA6/SEG36": "bidirectional", VSS_41: "passive", "RB6/SEG38/ICSPCLK": "bidirectional", "RB5/SEG29": "bidirectional", "RB4/SEG11": "bidirectional", "RB3/SEG10": "bidirectional", "RB2/SEG9": "bidirectional", "RB1/SEG8": "bidirectional", "RB0/SEG30": "bidirectional", "RD7/SEG7": "bidirectional", "RD6/SEG6": "bidirectional", "RD5/SEG5": "bidirectional", "RD4/SEG4": "bidirectional", "RD3/SEG3": "bidirectional", "RD2/SEG2": "bidirectional", "RD1/SEG1": "bidirectional", "CFLY2/SEG40/RH3": "bidirectional", "CFLY1/SEG32/RH2": "bidirectional", "RD0/SEG0": "bidirectional", "SEG31/RE7": "bidirectional", "COM3/RE6": "bidirectional", "COM2/RE5": "bidirectional", "COM1/RE4": "bidirectional", "COM0/RE3": "bidirectional", VLCD3: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC16:PIC16LF19197-xPT";
  override referencePrefix = "U";
}
