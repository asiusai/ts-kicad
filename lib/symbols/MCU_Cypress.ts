// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * CYPRESS FX2LP USB Microcontroller, 48MHz 8051, 16KB RAM, USB 2.0, I2C, QFN-56
 *
 * KiCad symbol: `MCU_Cypress:CY7C68013A-56LTX`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.5mm*.
 * @see http://www.cypress.com/file/138911/download
 * Keywords: FX2LP 8-bit USB MCU.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_8x8mm_P0.5mm_EP4.5x5.2mm_ThermalVias_TopTented.
 */
export class CY7C68013A_56LTX extends Component.withPins({
  "RDY0/SLRD": "1",
  "RDY1/SLWR": "2",
  "AVCC_3": "3",
  "XTALOUT": "4",
  "XTALIN": "5",
  "AGND_6": "6",
  "AVCC_7": "7",
  "D+": "8",
  "D-": "9",
  "AGND_10": "10",
  "VCC_11": "11",
  "GND_12": "12",
  "IFCLK": "13",
  "RESERVED": "14",
  "SCL": "15",
  "SDA": "16",
  "VCC_17": "17",
  "PB0/FD0": "18",
  "PB1/FD1": "19",
  "PB2/FD2": "20",
  "PB3/FD3": "21",
  "PB4/FD4": "22",
  "PB5/FD5": "23",
  "PB6/FD6": "24",
  "PB7/FD7": "25",
  "GND_26": "26",
  "VCC_27": "27",
  "GND_28": "28",
  "CTL0/FLAGA": "29",
  "CTL1/FLAGB": "30",
  "CTL2/FLAGC": "31",
  "VCC_32": "32",
  "PA0/~{INT0}": "33",
  "PA1/~{INT1}": "34",
  "PA2/SLOE": "35",
  "PA3/WU2": "36",
  "PA4/FIOADDR0": "37",
  "PA5/FIOADDR1": "38",
  "PA6/PKTEND": "39",
  "PA7/FLAGD/~{SLCS}": "40",
  "GND_41": "41",
  "~{RESET}": "42",
  "VCC_43": "43",
  "WAKEUP": "44",
  "PD0/FD8": "45",
  "PD1/FD9": "46",
  "PD2/FD10": "47",
  "PD3/FD11": "48",
  "PD4/FD12": "49",
  "PD5/FD13": "50",
  "PD6/FD14": "51",
  "PD7/FD15": "52",
  "GND_53": "53",
  "CLKOUT": "54",
  "VCC_55": "55",
  "GND_56": "56",
  "EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RDY0/SLRD": "input", "RDY1/SLWR": "input", AVCC_3: "power_in", XTALOUT: "output", XTALIN: "input", AGND_6: "power_in", AVCC_7: "passive", "D+": "bidirectional", "D-": "bidirectional", AGND_10: "passive", VCC_11: "power_in", GND_12: "power_in", IFCLK: "bidirectional", RESERVED: "input", SCL: "input", SDA: "bidirectional", VCC_17: "passive", "PB0/FD0": "bidirectional", "PB1/FD1": "bidirectional", "PB2/FD2": "bidirectional", "PB3/FD3": "bidirectional", "PB4/FD4": "bidirectional", "PB5/FD5": "bidirectional", "PB6/FD6": "bidirectional", "PB7/FD7": "bidirectional", GND_26: "passive", VCC_27: "passive", GND_28: "passive", "CTL0/FLAGA": "output", "CTL1/FLAGB": "output", "CTL2/FLAGC": "output", VCC_32: "passive", "PA0/~{INT0}": "bidirectional", "PA1/~{INT1}": "bidirectional", "PA2/SLOE": "bidirectional", "PA3/WU2": "bidirectional", "PA4/FIOADDR0": "bidirectional", "PA5/FIOADDR1": "bidirectional", "PA6/PKTEND": "bidirectional", "PA7/FLAGD/~{SLCS}": "bidirectional", GND_41: "passive", "~{RESET}": "input", VCC_43: "passive", WAKEUP: "input", "PD0/FD8": "bidirectional", "PD1/FD9": "bidirectional", "PD2/FD10": "bidirectional", "PD3/FD11": "bidirectional", "PD4/FD12": "bidirectional", "PD5/FD13": "bidirectional", "PD6/FD14": "bidirectional", "PD7/FD15": "bidirectional", GND_53: "passive", CLKOUT: "output", VCC_55: "passive", GND_56: "passive", EP: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY7C68013A-56LTX";
  override referencePrefix = "U";
}

/**
 * CYPRESS FX2LP USB Microcontroller, 48MHz 8051, 16KB RAM, USB 2.0, I2C, SSOP-56
 *
 * KiCad symbol: `MCU_Cypress:CY7C68013A-56PVX`. Reference prefix: `U`.
 * Footprint filters: SSOP*7.5x18.5mm*P0.635mm*.
 * @see http://www.cypress.com/file/138911/download
 * Keywords: FX2LP 8-bit USB MCU.
 * Default footprint: Package_SO:SSOP-56_7.5x18.5mm_P0.635mm.
 */
export class CY7C68013A_56PVX extends Component.withPins({
  "PD5/FD13": "1",
  "PD6/FD14": "2",
  "PD7/FD15": "3",
  "GND_4": "4",
  "CLKOUT": "5",
  "VCC_6": "6",
  "GND_7": "7",
  "RDY0/SLRD": "8",
  "RDY1/SLWR": "9",
  "AVCC_10": "10",
  "XTALOUT": "11",
  "XTALIN": "12",
  "AGND_13": "13",
  "AVCC_14": "14",
  "D+": "15",
  "D-": "16",
  "AGND_17": "17",
  "VCC_18": "18",
  "GND_19": "19",
  "IFCLK": "20",
  "RESERVED": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC_24": "24",
  "PB0/FD0": "25",
  "PB1/FD1": "26",
  "PB2/FD2": "27",
  "PB3/FD3": "28",
  "PB4/FD4": "29",
  "PB5/FD5": "30",
  "PB6/FD6": "31",
  "PB7/FD7": "32",
  "GND_33": "33",
  "VCC_34": "34",
  "GND_35": "35",
  "CTL0/FLAGA": "36",
  "CTL1/FLAGB": "37",
  "CTL2/FLAGC": "38",
  "VCC_39": "39",
  "PA0/~{INT0}": "40",
  "PA1/~{INT1}": "41",
  "PA2/SLOE": "42",
  "PA3/WU2": "43",
  "PA4/FIOADDR0": "44",
  "PA5/FIOADDR1": "45",
  "PA6/PKTEND": "46",
  "PA7/FLAGD/~{SLCS}": "47",
  "GND_48": "48",
  "~{RESET}": "49",
  "VCC_50": "50",
  "WAKEUP": "51",
  "PD0/FD8": "52",
  "PD1/FD9": "53",
  "PD2/FD10": "54",
  "PD3/FD11": "55",
  "PD4/FD12": "56",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PD5/FD13": "bidirectional", "PD6/FD14": "bidirectional", "PD7/FD15": "bidirectional", GND_4: "passive", CLKOUT: "output", VCC_6: "power_in", GND_7: "power_in", "RDY0/SLRD": "input", "RDY1/SLWR": "input", AVCC_10: "power_in", XTALOUT: "output", XTALIN: "input", AGND_13: "power_in", AVCC_14: "passive", "D+": "bidirectional", "D-": "bidirectional", AGND_17: "passive", VCC_18: "passive", GND_19: "passive", IFCLK: "bidirectional", RESERVED: "input", SCL: "input", SDA: "bidirectional", VCC_24: "passive", "PB0/FD0": "bidirectional", "PB1/FD1": "bidirectional", "PB2/FD2": "bidirectional", "PB3/FD3": "bidirectional", "PB4/FD4": "bidirectional", "PB5/FD5": "bidirectional", "PB6/FD6": "bidirectional", "PB7/FD7": "bidirectional", GND_33: "passive", VCC_34: "passive", GND_35: "passive", "CTL0/FLAGA": "output", "CTL1/FLAGB": "output", "CTL2/FLAGC": "output", VCC_39: "passive", "PA0/~{INT0}": "bidirectional", "PA1/~{INT1}": "bidirectional", "PA2/SLOE": "bidirectional", "PA3/WU2": "bidirectional", "PA4/FIOADDR0": "bidirectional", "PA5/FIOADDR1": "bidirectional", "PA6/PKTEND": "bidirectional", "PA7/FLAGD/~{SLCS}": "bidirectional", GND_48: "passive", "~{RESET}": "input", VCC_50: "passive", WAKEUP: "input", "PD0/FD8": "bidirectional", "PD1/FD9": "bidirectional", "PD2/FD10": "bidirectional", "PD3/FD11": "bidirectional", "PD4/FD12": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY7C68013A-56PVX";
  override referencePrefix = "U";
}

/**
 * CYPRESS FX2LP USB Microcontroller, 48MHz 8051, 16KB RAM, USB 2.0, I2C, QFN-56
 *
 * KiCad symbol: `MCU_Cypress:CY7C68014A-56LTX`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.5mm*.
 * @see http://www.cypress.com/file/138911/download
 * Keywords: FX2LP 8-bit USB MCU.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_8x8mm_P0.5mm_EP4.5x5.2mm_ThermalVias_TopTented.
 */
export class CY7C68014A_56LTX extends Component.withPins({
  "RDY0/SLRD": "1",
  "RDY1/SLWR": "2",
  "AVCC_3": "3",
  "XTALOUT": "4",
  "XTALIN": "5",
  "AGND_6": "6",
  "AVCC_7": "7",
  "D+": "8",
  "D-": "9",
  "AGND_10": "10",
  "VCC_11": "11",
  "GND_12": "12",
  "IFCLK": "13",
  "RESERVED": "14",
  "SCL": "15",
  "SDA": "16",
  "VCC_17": "17",
  "PB0/FD0": "18",
  "PB1/FD1": "19",
  "PB2/FD2": "20",
  "PB3/FD3": "21",
  "PB4/FD4": "22",
  "PB5/FD5": "23",
  "PB6/FD6": "24",
  "PB7/FD7": "25",
  "GND_26": "26",
  "VCC_27": "27",
  "GND_28": "28",
  "CTL0/FLAGA": "29",
  "CTL1/FLAGB": "30",
  "CTL2/FLAGC": "31",
  "VCC_32": "32",
  "PA0/~{INT0}": "33",
  "PA1/~{INT1}": "34",
  "PA2/SLOE": "35",
  "PA3/WU2": "36",
  "PA4/FIOADDR0": "37",
  "PA5/FIOADDR1": "38",
  "PA6/PKTEND": "39",
  "PA7/FLAGD/~{SLCS}": "40",
  "GND_41": "41",
  "~{RESET}": "42",
  "VCC_43": "43",
  "WAKEUP": "44",
  "PD0/FD8": "45",
  "PD1/FD9": "46",
  "PD2/FD10": "47",
  "PD3/FD11": "48",
  "PD4/FD12": "49",
  "PD5/FD13": "50",
  "PD6/FD14": "51",
  "PD7/FD15": "52",
  "GND_53": "53",
  "CLKOUT": "54",
  "VCC_55": "55",
  "GND_56": "56",
  "EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "RDY0/SLRD": "input", "RDY1/SLWR": "input", AVCC_3: "power_in", XTALOUT: "output", XTALIN: "input", AGND_6: "power_in", AVCC_7: "passive", "D+": "bidirectional", "D-": "bidirectional", AGND_10: "passive", VCC_11: "power_in", GND_12: "power_in", IFCLK: "bidirectional", RESERVED: "input", SCL: "input", SDA: "bidirectional", VCC_17: "passive", "PB0/FD0": "bidirectional", "PB1/FD1": "bidirectional", "PB2/FD2": "bidirectional", "PB3/FD3": "bidirectional", "PB4/FD4": "bidirectional", "PB5/FD5": "bidirectional", "PB6/FD6": "bidirectional", "PB7/FD7": "bidirectional", GND_26: "passive", VCC_27: "passive", GND_28: "passive", "CTL0/FLAGA": "output", "CTL1/FLAGB": "output", "CTL2/FLAGC": "output", VCC_32: "passive", "PA0/~{INT0}": "bidirectional", "PA1/~{INT1}": "bidirectional", "PA2/SLOE": "bidirectional", "PA3/WU2": "bidirectional", "PA4/FIOADDR0": "bidirectional", "PA5/FIOADDR1": "bidirectional", "PA6/PKTEND": "bidirectional", "PA7/FLAGD/~{SLCS}": "bidirectional", GND_41: "passive", "~{RESET}": "input", VCC_43: "passive", WAKEUP: "input", "PD0/FD8": "bidirectional", "PD1/FD9": "bidirectional", "PD2/FD10": "bidirectional", "PD3/FD11": "bidirectional", "PD4/FD12": "bidirectional", "PD5/FD13": "bidirectional", "PD6/FD14": "bidirectional", "PD7/FD15": "bidirectional", GND_53: "passive", CLKOUT: "output", VCC_55: "passive", GND_56: "passive", EP: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY7C68014A-56LTX";
  override referencePrefix = "U";
}

/**
 * CYPRESS FX2LP USB Microcontroller, 48MHz 8051, 16KB RAM, USB 2.0, I2C, SSOP-56
 *
 * KiCad symbol: `MCU_Cypress:CY7C68014A-56PVX`. Reference prefix: `U`.
 * Footprint filters: SSOP*7.5x18.5mm*P0.635mm*.
 * @see http://www.cypress.com/file/138911/download
 * Keywords: FX2LP 8-bit USB MCU.
 * Default footprint: Package_SO:SSOP-56_7.5x18.5mm_P0.635mm.
 */
export class CY7C68014A_56PVX extends Component.withPins({
  "PD5/FD13": "1",
  "PD6/FD14": "2",
  "PD7/FD15": "3",
  "GND_4": "4",
  "CLKOUT": "5",
  "VCC_6": "6",
  "GND_7": "7",
  "RDY0/SLRD": "8",
  "RDY1/SLWR": "9",
  "AVCC_10": "10",
  "XTALOUT": "11",
  "XTALIN": "12",
  "AGND_13": "13",
  "AVCC_14": "14",
  "D+": "15",
  "D-": "16",
  "AGND_17": "17",
  "VCC_18": "18",
  "GND_19": "19",
  "IFCLK": "20",
  "RESERVED": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC_24": "24",
  "PB0/FD0": "25",
  "PB1/FD1": "26",
  "PB2/FD2": "27",
  "PB3/FD3": "28",
  "PB4/FD4": "29",
  "PB5/FD5": "30",
  "PB6/FD6": "31",
  "PB7/FD7": "32",
  "GND_33": "33",
  "VCC_34": "34",
  "GND_35": "35",
  "CTL0/FLAGA": "36",
  "CTL1/FLAGB": "37",
  "CTL2/FLAGC": "38",
  "VCC_39": "39",
  "PA0/~{INT0}": "40",
  "PA1/~{INT1}": "41",
  "PA2/SLOE": "42",
  "PA3/WU2": "43",
  "PA4/FIOADDR0": "44",
  "PA5/FIOADDR1": "45",
  "PA6/PKTEND": "46",
  "PA7/FLAGD/~{SLCS}": "47",
  "GND_48": "48",
  "~{RESET}": "49",
  "VCC_50": "50",
  "WAKEUP": "51",
  "PD0/FD8": "52",
  "PD1/FD9": "53",
  "PD2/FD10": "54",
  "PD3/FD11": "55",
  "PD4/FD12": "56",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PD5/FD13": "bidirectional", "PD6/FD14": "bidirectional", "PD7/FD15": "bidirectional", GND_4: "passive", CLKOUT: "output", VCC_6: "power_in", GND_7: "power_in", "RDY0/SLRD": "input", "RDY1/SLWR": "input", AVCC_10: "power_in", XTALOUT: "output", XTALIN: "input", AGND_13: "power_in", AVCC_14: "passive", "D+": "bidirectional", "D-": "bidirectional", AGND_17: "passive", VCC_18: "passive", GND_19: "passive", IFCLK: "bidirectional", RESERVED: "input", SCL: "input", SDA: "bidirectional", VCC_24: "passive", "PB0/FD0": "bidirectional", "PB1/FD1": "bidirectional", "PB2/FD2": "bidirectional", "PB3/FD3": "bidirectional", "PB4/FD4": "bidirectional", "PB5/FD5": "bidirectional", "PB6/FD6": "bidirectional", "PB7/FD7": "bidirectional", GND_33: "passive", VCC_34: "passive", GND_35: "passive", "CTL0/FLAGA": "output", "CTL1/FLAGB": "output", "CTL2/FLAGC": "output", VCC_39: "passive", "PA0/~{INT0}": "bidirectional", "PA1/~{INT1}": "bidirectional", "PA2/SLOE": "bidirectional", "PA3/WU2": "bidirectional", "PA4/FIOADDR0": "bidirectional", "PA5/FIOADDR1": "bidirectional", "PA6/PKTEND": "bidirectional", "PA7/FLAGD/~{SLCS}": "bidirectional", GND_48: "passive", "~{RESET}": "input", VCC_50: "passive", WAKEUP: "input", "PD0/FD8": "bidirectional", "PD1/FD9": "bidirectional", "PD2/FD10": "bidirectional", "PD3/FD11": "bidirectional", "PD4/FD12": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY7C68014A-56PVX";
  override referencePrefix = "U";
}

/**
 * Programmable System-on-Chip With Bluetooth Low Energy, 24/48-MHz ARM® Cortex®-M0 , 56-QFN
 *
 * KiCad symbol: `MCU_Cypress:CY8C4xx7LQI-4xx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CY8C4xx7LQI_4xx extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4xx7LQI-4xx";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 24-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, NO UDB, CAP-SENSE W/O GESTURE, NO LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4127LQI-BL453`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CY8C4127LQI_BL453 extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4127LQI-BL453";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 24-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, NO UDB, NO CAP-SENSE, NO LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4127LQI-BL473`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CY8C4127LQI_BL473 extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4127LQI-BL473";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 24-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, NO UDB, CAP-SENSE W/O GESTURE, LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4127LQI-BL483`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CY8C4127LQI_BL483 extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4127LQI-BL483";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 24-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, NO UDB, CAP-SENSE W/ GESTURE, LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4127LQI-BL493`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CY8C4127LQI_BL493 extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4127LQI-BL493";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 32KB Flash, 4KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4245AXI-M445`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm CapSense LCD.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 */
export class CY8C4245AXI_M445 extends Component.withPins({
  "P1.7/VREF": "1",
  "P2.0": "2",
  "P2.1": "3",
  "P2.2": "4",
  "P2.3": "5",
  "P2.4": "6",
  "P2.5": "7",
  "P2.6": "8",
  "P2.7": "9",
  "VSSA_10": "10",
  "VDDA_11": "11",
  "P6.0": "12",
  "P6.1": "13",
  "P6.2": "14",
  "P6.4": "15",
  "P6.5": "16",
  "VSSIO": "17",
  "P3.0": "18",
  "P3.1": "19",
  "P3.2": "20",
  "P3.3": "21",
  "P3.4": "22",
  "P3.5": "23",
  "P3.6": "24",
  "P3.7": "25",
  "VDDIO": "26",
  "P4.0": "27",
  "P4.1": "28",
  "P4.2": "29",
  "P4.3": "30",
  "P4.4": "31",
  "P4.5": "32",
  "P4.6": "33",
  "P7.0": "37",
  "P7.1": "38",
  "P0.0": "39",
  "P0.1": "40",
  "P0.2": "41",
  "P0.3": "42",
  "P0.4": "43",
  "P0.5": "44",
  "P0.6": "45",
  "P0.7": "46",
  "XRES": "47",
  "VCCD": "48",
  "VSSD": "49",
  "VDDD": "50",
  "P5.0": "51",
  "P5.1": "52",
  "P5.2": "53",
  "P5.3": "54",
  "P5.5": "55",
  "VDDA_56": "56",
  "VSSA_57": "57",
  "P1.0": "58",
  "P1.1": "59",
  "P1.2": "60",
  "P1.3": "61",
  "P1.4": "62",
  "P1.5": "63",
  "P1.6": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P1.7/VREF": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VSSA_10: "power_in", VDDA_11: "power_in", "P6.0": "bidirectional", "P6.1": "bidirectional", "P6.2": "bidirectional", "P6.4": "bidirectional", "P6.5": "bidirectional", VSSIO: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VDDIO: "power_in", "P4.0": "bidirectional", "P4.1": "bidirectional", "P4.2": "bidirectional", "P4.3": "bidirectional", "P4.4": "bidirectional", "P4.5": "bidirectional", "P4.6": "bidirectional", "P7.0": "bidirectional", "P7.1": "bidirectional", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", XRES: "input", VCCD: "power_out", VSSD: "power_in", VDDD: "power_in", "P5.0": "bidirectional", "P5.1": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "P5.5": "bidirectional", VDDA_56: "power_in", VSSA_57: "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4245AXI-M445";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 32KB Flash, 4KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4245AZI-M445`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm CapSense LCD.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class CY8C4245AZI_M445 extends Component.withPins({
  "P1.7/VREF": "1",
  "P2.0": "2",
  "P2.1": "3",
  "P2.2": "4",
  "P2.3": "5",
  "P2.4": "6",
  "P2.5": "7",
  "P2.6": "8",
  "P2.7": "9",
  "VSSA_10": "10",
  "VDDA_11": "11",
  "P6.0": "12",
  "P6.1": "13",
  "P6.2": "14",
  "P6.4": "15",
  "P6.5": "16",
  "VSSIO": "17",
  "P3.0": "18",
  "P3.1": "19",
  "P3.2": "20",
  "P3.3": "21",
  "P3.4": "22",
  "P3.5": "23",
  "P3.6": "24",
  "P3.7": "25",
  "VDDIO": "26",
  "P4.0": "27",
  "P4.1": "28",
  "P4.2": "29",
  "P4.3": "30",
  "P4.4": "31",
  "P4.5": "32",
  "P4.6": "33",
  "P7.0": "37",
  "P7.1": "38",
  "P0.0": "39",
  "P0.1": "40",
  "P0.2": "41",
  "P0.3": "42",
  "P0.4": "43",
  "P0.5": "44",
  "P0.6": "45",
  "P0.7": "46",
  "XRES": "47",
  "VCCD": "48",
  "VSSD": "49",
  "VDDD": "50",
  "P5.0": "51",
  "P5.1": "52",
  "P5.2": "53",
  "P5.3": "54",
  "P5.5": "55",
  "VDDA_56": "56",
  "VSSA_57": "57",
  "P1.0": "58",
  "P1.1": "59",
  "P1.2": "60",
  "P1.3": "61",
  "P1.4": "62",
  "P1.5": "63",
  "P1.6": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P1.7/VREF": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VSSA_10: "power_in", VDDA_11: "power_in", "P6.0": "bidirectional", "P6.1": "bidirectional", "P6.2": "bidirectional", "P6.4": "bidirectional", "P6.5": "bidirectional", VSSIO: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VDDIO: "power_in", "P4.0": "bidirectional", "P4.1": "bidirectional", "P4.2": "bidirectional", "P4.3": "bidirectional", "P4.4": "bidirectional", "P4.5": "bidirectional", "P4.6": "bidirectional", "P7.0": "bidirectional", "P7.1": "bidirectional", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", XRES: "input", VCCD: "power_out", VSSD: "power_in", VDDD: "power_in", "P5.0": "bidirectional", "P5.1": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "P5.5": "bidirectional", VDDA_56: "power_in", VSSA_57: "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4245AZI-M445";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 64KB Flash, 8KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4246AXI-M445`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm CapSense LCD.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 */
export class CY8C4246AXI_M445 extends Component.withPins({
  "P1.7/VREF": "1",
  "P2.0": "2",
  "P2.1": "3",
  "P2.2": "4",
  "P2.3": "5",
  "P2.4": "6",
  "P2.5": "7",
  "P2.6": "8",
  "P2.7": "9",
  "VSSA_10": "10",
  "VDDA_11": "11",
  "P6.0": "12",
  "P6.1": "13",
  "P6.2": "14",
  "P6.4": "15",
  "P6.5": "16",
  "VSSIO": "17",
  "P3.0": "18",
  "P3.1": "19",
  "P3.2": "20",
  "P3.3": "21",
  "P3.4": "22",
  "P3.5": "23",
  "P3.6": "24",
  "P3.7": "25",
  "VDDIO": "26",
  "P4.0": "27",
  "P4.1": "28",
  "P4.2": "29",
  "P4.3": "30",
  "P4.4": "31",
  "P4.5": "32",
  "P4.6": "33",
  "P7.0": "37",
  "P7.1": "38",
  "P0.0": "39",
  "P0.1": "40",
  "P0.2": "41",
  "P0.3": "42",
  "P0.4": "43",
  "P0.5": "44",
  "P0.6": "45",
  "P0.7": "46",
  "XRES": "47",
  "VCCD": "48",
  "VSSD": "49",
  "VDDD": "50",
  "P5.0": "51",
  "P5.1": "52",
  "P5.2": "53",
  "P5.3": "54",
  "P5.5": "55",
  "VDDA_56": "56",
  "VSSA_57": "57",
  "P1.0": "58",
  "P1.1": "59",
  "P1.2": "60",
  "P1.3": "61",
  "P1.4": "62",
  "P1.5": "63",
  "P1.6": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P1.7/VREF": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VSSA_10: "power_in", VDDA_11: "power_in", "P6.0": "bidirectional", "P6.1": "bidirectional", "P6.2": "bidirectional", "P6.4": "bidirectional", "P6.5": "bidirectional", VSSIO: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VDDIO: "power_in", "P4.0": "bidirectional", "P4.1": "bidirectional", "P4.2": "bidirectional", "P4.3": "bidirectional", "P4.4": "bidirectional", "P4.5": "bidirectional", "P4.6": "bidirectional", "P7.0": "bidirectional", "P7.1": "bidirectional", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", XRES: "input", VCCD: "power_out", VSSD: "power_in", VDDD: "power_in", "P5.0": "bidirectional", "P5.1": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "P5.5": "bidirectional", VDDA_56: "power_in", VSSA_57: "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4246AXI-M445";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 64KB Flash, 8KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4246AZI-M445`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm CapSense LCD.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class CY8C4246AZI_M445 extends Component.withPins({
  "P1.7/VREF": "1",
  "P2.0": "2",
  "P2.1": "3",
  "P2.2": "4",
  "P2.3": "5",
  "P2.4": "6",
  "P2.5": "7",
  "P2.6": "8",
  "P2.7": "9",
  "VSSA_10": "10",
  "VDDA_11": "11",
  "P6.0": "12",
  "P6.1": "13",
  "P6.2": "14",
  "P6.4": "15",
  "P6.5": "16",
  "VSSIO": "17",
  "P3.0": "18",
  "P3.1": "19",
  "P3.2": "20",
  "P3.3": "21",
  "P3.4": "22",
  "P3.5": "23",
  "P3.6": "24",
  "P3.7": "25",
  "VDDIO": "26",
  "P4.0": "27",
  "P4.1": "28",
  "P4.2": "29",
  "P4.3": "30",
  "P4.4": "31",
  "P4.5": "32",
  "P4.6": "33",
  "P7.0": "37",
  "P7.1": "38",
  "P0.0": "39",
  "P0.1": "40",
  "P0.2": "41",
  "P0.3": "42",
  "P0.4": "43",
  "P0.5": "44",
  "P0.6": "45",
  "P0.7": "46",
  "XRES": "47",
  "VCCD": "48",
  "VSSD": "49",
  "VDDD": "50",
  "P5.0": "51",
  "P5.1": "52",
  "P5.2": "53",
  "P5.3": "54",
  "P5.5": "55",
  "VDDA_56": "56",
  "VSSA_57": "57",
  "P1.0": "58",
  "P1.1": "59",
  "P1.2": "60",
  "P1.3": "61",
  "P1.4": "62",
  "P1.5": "63",
  "P1.6": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P1.7/VREF": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VSSA_10: "power_in", VDDA_11: "power_in", "P6.0": "bidirectional", "P6.1": "bidirectional", "P6.2": "bidirectional", "P6.4": "bidirectional", "P6.5": "bidirectional", VSSIO: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VDDIO: "power_in", "P4.0": "bidirectional", "P4.1": "bidirectional", "P4.2": "bidirectional", "P4.3": "bidirectional", "P4.4": "bidirectional", "P4.5": "bidirectional", "P4.6": "bidirectional", "P7.0": "bidirectional", "P7.1": "bidirectional", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", XRES: "input", VCCD: "power_out", VSSD: "power_in", VDDD: "power_in", "P5.0": "bidirectional", "P5.1": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "P5.5": "bidirectional", VDDA_56: "power_in", VSSA_57: "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4246AZI-M445";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 64KB Flash, 8KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4246AZI-M475`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm IDAC.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class CY8C4246AZI_M475 extends Component.withPins({
  "P1.7/VREF": "1",
  "P2.0": "2",
  "P2.1": "3",
  "P2.2": "4",
  "P2.3": "5",
  "P2.4": "6",
  "P2.5": "7",
  "P2.6": "8",
  "P2.7": "9",
  "VSSA_10": "10",
  "VDDA_11": "11",
  "P6.0": "12",
  "P6.1": "13",
  "P6.2": "14",
  "P6.4": "15",
  "P6.5": "16",
  "VSSIO": "17",
  "P3.0": "18",
  "P3.1": "19",
  "P3.2": "20",
  "P3.3": "21",
  "P3.4": "22",
  "P3.5": "23",
  "P3.6": "24",
  "P3.7": "25",
  "VDDIO": "26",
  "P4.0": "27",
  "P4.1": "28",
  "P4.2": "29",
  "P4.3": "30",
  "P4.4": "31",
  "P4.5": "32",
  "P4.6": "33",
  "P7.0": "37",
  "P7.1": "38",
  "P0.0": "39",
  "P0.1": "40",
  "P0.2": "41",
  "P0.3": "42",
  "P0.4": "43",
  "P0.5": "44",
  "P0.6": "45",
  "P0.7": "46",
  "XRES": "47",
  "VCCD": "48",
  "VSSD": "49",
  "VDDD": "50",
  "P5.0": "51",
  "P5.1": "52",
  "P5.2": "53",
  "P5.3": "54",
  "P5.5": "55",
  "VDDA_56": "56",
  "VSSA_57": "57",
  "P1.0": "58",
  "P1.1": "59",
  "P1.2": "60",
  "P1.3": "61",
  "P1.4": "62",
  "P1.5": "63",
  "P1.6": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P1.7/VREF": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VSSA_10: "power_in", VDDA_11: "power_in", "P6.0": "bidirectional", "P6.1": "bidirectional", "P6.2": "bidirectional", "P6.4": "bidirectional", "P6.5": "bidirectional", VSSIO: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VDDIO: "power_in", "P4.0": "bidirectional", "P4.1": "bidirectional", "P4.2": "bidirectional", "P4.3": "bidirectional", "P4.4": "bidirectional", "P4.5": "bidirectional", "P4.6": "bidirectional", "P7.0": "bidirectional", "P7.1": "bidirectional", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", XRES: "input", VCCD: "power_out", VSSD: "power_in", VDDD: "power_in", "P5.0": "bidirectional", "P5.1": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "P5.5": "bidirectional", VDDA_56: "power_in", VSSA_57: "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4246AZI-M475";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 128KB Flash, 16KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247AXI-M485`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.8mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm CapSense IDAC LCD CAN.
 * Default footprint: Package_QFP:TQFP-64_14x14mm_P0.8mm.
 */
export class CY8C4247AXI_M485 extends Component.withPins({
  "P1.7/VREF": "1",
  "P2.0": "2",
  "P2.1": "3",
  "P2.2": "4",
  "P2.3": "5",
  "P2.4": "6",
  "P2.5": "7",
  "P2.6": "8",
  "P2.7": "9",
  "VSSA_10": "10",
  "VDDA_11": "11",
  "P6.0": "12",
  "P6.1": "13",
  "P6.2": "14",
  "P6.4": "15",
  "P6.5": "16",
  "VSSIO": "17",
  "P3.0": "18",
  "P3.1": "19",
  "P3.2": "20",
  "P3.3": "21",
  "P3.4": "22",
  "P3.5": "23",
  "P3.6": "24",
  "P3.7": "25",
  "VDDIO": "26",
  "P4.0": "27",
  "P4.1": "28",
  "P4.2": "29",
  "P4.3": "30",
  "P4.4": "31",
  "P4.5": "32",
  "P4.6": "33",
  "P7.0": "37",
  "P7.1": "38",
  "P0.0": "39",
  "P0.1": "40",
  "P0.2": "41",
  "P0.3": "42",
  "P0.4": "43",
  "P0.5": "44",
  "P0.6": "45",
  "P0.7": "46",
  "XRES": "47",
  "VCCD": "48",
  "VSSD": "49",
  "VDDD": "50",
  "P5.0": "51",
  "P5.1": "52",
  "P5.2": "53",
  "P5.3": "54",
  "P5.5": "55",
  "VDDA_56": "56",
  "VSSA_57": "57",
  "P1.0": "58",
  "P1.1": "59",
  "P1.2": "60",
  "P1.3": "61",
  "P1.4": "62",
  "P1.5": "63",
  "P1.6": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P1.7/VREF": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VSSA_10: "power_in", VDDA_11: "power_in", "P6.0": "bidirectional", "P6.1": "bidirectional", "P6.2": "bidirectional", "P6.4": "bidirectional", "P6.5": "bidirectional", VSSIO: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VDDIO: "power_in", "P4.0": "bidirectional", "P4.1": "bidirectional", "P4.2": "bidirectional", "P4.3": "bidirectional", "P4.4": "bidirectional", "P4.5": "bidirectional", "P4.6": "bidirectional", "P7.0": "bidirectional", "P7.1": "bidirectional", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", XRES: "input", VCCD: "power_out", VSSD: "power_in", VDDD: "power_in", "P5.0": "bidirectional", "P5.1": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "P5.5": "bidirectional", VDDA_56: "power_in", VSSA_57: "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4247AXI-M485";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 128KB Flash, 16KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247AZI-M475`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm IDAC.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class CY8C4247AZI_M475 extends Component.withPins({
  "P1.7/VREF": "1",
  "P2.0": "2",
  "P2.1": "3",
  "P2.2": "4",
  "P2.3": "5",
  "P2.4": "6",
  "P2.5": "7",
  "P2.6": "8",
  "P2.7": "9",
  "VSSA_10": "10",
  "VDDA_11": "11",
  "P6.0": "12",
  "P6.1": "13",
  "P6.2": "14",
  "P6.4": "15",
  "P6.5": "16",
  "VSSIO": "17",
  "P3.0": "18",
  "P3.1": "19",
  "P3.2": "20",
  "P3.3": "21",
  "P3.4": "22",
  "P3.5": "23",
  "P3.6": "24",
  "P3.7": "25",
  "VDDIO": "26",
  "P4.0": "27",
  "P4.1": "28",
  "P4.2": "29",
  "P4.3": "30",
  "P4.4": "31",
  "P4.5": "32",
  "P4.6": "33",
  "P7.0": "37",
  "P7.1": "38",
  "P0.0": "39",
  "P0.1": "40",
  "P0.2": "41",
  "P0.3": "42",
  "P0.4": "43",
  "P0.5": "44",
  "P0.6": "45",
  "P0.7": "46",
  "XRES": "47",
  "VCCD": "48",
  "VSSD": "49",
  "VDDD": "50",
  "P5.0": "51",
  "P5.1": "52",
  "P5.2": "53",
  "P5.3": "54",
  "P5.5": "55",
  "VDDA_56": "56",
  "VSSA_57": "57",
  "P1.0": "58",
  "P1.1": "59",
  "P1.2": "60",
  "P1.3": "61",
  "P1.4": "62",
  "P1.5": "63",
  "P1.6": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P1.7/VREF": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VSSA_10: "power_in", VDDA_11: "power_in", "P6.0": "bidirectional", "P6.1": "bidirectional", "P6.2": "bidirectional", "P6.4": "bidirectional", "P6.5": "bidirectional", VSSIO: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VDDIO: "power_in", "P4.0": "bidirectional", "P4.1": "bidirectional", "P4.2": "bidirectional", "P4.3": "bidirectional", "P4.4": "bidirectional", "P4.5": "bidirectional", "P4.6": "bidirectional", "P7.0": "bidirectional", "P7.1": "bidirectional", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", XRES: "input", VCCD: "power_out", VSSD: "power_in", VDDD: "power_in", "P5.0": "bidirectional", "P5.1": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "P5.5": "bidirectional", VDDA_56: "power_in", VSSA_57: "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4247AZI-M475";
  override referencePrefix = "U";
}

/**
 * PSoC 4200M series, 48MHz CPU, 128KB Flash, 16KB SRAM, 64-TQFP
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247AZI-M485`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see https://www.cypress.com/file/139956/download
 * Keywords: Cypress Microcontroller Arm CapSense IDAC LCD CAN.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class CY8C4247AZI_M485 extends Component.withPins({
  "P1.7/VREF": "1",
  "P2.0": "2",
  "P2.1": "3",
  "P2.2": "4",
  "P2.3": "5",
  "P2.4": "6",
  "P2.5": "7",
  "P2.6": "8",
  "P2.7": "9",
  "VSSA_10": "10",
  "VDDA_11": "11",
  "P6.0": "12",
  "P6.1": "13",
  "P6.2": "14",
  "P6.4": "15",
  "P6.5": "16",
  "VSSIO": "17",
  "P3.0": "18",
  "P3.1": "19",
  "P3.2": "20",
  "P3.3": "21",
  "P3.4": "22",
  "P3.5": "23",
  "P3.6": "24",
  "P3.7": "25",
  "VDDIO": "26",
  "P4.0": "27",
  "P4.1": "28",
  "P4.2": "29",
  "P4.3": "30",
  "P4.4": "31",
  "P4.5": "32",
  "P4.6": "33",
  "P7.0": "37",
  "P7.1": "38",
  "P0.0": "39",
  "P0.1": "40",
  "P0.2": "41",
  "P0.3": "42",
  "P0.4": "43",
  "P0.5": "44",
  "P0.6": "45",
  "P0.7": "46",
  "XRES": "47",
  "VCCD": "48",
  "VSSD": "49",
  "VDDD": "50",
  "P5.0": "51",
  "P5.1": "52",
  "P5.2": "53",
  "P5.3": "54",
  "P5.5": "55",
  "VDDA_56": "56",
  "VSSA_57": "57",
  "P1.0": "58",
  "P1.1": "59",
  "P1.2": "60",
  "P1.3": "61",
  "P1.4": "62",
  "P1.5": "63",
  "P1.6": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P1.7/VREF": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VSSA_10: "power_in", VDDA_11: "power_in", "P6.0": "bidirectional", "P6.1": "bidirectional", "P6.2": "bidirectional", "P6.4": "bidirectional", "P6.5": "bidirectional", VSSIO: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VDDIO: "power_in", "P4.0": "bidirectional", "P4.1": "bidirectional", "P4.2": "bidirectional", "P4.3": "bidirectional", "P4.4": "bidirectional", "P4.5": "bidirectional", "P4.6": "bidirectional", "P7.0": "bidirectional", "P7.1": "bidirectional", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", XRES: "input", VCCD: "power_out", VSSD: "power_in", VDDD: "power_in", "P5.0": "bidirectional", "P5.1": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "P5.5": "bidirectional", VDDA_56: "power_in", VSSA_57: "power_in", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4247AZI-M485";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, 4 UDB, CAP-SENSE W/O GESTURE, NO LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247LQI-BL453`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CY8C4247LQI_BL453 extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4247LQI-BL453";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, 4 UDB, NO CAP-SENSE, LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247LQI-BL463`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CY8C4247LQI_BL463 extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4247LQI-BL463";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, 4 UDB, NO CAP-SENSE, NO LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247LQI-BL473`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CY8C4247LQI_BL473 extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4247LQI-BL473";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, 4 UDB, CAP-SENSE W/O GESTURES, LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247LQI-BL483`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CY8C4247LQI_BL483 extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4247LQI-BL483";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, NO UDB, CAP-SENSE W/ GESTURE, LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247LQI-BL493`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CY8C4247LQI_BL493 extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4247LQI-BL493";
  override referencePrefix = "U";
}

/**
 * ENGR_SAMPLE,  56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, NO UDB, CAP-SENSE W/ GESTURE, LCD DRIVE
 *
 * KiCad symbol: `MCU_Cypress:CY8C4247LQQ-BL483`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/file/137466/download
 * Keywords: CYPRESS PSOC BLE CY8 CY8C4 ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CY8C4247LQQ_BL483 extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CY8C4247LQQ-BL483";
  override referencePrefix = "U";
}

/**
 * Programmable Radio-on-Chip With Bluetooth Low Energy, 48-MHz ARM® Cortex®-M0 , 56-QFN
 *
 * KiCad symbol: `MCU_Cypress:CYBL10x6x-56LQxx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CYBL10x6x_56LQxx extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CYBL10x6x-56LQxx";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, NO CAP-SENSE, 1 SCB, 2 TCPWM, NO I2S, NO PWM , NO LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10161-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CYBL10161_56LQXI extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CYBL10161-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, NO CAP-SENSE, 2 SCB, 4 TCPWM, NO I2S, 4 PWM , NO LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10162-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CYBL10162_56LQXI extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CYBL10162-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, NO CAP-SENSE, 2 SCB, 4 TCPWM, 1 I2S, NO PWM , NO LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10163-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CYBL10163_56LQXI extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CYBL10163-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE, 2 SCB, 4 TCPWM, NO I2S, NO PWM , NO LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10461-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CYBL10461_56LQXI extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CYBL10461-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE, 2 SCB, 4 TCPWM, 1 I2S, NO PWM , NO LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10462-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CYBL10462_56LQXI extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CYBL10462-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE, 2 SCB, 4 TCPWM, NO I2S, NO PWM , LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10463-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CYBL10463_56LQXI extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CYBL10463-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE W/ GESTURES, 2 SCB, 4 TCPWM, NO I2S, NO PWM , NO LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10561-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CYBL10561_56LQXI extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CYBL10561-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE W/ GESTURES, 2 SCB, 4 TCPWM, I2S, 1 PWM , NO LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10562-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CYBL10562_56LQXI extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CYBL10562-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE W/ GESTURES, 2 SCB, 4 TCPWM, I2S, 1 PWM , LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10563-56LQXI`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CYBL10563_56LQXI extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CYBL10563-56LQXI";
  override referencePrefix = "U";
}

/**
 * 56-QFN, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE W/ GESTURES, 2 SCB, 4 TCPWM, I2S, 1 PWM , LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10563-56LQXQ`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH QFN.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP5.6x5.6mm.
 */
export class CYBL10563_56LQXQ extends Component.withPins({
  "VDDD_1": "1",
  "XTAL32O/P6.0": "2",
  "XTAL32I/P6.1": "3",
  "XRES": "4",
  "P4.0": "5",
  "P4.1": "6",
  "P5.0": "7",
  "P5.1": "8",
  "VSSD": "9",
  "VDDR_10": "10",
  "GANT1": "11",
  "ANT": "12",
  "GANT2": "13",
  "VDDR_14": "14",
  "VDDR_15": "15",
  "XTAL24I": "16",
  "XTAL24O": "17",
  "VDDR_18": "18",
  "P0.0": "19",
  "P0.1": "20",
  "P0.2": "21",
  "P0.3": "22",
  "VDDD_23": "23",
  "P0.4": "24",
  "P0.5": "25",
  "P0.6": "26",
  "P0.7": "27",
  "P1.0": "28",
  "P1.1": "29",
  "P1.2": "30",
  "P1.3": "31",
  "P1.4": "32",
  "P1.5": "33",
  "P1.6": "34",
  "P1.7": "35",
  "VDDA_36": "36",
  "P2.0": "37",
  "P2.1": "38",
  "P2.2": "39",
  "P2.3": "40",
  "P2.4": "41",
  "P2.5": "42",
  "P2.6": "43",
  "P2.7": "44",
  "VREF": "45",
  "VDDA_46": "46",
  "P3.0": "47",
  "P3.1": "48",
  "P3.2": "49",
  "P3.3": "50",
  "P3.4": "51",
  "P3.5": "52",
  "P3.6": "53",
  "P3.7": "54",
  "VSSA": "55",
  "VCCD": "56",
  "GND_EP": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDD_1: "power_in", "XTAL32O/P6.0": "bidirectional", "XTAL32I/P6.1": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P4.1": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", VSSD: "power_in", VDDR_10: "power_in", GANT1: "power_in", ANT: "output", GANT2: "power_in", VDDR_14: "power_in", VDDR_15: "power_in", XTAL24I: "input", XTAL24O: "output", VDDR_18: "power_in", "P0.0": "bidirectional", "P0.1": "bidirectional", "P0.2": "bidirectional", "P0.3": "bidirectional", VDDD_23: "power_in", "P0.4": "bidirectional", "P0.5": "bidirectional", "P0.6": "bidirectional", "P0.7": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P1.7": "bidirectional", VDDA_36: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "P2.6": "bidirectional", "P2.7": "bidirectional", VREF: "passive", VDDA_46: "power_in", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", "P3.3": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", VSSA: "power_in", VCCD: "power_out", GND_EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CYBL10563-56LQXQ";
  override referencePrefix = "U";
}

/**
 * 68-WLCSP, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE W/ GESTURES, 2 SCB, 4 TCPWM, I2S, 1 PWM , LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10563-68FNXIT`. Reference prefix: `U`.
 * Footprint filters: WLCSP*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH WLCSP.
 */
export class CYBL10563_68FNXIT extends Component.withPins({
  "GANT1": "11",
  "VDDA_36": "36",
  "GND_EP": "57",
  "VREF": "A1",
  "VSSA_A2": "A2",
  "P3.3": "A3",
  "P3.7": "A4",
  "VSSD_A5": "A5",
  "VSSA_A6": "A6",
  "VCCD": "A7",
  "VDDD_A8": "A8",
  "P2.3": "B1",
  "VSSA_B2": "B2",
  "P2.7": "B3",
  "P3.4": "B4",
  "P3.5": "B5",
  "P3.6": "B6",
  "XTAL32I/P6.1": "B7",
  "XTAL32O/P6.0": "B8",
  "VSSA_C1": "C1",
  "P2.2": "C2",
  "P2.6": "C3",
  "P3.0": "C4",
  "P3.1": "C5",
  "P3.2": "C6",
  "XRES": "C7",
  "P4.0": "C8",
  "P1.7": "D1",
  "VDDA_D2": "D2",
  "P2.0": "D3",
  "P2.1": "D4",
  "P2.5": "D5",
  "VSSD_D6": "D6",
  "P4.1": "D7",
  "P5.0": "D8",
  "P1.2": "E1",
  "P1.3": "E2",
  "P1.4": "E3",
  "P1.5": "E4",
  "P1.6": "E5",
  "P2.4": "E6",
  "P5.1": "E7",
  "VSSD_E8": "E8",
  "VSSD_F1": "F1",
  "P0.7": "F2",
  "P0.3": "F3",
  "P1.0": "F4",
  "P1.1": "F5",
  "VSSR_F6": "F6",
  "VSSR_F7": "F7",
  "VDDR_F8": "F8",
  "P0.6": "G1",
  "VDDD_G2": "G2",
  "P0.2": "G3",
  "VSSD_G4": "G4",
  "VSSR_G5": "G5",
  "VSSR_G6": "G6",
  "GANT2": "G7",
  "VSSR_G8": "G8",
  "P0.5": "H1",
  "P0.1": "H2",
  "XTAL24O": "H3",
  "XTAL24I": "H4",
  "VSSR_H5": "H5",
  "VSSR_H6": "H6",
  "ANT": "H7",
  "P0.4": "J1",
  "P0.0": "J2",
  "VDDR_J3": "J3",
  "VDDR_J4": "J4",
  "NC": "J7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GANT1: "power_in", VDDA_36: "power_in", GND_EP: "power_in", VREF: "passive", VSSA_A2: "power_in", "P3.3": "bidirectional", "P3.7": "bidirectional", VSSD_A5: "power_in", VSSA_A6: "power_in", VCCD: "power_out", VDDD_A8: "power_in", "P2.3": "bidirectional", VSSA_B2: "bidirectional", "P2.7": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "XTAL32I/P6.1": "bidirectional", "XTAL32O/P6.0": "bidirectional", VSSA_C1: "power_in", "P2.2": "bidirectional", "P2.6": "bidirectional", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P1.7": "bidirectional", VDDA_D2: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.5": "bidirectional", VSSD_D6: "power_in", "P4.1": "bidirectional", "P5.0": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P2.4": "bidirectional", "P5.1": "bidirectional", VSSD_E8: "power_in", VSSD_F1: "power_in", "P0.7": "bidirectional", "P0.3": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", VSSR_F6: "power_in", VSSR_F7: "power_in", VDDR_F8: "power_in", "P0.6": "bidirectional", VDDD_G2: "power_in", "P0.2": "bidirectional", VSSD_G4: "power_in", VSSR_G5: "power_in", VSSR_G6: "power_in", GANT2: "power_in", VSSR_G8: "power_in", "P0.5": "bidirectional", "P0.1": "bidirectional", XTAL24O: "output", XTAL24I: "input", VSSR_H5: "power_in", VSSR_H6: "power_in", ANT: "output", "P0.4": "bidirectional", "P0.0": "bidirectional", VDDR_J3: "power_in", VDDR_J4: "power_in", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CYBL10563-68FNXIT";
  override referencePrefix = "U";
}

/**
 * 68-WLCSP, 48-MHz ARM® Cortex®-M0, 128KB Flash, 16kB SRAM, BLE 4.1, CAP-SENSE W/ GESTURES, 2 SCB, 4 TCPWM, I2S, 1 PWM , LCD, 1MSPS 12-BIT SAR
 *
 * KiCad symbol: `MCU_Cypress:CYBL10563-68FLXIT`. Reference prefix: `U`.
 * Footprint filters: WLCSP*.
 * @see http://www.cypress.com/documentation/datasheets/cybl10x6x-family-datasheet-programmable-radio-chip-bluetooth-low-energy
 * Keywords: CYPRESS PROC BLE CY8BL ARM CORTEX M0 BLUETOOTH WLCSP.
 */
export class CYBL10563_68FLXIT extends Component.withPins({
  "GANT1": "11",
  "VDDA_36": "36",
  "GND_EP": "57",
  "VREF": "A1",
  "VSSA_A2": "A2",
  "P3.3": "A3",
  "P3.7": "A4",
  "VSSD_A5": "A5",
  "VSSA_A6": "A6",
  "VCCD": "A7",
  "VDDD_A8": "A8",
  "P2.3": "B1",
  "VSSA_B2": "B2",
  "P2.7": "B3",
  "P3.4": "B4",
  "P3.5": "B5",
  "P3.6": "B6",
  "XTAL32I/P6.1": "B7",
  "XTAL32O/P6.0": "B8",
  "VSSA_C1": "C1",
  "P2.2": "C2",
  "P2.6": "C3",
  "P3.0": "C4",
  "P3.1": "C5",
  "P3.2": "C6",
  "XRES": "C7",
  "P4.0": "C8",
  "P1.7": "D1",
  "VDDA_D2": "D2",
  "P2.0": "D3",
  "P2.1": "D4",
  "P2.5": "D5",
  "VSSD_D6": "D6",
  "P4.1": "D7",
  "P5.0": "D8",
  "P1.2": "E1",
  "P1.3": "E2",
  "P1.4": "E3",
  "P1.5": "E4",
  "P1.6": "E5",
  "P2.4": "E6",
  "P5.1": "E7",
  "VSSD_E8": "E8",
  "VSSD_F1": "F1",
  "P0.7": "F2",
  "P0.3": "F3",
  "P1.0": "F4",
  "P1.1": "F5",
  "VSSR_F6": "F6",
  "VSSR_F7": "F7",
  "VDDR_F8": "F8",
  "P0.6": "G1",
  "VDDD_G2": "G2",
  "P0.2": "G3",
  "VSSD_G4": "G4",
  "VSSR_G5": "G5",
  "VSSR_G6": "G6",
  "GANT2": "G7",
  "VSSR_G8": "G8",
  "P0.5": "H1",
  "P0.1": "H2",
  "XTAL24O": "H3",
  "XTAL24I": "H4",
  "VSSR_H5": "H5",
  "VSSR_H6": "H6",
  "ANT": "H7",
  "P0.4": "J1",
  "P0.0": "J2",
  "VDDR_J3": "J3",
  "VDDR_J4": "J4",
  "NC": "J7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GANT1: "power_in", VDDA_36: "power_in", GND_EP: "power_in", VREF: "passive", VSSA_A2: "power_in", "P3.3": "bidirectional", "P3.7": "bidirectional", VSSD_A5: "power_in", VSSA_A6: "power_in", VCCD: "power_out", VDDD_A8: "power_in", "P2.3": "bidirectional", VSSA_B2: "bidirectional", "P2.7": "bidirectional", "P3.4": "bidirectional", "P3.5": "bidirectional", "P3.6": "bidirectional", "XTAL32I/P6.1": "bidirectional", "XTAL32O/P6.0": "bidirectional", VSSA_C1: "power_in", "P2.2": "bidirectional", "P2.6": "bidirectional", "P3.0": "bidirectional", "P3.1": "bidirectional", "P3.2": "bidirectional", XRES: "input", "P4.0": "bidirectional", "P1.7": "bidirectional", VDDA_D2: "power_in", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.5": "bidirectional", VSSD_D6: "power_in", "P4.1": "bidirectional", "P5.0": "bidirectional", "P1.2": "bidirectional", "P1.3": "bidirectional", "P1.4": "bidirectional", "P1.5": "bidirectional", "P1.6": "bidirectional", "P2.4": "bidirectional", "P5.1": "bidirectional", VSSD_E8: "power_in", VSSD_F1: "power_in", "P0.7": "bidirectional", "P0.3": "bidirectional", "P1.0": "bidirectional", "P1.1": "bidirectional", VSSR_F6: "power_in", VSSR_F7: "power_in", VDDR_F8: "power_in", "P0.6": "bidirectional", VDDD_G2: "power_in", "P0.2": "bidirectional", VSSD_G4: "power_in", VSSR_G5: "power_in", VSSR_G6: "power_in", GANT2: "power_in", VSSR_G8: "power_in", "P0.5": "bidirectional", "P0.1": "bidirectional", XTAL24O: "output", XTAL24I: "input", VSSR_H5: "power_in", VSSR_H6: "power_in", ANT: "output", "P0.4": "bidirectional", "P0.0": "bidirectional", VDDR_J3: "power_in", VDDR_J4: "power_in", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "MCU_Cypress:CYBL10563-68FLXIT";
  override referencePrefix = "U";
}
