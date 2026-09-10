// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 18-Pin Flash Microcontroller 4K Flash 256byte RAM
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F1220-SO`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x11.6mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39605F.pdf
 * Keywords: RAM ADC UART PWM.
 * Default footprint: Package_SO:SOIC-18W_7.5x11.6mm_P1.27mm.
 */
export class PIC18F1220_SO extends Component.withPins({
  "RA0/AN0": "1",
  "RA1/AN1/LVDIN": "2",
  "RA4/TOCKI": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "Vss": "5",
  "RA2/AN2/Vref-": "6",
  "RA3/AN3/Vref+": "7",
  "INT0/AN4/RB0": "8",
  "INT1/CK/TX/AN5/RB1": "9",
  "KBI0/DT/RX/AN6/RB4": "10",
  "KBI1/PGM/RB5": "11",
  "KBI2/P1C/T13CKI/T1OSO/PGC/RB6": "12",
  "KBI3/P1D/T1OSI/PGD/RB7": "13",
  "Vdd": "14",
  "OSC2/CLKO/RA6": "15",
  "OSC1/CLKI/RA7": "16",
  "INT2/P1B/RB2": "17",
  "P1A/CCP1/RB3": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RA0/AN0": "input", "RA1/AN1/LVDIN": "input", "RA4/TOCKI": "input", "~{MCLR}/Vpp/RA5": "input", Vss: "power_in", "RA2/AN2/Vref-": "input", "RA3/AN3/Vref+": "input", "INT0/AN4/RB0": "input", "INT1/CK/TX/AN5/RB1": "input", "KBI0/DT/RX/AN6/RB4": "input", "KBI1/PGM/RB5": "input", "KBI2/P1C/T13CKI/T1OSO/PGC/RB6": "input", "KBI3/P1D/T1OSI/PGD/RB7": "input", Vdd: "power_in", "OSC2/CLKO/RA6": "input", "OSC1/CLKI/RA7": "input", "INT2/P1B/RB2": "input", "P1A/CCP1/RB3": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F1220-SO";
  override referencePrefix = "U";
}

/**
 * 18-Pin Flash Microcontroller 8K Flash 256byte RAM
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F1320-SO`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x11.6mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39605F.pdf
 * Keywords: RAM ADC UART PWM.
 * Default footprint: Package_SO:SOIC-18W_7.5x11.6mm_P1.27mm.
 */
export class PIC18F1320_SO extends Component.withPins({
  "RA0/AN0": "1",
  "RA1/AN1/LVDIN": "2",
  "RA4/TOCKI": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "Vss": "5",
  "RA2/AN2/Vref-": "6",
  "RA3/AN3/Vref+": "7",
  "INT0/AN4/RB0": "8",
  "INT1/CK/TX/AN5/RB1": "9",
  "KBI0/DT/RX/AN6/RB4": "10",
  "KBI1/PGM/RB5": "11",
  "KBI2/P1C/T13CKI/T1OSO/PGC/RB6": "12",
  "KBI3/P1D/T1OSI/PGD/RB7": "13",
  "Vdd": "14",
  "OSC2/CLKO/RA6": "15",
  "OSC1/CLKI/RA7": "16",
  "INT2/P1B/RB2": "17",
  "P1A/CCP1/RB3": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RA0/AN0": "input", "RA1/AN1/LVDIN": "input", "RA4/TOCKI": "input", "~{MCLR}/Vpp/RA5": "input", Vss: "power_in", "RA2/AN2/Vref-": "input", "RA3/AN3/Vref+": "input", "INT0/AN4/RB0": "input", "INT1/CK/TX/AN5/RB1": "input", "KBI0/DT/RX/AN6/RB4": "input", "KBI1/PGM/RB5": "input", "KBI2/P1C/T13CKI/T1OSO/PGC/RB6": "input", "KBI3/P1D/T1OSI/PGD/RB7": "input", Vdd: "power_in", "OSC2/CLKO/RA6": "input", "OSC1/CLKI/RA7": "input", "INT2/P1B/RB2": "input", "P1A/CCP1/RB3": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F1320-SO";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 512 SRAM, 256 EEPROM, USB, nanoWatt XLP, DIP20
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F13K50-EP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, PDIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/41350c.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class PIC18F13K50_EP extends Component.withPins({
  "VDD": "1",
  "RA5/IOCA5/OSC1/CLKIN": "2",
  "RA4/IOCA3/AN3/OSC2/CLKOUT": "3",
  "RA3/IOCA3/~{MCLR}/Vpp": "4",
  "T0CKI/CCP1/P1A/RC5": "5",
  "SRQ/C12OUT/P1B/RC4": "6",
  "PGM/C12IN3-/P1C/AN7/RC3": "7",
  "T1OSCI/T13CKI/SS/AN8/RC6": "8",
  "T1OSCO/SDO/AN9/RC7": "9",
  "RB7/IOCB7/TX/CK": "10",
  "RB6/IOCB6/SCK/SCL": "11",
  "RB5/IOCB5/AN11/RX/DT": "12",
  "RB4/IOCB4/AN10/SDI/SDA": "13",
  "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "14",
  "INT1/C12IN1-/VREF-AN5/RC1": "15",
  "INT0/C12IN+/VREF+/AN4/RC0": "16",
  "VUSB": "17",
  "RA1/IOCA1/D-/PGC": "18",
  "RA0/IOCA0/D+/PGD": "19",
  "VSS": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/IOCA5/OSC1/CLKIN": "bidirectional", "RA4/IOCA3/AN3/OSC2/CLKOUT": "bidirectional", "RA3/IOCA3/~{MCLR}/Vpp": "input", "T0CKI/CCP1/P1A/RC5": "bidirectional", "SRQ/C12OUT/P1B/RC4": "bidirectional", "PGM/C12IN3-/P1C/AN7/RC3": "bidirectional", "T1OSCI/T13CKI/SS/AN8/RC6": "bidirectional", "T1OSCO/SDO/AN9/RC7": "bidirectional", "RB7/IOCB7/TX/CK": "bidirectional", "RB6/IOCB6/SCK/SCL": "bidirectional", "RB5/IOCB5/AN11/RX/DT": "bidirectional", "RB4/IOCB4/AN10/SDI/SDA": "bidirectional", "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "bidirectional", "INT1/C12IN1-/VREF-AN5/RC1": "bidirectional", "INT0/C12IN+/VREF+/AN4/RC0": "bidirectional", VUSB: "passive", "RA1/IOCA1/D-/PGC": "bidirectional", "RA0/IOCA0/D+/PGD": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F13K50-EP";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 512 SRAM, 256 EEPROM, USB, nanoWatt XLP, SOIC20
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F13K50-ESO`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/41350c.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class PIC18F13K50_ESO extends Component.withPins({
  "VDD": "1",
  "RA5/IOCA5/OSC1/CLKIN": "2",
  "RA4/IOCA3/AN3/OSC2/CLKOUT": "3",
  "RA3/IOCA3/~{MCLR}/Vpp": "4",
  "T0CKI/CCP1/P1A/RC5": "5",
  "SRQ/C12OUT/P1B/RC4": "6",
  "PGM/C12IN3-/P1C/AN7/RC3": "7",
  "T1OSCI/T13CKI/SS/AN8/RC6": "8",
  "T1OSCO/SDO/AN9/RC7": "9",
  "RB7/IOCB7/TX/CK": "10",
  "RB6/IOCB6/SCK/SCL": "11",
  "RB5/IOCB5/AN11/RX/DT": "12",
  "RB4/IOCB4/AN10/SDI/SDA": "13",
  "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "14",
  "INT1/C12IN1-/VREF-AN5/RC1": "15",
  "INT0/C12IN+/VREF+/AN4/RC0": "16",
  "VUSB": "17",
  "RA1/IOCA1/D-/PGC": "18",
  "RA0/IOCA0/D+/PGD": "19",
  "VSS": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/IOCA5/OSC1/CLKIN": "bidirectional", "RA4/IOCA3/AN3/OSC2/CLKOUT": "bidirectional", "RA3/IOCA3/~{MCLR}/Vpp": "input", "T0CKI/CCP1/P1A/RC5": "bidirectional", "SRQ/C12OUT/P1B/RC4": "bidirectional", "PGM/C12IN3-/P1C/AN7/RC3": "bidirectional", "T1OSCI/T13CKI/SS/AN8/RC6": "bidirectional", "T1OSCO/SDO/AN9/RC7": "bidirectional", "RB7/IOCB7/TX/CK": "bidirectional", "RB6/IOCB6/SCK/SCL": "bidirectional", "RB5/IOCB5/AN11/RX/DT": "bidirectional", "RB4/IOCB4/AN10/SDI/SDA": "bidirectional", "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "bidirectional", "INT1/C12IN1-/VREF-AN5/RC1": "bidirectional", "INT0/C12IN+/VREF+/AN4/RC0": "bidirectional", VUSB: "passive", "RA1/IOCA1/D-/PGC": "bidirectional", "RA0/IOCA0/D+/PGD": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F13K50-ESO";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 512 SRAM, 256 EEPROM, USB, nanoWatt XLP, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F13K50-ESS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/41350c.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 */
export class PIC18F13K50_ESS extends Component.withPins({
  "VDD": "1",
  "RA5/IOCA5/OSC1/CLKIN": "2",
  "RA4/IOCA3/AN3/OSC2/CLKOUT": "3",
  "RA3/IOCA3/~{MCLR}/Vpp": "4",
  "T0CKI/CCP1/P1A/RC5": "5",
  "SRQ/C12OUT/P1B/RC4": "6",
  "PGM/C12IN3-/P1C/AN7/RC3": "7",
  "T1OSCI/T13CKI/SS/AN8/RC6": "8",
  "T1OSCO/SDO/AN9/RC7": "9",
  "RB7/IOCB7/TX/CK": "10",
  "RB6/IOCB6/SCK/SCL": "11",
  "RB5/IOCB5/AN11/RX/DT": "12",
  "RB4/IOCB4/AN10/SDI/SDA": "13",
  "INT2/CVRef/C12IN2-/P1D/AN6/RC2": "14",
  "INT1/C12IN1-/VREF-AN5/RC1": "15",
  "INT0/C12IN+/VREF+/AN4/RC0": "16",
  "VUSB": "17",
  "RA1/IOCA1/D-/PGC": "18",
  "RA0/IOCA0/D+/PGD": "19",
  "VSS": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/IOCA5/OSC1/CLKIN": "bidirectional", "RA4/IOCA3/AN3/OSC2/CLKOUT": "bidirectional", "RA3/IOCA3/~{MCLR}/Vpp": "input", "T0CKI/CCP1/P1A/RC5": "bidirectional", "SRQ/C12OUT/P1B/RC4": "bidirectional", "PGM/C12IN3-/P1C/AN7/RC3": "bidirectional", "T1OSCI/T13CKI/SS/AN8/RC6": "bidirectional", "T1OSCO/SDO/AN9/RC7": "bidirectional", "RB7/IOCB7/TX/CK": "bidirectional", "RB6/IOCB6/SCK/SCL": "bidirectional", "RB5/IOCB5/AN11/RX/DT": "bidirectional", "RB4/IOCB4/AN10/SDI/SDA": "bidirectional", "INT2/CVRef/C12IN2-/P1D/AN6/RC2": "bidirectional", "INT1/C12IN1-/VREF-AN5/RC1": "bidirectional", "INT0/C12IN+/VREF+/AN4/RC0": "bidirectional", VUSB: "passive", "RA1/IOCA1/D-/PGC": "bidirectional", "RA0/IOCA0/D+/PGD": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F13K50-ESS";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768 SRAM, 256 EEPROM, USB, nanoWatt XLP, DIP20
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F14K50-EP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, PDIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/41350c.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class PIC18F14K50_EP extends Component.withPins({
  "VDD": "1",
  "RA5/IOCA5/OSC1/CLKIN": "2",
  "RA4/IOCA3/AN3/OSC2/CLKOUT": "3",
  "RA3/IOCA3/~{MCLR}/Vpp": "4",
  "T0CKI/CCP1/P1A/RC5": "5",
  "SRQ/C12OUT/P1B/RC4": "6",
  "PGM/C12IN3-/P1C/AN7/RC3": "7",
  "T1OSCI/T13CKI/SS/AN8/RC6": "8",
  "T1OSCO/SDO/AN9/RC7": "9",
  "RB7/IOCB7/TX/CK": "10",
  "RB6/IOCB6/SCK/SCL": "11",
  "RB5/IOCB5/AN11/RX/DT": "12",
  "RB4/IOCB4/AN10/SDI/SDA": "13",
  "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "14",
  "INT1/C12IN1-/VREF-AN5/RC1": "15",
  "INT0/C12IN+/VREF+/AN4/RC0": "16",
  "VUSB": "17",
  "RA1/IOCA1/D-/PGC": "18",
  "RA0/IOCA0/D+/PGD": "19",
  "VSS": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/IOCA5/OSC1/CLKIN": "bidirectional", "RA4/IOCA3/AN3/OSC2/CLKOUT": "bidirectional", "RA3/IOCA3/~{MCLR}/Vpp": "input", "T0CKI/CCP1/P1A/RC5": "bidirectional", "SRQ/C12OUT/P1B/RC4": "bidirectional", "PGM/C12IN3-/P1C/AN7/RC3": "bidirectional", "T1OSCI/T13CKI/SS/AN8/RC6": "bidirectional", "T1OSCO/SDO/AN9/RC7": "bidirectional", "RB7/IOCB7/TX/CK": "bidirectional", "RB6/IOCB6/SCK/SCL": "bidirectional", "RB5/IOCB5/AN11/RX/DT": "bidirectional", "RB4/IOCB4/AN10/SDI/SDA": "bidirectional", "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "bidirectional", "INT1/C12IN1-/VREF-AN5/RC1": "bidirectional", "INT0/C12IN+/VREF+/AN4/RC0": "bidirectional", VUSB: "passive", "RA1/IOCA1/D-/PGC": "bidirectional", "RA0/IOCA0/D+/PGD": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F14K50-EP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768 SRAM, 256 EEPROM, USB, nanoWatt XLP, SOIC20
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F14K50-ESO`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/41350c.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class PIC18F14K50_ESO extends Component.withPins({
  "VDD": "1",
  "RA5/IOCA5/OSC1/CLKIN": "2",
  "RA4/IOCA3/AN3/OSC2/CLKOUT": "3",
  "RA3/IOCA3/~{MCLR}/Vpp": "4",
  "T0CKI/CCP1/P1A/RC5": "5",
  "SRQ/C12OUT/P1B/RC4": "6",
  "PGM/C12IN3-/P1C/AN7/RC3": "7",
  "T1OSCI/T13CKI/SS/AN8/RC6": "8",
  "T1OSCO/SDO/AN9/RC7": "9",
  "RB7/IOCB7/TX/CK": "10",
  "RB6/IOCB6/SCK/SCL": "11",
  "RB5/IOCB5/AN11/RX/DT": "12",
  "RB4/IOCB4/AN10/SDI/SDA": "13",
  "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "14",
  "INT1/C12IN1-/VREF-AN5/RC1": "15",
  "INT0/C12IN+/VREF+/AN4/RC0": "16",
  "VUSB": "17",
  "RA1/IOCA1/D-/PGC": "18",
  "RA0/IOCA0/D+/PGD": "19",
  "VSS": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/IOCA5/OSC1/CLKIN": "bidirectional", "RA4/IOCA3/AN3/OSC2/CLKOUT": "bidirectional", "RA3/IOCA3/~{MCLR}/Vpp": "input", "T0CKI/CCP1/P1A/RC5": "bidirectional", "SRQ/C12OUT/P1B/RC4": "bidirectional", "PGM/C12IN3-/P1C/AN7/RC3": "bidirectional", "T1OSCI/T13CKI/SS/AN8/RC6": "bidirectional", "T1OSCO/SDO/AN9/RC7": "bidirectional", "RB7/IOCB7/TX/CK": "bidirectional", "RB6/IOCB6/SCK/SCL": "bidirectional", "RB5/IOCB5/AN11/RX/DT": "bidirectional", "RB4/IOCB4/AN10/SDI/SDA": "bidirectional", "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "bidirectional", "INT1/C12IN1-/VREF-AN5/RC1": "bidirectional", "INT0/C12IN+/VREF+/AN4/RC0": "bidirectional", VUSB: "passive", "RA1/IOCA1/D-/PGC": "bidirectional", "RA0/IOCA0/D+/PGD": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F14K50-ESO";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768 SRAM, 256 EEPROM, USB, nanoWatt XLP, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F14K50-ESS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/41350c.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 */
export class PIC18F14K50_ESS extends Component.withPins({
  "VDD": "1",
  "RA5/IOCA5/OSC1/CLKIN": "2",
  "RA4/IOCA3/AN3/OSC2/CLKOUT": "3",
  "RA3/IOCA3/~{MCLR}/Vpp": "4",
  "T0CKI/CCP1/P1A/RC5": "5",
  "SRQ/C12OUT/P1B/RC4": "6",
  "PGM/C12IN3-/P1C/AN7/RC3": "7",
  "T1OSCI/T13CKI/SS/AN8/RC6": "8",
  "T1OSCO/SDO/AN9/RC7": "9",
  "RB7/IOCB7/TX/CK": "10",
  "RB6/IOCB6/SCK/SCL": "11",
  "RB5/IOCB5/AN11/RX/DT": "12",
  "RB4/IOCB4/AN10/SDI/SDA": "13",
  "INT2/CVRef/C12IN2-/P1D/AN6/RC2": "14",
  "INT1/C12IN1-/VREF-AN5/RC1": "15",
  "INT0/C12IN+/VREF+/AN4/RC0": "16",
  "VUSB": "17",
  "RA1/IOCA1/D-/PGC": "18",
  "RA0/IOCA0/D+/PGD": "19",
  "VSS": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/IOCA5/OSC1/CLKIN": "bidirectional", "RA4/IOCA3/AN3/OSC2/CLKOUT": "bidirectional", "RA3/IOCA3/~{MCLR}/Vpp": "input", "T0CKI/CCP1/P1A/RC5": "bidirectional", "SRQ/C12OUT/P1B/RC4": "bidirectional", "PGM/C12IN3-/P1C/AN7/RC3": "bidirectional", "T1OSCI/T13CKI/SS/AN8/RC6": "bidirectional", "T1OSCO/SDO/AN9/RC7": "bidirectional", "RB7/IOCB7/TX/CK": "bidirectional", "RB6/IOCB6/SCK/SCL": "bidirectional", "RB5/IOCB5/AN11/RX/DT": "bidirectional", "RB4/IOCB4/AN10/SDI/SDA": "bidirectional", "INT2/CVRef/C12IN2-/P1D/AN6/RC2": "bidirectional", "INT1/C12IN1-/VREF-AN5/RC1": "bidirectional", "INT0/C12IN+/VREF+/AN4/RC0": "bidirectional", VUSB: "passive", "RA1/IOCA1/D-/PGC": "bidirectional", "RA0/IOCA0/D+/PGD": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F14K50-ESS";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, QFN28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2331-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18F2331_IML extends Component.withPins({
  "RA2/AN2/Vref-/CAP1/INDX": "1",
  "RA3/AN3/Vref+/CAP2/QEA": "2",
  "RA4/AN4/CAP3/QEB": "3",
  "AVDD": "4",
  "AVSS": "5",
  "RA7/OSC1/CLKI": "6",
  "RA6/OSC2/CLKO": "7",
  "T1OSO/T1CKI/RC0": "8",
  "~{FLTA}/T1OSI/CCP2/RC1": "9",
  "~{FLTB}/CCP1/RC2": "10",
  "INT0/T5CKI/T0CKI/RC3": "11",
  "INT1/SDI/SDA/RC4": "12",
  "INT2/SCK/SCL/RC5": "13",
  "TX/~{SS}/CK/RC6": "14",
  "RX/SDO/DT/RC7": "15",
  "VSS": "16",
  "VDD": "17",
  "RB0/PWM0": "18",
  "RB1/PWM1": "19",
  "RB2/PWM2": "20",
  "RB3/PWM3": "21",
  "RB4/KBI0/PWM5": "22",
  "RB5/KBI1/PWM4/PGM": "23",
  "RB6/KBI2/PGC": "24",
  "RB7/KBI3/PGD": "25",
  "~{MCLR}/Vpp": "26",
  "RA0/AN0": "27",
  "RA1/AN1": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2331-IML";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2331-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18F2331_ISO extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CAP1/INDX": "4",
  "RA3/AN3/Vref+/CAP2/QEA": "5",
  "RA4/AN4/CAP3/QEB": "6",
  "AVDD": "7",
  "AVSS": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T1CKI/RC0": "11",
  "~{FLTA}/T1OSI/CCP2/RC1": "12",
  "~{FLTB}/CCP1/RC2": "13",
  "INT0/T5CKI/T0CKI/RC3": "14",
  "INT1/SDI/SDA/RC4": "15",
  "INT2/SCK/SCL/RC5": "16",
  "TX/~{SS}/CK/RC6": "17",
  "RX/SDO/DT/RC7": "18",
  "VSS": "19",
  "VDD": "20",
  "RB0/PWM0": "21",
  "RB1/PWM1": "22",
  "RB2/PWM2": "23",
  "RB3/PWM3": "24",
  "RB4/KBI0/PWM5": "25",
  "RB5/KBI1/PWM4/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2331-ISO";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2331-ISP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, PDIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18F2331_ISP extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CAP1/INDX": "4",
  "RA3/AN3/Vref+/CAP2/QEA": "5",
  "RA4/AN4/CAP3/QEB": "6",
  "AVDD": "7",
  "AVSS": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T1CKI/RC0": "11",
  "~{FLTA}/T1OSI/CCP2/RC1": "12",
  "~{FLTB}/CCP1/RC2": "13",
  "INT0/T5CKI/T0CKI/RC3": "14",
  "INT1/SDI/SDA/RC4": "15",
  "INT2/SCK/SCL/RC5": "16",
  "TX/~{SS}/CK/RC6": "17",
  "RX/SDO/DT/RC7": "18",
  "VSS": "19",
  "VDD": "20",
  "RB0/PWM0": "21",
  "RB1/PWM1": "22",
  "RB2/PWM2": "23",
  "RB3/PWM3": "24",
  "RB4/KBI0/PWM5": "25",
  "RB5/KBI1/PWM4/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2331-ISP";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 512Byte RAM, 256Byte EEPROM, PIC18 Microcontroller ADC PWM SPI I2C USART in SSOP28 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F23K20_ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001303H.pdf
 * Keywords: microcontroller PIC18F flash XLP.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC18F23K20_ISS extends Component.withPins({
  "~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/Vref-AN2": "4",
  "RA3/Vref+AN3": "5",
  "RA4": "6",
  "RA5/AN4": "7",
  "Vss_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "RC0": "11",
  "CCP2/RC1": "12",
  "CCP1/RC2": "13",
  "SCL/SCK/RC3": "14",
  "SDA/SDI/RC4": "15",
  "SDO/RC5": "16",
  "TX/RC6": "17",
  "RX/RC7": "18",
  "Vss_19": "19",
  "Vdd": "20",
  "AN12/INT0/RB0": "21",
  "AN10/INT1/RB1": "22",
  "AN8/INT2/RB2": "23",
  "AN9/RB3": "24",
  "AN11/RB4": "25",
  "PGM/RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/RE3": "bidirectional", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/Vref-AN2": "bidirectional", "RA3/Vref+AN3": "bidirectional", RA4: "power_in", "RA5/AN4": "bidirectional", Vss_8: "power_in", "RA7/OSC1/CLKIN": "input", "RA6/OSC2/CLKOUT": "input", RC0: "bidirectional", "CCP2/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/RC6": "bidirectional", "RX/RC7": "bidirectional", Vss_19: "power_in", Vdd: "power_in", "AN12/INT0/RB0": "bidirectional", "AN10/INT1/RB1": "bidirectional", "AN8/INT2/RB2": "bidirectional", "AN9/RB3": "bidirectional", "AN11/RB4": "bidirectional", "PGM/RB5": "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F23K20_ISS";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 512B SRAM, 256B EEPROM, nanoWatt XLP, 2.3V to 5.5V, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F23K22-xSO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001412G.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18F23K22_xSO extends Component.withPins({
  "~{MCLR}/VPP/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1_CLKIN": "9",
  "RA6/OSC2_CLKOUT": "10",
  "RC0/SOSCO": "11",
  "RC1/SOSCI": "12",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP/RE3": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1_CLKIN": "bidirectional", "RA6/OSC2_CLKOUT": "bidirectional", "RC0/SOSCO": "bidirectional", "RC1/SOSCI": "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F23K22-xSO";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 512B SRAM, 256B EEPROM, nanoWatt XLP, 2.3V to 5.5V, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F23K22-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001412G.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18F23K22_xSP extends Component.withPins({
  "~{MCLR}/VPP/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1_CLKIN": "9",
  "RA6/OSC2_CLKOUT": "10",
  "RC0/SOSCO": "11",
  "RC1/SOSCI": "12",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP/RE3": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1_CLKIN": "bidirectional", "RA6/OSC2_CLKOUT": "bidirectional", "RC0/SOSCO": "bidirectional", "RC1/SOSCI": "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F23K22-xSP";
  override referencePrefix = "U";
}

/**
 * MCU 16k Flash, 768B SRAM, 256B EEPROM, ADC, QFN-28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2420-xML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39631E.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18F2420_xML extends Component.withPins({
  "RE3/~{MCLR}": "1",
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
  "RB6": "27",
  "RB7": "28",
  "EP": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2420-xML";
  override referencePrefix = "U";
}

/**
 * MCU 16k Flash, 768B SRAM, 256B EEPROM, ADC, DIP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2420-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39631E.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class PIC18F2420_xSP extends Component.withPins({
  "RE3/~{MCLR}": "1",
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
  "RB6": "27",
  "RB7": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2420-xSP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, QFN28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2431-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18F2431_IML extends Component.withPins({
  "RA2/AN2/Vref-/CAP1/INDX": "1",
  "RA3/AN3/Vref+/CAP2/QEA": "2",
  "RA4/AN4/CAP3/QEB": "3",
  "AVDD": "4",
  "AVSS": "5",
  "RA7/OSC1/CLKI": "6",
  "RA6/OSC2/CLKO": "7",
  "T1OSO/T1CKI/RC0": "8",
  "~{FLTA}/T1OSI/CCP2/RC1": "9",
  "~{FLTB}/CCP1/RC2": "10",
  "INT0/T5CKI/T0CKI/RC3": "11",
  "INT1/SDI/SDA/RC4": "12",
  "INT2/SCK/SCL/RC5": "13",
  "TX/~{SS}/CK/RC6": "14",
  "RX/SDO/DT/RC7": "15",
  "VSS": "16",
  "VDD": "17",
  "RB0/PWM0": "18",
  "RB1/PWM1": "19",
  "RB2/PWM2": "20",
  "RB3/PWM3": "21",
  "RB4/KBI0/PWM5": "22",
  "RB5/KBI1/PWM4/PGM": "23",
  "RB6/KBI2/PGC": "24",
  "RB7/KBI3/PGD": "25",
  "~{MCLR}/Vpp": "26",
  "RA0/AN0": "27",
  "RA1/AN1": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2431-IML";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2431-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18F2431_ISO extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CAP1/INDX": "4",
  "RA3/AN3/Vref+/CAP2/QEA": "5",
  "RA4/AN4/CAP3/QEB": "6",
  "AVDD": "7",
  "AVSS": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T1CKI/RC0": "11",
  "~{FLTA}/T1OSI/CCP2/RC1": "12",
  "~{FLTB}/CCP1/RC2": "13",
  "INT0/T5CKI/T0CKI/RC3": "14",
  "INT1/SDI/SDA/RC4": "15",
  "INT2/SCK/SCL/RC5": "16",
  "TX/~{SS}/CK/RC6": "17",
  "RX/SDO/DT/RC7": "18",
  "VSS": "19",
  "VDD": "20",
  "RB0/PWM0": "21",
  "RB1/PWM1": "22",
  "RB2/PWM2": "23",
  "RB3/PWM3": "24",
  "RB4/KBI0/PWM5": "25",
  "RB5/KBI1/PWM4/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2431-ISO";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2431-ISP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, PDIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18F2431_ISP extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CAP1/INDX": "4",
  "RA3/AN3/Vref+/CAP2/QEA": "5",
  "RA4/AN4/CAP3/QEB": "6",
  "AVDD": "7",
  "AVSS": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T1CKI/RC0": "11",
  "~{FLTA}/T1OSI/CCP2/RC1": "12",
  "~{FLTB}/CCP1/RC2": "13",
  "INT0/T5CKI/T0CKI/RC3": "14",
  "INT1/SDI/SDA/RC4": "15",
  "INT2/SCK/SCL/RC5": "16",
  "TX/~{SS}/CK/RC6": "17",
  "RX/SDO/DT/RC7": "18",
  "VSS": "19",
  "VDD": "20",
  "RB0/PWM0": "21",
  "RB1/PWM1": "22",
  "RB2/PWM2": "23",
  "RB3/PWM3": "24",
  "RB4/KBI0/PWM5": "25",
  "RB5/KBI1/PWM4/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2431-ISP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 8K SRAM, USB, nanoWatt XLP, QFN28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2450-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18F2450_IML extends Component.withPins({
  "RA2/AN2/Vref-": "1",
  "RA3/AN3/Vref+": "2",
  "RA4/T0CKI/RCV": "3",
  "RA5/AN4/HLVDIN": "4",
  "VSS_5": "5",
  "OSC1/CLKI": "6",
  "RA6/OSC2/CLKO": "7",
  "T1OSO/T1CKI/RC0": "8",
  "~{UOE}/T1OSI/RC1": "9",
  "CCP1/RC2": "10",
  "VUSB": "11",
  "VM/D-/RC4": "12",
  "VP/D+/RC5": "13",
  "TX/CK/RC6": "14",
  "RX/DT/RC7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "RB0/AN12/INT0": "18",
  "RB1/AN10/INT1": "19",
  "RB2/AN8/INT2/VMO": "20",
  "RB3/AN9/VPO": "21",
  "RB4/AN11/KBI0": "22",
  "RB5/KBI1/PGM": "23",
  "RB6/KBI2/PGC": "24",
  "RB7/KBI3/PGD": "25",
  "Vpp/~{MCLR}/RE3": "26",
  "RA0/AN0": "27",
  "RA1/AN1": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/RCV": "bidirectional", "RA5/AN4/HLVDIN": "bidirectional", VSS_5: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "~{UOE}/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", VSS_16: "power_in", VDD: "power_in", "RB0/AN12/INT0": "bidirectional", "RB1/AN10/INT1": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2450-IML";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 8K SRAM, USB, nanoWatt XLP, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2450-ISO`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class PIC18F2450_ISO extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/RCV": "6",
  "RA5/AN4/HLVDIN": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T1CKI/RC0": "11",
  "~{UOE}/T1OSI/RC1": "12",
  "CCP1/RC2": "13",
  "VUSB": "14",
  "VM/D-/RC4": "15",
  "VP/D+/RC5": "16",
  "TX/CK/RC6": "17",
  "RX/DT/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT0": "21",
  "RB1/AN10/INT1": "22",
  "RB2/AN8/INT2/VMO": "23",
  "RB3/AN9/VPO": "24",
  "RB4/AN11/KBI0": "25",
  "RB5/KBI1/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/RCV": "bidirectional", "RA5/AN4/HLVDIN": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "~{UOE}/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT0": "bidirectional", "RB1/AN10/INT1": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2450-ISO";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 8K SRAM, USB, nanoWatt XLP, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2450-ISP`. Reference prefix: `U`.
 * Footprint filters: SPDIP*W7.62mm*, DIP*W7.62mm*, PDIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18F2450_ISP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/RCV": "6",
  "RA5/AN4/HLVDIN": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T1CKI/RC0": "11",
  "~{UOE}/T1OSI/RC1": "12",
  "CCP1/RC2": "13",
  "VUSB": "14",
  "VM/D-/RC4": "15",
  "VP/D+/RC5": "16",
  "TX/CK/RC6": "17",
  "RX/DT/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT0": "21",
  "RB1/AN10/INT1": "22",
  "RB2/AN8/INT2/VMO": "23",
  "RB3/AN9/VPO": "24",
  "RB4/AN11/KBI0": "25",
  "RB5/KBI1/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/RCV": "bidirectional", "RA5/AN4/HLVDIN": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "~{UOE}/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT0": "bidirectional", "RB1/AN10/INT1": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2450-ISP";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2455-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm_P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/39632c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18F2455_ISO extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T13CKI/RC0": "11",
  "~{UOE}/CCP2/T1OSI/RC1": "12",
  "CCP1/RC2": "13",
  "VUSB": "14",
  "VM/D-/RC4": "15",
  "VP/D+/RC5": "16",
  "TX/CK/RC6": "17",
  "SDO/RX/DT/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "21",
  "RB1/AN10/INT1/SCK/SCL": "22",
  "RB2/AN8/INT2/VMO": "23",
  "RB3/AN9/CCP2/VPO": "24",
  "RB4/AN11/KBI0": "25",
  "RB5/KBI1/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2455-ISO";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2455-ISP`. Reference prefix: `U`.
 * Footprint filters: SPDIP*28_W7.62mm*, DIP*28_W7.62mm*, PDIP*28_W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/39632c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18F2455_ISP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T13CKI/RC0": "11",
  "~{UOE}/CCP2/T1OSI/RC1": "12",
  "CCP1/RC2": "13",
  "VUSB": "14",
  "VM/D-/RC4": "15",
  "VP/D+/RC5": "16",
  "TX/CK/RC6": "17",
  "SDO/RX/DT/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "21",
  "RB1/AN10/INT1/SCK/SCL": "22",
  "RB2/AN8/INT2/VMO": "23",
  "RB3/AN9/CCP2/VPO": "24",
  "RB4/AN11/KBI0": "25",
  "RB5/KBI1/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2455-ISP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768Byte RAM, 256Byte EEPROM, PIC18 Microcontroller ADC PWM SPI I2C USART in SSOP28 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F24K20_ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001303H.pdf
 * Keywords: microcontroller PIC18F flash XLP.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC18F24K20_ISS extends Component.withPins({
  "~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/Vref-AN2": "4",
  "RA3/Vref+AN3": "5",
  "RA4": "6",
  "RA5/AN4": "7",
  "Vss_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "RC0": "11",
  "CCP2/RC1": "12",
  "CCP1/RC2": "13",
  "SCL/SCK/RC3": "14",
  "SDA/SDI/RC4": "15",
  "SDO/RC5": "16",
  "TX/RC6": "17",
  "RX/RC7": "18",
  "Vss_19": "19",
  "Vdd": "20",
  "AN12/INT0/RB0": "21",
  "AN10/INT1/RB1": "22",
  "AN8/INT2/RB2": "23",
  "AN9/RB3": "24",
  "AN11/RB4": "25",
  "PGM/RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/RE3": "bidirectional", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/Vref-AN2": "bidirectional", "RA3/Vref+AN3": "bidirectional", RA4: "power_in", "RA5/AN4": "bidirectional", Vss_8: "power_in", "RA7/OSC1/CLKIN": "input", "RA6/OSC2/CLKOUT": "input", RC0: "bidirectional", "CCP2/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/RC6": "bidirectional", "RX/RC7": "bidirectional", Vss_19: "power_in", Vdd: "power_in", "AN12/INT0/RB0": "bidirectional", "AN10/INT1/RB1": "bidirectional", "AN8/INT2/RB2": "bidirectional", "AN9/RB3": "bidirectional", "AN11/RB4": "bidirectional", "PGM/RB5": "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F24K20_ISS";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, 2.3V to 5.5V, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F24K22-xSO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001412G.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18F24K22_xSO extends Component.withPins({
  "~{MCLR}/VPP/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1_CLKIN": "9",
  "RA6/OSC2_CLKOUT": "10",
  "RC0/SOSCO": "11",
  "RC1/SOSCI": "12",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP/RE3": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1_CLKIN": "bidirectional", "RA6/OSC2_CLKOUT": "bidirectional", "RC0/SOSCO": "bidirectional", "RC1/SOSCI": "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F24K22-xSO";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, 2.3V to 5.5V, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F24K22-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001412G.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18F24K22_xSP extends Component.withPins({
  "~{MCLR}/VPP/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1_CLKIN": "9",
  "RA6/OSC2_CLKOUT": "10",
  "RC0/SOSCO": "11",
  "RC1/SOSCI": "12",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP/RE3": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1_CLKIN": "bidirectional", "RA6/OSC2_CLKOUT": "bidirectional", "RC0/SOSCO": "bidirectional", "RC1/SOSCI": "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F24K22-xSP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 2.3V to 5.5V, QFN28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F24K50-xML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18F24K50_xML extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "RA4": "3",
  "RA5": "4",
  "VSS_5": "5",
  "RA7/OSC1/CLKI": "6",
  "RA6/OSC2/CLKO": "7",
  "RC0": "8",
  "RC1": "9",
  "RC2": "10",
  "VUSB3V3/VDDCORE": "11",
  "D-": "12",
  "D+": "13",
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
  "RB6/PGC": "24",
  "RB7/PGD": "25",
  "RE3/Vpp/~{MCLR}": "26",
  "RA0": "27",
  "RA1": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_5: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_16: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F24K50-xML";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 2.3V to 5.5V, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F24K50-xSO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18F24K50_xSO extends Component.withPins({
  "RE3/Vpp/~{MCLR}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "VUSB3V3/VDDCORE": "14",
  "D-": "15",
  "D+": "16",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F24K50-xSO";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 2.3V to 5.5V, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F24K50-xSP`. Reference prefix: `U`.
 * Footprint filters: SPDIP*W7.62mm*, DIP*W7.62mm*, PDIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18F24K50_xSP extends Component.withPins({
  "RE3/Vpp/~{MCLR}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "VUSB3V3/VDDCORE": "14",
  "D-": "15",
  "D+": "16",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F24K50-xSP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 2.3V to 5.5V, SSOP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F24K50-xSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC18F24K50_xSS extends Component.withPins({
  "RE3/Vpp/~{MCLR}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "VUSB3V3/VDDCORE": "14",
  "D-": "15",
  "D+": "16",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F24K50-xSS";
  override referencePrefix = "U";
}

/**
 * MCU 32k Flash, 1536B SRAM, 256B EEPROM, ADC, QFN-28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2520-xML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39631E.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18F2520_xML extends Component.withPins({
  "RE3/~{MCLR}": "1",
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
  "RB6": "27",
  "RB7": "28",
  "EP": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2520-xML";
  override referencePrefix = "U";
}

/**
 * MCU 32k Flash, 1536B SRAM, 256B EEPROM, ADC, DIP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2520-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39631E.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 */
export class PIC18F2520_xSP extends Component.withPins({
  "RE3/~{MCLR}": "1",
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
  "RB6": "27",
  "RB7": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2520-xSP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2550-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm_P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/39632c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18F2550_ISO extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T13CKI/RC0": "11",
  "~{UOE}/CCP2/T1OSI/RC1": "12",
  "CCP1/RC2": "13",
  "VUSB": "14",
  "VM/D-/RC4": "15",
  "VP/D+/RC5": "16",
  "TX/CK/RC6": "17",
  "SDO/RX/DT/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "21",
  "RB1/AN10/INT1/SCK/SCL": "22",
  "RB2/AN8/INT2/VMO": "23",
  "RB3/AN9/CCP2/VPO": "24",
  "RB4/AN11/KBI0": "25",
  "RB5/KBI1/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2550-ISO";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F2550-ISP`. Reference prefix: `U`.
 * Footprint filters: SPDIP*28_W7.62mm*, DIP*28_W7.62mm*, PDIP*28_W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/39632c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18F2550_ISP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T13CKI/RC0": "11",
  "~{UOE}/CCP2/T1OSI/RC1": "12",
  "CCP1/RC2": "13",
  "VUSB": "14",
  "VM/D-/RC4": "15",
  "VP/D+/RC5": "16",
  "TX/CK/RC6": "17",
  "SDO/RX/DT/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "21",
  "RB1/AN10/INT1/SCK/SCL": "22",
  "RB2/AN8/INT2/VMO": "23",
  "RB3/AN9/CCP2/VPO": "24",
  "RB4/AN11/KBI0": "25",
  "RB5/KBI1/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F2550-ISP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 1536Byte RAM, 256Byte EEPROM, PIC18 Microcontroller ADC PWM SPI I2C USART in SSOP28 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F25K20_ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001303H.pdf
 * Keywords: microcontroller PIC18F flash XLP.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC18F25K20_ISS extends Component.withPins({
  "~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/Vref-AN2": "4",
  "RA3/Vref+AN3": "5",
  "RA4": "6",
  "RA5/AN4": "7",
  "Vss_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "RC0": "11",
  "CCP2/RC1": "12",
  "CCP1/RC2": "13",
  "SCL/SCK/RC3": "14",
  "SDA/SDI/RC4": "15",
  "SDO/RC5": "16",
  "TX/RC6": "17",
  "RX/RC7": "18",
  "Vss_19": "19",
  "Vdd": "20",
  "AN12/INT0/RB0": "21",
  "AN10/INT1/RB1": "22",
  "AN8/INT2/RB2": "23",
  "AN9/RB3": "24",
  "AN11/RB4": "25",
  "PGM/RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/RE3": "bidirectional", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/Vref-AN2": "bidirectional", "RA3/Vref+AN3": "bidirectional", RA4: "power_in", "RA5/AN4": "bidirectional", Vss_8: "power_in", "RA7/OSC1/CLKIN": "input", "RA6/OSC2/CLKOUT": "input", RC0: "bidirectional", "CCP2/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/RC6": "bidirectional", "RX/RC7": "bidirectional", Vss_19: "power_in", Vdd: "power_in", "AN12/INT0/RB0": "bidirectional", "AN10/INT1/RB1": "bidirectional", "AN8/INT2/RB2": "bidirectional", "AN9/RB3": "bidirectional", "AN11/RB4": "bidirectional", "PGM/RB5": "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F25K20_ISS";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 1536B SRAM, 256B EEPROM, nanoWatt XLP, 2.3V to 5.5V, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F25K22-xSO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001412G.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18F25K22_xSO extends Component.withPins({
  "~{MCLR}/VPP/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1_CLKIN": "9",
  "RA6/OSC2_CLKOUT": "10",
  "RC0/SOSCO": "11",
  "RC1/SOSCI": "12",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP/RE3": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1_CLKIN": "bidirectional", "RA6/OSC2_CLKOUT": "bidirectional", "RC0/SOSCO": "bidirectional", "RC1/SOSCI": "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F25K22-xSO";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 1536B SRAM, 256B EEPROM, nanoWatt XLP, 2.3V to 5.5V, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F25K22-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001412G.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18F25K22_xSP extends Component.withPins({
  "~{MCLR}/VPP/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1_CLKIN": "9",
  "RA6/OSC2_CLKOUT": "10",
  "RC0/SOSCO": "11",
  "RC1/SOSCI": "12",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP/RE3": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1_CLKIN": "bidirectional", "RA6/OSC2_CLKOUT": "bidirectional", "RC0/SOSCO": "bidirectional", "RC1/SOSCI": "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F25K22-xSP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 2.3V to 5.5V, QFN28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F25K50-xML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18F25K50_xML extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "RA4": "3",
  "RA5": "4",
  "VSS_5": "5",
  "RA7/OSC1/CLKI": "6",
  "RA6/OSC2/CLKO": "7",
  "RC0": "8",
  "RC1": "9",
  "RC2": "10",
  "VUSB3V3/VDDCORE": "11",
  "D-": "12",
  "D+": "13",
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
  "RB6/PGC": "24",
  "RB7/PGD": "25",
  "RE3/Vpp/~{MCLR}": "26",
  "RA0": "27",
  "RA1": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_5: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_16: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F25K50-xML";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 2.3V to 5.5V, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F25K50-xSO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18F25K50_xSO extends Component.withPins({
  "RE3/Vpp/~{MCLR}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "VUSB3V3/VDDCORE": "14",
  "D-": "15",
  "D+": "16",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F25K50-xSO";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 2.3V to 5.5V, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F25K50-xSP`. Reference prefix: `U`.
 * Footprint filters: SPDIP*W7.62mm*, DIP*W7.62mm*, PDIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18F25K50_xSP extends Component.withPins({
  "RE3/Vpp/~{MCLR}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "VUSB3V3/VDDCORE": "14",
  "D-": "15",
  "D+": "16",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F25K50-xSP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 2.3V to 5.5V, SSOP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F25K50-xSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC18F25K50_xSS extends Component.withPins({
  "RE3/Vpp/~{MCLR}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "VUSB3V3/VDDCORE": "14",
  "D-": "15",
  "D+": "16",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F25K50-xSS";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 3.5K RAM, 1K EEPROM PIC18 Microcontroller ADC PWM CAN SPI I2C USART in QFN28 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F25K80_IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microcontroller PIC18 flash ECAN XLP nanoWatt.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18F25K80_IML extends Component.withPins({
  "RA2/Vref-/AN2": "1",
  "RA3/Vref+/AN3": "2",
  "Vcap": "3",
  "RA5/AN4": "4",
  "Vss_5": "5",
  "OSC1/CLKIN": "6",
  "OSC2/CLKOUT": "7",
  "SOSCO/RC0": "8",
  "SOSCI/RC1": "9",
  "CCP2/RC2": "10",
  "SCL/SCK/RC3": "11",
  "SDA/SDI/RC4": "12",
  "SDO/RC5": "13",
  "CANTX/TX1/CCP3/RC6": "14",
  "CANRX/RX1/CCP4/RC7": "15",
  "Vss_16": "16",
  "Vdd": "17",
  "AN10/INT0/RB0": "18",
  "AN8/INT1/RB1": "19",
  "CANTX/INT2/RB2": "20",
  "CANRX/INT3/RB3": "21",
  "AN9/ECCP1/RB4": "22",
  "CCP5/RB5": "23",
  "PGC/TX2/RB6": "24",
  "PGD/RX2/RB7": "25",
  "~{MCLR}/RE3": "26",
  "RA0/AN0": "27",
  "RA1/AN1": "28",
  "PAD": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RA2/Vref-/AN2": "bidirectional", "RA3/Vref+/AN3": "bidirectional", Vcap: "power_in", "RA5/AN4": "bidirectional", Vss_5: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "input", "SOSCO/RC0": "bidirectional", "SOSCI/RC1": "bidirectional", "CCP2/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CANTX/TX1/CCP3/RC6": "bidirectional", "CANRX/RX1/CCP4/RC7": "bidirectional", Vss_16: "power_in", Vdd: "power_in", "AN10/INT0/RB0": "bidirectional", "AN8/INT1/RB1": "bidirectional", "CANTX/INT2/RB2": "bidirectional", "CANRX/INT3/RB3": "bidirectional", "AN9/ECCP1/RB4": "bidirectional", "CCP5/RB5": "bidirectional", "PGC/TX2/RB6": "bidirectional", "PGD/RX2/RB7": "bidirectional", "~{MCLR}/RE3": "bidirectional", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F25K80_IML";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 3.5K RAM, 1K EEPROM, PIC18 Microcontroller ADC PWM CAN SPI I2C USART in SSOP28 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F25K80_ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microcontroller PIC18 flash ECAN XLP nanoWatt.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC18F25K80_ISS extends Component.withPins({
  "~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/Vref-/AN2": "4",
  "RA3/Vref+/AN3": "5",
  "Vcap": "6",
  "RA5/AN4": "7",
  "Vss_8": "8",
  "OSC1/CLKIN": "9",
  "OSC2/CLKOUT": "10",
  "SOSCO/RC0": "11",
  "SOSCI/RC1": "12",
  "CCP2/RC2": "13",
  "SCL/SCK/RC3": "14",
  "SDA/SDI/RC4": "15",
  "SDO/RC5": "16",
  "CANTX/TX1/CCP3/RC6": "17",
  "CANRX/RX1/CCP4/RC7": "18",
  "Vss_19": "19",
  "Vdd": "20",
  "AN10/INT0/RB0": "21",
  "AN8/INT1/RB1": "22",
  "CANTX/INT2/RB2": "23",
  "CANRX/INT3/RB3": "24",
  "AN9/ECCP1/RB4": "25",
  "CCP5/RB5": "26",
  "PGC/TX2/RB6": "27",
  "PGD/RX2/RB7": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/RE3": "bidirectional", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/Vref-/AN2": "bidirectional", "RA3/Vref+/AN3": "bidirectional", Vcap: "power_in", "RA5/AN4": "bidirectional", Vss_8: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "input", "SOSCO/RC0": "bidirectional", "SOSCI/RC1": "bidirectional", "CCP2/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CANTX/TX1/CCP3/RC6": "bidirectional", "CANRX/RX1/CCP4/RC7": "bidirectional", Vss_19: "power_in", Vdd: "power_in", "AN10/INT0/RB0": "bidirectional", "AN8/INT1/RB1": "bidirectional", "CANTX/INT2/RB2": "bidirectional", "CANRX/INT3/RB3": "bidirectional", "AN9/ECCP1/RB4": "bidirectional", "CCP5/RB5": "bidirectional", "PGC/TX2/RB6": "bidirectional", "PGD/RX2/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F25K80_ISS";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K RAM, 1K EEPROM, 2.3-5.5V, PIC18, low-power microcontroller with CAN, DIP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F25K83-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001943A.pdf
 * Keywords: microcontroller Microchip DMA WWDT DIA DCI XLP CLC CWG CCP NCO DSM CRC UART LIN DMX DALI SPI CAN I2C PPS SMT ADC2 CVD DAC.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18F25K83_xSP extends Component.withPins({
  "VPP/~{MCLR}/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "OSC1_CLKIN/RA7": "9",
  "OSC2_CLKOUT/RA6": "10",
  "RC0/SOSCO": "11",
  "RC1/SOSCI": "12",
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
  "ICSPCLK/RB6": "27",
  "ICSPDAT/RB7": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "VPP/~{MCLR}/RE3": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "OSC1_CLKIN/RA7": "bidirectional", "OSC2_CLKOUT/RA6": "bidirectional", "RC0/SOSCO": "bidirectional", "RC1/SOSCI": "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F25K83-xSP";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3936Byte RAM, 1KByte EEPROM, PIC18 Microcontroller ADC PWM SPI I2C USART in SSOP28 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F26K20_ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001303H.pdf
 * Keywords: microcontroller PIC18F flash XLP.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC18F26K20_ISS extends Component.withPins({
  "~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/Vref-AN2": "4",
  "RA3/Vref+AN3": "5",
  "RA4": "6",
  "RA5/AN4": "7",
  "Vss_8": "8",
  "RA7/OSC1/CLKIN": "9",
  "RA6/OSC2/CLKOUT": "10",
  "RC0": "11",
  "CCP2/RC1": "12",
  "CCP1/RC2": "13",
  "SCL/SCK/RC3": "14",
  "SDA/SDI/RC4": "15",
  "SDO/RC5": "16",
  "TX/RC6": "17",
  "RX/RC7": "18",
  "Vss_19": "19",
  "Vdd": "20",
  "AN12/INT0/RB0": "21",
  "AN10/INT1/RB1": "22",
  "AN8/INT2/RB2": "23",
  "AN9/RB3": "24",
  "AN11/RB4": "25",
  "PGM/RB5": "26",
  "PGC/RB6": "27",
  "PGD/RB7": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/RE3": "bidirectional", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/Vref-AN2": "bidirectional", "RA3/Vref+AN3": "bidirectional", RA4: "power_in", "RA5/AN4": "bidirectional", Vss_8: "power_in", "RA7/OSC1/CLKIN": "input", "RA6/OSC2/CLKOUT": "input", RC0: "bidirectional", "CCP2/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/RC6": "bidirectional", "RX/RC7": "bidirectional", Vss_19: "power_in", Vdd: "power_in", "AN12/INT0/RB0": "bidirectional", "AN10/INT1/RB1": "bidirectional", "AN8/INT2/RB2": "bidirectional", "AN9/RB3": "bidirectional", "AN11/RB4": "bidirectional", "PGM/RB5": "bidirectional", "PGC/RB6": "bidirectional", "PGD/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F26K20_ISS";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3896B SRAM, 1024B EEPROM, nanoWatt XLP, 2.3V to 5.5V, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F26K22-xSO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001412G.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18F26K22_xSO extends Component.withPins({
  "~{MCLR}/VPP/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1_CLKIN": "9",
  "RA6/OSC2_CLKOUT": "10",
  "RC0/SOSCO": "11",
  "RC1/SOSCI": "12",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP/RE3": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1_CLKIN": "bidirectional", "RA6/OSC2_CLKOUT": "bidirectional", "RC0/SOSCO": "bidirectional", "RC1/SOSCI": "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F26K22-xSO";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3896B SRAM, 1024B EEPROM, nanoWatt XLP, 2.3V to 5.5V, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F26K22-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001412G.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18F26K22_xSP extends Component.withPins({
  "~{MCLR}/VPP/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1_CLKIN": "9",
  "RA6/OSC2_CLKOUT": "10",
  "RC0/SOSCO": "11",
  "RC1/SOSCI": "12",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP/RE3": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1_CLKIN": "bidirectional", "RA6/OSC2_CLKOUT": "bidirectional", "RC0/SOSCO": "bidirectional", "RC1/SOSCI": "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F26K22-xSP";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3.5K RAM, 1K EEPROM PIC18 Microcontroller ADC PWM CAN SPI I2C USART in QFN28 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F26K80_IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microcontroller PIC18 flash ECAN XLP nanoWatt.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18F26K80_IML extends Component.withPins({
  "RA2/Vref-/AN2": "1",
  "RA3/Vref+/AN3": "2",
  "Vcap": "3",
  "RA5/AN4": "4",
  "Vss_5": "5",
  "OSC1/CLKIN": "6",
  "OSC2/CLKOUT": "7",
  "SOSCO/RC0": "8",
  "SOSCI/RC1": "9",
  "CCP2/RC2": "10",
  "SCL/SCK/RC3": "11",
  "SDA/SDI/RC4": "12",
  "SDO/RC5": "13",
  "CANTX/TX1/CCP3/RC6": "14",
  "CANRX/RX1/CCP4/RC7": "15",
  "Vss_16": "16",
  "Vdd": "17",
  "AN10/INT0/RB0": "18",
  "AN8/INT1/RB1": "19",
  "CANTX/INT2/RB2": "20",
  "CANRX/INT3/RB3": "21",
  "AN9/ECCP1/RB4": "22",
  "CCP5/RB5": "23",
  "PGC/TX2/RB6": "24",
  "PGD/RX2/RB7": "25",
  "~{MCLR}/RE3": "26",
  "RA0/AN0": "27",
  "RA1/AN1": "28",
  "PAD": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RA2/Vref-/AN2": "bidirectional", "RA3/Vref+/AN3": "bidirectional", Vcap: "power_in", "RA5/AN4": "bidirectional", Vss_5: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "input", "SOSCO/RC0": "bidirectional", "SOSCI/RC1": "bidirectional", "CCP2/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CANTX/TX1/CCP3/RC6": "bidirectional", "CANRX/RX1/CCP4/RC7": "bidirectional", Vss_16: "power_in", Vdd: "power_in", "AN10/INT0/RB0": "bidirectional", "AN8/INT1/RB1": "bidirectional", "CANTX/INT2/RB2": "bidirectional", "CANRX/INT3/RB3": "bidirectional", "AN9/ECCP1/RB4": "bidirectional", "CCP5/RB5": "bidirectional", "PGC/TX2/RB6": "bidirectional", "PGD/RX2/RB7": "bidirectional", "~{MCLR}/RE3": "bidirectional", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F26K80_IML";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3.5K RAM, 1K EEPROM PIC18 Microcontroller ADC PWM CAN SPI I2C USART in SSOP28 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F26K80_ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microcontroller PIC18 flash ECAN XLP nanoWatt.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC18F26K80_ISS extends Component.withPins({
  "~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/Vref-/AN2": "4",
  "RA3/Vref+/AN3": "5",
  "Vcap": "6",
  "RA5/AN4": "7",
  "Vss_8": "8",
  "OSC1/CLKIN": "9",
  "OSC2/CLKOUT": "10",
  "SOSCO/RC0": "11",
  "SOSCI/RC1": "12",
  "CCP2/RC2": "13",
  "SCL/SCK/RC3": "14",
  "SDA/SDI/RC4": "15",
  "SDO/RC5": "16",
  "CANTX/TX1/CCP3/RC6": "17",
  "CANRX/RX1/CCP4/RC7": "18",
  "Vss_19": "19",
  "Vdd": "20",
  "AN10/INT0/RB0": "21",
  "AN8/INT1/RB1": "22",
  "CANTX/INT2/RB2": "23",
  "CANRX/INT3/RB3": "24",
  "AN9/ECCP1/RB4": "25",
  "CCP5/RB5": "26",
  "PGC/TX2/RB6": "27",
  "PGD/RX2/RB7": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/RE3": "bidirectional", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/Vref-/AN2": "bidirectional", "RA3/Vref+/AN3": "bidirectional", Vcap: "power_in", "RA5/AN4": "bidirectional", Vss_8: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "input", "SOSCO/RC0": "bidirectional", "SOSCI/RC1": "bidirectional", "CCP2/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CANTX/TX1/CCP3/RC6": "bidirectional", "CANRX/RX1/CCP4/RC7": "bidirectional", Vss_19: "power_in", Vdd: "power_in", "AN10/INT0/RB0": "bidirectional", "AN8/INT1/RB1": "bidirectional", "CANTX/INT2/RB2": "bidirectional", "CANRX/INT3/RB3": "bidirectional", "AN9/ECCP1/RB4": "bidirectional", "CCP5/RB5": "bidirectional", "PGC/TX2/RB6": "bidirectional", "PGD/RX2/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F26K80_ISS";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 4K RAM, 1K EEPROM, 2.3-5.5V, PIC18, low-power microcontroller with CAN, DIP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F26K83-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001943A.pdf
 * Keywords: microcontroller Microchip DMA WWDT DIA DCI XLP CLC CWG CCP NCO DSM CRC UART LIN DMX DALI SPI CAN I2C PPS SMT ADC2 CVD DAC.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18F26K83_xSP extends Component.withPins({
  "VPP/~{MCLR}/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "OSC1_CLKIN/RA7": "9",
  "OSC2_CLKOUT/RA6": "10",
  "RC0/SOSCO": "11",
  "RC1/SOSCI": "12",
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
  "ICSPCLK/RB6": "27",
  "ICSPDAT/RB7": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "VPP/~{MCLR}/RE3": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "OSC1_CLKIN/RA7": "bidirectional", "OSC2_CLKOUT/RA6": "bidirectional", "RC0/SOSCO": "bidirectional", "RC1/SOSCI": "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F26K83-xSP";
  override referencePrefix = "U";
}

/**
 * 128K Flash, 3.8K RAM, PIC18 Microcontroller ADC PWM I2C USART USB RTCC, SSOP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F27J53_ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30009964C.pdf
 * Keywords: microcontroller PIC18 flash ECAN XLP nanoWatt.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC18F27J53_ISS extends Component.withPins({
  "~{MCLR}": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2": "4",
  "RA3/AN3": "5",
  "VDDCORE/VCAP": "6",
  "RA5/AN4": "7",
  "VSS_8": "8",
  "OSC1/CLKI/RA7": "9",
  "OSC2/CLKO/RA6": "10",
  "RC0/T1OSO": "11",
  "RC1/T1OSI": "12",
  "RC2/AN11": "13",
  "VUSB": "14",
  "RC4/D-": "15",
  "RC5/D+": "16",
  "RC6/TX1": "17",
  "RC7/RX1": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12": "21",
  "RB1/AN10": "22",
  "RB2/AN8": "23",
  "RB3/AN9": "24",
  "RB4/SCL1": "25",
  "RB5/SDA1": "26",
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2": "bidirectional", "RA3/AN3": "bidirectional", "VDDCORE/VCAP": "power_in", "RA5/AN4": "bidirectional", VSS_8: "power_in", "OSC1/CLKI/RA7": "bidirectional", "OSC2/CLKO/RA6": "bidirectional", "RC0/T1OSO": "bidirectional", "RC1/T1OSI": "bidirectional", "RC2/AN11": "bidirectional", VUSB: "power_in", "RC4/D-": "bidirectional", "RC5/D+": "bidirectional", "RC6/TX1": "bidirectional", "RC7/RX1": "bidirectional", VSS_19: "passive", VDD: "power_in", "RB0/AN12": "bidirectional", "RB1/AN10": "bidirectional", "RB2/AN8": "bidirectional", "RB3/AN9": "bidirectional", "RB4/SCL1": "bidirectional", "RB5/SDA1": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F27J53_ISS";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, QFN44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4331-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18F4331_IML extends Component.withPins({
  "RX/SDO/DT/RC7": "1",
  "~{FLTA}/RD4": "2",
  "PWM4/RD5": "3",
  "PWM6/RD6": "4",
  "PWM7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "AVDD_8": "8",
  "RB0/PWM0": "9",
  "RB1/PWM1": "10",
  "RB2/PWM2": "11",
  "RB3/PWM3": "12",
  "NC": "13",
  "RB4/KBI0/PWM5": "14",
  "RB5/KBI1/PWM4/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CAP1/INDX": "21",
  "RA3/AN3/Vref+/CAP2/QEA": "22",
  "RA4/AN4/CAP3/QEB": "23",
  "RA5/AN5/LVDIN": "24",
  "AN6/RE0": "25",
  "AN7/RE1": "26",
  "AN8/RE2": "27",
  "VDD_28": "28",
  "AVDD_29": "29",
  "AVSS": "30",
  "VSS_31": "31",
  "RA7/OSC1/CLKI": "32",
  "RA6/OSC2/CLKO": "33",
  "T1OSO/T1CKI/RC0": "34",
  "~{FLTA}/T1OSI/CCP2/RC1": "35",
  "~{FLTB}/CCP1/RC2": "36",
  "INT0/T5CKI/T0CKI/RC3": "37",
  "T5CKI/T0CKI/RD0": "38",
  "SDO/RD1": "39",
  "SDA/SDI/RD2": "40",
  "SCL/SCK/RD3": "41",
  "INT1/SDI/SDA/RC4": "42",
  "INT2/SCK/SCL/RC5": "43",
  "TX/~{SS}/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RX/SDO/DT/RC7": "bidirectional", "~{FLTA}/RD4": "bidirectional", "PWM4/RD5": "bidirectional", "PWM6/RD6": "bidirectional", "PWM7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", AVDD_8: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", NC: "no_connect", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", "RA5/AN5/LVDIN": "bidirectional", "AN6/RE0": "bidirectional", "AN7/RE1": "bidirectional", "AN8/RE2": "bidirectional", VDD_28: "power_in", AVDD_29: "power_in", AVSS: "power_in", VSS_31: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "T5CKI/T0CKI/RD0": "bidirectional", "SDO/RD1": "bidirectional", "SDA/SDI/RD2": "bidirectional", "SCL/SCK/RD3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4331-IML";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4331-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24*, PDIP*W15.24*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F4331_IP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CAP1/INDX": "4",
  "RA3/AN3/Vref+/CAP2/QEA": "5",
  "RA4/AN4/CAP3/QEB": "6",
  "RA5/AN5/LVDIN": "7",
  "AN6/RE0": "8",
  "AN7/RE1": "9",
  "AN8/RE2": "10",
  "AVDD": "11",
  "AVSS": "12",
  "RA7/OSC1/CLKI": "13",
  "RA6/OSC2/CLKO": "14",
  "T1OSO/T1CKI/RC0": "15",
  "~{FLTA}/T1OSI/CCP2/RC1": "16",
  "~{FLTB}/CCP1/RC2": "17",
  "INT0/T5CKI/T0CKI/RC3": "18",
  "T5CKI/T0CKI/RD0": "19",
  "SDO/RD1": "20",
  "SDA/SDI/RD2": "21",
  "SCL/SCK/RD3": "22",
  "INT1/SDI/SDA/RC4": "23",
  "INT2/SCK/SCL/RC5": "24",
  "TX/~{SS}/CK/RC6": "25",
  "RX/SDO/DT/RC7": "26",
  "~{FLTA}/RD4": "27",
  "PWM4/RD5": "28",
  "PWM6/RD6": "29",
  "PWM7/RD7": "30",
  "VSS": "31",
  "VDD": "32",
  "RB0/PWM0": "33",
  "RB1/PWM1": "34",
  "RB2/PWM2": "35",
  "RB3/PWM3": "36",
  "RB4/KBI0/PWM5": "37",
  "RB5/KBI1/PWM4/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", "RA5/AN5/LVDIN": "bidirectional", "AN6/RE0": "bidirectional", "AN7/RE1": "bidirectional", "AN8/RE2": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "T5CKI/T0CKI/RD0": "bidirectional", "SDO/RD1": "bidirectional", "SDA/SDI/RD2": "bidirectional", "SCL/SCK/RD3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", "~{FLTA}/RD4": "bidirectional", "PWM4/RD5": "bidirectional", "PWM6/RD6": "bidirectional", "PWM7/RD7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4331-IP";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4331-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18F4331_IPT extends Component.withPins({
  "RX/SDO/DT/RC7": "1",
  "~{FLTA}/RD4": "2",
  "PWM4/RD5": "3",
  "PWM6/RD6": "4",
  "PWM7/RD7": "5",
  "VSS": "6",
  "VDD": "7",
  "RB0/PWM0": "8",
  "RB1/PWM1": "9",
  "RB2/PWM2": "10",
  "RB3/PWM3": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4/KBI0/PWM5": "14",
  "RB5/KBI1/PWM4/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CAP1/INDX": "21",
  "RA3/AN3/Vref+/CAP2/QEA": "22",
  "RA4/AN4/CAP3/QEB": "23",
  "RA5/AN5/LVDIN": "24",
  "AN6/RE0": "25",
  "AN7/RE1": "26",
  "AN8/RE2": "27",
  "AVDD": "28",
  "AVSS": "29",
  "RA7/OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T1CKI/RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "~{FLTA}/T1OSI/CCP2/RC1": "35",
  "~{FLTB}/CCP1/RC2": "36",
  "INT0/T5CKI/T0CKI/RC3": "37",
  "T5CKI/T0CKI/RD0": "38",
  "SDO/RD1": "39",
  "SDA/SDI/RD2": "40",
  "SCL/SCK/RD3": "41",
  "INT1/SDI/SDA/RC4": "42",
  "INT2/SCK/SCL/RC5": "43",
  "TX/~{SS}/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RX/SDO/DT/RC7": "bidirectional", "~{FLTA}/RD4": "bidirectional", "PWM4/RD5": "bidirectional", "PWM6/RD6": "bidirectional", "PWM7/RD7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", "RA5/AN5/LVDIN": "bidirectional", "AN6/RE0": "bidirectional", "AN7/RE1": "bidirectional", "AN8/RE2": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "T5CKI/T0CKI/RD0": "bidirectional", "SDO/RD1": "bidirectional", "SDA/SDI/RD2": "bidirectional", "SCL/SCK/RD3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4331-IPT";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256 EEPROM, ADC, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F442-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39564c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F442_IP extends Component.withPins({
  "~{MCLR}/VPP": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/TOCKI": "6",
  "RA5/AN4/~{SS}/LVDIN": "7",
  "~{RD}/AN5/RE0": "8",
  "~{WR}/AN6/RE1": "9",
  "~{CS}/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKIN": "13",
  "RA6/OSC2/CLKO": "14",
  "T10S0/T1CKI/RC0": "15",
  "CCP2/T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "SCK/SCL/RC3": "18",
  "PSP0/RD0": "19",
  "PSP1/RD1": "20",
  "PSP2/RD2": "21",
  "PSP3/RD3": "22",
  "SDI/SDA/RC4": "23",
  "SDO/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "PSP4/RD4": "27",
  "PSP5/RD5": "28",
  "PSP6/RD6": "29",
  "PSP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0": "33",
  "RB1/INT1": "34",
  "RB2/INT2": "35",
  "RB3/CCP2": "36",
  "RB4": "37",
  "RB5/PGM": "38",
  "RB6/PGC": "39",
  "RB7/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/TOCKI": "bidirectional", "RA5/AN4/~{SS}/LVDIN": "bidirectional", "~{RD}/AN5/RE0": "bidirectional", "~{WR}/AN6/RE1": "bidirectional", "~{CS}/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKIN": "input", "RA6/OSC2/CLKO": "output", "T10S0/T1CKI/RC0": "bidirectional", "CCP2/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "PSP0/RD0": "bidirectional", "PSP1/RD1": "bidirectional", "PSP2/RD2": "bidirectional", "PSP3/RD3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", "PSP4/RD4": "bidirectional", "PSP5/RD5": "bidirectional", "PSP6/RD6": "bidirectional", "PSP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0": "bidirectional", "RB1/INT1": "bidirectional", "RB2/INT2": "bidirectional", "RB3/CCP2": "bidirectional", RB4: "bidirectional", "RB5/PGM": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F442-IP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256 EEPROM, ADC, TQFP-44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F442-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39564c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18F442_IPT extends Component.withPins({
  "DT/RX/RC7": "1",
  "PSP4/RD4": "2",
  "PSP5/RD5": "3",
  "PSP6/RD6": "4",
  "PSP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/INT0": "8",
  "RB1/INT1": "9",
  "RB2/INT2": "10",
  "RB3/CCP2": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4": "14",
  "RB5/PGM": "15",
  "RB6/PGC": "16",
  "RB7/PGD": "17",
  "~{MCLR}/Vpp": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI": "23",
  "RA5/AN4/~{SS}/LVDin": "24",
  "~{RD}/AN5/RE0": "25",
  "~{WR}/AN6/RE1": "26",
  "~{CS}/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T1CKI/RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "T1OSI/CCP2/RC1": "35",
  "CCP1/RC2": "36",
  "SCK/SCL/RC3": "37",
  "PSP0/RD0": "38",
  "PSP1/RD1": "39",
  "PSP2/RD2": "40",
  "PSP3/RD3": "41",
  "SDI/SDA/RC4": "42",
  "SDO/RC5": "43",
  "CK/TX/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "DT/RX/RC7": "bidirectional", "PSP4/RD4": "bidirectional", "PSP5/RD5": "bidirectional", "PSP6/RD6": "bidirectional", "PSP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/INT0": "bidirectional", "RB1/INT1": "bidirectional", "RB2/INT2": "bidirectional", "RB3/CCP2": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", RB4: "bidirectional", "RB5/PGM": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/~{SS}/LVDin": "bidirectional", "~{RD}/AN5/RE0": "bidirectional", "~{WR}/AN6/RE1": "bidirectional", "~{CS}/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", "T1OSI/CCP2/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "PSP0/RD0": "bidirectional", "PSP1/RD1": "bidirectional", "PSP2/RD2": "bidirectional", "PSP3/RD3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CK/TX/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F442-IPT";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, ADC, DIP-40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4420-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39631E.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F4420_xP extends Component.withPins({
  "RE3/~{MCLR}": "1",
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
  "RB6": "39",
  "RB7": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_11: "passive", VSS_12: "passive", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4420-xP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, QFN44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4431-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18F4431_IML extends Component.withPins({
  "RX/SDO/DT/RC7": "1",
  "~{FLTA}/RD4": "2",
  "PWM4/RD5": "3",
  "PWM6/RD6": "4",
  "PWM7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "AVDD_8": "8",
  "RB0/PWM0": "9",
  "RB1/PWM1": "10",
  "RB2/PWM2": "11",
  "RB3/PWM3": "12",
  "NC": "13",
  "RB4/KBI0/PWM5": "14",
  "RB5/KBI1/PWM4/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CAP1/INDX": "21",
  "RA3/AN3/Vref+/CAP2/QEA": "22",
  "RA4/AN4/CAP3/QEB": "23",
  "RA5/AN5/LVDIN": "24",
  "AN6/RE0": "25",
  "AN7/RE1": "26",
  "AN8/RE2": "27",
  "VDD_28": "28",
  "AVDD_29": "29",
  "AVSS": "30",
  "VSS_31": "31",
  "RA7/OSC1/CLKI": "32",
  "RA6/OSC2/CLKO": "33",
  "T1OSO/T1CKI/RC0": "34",
  "~{FLTA}/T1OSI/CCP2/RC1": "35",
  "~{FLTB}/CCP1/RC2": "36",
  "INT0/T5CKI/T0CKI/RC3": "37",
  "T5CKI/T0CKI/RD0": "38",
  "SDO/RD1": "39",
  "SDA/SDI/RD2": "40",
  "SCL/SCK/RD3": "41",
  "INT1/SDI/SDA/RC4": "42",
  "INT2/SCK/SCL/RC5": "43",
  "TX/~{SS}/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RX/SDO/DT/RC7": "bidirectional", "~{FLTA}/RD4": "bidirectional", "PWM4/RD5": "bidirectional", "PWM6/RD6": "bidirectional", "PWM7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", AVDD_8: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", NC: "no_connect", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", "RA5/AN5/LVDIN": "bidirectional", "AN6/RE0": "bidirectional", "AN7/RE1": "bidirectional", "AN8/RE2": "bidirectional", VDD_28: "power_in", AVDD_29: "power_in", AVSS: "power_in", VSS_31: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "T5CKI/T0CKI/RD0": "bidirectional", "SDO/RD1": "bidirectional", "SDA/SDI/RD2": "bidirectional", "SCL/SCK/RD3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4431-IML";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4431-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24*, PDIP*W15.24*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F4431_IP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CAP1/INDX": "4",
  "RA3/AN3/Vref+/CAP2/QEA": "5",
  "RA4/AN4/CAP3/QEB": "6",
  "RA5/AN5/LVDIN": "7",
  "AN6/RE0": "8",
  "AN7/RE1": "9",
  "AN8/RE2": "10",
  "AVDD": "11",
  "AVSS": "12",
  "RA7/OSC1/CLKI": "13",
  "RA6/OSC2/CLKO": "14",
  "T1OSO/T1CKI/RC0": "15",
  "~{FLTA}/T1OSI/CCP2/RC1": "16",
  "~{FLTB}/CCP1/RC2": "17",
  "INT0/T5CKI/T0CKI/RC3": "18",
  "T5CKI/T0CKI/RD0": "19",
  "SDO/RD1": "20",
  "SDA/SDI/RD2": "21",
  "SCL/SCK/RD3": "22",
  "INT1/SDI/SDA/RC4": "23",
  "INT2/SCK/SCL/RC5": "24",
  "TX/~{SS}/CK/RC6": "25",
  "RX/SDO/DT/RC7": "26",
  "~{FLTA}/RD4": "27",
  "PWM4/RD5": "28",
  "PWM6/RD6": "29",
  "PWM7/RD7": "30",
  "VSS": "31",
  "VDD": "32",
  "RB0/PWM0": "33",
  "RB1/PWM1": "34",
  "RB2/PWM2": "35",
  "RB3/PWM3": "36",
  "RB4/KBI0/PWM5": "37",
  "RB5/KBI1/PWM4/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", "RA5/AN5/LVDIN": "bidirectional", "AN6/RE0": "bidirectional", "AN7/RE1": "bidirectional", "AN8/RE2": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "T5CKI/T0CKI/RD0": "bidirectional", "SDO/RD1": "bidirectional", "SDA/SDI/RD2": "bidirectional", "SCL/SCK/RD3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", "~{FLTA}/RD4": "bidirectional", "PWM4/RD5": "bidirectional", "PWM6/RD6": "bidirectional", "PWM7/RD7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4431-IP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4431-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18F4431_IPT extends Component.withPins({
  "RX/SDO/DT/RC7": "1",
  "~{FLTA}/RD4": "2",
  "PWM4/RD5": "3",
  "PWM6/RD6": "4",
  "PWM7/RD7": "5",
  "VSS": "6",
  "VDD": "7",
  "RB0/PWM0": "8",
  "RB1/PWM1": "9",
  "RB2/PWM2": "10",
  "RB3/PWM3": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4/KBI0/PWM5": "14",
  "RB5/KBI1/PWM4/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CAP1/INDX": "21",
  "RA3/AN3/Vref+/CAP2/QEA": "22",
  "RA4/AN4/CAP3/QEB": "23",
  "RA5/AN5/LVDIN": "24",
  "AN6/RE0": "25",
  "AN7/RE1": "26",
  "AN8/RE2": "27",
  "AVDD": "28",
  "AVSS": "29",
  "RA7/OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T1CKI/RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "~{FLTA}/T1OSI/CCP2/RC1": "35",
  "~{FLTB}/CCP1/RC2": "36",
  "INT0/T5CKI/T0CKI/RC3": "37",
  "T5CKI/T0CKI/RD0": "38",
  "SDO/RD1": "39",
  "SDA/SDI/RD2": "40",
  "SCL/SCK/RD3": "41",
  "INT1/SDI/SDA/RC4": "42",
  "INT2/SCK/SCL/RC5": "43",
  "TX/~{SS}/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RX/SDO/DT/RC7": "bidirectional", "~{FLTA}/RD4": "bidirectional", "PWM4/RD5": "bidirectional", "PWM6/RD6": "bidirectional", "PWM7/RD7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", "RA5/AN5/LVDIN": "bidirectional", "AN6/RE0": "bidirectional", "AN7/RE1": "bidirectional", "AN8/RE2": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "T5CKI/T0CKI/RD0": "bidirectional", "SDO/RD1": "bidirectional", "SDA/SDI/RD2": "bidirectional", "SCL/SCK/RD3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4431-IPT";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 8K SRAM, USB, nanoWatt XLP, QFN44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4450-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18F4450_IML extends Component.withPins({
  "RX/DT/RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "AVDD_7": "7",
  "VDD_8": "8",
  "RB0/AN12/INT0": "9",
  "RB1/AN10/INT1": "10",
  "RB2/AN8/INT2/VMO": "11",
  "RB3/AN9/VPO": "12",
  "NC": "13",
  "RB4/AN11/KBI0": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/RCV": "23",
  "RA5/AN4/HLVDIN": "24",
  "AN5/RE0": "25",
  "AN6/RE1": "26",
  "AN7/RE2": "27",
  "AVDD_28": "28",
  "VDD_29": "29",
  "AVSS": "30",
  "VSS_31": "31",
  "OSC1/CLKI": "32",
  "RA6/OSC2/CLKO": "33",
  "T1OSO/T1CKI/RC0": "34",
  "~{UOE}/T1OSI/RC1": "35",
  "CCP1/RC2": "36",
  "VUSB": "37",
  "RD0": "38",
  "RD1": "39",
  "RD2": "40",
  "RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RX/DT/RC7": "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", AVDD_7: "power_in", VDD_8: "power_in", "RB0/AN12/INT0": "bidirectional", "RB1/AN10/INT1": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/VPO": "bidirectional", NC: "no_connect", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/RCV": "bidirectional", "RA5/AN4/HLVDIN": "bidirectional", "AN5/RE0": "bidirectional", "AN6/RE1": "bidirectional", "AN7/RE2": "bidirectional", AVDD_28: "power_in", VDD_29: "power_in", AVSS: "power_in", VSS_31: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "~{UOE}/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4450-IML";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 8K SRAM, USB, nanoWatt XLP, PDIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4450-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F4450_IP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/RCV": "6",
  "RA5/AN4/HLVDIN": "7",
  "AN5/RE0": "8",
  "AN6/RE1": "9",
  "AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "RA6/OSC2/CLKO": "14",
  "T1OSO/T1CKI/RC0": "15",
  "~{UOE}/T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "VUSB": "18",
  "RD0": "19",
  "RD1": "20",
  "RD2": "21",
  "RD3": "22",
  "VM/D-/RC4": "23",
  "VP/D+/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "RD4": "27",
  "RD5": "28",
  "RD6": "29",
  "RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/AN12/INT0": "33",
  "RB1/AN10/INT1": "34",
  "RB2/AN8/INT2/VMO": "35",
  "RB3/AN9/VPO": "36",
  "RB4/AN11/KBI0": "37",
  "RB5/KBI1/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/RCV": "bidirectional", "RA5/AN4/HLVDIN": "bidirectional", "AN5/RE0": "bidirectional", "AN6/RE1": "bidirectional", "AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "~{UOE}/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/AN12/INT0": "bidirectional", "RB1/AN10/INT1": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4450-IP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 8K SRAM, USB, nanoWatt XLP, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4450-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18F4450_IPT extends Component.withPins({
  "RX/DT/RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/INT0": "8",
  "RB1/AN10/INT1": "9",
  "RB2/AN8/INT2/VMO": "10",
  "RB3/AN9/VPO": "11",
  "(ICCK/ICPGC)": "12",
  "(ICDT/ICPGD)": "13",
  "RB4/AN11/KBI0": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/RCV": "23",
  "RA5/AN4/HLVDIN": "24",
  "AN5/RE0": "25",
  "AN6/RE1": "26",
  "AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T1CKI/RC0": "32",
  "(~{ICRST}/ICVpp)": "33",
  "(ICPORTS)": "34",
  "~{UOE}/T1OSI/RC1": "35",
  "CCP1/RC2": "36",
  "VUSB": "37",
  "RD0": "38",
  "RD1": "39",
  "RD2": "40",
  "RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RX/DT/RC7": "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/AN12/INT0": "bidirectional", "RB1/AN10/INT1": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/VPO": "bidirectional", "(ICCK/ICPGC)": "bidirectional", "(ICDT/ICPGD)": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/RCV": "bidirectional", "RA5/AN4/HLVDIN": "bidirectional", "AN5/RE0": "bidirectional", "AN6/RE1": "bidirectional", "AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "(~{ICRST}/ICVpp)": "input", "(ICPORTS)": "bidirectional", "~{UOE}/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4450-IPT";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, QFN44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4455-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18F4455_IML extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "9",
  "RB1/AN10/INT1/SCK/SCL": "10",
  "RB2/AN8/INT2/VMO": "11",
  "RB3/AN9/CCP2/VPO": "12",
  "NC": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VDD_29": "29",
  "VSS_30": "30",
  "VSS_31": "31",
  "OSC1/CLKI": "32",
  "RA6/OSC2/CLKO": "33",
  "T1OSO/T13CKI/RC0": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", VDD_8: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", NC: "no_connect", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VDD_29: "power_in", VSS_30: "power_in", VSS_31: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4455-IML";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4455-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F4455_IP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "CK1SPP/AN5/RE0": "8",
  "CK2SPP/AN6/RE1": "9",
  "OESPP/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "RA6/OSC2/CLKO": "14",
  "T1OSO/T13CKI/RC0": "15",
  "~{UOE}/CCP2/T1OSI/RC1": "16",
  "P1A/CCP1/RC2": "17",
  "VUSB": "18",
  "SPP0/RD0": "19",
  "SPP1/RD1": "20",
  "SPP2/RD2": "21",
  "SPP3/RD3": "22",
  "VM/D-/RC4": "23",
  "VP/D+/RC5": "24",
  "TX/CK/RC6": "25",
  "SDO/RX/DT/RC7": "26",
  "SPP4/RD4": "27",
  "P1B/SPP5/RD5": "28",
  "P1C/SPP6/RD6": "29",
  "P1D/SPP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "33",
  "RB1/AN10/INT1/SCK/SCL": "34",
  "RB2/AN8/INT2/VMO": "35",
  "RB3/AN9/CCP2/VPO": "36",
  "RB4/AN11/KBI0/CSSPP": "37",
  "RB5/KBI1/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4455-IP";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4455-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18F4455_IPT extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "8",
  "RB1/AN10/INT1/SCK/SCL": "9",
  "RB2/AN8/INT2/VMO": "10",
  "RB3/AN9/CCP2/VPO": "11",
  "(ICCK/ICPGC)": "12",
  "(ICDT/ICPGD)": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T13CKI/RC0": "32",
  "(~{ICRST}/ICVpp)": "33",
  "(ICPORTS)": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "(ICCK/ICPGC)": "bidirectional", "(ICDT/ICPGD)": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "(~{ICRST}/ICVpp)": "input", "(ICPORTS)": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4455-IPT";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, 12-Bit A/D, nanoWatt XLP, QFN44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4458-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39887c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18F4458_IML extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "9",
  "RB1/AN10/INT1/SCK/SCL": "10",
  "RB2/AN8/INT2/VMO": "11",
  "RB3/AN9/CCP2/VPO": "12",
  "NC": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VDD_29": "29",
  "VSS_30": "30",
  "VSS_31": "31",
  "OSC1/CLKI": "32",
  "RA6/OSC2/CLKO": "33",
  "T1OSO/T13CKI/RC0": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
  "PAD": "45",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", VDD_8: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", NC: "no_connect", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VDD_29: "power_in", VSS_30: "power_in", VSS_31: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4458-IML";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, 12-Bit A/D, nanoWatt XLP, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4458-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39887c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F4458_IP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "CK1SPP/AN5/RE0": "8",
  "CK2SPP/AN6/RE1": "9",
  "OESPP/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "RA6/OSC2/CLKO": "14",
  "T1OSO/T13CKI/RC0": "15",
  "~{UOE}/CCP2/T1OSI/RC1": "16",
  "P1A/CCP1/RC2": "17",
  "VUSB": "18",
  "SPP0/RD0": "19",
  "SPP1/RD1": "20",
  "SPP2/RD2": "21",
  "SPP3/RD3": "22",
  "VM/D-/RC4": "23",
  "VP/D+/RC5": "24",
  "TX/CK/RC6": "25",
  "SDO/RX/DT/RC7": "26",
  "SPP4/RD4": "27",
  "P1B/SPP5/RD5": "28",
  "P1C/SPP6/RD6": "29",
  "P1D/SPP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "33",
  "RB1/AN10/INT1/SCK/SCL": "34",
  "RB2/AN8/INT2/VMO": "35",
  "RB3/AN9/CCP2/VPO": "36",
  "RB4/AN11/KBI0/CSSPP": "37",
  "RB5/KBI1/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4458-IP";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, 12-Bit A/D, nanoWatt XLP, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4458-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39887c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18F4458_IPT extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "8",
  "RB1/AN10/INT1/SCK/SCL": "9",
  "RB2/AN8/INT2/VMO": "10",
  "RB3/AN9/CCP2/VPO": "11",
  "(ICCK/ICPGC)": "12",
  "(ICDT/ICPGD)": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T13CKI/RC0": "32",
  "(~{ICRST}/ICVpp)": "33",
  "(ICPORTS)": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "(ICCK/ICPGC)": "bidirectional", "(ICDT/ICPGD)": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T13CKI/RC0": "bidirectional", "(~{ICRST}/ICVpp)": "input", "(ICPORTS)": "input", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4458-IPT";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256 EEPROM, CAN, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F448-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41159e.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller CAN.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F448_IP extends Component.withPins({
  "~{MCLR}/VPP": "1",
  "RA0/AN0/CVref": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/TOCKI": "6",
  "RA5/AN4/~{SS}/LVDIN": "7",
  "~{RD}/AN5/RE0": "8",
  "C1OUT/~{WR}/AN6/RE1": "9",
  "C2OUT/~{CS}/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKIN": "13",
  "RA6/OSC2/CLKO": "14",
  "T10S0/T1CKI/RC0": "15",
  "T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "SCK/SCL/RC3": "18",
  "C1IN+/PSP0/RD0": "19",
  "C1IN-/PSP1/RD1": "20",
  "C2IN+/PSP2/RD2": "21",
  "C2IN-/PSP3/RD3": "22",
  "SDI/SDA/RC4": "23",
  "SDO/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "P1A/ECCP1/PSP4/RD4": "27",
  "P1B/PSP5/RD5": "28",
  "P1C/PSP6/RD6": "29",
  "P1D/PSP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0": "33",
  "RB1/INT1": "34",
  "RB2/INT2/CANTX": "35",
  "RB3/CANRX": "36",
  "RB4": "37",
  "RB5/PGM": "38",
  "RB6/PGC": "39",
  "RB7/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP": "input", "RA0/AN0/CVref": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/TOCKI": "bidirectional", "RA5/AN4/~{SS}/LVDIN": "bidirectional", "~{RD}/AN5/RE0": "bidirectional", "C1OUT/~{WR}/AN6/RE1": "bidirectional", "C2OUT/~{CS}/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKIN": "input", "RA6/OSC2/CLKO": "output", "T10S0/T1CKI/RC0": "bidirectional", "T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "C1IN+/PSP0/RD0": "bidirectional", "C1IN-/PSP1/RD1": "bidirectional", "C2IN+/PSP2/RD2": "bidirectional", "C2IN-/PSP3/RD3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", "P1A/ECCP1/PSP4/RD4": "bidirectional", "P1B/PSP5/RD5": "bidirectional", "P1C/PSP6/RD6": "bidirectional", "P1D/PSP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0": "bidirectional", "RB1/INT1": "bidirectional", "RB2/INT2/CANTX": "bidirectional", "RB3/CANRX": "bidirectional", RB4: "bidirectional", "RB5/PGM": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F448-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 1536B SRAM, 256 EEPROM, ECAN, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4580-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39637d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller CAN.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F4580_IP extends Component.withPins({
  "~{MCLR}/VPP/RE3": "1",
  "RA0/AN0/CVref": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/TOCKI": "6",
  "RA5/ANA4/~{SS}/HLVDIN": "7",
  "AN5/~{RD}/RE0": "8",
  "C1OUT/AN6/~{WR}/RE1": "9",
  "C2OUT/AN7/~{CS}/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI/RA7": "13",
  "OSC2/CLKO/RA6": "14",
  "T13CKI/T1OSO/RC0": "15",
  "T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "SCL/SCK/RC3": "18",
  "C1IN+/PSP0/RD0": "19",
  "C1IN-/PSP1/RD1": "20",
  "C2IN+/PSP2/RD2": "21",
  "C2IN-/PSP3/RD3": "22",
  "SDA/SDI/RC4": "23",
  "SDO/RC5": "24",
  "CK/TX/RC6": "25",
  "DT/RX/RC7": "26",
  "P1A/ECCP1/PSP4/RD4": "27",
  "P1B/PSP5/RD5": "28",
  "P1C/PSP6/RD6": "29",
  "P1D/PSP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0/FLT0/AN10": "33",
  "RB1/INT1/AN8": "34",
  "RB2/INT2/CANTX": "35",
  "RB3/CANRX": "36",
  "RB4/KBI0/AN9": "37",
  "RB5/KBI1/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP/RE3": "input", "RA0/AN0/CVref": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/TOCKI": "bidirectional", "RA5/ANA4/~{SS}/HLVDIN": "bidirectional", "AN5/~{RD}/RE0": "bidirectional", "C1OUT/AN6/~{WR}/RE1": "bidirectional", "C2OUT/AN7/~{CS}/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI/RA7": "input", "OSC2/CLKO/RA6": "output", "T13CKI/T1OSO/RC0": "bidirectional", "T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "C1IN+/PSP0/RD0": "bidirectional", "C1IN-/PSP1/RD1": "bidirectional", "C2IN+/PSP2/RD2": "bidirectional", "C2IN-/PSP3/RD3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CK/TX/RC6": "bidirectional", "DT/RX/RC7": "bidirectional", "P1A/ECCP1/PSP4/RD4": "bidirectional", "P1B/PSP5/RD5": "bidirectional", "P1C/PSP6/RD6": "bidirectional", "P1D/PSP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0/FLT0/AN10": "bidirectional", "RB1/INT1/AN8": "bidirectional", "RB2/INT2/CANTX": "bidirectional", "RB3/CANRX": "bidirectional", "RB4/KBI0/AN9": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4580-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 768B SRAM, 256 EEPROM, ECAN, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4480-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39637d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller CAN.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F4480_IP extends Component.withPins({
  "~{MCLR}/VPP/RE3": "1",
  "RA0/AN0/CVref": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/TOCKI": "6",
  "RA5/ANA4/~{SS}/HLVDIN": "7",
  "AN5/~{RD}/RE0": "8",
  "C1OUT/AN6/~{WR}/RE1": "9",
  "C2OUT/AN7/~{CS}/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI/RA7": "13",
  "OSC2/CLKO/RA6": "14",
  "T13CKI/T1OSO/RC0": "15",
  "T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "SCL/SCK/RC3": "18",
  "C1IN+/PSP0/RD0": "19",
  "C1IN-/PSP1/RD1": "20",
  "C2IN+/PSP2/RD2": "21",
  "C2IN-/PSP3/RD3": "22",
  "SDA/SDI/RC4": "23",
  "SDO/RC5": "24",
  "CK/TX/RC6": "25",
  "DT/RX/RC7": "26",
  "P1A/ECCP1/PSP4/RD4": "27",
  "P1B/PSP5/RD5": "28",
  "P1C/PSP6/RD6": "29",
  "P1D/PSP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0/FLT0/AN10": "33",
  "RB1/INT1/AN8": "34",
  "RB2/INT2/CANTX": "35",
  "RB3/CANRX": "36",
  "RB4/KBI0/AN9": "37",
  "RB5/KBI1/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP/RE3": "input", "RA0/AN0/CVref": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/TOCKI": "bidirectional", "RA5/ANA4/~{SS}/HLVDIN": "bidirectional", "AN5/~{RD}/RE0": "bidirectional", "C1OUT/AN6/~{WR}/RE1": "bidirectional", "C2OUT/AN7/~{CS}/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI/RA7": "input", "OSC2/CLKO/RA6": "output", "T13CKI/T1OSO/RC0": "bidirectional", "T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "C1IN+/PSP0/RD0": "bidirectional", "C1IN-/PSP1/RD1": "bidirectional", "C2IN+/PSP2/RD2": "bidirectional", "C2IN-/PSP3/RD3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CK/TX/RC6": "bidirectional", "DT/RX/RC7": "bidirectional", "P1A/ECCP1/PSP4/RD4": "bidirectional", "P1B/PSP5/RD5": "bidirectional", "P1C/PSP6/RD6": "bidirectional", "P1D/PSP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0/FLT0/AN10": "bidirectional", "RB1/INT1/AN8": "bidirectional", "RB2/INT2/CANTX": "bidirectional", "RB3/CANRX": "bidirectional", "RB4/KBI0/AN9": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4480-IP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 1K SRAM, ADC, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F44J10-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39682E.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F44J10_IP extends Component.withPins({
  "~{MCLR}": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "VDDCORE/VCAP": "6",
  "RA5/AN4/~{SS1}/C2OUT": "7",
  "~{RD}/AN5/RE0": "8",
  "~{WR}/AN6/RE1": "9",
  "~{CS}/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "OSC2/CLK0": "14",
  "T1OSO/T1CKI/RC0": "15",
  "T1OSI/CCP2/RC1": "16",
  "P1A/CCP1/RC2": "17",
  "SCK1/SCL1/RC3": "18",
  "PSP0/SCK2/SCL2/RD0": "19",
  "PSP1/SDI2/SDA2/RD1": "20",
  "PSP2/SDO2/RD2": "21",
  "PSP3/~{SS2}/RD3": "22",
  "SDI1/SDA1/RC4": "23",
  "SDO1/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "PSP4/RD4": "27",
  "PSP5/P1B/RD5": "28",
  "PSP6/P1C/RD6": "29",
  "PSP7/P1D/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0/FLT0/AN12": "33",
  "RB1/INT1/AN10": "34",
  "RB2/INT2/AN8": "35",
  "RB3/CCP2/AN9": "36",
  "RB4/KBI0/AN11": "37",
  "RB5/KBI1/T0CKI/C1OUT": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}": "input", "RA0/AN0": "tri_state", "RA1/AN1": "tri_state", "RA2/AN2/Vref-/CVref": "tri_state", "RA3/AN3/Vref+": "tri_state", "VDDCORE/VCAP": "passive", "RA5/AN4/~{SS1}/C2OUT": "tri_state", "~{RD}/AN5/RE0": "tri_state", "~{WR}/AN6/RE1": "tri_state", "~{CS}/AN7/RE2": "tri_state", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "OSC2/CLK0": "output", "T1OSO/T1CKI/RC0": "tri_state", "T1OSI/CCP2/RC1": "tri_state", "P1A/CCP1/RC2": "tri_state", "SCK1/SCL1/RC3": "tri_state", "PSP0/SCK2/SCL2/RD0": "tri_state", "PSP1/SDI2/SDA2/RD1": "tri_state", "PSP2/SDO2/RD2": "tri_state", "PSP3/~{SS2}/RD3": "tri_state", "SDI1/SDA1/RC4": "tri_state", "SDO1/RC5": "tri_state", "TX/CK/RC6": "tri_state", "RX/DT/RC7": "tri_state", "PSP4/RD4": "tri_state", "PSP5/P1B/RD5": "tri_state", "PSP6/P1C/RD6": "tri_state", "PSP7/P1D/RD7": "tri_state", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0/FLT0/AN12": "tri_state", "RB1/INT1/AN10": "tri_state", "RB2/INT2/AN8": "tri_state", "RB3/CCP2/AN9": "tri_state", "RB4/KBI0/AN11": "tri_state", "RB5/KBI1/T0CKI/C1OUT": "tri_state", "RB6/KBI2/PGC": "tri_state", "RB7/KBI3/PGD": "tri_state", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F44J10-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 1536B SRAM, 256 EEPROM, ADC, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F452-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39564c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F452_IP extends Component.withPins({
  "~{MCLR}/VPP": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/TOCKI": "6",
  "RA5/AN4/~{SS}/LVDIN": "7",
  "~{RD}/AN5/RE0": "8",
  "~{WR}/AN6/RE1": "9",
  "~{CS}/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKIN": "13",
  "RA6/OSC2/CLKO": "14",
  "T10S0/T1CKI/RC0": "15",
  "CCP2/T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "SCK/SCL/RC3": "18",
  "PSP0/RD0": "19",
  "PSP1/RD1": "20",
  "PSP2/RD2": "21",
  "PSP3/RD3": "22",
  "SDI/SDA/RC4": "23",
  "SDO/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "PSP4/RD4": "27",
  "PSP5/RD5": "28",
  "PSP6/RD6": "29",
  "PSP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0": "33",
  "RB1/INT1": "34",
  "RB2/INT2": "35",
  "RB3/CCP2": "36",
  "RB4": "37",
  "RB5/PGM": "38",
  "RB6/PGC": "39",
  "RB7/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/TOCKI": "bidirectional", "RA5/AN4/~{SS}/LVDIN": "bidirectional", "~{RD}/AN5/RE0": "bidirectional", "~{WR}/AN6/RE1": "bidirectional", "~{CS}/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKIN": "input", "RA6/OSC2/CLKO": "output", "T10S0/T1CKI/RC0": "bidirectional", "CCP2/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "PSP0/RD0": "bidirectional", "PSP1/RD1": "bidirectional", "PSP2/RD2": "bidirectional", "PSP3/RD3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", "PSP4/RD4": "bidirectional", "PSP5/RD5": "bidirectional", "PSP6/RD6": "bidirectional", "PSP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0": "bidirectional", "RB1/INT1": "bidirectional", "RB2/INT2": "bidirectional", "RB3/CCP2": "bidirectional", RB4: "bidirectional", "RB5/PGM": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F452-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 1536B SRAM, 256 EEPROM, ADC, TQFP-44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F452-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39564c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18F452_IPT extends Component.withPins({
  "DT/RX/RC7": "1",
  "PSP4/RD4": "2",
  "PSP5/RD5": "3",
  "PSP6/RD6": "4",
  "PSP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/INT0": "8",
  "RB1/INT1": "9",
  "RB2/INT2": "10",
  "RB3/CCP2": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4": "14",
  "RB5/PGM": "15",
  "RB6/PGC": "16",
  "RB7/PGD": "17",
  "~{MCLR}/Vpp": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI": "23",
  "RA5/AN4/~{SS}/LVDin": "24",
  "~{RD}/AN5/RE0": "25",
  "~{WR}/AN6/RE1": "26",
  "~{CS}/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T1CKI/RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "T1OSI/CCP2/RC1": "35",
  "CCP1/RC2": "36",
  "SCK/SCL/RC3": "37",
  "PSP0/RD0": "38",
  "PSP1/RD1": "39",
  "PSP2/RD2": "40",
  "PSP3/RD3": "41",
  "SDI/SDA/RC4": "42",
  "SDO/RC5": "43",
  "CK/TX/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "DT/RX/RC7": "bidirectional", "PSP4/RD4": "bidirectional", "PSP5/RD5": "bidirectional", "PSP6/RD6": "bidirectional", "PSP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/INT0": "bidirectional", "RB1/INT1": "bidirectional", "RB2/INT2": "bidirectional", "RB3/CCP2": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", RB4: "bidirectional", "RB5/PGM": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/~{SS}/LVDin": "bidirectional", "~{RD}/AN5/RE0": "bidirectional", "~{WR}/AN6/RE1": "bidirectional", "~{CS}/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", "T1OSI/CCP2/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "PSP0/RD0": "bidirectional", "PSP1/RD1": "bidirectional", "PSP2/RD2": "bidirectional", "PSP3/RD3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CK/TX/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F452-IPT";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 1536b SRAM, 256b EEPROM, ADC, DIP-40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4520-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39631E.pdf
 * Keywords: 32K Flash, 1536b SRAM, 256b EEPROM, ADC.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F4520_xP extends Component.withPins({
  "RE3/~{MCLR}": "1",
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
  "RB6": "39",
  "RB7": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", VDD_11: "passive", VSS_12: "passive", RA7: "bidirectional", RA6: "bidirectional", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4520-xP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, QFN44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4550-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18F4550_IML extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "9",
  "RB1/AN10/INT1/SCK/SCL": "10",
  "RB2/AN8/INT2/VMO": "11",
  "RB3/AN9/CCP2/VPO": "12",
  "NC": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VDD_29": "29",
  "VSS_30": "30",
  "VSS_31": "31",
  "OSC1/CLKI": "32",
  "RA6/OSC2/CLKO": "33",
  "T1OSO/T13CKI/RC0": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", VDD_8: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", NC: "no_connect", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VDD_29: "power_in", VSS_30: "power_in", VSS_31: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4550-IML";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4550-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F4550_IP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "CK1SPP/AN5/RE0": "8",
  "CK2SPP/AN6/RE1": "9",
  "OESPP/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "RA6/OSC2/CLKO": "14",
  "T1OSO/T13CKI/RC0": "15",
  "~{UOE}/CCP2/T1OSI/RC1": "16",
  "P1A/CCP1/RC2": "17",
  "VUSB": "18",
  "SPP0/RD0": "19",
  "SPP1/RD1": "20",
  "SPP2/RD2": "21",
  "SPP3/RD3": "22",
  "VM/D-/RC4": "23",
  "VP/D+/RC5": "24",
  "TX/CK/RC6": "25",
  "SDO/RX/DT/RC7": "26",
  "SPP4/RD4": "27",
  "P1B/SPP5/RD5": "28",
  "P1C/SPP6/RD6": "29",
  "P1D/SPP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "33",
  "RB1/AN10/INT1/SCK/SCL": "34",
  "RB2/AN8/INT2/VMO": "35",
  "RB3/AN9/CCP2/VPO": "36",
  "RB4/AN11/KBI0/CSSPP": "37",
  "RB5/KBI1/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4550-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4550-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18F4550_IPT extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "8",
  "RB1/AN10/INT1/SCK/SCL": "9",
  "RB2/AN8/INT2/VMO": "10",
  "RB3/AN9/CCP2/VPO": "11",
  "(ICCK/ICPGC)": "12",
  "(ICDT/ICPGD)": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T13CKI/RC0": "32",
  "(~{ICRST}/ICVpp)": "33",
  "(ICPORTS)": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "(ICCK/ICPGC)": "bidirectional", "(ICDT/ICPGD)": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "(~{ICRST}/ICVpp)": "input", "(ICPORTS)": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4550-IPT";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, 12-Bit A/D, nanoWatt XLP, QFN44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4553-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39887c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18F4553_IML extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "9",
  "RB1/AN10/INT1/SCK/SCL": "10",
  "RB2/AN8/INT2/VMO": "11",
  "RB3/AN9/CCP2/VPO": "12",
  "NC": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VDD_29": "29",
  "VSS_30": "30",
  "VSS_31": "31",
  "OSC1/CLKI": "32",
  "RA6/OSC2/CLKO": "33",
  "T1OSO/T13CKI/RC0": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
  "PAD": "45",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", VDD_8: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", NC: "no_connect", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VDD_29: "power_in", VSS_30: "power_in", VSS_31: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4553-IML";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, 12-Bit A/D, nanoWatt XLP, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4553-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39887c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F4553_IP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "CK1SPP/AN5/RE0": "8",
  "CK2SPP/AN6/RE1": "9",
  "OESPP/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "RA6/OSC2/CLKO": "14",
  "T1OSO/T13CKI/RC0": "15",
  "~{UOE}/CCP2/T1OSI/RC1": "16",
  "P1A/CCP1/RC2": "17",
  "VUSB": "18",
  "SPP0/RD0": "19",
  "SPP1/RD1": "20",
  "SPP2/RD2": "21",
  "SPP3/RD3": "22",
  "VM/D-/RC4": "23",
  "VP/D+/RC5": "24",
  "TX/CK/RC6": "25",
  "SDO/RX/DT/RC7": "26",
  "SPP4/RD4": "27",
  "P1B/SPP5/RD5": "28",
  "P1C/SPP6/RD6": "29",
  "P1D/SPP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "33",
  "RB1/AN10/INT1/SCK/SCL": "34",
  "RB2/AN8/INT2/VMO": "35",
  "RB3/AN9/CCP2/VPO": "36",
  "RB4/AN11/KBI0/CSSPP": "37",
  "RB5/KBI1/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4553-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, 12-Bit A/D, nanoWatt XLP, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F4553-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39887c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18F4553_IPT extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "8",
  "RB1/AN10/INT1/SCK/SCL": "9",
  "RB2/AN8/INT2/VMO": "10",
  "RB3/AN9/CCP2/VPO": "11",
  "(ICCK/ICPGC)": "12",
  "(ICDT/ICPGD)": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T13CKI/RC0": "32",
  "(~{ICRST}/ICVpp)": "33",
  "(ICPORTS)": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "(ICCK/ICPGC)": "bidirectional", "(ICDT/ICPGD)": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T13CKI/RC0": "bidirectional", "(~{ICRST}/ICVpp)": "input", "(ICPORTS)": "input", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F4553-IPT";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 1536B SRAM, 256 EEPROM, CAN, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F458-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41159e.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller CAN.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F458_IP extends Component.withPins({
  "~{MCLR}/VPP": "1",
  "RA0/AN0/CVref": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/TOCKI": "6",
  "RA5/AN4/~{SS}/LVDIN": "7",
  "~{RD}/AN5/RE0": "8",
  "C1OUT/~{WR}/AN6/RE1": "9",
  "C2OUT/~{CS}/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKIN": "13",
  "RA6/OSC2/CLKO": "14",
  "T10S0/T1CKI/RC0": "15",
  "T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "SCK/SCL/RC3": "18",
  "C1IN+/PSP0/RD0": "19",
  "C1IN-/PSP1/RD1": "20",
  "C2IN+/PSP2/RD2": "21",
  "C2IN-/PSP3/RD3": "22",
  "SDI/SDA/RC4": "23",
  "SDO/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "P1A/ECCP1/PSP4/RD4": "27",
  "P1B/PSP5/RD5": "28",
  "P1C/PSP6/RD6": "29",
  "P1D/PSP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0": "33",
  "RB1/INT1": "34",
  "RB2/INT2/CANTX": "35",
  "RB3/CANRX": "36",
  "RB4": "37",
  "RB5/PGM": "38",
  "RB6/PGC": "39",
  "RB7/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP": "input", "RA0/AN0/CVref": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/TOCKI": "bidirectional", "RA5/AN4/~{SS}/LVDIN": "bidirectional", "~{RD}/AN5/RE0": "bidirectional", "C1OUT/~{WR}/AN6/RE1": "bidirectional", "C2OUT/~{CS}/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKIN": "input", "RA6/OSC2/CLKO": "output", "T10S0/T1CKI/RC0": "bidirectional", "T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "C1IN+/PSP0/RD0": "bidirectional", "C1IN-/PSP1/RD1": "bidirectional", "C2IN+/PSP2/RD2": "bidirectional", "C2IN-/PSP3/RD3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", "P1A/ECCP1/PSP4/RD4": "bidirectional", "P1B/PSP5/RD5": "bidirectional", "P1C/PSP6/RD6": "bidirectional", "P1D/PSP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0": "bidirectional", "RB1/INT1": "bidirectional", "RB2/INT2/CANTX": "bidirectional", "RB3/CANRX": "bidirectional", RB4: "bidirectional", "RB5/PGM": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F458-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 1K SRAM, ADC, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F45J10-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39682E.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18F45J10_IP extends Component.withPins({
  "~{MCLR}": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "VDDCORE/VCAP": "6",
  "RA5/AN4/~{SS1}/C2OUT": "7",
  "~{RD}/AN5/RE0": "8",
  "~{WR}/AN6/RE1": "9",
  "~{CS}/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "OSC2/CLK0": "14",
  "T1OSO/T1CKI/RC0": "15",
  "T1OSI/CCP2/RC1": "16",
  "P1A/CCP1/RC2": "17",
  "SCK1/SCL1/RC3": "18",
  "PSP0/SCK2/SCL2/RD0": "19",
  "PSP1/SDI2/SDA2/RD1": "20",
  "PSP2/SDO2/RD2": "21",
  "PSP3/~{SS2}/RD3": "22",
  "SDI1/SDA1/RC4": "23",
  "SDO1/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "PSP4/RD4": "27",
  "PSP5/P1B/RD5": "28",
  "PSP6/P1C/RD6": "29",
  "PSP7/P1D/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0/FLT0/AN12": "33",
  "RB1/INT1/AN10": "34",
  "RB2/INT2/AN8": "35",
  "RB3/CCP2/AN9": "36",
  "RB4/KBI0/AN11": "37",
  "RB5/KBI1/T0CKI/C1OUT": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}": "input", "RA0/AN0": "tri_state", "RA1/AN1": "tri_state", "RA2/AN2/Vref-/CVref": "tri_state", "RA3/AN3/Vref+": "tri_state", "VDDCORE/VCAP": "passive", "RA5/AN4/~{SS1}/C2OUT": "tri_state", "~{RD}/AN5/RE0": "tri_state", "~{WR}/AN6/RE1": "tri_state", "~{CS}/AN7/RE2": "tri_state", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "OSC2/CLK0": "output", "T1OSO/T1CKI/RC0": "tri_state", "T1OSI/CCP2/RC1": "tri_state", "P1A/CCP1/RC2": "tri_state", "SCK1/SCL1/RC3": "tri_state", "PSP0/SCK2/SCL2/RD0": "tri_state", "PSP1/SDI2/SDA2/RD1": "tri_state", "PSP2/SDO2/RD2": "tri_state", "PSP3/~{SS2}/RD3": "tri_state", "SDI1/SDA1/RC4": "tri_state", "SDO1/RC5": "tri_state", "TX/CK/RC6": "tri_state", "RX/DT/RC7": "tri_state", "PSP4/RD4": "tri_state", "PSP5/P1B/RD5": "tri_state", "PSP6/P1C/RD6": "tri_state", "PSP7/P1D/RD7": "tri_state", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0/FLT0/AN12": "tri_state", "RB1/INT1/AN10": "tri_state", "RB2/INT2/AN8": "tri_state", "RB3/CCP2/AN9": "tri_state", "RB4/KBI0/AN11": "tri_state", "RB5/KBI1/T0CKI/C1OUT": "tri_state", "RB6/KBI2/PGC": "tri_state", "RB7/KBI3/PGD": "tri_state", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F45J10-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K RAM, 256B EEPROM, Microchip PIC18F series enhanced flash microcontroller with USB in TQFP-44 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F45K50_QFP`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30000684B.pdf
 * Keywords: microcontroller Flash EEPROM SPI I2C USB UART USART ADC TQFP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18F45K50_QFP extends Component.withPins({
  "RC7/AN19/RX/DT/IOCC7": "1",
  "RD4/AN24": "2",
  "RD5/P1B/AN25": "3",
  "RD6/P1C/AN26": "4",
  "RD7/P1D/AN27": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "AN12/SRI/~{FLT0}/SDI/SDA/INT0/RB0": "8",
  "AN10/C12IN3-/SCK/SCL/INT1/RB1": "9",
  "AN8/CTED1/INT2/RB2": "10",
  "AN9/C12IN2-/CTED2/CCP2/SDO/RB3": "11",
  "ICPGC/ICCK/NC": "12",
  "ICPGD/ICDT/NC": "13",
  "AN11/IOCB4/RB4": "14",
  "AN13/T1G/T3CKI/IOCB5/RB5": "15",
  "PGC/IOCB6/RB6": "16",
  "PGD/IOCB7/RB7": "17",
  "~{MCLR}/VPP/RE3": "18",
  "AN0/C12IN0-/RA0": "19",
  "AN1/C12IN1-/CTCMP/RA1": "20",
  "VREF-/DACOUT/AN2/C2IN+/RA2": "21",
  "VREF+/AN3/C1IN+/RA3": "22",
  "C1OUT/SRQ/T0CKI/RA4": "23",
  "AN4/HLVDIN/SRNQ/C2OUT/~{SS}/RA5": "24",
  "RE0/AN5": "25",
  "RE1/AN6": "26",
  "RE2/AN7": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI/RA7": "30",
  "OSC2/CLKO/RA6": "31",
  "RC0/SOSCO/T1CKI/T3CKI/T3G/IOCC0": "32",
  "ICVPP/ICRST/NC": "33",
  "NC": "34",
  "RC1/SOSCI/CCP2/IOCC1": "35",
  "RC2/AN14/CTPLS/CCP1/P1A/IOCC2": "36",
  "VUSB3V3/VDDCORE": "37",
  "RD0/AN20": "38",
  "RD1/AN21": "39",
  "RD2/AN22": "40",
  "RD3/AN23": "41",
  "D-/IOCC4": "42",
  "D+/IOCC5": "43",
  "RC6/AN18/TX/CK/IOCC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RC7/AN19/RX/DT/IOCC7": "bidirectional", "RD4/AN24": "bidirectional", "RD5/P1B/AN25": "bidirectional", "RD6/P1C/AN26": "bidirectional", "RD7/P1D/AN27": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "AN12/SRI/~{FLT0}/SDI/SDA/INT0/RB0": "bidirectional", "AN10/C12IN3-/SCK/SCL/INT1/RB1": "bidirectional", "AN8/CTED1/INT2/RB2": "bidirectional", "AN9/C12IN2-/CTED2/CCP2/SDO/RB3": "bidirectional", "ICPGC/ICCK/NC": "bidirectional", "ICPGD/ICDT/NC": "bidirectional", "AN11/IOCB4/RB4": "bidirectional", "AN13/T1G/T3CKI/IOCB5/RB5": "bidirectional", "PGC/IOCB6/RB6": "bidirectional", "PGD/IOCB7/RB7": "bidirectional", "~{MCLR}/VPP/RE3": "input", "AN0/C12IN0-/RA0": "bidirectional", "AN1/C12IN1-/CTCMP/RA1": "bidirectional", "VREF-/DACOUT/AN2/C2IN+/RA2": "bidirectional", "VREF+/AN3/C1IN+/RA3": "bidirectional", "C1OUT/SRQ/T0CKI/RA4": "bidirectional", "AN4/HLVDIN/SRNQ/C2OUT/~{SS}/RA5": "bidirectional", "RE0/AN5": "bidirectional", "RE1/AN6": "bidirectional", "RE2/AN7": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI/RA7": "bidirectional", "OSC2/CLKO/RA6": "bidirectional", "RC0/SOSCO/T1CKI/T3CKI/T3G/IOCC0": "bidirectional", "ICVPP/ICRST/NC": "bidirectional", NC: "no_connect", "RC1/SOSCI/CCP2/IOCC1": "bidirectional", "RC2/AN14/CTPLS/CCP1/P1A/IOCC2": "bidirectional", "VUSB3V3/VDDCORE": "power_in", "RD0/AN20": "bidirectional", "RD1/AN21": "bidirectional", "RD2/AN22": "bidirectional", "RD3/AN23": "bidirectional", "D-/IOCC4": "bidirectional", "D+/IOCC5": "bidirectional", "RC6/AN18/TX/CK/IOCC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F45K50_QFP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 3.5K RAM, 1K EEPROM, Microchip PIC18F series enhanced flash microcontroller with ECAN and nanoWatt XLP Technology in QFN-44 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F45K80-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC18F66K80%20FAMILY%20Enhanced%20Flash%20MCU%20with%20ECAN%20XLP%20Technology%2030009977G.pdf
 * Keywords: microcontroller Flash EEPROM SPI I2C CAN UART USART ADC.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18F45K80_IML extends Component.withPins({
  "CANRX/RX1/CCP4/RC7": "1",
  "ECCP1/PSP4/RD4": "2",
  "PSP5/RD5": "3",
  "TX2/PSP6/RD6": "4",
  "RX2/PSP7/RD7": "5",
  "Vss_6": "6",
  "Vdd_7": "7",
  "RB0/AN10/INT0": "8",
  "RB1/AN8/INT1": "9",
  "RB2/CANTX/INT2": "10",
  "RB3/CANRX/INT3": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4/AN9": "14",
  "RB5/CCP5": "15",
  "RB6/PGC": "16",
  "RB7/PGD": "17",
  "~{MLCR}/RE3": "18",
  "RA0/CVref/AN0": "19",
  "RA1/AN1": "20",
  "RA2/Vref-/AN2": "21",
  "RA3/Vref+/AN3": "22",
  "Vddcore/Vcap": "23",
  "RA5/AN4": "24",
  "RE0/AN5": "25",
  "RE1/AN6": "26",
  "RE2/AN7": "27",
  "Vdd_28": "28",
  "Vss_29": "29",
  "OSC1/CLKIN/RA7": "30",
  "OSC2/CLKOUT/RA6": "31",
  "RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "RC1": "35",
  "CCP2/RC2": "36",
  "SCL/SCK/RC3": "37",
  "C1INA/PSP0/RD0": "38",
  "C1INB/PSP1/RD1": "39",
  "C2INA/PSP2/RD2": "40",
  "C2INB/PSP3/RD3": "41",
  "SDA/SDI/RC4": "42",
  "SDO/RC5": "43",
  "CANTX/TX1/CCP3/RC6": "44",
  "PAD": "45",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CANRX/RX1/CCP4/RC7": "bidirectional", "ECCP1/PSP4/RD4": "bidirectional", "PSP5/RD5": "bidirectional", "TX2/PSP6/RD6": "bidirectional", "RX2/PSP7/RD7": "bidirectional", Vss_6: "power_in", Vdd_7: "power_in", "RB0/AN10/INT0": "bidirectional", "RB1/AN8/INT1": "bidirectional", "RB2/CANTX/INT2": "bidirectional", "RB3/CANRX/INT3": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", "RB4/AN9": "bidirectional", "RB5/CCP5": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", "~{MLCR}/RE3": "bidirectional", "RA0/CVref/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/Vref-/AN2": "bidirectional", "RA3/Vref+/AN3": "bidirectional", "Vddcore/Vcap": "power_in", "RA5/AN4": "bidirectional", "RE0/AN5": "bidirectional", "RE1/AN6": "bidirectional", "RE2/AN7": "bidirectional", Vdd_28: "power_in", Vss_29: "power_in", "OSC1/CLKIN/RA7": "input", "OSC2/CLKOUT/RA6": "input", RC0: "bidirectional", NC_33: "no_connect", NC_34: "no_connect", RC1: "bidirectional", "CCP2/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "C1INA/PSP0/RD0": "bidirectional", "C1INB/PSP1/RD1": "bidirectional", "C2INA/PSP2/RD2": "bidirectional", "C2INB/PSP3/RD3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CANTX/TX1/CCP3/RC6": "bidirectional", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F45K80-IML";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 3.5K RAM, 1K EEPROM, Microchip PIC18F series enhanced flash microcontroller with ECAN and nanoWatt XLP Technology in TQFP-44 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F45K80-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microcontroller Flash EEPROM SPI I2C CAN UART USART ADC TQFP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18F45K80_IPT extends Component.withPins({
  "RC7/CANRX/RX1/DT1/CCP4": "1",
  "RD4/ECCP1/P1A/PSP4": "2",
  "RD5/P1B/PSP5": "3",
  "RD6/TX2/CK2/P1C/PSP6": "4",
  "RD7/RX2/DT2/P1D/PSP7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "AN10/FLT0/INT0/RB0": "8",
  "AN8/CTDIN/INT1/RB1": "9",
  "CANTX/CTED1/INT2/RB2": "10",
  "CANRX/CTED2/INT3/RB3": "11",
  "N/C_12": "12",
  "N/C_13": "13",
  "AN9/CTPLS/KBI0/RB4": "14",
  "T0CKI/T3CKI/CCP5/KBI1/RB5": "15",
  "PGC/KBI2/RB6": "16",
  "PGD/T3G/KBI3/RB7": "17",
  "~{MCLR}/RE3": "18",
  "CVref/AN0/ULPWU/RA0": "19",
  "AN1/C1INC/RA1": "20",
  "VREF-/AN2/C2INC/RA2": "21",
  "Vref+/AN3/RA3": "22",
  "VDDCORE/VCAP": "23",
  "AN4/HLVDIN/T1CKI/~{SS}/RA5": "24",
  "RE0/AN5/~{RD}": "25",
  "RE1/AN6/C1OUT/~{WR}": "26",
  "RE2/AN7/C2OUT/~{CS}": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKIN/RA7": "30",
  "OSC2/CLKOUT/RA6": "31",
  "RC0/SOSCO/SCLKI": "32",
  "N/C_33": "33",
  "N/C_34": "34",
  "RC1/SOSCI": "35",
  "RC2/T1G/CCP2": "36",
  "RC3/REFO/SCL/SCK": "37",
  "RD0/C1INA/PSP0": "38",
  "RD1/C1INB/PSP1": "39",
  "RD2/C2INA/PSP2": "40",
  "RD3/C2INB/CTMUI/PSP3": "41",
  "RC4/SDA/SDI": "42",
  "RC5/SDO": "43",
  "RC6/CANTX/TX1/CK1/CCP3": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RC7/CANRX/RX1/DT1/CCP4": "bidirectional", "RD4/ECCP1/P1A/PSP4": "bidirectional", "RD5/P1B/PSP5": "bidirectional", "RD6/TX2/CK2/P1C/PSP6": "bidirectional", "RD7/RX2/DT2/P1D/PSP7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "AN10/FLT0/INT0/RB0": "bidirectional", "AN8/CTDIN/INT1/RB1": "bidirectional", "CANTX/CTED1/INT2/RB2": "bidirectional", "CANRX/CTED2/INT3/RB3": "bidirectional", "N/C_12": "bidirectional", "N/C_13": "bidirectional", "AN9/CTPLS/KBI0/RB4": "bidirectional", "T0CKI/T3CKI/CCP5/KBI1/RB5": "bidirectional", "PGC/KBI2/RB6": "bidirectional", "PGD/T3G/KBI3/RB7": "bidirectional", "~{MCLR}/RE3": "input", "CVref/AN0/ULPWU/RA0": "bidirectional", "AN1/C1INC/RA1": "bidirectional", "VREF-/AN2/C2INC/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "VDDCORE/VCAP": "passive", "AN4/HLVDIN/T1CKI/~{SS}/RA5": "bidirectional", "RE0/AN5/~{RD}": "bidirectional", "RE1/AN6/C1OUT/~{WR}": "bidirectional", "RE2/AN7/C2OUT/~{CS}": "power_in", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKIN/RA7": "input", "OSC2/CLKOUT/RA6": "output", "RC0/SOSCO/SCLKI": "bidirectional", "N/C_33": "bidirectional", "N/C_34": "bidirectional", "RC1/SOSCI": "bidirectional", "RC2/T1G/CCP2": "bidirectional", "RC3/REFO/SCL/SCK": "bidirectional", "RD0/C1INA/PSP0": "bidirectional", "RD1/C1INB/PSP1": "bidirectional", "RD2/C2INA/PSP2": "bidirectional", "RD3/C2INB/CTMUI/PSP3": "bidirectional", "RC4/SDA/SDI": "bidirectional", "RC5/SDO": "bidirectional", "RC6/CANTX/TX1/CK1/CCP3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F45K80-IPT";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3.5K RAM, 1K EEPROM PIC18 Microcontroller ADC PWM SPI I2C USART in TQFP44 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F46K22-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001412G.pdf
 * Keywords: microchip microcontroller PIC18 flash XLP nanoWatt.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18F46K22_xPT extends Component.withPins({
  "RC7/RX1/DT1/AN19": "1",
  "RD4/P2D/SDO2/AN24": "2",
  "RD5/P1B/AN25": "3",
  "RD6/TX2/CK2/P1C/AN26": "4",
  "RD7/RX2/DT2/P1D/AN27": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "AN12/FLT0/INT0/RB0": "8",
  "AN10/C12IN3-/CTDIN/INT1/RB1": "9",
  "AN8/CTED1/INT2/RB2": "10",
  "AN9/C12IN2-/CTED2/RB3": "11",
  "NC_12": "12",
  "NC_13": "13",
  "AN11/T5G/IOC/RB4": "14",
  "AN13/CCP3/IOC/RB5": "15",
  "PGC/IOC/RB6": "16",
  "PGD/IOC/RB7": "17",
  "~{MCLR}/VPP/RE3": "18",
  "AN0/C12IN0-/RA0": "19",
  "AN1/C12INC1-/RA1": "20",
  "VREF-/AN2/C2IN+/RA2": "21",
  "VREF+/AN3/C1IN+/RA3": "22",
  "C1OUT/SRQ/T0CKI/RA4": "23",
  "AN4/C2OUT/SRQN/~{SS1}/RA5": "24",
  "RE0/P3A/AN5": "25",
  "RE1/P3B/AN6": "26",
  "RE2/CCP5/AN7": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKIN/RA7": "30",
  "OSC2/CLKOUT/RA6": "31",
  "RC0/P2B/SOSCO/SCLKI": "32",
  "NC_33": "33",
  "NC_34": "34",
  "RC1/SOSCI/P2A": "35",
  "RC2/T1G/CCP2/AN14": "36",
  "RC3/REFO/SCL1/SCK1/AN15": "37",
  "RD0/SCL2/SCK2/AN20": "38",
  "RD1/SDI1/SDA2/AN21": "39",
  "RD2/P2B/AN22": "40",
  "RD3/P2C/~{SS2}/AN23": "41",
  "RC4/SDA1/SDI1/AN16": "42",
  "RC5/SDO1/AN17": "43",
  "RC6/TX1/CK1/AN18": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RC7/RX1/DT1/AN19": "bidirectional", "RD4/P2D/SDO2/AN24": "bidirectional", "RD5/P1B/AN25": "bidirectional", "RD6/TX2/CK2/P1C/AN26": "bidirectional", "RD7/RX2/DT2/P1D/AN27": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "AN12/FLT0/INT0/RB0": "bidirectional", "AN10/C12IN3-/CTDIN/INT1/RB1": "bidirectional", "AN8/CTED1/INT2/RB2": "bidirectional", "AN9/C12IN2-/CTED2/RB3": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", "AN11/T5G/IOC/RB4": "bidirectional", "AN13/CCP3/IOC/RB5": "bidirectional", "PGC/IOC/RB6": "bidirectional", "PGD/IOC/RB7": "bidirectional", "~{MCLR}/VPP/RE3": "bidirectional", "AN0/C12IN0-/RA0": "bidirectional", "AN1/C12INC1-/RA1": "bidirectional", "VREF-/AN2/C2IN+/RA2": "bidirectional", "VREF+/AN3/C1IN+/RA3": "bidirectional", "C1OUT/SRQ/T0CKI/RA4": "bidirectional", "AN4/C2OUT/SRQN/~{SS1}/RA5": "bidirectional", "RE0/P3A/AN5": "bidirectional", "RE1/P3B/AN6": "bidirectional", "RE2/CCP5/AN7": "bidirectional", VDD_28: "passive", VSS_29: "passive", "OSC1/CLKIN/RA7": "bidirectional", "OSC2/CLKOUT/RA6": "bidirectional", "RC0/P2B/SOSCO/SCLKI": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", "RC1/SOSCI/P2A": "bidirectional", "RC2/T1G/CCP2/AN14": "bidirectional", "RC3/REFO/SCL1/SCK1/AN15": "bidirectional", "RD0/SCL2/SCK2/AN20": "bidirectional", "RD1/SDI1/SDA2/AN21": "bidirectional", "RD2/P2B/AN22": "bidirectional", "RD3/P2C/~{SS2}/AN23": "bidirectional", "RC4/SDA1/SDI1/AN16": "bidirectional", "RC5/SDO1/AN17": "bidirectional", "RC6/TX1/CK1/AN18": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F46K22-xPT";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3.5K RAM, 1K EEPROM PIC18 Microcontroller ADC PWM CAN SPI I2C USART in QFN44 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F46K80-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microcontroller PIC18 flash ECAN XLP nanoWatt.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18F46K80_IML extends Component.withPins({
  "CANRX/RX1/CCP4/RC7": "1",
  "ECCP1/PSP4/RD4": "2",
  "PSP5/RD5": "3",
  "TX2/PSP6/RD6": "4",
  "RX2/PSP7/RD7": "5",
  "Vss_6": "6",
  "Vdd_7": "7",
  "RB0/AN10/INT0": "8",
  "RB1/AN8/INT1": "9",
  "RB2/CANTX/INT2": "10",
  "RB3/CANRX/INT3": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4/AN9": "14",
  "RB5/CCP5": "15",
  "RB6/PGC": "16",
  "RB7/PGD": "17",
  "~{MLCR}/RE3": "18",
  "RA0/CVref/AN0": "19",
  "RA1/AN1": "20",
  "RA2/Vref-/AN2": "21",
  "RA3/Vref+/AN3": "22",
  "Vddcore/Vcap": "23",
  "RA5/AN4": "24",
  "RE0/AN5": "25",
  "RE1/AN6": "26",
  "RE2/AN7": "27",
  "Vdd_28": "28",
  "Vss_29": "29",
  "OSC1/CLKIN/RA7": "30",
  "OSC2/CLKOUT/RA6": "31",
  "RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "RC1": "35",
  "CCP2/RC2": "36",
  "SCL/SCK/RC3": "37",
  "C1INA/PSP0/RD0": "38",
  "C1INB/PSP1/RD1": "39",
  "C2INA/PSP2/RD2": "40",
  "C2INB/PSP3/RD3": "41",
  "SDA/SDI/RC4": "42",
  "SDO/RC5": "43",
  "CANTX/TX1/CCP3/RC6": "44",
  "PAD": "45",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CANRX/RX1/CCP4/RC7": "bidirectional", "ECCP1/PSP4/RD4": "bidirectional", "PSP5/RD5": "bidirectional", "TX2/PSP6/RD6": "bidirectional", "RX2/PSP7/RD7": "bidirectional", Vss_6: "power_in", Vdd_7: "power_in", "RB0/AN10/INT0": "bidirectional", "RB1/AN8/INT1": "bidirectional", "RB2/CANTX/INT2": "bidirectional", "RB3/CANRX/INT3": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", "RB4/AN9": "bidirectional", "RB5/CCP5": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", "~{MLCR}/RE3": "bidirectional", "RA0/CVref/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/Vref-/AN2": "bidirectional", "RA3/Vref+/AN3": "bidirectional", "Vddcore/Vcap": "power_in", "RA5/AN4": "bidirectional", "RE0/AN5": "bidirectional", "RE1/AN6": "bidirectional", "RE2/AN7": "bidirectional", Vdd_28: "power_in", Vss_29: "power_in", "OSC1/CLKIN/RA7": "input", "OSC2/CLKOUT/RA6": "input", RC0: "bidirectional", NC_33: "no_connect", NC_34: "no_connect", RC1: "bidirectional", "CCP2/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "C1INA/PSP0/RD0": "bidirectional", "C1INB/PSP1/RD1": "bidirectional", "C2INA/PSP2/RD2": "bidirectional", "C2INB/PSP3/RD3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CANTX/TX1/CCP3/RC6": "bidirectional", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F46K80-IML";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3.5K RAM, 1K EEPROM PIC18 Microcontroller ADC PWM CAN SPI I2C USART in TQFP44 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F46K80-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microchip microcontroller PIC18 flash ECAN XLP nanoWatt.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18F46K80_IPT extends Component.withPins({
  "RC7/CANRX/RX1/DT1/CCP4": "1",
  "RD4/ECCP1/P1A/PSP4": "2",
  "RD5/P1B/PSP5": "3",
  "RD6/TX2/CK2/P1C/PSP6": "4",
  "RD7/RX2/DT2/P1D/PSP7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "AN10/FLT0/INT0/RB0": "8",
  "AN8/CTDIN/INT1/RB1": "9",
  "CANTX/CTED1/INT2/RB2": "10",
  "CANRX/CTED2/INT3/RB3": "11",
  "N/C_12": "12",
  "N/C_13": "13",
  "AN9/CTPLS/KBI0/RB4": "14",
  "T0CKI/T3CKI/CCP5/KBI1/RB5": "15",
  "PGC/KBI2/RB6": "16",
  "PGD/T3G/KBI3/RB7": "17",
  "~{MCLR}/RE3": "18",
  "CVref/AN0/ULPWU/RA0": "19",
  "AN1/C1INC/RA1": "20",
  "VREF-/AN2/C2INC/RA2": "21",
  "Vref+/AN3/RA3": "22",
  "VDDCORE/VCAP": "23",
  "AN4/HLVDIN/T1CKI/~{SS}/RA5": "24",
  "RE0/AN5/~{RD}": "25",
  "RE1/AN6/C1OUT/~{WR}": "26",
  "RE2/AN7/C2OUT/~{CS}": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKIN/RA7": "30",
  "OSC2/CLKOUT/RA6": "31",
  "RC0/SOSCO/SCLKI": "32",
  "N/C_33": "33",
  "N/C_34": "34",
  "RC1/SOSCI": "35",
  "RC2/T1G/CCP2": "36",
  "RC3/REFO/SCL/SCK": "37",
  "RD0/C1INA/PSP0": "38",
  "RD1/C1INB/PSP1": "39",
  "RD2/C2INA/PSP2": "40",
  "RD3/C2INB/CTMUI/PSP3": "41",
  "RC4/SDA/SDI": "42",
  "RC5/SDO": "43",
  "RC6/CANTX/TX1/CK1/CCP3": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RC7/CANRX/RX1/DT1/CCP4": "bidirectional", "RD4/ECCP1/P1A/PSP4": "bidirectional", "RD5/P1B/PSP5": "bidirectional", "RD6/TX2/CK2/P1C/PSP6": "bidirectional", "RD7/RX2/DT2/P1D/PSP7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "AN10/FLT0/INT0/RB0": "bidirectional", "AN8/CTDIN/INT1/RB1": "bidirectional", "CANTX/CTED1/INT2/RB2": "bidirectional", "CANRX/CTED2/INT3/RB3": "bidirectional", "N/C_12": "bidirectional", "N/C_13": "bidirectional", "AN9/CTPLS/KBI0/RB4": "bidirectional", "T0CKI/T3CKI/CCP5/KBI1/RB5": "bidirectional", "PGC/KBI2/RB6": "bidirectional", "PGD/T3G/KBI3/RB7": "bidirectional", "~{MCLR}/RE3": "input", "CVref/AN0/ULPWU/RA0": "bidirectional", "AN1/C1INC/RA1": "bidirectional", "VREF-/AN2/C2INC/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "VDDCORE/VCAP": "passive", "AN4/HLVDIN/T1CKI/~{SS}/RA5": "bidirectional", "RE0/AN5/~{RD}": "bidirectional", "RE1/AN6/C1OUT/~{WR}": "bidirectional", "RE2/AN7/C2OUT/~{CS}": "power_in", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKIN/RA7": "input", "OSC2/CLKOUT/RA6": "output", "RC0/SOSCO/SCLKI": "bidirectional", "N/C_33": "bidirectional", "N/C_34": "bidirectional", "RC1/SOSCI": "bidirectional", "RC2/T1G/CCP2": "bidirectional", "RC3/REFO/SCL/SCK": "bidirectional", "RD0/C1INA/PSP0": "bidirectional", "RD1/C1INB/PSP1": "bidirectional", "RD2/C2INA/PSP2": "bidirectional", "RD3/C2INB/CTMUI/PSP3": "bidirectional", "RC4/SDA/SDI": "bidirectional", "RC5/SDO": "bidirectional", "RC6/CANTX/TX1/CK1/CCP3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F46K80-IPT";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3.7K SRAM, Ethernet Controller with PHY, 8K Buffer, TQFP64
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F66J60-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39762f.pdf
 * Keywords: Flash Based 8-Bit Microcontroller Ethernet Controller PHY.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class PIC18F66J60_IPT extends Component.withPins({
  "RE1/P2C": "1",
  "RE0/P2D": "2",
  "INT0/FLT0/RB0": "3",
  "INT1/RB1": "4",
  "INT2/RB2": "5",
  "INT3/RB3": "6",
  "~{MCLR}": "7",
  "RG4/CCP5/P1D": "8",
  "VSS_9": "9",
  "VDDCORE/VCAP": "10",
  "RF7/~{SS1}": "11",
  "RF6/AN11": "12",
  "RF5/AN10/CVref": "13",
  "RF4/AN9": "14",
  "RF3/AN8": "15",
  "RF2/AN7/C1OUT": "16",
  "RF1/AN6/C2OUT": "17",
  "ENVREG": "18",
  "AVDD": "19",
  "AVSS": "20",
  "Vref+/AN3/RA3": "21",
  "Vref-/AN2/RA2": "22",
  "LEDB/AN1/RA1": "23",
  "LEDA/AN0/RA0": "24",
  "VSS_25": "25",
  "VDD_26": "26",
  "AN4/RA5": "27",
  "T0CKI/RA4": "28",
  "T1OSI/ECCP2/P2A/RC1": "29",
  "T13CKI/T1OSO/RC0": "30",
  "TX1/CK1/RC6": "31",
  "RX1/DT1/RC7": "32",
  "ECCP1/P1A/RC2": "33",
  "SCK1/SCL1/RC3": "34",
  "SDI1/SDA1/RC4": "35",
  "SDO1/RC5": "36",
  "PGD/KBI3/RB7": "37",
  "VDD_38": "38",
  "OSC1/CLKI": "39",
  "OSC2/CLK2": "40",
  "VSS_41": "41",
  "PGC/KBI2/RB6": "42",
  "KBI1/RB5": "43",
  "KBI0/RB4": "44",
  "VSSRX": "45",
  "TPIN-": "46",
  "TPIN+": "47",
  "VDDRX": "48",
  "VDDTX": "49",
  "TPOUT-": "50",
  "TPOUT+": "51",
  "VSSTX": "52",
  "RBIAS": "53",
  "VDDPLL": "54",
  "VSSPLL": "55",
  "VSS_56": "56",
  "VDD_57": "57",
  "RD2/CCP4/P3D": "58",
  "RD1/ECCP3/P3A": "59",
  "RD0/P1B": "60",
  "RE5/P1C": "61",
  "RE4/P3B": "62",
  "RE3/P3C": "63",
  "RE2/P2B": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE1/P2C": "bidirectional", "RE0/P2D": "bidirectional", "INT0/FLT0/RB0": "bidirectional", "INT1/RB1": "bidirectional", "INT2/RB2": "bidirectional", "INT3/RB3": "bidirectional", "~{MCLR}": "input", "RG4/CCP5/P1D": "bidirectional", VSS_9: "power_in", "VDDCORE/VCAP": "passive", "RF7/~{SS1}": "bidirectional", "RF6/AN11": "bidirectional", "RF5/AN10/CVref": "bidirectional", "RF4/AN9": "bidirectional", "RF3/AN8": "bidirectional", "RF2/AN7/C1OUT": "bidirectional", "RF1/AN6/C2OUT": "bidirectional", ENVREG: "passive", AVDD: "power_in", AVSS: "power_in", "Vref+/AN3/RA3": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "LEDB/AN1/RA1": "bidirectional", "LEDA/AN0/RA0": "bidirectional", VSS_25: "power_in", VDD_26: "power_in", "AN4/RA5": "bidirectional", "T0CKI/RA4": "bidirectional", "T1OSI/ECCP2/P2A/RC1": "bidirectional", "T13CKI/T1OSO/RC0": "bidirectional", "TX1/CK1/RC6": "bidirectional", "RX1/DT1/RC7": "bidirectional", "ECCP1/P1A/RC2": "bidirectional", "SCK1/SCL1/RC3": "bidirectional", "SDI1/SDA1/RC4": "bidirectional", "SDO1/RC5": "bidirectional", "PGD/KBI3/RB7": "bidirectional", VDD_38: "power_in", "OSC1/CLKI": "input", "OSC2/CLK2": "output", VSS_41: "power_in", "PGC/KBI2/RB6": "bidirectional", "KBI1/RB5": "bidirectional", "KBI0/RB4": "bidirectional", VSSRX: "power_in", "TPIN-": "passive", "TPIN+": "passive", VDDRX: "power_in", VDDTX: "power_in", "TPOUT-": "passive", "TPOUT+": "passive", VSSTX: "power_in", RBIAS: "passive", VDDPLL: "power_in", VSSPLL: "power_in", VSS_56: "power_in", VDD_57: "power_in", "RD2/CCP4/P3D": "bidirectional", "RD1/ECCP3/P3A": "bidirectional", "RD0/P1B": "bidirectional", "RE5/P1C": "bidirectional", "RE4/P3B": "bidirectional", "RE3/P3C": "bidirectional", "RE2/P2B": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F66J60-IPT";
  override referencePrefix = "U";
}

/**
 * 96K Flash, 3.7K SRAM, Ethernet Controller with PHY, 8K Buffer, TQFP64
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F66J65-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39762f.pdf
 * Keywords: Flash Based 8-Bit Microcontroller Ethernet Controller PHY.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class PIC18F66J65_IPT extends Component.withPins({
  "RE1/P2C": "1",
  "RE0/P2D": "2",
  "INT0/FLT0/RB0": "3",
  "INT1/RB1": "4",
  "INT2/RB2": "5",
  "INT3/RB3": "6",
  "~{MCLR}": "7",
  "RG4/CCP5/P1D": "8",
  "VSS_9": "9",
  "VDDCORE/VCAP": "10",
  "RF7/~{SS1}": "11",
  "RF6/AN11": "12",
  "RF5/AN10/CVref": "13",
  "RF4/AN9": "14",
  "RF3/AN8": "15",
  "RF2/AN7/C1OUT": "16",
  "RF1/AN6/C2OUT": "17",
  "ENVREG": "18",
  "AVDD": "19",
  "AVSS": "20",
  "Vref+/AN3/RA3": "21",
  "Vref-/AN2/RA2": "22",
  "LEDB/AN1/RA1": "23",
  "LEDA/AN0/RA0": "24",
  "VSS_25": "25",
  "VDD_26": "26",
  "AN4/RA5": "27",
  "T0CKI/RA4": "28",
  "T1OSI/ECCP2/P2A/RC1": "29",
  "T13CKI/T1OSO/RC0": "30",
  "TX1/CK1/RC6": "31",
  "RX1/DT1/RC7": "32",
  "ECCP1/P1A/RC2": "33",
  "SCK1/SCL1/RC3": "34",
  "SDI1/SDA1/RC4": "35",
  "SDO1/RC5": "36",
  "PGD/KBI3/RB7": "37",
  "VDD_38": "38",
  "OSC1/CLKI": "39",
  "OSC2/CLK2": "40",
  "VSS_41": "41",
  "PGC/KBI2/RB6": "42",
  "KBI1/RB5": "43",
  "KBI0/RB4": "44",
  "VSSRX": "45",
  "TPIN-": "46",
  "TPIN+": "47",
  "VDDRX": "48",
  "VDDTX": "49",
  "TPOUT-": "50",
  "TPOUT+": "51",
  "VSSTX": "52",
  "RBIAS": "53",
  "VDDPLL": "54",
  "VSSPLL": "55",
  "VSS_56": "56",
  "VDD_57": "57",
  "RD2/CCP4/P3D": "58",
  "RD1/ECCP3/P3A": "59",
  "RD0/P1B": "60",
  "RE5/P1C": "61",
  "RE4/P3B": "62",
  "RE3/P3C": "63",
  "RE2/P2B": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE1/P2C": "bidirectional", "RE0/P2D": "bidirectional", "INT0/FLT0/RB0": "bidirectional", "INT1/RB1": "bidirectional", "INT2/RB2": "bidirectional", "INT3/RB3": "bidirectional", "~{MCLR}": "input", "RG4/CCP5/P1D": "bidirectional", VSS_9: "power_in", "VDDCORE/VCAP": "passive", "RF7/~{SS1}": "bidirectional", "RF6/AN11": "bidirectional", "RF5/AN10/CVref": "bidirectional", "RF4/AN9": "bidirectional", "RF3/AN8": "bidirectional", "RF2/AN7/C1OUT": "bidirectional", "RF1/AN6/C2OUT": "bidirectional", ENVREG: "passive", AVDD: "power_in", AVSS: "power_in", "Vref+/AN3/RA3": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "LEDB/AN1/RA1": "bidirectional", "LEDA/AN0/RA0": "bidirectional", VSS_25: "power_in", VDD_26: "power_in", "AN4/RA5": "bidirectional", "T0CKI/RA4": "bidirectional", "T1OSI/ECCP2/P2A/RC1": "bidirectional", "T13CKI/T1OSO/RC0": "bidirectional", "TX1/CK1/RC6": "bidirectional", "RX1/DT1/RC7": "bidirectional", "ECCP1/P1A/RC2": "bidirectional", "SCK1/SCL1/RC3": "bidirectional", "SDI1/SDA1/RC4": "bidirectional", "SDO1/RC5": "bidirectional", "PGD/KBI3/RB7": "bidirectional", VDD_38: "power_in", "OSC1/CLKI": "input", "OSC2/CLK2": "output", VSS_41: "power_in", "PGC/KBI2/RB6": "bidirectional", "KBI1/RB5": "bidirectional", "KBI0/RB4": "bidirectional", VSSRX: "power_in", "TPIN-": "passive", "TPIN+": "passive", VDDRX: "power_in", VDDTX: "power_in", "TPOUT-": "passive", "TPOUT+": "passive", VSSTX: "power_in", RBIAS: "passive", VDDPLL: "power_in", VSSPLL: "power_in", VSS_56: "power_in", VDD_57: "power_in", "RD2/CCP4/P3D": "bidirectional", "RD1/ECCP3/P3A": "bidirectional", "RD0/P1B": "bidirectional", "RE5/P1C": "bidirectional", "RE4/P3B": "bidirectional", "RE3/P3C": "bidirectional", "RE2/P2B": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F66J65-IPT";
  override referencePrefix = "U";
}

/**
 * 128K Flash, 3.7K SRAM, Ethernet Controller with PHY, 8K Buffer, TQFP64
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F67J60-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39762f.pdf
 * Keywords: Flash Based 8-Bit Microcontroller Ethernet Controller PHY.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class PIC18F67J60_IPT extends Component.withPins({
  "RE1/P2C": "1",
  "RE0/P2D": "2",
  "INT0/FLT0/RB0": "3",
  "INT1/RB1": "4",
  "INT2/RB2": "5",
  "INT3/RB3": "6",
  "~{MCLR}": "7",
  "RG4/CCP5/P1D": "8",
  "VSS_9": "9",
  "VDDCORE/VCAP": "10",
  "RF7/~{SS1}": "11",
  "RF6/AN11": "12",
  "RF5/AN10/CVref": "13",
  "RF4/AN9": "14",
  "RF3/AN8": "15",
  "RF2/AN7/C1OUT": "16",
  "RF1/AN6/C2OUT": "17",
  "ENVREG": "18",
  "AVDD": "19",
  "AVSS": "20",
  "Vref+/AN3/RA3": "21",
  "Vref-/AN2/RA2": "22",
  "LEDB/AN1/RA1": "23",
  "LEDA/AN0/RA0": "24",
  "VSS_25": "25",
  "VDD_26": "26",
  "AN4/RA5": "27",
  "T0CKI/RA4": "28",
  "T1OSI/ECCP2/P2A/RC1": "29",
  "T13CKI/T1OSO/RC0": "30",
  "TX1/CK1/RC6": "31",
  "RX1/DT1/RC7": "32",
  "ECCP1/P1A/RC2": "33",
  "SCK1/SCL1/RC3": "34",
  "SDI1/SDA1/RC4": "35",
  "SDO1/RC5": "36",
  "PGD/KBI3/RB7": "37",
  "VDD_38": "38",
  "OSC1/CLKI": "39",
  "OSC2/CLK2": "40",
  "VSS_41": "41",
  "PGC/KBI2/RB6": "42",
  "KBI1/RB5": "43",
  "KBI0/RB4": "44",
  "VSSRX": "45",
  "TPIN-": "46",
  "TPIN+": "47",
  "VDDRX": "48",
  "VDDTX": "49",
  "TPOUT-": "50",
  "TPOUT+": "51",
  "VSSTX": "52",
  "RBIAS": "53",
  "VDDPLL": "54",
  "VSSPLL": "55",
  "VSS_56": "56",
  "VDD_57": "57",
  "RD2/CCP4/P3D": "58",
  "RD1/ECCP3/P3A": "59",
  "RD0/P1B": "60",
  "RE5/P1C": "61",
  "RE4/P3B": "62",
  "RE3/P3C": "63",
  "RE2/P2B": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE1/P2C": "bidirectional", "RE0/P2D": "bidirectional", "INT0/FLT0/RB0": "bidirectional", "INT1/RB1": "bidirectional", "INT2/RB2": "bidirectional", "INT3/RB3": "bidirectional", "~{MCLR}": "input", "RG4/CCP5/P1D": "bidirectional", VSS_9: "power_in", "VDDCORE/VCAP": "passive", "RF7/~{SS1}": "bidirectional", "RF6/AN11": "bidirectional", "RF5/AN10/CVref": "bidirectional", "RF4/AN9": "bidirectional", "RF3/AN8": "bidirectional", "RF2/AN7/C1OUT": "bidirectional", "RF1/AN6/C2OUT": "bidirectional", ENVREG: "passive", AVDD: "power_in", AVSS: "power_in", "Vref+/AN3/RA3": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "LEDB/AN1/RA1": "bidirectional", "LEDA/AN0/RA0": "bidirectional", VSS_25: "power_in", VDD_26: "power_in", "AN4/RA5": "bidirectional", "T0CKI/RA4": "bidirectional", "T1OSI/ECCP2/P2A/RC1": "bidirectional", "T13CKI/T1OSO/RC0": "bidirectional", "TX1/CK1/RC6": "bidirectional", "RX1/DT1/RC7": "bidirectional", "ECCP1/P1A/RC2": "bidirectional", "SCK1/SCL1/RC3": "bidirectional", "SDI1/SDA1/RC4": "bidirectional", "SDO1/RC5": "bidirectional", "PGD/KBI3/RB7": "bidirectional", VDD_38: "power_in", "OSC1/CLKI": "input", "OSC2/CLK2": "output", VSS_41: "power_in", "PGC/KBI2/RB6": "bidirectional", "KBI1/RB5": "bidirectional", "KBI0/RB4": "bidirectional", VSSRX: "power_in", "TPIN-": "passive", "TPIN+": "passive", VDDRX: "power_in", VDDTX: "power_in", "TPOUT-": "passive", "TPOUT+": "passive", VSSTX: "power_in", RBIAS: "passive", VDDPLL: "power_in", VSSPLL: "power_in", VSS_56: "power_in", VDD_57: "power_in", "RD2/CCP4/P3D": "bidirectional", "RD1/ECCP3/P3A": "bidirectional", "RD0/P1B": "bidirectional", "RE5/P1C": "bidirectional", "RE4/P3B": "bidirectional", "RE3/P3C": "bidirectional", "RE2/P2B": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F67J60-IPT";
  override referencePrefix = "U";
}

/**
 * PIC18F nanoWatt XLP Technology MCU, 64MHz, 128KB Flash, 4KB RAM, 1KB EEPROM, 1.8-5.5V, 69 GPIO, TQFP-80
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F87K22-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39960d.pdf
 * Keywords: Flash Based 8-Bit Microcontroller.
 * Default footprint: Package_QFP:TQFP-80_12x12mm_P0.5mm.
 */
export class PIC18F87K22_xPT extends Component.withPins({
  "RH2/AN21": "1",
  "RH3/AN20": "2",
  "RE1": "3",
  "RE0": "4",
  "RG0": "5",
  "RG1/AN19": "6",
  "RG2/AN18": "7",
  "RG3/AN17": "8",
  "RG5/~{MCLR}": "9",
  "RG4/AN16": "10",
  "VSS_11": "11",
  "VDDCORE/VCAP": "12",
  "RF7/AN5": "13",
  "RF6/AN11": "14",
  "RF5/AN10": "15",
  "RF4/AN9": "16",
  "RF3/AN8": "17",
  "RF2/AN7": "18",
  "RH7/AN15": "19",
  "RH6/AN14": "20",
  "RH5/AN13": "21",
  "RH4/AN12": "22",
  "RF1/AN6": "23",
  "ENVREG": "24",
  "AVDD": "25",
  "AVSS": "26",
  "RA3/AN3/Vref+": "27",
  "RA2/AN2/Vref-": "28",
  "RA1/AN1": "29",
  "RA0/AN0": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RA5/AN4": "33",
  "RA4": "34",
  "RC1": "35",
  "RC0": "36",
  "RC6": "37",
  "RC7": "38",
  "RJ4": "39",
  "RJ5": "40",
  "RJ6": "41",
  "RJ7": "42",
  "RC2": "43",
  "RC3": "44",
  "RC4": "45",
  "RC5": "46",
  "RB7": "47",
  "VDD_48": "48",
  "RA7/OSC1": "49",
  "RA6/OSC2": "50",
  "VSS_51": "51",
  "RB6": "52",
  "RB5": "53",
  "RB4": "54",
  "RB3": "55",
  "RB2": "56",
  "RB1": "57",
  "RB0": "58",
  "RJ3": "59",
  "RJ2": "60",
  "RJ1": "61",
  "RJ0": "62",
  "RD7": "63",
  "RD6": "64",
  "RD5": "65",
  "RD4": "66",
  "RD3": "67",
  "RD2": "68",
  "RD1": "69",
  "VSS_70": "70",
  "VDD_71": "71",
  "RD0": "72",
  "RE7": "73",
  "RE6": "74",
  "RE5": "75",
  "RE4": "76",
  "RE3": "77",
  "RE2": "78",
  "RH0/AN23": "79",
  "RH1/AN22": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RH2/AN21": "bidirectional", "RH3/AN20": "bidirectional", RE1: "bidirectional", RE0: "bidirectional", RG0: "bidirectional", "RG1/AN19": "bidirectional", "RG2/AN18": "bidirectional", "RG3/AN17": "bidirectional", "RG5/~{MCLR}": "bidirectional", "RG4/AN16": "bidirectional", VSS_11: "power_in", "VDDCORE/VCAP": "passive", "RF7/AN5": "bidirectional", "RF6/AN11": "bidirectional", "RF5/AN10": "bidirectional", "RF4/AN9": "bidirectional", "RF3/AN8": "bidirectional", "RF2/AN7": "bidirectional", "RH7/AN15": "bidirectional", "RH6/AN14": "bidirectional", "RH5/AN13": "bidirectional", "RH4/AN12": "bidirectional", "RF1/AN6": "bidirectional", ENVREG: "input", AVDD: "power_in", AVSS: "power_in", "RA3/AN3/Vref+": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA1/AN1": "bidirectional", "RA0/AN0": "bidirectional", VSS_31: "passive", VDD_32: "power_in", "RA5/AN4": "bidirectional", RA4: "bidirectional", RC1: "bidirectional", RC0: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RJ4: "bidirectional", RJ5: "bidirectional", RJ6: "bidirectional", RJ7: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RB7: "bidirectional", VDD_48: "power_in", "RA7/OSC1": "bidirectional", "RA6/OSC2": "bidirectional", VSS_51: "passive", RB6: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RB3: "bidirectional", RB2: "bidirectional", RB1: "bidirectional", RB0: "bidirectional", RJ3: "bidirectional", RJ2: "bidirectional", RJ1: "bidirectional", RJ0: "bidirectional", RD7: "bidirectional", RD6: "bidirectional", RD5: "bidirectional", RD4: "bidirectional", RD3: "bidirectional", RD2: "bidirectional", RD1: "bidirectional", VSS_70: "passive", VDD_71: "power_in", RD0: "bidirectional", RE7: "bidirectional", RE6: "bidirectional", RE5: "bidirectional", RE4: "bidirectional", RE3: "bidirectional", RE2: "bidirectional", "RH0/AN23": "bidirectional", "RH1/AN22": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F87K22-xPT";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3.7K SRAM, Ethernet Controller with PHY, 8K Buffer, TQFP100
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F96J60-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*, TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39762f.pdf
 * Keywords: Flash Based 8-Bit Microcontroller Ethernet Controller PHY.
 * Default footprint: Package_QFP:TQFP-100_12x12mm_P0.4mm.
 */
export class PIC18F96J60_IPT extends Component.withPins({
  "RH2/A18": "1",
  "RH3/A19": "2",
  "~{WR}/AD9/P2C/RE1": "3",
  "~{RD}/AD8/P2D/RE0": "4",
  "INT0/FLT0/RB0": "5",
  "INT1/RB1": "6",
  "INT2/RB2": "7",
  "INT3/ECCP2/P2A/RB3": "8",
  "NC": "9",
  "RG6": "10",
  "RG5": "11",
  "RF0/AN5": "12",
  "~{MCLR}": "13",
  "RG4/CCP5/P1D": "14",
  "VSS_15": "15",
  "VDDCORE/VCAP": "16",
  "VDD_17": "17",
  "RF7/~{SS1}": "18",
  "RF6/AN11": "19",
  "RF5/AN10/CVref": "20",
  "RF4/AN9": "21",
  "RF3/AN8": "22",
  "RF2/AN7/C1OUT": "23",
  "RH7/AN15/P1B": "24",
  "RH6/AN14/P1C": "25",
  "RH5/AN13/P3B": "26",
  "RH4/AN12/P3C": "27",
  "RF1/AN6/C2OUT": "28",
  "ENVREG": "29",
  "AVDD": "30",
  "AVSS": "31",
  "Vref+/AN3/RA3": "32",
  "Vref-/AN2/RA2": "33",
  "LEDB/AN1/RA1": "34",
  "LEDA/AN0/RA0": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "RG7": "38",
  "RJ7/~{UB}": "39",
  "VSS_40": "40",
  "AN4/RA5": "41",
  "TOCKI/RA4": "42",
  "T1OSI/ECCP2/P2A/RC1": "43",
  "T13CKI/T1OSO/RC0": "44",
  "TX1/CK1/RC6": "45",
  "RX1/DT1/RC7": "46",
  "RJ4/BA0": "47",
  "RJ5/~{CE}": "48",
  "RJ0/ALE": "49",
  "RJ1/~{OE}": "50",
  "RG3/CCP4/P3D": "51",
  "RG2/RX2/DT2": "52",
  "ECCP1/P1A/RC2": "53",
  "SCK1/SCL1/RC3": "54",
  "SDI1/SDA1/RC4": "55",
  "SDO1/RC5": "56",
  "PGD/KBI3/RB7": "57",
  "RJ6/~{LB}": "58",
  "VDD_59": "59",
  "VSS_60": "60",
  "RJ3/~{WRH}": "61",
  "VDD_62": "62",
  "OSC1/CLKI": "63",
  "OSC2/CLK0": "64",
  "VSS_65": "65",
  "RJ2/~{WRL}": "66",
  "PGC/KBI2/RB6": "67",
  "KBI1/RB5": "68",
  "KBI0/RB4": "69",
  "RG1/TX2/CK2": "70",
  "RG0/ECCP3/P3A": "71",
  "VSSRX": "72",
  "TPIN-": "73",
  "TPIN+": "74",
  "VDDRX": "75",
  "VDDTX": "76",
  "TPOUT-": "77",
  "TP0UT+": "78",
  "VSSTX": "79",
  "RBIAS": "80",
  "VDDPLL": "81",
  "VSSPLL": "82",
  "AD7/PSP7/~{SS2}/RD7": "83",
  "AD6/PSP6/SCK2/SCL2/RD6": "84",
  "VSS_85": "85",
  "VDD_86": "86",
  "AD5/PSP5/SDI2/SDA2/RD5": "87",
  "SD02/AD4/PSP4/RD4": "88",
  "AD3/PSP3/RD3": "89",
  "AD2/PSP2/RD2": "90",
  "AD1/PSP1/RD1": "91",
  "AD0/PSP0/RD0": "92",
  "ECCP2/AD15/P2A/RE7": "93",
  "AD14/P1B/RE6": "94",
  "AD13/P1C/RE5": "95",
  "AD12/P3B/RE4": "96",
  "AD11/P3C/RE3": "97",
  "~{CS}/AD10/P2B/RE2": "98",
  "RH0/A16": "99",
  "RH1/A17": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RH2/A18": "bidirectional", "RH3/A19": "bidirectional", "~{WR}/AD9/P2C/RE1": "bidirectional", "~{RD}/AD8/P2D/RE0": "bidirectional", "INT0/FLT0/RB0": "bidirectional", "INT1/RB1": "bidirectional", "INT2/RB2": "bidirectional", "INT3/ECCP2/P2A/RB3": "bidirectional", NC: "no_connect", RG6: "bidirectional", RG5: "bidirectional", "RF0/AN5": "bidirectional", "~{MCLR}": "input", "RG4/CCP5/P1D": "bidirectional", VSS_15: "power_in", "VDDCORE/VCAP": "passive", VDD_17: "power_in", "RF7/~{SS1}": "bidirectional", "RF6/AN11": "bidirectional", "RF5/AN10/CVref": "bidirectional", "RF4/AN9": "bidirectional", "RF3/AN8": "bidirectional", "RF2/AN7/C1OUT": "bidirectional", "RH7/AN15/P1B": "bidirectional", "RH6/AN14/P1C": "bidirectional", "RH5/AN13/P3B": "bidirectional", "RH4/AN12/P3C": "bidirectional", "RF1/AN6/C2OUT": "bidirectional", ENVREG: "passive", AVDD: "power_in", AVSS: "power_in", "Vref+/AN3/RA3": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "LEDB/AN1/RA1": "bidirectional", "LEDA/AN0/RA0": "bidirectional", VSS_36: "power_in", VDD_37: "power_in", RG7: "bidirectional", "RJ7/~{UB}": "bidirectional", VSS_40: "power_in", "AN4/RA5": "bidirectional", "TOCKI/RA4": "bidirectional", "T1OSI/ECCP2/P2A/RC1": "bidirectional", "T13CKI/T1OSO/RC0": "bidirectional", "TX1/CK1/RC6": "bidirectional", "RX1/DT1/RC7": "bidirectional", "RJ4/BA0": "bidirectional", "RJ5/~{CE}": "bidirectional", "RJ0/ALE": "bidirectional", "RJ1/~{OE}": "bidirectional", "RG3/CCP4/P3D": "bidirectional", "RG2/RX2/DT2": "bidirectional", "ECCP1/P1A/RC2": "bidirectional", "SCK1/SCL1/RC3": "bidirectional", "SDI1/SDA1/RC4": "bidirectional", "SDO1/RC5": "bidirectional", "PGD/KBI3/RB7": "bidirectional", "RJ6/~{LB}": "bidirectional", VDD_59: "power_in", VSS_60: "power_in", "RJ3/~{WRH}": "bidirectional", VDD_62: "power_in", "OSC1/CLKI": "input", "OSC2/CLK0": "output", VSS_65: "power_in", "RJ2/~{WRL}": "bidirectional", "PGC/KBI2/RB6": "bidirectional", "KBI1/RB5": "bidirectional", "KBI0/RB4": "bidirectional", "RG1/TX2/CK2": "bidirectional", "RG0/ECCP3/P3A": "bidirectional", VSSRX: "power_in", "TPIN-": "passive", "TPIN+": "passive", VDDRX: "power_in", VDDTX: "power_in", "TPOUT-": "passive", "TP0UT+": "passive", VSSTX: "power_in", RBIAS: "passive", VDDPLL: "power_in", VSSPLL: "power_in", "AD7/PSP7/~{SS2}/RD7": "bidirectional", "AD6/PSP6/SCK2/SCL2/RD6": "bidirectional", VSS_85: "power_in", VDD_86: "power_in", "AD5/PSP5/SDI2/SDA2/RD5": "bidirectional", "SD02/AD4/PSP4/RD4": "bidirectional", "AD3/PSP3/RD3": "bidirectional", "AD2/PSP2/RD2": "bidirectional", "AD1/PSP1/RD1": "bidirectional", "AD0/PSP0/RD0": "bidirectional", "ECCP2/AD15/P2A/RE7": "bidirectional", "AD14/P1B/RE6": "bidirectional", "AD13/P1C/RE5": "bidirectional", "AD12/P3B/RE4": "bidirectional", "AD11/P3C/RE3": "bidirectional", "~{CS}/AD10/P2B/RE2": "bidirectional", "RH0/A16": "bidirectional", "RH1/A17": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F96J60-IPT";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3.7K SRAM, Ethernet Controller with PHY, 8K Buffer, TQFP100 (14x14mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F96J60-IPF`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*, TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39762f.pdf
 * Keywords: Flash Based 8-Bit Microcontroller Ethernet Controller PHY.
 * Default footprint: Package_QFP:TQFP-100_12x12mm_P0.4mm.
 */
export class PIC18F96J60_IPF extends Component.withPins({
  "RH2/A18": "1",
  "RH3/A19": "2",
  "~{WR}/AD9/P2C/RE1": "3",
  "~{RD}/AD8/P2D/RE0": "4",
  "INT0/FLT0/RB0": "5",
  "INT1/RB1": "6",
  "INT2/RB2": "7",
  "INT3/ECCP2/P2A/RB3": "8",
  "NC": "9",
  "RG6": "10",
  "RG5": "11",
  "RF0/AN5": "12",
  "~{MCLR}": "13",
  "RG4/CCP5/P1D": "14",
  "VSS_15": "15",
  "VDDCORE/VCAP": "16",
  "VDD_17": "17",
  "RF7/~{SS1}": "18",
  "RF6/AN11": "19",
  "RF5/AN10/CVref": "20",
  "RF4/AN9": "21",
  "RF3/AN8": "22",
  "RF2/AN7/C1OUT": "23",
  "RH7/AN15/P1B": "24",
  "RH6/AN14/P1C": "25",
  "RH5/AN13/P3B": "26",
  "RH4/AN12/P3C": "27",
  "RF1/AN6/C2OUT": "28",
  "ENVREG": "29",
  "AVDD": "30",
  "AVSS": "31",
  "Vref+/AN3/RA3": "32",
  "Vref-/AN2/RA2": "33",
  "LEDB/AN1/RA1": "34",
  "LEDA/AN0/RA0": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "RG7": "38",
  "RJ7/~{UB}": "39",
  "VSS_40": "40",
  "AN4/RA5": "41",
  "TOCKI/RA4": "42",
  "T1OSI/ECCP2/P2A/RC1": "43",
  "T13CKI/T1OSO/RC0": "44",
  "TX1/CK1/RC6": "45",
  "RX1/DT1/RC7": "46",
  "RJ4/BA0": "47",
  "RJ5/~{CE}": "48",
  "RJ0/ALE": "49",
  "RJ1/~{OE}": "50",
  "RG3/CCP4/P3D": "51",
  "RG2/RX2/DT2": "52",
  "ECCP1/P1A/RC2": "53",
  "SCK1/SCL1/RC3": "54",
  "SDI1/SDA1/RC4": "55",
  "SDO1/RC5": "56",
  "PGD/KBI3/RB7": "57",
  "RJ6/~{LB}": "58",
  "VDD_59": "59",
  "VSS_60": "60",
  "RJ3/~{WRH}": "61",
  "VDD_62": "62",
  "OSC1/CLKI": "63",
  "OSC2/CLK0": "64",
  "VSS_65": "65",
  "RJ2/~{WRL}": "66",
  "PGC/KBI2/RB6": "67",
  "KBI1/RB5": "68",
  "KBI0/RB4": "69",
  "RG1/TX2/CK2": "70",
  "RG0/ECCP3/P3A": "71",
  "VSSRX": "72",
  "TPIN-": "73",
  "TPIN+": "74",
  "VDDRX": "75",
  "VDDTX": "76",
  "TPOUT-": "77",
  "TP0UT+": "78",
  "VSSTX": "79",
  "RBIAS": "80",
  "VDDPLL": "81",
  "VSSPLL": "82",
  "AD7/PSP7/~{SS2}/RD7": "83",
  "AD6/PSP6/SCK2/SCL2/RD6": "84",
  "VSS_85": "85",
  "VDD_86": "86",
  "AD5/PSP5/SDI2/SDA2/RD5": "87",
  "SD02/AD4/PSP4/RD4": "88",
  "AD3/PSP3/RD3": "89",
  "AD2/PSP2/RD2": "90",
  "AD1/PSP1/RD1": "91",
  "AD0/PSP0/RD0": "92",
  "ECCP2/AD15/P2A/RE7": "93",
  "AD14/P1B/RE6": "94",
  "AD13/P1C/RE5": "95",
  "AD12/P3B/RE4": "96",
  "AD11/P3C/RE3": "97",
  "~{CS}/AD10/P2B/RE2": "98",
  "RH0/A16": "99",
  "RH1/A17": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RH2/A18": "bidirectional", "RH3/A19": "bidirectional", "~{WR}/AD9/P2C/RE1": "bidirectional", "~{RD}/AD8/P2D/RE0": "bidirectional", "INT0/FLT0/RB0": "bidirectional", "INT1/RB1": "bidirectional", "INT2/RB2": "bidirectional", "INT3/ECCP2/P2A/RB3": "bidirectional", NC: "no_connect", RG6: "bidirectional", RG5: "bidirectional", "RF0/AN5": "bidirectional", "~{MCLR}": "input", "RG4/CCP5/P1D": "bidirectional", VSS_15: "power_in", "VDDCORE/VCAP": "passive", VDD_17: "power_in", "RF7/~{SS1}": "bidirectional", "RF6/AN11": "bidirectional", "RF5/AN10/CVref": "bidirectional", "RF4/AN9": "bidirectional", "RF3/AN8": "bidirectional", "RF2/AN7/C1OUT": "bidirectional", "RH7/AN15/P1B": "bidirectional", "RH6/AN14/P1C": "bidirectional", "RH5/AN13/P3B": "bidirectional", "RH4/AN12/P3C": "bidirectional", "RF1/AN6/C2OUT": "bidirectional", ENVREG: "passive", AVDD: "power_in", AVSS: "power_in", "Vref+/AN3/RA3": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "LEDB/AN1/RA1": "bidirectional", "LEDA/AN0/RA0": "bidirectional", VSS_36: "power_in", VDD_37: "power_in", RG7: "bidirectional", "RJ7/~{UB}": "bidirectional", VSS_40: "power_in", "AN4/RA5": "bidirectional", "TOCKI/RA4": "bidirectional", "T1OSI/ECCP2/P2A/RC1": "bidirectional", "T13CKI/T1OSO/RC0": "bidirectional", "TX1/CK1/RC6": "bidirectional", "RX1/DT1/RC7": "bidirectional", "RJ4/BA0": "bidirectional", "RJ5/~{CE}": "bidirectional", "RJ0/ALE": "bidirectional", "RJ1/~{OE}": "bidirectional", "RG3/CCP4/P3D": "bidirectional", "RG2/RX2/DT2": "bidirectional", "ECCP1/P1A/RC2": "bidirectional", "SCK1/SCL1/RC3": "bidirectional", "SDI1/SDA1/RC4": "bidirectional", "SDO1/RC5": "bidirectional", "PGD/KBI3/RB7": "bidirectional", "RJ6/~{LB}": "bidirectional", VDD_59: "power_in", VSS_60: "power_in", "RJ3/~{WRH}": "bidirectional", VDD_62: "power_in", "OSC1/CLKI": "input", "OSC2/CLK0": "output", VSS_65: "power_in", "RJ2/~{WRL}": "bidirectional", "PGC/KBI2/RB6": "bidirectional", "KBI1/RB5": "bidirectional", "KBI0/RB4": "bidirectional", "RG1/TX2/CK2": "bidirectional", "RG0/ECCP3/P3A": "bidirectional", VSSRX: "power_in", "TPIN-": "passive", "TPIN+": "passive", VDDRX: "power_in", VDDTX: "power_in", "TPOUT-": "passive", "TP0UT+": "passive", VSSTX: "power_in", RBIAS: "passive", VDDPLL: "power_in", VSSPLL: "power_in", "AD7/PSP7/~{SS2}/RD7": "bidirectional", "AD6/PSP6/SCK2/SCL2/RD6": "bidirectional", VSS_85: "power_in", VDD_86: "power_in", "AD5/PSP5/SDI2/SDA2/RD5": "bidirectional", "SD02/AD4/PSP4/RD4": "bidirectional", "AD3/PSP3/RD3": "bidirectional", "AD2/PSP2/RD2": "bidirectional", "AD1/PSP1/RD1": "bidirectional", "AD0/PSP0/RD0": "bidirectional", "ECCP2/AD15/P2A/RE7": "bidirectional", "AD14/P1B/RE6": "bidirectional", "AD13/P1C/RE5": "bidirectional", "AD12/P3B/RE4": "bidirectional", "AD11/P3C/RE3": "bidirectional", "~{CS}/AD10/P2B/RE2": "bidirectional", "RH0/A16": "bidirectional", "RH1/A17": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F96J60-IPF";
  override referencePrefix = "U";
}

/**
 * 96K Flash, 3.7K SRAM, Ethernet Controller with PHY, 8K Buffer, TQFP100 (14x14mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F96J65-IPF`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*, TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39762f.pdf
 * Keywords: Flash Based 8-Bit Microcontroller Ethernet Controller PHY.
 * Default footprint: Package_QFP:TQFP-100_12x12mm_P0.4mm.
 */
export class PIC18F96J65_IPF extends Component.withPins({
  "RH2/A18": "1",
  "RH3/A19": "2",
  "~{WR}/AD9/P2C/RE1": "3",
  "~{RD}/AD8/P2D/RE0": "4",
  "INT0/FLT0/RB0": "5",
  "INT1/RB1": "6",
  "INT2/RB2": "7",
  "INT3/ECCP2/P2A/RB3": "8",
  "NC": "9",
  "RG6": "10",
  "RG5": "11",
  "RF0/AN5": "12",
  "~{MCLR}": "13",
  "RG4/CCP5/P1D": "14",
  "VSS_15": "15",
  "VDDCORE/VCAP": "16",
  "VDD_17": "17",
  "RF7/~{SS1}": "18",
  "RF6/AN11": "19",
  "RF5/AN10/CVref": "20",
  "RF4/AN9": "21",
  "RF3/AN8": "22",
  "RF2/AN7/C1OUT": "23",
  "RH7/AN15/P1B": "24",
  "RH6/AN14/P1C": "25",
  "RH5/AN13/P3B": "26",
  "RH4/AN12/P3C": "27",
  "RF1/AN6/C2OUT": "28",
  "ENVREG": "29",
  "AVDD": "30",
  "AVSS": "31",
  "Vref+/AN3/RA3": "32",
  "Vref-/AN2/RA2": "33",
  "LEDB/AN1/RA1": "34",
  "LEDA/AN0/RA0": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "RG7": "38",
  "RJ7/~{UB}": "39",
  "VSS_40": "40",
  "AN4/RA5": "41",
  "TOCKI/RA4": "42",
  "T1OSI/ECCP2/P2A/RC1": "43",
  "T13CKI/T1OSO/RC0": "44",
  "TX1/CK1/RC6": "45",
  "RX1/DT1/RC7": "46",
  "RJ4/BA0": "47",
  "RJ5/~{CE}": "48",
  "RJ0/ALE": "49",
  "RJ1/~{OE}": "50",
  "RG3/CCP4/P3D": "51",
  "RG2/RX2/DT2": "52",
  "ECCP1/P1A/RC2": "53",
  "SCK1/SCL1/RC3": "54",
  "SDI1/SDA1/RC4": "55",
  "SDO1/RC5": "56",
  "PGD/KBI3/RB7": "57",
  "RJ6/~{LB}": "58",
  "VDD_59": "59",
  "VSS_60": "60",
  "RJ3/~{WRH}": "61",
  "VDD_62": "62",
  "OSC1/CLKI": "63",
  "OSC2/CLK0": "64",
  "VSS_65": "65",
  "RJ2/~{WRL}": "66",
  "PGC/KBI2/RB6": "67",
  "KBI1/RB5": "68",
  "KBI0/RB4": "69",
  "RG1/TX2/CK2": "70",
  "RG0/ECCP3/P3A": "71",
  "VSSRX": "72",
  "TPIN-": "73",
  "TPIN+": "74",
  "VDDRX": "75",
  "VDDTX": "76",
  "TPOUT-": "77",
  "TP0UT+": "78",
  "VSSTX": "79",
  "RBIAS": "80",
  "VDDPLL": "81",
  "VSSPLL": "82",
  "AD7/PSP7/~{SS2}/RD7": "83",
  "AD6/PSP6/SCK2/SCL2/RD6": "84",
  "VSS_85": "85",
  "VDD_86": "86",
  "AD5/PSP5/SDI2/SDA2/RD5": "87",
  "SD02/AD4/PSP4/RD4": "88",
  "AD3/PSP3/RD3": "89",
  "AD2/PSP2/RD2": "90",
  "AD1/PSP1/RD1": "91",
  "AD0/PSP0/RD0": "92",
  "ECCP2/AD15/P2A/RE7": "93",
  "AD14/P1B/RE6": "94",
  "AD13/P1C/RE5": "95",
  "AD12/P3B/RE4": "96",
  "AD11/P3C/RE3": "97",
  "~{CS}/AD10/P2B/RE2": "98",
  "RH0/A16": "99",
  "RH1/A17": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RH2/A18": "bidirectional", "RH3/A19": "bidirectional", "~{WR}/AD9/P2C/RE1": "bidirectional", "~{RD}/AD8/P2D/RE0": "bidirectional", "INT0/FLT0/RB0": "bidirectional", "INT1/RB1": "bidirectional", "INT2/RB2": "bidirectional", "INT3/ECCP2/P2A/RB3": "bidirectional", NC: "no_connect", RG6: "bidirectional", RG5: "bidirectional", "RF0/AN5": "bidirectional", "~{MCLR}": "input", "RG4/CCP5/P1D": "bidirectional", VSS_15: "power_in", "VDDCORE/VCAP": "passive", VDD_17: "power_in", "RF7/~{SS1}": "bidirectional", "RF6/AN11": "bidirectional", "RF5/AN10/CVref": "bidirectional", "RF4/AN9": "bidirectional", "RF3/AN8": "bidirectional", "RF2/AN7/C1OUT": "bidirectional", "RH7/AN15/P1B": "bidirectional", "RH6/AN14/P1C": "bidirectional", "RH5/AN13/P3B": "bidirectional", "RH4/AN12/P3C": "bidirectional", "RF1/AN6/C2OUT": "bidirectional", ENVREG: "passive", AVDD: "power_in", AVSS: "power_in", "Vref+/AN3/RA3": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "LEDB/AN1/RA1": "bidirectional", "LEDA/AN0/RA0": "bidirectional", VSS_36: "power_in", VDD_37: "power_in", RG7: "bidirectional", "RJ7/~{UB}": "bidirectional", VSS_40: "power_in", "AN4/RA5": "bidirectional", "TOCKI/RA4": "bidirectional", "T1OSI/ECCP2/P2A/RC1": "bidirectional", "T13CKI/T1OSO/RC0": "bidirectional", "TX1/CK1/RC6": "bidirectional", "RX1/DT1/RC7": "bidirectional", "RJ4/BA0": "bidirectional", "RJ5/~{CE}": "bidirectional", "RJ0/ALE": "bidirectional", "RJ1/~{OE}": "bidirectional", "RG3/CCP4/P3D": "bidirectional", "RG2/RX2/DT2": "bidirectional", "ECCP1/P1A/RC2": "bidirectional", "SCK1/SCL1/RC3": "bidirectional", "SDI1/SDA1/RC4": "bidirectional", "SDO1/RC5": "bidirectional", "PGD/KBI3/RB7": "bidirectional", "RJ6/~{LB}": "bidirectional", VDD_59: "power_in", VSS_60: "power_in", "RJ3/~{WRH}": "bidirectional", VDD_62: "power_in", "OSC1/CLKI": "input", "OSC2/CLK0": "output", VSS_65: "power_in", "RJ2/~{WRL}": "bidirectional", "PGC/KBI2/RB6": "bidirectional", "KBI1/RB5": "bidirectional", "KBI0/RB4": "bidirectional", "RG1/TX2/CK2": "bidirectional", "RG0/ECCP3/P3A": "bidirectional", VSSRX: "power_in", "TPIN-": "passive", "TPIN+": "passive", VDDRX: "power_in", VDDTX: "power_in", "TPOUT-": "passive", "TP0UT+": "passive", VSSTX: "power_in", RBIAS: "passive", VDDPLL: "power_in", VSSPLL: "power_in", "AD7/PSP7/~{SS2}/RD7": "bidirectional", "AD6/PSP6/SCK2/SCL2/RD6": "bidirectional", VSS_85: "power_in", VDD_86: "power_in", "AD5/PSP5/SDI2/SDA2/RD5": "bidirectional", "SD02/AD4/PSP4/RD4": "bidirectional", "AD3/PSP3/RD3": "bidirectional", "AD2/PSP2/RD2": "bidirectional", "AD1/PSP1/RD1": "bidirectional", "AD0/PSP0/RD0": "bidirectional", "ECCP2/AD15/P2A/RE7": "bidirectional", "AD14/P1B/RE6": "bidirectional", "AD13/P1C/RE5": "bidirectional", "AD12/P3B/RE4": "bidirectional", "AD11/P3C/RE3": "bidirectional", "~{CS}/AD10/P2B/RE2": "bidirectional", "RH0/A16": "bidirectional", "RH1/A17": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F96J65-IPF";
  override referencePrefix = "U";
}

/**
 * 96K Flash, 3.7K SRAM, Ethernet Controller with PHY, 8K Buffer, TQFP100
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F96J65-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*, TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39762f.pdf
 * Keywords: Flash Based 8-Bit Microcontroller Ethernet Controller PHY.
 * Default footprint: Package_QFP:TQFP-100_12x12mm_P0.4mm.
 */
export class PIC18F96J65_IPT extends Component.withPins({
  "RH2/A18": "1",
  "RH3/A19": "2",
  "~{WR}/AD9/P2C/RE1": "3",
  "~{RD}/AD8/P2D/RE0": "4",
  "INT0/FLT0/RB0": "5",
  "INT1/RB1": "6",
  "INT2/RB2": "7",
  "INT3/ECCP2/P2A/RB3": "8",
  "NC": "9",
  "RG6": "10",
  "RG5": "11",
  "RF0/AN5": "12",
  "~{MCLR}": "13",
  "RG4/CCP5/P1D": "14",
  "VSS_15": "15",
  "VDDCORE/VCAP": "16",
  "VDD_17": "17",
  "RF7/~{SS1}": "18",
  "RF6/AN11": "19",
  "RF5/AN10/CVref": "20",
  "RF4/AN9": "21",
  "RF3/AN8": "22",
  "RF2/AN7/C1OUT": "23",
  "RH7/AN15/P1B": "24",
  "RH6/AN14/P1C": "25",
  "RH5/AN13/P3B": "26",
  "RH4/AN12/P3C": "27",
  "RF1/AN6/C2OUT": "28",
  "ENVREG": "29",
  "AVDD": "30",
  "AVSS": "31",
  "Vref+/AN3/RA3": "32",
  "Vref-/AN2/RA2": "33",
  "LEDB/AN1/RA1": "34",
  "LEDA/AN0/RA0": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "RG7": "38",
  "RJ7/~{UB}": "39",
  "VSS_40": "40",
  "AN4/RA5": "41",
  "TOCKI/RA4": "42",
  "T1OSI/ECCP2/P2A/RC1": "43",
  "T13CKI/T1OSO/RC0": "44",
  "TX1/CK1/RC6": "45",
  "RX1/DT1/RC7": "46",
  "RJ4/BA0": "47",
  "RJ5/~{CE}": "48",
  "RJ0/ALE": "49",
  "RJ1/~{OE}": "50",
  "RG3/CCP4/P3D": "51",
  "RG2/RX2/DT2": "52",
  "ECCP1/P1A/RC2": "53",
  "SCK1/SCL1/RC3": "54",
  "SDI1/SDA1/RC4": "55",
  "SDO1/RC5": "56",
  "PGD/KBI3/RB7": "57",
  "RJ6/~{LB}": "58",
  "VDD_59": "59",
  "VSS_60": "60",
  "RJ3/~{WRH}": "61",
  "VDD_62": "62",
  "OSC1/CLKI": "63",
  "OSC2/CLK0": "64",
  "VSS_65": "65",
  "RJ2/~{WRL}": "66",
  "PGC/KBI2/RB6": "67",
  "KBI1/RB5": "68",
  "KBI0/RB4": "69",
  "RG1/TX2/CK2": "70",
  "RG0/ECCP3/P3A": "71",
  "VSSRX": "72",
  "TPIN-": "73",
  "TPIN+": "74",
  "VDDRX": "75",
  "VDDTX": "76",
  "TPOUT-": "77",
  "TP0UT+": "78",
  "VSSTX": "79",
  "RBIAS": "80",
  "VDDPLL": "81",
  "VSSPLL": "82",
  "AD7/PSP7/~{SS2}/RD7": "83",
  "AD6/PSP6/SCK2/SCL2/RD6": "84",
  "VSS_85": "85",
  "VDD_86": "86",
  "AD5/PSP5/SDI2/SDA2/RD5": "87",
  "SD02/AD4/PSP4/RD4": "88",
  "AD3/PSP3/RD3": "89",
  "AD2/PSP2/RD2": "90",
  "AD1/PSP1/RD1": "91",
  "AD0/PSP0/RD0": "92",
  "ECCP2/AD15/P2A/RE7": "93",
  "AD14/P1B/RE6": "94",
  "AD13/P1C/RE5": "95",
  "AD12/P3B/RE4": "96",
  "AD11/P3C/RE3": "97",
  "~{CS}/AD10/P2B/RE2": "98",
  "RH0/A16": "99",
  "RH1/A17": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RH2/A18": "bidirectional", "RH3/A19": "bidirectional", "~{WR}/AD9/P2C/RE1": "bidirectional", "~{RD}/AD8/P2D/RE0": "bidirectional", "INT0/FLT0/RB0": "bidirectional", "INT1/RB1": "bidirectional", "INT2/RB2": "bidirectional", "INT3/ECCP2/P2A/RB3": "bidirectional", NC: "no_connect", RG6: "bidirectional", RG5: "bidirectional", "RF0/AN5": "bidirectional", "~{MCLR}": "input", "RG4/CCP5/P1D": "bidirectional", VSS_15: "power_in", "VDDCORE/VCAP": "passive", VDD_17: "power_in", "RF7/~{SS1}": "bidirectional", "RF6/AN11": "bidirectional", "RF5/AN10/CVref": "bidirectional", "RF4/AN9": "bidirectional", "RF3/AN8": "bidirectional", "RF2/AN7/C1OUT": "bidirectional", "RH7/AN15/P1B": "bidirectional", "RH6/AN14/P1C": "bidirectional", "RH5/AN13/P3B": "bidirectional", "RH4/AN12/P3C": "bidirectional", "RF1/AN6/C2OUT": "bidirectional", ENVREG: "passive", AVDD: "power_in", AVSS: "power_in", "Vref+/AN3/RA3": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "LEDB/AN1/RA1": "bidirectional", "LEDA/AN0/RA0": "bidirectional", VSS_36: "power_in", VDD_37: "power_in", RG7: "bidirectional", "RJ7/~{UB}": "bidirectional", VSS_40: "power_in", "AN4/RA5": "bidirectional", "TOCKI/RA4": "bidirectional", "T1OSI/ECCP2/P2A/RC1": "bidirectional", "T13CKI/T1OSO/RC0": "bidirectional", "TX1/CK1/RC6": "bidirectional", "RX1/DT1/RC7": "bidirectional", "RJ4/BA0": "bidirectional", "RJ5/~{CE}": "bidirectional", "RJ0/ALE": "bidirectional", "RJ1/~{OE}": "bidirectional", "RG3/CCP4/P3D": "bidirectional", "RG2/RX2/DT2": "bidirectional", "ECCP1/P1A/RC2": "bidirectional", "SCK1/SCL1/RC3": "bidirectional", "SDI1/SDA1/RC4": "bidirectional", "SDO1/RC5": "bidirectional", "PGD/KBI3/RB7": "bidirectional", "RJ6/~{LB}": "bidirectional", VDD_59: "power_in", VSS_60: "power_in", "RJ3/~{WRH}": "bidirectional", VDD_62: "power_in", "OSC1/CLKI": "input", "OSC2/CLK0": "output", VSS_65: "power_in", "RJ2/~{WRL}": "bidirectional", "PGC/KBI2/RB6": "bidirectional", "KBI1/RB5": "bidirectional", "KBI0/RB4": "bidirectional", "RG1/TX2/CK2": "bidirectional", "RG0/ECCP3/P3A": "bidirectional", VSSRX: "power_in", "TPIN-": "passive", "TPIN+": "passive", VDDRX: "power_in", VDDTX: "power_in", "TPOUT-": "passive", "TP0UT+": "passive", VSSTX: "power_in", RBIAS: "passive", VDDPLL: "power_in", VSSPLL: "power_in", "AD7/PSP7/~{SS2}/RD7": "bidirectional", "AD6/PSP6/SCK2/SCL2/RD6": "bidirectional", VSS_85: "power_in", VDD_86: "power_in", "AD5/PSP5/SDI2/SDA2/RD5": "bidirectional", "SD02/AD4/PSP4/RD4": "bidirectional", "AD3/PSP3/RD3": "bidirectional", "AD2/PSP2/RD2": "bidirectional", "AD1/PSP1/RD1": "bidirectional", "AD0/PSP0/RD0": "bidirectional", "ECCP2/AD15/P2A/RE7": "bidirectional", "AD14/P1B/RE6": "bidirectional", "AD13/P1C/RE5": "bidirectional", "AD12/P3B/RE4": "bidirectional", "AD11/P3C/RE3": "bidirectional", "~{CS}/AD10/P2B/RE2": "bidirectional", "RH0/A16": "bidirectional", "RH1/A17": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F96J65-IPT";
  override referencePrefix = "U";
}

/**
 * 128K Flash, 3.7K SRAM, Ethernet Controller with PHY, 8K Buffer, TQFP100 (14x14mm)
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F97J60-IPF`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*, TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39762f.pdf
 * Keywords: Flash Based 8-Bit Microcontroller Ethernet Controller PHY.
 * Default footprint: Package_QFP:TQFP-100_12x12mm_P0.4mm.
 */
export class PIC18F97J60_IPF extends Component.withPins({
  "RH2/A18": "1",
  "RH3/A19": "2",
  "~{WR}/AD9/P2C/RE1": "3",
  "~{RD}/AD8/P2D/RE0": "4",
  "INT0/FLT0/RB0": "5",
  "INT1/RB1": "6",
  "INT2/RB2": "7",
  "INT3/ECCP2/P2A/RB3": "8",
  "NC": "9",
  "RG6": "10",
  "RG5": "11",
  "RF0/AN5": "12",
  "~{MCLR}": "13",
  "RG4/CCP5/P1D": "14",
  "VSS_15": "15",
  "VDDCORE/VCAP": "16",
  "VDD_17": "17",
  "RF7/~{SS1}": "18",
  "RF6/AN11": "19",
  "RF5/AN10/CVref": "20",
  "RF4/AN9": "21",
  "RF3/AN8": "22",
  "RF2/AN7/C1OUT": "23",
  "RH7/AN15/P1B": "24",
  "RH6/AN14/P1C": "25",
  "RH5/AN13/P3B": "26",
  "RH4/AN12/P3C": "27",
  "RF1/AN6/C2OUT": "28",
  "ENVREG": "29",
  "AVDD": "30",
  "AVSS": "31",
  "Vref+/AN3/RA3": "32",
  "Vref-/AN2/RA2": "33",
  "LEDB/AN1/RA1": "34",
  "LEDA/AN0/RA0": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "RG7": "38",
  "RJ7/~{UB}": "39",
  "VSS_40": "40",
  "AN4/RA5": "41",
  "TOCKI/RA4": "42",
  "T1OSI/ECCP2/P2A/RC1": "43",
  "T13CKI/T1OSO/RC0": "44",
  "TX1/CK1/RC6": "45",
  "RX1/DT1/RC7": "46",
  "RJ4/BA0": "47",
  "RJ5/~{CE}": "48",
  "RJ0/ALE": "49",
  "RJ1/~{OE}": "50",
  "RG3/CCP4/P3D": "51",
  "RG2/RX2/DT2": "52",
  "ECCP1/P1A/RC2": "53",
  "SCK1/SCL1/RC3": "54",
  "SDI1/SDA1/RC4": "55",
  "SDO1/RC5": "56",
  "PGD/KBI3/RB7": "57",
  "RJ6/~{LB}": "58",
  "VDD_59": "59",
  "VSS_60": "60",
  "RJ3/~{WRH}": "61",
  "VDD_62": "62",
  "OSC1/CLKI": "63",
  "OSC2/CLK0": "64",
  "VSS_65": "65",
  "RJ2/~{WRL}": "66",
  "PGC/KBI2/RB6": "67",
  "KBI1/RB5": "68",
  "KBI0/RB4": "69",
  "RG1/TX2/CK2": "70",
  "RG0/ECCP3/P3A": "71",
  "VSSRX": "72",
  "TPIN-": "73",
  "TPIN+": "74",
  "VDDRX": "75",
  "VDDTX": "76",
  "TPOUT-": "77",
  "TP0UT+": "78",
  "VSSTX": "79",
  "RBIAS": "80",
  "VDDPLL": "81",
  "VSSPLL": "82",
  "AD7/PSP7/~{SS2}/RD7": "83",
  "AD6/PSP6/SCK2/SCL2/RD6": "84",
  "VSS_85": "85",
  "VDD_86": "86",
  "AD5/PSP5/SDI2/SDA2/RD5": "87",
  "SD02/AD4/PSP4/RD4": "88",
  "AD3/PSP3/RD3": "89",
  "AD2/PSP2/RD2": "90",
  "AD1/PSP1/RD1": "91",
  "AD0/PSP0/RD0": "92",
  "ECCP2/AD15/P2A/RE7": "93",
  "AD14/P1B/RE6": "94",
  "AD13/P1C/RE5": "95",
  "AD12/P3B/RE4": "96",
  "AD11/P3C/RE3": "97",
  "~{CS}/AD10/P2B/RE2": "98",
  "RH0/A16": "99",
  "RH1/A17": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RH2/A18": "bidirectional", "RH3/A19": "bidirectional", "~{WR}/AD9/P2C/RE1": "bidirectional", "~{RD}/AD8/P2D/RE0": "bidirectional", "INT0/FLT0/RB0": "bidirectional", "INT1/RB1": "bidirectional", "INT2/RB2": "bidirectional", "INT3/ECCP2/P2A/RB3": "bidirectional", NC: "no_connect", RG6: "bidirectional", RG5: "bidirectional", "RF0/AN5": "bidirectional", "~{MCLR}": "input", "RG4/CCP5/P1D": "bidirectional", VSS_15: "power_in", "VDDCORE/VCAP": "passive", VDD_17: "power_in", "RF7/~{SS1}": "bidirectional", "RF6/AN11": "bidirectional", "RF5/AN10/CVref": "bidirectional", "RF4/AN9": "bidirectional", "RF3/AN8": "bidirectional", "RF2/AN7/C1OUT": "bidirectional", "RH7/AN15/P1B": "bidirectional", "RH6/AN14/P1C": "bidirectional", "RH5/AN13/P3B": "bidirectional", "RH4/AN12/P3C": "bidirectional", "RF1/AN6/C2OUT": "bidirectional", ENVREG: "passive", AVDD: "power_in", AVSS: "power_in", "Vref+/AN3/RA3": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "LEDB/AN1/RA1": "bidirectional", "LEDA/AN0/RA0": "bidirectional", VSS_36: "power_in", VDD_37: "power_in", RG7: "bidirectional", "RJ7/~{UB}": "bidirectional", VSS_40: "power_in", "AN4/RA5": "bidirectional", "TOCKI/RA4": "bidirectional", "T1OSI/ECCP2/P2A/RC1": "bidirectional", "T13CKI/T1OSO/RC0": "bidirectional", "TX1/CK1/RC6": "bidirectional", "RX1/DT1/RC7": "bidirectional", "RJ4/BA0": "bidirectional", "RJ5/~{CE}": "bidirectional", "RJ0/ALE": "bidirectional", "RJ1/~{OE}": "bidirectional", "RG3/CCP4/P3D": "bidirectional", "RG2/RX2/DT2": "bidirectional", "ECCP1/P1A/RC2": "bidirectional", "SCK1/SCL1/RC3": "bidirectional", "SDI1/SDA1/RC4": "bidirectional", "SDO1/RC5": "bidirectional", "PGD/KBI3/RB7": "bidirectional", "RJ6/~{LB}": "bidirectional", VDD_59: "power_in", VSS_60: "power_in", "RJ3/~{WRH}": "bidirectional", VDD_62: "power_in", "OSC1/CLKI": "input", "OSC2/CLK0": "output", VSS_65: "power_in", "RJ2/~{WRL}": "bidirectional", "PGC/KBI2/RB6": "bidirectional", "KBI1/RB5": "bidirectional", "KBI0/RB4": "bidirectional", "RG1/TX2/CK2": "bidirectional", "RG0/ECCP3/P3A": "bidirectional", VSSRX: "power_in", "TPIN-": "passive", "TPIN+": "passive", VDDRX: "power_in", VDDTX: "power_in", "TPOUT-": "passive", "TP0UT+": "passive", VSSTX: "power_in", RBIAS: "passive", VDDPLL: "power_in", VSSPLL: "power_in", "AD7/PSP7/~{SS2}/RD7": "bidirectional", "AD6/PSP6/SCK2/SCL2/RD6": "bidirectional", VSS_85: "power_in", VDD_86: "power_in", "AD5/PSP5/SDI2/SDA2/RD5": "bidirectional", "SD02/AD4/PSP4/RD4": "bidirectional", "AD3/PSP3/RD3": "bidirectional", "AD2/PSP2/RD2": "bidirectional", "AD1/PSP1/RD1": "bidirectional", "AD0/PSP0/RD0": "bidirectional", "ECCP2/AD15/P2A/RE7": "bidirectional", "AD14/P1B/RE6": "bidirectional", "AD13/P1C/RE5": "bidirectional", "AD12/P3B/RE4": "bidirectional", "AD11/P3C/RE3": "bidirectional", "~{CS}/AD10/P2B/RE2": "bidirectional", "RH0/A16": "bidirectional", "RH1/A17": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F97J60-IPF";
  override referencePrefix = "U";
}

/**
 * 128K Flash, 3.7K SRAM, Ethernet Controller with PHY, 8K Buffer, TQFP100
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18F97J60-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*, TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39762f.pdf
 * Keywords: Flash Based 8-Bit Microcontroller Ethernet Controller PHY.
 * Default footprint: Package_QFP:TQFP-100_12x12mm_P0.4mm.
 */
export class PIC18F97J60_IPT extends Component.withPins({
  "RH2/A18": "1",
  "RH3/A19": "2",
  "~{WR}/AD9/P2C/RE1": "3",
  "~{RD}/AD8/P2D/RE0": "4",
  "INT0/FLT0/RB0": "5",
  "INT1/RB1": "6",
  "INT2/RB2": "7",
  "INT3/ECCP2/P2A/RB3": "8",
  "NC": "9",
  "RG6": "10",
  "RG5": "11",
  "RF0/AN5": "12",
  "~{MCLR}": "13",
  "RG4/CCP5/P1D": "14",
  "VSS_15": "15",
  "VDDCORE/VCAP": "16",
  "VDD_17": "17",
  "RF7/~{SS1}": "18",
  "RF6/AN11": "19",
  "RF5/AN10/CVref": "20",
  "RF4/AN9": "21",
  "RF3/AN8": "22",
  "RF2/AN7/C1OUT": "23",
  "RH7/AN15/P1B": "24",
  "RH6/AN14/P1C": "25",
  "RH5/AN13/P3B": "26",
  "RH4/AN12/P3C": "27",
  "RF1/AN6/C2OUT": "28",
  "ENVREG": "29",
  "AVDD": "30",
  "AVSS": "31",
  "Vref+/AN3/RA3": "32",
  "Vref-/AN2/RA2": "33",
  "LEDB/AN1/RA1": "34",
  "LEDA/AN0/RA0": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "RG7": "38",
  "RJ7/~{UB}": "39",
  "VSS_40": "40",
  "AN4/RA5": "41",
  "TOCKI/RA4": "42",
  "T1OSI/ECCP2/P2A/RC1": "43",
  "T13CKI/T1OSO/RC0": "44",
  "TX1/CK1/RC6": "45",
  "RX1/DT1/RC7": "46",
  "RJ4/BA0": "47",
  "RJ5/~{CE}": "48",
  "RJ0/ALE": "49",
  "RJ1/~{OE}": "50",
  "RG3/CCP4/P3D": "51",
  "RG2/RX2/DT2": "52",
  "ECCP1/P1A/RC2": "53",
  "SCK1/SCL1/RC3": "54",
  "SDI1/SDA1/RC4": "55",
  "SDO1/RC5": "56",
  "PGD/KBI3/RB7": "57",
  "RJ6/~{LB}": "58",
  "VDD_59": "59",
  "VSS_60": "60",
  "RJ3/~{WRH}": "61",
  "VDD_62": "62",
  "OSC1/CLKI": "63",
  "OSC2/CLK0": "64",
  "VSS_65": "65",
  "RJ2/~{WRL}": "66",
  "PGC/KBI2/RB6": "67",
  "KBI1/RB5": "68",
  "KBI0/RB4": "69",
  "RG1/TX2/CK2": "70",
  "RG0/ECCP3/P3A": "71",
  "VSSRX": "72",
  "TPIN-": "73",
  "TPIN+": "74",
  "VDDRX": "75",
  "VDDTX": "76",
  "TPOUT-": "77",
  "TP0UT+": "78",
  "VSSTX": "79",
  "RBIAS": "80",
  "VDDPLL": "81",
  "VSSPLL": "82",
  "AD7/PSP7/~{SS2}/RD7": "83",
  "AD6/PSP6/SCK2/SCL2/RD6": "84",
  "VSS_85": "85",
  "VDD_86": "86",
  "AD5/PSP5/SDI2/SDA2/RD5": "87",
  "SD02/AD4/PSP4/RD4": "88",
  "AD3/PSP3/RD3": "89",
  "AD2/PSP2/RD2": "90",
  "AD1/PSP1/RD1": "91",
  "AD0/PSP0/RD0": "92",
  "ECCP2/AD15/P2A/RE7": "93",
  "AD14/P1B/RE6": "94",
  "AD13/P1C/RE5": "95",
  "AD12/P3B/RE4": "96",
  "AD11/P3C/RE3": "97",
  "~{CS}/AD10/P2B/RE2": "98",
  "RH0/A16": "99",
  "RH1/A17": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RH2/A18": "bidirectional", "RH3/A19": "bidirectional", "~{WR}/AD9/P2C/RE1": "bidirectional", "~{RD}/AD8/P2D/RE0": "bidirectional", "INT0/FLT0/RB0": "bidirectional", "INT1/RB1": "bidirectional", "INT2/RB2": "bidirectional", "INT3/ECCP2/P2A/RB3": "bidirectional", NC: "no_connect", RG6: "bidirectional", RG5: "bidirectional", "RF0/AN5": "bidirectional", "~{MCLR}": "input", "RG4/CCP5/P1D": "bidirectional", VSS_15: "power_in", "VDDCORE/VCAP": "passive", VDD_17: "power_in", "RF7/~{SS1}": "bidirectional", "RF6/AN11": "bidirectional", "RF5/AN10/CVref": "bidirectional", "RF4/AN9": "bidirectional", "RF3/AN8": "bidirectional", "RF2/AN7/C1OUT": "bidirectional", "RH7/AN15/P1B": "bidirectional", "RH6/AN14/P1C": "bidirectional", "RH5/AN13/P3B": "bidirectional", "RH4/AN12/P3C": "bidirectional", "RF1/AN6/C2OUT": "bidirectional", ENVREG: "passive", AVDD: "power_in", AVSS: "power_in", "Vref+/AN3/RA3": "bidirectional", "Vref-/AN2/RA2": "bidirectional", "LEDB/AN1/RA1": "bidirectional", "LEDA/AN0/RA0": "bidirectional", VSS_36: "power_in", VDD_37: "power_in", RG7: "bidirectional", "RJ7/~{UB}": "bidirectional", VSS_40: "power_in", "AN4/RA5": "bidirectional", "TOCKI/RA4": "bidirectional", "T1OSI/ECCP2/P2A/RC1": "bidirectional", "T13CKI/T1OSO/RC0": "bidirectional", "TX1/CK1/RC6": "bidirectional", "RX1/DT1/RC7": "bidirectional", "RJ4/BA0": "bidirectional", "RJ5/~{CE}": "bidirectional", "RJ0/ALE": "bidirectional", "RJ1/~{OE}": "bidirectional", "RG3/CCP4/P3D": "bidirectional", "RG2/RX2/DT2": "bidirectional", "ECCP1/P1A/RC2": "bidirectional", "SCK1/SCL1/RC3": "bidirectional", "SDI1/SDA1/RC4": "bidirectional", "SDO1/RC5": "bidirectional", "PGD/KBI3/RB7": "bidirectional", "RJ6/~{LB}": "bidirectional", VDD_59: "power_in", VSS_60: "power_in", "RJ3/~{WRH}": "bidirectional", VDD_62: "power_in", "OSC1/CLKI": "input", "OSC2/CLK0": "output", VSS_65: "power_in", "RJ2/~{WRL}": "bidirectional", "PGC/KBI2/RB6": "bidirectional", "KBI1/RB5": "bidirectional", "KBI0/RB4": "bidirectional", "RG1/TX2/CK2": "bidirectional", "RG0/ECCP3/P3A": "bidirectional", VSSRX: "power_in", "TPIN-": "passive", "TPIN+": "passive", VDDRX: "power_in", VDDTX: "power_in", "TPOUT-": "passive", "TP0UT+": "passive", VSSTX: "power_in", RBIAS: "passive", VDDPLL: "power_in", VSSPLL: "power_in", "AD7/PSP7/~{SS2}/RD7": "bidirectional", "AD6/PSP6/SCK2/SCL2/RD6": "bidirectional", VSS_85: "power_in", VDD_86: "power_in", "AD5/PSP5/SDI2/SDA2/RD5": "bidirectional", "SD02/AD4/PSP4/RD4": "bidirectional", "AD3/PSP3/RD3": "bidirectional", "AD2/PSP2/RD2": "bidirectional", "AD1/PSP1/RD1": "bidirectional", "AD0/PSP0/RD0": "bidirectional", "ECCP2/AD15/P2A/RE7": "bidirectional", "AD14/P1B/RE6": "bidirectional", "AD13/P1C/RE5": "bidirectional", "AD12/P3B/RE4": "bidirectional", "AD11/P3C/RE3": "bidirectional", "~{CS}/AD10/P2B/RE2": "bidirectional", "RH0/A16": "bidirectional", "RH1/A17": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18F97J60-IPT";
  override referencePrefix = "U";
}

/**
 * 18-Pin Flash Microcontroller 4K Flash 256byte RAM
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF1220-SO`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x11.6mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39605F.pdf
 * Keywords: RAM ADC UART PWM.
 * Default footprint: Package_SO:SOIC-18W_7.5x11.6mm_P1.27mm.
 */
export class PIC18LF1220_SO extends Component.withPins({
  "RA0/AN0": "1",
  "RA1/AN1/LVDIN": "2",
  "RA4/TOCKI": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "Vss": "5",
  "RA2/AN2/Vref-": "6",
  "RA3/AN3/Vref+": "7",
  "INT0/AN4/RB0": "8",
  "INT1/CK/TX/AN5/RB1": "9",
  "KBI0/DT/RX/AN6/RB4": "10",
  "KBI1/PGM/RB5": "11",
  "KBI2/P1C/T13CKI/T1OSO/PGC/RB6": "12",
  "KBI3/P1D/T1OSI/PGD/RB7": "13",
  "Vdd": "14",
  "OSC2/CLKO/RA6": "15",
  "OSC1/CLKI/RA7": "16",
  "INT2/P1B/RB2": "17",
  "P1A/CCP1/RB3": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RA0/AN0": "input", "RA1/AN1/LVDIN": "input", "RA4/TOCKI": "input", "~{MCLR}/Vpp/RA5": "input", Vss: "power_in", "RA2/AN2/Vref-": "input", "RA3/AN3/Vref+": "input", "INT0/AN4/RB0": "input", "INT1/CK/TX/AN5/RB1": "input", "KBI0/DT/RX/AN6/RB4": "input", "KBI1/PGM/RB5": "input", "KBI2/P1C/T13CKI/T1OSO/PGC/RB6": "input", "KBI3/P1D/T1OSI/PGD/RB7": "input", Vdd: "power_in", "OSC2/CLKO/RA6": "input", "OSC1/CLKI/RA7": "input", "INT2/P1B/RB2": "input", "P1A/CCP1/RB3": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF1220-SO";
  override referencePrefix = "U";
}

/**
 * 18-Pin Flash Microcontroller 8K Flash 256byte RAM
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF1320-SO`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x11.6mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39605F.pdf
 * Keywords: RAM ADC UART PWM.
 * Default footprint: Package_SO:SOIC-18W_7.5x11.6mm_P1.27mm.
 */
export class PIC18LF1320_SO extends Component.withPins({
  "RA0/AN0": "1",
  "RA1/AN1/LVDIN": "2",
  "RA4/TOCKI": "3",
  "~{MCLR}/Vpp/RA5": "4",
  "Vss": "5",
  "RA2/AN2/Vref-": "6",
  "RA3/AN3/Vref+": "7",
  "INT0/AN4/RB0": "8",
  "INT1/CK/TX/AN5/RB1": "9",
  "KBI0/DT/RX/AN6/RB4": "10",
  "KBI1/PGM/RB5": "11",
  "KBI2/P1C/T13CKI/T1OSO/PGC/RB6": "12",
  "KBI3/P1D/T1OSI/PGD/RB7": "13",
  "Vdd": "14",
  "OSC2/CLKO/RA6": "15",
  "OSC1/CLKI/RA7": "16",
  "INT2/P1B/RB2": "17",
  "P1A/CCP1/RB3": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RA0/AN0": "input", "RA1/AN1/LVDIN": "input", "RA4/TOCKI": "input", "~{MCLR}/Vpp/RA5": "input", Vss: "power_in", "RA2/AN2/Vref-": "input", "RA3/AN3/Vref+": "input", "INT0/AN4/RB0": "input", "INT1/CK/TX/AN5/RB1": "input", "KBI0/DT/RX/AN6/RB4": "input", "KBI1/PGM/RB5": "input", "KBI2/P1C/T13CKI/T1OSO/PGC/RB6": "input", "KBI3/P1D/T1OSI/PGD/RB7": "input", Vdd: "power_in", "OSC2/CLKO/RA6": "input", "OSC1/CLKI/RA7": "input", "INT2/P1B/RB2": "input", "P1A/CCP1/RB3": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF1320-SO";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 512 SRAM, 256 EEPROM, USB, nanoWatt XLP, DIP20
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF13K50-EP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, PDIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/41350c.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class PIC18LF13K50_EP extends Component.withPins({
  "VDD": "1",
  "RA5/IOCA5/OSC1/CLKIN": "2",
  "RA4/IOCA3/AN3/OSC2/CLKOUT": "3",
  "RA3/IOCA3/~{MCLR}/Vpp": "4",
  "T0CKI/CCP1/P1A/RC5": "5",
  "SRQ/C12OUT/P1B/RC4": "6",
  "PGM/C12IN3-/P1C/AN7/RC3": "7",
  "T1OSCI/T13CKI/SS/AN8/RC6": "8",
  "T1OSCO/SDO/AN9/RC7": "9",
  "RB7/IOCB7/TX/CK": "10",
  "RB6/IOCB6/SCK/SCL": "11",
  "RB5/IOCB5/AN11/RX/DT": "12",
  "RB4/IOCB4/AN10/SDI/SDA": "13",
  "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "14",
  "INT1/C12IN1-/VREF-AN5/RC1": "15",
  "INT0/C12IN+/VREF+/AN4/RC0": "16",
  "VUSB": "17",
  "RA1/IOCA1/D-/PGC": "18",
  "RA0/IOCA0/D+/PGD": "19",
  "VSS": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/IOCA5/OSC1/CLKIN": "bidirectional", "RA4/IOCA3/AN3/OSC2/CLKOUT": "bidirectional", "RA3/IOCA3/~{MCLR}/Vpp": "input", "T0CKI/CCP1/P1A/RC5": "bidirectional", "SRQ/C12OUT/P1B/RC4": "bidirectional", "PGM/C12IN3-/P1C/AN7/RC3": "bidirectional", "T1OSCI/T13CKI/SS/AN8/RC6": "bidirectional", "T1OSCO/SDO/AN9/RC7": "bidirectional", "RB7/IOCB7/TX/CK": "bidirectional", "RB6/IOCB6/SCK/SCL": "bidirectional", "RB5/IOCB5/AN11/RX/DT": "bidirectional", "RB4/IOCB4/AN10/SDI/SDA": "bidirectional", "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "bidirectional", "INT1/C12IN1-/VREF-AN5/RC1": "bidirectional", "INT0/C12IN+/VREF+/AN4/RC0": "bidirectional", VUSB: "passive", "RA1/IOCA1/D-/PGC": "bidirectional", "RA0/IOCA0/D+/PGD": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF13K50-EP";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 512 SRAM, 256 EEPROM, USB, nanoWatt XLP, SOIC20
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF13K50-ESO`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/41350c.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class PIC18LF13K50_ESO extends Component.withPins({
  "VDD": "1",
  "RA5/IOCA5/OSC1/CLKIN": "2",
  "RA4/IOCA3/AN3/OSC2/CLKOUT": "3",
  "RA3/IOCA3/~{MCLR}/Vpp": "4",
  "T0CKI/CCP1/P1A/RC5": "5",
  "SRQ/C12OUT/P1B/RC4": "6",
  "PGM/C12IN3-/P1C/AN7/RC3": "7",
  "T1OSCI/T13CKI/SS/AN8/RC6": "8",
  "T1OSCO/SDO/AN9/RC7": "9",
  "RB7/IOCB7/TX/CK": "10",
  "RB6/IOCB6/SCK/SCL": "11",
  "RB5/IOCB5/AN11/RX/DT": "12",
  "RB4/IOCB4/AN10/SDI/SDA": "13",
  "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "14",
  "INT1/C12IN1-/VREF-AN5/RC1": "15",
  "INT0/C12IN+/VREF+/AN4/RC0": "16",
  "VUSB": "17",
  "RA1/IOCA1/D-/PGC": "18",
  "RA0/IOCA0/D+/PGD": "19",
  "VSS": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/IOCA5/OSC1/CLKIN": "bidirectional", "RA4/IOCA3/AN3/OSC2/CLKOUT": "bidirectional", "RA3/IOCA3/~{MCLR}/Vpp": "input", "T0CKI/CCP1/P1A/RC5": "bidirectional", "SRQ/C12OUT/P1B/RC4": "bidirectional", "PGM/C12IN3-/P1C/AN7/RC3": "bidirectional", "T1OSCI/T13CKI/SS/AN8/RC6": "bidirectional", "T1OSCO/SDO/AN9/RC7": "bidirectional", "RB7/IOCB7/TX/CK": "bidirectional", "RB6/IOCB6/SCK/SCL": "bidirectional", "RB5/IOCB5/AN11/RX/DT": "bidirectional", "RB4/IOCB4/AN10/SDI/SDA": "bidirectional", "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "bidirectional", "INT1/C12IN1-/VREF-AN5/RC1": "bidirectional", "INT0/C12IN+/VREF+/AN4/RC0": "bidirectional", VUSB: "passive", "RA1/IOCA1/D-/PGC": "bidirectional", "RA0/IOCA0/D+/PGD": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF13K50-ESO";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 512 SRAM, 256 EEPROM, USB, nanoWatt XLP, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF13K50-ESS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/41350c.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 */
export class PIC18LF13K50_ESS extends Component.withPins({
  "VDD": "1",
  "RA5/IOCA5/OSC1/CLKIN": "2",
  "RA4/IOCA3/AN3/OSC2/CLKOUT": "3",
  "RA3/IOCA3/~{MCLR}/Vpp": "4",
  "T0CKI/CCP1/P1A/RC5": "5",
  "SRQ/C12OUT/P1B/RC4": "6",
  "PGM/C12IN3-/P1C/AN7/RC3": "7",
  "T1OSCI/T13CKI/SS/AN8/RC6": "8",
  "T1OSCO/SDO/AN9/RC7": "9",
  "RB7/IOCB7/TX/CK": "10",
  "RB6/IOCB6/SCK/SCL": "11",
  "RB5/IOCB5/AN11/RX/DT": "12",
  "RB4/IOCB4/AN10/SDI/SDA": "13",
  "INT2/CVRef/C12IN2-/P1D/AN6/RC2": "14",
  "INT1/C12IN1-/VREF-AN5/RC1": "15",
  "INT0/C12IN+/VREF+/AN4/RC0": "16",
  "VUSB": "17",
  "RA1/IOCA1/D-/PGC": "18",
  "RA0/IOCA0/D+/PGD": "19",
  "VSS": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/IOCA5/OSC1/CLKIN": "bidirectional", "RA4/IOCA3/AN3/OSC2/CLKOUT": "bidirectional", "RA3/IOCA3/~{MCLR}/Vpp": "input", "T0CKI/CCP1/P1A/RC5": "bidirectional", "SRQ/C12OUT/P1B/RC4": "bidirectional", "PGM/C12IN3-/P1C/AN7/RC3": "bidirectional", "T1OSCI/T13CKI/SS/AN8/RC6": "bidirectional", "T1OSCO/SDO/AN9/RC7": "bidirectional", "RB7/IOCB7/TX/CK": "bidirectional", "RB6/IOCB6/SCK/SCL": "bidirectional", "RB5/IOCB5/AN11/RX/DT": "bidirectional", "RB4/IOCB4/AN10/SDI/SDA": "bidirectional", "INT2/CVRef/C12IN2-/P1D/AN6/RC2": "bidirectional", "INT1/C12IN1-/VREF-AN5/RC1": "bidirectional", "INT0/C12IN+/VREF+/AN4/RC0": "bidirectional", VUSB: "passive", "RA1/IOCA1/D-/PGC": "bidirectional", "RA0/IOCA0/D+/PGD": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF13K50-ESS";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768 SRAM, 256 EEPROM, USB, nanoWatt XLP, DIP20
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF14K50-EP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, PDIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/41350c.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class PIC18LF14K50_EP extends Component.withPins({
  "VDD": "1",
  "RA5/IOCA5/OSC1/CLKIN": "2",
  "RA4/IOCA3/AN3/OSC2/CLKOUT": "3",
  "RA3/IOCA3/~{MCLR}/Vpp": "4",
  "T0CKI/CCP1/P1A/RC5": "5",
  "SRQ/C12OUT/P1B/RC4": "6",
  "PGM/C12IN3-/P1C/AN7/RC3": "7",
  "T1OSCI/T13CKI/SS/AN8/RC6": "8",
  "T1OSCO/SDO/AN9/RC7": "9",
  "RB7/IOCB7/TX/CK": "10",
  "RB6/IOCB6/SCK/SCL": "11",
  "RB5/IOCB5/AN11/RX/DT": "12",
  "RB4/IOCB4/AN10/SDI/SDA": "13",
  "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "14",
  "INT1/C12IN1-/VREF-AN5/RC1": "15",
  "INT0/C12IN+/VREF+/AN4/RC0": "16",
  "VUSB": "17",
  "RA1/IOCA1/D-/PGC": "18",
  "RA0/IOCA0/D+/PGD": "19",
  "VSS": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/IOCA5/OSC1/CLKIN": "bidirectional", "RA4/IOCA3/AN3/OSC2/CLKOUT": "bidirectional", "RA3/IOCA3/~{MCLR}/Vpp": "input", "T0CKI/CCP1/P1A/RC5": "bidirectional", "SRQ/C12OUT/P1B/RC4": "bidirectional", "PGM/C12IN3-/P1C/AN7/RC3": "bidirectional", "T1OSCI/T13CKI/SS/AN8/RC6": "bidirectional", "T1OSCO/SDO/AN9/RC7": "bidirectional", "RB7/IOCB7/TX/CK": "bidirectional", "RB6/IOCB6/SCK/SCL": "bidirectional", "RB5/IOCB5/AN11/RX/DT": "bidirectional", "RB4/IOCB4/AN10/SDI/SDA": "bidirectional", "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "bidirectional", "INT1/C12IN1-/VREF-AN5/RC1": "bidirectional", "INT0/C12IN+/VREF+/AN4/RC0": "bidirectional", VUSB: "passive", "RA1/IOCA1/D-/PGC": "bidirectional", "RA0/IOCA0/D+/PGD": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF14K50-EP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768 SRAM, 256 EEPROM, USB, nanoWatt XLP, SOIC20
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF14K50-ESO`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/41350c.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class PIC18LF14K50_ESO extends Component.withPins({
  "VDD": "1",
  "RA5/IOCA5/OSC1/CLKIN": "2",
  "RA4/IOCA3/AN3/OSC2/CLKOUT": "3",
  "RA3/IOCA3/~{MCLR}/Vpp": "4",
  "T0CKI/CCP1/P1A/RC5": "5",
  "SRQ/C12OUT/P1B/RC4": "6",
  "PGM/C12IN3-/P1C/AN7/RC3": "7",
  "T1OSCI/T13CKI/SS/AN8/RC6": "8",
  "T1OSCO/SDO/AN9/RC7": "9",
  "RB7/IOCB7/TX/CK": "10",
  "RB6/IOCB6/SCK/SCL": "11",
  "RB5/IOCB5/AN11/RX/DT": "12",
  "RB4/IOCB4/AN10/SDI/SDA": "13",
  "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "14",
  "INT1/C12IN1-/VREF-AN5/RC1": "15",
  "INT0/C12IN+/VREF+/AN4/RC0": "16",
  "VUSB": "17",
  "RA1/IOCA1/D-/PGC": "18",
  "RA0/IOCA0/D+/PGD": "19",
  "VSS": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/IOCA5/OSC1/CLKIN": "bidirectional", "RA4/IOCA3/AN3/OSC2/CLKOUT": "bidirectional", "RA3/IOCA3/~{MCLR}/Vpp": "input", "T0CKI/CCP1/P1A/RC5": "bidirectional", "SRQ/C12OUT/P1B/RC4": "bidirectional", "PGM/C12IN3-/P1C/AN7/RC3": "bidirectional", "T1OSCI/T13CKI/SS/AN8/RC6": "bidirectional", "T1OSCO/SDO/AN9/RC7": "bidirectional", "RB7/IOCB7/TX/CK": "bidirectional", "RB6/IOCB6/SCK/SCL": "bidirectional", "RB5/IOCB5/AN11/RX/DT": "bidirectional", "RB4/IOCB4/AN10/SDI/SDA": "bidirectional", "INT2/CVREF/C12IN2-/P1D/AN6/RC2": "bidirectional", "INT1/C12IN1-/VREF-AN5/RC1": "bidirectional", "INT0/C12IN+/VREF+/AN4/RC0": "bidirectional", VUSB: "passive", "RA1/IOCA1/D-/PGC": "bidirectional", "RA0/IOCA0/D+/PGD": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF14K50-ESO";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768 SRAM, 256 EEPROM, USB, nanoWatt XLP, SSOP20
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF14K50-ESS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/41350c.pdf
 * Keywords: Flash-Based 8bit CMOS Microcontroller XLP.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 */
export class PIC18LF14K50_ESS extends Component.withPins({
  "VDD": "1",
  "RA5/IOCA5/OSC1/CLKIN": "2",
  "RA4/IOCA3/AN3/OSC2/CLKOUT": "3",
  "RA3/IOCA3/~{MCLR}/Vpp": "4",
  "T0CKI/CCP1/P1A/RC5": "5",
  "SRQ/C12OUT/P1B/RC4": "6",
  "PGM/C12IN3-/P1C/AN7/RC3": "7",
  "T1OSCI/T13CKI/SS/AN8/RC6": "8",
  "T1OSCO/SDO/AN9/RC7": "9",
  "RB7/IOCB7/TX/CK": "10",
  "RB6/IOCB6/SCK/SCL": "11",
  "RB5/IOCB5/AN11/RX/DT": "12",
  "RB4/IOCB4/AN10/SDI/SDA": "13",
  "INT2/CVRef/C12IN2-/P1D/AN6/RC2": "14",
  "INT1/C12IN1-/VREF-AN5/RC1": "15",
  "INT0/C12IN+/VREF+/AN4/RC0": "16",
  "VUSB": "17",
  "RA1/IOCA1/D-/PGC": "18",
  "RA0/IOCA0/D+/PGD": "19",
  "VSS": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", "RA5/IOCA5/OSC1/CLKIN": "bidirectional", "RA4/IOCA3/AN3/OSC2/CLKOUT": "bidirectional", "RA3/IOCA3/~{MCLR}/Vpp": "input", "T0CKI/CCP1/P1A/RC5": "bidirectional", "SRQ/C12OUT/P1B/RC4": "bidirectional", "PGM/C12IN3-/P1C/AN7/RC3": "bidirectional", "T1OSCI/T13CKI/SS/AN8/RC6": "bidirectional", "T1OSCO/SDO/AN9/RC7": "bidirectional", "RB7/IOCB7/TX/CK": "bidirectional", "RB6/IOCB6/SCK/SCL": "bidirectional", "RB5/IOCB5/AN11/RX/DT": "bidirectional", "RB4/IOCB4/AN10/SDI/SDA": "bidirectional", "INT2/CVRef/C12IN2-/P1D/AN6/RC2": "bidirectional", "INT1/C12IN1-/VREF-AN5/RC1": "bidirectional", "INT0/C12IN+/VREF+/AN4/RC0": "bidirectional", VUSB: "passive", "RA1/IOCA1/D-/PGC": "bidirectional", "RA0/IOCA0/D+/PGD": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF14K50-ESS";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, QFN28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF2331-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18LF2331_IML extends Component.withPins({
  "RA2/AN2/Vref-/CAP1/INDX": "1",
  "RA3/AN3/Vref+/CAP2/QEA": "2",
  "RA4/AN4/CAP3/QEB": "3",
  "AVDD": "4",
  "AVSS": "5",
  "RA7/OSC1/CLKI": "6",
  "RA6/OSC2/CLKO": "7",
  "T1OSO/T1CKI/RC0": "8",
  "~{FLTA}/T1OSI/CCP2/RC1": "9",
  "~{FLTB}/CCP1/RC2": "10",
  "INT0/T5CKI/T0CKI/RC3": "11",
  "INT1/SDI/SDA/RC4": "12",
  "INT2/SCK/SCL/RC5": "13",
  "TX/~{SS}/CK/RC6": "14",
  "RX/SDO/DT/RC7": "15",
  "VSS": "16",
  "VDD": "17",
  "RB0/PWM0": "18",
  "RB1/PWM1": "19",
  "RB2/PWM2": "20",
  "RB3/PWM3": "21",
  "RB4/KBI0/PWM5": "22",
  "RB5/KBI1/PWM4/PGM": "23",
  "RB6/KBI2/PGC": "24",
  "RB7/KBI3/PGD": "25",
  "~{MCLR}/Vpp": "26",
  "RA0/AN0": "27",
  "RA1/AN1": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF2331-IML";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF2331-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18LF2331_ISO extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CAP1/INDX": "4",
  "RA3/AN3/Vref+/CAP2/QEA": "5",
  "RA4/AN4/CAP3/QEB": "6",
  "AVDD": "7",
  "AVSS": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T1CKI/RC0": "11",
  "~{FLTA}/T1OSI/CCP2/RC1": "12",
  "~{FLTB}/CCP1/RC2": "13",
  "INT0/T5CKI/T0CKI/RC3": "14",
  "INT1/SDI/SDA/RC4": "15",
  "INT2/SCK/SCL/RC5": "16",
  "TX/~{SS}/CK/RC6": "17",
  "RX/SDO/DT/RC7": "18",
  "VSS": "19",
  "VDD": "20",
  "RB0/PWM0": "21",
  "RB1/PWM1": "22",
  "RB2/PWM2": "23",
  "RB3/PWM3": "24",
  "RB4/KBI0/PWM5": "25",
  "RB5/KBI1/PWM4/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF2331-ISO";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF2331-ISP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, PDIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18LF2331_ISP extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CAP1/INDX": "4",
  "RA3/AN3/Vref+/CAP2/QEA": "5",
  "RA4/AN4/CAP3/QEB": "6",
  "AVDD": "7",
  "AVSS": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T1CKI/RC0": "11",
  "~{FLTA}/T1OSI/CCP2/RC1": "12",
  "~{FLTB}/CCP1/RC2": "13",
  "INT0/T5CKI/T0CKI/RC3": "14",
  "INT1/SDI/SDA/RC4": "15",
  "INT2/SCK/SCL/RC5": "16",
  "TX/~{SS}/CK/RC6": "17",
  "RX/SDO/DT/RC7": "18",
  "VSS": "19",
  "VDD": "20",
  "RB0/PWM0": "21",
  "RB1/PWM1": "22",
  "RB2/PWM2": "23",
  "RB3/PWM3": "24",
  "RB4/KBI0/PWM5": "25",
  "RB5/KBI1/PWM4/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF2331-ISP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, QFN28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF2431-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18LF2431_IML extends Component.withPins({
  "RA2/AN2/Vref-/CAP1/INDX": "1",
  "RA3/AN3/Vref+/CAP2/QEA": "2",
  "RA4/AN4/CAP3/QEB": "3",
  "AVDD": "4",
  "AVSS": "5",
  "RA7/OSC1/CLKI": "6",
  "RA6/OSC2/CLKO": "7",
  "T1OSO/T1CKI/RC0": "8",
  "~{FLTA}/T1OSI/CCP2/RC1": "9",
  "~{FLTB}/CCP1/RC2": "10",
  "INT0/T5CKI/T0CKI/RC3": "11",
  "INT1/SDI/SDA/RC4": "12",
  "INT2/SCK/SCL/RC5": "13",
  "TX/~{SS}/CK/RC6": "14",
  "RX/SDO/DT/RC7": "15",
  "VSS": "16",
  "VDD": "17",
  "RB0/PWM0": "18",
  "RB1/PWM1": "19",
  "RB2/PWM2": "20",
  "RB3/PWM3": "21",
  "RB4/KBI0/PWM5": "22",
  "RB5/KBI1/PWM4/PGM": "23",
  "RB6/KBI2/PGC": "24",
  "RB7/KBI3/PGD": "25",
  "~{MCLR}/Vpp": "26",
  "RA0/AN0": "27",
  "RA1/AN1": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF2431-IML";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF2431-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18LF2431_ISO extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CAP1/INDX": "4",
  "RA3/AN3/Vref+/CAP2/QEA": "5",
  "RA4/AN4/CAP3/QEB": "6",
  "AVDD": "7",
  "AVSS": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T1CKI/RC0": "11",
  "~{FLTA}/T1OSI/CCP2/RC1": "12",
  "~{FLTB}/CCP1/RC2": "13",
  "INT0/T5CKI/T0CKI/RC3": "14",
  "INT1/SDI/SDA/RC4": "15",
  "INT2/SCK/SCL/RC5": "16",
  "TX/~{SS}/CK/RC6": "17",
  "RX/SDO/DT/RC7": "18",
  "VSS": "19",
  "VDD": "20",
  "RB0/PWM0": "21",
  "RB1/PWM1": "22",
  "RB2/PWM2": "23",
  "RB3/PWM3": "24",
  "RB4/KBI0/PWM5": "25",
  "RB5/KBI1/PWM4/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF2431-ISO";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF2431-ISP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, PDIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18LF2431_ISP extends Component.withPins({
  "~{MCLR}/Vpp": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CAP1/INDX": "4",
  "RA3/AN3/Vref+/CAP2/QEA": "5",
  "RA4/AN4/CAP3/QEB": "6",
  "AVDD": "7",
  "AVSS": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T1CKI/RC0": "11",
  "~{FLTA}/T1OSI/CCP2/RC1": "12",
  "~{FLTB}/CCP1/RC2": "13",
  "INT0/T5CKI/T0CKI/RC3": "14",
  "INT1/SDI/SDA/RC4": "15",
  "INT2/SCK/SCL/RC5": "16",
  "TX/~{SS}/CK/RC6": "17",
  "RX/SDO/DT/RC7": "18",
  "VSS": "19",
  "VDD": "20",
  "RB0/PWM0": "21",
  "RB1/PWM1": "22",
  "RB2/PWM2": "23",
  "RB3/PWM3": "24",
  "RB4/KBI0/PWM5": "25",
  "RB5/KBI1/PWM4/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF2431-ISP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 8K SRAM, USB, nanoWatt XLP, QFN28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF2450-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18LF2450_IML extends Component.withPins({
  "RA2/AN2/Vref-": "1",
  "RA3/AN3/Vref+": "2",
  "RA4/T0CKI/RCV": "3",
  "RA5/AN4/HLVDIN": "4",
  "VSS_5": "5",
  "OSC1/CLKI": "6",
  "RA6/OSC2/CLKO": "7",
  "T1OSO/T1CKI/RC0": "8",
  "~{UOE}/T1OSI/RC1": "9",
  "CCP1/RC2": "10",
  "VUSB": "11",
  "VM/D-/RC4": "12",
  "VP/D+/RC5": "13",
  "TX/CK/RC6": "14",
  "RX/DT/RC7": "15",
  "VSS_16": "16",
  "VDD": "17",
  "RB0/AN12/INT0": "18",
  "RB1/AN10/INT1": "19",
  "RB2/AN8/INT2/VMO": "20",
  "RB3/AN9/VPO": "21",
  "RB4/AN11/KBI0": "22",
  "RB5/KBI1/PGM": "23",
  "RB6/KBI2/PGC": "24",
  "RB7/KBI3/PGD": "25",
  "Vpp/~{MCLR}/RE3": "26",
  "RA0/AN0": "27",
  "RA1/AN1": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/RCV": "bidirectional", "RA5/AN4/HLVDIN": "bidirectional", VSS_5: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "~{UOE}/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", VSS_16: "power_in", VDD: "power_in", "RB0/AN12/INT0": "bidirectional", "RB1/AN10/INT1": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF2450-IML";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 8K SRAM, USB, nanoWatt XLP, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF2450-ISO`. Reference prefix: `U`.
 * Footprint filters: SOIC*W*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class PIC18LF2450_ISO extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/RCV": "6",
  "RA5/AN4/HLVDIN": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T1CKI/RC0": "11",
  "~{UOE}/T1OSI/RC1": "12",
  "CCP1/RC2": "13",
  "VUSB": "14",
  "VM/D-/RC4": "15",
  "VP/D+/RC5": "16",
  "TX/CK/RC6": "17",
  "RX/DT/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT0": "21",
  "RB1/AN10/INT1": "22",
  "RB2/AN8/INT2/VMO": "23",
  "RB3/AN9/VPO": "24",
  "RB4/AN11/KBI0": "25",
  "RB5/KBI1/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/RCV": "bidirectional", "RA5/AN4/HLVDIN": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "~{UOE}/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT0": "bidirectional", "RB1/AN10/INT1": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF2450-ISO";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 8K SRAM, USB, nanoWatt XLP, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF2450-ISP`. Reference prefix: `U`.
 * Footprint filters: SPDIP*W7.62mm*, DIP*W7.62mm*, PDIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18LF2450_ISP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/RCV": "6",
  "RA5/AN4/HLVDIN": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T1CKI/RC0": "11",
  "~{UOE}/T1OSI/RC1": "12",
  "CCP1/RC2": "13",
  "VUSB": "14",
  "VM/D-/RC4": "15",
  "VP/D+/RC5": "16",
  "TX/CK/RC6": "17",
  "RX/DT/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT0": "21",
  "RB1/AN10/INT1": "22",
  "RB2/AN8/INT2/VMO": "23",
  "RB3/AN9/VPO": "24",
  "RB4/AN11/KBI0": "25",
  "RB5/KBI1/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/RCV": "bidirectional", "RA5/AN4/HLVDIN": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "~{UOE}/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT0": "bidirectional", "RB1/AN10/INT1": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF2450-ISP";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF2455-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm_P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/39632c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18LF2455_ISO extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T13CKI/RC0": "11",
  "~{UOE}/CCP2/T1OSI/RC1": "12",
  "CCP1/RC2": "13",
  "VUSB": "14",
  "VM/D-/RC4": "15",
  "VP/D+/RC5": "16",
  "TX/CK/RC6": "17",
  "SDO/RX/DT/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "21",
  "RB1/AN10/INT1/SCK/SCL": "22",
  "RB2/AN8/INT2/VMO": "23",
  "RB3/AN9/CCP2/VPO": "24",
  "RB4/AN11/KBI0": "25",
  "RB5/KBI1/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF2455-ISO";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF2455-ISP`. Reference prefix: `U`.
 * Footprint filters: SPDIP*28_W7.62mm*, DIP*28_W7.62mm*, PDIP*28_W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/39632c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18LF2455_ISP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T13CKI/RC0": "11",
  "~{UOE}/CCP2/T1OSI/RC1": "12",
  "CCP1/RC2": "13",
  "VUSB": "14",
  "VM/D-/RC4": "15",
  "VP/D+/RC5": "16",
  "TX/CK/RC6": "17",
  "SDO/RX/DT/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "21",
  "RB1/AN10/INT1/SCK/SCL": "22",
  "RB2/AN8/INT2/VMO": "23",
  "RB3/AN9/CCP2/VPO": "24",
  "RB4/AN11/KBI0": "25",
  "RB5/KBI1/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF2455-ISP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 1.8V to 3.6V, QFN28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF24K50-xML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18LF24K50_xML extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "RA4": "3",
  "RA5": "4",
  "VSS_5": "5",
  "RA7/OSC1/CLKI": "6",
  "RA6/OSC2/CLKO": "7",
  "RC0": "8",
  "RC1": "9",
  "RC2": "10",
  "VUSB3V3/VDDCORE": "11",
  "D-": "12",
  "D+": "13",
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
  "RB6/PGC": "24",
  "RB7/PGD": "25",
  "RE3/Vpp/~{MCLR}": "26",
  "RA0": "27",
  "RA1": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_5: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_16: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF24K50-xML";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 1.8V to 3.6V, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF24K50-xSO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18LF24K50_xSO extends Component.withPins({
  "RE3/Vpp/~{MCLR}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "VUSB3V3/VDDCORE": "14",
  "D-": "15",
  "D+": "16",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF24K50-xSO";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 1.8V to 3.6V, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF24K50-xSP`. Reference prefix: `U`.
 * Footprint filters: SPDIP*W7.62mm*, DIP*W7.62mm*, PDIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18LF24K50_xSP extends Component.withPins({
  "RE3/Vpp/~{MCLR}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "VUSB3V3/VDDCORE": "14",
  "D-": "15",
  "D+": "16",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF24K50-xSP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 1.8V to 3.6V, SSOP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF24K50-xSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC18LF24K50_xSS extends Component.withPins({
  "RE3/Vpp/~{MCLR}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "VUSB3V3/VDDCORE": "14",
  "D-": "15",
  "D+": "16",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF24K50-xSS";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF2550-ISO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm_P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/39632c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18LF2550_ISO extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T13CKI/RC0": "11",
  "~{UOE}/CCP2/T1OSI/RC1": "12",
  "CCP1/RC2": "13",
  "VUSB": "14",
  "VM/D-/RC4": "15",
  "VP/D+/RC5": "16",
  "TX/CK/RC6": "17",
  "SDO/RX/DT/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "21",
  "RB1/AN10/INT1/SCK/SCL": "22",
  "RB2/AN8/INT2/VMO": "23",
  "RB3/AN9/CCP2/VPO": "24",
  "RB4/AN11/KBI0": "25",
  "RB5/KBI1/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF2550-ISO";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF2550-ISP`. Reference prefix: `U`.
 * Footprint filters: SPDIP*28_W7.62mm*, DIP*28_W7.62mm*, PDIP*28_W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/39632c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18LF2550_ISP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "VSS_8": "8",
  "OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "T1OSO/T13CKI/RC0": "11",
  "~{UOE}/CCP2/T1OSI/RC1": "12",
  "CCP1/RC2": "13",
  "VUSB": "14",
  "VM/D-/RC4": "15",
  "VP/D+/RC5": "16",
  "TX/CK/RC6": "17",
  "SDO/RX/DT/RC7": "18",
  "VSS_19": "19",
  "VDD": "20",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "21",
  "RB1/AN10/INT1/SCK/SCL": "22",
  "RB2/AN8/INT2/VMO": "23",
  "RB3/AN9/CCP2/VPO": "24",
  "RB4/AN11/KBI0": "25",
  "RB5/KBI1/PGM": "26",
  "RB6/KBI2/PGC": "27",
  "RB7/KBI3/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", VSS_8: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", VSS_19: "power_in", VDD: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF2550-ISP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 1.8V to 3.6V, QFN28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF25K50-xML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18LF25K50_xML extends Component.withPins({
  "RA2": "1",
  "RA3": "2",
  "RA4": "3",
  "RA5": "4",
  "VSS_5": "5",
  "RA7/OSC1/CLKI": "6",
  "RA6/OSC2/CLKO": "7",
  "RC0": "8",
  "RC1": "9",
  "RC2": "10",
  "VUSB3V3/VDDCORE": "11",
  "D-": "12",
  "D+": "13",
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
  "RB6/PGC": "24",
  "RB7/PGD": "25",
  "RE3/Vpp/~{MCLR}": "26",
  "RA0": "27",
  "RA1": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_5: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_16: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF25K50-xML";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 1.8V to 3.6V, SOIC28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF25K50-xSO`. Reference prefix: `U`.
 * Footprint filters: SO*W*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class PIC18LF25K50_xSO extends Component.withPins({
  "RE3/Vpp/~{MCLR}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "VUSB3V3/VDDCORE": "14",
  "D-": "15",
  "D+": "16",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF25K50-xSO";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 1.8V to 3.6V, SPDIP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF25K50-xSP`. Reference prefix: `U`.
 * Footprint filters: SPDIP*W7.62mm*, DIP*W7.62mm*, PDIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18LF25K50_xSP extends Component.withPins({
  "RE3/Vpp/~{MCLR}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "VUSB3V3/VDDCORE": "14",
  "D-": "15",
  "D+": "16",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF25K50-xSP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, 1.8V to 3.6V, SSOP28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF25K50-xSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/30000684B.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC18LF25K50_xSS extends Component.withPins({
  "RE3/Vpp/~{MCLR}": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "RA7/OSC1/CLKI": "9",
  "RA6/OSC2/CLKO": "10",
  "RC0": "11",
  "RC1": "12",
  "RC2": "13",
  "VUSB3V3/VDDCORE": "14",
  "D-": "15",
  "D+": "16",
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
  "RB6/PGC": "27",
  "RB7/PGD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RE3/Vpp/~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "RA7/OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", "VUSB3V3/VDDCORE": "bidirectional", "D-": "bidirectional", "D+": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "power_in", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF25K50-xSS";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 3.5K RAM, 1K EEPROM 28-Pin QFN Flash Microcontroller with ECAN and nanoWatt XLP Technology
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF25K80_IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microcontroller microchip CAN USB UART QFN SPI I2C FLASH EEPROM.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18LF25K80_IML extends Component.withPins({
  "RA2/Vref-/AN2": "1",
  "RA3/Vref+/AN3": "2",
  "Vcap": "3",
  "RA5/AN4": "4",
  "Vss_5": "5",
  "OSC1/CLKIN": "6",
  "OSC2/CLKOUT": "7",
  "SOSCO/RC0": "8",
  "SOSCI/RC1": "9",
  "CCP2/RC2": "10",
  "SCL/SCK/RC3": "11",
  "SDA/SDI/RC4": "12",
  "SDO/RC5": "13",
  "CANTX/TX1/CCP3/RC6": "14",
  "CANRX/RX1/CCP4/RC7": "15",
  "Vss_16": "16",
  "Vdd": "17",
  "AN10/INT0/RB0": "18",
  "AN8/INT1/RB1": "19",
  "CANTX/INT2/RB2": "20",
  "CANRX/INT3/RB3": "21",
  "AN9/ECCP1/RB4": "22",
  "CCP5/RB5": "23",
  "PGC/TX2/RB6": "24",
  "PGD/RX2/RB7": "25",
  "~{MCLR}/RE3": "26",
  "RA0/AN0": "27",
  "RA1/AN1": "28",
  "PAD": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RA2/Vref-/AN2": "bidirectional", "RA3/Vref+/AN3": "bidirectional", Vcap: "power_in", "RA5/AN4": "bidirectional", Vss_5: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "input", "SOSCO/RC0": "bidirectional", "SOSCI/RC1": "bidirectional", "CCP2/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CANTX/TX1/CCP3/RC6": "bidirectional", "CANRX/RX1/CCP4/RC7": "bidirectional", Vss_16: "power_in", Vdd: "power_in", "AN10/INT0/RB0": "bidirectional", "AN8/INT1/RB1": "bidirectional", "CANTX/INT2/RB2": "bidirectional", "CANRX/INT3/RB3": "bidirectional", "AN9/ECCP1/RB4": "bidirectional", "CCP5/RB5": "bidirectional", "PGC/TX2/RB6": "bidirectional", "PGD/RX2/RB7": "bidirectional", "~{MCLR}/RE3": "bidirectional", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF25K80_IML";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 3.5K RAM, 1K EEPROM PIC18 Microcontroller ADC PWM CAN SPI I2C USART in SSOP28 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF25K80_ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microchip microcontroller PIC18 flash ECAN XLP nanoWatt.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC18LF25K80_ISS extends Component.withPins({
  "~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/Vref-/AN2": "4",
  "RA3/Vref+/AN3": "5",
  "Vcap": "6",
  "RA5/AN4": "7",
  "Vss_8": "8",
  "OSC1/CLKIN": "9",
  "OSC2/CLKOUT": "10",
  "SOSCO/RC0": "11",
  "SOSCI/RC1": "12",
  "CCP2/RC2": "13",
  "SCL/SCK/RC3": "14",
  "SDA/SDI/RC4": "15",
  "SDO/RC5": "16",
  "CANTX/TX1/CCP3/RC6": "17",
  "CANRX/RX1/CCP4/RC7": "18",
  "Vss_19": "19",
  "Vdd": "20",
  "AN10/INT0/RB0": "21",
  "AN8/INT1/RB1": "22",
  "CANTX/INT2/RB2": "23",
  "CANRX/INT3/RB3": "24",
  "AN9/ECCP1/RB4": "25",
  "CCP5/RB5": "26",
  "PGC/TX2/RB6": "27",
  "PGD/RX2/RB7": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/RE3": "bidirectional", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/Vref-/AN2": "bidirectional", "RA3/Vref+/AN3": "bidirectional", Vcap: "power_in", "RA5/AN4": "bidirectional", Vss_8: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "input", "SOSCO/RC0": "bidirectional", "SOSCI/RC1": "bidirectional", "CCP2/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CANTX/TX1/CCP3/RC6": "bidirectional", "CANRX/RX1/CCP4/RC7": "bidirectional", Vss_19: "power_in", Vdd: "power_in", "AN10/INT0/RB0": "bidirectional", "AN8/INT1/RB1": "bidirectional", "CANTX/INT2/RB2": "bidirectional", "CANRX/INT3/RB3": "bidirectional", "AN9/ECCP1/RB4": "bidirectional", "CCP5/RB5": "bidirectional", "PGC/TX2/RB6": "bidirectional", "PGD/RX2/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF25K80_ISS";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K RAM, 1K EEPROM, 1.8-3.6V, PIC18, low-power microcontroller with CAN, DIP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF25K83-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001943A.pdf
 * Keywords: microcontroller Microchip DMA WWDT DIA DCI XLP CLC CWG CCP NCO DSM CRC UART LIN DMX DALI SPI CAN I2C PPS SMT ADC2 CVD DAC.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18LF25K83_xSP extends Component.withPins({
  "VPP/~{MCLR}/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "OSC1_CLKIN/RA7": "9",
  "OSC2_CLKOUT/RA6": "10",
  "RC0/SOSCO": "11",
  "RC1/SOSCI": "12",
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
  "ICSPCLK/RB6": "27",
  "ICSPDAT/RB7": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "VPP/~{MCLR}/RE3": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "OSC1_CLKIN/RA7": "bidirectional", "OSC2_CLKOUT/RA6": "bidirectional", "RC0/SOSCO": "bidirectional", "RC1/SOSCI": "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF25K83-xSP";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3.5K RAM, 1K EEPROM PIC18 Microcontroller ADC PWM CAN SPI I2C USART in QFN28 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF26K80_IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microchip microcontroller PIC18 flash ECAN XLP nanoWatt.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC18LF26K80_IML extends Component.withPins({
  "RA2/Vref-/AN2": "1",
  "RA3/Vref+/AN3": "2",
  "Vcap": "3",
  "RA5/AN4": "4",
  "Vss_5": "5",
  "OSC1/CLKIN": "6",
  "OSC2/CLKOUT": "7",
  "SOSCO/RC0": "8",
  "SOSCI/RC1": "9",
  "CCP2/RC2": "10",
  "SCL/SCK/RC3": "11",
  "SDA/SDI/RC4": "12",
  "SDO/RC5": "13",
  "CANTX/TX1/CCP3/RC6": "14",
  "CANRX/RX1/CCP4/RC7": "15",
  "Vss_16": "16",
  "Vdd": "17",
  "AN10/INT0/RB0": "18",
  "AN8/INT1/RB1": "19",
  "CANTX/INT2/RB2": "20",
  "CANRX/INT3/RB3": "21",
  "AN9/ECCP1/RB4": "22",
  "CCP5/RB5": "23",
  "PGC/TX2/RB6": "24",
  "PGD/RX2/RB7": "25",
  "~{MCLR}/RE3": "26",
  "RA0/AN0": "27",
  "RA1/AN1": "28",
  "PAD": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RA2/Vref-/AN2": "bidirectional", "RA3/Vref+/AN3": "bidirectional", Vcap: "power_in", "RA5/AN4": "bidirectional", Vss_5: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "input", "SOSCO/RC0": "bidirectional", "SOSCI/RC1": "bidirectional", "CCP2/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CANTX/TX1/CCP3/RC6": "bidirectional", "CANRX/RX1/CCP4/RC7": "bidirectional", Vss_16: "power_in", Vdd: "power_in", "AN10/INT0/RB0": "bidirectional", "AN8/INT1/RB1": "bidirectional", "CANTX/INT2/RB2": "bidirectional", "CANRX/INT3/RB3": "bidirectional", "AN9/ECCP1/RB4": "bidirectional", "CCP5/RB5": "bidirectional", "PGC/TX2/RB6": "bidirectional", "PGD/RX2/RB7": "bidirectional", "~{MCLR}/RE3": "bidirectional", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF26K80_IML";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3.5K RAM, 1K EEPROM PIC18 Microcontroller ADC PWM CAN SPI I2C USART in SSOP28 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF26K80_ISS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microchip microcontroller PIC18 flash ECAN XLP nanoWatt.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class PIC18LF26K80_ISS extends Component.withPins({
  "~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/Vref-/AN2": "4",
  "RA3/Vref+/AN3": "5",
  "Vcap": "6",
  "RA5/AN4": "7",
  "Vss_8": "8",
  "OSC1/CLKIN": "9",
  "OSC2/CLKOUT": "10",
  "SOSCO/RC0": "11",
  "SOSCI/RC1": "12",
  "CCP2/RC2": "13",
  "SCL/SCK/RC3": "14",
  "SDA/SDI/RC4": "15",
  "SDO/RC5": "16",
  "CANTX/TX1/CCP3/RC6": "17",
  "CANRX/RX1/CCP4/RC7": "18",
  "Vss_19": "19",
  "Vdd": "20",
  "AN10/INT0/RB0": "21",
  "AN8/INT1/RB1": "22",
  "CANTX/INT2/RB2": "23",
  "CANRX/INT3/RB3": "24",
  "AN9/ECCP1/RB4": "25",
  "CCP5/RB5": "26",
  "PGC/TX2/RB6": "27",
  "PGD/RX2/RB7": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/RE3": "bidirectional", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/Vref-/AN2": "bidirectional", "RA3/Vref+/AN3": "bidirectional", Vcap: "power_in", "RA5/AN4": "bidirectional", Vss_8: "power_in", "OSC1/CLKIN": "input", "OSC2/CLKOUT": "input", "SOSCO/RC0": "bidirectional", "SOSCI/RC1": "bidirectional", "CCP2/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CANTX/TX1/CCP3/RC6": "bidirectional", "CANRX/RX1/CCP4/RC7": "bidirectional", Vss_19: "power_in", Vdd: "power_in", "AN10/INT0/RB0": "bidirectional", "AN8/INT1/RB1": "bidirectional", "CANTX/INT2/RB2": "bidirectional", "CANRX/INT3/RB3": "bidirectional", "AN9/ECCP1/RB4": "bidirectional", "CCP5/RB5": "bidirectional", "PGC/TX2/RB6": "bidirectional", "PGD/RX2/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF26K80_ISS";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 4K RAM, 1K EEPROM, 1.8-3.6V, PIC18, low-power microcontroller with CAN, DIP-28
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF26K83-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/40001943A.pdf
 * Keywords: microcontroller Microchip DMA WWDT DIA DCI XLP CLC CWG CCP NCO DSM CRC UART LIN DMX DALI SPI CAN I2C PPS SMT ADC2 CVD DAC.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 */
export class PIC18LF26K83_xSP extends Component.withPins({
  "VPP/~{MCLR}/RE3": "1",
  "RA0": "2",
  "RA1": "3",
  "RA2": "4",
  "RA3": "5",
  "RA4": "6",
  "RA5": "7",
  "VSS_8": "8",
  "OSC1_CLKIN/RA7": "9",
  "OSC2_CLKOUT/RA6": "10",
  "RC0/SOSCO": "11",
  "RC1/SOSCI": "12",
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
  "ICSPCLK/RB6": "27",
  "ICSPDAT/RB7": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "VPP/~{MCLR}/RE3": "input", RA0: "bidirectional", RA1: "bidirectional", RA2: "bidirectional", RA3: "bidirectional", RA4: "bidirectional", RA5: "bidirectional", VSS_8: "power_in", "OSC1_CLKIN/RA7": "bidirectional", "OSC2_CLKOUT/RA6": "bidirectional", "RC0/SOSCO": "bidirectional", "RC1/SOSCI": "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RC5: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", VSS_19: "passive", VDD: "power_in", RB0: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", RB4: "bidirectional", RB5: "bidirectional", "ICSPCLK/RB6": "bidirectional", "ICSPDAT/RB7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF26K83-xSP";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, QFN44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4331-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18LF4331_IML extends Component.withPins({
  "RX/SDO/DT/RC7": "1",
  "~{FLTA}/RD4": "2",
  "PWM4/RD5": "3",
  "PWM6/RD6": "4",
  "PWM7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "AVDD_8": "8",
  "RB0/PWM0": "9",
  "RB1/PWM1": "10",
  "RB2/PWM2": "11",
  "RB3/PWM3": "12",
  "NC": "13",
  "RB4/KBI0/PWM5": "14",
  "RB5/KBI1/PWM4/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CAP1/INDX": "21",
  "RA3/AN3/Vref+/CAP2/QEA": "22",
  "RA4/AN4/CAP3/QEB": "23",
  "RA5/AN5/LVDIN": "24",
  "AN6/RE0": "25",
  "AN7/RE1": "26",
  "AN8/RE2": "27",
  "VDD_28": "28",
  "AVDD_29": "29",
  "AVSS": "30",
  "VSS_31": "31",
  "RA7/OSC1/CLKI": "32",
  "RA6/OSC2/CLKO": "33",
  "T1OSO/T1CKI/RC0": "34",
  "~{FLTA}/T1OSI/CCP2/RC1": "35",
  "~{FLTB}/CCP1/RC2": "36",
  "INT0/T5CKI/T0CKI/RC3": "37",
  "T5CKI/T0CKI/RD0": "38",
  "SDO/RD1": "39",
  "SDA/SDI/RD2": "40",
  "SCL/SCK/RD3": "41",
  "INT1/SDI/SDA/RC4": "42",
  "INT2/SCK/SCL/RC5": "43",
  "TX/~{SS}/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RX/SDO/DT/RC7": "bidirectional", "~{FLTA}/RD4": "bidirectional", "PWM4/RD5": "bidirectional", "PWM6/RD6": "bidirectional", "PWM7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", AVDD_8: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", NC: "no_connect", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", "RA5/AN5/LVDIN": "bidirectional", "AN6/RE0": "bidirectional", "AN7/RE1": "bidirectional", "AN8/RE2": "bidirectional", VDD_28: "power_in", AVDD_29: "power_in", AVSS: "power_in", VSS_31: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "T5CKI/T0CKI/RD0": "bidirectional", "SDO/RD1": "bidirectional", "SDA/SDI/RD2": "bidirectional", "SCL/SCK/RD3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4331-IML";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4331-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24*, PDIP*W15.24*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF4331_IP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CAP1/INDX": "4",
  "RA3/AN3/Vref+/CAP2/QEA": "5",
  "RA4/AN4/CAP3/QEB": "6",
  "RA5/AN5/LVDIN": "7",
  "AN6/RE0": "8",
  "AN7/RE1": "9",
  "AN8/RE2": "10",
  "AVDD": "11",
  "AVSS": "12",
  "RA7/OSC1/CLKI": "13",
  "RA6/OSC2/CLKO": "14",
  "T1OSO/T1CKI/RC0": "15",
  "~{FLTA}/T1OSI/CCP2/RC1": "16",
  "~{FLTB}/CCP1/RC2": "17",
  "INT0/T5CKI/T0CKI/RC3": "18",
  "T5CKI/T0CKI/RD0": "19",
  "SDO/RD1": "20",
  "SDA/SDI/RD2": "21",
  "SCL/SCK/RD3": "22",
  "INT1/SDI/SDA/RC4": "23",
  "INT2/SCK/SCL/RC5": "24",
  "TX/~{SS}/CK/RC6": "25",
  "RX/SDO/DT/RC7": "26",
  "~{FLTA}/RD4": "27",
  "PWM4/RD5": "28",
  "PWM6/RD6": "29",
  "PWM7/RD7": "30",
  "VSS": "31",
  "VDD": "32",
  "RB0/PWM0": "33",
  "RB1/PWM1": "34",
  "RB2/PWM2": "35",
  "RB3/PWM3": "36",
  "RB4/KBI0/PWM5": "37",
  "RB5/KBI1/PWM4/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", "RA5/AN5/LVDIN": "bidirectional", "AN6/RE0": "bidirectional", "AN7/RE1": "bidirectional", "AN8/RE2": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "T5CKI/T0CKI/RD0": "bidirectional", "SDO/RD1": "bidirectional", "SDA/SDI/RD2": "bidirectional", "SCL/SCK/RD3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", "~{FLTA}/RD4": "bidirectional", "PWM4/RD5": "bidirectional", "PWM6/RD6": "bidirectional", "PWM7/RD7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4331-IP";
  override referencePrefix = "U";
}

/**
 * 8K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4331-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18LF4331_IPT extends Component.withPins({
  "RX/SDO/DT/RC7": "1",
  "~{FLTA}/RD4": "2",
  "PWM4/RD5": "3",
  "PWM6/RD6": "4",
  "PWM7/RD7": "5",
  "VSS": "6",
  "VDD": "7",
  "RB0/PWM0": "8",
  "RB1/PWM1": "9",
  "RB2/PWM2": "10",
  "RB3/PWM3": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4/KBI0/PWM5": "14",
  "RB5/KBI1/PWM4/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CAP1/INDX": "21",
  "RA3/AN3/Vref+/CAP2/QEA": "22",
  "RA4/AN4/CAP3/QEB": "23",
  "RA5/AN5/LVDIN": "24",
  "AN6/RE0": "25",
  "AN7/RE1": "26",
  "AN8/RE2": "27",
  "AVDD": "28",
  "AVSS": "29",
  "RA7/OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T1CKI/RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "~{FLTA}/T1OSI/CCP2/RC1": "35",
  "~{FLTB}/CCP1/RC2": "36",
  "INT0/T5CKI/T0CKI/RC3": "37",
  "T5CKI/T0CKI/RD0": "38",
  "SDO/RD1": "39",
  "SDA/SDI/RD2": "40",
  "SCL/SCK/RD3": "41",
  "INT1/SDI/SDA/RC4": "42",
  "INT2/SCK/SCL/RC5": "43",
  "TX/~{SS}/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RX/SDO/DT/RC7": "bidirectional", "~{FLTA}/RD4": "bidirectional", "PWM4/RD5": "bidirectional", "PWM6/RD6": "bidirectional", "PWM7/RD7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", "RA5/AN5/LVDIN": "bidirectional", "AN6/RE0": "bidirectional", "AN7/RE1": "bidirectional", "AN8/RE2": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "T5CKI/T0CKI/RD0": "bidirectional", "SDO/RD1": "bidirectional", "SDA/SDI/RD2": "bidirectional", "SCL/SCK/RD3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4331-IPT";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256 EEPROM, ADC, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF442-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39564c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF442_IP extends Component.withPins({
  "~{MCLR}/VPP": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/TOCKI": "6",
  "RA5/AN4/~{SS}/LVDIN": "7",
  "~{RD}/AN5/RE0": "8",
  "~{WR}/AN6/RE1": "9",
  "~{CS}/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKIN": "13",
  "RA6/OSC2/CLKO": "14",
  "T10S0/T1CKI/RC0": "15",
  "CCP2/T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "SCK/SCL/RC3": "18",
  "PSP0/RD0": "19",
  "PSP1/RD1": "20",
  "PSP2/RD2": "21",
  "PSP3/RD3": "22",
  "SDI/SDA/RC4": "23",
  "SDO/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "PSP4/RD4": "27",
  "PSP5/RD5": "28",
  "PSP6/RD6": "29",
  "PSP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0": "33",
  "RB1/INT1": "34",
  "RB2/INT2": "35",
  "RB3/CCP2": "36",
  "RB4": "37",
  "RB5/PGM": "38",
  "RB6/PGC": "39",
  "RB7/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/TOCKI": "bidirectional", "RA5/AN4/~{SS}/LVDIN": "bidirectional", "~{RD}/AN5/RE0": "bidirectional", "~{WR}/AN6/RE1": "bidirectional", "~{CS}/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKIN": "input", "RA6/OSC2/CLKO": "output", "T10S0/T1CKI/RC0": "bidirectional", "CCP2/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "PSP0/RD0": "bidirectional", "PSP1/RD1": "bidirectional", "PSP2/RD2": "bidirectional", "PSP3/RD3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", "PSP4/RD4": "bidirectional", "PSP5/RD5": "bidirectional", "PSP6/RD6": "bidirectional", "PSP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0": "bidirectional", "RB1/INT1": "bidirectional", "RB2/INT2": "bidirectional", "RB3/CCP2": "bidirectional", RB4: "bidirectional", "RB5/PGM": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF442-IP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256 EEPROM, ADC, TQFP-44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF442-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39564c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18LF442_IPT extends Component.withPins({
  "DT/RX/RC7": "1",
  "PSP4/RD4": "2",
  "PSP5/RD5": "3",
  "PSP6/RD6": "4",
  "PSP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/INT0": "8",
  "RB1/INT1": "9",
  "RB2/INT2": "10",
  "RB3/CCP2": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4": "14",
  "RB5/PGM": "15",
  "RB6/PGC": "16",
  "RB7/PGD": "17",
  "~{MCLR}/Vpp": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI": "23",
  "RA5/AN4/~{SS}/LVDin": "24",
  "~{RD}/AN5/RE0": "25",
  "~{WR}/AN6/RE1": "26",
  "~{CS}/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T1CKI/RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "T1OSI/CCP2/RC1": "35",
  "CCP1/RC2": "36",
  "SCK/SCL/RC3": "37",
  "PSP0/RD0": "38",
  "PSP1/RD1": "39",
  "PSP2/RD2": "40",
  "PSP3/RD3": "41",
  "SDI/SDA/RC4": "42",
  "SDO/RC5": "43",
  "CK/TX/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "DT/RX/RC7": "bidirectional", "PSP4/RD4": "bidirectional", "PSP5/RD5": "bidirectional", "PSP6/RD6": "bidirectional", "PSP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/INT0": "bidirectional", "RB1/INT1": "bidirectional", "RB2/INT2": "bidirectional", "RB3/CCP2": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", RB4: "bidirectional", "RB5/PGM": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/~{SS}/LVDin": "bidirectional", "~{RD}/AN5/RE0": "bidirectional", "~{WR}/AN6/RE1": "bidirectional", "~{CS}/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", "T1OSI/CCP2/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "PSP0/RD0": "bidirectional", "PSP1/RD1": "bidirectional", "PSP2/RD2": "bidirectional", "PSP3/RD3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CK/TX/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF442-IPT";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, QFN44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4431-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18LF4431_IML extends Component.withPins({
  "RX/SDO/DT/RC7": "1",
  "~{FLTA}/RD4": "2",
  "PWM4/RD5": "3",
  "PWM6/RD6": "4",
  "PWM7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "AVDD_8": "8",
  "RB0/PWM0": "9",
  "RB1/PWM1": "10",
  "RB2/PWM2": "11",
  "RB3/PWM3": "12",
  "NC": "13",
  "RB4/KBI0/PWM5": "14",
  "RB5/KBI1/PWM4/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CAP1/INDX": "21",
  "RA3/AN3/Vref+/CAP2/QEA": "22",
  "RA4/AN4/CAP3/QEB": "23",
  "RA5/AN5/LVDIN": "24",
  "AN6/RE0": "25",
  "AN7/RE1": "26",
  "AN8/RE2": "27",
  "VDD_28": "28",
  "AVDD_29": "29",
  "AVSS": "30",
  "VSS_31": "31",
  "RA7/OSC1/CLKI": "32",
  "RA6/OSC2/CLKO": "33",
  "T1OSO/T1CKI/RC0": "34",
  "~{FLTA}/T1OSI/CCP2/RC1": "35",
  "~{FLTB}/CCP1/RC2": "36",
  "INT0/T5CKI/T0CKI/RC3": "37",
  "T5CKI/T0CKI/RD0": "38",
  "SDO/RD1": "39",
  "SDA/SDI/RD2": "40",
  "SCL/SCK/RD3": "41",
  "INT1/SDI/SDA/RC4": "42",
  "INT2/SCK/SCL/RC5": "43",
  "TX/~{SS}/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RX/SDO/DT/RC7": "bidirectional", "~{FLTA}/RD4": "bidirectional", "PWM4/RD5": "bidirectional", "PWM6/RD6": "bidirectional", "PWM7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", AVDD_8: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", NC: "no_connect", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", "RA5/AN5/LVDIN": "bidirectional", "AN6/RE0": "bidirectional", "AN7/RE1": "bidirectional", "AN8/RE2": "bidirectional", VDD_28: "power_in", AVDD_29: "power_in", AVSS: "power_in", VSS_31: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "T5CKI/T0CKI/RD0": "bidirectional", "SDO/RD1": "bidirectional", "SDA/SDI/RD2": "bidirectional", "SCL/SCK/RD3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4431-IML";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4431-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24*, PDIP*W15.24*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF4431_IP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CAP1/INDX": "4",
  "RA3/AN3/Vref+/CAP2/QEA": "5",
  "RA4/AN4/CAP3/QEB": "6",
  "RA5/AN5/LVDIN": "7",
  "AN6/RE0": "8",
  "AN7/RE1": "9",
  "AN8/RE2": "10",
  "AVDD": "11",
  "AVSS": "12",
  "RA7/OSC1/CLKI": "13",
  "RA6/OSC2/CLKO": "14",
  "T1OSO/T1CKI/RC0": "15",
  "~{FLTA}/T1OSI/CCP2/RC1": "16",
  "~{FLTB}/CCP1/RC2": "17",
  "INT0/T5CKI/T0CKI/RC3": "18",
  "T5CKI/T0CKI/RD0": "19",
  "SDO/RD1": "20",
  "SDA/SDI/RD2": "21",
  "SCL/SCK/RD3": "22",
  "INT1/SDI/SDA/RC4": "23",
  "INT2/SCK/SCL/RC5": "24",
  "TX/~{SS}/CK/RC6": "25",
  "RX/SDO/DT/RC7": "26",
  "~{FLTA}/RD4": "27",
  "PWM4/RD5": "28",
  "PWM6/RD6": "29",
  "PWM7/RD7": "30",
  "VSS": "31",
  "VDD": "32",
  "RB0/PWM0": "33",
  "RB1/PWM1": "34",
  "RB2/PWM2": "35",
  "RB3/PWM3": "36",
  "RB4/KBI0/PWM5": "37",
  "RB5/KBI1/PWM4/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", "RA5/AN5/LVDIN": "bidirectional", "AN6/RE0": "bidirectional", "AN7/RE1": "bidirectional", "AN8/RE2": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "T5CKI/T0CKI/RD0": "bidirectional", "SDO/RD1": "bidirectional", "SDA/SDI/RD2": "bidirectional", "SCL/SCK/RD3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", "RX/SDO/DT/RC7": "bidirectional", "~{FLTA}/RD4": "bidirectional", "PWM4/RD5": "bidirectional", "PWM6/RD6": "bidirectional", "PWM7/RD7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4431-IP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256B EEPROM, nanoWatt XLP, ADC, PWM, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4431-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39616d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18LF4431_IPT extends Component.withPins({
  "RX/SDO/DT/RC7": "1",
  "~{FLTA}/RD4": "2",
  "PWM4/RD5": "3",
  "PWM6/RD6": "4",
  "PWM7/RD7": "5",
  "VSS": "6",
  "VDD": "7",
  "RB0/PWM0": "8",
  "RB1/PWM1": "9",
  "RB2/PWM2": "10",
  "RB3/PWM3": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4/KBI0/PWM5": "14",
  "RB5/KBI1/PWM4/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CAP1/INDX": "21",
  "RA3/AN3/Vref+/CAP2/QEA": "22",
  "RA4/AN4/CAP3/QEB": "23",
  "RA5/AN5/LVDIN": "24",
  "AN6/RE0": "25",
  "AN7/RE1": "26",
  "AN8/RE2": "27",
  "AVDD": "28",
  "AVSS": "29",
  "RA7/OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T1CKI/RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "~{FLTA}/T1OSI/CCP2/RC1": "35",
  "~{FLTB}/CCP1/RC2": "36",
  "INT0/T5CKI/T0CKI/RC3": "37",
  "T5CKI/T0CKI/RD0": "38",
  "SDO/RD1": "39",
  "SDA/SDI/RD2": "40",
  "SCL/SCK/RD3": "41",
  "INT1/SDI/SDA/RC4": "42",
  "INT2/SCK/SCL/RC5": "43",
  "TX/~{SS}/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RX/SDO/DT/RC7": "bidirectional", "~{FLTA}/RD4": "bidirectional", "PWM4/RD5": "bidirectional", "PWM6/RD6": "bidirectional", "PWM7/RD7": "bidirectional", VSS: "power_in", VDD: "power_in", "RB0/PWM0": "bidirectional", "RB1/PWM1": "bidirectional", "RB2/PWM2": "bidirectional", "RB3/PWM3": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", "RB4/KBI0/PWM5": "bidirectional", "RB5/KBI1/PWM4/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CAP1/INDX": "bidirectional", "RA3/AN3/Vref+/CAP2/QEA": "bidirectional", "RA4/AN4/CAP3/QEB": "bidirectional", "RA5/AN5/LVDIN": "bidirectional", "AN6/RE0": "bidirectional", "AN7/RE1": "bidirectional", "AN8/RE2": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RA7/OSC1/CLKI": "bidirectional", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", "~{FLTA}/T1OSI/CCP2/RC1": "bidirectional", "~{FLTB}/CCP1/RC2": "bidirectional", "INT0/T5CKI/T0CKI/RC3": "bidirectional", "T5CKI/T0CKI/RD0": "bidirectional", "SDO/RD1": "bidirectional", "SDA/SDI/RD2": "bidirectional", "SCL/SCK/RD3": "bidirectional", "INT1/SDI/SDA/RC4": "bidirectional", "INT2/SCK/SCL/RC5": "bidirectional", "TX/~{SS}/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4431-IPT";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 8K SRAM, USB, nanoWatt XLP, QFN44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4450-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18LF4450_IML extends Component.withPins({
  "RX/DT/RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "AVDD_7": "7",
  "VDD_8": "8",
  "RB0/AN12/INT0": "9",
  "RB1/AN10/INT1": "10",
  "RB2/AN8/INT2/VMO": "11",
  "RB3/AN9/VPO": "12",
  "NC": "13",
  "RB4/AN11/KBI0": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/RCV": "23",
  "RA5/AN4/HLVDIN": "24",
  "AN5/RE0": "25",
  "AN6/RE1": "26",
  "AN7/RE2": "27",
  "AVDD_28": "28",
  "VDD_29": "29",
  "AVSS": "30",
  "VSS_31": "31",
  "OSC1/CLKI": "32",
  "RA6/OSC2/CLKO": "33",
  "T1OSO/T1CKI/RC0": "34",
  "~{UOE}/T1OSI/RC1": "35",
  "CCP1/RC2": "36",
  "VUSB": "37",
  "RD0": "38",
  "RD1": "39",
  "RD2": "40",
  "RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RX/DT/RC7": "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", AVDD_7: "power_in", VDD_8: "power_in", "RB0/AN12/INT0": "bidirectional", "RB1/AN10/INT1": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/VPO": "bidirectional", NC: "no_connect", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/RCV": "bidirectional", "RA5/AN4/HLVDIN": "bidirectional", "AN5/RE0": "bidirectional", "AN6/RE1": "bidirectional", "AN7/RE2": "bidirectional", AVDD_28: "power_in", VDD_29: "power_in", AVSS: "power_in", VSS_31: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "~{UOE}/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4450-IML";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 8K SRAM, USB, nanoWatt XLP, PDIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4450-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF4450_IP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/RCV": "6",
  "RA5/AN4/HLVDIN": "7",
  "AN5/RE0": "8",
  "AN6/RE1": "9",
  "AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "RA6/OSC2/CLKO": "14",
  "T1OSO/T1CKI/RC0": "15",
  "~{UOE}/T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "VUSB": "18",
  "RD0": "19",
  "RD1": "20",
  "RD2": "21",
  "RD3": "22",
  "VM/D-/RC4": "23",
  "VP/D+/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "RD4": "27",
  "RD5": "28",
  "RD6": "29",
  "RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/AN12/INT0": "33",
  "RB1/AN10/INT1": "34",
  "RB2/AN8/INT2/VMO": "35",
  "RB3/AN9/VPO": "36",
  "RB4/AN11/KBI0": "37",
  "RB5/KBI1/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/RCV": "bidirectional", "RA5/AN4/HLVDIN": "bidirectional", "AN5/RE0": "bidirectional", "AN6/RE1": "bidirectional", "AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "~{UOE}/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/AN12/INT0": "bidirectional", "RB1/AN10/INT1": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/VPO": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4450-IP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 8K SRAM, USB, nanoWatt XLP, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4450-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18LF4450_IPT extends Component.withPins({
  "RX/DT/RC7": "1",
  "RD4": "2",
  "RD5": "3",
  "RD6": "4",
  "RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/INT0": "8",
  "RB1/AN10/INT1": "9",
  "RB2/AN8/INT2/VMO": "10",
  "RB3/AN9/VPO": "11",
  "(ICCK/ICPGC)": "12",
  "(ICDT/ICPGD)": "13",
  "RB4/AN11/KBI0": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/RCV": "23",
  "RA5/AN4/HLVDIN": "24",
  "AN5/RE0": "25",
  "AN6/RE1": "26",
  "AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T1CKI/RC0": "32",
  "(~{ICRST}/ICVpp)": "33",
  "(ICPORTS)": "34",
  "~{UOE}/T1OSI/RC1": "35",
  "CCP1/RC2": "36",
  "VUSB": "37",
  "RD0": "38",
  "RD1": "39",
  "RD2": "40",
  "RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RX/DT/RC7": "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/AN12/INT0": "bidirectional", "RB1/AN10/INT1": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/VPO": "bidirectional", "(ICCK/ICPGC)": "bidirectional", "(ICDT/ICPGD)": "bidirectional", "RB4/AN11/KBI0": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/RCV": "bidirectional", "RA5/AN4/HLVDIN": "bidirectional", "AN5/RE0": "bidirectional", "AN6/RE1": "bidirectional", "AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T1CKI/RC0": "bidirectional", "(~{ICRST}/ICVpp)": "input", "(ICPORTS)": "bidirectional", "~{UOE}/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", VUSB: "bidirectional", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4450-IPT";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, QFN44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4455-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18LF4455_IML extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "9",
  "RB1/AN10/INT1/SCK/SCL": "10",
  "RB2/AN8/INT2/VMO": "11",
  "RB3/AN9/CCP2/VPO": "12",
  "NC": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VDD_29": "29",
  "VSS_30": "30",
  "VSS_31": "31",
  "OSC1/CLKI": "32",
  "RA6/OSC2/CLKO": "33",
  "T1OSO/T13CKI/RC0": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", VDD_8: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", NC: "no_connect", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VDD_29: "power_in", VSS_30: "power_in", VSS_31: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4455-IML";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4455-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF4455_IP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "CK1SPP/AN5/RE0": "8",
  "CK2SPP/AN6/RE1": "9",
  "OESPP/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "RA6/OSC2/CLKO": "14",
  "T1OSO/T13CKI/RC0": "15",
  "~{UOE}/CCP2/T1OSI/RC1": "16",
  "P1A/CCP1/RC2": "17",
  "VUSB": "18",
  "SPP0/RD0": "19",
  "SPP1/RD1": "20",
  "SPP2/RD2": "21",
  "SPP3/RD3": "22",
  "VM/D-/RC4": "23",
  "VP/D+/RC5": "24",
  "TX/CK/RC6": "25",
  "SDO/RX/DT/RC7": "26",
  "SPP4/RD4": "27",
  "P1B/SPP5/RD5": "28",
  "P1C/SPP6/RD6": "29",
  "P1D/SPP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "33",
  "RB1/AN10/INT1/SCK/SCL": "34",
  "RB2/AN8/INT2/VMO": "35",
  "RB3/AN9/CCP2/VPO": "36",
  "RB4/AN11/KBI0/CSSPP": "37",
  "RB5/KBI1/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4455-IP";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4455-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18LF4455_IPT extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "8",
  "RB1/AN10/INT1/SCK/SCL": "9",
  "RB2/AN8/INT2/VMO": "10",
  "RB3/AN9/CCP2/VPO": "11",
  "(ICCK/ICPGC)": "12",
  "(ICDT/ICPGD)": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T13CKI/RC0": "32",
  "(~{ICRST}/ICVpp)": "33",
  "(ICPORTS)": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "(ICCK/ICPGC)": "bidirectional", "(ICDT/ICPGD)": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "(~{ICRST}/ICVpp)": "input", "(ICPORTS)": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4455-IPT";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, 12-Bit A/D, nanoWatt XLP, QFN44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4458-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39887c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18LF4458_IML extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "9",
  "RB1/AN10/INT1/SCK/SCL": "10",
  "RB2/AN8/INT2/VMO": "11",
  "RB3/AN9/CCP2/VPO": "12",
  "NC": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VDD_29": "29",
  "VSS_30": "30",
  "VSS_31": "31",
  "OSC1/CLKI": "32",
  "RA6/OSC2/CLKO": "33",
  "T1OSO/T13CKI/RC0": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
  "PAD": "45",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", VDD_8: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", NC: "no_connect", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VDD_29: "power_in", VSS_30: "power_in", VSS_31: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4458-IML";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, 12-Bit A/D, nanoWatt XLP, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4458-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39887c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF4458_IP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "CK1SPP/AN5/RE0": "8",
  "CK2SPP/AN6/RE1": "9",
  "OESPP/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "RA6/OSC2/CLKO": "14",
  "T1OSO/T13CKI/RC0": "15",
  "~{UOE}/CCP2/T1OSI/RC1": "16",
  "P1A/CCP1/RC2": "17",
  "VUSB": "18",
  "SPP0/RD0": "19",
  "SPP1/RD1": "20",
  "SPP2/RD2": "21",
  "SPP3/RD3": "22",
  "VM/D-/RC4": "23",
  "VP/D+/RC5": "24",
  "TX/CK/RC6": "25",
  "SDO/RX/DT/RC7": "26",
  "SPP4/RD4": "27",
  "P1B/SPP5/RD5": "28",
  "P1C/SPP6/RD6": "29",
  "P1D/SPP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "33",
  "RB1/AN10/INT1/SCK/SCL": "34",
  "RB2/AN8/INT2/VMO": "35",
  "RB3/AN9/CCP2/VPO": "36",
  "RB4/AN11/KBI0/CSSPP": "37",
  "RB5/KBI1/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4458-IP";
  override referencePrefix = "U";
}

/**
 * 24K Flash, 2K SRAM, 256 EEPROM, USB, 12-Bit A/D, nanoWatt XLP, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4458-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39887c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18LF4458_IPT extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "8",
  "RB1/AN10/INT1/SCK/SCL": "9",
  "RB2/AN8/INT2/VMO": "10",
  "RB3/AN9/CCP2/VPO": "11",
  "(ICCK/ICPGC)": "12",
  "(ICDT/ICPGD)": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T13CKI/RC0": "32",
  "(~{ICRST}/ICVpp)": "33",
  "(ICPORTS)": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "(ICCK/ICPGC)": "bidirectional", "(ICDT/ICPGD)": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T13CKI/RC0": "bidirectional", "(~{ICRST}/ICVpp)": "input", "(ICPORTS)": "input", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4458-IPT";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 768B SRAM, 256 EEPROM, CAN, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF448-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41159e.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller CAN.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF448_IP extends Component.withPins({
  "~{MCLR}/VPP": "1",
  "RA0/AN0/CVref": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/TOCKI": "6",
  "RA5/AN4/~{SS}/LVDIN": "7",
  "~{RD}/AN5/RE0": "8",
  "C1OUT/~{WR}/AN6/RE1": "9",
  "C2OUT/~{CS}/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKIN": "13",
  "RA6/OSC2/CLKO": "14",
  "T10S0/T1CKI/RC0": "15",
  "T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "SCK/SCL/RC3": "18",
  "C1IN+/PSP0/RD0": "19",
  "C1IN-/PSP1/RD1": "20",
  "C2IN+/PSP2/RD2": "21",
  "C2IN-/PSP3/RD3": "22",
  "SDI/SDA/RC4": "23",
  "SDO/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "P1A/ECCP1/PSP4/RD4": "27",
  "P1B/PSP5/RD5": "28",
  "P1C/PSP6/RD6": "29",
  "P1D/PSP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0": "33",
  "RB1/INT1": "34",
  "RB2/INT2/CANTX": "35",
  "RB3/CANRX": "36",
  "RB4": "37",
  "RB5/PGM": "38",
  "RB6/PGC": "39",
  "RB7/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP": "input", "RA0/AN0/CVref": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/TOCKI": "bidirectional", "RA5/AN4/~{SS}/LVDIN": "bidirectional", "~{RD}/AN5/RE0": "bidirectional", "C1OUT/~{WR}/AN6/RE1": "bidirectional", "C2OUT/~{CS}/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKIN": "input", "RA6/OSC2/CLKO": "output", "T10S0/T1CKI/RC0": "bidirectional", "T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "C1IN+/PSP0/RD0": "bidirectional", "C1IN-/PSP1/RD1": "bidirectional", "C2IN+/PSP2/RD2": "bidirectional", "C2IN-/PSP3/RD3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", "P1A/ECCP1/PSP4/RD4": "bidirectional", "P1B/PSP5/RD5": "bidirectional", "P1C/PSP6/RD6": "bidirectional", "P1D/PSP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0": "bidirectional", "RB1/INT1": "bidirectional", "RB2/INT2/CANTX": "bidirectional", "RB3/CANRX": "bidirectional", RB4: "bidirectional", "RB5/PGM": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF448-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 768B SRAM, 256 EEPROM, ECAN, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4480-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39637d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller CAN.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF4480_IP extends Component.withPins({
  "~{MCLR}/VPP/RE3": "1",
  "RA0/AN0/CVref": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/TOCKI": "6",
  "RA5/ANA4/~{SS}/HLVDIN": "7",
  "AN5/~{RD}/RE0": "8",
  "C1OUT/AN6/~{WR}/RE1": "9",
  "C2OUT/AN7/~{CS}/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI/RA7": "13",
  "OSC2/CLKO/RA6": "14",
  "T13CKI/T1OSO/RC0": "15",
  "T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "SCL/SCK/RC3": "18",
  "C1IN+/PSP0/RD0": "19",
  "C1IN-/PSP1/RD1": "20",
  "C2IN+/PSP2/RD2": "21",
  "C2IN-/PSP3/RD3": "22",
  "SDA/SDI/RC4": "23",
  "SDO/RC5": "24",
  "CK/TX/RC6": "25",
  "DT/RX/RC7": "26",
  "P1A/ECCP1/PSP4/RD4": "27",
  "P1B/PSP5/RD5": "28",
  "P1C/PSP6/RD6": "29",
  "P1D/PSP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0/FLT0/AN10": "33",
  "RB1/INT1/AN8": "34",
  "RB2/INT2/CANTX": "35",
  "RB3/CANRX": "36",
  "RB4/KBI0/AN9": "37",
  "RB5/KBI1/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP/RE3": "input", "RA0/AN0/CVref": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/TOCKI": "bidirectional", "RA5/ANA4/~{SS}/HLVDIN": "bidirectional", "AN5/~{RD}/RE0": "bidirectional", "C1OUT/AN6/~{WR}/RE1": "bidirectional", "C2OUT/AN7/~{CS}/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI/RA7": "input", "OSC2/CLKO/RA6": "output", "T13CKI/T1OSO/RC0": "bidirectional", "T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "C1IN+/PSP0/RD0": "bidirectional", "C1IN-/PSP1/RD1": "bidirectional", "C2IN+/PSP2/RD2": "bidirectional", "C2IN-/PSP3/RD3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CK/TX/RC6": "bidirectional", "DT/RX/RC7": "bidirectional", "P1A/ECCP1/PSP4/RD4": "bidirectional", "P1B/PSP5/RD5": "bidirectional", "P1C/PSP6/RD6": "bidirectional", "P1D/PSP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0/FLT0/AN10": "bidirectional", "RB1/INT1/AN8": "bidirectional", "RB2/INT2/CANTX": "bidirectional", "RB3/CANRX": "bidirectional", "RB4/KBI0/AN9": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4480-IP";
  override referencePrefix = "U";
}

/**
 * 16K Flash, 1K SRAM, ADC, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF44J10-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39682E.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF44J10_IP extends Component.withPins({
  "~{MCLR}": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "VDDCORE/VCAP": "6",
  "RA5/AN4/~{SS1}/C2OUT": "7",
  "~{RD}/AN5/RE0": "8",
  "~{WR}/AN6/RE1": "9",
  "~{CS}/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "OSC2/CLK0": "14",
  "T1OSO/T1CKI/RC0": "15",
  "T1OSI/CCP2/RC1": "16",
  "P1A/CCP1/RC2": "17",
  "SCK1/SCL1/RC3": "18",
  "PSP0/SCK2/SCL2/RD0": "19",
  "PSP1/SDI2/SDA2/RD1": "20",
  "PSP2/SDO2/RD2": "21",
  "PSP3/~{SS2}/RD3": "22",
  "SDI1/SDA1/RC4": "23",
  "SDO1/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "PSP4/RD4": "27",
  "PSP5/P1B/RD5": "28",
  "PSP6/P1C/RD6": "29",
  "PSP7/P1D/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0/FLT0/AN12": "33",
  "RB1/INT1/AN10": "34",
  "RB2/INT2/AN8": "35",
  "RB3/CCP2/AN9": "36",
  "RB4/KBI0/AN11": "37",
  "RB5/KBI1/T0CKI/C1OUT": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}": "input", "RA0/AN0": "tri_state", "RA1/AN1": "tri_state", "RA2/AN2/Vref-/CVref": "tri_state", "RA3/AN3/Vref+": "tri_state", "VDDCORE/VCAP": "passive", "RA5/AN4/~{SS1}/C2OUT": "tri_state", "~{RD}/AN5/RE0": "tri_state", "~{WR}/AN6/RE1": "tri_state", "~{CS}/AN7/RE2": "tri_state", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "OSC2/CLK0": "output", "T1OSO/T1CKI/RC0": "tri_state", "T1OSI/CCP2/RC1": "tri_state", "P1A/CCP1/RC2": "tri_state", "SCK1/SCL1/RC3": "tri_state", "PSP0/SCK2/SCL2/RD0": "tri_state", "PSP1/SDI2/SDA2/RD1": "tri_state", "PSP2/SDO2/RD2": "tri_state", "PSP3/~{SS2}/RD3": "tri_state", "SDI1/SDA1/RC4": "tri_state", "SDO1/RC5": "tri_state", "TX/CK/RC6": "tri_state", "RX/DT/RC7": "tri_state", "PSP4/RD4": "tri_state", "PSP5/P1B/RD5": "tri_state", "PSP6/P1C/RD6": "tri_state", "PSP7/P1D/RD7": "tri_state", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0/FLT0/AN12": "tri_state", "RB1/INT1/AN10": "tri_state", "RB2/INT2/AN8": "tri_state", "RB3/CCP2/AN9": "tri_state", "RB4/KBI0/AN11": "tri_state", "RB5/KBI1/T0CKI/C1OUT": "tri_state", "RB6/KBI2/PGC": "tri_state", "RB7/KBI3/PGD": "tri_state", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF44J10-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 1536B SRAM, 256 EEPROM, ADC, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF452-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39564c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF452_IP extends Component.withPins({
  "~{MCLR}/VPP": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/TOCKI": "6",
  "RA5/AN4/~{SS}/LVDIN": "7",
  "~{RD}/AN5/RE0": "8",
  "~{WR}/AN6/RE1": "9",
  "~{CS}/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKIN": "13",
  "RA6/OSC2/CLKO": "14",
  "T10S0/T1CKI/RC0": "15",
  "CCP2/T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "SCK/SCL/RC3": "18",
  "PSP0/RD0": "19",
  "PSP1/RD1": "20",
  "PSP2/RD2": "21",
  "PSP3/RD3": "22",
  "SDI/SDA/RC4": "23",
  "SDO/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "PSP4/RD4": "27",
  "PSP5/RD5": "28",
  "PSP6/RD6": "29",
  "PSP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0": "33",
  "RB1/INT1": "34",
  "RB2/INT2": "35",
  "RB3/CCP2": "36",
  "RB4": "37",
  "RB5/PGM": "38",
  "RB6/PGC": "39",
  "RB7/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/TOCKI": "bidirectional", "RA5/AN4/~{SS}/LVDIN": "bidirectional", "~{RD}/AN5/RE0": "bidirectional", "~{WR}/AN6/RE1": "bidirectional", "~{CS}/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKIN": "input", "RA6/OSC2/CLKO": "output", "T10S0/T1CKI/RC0": "bidirectional", "CCP2/T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "PSP0/RD0": "bidirectional", "PSP1/RD1": "bidirectional", "PSP2/RD2": "bidirectional", "PSP3/RD3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", "PSP4/RD4": "bidirectional", "PSP5/RD5": "bidirectional", "PSP6/RD6": "bidirectional", "PSP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0": "bidirectional", "RB1/INT1": "bidirectional", "RB2/INT2": "bidirectional", "RB3/CCP2": "bidirectional", RB4: "bidirectional", "RB5/PGM": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF452-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 1536B SRAM, 256 EEPROM, ADC, TQFP-44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF452-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39564c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18LF452_IPT extends Component.withPins({
  "DT/RX/RC7": "1",
  "PSP4/RD4": "2",
  "PSP5/RD5": "3",
  "PSP6/RD6": "4",
  "PSP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/INT0": "8",
  "RB1/INT1": "9",
  "RB2/INT2": "10",
  "RB3/CCP2": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4": "14",
  "RB5/PGM": "15",
  "RB6/PGC": "16",
  "RB7/PGD": "17",
  "~{MCLR}/Vpp": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI": "23",
  "RA5/AN4/~{SS}/LVDin": "24",
  "~{RD}/AN5/RE0": "25",
  "~{WR}/AN6/RE1": "26",
  "~{CS}/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T1CKI/RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "T1OSI/CCP2/RC1": "35",
  "CCP1/RC2": "36",
  "SCK/SCL/RC3": "37",
  "PSP0/RD0": "38",
  "PSP1/RD1": "39",
  "PSP2/RD2": "40",
  "PSP3/RD3": "41",
  "SDI/SDA/RC4": "42",
  "SDO/RC5": "43",
  "CK/TX/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "DT/RX/RC7": "bidirectional", "PSP4/RD4": "bidirectional", "PSP5/RD5": "bidirectional", "PSP6/RD6": "bidirectional", "PSP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/INT0": "bidirectional", "RB1/INT1": "bidirectional", "RB2/INT2": "bidirectional", "RB3/CCP2": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", RB4: "bidirectional", "RB5/PGM": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", "~{MCLR}/Vpp": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI": "bidirectional", "RA5/AN4/~{SS}/LVDin": "bidirectional", "~{RD}/AN5/RE0": "bidirectional", "~{WR}/AN6/RE1": "bidirectional", "~{CS}/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T1CKI/RC0": "bidirectional", NC_33: "no_connect", NC_34: "no_connect", "T1OSI/CCP2/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "PSP0/RD0": "bidirectional", "PSP1/RD1": "bidirectional", "PSP2/RD2": "bidirectional", "PSP3/RD3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CK/TX/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF452-IPT";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, QFN44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4550-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18LF4550_IML extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "9",
  "RB1/AN10/INT1/SCK/SCL": "10",
  "RB2/AN8/INT2/VMO": "11",
  "RB3/AN9/CCP2/VPO": "12",
  "NC": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VDD_29": "29",
  "VSS_30": "30",
  "VSS_31": "31",
  "OSC1/CLKI": "32",
  "RA6/OSC2/CLKO": "33",
  "T1OSO/T13CKI/RC0": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", VDD_8: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", NC: "no_connect", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VDD_29: "power_in", VSS_30: "power_in", VSS_31: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4550-IML";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4550-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF4550_IP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "CK1SPP/AN5/RE0": "8",
  "CK2SPP/AN6/RE1": "9",
  "OESPP/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "RA6/OSC2/CLKO": "14",
  "T1OSO/T13CKI/RC0": "15",
  "~{UOE}/CCP2/T1OSI/RC1": "16",
  "P1A/CCP1/RC2": "17",
  "VUSB": "18",
  "SPP0/RD0": "19",
  "SPP1/RD1": "20",
  "SPP2/RD2": "21",
  "SPP3/RD3": "22",
  "VM/D-/RC4": "23",
  "VP/D+/RC5": "24",
  "TX/CK/RC6": "25",
  "SDO/RX/DT/RC7": "26",
  "SPP4/RD4": "27",
  "P1B/SPP5/RD5": "28",
  "P1C/SPP6/RD6": "29",
  "P1D/SPP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "33",
  "RB1/AN10/INT1/SCK/SCL": "34",
  "RB2/AN8/INT2/VMO": "35",
  "RB3/AN9/CCP2/VPO": "36",
  "RB4/AN11/KBI0/CSSPP": "37",
  "RB5/KBI1/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4550-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, nanoWatt XLP, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4550-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39760d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18LF4550_IPT extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "8",
  "RB1/AN10/INT1/SCK/SCL": "9",
  "RB2/AN8/INT2/VMO": "10",
  "RB3/AN9/CCP2/VPO": "11",
  "(ICCK/ICPGC)": "12",
  "(ICDT/ICPGD)": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T13CKI/RC0": "32",
  "(~{ICRST}/ICVpp)": "33",
  "(ICPORTS)": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "(ICCK/ICPGC)": "bidirectional", "(ICDT/ICPGD)": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "output", "T1OSO/T13CKI/RC0": "bidirectional", "(~{ICRST}/ICVpp)": "input", "(ICPORTS)": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4550-IPT";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, 12-Bit A/D, nanoWatt XLP, QFN44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4553-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39887c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18LF4553_IML extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "VDD_8": "8",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "9",
  "RB1/AN10/INT1/SCK/SCL": "10",
  "RB2/AN8/INT2/VMO": "11",
  "RB3/AN9/CCP2/VPO": "12",
  "NC": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VDD_29": "29",
  "VSS_30": "30",
  "VSS_31": "31",
  "OSC1/CLKI": "32",
  "RA6/OSC2/CLKO": "33",
  "T1OSO/T13CKI/RC0": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
  "PAD": "45",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", VDD_8: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", NC: "no_connect", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VDD_29: "power_in", VSS_30: "power_in", VSS_31: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4553-IML";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, 12-Bit A/D, nanoWatt XLP, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4553-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39887c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF4553_IP extends Component.withPins({
  "Vpp/~{MCLR}/RE3": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/T0CKI/C1OUT/RCV": "6",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "7",
  "CK1SPP/AN5/RE0": "8",
  "CK2SPP/AN6/RE1": "9",
  "OESPP/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "RA6/OSC2/CLKO": "14",
  "T1OSO/T13CKI/RC0": "15",
  "~{UOE}/CCP2/T1OSI/RC1": "16",
  "P1A/CCP1/RC2": "17",
  "VUSB": "18",
  "SPP0/RD0": "19",
  "SPP1/RD1": "20",
  "SPP2/RD2": "21",
  "SPP3/RD3": "22",
  "VM/D-/RC4": "23",
  "VP/D+/RC5": "24",
  "TX/CK/RC6": "25",
  "SDO/RX/DT/RC7": "26",
  "SPP4/RD4": "27",
  "P1B/SPP5/RD5": "28",
  "P1C/SPP6/RD6": "29",
  "P1D/SPP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "33",
  "RB1/AN10/INT1/SCK/SCL": "34",
  "RB2/AN8/INT2/VMO": "35",
  "RB3/AN9/CCP2/VPO": "36",
  "RB4/AN11/KBI0/CSSPP": "37",
  "RB5/KBI1/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T13CKI/RC0": "bidirectional", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4553-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K SRAM, 256 EEPROM, USB, 12-Bit A/D, nanoWatt XLP, TQFP44
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4553-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39887c.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller XLP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18LF4553_IPT extends Component.withPins({
  "SDO/RX/DT/RC7": "1",
  "SPP4/RD4": "2",
  "P1B/SPP5/RD5": "3",
  "P1C/SPP6/RD6": "4",
  "P1D/SPP7/RD7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "RB0/AN12/INT0/FLT0/SDI/SDA": "8",
  "RB1/AN10/INT1/SCK/SCL": "9",
  "RB2/AN8/INT2/VMO": "10",
  "RB3/AN9/CCP2/VPO": "11",
  "(ICCK/ICPGC)": "12",
  "(ICDT/ICPGD)": "13",
  "RB4/AN11/KBI0/CSSPP": "14",
  "RB5/KBI1/PGM": "15",
  "RB6/KBI2/PGC": "16",
  "RB7/KBI3/PGD": "17",
  "Vpp/~{MCLR}/RE3": "18",
  "RA0/AN0": "19",
  "RA1/AN1": "20",
  "RA2/AN2/Vref-/CVref": "21",
  "RA3/AN3/Vref+": "22",
  "RA4/T0CKI/C1OUT/RCV": "23",
  "RA5/AN4/~{SS}/HLVDIN/C2OUT": "24",
  "CK1SPP/AN5/RE0": "25",
  "CK2SPP/AN6/RE1": "26",
  "OESPP/AN7/RE2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI": "30",
  "RA6/OSC2/CLKO": "31",
  "T1OSO/T13CKI/RC0": "32",
  "(~{ICRST}/ICVpp)": "33",
  "(ICPORTS)": "34",
  "~{UOE}/CCP2/T1OSI/RC1": "35",
  "P1A/CCP1/RC2": "36",
  "VUSB": "37",
  "SPP0/RD0": "38",
  "SPP1/RD1": "39",
  "SPP2/RD2": "40",
  "SPP3/RD3": "41",
  "VM/D-/RC4": "42",
  "VP/D+/RC5": "43",
  "TX/CK/RC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SDO/RX/DT/RC7": "bidirectional", "SPP4/RD4": "bidirectional", "P1B/SPP5/RD5": "bidirectional", "P1C/SPP6/RD6": "bidirectional", "P1D/SPP7/RD7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "RB0/AN12/INT0/FLT0/SDI/SDA": "bidirectional", "RB1/AN10/INT1/SCK/SCL": "bidirectional", "RB2/AN8/INT2/VMO": "bidirectional", "RB3/AN9/CCP2/VPO": "bidirectional", "(ICCK/ICPGC)": "bidirectional", "(ICDT/ICPGD)": "bidirectional", "RB4/AN11/KBI0/CSSPP": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", "Vpp/~{MCLR}/RE3": "input", "RA0/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-/CVref": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/T0CKI/C1OUT/RCV": "bidirectional", "RA5/AN4/~{SS}/HLVDIN/C2OUT": "bidirectional", "CK1SPP/AN5/RE0": "bidirectional", "CK2SPP/AN6/RE1": "bidirectional", "OESPP/AN7/RE2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI": "input", "RA6/OSC2/CLKO": "bidirectional", "T1OSO/T13CKI/RC0": "bidirectional", "(~{ICRST}/ICVpp)": "input", "(ICPORTS)": "input", "~{UOE}/CCP2/T1OSI/RC1": "bidirectional", "P1A/CCP1/RC2": "bidirectional", VUSB: "bidirectional", "SPP0/RD0": "bidirectional", "SPP1/RD1": "bidirectional", "SPP2/RD2": "bidirectional", "SPP3/RD3": "bidirectional", "VM/D-/RC4": "bidirectional", "VP/D+/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4553-IPT";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 1536B SRAM, 256 EEPROM, CAN, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF458-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/41159e.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller CAN.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF458_IP extends Component.withPins({
  "~{MCLR}/VPP": "1",
  "RA0/AN0/CVref": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/TOCKI": "6",
  "RA5/AN4/~{SS}/LVDIN": "7",
  "~{RD}/AN5/RE0": "8",
  "C1OUT/~{WR}/AN6/RE1": "9",
  "C2OUT/~{CS}/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKIN": "13",
  "RA6/OSC2/CLKO": "14",
  "T10S0/T1CKI/RC0": "15",
  "T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "SCK/SCL/RC3": "18",
  "C1IN+/PSP0/RD0": "19",
  "C1IN-/PSP1/RD1": "20",
  "C2IN+/PSP2/RD2": "21",
  "C2IN-/PSP3/RD3": "22",
  "SDI/SDA/RC4": "23",
  "SDO/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "P1A/ECCP1/PSP4/RD4": "27",
  "P1B/PSP5/RD5": "28",
  "P1C/PSP6/RD6": "29",
  "P1D/PSP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0": "33",
  "RB1/INT1": "34",
  "RB2/INT2/CANTX": "35",
  "RB3/CANRX": "36",
  "RB4": "37",
  "RB5/PGM": "38",
  "RB6/PGC": "39",
  "RB7/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP": "input", "RA0/AN0/CVref": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/TOCKI": "bidirectional", "RA5/AN4/~{SS}/LVDIN": "bidirectional", "~{RD}/AN5/RE0": "bidirectional", "C1OUT/~{WR}/AN6/RE1": "bidirectional", "C2OUT/~{CS}/AN7/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKIN": "input", "RA6/OSC2/CLKO": "output", "T10S0/T1CKI/RC0": "bidirectional", "T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCK/SCL/RC3": "bidirectional", "C1IN+/PSP0/RD0": "bidirectional", "C1IN-/PSP1/RD1": "bidirectional", "C2IN+/PSP2/RD2": "bidirectional", "C2IN-/PSP3/RD3": "bidirectional", "SDI/SDA/RC4": "bidirectional", "SDO/RC5": "bidirectional", "TX/CK/RC6": "bidirectional", "RX/DT/RC7": "bidirectional", "P1A/ECCP1/PSP4/RD4": "bidirectional", "P1B/PSP5/RD5": "bidirectional", "P1C/PSP6/RD6": "bidirectional", "P1D/PSP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0": "bidirectional", "RB1/INT1": "bidirectional", "RB2/INT2/CANTX": "bidirectional", "RB3/CANRX": "bidirectional", RB4: "bidirectional", "RB5/PGM": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF458-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 1536B SRAM, 256 EEPROM, ECAN, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF4580-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39637d.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller CAN.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF4580_IP extends Component.withPins({
  "~{MCLR}/VPP/RE3": "1",
  "RA0/AN0/CVref": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-": "4",
  "RA3/AN3/Vref+": "5",
  "RA4/TOCKI": "6",
  "RA5/ANA4/~{SS}/HLVDIN": "7",
  "AN5/~{RD}/RE0": "8",
  "C1OUT/AN6/~{WR}/RE1": "9",
  "C2OUT/AN7/~{CS}/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI/RA7": "13",
  "OSC2/CLKO/RA6": "14",
  "T13CKI/T1OSO/RC0": "15",
  "T1OSI/RC1": "16",
  "CCP1/RC2": "17",
  "SCL/SCK/RC3": "18",
  "C1IN+/PSP0/RD0": "19",
  "C1IN-/PSP1/RD1": "20",
  "C2IN+/PSP2/RD2": "21",
  "C2IN-/PSP3/RD3": "22",
  "SDA/SDI/RC4": "23",
  "SDO/RC5": "24",
  "CK/TX/RC6": "25",
  "DT/RX/RC7": "26",
  "P1A/ECCP1/PSP4/RD4": "27",
  "P1B/PSP5/RD5": "28",
  "P1C/PSP6/RD6": "29",
  "P1D/PSP7/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0/FLT0/AN10": "33",
  "RB1/INT1/AN8": "34",
  "RB2/INT2/CANTX": "35",
  "RB3/CANRX": "36",
  "RB4/KBI0/AN9": "37",
  "RB5/KBI1/PGM": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}/VPP/RE3": "input", "RA0/AN0/CVref": "bidirectional", "RA1/AN1": "bidirectional", "RA2/AN2/Vref-": "bidirectional", "RA3/AN3/Vref+": "bidirectional", "RA4/TOCKI": "bidirectional", "RA5/ANA4/~{SS}/HLVDIN": "bidirectional", "AN5/~{RD}/RE0": "bidirectional", "C1OUT/AN6/~{WR}/RE1": "bidirectional", "C2OUT/AN7/~{CS}/RE2": "bidirectional", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI/RA7": "input", "OSC2/CLKO/RA6": "output", "T13CKI/T1OSO/RC0": "bidirectional", "T1OSI/RC1": "bidirectional", "CCP1/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "C1IN+/PSP0/RD0": "bidirectional", "C1IN-/PSP1/RD1": "bidirectional", "C2IN+/PSP2/RD2": "bidirectional", "C2IN-/PSP3/RD3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CK/TX/RC6": "bidirectional", "DT/RX/RC7": "bidirectional", "P1A/ECCP1/PSP4/RD4": "bidirectional", "P1B/PSP5/RD5": "bidirectional", "P1C/PSP6/RD6": "bidirectional", "P1D/PSP7/RD7": "bidirectional", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0/FLT0/AN10": "bidirectional", "RB1/INT1/AN8": "bidirectional", "RB2/INT2/CANTX": "bidirectional", "RB3/CANRX": "bidirectional", "RB4/KBI0/AN9": "bidirectional", "RB5/KBI1/PGM": "bidirectional", "RB6/KBI2/PGC": "bidirectional", "RB7/KBI3/PGD": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF4580-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 1K SRAM, ADC, DIP40
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF45J10-IP`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, PDIP*W15.24mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39682E.pdf
 * Keywords: Flash-Based 8-Bit Microcontroller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class PIC18LF45J10_IP extends Component.withPins({
  "~{MCLR}": "1",
  "RA0/AN0": "2",
  "RA1/AN1": "3",
  "RA2/AN2/Vref-/CVref": "4",
  "RA3/AN3/Vref+": "5",
  "VDDCORE/VCAP": "6",
  "RA5/AN4/~{SS1}/C2OUT": "7",
  "~{RD}/AN5/RE0": "8",
  "~{WR}/AN6/RE1": "9",
  "~{CS}/AN7/RE2": "10",
  "VDD_11": "11",
  "VSS_12": "12",
  "OSC1/CLKI": "13",
  "OSC2/CLK0": "14",
  "T1OSO/T1CKI/RC0": "15",
  "T1OSI/CCP2/RC1": "16",
  "P1A/CCP1/RC2": "17",
  "SCK1/SCL1/RC3": "18",
  "PSP0/SCK2/SCL2/RD0": "19",
  "PSP1/SDI2/SDA2/RD1": "20",
  "PSP2/SDO2/RD2": "21",
  "PSP3/~{SS2}/RD3": "22",
  "SDI1/SDA1/RC4": "23",
  "SDO1/RC5": "24",
  "TX/CK/RC6": "25",
  "RX/DT/RC7": "26",
  "PSP4/RD4": "27",
  "PSP5/P1B/RD5": "28",
  "PSP6/P1C/RD6": "29",
  "PSP7/P1D/RD7": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "RB0/INT0/FLT0/AN12": "33",
  "RB1/INT1/AN10": "34",
  "RB2/INT2/AN8": "35",
  "RB3/CCP2/AN9": "36",
  "RB4/KBI0/AN11": "37",
  "RB5/KBI1/T0CKI/C1OUT": "38",
  "RB6/KBI2/PGC": "39",
  "RB7/KBI3/PGD": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{MCLR}": "input", "RA0/AN0": "tri_state", "RA1/AN1": "tri_state", "RA2/AN2/Vref-/CVref": "tri_state", "RA3/AN3/Vref+": "tri_state", "VDDCORE/VCAP": "passive", "RA5/AN4/~{SS1}/C2OUT": "tri_state", "~{RD}/AN5/RE0": "tri_state", "~{WR}/AN6/RE1": "tri_state", "~{CS}/AN7/RE2": "tri_state", VDD_11: "power_in", VSS_12: "power_in", "OSC1/CLKI": "input", "OSC2/CLK0": "output", "T1OSO/T1CKI/RC0": "tri_state", "T1OSI/CCP2/RC1": "tri_state", "P1A/CCP1/RC2": "tri_state", "SCK1/SCL1/RC3": "tri_state", "PSP0/SCK2/SCL2/RD0": "tri_state", "PSP1/SDI2/SDA2/RD1": "tri_state", "PSP2/SDO2/RD2": "tri_state", "PSP3/~{SS2}/RD3": "tri_state", "SDI1/SDA1/RC4": "tri_state", "SDO1/RC5": "tri_state", "TX/CK/RC6": "tri_state", "RX/DT/RC7": "tri_state", "PSP4/RD4": "tri_state", "PSP5/P1B/RD5": "tri_state", "PSP6/P1C/RD6": "tri_state", "PSP7/P1D/RD7": "tri_state", VSS_31: "power_in", VDD_32: "power_in", "RB0/INT0/FLT0/AN12": "tri_state", "RB1/INT1/AN10": "tri_state", "RB2/INT2/AN8": "tri_state", "RB3/CCP2/AN9": "tri_state", "RB4/KBI0/AN11": "tri_state", "RB5/KBI1/T0CKI/C1OUT": "tri_state", "RB6/KBI2/PGC": "tri_state", "RB7/KBI3/PGD": "tri_state", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF45J10-IP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 2K RAM, 256B EEPROM, Microchip PIC18F series enhanced flash microcontroller with USB and nanoWatt XLP Technology in TQFP-44 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF45K50_QFP`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/30000684B.pdf
 * Keywords: microcontroller Flash EEPROM SPI I2C USB UART USART ADC TQFP.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18LF45K50_QFP extends Component.withPins({
  "RC7/AN19/RX/DT/IOCC7": "1",
  "RD4/AN24": "2",
  "RD5/P1B/AN25": "3",
  "RD6/P1C/AN26": "4",
  "RD7/P1D/AN27": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "AN12/SRI/~{FLT0}/SDI/SDA/INT0/RB0": "8",
  "AN10/C12IN3-/SCK/SCL/INT1/RB1": "9",
  "AN8/CTED1/INT2/RB2": "10",
  "AN9/C12IN2-/CTED2/CCP2/SDO/RB3": "11",
  "ICPGC/ICCK/NC": "12",
  "ICPGD/ICDT/NC": "13",
  "AN11/IOCB4/RB4": "14",
  "AN13/T1G/T3CKI/IOCB5/RB5": "15",
  "PGC/IOCB6/RB6": "16",
  "PGD/IOCB7/RB7": "17",
  "~{MCLR}/VPP/RE3": "18",
  "AN0/C12IN0-/RA0": "19",
  "AN1/C12IN1-/CTCMP/RA1": "20",
  "VREF-/DACOUT/AN2/C2IN+/RA2": "21",
  "VREF+/AN3/C1IN+/RA3": "22",
  "C1OUT/SRQ/T0CKI/RA4": "23",
  "AN4/HLVDIN/SRNQ/C2OUT/~{SS}/RA5": "24",
  "RE0/AN5": "25",
  "RE1/AN6": "26",
  "RE2/AN7": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI/RA7": "30",
  "OSC2/CLKO/RA6": "31",
  "RC0/SOSCO/T1CKI/T3CKI/T3G/IOCC0": "32",
  "ICVPP/ICRST/NC": "33",
  "NC": "34",
  "RC1/SOSCI/CCP2/IOCC1": "35",
  "RC2/AN14/CTPLS/CCP1/P1A/IOCC2": "36",
  "VUSB3V3/VDDCORE": "37",
  "RD0/AN20": "38",
  "RD1/AN21": "39",
  "RD2/AN22": "40",
  "RD3/AN23": "41",
  "D-/IOCC4": "42",
  "D+/IOCC5": "43",
  "RC6/AN18/TX/CK/IOCC6": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RC7/AN19/RX/DT/IOCC7": "bidirectional", "RD4/AN24": "bidirectional", "RD5/P1B/AN25": "bidirectional", "RD6/P1C/AN26": "bidirectional", "RD7/P1D/AN27": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "AN12/SRI/~{FLT0}/SDI/SDA/INT0/RB0": "bidirectional", "AN10/C12IN3-/SCK/SCL/INT1/RB1": "bidirectional", "AN8/CTED1/INT2/RB2": "bidirectional", "AN9/C12IN2-/CTED2/CCP2/SDO/RB3": "bidirectional", "ICPGC/ICCK/NC": "bidirectional", "ICPGD/ICDT/NC": "bidirectional", "AN11/IOCB4/RB4": "bidirectional", "AN13/T1G/T3CKI/IOCB5/RB5": "bidirectional", "PGC/IOCB6/RB6": "bidirectional", "PGD/IOCB7/RB7": "bidirectional", "~{MCLR}/VPP/RE3": "input", "AN0/C12IN0-/RA0": "bidirectional", "AN1/C12IN1-/CTCMP/RA1": "bidirectional", "VREF-/DACOUT/AN2/C2IN+/RA2": "bidirectional", "VREF+/AN3/C1IN+/RA3": "bidirectional", "C1OUT/SRQ/T0CKI/RA4": "bidirectional", "AN4/HLVDIN/SRNQ/C2OUT/~{SS}/RA5": "bidirectional", "RE0/AN5": "bidirectional", "RE1/AN6": "bidirectional", "RE2/AN7": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI/RA7": "bidirectional", "OSC2/CLKO/RA6": "bidirectional", "RC0/SOSCO/T1CKI/T3CKI/T3G/IOCC0": "bidirectional", "ICVPP/ICRST/NC": "bidirectional", NC: "no_connect", "RC1/SOSCI/CCP2/IOCC1": "bidirectional", "RC2/AN14/CTPLS/CCP1/P1A/IOCC2": "bidirectional", "VUSB3V3/VDDCORE": "power_in", "RD0/AN20": "bidirectional", "RD1/AN21": "bidirectional", "RD2/AN22": "bidirectional", "RD3/AN23": "bidirectional", "D-/IOCC4": "bidirectional", "D+/IOCC5": "bidirectional", "RC6/AN18/TX/CK/IOCC6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF45K50_QFP";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 3.5K RAM, 1K EEPROM PIC18 Microcontroller ADC PWM CAN SPI I2C USART in QFN44 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF45K80-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microchip microcontroller PIC18 flash ECAN XLP nanoWatt.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18LF45K80_IML extends Component.withPins({
  "CANRX/RX1/CCP4/RC7": "1",
  "ECCP1/PSP4/RD4": "2",
  "PSP5/RD5": "3",
  "TX2/PSP6/RD6": "4",
  "RX2/PSP7/RD7": "5",
  "Vss_6": "6",
  "Vdd_7": "7",
  "RB0/AN10/INT0": "8",
  "RB1/AN8/INT1": "9",
  "RB2/CANTX/INT2": "10",
  "RB3/CANRX/INT3": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4/AN9": "14",
  "RB5/CCP5": "15",
  "RB6/PGC": "16",
  "RB7/PGD": "17",
  "~{MLCR}/RE3": "18",
  "RA0/CVref/AN0": "19",
  "RA1/AN1": "20",
  "RA2/Vref-/AN2": "21",
  "RA3/Vref+/AN3": "22",
  "Vddcore/Vcap": "23",
  "RA5/AN4": "24",
  "RE0/AN5": "25",
  "RE1/AN6": "26",
  "RE2/AN7": "27",
  "Vdd_28": "28",
  "Vss_29": "29",
  "OSC1/CLKIN/RA7": "30",
  "OSC2/CLKOUT/RA6": "31",
  "RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "RC1": "35",
  "CCP2/RC2": "36",
  "SCL/SCK/RC3": "37",
  "C1INA/PSP0/RD0": "38",
  "C1INB/PSP1/RD1": "39",
  "C2INA/PSP2/RD2": "40",
  "C2INB/PSP3/RD3": "41",
  "SDA/SDI/RC4": "42",
  "SDO/RC5": "43",
  "CANTX/TX1/CCP3/RC6": "44",
  "PAD": "45",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CANRX/RX1/CCP4/RC7": "bidirectional", "ECCP1/PSP4/RD4": "bidirectional", "PSP5/RD5": "bidirectional", "TX2/PSP6/RD6": "bidirectional", "RX2/PSP7/RD7": "bidirectional", Vss_6: "power_in", Vdd_7: "power_in", "RB0/AN10/INT0": "bidirectional", "RB1/AN8/INT1": "bidirectional", "RB2/CANTX/INT2": "bidirectional", "RB3/CANRX/INT3": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", "RB4/AN9": "bidirectional", "RB5/CCP5": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", "~{MLCR}/RE3": "bidirectional", "RA0/CVref/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/Vref-/AN2": "bidirectional", "RA3/Vref+/AN3": "bidirectional", "Vddcore/Vcap": "power_in", "RA5/AN4": "bidirectional", "RE0/AN5": "bidirectional", "RE1/AN6": "bidirectional", "RE2/AN7": "bidirectional", Vdd_28: "power_in", Vss_29: "power_in", "OSC1/CLKIN/RA7": "input", "OSC2/CLKOUT/RA6": "input", RC0: "bidirectional", NC_33: "no_connect", NC_34: "no_connect", RC1: "bidirectional", "CCP2/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "C1INA/PSP0/RD0": "bidirectional", "C1INB/PSP1/RD1": "bidirectional", "C2INA/PSP2/RD2": "bidirectional", "C2INB/PSP3/RD3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CANTX/TX1/CCP3/RC6": "bidirectional", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF45K80-IML";
  override referencePrefix = "U";
}

/**
 * 32K Flash, 3.5K RAM, 1K EEPROM PIC18 Microcontroller ADC PWM CAN SPI I2C USART in TQFP44 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF45K80-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microchip microcontroller PIC18 flash ECAN XLP nanoWatt.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18LF45K80_IPT extends Component.withPins({
  "RC7/CANRX/RX1/DT1/CCP4": "1",
  "RD4/ECCP1/P1A/PSP4": "2",
  "RD5/P1B/PSP5": "3",
  "RD6/TX2/CK2/P1C/PSP6": "4",
  "RD7/RX2/DT2/P1D/PSP7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "AN10/FLT0/INT0/RB0": "8",
  "AN8/CTDIN/INT1/RB1": "9",
  "CANTX/CTED1/INT2/RB2": "10",
  "CANRX/CTED2/INT3/RB3": "11",
  "N/C_12": "12",
  "N/C_13": "13",
  "AN9/CTPLS/KBI0/RB4": "14",
  "T0CKI/T3CKI/CCP5/KBI1/RB5": "15",
  "PGC/KBI2/RB6": "16",
  "PGD/T3G/KBI3/RB7": "17",
  "~{MCLR}/RE3": "18",
  "CVref/AN0/ULPWU/RA0": "19",
  "AN1/C1INC/RA1": "20",
  "VREF-/AN2/C2INC/RA2": "21",
  "Vref+/AN3/RA3": "22",
  "VDDCORE/VCAP": "23",
  "AN4/HLVDIN/T1CKI/~{SS}/RA5": "24",
  "RE0/AN5/~{RD}": "25",
  "RE1/AN6/C1OUT/~{WR}": "26",
  "RE2/AN7/C2OUT/~{CS}": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKIN/RA7": "30",
  "OSC2/CLKOUT/RA6": "31",
  "RC0/SOSCO/SCLKI": "32",
  "N/C_33": "33",
  "N/C_34": "34",
  "RC1/SOSCI": "35",
  "RC2/T1G/CCP2": "36",
  "RC3/REFO/SCL/SCK": "37",
  "RD0/C1INA/PSP0": "38",
  "RD1/C1INB/PSP1": "39",
  "RD2/C2INA/PSP2": "40",
  "RD3/C2INB/CTMUI/PSP3": "41",
  "RC4/SDA/SDI": "42",
  "RC5/SDO": "43",
  "RC6/CANTX/TX1/CK1/CCP3": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RC7/CANRX/RX1/DT1/CCP4": "bidirectional", "RD4/ECCP1/P1A/PSP4": "bidirectional", "RD5/P1B/PSP5": "bidirectional", "RD6/TX2/CK2/P1C/PSP6": "bidirectional", "RD7/RX2/DT2/P1D/PSP7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "AN10/FLT0/INT0/RB0": "bidirectional", "AN8/CTDIN/INT1/RB1": "bidirectional", "CANTX/CTED1/INT2/RB2": "bidirectional", "CANRX/CTED2/INT3/RB3": "bidirectional", "N/C_12": "bidirectional", "N/C_13": "bidirectional", "AN9/CTPLS/KBI0/RB4": "bidirectional", "T0CKI/T3CKI/CCP5/KBI1/RB5": "bidirectional", "PGC/KBI2/RB6": "bidirectional", "PGD/T3G/KBI3/RB7": "bidirectional", "~{MCLR}/RE3": "input", "CVref/AN0/ULPWU/RA0": "bidirectional", "AN1/C1INC/RA1": "bidirectional", "VREF-/AN2/C2INC/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "VDDCORE/VCAP": "passive", "AN4/HLVDIN/T1CKI/~{SS}/RA5": "bidirectional", "RE0/AN5/~{RD}": "bidirectional", "RE1/AN6/C1OUT/~{WR}": "bidirectional", "RE2/AN7/C2OUT/~{CS}": "power_in", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKIN/RA7": "input", "OSC2/CLKOUT/RA6": "output", "RC0/SOSCO/SCLKI": "bidirectional", "N/C_33": "bidirectional", "N/C_34": "bidirectional", "RC1/SOSCI": "bidirectional", "RC2/T1G/CCP2": "bidirectional", "RC3/REFO/SCL/SCK": "bidirectional", "RD0/C1INA/PSP0": "bidirectional", "RD1/C1INB/PSP1": "bidirectional", "RD2/C2INA/PSP2": "bidirectional", "RD3/C2INB/CTMUI/PSP3": "bidirectional", "RC4/SDA/SDI": "bidirectional", "RC5/SDO": "bidirectional", "RC6/CANTX/TX1/CK1/CCP3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF45K80-IPT";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3.5K RAM, 1K EEPROM PIC18 Microcontroller ADC PWM CAN SPI I2C USART in QFN44 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF46K80-IML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microchip microcontroller PIC18 flash ECAN XLP nanoWatt.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_8x8mm_P0.65mm_EP6.45x6.45mm.
 */
export class PIC18LF46K80_IML extends Component.withPins({
  "CANRX/RX1/CCP4/RC7": "1",
  "ECCP1/PSP4/RD4": "2",
  "PSP5/RD5": "3",
  "TX2/PSP6/RD6": "4",
  "RX2/PSP7/RD7": "5",
  "Vss_6": "6",
  "Vdd_7": "7",
  "RB0/AN10/INT0": "8",
  "RB1/AN8/INT1": "9",
  "RB2/CANTX/INT2": "10",
  "RB3/CANRX/INT3": "11",
  "NC_12": "12",
  "NC_13": "13",
  "RB4/AN9": "14",
  "RB5/CCP5": "15",
  "RB6/PGC": "16",
  "RB7/PGD": "17",
  "~{MLCR}/RE3": "18",
  "RA0/CVref/AN0": "19",
  "RA1/AN1": "20",
  "RA2/Vref-/AN2": "21",
  "RA3/Vref+/AN3": "22",
  "Vddcore/Vcap": "23",
  "RA5/AN4": "24",
  "RE0/AN5": "25",
  "RE1/AN6": "26",
  "RE2/AN7": "27",
  "Vdd_28": "28",
  "Vss_29": "29",
  "OSC1/CLKIN/RA7": "30",
  "OSC2/CLKOUT/RA6": "31",
  "RC0": "32",
  "NC_33": "33",
  "NC_34": "34",
  "RC1": "35",
  "CCP2/RC2": "36",
  "SCL/SCK/RC3": "37",
  "C1INA/PSP0/RD0": "38",
  "C1INB/PSP1/RD1": "39",
  "C2INA/PSP2/RD2": "40",
  "C2INB/PSP3/RD3": "41",
  "SDA/SDI/RC4": "42",
  "SDO/RC5": "43",
  "CANTX/TX1/CCP3/RC6": "44",
  "PAD": "45",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CANRX/RX1/CCP4/RC7": "bidirectional", "ECCP1/PSP4/RD4": "bidirectional", "PSP5/RD5": "bidirectional", "TX2/PSP6/RD6": "bidirectional", "RX2/PSP7/RD7": "bidirectional", Vss_6: "power_in", Vdd_7: "power_in", "RB0/AN10/INT0": "bidirectional", "RB1/AN8/INT1": "bidirectional", "RB2/CANTX/INT2": "bidirectional", "RB3/CANRX/INT3": "bidirectional", NC_12: "no_connect", NC_13: "no_connect", "RB4/AN9": "bidirectional", "RB5/CCP5": "bidirectional", "RB6/PGC": "bidirectional", "RB7/PGD": "bidirectional", "~{MLCR}/RE3": "bidirectional", "RA0/CVref/AN0": "bidirectional", "RA1/AN1": "bidirectional", "RA2/Vref-/AN2": "bidirectional", "RA3/Vref+/AN3": "bidirectional", "Vddcore/Vcap": "power_in", "RA5/AN4": "bidirectional", "RE0/AN5": "bidirectional", "RE1/AN6": "bidirectional", "RE2/AN7": "bidirectional", Vdd_28: "power_in", Vss_29: "power_in", "OSC1/CLKIN/RA7": "input", "OSC2/CLKOUT/RA6": "input", RC0: "bidirectional", NC_33: "no_connect", NC_34: "no_connect", RC1: "bidirectional", "CCP2/RC2": "bidirectional", "SCL/SCK/RC3": "bidirectional", "C1INA/PSP0/RD0": "bidirectional", "C1INB/PSP1/RD1": "bidirectional", "C2INA/PSP2/RD2": "bidirectional", "C2INB/PSP3/RD3": "bidirectional", "SDA/SDI/RC4": "bidirectional", "SDO/RC5": "bidirectional", "CANTX/TX1/CCP3/RC6": "bidirectional", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF46K80-IML";
  override referencePrefix = "U";
}

/**
 * 64K Flash, 3.5K RAM, 1K EEPROM PIC18 Microcontroller ADC PWM CAN SPI I2C USART in TQFP44 package
 *
 * KiCad symbol: `MCU_Microchip_PIC18:PIC18LF46K80-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/39977f.pdf
 * Keywords: microchip microcontroller PIC18 flash ECAN XLP nanoWatt.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC18LF46K80_IPT extends Component.withPins({
  "RC7/CANRX/RX1/DT1/CCP4": "1",
  "RD4/ECCP1/P1A/PSP4": "2",
  "RD5/P1B/PSP5": "3",
  "RD6/TX2/CK2/P1C/PSP6": "4",
  "RD7/RX2/DT2/P1D/PSP7": "5",
  "VSS_6": "6",
  "VDD_7": "7",
  "AN10/FLT0/INT0/RB0": "8",
  "AN8/CTDIN/INT1/RB1": "9",
  "CANTX/CTED1/INT2/RB2": "10",
  "CANRX/CTED2/INT3/RB3": "11",
  "N/C_12": "12",
  "N/C_13": "13",
  "AN9/CTPLS/KBI0/RB4": "14",
  "T0CKI/T3CKI/CCP5/KBI1/RB5": "15",
  "PGC/KBI2/RB6": "16",
  "PGD/T3G/KBI3/RB7": "17",
  "~{MCLR}/RE3": "18",
  "CVref/AN0/ULPWU/RA0": "19",
  "AN1/C1INC/RA1": "20",
  "VREF-/AN2/C2INC/RA2": "21",
  "Vref+/AN3/RA3": "22",
  "VDDCORE/VCAP": "23",
  "AN4/HLVDIN/T1CKI/~{SS}/RA5": "24",
  "RE0/AN5/~{RD}": "25",
  "RE1/AN6/C1OUT/~{WR}": "26",
  "RE2/AN7/C2OUT/~{CS}": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKIN/RA7": "30",
  "OSC2/CLKOUT/RA6": "31",
  "RC0/SOSCO/SCLKI": "32",
  "N/C_33": "33",
  "N/C_34": "34",
  "RC1/SOSCI": "35",
  "RC2/T1G/CCP2": "36",
  "RC3/REFO/SCL/SCK": "37",
  "RD0/C1INA/PSP0": "38",
  "RD1/C1INB/PSP1": "39",
  "RD2/C2INA/PSP2": "40",
  "RD3/C2INB/CTMUI/PSP3": "41",
  "RC4/SDA/SDI": "42",
  "RC5/SDO": "43",
  "RC6/CANTX/TX1/CK1/CCP3": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RC7/CANRX/RX1/DT1/CCP4": "bidirectional", "RD4/ECCP1/P1A/PSP4": "bidirectional", "RD5/P1B/PSP5": "bidirectional", "RD6/TX2/CK2/P1C/PSP6": "bidirectional", "RD7/RX2/DT2/P1D/PSP7": "bidirectional", VSS_6: "power_in", VDD_7: "power_in", "AN10/FLT0/INT0/RB0": "bidirectional", "AN8/CTDIN/INT1/RB1": "bidirectional", "CANTX/CTED1/INT2/RB2": "bidirectional", "CANRX/CTED2/INT3/RB3": "bidirectional", "N/C_12": "bidirectional", "N/C_13": "bidirectional", "AN9/CTPLS/KBI0/RB4": "bidirectional", "T0CKI/T3CKI/CCP5/KBI1/RB5": "bidirectional", "PGC/KBI2/RB6": "bidirectional", "PGD/T3G/KBI3/RB7": "bidirectional", "~{MCLR}/RE3": "input", "CVref/AN0/ULPWU/RA0": "bidirectional", "AN1/C1INC/RA1": "bidirectional", "VREF-/AN2/C2INC/RA2": "bidirectional", "Vref+/AN3/RA3": "bidirectional", "VDDCORE/VCAP": "passive", "AN4/HLVDIN/T1CKI/~{SS}/RA5": "bidirectional", "RE0/AN5/~{RD}": "bidirectional", "RE1/AN6/C1OUT/~{WR}": "bidirectional", "RE2/AN7/C2OUT/~{CS}": "power_in", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKIN/RA7": "input", "OSC2/CLKOUT/RA6": "output", "RC0/SOSCO/SCLKI": "bidirectional", "N/C_33": "bidirectional", "N/C_34": "bidirectional", "RC1/SOSCI": "bidirectional", "RC2/T1G/CCP2": "bidirectional", "RC3/REFO/SCL/SCK": "bidirectional", "RD0/C1INA/PSP0": "bidirectional", "RD1/C1INB/PSP1": "bidirectional", "RD2/C2INA/PSP2": "bidirectional", "RD3/C2INB/CTMUI/PSP3": "bidirectional", "RC4/SDA/SDI": "bidirectional", "RC5/SDO": "bidirectional", "RC6/CANTX/TX1/CK1/CCP3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC18:PIC18LF46K80-IPT";
  override referencePrefix = "U";
}
