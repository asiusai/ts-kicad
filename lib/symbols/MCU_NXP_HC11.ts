// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * HC11 Microcontroller
 *
 * KiCad symbol: `MCU_NXP_HC11:68HC11`. Reference prefix: `U`.
 * Keywords: MCU Microcontroller HC11.
 */
export class _68HC11 extends Component.withPins({
  "PAI/PA7": "1",
  "OC2/PA6": "2",
  "OC3/PA5": "3",
  "OC4/PA4": "4",
  "OC5/PA3": "5",
  "IC1/PA2": "6",
  "IC2/PA1": "7",
  "IC3/PA0": "8",
  "A15/PB7": "9",
  "PB6": "10",
  "PB5": "11",
  "PB4": "12",
  "PB3": "13",
  "PB2": "14",
  "PB1": "15",
  "A8/PB0": "16",
  "PE0": "17",
  "PE1": "18",
  "PE2": "19",
  "PE3": "20",
  "VRL": "21",
  "VRH": "22",
  "GND": "23",
  "MODB": "24",
  "MODA": "25",
  "AS": "26",
  "E": "27",
  "R/W": "28",
  "EXTAL": "29",
  "XTAL": "30",
  "AD0/PC0": "31",
  "PC1": "32",
  "PC2": "33",
  "PC3": "34",
  "PC4": "35",
  "PC5": "36",
  "PC6": "37",
  "AD7/PC7": "38",
  "RESET": "39",
  "XIRQ": "40",
  "IRQ": "41",
  "PD0/RX": "42",
  "PD1/TX": "43",
  "PD2/MISO": "44",
  "PD3/MOSI": "45",
  "PD4/SCLK": "46",
  "PD5/SS-": "47",
  "VCC": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PAI/PA7": "input", "OC2/PA6": "output", "OC3/PA5": "output", "OC4/PA4": "output", "OC5/PA3": "output", "IC1/PA2": "input", "IC2/PA1": "input", "IC3/PA0": "input", "A15/PB7": "output", PB6: "output", PB5: "output", PB4: "output", PB3: "output", PB2: "output", PB1: "output", "A8/PB0": "output", PE0: "input", PE1: "input", PE2: "input", PE3: "input", VRL: "passive", VRH: "passive", GND: "power_in", MODB: "input", MODA: "input", AS: "output", E: "output", "R/W": "output", EXTAL: "input", XTAL: "output", "AD0/PC0": "tri_state", PC1: "tri_state", PC2: "tri_state", PC3: "tri_state", PC4: "tri_state", PC5: "tri_state", PC6: "tri_state", "AD7/PC7": "tri_state", RESET: "input", XIRQ: "input", IRQ: "input", "PD0/RX": "input", "PD1/TX": "input", "PD2/MISO": "input", "PD3/MOSI": "input", "PD4/SCLK": "input", "PD5/SS-": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_HC11:68HC11";
  override referencePrefix = "U";
}

/**
 * HC11 Microcontroller
 *
 * KiCad symbol: `MCU_NXP_HC11:68HC11A8`. Reference prefix: `U`.
 * Keywords: MCU Microcontroller HC11.
 */
export class _68HC11A8 extends Component.withPins({
  "PAI/PA7": "1",
  "OC2/PA6": "2",
  "OC3/PA5": "3",
  "OC4/PA4": "4",
  "OC5/PA3": "5",
  "IC1/PA2": "6",
  "IC2/PA1": "7",
  "IC3/PA0": "8",
  "A15/PB7": "9",
  "PB6": "10",
  "PB5": "11",
  "PB4": "12",
  "PB3": "13",
  "PB2": "14",
  "PB1": "15",
  "A8/PB0": "16",
  "PE0": "17",
  "PE1": "18",
  "PE2": "19",
  "PE3": "20",
  "VRL": "21",
  "VRH": "22",
  "GND": "23",
  "MODB": "24",
  "MODA": "25",
  "AS": "26",
  "E": "27",
  "R/W": "28",
  "EXTAL": "29",
  "XTAL": "30",
  "AD0/PC0": "31",
  "PC1": "32",
  "PC2": "33",
  "PC3": "34",
  "PC4": "35",
  "PC5": "36",
  "PC6": "37",
  "AD7/PC7": "38",
  "RESET": "39",
  "XIRQ": "40",
  "IRQ": "41",
  "PD0/RX": "42",
  "PD1/TX": "43",
  "PD2/MISO": "44",
  "PD3/MOSI": "45",
  "PD4/SCLK": "46",
  "PD5/SS-": "47",
  "VCC": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PAI/PA7": "input", "OC2/PA6": "output", "OC3/PA5": "output", "OC4/PA4": "output", "OC5/PA3": "output", "IC1/PA2": "input", "IC2/PA1": "input", "IC3/PA0": "input", "A15/PB7": "output", PB6: "output", PB5: "output", PB4: "output", PB3: "output", PB2: "output", PB1: "output", "A8/PB0": "output", PE0: "input", PE1: "input", PE2: "input", PE3: "input", VRL: "passive", VRH: "passive", GND: "power_in", MODB: "input", MODA: "input", AS: "output", E: "output", "R/W": "output", EXTAL: "input", XTAL: "output", "AD0/PC0": "tri_state", PC1: "tri_state", PC2: "tri_state", PC3: "tri_state", PC4: "tri_state", PC5: "tri_state", PC6: "tri_state", "AD7/PC7": "tri_state", RESET: "input", XIRQ: "input", IRQ: "input", "PD0/RX": "input", "PD1/TX": "input", "PD2/MISO": "input", "PD3/MOSI": "input", "PD4/SCLK": "input", "PD5/SS-": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_HC11:68HC11A8";
  override referencePrefix = "U";
}

/**
 * HC11 Microcontroller
 *
 * KiCad symbol: `MCU_NXP_HC11:68HC11F1`. Reference prefix: `U`.
 * @see https://www.nxp.com/docs/en/data-sheet/MC68HC11FTS.pdf
 * Keywords: MCU Microcontroller HC11.
 */
export class _68HC11F1 extends Component.withPins({
  "VSS": "1",
  "MODB/STBY": "2",
  "MODA/LR": "3",
  "E": "4",
  "R/W": "5",
  "EXTAL": "6",
  "XTAL": "7",
  "4XOUT": "8",
  "D0/PC0": "9",
  "PC1": "10",
  "PC2": "11",
  "PC3": "12",
  "PC4": "13",
  "PC5": "14",
  "PC6": "15",
  "D7/PC7": "16",
  "RESET": "17",
  "XIRQ": "18",
  "IRQ": "19",
  "CSPROG/PG7": "20",
  "CSGEN/PG6": "21",
  "CSIO1/PG5": "22",
  "CSIO2/PG4": "23",
  "PG3": "24",
  "PG2": "25",
  "PG1": "26",
  "PG0": "27",
  "PD0/RX": "28",
  "PD1/TX": "29",
  "PD2/MISO": "30",
  "PD3/MOSI": "31",
  "PD4/SCLK": "32",
  "PD5/SS-": "33",
  "VDD": "34",
  "PA1/PA7": "35",
  "OC2/PA6": "36",
  "OC3/PA5": "37",
  "OC4/PA4": "38",
  "OC5/PA3": "39",
  "IC1/PA2": "40",
  "IC2/PA1": "41",
  "IC3/PA0": "42",
  "A15/PB7": "43",
  "PB6": "44",
  "PB5": "45",
  "PB4": "46",
  "PB3": "47",
  "PB2": "48",
  "PB1": "49",
  "A8/PB0": "50",
  "A7/PF7": "51",
  "PF6": "52",
  "PF5": "53",
  "PF4": "54",
  "PF3": "55",
  "PF2": "56",
  "PF1": "57",
  "A0/PF0": "58",
  "PE0": "59",
  "PE4": "60",
  "PE1": "61",
  "PE5": "62",
  "PE2": "63",
  "PE6": "64",
  "PE3": "65",
  "PE7": "66",
  "VRL": "67",
  "VRH": "68",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", "MODB/STBY": "input", "MODA/LR": "input", E: "output", "R/W": "output", EXTAL: "input", XTAL: "output", "4XOUT": "output", "D0/PC0": "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "input", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", "D7/PC7": "bidirectional", RESET: "input", XIRQ: "input", IRQ: "input", "CSPROG/PG7": "bidirectional", "CSGEN/PG6": "bidirectional", "CSIO1/PG5": "bidirectional", "CSIO2/PG4": "bidirectional", PG3: "input", PG2: "bidirectional", PG1: "bidirectional", PG0: "bidirectional", "PD0/RX": "bidirectional", "PD1/TX": "bidirectional", "PD2/MISO": "bidirectional", "PD3/MOSI": "bidirectional", "PD4/SCLK": "bidirectional", "PD5/SS-": "bidirectional", VDD: "power_in", "PA1/PA7": "bidirectional", "OC2/PA6": "bidirectional", "OC3/PA5": "bidirectional", "OC4/PA4": "output", "OC5/PA3": "bidirectional", "IC1/PA2": "bidirectional", "IC2/PA1": "bidirectional", "IC3/PA0": "bidirectional", "A15/PB7": "output", PB6: "output", PB5: "output", PB4: "output", PB3: "output", PB2: "output", PB1: "tri_state", "A8/PB0": "tri_state", "A7/PF7": "bidirectional", PF6: "bidirectional", PF5: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", PF2: "bidirectional", PF1: "bidirectional", "A0/PF0": "bidirectional", PE0: "input", PE4: "input", PE1: "input", PE5: "input", PE2: "input", PE6: "input", PE3: "input", PE7: "input", VRL: "passive", VRH: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_HC11:68HC11F1";
  override referencePrefix = "U";
}

/**
 * HC11 Microcontroller, PLCC-52
 *
 * KiCad symbol: `MCU_NXP_HC11:68HC11_PLCC`. Reference prefix: `U`.
 * Keywords: MCU Microcontroller HC11.
 */
export class _68HC11_PLCC extends Component.withPins({
  "VSS": "1",
  "MODB": "2",
  "MODA": "3",
  "AS": "4",
  "E": "5",
  "R/W": "6",
  "EXTAL": "7",
  "XTAL": "8",
  "AD0/PC0": "9",
  "AD1/PC1": "10",
  "AD2/PC2": "11",
  "AD3/PC3": "12",
  "AD4/PC4": "13",
  "AD5/PC5": "14",
  "AD6/PC6": "15",
  "AD7/PC7": "16",
  "RESET": "17",
  "XIRQ": "18",
  "IRQ": "19",
  "PD0/RX": "20",
  "PD1/TX": "21",
  "PD2": "22",
  "PD3": "23",
  "PD4": "24",
  "PD5": "25",
  "VDD": "26",
  "PA1/PA7": "27",
  "OC2/PA6": "28",
  "OC3/PA5": "29",
  "OC4/PA4": "30",
  "OC5/PA3": "31",
  "IC1/PA2": "32",
  "IC2/PA1": "33",
  "IC3/PA0": "34",
  "A15/PB7": "35",
  "PB6": "36",
  "PB5": "37",
  "PB4": "38",
  "PB3": "39",
  "PB2": "40",
  "PB1": "41",
  "A8/PB0": "42",
  "PE0": "43",
  "PE4": "44",
  "PE1": "45",
  "PE5": "46",
  "PE2": "47",
  "PE6": "48",
  "PE3": "49",
  "PE7": "50",
  "VRL": "51",
  "VRH": "52",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", MODB: "input", MODA: "input", AS: "output", E: "output", "R/W": "output", EXTAL: "input", XTAL: "output", "AD0/PC0": "tri_state", "AD1/PC1": "tri_state", "AD2/PC2": "tri_state", "AD3/PC3": "tri_state", "AD4/PC4": "tri_state", "AD5/PC5": "tri_state", "AD6/PC6": "tri_state", "AD7/PC7": "tri_state", RESET: "input", XIRQ: "input", IRQ: "input", "PD0/RX": "bidirectional", "PD1/TX": "bidirectional", PD2: "bidirectional", PD3: "input", PD4: "bidirectional", PD5: "bidirectional", VDD: "power_in", "PA1/PA7": "input", "OC2/PA6": "output", "OC3/PA5": "output", "OC4/PA4": "output", "OC5/PA3": "output", "IC1/PA2": "input", "IC2/PA1": "input", "IC3/PA0": "input", "A15/PB7": "output", PB6: "output", PB5: "output", PB4: "output", PB3: "output", PB2: "output", PB1: "output", "A8/PB0": "output", PE0: "input", PE4: "input", PE1: "input", PE5: "input", PE2: "input", PE6: "input", PE3: "input", PE7: "input", VRL: "passive", VRH: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_HC11:68HC11_PLCC";
  override referencePrefix = "U";
}

/**
 * HC11 Microcontroller, PLCC-44
 *
 * KiCad symbol: `MCU_NXP_HC11:68HC711_PLCC`. Reference prefix: `U`.
 * Keywords: MCU Microcontroller HC11.
 */
export class _68HC711_PLCC extends Component.withPins({
  "EVSS": "1",
  "VSS": "2",
  "PC0": "3",
  "PC1": "4",
  "PC2": "5",
  "PC3": "6",
  "PC4": "7",
  "PC5": "8",
  "PC6": "9",
  "PC7": "10",
  "XIRQ/VPP": "11",
  "PD7-R/W": "12",
  "PD6-AS": "13",
  "RESET": "14",
  "IRQ/CE": "15",
  "PD0/RX": "16",
  "PD1/TX": "17",
  "PD2": "18",
  "PD3": "19",
  "PD4": "20",
  "PD5": "21",
  "VDD": "22",
  "PA1/PA7": "23",
  "OC2/PA6": "24",
  "OC3/PA5": "25",
  "OC4/PA4": "26",
  "OC5/PA3": "27",
  "IC1/PA2": "28",
  "IC2/PA1": "29",
  "IC3/PA0": "30",
  "PB7/OE": "32",
  "PB6": "33",
  "PB5": "34",
  "PB4": "35",
  "PB3": "36",
  "PB2": "37",
  "PB1": "38",
  "PB0": "39",
  "MODB": "40",
  "MODA": "41",
  "E": "42",
  "EXTAL": "43",
  "XTAL": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EVSS: "power_in", VSS: "power_in", PC0: "input", PC1: "input", PC2: "input", PC3: "input", PC4: "input", PC5: "input", PC6: "input", PC7: "input", "XIRQ/VPP": "input", "PD7-R/W": "output", "PD6-AS": "input", RESET: "input", "IRQ/CE": "input", "PD0/RX": "input", "PD1/TX": "input", PD2: "input", PD3: "input", PD4: "input", PD5: "input", VDD: "power_in", "PA1/PA7": "input", "OC2/PA6": "output", "OC3/PA5": "output", "OC4/PA4": "output", "OC5/PA3": "output", "IC1/PA2": "input", "IC2/PA1": "input", "IC3/PA0": "input", "PB7/OE": "output", PB6: "output", PB5: "output", PB4: "output", PB3: "output", PB2: "output", PB1: "output", PB0: "output", MODB: "input", MODA: "input", E: "output", EXTAL: "input", XTAL: "output", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_HC11:68HC711_PLCC";
  override referencePrefix = "U";
}

/**
 * 8K ROM, 256B RAM, 512B EEPROM
 *
 * KiCad symbol: `MCU_NXP_HC11:MC68HC11A8CC`. Reference prefix: `U`.
 * Keywords: HC11 MCU Microcotroller.
 */
export class MC68HC11A8CC extends Component.withPins({
  "VSS": "1",
  "MODB": "2",
  "MODA": "3",
  "AS": "4",
  "E": "5",
  "R/W": "6",
  "EXTAL": "7",
  "XTAL": "8",
  "AD0/PC0": "9",
  "AD1/PC1": "10",
  "AD2/PC2": "11",
  "AD3/PC3": "12",
  "AD4/PC4": "13",
  "AD5/PC5": "14",
  "AD6/PC6": "15",
  "AD7/PC7": "16",
  "~{RESET}": "17",
  "~{XIRQ}": "18",
  "~{IRQ}": "19",
  "RXD/PD0": "20",
  "TXD/PD1": "21",
  "MIS/PD2": "22",
  "MOS/PD3": "23",
  "SCK/PD4": "24",
  "SS/PD5": "25",
  "VDD": "26",
  "PA7": "27",
  "PA6": "28",
  "PA5": "29",
  "PA4": "30",
  "PA3": "31",
  "PA2": "32",
  "PA1": "33",
  "PA0": "34",
  "A15/PB7": "35",
  "A14/PB6": "36",
  "A13/PB5": "37",
  "A12/PB4": "38",
  "A11/PB3": "39",
  "A10/PB2": "40",
  "A9/PB1": "41",
  "A8/PB0": "42",
  "PE0": "43",
  "PE4": "44",
  "PE1": "45",
  "PE5": "46",
  "PE2": "47",
  "PE6": "48",
  "PE3": "49",
  "PE7": "50",
  "VRL": "51",
  "VRH": "52",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", MODB: "input", MODA: "bidirectional", AS: "output", E: "output", "R/W": "output", EXTAL: "input", XTAL: "output", "AD0/PC0": "bidirectional", "AD1/PC1": "bidirectional", "AD2/PC2": "bidirectional", "AD3/PC3": "bidirectional", "AD4/PC4": "bidirectional", "AD5/PC5": "bidirectional", "AD6/PC6": "bidirectional", "AD7/PC7": "bidirectional", "~{RESET}": "input", "~{XIRQ}": "input", "~{IRQ}": "input", "RXD/PD0": "bidirectional", "TXD/PD1": "bidirectional", "MIS/PD2": "bidirectional", "MOS/PD3": "bidirectional", "SCK/PD4": "bidirectional", "SS/PD5": "bidirectional", VDD: "power_in", PA7: "bidirectional", PA6: "output", PA5: "output", PA4: "output", PA3: "output", PA2: "input", PA1: "input", PA0: "input", "A15/PB7": "output", "A14/PB6": "output", "A13/PB5": "output", "A12/PB4": "output", "A11/PB3": "output", "A10/PB2": "output", "A9/PB1": "output", "A8/PB0": "output", PE0: "input", PE4: "input", PE1: "input", PE5: "input", PE2: "input", PE6: "input", PE3: "input", PE7: "input", VRL: "input", VRH: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_HC11:MC68HC11A8CC";
  override referencePrefix = "U";
}

/**
 * ROMless, 256B RAM
 *
 * KiCad symbol: `MCU_NXP_HC11:MC68HC11A0CC`. Reference prefix: `U`.
 * Keywords: HC11 MCU Microcotroller.
 */
export class MC68HC11A0CC extends Component.withPins({
  "VSS": "1",
  "MODB": "2",
  "MODA": "3",
  "AS": "4",
  "E": "5",
  "R/W": "6",
  "EXTAL": "7",
  "XTAL": "8",
  "AD0/PC0": "9",
  "AD1/PC1": "10",
  "AD2/PC2": "11",
  "AD3/PC3": "12",
  "AD4/PC4": "13",
  "AD5/PC5": "14",
  "AD6/PC6": "15",
  "AD7/PC7": "16",
  "~{RESET}": "17",
  "~{XIRQ}": "18",
  "~{IRQ}": "19",
  "RXD/PD0": "20",
  "TXD/PD1": "21",
  "MIS/PD2": "22",
  "MOS/PD3": "23",
  "SCK/PD4": "24",
  "SS/PD5": "25",
  "VDD": "26",
  "PA7": "27",
  "PA6": "28",
  "PA5": "29",
  "PA4": "30",
  "PA3": "31",
  "PA2": "32",
  "PA1": "33",
  "PA0": "34",
  "A15/PB7": "35",
  "A14/PB6": "36",
  "A13/PB5": "37",
  "A12/PB4": "38",
  "A11/PB3": "39",
  "A10/PB2": "40",
  "A9/PB1": "41",
  "A8/PB0": "42",
  "PE0": "43",
  "PE4": "44",
  "PE1": "45",
  "PE5": "46",
  "PE2": "47",
  "PE6": "48",
  "PE3": "49",
  "PE7": "50",
  "VRL": "51",
  "VRH": "52",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", MODB: "input", MODA: "bidirectional", AS: "output", E: "output", "R/W": "output", EXTAL: "input", XTAL: "output", "AD0/PC0": "bidirectional", "AD1/PC1": "bidirectional", "AD2/PC2": "bidirectional", "AD3/PC3": "bidirectional", "AD4/PC4": "bidirectional", "AD5/PC5": "bidirectional", "AD6/PC6": "bidirectional", "AD7/PC7": "bidirectional", "~{RESET}": "input", "~{XIRQ}": "input", "~{IRQ}": "input", "RXD/PD0": "bidirectional", "TXD/PD1": "bidirectional", "MIS/PD2": "bidirectional", "MOS/PD3": "bidirectional", "SCK/PD4": "bidirectional", "SS/PD5": "bidirectional", VDD: "power_in", PA7: "bidirectional", PA6: "output", PA5: "output", PA4: "output", PA3: "output", PA2: "input", PA1: "input", PA0: "input", "A15/PB7": "output", "A14/PB6": "output", "A13/PB5": "output", "A12/PB4": "output", "A11/PB3": "output", "A10/PB2": "output", "A9/PB1": "output", "A8/PB0": "output", PE0: "input", PE4: "input", PE1: "input", PE5: "input", PE2: "input", PE6: "input", PE3: "input", PE7: "input", VRL: "input", VRH: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_HC11:MC68HC11A0CC";
  override referencePrefix = "U";
}

/**
 * ROMLess, 256B RAM, 512B EEPROM
 *
 * KiCad symbol: `MCU_NXP_HC11:MC68HC11A1CC`. Reference prefix: `U`.
 * Keywords: HC11 MCU Microcotroller.
 */
export class MC68HC11A1CC extends Component.withPins({
  "VSS": "1",
  "MODB": "2",
  "MODA": "3",
  "AS": "4",
  "E": "5",
  "R/W": "6",
  "EXTAL": "7",
  "XTAL": "8",
  "AD0/PC0": "9",
  "AD1/PC1": "10",
  "AD2/PC2": "11",
  "AD3/PC3": "12",
  "AD4/PC4": "13",
  "AD5/PC5": "14",
  "AD6/PC6": "15",
  "AD7/PC7": "16",
  "~{RESET}": "17",
  "~{XIRQ}": "18",
  "~{IRQ}": "19",
  "RXD/PD0": "20",
  "TXD/PD1": "21",
  "MIS/PD2": "22",
  "MOS/PD3": "23",
  "SCK/PD4": "24",
  "SS/PD5": "25",
  "VDD": "26",
  "PA7": "27",
  "PA6": "28",
  "PA5": "29",
  "PA4": "30",
  "PA3": "31",
  "PA2": "32",
  "PA1": "33",
  "PA0": "34",
  "A15/PB7": "35",
  "A14/PB6": "36",
  "A13/PB5": "37",
  "A12/PB4": "38",
  "A11/PB3": "39",
  "A10/PB2": "40",
  "A9/PB1": "41",
  "A8/PB0": "42",
  "PE0": "43",
  "PE4": "44",
  "PE1": "45",
  "PE5": "46",
  "PE2": "47",
  "PE6": "48",
  "PE3": "49",
  "PE7": "50",
  "VRL": "51",
  "VRH": "52",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", MODB: "input", MODA: "bidirectional", AS: "output", E: "output", "R/W": "output", EXTAL: "input", XTAL: "output", "AD0/PC0": "bidirectional", "AD1/PC1": "bidirectional", "AD2/PC2": "bidirectional", "AD3/PC3": "bidirectional", "AD4/PC4": "bidirectional", "AD5/PC5": "bidirectional", "AD6/PC6": "bidirectional", "AD7/PC7": "bidirectional", "~{RESET}": "input", "~{XIRQ}": "input", "~{IRQ}": "input", "RXD/PD0": "bidirectional", "TXD/PD1": "bidirectional", "MIS/PD2": "bidirectional", "MOS/PD3": "bidirectional", "SCK/PD4": "bidirectional", "SS/PD5": "bidirectional", VDD: "power_in", PA7: "bidirectional", PA6: "output", PA5: "output", PA4: "output", PA3: "output", PA2: "input", PA1: "input", PA0: "input", "A15/PB7": "output", "A14/PB6": "output", "A13/PB5": "output", "A12/PB4": "output", "A11/PB3": "output", "A10/PB2": "output", "A9/PB1": "output", "A8/PB0": "output", PE0: "input", PE4: "input", PE1: "input", PE5: "input", PE2: "input", PE6: "input", PE3: "input", PE7: "input", VRL: "input", VRH: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_HC11:MC68HC11A1CC";
  override referencePrefix = "U";
}

/**
 * 8K ROM, 256B RAM, 512B EEPROM
 *
 * KiCad symbol: `MCU_NXP_HC11:MC68HC11A7CC`. Reference prefix: `U`.
 * Keywords: HC11 MCU Microcotroller.
 */
export class MC68HC11A7CC extends Component.withPins({
  "VSS": "1",
  "MODB": "2",
  "MODA": "3",
  "AS": "4",
  "E": "5",
  "R/W": "6",
  "EXTAL": "7",
  "XTAL": "8",
  "AD0/PC0": "9",
  "AD1/PC1": "10",
  "AD2/PC2": "11",
  "AD3/PC3": "12",
  "AD4/PC4": "13",
  "AD5/PC5": "14",
  "AD6/PC6": "15",
  "AD7/PC7": "16",
  "~{RESET}": "17",
  "~{XIRQ}": "18",
  "~{IRQ}": "19",
  "RXD/PD0": "20",
  "TXD/PD1": "21",
  "MIS/PD2": "22",
  "MOS/PD3": "23",
  "SCK/PD4": "24",
  "SS/PD5": "25",
  "VDD": "26",
  "PA7": "27",
  "PA6": "28",
  "PA5": "29",
  "PA4": "30",
  "PA3": "31",
  "PA2": "32",
  "PA1": "33",
  "PA0": "34",
  "A15/PB7": "35",
  "A14/PB6": "36",
  "A13/PB5": "37",
  "A12/PB4": "38",
  "A11/PB3": "39",
  "A10/PB2": "40",
  "A9/PB1": "41",
  "A8/PB0": "42",
  "PE0": "43",
  "PE4": "44",
  "PE1": "45",
  "PE5": "46",
  "PE2": "47",
  "PE6": "48",
  "PE3": "49",
  "PE7": "50",
  "VRL": "51",
  "VRH": "52",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", MODB: "input", MODA: "bidirectional", AS: "output", E: "output", "R/W": "output", EXTAL: "input", XTAL: "output", "AD0/PC0": "bidirectional", "AD1/PC1": "bidirectional", "AD2/PC2": "bidirectional", "AD3/PC3": "bidirectional", "AD4/PC4": "bidirectional", "AD5/PC5": "bidirectional", "AD6/PC6": "bidirectional", "AD7/PC7": "bidirectional", "~{RESET}": "input", "~{XIRQ}": "input", "~{IRQ}": "input", "RXD/PD0": "bidirectional", "TXD/PD1": "bidirectional", "MIS/PD2": "bidirectional", "MOS/PD3": "bidirectional", "SCK/PD4": "bidirectional", "SS/PD5": "bidirectional", VDD: "power_in", PA7: "bidirectional", PA6: "output", PA5: "output", PA4: "output", PA3: "output", PA2: "input", PA1: "input", PA0: "input", "A15/PB7": "output", "A14/PB6": "output", "A13/PB5": "output", "A12/PB4": "output", "A11/PB3": "output", "A10/PB2": "output", "A9/PB1": "output", "A8/PB0": "output", PE0: "input", PE4: "input", PE1: "input", PE5: "input", PE2: "input", PE6: "input", PE3: "input", PE7: "input", VRL: "input", VRH: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_HC11:MC68HC11A7CC";
  override referencePrefix = "U";
}

/**
 * ROMless, 1K RAM, 512B EEPROM, PLCC-68
 *
 * KiCad symbol: `MCU_NXP_HC11:MC68HC11F1CC`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see http://cache.freescale.com/files/microcontrollers/doc/data_sheet/MC68HC11F1.pdf
 * Keywords: HC11 MCU Microcontroller.
 * Default footprint: Package_LCC:PLCC-68.
 */
export class MC68HC11F1CC extends Component.withPins({
  "VSS": "1",
  "MODB": "2",
  "MODA": "3",
  "E": "4",
  "R/W": "5",
  "EXTAL": "6",
  "XTAL": "7",
  "4XOUT": "8",
  "D0/PC0": "9",
  "D1/PC1": "10",
  "D2/PC2": "11",
  "D3/PC3": "12",
  "D4/PC4": "13",
  "D5/PC5": "14",
  "D6/PC6": "15",
  "D7/PC7": "16",
  "~{RESET}": "17",
  "~{XIRQ}": "18",
  "~{IRQ}": "19",
  "CSPROG/PG7": "20",
  "CSGEN/PG6": "21",
  "CSIO1/PG5": "22",
  "CSIO2/PG4": "23",
  "PG3": "24",
  "PG2": "25",
  "PG1": "26",
  "PG0": "27",
  "RXD/PD0": "28",
  "TXD/PD1": "29",
  "MIS/PD2": "30",
  "MOS/PD3": "31",
  "SCK/PD4": "32",
  "SS/PD5": "33",
  "VDD": "34",
  "PA7": "35",
  "PA6": "36",
  "PA5": "37",
  "PA4": "38",
  "PA3": "39",
  "PA2": "40",
  "PA1": "41",
  "PA0": "42",
  "A15/PB7": "43",
  "A14/PB6": "44",
  "A13/PB5": "45",
  "A12/PB4": "46",
  "A11/PB3": "47",
  "A10/PB2": "48",
  "A9/PB1": "49",
  "A8/PB0": "50",
  "A7/PF7": "51",
  "A6/PF6": "52",
  "A5/PF5": "53",
  "A4/PF4": "54",
  "A3/PF3": "55",
  "A2/PF2": "56",
  "A1/PF1": "57",
  "A0/PF0": "58",
  "PE0": "59",
  "PE4": "60",
  "PE1": "61",
  "PE5": "62",
  "PE2": "63",
  "PE6": "64",
  "PE3": "65",
  "PE7": "66",
  "VRL": "67",
  "VRH": "68",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", MODB: "input", MODA: "bidirectional", E: "output", "R/W": "output", EXTAL: "output", XTAL: "input", "4XOUT": "output", "D0/PC0": "bidirectional", "D1/PC1": "bidirectional", "D2/PC2": "bidirectional", "D3/PC3": "bidirectional", "D4/PC4": "bidirectional", "D5/PC5": "bidirectional", "D6/PC6": "bidirectional", "D7/PC7": "bidirectional", "~{RESET}": "input", "~{XIRQ}": "input", "~{IRQ}": "input", "CSPROG/PG7": "bidirectional", "CSGEN/PG6": "bidirectional", "CSIO1/PG5": "bidirectional", "CSIO2/PG4": "bidirectional", PG3: "bidirectional", PG2: "bidirectional", PG1: "bidirectional", PG0: "bidirectional", "RXD/PD0": "bidirectional", "TXD/PD1": "bidirectional", "MIS/PD2": "bidirectional", "MOS/PD3": "bidirectional", "SCK/PD4": "bidirectional", "SS/PD5": "bidirectional", VDD: "power_in", PA7: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "A15/PB7": "output", "A14/PB6": "output", "A13/PB5": "output", "A12/PB4": "output", "A11/PB3": "output", "A10/PB2": "output", "A9/PB1": "output", "A8/PB0": "output", "A7/PF7": "output", "A6/PF6": "output", "A5/PF5": "output", "A4/PF4": "output", "A3/PF3": "output", "A2/PF2": "output", "A1/PF1": "output", "A0/PF0": "output", PE0: "input", PE4: "input", PE1: "input", PE5: "input", PE2: "input", PE6: "input", PE3: "input", PE7: "input", VRL: "input", VRH: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_HC11:MC68HC11F1CC";
  override referencePrefix = "U";
}
