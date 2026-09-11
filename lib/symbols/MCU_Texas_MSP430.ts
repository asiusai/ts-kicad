// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 32KB Flash, 4KB RAM, MSP430 core with integrated CC1101 radio transceiver, VQFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:CC430F5137xRGZ`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*7x7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/cc430f5137.pdf
 * Keywords: TI MSP430 CC430 16-bit mixed signal microcontroller CC1101.
 * Default footprint: Package_DFN_QFN:VQFN-48-1EP_7x7mm_P0.5mm_EP4.1x4.1mm_ThermalVias.
 */
export class CC430F5137xRGZ extends Component.withPins({
  "P2.2": "1",
  "P2.1": "2",
  "P2.0": "3",
  "P1.7": "4",
  "P1.6": "5",
  "P1.5": "6",
  "VCORE": "7",
  "DVCC_8": "8",
  "P1.4": "9",
  "P1.3": "10",
  "P1.2": "11",
  "P1.1": "12",
  "P1.0": "13",
  "P3.7": "14",
  "P3.6": "15",
  "P3.5": "16",
  "P3.4": "17",
  "P3.3": "18",
  "P3.2": "19",
  "P3.1": "20",
  "P3.0": "21",
  "DVCC_22": "22",
  "P2.7": "23",
  "P2.6": "24",
  "RF_XIN": "25",
  "RF_XOUT": "26",
  "AVCC_RF_27": "27",
  "AVCC_RF_28": "28",
  "RF_P": "29",
  "RF_N": "30",
  "AVCC_RF_31": "31",
  "AVCC_RF_32": "32",
  "RBIAS": "33",
  "GUARD": "34",
  "PJ.0/TDO": "35",
  "PJ.1/TDI/TCLK": "36",
  "PJ.2/TMS": "37",
  "PJ.3/TCK": "38",
  "TEST": "39",
  "~{RST}": "40",
  "DVCC_41": "41",
  "AVSS": "42",
  "P5.1": "43",
  "P5.0": "44",
  "AVCC": "45",
  "P2.5": "46",
  "P2.4": "47",
  "P2.3": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", VCORE: "power_in", DVCC_8: "power_in", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P3.7": "bidirectional", "P3.6": "bidirectional", "P3.5": "bidirectional", "P3.4": "bidirectional", "P3.3": "bidirectional", "P3.2": "bidirectional", "P3.1": "bidirectional", "P3.0": "bidirectional", DVCC_22: "passive", "P2.7": "bidirectional", "P2.6": "bidirectional", RF_XIN: "input", RF_XOUT: "output", AVCC_RF_27: "power_in", AVCC_RF_28: "passive", RF_P: "passive", RF_N: "passive", AVCC_RF_31: "power_in", AVCC_RF_32: "passive", RBIAS: "passive", GUARD: "power_in", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", TEST: "bidirectional", "~{RST}": "input", DVCC_41: "passive", AVSS: "power_in", "P5.1": "bidirectional", "P5.0": "bidirectional", AVCC: "power_in", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:CC430F5137xRGZ";
  override referencePrefix = "U";
}

/**
 * 8KB Flash, 2KB RAM, MSP430 core with integrated CC1101 radio transceiver, VQFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:CC430F5133xRGZ`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*7x7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/cc430f5137.pdf
 * Keywords: TI MSP430 CC430 16-bit mixed signal microcontroller CC1101.
 * Default footprint: Package_DFN_QFN:VQFN-48-1EP_7x7mm_P0.5mm_EP4.1x4.1mm_ThermalVias.
 */
export class CC430F5133xRGZ extends Component.withPins({
  "P2.2": "1",
  "P2.1": "2",
  "P2.0": "3",
  "P1.7": "4",
  "P1.6": "5",
  "P1.5": "6",
  "VCORE": "7",
  "DVCC_8": "8",
  "P1.4": "9",
  "P1.3": "10",
  "P1.2": "11",
  "P1.1": "12",
  "P1.0": "13",
  "P3.7": "14",
  "P3.6": "15",
  "P3.5": "16",
  "P3.4": "17",
  "P3.3": "18",
  "P3.2": "19",
  "P3.1": "20",
  "P3.0": "21",
  "DVCC_22": "22",
  "P2.7": "23",
  "P2.6": "24",
  "RF_XIN": "25",
  "RF_XOUT": "26",
  "AVCC_RF_27": "27",
  "AVCC_RF_28": "28",
  "RF_P": "29",
  "RF_N": "30",
  "AVCC_RF_31": "31",
  "AVCC_RF_32": "32",
  "RBIAS": "33",
  "GUARD": "34",
  "PJ.0/TDO": "35",
  "PJ.1/TDI/TCLK": "36",
  "PJ.2/TMS": "37",
  "PJ.3/TCK": "38",
  "TEST": "39",
  "~{RST}": "40",
  "DVCC_41": "41",
  "AVSS": "42",
  "P5.1": "43",
  "P5.0": "44",
  "AVCC": "45",
  "P2.5": "46",
  "P2.4": "47",
  "P2.3": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", VCORE: "power_in", DVCC_8: "power_in", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P3.7": "bidirectional", "P3.6": "bidirectional", "P3.5": "bidirectional", "P3.4": "bidirectional", "P3.3": "bidirectional", "P3.2": "bidirectional", "P3.1": "bidirectional", "P3.0": "bidirectional", DVCC_22: "passive", "P2.7": "bidirectional", "P2.6": "bidirectional", RF_XIN: "input", RF_XOUT: "output", AVCC_RF_27: "power_in", AVCC_RF_28: "passive", RF_P: "passive", RF_N: "passive", AVCC_RF_31: "power_in", AVCC_RF_32: "passive", RBIAS: "passive", GUARD: "power_in", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", TEST: "bidirectional", "~{RST}": "input", DVCC_41: "passive", AVSS: "power_in", "P5.1": "bidirectional", "P5.0": "bidirectional", AVCC: "power_in", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:CC430F5133xRGZ";
  override referencePrefix = "U";
}

/**
 * 16KB Flash, 2KB RAM, MSP430 core with integrated CC1101 radio transceiver, VQFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:CC430F5135xRGZ`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*7x7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/cc430f5137.pdf
 * Keywords: TI MSP430 CC430 16-bit mixed signal microcontroller CC1101.
 * Default footprint: Package_DFN_QFN:VQFN-48-1EP_7x7mm_P0.5mm_EP4.1x4.1mm_ThermalVias.
 */
export class CC430F5135xRGZ extends Component.withPins({
  "P2.2": "1",
  "P2.1": "2",
  "P2.0": "3",
  "P1.7": "4",
  "P1.6": "5",
  "P1.5": "6",
  "VCORE": "7",
  "DVCC_8": "8",
  "P1.4": "9",
  "P1.3": "10",
  "P1.2": "11",
  "P1.1": "12",
  "P1.0": "13",
  "P3.7": "14",
  "P3.6": "15",
  "P3.5": "16",
  "P3.4": "17",
  "P3.3": "18",
  "P3.2": "19",
  "P3.1": "20",
  "P3.0": "21",
  "DVCC_22": "22",
  "P2.7": "23",
  "P2.6": "24",
  "RF_XIN": "25",
  "RF_XOUT": "26",
  "AVCC_RF_27": "27",
  "AVCC_RF_28": "28",
  "RF_P": "29",
  "RF_N": "30",
  "AVCC_RF_31": "31",
  "AVCC_RF_32": "32",
  "RBIAS": "33",
  "GUARD": "34",
  "PJ.0/TDO": "35",
  "PJ.1/TDI/TCLK": "36",
  "PJ.2/TMS": "37",
  "PJ.3/TCK": "38",
  "TEST": "39",
  "~{RST}": "40",
  "DVCC_41": "41",
  "AVSS": "42",
  "P5.1": "43",
  "P5.0": "44",
  "AVCC": "45",
  "P2.5": "46",
  "P2.4": "47",
  "P2.3": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P2.2": "bidirectional", "P2.1": "bidirectional", "P2.0": "bidirectional", "P1.7": "bidirectional", "P1.6": "bidirectional", "P1.5": "bidirectional", VCORE: "power_in", DVCC_8: "power_in", "P1.4": "bidirectional", "P1.3": "bidirectional", "P1.2": "bidirectional", "P1.1": "bidirectional", "P1.0": "bidirectional", "P3.7": "bidirectional", "P3.6": "bidirectional", "P3.5": "bidirectional", "P3.4": "bidirectional", "P3.3": "bidirectional", "P3.2": "bidirectional", "P3.1": "bidirectional", "P3.0": "bidirectional", DVCC_22: "passive", "P2.7": "bidirectional", "P2.6": "bidirectional", RF_XIN: "input", RF_XOUT: "output", AVCC_RF_27: "power_in", AVCC_RF_28: "passive", RF_P: "passive", RF_N: "passive", AVCC_RF_31: "power_in", AVCC_RF_32: "passive", RBIAS: "passive", GUARD: "power_in", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", TEST: "bidirectional", "~{RST}": "input", DVCC_41: "passive", AVSS: "power_in", "P5.1": "bidirectional", "P5.0": "bidirectional", AVCC: "power_in", "P2.5": "bidirectional", "P2.4": "bidirectional", "P2.3": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:CC430F5135xRGZ";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430AFE221IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430afe221.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class MSP430AFE221IPW extends Component.withPins({
  "A0.0+": "1",
  "A0.0-": "2",
  "(AVSS)_3": "3",
  "(AVSS)_4": "4",
  "AVCC": "5",
  "AVSS": "6",
  "Vref": "7",
  "(AVSS)_8": "8",
  "(AVSS)_9": "9",
  "SBWTCK/TEST": "10",
  "~{RST}/NMI/SBWTDIO": "11",
  "TA2/SMCLK/TACLK/SVSIN/P1.0": "12",
  "DVSS": "13",
  "XT2IN/P2.6": "14",
  "XT2OUT/P2.7": "15",
  "DVCC": "16",
  "SDCLK/TA1/P1.1": "17",
  "SD0DO/TA0/P1.2": "18",
  "UTXD0/P1.3": "19",
  "URXD0/P1.4": "20",
  "TMS/SVSOUT/SIMO0/P1.5": "21",
  "TCK/TA2/SOMI0/P1.6": "22",
  "TDI/TDO/TA1/UCLK0/P1.7": "23",
  "TCLK/TDI/TA0/STE0/P2.0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0.0+": "passive", "A0.0-": "passive", "(AVSS)_3": "passive", "(AVSS)_4": "passive", AVCC: "power_in", AVSS: "power_in", Vref: "passive", "(AVSS)_8": "passive", "(AVSS)_9": "passive", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", "TA2/SMCLK/TACLK/SVSIN/P1.0": "bidirectional", DVSS: "power_in", "XT2IN/P2.6": "bidirectional", "XT2OUT/P2.7": "bidirectional", DVCC: "power_in", "SDCLK/TA1/P1.1": "bidirectional", "SD0DO/TA0/P1.2": "bidirectional", "UTXD0/P1.3": "bidirectional", "URXD0/P1.4": "bidirectional", "TMS/SVSOUT/SIMO0/P1.5": "bidirectional", "TCK/TA2/SOMI0/P1.6": "bidirectional", "TDI/TDO/TA1/UCLK0/P1.7": "bidirectional", "TCLK/TDI/TA0/STE0/P2.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430AFE221IPW";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430AFE222IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430afe222.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class MSP430AFE222IPW extends Component.withPins({
  "A0.0+": "1",
  "A0.0-": "2",
  "A1.0+": "3",
  "A1.0-": "4",
  "AVCC": "5",
  "AVSS": "6",
  "Vref": "7",
  "(AVSS)_8": "8",
  "(AVSS)_9": "9",
  "SBWTCK/TEST": "10",
  "~{RST}/NMI/SBWTDIO": "11",
  "TA2/SMCLK/TACLK/SVSIN/P1.0": "12",
  "DVSS": "13",
  "XT2IN/P2.6": "14",
  "XT2OUT/P2.7": "15",
  "DVCC": "16",
  "SDCLK/TA1/P1.1": "17",
  "SD0DO/TA0/P1.2": "18",
  "SD1DO/UTXD0/P1.3": "19",
  "URXD0/P1.4": "20",
  "TMS/SVSOUT/SIMO0/P1.5": "21",
  "TCK/TA2/SOMI0/P1.6": "22",
  "TDI/TDO/TA1/UCLK0/P1.7": "23",
  "TCLK/TDI/TA0/STE0/P2.0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0.0+": "passive", "A0.0-": "passive", "A1.0+": "passive", "A1.0-": "passive", AVCC: "power_in", AVSS: "power_in", Vref: "passive", "(AVSS)_8": "passive", "(AVSS)_9": "passive", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", "TA2/SMCLK/TACLK/SVSIN/P1.0": "bidirectional", DVSS: "power_in", "XT2IN/P2.6": "bidirectional", "XT2OUT/P2.7": "bidirectional", DVCC: "power_in", "SDCLK/TA1/P1.1": "bidirectional", "SD0DO/TA0/P1.2": "bidirectional", "SD1DO/UTXD0/P1.3": "bidirectional", "URXD0/P1.4": "bidirectional", "TMS/SVSOUT/SIMO0/P1.5": "bidirectional", "TCK/TA2/SOMI0/P1.6": "bidirectional", "TDI/TDO/TA1/UCLK0/P1.7": "bidirectional", "TCLK/TDI/TA0/STE0/P2.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430AFE222IPW";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430AFE223IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430afe223.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class MSP430AFE223IPW extends Component.withPins({
  "A0.0+": "1",
  "A0.0-": "2",
  "A1.0+": "3",
  "A1.0-": "4",
  "AVCC": "5",
  "AVSS": "6",
  "Vref": "7",
  "A2.0+": "8",
  "A2.0-": "9",
  "SBWTCK/TEST": "10",
  "~{RST}/NMI/SBWTDIO": "11",
  "TA2/SMCLK/TACLK/SVSIN/P1.0": "12",
  "DVSS": "13",
  "XT2IN/P2.6": "14",
  "XT2OUT/P2.7": "15",
  "DVCC": "16",
  "SDCLK/TA1/P1.1": "17",
  "SD0DO/TA0/P1.2": "18",
  "SD1DO/UTXD0/P1.3": "19",
  "SD2DO/URXD0/P1.4": "20",
  "TMS/SVSOUT/SIMO0/P1.5": "21",
  "TCK/TA2/SOMI0/P1.6": "22",
  "TDI/TDO/TA1/UCLK0/P1.7": "23",
  "TCLK/TDI/TA0/STE0/P2.0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0.0+": "passive", "A0.0-": "passive", "A1.0+": "passive", "A1.0-": "passive", AVCC: "power_in", AVSS: "power_in", Vref: "passive", "A2.0+": "passive", "A2.0-": "passive", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", "TA2/SMCLK/TACLK/SVSIN/P1.0": "bidirectional", DVSS: "power_in", "XT2IN/P2.6": "bidirectional", "XT2OUT/P2.7": "bidirectional", DVCC: "power_in", "SDCLK/TA1/P1.1": "bidirectional", "SD0DO/TA0/P1.2": "bidirectional", "SD1DO/UTXD0/P1.3": "bidirectional", "SD2DO/URXD0/P1.4": "bidirectional", "TMS/SVSOUT/SIMO0/P1.5": "bidirectional", "TCK/TA2/SOMI0/P1.6": "bidirectional", "TDI/TDO/TA1/UCLK0/P1.7": "bidirectional", "TCLK/TDI/TA0/STE0/P2.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430AFE223IPW";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, TSSOP-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430AFE231IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430afe231.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class MSP430AFE231IPW extends Component.withPins({
  "A0.0+": "1",
  "A0.0-": "2",
  "(AVSS)_3": "3",
  "(AVSS)_4": "4",
  "AVCC": "5",
  "AVSS": "6",
  "Vref": "7",
  "(AVSS)_8": "8",
  "(AVSS)_9": "9",
  "SBWTCK/TEST": "10",
  "~{RST}/NMI/SBWTDIO": "11",
  "TA2/SMCLK/TACLK/SVSIN/P1.0": "12",
  "DVSS": "13",
  "XT2IN/P2.6": "14",
  "XT2OUT/P2.7": "15",
  "DVCC": "16",
  "SDCLK/TA1/P1.1": "17",
  "SD0DO/TA0/P1.2": "18",
  "UTXD0/P1.3": "19",
  "URXD0/P1.4": "20",
  "TMS/SVSOUT/SIMO0/P1.5": "21",
  "TCK/TA2/SOMI0/P1.6": "22",
  "TDI/TDO/TA1/UCLK0/P1.7": "23",
  "TCLK/TDI/TA0/STE0/P2.0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0.0+": "passive", "A0.0-": "passive", "(AVSS)_3": "passive", "(AVSS)_4": "passive", AVCC: "power_in", AVSS: "power_in", Vref: "passive", "(AVSS)_8": "passive", "(AVSS)_9": "passive", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", "TA2/SMCLK/TACLK/SVSIN/P1.0": "bidirectional", DVSS: "power_in", "XT2IN/P2.6": "bidirectional", "XT2OUT/P2.7": "bidirectional", DVCC: "power_in", "SDCLK/TA1/P1.1": "bidirectional", "SD0DO/TA0/P1.2": "bidirectional", "UTXD0/P1.3": "bidirectional", "URXD0/P1.4": "bidirectional", "TMS/SVSOUT/SIMO0/P1.5": "bidirectional", "TCK/TA2/SOMI0/P1.6": "bidirectional", "TDI/TDO/TA1/UCLK0/P1.7": "bidirectional", "TCLK/TDI/TA0/STE0/P2.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430AFE231IPW";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, TSSOP-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430AFE232IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430afe232.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class MSP430AFE232IPW extends Component.withPins({
  "A0.0+": "1",
  "A0.0-": "2",
  "A1.0+": "3",
  "A1.0-": "4",
  "AVCC": "5",
  "AVSS": "6",
  "Vref": "7",
  "(AVSS)_8": "8",
  "(AVSS)_9": "9",
  "SBWTCK/TEST": "10",
  "~{RST}/NMI/SBWTDIO": "11",
  "TA2/SMCLK/TACLK/SVSIN/P1.0": "12",
  "DVSS": "13",
  "XT2IN/P2.6": "14",
  "XT2OUT/P2.7": "15",
  "DVCC": "16",
  "SDCLK/TA1/P1.1": "17",
  "SD0DO/TA0/P1.2": "18",
  "SD1DO/UTXD0/P1.3": "19",
  "URXD0/P1.4": "20",
  "TMS/SVSOUT/SIMO0/P1.5": "21",
  "TCK/TA2/SOMI0/P1.6": "22",
  "TDI/TDO/TA1/UCLK0/P1.7": "23",
  "TCLK/TDI/TA0/STE0/P2.0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0.0+": "passive", "A0.0-": "passive", "A1.0+": "passive", "A1.0-": "passive", AVCC: "power_in", AVSS: "power_in", Vref: "passive", "(AVSS)_8": "passive", "(AVSS)_9": "passive", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", "TA2/SMCLK/TACLK/SVSIN/P1.0": "bidirectional", DVSS: "power_in", "XT2IN/P2.6": "bidirectional", "XT2OUT/P2.7": "bidirectional", DVCC: "power_in", "SDCLK/TA1/P1.1": "bidirectional", "SD0DO/TA0/P1.2": "bidirectional", "SD1DO/UTXD0/P1.3": "bidirectional", "URXD0/P1.4": "bidirectional", "TMS/SVSOUT/SIMO0/P1.5": "bidirectional", "TCK/TA2/SOMI0/P1.6": "bidirectional", "TDI/TDO/TA1/UCLK0/P1.7": "bidirectional", "TCLK/TDI/TA0/STE0/P2.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430AFE232IPW";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, TSSOP-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430AFE233IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430afe233.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class MSP430AFE233IPW extends Component.withPins({
  "A0.0+": "1",
  "A0.0-": "2",
  "A1.0+": "3",
  "A1.0-": "4",
  "AVCC": "5",
  "AVSS": "6",
  "Vref": "7",
  "A2.0+": "8",
  "A2.0-": "9",
  "SBWTCK/TEST": "10",
  "~{RST}/NMI/SBWTDIO": "11",
  "TA2/SMCLK/TACLK/SVSIN/P1.0": "12",
  "DVSS": "13",
  "XT2IN/P2.6": "14",
  "XT2OUT/P2.7": "15",
  "DVCC": "16",
  "SDCLK/TA1/P1.1": "17",
  "SD0DO/TA0/P1.2": "18",
  "SD1DO/UTXD0/P1.3": "19",
  "SD2DO/URXD0/P1.4": "20",
  "TMS/SVSOUT/SIMO0/P1.5": "21",
  "TCK/TA2/SOMI0/P1.6": "22",
  "TDI/TDO/TA1/UCLK0/P1.7": "23",
  "TCLK/TDI/TA0/STE0/P2.0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0.0+": "passive", "A0.0-": "passive", "A1.0+": "passive", "A1.0-": "passive", AVCC: "power_in", AVSS: "power_in", Vref: "passive", "A2.0+": "passive", "A2.0-": "passive", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", "TA2/SMCLK/TACLK/SVSIN/P1.0": "bidirectional", DVSS: "power_in", "XT2IN/P2.6": "bidirectional", "XT2OUT/P2.7": "bidirectional", DVCC: "power_in", "SDCLK/TA1/P1.1": "bidirectional", "SD0DO/TA0/P1.2": "bidirectional", "SD1DO/UTXD0/P1.3": "bidirectional", "SD2DO/URXD0/P1.4": "bidirectional", "TMS/SVSOUT/SIMO0/P1.5": "bidirectional", "TCK/TA2/SOMI0/P1.6": "bidirectional", "TDI/TDO/TA1/UCLK0/P1.7": "bidirectional", "TCLK/TDI/TA0/STE0/P2.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430AFE233IPW";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, TSSOP-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430AFE251IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430afe251.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class MSP430AFE251IPW extends Component.withPins({
  "A0.0+": "1",
  "A0.0-": "2",
  "(AVSS)_3": "3",
  "(AVSS)_4": "4",
  "AVCC": "5",
  "AVSS": "6",
  "Vref": "7",
  "(AVSS)_8": "8",
  "(AVSS)_9": "9",
  "SBWTCK/TEST": "10",
  "~{RST}/NMI/SBWTDIO": "11",
  "TA2/SMCLK/TACLK/SVSIN/P1.0": "12",
  "DVSS": "13",
  "XT2IN/P2.6": "14",
  "XT2OUT/P2.7": "15",
  "DVCC": "16",
  "SDCLK/TA1/P1.1": "17",
  "SD0DO/TA0/P1.2": "18",
  "UTXD0/P1.3": "19",
  "URXD0/P1.4": "20",
  "TMS/SVSOUT/SIMO0/P1.5": "21",
  "TCK/TA2/SOMI0/P1.6": "22",
  "TDI/TDO/TA1/UCLK0/P1.7": "23",
  "TCLK/TDI/TA0/STE0/P2.0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0.0+": "passive", "A0.0-": "passive", "(AVSS)_3": "passive", "(AVSS)_4": "passive", AVCC: "power_in", AVSS: "power_in", Vref: "passive", "(AVSS)_8": "passive", "(AVSS)_9": "passive", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", "TA2/SMCLK/TACLK/SVSIN/P1.0": "bidirectional", DVSS: "power_in", "XT2IN/P2.6": "bidirectional", "XT2OUT/P2.7": "bidirectional", DVCC: "power_in", "SDCLK/TA1/P1.1": "bidirectional", "SD0DO/TA0/P1.2": "bidirectional", "UTXD0/P1.3": "bidirectional", "URXD0/P1.4": "bidirectional", "TMS/SVSOUT/SIMO0/P1.5": "bidirectional", "TCK/TA2/SOMI0/P1.6": "bidirectional", "TDI/TDO/TA1/UCLK0/P1.7": "bidirectional", "TCLK/TDI/TA0/STE0/P2.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430AFE251IPW";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, TSSOP-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430AFE252IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430afe252.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class MSP430AFE252IPW extends Component.withPins({
  "A0.0+": "1",
  "A0.0-": "2",
  "A1.0+": "3",
  "A1.0-": "4",
  "AVCC": "5",
  "AVSS": "6",
  "Vref": "7",
  "(AVSS)_8": "8",
  "(AVSS)_9": "9",
  "SBWTCK/TEST": "10",
  "~{RST}/NMI/SBWTDIO": "11",
  "TA2/SMCLK/TACLK/SVSIN/P1.0": "12",
  "DVSS": "13",
  "XT2IN/P2.6": "14",
  "XT2OUT/P2.7": "15",
  "DVCC": "16",
  "SDCLK/TA1/P1.1": "17",
  "SD0DO/TA0/P1.2": "18",
  "SD1DO/UTXD0/P1.3": "19",
  "URXD0/P1.4": "20",
  "TMS/SVSOUT/SIMO0/P1.5": "21",
  "TCK/TA2/SOMI0/P1.6": "22",
  "TDI/TDO/TA1/UCLK0/P1.7": "23",
  "TCLK/TDI/TA0/STE0/P2.0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0.0+": "passive", "A0.0-": "passive", "A1.0+": "passive", "A1.0-": "passive", AVCC: "power_in", AVSS: "power_in", Vref: "passive", "(AVSS)_8": "passive", "(AVSS)_9": "passive", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", "TA2/SMCLK/TACLK/SVSIN/P1.0": "bidirectional", DVSS: "power_in", "XT2IN/P2.6": "bidirectional", "XT2OUT/P2.7": "bidirectional", DVCC: "power_in", "SDCLK/TA1/P1.1": "bidirectional", "SD0DO/TA0/P1.2": "bidirectional", "SD1DO/UTXD0/P1.3": "bidirectional", "URXD0/P1.4": "bidirectional", "TMS/SVSOUT/SIMO0/P1.5": "bidirectional", "TCK/TA2/SOMI0/P1.6": "bidirectional", "TDI/TDO/TA1/UCLK0/P1.7": "bidirectional", "TCLK/TDI/TA0/STE0/P2.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430AFE252IPW";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, TSSOP-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430AFE253IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430afe253.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 */
export class MSP430AFE253IPW extends Component.withPins({
  "A0.0+": "1",
  "A0.0-": "2",
  "A1.0+": "3",
  "A1.0-": "4",
  "AVCC": "5",
  "AVSS": "6",
  "Vref": "7",
  "A2.0+": "8",
  "A2.0-": "9",
  "SBWTCK/TEST": "10",
  "~{RST}/NMI/SBWTDIO": "11",
  "TA2/SMCLK/TACLK/SVSIN/P1.0": "12",
  "DVSS": "13",
  "XT2IN/P2.6": "14",
  "XT2OUT/P2.7": "15",
  "DVCC": "16",
  "SDCLK/TA1/P1.1": "17",
  "SD0DO/TA0/P1.2": "18",
  "SD1DO/UTXD0/P1.3": "19",
  "SD2DO/URXD0/P1.4": "20",
  "TMS/SVSOUT/SIMO0/P1.5": "21",
  "TCK/TA2/SOMI0/P1.6": "22",
  "TDI/TDO/TA1/UCLK0/P1.7": "23",
  "TCLK/TDI/TA0/STE0/P2.0": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0.0+": "passive", "A0.0-": "passive", "A1.0+": "passive", "A1.0-": "passive", AVCC: "power_in", AVSS: "power_in", Vref: "passive", "A2.0+": "passive", "A2.0-": "passive", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", "TA2/SMCLK/TACLK/SVSIN/P1.0": "bidirectional", DVSS: "power_in", "XT2IN/P2.6": "bidirectional", "XT2OUT/P2.7": "bidirectional", DVCC: "power_in", "SDCLK/TA1/P1.1": "bidirectional", "SD0DO/TA0/P1.2": "bidirectional", "SD1DO/UTXD0/P1.3": "bidirectional", "SD2DO/URXD0/P1.4": "bidirectional", "TMS/SVSOUT/SIMO0/P1.5": "bidirectional", "TCK/TA2/SOMI0/P1.6": "bidirectional", "TDI/TDO/TA1/UCLK0/P1.7": "bidirectional", "TCLK/TDI/TA0/STE0/P2.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430AFE253IPW";
  override referencePrefix = "U";
}

/**
 * 1kB + 128B Flash, 128B RAM, TVSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1101AIDGV`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1101a.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430F1101AIDGV extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/Rosc": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK": "8",
  "P2.1/INCLK": "9",
  "P2.2/CAOUT/TA0": "10",
  "P2.3/CA0/TA1": "11",
  "P2.4/CA1/TA2": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "19",
  "TDO/TDI/TA2/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/ACLK": "bidirectional", "P2.1/INCLK": "bidirectional", "P2.2/CAOUT/TA0": "bidirectional", "P2.3/CA0/TA1": "bidirectional", "P2.4/CA1/TA2": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1101AIDGV";
  override referencePrefix = "U";
}

/**
 * 1kB + 128B Flash, 128B RAM, SOWB-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1101AIDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1101a.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class MSP430F1101AIDW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/Rosc": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK": "8",
  "P2.1/INCLK": "9",
  "P2.2/CAOUT/TA0": "10",
  "P2.3/CA0/TA1": "11",
  "P2.4/CA1/TA2": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "19",
  "TDO/TDI/TA2/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/ACLK": "bidirectional", "P2.1/INCLK": "bidirectional", "P2.2/CAOUT/TA0": "bidirectional", "P2.3/CA0/TA1": "bidirectional", "P2.4/CA1/TA2": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1101AIDW";
  override referencePrefix = "U";
}

/**
 * 1kB + 128B Flash, 128B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1101AIPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1101a.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430F1101AIPW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/Rosc": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK": "8",
  "P2.1/INCLK": "9",
  "P2.2/CAOUT/TA0": "10",
  "P2.3/CA0/TA1": "11",
  "P2.4/CA1/TA2": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "19",
  "TDO/TDI/TA2/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/ACLK": "bidirectional", "P2.1/INCLK": "bidirectional", "P2.2/CAOUT/TA0": "bidirectional", "P2.3/CA0/TA1": "bidirectional", "P2.4/CA1/TA2": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1101AIPW";
  override referencePrefix = "U";
}

/**
 * 1kB + 128B Flash, 128B RAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1101AIRGE`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1101a.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 */
export class MSP430F1101AIRGE extends Component.withPins({
  "VSS": "2",
  "XOUT": "3",
  "XIN": "4",
  "~{RST}/NMI": "5",
  "P2.0/ACLK": "6",
  "P2.1/INCLK": "7",
  "P2.2/CAOUT/TA0": "8",
  "P2.3/CA0/TA1": "10",
  "P2.4/CA1/TA2": "11",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "20",
  "TDO/TDI/TA2/P1.7": "21",
  "TEST": "22",
  "VCC": "23",
  "P2.5/Rosc": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/ACLK": "bidirectional", "P2.1/INCLK": "bidirectional", "P2.2/CAOUT/TA0": "bidirectional", "P2.3/CA0/TA1": "bidirectional", "P2.4/CA1/TA2": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1101AIRGE";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, TVSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1111AIDGV`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1111a.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430F1111AIDGV extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/Rosc": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK": "8",
  "P2.1/INCLK": "9",
  "P2.2/CAOUT/TA0": "10",
  "P2.3/CA0/TA1": "11",
  "P2.4/CA1/TA2": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "19",
  "TDO/TDI/TA2/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/ACLK": "bidirectional", "P2.1/INCLK": "bidirectional", "P2.2/CAOUT/TA0": "bidirectional", "P2.3/CA0/TA1": "bidirectional", "P2.4/CA1/TA2": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1111AIDGV";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, SOWB-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1111AIDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1111a.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class MSP430F1111AIDW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/Rosc": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK": "8",
  "P2.1/INCLK": "9",
  "P2.2/CAOUT/TA0": "10",
  "P2.3/CA0/TA1": "11",
  "P2.4/CA1/TA2": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "19",
  "TDO/TDI/TA2/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/ACLK": "bidirectional", "P2.1/INCLK": "bidirectional", "P2.2/CAOUT/TA0": "bidirectional", "P2.3/CA0/TA1": "bidirectional", "P2.4/CA1/TA2": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1111AIDW";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1111AIPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1111a.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430F1111AIPW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/Rosc": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK": "8",
  "P2.1/INCLK": "9",
  "P2.2/CAOUT/TA0": "10",
  "P2.3/CA0/TA1": "11",
  "P2.4/CA1/TA2": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "19",
  "TDO/TDI/TA2/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/ACLK": "bidirectional", "P2.1/INCLK": "bidirectional", "P2.2/CAOUT/TA0": "bidirectional", "P2.3/CA0/TA1": "bidirectional", "P2.4/CA1/TA2": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1111AIPW";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1111AIRGE`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1111a.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 */
export class MSP430F1111AIRGE extends Component.withPins({
  "VSS": "2",
  "XOUT": "3",
  "XIN": "4",
  "~{RST}/NMI": "5",
  "P2.0/ACLK": "6",
  "P2.1/INCLK": "7",
  "P2.2/CAOUT/TA0": "8",
  "P2.3/CA0/TA1": "10",
  "P2.4/CA1/TA2": "11",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "20",
  "TDO/TDI/TA2/P1.7": "21",
  "TEST": "22",
  "VCC": "23",
  "P2.5/Rosc": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/ACLK": "bidirectional", "P2.1/INCLK": "bidirectional", "P2.2/CAOUT/TA0": "bidirectional", "P2.3/CA0/TA1": "bidirectional", "P2.4/CA1/TA2": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1111AIRGE";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, TVSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1121AIDGV`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1121a.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430F1121AIDGV extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/Rosc": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK": "8",
  "P2.1/INCLK": "9",
  "P2.2/CAOUT/TA0": "10",
  "P2.3/CA0/TA1": "11",
  "P2.4/CA1/TA2": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "19",
  "TDO/TDI/TA2/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/ACLK": "bidirectional", "P2.1/INCLK": "bidirectional", "P2.2/CAOUT/TA0": "bidirectional", "P2.3/CA0/TA1": "bidirectional", "P2.4/CA1/TA2": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1121AIDGV";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, SOWB-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1121AIDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1121a.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class MSP430F1121AIDW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/Rosc": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK": "8",
  "P2.1/INCLK": "9",
  "P2.2/CAOUT/TA0": "10",
  "P2.3/CA0/TA1": "11",
  "P2.4/CA1/TA2": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "19",
  "TDO/TDI/TA2/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/ACLK": "bidirectional", "P2.1/INCLK": "bidirectional", "P2.2/CAOUT/TA0": "bidirectional", "P2.3/CA0/TA1": "bidirectional", "P2.4/CA1/TA2": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1121AIDW";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1121AIPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1121a.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430F1121AIPW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/Rosc": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK": "8",
  "P2.1/INCLK": "9",
  "P2.2/CAOUT/TA0": "10",
  "P2.3/CA0/TA1": "11",
  "P2.4/CA1/TA2": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "19",
  "TDO/TDI/TA2/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/ACLK": "bidirectional", "P2.1/INCLK": "bidirectional", "P2.2/CAOUT/TA0": "bidirectional", "P2.3/CA0/TA1": "bidirectional", "P2.4/CA1/TA2": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1121AIPW";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1121AIRGE`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1121a.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 */
export class MSP430F1121AIRGE extends Component.withPins({
  "VSS": "2",
  "XOUT": "3",
  "XIN": "4",
  "~{RST}/NMI": "5",
  "P2.0/ACLK": "6",
  "P2.1/INCLK": "7",
  "P2.2/CAOUT/TA0": "8",
  "P2.3/CA0/TA1": "10",
  "P2.4/CA1/TA2": "11",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "20",
  "TDO/TDI/TA2/P1.7": "21",
  "TEST": "22",
  "VCC": "23",
  "P2.5/Rosc": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/ACLK": "bidirectional", "P2.1/INCLK": "bidirectional", "P2.2/CAOUT/TA0": "bidirectional", "P2.3/CA0/TA1": "bidirectional", "P2.4/CA1/TA2": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1121AIRGE";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, SOWB-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1122IDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1122.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class MSP430F1122IDW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/Rosc": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "P2.0/A0/ACLK": "8",
  "P2.1/A1/INCLK": "9",
  "P2.2/A2/TA0": "10",
  "P2.3/A3/VREF-/VeREF-/TA1": "11",
  "P2.4/A4/VREF+/VeREF+/TA2": "12",
  "TACLK/ADC10CLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "19",
  "TDO/TDI/TA2/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/A0/ACLK": "bidirectional", "P2.1/A1/INCLK": "bidirectional", "P2.2/A2/TA0": "bidirectional", "P2.3/A3/VREF-/VeREF-/TA1": "bidirectional", "P2.4/A4/VREF+/VeREF+/TA2": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1122IDW";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1122IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1122.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430F1122IPW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/Rosc": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "P2.0/A0/ACLK": "8",
  "P2.1/A1/INCLK": "9",
  "P2.2/A2/TA0": "10",
  "P2.3/A3/VREF-/VeREF-/TA1": "11",
  "P2.4/A4/VREF+/VeREF+/TA2": "12",
  "TACLK/ADC10CLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "19",
  "TDO/TDI/TA2/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/A0/ACLK": "bidirectional", "P2.1/A1/INCLK": "bidirectional", "P2.2/A2/TA0": "bidirectional", "P2.3/A3/VREF-/VeREF-/TA1": "bidirectional", "P2.4/A4/VREF+/VeREF+/TA2": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1122IPW";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1122IRHB`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1122.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430F1122IRHB extends Component.withPins({
  "VSS": "1",
  "XOUT": "2",
  "XIN": "3",
  "~{RST}/NMI": "5",
  "P2.0/A0/ACLK": "6",
  "P2.1/A1/INCLK": "7",
  "P2.2/A2/TA0": "8",
  "P2.3/A3/VREF-/VeREF-/TA1": "18",
  "P2.4/A4/VREF+/VeREF+/TA2": "19",
  "TACLK/ADC10CLK/P1.0": "21",
  "TA0/P1.1": "22",
  "TA1/P1.2": "23",
  "TA2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TMS/TA0/P1.5": "26",
  "TDI/TCLK/TA1/P1.6": "27",
  "TDO/TDI/TA2/P1.7": "28",
  "TEST": "29",
  "VCC": "30",
  "P2.5/Rosc": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/A0/ACLK": "bidirectional", "P2.1/A1/INCLK": "bidirectional", "P2.2/A2/TA0": "bidirectional", "P2.3/A3/VREF-/VeREF-/TA1": "bidirectional", "P2.4/A4/VREF+/VeREF+/TA2": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1122IRHB";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 256B RAM, SOWB-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1132IDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1132.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class MSP430F1132IDW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/Rosc": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "P2.0/A0/ACLK": "8",
  "P2.1/A1/INCLK": "9",
  "P2.2/A2/TA0": "10",
  "P2.3/A3/VREF-/VeREF-/TA1": "11",
  "P2.4/A4/VREF+/VeREF+/TA2": "12",
  "TACLK/ADC10CLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "19",
  "TDO/TDI/TA2/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/A0/ACLK": "bidirectional", "P2.1/A1/INCLK": "bidirectional", "P2.2/A2/TA0": "bidirectional", "P2.3/A3/VREF-/VeREF-/TA1": "bidirectional", "P2.4/A4/VREF+/VeREF+/TA2": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1132IDW";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1132IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1132.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430F1132IPW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/Rosc": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "P2.0/A0/ACLK": "8",
  "P2.1/A1/INCLK": "9",
  "P2.2/A2/TA0": "10",
  "P2.3/A3/VREF-/VeREF-/TA1": "11",
  "P2.4/A4/VREF+/VeREF+/TA2": "12",
  "TACLK/ADC10CLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TMS/TA0/P1.5": "18",
  "TDI/TCLK/TA1/P1.6": "19",
  "TDO/TDI/TA2/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/A0/ACLK": "bidirectional", "P2.1/A1/INCLK": "bidirectional", "P2.2/A2/TA0": "bidirectional", "P2.3/A3/VREF-/VeREF-/TA1": "bidirectional", "P2.4/A4/VREF+/VeREF+/TA2": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1132IPW";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1132IRHB`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1132.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430F1132IRHB extends Component.withPins({
  "VSS": "1",
  "XOUT": "2",
  "XIN": "3",
  "~{RST}/NMI": "5",
  "P2.0/A0/ACLK": "6",
  "P2.1/A1/INCLK": "7",
  "P2.2/A2/TA0": "8",
  "P2.3/A3/VREF-/VeREF-/TA1": "18",
  "P2.4/A4/VREF+/VeREF+/TA2": "19",
  "TACLK/ADC10CLK/P1.0": "21",
  "TA0/P1.1": "22",
  "TA1/P1.2": "23",
  "TA2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TMS/TA0/P1.5": "26",
  "TDI/TCLK/TA1/P1.6": "27",
  "TDO/TDI/TA2/P1.7": "28",
  "TEST": "29",
  "VCC": "30",
  "P2.5/Rosc": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "P2.0/A0/ACLK": "bidirectional", "P2.1/A1/INCLK": "bidirectional", "P2.2/A2/TA0": "bidirectional", "P2.3/A3/VREF-/VeREF-/TA1": "bidirectional", "P2.4/A4/VREF+/VeREF+/TA2": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", TEST: "input", VCC: "power_in", "P2.5/Rosc": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1132IRHB";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, SOWB-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1222IDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1222.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class MSP430F1222IDW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "Rosc/P2.5": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "ACLK/A0/P2.0": "8",
  "INCLK/A1/P2.1": "9",
  "TA0/A2/P2.2": "10",
  "P3.0/A5/STE0": "11",
  "P3.1/SIMO0": "12",
  "P3.2/SOMI0": "13",
  "P3.3/UCLK0": "14",
  "P3.4/UTXD0": "15",
  "P3.5/URXD0": "16",
  "P3.6/A6": "17",
  "P3.7/A7": "18",
  "TA1/VeREF-/VREF-/A3/P2.3": "19",
  "TA2/VeREF+/VREF+/A4/P2.4": "20",
  "TACLK/ADC10CLK/P1.0": "21",
  "TA0/P1.1": "22",
  "TA1/P1.2": "23",
  "TA2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TMS/TA0/P1.5": "26",
  "TDI/TCLK/TA1/P1.6": "27",
  "TDO/TDI/TA2/P1.7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "Rosc/P2.5": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "ACLK/A0/P2.0": "bidirectional", "INCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/A5/STE0": "bidirectional", "P3.1/SIMO0": "bidirectional", "P3.2/SOMI0": "bidirectional", "P3.3/UCLK0": "bidirectional", "P3.4/UTXD0": "bidirectional", "P3.5/URXD0": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VeREF-/VREF-/A3/P2.3": "bidirectional", "TA2/VeREF+/VREF+/A4/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1222IDW";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1222IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1222.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430F1222IPW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "Rosc/P2.5": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "ACLK/A0/P2.0": "8",
  "INCLK/A1/P2.1": "9",
  "TA0/A2/P2.2": "10",
  "P3.0/A5/STE0": "11",
  "P3.1/SIMO0": "12",
  "P3.2/SOMI0": "13",
  "P3.3/UCLK0": "14",
  "P3.4/UTXD0": "15",
  "P3.5/URXD0": "16",
  "P3.6/A6": "17",
  "P3.7/A7": "18",
  "TA1/VeREF-/VREF-/A3/P2.3": "19",
  "TA2/VeREF+/VREF+/A4/P2.4": "20",
  "TACLK/ADC10CLK/P1.0": "21",
  "TA0/P1.1": "22",
  "TA1/P1.2": "23",
  "TA2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TMS/TA0/P1.5": "26",
  "TDI/TCLK/TA1/P1.6": "27",
  "TDO/TDI/TA2/P1.7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "Rosc/P2.5": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "ACLK/A0/P2.0": "bidirectional", "INCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/A5/STE0": "bidirectional", "P3.1/SIMO0": "bidirectional", "P3.2/SOMI0": "bidirectional", "P3.3/UCLK0": "bidirectional", "P3.4/UTXD0": "bidirectional", "P3.5/URXD0": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VeREF-/VREF-/A3/P2.3": "bidirectional", "TA2/VeREF+/VREF+/A4/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1222IPW";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1222IRHB`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1222.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430F1222IRHB extends Component.withPins({
  "VSS": "1",
  "XOUT": "2",
  "XIN": "3",
  "~{RST}/NMI": "5",
  "ACLK/A0/P2.0": "6",
  "INCLK/A1/P2.1": "7",
  "TA0/A2/P2.2": "8",
  "P3.0/A5/STE0": "9",
  "P3.1/SIMO0": "10",
  "P3.2/SOMI0": "11",
  "P3.3/UCLK0": "12",
  "P3.4/UTXD0": "13",
  "P3.5/URXD0": "14",
  "P3.6/A6": "15",
  "P3.7/A7": "16",
  "TA1/VeREF-/VREF-/A3/P2.3": "18",
  "TA2/VeREF+/VREF+/A4/P2.4": "19",
  "TACLK/ADC10CLK/P1.0": "21",
  "TA0/P1.1": "22",
  "TA1/P1.2": "23",
  "TA2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TMS/TA0/P1.5": "26",
  "TDI/TCLK/TA1/P1.6": "27",
  "TDO/TDI/TA2/P1.7": "28",
  "TEST": "29",
  "VCC": "30",
  "Rosc/P2.5": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "ACLK/A0/P2.0": "bidirectional", "INCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/A5/STE0": "bidirectional", "P3.1/SIMO0": "bidirectional", "P3.2/SOMI0": "bidirectional", "P3.3/UCLK0": "bidirectional", "P3.4/UTXD0": "bidirectional", "P3.5/URXD0": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VeREF-/VREF-/A3/P2.3": "bidirectional", "TA2/VeREF+/VREF+/A4/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", TEST: "input", VCC: "power_in", "Rosc/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1222IRHB";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, SOWB-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F122IDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f122.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class MSP430F122IDW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "Rosc/P2.5": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "ACLK/P2.0": "8",
  "INCLK/P2.1": "9",
  "TA0/CAOUT/P2.2": "10",
  "P3.0/STE0": "11",
  "P3.1/SIMO0": "12",
  "P3.2/SOMI0": "13",
  "P3.3/UCLK0": "14",
  "P3.4/UTXD0": "15",
  "P3.5/URXD0": "16",
  "P3.6": "17",
  "P3.7": "18",
  "TA1/CA0/P2.3": "19",
  "TA2/CA1/P2.4": "20",
  "TACLK/P1.0": "21",
  "TA0/P1.1": "22",
  "TA1/P1.2": "23",
  "TA2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TMS/TA0/P1.5": "26",
  "TDI/TCLK/TA1/P1.6": "27",
  "TDO/TDI/TA2/P1.7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "Rosc/P2.5": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "ACLK/P2.0": "bidirectional", "INCLK/P2.1": "bidirectional", "TA0/CAOUT/P2.2": "bidirectional", "P3.0/STE0": "bidirectional", "P3.1/SIMO0": "bidirectional", "P3.2/SOMI0": "bidirectional", "P3.3/UCLK0": "bidirectional", "P3.4/UTXD0": "bidirectional", "P3.5/URXD0": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", "TA1/CA0/P2.3": "bidirectional", "TA2/CA1/P2.4": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F122IDW";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F122IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f122.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430F122IPW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "Rosc/P2.5": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "ACLK/P2.0": "8",
  "INCLK/P2.1": "9",
  "TA0/CAOUT/P2.2": "10",
  "P3.0/STE0": "11",
  "P3.1/SIMO0": "12",
  "P3.2/SOMI0": "13",
  "P3.3/UCLK0": "14",
  "P3.4/UTXD0": "15",
  "P3.5/URXD0": "16",
  "P3.6": "17",
  "P3.7": "18",
  "TA1/CA0/P2.3": "19",
  "TA2/CA1/P2.4": "20",
  "TACLK/P1.0": "21",
  "TA0/P1.1": "22",
  "TA1/P1.2": "23",
  "TA2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TMS/TA0/P1.5": "26",
  "TDI/TCLK/TA1/P1.6": "27",
  "TDO/TDI/TA2/P1.7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "Rosc/P2.5": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "ACLK/P2.0": "bidirectional", "INCLK/P2.1": "bidirectional", "TA0/CAOUT/P2.2": "bidirectional", "P3.0/STE0": "bidirectional", "P3.1/SIMO0": "bidirectional", "P3.2/SOMI0": "bidirectional", "P3.3/UCLK0": "bidirectional", "P3.4/UTXD0": "bidirectional", "P3.5/URXD0": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", "TA1/CA0/P2.3": "bidirectional", "TA2/CA1/P2.4": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F122IPW";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F122IRHB`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f122.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430F122IRHB extends Component.withPins({
  "VSS": "1",
  "XOUT": "2",
  "XIN": "3",
  "~{RST}/NMI": "5",
  "ACLK/P2.0": "6",
  "INCLK/P2.1": "7",
  "TA0/CAOUT/P2.2": "8",
  "P3.0/STE0": "9",
  "P3.1/SIMO0": "10",
  "P3.2/SOMI0": "11",
  "P3.3/UCLK0": "12",
  "P3.4/UTXD0": "13",
  "P3.5/URXD0": "14",
  "P3.6": "15",
  "P3.7": "16",
  "TA1/CA0/P2.3": "18",
  "TA2/CA1/P2.4": "19",
  "TACLK/P1.0": "21",
  "TA0/P1.1": "22",
  "TA1/P1.2": "23",
  "TA2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TMS/TA0/P1.5": "26",
  "TDI/TCLK/TA1/P1.6": "27",
  "TDO/TDI/TA2/P1.7": "28",
  "TEST": "29",
  "VCC": "30",
  "Rosc/P2.5": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "ACLK/P2.0": "bidirectional", "INCLK/P2.1": "bidirectional", "TA0/CAOUT/P2.2": "bidirectional", "P3.0/STE0": "bidirectional", "P3.1/SIMO0": "bidirectional", "P3.2/SOMI0": "bidirectional", "P3.3/UCLK0": "bidirectional", "P3.4/UTXD0": "bidirectional", "P3.5/URXD0": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", "TA1/CA0/P2.3": "bidirectional", "TA2/CA1/P2.4": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", TEST: "input", VCC: "power_in", "Rosc/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F122IRHB";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 256B RAM, SOWB-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1232IDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1232.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class MSP430F1232IDW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "Rosc/P2.5": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "ACLK/A0/P2.0": "8",
  "INCLK/A1/P2.1": "9",
  "TA0/A2/P2.2": "10",
  "P3.0/A5/STE0": "11",
  "P3.1/SIMO0": "12",
  "P3.2/SOMI0": "13",
  "P3.3/UCLK0": "14",
  "P3.4/UTXD0": "15",
  "P3.5/URXD0": "16",
  "P3.6/A6": "17",
  "P3.7/A7": "18",
  "TA1/VeREF-/VREF-/A3/P2.3": "19",
  "TA2/VeREF+/VREF+/A4/P2.4": "20",
  "TACLK/ADC10CLK/P1.0": "21",
  "TA0/P1.1": "22",
  "TA1/P1.2": "23",
  "TA2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TMS/TA0/P1.5": "26",
  "TDI/TCLK/TA1/P1.6": "27",
  "TDO/TDI/TA2/P1.7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "Rosc/P2.5": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "ACLK/A0/P2.0": "bidirectional", "INCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/A5/STE0": "bidirectional", "P3.1/SIMO0": "bidirectional", "P3.2/SOMI0": "bidirectional", "P3.3/UCLK0": "bidirectional", "P3.4/UTXD0": "bidirectional", "P3.5/URXD0": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VeREF-/VREF-/A3/P2.3": "bidirectional", "TA2/VeREF+/VREF+/A4/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1232IDW";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 256B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1232IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1232.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430F1232IPW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "Rosc/P2.5": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "ACLK/A0/P2.0": "8",
  "INCLK/A1/P2.1": "9",
  "TA0/A2/P2.2": "10",
  "P3.0/A5/STE0": "11",
  "P3.1/SIMO0": "12",
  "P3.2/SOMI0": "13",
  "P3.3/UCLK0": "14",
  "P3.4/UTXD0": "15",
  "P3.5/URXD0": "16",
  "P3.6/A6": "17",
  "P3.7/A7": "18",
  "TA1/VeREF-/VREF-/A3/P2.3": "19",
  "TA2/VeREF+/VREF+/A4/P2.4": "20",
  "TACLK/ADC10CLK/P1.0": "21",
  "TA0/P1.1": "22",
  "TA1/P1.2": "23",
  "TA2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TMS/TA0/P1.5": "26",
  "TDI/TCLK/TA1/P1.6": "27",
  "TDO/TDI/TA2/P1.7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "Rosc/P2.5": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "ACLK/A0/P2.0": "bidirectional", "INCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/A5/STE0": "bidirectional", "P3.1/SIMO0": "bidirectional", "P3.2/SOMI0": "bidirectional", "P3.3/UCLK0": "bidirectional", "P3.4/UTXD0": "bidirectional", "P3.5/URXD0": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VeREF-/VREF-/A3/P2.3": "bidirectional", "TA2/VeREF+/VREF+/A4/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1232IPW";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F1232IRHB`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f1232.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430F1232IRHB extends Component.withPins({
  "VSS": "1",
  "XOUT": "2",
  "XIN": "3",
  "~{RST}/NMI": "5",
  "ACLK/A0/P2.0": "6",
  "INCLK/A1/P2.1": "7",
  "TA0/A2/P2.2": "8",
  "P3.0/A5/STE0": "9",
  "P3.1/SIMO0": "10",
  "P3.2/SOMI0": "11",
  "P3.3/UCLK0": "12",
  "P3.4/UTXD0": "13",
  "P3.5/URXD0": "14",
  "P3.6/A6": "15",
  "P3.7/A7": "16",
  "TA1/VeREF-/VREF-/A3/P2.3": "18",
  "TA2/VeREF+/VREF+/A4/P2.4": "19",
  "TACLK/ADC10CLK/P1.0": "21",
  "TA0/P1.1": "22",
  "TA1/P1.2": "23",
  "TA2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TMS/TA0/P1.5": "26",
  "TDI/TCLK/TA1/P1.6": "27",
  "TDO/TDI/TA2/P1.7": "28",
  "TEST": "29",
  "VCC": "30",
  "Rosc/P2.5": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "ACLK/A0/P2.0": "bidirectional", "INCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/A5/STE0": "bidirectional", "P3.1/SIMO0": "bidirectional", "P3.2/SOMI0": "bidirectional", "P3.3/UCLK0": "bidirectional", "P3.4/UTXD0": "bidirectional", "P3.5/URXD0": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VeREF-/VREF-/A3/P2.3": "bidirectional", "TA2/VeREF+/VREF+/A4/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", TEST: "input", VCC: "power_in", "Rosc/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F1232IRHB";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 256B RAM, SOWB-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F123IDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f123.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class MSP430F123IDW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "Rosc/P2.5": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "ACLK/P2.0": "8",
  "INCLK/P2.1": "9",
  "TA0/CAOUT/P2.2": "10",
  "P3.0/STE0": "11",
  "P3.1/SIMO0": "12",
  "P3.2/SOMI0": "13",
  "P3.3/UCLK0": "14",
  "P3.4/UTXD0": "15",
  "P3.5/URXD0": "16",
  "P3.6": "17",
  "P3.7": "18",
  "TA1/CA0/P2.3": "19",
  "TA2/CA1/P2.4": "20",
  "TACLK/P1.0": "21",
  "TA0/P1.1": "22",
  "TA1/P1.2": "23",
  "TA2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TMS/TA0/P1.5": "26",
  "TDI/TCLK/TA1/P1.6": "27",
  "TDO/TDI/TA2/P1.7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "Rosc/P2.5": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "ACLK/P2.0": "bidirectional", "INCLK/P2.1": "bidirectional", "TA0/CAOUT/P2.2": "bidirectional", "P3.0/STE0": "bidirectional", "P3.1/SIMO0": "bidirectional", "P3.2/SOMI0": "bidirectional", "P3.3/UCLK0": "bidirectional", "P3.4/UTXD0": "bidirectional", "P3.5/URXD0": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", "TA1/CA0/P2.3": "bidirectional", "TA2/CA1/P2.4": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F123IDW";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 256B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F123IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f123.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430F123IPW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "Rosc/P2.5": "3",
  "VSS": "4",
  "XOUT": "5",
  "XIN": "6",
  "~{RST}/NMI": "7",
  "ACLK/P2.0": "8",
  "INCLK/P2.1": "9",
  "TA0/CAOUT/P2.2": "10",
  "P3.0/STE0": "11",
  "P3.1/SIMO0": "12",
  "P3.2/SOMI0": "13",
  "P3.3/UCLK0": "14",
  "P3.4/UTXD0": "15",
  "P3.5/URXD0": "16",
  "P3.6": "17",
  "P3.7": "18",
  "TA1/CA0/P2.3": "19",
  "TA2/CA1/P2.4": "20",
  "TACLK/P1.0": "21",
  "TA0/P1.1": "22",
  "TA1/P1.2": "23",
  "TA2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TMS/TA0/P1.5": "26",
  "TDI/TCLK/TA1/P1.6": "27",
  "TDO/TDI/TA2/P1.7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "Rosc/P2.5": "bidirectional", VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "ACLK/P2.0": "bidirectional", "INCLK/P2.1": "bidirectional", "TA0/CAOUT/P2.2": "bidirectional", "P3.0/STE0": "bidirectional", "P3.1/SIMO0": "bidirectional", "P3.2/SOMI0": "bidirectional", "P3.3/UCLK0": "bidirectional", "P3.4/UTXD0": "bidirectional", "P3.5/URXD0": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", "TA1/CA0/P2.3": "bidirectional", "TA2/CA1/P2.4": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F123IPW";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F123IRHB`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f123.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430F123IRHB extends Component.withPins({
  "VSS": "1",
  "XOUT": "2",
  "XIN": "3",
  "~{RST}/NMI": "5",
  "ACLK/P2.0": "6",
  "INCLK/P2.1": "7",
  "TA0/CAOUT/P2.2": "8",
  "P3.0/STE0": "9",
  "P3.1/SIMO0": "10",
  "P3.2/SOMI0": "11",
  "P3.3/UCLK0": "12",
  "P3.4/UTXD0": "13",
  "P3.5/URXD0": "14",
  "P3.6": "15",
  "P3.7": "16",
  "TA1/CA0/P2.3": "18",
  "TA2/CA1/P2.4": "19",
  "TACLK/P1.0": "21",
  "TA0/P1.1": "22",
  "TA1/P1.2": "23",
  "TA2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TMS/TA0/P1.5": "26",
  "TDI/TCLK/TA1/P1.6": "27",
  "TDO/TDI/TA2/P1.7": "28",
  "TEST": "29",
  "VCC": "30",
  "Rosc/P2.5": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", XOUT: "output", XIN: "input", "~{RST}/NMI": "input", "ACLK/P2.0": "bidirectional", "INCLK/P2.1": "bidirectional", "TA0/CAOUT/P2.2": "bidirectional", "P3.0/STE0": "bidirectional", "P3.1/SIMO0": "bidirectional", "P3.2/SOMI0": "bidirectional", "P3.3/UCLK0": "bidirectional", "P3.4/UTXD0": "bidirectional", "P3.5/URXD0": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", "TA1/CA0/P2.3": "bidirectional", "TA2/CA1/P2.4": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", TEST: "input", VCC: "power_in", "Rosc/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F123IRHB";
  override referencePrefix = "U";
}

/**
 * 1kB + 256B Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2001IN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2001.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class MSP430F2001IN extends Component.withPins({
  "VCC": "1",
  "CA0/TA0CLK/ACLK/P1.0": "2",
  "CA1/TA0/P1.1": "3",
  "CA2/TA1/P1.2": "4",
  "CA3/CAOUT/P1.3": "5",
  "CA4/SMCLK/TCK/P1.4": "6",
  "CA5/TA0/TMS/P1.5": "7",
  "CA6/TA1/TDI/TCLK/P1.6": "8",
  "CA7/CAOUT/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "CA0/TA0CLK/ACLK/P1.0": "bidirectional", "CA1/TA0/P1.1": "bidirectional", "CA2/TA1/P1.2": "bidirectional", "CA3/CAOUT/P1.3": "bidirectional", "CA4/SMCLK/TCK/P1.4": "bidirectional", "CA5/TA0/TMS/P1.5": "bidirectional", "CA6/TA1/TDI/TCLK/P1.6": "bidirectional", "CA7/CAOUT/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2001IN";
  override referencePrefix = "U";
}

/**
 * 1kB + 256B Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2001IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2001.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430F2001IPW extends Component.withPins({
  "VCC": "1",
  "CA0/TA0CLK/ACLK/P1.0": "2",
  "CA1/TA0/P1.1": "3",
  "CA2/TA1/P1.2": "4",
  "CA3/CAOUT/P1.3": "5",
  "CA4/SMCLK/TCK/P1.4": "6",
  "CA5/TA0/TMS/P1.5": "7",
  "CA6/TA1/TDI/TCLK/P1.6": "8",
  "CA7/CAOUT/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "CA0/TA0CLK/ACLK/P1.0": "bidirectional", "CA1/TA0/P1.1": "bidirectional", "CA2/TA1/P1.2": "bidirectional", "CA3/CAOUT/P1.3": "bidirectional", "CA4/SMCLK/TCK/P1.4": "bidirectional", "CA5/TA0/TMS/P1.5": "bidirectional", "CA6/TA1/TDI/TCLK/P1.6": "bidirectional", "CA7/CAOUT/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2001IPW";
  override referencePrefix = "U";
}

/**
 * 1kB + 256B Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2001IRSA`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2001.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430F2001IRSA extends Component.withPins({
  "CA0/TA0CLK/ACLK/P1.0": "1",
  "CA1/TA0.0/P1.1": "2",
  "CA2/TA0.1/P1.2": "3",
  "CA3/CAOUT/P1.3": "4",
  "CA4/TCK/SMCLK/P1.4": "5",
  "CA5/TMS/TA0.0/P1.5": "6",
  "CA6/TDI/TCLK/TA0.1/P1.6": "7",
  "CA7/TDO/TDI/CAOUT/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "TEST/SBWTCK": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "VSS": "14",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "CA0/TA0CLK/ACLK/P1.0": "bidirectional", "CA1/TA0.0/P1.1": "bidirectional", "CA2/TA0.1/P1.2": "bidirectional", "CA3/CAOUT/P1.3": "bidirectional", "CA4/TCK/SMCLK/P1.4": "bidirectional", "CA5/TMS/TA0.0/P1.5": "bidirectional", "CA6/TDI/TCLK/TA0.1/P1.6": "bidirectional", "CA7/TDO/TDI/CAOUT/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", VSS: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2001IRSA";
  override referencePrefix = "U";
}

/**
 * 1kB + 256B Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2002IN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2002.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class MSP430F2002IN extends Component.withPins({
  "VCC": "1",
  "A0/TA0CLK/ACLK/P1.0": "2",
  "A1/TA0/P1.1": "3",
  "A2/TA1/P1.2": "4",
  "ADC10CLK/A3/VREF-/VeREF-/P1.3": "5",
  "SMCLK/A4/VREF+/VeREF+/TCK/P1.4": "6",
  "TA0/A5/SCLK/TMS/P1.5": "7",
  "TA1/A6/SDO/SCL/TDI/TCLK/P1.6": "8",
  "A7/SDI/SDA/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "A0/TA0CLK/ACLK/P1.0": "bidirectional", "A1/TA0/P1.1": "bidirectional", "A2/TA1/P1.2": "bidirectional", "ADC10CLK/A3/VREF-/VeREF-/P1.3": "bidirectional", "SMCLK/A4/VREF+/VeREF+/TCK/P1.4": "bidirectional", "TA0/A5/SCLK/TMS/P1.5": "bidirectional", "TA1/A6/SDO/SCL/TDI/TCLK/P1.6": "bidirectional", "A7/SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2002IN";
  override referencePrefix = "U";
}

/**
 * 1kB + 256B Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2002IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2002.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430F2002IPW extends Component.withPins({
  "VCC": "1",
  "A0/TA0CLK/ACLK/P1.0": "2",
  "A1/TA0/P1.1": "3",
  "A2/TA1/P1.2": "4",
  "ADC10CLK/A3/VREF-/VeREF-/P1.3": "5",
  "SMCLK/A4/VREF+/VeREF+/TCK/P1.4": "6",
  "TA0/A5/SCLK/TMS/P1.5": "7",
  "TA1/A6/SDO/SCL/TDI/TCLK/P1.6": "8",
  "A7/SDI/SDA/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "A0/TA0CLK/ACLK/P1.0": "bidirectional", "A1/TA0/P1.1": "bidirectional", "A2/TA1/P1.2": "bidirectional", "ADC10CLK/A3/VREF-/VeREF-/P1.3": "bidirectional", "SMCLK/A4/VREF+/VeREF+/TCK/P1.4": "bidirectional", "TA0/A5/SCLK/TMS/P1.5": "bidirectional", "TA1/A6/SDO/SCL/TDI/TCLK/P1.6": "bidirectional", "A7/SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2002IPW";
  override referencePrefix = "U";
}

/**
 * 1kB + 256B Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2002IRSA`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2002.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430F2002IRSA extends Component.withPins({
  "A0/TA0CLK/ACLK/P1.0": "1",
  "A1/TA0/P1.1": "2",
  "A2/TA1/P1.2": "3",
  "ADC10CLK/A3/VREF-/VeREF-/P1.3": "4",
  "SMCLK/A4/VREF+/VeREF+/TCK/P1.4": "5",
  "TA0/A5/SCLK/TMS/P1.5": "6",
  "TA1/A6/SDO/SCL/TDI/TCLK/P1.6": "7",
  "A7/SDI/SDA/TDO/TDI/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0/TA0CLK/ACLK/P1.0": "bidirectional", "A1/TA0/P1.1": "bidirectional", "A2/TA1/P1.2": "bidirectional", "ADC10CLK/A3/VREF-/VeREF-/P1.3": "bidirectional", "SMCLK/A4/VREF+/VeREF+/TCK/P1.4": "bidirectional", "TA0/A5/SCLK/TMS/P1.5": "bidirectional", "TA1/A6/SDO/SCL/TDI/TCLK/P1.6": "bidirectional", "A7/SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2002IRSA";
  override referencePrefix = "U";
}

/**
 * 1kB + 256B Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2003IN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2003.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class MSP430F2003IN extends Component.withPins({
  "VCC": "1",
  "TACLK/ACLK/A0+/P1.0": "2",
  "TA0/A0-/A4+/P1.1": "3",
  "TA1/A1+/A4-/P1.2": "4",
  "VREF/A1-/P1.3": "5",
  "SMCLK/A2+/TCK/P1.4": "6",
  "TA0/A2-/SCLK/TMS/P1.5": "7",
  "TA1/A3+/SDO/SCL/TDI/TCLK/P1.6": "8",
  "A3-/SDI/SDA/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "TACLK/ACLK/A0+/P1.0": "bidirectional", "TA0/A0-/A4+/P1.1": "bidirectional", "TA1/A1+/A4-/P1.2": "bidirectional", "VREF/A1-/P1.3": "bidirectional", "SMCLK/A2+/TCK/P1.4": "bidirectional", "TA0/A2-/SCLK/TMS/P1.5": "bidirectional", "TA1/A3+/SDO/SCL/TDI/TCLK/P1.6": "bidirectional", "A3-/SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2003IN";
  override referencePrefix = "U";
}

/**
 * 1kB + 256B Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2003IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2003.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430F2003IPW extends Component.withPins({
  "VCC": "1",
  "TACLK/ACLK/A0+/P1.0": "2",
  "TA0/A0-/A4+/P1.1": "3",
  "TA1/A1+/A4-/P1.2": "4",
  "VREF/A1-/P1.3": "5",
  "SMCLK/A2+/TCK/P1.4": "6",
  "TA0/A2-/SCLK/TMS/P1.5": "7",
  "TA1/A3+/SDO/SCL/TDI/TCLK/P1.6": "8",
  "A3-/SDI/SDA/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "TACLK/ACLK/A0+/P1.0": "bidirectional", "TA0/A0-/A4+/P1.1": "bidirectional", "TA1/A1+/A4-/P1.2": "bidirectional", "VREF/A1-/P1.3": "bidirectional", "SMCLK/A2+/TCK/P1.4": "bidirectional", "TA0/A2-/SCLK/TMS/P1.5": "bidirectional", "TA1/A3+/SDO/SCL/TDI/TCLK/P1.6": "bidirectional", "A3-/SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2003IPW";
  override referencePrefix = "U";
}

/**
 * 1kB + 256B Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2003IRSA`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2003.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430F2003IRSA extends Component.withPins({
  "TACLK/ACLK/A0+/P1.0": "1",
  "TA0/A0-/A4+/P1.1": "2",
  "TA1/A1+/A4-/P1.2": "3",
  "VREF/A1-/P1.3": "4",
  "SMCLK/A2+/TCK/P1.4": "5",
  "TA0/A2-/SCLK/TMS/P1.5": "6",
  "TA1/A3+/SDO/SCL/TDI/TCLK/P1.6": "7",
  "A3-/SDI/SDA/TDO/TDI/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TACLK/ACLK/A0+/P1.0": "bidirectional", "TA0/A0-/A4+/P1.1": "bidirectional", "TA1/A1+/A4-/P1.2": "bidirectional", "VREF/A1-/P1.3": "bidirectional", "SMCLK/A2+/TCK/P1.4": "bidirectional", "TA0/A2-/SCLK/TMS/P1.5": "bidirectional", "TA1/A3+/SDO/SCL/TDI/TCLK/P1.6": "bidirectional", "A3-/SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2003IRSA";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2011IN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2011.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class MSP430F2011IN extends Component.withPins({
  "VCC": "1",
  "CA0/TA0CLK/ACLK/P1.0": "2",
  "CA1/TA0/P1.1": "3",
  "CA2/TA1/P1.2": "4",
  "CA3/CAOUT/P1.3": "5",
  "CA4/SMCLK/TCK/P1.4": "6",
  "CA5/TA0/TMS/P1.5": "7",
  "CA6/TA1/TDI/TCLK/P1.6": "8",
  "CA7/CAOUT/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "CA0/TA0CLK/ACLK/P1.0": "bidirectional", "CA1/TA0/P1.1": "bidirectional", "CA2/TA1/P1.2": "bidirectional", "CA3/CAOUT/P1.3": "bidirectional", "CA4/SMCLK/TCK/P1.4": "bidirectional", "CA5/TA0/TMS/P1.5": "bidirectional", "CA6/TA1/TDI/TCLK/P1.6": "bidirectional", "CA7/CAOUT/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2011IN";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2011IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2011.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430F2011IPW extends Component.withPins({
  "VCC": "1",
  "CA0/TA0CLK/ACLK/P1.0": "2",
  "CA1/TA0/P1.1": "3",
  "CA2/TA1/P1.2": "4",
  "CA3/CAOUT/P1.3": "5",
  "CA4/SMCLK/TCK/P1.4": "6",
  "CA5/TA0/TMS/P1.5": "7",
  "CA6/TA1/TDI/TCLK/P1.6": "8",
  "CA7/CAOUT/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "CA0/TA0CLK/ACLK/P1.0": "bidirectional", "CA1/TA0/P1.1": "bidirectional", "CA2/TA1/P1.2": "bidirectional", "CA3/CAOUT/P1.3": "bidirectional", "CA4/SMCLK/TCK/P1.4": "bidirectional", "CA5/TA0/TMS/P1.5": "bidirectional", "CA6/TA1/TDI/TCLK/P1.6": "bidirectional", "CA7/CAOUT/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2011IPW";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2011IRSA`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2011.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430F2011IRSA extends Component.withPins({
  "CA0/TA0CLK/ACLK/P1.0": "1",
  "CA1/TA0.0/P1.1": "2",
  "CA2/TA0.1/P1.2": "3",
  "CA3/CAOUT/P1.3": "4",
  "CA4/TCK/SMCLK/P1.4": "5",
  "CA5/TMS/TA0.0/P1.5": "6",
  "CA6/TDI/TCLK/TA0.1/P1.6": "7",
  "CA7/TDO/TDI/CAOUT/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "TEST/SBWTCK": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "VSS": "14",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "CA0/TA0CLK/ACLK/P1.0": "bidirectional", "CA1/TA0.0/P1.1": "bidirectional", "CA2/TA0.1/P1.2": "bidirectional", "CA3/CAOUT/P1.3": "bidirectional", "CA4/TCK/SMCLK/P1.4": "bidirectional", "CA5/TMS/TA0.0/P1.5": "bidirectional", "CA6/TDI/TCLK/TA0.1/P1.6": "bidirectional", "CA7/TDO/TDI/CAOUT/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", VSS: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2011IRSA";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2012IN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2012.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class MSP430F2012IN extends Component.withPins({
  "VCC": "1",
  "A0/TA0CLK/ACLK/P1.0": "2",
  "A1/TA0/P1.1": "3",
  "A2/TA1/P1.2": "4",
  "ADC10CLK/A3/VREF-/VeREF-/P1.3": "5",
  "SMCLK/A4/VREF+/VeREF+/TCK/P1.4": "6",
  "TA0/A5/SCLK/TMS/P1.5": "7",
  "TA1/A6/SDO/SCL/TDI/TCLK/P1.6": "8",
  "A7/SDI/SDA/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "A0/TA0CLK/ACLK/P1.0": "bidirectional", "A1/TA0/P1.1": "bidirectional", "A2/TA1/P1.2": "bidirectional", "ADC10CLK/A3/VREF-/VeREF-/P1.3": "bidirectional", "SMCLK/A4/VREF+/VeREF+/TCK/P1.4": "bidirectional", "TA0/A5/SCLK/TMS/P1.5": "bidirectional", "TA1/A6/SDO/SCL/TDI/TCLK/P1.6": "bidirectional", "A7/SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2012IN";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2012IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2012.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430F2012IPW extends Component.withPins({
  "VCC": "1",
  "A0/TA0CLK/ACLK/P1.0": "2",
  "A1/TA0/P1.1": "3",
  "A2/TA1/P1.2": "4",
  "ADC10CLK/A3/VREF-/VeREF-/P1.3": "5",
  "SMCLK/A4/VREF+/VeREF+/TCK/P1.4": "6",
  "TA0/A5/SCLK/TMS/P1.5": "7",
  "TA1/A6/SDO/SCL/TDI/TCLK/P1.6": "8",
  "A7/SDI/SDA/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "A0/TA0CLK/ACLK/P1.0": "bidirectional", "A1/TA0/P1.1": "bidirectional", "A2/TA1/P1.2": "bidirectional", "ADC10CLK/A3/VREF-/VeREF-/P1.3": "bidirectional", "SMCLK/A4/VREF+/VeREF+/TCK/P1.4": "bidirectional", "TA0/A5/SCLK/TMS/P1.5": "bidirectional", "TA1/A6/SDO/SCL/TDI/TCLK/P1.6": "bidirectional", "A7/SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2012IPW";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2012IRSA`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2012.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430F2012IRSA extends Component.withPins({
  "A0/TA0CLK/ACLK/P1.0": "1",
  "A1/TA0/P1.1": "2",
  "A2/TA1/P1.2": "3",
  "ADC10CLK/A3/VREF-/VeREF-/P1.3": "4",
  "SMCLK/A4/VREF+/VeREF+/TCK/P1.4": "5",
  "TA0/A5/SCLK/TMS/P1.5": "6",
  "TA1/A6/SDO/SCL/TDI/TCLK/P1.6": "7",
  "A7/SDI/SDA/TDO/TDI/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "A0/TA0CLK/ACLK/P1.0": "bidirectional", "A1/TA0/P1.1": "bidirectional", "A2/TA1/P1.2": "bidirectional", "ADC10CLK/A3/VREF-/VeREF-/P1.3": "bidirectional", "SMCLK/A4/VREF+/VeREF+/TCK/P1.4": "bidirectional", "TA0/A5/SCLK/TMS/P1.5": "bidirectional", "TA1/A6/SDO/SCL/TDI/TCLK/P1.6": "bidirectional", "A7/SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2012IRSA";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2013IN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2013.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class MSP430F2013IN extends Component.withPins({
  "VCC": "1",
  "TACLK/ACLK/A0+/P1.0": "2",
  "TA0/A0-/A4+/P1.1": "3",
  "TA1/A1+/A4-/P1.2": "4",
  "VREF/A1-/P1.3": "5",
  "SMCLK/A2+/TCK/P1.4": "6",
  "TA0/A2-/SCLK/TMS/P1.5": "7",
  "TA1/A3+/SDO/SCL/TDI/TCLK/P1.6": "8",
  "A3-/SDI/SDA/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "TACLK/ACLK/A0+/P1.0": "bidirectional", "TA0/A0-/A4+/P1.1": "bidirectional", "TA1/A1+/A4-/P1.2": "bidirectional", "VREF/A1-/P1.3": "bidirectional", "SMCLK/A2+/TCK/P1.4": "bidirectional", "TA0/A2-/SCLK/TMS/P1.5": "bidirectional", "TA1/A3+/SDO/SCL/TDI/TCLK/P1.6": "bidirectional", "A3-/SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2013IN";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2013IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2013.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430F2013IPW extends Component.withPins({
  "VCC": "1",
  "TACLK/ACLK/A0+/P1.0": "2",
  "TA0/A0-/A4+/P1.1": "3",
  "TA1/A1+/A4-/P1.2": "4",
  "VREF/A1-/P1.3": "5",
  "SMCLK/A2+/TCK/P1.4": "6",
  "TA0/A2-/SCLK/TMS/P1.5": "7",
  "TA1/A3+/SDO/SCL/TDI/TCLK/P1.6": "8",
  "A3-/SDI/SDA/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "TACLK/ACLK/A0+/P1.0": "bidirectional", "TA0/A0-/A4+/P1.1": "bidirectional", "TA1/A1+/A4-/P1.2": "bidirectional", "VREF/A1-/P1.3": "bidirectional", "SMCLK/A2+/TCK/P1.4": "bidirectional", "TA0/A2-/SCLK/TMS/P1.5": "bidirectional", "TA1/A3+/SDO/SCL/TDI/TCLK/P1.6": "bidirectional", "A3-/SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2013IPW";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2013IRSA`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2013.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430F2013IRSA extends Component.withPins({
  "TACLK/ACLK/A0+/P1.0": "1",
  "TA0/A0-/A4+/P1.1": "2",
  "TA1/A1+/A4-/P1.2": "3",
  "VREF/A1-/P1.3": "4",
  "SMCLK/A2+/TCK/P1.4": "5",
  "TA0/A2-/SCLK/TMS/P1.5": "6",
  "TA1/A3+/SDO/SCL/TDI/TCLK/P1.6": "7",
  "A3-/SDI/SDA/TDO/TDI/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TACLK/ACLK/A0+/P1.0": "bidirectional", "TA0/A0-/A4+/P1.1": "bidirectional", "TA1/A1+/A4-/P1.2": "bidirectional", "VREF/A1-/P1.3": "bidirectional", "SMCLK/A2+/TCK/P1.4": "bidirectional", "TA0/A2-/SCLK/TMS/P1.5": "bidirectional", "TA1/A3+/SDO/SCL/TDI/TCLK/P1.6": "bidirectional", "A3-/SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2013IRSA";
  override referencePrefix = "U";
}

/**
 * 1kB + 256B Flash, 128B RAM, TVSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2101IDGV`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2101.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430F2101IDGV extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/CA5": "3",
  "VSS": "4",
  "P2.7/XOUT/CA7": "5",
  "P2.6/XIN/CA6": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK/CA2": "8",
  "P2.1/INCLK/CA3": "9",
  "P2.2/CAOUT/TA0/CA4": "10",
  "P2.3/TA1/CA0": "11",
  "P2.4/TA2/CA1": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "19",
  "TA2/TDI/TDO/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2101IDGV";
  override referencePrefix = "U";
}

/**
 * 1kB + 256B Flash, 128B RAM, SOWB-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2101IDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2101.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class MSP430F2101IDW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/CA5": "3",
  "VSS": "4",
  "P2.7/XOUT/CA7": "5",
  "P2.6/XIN/CA6": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK/CA2": "8",
  "P2.1/INCLK/CA3": "9",
  "P2.2/CAOUT/TA0/CA4": "10",
  "P2.3/TA1/CA0": "11",
  "P2.4/TA2/CA1": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "19",
  "TA2/TDI/TDO/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2101IDW";
  override referencePrefix = "U";
}

/**
 * 1kB + 256B Flash, 128B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2101IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2101.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430F2101IPW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/CA5": "3",
  "VSS": "4",
  "P2.7/XOUT/CA7": "5",
  "P2.6/XIN/CA6": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK/CA2": "8",
  "P2.1/INCLK/CA3": "9",
  "P2.2/CAOUT/TA0/CA4": "10",
  "P2.3/TA1/CA0": "11",
  "P2.4/TA2/CA1": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "19",
  "TA2/TDI/TDO/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2101IPW";
  override referencePrefix = "U";
}

/**
 * 1kB + 256B Flash, 128B RAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2101IRGE`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2101.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 */
export class MSP430F2101IRGE extends Component.withPins({
  "VSS": "2",
  "P2.7/XOUT/CA7": "3",
  "P2.6/XIN/CA6": "4",
  "~{RST}/NMI": "5",
  "P2.0/ACLK/CA2": "6",
  "P2.1/INCLK/CA3": "7",
  "P2.2/CAOUT/TA0/CA4": "8",
  "P2.3/TA1/CA0": "10",
  "P2.4/TA2/CA1": "11",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "20",
  "TA2/TDI/TDO/P1.7": "21",
  "TEST": "22",
  "VCC": "23",
  "P2.5/CA5": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2101IRGE";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, TVSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2111IDGV`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2111.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430F2111IDGV extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/CA5": "3",
  "VSS": "4",
  "P2.7/XOUT/CA7": "5",
  "P2.6/XIN/CA6": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK/CA2": "8",
  "P2.1/INCLK/CA3": "9",
  "P2.2/CAOUT/TA0/CA4": "10",
  "P2.3/TA1/CA0": "11",
  "P2.4/TA2/CA1": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "19",
  "TA2/TDI/TDO/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2111IDGV";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, SOWB-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2111IDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2111.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class MSP430F2111IDW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/CA5": "3",
  "VSS": "4",
  "P2.7/XOUT/CA7": "5",
  "P2.6/XIN/CA6": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK/CA2": "8",
  "P2.1/INCLK/CA3": "9",
  "P2.2/CAOUT/TA0/CA4": "10",
  "P2.3/TA1/CA0": "11",
  "P2.4/TA2/CA1": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "19",
  "TA2/TDI/TDO/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2111IDW";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2111IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2111.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430F2111IPW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/CA5": "3",
  "VSS": "4",
  "P2.7/XOUT/CA7": "5",
  "P2.6/XIN/CA6": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK/CA2": "8",
  "P2.1/INCLK/CA3": "9",
  "P2.2/CAOUT/TA0/CA4": "10",
  "P2.3/TA1/CA0": "11",
  "P2.4/TA2/CA1": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "19",
  "TA2/TDI/TDO/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2111IPW";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2111IRGE`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2111.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 */
export class MSP430F2111IRGE extends Component.withPins({
  "VSS": "2",
  "P2.7/XOUT/CA7": "3",
  "P2.6/XIN/CA6": "4",
  "~{RST}/NMI": "5",
  "P2.0/ACLK/CA2": "6",
  "P2.1/INCLK/CA3": "7",
  "P2.2/CAOUT/TA0/CA4": "8",
  "P2.3/TA1/CA0": "10",
  "P2.4/TA2/CA1": "11",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "20",
  "TA2/TDI/TDO/P1.7": "21",
  "TEST": "22",
  "VCC": "23",
  "P2.5/CA5": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2111IRGE";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 256B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2112IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2112.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430F2112IPW extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "CA5/Rosc/P2.5": "3",
  "DVSS": "4",
  "CA7/XOUT/P2.7": "5",
  "CA6/XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "CA2/ACLK/A0/P2.0": "8",
  "CA3/TAINCLK/SMCLK/A1/P2.1": "9",
  "CAOUT/CA4/TA0.0/A2/P2.2": "10",
  "P3.0/UCB0STE/UCA0CLK/A5": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "P3.4/UCA0TXD/UCA0SIMO": "15",
  "P3.5/UCA0RXD/UCA0SOMI": "16",
  "P3.6/A6/TA1.0": "17",
  "P3.7/A7/TA1.1": "18",
  "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "19",
  "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "20",
  "CAOUT/TACLK/ADC10CLK/P1.0": "21",
  "TA1.0/TA0.0/P1.1": "22",
  "TA0.1/P1.2": "23",
  "TA0.2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TA0.0/TMS/P1.5": "26",
  "TA0.1/TDI/P1.6": "27",
  "TA0.2/TDI/TDO/P1.7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "CA5/Rosc/P2.5": "bidirectional", DVSS: "power_in", "CA7/XOUT/P2.7": "bidirectional", "CA6/XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "CA2/ACLK/A0/P2.0": "bidirectional", "CA3/TAINCLK/SMCLK/A1/P2.1": "bidirectional", "CAOUT/CA4/TA0.0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.0": "bidirectional", "P3.7/A7/TA1.1": "bidirectional", "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "bidirectional", "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "bidirectional", "CAOUT/TACLK/ADC10CLK/P1.0": "bidirectional", "TA1.0/TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/P1.6": "bidirectional", "TA0.2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2112IPW";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2112IRHB`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2112.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430F2112IRHB extends Component.withPins({
  "DVSS": "1",
  "CA7/XOUT/P2.7": "2",
  "CA6/XIN/P2.6": "3",
  "~{RST}/NMI/SBWTDIO": "5",
  "CA2/ACLK/A0/P2.0": "6",
  "CA3/TAINCLK/SMCLK/A1/P2.1": "7",
  "CAOUT/CA4/TA0.0/A2/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "P3.4/UCA0TXD/UCA0SIMO": "13",
  "P3.5/UCA0RXD/UCA0SOMI": "14",
  "P3.6/A6/TA1.0": "15",
  "P3.7/A7/TA1.1": "16",
  "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "18",
  "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "19",
  "CAOUT/TACLK/ADC10CLK/P1.0": "21",
  "TA1.0/TA0.0/P1.1": "22",
  "TA0.1/P1.2": "23",
  "TA0.2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TA0.0/TMS/P1.5": "26",
  "TA0.1/TDI/P1.6": "27",
  "TA0.2/TDI/TDO/P1.7": "28",
  "SBWTCK/TEST": "29",
  "DVCC": "30",
  "CA5/Rosc/P2.5": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS: "power_in", "CA7/XOUT/P2.7": "bidirectional", "CA6/XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "CA2/ACLK/A0/P2.0": "bidirectional", "CA3/TAINCLK/SMCLK/A1/P2.1": "bidirectional", "CAOUT/CA4/TA0.0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.0": "bidirectional", "P3.7/A7/TA1.1": "bidirectional", "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "bidirectional", "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "bidirectional", "CAOUT/TACLK/ADC10CLK/P1.0": "bidirectional", "TA1.0/TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/P1.6": "bidirectional", "TA0.2/TDI/TDO/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC: "power_in", "CA5/Rosc/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2112IRHB";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2112IRTV`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2112.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430F2112IRTV extends Component.withPins({
  "DVSS": "1",
  "CA7/XOUT/P2.7": "2",
  "CA6/XIN/P2.6": "3",
  "~{RST}/NMI/SBWTDIO": "5",
  "CA2/ACLK/A0/P2.0": "6",
  "CA3/TAINCLK/SMCLK/A1/P2.1": "7",
  "CAOUT/CA4/TA0.0/A2/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "P3.4/UCA0TXD/UCA0SIMO": "13",
  "P3.5/UCA0RXD/UCA0SOMI": "14",
  "P3.6/A6/TA1.0": "15",
  "P3.7/A7/TA1.1": "16",
  "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "18",
  "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "19",
  "CAOUT/TACLK/ADC10CLK/P1.0": "21",
  "TA1.0/TA0.0/P1.1": "22",
  "TA0.1/P1.2": "23",
  "TA0.2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TA0.0/TMS/P1.5": "26",
  "TA0.1/TDI/P1.6": "27",
  "TA0.2/TDI/TDO/P1.7": "28",
  "SBWTCK/TEST": "29",
  "DVCC": "30",
  "CA5/Rosc/P2.5": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS: "power_in", "CA7/XOUT/P2.7": "bidirectional", "CA6/XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "CA2/ACLK/A0/P2.0": "bidirectional", "CA3/TAINCLK/SMCLK/A1/P2.1": "bidirectional", "CAOUT/CA4/TA0.0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.0": "bidirectional", "P3.7/A7/TA1.1": "bidirectional", "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "bidirectional", "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "bidirectional", "CAOUT/TACLK/ADC10CLK/P1.0": "bidirectional", "TA1.0/TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/P1.6": "bidirectional", "TA0.2/TDI/TDO/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC: "power_in", "CA5/Rosc/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2112IRTV";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, TVSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2121IDGV`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2121.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430F2121IDGV extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/CA5": "3",
  "VSS": "4",
  "P2.7/XOUT/CA7": "5",
  "P2.6/XIN/CA6": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK/CA2": "8",
  "P2.1/INCLK/CA3": "9",
  "P2.2/CAOUT/TA0/CA4": "10",
  "P2.3/TA1/CA0": "11",
  "P2.4/TA2/CA1": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "19",
  "TA2/TDI/TDO/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2121IDGV";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, SOWB-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2121IDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2121.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class MSP430F2121IDW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/CA5": "3",
  "VSS": "4",
  "P2.7/XOUT/CA7": "5",
  "P2.6/XIN/CA6": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK/CA2": "8",
  "P2.1/INCLK/CA3": "9",
  "P2.2/CAOUT/TA0/CA4": "10",
  "P2.3/TA1/CA0": "11",
  "P2.4/TA2/CA1": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "19",
  "TA2/TDI/TDO/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2121IDW";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2121IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2121.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430F2121IPW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/CA5": "3",
  "VSS": "4",
  "P2.7/XOUT/CA7": "5",
  "P2.6/XIN/CA6": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK/CA2": "8",
  "P2.1/INCLK/CA3": "9",
  "P2.2/CAOUT/TA0/CA4": "10",
  "P2.3/TA1/CA0": "11",
  "P2.4/TA2/CA1": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "19",
  "TA2/TDI/TDO/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2121IPW";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 256B RAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2121IRGE`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2121.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 */
export class MSP430F2121IRGE extends Component.withPins({
  "VSS": "2",
  "P2.7/XOUT/CA7": "3",
  "P2.6/XIN/CA6": "4",
  "~{RST}/NMI": "5",
  "P2.0/ACLK/CA2": "6",
  "P2.1/INCLK/CA3": "7",
  "P2.2/CAOUT/TA0/CA4": "8",
  "P2.3/TA1/CA0": "10",
  "P2.4/TA2/CA1": "11",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "20",
  "TA2/TDI/TDO/P1.7": "21",
  "TEST": "22",
  "VCC": "23",
  "P2.5/CA5": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2121IRGE";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 512B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2122IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2122.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430F2122IPW extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "CA5/Rosc/P2.5": "3",
  "DVSS": "4",
  "CA7/XOUT/P2.7": "5",
  "CA6/XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "CA2/ACLK/A0/P2.0": "8",
  "CA3/TAINCLK/SMCLK/A1/P2.1": "9",
  "CAOUT/CA4/TA0.0/A2/P2.2": "10",
  "P3.0/UCB0STE/UCA0CLK/A5": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "P3.4/UCA0TXD/UCA0SIMO": "15",
  "P3.5/UCA0RXD/UCA0SOMI": "16",
  "P3.6/A6/TA1.0": "17",
  "P3.7/A7/TA1.1": "18",
  "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "19",
  "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "20",
  "CAOUT/TACLK/ADC10CLK/P1.0": "21",
  "TA1.0/TA0.0/P1.1": "22",
  "TA0.1/P1.2": "23",
  "TA0.2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TA0.0/TMS/P1.5": "26",
  "TA0.1/TDI/P1.6": "27",
  "TA0.2/TDI/TDO/P1.7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "CA5/Rosc/P2.5": "bidirectional", DVSS: "power_in", "CA7/XOUT/P2.7": "bidirectional", "CA6/XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "CA2/ACLK/A0/P2.0": "bidirectional", "CA3/TAINCLK/SMCLK/A1/P2.1": "bidirectional", "CAOUT/CA4/TA0.0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.0": "bidirectional", "P3.7/A7/TA1.1": "bidirectional", "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "bidirectional", "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "bidirectional", "CAOUT/TACLK/ADC10CLK/P1.0": "bidirectional", "TA1.0/TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/P1.6": "bidirectional", "TA0.2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2122IPW";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 512B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2122IRHB`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2122.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430F2122IRHB extends Component.withPins({
  "DVSS": "1",
  "CA7/XOUT/P2.7": "2",
  "CA6/XIN/P2.6": "3",
  "~{RST}/NMI/SBWTDIO": "5",
  "CA2/ACLK/A0/P2.0": "6",
  "CA3/TAINCLK/SMCLK/A1/P2.1": "7",
  "CAOUT/CA4/TA0.0/A2/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "P3.4/UCA0TXD/UCA0SIMO": "13",
  "P3.5/UCA0RXD/UCA0SOMI": "14",
  "P3.6/A6/TA1.0": "15",
  "P3.7/A7/TA1.1": "16",
  "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "18",
  "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "19",
  "CAOUT/TACLK/ADC10CLK/P1.0": "21",
  "TA1.0/TA0.0/P1.1": "22",
  "TA0.1/P1.2": "23",
  "TA0.2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TA0.0/TMS/P1.5": "26",
  "TA0.1/TDI/P1.6": "27",
  "TA0.2/TDI/TDO/P1.7": "28",
  "SBWTCK/TEST": "29",
  "DVCC": "30",
  "CA5/Rosc/P2.5": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS: "power_in", "CA7/XOUT/P2.7": "bidirectional", "CA6/XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "CA2/ACLK/A0/P2.0": "bidirectional", "CA3/TAINCLK/SMCLK/A1/P2.1": "bidirectional", "CAOUT/CA4/TA0.0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.0": "bidirectional", "P3.7/A7/TA1.1": "bidirectional", "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "bidirectional", "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "bidirectional", "CAOUT/TACLK/ADC10CLK/P1.0": "bidirectional", "TA1.0/TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/P1.6": "bidirectional", "TA0.2/TDI/TDO/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC: "power_in", "CA5/Rosc/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2122IRHB";
  override referencePrefix = "U";
}

/**
 * 4kB + 256B Flash, 512B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2122IRTV`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2122.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430F2122IRTV extends Component.withPins({
  "DVSS": "1",
  "CA7/XOUT/P2.7": "2",
  "CA6/XIN/P2.6": "3",
  "~{RST}/NMI/SBWTDIO": "5",
  "CA2/ACLK/A0/P2.0": "6",
  "CA3/TAINCLK/SMCLK/A1/P2.1": "7",
  "CAOUT/CA4/TA0.0/A2/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "P3.4/UCA0TXD/UCA0SIMO": "13",
  "P3.5/UCA0RXD/UCA0SOMI": "14",
  "P3.6/A6/TA1.0": "15",
  "P3.7/A7/TA1.1": "16",
  "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "18",
  "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "19",
  "CAOUT/TACLK/ADC10CLK/P1.0": "21",
  "TA1.0/TA0.0/P1.1": "22",
  "TA0.1/P1.2": "23",
  "TA0.2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TA0.0/TMS/P1.5": "26",
  "TA0.1/TDI/P1.6": "27",
  "TA0.2/TDI/TDO/P1.7": "28",
  "SBWTCK/TEST": "29",
  "DVCC": "30",
  "CA5/Rosc/P2.5": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS: "power_in", "CA7/XOUT/P2.7": "bidirectional", "CA6/XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "CA2/ACLK/A0/P2.0": "bidirectional", "CA3/TAINCLK/SMCLK/A1/P2.1": "bidirectional", "CAOUT/CA4/TA0.0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.0": "bidirectional", "P3.7/A7/TA1.1": "bidirectional", "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "bidirectional", "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "bidirectional", "CAOUT/TACLK/ADC10CLK/P1.0": "bidirectional", "TA1.0/TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/P1.6": "bidirectional", "TA0.2/TDI/TDO/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC: "power_in", "CA5/Rosc/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2122IRTV";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 256B RAM, TVSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2131IDGV`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2131.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430F2131IDGV extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/CA5": "3",
  "VSS": "4",
  "P2.7/XOUT/CA7": "5",
  "P2.6/XIN/CA6": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK/CA2": "8",
  "P2.1/INCLK/CA3": "9",
  "P2.2/CAOUT/TA0/CA4": "10",
  "P2.3/TA1/CA0": "11",
  "P2.4/TA2/CA1": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "19",
  "TA2/TDI/TDO/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2131IDGV";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 256B RAM, SOWB-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2131IDW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2131.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class MSP430F2131IDW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/CA5": "3",
  "VSS": "4",
  "P2.7/XOUT/CA7": "5",
  "P2.6/XIN/CA6": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK/CA2": "8",
  "P2.1/INCLK/CA3": "9",
  "P2.2/CAOUT/TA0/CA4": "10",
  "P2.3/TA1/CA0": "11",
  "P2.4/TA2/CA1": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "19",
  "TA2/TDI/TDO/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2131IDW";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2131IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2131.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430F2131IPW extends Component.withPins({
  "TEST": "1",
  "VCC": "2",
  "P2.5/CA5": "3",
  "VSS": "4",
  "P2.7/XOUT/CA7": "5",
  "P2.6/XIN/CA6": "6",
  "~{RST}/NMI": "7",
  "P2.0/ACLK/CA2": "8",
  "P2.1/INCLK/CA3": "9",
  "P2.2/CAOUT/TA0/CA4": "10",
  "P2.3/TA1/CA0": "11",
  "P2.4/TA2/CA1": "12",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "19",
  "TA2/TDI/TDO/P1.7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2131IPW";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 256B RAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2131IRGE`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2131.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 */
export class MSP430F2131IRGE extends Component.withPins({
  "VSS": "2",
  "P2.7/XOUT/CA7": "3",
  "P2.6/XIN/CA6": "4",
  "~{RST}/NMI": "5",
  "P2.0/ACLK/CA2": "6",
  "P2.1/INCLK/CA3": "7",
  "P2.2/CAOUT/TA0/CA4": "8",
  "P2.3/TA1/CA0": "10",
  "P2.4/TA2/CA1": "11",
  "TACLK/P1.0": "13",
  "TA0/P1.1": "14",
  "TA1/P1.2": "15",
  "TA2/P1.3": "16",
  "SMCLK/TCK/P1.4": "17",
  "TA0/TMS/P1.5": "18",
  "TA1/TCLK/TDI/P1.6": "20",
  "TA2/TDI/TDO/P1.7": "21",
  "TEST": "22",
  "VCC": "23",
  "P2.5/CA5": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", "P2.7/XOUT/CA7": "bidirectional", "P2.6/XIN/CA6": "bidirectional", "~{RST}/NMI": "input", "P2.0/ACLK/CA2": "bidirectional", "P2.1/INCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.3/TA1/CA0": "bidirectional", "P2.4/TA2/CA1": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TCLK/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", TEST: "input", VCC: "power_in", "P2.5/CA5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2131IRGE";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 512B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2132IPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2132.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430F2132IPW extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "CA5/Rosc/P2.5": "3",
  "DVSS": "4",
  "CA7/XOUT/P2.7": "5",
  "CA6/XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "CA2/ACLK/A0/P2.0": "8",
  "CA3/TAINCLK/SMCLK/A1/P2.1": "9",
  "CAOUT/CA4/TA0.0/A2/P2.2": "10",
  "P3.0/UCB0STE/UCA0CLK/A5": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "P3.4/UCA0TXD/UCA0SIMO": "15",
  "P3.5/UCA0RXD/UCA0SOMI": "16",
  "P3.6/A6/TA1.0": "17",
  "P3.7/A7/TA1.1": "18",
  "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "19",
  "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "20",
  "CAOUT/TACLK/ADC10CLK/P1.0": "21",
  "TA1.0/TA0.0/P1.1": "22",
  "TA0.1/P1.2": "23",
  "TA0.2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TA0.0/TMS/P1.5": "26",
  "TA0.1/TDI/P1.6": "27",
  "TA0.2/TDI/TDO/P1.7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "CA5/Rosc/P2.5": "bidirectional", DVSS: "power_in", "CA7/XOUT/P2.7": "bidirectional", "CA6/XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "CA2/ACLK/A0/P2.0": "bidirectional", "CA3/TAINCLK/SMCLK/A1/P2.1": "bidirectional", "CAOUT/CA4/TA0.0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.0": "bidirectional", "P3.7/A7/TA1.1": "bidirectional", "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "bidirectional", "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "bidirectional", "CAOUT/TACLK/ADC10CLK/P1.0": "bidirectional", "TA1.0/TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/P1.6": "bidirectional", "TA0.2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2132IPW";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 512B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2132IRHB`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2132.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430F2132IRHB extends Component.withPins({
  "DVSS": "1",
  "CA7/XOUT/P2.7": "2",
  "CA6/XIN/P2.6": "3",
  "~{RST}/NMI/SBWTDIO": "5",
  "CA2/ACLK/A0/P2.0": "6",
  "CA3/TAINCLK/SMCLK/A1/P2.1": "7",
  "CAOUT/CA4/TA0.0/A2/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "P3.4/UCA0TXD/UCA0SIMO": "13",
  "P3.5/UCA0RXD/UCA0SOMI": "14",
  "P3.6/A6/TA1.0": "15",
  "P3.7/A7/TA1.1": "16",
  "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "18",
  "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "19",
  "CAOUT/TACLK/ADC10CLK/P1.0": "21",
  "TA1.0/TA0.0/P1.1": "22",
  "TA0.1/P1.2": "23",
  "TA0.2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TA0.0/TMS/P1.5": "26",
  "TA0.1/TDI/P1.6": "27",
  "TA0.2/TDI/TDO/P1.7": "28",
  "SBWTCK/TEST": "29",
  "DVCC": "30",
  "CA5/Rosc/P2.5": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS: "power_in", "CA7/XOUT/P2.7": "bidirectional", "CA6/XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "CA2/ACLK/A0/P2.0": "bidirectional", "CA3/TAINCLK/SMCLK/A1/P2.1": "bidirectional", "CAOUT/CA4/TA0.0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.0": "bidirectional", "P3.7/A7/TA1.1": "bidirectional", "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "bidirectional", "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "bidirectional", "CAOUT/TACLK/ADC10CLK/P1.0": "bidirectional", "TA1.0/TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/P1.6": "bidirectional", "TA0.2/TDI/TDO/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC: "power_in", "CA5/Rosc/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2132IRHB";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 512B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2132IRTV`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2132.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430F2132IRTV extends Component.withPins({
  "DVSS": "1",
  "CA7/XOUT/P2.7": "2",
  "CA6/XIN/P2.6": "3",
  "~{RST}/NMI/SBWTDIO": "5",
  "CA2/ACLK/A0/P2.0": "6",
  "CA3/TAINCLK/SMCLK/A1/P2.1": "7",
  "CAOUT/CA4/TA0.0/A2/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "P3.4/UCA0TXD/UCA0SIMO": "13",
  "P3.5/UCA0RXD/UCA0SOMI": "14",
  "P3.6/A6/TA1.0": "15",
  "P3.7/A7/TA1.1": "16",
  "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "18",
  "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "19",
  "CAOUT/TACLK/ADC10CLK/P1.0": "21",
  "TA1.0/TA0.0/P1.1": "22",
  "TA0.1/P1.2": "23",
  "TA0.2/P1.3": "24",
  "SMCLK/TCK/P1.4": "25",
  "TA0.0/TMS/P1.5": "26",
  "TA0.1/TDI/P1.6": "27",
  "TA0.2/TDI/TDO/P1.7": "28",
  "SBWTCK/TEST": "29",
  "DVCC": "30",
  "CA5/Rosc/P2.5": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS: "power_in", "CA7/XOUT/P2.7": "bidirectional", "CA6/XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "CA2/ACLK/A0/P2.0": "bidirectional", "CA3/TAINCLK/SMCLK/A1/P2.1": "bidirectional", "CAOUT/CA4/TA0.0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.0": "bidirectional", "P3.7/A7/TA1.1": "bidirectional", "CA0/TA0.1/A3/VREF-/VeREF-/P2.3": "bidirectional", "CA1/TA0.2/A4/VREF+/VeREF+/P2.4": "bidirectional", "CAOUT/TACLK/ADC10CLK/P1.0": "bidirectional", "TA1.0/TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/P1.6": "bidirectional", "TA0.2/TDI/TDO/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC: "power_in", "CA5/Rosc/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2132IRTV";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 512B RAM, TSSOP-38
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2232IDA`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2232.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-38_6.1x12.5mm_P0.65mm.
 */
export class MSP430F2232IDA extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "Rosc/P2.5": "3",
  "DVSS": "4",
  "XOUT/P2.7": "5",
  "XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "ACLK/A0/P2.0": "8",
  "TAINCLK/SMCLK/A1/P2.1": "9",
  "TA0/A2/P2.2": "10",
  "P3.0/UCB0STE/UCA0CLK/A5": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "AVSS": "15",
  "AVCC": "16",
  "P4.0/TB0": "17",
  "P4.1/TB1": "18",
  "P4.2/TB2": "19",
  "P4.3/TB0/A12": "20",
  "P4.4/TB1/A13": "21",
  "P4.5/TB2/A14": "22",
  "P4.6/TBOUTH/A15": "23",
  "P4.7/TBCLK": "24",
  "P3.4/UCA0TXD/UCA0SIMO": "25",
  "P3.5/UCA0RXD/UCA0SOMI": "26",
  "P3.6/A6": "27",
  "P3.7/A7": "28",
  "TA1/A3/VREF-/VeREF-/P2.3": "29",
  "TA2/A4/VREF+/VeREF+/P2.4": "30",
  "TACLK/ADC10CLK/P1.0": "31",
  "TA0/P1.1": "32",
  "TA1/P1.2": "33",
  "TA2/P1.3": "34",
  "SMCLK/TCK/P1.4": "35",
  "TA0/TMS/P1.5": "36",
  "TA1/TDI/P1.6": "37",
  "TA2/TDI/TDO/P1.7": "38",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "Rosc/P2.5": "bidirectional", DVSS: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "ACLK/A0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12": "bidirectional", "P4.4/TB1/A13": "bidirectional", "P4.5/TB2/A14": "bidirectional", "P4.6/TBOUTH/A15": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/A3/VREF-/VeREF-/P2.3": "bidirectional", "TA2/A4/VREF+/VeREF+/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2232IDA";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 512B RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2232IRHA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2232.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430F2232IRHA extends Component.withPins({
  "DVSS_1": "1",
  "XOUT/P2.7": "2",
  "XIN/P2.6": "3",
  "DVSS_4": "4",
  "~{RST}/NMI/SBWTDIO": "5",
  "ACLK/A0/P2.0": "6",
  "TAINCLK/SMCLK/A1/P2.1": "7",
  "TA0/A2/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "AVSS": "13",
  "AVCC": "14",
  "P4.0/TB0": "15",
  "P4.1/TB1": "16",
  "P4.2/TB2": "17",
  "P4.3/TB0/A12": "18",
  "P4.4/TB1/A13": "19",
  "P4.5/TB2/A14": "20",
  "P4.6/TBOUTH/A15": "21",
  "P4.7/TBCLK": "22",
  "P3.4/UCA0TXD/UCA0SIMO": "23",
  "P3.5/UCA0RXD/UCA0SOMI": "24",
  "P3.6/A6": "25",
  "P3.7/A7": "26",
  "TA1/VREF-/VeREF-/A3/P2.3": "27",
  "TA2/VREF+/VeREF+/A4/P2.4": "28",
  "P1.0/TACLK/ADC10CLK": "29",
  "TA0/P1.1": "30",
  "TA1/P1.2": "31",
  "TA2/P1.3": "32",
  "SMCLK/TCK/P1.4": "33",
  "TA0/TMS/P1.5": "34",
  "TA1/TDI/TCLK/P1.6": "35",
  "TA2/TDO/TDI/P1.7": "36",
  "TEST/SBWTCK": "37",
  "DVCC_38": "38",
  "DVCC_39": "39",
  "ROSC/P2.5": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS_1: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_4: "power_in", "~{RST}/NMI/SBWTDIO": "input", "ACLK/A0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12": "bidirectional", "P4.4/TB1/A13": "bidirectional", "P4.5/TB2/A14": "bidirectional", "P4.6/TBOUTH/A15": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "P1.0/TACLK/ADC10CLK": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TDI/TCLK/P1.6": "bidirectional", "TA2/TDO/TDI/P1.7": "bidirectional", "TEST/SBWTCK": "input", DVCC_38: "power_in", DVCC_39: "power_in", "ROSC/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2232IRHA";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 512B RAM, BGA-49
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2232IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.33x3.488mm*Layout7x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2232.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-49_3.33x3.488mm_Layout7x7_P0.4mm.
 */
export class MSP430F2232IYFF extends Component.withPins({
  "XOUT/P2.7": "A1",
  "XIN/P2.6": "A2",
  "DVSS_A3": "A3",
  "ACLK/A0/P2.0": "A4",
  "TA0/A2/P2.2": "A5",
  "P3.1/UCB0SIMO/UCB0SDA": "A6",
  "P3.2/UCB0SOMI/UCB0SCL": "A7",
  "DVSS_B1": "B1",
  "DVSS_B2": "B2",
  "~{RST}/NMI/SBWTDIO": "B3",
  "TAINCLK/SMCLK/A1/P2.1": "B4",
  "P3.0/UCB0STE/UCA0CLK/A5": "B5",
  "P3.3/UCB0CLK/UCA0STE": "B6",
  "AVSS_B7": "B7",
  "DVCC_C1": "C1",
  "ROSC/P2.5": "C2",
  "DVSS_C3": "C3",
  "DVSS_C4": "C4",
  "AVSS_C5": "C5",
  "AVCC_C6": "C6",
  "AVCC_C7": "C7",
  "SBWTCK/TEST": "D1",
  "TA2/TDO/TDI/P1.7": "D2",
  "DVCC_D3": "D3",
  "DVCC_D4": "D4",
  "AVCC_D5": "D5",
  "P4.0/TB0": "D6",
  "P4.1/TB1": "D7",
  "TA0/TMS/P1.5": "E1",
  "TA1/P1.2": "E2",
  "TA1/TDI/TCLK/P1.6": "E3",
  "DVCC_E4": "E4",
  "DVCC_E5": "E5",
  "P4.2/TB2": "E6",
  "P4.3/TB0/A12": "E7",
  "SMCLK/TCK/P1.4": "F1",
  "TACLK/ADC10CLK/P1.0": "F2",
  "TA1/VREF-/VeREF-/A3/P2.3": "F3",
  "P3.6/A6": "F4",
  "P4.7/TBCLK": "F5",
  "P4.5/TB2/A14": "F6",
  "P4.4/TB1/A13": "F7",
  "TA2/P1.3": "G1",
  "TA0/P1.1": "G2",
  "TA2/VREF+/VeREF+/A4/P2.4": "G3",
  "P3.7/A7": "G4",
  "P3.5/UCA0RXD/UCA0SOMI": "G5",
  "P3.4/UCA0TXD/UCA0SIMO": "G6",
  "P4.6/TBOUTH/A15": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_A3: "power_in", "ACLK/A0/P2.0": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", DVSS_B1: "power_in", DVSS_B2: "power_in", "~{RST}/NMI/SBWTDIO": "input", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS_B7: "power_in", DVCC_C1: "power_in", "ROSC/P2.5": "bidirectional", DVSS_C3: "power_in", DVSS_C4: "power_in", AVSS_C5: "power_in", AVCC_C6: "power_in", AVCC_C7: "power_in", "SBWTCK/TEST": "input", "TA2/TDO/TDI/P1.7": "bidirectional", DVCC_D3: "power_in", DVCC_D4: "power_in", AVCC_D5: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/P1.2": "bidirectional", "TA1/TDI/TCLK/P1.6": "bidirectional", DVCC_E4: "power_in", DVCC_E5: "power_in", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "P3.6/A6": "bidirectional", "P4.7/TBCLK": "bidirectional", "P4.5/TB2/A14": "bidirectional", "P4.4/TB1/A13": "bidirectional", "TA2/P1.3": "bidirectional", "TA0/P1.1": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "P3.7/A7": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P4.6/TBOUTH/A15": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2232IYFF";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 512B RAM, TSSOP-38
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2234IDA`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2234.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-38_6.1x12.5mm_P0.65mm.
 */
export class MSP430F2234IDA extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "Rosc/P2.5": "3",
  "DVSS": "4",
  "XOUT/P2.7": "5",
  "XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "ACLK/A0/OA0I0/P2.0": "8",
  "TAINCLK/SMCLK/A1/OA0O/P2.1": "9",
  "TA0/A2/OA0I1/P2.2": "10",
  "P3.0/UCB0STE/UCA0CLK/A5": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "AVSS": "15",
  "AVCC": "16",
  "P4.0/TB0": "17",
  "P4.1/TB1": "18",
  "P4.2/TB2": "19",
  "P4.3/TB0/A12/OA0O": "20",
  "P4.4/TB1/A13/OA1O": "21",
  "P4.5/TB2/A14/OA0I3": "22",
  "P4.6/TBOUTH/A15/OA1I3": "23",
  "P4.7/TBCLK": "24",
  "P3.4/UCA0TXD/UCA0SIMO": "25",
  "P3.5/UCA0RXD/UCA0SOMI": "26",
  "P3.6/A6/OA0I2": "27",
  "P3.7/A7/OA1I2": "28",
  "TA1/A3/VREF-/VeREF-/OA1I1/OA1O/P2.3": "29",
  "TA2/A4/VREF+/VeREF+/OA1I0/P2.4": "30",
  "TACLK/ADC10CLK/P1.0": "31",
  "TA0/P1.1": "32",
  "TA1/P1.2": "33",
  "TA2/P1.3": "34",
  "SMCLK/TCK/P1.4": "35",
  "TA0/TMS/P1.5": "36",
  "TA1/TDI/P1.6": "37",
  "TA2/TDI/TDO/P1.7": "38",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "Rosc/P2.5": "bidirectional", DVSS: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "ACLK/A0/OA0I0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/OA0O/P2.1": "bidirectional", "TA0/A2/OA0I1/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12/OA0O": "bidirectional", "P4.4/TB1/A13/OA1O": "bidirectional", "P4.5/TB2/A14/OA0I3": "bidirectional", "P4.6/TBOUTH/A15/OA1I3": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/OA0I2": "bidirectional", "P3.7/A7/OA1I2": "bidirectional", "TA1/A3/VREF-/VeREF-/OA1I1/OA1O/P2.3": "bidirectional", "TA2/A4/VREF+/VeREF+/OA1I0/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2234IDA";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 512B RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2234IRHA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2234.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430F2234IRHA extends Component.withPins({
  "DVSS_1": "1",
  "XOUT/P2.7": "2",
  "XIN/P2.6": "3",
  "DVSS_4": "4",
  "~{RST}/NMI/SBWTDIO": "5",
  "ACLK/A0/OA0I0/P2.0": "6",
  "TAINCLK/SMCLK/A1/OA0O/P2.1": "7",
  "TA0/A2/OA0I1/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "AVSS": "13",
  "AVCC": "14",
  "P4.0/TB0": "15",
  "P4.1/TB1": "16",
  "P4.2/TB2": "17",
  "P4.3/TB0/A12/OA0O": "18",
  "P4.4/TB1/A13/OA1O": "19",
  "P4.5/TB2/A14/OA0I3": "20",
  "P4.6/TBOUTH/A15/OA1I3": "21",
  "P4.7/TBCLK": "22",
  "P3.4/UCA0TXD/UCA0SIMO": "23",
  "P3.5/UCA0RXD/UCA0SOMI": "24",
  "P3.6/A6/OA0I2": "25",
  "P3.7/A7/OA1I2": "26",
  "TA1/A3/VREF-/VeREF-/OA1I1/OA1O/P2.3": "27",
  "TA2/A4/VREF+/VeREF+/OA1I0/P2.4": "28",
  "TACLK/ADC10CLK/P1.0": "29",
  "TA0/P1.1": "30",
  "TA1/P1.2": "31",
  "TA2/P1.3": "32",
  "SMCLK/TCK/P1.4": "33",
  "TA0/TMS/P1.5": "34",
  "TA1/TDI/P1.6": "35",
  "TA2/TDI/TDO/P1.7": "36",
  "SBWTCK/TEST": "37",
  "DVCC_38": "38",
  "DVCC_39": "39",
  "Rosc/P2.5": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS_1: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_4: "power_in", "~{RST}/NMI/SBWTDIO": "bidirectional", "ACLK/A0/OA0I0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/OA0O/P2.1": "bidirectional", "TA0/A2/OA0I1/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12/OA0O": "bidirectional", "P4.4/TB1/A13/OA1O": "bidirectional", "P4.5/TB2/A14/OA0I3": "bidirectional", "P4.6/TBOUTH/A15/OA1I3": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/OA0I2": "bidirectional", "P3.7/A7/OA1I2": "bidirectional", "TA1/A3/VREF-/VeREF-/OA1I1/OA1O/P2.3": "bidirectional", "TA2/A4/VREF+/VeREF+/OA1I0/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC_38: "power_in", DVCC_39: "power_in", "Rosc/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2234IRHA";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 512B RAM, BGA-49
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2234IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.33x3.488mm*Layout7x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2234.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-49_3.33x3.488mm_Layout7x7_P0.4mm.
 */
export class MSP430F2234IYFF extends Component.withPins({
  "XOUT/P2.7": "A1",
  "XIN/P2.6": "A2",
  "DVSS_A3": "A3",
  "ACLK/A0/OA0I0/A0/P2.0": "A4",
  "TA0/OA0I1/A2/P2.2": "A5",
  "P3.1/UCB0SIMO/UCB0SDA": "A6",
  "P3.2/UCB0SOMI/UCB0SCL": "A7",
  "DVSS_B1": "B1",
  "DVSS_B2": "B2",
  "~{RST}/NMI/SBWTDIO": "B3",
  "TAINCLK/SMCLK/OA0O/A1/P2.1": "B4",
  "P3.0/UCB0STE/UCA0CLK/A5": "B5",
  "P3.3/UCB0CLK/UCA0STE": "B6",
  "AVSS_B7": "B7",
  "DVCC_C1": "C1",
  "ROSC/P2.5": "C2",
  "DVSS_C3": "C3",
  "DVSS_C4": "C4",
  "AVSS_C5": "C5",
  "AVCC_C6": "C6",
  "AVCC_C7": "C7",
  "SBWTCK/TEST": "D1",
  "TA2/TDO/TDI/P1.7": "D2",
  "DVCC_D3": "D3",
  "DVCC_D4": "D4",
  "AVCC_D5": "D5",
  "P4.0/TB0": "D6",
  "P4.1/TB1": "D7",
  "TA0/TMS/P1.5": "E1",
  "TA1/P1.2": "E2",
  "TA1/TDI/TCLK/P1.6": "E3",
  "DVCC_E4": "E4",
  "DVCC_E5": "E5",
  "P4.2/TB2": "E6",
  "P4.3/TB0/A12/OA0O": "E7",
  "SMCLK/TCK/P1.4": "F1",
  "TACLK/ADC10CLK/P1.0": "F2",
  "TA1/VREF-/VeREF-/OA1I1/OA1O/A3/P2.3": "F3",
  "P3.6/A6/OA0I2": "F4",
  "P4.7/TBCLK": "F5",
  "P4.5/TB2/A14/OA0I3": "F6",
  "P4.4/TB1/A13/OA1O": "F7",
  "TA2/P1.3": "G1",
  "TA0/P1.1": "G2",
  "TA2/VREF+/VeREF+/OA1I0/A4/P2.4": "G3",
  "P3.7/A7/OA1I2": "G4",
  "P3.5/UCA0RXD/UCA0SOMI": "G5",
  "P3.4/UCA0TXD/UCA0SIMO": "G6",
  "P4.6/TBOUTH/A15/OA1I3": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_A3: "power_in", "ACLK/A0/OA0I0/A0/P2.0": "bidirectional", "TA0/OA0I1/A2/P2.2": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", DVSS_B1: "power_in", DVSS_B2: "power_in", "~{RST}/NMI/SBWTDIO": "input", "TAINCLK/SMCLK/OA0O/A1/P2.1": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS_B7: "power_in", DVCC_C1: "power_in", "ROSC/P2.5": "bidirectional", DVSS_C3: "power_in", DVSS_C4: "power_in", AVSS_C5: "power_in", AVCC_C6: "power_in", AVCC_C7: "power_in", "SBWTCK/TEST": "input", "TA2/TDO/TDI/P1.7": "bidirectional", DVCC_D3: "power_in", DVCC_D4: "power_in", AVCC_D5: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/P1.2": "bidirectional", "TA1/TDI/TCLK/P1.6": "bidirectional", DVCC_E4: "power_in", DVCC_E5: "power_in", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12/OA0O": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA1/VREF-/VeREF-/OA1I1/OA1O/A3/P2.3": "bidirectional", "P3.6/A6/OA0I2": "bidirectional", "P4.7/TBCLK": "bidirectional", "P4.5/TB2/A14/OA0I3": "bidirectional", "P4.4/TB1/A13/OA1O": "bidirectional", "TA2/P1.3": "bidirectional", "TA0/P1.1": "bidirectional", "TA2/VREF+/VeREF+/OA1I0/A4/P2.4": "bidirectional", "P3.7/A7/OA1I2": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P4.6/TBOUTH/A15/OA1I3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2234IYFF";
  override referencePrefix = "U";
}

/**
 * 16kB + 256B Flash, 512B RAM, TSSOP-38
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2252IDA`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2252.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-38_6.1x12.5mm_P0.65mm.
 */
export class MSP430F2252IDA extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "Rosc/P2.5": "3",
  "DVSS": "4",
  "XOUT/P2.7": "5",
  "XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "ACLK/A0/P2.0": "8",
  "TAINCLK/SMCLK/A1/P2.1": "9",
  "TA0/A2/P2.2": "10",
  "P3.0/UCB0STE/UCA0CLK/A5": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "AVSS": "15",
  "AVCC": "16",
  "P4.0/TB0": "17",
  "P4.1/TB1": "18",
  "P4.2/TB2": "19",
  "P4.3/TB0/A12": "20",
  "P4.4/TB1/A13": "21",
  "P4.5/TB2/A14": "22",
  "P4.6/TBOUTH/A15": "23",
  "P4.7/TBCLK": "24",
  "P3.4/UCA0TXD/UCA0SIMO": "25",
  "P3.5/UCA0RXD/UCA0SOMI": "26",
  "P3.6/A6": "27",
  "P3.7/A7": "28",
  "TA1/A3/VREF-/VeREF-/P2.3": "29",
  "TA2/A4/VREF+/VeREF+/P2.4": "30",
  "TACLK/ADC10CLK/P1.0": "31",
  "TA0/P1.1": "32",
  "TA1/P1.2": "33",
  "TA2/P1.3": "34",
  "SMCLK/TCK/P1.4": "35",
  "TA0/TMS/P1.5": "36",
  "TA1/TDI/P1.6": "37",
  "TA2/TDI/TDO/P1.7": "38",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "Rosc/P2.5": "bidirectional", DVSS: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "ACLK/A0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12": "bidirectional", "P4.4/TB1/A13": "bidirectional", "P4.5/TB2/A14": "bidirectional", "P4.6/TBOUTH/A15": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/A3/VREF-/VeREF-/P2.3": "bidirectional", "TA2/A4/VREF+/VeREF+/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2252IDA";
  override referencePrefix = "U";
}

/**
 * 16kB + 256B Flash, 512B RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2252IRHA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2252.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430F2252IRHA extends Component.withPins({
  "DVSS_1": "1",
  "XOUT/P2.7": "2",
  "XIN/P2.6": "3",
  "DVSS_4": "4",
  "~{RST}/NMI/SBWTDIO": "5",
  "ACLK/A0/P2.0": "6",
  "TAINCLK/SMCLK/A1/P2.1": "7",
  "TA0/A2/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "AVSS": "13",
  "AVCC": "14",
  "P4.0/TB0": "15",
  "P4.1/TB1": "16",
  "P4.2/TB2": "17",
  "P4.3/TB0/A12": "18",
  "P4.4/TB1/A13": "19",
  "P4.5/TB2/A14": "20",
  "P4.6/TBOUTH/A15": "21",
  "P4.7/TBCLK": "22",
  "P3.4/UCA0TXD/UCA0SIMO": "23",
  "P3.5/UCA0RXD/UCA0SOMI": "24",
  "P3.6/A6": "25",
  "P3.7/A7": "26",
  "TA1/VREF-/VeREF-/A3/P2.3": "27",
  "TA2/VREF+/VeREF+/A4/P2.4": "28",
  "P1.0/TACLK/ADC10CLK": "29",
  "TA0/P1.1": "30",
  "TA1/P1.2": "31",
  "TA2/P1.3": "32",
  "SMCLK/TCK/P1.4": "33",
  "TA0/TMS/P1.5": "34",
  "TA1/TDI/TCLK/P1.6": "35",
  "TA2/TDO/TDI/P1.7": "36",
  "TEST/SBWTCK": "37",
  "DVCC_38": "38",
  "DVCC_39": "39",
  "ROSC/P2.5": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS_1: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_4: "power_in", "~{RST}/NMI/SBWTDIO": "input", "ACLK/A0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12": "bidirectional", "P4.4/TB1/A13": "bidirectional", "P4.5/TB2/A14": "bidirectional", "P4.6/TBOUTH/A15": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "P1.0/TACLK/ADC10CLK": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TDI/TCLK/P1.6": "bidirectional", "TA2/TDO/TDI/P1.7": "bidirectional", "TEST/SBWTCK": "input", DVCC_38: "power_in", DVCC_39: "power_in", "ROSC/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2252IRHA";
  override referencePrefix = "U";
}

/**
 * 16kB + 256B Flash, 512B RAM, BGA-49
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2252IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.33x3.488mm*Layout7x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2252.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-49_3.33x3.488mm_Layout7x7_P0.4mm.
 */
export class MSP430F2252IYFF extends Component.withPins({
  "XOUT/P2.7": "A1",
  "XIN/P2.6": "A2",
  "DVSS_A3": "A3",
  "ACLK/A0/P2.0": "A4",
  "TA0/A2/P2.2": "A5",
  "P3.1/UCB0SIMO/UCB0SDA": "A6",
  "P3.2/UCB0SOMI/UCB0SCL": "A7",
  "DVSS_B1": "B1",
  "DVSS_B2": "B2",
  "~{RST}/NMI/SBWTDIO": "B3",
  "TAINCLK/SMCLK/A1/P2.1": "B4",
  "P3.0/UCB0STE/UCA0CLK/A5": "B5",
  "P3.3/UCB0CLK/UCA0STE": "B6",
  "AVSS_B7": "B7",
  "DVCC_C1": "C1",
  "ROSC/P2.5": "C2",
  "DVSS_C3": "C3",
  "DVSS_C4": "C4",
  "AVSS_C5": "C5",
  "AVCC_C6": "C6",
  "AVCC_C7": "C7",
  "SBWTCK/TEST": "D1",
  "TA2/TDO/TDI/P1.7": "D2",
  "DVCC_D3": "D3",
  "DVCC_D4": "D4",
  "AVCC_D5": "D5",
  "P4.0/TB0": "D6",
  "P4.1/TB1": "D7",
  "TA0/TMS/P1.5": "E1",
  "TA1/P1.2": "E2",
  "TA1/TDI/TCLK/P1.6": "E3",
  "DVCC_E4": "E4",
  "DVCC_E5": "E5",
  "P4.2/TB2": "E6",
  "P4.3/TB0/A12": "E7",
  "SMCLK/TCK/P1.4": "F1",
  "TACLK/ADC10CLK/P1.0": "F2",
  "TA1/VREF-/VeREF-/A3/P2.3": "F3",
  "P3.6/A6": "F4",
  "P4.7/TBCLK": "F5",
  "P4.5/TB2/A14": "F6",
  "P4.4/TB1/A13": "F7",
  "TA2/P1.3": "G1",
  "TA0/P1.1": "G2",
  "TA2/VREF+/VeREF+/A4/P2.4": "G3",
  "P3.7/A7": "G4",
  "P3.5/UCA0RXD/UCA0SOMI": "G5",
  "P3.4/UCA0TXD/UCA0SIMO": "G6",
  "P4.6/TBOUTH/A15": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_A3: "power_in", "ACLK/A0/P2.0": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", DVSS_B1: "power_in", DVSS_B2: "power_in", "~{RST}/NMI/SBWTDIO": "input", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS_B7: "power_in", DVCC_C1: "power_in", "ROSC/P2.5": "bidirectional", DVSS_C3: "power_in", DVSS_C4: "power_in", AVSS_C5: "power_in", AVCC_C6: "power_in", AVCC_C7: "power_in", "SBWTCK/TEST": "input", "TA2/TDO/TDI/P1.7": "bidirectional", DVCC_D3: "power_in", DVCC_D4: "power_in", AVCC_D5: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/P1.2": "bidirectional", "TA1/TDI/TCLK/P1.6": "bidirectional", DVCC_E4: "power_in", DVCC_E5: "power_in", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "P3.6/A6": "bidirectional", "P4.7/TBCLK": "bidirectional", "P4.5/TB2/A14": "bidirectional", "P4.4/TB1/A13": "bidirectional", "TA2/P1.3": "bidirectional", "TA0/P1.1": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "P3.7/A7": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P4.6/TBOUTH/A15": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2252IYFF";
  override referencePrefix = "U";
}

/**
 * 16kB + 256B Flash, 512B RAM, TSSOP-38
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2254IDA`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2254.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-38_6.1x12.5mm_P0.65mm.
 */
export class MSP430F2254IDA extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "Rosc/P2.5": "3",
  "DVSS": "4",
  "XOUT/P2.7": "5",
  "XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "ACLK/A0/OA0I0/P2.0": "8",
  "TAINCLK/SMCLK/A1/OA0O/P2.1": "9",
  "TA0/A2/OA0I1/P2.2": "10",
  "P3.0/UCB0STE/UCA0CLK/A5": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "AVSS": "15",
  "AVCC": "16",
  "P4.0/TB0": "17",
  "P4.1/TB1": "18",
  "P4.2/TB2": "19",
  "P4.3/TB0/A12/OA0O": "20",
  "P4.4/TB1/A13/OA1O": "21",
  "P4.5/TB2/A14/OA0I3": "22",
  "P4.6/TBOUTH/A15/OA1I3": "23",
  "P4.7/TBCLK": "24",
  "P3.4/UCA0TXD/UCA0SIMO": "25",
  "P3.5/UCA0RXD/UCA0SOMI": "26",
  "P3.6/A6/OA0I2": "27",
  "P3.7/A7/OA1I2": "28",
  "TA1/A3/VREF-/VeREF-/OA1I1/OA1O/P2.3": "29",
  "TA2/A4/VREF+/VeREF+/OA1I0/P2.4": "30",
  "TACLK/ADC10CLK/P1.0": "31",
  "TA0/P1.1": "32",
  "TA1/P1.2": "33",
  "TA2/P1.3": "34",
  "SMCLK/TCK/P1.4": "35",
  "TA0/TMS/P1.5": "36",
  "TA1/TDI/P1.6": "37",
  "TA2/TDI/TDO/P1.7": "38",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "Rosc/P2.5": "bidirectional", DVSS: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "ACLK/A0/OA0I0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/OA0O/P2.1": "bidirectional", "TA0/A2/OA0I1/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12/OA0O": "bidirectional", "P4.4/TB1/A13/OA1O": "bidirectional", "P4.5/TB2/A14/OA0I3": "bidirectional", "P4.6/TBOUTH/A15/OA1I3": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/OA0I2": "bidirectional", "P3.7/A7/OA1I2": "bidirectional", "TA1/A3/VREF-/VeREF-/OA1I1/OA1O/P2.3": "bidirectional", "TA2/A4/VREF+/VeREF+/OA1I0/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2254IDA";
  override referencePrefix = "U";
}

/**
 * 16kB + 256B Flash, 512B RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2254IRHA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2254.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430F2254IRHA extends Component.withPins({
  "DVSS_1": "1",
  "XOUT/P2.7": "2",
  "XIN/P2.6": "3",
  "DVSS_4": "4",
  "~{RST}/NMI/SBWTDIO": "5",
  "ACLK/A0/OA0I0/P2.0": "6",
  "TAINCLK/SMCLK/A1/OA0O/P2.1": "7",
  "TA0/A2/OA0I1/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "AVSS": "13",
  "AVCC": "14",
  "P4.0/TB0": "15",
  "P4.1/TB1": "16",
  "P4.2/TB2": "17",
  "P4.3/TB0/A12/OA0O": "18",
  "P4.4/TB1/A13/OA1O": "19",
  "P4.5/TB2/A14/OA0I3": "20",
  "P4.6/TBOUTH/A15/OA1I3": "21",
  "P4.7/TBCLK": "22",
  "P3.4/UCA0TXD/UCA0SIMO": "23",
  "P3.5/UCA0RXD/UCA0SOMI": "24",
  "P3.6/A6/OA0I2": "25",
  "P3.7/A7/OA1I2": "26",
  "TA1/A3/VREF-/VeREF-/OA1I1/OA1O/P2.3": "27",
  "TA2/A4/VREF+/VeREF+/OA1I0/P2.4": "28",
  "TACLK/ADC10CLK/P1.0": "29",
  "TA0/P1.1": "30",
  "TA1/P1.2": "31",
  "TA2/P1.3": "32",
  "SMCLK/TCK/P1.4": "33",
  "TA0/TMS/P1.5": "34",
  "TA1/TDI/P1.6": "35",
  "TA2/TDI/TDO/P1.7": "36",
  "SBWTCK/TEST": "37",
  "DVCC_38": "38",
  "DVCC_39": "39",
  "Rosc/P2.5": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS_1: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_4: "power_in", "~{RST}/NMI/SBWTDIO": "bidirectional", "ACLK/A0/OA0I0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/OA0O/P2.1": "bidirectional", "TA0/A2/OA0I1/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12/OA0O": "bidirectional", "P4.4/TB1/A13/OA1O": "bidirectional", "P4.5/TB2/A14/OA0I3": "bidirectional", "P4.6/TBOUTH/A15/OA1I3": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/OA0I2": "bidirectional", "P3.7/A7/OA1I2": "bidirectional", "TA1/A3/VREF-/VeREF-/OA1I1/OA1O/P2.3": "bidirectional", "TA2/A4/VREF+/VeREF+/OA1I0/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC_38: "power_in", DVCC_39: "power_in", "Rosc/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2254IRHA";
  override referencePrefix = "U";
}

/**
 * 16kB + 256B Flash, 512B RAM, BGA-49
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2254IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.33x3.488mm*Layout7x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2254.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-49_3.33x3.488mm_Layout7x7_P0.4mm.
 */
export class MSP430F2254IYFF extends Component.withPins({
  "XOUT/P2.7": "A1",
  "XIN/P2.6": "A2",
  "DVSS_A3": "A3",
  "ACLK/A0/OA0I0/A0/P2.0": "A4",
  "TA0/OA0I1/A2/P2.2": "A5",
  "P3.1/UCB0SIMO/UCB0SDA": "A6",
  "P3.2/UCB0SOMI/UCB0SCL": "A7",
  "DVSS_B1": "B1",
  "DVSS_B2": "B2",
  "~{RST}/NMI/SBWTDIO": "B3",
  "TAINCLK/SMCLK/OA0O/A1/P2.1": "B4",
  "P3.0/UCB0STE/UCA0CLK/A5": "B5",
  "P3.3/UCB0CLK/UCA0STE": "B6",
  "AVSS_B7": "B7",
  "DVCC_C1": "C1",
  "ROSC/P2.5": "C2",
  "DVSS_C3": "C3",
  "DVSS_C4": "C4",
  "AVSS_C5": "C5",
  "AVCC_C6": "C6",
  "AVCC_C7": "C7",
  "SBWTCK/TEST": "D1",
  "TA2/TDO/TDI/P1.7": "D2",
  "DVCC_D3": "D3",
  "DVCC_D4": "D4",
  "AVCC_D5": "D5",
  "P4.0/TB0": "D6",
  "P4.1/TB1": "D7",
  "TA0/TMS/P1.5": "E1",
  "TA1/P1.2": "E2",
  "TA1/TDI/TCLK/P1.6": "E3",
  "DVCC_E4": "E4",
  "DVCC_E5": "E5",
  "P4.2/TB2": "E6",
  "P4.3/TB0/A12/OA0O": "E7",
  "SMCLK/TCK/P1.4": "F1",
  "TACLK/ADC10CLK/P1.0": "F2",
  "TA1/VREF-/VeREF-/OA1I1/OA1O/A3/P2.3": "F3",
  "P3.6/A6/OA0I2": "F4",
  "P4.7/TBCLK": "F5",
  "P4.5/TB2/A14/OA0I3": "F6",
  "P4.4/TB1/A13/OA1O": "F7",
  "TA2/P1.3": "G1",
  "TA0/P1.1": "G2",
  "TA2/VREF+/VeREF+/OA1I0/A4/P2.4": "G3",
  "P3.7/A7/OA1I2": "G4",
  "P3.5/UCA0RXD/UCA0SOMI": "G5",
  "P3.4/UCA0TXD/UCA0SIMO": "G6",
  "P4.6/TBOUTH/A15/OA1I3": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_A3: "power_in", "ACLK/A0/OA0I0/A0/P2.0": "bidirectional", "TA0/OA0I1/A2/P2.2": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", DVSS_B1: "power_in", DVSS_B2: "power_in", "~{RST}/NMI/SBWTDIO": "input", "TAINCLK/SMCLK/OA0O/A1/P2.1": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS_B7: "power_in", DVCC_C1: "power_in", "ROSC/P2.5": "bidirectional", DVSS_C3: "power_in", DVSS_C4: "power_in", AVSS_C5: "power_in", AVCC_C6: "power_in", AVCC_C7: "power_in", "SBWTCK/TEST": "input", "TA2/TDO/TDI/P1.7": "bidirectional", DVCC_D3: "power_in", DVCC_D4: "power_in", AVCC_D5: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/P1.2": "bidirectional", "TA1/TDI/TCLK/P1.6": "bidirectional", DVCC_E4: "power_in", DVCC_E5: "power_in", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12/OA0O": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA1/VREF-/VeREF-/OA1I1/OA1O/A3/P2.3": "bidirectional", "P3.6/A6/OA0I2": "bidirectional", "P4.7/TBCLK": "bidirectional", "P4.5/TB2/A14/OA0I3": "bidirectional", "P4.4/TB1/A13/OA1O": "bidirectional", "TA2/P1.3": "bidirectional", "TA0/P1.1": "bidirectional", "TA2/VREF+/VeREF+/OA1I0/A4/P2.4": "bidirectional", "P3.7/A7/OA1I2": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P4.6/TBOUTH/A15/OA1I3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2254IYFF";
  override referencePrefix = "U";
}

/**
 * 32kB + 256B Flash, 1kB RAM, TSSOP-38
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2272IDA`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2272.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-38_6.1x12.5mm_P0.65mm.
 */
export class MSP430F2272IDA extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "Rosc/P2.5": "3",
  "DVSS": "4",
  "XOUT/P2.7": "5",
  "XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "ACLK/A0/P2.0": "8",
  "TAINCLK/SMCLK/A1/P2.1": "9",
  "TA0/A2/P2.2": "10",
  "P3.0/UCB0STE/UCA0CLK/A5": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "AVSS": "15",
  "AVCC": "16",
  "P4.0/TB0": "17",
  "P4.1/TB1": "18",
  "P4.2/TB2": "19",
  "P4.3/TB0/A12": "20",
  "P4.4/TB1/A13": "21",
  "P4.5/TB2/A14": "22",
  "P4.6/TBOUTH/A15": "23",
  "P4.7/TBCLK": "24",
  "P3.4/UCA0TXD/UCA0SIMO": "25",
  "P3.5/UCA0RXD/UCA0SOMI": "26",
  "P3.6/A6": "27",
  "P3.7/A7": "28",
  "TA1/A3/VREF-/VeREF-/P2.3": "29",
  "TA2/A4/VREF+/VeREF+/P2.4": "30",
  "TACLK/ADC10CLK/P1.0": "31",
  "TA0/P1.1": "32",
  "TA1/P1.2": "33",
  "TA2/P1.3": "34",
  "SMCLK/TCK/P1.4": "35",
  "TA0/TMS/P1.5": "36",
  "TA1/TDI/P1.6": "37",
  "TA2/TDI/TDO/P1.7": "38",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "Rosc/P2.5": "bidirectional", DVSS: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "ACLK/A0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12": "bidirectional", "P4.4/TB1/A13": "bidirectional", "P4.5/TB2/A14": "bidirectional", "P4.6/TBOUTH/A15": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/A3/VREF-/VeREF-/P2.3": "bidirectional", "TA2/A4/VREF+/VeREF+/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2272IDA";
  override referencePrefix = "U";
}

/**
 * 32kB + 256B Flash, 1kB RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2272IRHA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2272.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430F2272IRHA extends Component.withPins({
  "DVSS_1": "1",
  "XOUT/P2.7": "2",
  "XIN/P2.6": "3",
  "DVSS_4": "4",
  "~{RST}/NMI/SBWTDIO": "5",
  "ACLK/A0/P2.0": "6",
  "TAINCLK/SMCLK/A1/P2.1": "7",
  "TA0/A2/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "AVSS": "13",
  "AVCC": "14",
  "P4.0/TB0": "15",
  "P4.1/TB1": "16",
  "P4.2/TB2": "17",
  "P4.3/TB0/A12": "18",
  "P4.4/TB1/A13": "19",
  "P4.5/TB2/A14": "20",
  "P4.6/TBOUTH/A15": "21",
  "P4.7/TBCLK": "22",
  "P3.4/UCA0TXD/UCA0SIMO": "23",
  "P3.5/UCA0RXD/UCA0SOMI": "24",
  "P3.6/A6": "25",
  "P3.7/A7": "26",
  "TA1/VREF-/VeREF-/A3/P2.3": "27",
  "TA2/VREF+/VeREF+/A4/P2.4": "28",
  "P1.0/TACLK/ADC10CLK": "29",
  "TA0/P1.1": "30",
  "TA1/P1.2": "31",
  "TA2/P1.3": "32",
  "SMCLK/TCK/P1.4": "33",
  "TA0/TMS/P1.5": "34",
  "TA1/TDI/TCLK/P1.6": "35",
  "TA2/TDO/TDI/P1.7": "36",
  "TEST/SBWTCK": "37",
  "DVCC_38": "38",
  "DVCC_39": "39",
  "ROSC/P2.5": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS_1: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_4: "power_in", "~{RST}/NMI/SBWTDIO": "input", "ACLK/A0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12": "bidirectional", "P4.4/TB1/A13": "bidirectional", "P4.5/TB2/A14": "bidirectional", "P4.6/TBOUTH/A15": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "P1.0/TACLK/ADC10CLK": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TDI/TCLK/P1.6": "bidirectional", "TA2/TDO/TDI/P1.7": "bidirectional", "TEST/SBWTCK": "input", DVCC_38: "power_in", DVCC_39: "power_in", "ROSC/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2272IRHA";
  override referencePrefix = "U";
}

/**
 * 32kB + 256B Flash, 1kB RAM, BGA-49
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2272IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.33x3.488mm*Layout7x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2272.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-49_3.33x3.488mm_Layout7x7_P0.4mm.
 */
export class MSP430F2272IYFF extends Component.withPins({
  "XOUT/P2.7": "A1",
  "XIN/P2.6": "A2",
  "DVSS_A3": "A3",
  "ACLK/A0/P2.0": "A4",
  "TA0/A2/P2.2": "A5",
  "P3.1/UCB0SIMO/UCB0SDA": "A6",
  "P3.2/UCB0SOMI/UCB0SCL": "A7",
  "DVSS_B1": "B1",
  "DVSS_B2": "B2",
  "~{RST}/NMI/SBWTDIO": "B3",
  "TAINCLK/SMCLK/A1/P2.1": "B4",
  "P3.0/UCB0STE/UCA0CLK/A5": "B5",
  "P3.3/UCB0CLK/UCA0STE": "B6",
  "AVSS_B7": "B7",
  "DVCC_C1": "C1",
  "ROSC/P2.5": "C2",
  "DVSS_C3": "C3",
  "DVSS_C4": "C4",
  "AVSS_C5": "C5",
  "AVCC_C6": "C6",
  "AVCC_C7": "C7",
  "SBWTCK/TEST": "D1",
  "TA2/TDO/TDI/P1.7": "D2",
  "DVCC_D3": "D3",
  "DVCC_D4": "D4",
  "AVCC_D5": "D5",
  "P4.0/TB0": "D6",
  "P4.1/TB1": "D7",
  "TA0/TMS/P1.5": "E1",
  "TA1/P1.2": "E2",
  "TA1/TDI/TCLK/P1.6": "E3",
  "DVCC_E4": "E4",
  "DVCC_E5": "E5",
  "P4.2/TB2": "E6",
  "P4.3/TB0/A12": "E7",
  "SMCLK/TCK/P1.4": "F1",
  "TACLK/ADC10CLK/P1.0": "F2",
  "TA1/VREF-/VeREF-/A3/P2.3": "F3",
  "P3.6/A6": "F4",
  "P4.7/TBCLK": "F5",
  "P4.5/TB2/A14": "F6",
  "P4.4/TB1/A13": "F7",
  "TA2/P1.3": "G1",
  "TA0/P1.1": "G2",
  "TA2/VREF+/VeREF+/A4/P2.4": "G3",
  "P3.7/A7": "G4",
  "P3.5/UCA0RXD/UCA0SOMI": "G5",
  "P3.4/UCA0TXD/UCA0SIMO": "G6",
  "P4.6/TBOUTH/A15": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_A3: "power_in", "ACLK/A0/P2.0": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", DVSS_B1: "power_in", DVSS_B2: "power_in", "~{RST}/NMI/SBWTDIO": "input", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS_B7: "power_in", DVCC_C1: "power_in", "ROSC/P2.5": "bidirectional", DVSS_C3: "power_in", DVSS_C4: "power_in", AVSS_C5: "power_in", AVCC_C6: "power_in", AVCC_C7: "power_in", "SBWTCK/TEST": "input", "TA2/TDO/TDI/P1.7": "bidirectional", DVCC_D3: "power_in", DVCC_D4: "power_in", AVCC_D5: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/P1.2": "bidirectional", "TA1/TDI/TCLK/P1.6": "bidirectional", DVCC_E4: "power_in", DVCC_E5: "power_in", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "P3.6/A6": "bidirectional", "P4.7/TBCLK": "bidirectional", "P4.5/TB2/A14": "bidirectional", "P4.4/TB1/A13": "bidirectional", "TA2/P1.3": "bidirectional", "TA0/P1.1": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "P3.7/A7": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P4.6/TBOUTH/A15": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2272IYFF";
  override referencePrefix = "U";
}

/**
 * 32kB + 256B Flash, 1kB RAM, TSSOP-38
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2274IDA`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2274.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-38_6.1x12.5mm_P0.65mm.
 */
export class MSP430F2274IDA extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "Rosc/P2.5": "3",
  "DVSS": "4",
  "XOUT/P2.7": "5",
  "XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "ACLK/A0/OA0I0/P2.0": "8",
  "TAINCLK/SMCLK/A1/OA0O/P2.1": "9",
  "TA0/A2/OA0I1/P2.2": "10",
  "P3.0/UCB0STE/UCA0CLK/A5": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "AVSS": "15",
  "AVCC": "16",
  "P4.0/TB0": "17",
  "P4.1/TB1": "18",
  "P4.2/TB2": "19",
  "P4.3/TB0/A12/OA0O": "20",
  "P4.4/TB1/A13/OA1O": "21",
  "P4.5/TB2/A14/OA0I3": "22",
  "P4.6/TBOUTH/A15/OA1I3": "23",
  "P4.7/TBCLK": "24",
  "P3.4/UCA0TXD/UCA0SIMO": "25",
  "P3.5/UCA0RXD/UCA0SOMI": "26",
  "P3.6/A6/OA0I2": "27",
  "P3.7/A7/OA1I2": "28",
  "TA1/A3/VREF-/VeREF-/OA1I1/OA1O/P2.3": "29",
  "TA2/A4/VREF+/VeREF+/OA1I0/P2.4": "30",
  "TACLK/ADC10CLK/P1.0": "31",
  "TA0/P1.1": "32",
  "TA1/P1.2": "33",
  "TA2/P1.3": "34",
  "SMCLK/TCK/P1.4": "35",
  "TA0/TMS/P1.5": "36",
  "TA1/TDI/P1.6": "37",
  "TA2/TDI/TDO/P1.7": "38",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "Rosc/P2.5": "bidirectional", DVSS: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "bidirectional", "ACLK/A0/OA0I0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/OA0O/P2.1": "bidirectional", "TA0/A2/OA0I1/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12/OA0O": "bidirectional", "P4.4/TB1/A13/OA1O": "bidirectional", "P4.5/TB2/A14/OA0I3": "bidirectional", "P4.6/TBOUTH/A15/OA1I3": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/OA0I2": "bidirectional", "P3.7/A7/OA1I2": "bidirectional", "TA1/A3/VREF-/VeREF-/OA1I1/OA1O/P2.3": "bidirectional", "TA2/A4/VREF+/VeREF+/OA1I0/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2274IDA";
  override referencePrefix = "U";
}

/**
 * 32kB + 256B Flash, 1kB RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2274IRHA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2274.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430F2274IRHA extends Component.withPins({
  "DVSS_1": "1",
  "XOUT/P2.7": "2",
  "XIN/P2.6": "3",
  "DVSS_4": "4",
  "~{RST}/NMI/SBWTDIO": "5",
  "ACLK/A0/OA0I0/P2.0": "6",
  "TAINCLK/SMCLK/A1/OA0O/P2.1": "7",
  "TA0/A2/OA0I1/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "AVSS": "13",
  "AVCC": "14",
  "P4.0/TB0": "15",
  "P4.1/TB1": "16",
  "P4.2/TB2": "17",
  "P4.3/TB0/A12/OA0O": "18",
  "P4.4/TB1/A13/OA1O": "19",
  "P4.5/TB2/A14/OA0I3": "20",
  "P4.6/TBOUTH/A15/OA1I3": "21",
  "P4.7/TBCLK": "22",
  "P3.4/UCA0TXD/UCA0SIMO": "23",
  "P3.5/UCA0RXD/UCA0SOMI": "24",
  "P3.6/A6/OA0I2": "25",
  "P3.7/A7/OA1I2": "26",
  "TA1/A3/VREF-/VeREF-/OA1I1/OA1O/P2.3": "27",
  "TA2/A4/VREF+/VeREF+/OA1I0/P2.4": "28",
  "TACLK/ADC10CLK/P1.0": "29",
  "TA0/P1.1": "30",
  "TA1/P1.2": "31",
  "TA2/P1.3": "32",
  "SMCLK/TCK/P1.4": "33",
  "TA0/TMS/P1.5": "34",
  "TA1/TDI/P1.6": "35",
  "TA2/TDI/TDO/P1.7": "36",
  "SBWTCK/TEST": "37",
  "DVCC_38": "38",
  "DVCC_39": "39",
  "Rosc/P2.5": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS_1: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_4: "power_in", "~{RST}/NMI/SBWTDIO": "bidirectional", "ACLK/A0/OA0I0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/OA0O/P2.1": "bidirectional", "TA0/A2/OA0I1/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12/OA0O": "bidirectional", "P4.4/TB1/A13/OA1O": "bidirectional", "P4.5/TB2/A14/OA0I3": "bidirectional", "P4.6/TBOUTH/A15/OA1I3": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/OA0I2": "bidirectional", "P3.7/A7/OA1I2": "bidirectional", "TA1/A3/VREF-/VeREF-/OA1I1/OA1O/P2.3": "bidirectional", "TA2/A4/VREF+/VeREF+/OA1I0/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/TDI/P1.6": "bidirectional", "TA2/TDI/TDO/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC_38: "power_in", DVCC_39: "power_in", "Rosc/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2274IRHA";
  override referencePrefix = "U";
}

/**
 * 32kB + 256B Flash, 1kB RAM, BGA-49
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2274IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.33x3.488mm*Layout7x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2274.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-49_3.33x3.488mm_Layout7x7_P0.4mm.
 */
export class MSP430F2274IYFF extends Component.withPins({
  "XOUT/P2.7": "A1",
  "XIN/P2.6": "A2",
  "DVSS_A3": "A3",
  "ACLK/A0/OA0I0/A0/P2.0": "A4",
  "TA0/OA0I1/A2/P2.2": "A5",
  "P3.1/UCB0SIMO/UCB0SDA": "A6",
  "P3.2/UCB0SOMI/UCB0SCL": "A7",
  "DVSS_B1": "B1",
  "DVSS_B2": "B2",
  "~{RST}/NMI/SBWTDIO": "B3",
  "TAINCLK/SMCLK/OA0O/A1/P2.1": "B4",
  "P3.0/UCB0STE/UCA0CLK/A5": "B5",
  "P3.3/UCB0CLK/UCA0STE": "B6",
  "AVSS_B7": "B7",
  "DVCC_C1": "C1",
  "ROSC/P2.5": "C2",
  "DVSS_C3": "C3",
  "DVSS_C4": "C4",
  "AVSS_C5": "C5",
  "AVCC_C6": "C6",
  "AVCC_C7": "C7",
  "SBWTCK/TEST": "D1",
  "TA2/TDO/TDI/P1.7": "D2",
  "DVCC_D3": "D3",
  "DVCC_D4": "D4",
  "AVCC_D5": "D5",
  "P4.0/TB0": "D6",
  "P4.1/TB1": "D7",
  "TA0/TMS/P1.5": "E1",
  "TA1/P1.2": "E2",
  "TA1/TDI/TCLK/P1.6": "E3",
  "DVCC_E4": "E4",
  "DVCC_E5": "E5",
  "P4.2/TB2": "E6",
  "P4.3/TB0/A12/OA0O": "E7",
  "SMCLK/TCK/P1.4": "F1",
  "TACLK/ADC10CLK/P1.0": "F2",
  "TA1/VREF-/VeREF-/OA1I1/OA1O/A3/P2.3": "F3",
  "P3.6/A6/OA0I2": "F4",
  "P4.7/TBCLK": "F5",
  "P4.5/TB2/A14/OA0I3": "F6",
  "P4.4/TB1/A13/OA1O": "F7",
  "TA2/P1.3": "G1",
  "TA0/P1.1": "G2",
  "TA2/VREF+/VeREF+/OA1I0/A4/P2.4": "G3",
  "P3.7/A7/OA1I2": "G4",
  "P3.5/UCA0RXD/UCA0SOMI": "G5",
  "P3.4/UCA0TXD/UCA0SIMO": "G6",
  "P4.6/TBOUTH/A15/OA1I3": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_A3: "power_in", "ACLK/A0/OA0I0/A0/P2.0": "bidirectional", "TA0/OA0I1/A2/P2.2": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", DVSS_B1: "power_in", DVSS_B2: "power_in", "~{RST}/NMI/SBWTDIO": "input", "TAINCLK/SMCLK/OA0O/A1/P2.1": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS_B7: "power_in", DVCC_C1: "power_in", "ROSC/P2.5": "bidirectional", DVSS_C3: "power_in", DVSS_C4: "power_in", AVSS_C5: "power_in", AVCC_C6: "power_in", AVCC_C7: "power_in", "SBWTCK/TEST": "input", "TA2/TDO/TDI/P1.7": "bidirectional", DVCC_D3: "power_in", DVCC_D4: "power_in", AVCC_D5: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "TA0/TMS/P1.5": "bidirectional", "TA1/P1.2": "bidirectional", "TA1/TDI/TCLK/P1.6": "bidirectional", DVCC_E4: "power_in", DVCC_E5: "power_in", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12/OA0O": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA1/VREF-/VeREF-/OA1I1/OA1O/A3/P2.3": "bidirectional", "P3.6/A6/OA0I2": "bidirectional", "P4.7/TBCLK": "bidirectional", "P4.5/TB2/A14/OA0I3": "bidirectional", "P4.4/TB1/A13/OA1O": "bidirectional", "TA2/P1.3": "bidirectional", "TA0/P1.1": "bidirectional", "TA2/VREF+/VeREF+/OA1I0/A4/P2.4": "bidirectional", "P3.7/A7/OA1I2": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P4.6/TBOUTH/A15/OA1I3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2274IYFF";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 1kB RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2330IRHA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2330.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430F2330IRHA extends Component.withPins({
  "DVCC": "1",
  "XIN/CA6/P2.6": "2",
  "XOUT/CA7/P2.7": "3",
  "TACLK/P1.0": "4",
  "TA0/P1.1": "5",
  "TA1/P1.2": "6",
  "TA2/P1.3": "7",
  "SMCLK/P1.4": "8",
  "TA0/P1.5": "9",
  "TA1/P1.6": "10",
  "TA2/P1.7": "11",
  "ACLK/CA2/P2.0": "12",
  "TAINCLK/CA3/P2.1": "13",
  "TA0/CAOUT/CA4/P2.2": "14",
  "TA1/CA0/P2.3": "15",
  "TA2/CA1/P2.4": "16",
  "ROSC/CA5/P2.5": "17",
  "P3.0/UCB0STE/UCA0CLK": "18",
  "P3.1/UCB0SIMO/UCB0SDA": "19",
  "P3.2/UCB0SOMI/UCB0SCL": "20",
  "P3.3/UCB0CLK/UCA0STE": "21",
  "P3.4/UCA0TXD/UCA0SIMO": "22",
  "P3.5/UCA0RXD/UCA0SOMI": "23",
  "P3.6": "24",
  "P3.7": "25",
  "P4.0/TB0": "26",
  "P4.1/TB1": "27",
  "P4.2/TB2": "28",
  "P4.3/TB0": "29",
  "P4.4/TB1": "30",
  "P4.5/TB2": "31",
  "P4.6/TBOUTH/ACLK": "32",
  "P4.7/TBCLK": "33",
  "TDO/TDI": "34",
  "TDI/TCLK": "35",
  "TMS": "36",
  "TCK": "37",
  "~{RST}/NMI": "38",
  "VSS": "39",
  "AVCC": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "XIN/CA6/P2.6": "bidirectional", "XOUT/CA7/P2.7": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/P1.4": "bidirectional", "TA0/P1.5": "bidirectional", "TA1/P1.6": "bidirectional", "TA2/P1.7": "bidirectional", "ACLK/CA2/P2.0": "bidirectional", "TAINCLK/CA3/P2.1": "bidirectional", "TA0/CAOUT/CA4/P2.2": "bidirectional", "TA1/CA0/P2.3": "bidirectional", "TA2/CA1/P2.4": "bidirectional", "ROSC/CA5/P2.5": "bidirectional", "P3.0/UCB0STE/UCA0CLK": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0": "bidirectional", "P4.4/TB1": "bidirectional", "P4.5/TB2": "bidirectional", "P4.6/TBOUTH/ACLK": "bidirectional", "P4.7/TBCLK": "bidirectional", "TDO/TDI": "bidirectional", "TDI/TCLK": "input", TMS: "input", TCK: "input", "~{RST}/NMI": "input", VSS: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2330IRHA";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 1kB RAM, BGA-49
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2330IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.33x3.488mm*Layout7x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2330.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-49_3.33x3.488mm_Layout7x7_P0.4mm.
 */
export class MSP430F2330IYFF extends Component.withPins({
  "AVCC": "A1",
  "XIN/CA6/P2.6": "A2",
  "XOUT/CA7/P2.7": "A3",
  "TA1/P1.2": "A5",
  "SMCLK/P1.4": "A6",
  "TA1/P1.6": "A7",
  "VSS": "B1",
  "DVCC": "B3",
  "TACLK/P1.0": "B4",
  "TA2/P1.3": "B5",
  "TA0/P1.5": "B6",
  "TA2/P1.7": "B7",
  "TCK": "C1",
  "~{RST}/NMI": "C2",
  "TA0/P1.1": "C4",
  "ACLK/CA2/P2.0": "C5",
  "TA0/CAOUT/CA4/P2.2": "C6",
  "TAINCLK/CA3/P2.1": "C7",
  "TDI/TCLK": "D1",
  "TMS": "D2",
  "TA2/CA1/P2.4": "D6",
  "TA1/CA0/P2.3": "D7",
  "TDO/TDI": "E1",
  "P4.7/TBCLK": "E2",
  "P3.0/UCB0STE/UCA0CLK": "E6",
  "ROSC/CA5/P2.5": "E7",
  "P4.5/TB2": "F1",
  "P4.6/TBOUTH/ACLK": "F2",
  "P4.3/TB0": "F3",
  "P4.0/TB0": "F4",
  "P3.6": "F5",
  "P3.2/UCB0SOMI/UCB0SCL": "F6",
  "P3.1/UCB0SIMO/UCB0SDA": "F7",
  "P4.4/TB1": "G1",
  "P4.2/TB2": "G2",
  "P4.1/TB1": "G3",
  "P3.7": "G4",
  "P3.5/UCA0RXD/UCA0SOMI": "G5",
  "P3.4/UCA0TXD/UCA0SIMO": "G6",
  "P3.3/UCB0CLK/UCA0STE": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AVCC: "power_in", "XIN/CA6/P2.6": "bidirectional", "XOUT/CA7/P2.7": "bidirectional", "TA1/P1.2": "bidirectional", "SMCLK/P1.4": "bidirectional", "TA1/P1.6": "bidirectional", VSS: "power_in", DVCC: "power_in", "TACLK/P1.0": "bidirectional", "TA2/P1.3": "bidirectional", "TA0/P1.5": "bidirectional", "TA2/P1.7": "bidirectional", TCK: "input", "~{RST}/NMI": "input", "TA0/P1.1": "bidirectional", "ACLK/CA2/P2.0": "bidirectional", "TA0/CAOUT/CA4/P2.2": "bidirectional", "TAINCLK/CA3/P2.1": "bidirectional", "TDI/TCLK": "input", TMS: "input", "TA2/CA1/P2.4": "bidirectional", "TA1/CA0/P2.3": "bidirectional", "TDO/TDI": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.0/UCB0STE/UCA0CLK": "bidirectional", "ROSC/CA5/P2.5": "bidirectional", "P4.5/TB2": "bidirectional", "P4.6/TBOUTH/ACLK": "bidirectional", "P4.3/TB0": "bidirectional", "P4.0/TB0": "bidirectional", "P3.6": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P4.4/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.1/TB1": "bidirectional", "P3.7": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2330IYFF";
  override referencePrefix = "U";
}

/**
 * 16kB + 256B Flash, 2kB RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2350IRHA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2350.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430F2350IRHA extends Component.withPins({
  "DVCC": "1",
  "XIN/CA6/P2.6": "2",
  "XOUT/CA7/P2.7": "3",
  "TACLK/P1.0": "4",
  "TA0/P1.1": "5",
  "TA1/P1.2": "6",
  "TA2/P1.3": "7",
  "SMCLK/P1.4": "8",
  "TA0/P1.5": "9",
  "TA1/P1.6": "10",
  "TA2/P1.7": "11",
  "ACLK/CA2/P2.0": "12",
  "TAINCLK/CA3/P2.1": "13",
  "TA0/CAOUT/CA4/P2.2": "14",
  "TA1/CA0/P2.3": "15",
  "TA2/CA1/P2.4": "16",
  "ROSC/CA5/P2.5": "17",
  "P3.0/UCB0STE/UCA0CLK": "18",
  "P3.1/UCB0SIMO/UCB0SDA": "19",
  "P3.2/UCB0SOMI/UCB0SCL": "20",
  "P3.3/UCB0CLK/UCA0STE": "21",
  "P3.4/UCA0TXD/UCA0SIMO": "22",
  "P3.5/UCA0RXD/UCA0SOMI": "23",
  "P3.6": "24",
  "P3.7": "25",
  "P4.0/TB0": "26",
  "P4.1/TB1": "27",
  "P4.2/TB2": "28",
  "P4.3/TB0": "29",
  "P4.4/TB1": "30",
  "P4.5/TB2": "31",
  "P4.6/TBOUTH/ACLK": "32",
  "P4.7/TBCLK": "33",
  "TDO/TDI": "34",
  "TDI/TCLK": "35",
  "TMS": "36",
  "TCK": "37",
  "~{RST}/NMI": "38",
  "VSS": "39",
  "AVCC": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "XIN/CA6/P2.6": "bidirectional", "XOUT/CA7/P2.7": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/P1.4": "bidirectional", "TA0/P1.5": "bidirectional", "TA1/P1.6": "bidirectional", "TA2/P1.7": "bidirectional", "ACLK/CA2/P2.0": "bidirectional", "TAINCLK/CA3/P2.1": "bidirectional", "TA0/CAOUT/CA4/P2.2": "bidirectional", "TA1/CA0/P2.3": "bidirectional", "TA2/CA1/P2.4": "bidirectional", "ROSC/CA5/P2.5": "bidirectional", "P3.0/UCB0STE/UCA0CLK": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0": "bidirectional", "P4.4/TB1": "bidirectional", "P4.5/TB2": "bidirectional", "P4.6/TBOUTH/ACLK": "bidirectional", "P4.7/TBCLK": "bidirectional", "TDO/TDI": "bidirectional", "TDI/TCLK": "input", TMS: "input", TCK: "input", "~{RST}/NMI": "input", VSS: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2350IRHA";
  override referencePrefix = "U";
}

/**
 * 16kB + 256B Flash, 2kB RAM, BGA-49
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2350IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.33x3.488mm*Layout7x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2350.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-49_3.33x3.488mm_Layout7x7_P0.4mm.
 */
export class MSP430F2350IYFF extends Component.withPins({
  "AVCC": "A1",
  "XIN/CA6/P2.6": "A2",
  "XOUT/CA7/P2.7": "A3",
  "TA1/P1.2": "A5",
  "SMCLK/P1.4": "A6",
  "TA1/P1.6": "A7",
  "VSS": "B1",
  "DVCC": "B3",
  "TACLK/P1.0": "B4",
  "TA2/P1.3": "B5",
  "TA0/P1.5": "B6",
  "TA2/P1.7": "B7",
  "TCK": "C1",
  "~{RST}/NMI": "C2",
  "TA0/P1.1": "C4",
  "ACLK/CA2/P2.0": "C5",
  "TA0/CAOUT/CA4/P2.2": "C6",
  "TAINCLK/CA3/P2.1": "C7",
  "TDI/TCLK": "D1",
  "TMS": "D2",
  "TA2/CA1/P2.4": "D6",
  "TA1/CA0/P2.3": "D7",
  "TDO/TDI": "E1",
  "P4.7/TBCLK": "E2",
  "P3.0/UCB0STE/UCA0CLK": "E6",
  "ROSC/CA5/P2.5": "E7",
  "P4.5/TB2": "F1",
  "P4.6/TBOUTH/ACLK": "F2",
  "P4.3/TB0": "F3",
  "P4.0/TB0": "F4",
  "P3.6": "F5",
  "P3.2/UCB0SOMI/UCB0SCL": "F6",
  "P3.1/UCB0SIMO/UCB0SDA": "F7",
  "P4.4/TB1": "G1",
  "P4.2/TB2": "G2",
  "P4.1/TB1": "G3",
  "P3.7": "G4",
  "P3.5/UCA0RXD/UCA0SOMI": "G5",
  "P3.4/UCA0TXD/UCA0SIMO": "G6",
  "P3.3/UCB0CLK/UCA0STE": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AVCC: "power_in", "XIN/CA6/P2.6": "bidirectional", "XOUT/CA7/P2.7": "bidirectional", "TA1/P1.2": "bidirectional", "SMCLK/P1.4": "bidirectional", "TA1/P1.6": "bidirectional", VSS: "power_in", DVCC: "power_in", "TACLK/P1.0": "bidirectional", "TA2/P1.3": "bidirectional", "TA0/P1.5": "bidirectional", "TA2/P1.7": "bidirectional", TCK: "input", "~{RST}/NMI": "input", "TA0/P1.1": "bidirectional", "ACLK/CA2/P2.0": "bidirectional", "TA0/CAOUT/CA4/P2.2": "bidirectional", "TAINCLK/CA3/P2.1": "bidirectional", "TDI/TCLK": "input", TMS: "input", "TA2/CA1/P2.4": "bidirectional", "TA1/CA0/P2.3": "bidirectional", "TDO/TDI": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.0/UCB0STE/UCA0CLK": "bidirectional", "ROSC/CA5/P2.5": "bidirectional", "P4.5/TB2": "bidirectional", "P4.6/TBOUTH/ACLK": "bidirectional", "P4.3/TB0": "bidirectional", "P4.0/TB0": "bidirectional", "P3.6": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P4.4/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.1/TB1": "bidirectional", "P3.7": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2350IYFF";
  override referencePrefix = "U";
}

/**
 * 32kB + 256B Flash, 2kB RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2370IRHA`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2370.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430F2370IRHA extends Component.withPins({
  "DVCC": "1",
  "XIN/CA6/P2.6": "2",
  "XOUT/CA7/P2.7": "3",
  "TACLK/P1.0": "4",
  "TA0/P1.1": "5",
  "TA1/P1.2": "6",
  "TA2/P1.3": "7",
  "SMCLK/P1.4": "8",
  "TA0/P1.5": "9",
  "TA1/P1.6": "10",
  "TA2/P1.7": "11",
  "ACLK/CA2/P2.0": "12",
  "TAINCLK/CA3/P2.1": "13",
  "TA0/CAOUT/CA4/P2.2": "14",
  "TA1/CA0/P2.3": "15",
  "TA2/CA1/P2.4": "16",
  "ROSC/CA5/P2.5": "17",
  "P3.0/UCB0STE/UCA0CLK": "18",
  "P3.1/UCB0SIMO/UCB0SDA": "19",
  "P3.2/UCB0SOMI/UCB0SCL": "20",
  "P3.3/UCB0CLK/UCA0STE": "21",
  "P3.4/UCA0TXD/UCA0SIMO": "22",
  "P3.5/UCA0RXD/UCA0SOMI": "23",
  "P3.6": "24",
  "P3.7": "25",
  "P4.0/TB0": "26",
  "P4.1/TB1": "27",
  "P4.2/TB2": "28",
  "P4.3/TB0": "29",
  "P4.4/TB1": "30",
  "P4.5/TB2": "31",
  "P4.6/TBOUTH/ACLK": "32",
  "P4.7/TBCLK": "33",
  "TDO/TDI": "34",
  "TDI/TCLK": "35",
  "TMS": "36",
  "TCK": "37",
  "~{RST}/NMI": "38",
  "VSS": "39",
  "AVCC": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "XIN/CA6/P2.6": "bidirectional", "XOUT/CA7/P2.7": "bidirectional", "TACLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/P1.4": "bidirectional", "TA0/P1.5": "bidirectional", "TA1/P1.6": "bidirectional", "TA2/P1.7": "bidirectional", "ACLK/CA2/P2.0": "bidirectional", "TAINCLK/CA3/P2.1": "bidirectional", "TA0/CAOUT/CA4/P2.2": "bidirectional", "TA1/CA0/P2.3": "bidirectional", "TA2/CA1/P2.4": "bidirectional", "ROSC/CA5/P2.5": "bidirectional", "P3.0/UCB0STE/UCA0CLK": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6": "bidirectional", "P3.7": "bidirectional", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0": "bidirectional", "P4.4/TB1": "bidirectional", "P4.5/TB2": "bidirectional", "P4.6/TBOUTH/ACLK": "bidirectional", "P4.7/TBCLK": "bidirectional", "TDO/TDI": "bidirectional", "TDI/TCLK": "input", TMS: "input", TCK: "input", "~{RST}/NMI": "input", VSS: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2370IRHA";
  override referencePrefix = "U";
}

/**
 * 32kB + 256B Flash, 2kB RAM, BGA-49
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2370IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.33x3.488mm*Layout7x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2370.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-49_3.33x3.488mm_Layout7x7_P0.4mm.
 */
export class MSP430F2370IYFF extends Component.withPins({
  "AVCC": "A1",
  "XIN/CA6/P2.6": "A2",
  "XOUT/CA7/P2.7": "A3",
  "TA1/P1.2": "A5",
  "SMCLK/P1.4": "A6",
  "TA1/P1.6": "A7",
  "VSS": "B1",
  "DVCC": "B3",
  "TACLK/P1.0": "B4",
  "TA2/P1.3": "B5",
  "TA0/P1.5": "B6",
  "TA2/P1.7": "B7",
  "TCK": "C1",
  "~{RST}/NMI": "C2",
  "TA0/P1.1": "C4",
  "ACLK/CA2/P2.0": "C5",
  "TA0/CAOUT/CA4/P2.2": "C6",
  "TAINCLK/CA3/P2.1": "C7",
  "TDI/TCLK": "D1",
  "TMS": "D2",
  "TA2/CA1/P2.4": "D6",
  "TA1/CA0/P2.3": "D7",
  "TDO/TDI": "E1",
  "P4.7/TBCLK": "E2",
  "P3.0/UCB0STE/UCA0CLK": "E6",
  "ROSC/CA5/P2.5": "E7",
  "P4.5/TB2": "F1",
  "P4.6/TBOUTH/ACLK": "F2",
  "P4.3/TB0": "F3",
  "P4.0/TB0": "F4",
  "P3.6": "F5",
  "P3.2/UCB0SOMI/UCB0SCL": "F6",
  "P3.1/UCB0SIMO/UCB0SDA": "F7",
  "P4.4/TB1": "G1",
  "P4.2/TB2": "G2",
  "P4.1/TB1": "G3",
  "P3.7": "G4",
  "P3.5/UCA0RXD/UCA0SOMI": "G5",
  "P3.4/UCA0TXD/UCA0SIMO": "G6",
  "P3.3/UCB0CLK/UCA0STE": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AVCC: "power_in", "XIN/CA6/P2.6": "bidirectional", "XOUT/CA7/P2.7": "bidirectional", "TA1/P1.2": "bidirectional", "SMCLK/P1.4": "bidirectional", "TA1/P1.6": "bidirectional", VSS: "power_in", DVCC: "power_in", "TACLK/P1.0": "bidirectional", "TA2/P1.3": "bidirectional", "TA0/P1.5": "bidirectional", "TA2/P1.7": "bidirectional", TCK: "input", "~{RST}/NMI": "input", "TA0/P1.1": "bidirectional", "ACLK/CA2/P2.0": "bidirectional", "TA0/CAOUT/CA4/P2.2": "bidirectional", "TAINCLK/CA3/P2.1": "bidirectional", "TDI/TCLK": "input", TMS: "input", "TA2/CA1/P2.4": "bidirectional", "TA1/CA0/P2.3": "bidirectional", "TDO/TDI": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.0/UCB0STE/UCA0CLK": "bidirectional", "ROSC/CA5/P2.5": "bidirectional", "P4.5/TB2": "bidirectional", "P4.6/TBOUTH/ACLK": "bidirectional", "P4.3/TB0": "bidirectional", "P4.0/TB0": "bidirectional", "P3.6": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P4.4/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.1/TB1": "bidirectional", "P3.7": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2370IYFF";
  override referencePrefix = "U";
}

/**
 * 116kB + 256B Flash, 8K RAM, 113-BGA
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F2618-EP`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f2618-ep.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F2618_EP extends Component.withPins({
  "DVCC_A1": "A1",
  "AVCC": "A2",
  "DVSS_A3": "A3",
  "A1/P6.1": "A4",
  "TCK": "A5",
  "TDI/TCLK": "A6",
  "XT2IN/P8.7": "A7",
  "XT2OUT/P8.6": "A8",
  "P8.3": "A9",
  "P8.1": "A10",
  "P7.7": "A11",
  "P7.6": "A12",
  "A3/P6.3": "B1",
  "AVSS_B2": "B2",
  "AVSS_B3": "B3",
  "A2/P6.2": "B4",
  "~{RST}/NMI": "B5",
  "TMS": "B6",
  "TDO/TDI": "B7",
  "P8.5": "B8",
  "P8.4": "B9",
  "P8.0": "B10",
  "DVSS_B11": "B11",
  "P7.5": "B12",
  "P6.4/A4": "C1",
  "DAC1/A5/P6.5_C2": "C2",
  "DAC1/A5/P6.5_C3": "C3",
  "P7.4": "C11",
  "P7.3": "C12",
  "DAC0/A6/P6.6": "D1",
  "SVSIN/DAC1/A7/P6.7": "D2",
  "A0/P6.0": "D4",
  "DVSS_D5": "D5",
  "DVSS_D6": "D6",
  "DVSS_D7": "D7",
  "DVSS_D8": "D8",
  "P8.2": "D9",
  "P7.2": "D11",
  "P7.1": "D12",
  "XIN": "E1",
  "VREF+": "E2",
  "DVSS_E4": "E4",
  "DVSS_E5": "E5",
  "DVSS_E6": "E6",
  "DVSS_E7": "E7",
  "DVSS_E8": "E8",
  "DVSS_E9": "E9",
  "P7.0": "E11",
  "DVSS_E12": "E12",
  "XOUT": "F1",
  "VeREF+/DAC0": "F2",
  "DVSS_F4": "F4",
  "DVSS_F5": "F5",
  "DVSS_F8": "F8",
  "DVSS_F9": "F9",
  "SVSOUT/TBOUTH/P5.7": "F11",
  "DVCC_F12": "F12",
  "VREF-/VeREF-": "G1",
  "P1.0/TACLK/CAOUT": "G2",
  "DVSS_G4": "G4",
  "DVSS_G5": "G5",
  "DVSS_G8": "G8",
  "DVSS_G9": "G9",
  "SMCLK/P5.5": "G11",
  "ACLK/P5.6": "G12",
  "P1.1/TA0": "H1",
  "P1.2/TA1": "H2",
  "DVSS_H4": "H4",
  "DVSS_H5": "H5",
  "DVSS_H6": "H6",
  "DVSS_H7": "H7",
  "DVSS_H8": "H8",
  "DVSS_H9": "H9",
  "UCA1STE/UCB1CLK/P5.3": "H11",
  "MCLK/P5.4": "H12",
  "P1.3/TA2": "J1",
  "P1.4/SMCLK": "J2",
  "P2.6/ADC12CLK/DMAE0/CA6": "J4",
  "DVSS_J5": "J5",
  "DVSS_J6": "J6",
  "DVSS_J7": "J7",
  "DVSS_J8": "J8",
  "P4.1/TB1": "J9",
  "UCB1SDA/UCB1SIMO/P5.1": "J11",
  "UCB1SCL/UCB1SOMI/P5.2": "J12",
  "P1.5/TA0": "K1",
  "P1.6/TA1": "K2",
  "P4.7/TBCLK": "K11",
  "UCA1CLK/UCB1STE/P5.0": "K12",
  "P1.7/TA2": "L1",
  "DVSS_L2": "L2",
  "P2.3/CA0/TA1": "L3",
  "P2.4/CA1/TA2": "L4",
  "P2.7/TA0/CA7": "L5",
  "P3.1/UCB0SIMO/UCB0SDA": "L6",
  "P3.3/UCB0CLK/UCA0STE": "L7",
  "P3.5/UCA0RXD/UCA0SOMI": "L8",
  "P3.7/UCA1RXD/UCA1SOMI": "L9",
  "P4.3/TB3": "L10",
  "DVSS_L11": "L11",
  "P4.6/TB6": "L12",
  "P2.0/ACLK/CA2": "M1",
  "P2.1/TAINCLK/CA3": "M2",
  "P2.2/CAOUT/TA0/CA4": "M3",
  "P2.5/Rosc/CA5": "M4",
  "P3.0/UCB0STE/UCA0CLK": "M5",
  "P3.2/UCB0SOMI/UCB0SCL": "M6",
  "P3.4/UCA0TXD/UCA0SIMO": "M7",
  "P3.6/UCA1TXD/UCA1SIMO": "M8",
  "P4.0/TB0": "M9",
  "P4.2/TB2": "M10",
  "P4.4/TB4": "M11",
  "P4.5/TB5": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC_A1: "power_in", AVCC: "power_in", DVSS_A3: "power_in", "A1/P6.1": "bidirectional", TCK: "input", "TDI/TCLK": "input", "XT2IN/P8.7": "bidirectional", "XT2OUT/P8.6": "bidirectional", "P8.3": "bidirectional", "P8.1": "bidirectional", "P7.7": "bidirectional", "P7.6": "bidirectional", "A3/P6.3": "bidirectional", AVSS_B2: "power_in", AVSS_B3: "passive", "A2/P6.2": "bidirectional", "~{RST}/NMI": "input", TMS: "input", "TDO/TDI": "bidirectional", "P8.5": "bidirectional", "P8.4": "bidirectional", "P8.0": "bidirectional", DVSS_B11: "passive", "P7.5": "bidirectional", "P6.4/A4": "bidirectional", "DAC1/A5/P6.5_C2": "bidirectional", "DAC1/A5/P6.5_C3": "bidirectional", "P7.4": "bidirectional", "P7.3": "bidirectional", "DAC0/A6/P6.6": "bidirectional", "SVSIN/DAC1/A7/P6.7": "bidirectional", "A0/P6.0": "bidirectional", DVSS_D5: "passive", DVSS_D6: "passive", DVSS_D7: "passive", DVSS_D8: "passive", "P8.2": "bidirectional", "P7.2": "bidirectional", "P7.1": "bidirectional", XIN: "input", "VREF+": "power_in", DVSS_E4: "passive", DVSS_E5: "passive", DVSS_E6: "passive", DVSS_E7: "passive", DVSS_E8: "passive", DVSS_E9: "passive", "P7.0": "power_in", DVSS_E12: "passive", XOUT: "output", "VeREF+/DAC0": "bidirectional", DVSS_F4: "passive", DVSS_F5: "passive", DVSS_F8: "passive", DVSS_F9: "passive", "SVSOUT/TBOUTH/P5.7": "bidirectional", DVCC_F12: "power_in", "VREF-/VeREF-": "bidirectional", "P1.0/TACLK/CAOUT": "bidirectional", DVSS_G4: "passive", DVSS_G5: "passive", DVSS_G8: "passive", DVSS_G9: "passive", "SMCLK/P5.5": "bidirectional", "ACLK/P5.6": "bidirectional", "P1.1/TA0": "bidirectional", "P1.2/TA1": "bidirectional", DVSS_H4: "passive", DVSS_H5: "passive", DVSS_H6: "passive", DVSS_H7: "passive", DVSS_H8: "passive", DVSS_H9: "passive", "UCA1STE/UCB1CLK/P5.3": "bidirectional", "MCLK/P5.4": "bidirectional", "P1.3/TA2": "bidirectional", "P1.4/SMCLK": "bidirectional", "P2.6/ADC12CLK/DMAE0/CA6": "bidirectional", DVSS_J5: "passive", DVSS_J6: "passive", DVSS_J7: "passive", DVSS_J8: "passive", "P4.1/TB1": "bidirectional", "UCB1SDA/UCB1SIMO/P5.1": "bidirectional", "UCB1SCL/UCB1SOMI/P5.2": "bidirectional", "P1.5/TA0": "bidirectional", "P1.6/TA1": "bidirectional", "P4.7/TBCLK": "bidirectional", "UCA1CLK/UCB1STE/P5.0": "bidirectional", "P1.7/TA2": "bidirectional", DVSS_L2: "passive", "P2.3/CA0/TA1": "bidirectional", "P2.4/CA1/TA2": "bidirectional", "P2.7/TA0/CA7": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.7/UCA1RXD/UCA1SOMI": "bidirectional", "P4.3/TB3": "bidirectional", DVSS_L11: "passive", "P4.6/TB6": "bidirectional", "P2.0/ACLK/CA2": "bidirectional", "P2.1/TAINCLK/CA3": "bidirectional", "P2.2/CAOUT/TA0/CA4": "bidirectional", "P2.5/Rosc/CA5": "bidirectional", "P3.0/UCB0STE/UCA0CLK": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.6/UCA1TXD/UCA1SIMO": "bidirectional", "P4.0/TB0": "bidirectional", "P4.2/TB2": "bidirectional", "P4.4/TB4": "bidirectional", "P4.5/TB5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F2618-EP";
  override referencePrefix = "U";
}

/**
 * 64kB Flash, 8kB RAM, QFN-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5217IRGC`. Reference prefix: `U`.
 * Footprint filters: Texas*RGC0064B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5217.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGC0064B_VQFN-64-1EP_9x9mm_P0.5mm_EP4.25x4.25mm.
 */
export class MSP430F5217IRGC extends Component.withPins({
  "P6.0/CB0": "1",
  "P6.1/CB1": "2",
  "P6.2/CB2": "3",
  "P6.3/CB3": "4",
  "P6.4/CB4": "5",
  "P6.5/CB5": "6",
  "P6.6/CB6": "7",
  "P6.7/CB7": "8",
  "P5.0": "9",
  "P5.1": "10",
  "AVCC": "11",
  "P5.4/XIN": "12",
  "P5.5/XOUT": "13",
  "AVSS": "14",
  "DVCC": "15",
  "DVSS_16": "16",
  "VCORE": "17",
  "TA0CLK/ACLK/P1.0": "18",
  "TA0.0/P1.1": "19",
  "TA0.1/P1.2": "20",
  "TA0.2/P1.3": "21",
  "TA0.3/P1.4": "22",
  "TA0.4/P1.5": "23",
  "CBOUT/TA1CLK/P1.6": "24",
  "TA1.0/P1.7": "25",
  "TA1.1/P2.0": "26",
  "TA1.2/P2.1": "27",
  "TA2CLK/SMCLK/P2.2": "28",
  "TA2.0/P2.3": "29",
  "TA2.1/P2.4": "30",
  "TA2.2/P2.5": "31",
  "RTCCLK/DMAE0/P2.6": "32",
  "UCB0STE/UCA0CLK/P2.7": "33",
  "UCB0SIMO/UCB0SDA/P3.0": "34",
  "UCB0SOMI/UCB0SCL/P3.1": "35",
  "UCB0CLK/UCA0STE/P3.2": "36",
  "UCA0TXD/UCA0SIMO/P3.3": "37",
  "UCA0RXD/UCA0SOMI/P3.4": "38",
  "DVSS_39": "39",
  "DVIO": "40",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "41",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "42",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "43",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "44",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "45",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "46",
  "P4.6": "47",
  "P4.7": "48",
  "P7.0/TB0.0": "49",
  "P7.1/TB0.1": "50",
  "P7.2/TB0.2": "51",
  "P7.3/TB0.3": "52",
  "P7.4/TB0.4": "53",
  "P7.5/TB0.5": "54",
  "BSLEN": "55",
  "~{RST}/NMI": "56",
  "P5.2/XT2IN": "57",
  "P5.3/XT2OUT": "58",
  "SBWTCK/TEST": "59",
  "PJ.0/TDO": "60",
  "PJ.1/TDI/TCLK": "61",
  "PJ.2/TMS": "62",
  "PJ.3/TCK": "63",
  "~{RSTDVCC}/SBWTDIO": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0": "bidirectional", "P6.1/CB1": "bidirectional", "P6.2/CB2": "bidirectional", "P6.3/CB3": "bidirectional", "P6.4/CB4": "bidirectional", "P6.5/CB5": "bidirectional", "P6.6/CB6": "bidirectional", "P6.7/CB7": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", AVCC: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS: "power_in", DVCC: "power_in", DVSS_16: "power_in", VCORE: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "TA1.2/P2.1": "bidirectional", "TA2CLK/SMCLK/P2.2": "bidirectional", "TA2.0/P2.3": "bidirectional", "TA2.1/P2.4": "bidirectional", "TA2.2/P2.5": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS_39: "power_in", DVIO: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", "P7.0/TB0.0": "bidirectional", "P7.1/TB0.1": "bidirectional", "P7.2/TB0.2": "bidirectional", "P7.3/TB0.3": "bidirectional", "P7.4/TB0.4": "bidirectional", "P7.5/TB0.5": "bidirectional", BSLEN: "bidirectional", "~{RST}/NMI": "input", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5217IRGC";
  override referencePrefix = "U";
}

/**
 * 64kB Flash, 8kB RAM, BGA-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5217IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.415x3.535mm*Layout8x8*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5217.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-64_3.415x3.535mm_Layout8x8_P0.4mm.
 */
export class MSP430F5217IYFF extends Component.withPins({
  "P6.1/CB1": "A1",
  "P6.4/CB4": "A2",
  "P6.7/CB7": "A3",
  "P5.1": "A4",
  "P5.4/XIN": "A5",
  "P5.5/XOUT": "A6",
  "DVCC": "A7",
  "DVSS_A8": "A8",
  "PJ.3/TCK": "B1",
  "P6.2/CB2": "B2",
  "P6.5/CB5": "B3",
  "P5.0": "B4",
  "AVCC": "B5",
  "AVSS": "B6",
  "TA0CLK/ACLK/P1.0": "B7",
  "VCORE": "B8",
  "PJ.1/TDI/TCLK": "C1",
  "P6.0/CB0": "C2",
  "P6.3/CB3": "C3",
  "P6.6/CB6": "C4",
  "TA0.3/P1.4": "C5",
  "TA0.2/P1.3": "C6",
  "TA0.0/P1.1": "C7",
  "TA0.1/P1.2": "C8",
  "P5.3/XT2OUT": "D1",
  "PJ.0/TDO": "D2",
  "PJ.2/TMS": "D3",
  "~{RSTDVCC}/SBWTDIO": "D4",
  "TA1.2/P2.1": "D5",
  "TA1.0/P1.7": "D6",
  "CBOUT/TA1CLK/P1.6": "D7",
  "TA0.4/P1.5": "D8",
  "P5.2/XT2IN": "E1",
  "BSLEN": "E2",
  "~{RST}/NMI": "E3",
  "SBWTCK/TEST": "E4",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "E5",
  "TA2CLK/SMCLK/P2.2": "E7",
  "TA1.1/P2.0": "E8",
  "P7.5/TB0.5": "F1",
  "P7.4/TB0.4": "F2",
  "P7.2/TB0.2": "F3",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "F4",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "F5",
  "UCB0STE/UCA0CLK/P2.7": "F6",
  "TA2.2/P2.5": "F7",
  "TA2.0/P2.3": "F8",
  "P7.3/TB0.3": "G1",
  "P7.1/TB0.1": "G2",
  "P4.7": "G3",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "G4",
  "UCA0RXD/UCA0SOMI/P3.4": "G5",
  "UCB0CLK/UCA0STE/P3.2": "G6",
  "UCB0SOMI/UCB0SCL/P3.1": "G7",
  "RTCCLK/DMAE0/P2.6": "G8",
  "P7.0/TB0.0": "H1",
  "P4.6": "H2",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "H3",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "H4",
  "DVIO": "H5",
  "DVSS_H6": "H6",
  "UCA0TXD/UCA0SIMO/P3.3": "H7",
  "UCB0SIMO/UCB0SDA/P3.0": "H8",
  "TA2.1/P2.4": "J7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.1/CB1": "bidirectional", "P6.4/CB4": "bidirectional", "P6.7/CB7": "bidirectional", "P5.1": "bidirectional", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", DVCC: "power_in", DVSS_A8: "power_in", "PJ.3/TCK": "bidirectional", "P6.2/CB2": "bidirectional", "P6.5/CB5": "bidirectional", "P5.0": "bidirectional", AVCC: "power_in", AVSS: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", VCORE: "power_in", "PJ.1/TDI/TCLK": "bidirectional", "P6.0/CB0": "bidirectional", "P6.3/CB3": "bidirectional", "P6.6/CB6": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P5.3/XT2OUT": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.2/TMS": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", "TA1.2/P2.1": "bidirectional", "TA1.0/P1.7": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA0.4/P1.5": "bidirectional", "P5.2/XT2IN": "bidirectional", BSLEN: "bidirectional", "~{RST}/NMI": "input", "SBWTCK/TEST": "input", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "TA2CLK/SMCLK/P2.2": "bidirectional", "TA1.1/P2.0": "bidirectional", "P7.5/TB0.5": "bidirectional", "P7.4/TB0.4": "bidirectional", "P7.2/TB0.2": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "TA2.2/P2.5": "bidirectional", "TA2.0/P2.3": "bidirectional", "P7.3/TB0.3": "bidirectional", "P7.1/TB0.1": "bidirectional", "P4.7": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "P7.0/TB0.0": "bidirectional", "P4.6": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", DVIO: "power_in", DVSS_H6: "power_in", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "TA2.1/P2.4": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5217IYFF";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 8kB RAM, QFN-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5219IRGC`. Reference prefix: `U`.
 * Footprint filters: Texas*RGC0064B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5219.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGC0064B_VQFN-64-1EP_9x9mm_P0.5mm_EP4.25x4.25mm.
 */
export class MSP430F5219IRGC extends Component.withPins({
  "P6.0/CB0": "1",
  "P6.1/CB1": "2",
  "P6.2/CB2": "3",
  "P6.3/CB3": "4",
  "P6.4/CB4": "5",
  "P6.5/CB5": "6",
  "P6.6/CB6": "7",
  "P6.7/CB7": "8",
  "P5.0": "9",
  "P5.1": "10",
  "AVCC": "11",
  "P5.4/XIN": "12",
  "P5.5/XOUT": "13",
  "AVSS": "14",
  "DVCC": "15",
  "DVSS_16": "16",
  "VCORE": "17",
  "TA0CLK/ACLK/P1.0": "18",
  "TA0.0/P1.1": "19",
  "TA0.1/P1.2": "20",
  "TA0.2/P1.3": "21",
  "TA0.3/P1.4": "22",
  "TA0.4/P1.5": "23",
  "CBOUT/TA1CLK/P1.6": "24",
  "TA1.0/P1.7": "25",
  "TA1.1/P2.0": "26",
  "TA1.2/P2.1": "27",
  "TA2CLK/SMCLK/P2.2": "28",
  "TA2.0/P2.3": "29",
  "TA2.1/P2.4": "30",
  "TA2.2/P2.5": "31",
  "RTCCLK/DMAE0/P2.6": "32",
  "UCB0STE/UCA0CLK/P2.7": "33",
  "UCB0SIMO/UCB0SDA/P3.0": "34",
  "UCB0SOMI/UCB0SCL/P3.1": "35",
  "UCB0CLK/UCA0STE/P3.2": "36",
  "UCA0TXD/UCA0SIMO/P3.3": "37",
  "UCA0RXD/UCA0SOMI/P3.4": "38",
  "DVSS_39": "39",
  "DVIO": "40",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "41",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "42",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "43",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "44",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "45",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "46",
  "P4.6": "47",
  "P4.7": "48",
  "P7.0/TB0.0": "49",
  "P7.1/TB0.1": "50",
  "P7.2/TB0.2": "51",
  "P7.3/TB0.3": "52",
  "P7.4/TB0.4": "53",
  "P7.5/TB0.5": "54",
  "BSLEN": "55",
  "~{RST}/NMI": "56",
  "P5.2/XT2IN": "57",
  "P5.3/XT2OUT": "58",
  "SBWTCK/TEST": "59",
  "PJ.0/TDO": "60",
  "PJ.1/TDI/TCLK": "61",
  "PJ.2/TMS": "62",
  "PJ.3/TCK": "63",
  "~{RSTDVCC}/SBWTDIO": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0": "bidirectional", "P6.1/CB1": "bidirectional", "P6.2/CB2": "bidirectional", "P6.3/CB3": "bidirectional", "P6.4/CB4": "bidirectional", "P6.5/CB5": "bidirectional", "P6.6/CB6": "bidirectional", "P6.7/CB7": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", AVCC: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS: "power_in", DVCC: "power_in", DVSS_16: "power_in", VCORE: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "TA1.2/P2.1": "bidirectional", "TA2CLK/SMCLK/P2.2": "bidirectional", "TA2.0/P2.3": "bidirectional", "TA2.1/P2.4": "bidirectional", "TA2.2/P2.5": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS_39: "power_in", DVIO: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", "P7.0/TB0.0": "bidirectional", "P7.1/TB0.1": "bidirectional", "P7.2/TB0.2": "bidirectional", "P7.3/TB0.3": "bidirectional", "P7.4/TB0.4": "bidirectional", "P7.5/TB0.5": "bidirectional", BSLEN: "bidirectional", "~{RST}/NMI": "input", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5219IRGC";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 8kB RAM, BGA-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5219IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.415x3.535mm*Layout8x8*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5219.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-64_3.415x3.535mm_Layout8x8_P0.4mm.
 */
export class MSP430F5219IYFF extends Component.withPins({
  "P6.1/CB1": "A1",
  "P6.4/CB4": "A2",
  "P6.7/CB7": "A3",
  "P5.1": "A4",
  "P5.4/XIN": "A5",
  "P5.5/XOUT": "A6",
  "DVCC": "A7",
  "DVSS_A8": "A8",
  "PJ.3/TCK": "B1",
  "P6.2/CB2": "B2",
  "P6.5/CB5": "B3",
  "P5.0": "B4",
  "AVCC": "B5",
  "AVSS": "B6",
  "TA0CLK/ACLK/P1.0": "B7",
  "VCORE": "B8",
  "PJ.1/TDI/TCLK": "C1",
  "P6.0/CB0": "C2",
  "P6.3/CB3": "C3",
  "P6.6/CB6": "C4",
  "TA0.3/P1.4": "C5",
  "TA0.2/P1.3": "C6",
  "TA0.0/P1.1": "C7",
  "TA0.1/P1.2": "C8",
  "P5.3/XT2OUT": "D1",
  "PJ.0/TDO": "D2",
  "PJ.2/TMS": "D3",
  "~{RSTDVCC}/SBWTDIO": "D4",
  "TA1.2/P2.1": "D5",
  "TA1.0/P1.7": "D6",
  "CBOUT/TA1CLK/P1.6": "D7",
  "TA0.4/P1.5": "D8",
  "P5.2/XT2IN": "E1",
  "BSLEN": "E2",
  "~{RST}/NMI": "E3",
  "SBWTCK/TEST": "E4",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "E5",
  "TA2CLK/SMCLK/P2.2": "E7",
  "TA1.1/P2.0": "E8",
  "P7.5/TB0.5": "F1",
  "P7.4/TB0.4": "F2",
  "P7.2/TB0.2": "F3",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "F4",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "F5",
  "UCB0STE/UCA0CLK/P2.7": "F6",
  "TA2.2/P2.5": "F7",
  "TA2.0/P2.3": "F8",
  "P7.3/TB0.3": "G1",
  "P7.1/TB0.1": "G2",
  "P4.7": "G3",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "G4",
  "UCA0RXD/UCA0SOMI/P3.4": "G5",
  "UCB0CLK/UCA0STE/P3.2": "G6",
  "UCB0SOMI/UCB0SCL/P3.1": "G7",
  "RTCCLK/DMAE0/P2.6": "G8",
  "P7.0/TB0.0": "H1",
  "P4.6": "H2",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "H3",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "H4",
  "DVIO": "H5",
  "DVSS_H6": "H6",
  "UCA0TXD/UCA0SIMO/P3.3": "H7",
  "UCB0SIMO/UCB0SDA/P3.0": "H8",
  "TA2.1/P2.4": "J7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.1/CB1": "bidirectional", "P6.4/CB4": "bidirectional", "P6.7/CB7": "bidirectional", "P5.1": "bidirectional", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", DVCC: "power_in", DVSS_A8: "power_in", "PJ.3/TCK": "bidirectional", "P6.2/CB2": "bidirectional", "P6.5/CB5": "bidirectional", "P5.0": "bidirectional", AVCC: "power_in", AVSS: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", VCORE: "power_in", "PJ.1/TDI/TCLK": "bidirectional", "P6.0/CB0": "bidirectional", "P6.3/CB3": "bidirectional", "P6.6/CB6": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P5.3/XT2OUT": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.2/TMS": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", "TA1.2/P2.1": "bidirectional", "TA1.0/P1.7": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA0.4/P1.5": "bidirectional", "P5.2/XT2IN": "bidirectional", BSLEN: "bidirectional", "~{RST}/NMI": "input", "SBWTCK/TEST": "input", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "TA2CLK/SMCLK/P2.2": "bidirectional", "TA1.1/P2.0": "bidirectional", "P7.5/TB0.5": "bidirectional", "P7.4/TB0.4": "bidirectional", "P7.2/TB0.2": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "TA2.2/P2.5": "bidirectional", "TA2.0/P2.3": "bidirectional", "P7.3/TB0.3": "bidirectional", "P7.1/TB0.1": "bidirectional", "P4.7": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "P7.0/TB0.0": "bidirectional", "P4.6": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", DVIO: "power_in", DVSS_H6: "power_in", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "TA2.1/P2.4": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5219IYFF";
  override referencePrefix = "U";
}

/**
 * 64kB Flash, 8kB RAM, QFN-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5227IRGC`. Reference prefix: `U`.
 * Footprint filters: Texas*RGC0064B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5227.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGC0064B_VQFN-64-1EP_9x9mm_P0.5mm_EP4.25x4.25mm.
 */
export class MSP430F5227IRGC extends Component.withPins({
  "P6.0/CB0/A0": "1",
  "P6.1/CB1/A1": "2",
  "P6.2/CB2/A2": "3",
  "P6.3/CB3/A3": "4",
  "P6.4/CB4/A4": "5",
  "P6.5/CB5/A5": "6",
  "P6.6/CB6/A6": "7",
  "P6.7/CB7/A7": "8",
  "P5.0/A8/VeREF+": "9",
  "P5.1/A9/VeREF-": "10",
  "AVCC": "11",
  "P5.4/XIN": "12",
  "P5.5/XOUT": "13",
  "AVSS": "14",
  "DVCC": "15",
  "DVSS_16": "16",
  "VCORE": "17",
  "TA0CLK/ACLK/P1.0": "18",
  "TA0.0/P1.1": "19",
  "TA0.1/P1.2": "20",
  "TA0.2/P1.3": "21",
  "TA0.3/P1.4": "22",
  "TA0.4/P1.5": "23",
  "CBOUT/TA1CLK/P1.6": "24",
  "TA1.0/P1.7": "25",
  "TA1.1/P2.0": "26",
  "TA1.2/P2.1": "27",
  "TA2CLK/SMCLK/P2.2": "28",
  "TA2.0/P2.3": "29",
  "TA2.1/P2.4": "30",
  "TA2.2/P2.5": "31",
  "RTCCLK/DMAE0/P2.6": "32",
  "UCB0STE/UCA0CLK/P2.7": "33",
  "UCB0SIMO/UCB0SDA/P3.0": "34",
  "UCB0SOMI/UCB0SCL/P3.1": "35",
  "UCB0CLK/UCA0STE/P3.2": "36",
  "UCA0TXD/UCA0SIMO/P3.3": "37",
  "UCA0RXD/UCA0SOMI/P3.4": "38",
  "DVSS_39": "39",
  "DVIO": "40",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "41",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "42",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "43",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "44",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "45",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "46",
  "P4.6": "47",
  "P4.7": "48",
  "P7.0/TB0.0": "49",
  "P7.1/TB0.1": "50",
  "P7.2/TB0.2": "51",
  "P7.3/TB0.3": "52",
  "P7.4/TB0.4": "53",
  "P7.5/TB0.5": "54",
  "BSLEN": "55",
  "~{RST}/NMI": "56",
  "P5.2/XT2IN": "57",
  "P5.3/XT2OUT": "58",
  "SBWTCK/TEST": "59",
  "PJ.0/TDO": "60",
  "PJ.1/TDI/TCLK": "61",
  "PJ.2/TMS": "62",
  "PJ.3/TCK": "63",
  "~{RSTDVCC}/SBWTDIO": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0/A0": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P6.4/CB4/A4": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS: "power_in", DVCC: "power_in", DVSS_16: "power_in", VCORE: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "TA1.2/P2.1": "bidirectional", "TA2CLK/SMCLK/P2.2": "bidirectional", "TA2.0/P2.3": "bidirectional", "TA2.1/P2.4": "bidirectional", "TA2.2/P2.5": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS_39: "power_in", DVIO: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", "P7.0/TB0.0": "bidirectional", "P7.1/TB0.1": "bidirectional", "P7.2/TB0.2": "bidirectional", "P7.3/TB0.3": "bidirectional", "P7.4/TB0.4": "bidirectional", "P7.5/TB0.5": "bidirectional", BSLEN: "bidirectional", "~{RST}/NMI": "input", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5227IRGC";
  override referencePrefix = "U";
}

/**
 * 64kB Flash, 8kB RAM, BGA-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5227IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.415x3.535mm*Layout8x8*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5227.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-64_3.415x3.535mm_Layout8x8_P0.4mm.
 */
export class MSP430F5227IYFF extends Component.withPins({
  "P6.1/CB1/A1": "A1",
  "P6.4/CB4/A4": "A2",
  "P6.7/CB7/A7": "A3",
  "P5.1/A9/VeREF-": "A4",
  "P5.4/XIN": "A5",
  "P5.5/XOUT": "A6",
  "DVCC": "A7",
  "DVSS_A8": "A8",
  "PJ.3/TCK": "B1",
  "P6.2/CB2/A2": "B2",
  "P6.5/CB5/A5": "B3",
  "P5.0/A8/VeREF+": "B4",
  "AVCC": "B5",
  "AVSS": "B6",
  "TA0CLK/ACLK/P1.0": "B7",
  "VCORE": "B8",
  "PJ.1/TDI/TCLK": "C1",
  "P6.0/CB0/A0": "C2",
  "P6.3/CB3/A3": "C3",
  "P6.6/CB6/A6": "C4",
  "TA0.3/P1.4": "C5",
  "TA0.2/P1.3": "C6",
  "TA0.0/P1.1": "C7",
  "TA0.1/P1.2": "C8",
  "P5.3/XT2OUT": "D1",
  "PJ.0/TDO": "D2",
  "PJ.2/TMS": "D3",
  "~{RSTDVCC}/SBWTDIO": "D4",
  "TA1.2/P2.1": "D5",
  "TA1.0/P1.7": "D6",
  "CBOUT/TA1CLK/P1.6": "D7",
  "TA0.4/P1.5": "D8",
  "P5.2/XT2IN": "E1",
  "BSLEN": "E2",
  "~{RST}/NMI": "E3",
  "SBWTCK/TEST": "E4",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "E5",
  "TA2CLK/SMCLK/P2.2": "E7",
  "TA1.1/P2.0": "E8",
  "P7.5/TB0.5": "F1",
  "P7.4/TB0.4": "F2",
  "P7.2/TB0.2": "F3",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "F4",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "F5",
  "UCB0STE/UCA0CLK/P2.7": "F6",
  "TA2.2/P2.5": "F7",
  "TA2.0/P2.3": "F8",
  "P7.3/TB0.3": "G1",
  "P7.1/TB0.1": "G2",
  "P4.7": "G3",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "G4",
  "UCA0RXD/UCA0SOMI/P3.4": "G5",
  "UCB0CLK/UCA0STE/P3.2": "G6",
  "UCB0SOMI/UCB0SCL/P3.1": "G7",
  "RTCCLK/DMAE0/P2.6": "G8",
  "P7.0/TB0.0": "H1",
  "P4.6": "H2",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "H3",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "H4",
  "DVIO": "H5",
  "DVSS_H6": "H6",
  "UCA0TXD/UCA0SIMO/P3.3": "H7",
  "UCB0SIMO/UCB0SDA/P3.0": "H8",
  "TA2.1/P2.4": "J7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.1/CB1/A1": "bidirectional", "P6.4/CB4/A4": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", DVCC: "power_in", DVSS_A8: "power_in", "PJ.3/TCK": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", AVCC: "power_in", AVSS: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", VCORE: "power_in", "PJ.1/TDI/TCLK": "bidirectional", "P6.0/CB0/A0": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P6.6/CB6/A6": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P5.3/XT2OUT": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.2/TMS": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", "TA1.2/P2.1": "bidirectional", "TA1.0/P1.7": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA0.4/P1.5": "bidirectional", "P5.2/XT2IN": "bidirectional", BSLEN: "bidirectional", "~{RST}/NMI": "input", "SBWTCK/TEST": "input", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "TA2CLK/SMCLK/P2.2": "bidirectional", "TA1.1/P2.0": "bidirectional", "P7.5/TB0.5": "bidirectional", "P7.4/TB0.4": "bidirectional", "P7.2/TB0.2": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "TA2.2/P2.5": "bidirectional", "TA2.0/P2.3": "bidirectional", "P7.3/TB0.3": "bidirectional", "P7.1/TB0.1": "bidirectional", "P4.7": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "P7.0/TB0.0": "bidirectional", "P4.6": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", DVIO: "power_in", DVSS_H6: "power_in", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "TA2.1/P2.4": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5227IYFF";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 8kB RAM, QFN-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5229IRGC`. Reference prefix: `U`.
 * Footprint filters: Texas*RGC0064B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5229.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGC0064B_VQFN-64-1EP_9x9mm_P0.5mm_EP4.25x4.25mm.
 */
export class MSP430F5229IRGC extends Component.withPins({
  "P6.0/CB0/A0": "1",
  "P6.1/CB1/A1": "2",
  "P6.2/CB2/A2": "3",
  "P6.3/CB3/A3": "4",
  "P6.4/CB4/A4": "5",
  "P6.5/CB5/A5": "6",
  "P6.6/CB6/A6": "7",
  "P6.7/CB7/A7": "8",
  "P5.0/A8/VeREF+": "9",
  "P5.1/A9/VeREF-": "10",
  "AVCC": "11",
  "P5.4/XIN": "12",
  "P5.5/XOUT": "13",
  "AVSS": "14",
  "DVCC": "15",
  "DVSS_16": "16",
  "VCORE": "17",
  "TA0CLK/ACLK/P1.0": "18",
  "TA0.0/P1.1": "19",
  "TA0.1/P1.2": "20",
  "TA0.2/P1.3": "21",
  "TA0.3/P1.4": "22",
  "TA0.4/P1.5": "23",
  "CBOUT/TA1CLK/P1.6": "24",
  "TA1.0/P1.7": "25",
  "TA1.1/P2.0": "26",
  "TA1.2/P2.1": "27",
  "TA2CLK/SMCLK/P2.2": "28",
  "TA2.0/P2.3": "29",
  "TA2.1/P2.4": "30",
  "TA2.2/P2.5": "31",
  "RTCCLK/DMAE0/P2.6": "32",
  "UCB0STE/UCA0CLK/P2.7": "33",
  "UCB0SIMO/UCB0SDA/P3.0": "34",
  "UCB0SOMI/UCB0SCL/P3.1": "35",
  "UCB0CLK/UCA0STE/P3.2": "36",
  "UCA0TXD/UCA0SIMO/P3.3": "37",
  "UCA0RXD/UCA0SOMI/P3.4": "38",
  "DVSS_39": "39",
  "DVIO": "40",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "41",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "42",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "43",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "44",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "45",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "46",
  "P4.6": "47",
  "P4.7": "48",
  "P7.0/TB0.0": "49",
  "P7.1/TB0.1": "50",
  "P7.2/TB0.2": "51",
  "P7.3/TB0.3": "52",
  "P7.4/TB0.4": "53",
  "P7.5/TB0.5": "54",
  "BSLEN": "55",
  "~{RST}/NMI": "56",
  "P5.2/XT2IN": "57",
  "P5.3/XT2OUT": "58",
  "SBWTCK/TEST": "59",
  "PJ.0/TDO": "60",
  "PJ.1/TDI/TCLK": "61",
  "PJ.2/TMS": "62",
  "PJ.3/TCK": "63",
  "~{RSTDVCC}/SBWTDIO": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0/A0": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P6.4/CB4/A4": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS: "power_in", DVCC: "power_in", DVSS_16: "power_in", VCORE: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "TA1.2/P2.1": "bidirectional", "TA2CLK/SMCLK/P2.2": "bidirectional", "TA2.0/P2.3": "bidirectional", "TA2.1/P2.4": "bidirectional", "TA2.2/P2.5": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS_39: "power_in", DVIO: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", "P7.0/TB0.0": "bidirectional", "P7.1/TB0.1": "bidirectional", "P7.2/TB0.2": "bidirectional", "P7.3/TB0.3": "bidirectional", "P7.4/TB0.4": "bidirectional", "P7.5/TB0.5": "bidirectional", BSLEN: "bidirectional", "~{RST}/NMI": "input", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5229IRGC";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 8kB RAM, BGA-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5229IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.415x3.535mm*Layout8x8*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5229.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-64_3.415x3.535mm_Layout8x8_P0.4mm.
 */
export class MSP430F5229IYFF extends Component.withPins({
  "P6.1/CB1/A1": "A1",
  "P6.4/CB4/A4": "A2",
  "P6.7/CB7/A7": "A3",
  "P5.1/A9/VeREF-": "A4",
  "P5.4/XIN": "A5",
  "P5.5/XOUT": "A6",
  "DVCC": "A7",
  "DVSS_A8": "A8",
  "PJ.3/TCK": "B1",
  "P6.2/CB2/A2": "B2",
  "P6.5/CB5/A5": "B3",
  "P5.0/A8/VeREF+": "B4",
  "AVCC": "B5",
  "AVSS": "B6",
  "TA0CLK/ACLK/P1.0": "B7",
  "VCORE": "B8",
  "PJ.1/TDI/TCLK": "C1",
  "P6.0/CB0/A0": "C2",
  "P6.3/CB3/A3": "C3",
  "P6.6/CB6/A6": "C4",
  "TA0.3/P1.4": "C5",
  "TA0.2/P1.3": "C6",
  "TA0.0/P1.1": "C7",
  "TA0.1/P1.2": "C8",
  "P5.3/XT2OUT": "D1",
  "PJ.0/TDO": "D2",
  "PJ.2/TMS": "D3",
  "~{RSTDVCC}/SBWTDIO": "D4",
  "TA1.2/P2.1": "D5",
  "TA1.0/P1.7": "D6",
  "CBOUT/TA1CLK/P1.6": "D7",
  "TA0.4/P1.5": "D8",
  "P5.2/XT2IN": "E1",
  "BSLEN": "E2",
  "~{RST}/NMI": "E3",
  "SBWTCK/TEST": "E4",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "E5",
  "TA2CLK/SMCLK/P2.2": "E7",
  "TA1.1/P2.0": "E8",
  "P7.5/TB0.5": "F1",
  "P7.4/TB0.4": "F2",
  "P7.2/TB0.2": "F3",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "F4",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "F5",
  "UCB0STE/UCA0CLK/P2.7": "F6",
  "TA2.2/P2.5": "F7",
  "TA2.0/P2.3": "F8",
  "P7.3/TB0.3": "G1",
  "P7.1/TB0.1": "G2",
  "P4.7": "G3",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "G4",
  "UCA0RXD/UCA0SOMI/P3.4": "G5",
  "UCB0CLK/UCA0STE/P3.2": "G6",
  "UCB0SOMI/UCB0SCL/P3.1": "G7",
  "RTCCLK/DMAE0/P2.6": "G8",
  "P7.0/TB0.0": "H1",
  "P4.6": "H2",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "H3",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "H4",
  "DVIO": "H5",
  "DVSS_H6": "H6",
  "UCA0TXD/UCA0SIMO/P3.3": "H7",
  "UCB0SIMO/UCB0SDA/P3.0": "H8",
  "TA2.1/P2.4": "J7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.1/CB1/A1": "bidirectional", "P6.4/CB4/A4": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", DVCC: "power_in", DVSS_A8: "power_in", "PJ.3/TCK": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", AVCC: "power_in", AVSS: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", VCORE: "power_in", "PJ.1/TDI/TCLK": "bidirectional", "P6.0/CB0/A0": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P6.6/CB6/A6": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P5.3/XT2OUT": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.2/TMS": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", "TA1.2/P2.1": "bidirectional", "TA1.0/P1.7": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA0.4/P1.5": "bidirectional", "P5.2/XT2IN": "bidirectional", BSLEN: "bidirectional", "~{RST}/NMI": "input", "SBWTCK/TEST": "input", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "TA2CLK/SMCLK/P2.2": "bidirectional", "TA1.1/P2.0": "bidirectional", "P7.5/TB0.5": "bidirectional", "P7.4/TB0.4": "bidirectional", "P7.2/TB0.2": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "TA2.2/P2.5": "bidirectional", "TA2.0/P2.3": "bidirectional", "P7.3/TB0.3": "bidirectional", "P7.1/TB0.1": "bidirectional", "P4.7": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "P7.0/TB0.0": "bidirectional", "P4.6": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", DVIO: "power_in", DVSS_H6: "power_in", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "TA2.1/P2.4": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5229IYFF";
  override referencePrefix = "U";
}

/**
 * 64kB Flash, 8kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5232IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5232.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5232IRGZ extends Component.withPins({
  "P6.3/CB3": "1",
  "P6.4/CB4": "2",
  "P6.5/CB5": "3",
  "P5.0": "4",
  "P5.1": "5",
  "AVCC": "6",
  "P5.4/XIN": "7",
  "P5.5/XOUT": "8",
  "AVSS": "9",
  "DVCC_10": "10",
  "DVSS_11": "11",
  "VCORE": "12",
  "TA0CLK/ACLK/P1.0": "13",
  "TA0.0/P1.1": "14",
  "TA0.1/P1.2": "15",
  "TA0.2/P1.3": "16",
  "TA0.3/P1.4": "17",
  "TA0.4/P1.5": "18",
  "CBOUT/TA1CLK/P1.6": "19",
  "TA1.0/P1.7": "20",
  "UCB0STE/UCA0CLK/P2.7": "21",
  "UCB0SIMO/UCB0SDA/P3.0": "22",
  "UCB0SOMI/UCB0SCL/P3.1": "23",
  "UCB0CLK/UCA0STE/P3.2": "24",
  "UCA0TXD/UCA0SIMO/P3.3": "25",
  "UCA0RXD/UCA0SOMI/P3.4": "26",
  "DVSS_27": "27",
  "DVCC_28": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "~{RST}/NMI": "37",
  "P5.2/XT2IN": "38",
  "P5.3/XT2OUT": "39",
  "SBWTCK/TEST": "40",
  "PJ.0/TDO": "41",
  "PJ.1/TDI/TCLK": "42",
  "PJ.2/TMS": "43",
  "PJ.3/TCK": "44",
  "~{RSTDVCC}/SBWTDIO": "45",
  "P6.0/CB0": "46",
  "P6.1/CB1": "47",
  "P6.2/CB2": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.3/CB3": "bidirectional", "P6.4/CB4": "bidirectional", "P6.5/CB5": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", AVCC: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS: "power_in", DVCC_10: "power_in", DVSS_11: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS_27: "power_in", DVCC_28: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "~{RST}/NMI": "input", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", "P6.0/CB0": "bidirectional", "P6.1/CB1": "bidirectional", "P6.2/CB2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5232IRGZ";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 8kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5234IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5234.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5234IRGZ extends Component.withPins({
  "P6.3/CB3": "1",
  "P6.4/CB4": "2",
  "P6.5/CB5": "3",
  "P5.0": "4",
  "P5.1": "5",
  "AVCC": "6",
  "P5.4/XIN": "7",
  "P5.5/XOUT": "8",
  "AVSS": "9",
  "DVCC_10": "10",
  "DVSS_11": "11",
  "VCORE": "12",
  "TA0CLK/ACLK/P1.0": "13",
  "TA0.0/P1.1": "14",
  "TA0.1/P1.2": "15",
  "TA0.2/P1.3": "16",
  "TA0.3/P1.4": "17",
  "TA0.4/P1.5": "18",
  "CBOUT/TA1CLK/P1.6": "19",
  "TA1.0/P1.7": "20",
  "UCB0STE/UCA0CLK/P2.7": "21",
  "UCB0SIMO/UCB0SDA/P3.0": "22",
  "UCB0SOMI/UCB0SCL/P3.1": "23",
  "UCB0CLK/UCA0STE/P3.2": "24",
  "UCA0TXD/UCA0SIMO/P3.3": "25",
  "UCA0RXD/UCA0SOMI/P3.4": "26",
  "DVSS_27": "27",
  "DVCC_28": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "~{RST}/NMI": "37",
  "P5.2/XT2IN": "38",
  "P5.3/XT2OUT": "39",
  "SBWTCK/TEST": "40",
  "PJ.0/TDO": "41",
  "PJ.1/TDI/TCLK": "42",
  "PJ.2/TMS": "43",
  "PJ.3/TCK": "44",
  "~{RSTDVCC}/SBWTDIO": "45",
  "P6.0/CB0": "46",
  "P6.1/CB1": "47",
  "P6.2/CB2": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.3/CB3": "bidirectional", "P6.4/CB4": "bidirectional", "P6.5/CB5": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", AVCC: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS: "power_in", DVCC_10: "power_in", DVSS_11: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS_27: "power_in", DVCC_28: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "~{RST}/NMI": "input", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", "P6.0/CB0": "bidirectional", "P6.1/CB1": "bidirectional", "P6.2/CB2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5234IRGZ";
  override referencePrefix = "U";
}

/**
 * 64kB Flash, 8kB RAM, QFN-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5237IRGC`. Reference prefix: `U`.
 * Footprint filters: Texas*RGC0064B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5237.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGC0064B_VQFN-64-1EP_9x9mm_P0.5mm_EP4.25x4.25mm.
 */
export class MSP430F5237IRGC extends Component.withPins({
  "P6.0/CB0": "1",
  "P6.1/CB1": "2",
  "P6.2/CB2": "3",
  "P6.3/CB3": "4",
  "P6.4/CB4": "5",
  "P6.5/CB5": "6",
  "P6.6/CB6": "7",
  "P6.7/CB7": "8",
  "P5.0": "9",
  "P5.1": "10",
  "AVCC": "11",
  "P5.4/XIN": "12",
  "P5.5/XOUT": "13",
  "AVSS": "14",
  "DVCC_15": "15",
  "DVSS_16": "16",
  "VCORE": "17",
  "ACLK/TA0CLK/P1.0": "18",
  "TA0.0/P1.1": "19",
  "TA0.1/P1.2": "20",
  "TA0.2/P1.3": "21",
  "TA0.3/P1.4": "22",
  "TA0.4/P1.5": "23",
  "CBOUT/TA1CLK/P1.6": "24",
  "TA1.0/P1.7": "25",
  "TA1.1/P2.0": "26",
  "TA1.2/P2.1": "27",
  "SMCLK/TA2CLK/P2.2": "28",
  "TA2.0/P2.3": "29",
  "TA2.1/P2.4": "30",
  "TA2.2/P2.5": "31",
  "RTCCLK/DMAE0/P2.6": "32",
  "UCB0STE/UCA0CLK/P2.7": "33",
  "UCB0SIMO/UCB0SDA/P3.0": "34",
  "UCB0SOMI/UCB0SCL/P3.1": "35",
  "UCB0CLK/UCA0STE/P3.2": "36",
  "UCA0TXD/UCA0SIMO/P3.3": "37",
  "UCA0RXD/UCA0SOMI/P3.4": "38",
  "DVSS_39": "39",
  "DVCC_40": "40",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "41",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "42",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "43",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "44",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "45",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "46",
  "P4.6": "47",
  "P4.7": "48",
  "P7.0/TB0.0": "49",
  "P7.1/TB0.1": "50",
  "P7.2/TB0.2": "51",
  "P7.3/TB0.3": "52",
  "P7.4/TB0.4": "53",
  "P7.5/TB0.5": "54",
  "~{RST}/NMI": "56",
  "P5.2/XT2IN": "57",
  "P5.3/XT2OUT": "58",
  "SBWTCK/TEST": "59",
  "PJ.0/TDO": "60",
  "PJ.1/TDI/TCLK": "61",
  "PJ.2/TMS": "62",
  "PJ.3/TCK": "63",
  "~{RSTDVCC}/SBWTDIO": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0": "bidirectional", "P6.1/CB1": "bidirectional", "P6.2/CB2": "bidirectional", "P6.3/CB3": "bidirectional", "P6.4/CB4": "bidirectional", "P6.5/CB5": "bidirectional", "P6.6/CB6": "bidirectional", "P6.7/CB7": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", AVCC: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS: "power_in", DVCC_15: "power_in", DVSS_16: "power_in", VCORE: "power_in", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "TA1.2/P2.1": "bidirectional", "SMCLK/TA2CLK/P2.2": "bidirectional", "TA2.0/P2.3": "bidirectional", "TA2.1/P2.4": "bidirectional", "TA2.2/P2.5": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS_39: "power_in", DVCC_40: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", "P7.0/TB0.0": "bidirectional", "P7.1/TB0.1": "bidirectional", "P7.2/TB0.2": "bidirectional", "P7.3/TB0.3": "bidirectional", "P7.4/TB0.4": "bidirectional", "P7.5/TB0.5": "bidirectional", "~{RST}/NMI": "input", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5237IRGC";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 8kB RAM, QFN-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5239IRGC`. Reference prefix: `U`.
 * Footprint filters: Texas*RGC0064B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5239.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGC0064B_VQFN-64-1EP_9x9mm_P0.5mm_EP4.25x4.25mm.
 */
export class MSP430F5239IRGC extends Component.withPins({
  "P6.0/CB0": "1",
  "P6.1/CB1": "2",
  "P6.2/CB2": "3",
  "P6.3/CB3": "4",
  "P6.4/CB4": "5",
  "P6.5/CB5": "6",
  "P6.6/CB6": "7",
  "P6.7/CB7": "8",
  "P5.0": "9",
  "P5.1": "10",
  "AVCC": "11",
  "P5.4/XIN": "12",
  "P5.5/XOUT": "13",
  "AVSS": "14",
  "DVCC_15": "15",
  "DVSS_16": "16",
  "VCORE": "17",
  "ACLK/TA0CLK/P1.0": "18",
  "TA0.0/P1.1": "19",
  "TA0.1/P1.2": "20",
  "TA0.2/P1.3": "21",
  "TA0.3/P1.4": "22",
  "TA0.4/P1.5": "23",
  "CBOUT/TA1CLK/P1.6": "24",
  "TA1.0/P1.7": "25",
  "TA1.1/P2.0": "26",
  "TA1.2/P2.1": "27",
  "SMCLK/TA2CLK/P2.2": "28",
  "TA2.0/P2.3": "29",
  "TA2.1/P2.4": "30",
  "TA2.2/P2.5": "31",
  "RTCCLK/DMAE0/P2.6": "32",
  "UCB0STE/UCA0CLK/P2.7": "33",
  "UCB0SIMO/UCB0SDA/P3.0": "34",
  "UCB0SOMI/UCB0SCL/P3.1": "35",
  "UCB0CLK/UCA0STE/P3.2": "36",
  "UCA0TXD/UCA0SIMO/P3.3": "37",
  "UCA0RXD/UCA0SOMI/P3.4": "38",
  "DVSS_39": "39",
  "DVCC_40": "40",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "41",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "42",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "43",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "44",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "45",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "46",
  "P4.6": "47",
  "P4.7": "48",
  "P7.0/TB0.0": "49",
  "P7.1/TB0.1": "50",
  "P7.2/TB0.2": "51",
  "P7.3/TB0.3": "52",
  "P7.4/TB0.4": "53",
  "P7.5/TB0.5": "54",
  "~{RST}/NMI": "56",
  "P5.2/XT2IN": "57",
  "P5.3/XT2OUT": "58",
  "SBWTCK/TEST": "59",
  "PJ.0/TDO": "60",
  "PJ.1/TDI/TCLK": "61",
  "PJ.2/TMS": "62",
  "PJ.3/TCK": "63",
  "~{RSTDVCC}/SBWTDIO": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0": "bidirectional", "P6.1/CB1": "bidirectional", "P6.2/CB2": "bidirectional", "P6.3/CB3": "bidirectional", "P6.4/CB4": "bidirectional", "P6.5/CB5": "bidirectional", "P6.6/CB6": "bidirectional", "P6.7/CB7": "bidirectional", "P5.0": "bidirectional", "P5.1": "bidirectional", AVCC: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS: "power_in", DVCC_15: "power_in", DVSS_16: "power_in", VCORE: "power_in", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "TA1.2/P2.1": "bidirectional", "SMCLK/TA2CLK/P2.2": "bidirectional", "TA2.0/P2.3": "bidirectional", "TA2.1/P2.4": "bidirectional", "TA2.2/P2.5": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS_39: "power_in", DVCC_40: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", "P7.0/TB0.0": "bidirectional", "P7.1/TB0.1": "bidirectional", "P7.2/TB0.2": "bidirectional", "P7.3/TB0.3": "bidirectional", "P7.4/TB0.4": "bidirectional", "P7.5/TB0.5": "bidirectional", "~{RST}/NMI": "input", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5239IRGC";
  override referencePrefix = "U";
}

/**
 * 64kB Flash, 8kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5242IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5242.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5242IRGZ extends Component.withPins({
  "P6.3/A3/CB3": "1",
  "P6.4/A4/CB4": "2",
  "P6.5/A5/CB5": "3",
  "P5.0/A8/VeREF+": "4",
  "P5.1/A9/VeREF-": "5",
  "AVCC": "6",
  "P5.4/XIN": "7",
  "P5.5/XOUT": "8",
  "AVSS": "9",
  "DVCC_10": "10",
  "DVSS_11": "11",
  "VCORE": "12",
  "TA0CLK/ACLK/P1.0": "13",
  "TA0.0/P1.1": "14",
  "TA0.1/P1.2": "15",
  "TA0.2/P1.3": "16",
  "TA0.3/P1.4": "17",
  "TA0.4/P1.5": "18",
  "TA1CLK/CBOUT/P1.6": "19",
  "TA1.0/P1.7": "20",
  "UCB0STE/UCA0CLK/P2.7": "21",
  "UCB0SIMO/UCB0SDA/P3.0": "22",
  "UCB0SOMI/UCB0SCL/P3.1": "23",
  "UCB0CLK/UCA0STE/P3.2": "24",
  "UCA0TXD/UCA0SIMO/P3.3": "25",
  "UCA0RXD/UCA0SOMI/P3.4": "26",
  "DVSS_27": "27",
  "DVCC_28": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "~{RST}/NMI": "37",
  "P5.2/XT2IN": "38",
  "P5.3/XT2OUT": "39",
  "SBWTCK/TEST": "40",
  "PJ.0/TDO": "41",
  "PJ.1/TDI/TCLK": "42",
  "PJ.2/TMS": "43",
  "PJ.3/TCK": "44",
  "~{RSTDVCC}/SBWTDIO": "45",
  "P6.0/A0/CB0": "46",
  "P6.1/A1/CB1": "47",
  "P6.2/A2/CB2": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.3/A3/CB3": "bidirectional", "P6.4/A4/CB4": "bidirectional", "P6.5/A5/CB5": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS: "power_in", DVCC_10: "power_in", DVSS_11: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS_27: "power_in", DVCC_28: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "~{RST}/NMI": "input", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", "P6.0/A0/CB0": "bidirectional", "P6.1/A1/CB1": "bidirectional", "P6.2/A2/CB2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5242IRGZ";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 8kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5244IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5244.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5244IRGZ extends Component.withPins({
  "P6.3/A3/CB3": "1",
  "P6.4/A4/CB4": "2",
  "P6.5/A5/CB5": "3",
  "P5.0/A8/VeREF+": "4",
  "P5.1/A9/VeREF-": "5",
  "AVCC": "6",
  "P5.4/XIN": "7",
  "P5.5/XOUT": "8",
  "AVSS": "9",
  "DVCC_10": "10",
  "DVSS_11": "11",
  "VCORE": "12",
  "TA0CLK/ACLK/P1.0": "13",
  "TA0.0/P1.1": "14",
  "TA0.1/P1.2": "15",
  "TA0.2/P1.3": "16",
  "TA0.3/P1.4": "17",
  "TA0.4/P1.5": "18",
  "TA1CLK/CBOUT/P1.6": "19",
  "TA1.0/P1.7": "20",
  "UCB0STE/UCA0CLK/P2.7": "21",
  "UCB0SIMO/UCB0SDA/P3.0": "22",
  "UCB0SOMI/UCB0SCL/P3.1": "23",
  "UCB0CLK/UCA0STE/P3.2": "24",
  "UCA0TXD/UCA0SIMO/P3.3": "25",
  "UCA0RXD/UCA0SOMI/P3.4": "26",
  "DVSS_27": "27",
  "DVCC_28": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "~{RST}/NMI": "37",
  "P5.2/XT2IN": "38",
  "P5.3/XT2OUT": "39",
  "SBWTCK/TEST": "40",
  "PJ.0/TDO": "41",
  "PJ.1/TDI/TCLK": "42",
  "PJ.2/TMS": "43",
  "PJ.3/TCK": "44",
  "~{RSTDVCC}/SBWTDIO": "45",
  "P6.0/A0/CB0": "46",
  "P6.1/A1/CB1": "47",
  "P6.2/A2/CB2": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.3/A3/CB3": "bidirectional", "P6.4/A4/CB4": "bidirectional", "P6.5/A5/CB5": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS: "power_in", DVCC_10: "power_in", DVSS_11: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS_27: "power_in", DVCC_28: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "~{RST}/NMI": "input", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", "P6.0/A0/CB0": "bidirectional", "P6.1/A1/CB1": "bidirectional", "P6.2/A2/CB2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5244IRGZ";
  override referencePrefix = "U";
}

/**
 * 64kB Flash, 8kB RAM, QFN-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5247IRGC`. Reference prefix: `U`.
 * Footprint filters: Texas*RGC0064B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5247.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGC0064B_VQFN-64-1EP_9x9mm_P0.5mm_EP4.25x4.25mm.
 */
export class MSP430F5247IRGC extends Component.withPins({
  "P6.0/CB0/A0": "1",
  "P6.1/CB1/A1": "2",
  "P6.2/CB2/A2": "3",
  "P6.3/CB3/A3": "4",
  "P6.4/CB4/A4": "5",
  "P6.5/CB5/A5": "6",
  "P6.6/CB6/A6": "7",
  "P6.7/CB7/A7": "8",
  "P5.0/A8/VeREF+": "9",
  "P5.1/A9/VeREF-": "10",
  "AVCC": "11",
  "P5.4/XIN": "12",
  "P5.5/XOUT": "13",
  "AVSS": "14",
  "DVCC_15": "15",
  "DVSS_16": "16",
  "VCORE": "17",
  "ACLK/TA0CLK/P1.0": "18",
  "TA0.0/P1.1": "19",
  "TA0.1/P1.2": "20",
  "TA0.2/P1.3": "21",
  "TA0.3/P1.4": "22",
  "TA0.4/P1.5": "23",
  "CBOUT/TA1CLK/P1.6": "24",
  "TA1.0/P1.7": "25",
  "TA1.1/P2.0": "26",
  "TA1.2/P2.1": "27",
  "SMCLK/TA2CLK/P2.2": "28",
  "TA2.0/P2.3": "29",
  "TA2.1/P2.4": "30",
  "TA2.2/P2.5": "31",
  "RTCCLK/DMAE0/P2.6": "32",
  "UCB0STE/UCA0CLK/P2.7": "33",
  "UCB0SIMO/UCB0SDA/P3.0": "34",
  "UCB0SOMI/UCB0SCL/P3.1": "35",
  "UCB0CLK/UCA0STE/P3.2": "36",
  "UCA0TXD/UCA0SIMO/P3.3": "37",
  "UCA0RXD/UCA0SOMI/P3.4": "38",
  "DVSS_39": "39",
  "DVCC_40": "40",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "41",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "42",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "43",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "44",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "45",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "46",
  "P4.6": "47",
  "P4.7": "48",
  "P7.0/TB0.0": "49",
  "P7.1/TB0.1": "50",
  "P7.2/TB0.2": "51",
  "P7.3/TB0.3": "52",
  "P7.4/TB0.4": "53",
  "P7.5/TB0.5": "54",
  "~{RST}/NMI": "56",
  "P5.2/XT2IN": "57",
  "P5.3/XT2OUT": "58",
  "SBWTCK/TEST": "59",
  "PJ.0/TDO": "60",
  "PJ.1/TDI/TCLK": "61",
  "PJ.2/TMS": "62",
  "PJ.3/TCK": "63",
  "~{RSTDVCC}/SBWTDIO": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0/A0": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P6.4/CB4/A4": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS: "power_in", DVCC_15: "power_in", DVSS_16: "power_in", VCORE: "power_in", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "TA1.2/P2.1": "bidirectional", "SMCLK/TA2CLK/P2.2": "bidirectional", "TA2.0/P2.3": "bidirectional", "TA2.1/P2.4": "bidirectional", "TA2.2/P2.5": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS_39: "power_in", DVCC_40: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", "P7.0/TB0.0": "bidirectional", "P7.1/TB0.1": "bidirectional", "P7.2/TB0.2": "bidirectional", "P7.3/TB0.3": "bidirectional", "P7.4/TB0.4": "bidirectional", "P7.5/TB0.5": "bidirectional", "~{RST}/NMI": "input", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5247IRGC";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 8kB RAM, QFN-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5249IRGC`. Reference prefix: `U`.
 * Footprint filters: Texas*RGC0064B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5249.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGC0064B_VQFN-64-1EP_9x9mm_P0.5mm_EP4.25x4.25mm.
 */
export class MSP430F5249IRGC extends Component.withPins({
  "P6.0/CB0/A0": "1",
  "P6.1/CB1/A1": "2",
  "P6.2/CB2/A2": "3",
  "P6.3/CB3/A3": "4",
  "P6.4/CB4/A4": "5",
  "P6.5/CB5/A5": "6",
  "P6.6/CB6/A6": "7",
  "P6.7/CB7/A7": "8",
  "P5.0/A8/VeREF+": "9",
  "P5.1/A9/VeREF-": "10",
  "AVCC": "11",
  "P5.4/XIN": "12",
  "P5.5/XOUT": "13",
  "AVSS": "14",
  "DVCC_15": "15",
  "DVSS_16": "16",
  "VCORE": "17",
  "ACLK/TA0CLK/P1.0": "18",
  "TA0.0/P1.1": "19",
  "TA0.1/P1.2": "20",
  "TA0.2/P1.3": "21",
  "TA0.3/P1.4": "22",
  "TA0.4/P1.5": "23",
  "CBOUT/TA1CLK/P1.6": "24",
  "TA1.0/P1.7": "25",
  "TA1.1/P2.0": "26",
  "TA1.2/P2.1": "27",
  "SMCLK/TA2CLK/P2.2": "28",
  "TA2.0/P2.3": "29",
  "TA2.1/P2.4": "30",
  "TA2.2/P2.5": "31",
  "RTCCLK/DMAE0/P2.6": "32",
  "UCB0STE/UCA0CLK/P2.7": "33",
  "UCB0SIMO/UCB0SDA/P3.0": "34",
  "UCB0SOMI/UCB0SCL/P3.1": "35",
  "UCB0CLK/UCA0STE/P3.2": "36",
  "UCA0TXD/UCA0SIMO/P3.3": "37",
  "UCA0RXD/UCA0SOMI/P3.4": "38",
  "DVSS_39": "39",
  "DVCC_40": "40",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "41",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "42",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "43",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "44",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "45",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "46",
  "P4.6": "47",
  "P4.7": "48",
  "P7.0/TB0.0": "49",
  "P7.1/TB0.1": "50",
  "P7.2/TB0.2": "51",
  "P7.3/TB0.3": "52",
  "P7.4/TB0.4": "53",
  "P7.5/TB0.5": "54",
  "~{RST}/NMI": "56",
  "P5.2/XT2IN": "57",
  "P5.3/XT2OUT": "58",
  "SBWTCK/TEST": "59",
  "PJ.0/TDO": "60",
  "PJ.1/TDI/TCLK": "61",
  "PJ.2/TMS": "62",
  "PJ.3/TCK": "63",
  "~{RSTDVCC}/SBWTDIO": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0/A0": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P6.4/CB4/A4": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS: "power_in", DVCC_15: "power_in", DVSS_16: "power_in", VCORE: "power_in", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "TA1.2/P2.1": "bidirectional", "SMCLK/TA2CLK/P2.2": "bidirectional", "TA2.0/P2.3": "bidirectional", "TA2.1/P2.4": "bidirectional", "TA2.2/P2.5": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS_39: "power_in", DVCC_40: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", "P7.0/TB0.0": "bidirectional", "P7.1/TB0.1": "bidirectional", "P7.2/TB0.2": "bidirectional", "P7.3/TB0.3": "bidirectional", "P7.4/TB0.4": "bidirectional", "P7.5/TB0.5": "bidirectional", "~{RST}/NMI": "input", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RSTDVCC}/SBWTDIO": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5249IRGC";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 6kB RAM, LQFP-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5304IPT`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5304.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MSP430F5304IPT extends Component.withPins({
  "P6.0/A0": "1",
  "P6.1/A1": "2",
  "P6.2/A2": "3",
  "P6.3/A3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "ACLK/TA0CLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "TA1CLK/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "PM_NONE/P4.6": "35",
  "PM_NONE/P4.7": "36",
  "VSSU": "37",
  "PU.0": "38",
  "PU.1": "40",
  "LDOI": "41",
  "LDOO": "42",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/A0": "bidirectional", "P6.1/A1": "bidirectional", "P6.2/A2": "bidirectional", "P6.3/A3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_NONE/P4.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "power_in", LDOO: "power_out", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5304IPT";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 6kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5304IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5304.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5304IRGZ extends Component.withPins({
  "P6.0/A0": "1",
  "P6.1/A1": "2",
  "P6.2/A2": "3",
  "P6.3/A3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "ACLK/TA0CLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "TA1CLK/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "PM_NONE/P4.6": "35",
  "PM_NONE/P4.7": "36",
  "VSSU": "37",
  "PU.0": "38",
  "PU.1": "40",
  "LDOI": "41",
  "LDOO": "42",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/A0": "bidirectional", "P6.1/A1": "bidirectional", "P6.2/A2": "bidirectional", "P6.3/A3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_NONE/P4.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "power_in", LDOO: "power_out", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5304IRGZ";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 6kB RAM, LQFP-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5308IPT`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5308.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MSP430F5308IPT extends Component.withPins({
  "P6.0/A0/CB0": "1",
  "P6.1/A1/CB1": "2",
  "P6.2/A2/CB2": "3",
  "P6.3/A3/CB3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "ACLK/TA0CLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "CBOUT/TA1CLK/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "PM_NONE/P4.6": "35",
  "PM_NONE/P4.7": "36",
  "VSSU": "37",
  "PU.0": "38",
  "PU.1": "40",
  "LDOI": "41",
  "LDOO": "42",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/A0/CB0": "bidirectional", "P6.1/A1/CB1": "bidirectional", "P6.2/A2/CB2": "bidirectional", "P6.3/A3/CB3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_NONE/P4.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "power_in", LDOO: "power_out", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5308IPT";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 6kB RAM, QFN-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5308IRGC`. Reference prefix: `U`.
 * Footprint filters: Texas*RGC0064B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5308.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGC0064B_VQFN-64-1EP_9x9mm_P0.5mm_EP4.25x4.25mm.
 */
export class MSP430F5308IRGC extends Component.withPins({
  "P6.0/CB0/A0": "1",
  "P6.1/CB1/A1": "2",
  "P6.2/CB2/A2": "3",
  "P6.3/CB3/A3": "4",
  "P6.4/CB4/A4": "5",
  "P6.5/CB5/A5": "6",
  "P6.6/CB6/A6": "7",
  "P6.7/CB7/A7": "8",
  "P5.0/A8/VeREF+": "9",
  "P5.1/A9/VeREF-": "10",
  "AVCC1": "11",
  "P5.4/XIN": "12",
  "P5.5/XOUT": "13",
  "AVSS1": "14",
  "DVCC1": "15",
  "DVSS1": "16",
  "VCORE": "17",
  "ACLK/TA0CLK/P1.0": "18",
  "TA0.0/P1.1": "19",
  "TA0.1/P1.2": "20",
  "TA0.2/P1.3": "21",
  "TA0.3/P1.4": "22",
  "TA0.4/P1.5": "23",
  "CBOUT/TA1CLK/P1.6": "24",
  "TA1.0/P1.7": "25",
  "TA1.1/P2.0": "26",
  "TA1.2/P2.1": "27",
  "SMCLK/TA2CLK/P2.2": "28",
  "TA2.0/P2.3": "29",
  "TA2.1/P2.4": "30",
  "TA2.2/P2.5": "31",
  "RTCCLK/DMAE0/P2.6": "32",
  "UCB0STE/UCA0CLK/P2.7": "33",
  "UCB0SIMO/UCB0SDA/P3.0": "34",
  "UCB0SOMI/UCB0SCL/P3.1": "35",
  "UCB0CLK/UCA0STE/P3.2": "36",
  "UCA0TXD/UCA0SIMO/P3.3": "37",
  "UCA0RXD/UCA0SOMI/P3.4": "38",
  "DVSS2": "39",
  "DVCC2": "40",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "41",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "42",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "43",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "44",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "45",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "46",
  "PM_NONE/P4.6": "47",
  "PM_NONE/P4.7": "48",
  "VSSU": "49",
  "PU.0": "50",
  "PU.1": "52",
  "LDOI": "53",
  "LDOO": "54",
  "AVSS2": "56",
  "P5.2/XT2IN": "57",
  "P5.3/XT2OUT": "58",
  "SBWTCK/TEST": "59",
  "PJ.0/TDO": "60",
  "PJ.1/TDI/TCLK": "61",
  "PJ.2/TMS": "62",
  "PJ.3/TCK": "63",
  "~{RST}/NMI/SBWTDIO": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0/A0": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P6.4/CB4/A4": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "TA1.2/P2.1": "bidirectional", "SMCLK/TA2CLK/P2.2": "bidirectional", "TA2.0/P2.3": "bidirectional", "TA2.1/P2.4": "bidirectional", "TA2.2/P2.5": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_NONE/P4.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "power_in", LDOO: "power_out", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5308IRGC";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 6kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5308IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5308.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5308IRGZ extends Component.withPins({
  "P6.0/A0/CB0": "1",
  "P6.1/A1/CB1": "2",
  "P6.2/A2/CB2": "3",
  "P6.3/A3/CB3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "ACLK/TA0CLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "CBOUT/TA1CLK/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "PM_NONE/P4.6": "35",
  "PM_NONE/P4.7": "36",
  "VSSU": "37",
  "PU.0": "38",
  "PU.1": "40",
  "LDOI": "41",
  "LDOO": "42",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/A0/CB0": "bidirectional", "P6.1/A1/CB1": "bidirectional", "P6.2/A2/CB2": "bidirectional", "P6.3/A3/CB3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_NONE/P4.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "power_in", LDOO: "power_out", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5308IRGZ";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 6kB RAM, BGA-80
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5308IZQE`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*5.0x5.0mm*Layout9x9*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5308.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-80_5.0x5.0mm_Layout9x9_P0.5mm.
 */
export class MSP430F5308IZQE extends Component.withPins({
  "P6.0/CB0/A0": "A1",
  "~{RST}/NMI/SBWTDIO": "A2",
  "PJ.2/TMS": "A3",
  "SBWTCK/TEST": "A4",
  "AVSS2": "A5",
  "LDOO": "A6",
  "LDOI": "A7",
  "PU.1": "A8",
  "PU.0": "A9",
  "P6.2/CB2/A2": "B1",
  "P6.1/CB1/A1": "B2",
  "PJ.3/TCK": "B3",
  "P5.3/XT2OUT": "B4",
  "P5.2/XT2IN": "B5",
  "VSSU_B8": "B8",
  "VSSU_B9": "B9",
  "P6.4/CB4/A4": "C1",
  "P6.3/CB3/A3": "C2",
  "PJ.1/TDI/TCLK": "C4",
  "PJ.0/TDO": "C5",
  "GND_C6": "C6",
  "PM_NONE/P4.7": "C7",
  "PM_NONE/P4.6": "C8",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "C9",
  "P6.6/CB6/A6": "D1",
  "P6.5/CB5/A5": "D2",
  "P6.7/CB7/A7": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "GND_D6": "D6",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "D7",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "D8",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "D9",
  "P5.0/A8/VeREF+": "E1",
  "P5.1/A9/VeREF-": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "E7",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "E8",
  "DVCC2": "E9",
  "P5.4/XIN": "F1",
  "AVCC1": "F2",
  "GND_F3": "F3",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F6": "F6",
  "GND_F7": "F7",
  "GND_F8": "F8",
  "DVSS2": "F9",
  "P5.5/XOUT": "G1",
  "AVSS1": "G2",
  "GND_G3": "G3",
  "TA0.2/P1.3": "G4",
  "CBOUT/TA1CLK/P1.6": "G5",
  "TA1.2/P2.1": "G6",
  "UCA0RXD/UCA0SOMI/P3.4": "G7",
  "UCB0CLK/UCA0STE/P3.2": "G8",
  "UCA0TXD/UCA0SIMO/P3.3": "G9",
  "DVCC1": "H1",
  "ACLK/TA0CLK/P1.0": "H2",
  "TA0.0/P1.1": "H3",
  "TA0.3/P1.4": "H4",
  "TA1.0/P1.7": "H5",
  "TA2.0/P2.3": "H6",
  "UCB0STE/UCA0CLK/P2.7": "H7",
  "UCB0SIMO/UCB0SDA/P3.0": "H8",
  "UCB0SOMI/UCB0SCL/P3.1": "H9",
  "DVSS1": "J1",
  "VCORE": "J2",
  "TA0.1/P1.2": "J3",
  "TA0.4/P1.5": "J4",
  "TA1.1/P2.0": "J5",
  "SMCLK/TA2CLK/P2.2": "J6",
  "TA2.1/P2.4": "J7",
  "TA2.2/P2.5": "J8",
  "RTCCLK/DMAE0/P2.6": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0/A0": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.2/TMS": "bidirectional", "SBWTCK/TEST": "input", AVSS2: "power_in", LDOO: "power_out", LDOI: "power_in", "PU.1": "bidirectional", "PU.0": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.1/CB1/A1": "bidirectional", "PJ.3/TCK": "bidirectional", "P5.3/XT2OUT": "bidirectional", "P5.2/XT2IN": "bidirectional", VSSU_B8: "power_in", VSSU_B9: "power_in", "P6.4/CB4/A4": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.0/TDO": "bidirectional", GND_C6: "power_in", "PM_NONE/P4.7": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.7/CB7/A7": "bidirectional", GND_D4: "power_in", GND_D5: "power_in", GND_D6: "power_in", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", GND_E3: "power_in", GND_E4: "power_in", GND_E5: "power_in", GND_E6: "power_in", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", DVCC2: "power_in", "P5.4/XIN": "bidirectional", AVCC1: "power_in", GND_F3: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F6: "power_in", GND_F7: "power_in", GND_F8: "power_in", DVSS2: "power_in", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", GND_G3: "power_in", "TA0.2/P1.3": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.2/P2.1": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", DVCC1: "power_in", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA2.0/P2.3": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1.1/P2.0": "bidirectional", "SMCLK/TA2CLK/P2.2": "bidirectional", "TA2.1/P2.4": "bidirectional", "TA2.2/P2.5": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5308IZQE";
  override referencePrefix = "U";
}

/**
 * 24kB Flash, 6kB RAM, LQFP-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5309IPT`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5309.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MSP430F5309IPT extends Component.withPins({
  "P6.0/A0/CB0": "1",
  "P6.1/A1/CB1": "2",
  "P6.2/A2/CB2": "3",
  "P6.3/A3/CB3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "ACLK/TA0CLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "CBOUT/TA1CLK/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "PM_NONE/P4.6": "35",
  "PM_NONE/P4.7": "36",
  "VSSU": "37",
  "PU.0": "38",
  "PU.1": "40",
  "LDOI": "41",
  "LDOO": "42",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/A0/CB0": "bidirectional", "P6.1/A1/CB1": "bidirectional", "P6.2/A2/CB2": "bidirectional", "P6.3/A3/CB3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_NONE/P4.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "power_in", LDOO: "power_out", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5309IPT";
  override referencePrefix = "U";
}

/**
 * 24kB Flash, 6kB RAM, QFN-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5309IRGC`. Reference prefix: `U`.
 * Footprint filters: Texas*RGC0064B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5309.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGC0064B_VQFN-64-1EP_9x9mm_P0.5mm_EP4.25x4.25mm.
 */
export class MSP430F5309IRGC extends Component.withPins({
  "P6.0/CB0/A0": "1",
  "P6.1/CB1/A1": "2",
  "P6.2/CB2/A2": "3",
  "P6.3/CB3/A3": "4",
  "P6.4/CB4/A4": "5",
  "P6.5/CB5/A5": "6",
  "P6.6/CB6/A6": "7",
  "P6.7/CB7/A7": "8",
  "P5.0/A8/VeREF+": "9",
  "P5.1/A9/VeREF-": "10",
  "AVCC1": "11",
  "P5.4/XIN": "12",
  "P5.5/XOUT": "13",
  "AVSS1": "14",
  "DVCC1": "15",
  "DVSS1": "16",
  "VCORE": "17",
  "ACLK/TA0CLK/P1.0": "18",
  "TA0.0/P1.1": "19",
  "TA0.1/P1.2": "20",
  "TA0.2/P1.3": "21",
  "TA0.3/P1.4": "22",
  "TA0.4/P1.5": "23",
  "CBOUT/TA1CLK/P1.6": "24",
  "TA1.0/P1.7": "25",
  "TA1.1/P2.0": "26",
  "TA1.2/P2.1": "27",
  "SMCLK/TA2CLK/P2.2": "28",
  "TA2.0/P2.3": "29",
  "TA2.1/P2.4": "30",
  "TA2.2/P2.5": "31",
  "RTCCLK/DMAE0/P2.6": "32",
  "UCB0STE/UCA0CLK/P2.7": "33",
  "UCB0SIMO/UCB0SDA/P3.0": "34",
  "UCB0SOMI/UCB0SCL/P3.1": "35",
  "UCB0CLK/UCA0STE/P3.2": "36",
  "UCA0TXD/UCA0SIMO/P3.3": "37",
  "UCA0RXD/UCA0SOMI/P3.4": "38",
  "DVSS2": "39",
  "DVCC2": "40",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "41",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "42",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "43",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "44",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "45",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "46",
  "PM_NONE/P4.6": "47",
  "PM_NONE/P4.7": "48",
  "VSSU": "49",
  "PU.0": "50",
  "PU.1": "52",
  "LDOI": "53",
  "LDOO": "54",
  "AVSS2": "56",
  "P5.2/XT2IN": "57",
  "P5.3/XT2OUT": "58",
  "SBWTCK/TEST": "59",
  "PJ.0/TDO": "60",
  "PJ.1/TDI/TCLK": "61",
  "PJ.2/TMS": "62",
  "PJ.3/TCK": "63",
  "~{RST}/NMI/SBWTDIO": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0/A0": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P6.4/CB4/A4": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "TA1.2/P2.1": "bidirectional", "SMCLK/TA2CLK/P2.2": "bidirectional", "TA2.0/P2.3": "bidirectional", "TA2.1/P2.4": "bidirectional", "TA2.2/P2.5": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_NONE/P4.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "power_in", LDOO: "power_out", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5309IRGC";
  override referencePrefix = "U";
}

/**
 * 24kB Flash, 6kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5309IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5309.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5309IRGZ extends Component.withPins({
  "P6.0/A0/CB0": "1",
  "P6.1/A1/CB1": "2",
  "P6.2/A2/CB2": "3",
  "P6.3/A3/CB3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "ACLK/TA0CLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "CBOUT/TA1CLK/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "PM_NONE/P4.6": "35",
  "PM_NONE/P4.7": "36",
  "VSSU": "37",
  "PU.0": "38",
  "PU.1": "40",
  "LDOI": "41",
  "LDOO": "42",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/A0/CB0": "bidirectional", "P6.1/A1/CB1": "bidirectional", "P6.2/A2/CB2": "bidirectional", "P6.3/A3/CB3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_NONE/P4.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "power_in", LDOO: "power_out", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5309IRGZ";
  override referencePrefix = "U";
}

/**
 * 24kB Flash, 6kB RAM, BGA-80
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5309IZQE`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*5.0x5.0mm*Layout9x9*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5309.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-80_5.0x5.0mm_Layout9x9_P0.5mm.
 */
export class MSP430F5309IZQE extends Component.withPins({
  "P6.0/CB0/A0": "A1",
  "~{RST}/NMI/SBWTDIO": "A2",
  "PJ.2/TMS": "A3",
  "SBWTCK/TEST": "A4",
  "AVSS2": "A5",
  "LDOO": "A6",
  "LDOI": "A7",
  "PU.1": "A8",
  "PU.0": "A9",
  "P6.2/CB2/A2": "B1",
  "P6.1/CB1/A1": "B2",
  "PJ.3/TCK": "B3",
  "P5.3/XT2OUT": "B4",
  "P5.2/XT2IN": "B5",
  "VSSU_B8": "B8",
  "VSSU_B9": "B9",
  "P6.4/CB4/A4": "C1",
  "P6.3/CB3/A3": "C2",
  "PJ.1/TDI/TCLK": "C4",
  "PJ.0/TDO": "C5",
  "GND_C6": "C6",
  "PM_NONE/P4.7": "C7",
  "PM_NONE/P4.6": "C8",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "C9",
  "P6.6/CB6/A6": "D1",
  "P6.5/CB5/A5": "D2",
  "P6.7/CB7/A7": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "GND_D6": "D6",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "D7",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "D8",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "D9",
  "P5.0/A8/VeREF+": "E1",
  "P5.1/A9/VeREF-": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "E7",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "E8",
  "DVCC2": "E9",
  "P5.4/XIN": "F1",
  "AVCC1": "F2",
  "GND_F3": "F3",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F6": "F6",
  "GND_F7": "F7",
  "GND_F8": "F8",
  "DVSS2": "F9",
  "P5.5/XOUT": "G1",
  "AVSS1": "G2",
  "GND_G3": "G3",
  "TA0.2/P1.3": "G4",
  "CBOUT/TA1CLK/P1.6": "G5",
  "TA1.2/P2.1": "G6",
  "UCA0RXD/UCA0SOMI/P3.4": "G7",
  "UCB0CLK/UCA0STE/P3.2": "G8",
  "UCA0TXD/UCA0SIMO/P3.3": "G9",
  "DVCC1": "H1",
  "ACLK/TA0CLK/P1.0": "H2",
  "TA0.0/P1.1": "H3",
  "TA0.3/P1.4": "H4",
  "TA1.0/P1.7": "H5",
  "TA2.0/P2.3": "H6",
  "UCB0STE/UCA0CLK/P2.7": "H7",
  "UCB0SIMO/UCB0SDA/P3.0": "H8",
  "UCB0SOMI/UCB0SCL/P3.1": "H9",
  "DVSS1": "J1",
  "VCORE": "J2",
  "TA0.1/P1.2": "J3",
  "TA0.4/P1.5": "J4",
  "TA1.1/P2.0": "J5",
  "SMCLK/TA2CLK/P2.2": "J6",
  "TA2.1/P2.4": "J7",
  "TA2.2/P2.5": "J8",
  "RTCCLK/DMAE0/P2.6": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0/A0": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.2/TMS": "bidirectional", "SBWTCK/TEST": "input", AVSS2: "power_in", LDOO: "power_out", LDOI: "power_in", "PU.1": "bidirectional", "PU.0": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.1/CB1/A1": "bidirectional", "PJ.3/TCK": "bidirectional", "P5.3/XT2OUT": "bidirectional", "P5.2/XT2IN": "bidirectional", VSSU_B8: "power_in", VSSU_B9: "power_in", "P6.4/CB4/A4": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.0/TDO": "bidirectional", GND_C6: "power_in", "PM_NONE/P4.7": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.7/CB7/A7": "bidirectional", GND_D4: "power_in", GND_D5: "power_in", GND_D6: "power_in", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", GND_E3: "power_in", GND_E4: "power_in", GND_E5: "power_in", GND_E6: "power_in", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", DVCC2: "power_in", "P5.4/XIN": "bidirectional", AVCC1: "power_in", GND_F3: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F6: "power_in", GND_F7: "power_in", GND_F8: "power_in", DVSS2: "power_in", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", GND_G3: "power_in", "TA0.2/P1.3": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.2/P2.1": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", DVCC1: "power_in", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA2.0/P2.3": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1.1/P2.0": "bidirectional", "SMCLK/TA2CLK/P2.2": "bidirectional", "TA2.1/P2.4": "bidirectional", "TA2.2/P2.5": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5309IZQE";
  override referencePrefix = "U";
}

/**
 * 32kB Flash, 6kB RAM, LQFP-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5310IPT`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5310.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class MSP430F5310IPT extends Component.withPins({
  "P6.0/A0/CB0": "1",
  "P6.1/A1/CB1": "2",
  "P6.2/A2/CB2": "3",
  "P6.3/A3/CB3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "ACLK/TA0CLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "CBOUT/TA1CLK/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "PM_NONE/P4.6": "35",
  "PM_NONE/P4.7": "36",
  "VSSU": "37",
  "PU.0": "38",
  "PU.1": "40",
  "LDOI": "41",
  "LDOO": "42",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/A0/CB0": "bidirectional", "P6.1/A1/CB1": "bidirectional", "P6.2/A2/CB2": "bidirectional", "P6.3/A3/CB3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_NONE/P4.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "power_in", LDOO: "power_out", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5310IPT";
  override referencePrefix = "U";
}

/**
 * 32kB Flash, 6kB RAM, QFN-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5310IRGC`. Reference prefix: `U`.
 * Footprint filters: Texas*RGC0064B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5310.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGC0064B_VQFN-64-1EP_9x9mm_P0.5mm_EP4.25x4.25mm.
 */
export class MSP430F5310IRGC extends Component.withPins({
  "P6.0/CB0/A0": "1",
  "P6.1/CB1/A1": "2",
  "P6.2/CB2/A2": "3",
  "P6.3/CB3/A3": "4",
  "P6.4/CB4/A4": "5",
  "P6.5/CB5/A5": "6",
  "P6.6/CB6/A6": "7",
  "P6.7/CB7/A7": "8",
  "P5.0/A8/VeREF+": "9",
  "P5.1/A9/VeREF-": "10",
  "AVCC1": "11",
  "P5.4/XIN": "12",
  "P5.5/XOUT": "13",
  "AVSS1": "14",
  "DVCC1": "15",
  "DVSS1": "16",
  "VCORE": "17",
  "ACLK/TA0CLK/P1.0": "18",
  "TA0.0/P1.1": "19",
  "TA0.1/P1.2": "20",
  "TA0.2/P1.3": "21",
  "TA0.3/P1.4": "22",
  "TA0.4/P1.5": "23",
  "CBOUT/TA1CLK/P1.6": "24",
  "TA1.0/P1.7": "25",
  "TA1.1/P2.0": "26",
  "TA1.2/P2.1": "27",
  "SMCLK/TA2CLK/P2.2": "28",
  "TA2.0/P2.3": "29",
  "TA2.1/P2.4": "30",
  "TA2.2/P2.5": "31",
  "RTCCLK/DMAE0/P2.6": "32",
  "UCB0STE/UCA0CLK/P2.7": "33",
  "UCB0SIMO/UCB0SDA/P3.0": "34",
  "UCB0SOMI/UCB0SCL/P3.1": "35",
  "UCB0CLK/UCA0STE/P3.2": "36",
  "UCA0TXD/UCA0SIMO/P3.3": "37",
  "UCA0RXD/UCA0SOMI/P3.4": "38",
  "DVSS2": "39",
  "DVCC2": "40",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "41",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "42",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "43",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "44",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "45",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "46",
  "PM_NONE/P4.6": "47",
  "PM_NONE/P4.7": "48",
  "VSSU": "49",
  "PU.0": "50",
  "PU.1": "52",
  "LDOI": "53",
  "LDOO": "54",
  "AVSS2": "56",
  "P5.2/XT2IN": "57",
  "P5.3/XT2OUT": "58",
  "SBWTCK/TEST": "59",
  "PJ.0/TDO": "60",
  "PJ.1/TDI/TCLK": "61",
  "PJ.2/TMS": "62",
  "PJ.3/TCK": "63",
  "~{RST}/NMI/SBWTDIO": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0/A0": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P6.4/CB4/A4": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "TA1.2/P2.1": "bidirectional", "SMCLK/TA2CLK/P2.2": "bidirectional", "TA2.0/P2.3": "bidirectional", "TA2.1/P2.4": "bidirectional", "TA2.2/P2.5": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_NONE/P4.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "power_in", LDOO: "power_out", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5310IRGC";
  override referencePrefix = "U";
}

/**
 * 32kB Flash, 6kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5310IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5310.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5310IRGZ extends Component.withPins({
  "P6.0/A0/CB0": "1",
  "P6.1/A1/CB1": "2",
  "P6.2/A2/CB2": "3",
  "P6.3/A3/CB3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "ACLK/TA0CLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "CBOUT/TA1CLK/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "PM_NONE/P4.6": "35",
  "PM_NONE/P4.7": "36",
  "VSSU": "37",
  "PU.0": "38",
  "PU.1": "40",
  "LDOI": "41",
  "LDOO": "42",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/A0/CB0": "bidirectional", "P6.1/A1/CB1": "bidirectional", "P6.2/A2/CB2": "bidirectional", "P6.3/A3/CB3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_NONE/P4.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "power_in", LDOO: "power_out", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5310IRGZ";
  override referencePrefix = "U";
}

/**
 * 32kB Flash, 6kB RAM, BGA-80
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5310IZQE`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*5.0x5.0mm*Layout9x9*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5310.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-80_5.0x5.0mm_Layout9x9_P0.5mm.
 */
export class MSP430F5310IZQE extends Component.withPins({
  "P6.0/CB0/A0": "A1",
  "~{RST}/NMI/SBWTDIO": "A2",
  "PJ.2/TMS": "A3",
  "SBWTCK/TEST": "A4",
  "AVSS2": "A5",
  "LDOO": "A6",
  "LDOI": "A7",
  "PU.1": "A8",
  "PU.0": "A9",
  "P6.2/CB2/A2": "B1",
  "P6.1/CB1/A1": "B2",
  "PJ.3/TCK": "B3",
  "P5.3/XT2OUT": "B4",
  "P5.2/XT2IN": "B5",
  "VSSU_B8": "B8",
  "VSSU_B9": "B9",
  "P6.4/CB4/A4": "C1",
  "P6.3/CB3/A3": "C2",
  "PJ.1/TDI/TCLK": "C4",
  "PJ.0/TDO": "C5",
  "GND_C6": "C6",
  "PM_NONE/P4.7": "C7",
  "PM_NONE/P4.6": "C8",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "C9",
  "P6.6/CB6/A6": "D1",
  "P6.5/CB5/A5": "D2",
  "P6.7/CB7/A7": "D3",
  "GND_D4": "D4",
  "GND_D5": "D5",
  "GND_D6": "D6",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "D7",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "D8",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "D9",
  "P5.0/A8/VeREF+": "E1",
  "P5.1/A9/VeREF-": "E2",
  "GND_E3": "E3",
  "GND_E4": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "E7",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "E8",
  "DVCC2": "E9",
  "P5.4/XIN": "F1",
  "AVCC1": "F2",
  "GND_F3": "F3",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F6": "F6",
  "GND_F7": "F7",
  "GND_F8": "F8",
  "DVSS2": "F9",
  "P5.5/XOUT": "G1",
  "AVSS1": "G2",
  "GND_G3": "G3",
  "TA0.2/P1.3": "G4",
  "CBOUT/TA1CLK/P1.6": "G5",
  "TA1.2/P2.1": "G6",
  "UCA0RXD/UCA0SOMI/P3.4": "G7",
  "UCB0CLK/UCA0STE/P3.2": "G8",
  "UCA0TXD/UCA0SIMO/P3.3": "G9",
  "DVCC1": "H1",
  "ACLK/TA0CLK/P1.0": "H2",
  "TA0.0/P1.1": "H3",
  "TA0.3/P1.4": "H4",
  "TA1.0/P1.7": "H5",
  "TA2.0/P2.3": "H6",
  "UCB0STE/UCA0CLK/P2.7": "H7",
  "UCB0SIMO/UCB0SDA/P3.0": "H8",
  "UCB0SOMI/UCB0SCL/P3.1": "H9",
  "DVSS1": "J1",
  "VCORE": "J2",
  "TA0.1/P1.2": "J3",
  "TA0.4/P1.5": "J4",
  "TA1.1/P2.0": "J5",
  "SMCLK/TA2CLK/P2.2": "J6",
  "TA2.1/P2.4": "J7",
  "TA2.2/P2.5": "J8",
  "RTCCLK/DMAE0/P2.6": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0/A0": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.2/TMS": "bidirectional", "SBWTCK/TEST": "input", AVSS2: "power_in", LDOO: "power_out", LDOI: "power_in", "PU.1": "bidirectional", "PU.0": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.1/CB1/A1": "bidirectional", "PJ.3/TCK": "bidirectional", "P5.3/XT2OUT": "bidirectional", "P5.2/XT2IN": "bidirectional", VSSU_B8: "power_in", VSSU_B9: "power_in", "P6.4/CB4/A4": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.0/TDO": "bidirectional", GND_C6: "power_in", "PM_NONE/P4.7": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.7/CB7/A7": "bidirectional", GND_D4: "power_in", GND_D5: "power_in", GND_D6: "power_in", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", GND_E3: "power_in", GND_E4: "power_in", GND_E5: "power_in", GND_E6: "power_in", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", DVCC2: "power_in", "P5.4/XIN": "bidirectional", AVCC1: "power_in", GND_F3: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F6: "power_in", GND_F7: "power_in", GND_F8: "power_in", DVSS2: "power_in", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", GND_G3: "power_in", "TA0.2/P1.3": "bidirectional", "CBOUT/TA1CLK/P1.6": "bidirectional", "TA1.2/P2.1": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", DVCC1: "power_in", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA2.0/P2.3": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1.1/P2.0": "bidirectional", "SMCLK/TA2CLK/P2.2": "bidirectional", "TA2.1/P2.4": "bidirectional", "TA2.2/P2.5": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5310IZQE";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 10kB RAM, LQFP-100
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5333IPZ`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5333.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class MSP430F5333IPZ extends Component.withPins({
  "P6.4/CB4/A4": "1",
  "P6.5/CB5/A5": "2",
  "P6.6/CB6/A6": "3",
  "P6.7/CB7/A7": "4",
  "P7.4/CB8/A12": "5",
  "P7.5/CB9/A13": "6",
  "P7.6/CB10/A14": "7",
  "P7.7/CB11/A15": "8",
  "VREF+/VeREF+/P5.0": "9",
  "VREF-/VeREF-/P5.1": "10",
  "AVCC1": "11",
  "AVSS1": "12",
  "XIN": "13",
  "XOUT": "14",
  "AVSS2": "15",
  "ADC12CLK/DMAE0/P5.6": "16",
  "P2MAP0/P2.0": "17",
  "P2MAP1/P2.1": "18",
  "P2MAP2/P2.2": "19",
  "P2MAP3/P2.3": "20",
  "P2MAP4/P2.4": "21",
  "P2MAP5/P2.5": "22",
  "P2MAP6/P2.6": "23",
  "P2MAP7/P2.7": "24",
  "DVCC1": "25",
  "DVSS1": "26",
  "VCORE": "27",
  "P5.2": "28",
  "DVSS": "29",
  "P5.3": "31",
  "P5.4": "32",
  "P5.5": "33",
  "TA0CLK/ACLK/P1.0": "34",
  "TA0.0/P1.1": "35",
  "TA0.1/P1.2": "36",
  "TA0.2/P1.3": "37",
  "TA0.3/P1.4": "38",
  "TA0.4/P1.5": "39",
  "TA0.1/P1.6": "40",
  "TA0.2/P1.7": "41",
  "TA1CLK/CBOUT/P3.0": "42",
  "TA1.0/P3.1": "43",
  "TA1.1/P3.2": "44",
  "TA1.2/P3.3": "45",
  "TA2CLK/SMCLK/P3.4": "46",
  "TA2.0/P3.5": "47",
  "TA2.1/P3.6": "48",
  "TA2.2/P3.7": "49",
  "TB0.0/P4.0": "50",
  "TB0.1/P4.1": "51",
  "TB0.2/P4.2": "52",
  "TB0.3/P4.3": "53",
  "TB0.4/P4.4": "54",
  "TB0.5/P4.5": "55",
  "TB0.6/P4.6": "56",
  "TB0OUTH/SVMOUT/P4.7": "57",
  "P8.0/TB0CLK": "58",
  "P8.1/UCB1STE/UCA1CLK": "59",
  "P8.2/UCA1TXD/UCA1SIMO": "60",
  "P8.3/UCA1RXD/UCA1SOMI": "61",
  "P8.4/UCB1CLK/UCA1STE": "62",
  "DVSS2": "63",
  "DVCC2": "64",
  "P8.5/UCB1SIMO/UCB1SDA": "65",
  "P8.6/UCB1SOMI/UCB1SCL": "66",
  "P8.7": "67",
  "P9.0": "68",
  "P9.1": "69",
  "P9.2": "70",
  "P9.3": "71",
  "P9.4": "72",
  "P9.5": "73",
  "P9.6": "74",
  "P9.7": "75",
  "VSSU": "76",
  "PU.0": "77",
  "PU.1": "79",
  "LDOI": "80",
  "LDOO": "81",
  "AVSS3": "83",
  "P7.2/XT2IN": "84",
  "P7.3/XT2OUT": "85",
  "VBAK": "86",
  "VBAT": "87",
  "RTCCLK/P5.7": "88",
  "DVCC3": "89",
  "DVSS3": "90",
  "TEST/SBWTCK": "91",
  "PJ.0/TDO": "92",
  "PJ.1/TDI/TCLK": "93",
  "PJ.2/TMS": "94",
  "PJ.3/TCK": "95",
  "~{RST}/NMI/SBWTDIO": "96",
  "P6.0/CB0/A0": "97",
  "P6.1/CB1/A1": "98",
  "P6.2/CB2/A2": "99",
  "P6.3/CB3/A3": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P7.4/CB8/A12": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P7.6/CB10/A14": "bidirectional", "P7.7/CB11/A15": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "VREF-/VeREF-/P5.1": "bidirectional", AVCC1: "power_in", AVSS1: "power_in", XIN: "bidirectional", XOUT: "bidirectional", AVSS2: "power_in", "ADC12CLK/DMAE0/P5.6": "bidirectional", "P2MAP0/P2.0": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP3/P2.3": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "P2MAP7/P2.7": "bidirectional", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "P5.2": "bidirectional", DVSS: "power_in", "P5.3": "bidirectional", "P5.4": "bidirectional", "P5.5": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.0/P3.1": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.1/P3.6": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.0/P4.0": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.3/P4.3": "bidirectional", "TB0.4/P4.4": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.7": "bidirectional", "P9.0": "bidirectional", "P9.1": "bidirectional", "P9.2": "bidirectional", "P9.3": "bidirectional", "P9.4": "bidirectional", "P9.5": "bidirectional", "P9.6": "bidirectional", "P9.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "bidirectional", LDOO: "bidirectional", AVSS3: "power_in", "P7.2/XT2IN": "bidirectional", "P7.3/XT2OUT": "bidirectional", VBAK: "bidirectional", VBAT: "bidirectional", "RTCCLK/P5.7": "bidirectional", DVCC3: "power_in", DVSS3: "power_in", "TEST/SBWTCK": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "P6.0/CB0/A0": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.3/CB3/A3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5333IPZ";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 10kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5333IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5333.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5333IZQW extends Component.withPins({
  "P6.4/CB4/A4": "A1",
  "P6.2/CB2/A2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "LDOO": "A9",
  "LDOI": "A10",
  "PU.1": "A11",
  "PU.0": "A12",
  "P6.6/CB6/A6": "B1",
  "P6.5/CB5/A5": "B2",
  "P6.1/CB1/A1": "B3",
  "P6.0/CB0/A0": "B4",
  "PJ.0/TDO": "B5",
  "TEST/SBWTCK": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8/A12": "C1",
  "P6.7/CB7/A7": "C2",
  "P7.5/CB9/A13": "C3",
  "P9.6": "C11",
  "P9.5": "C12",
  "P7.7/CB11/A15": "D1",
  "P7.6/CB10/A14": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/CB3/A3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3": "D11",
  "P9.2": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "ADC12CLK/DMAE0/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "TA2CLK/SMCLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "TB0OUTH/SVMOUT/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "TA0CLK/ACLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "TA1CLK/CBOUT/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.2/CB2/A2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", LDOO: "bidirectional", LDOI: "bidirectional", "PU.1": "bidirectional", "PU.0": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.0/CB0/A0": "bidirectional", "PJ.0/TDO": "bidirectional", "TEST/SBWTCK": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8/A12": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P9.6": "bidirectional", "P9.5": "bidirectional", "P7.7/CB11/A15": "bidirectional", "P7.6/CB10/A14": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3": "bidirectional", "P9.2": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "ADC12CLK/DMAE0/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5333IZQW";
  override referencePrefix = "U";
}

/**
 * 256kB Flash, 18kB RAM, LQFP-100
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5335IPZ`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5335.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class MSP430F5335IPZ extends Component.withPins({
  "P6.4/CB4/A4": "1",
  "P6.5/CB5/A5": "2",
  "P6.6/CB6/A6": "3",
  "P6.7/CB7/A7": "4",
  "P7.4/CB8/A12": "5",
  "P7.5/CB9/A13": "6",
  "P7.6/CB10/A14": "7",
  "P7.7/CB11/A15": "8",
  "VREF+/VeREF+/P5.0": "9",
  "VREF-/VeREF-/P5.1": "10",
  "AVCC1": "11",
  "AVSS1": "12",
  "XIN": "13",
  "XOUT": "14",
  "AVSS2": "15",
  "ADC12CLK/DMAE0/P5.6": "16",
  "P2MAP0/P2.0": "17",
  "P2MAP1/P2.1": "18",
  "P2MAP2/P2.2": "19",
  "P2MAP3/P2.3": "20",
  "P2MAP4/P2.4": "21",
  "P2MAP5/P2.5": "22",
  "P2MAP6/P2.6": "23",
  "P2MAP7/P2.7": "24",
  "DVCC1": "25",
  "DVSS1": "26",
  "VCORE": "27",
  "P5.2": "28",
  "DVSS": "29",
  "P5.3": "31",
  "P5.4": "32",
  "P5.5": "33",
  "TA0CLK/ACLK/P1.0": "34",
  "TA0.0/P1.1": "35",
  "TA0.1/P1.2": "36",
  "TA0.2/P1.3": "37",
  "TA0.3/P1.4": "38",
  "TA0.4/P1.5": "39",
  "TA0.1/P1.6": "40",
  "TA0.2/P1.7": "41",
  "TA1CLK/CBOUT/P3.0": "42",
  "TA1.0/P3.1": "43",
  "TA1.1/P3.2": "44",
  "TA1.2/P3.3": "45",
  "TA2CLK/SMCLK/P3.4": "46",
  "TA2.0/P3.5": "47",
  "TA2.1/P3.6": "48",
  "TA2.2/P3.7": "49",
  "TB0.0/P4.0": "50",
  "TB0.1/P4.1": "51",
  "TB0.2/P4.2": "52",
  "TB0.3/P4.3": "53",
  "TB0.4/P4.4": "54",
  "TB0.5/P4.5": "55",
  "TB0.6/P4.6": "56",
  "TB0OUTH/SVMOUT/P4.7": "57",
  "P8.0/TB0CLK": "58",
  "P8.1/UCB1STE/UCA1CLK": "59",
  "P8.2/UCA1TXD/UCA1SIMO": "60",
  "P8.3/UCA1RXD/UCA1SOMI": "61",
  "P8.4/UCB1CLK/UCA1STE": "62",
  "DVSS2": "63",
  "DVCC2": "64",
  "P8.5/UCB1SIMO/UCB1SDA": "65",
  "P8.6/UCB1SOMI/UCB1SCL": "66",
  "P8.7": "67",
  "P9.0": "68",
  "P9.1": "69",
  "P9.2": "70",
  "P9.3": "71",
  "P9.4": "72",
  "P9.5": "73",
  "P9.6": "74",
  "P9.7": "75",
  "VSSU": "76",
  "PU.0": "77",
  "PU.1": "79",
  "LDOI": "80",
  "LDOO": "81",
  "AVSS3": "83",
  "P7.2/XT2IN": "84",
  "P7.3/XT2OUT": "85",
  "VBAK": "86",
  "VBAT": "87",
  "RTCCLK/P5.7": "88",
  "DVCC3": "89",
  "DVSS3": "90",
  "TEST/SBWTCK": "91",
  "PJ.0/TDO": "92",
  "PJ.1/TDI/TCLK": "93",
  "PJ.2/TMS": "94",
  "PJ.3/TCK": "95",
  "~{RST}/NMI/SBWTDIO": "96",
  "P6.0/CB0/A0": "97",
  "P6.1/CB1/A1": "98",
  "P6.2/CB2/A2": "99",
  "P6.3/CB3/A3": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P7.4/CB8/A12": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P7.6/CB10/A14": "bidirectional", "P7.7/CB11/A15": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "VREF-/VeREF-/P5.1": "bidirectional", AVCC1: "power_in", AVSS1: "power_in", XIN: "bidirectional", XOUT: "bidirectional", AVSS2: "power_in", "ADC12CLK/DMAE0/P5.6": "bidirectional", "P2MAP0/P2.0": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP3/P2.3": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "P2MAP7/P2.7": "bidirectional", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "P5.2": "bidirectional", DVSS: "power_in", "P5.3": "bidirectional", "P5.4": "bidirectional", "P5.5": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.0/P3.1": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.1/P3.6": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.0/P4.0": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.3/P4.3": "bidirectional", "TB0.4/P4.4": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.7": "bidirectional", "P9.0": "bidirectional", "P9.1": "bidirectional", "P9.2": "bidirectional", "P9.3": "bidirectional", "P9.4": "bidirectional", "P9.5": "bidirectional", "P9.6": "bidirectional", "P9.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "bidirectional", LDOO: "bidirectional", AVSS3: "power_in", "P7.2/XT2IN": "bidirectional", "P7.3/XT2OUT": "bidirectional", VBAK: "bidirectional", VBAT: "bidirectional", "RTCCLK/P5.7": "bidirectional", DVCC3: "power_in", DVSS3: "power_in", "TEST/SBWTCK": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "P6.0/CB0/A0": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.3/CB3/A3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5335IPZ";
  override referencePrefix = "U";
}

/**
 * 256kB Flash, 18kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5335IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5335.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5335IZQW extends Component.withPins({
  "P6.4/CB4/A4": "A1",
  "P6.2/CB2/A2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "LDOO": "A9",
  "LDOI": "A10",
  "PU.1": "A11",
  "PU.0": "A12",
  "P6.6/CB6/A6": "B1",
  "P6.5/CB5/A5": "B2",
  "P6.1/CB1/A1": "B3",
  "P6.0/CB0/A0": "B4",
  "PJ.0/TDO": "B5",
  "TEST/SBWTCK": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8/A12": "C1",
  "P6.7/CB7/A7": "C2",
  "P7.5/CB9/A13": "C3",
  "P9.6": "C11",
  "P9.5": "C12",
  "P7.7/CB11/A15": "D1",
  "P7.6/CB10/A14": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/CB3/A3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3": "D11",
  "P9.2": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "ADC12CLK/DMAE0/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "TA2CLK/SMCLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "TB0OUTH/SVMOUT/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "TA0CLK/ACLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "TA1CLK/CBOUT/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.2/CB2/A2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", LDOO: "bidirectional", LDOI: "bidirectional", "PU.1": "bidirectional", "PU.0": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.0/CB0/A0": "bidirectional", "PJ.0/TDO": "bidirectional", "TEST/SBWTCK": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8/A12": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P9.6": "bidirectional", "P9.5": "bidirectional", "P7.7/CB11/A15": "bidirectional", "P7.6/CB10/A14": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3": "bidirectional", "P9.2": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "ADC12CLK/DMAE0/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5335IZQW";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 18kB RAM, LQFP-100
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5336IPZ`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5336.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class MSP430F5336IPZ extends Component.withPins({
  "P6.4/CB4/A4": "1",
  "P6.5/CB5/A5": "2",
  "P6.6/CB6/A6/DAC0": "3",
  "P6.7/CB7/A7/DAC1": "4",
  "P7.4/CB8/A12": "5",
  "P7.5/CB9/A13": "6",
  "P7.6/CB10/A14/DAC0": "7",
  "P7.7/CB11/A15/DAC1": "8",
  "VREF+/VeREF+/P5.0": "9",
  "VREF-/VeREF-/P5.1": "10",
  "AVCC1": "11",
  "AVSS1": "12",
  "XIN": "13",
  "XOUT": "14",
  "AVSS2": "15",
  "ADC12CLK/DMAE0/P5.6": "16",
  "P2MAP0/P2.0": "17",
  "P2MAP1/P2.1": "18",
  "P2MAP2/P2.2": "19",
  "P2MAP3/P2.3": "20",
  "P2MAP4/P2.4": "21",
  "P2MAP5/P2.5": "22",
  "P2MAP6/P2.6": "23",
  "P2MAP7/P2.7": "24",
  "DVCC1": "25",
  "DVSS1": "26",
  "VCORE": "27",
  "P5.2": "28",
  "DVSS": "29",
  "P5.3": "31",
  "P5.4": "32",
  "P5.5": "33",
  "TA0CLK/ACLK/P1.0": "34",
  "TA0.0/P1.1": "35",
  "TA0.1/P1.2": "36",
  "TA0.2/P1.3": "37",
  "TA0.3/P1.4": "38",
  "TA0.4/P1.5": "39",
  "TA0.1/P1.6": "40",
  "TA0.2/P1.7": "41",
  "TA1CLK/CBOUT/P3.0": "42",
  "TA1.0/P3.1": "43",
  "TA1.1/P3.2": "44",
  "TA1.2/P3.3": "45",
  "TA2CLK/SMCLK/P3.4": "46",
  "TA2.0/P3.5": "47",
  "TA2.1/P3.6": "48",
  "TA2.2/P3.7": "49",
  "TB0.0/P4.0": "50",
  "TB0.1/P4.1": "51",
  "TB0.2/P4.2": "52",
  "TB0.3/P4.3": "53",
  "TB0.4/P4.4": "54",
  "TB0.5/P4.5": "55",
  "TB0.6/P4.6": "56",
  "TB0OUTH/SVMOUT/P4.7": "57",
  "P8.0/TB0CLK": "58",
  "P8.1/UCB1STE/UCA1CLK": "59",
  "P8.2/UCA1TXD/UCA1SIMO": "60",
  "P8.3/UCA1RXD/UCA1SOMI": "61",
  "P8.4/UCB1CLK/UCA1STE": "62",
  "DVSS2": "63",
  "DVCC2": "64",
  "P8.5/UCB1SIMO/UCB1SDA": "65",
  "P8.6/UCB1SOMI/UCB1SCL": "66",
  "P8.7": "67",
  "P9.0": "68",
  "P9.1": "69",
  "P9.2": "70",
  "P9.3": "71",
  "P9.4": "72",
  "P9.5": "73",
  "P9.6": "74",
  "P9.7": "75",
  "VSSU": "76",
  "PU.0": "77",
  "PU.1": "79",
  "LDOI": "80",
  "LDOO": "81",
  "AVSS3": "83",
  "P7.2/XT2IN": "84",
  "P7.3/XT2OUT": "85",
  "VBAK": "86",
  "VBAT": "87",
  "RTCCLK/P5.7": "88",
  "DVCC3": "89",
  "DVSS3": "90",
  "TEST/SBWTCK": "91",
  "PJ.0/TDO": "92",
  "PJ.1/TDI/TCLK": "93",
  "PJ.2/TMS": "94",
  "PJ.3/TCK": "95",
  "~{RST}/NMI/SBWTDIO": "96",
  "P6.0/CB0/A0": "97",
  "P6.1/CB1/A1": "98",
  "P6.2/CB2/A2": "99",
  "P6.3/CB3/A3": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.6/CB6/A6/DAC0": "bidirectional", "P6.7/CB7/A7/DAC1": "bidirectional", "P7.4/CB8/A12": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P7.6/CB10/A14/DAC0": "bidirectional", "P7.7/CB11/A15/DAC1": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "VREF-/VeREF-/P5.1": "bidirectional", AVCC1: "power_in", AVSS1: "power_in", XIN: "bidirectional", XOUT: "bidirectional", AVSS2: "power_in", "ADC12CLK/DMAE0/P5.6": "bidirectional", "P2MAP0/P2.0": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP3/P2.3": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "P2MAP7/P2.7": "bidirectional", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "P5.2": "bidirectional", DVSS: "power_in", "P5.3": "bidirectional", "P5.4": "bidirectional", "P5.5": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.0/P3.1": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.1/P3.6": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.0/P4.0": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.3/P4.3": "bidirectional", "TB0.4/P4.4": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.7": "bidirectional", "P9.0": "bidirectional", "P9.1": "bidirectional", "P9.2": "bidirectional", "P9.3": "bidirectional", "P9.4": "bidirectional", "P9.5": "bidirectional", "P9.6": "bidirectional", "P9.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "bidirectional", LDOO: "bidirectional", AVSS3: "power_in", "P7.2/XT2IN": "bidirectional", "P7.3/XT2OUT": "bidirectional", VBAK: "bidirectional", VBAT: "bidirectional", "RTCCLK/P5.7": "bidirectional", DVCC3: "power_in", DVSS3: "power_in", "TEST/SBWTCK": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "P6.0/CB0/A0": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.3/CB3/A3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5336IPZ";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 18kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5336IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5336.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5336IZQW extends Component.withPins({
  "P6.4/CB4/A4": "A1",
  "P6.2/CB2/A2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "LDOO": "A9",
  "LDOI": "A10",
  "PU.1": "A11",
  "PU.0": "A12",
  "P6.6/CB6/A6/DAC0": "B1",
  "P6.5/CB5/A5": "B2",
  "P6.1/CB1/A1": "B3",
  "P6.0/CB0/A0": "B4",
  "PJ.0/TDO": "B5",
  "TEST/SBWTCK": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8/A12": "C1",
  "P6.7/CB7/A7/DAC1": "C2",
  "P7.5/CB9/A13": "C3",
  "P9.6": "C11",
  "P9.5": "C12",
  "P7.7/CB11/A15/DAC0": "D1",
  "P7.6/CB10/A14/DAC0": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/CB3/A3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3": "D11",
  "P9.2": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "ADC12CLK/DMAE0/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "TA2CLK/SMCLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "TB0OUTH/SVMOUT/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "TA0CLK/ACLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "TA1CLK/CBOUT/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.2/CB2/A2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", LDOO: "bidirectional", LDOI: "bidirectional", "PU.1": "bidirectional", "PU.0": "bidirectional", "P6.6/CB6/A6/DAC0": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.0/CB0/A0": "bidirectional", "PJ.0/TDO": "bidirectional", "TEST/SBWTCK": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8/A12": "bidirectional", "P6.7/CB7/A7/DAC1": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P9.6": "bidirectional", "P9.5": "bidirectional", "P7.7/CB11/A15/DAC0": "bidirectional", "P7.6/CB10/A14/DAC0": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3": "bidirectional", "P9.2": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "ADC12CLK/DMAE0/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5336IZQW";
  override referencePrefix = "U";
}

/**
 * 256kB Flash, 18kB RAM, LQFP-100
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5338IPZ`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5338.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class MSP430F5338IPZ extends Component.withPins({
  "P6.4/CB4/A4": "1",
  "P6.5/CB5/A5": "2",
  "P6.6/CB6/A6/DAC0": "3",
  "P6.7/CB7/A7/DAC1": "4",
  "P7.4/CB8/A12": "5",
  "P7.5/CB9/A13": "6",
  "P7.6/CB10/A14/DAC0": "7",
  "P7.7/CB11/A15/DAC1": "8",
  "VREF+/VeREF+/P5.0": "9",
  "VREF-/VeREF-/P5.1": "10",
  "AVCC1": "11",
  "AVSS1": "12",
  "XIN": "13",
  "XOUT": "14",
  "AVSS2": "15",
  "ADC12CLK/DMAE0/P5.6": "16",
  "P2MAP0/P2.0": "17",
  "P2MAP1/P2.1": "18",
  "P2MAP2/P2.2": "19",
  "P2MAP3/P2.3": "20",
  "P2MAP4/P2.4": "21",
  "P2MAP5/P2.5": "22",
  "P2MAP6/P2.6": "23",
  "P2MAP7/P2.7": "24",
  "DVCC1": "25",
  "DVSS1": "26",
  "VCORE": "27",
  "P5.2": "28",
  "DVSS": "29",
  "P5.3": "31",
  "P5.4": "32",
  "P5.5": "33",
  "TA0CLK/ACLK/P1.0": "34",
  "TA0.0/P1.1": "35",
  "TA0.1/P1.2": "36",
  "TA0.2/P1.3": "37",
  "TA0.3/P1.4": "38",
  "TA0.4/P1.5": "39",
  "TA0.1/P1.6": "40",
  "TA0.2/P1.7": "41",
  "TA1CLK/CBOUT/P3.0": "42",
  "TA1.0/P3.1": "43",
  "TA1.1/P3.2": "44",
  "TA1.2/P3.3": "45",
  "TA2CLK/SMCLK/P3.4": "46",
  "TA2.0/P3.5": "47",
  "TA2.1/P3.6": "48",
  "TA2.2/P3.7": "49",
  "TB0.0/P4.0": "50",
  "TB0.1/P4.1": "51",
  "TB0.2/P4.2": "52",
  "TB0.3/P4.3": "53",
  "TB0.4/P4.4": "54",
  "TB0.5/P4.5": "55",
  "TB0.6/P4.6": "56",
  "TB0OUTH/SVMOUT/P4.7": "57",
  "P8.0/TB0CLK": "58",
  "P8.1/UCB1STE/UCA1CLK": "59",
  "P8.2/UCA1TXD/UCA1SIMO": "60",
  "P8.3/UCA1RXD/UCA1SOMI": "61",
  "P8.4/UCB1CLK/UCA1STE": "62",
  "DVSS2": "63",
  "DVCC2": "64",
  "P8.5/UCB1SIMO/UCB1SDA": "65",
  "P8.6/UCB1SOMI/UCB1SCL": "66",
  "P8.7": "67",
  "P9.0": "68",
  "P9.1": "69",
  "P9.2": "70",
  "P9.3": "71",
  "P9.4": "72",
  "P9.5": "73",
  "P9.6": "74",
  "P9.7": "75",
  "VSSU": "76",
  "PU.0": "77",
  "PU.1": "79",
  "LDOI": "80",
  "LDOO": "81",
  "AVSS3": "83",
  "P7.2/XT2IN": "84",
  "P7.3/XT2OUT": "85",
  "VBAK": "86",
  "VBAT": "87",
  "RTCCLK/P5.7": "88",
  "DVCC3": "89",
  "DVSS3": "90",
  "TEST/SBWTCK": "91",
  "PJ.0/TDO": "92",
  "PJ.1/TDI/TCLK": "93",
  "PJ.2/TMS": "94",
  "PJ.3/TCK": "95",
  "~{RST}/NMI/SBWTDIO": "96",
  "P6.0/CB0/A0": "97",
  "P6.1/CB1/A1": "98",
  "P6.2/CB2/A2": "99",
  "P6.3/CB3/A3": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.6/CB6/A6/DAC0": "bidirectional", "P6.7/CB7/A7/DAC1": "bidirectional", "P7.4/CB8/A12": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P7.6/CB10/A14/DAC0": "bidirectional", "P7.7/CB11/A15/DAC1": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "VREF-/VeREF-/P5.1": "bidirectional", AVCC1: "power_in", AVSS1: "power_in", XIN: "bidirectional", XOUT: "bidirectional", AVSS2: "power_in", "ADC12CLK/DMAE0/P5.6": "bidirectional", "P2MAP0/P2.0": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP3/P2.3": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "P2MAP7/P2.7": "bidirectional", DVCC1: "power_in", DVSS1: "power_in", VCORE: "bidirectional", "P5.2": "bidirectional", DVSS: "power_in", "P5.3": "bidirectional", "P5.4": "bidirectional", "P5.5": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.0/P3.1": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.1/P3.6": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.0/P4.0": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.3/P4.3": "bidirectional", "TB0.4/P4.4": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.7": "bidirectional", "P9.0": "bidirectional", "P9.1": "bidirectional", "P9.2": "bidirectional", "P9.3": "bidirectional", "P9.4": "bidirectional", "P9.5": "bidirectional", "P9.6": "bidirectional", "P9.7": "bidirectional", VSSU: "power_in", "PU.0": "bidirectional", "PU.1": "bidirectional", LDOI: "bidirectional", LDOO: "bidirectional", AVSS3: "power_in", "P7.2/XT2IN": "bidirectional", "P7.3/XT2OUT": "bidirectional", VBAK: "bidirectional", VBAT: "bidirectional", "RTCCLK/P5.7": "bidirectional", DVCC3: "power_in", DVSS3: "power_in", "TEST/SBWTCK": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "P6.0/CB0/A0": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.3/CB3/A3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5338IPZ";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 18kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5338IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5338.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5338IZQW extends Component.withPins({
  "P6.4/CB4/A4": "A1",
  "P6.2/CB2/A2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "LDOO": "A9",
  "LDOI": "A10",
  "PU.1": "A11",
  "PU.0": "A12",
  "P6.6/CB6/A6/DAC0": "B1",
  "P6.5/CB5/A5": "B2",
  "P6.1/CB1/A1": "B3",
  "P6.0/CB0/A0": "B4",
  "PJ.0/TDO": "B5",
  "TEST/SBWTCK": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8/A12": "C1",
  "P6.7/CB7/A7/DAC1": "C2",
  "P7.5/CB9/A13": "C3",
  "P9.6": "C11",
  "P9.5": "C12",
  "P7.7/CB11/A15/DAC0": "D1",
  "P7.6/CB10/A14/DAC0": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/CB3/A3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3": "D11",
  "P9.2": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "ADC12CLK/DMAE0/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "TA2CLK/SMCLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "TB0OUTH/SVMOUT/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "TA0CLK/ACLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "TA1CLK/CBOUT/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.2/CB2/A2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", LDOO: "bidirectional", LDOI: "bidirectional", "PU.1": "bidirectional", "PU.0": "bidirectional", "P6.6/CB6/A6/DAC0": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.0/CB0/A0": "bidirectional", "PJ.0/TDO": "bidirectional", "TEST/SBWTCK": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8/A12": "bidirectional", "P6.7/CB7/A7/DAC1": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P9.6": "bidirectional", "P9.5": "bidirectional", "P7.7/CB11/A15/DAC0": "bidirectional", "P7.6/CB10/A14/DAC0": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3": "bidirectional", "P9.2": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "ADC12CLK/DMAE0/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5338IZQW";
  override referencePrefix = "U";
}

/**
 * 64kB Flash, 6kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5340IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5340.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5340IRGZ extends Component.withPins({
  "P6.3/A3/CB3": "1",
  "P6.4/A4/CB4": "2",
  "P6.5/A5/CB5": "3",
  "P5.0/A8/VREF+/VeREF+": "4",
  "P5.1/A9/VREF-/VeREF-": "5",
  "AVCC1": "6",
  "P5.4/XIN": "7",
  "P5.5/XOUT": "8",
  "AVSS1": "9",
  "DVCC1": "10",
  "DVSS1": "11",
  "VCORE": "12",
  "TA0CLK/ACLK/P1.0": "13",
  "TA0.0/P1.1": "14",
  "TA0.1/P1.2": "15",
  "TA0.2/P1.3": "16",
  "TA0.3/P1.4": "17",
  "TA0.4/P1.5": "18",
  "TA1CLK/CBOUT/P1.6": "19",
  "TA1.0/P1.7": "20",
  "UCB0STE/UCA0CLK/P2.7": "21",
  "UCB0SIMO/UCB0SDA/P3.0": "22",
  "UCB0SOMI/UCB0SCL/P3.1": "23",
  "UCB0CLK/UCA0STE/P3.2": "24",
  "UCA0TXD/UCA0SIMO/P3.3": "25",
  "UCA0RXD/UCA0SOMI/P3.4": "26",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "27",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "28",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "29",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "30",
  "DVSS2": "31",
  "DVCC2": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "PM_NONE/P4.6": "35",
  "PM_NONE/P4.7": "36",
  "P5.7/TB0.1": "37",
  "DVSS3": "38",
  "P5.2/XT2IN": "39",
  "P5.3/XT2OUT": "40",
  "SBWTCK/TEST": "41",
  "PJ.0/TDO": "42",
  "PJ.1/TDI/TCLK": "43",
  "PJ.2/TMS": "44",
  "PJ.3/TCK": "45",
  "~{RST}/NMI/SBWTDIO": "46",
  "P6.1/A1/CB1": "47",
  "P6.2/A2/CB2": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.3/A3/CB3": "bidirectional", "P6.4/A4/CB4": "bidirectional", "P6.5/A5/CB5": "bidirectional", "P5.0/A8/VREF+/VeREF+": "bidirectional", "P5.1/A9/VREF-/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_NONE/P4.7": "bidirectional", "P5.7/TB0.1": "bidirectional", DVSS3: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "P6.1/A1/CB1": "bidirectional", "P6.2/A2/CB2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5340IRGZ";
  override referencePrefix = "U";
}

/**
 * 96kB Flash, 8kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5341IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5341.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5341IRGZ extends Component.withPins({
  "P6.3/A3/CB3": "1",
  "P6.4/A4/CB4": "2",
  "P6.5/A5/CB5": "3",
  "P5.0/A8/VREF+/VeREF+": "4",
  "P5.1/A9/VREF-/VeREF-": "5",
  "AVCC1": "6",
  "P5.4/XIN": "7",
  "P5.5/XOUT": "8",
  "AVSS1": "9",
  "DVCC1": "10",
  "DVSS1": "11",
  "VCORE": "12",
  "TA0CLK/ACLK/P1.0": "13",
  "TA0.0/P1.1": "14",
  "TA0.1/P1.2": "15",
  "TA0.2/P1.3": "16",
  "TA0.3/P1.4": "17",
  "TA0.4/P1.5": "18",
  "TA1CLK/CBOUT/P1.6": "19",
  "TA1.0/P1.7": "20",
  "UCB0STE/UCA0CLK/P2.7": "21",
  "UCB0SIMO/UCB0SDA/P3.0": "22",
  "UCB0SOMI/UCB0SCL/P3.1": "23",
  "UCB0CLK/UCA0STE/P3.2": "24",
  "UCA0TXD/UCA0SIMO/P3.3": "25",
  "UCA0RXD/UCA0SOMI/P3.4": "26",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "27",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "28",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "29",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "30",
  "DVSS2": "31",
  "DVCC2": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "PM_NONE/P4.6": "35",
  "PM_NONE/P4.7": "36",
  "P5.7/TB0.1": "37",
  "DVSS3": "38",
  "P5.2/XT2IN": "39",
  "P5.3/XT2OUT": "40",
  "SBWTCK/TEST": "41",
  "PJ.0/TDO": "42",
  "PJ.1/TDI/TCLK": "43",
  "PJ.2/TMS": "44",
  "PJ.3/TCK": "45",
  "~{RST}/NMI/SBWTDIO": "46",
  "P6.1/A1/CB1": "47",
  "P6.2/A2/CB2": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.3/A3/CB3": "bidirectional", "P6.4/A4/CB4": "bidirectional", "P6.5/A5/CB5": "bidirectional", "P5.0/A8/VREF+/VeREF+": "bidirectional", "P5.1/A9/VREF-/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_NONE/P4.7": "bidirectional", "P5.7/TB0.1": "bidirectional", DVSS3: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "P6.1/A1/CB1": "bidirectional", "P6.2/A2/CB2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5341IRGZ";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 10kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5342IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5342.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5342IRGZ extends Component.withPins({
  "P6.3/A3/CB3": "1",
  "P6.4/A4/CB4": "2",
  "P6.5/A5/CB5": "3",
  "P5.0/A8/VREF+/VeREF+": "4",
  "P5.1/A9/VREF-/VeREF-": "5",
  "AVCC1": "6",
  "P5.4/XIN": "7",
  "P5.5/XOUT": "8",
  "AVSS1": "9",
  "DVCC1": "10",
  "DVSS1": "11",
  "VCORE": "12",
  "TA0CLK/ACLK/P1.0": "13",
  "TA0.0/P1.1": "14",
  "TA0.1/P1.2": "15",
  "TA0.2/P1.3": "16",
  "TA0.3/P1.4": "17",
  "TA0.4/P1.5": "18",
  "TA1CLK/CBOUT/P1.6": "19",
  "TA1.0/P1.7": "20",
  "UCB0STE/UCA0CLK/P2.7": "21",
  "UCB0SIMO/UCB0SDA/P3.0": "22",
  "UCB0SOMI/UCB0SCL/P3.1": "23",
  "UCB0CLK/UCA0STE/P3.2": "24",
  "UCA0TXD/UCA0SIMO/P3.3": "25",
  "UCA0RXD/UCA0SOMI/P3.4": "26",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "27",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "28",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "29",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "30",
  "DVSS2": "31",
  "DVCC2": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "PM_NONE/P4.6": "35",
  "PM_NONE/P4.7": "36",
  "P5.7/TB0.1": "37",
  "DVSS3": "38",
  "P5.2/XT2IN": "39",
  "P5.3/XT2OUT": "40",
  "SBWTCK/TEST": "41",
  "PJ.0/TDO": "42",
  "PJ.1/TDI/TCLK": "43",
  "PJ.2/TMS": "44",
  "PJ.3/TCK": "45",
  "~{RST}/NMI/SBWTDIO": "46",
  "P6.1/A1/CB1": "47",
  "P6.2/A2/CB2": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.3/A3/CB3": "bidirectional", "P6.4/A4/CB4": "bidirectional", "P6.5/A5/CB5": "bidirectional", "P5.0/A8/VREF+/VeREF+": "bidirectional", "P5.1/A9/VREF-/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_NONE/P4.6": "bidirectional", "PM_NONE/P4.7": "bidirectional", "P5.7/TB0.1": "bidirectional", DVSS3: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "P6.1/A1/CB1": "bidirectional", "P6.2/A2/CB2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5342IRGZ";
  override referencePrefix = "U";
}

/**
 * 384kB Flash, 34kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5358IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5358.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5358IZQW extends Component.withPins({
  "P6.4/CB4/A4": "A1",
  "P6.2/CB2/A2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "LDOO": "A9",
  "LDOI": "A10",
  "PU.1": "A11",
  "PU.0": "A12",
  "P6.6/CB6/A6/DAC0": "B1",
  "P6.5/CB5/A5": "B2",
  "P6.1/CB1/A1": "B3",
  "P6.0/CB0/A0": "B4",
  "PJ.0/TDO": "B5",
  "TEST/SBWTCK": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8/A12": "C1",
  "P6.7/CB7/A7/DAC1": "C2",
  "P7.5/CB9/A13": "C3",
  "P9.6/UCB2SOMI/UCB2SCL": "C11",
  "P9.5/UCB2SIMO/UCB2SDA": "C12",
  "P7.7/CB11/A15/DAC1": "D1",
  "P7.6/CB10/A14/DAC0": "D2",
  "P5.0/VREF+/VeREF+": "D4",
  "P6.3/CB3/A3": "D5",
  "PJ.3/TCK": "D6",
  "P5.7/RTCCLK": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3/UCA2RXD/UCA2SOMI": "D11",
  "P9.2/UCA2TXD/UCA2SIMO": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "P5.1/VREF-/VeREF-": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4/UCB2CLK/UCA2STE": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1/UCB2STE/UCA2CLK": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2.0/P2MAP0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "P5.6/ADC12CLK/DMAE0": "H1",
  "P2.1/P2MAP1": "H2",
  "P2.3/P2MAP3": "H4",
  "GND_H5": "H5",
  "P1.3/TA0.2": "H6",
  "P3.1/TA1.0": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2.2/P2MAP2": "J1",
  "P2.4/P2MAP4": "J2",
  "P5.5": "J5",
  "P1.2/TA0.1": "J6",
  "P1.6/TA0.1": "J7",
  "P3.4/TA2CLK/SMCLK": "J8",
  "P4.0/TB0.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2.5/P2MAP5": "K1",
  "P2.6/P2MAP6": "K2",
  "P4.6/TB0.6": "K11",
  "P4.7/TB0OUTH/SVMOUT": "K12",
  "DVCC1": "L1",
  "P2.7/P2MAP7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "P1.0/TA0CLK/ACLK": "L5",
  "P1.5/TA0.4": "L6",
  "P3.0/TA1CLK/CBOUT": "L7",
  "P3.3/TA1.2": "L8",
  "P3.6/TA2.1": "L9",
  "P4.2/TB0.2": "L10",
  "P4.5/TB0.5": "L11",
  "P4.4/TB0.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "P1.1/TA0.0": "M5",
  "P1.4/TA0.3": "M6",
  "P1.7/TA0.2": "M7",
  "P3.2/TA1.1": "M8",
  "P3.5/TA2.0": "M9",
  "P3.7/TA2.2": "M10",
  "P4.1/TB0.1": "M11",
  "P4.3/TB0.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.2/CB2/A2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", LDOO: "bidirectional", LDOI: "bidirectional", "PU.1": "bidirectional", "PU.0": "bidirectional", "P6.6/CB6/A6/DAC0": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.0/CB0/A0": "bidirectional", "PJ.0/TDO": "bidirectional", "TEST/SBWTCK": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8/A12": "bidirectional", "P6.7/CB7/A7/DAC1": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P9.6/UCB2SOMI/UCB2SCL": "bidirectional", "P9.5/UCB2SIMO/UCB2SDA": "bidirectional", "P7.7/CB11/A15/DAC1": "bidirectional", "P7.6/CB10/A14/DAC0": "bidirectional", "P5.0/VREF+/VeREF+": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.3/TCK": "bidirectional", "P5.7/RTCCLK": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3/UCA2RXD/UCA2SOMI": "bidirectional", "P9.2/UCA2TXD/UCA2SIMO": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "P5.1/VREF-/VeREF-": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4/UCB2CLK/UCA2STE": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1/UCB2STE/UCA2CLK": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2.0/P2MAP0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "P5.6/ADC12CLK/DMAE0": "bidirectional", "P2.1/P2MAP1": "bidirectional", "P2.3/P2MAP3": "bidirectional", GND_H5: "power_in", "P1.3/TA0.2": "bidirectional", "P3.1/TA1.0": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2.2/P2MAP2": "bidirectional", "P2.4/P2MAP4": "bidirectional", "P5.5": "bidirectional", "P1.2/TA0.1": "bidirectional", "P1.6/TA0.1": "bidirectional", "P3.4/TA2CLK/SMCLK": "bidirectional", "P4.0/TB0.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2.5/P2MAP5": "bidirectional", "P2.6/P2MAP6": "bidirectional", "P4.6/TB0.6": "bidirectional", "P4.7/TB0OUTH/SVMOUT": "bidirectional", DVCC1: "power_in", "P2.7/P2MAP7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "P1.0/TA0CLK/ACLK": "bidirectional", "P1.5/TA0.4": "bidirectional", "P3.0/TA1CLK/CBOUT": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.6/TA2.1": "bidirectional", "P4.2/TB0.2": "bidirectional", "P4.5/TB0.5": "bidirectional", "P4.4/TB0.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "P1.1/TA0.0": "bidirectional", "P1.4/TA0.3": "bidirectional", "P1.7/TA0.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.5/TA2.0": "bidirectional", "P3.7/TA2.2": "bidirectional", "P4.1/TB0.1": "bidirectional", "P4.3/TB0.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5358IZQW";
  override referencePrefix = "U";
}

/**
 * 512kB Flash, 66kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5359IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5359.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5359IZQW extends Component.withPins({
  "P6.4/CB4/A4": "A1",
  "P6.2/CB2/A2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "LDOO": "A9",
  "LDOI": "A10",
  "PU.1": "A11",
  "PU.0": "A12",
  "P6.6/CB6/A6/DAC0": "B1",
  "P6.5/CB5/A5": "B2",
  "P6.1/CB1/A1": "B3",
  "P6.0/CB0/A0": "B4",
  "PJ.0/TDO": "B5",
  "TEST/SBWTCK": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8/A12": "C1",
  "P6.7/CB7/A7/DAC1": "C2",
  "P7.5/CB9/A13": "C3",
  "P9.6/UCB2SOMI/UCB2SCL": "C11",
  "P9.5/UCB2SIMO/UCB2SDA": "C12",
  "P7.7/CB11/A15/DAC1": "D1",
  "P7.6/CB10/A14/DAC0": "D2",
  "P5.0/VREF+/VeREF+": "D4",
  "P6.3/CB3/A3": "D5",
  "PJ.3/TCK": "D6",
  "P5.7/RTCCLK": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3/UCA2RXD/UCA2SOMI": "D11",
  "P9.2/UCA2TXD/UCA2SIMO": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "P5.1/VREF-/VeREF-": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4/UCB2CLK/UCA2STE": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1/UCB2STE/UCA2CLK": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2.0/P2MAP0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "P5.6/ADC12CLK/DMAE0": "H1",
  "P2.1/P2MAP1": "H2",
  "P2.3/P2MAP3": "H4",
  "GND_H5": "H5",
  "P1.3/TA0.2": "H6",
  "P3.1/TA1.0": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2.2/P2MAP2": "J1",
  "P2.4/P2MAP4": "J2",
  "P5.5": "J5",
  "P1.2/TA0.1": "J6",
  "P1.6/TA0.1": "J7",
  "P3.4/TA2CLK/SMCLK": "J8",
  "P4.0/TB0.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2.5/P2MAP5": "K1",
  "P2.6/P2MAP6": "K2",
  "P4.6/TB0.6": "K11",
  "P4.7/TB0OUTH/SVMOUT": "K12",
  "DVCC1": "L1",
  "P2.7/P2MAP7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "P1.0/TA0CLK/ACLK": "L5",
  "P1.5/TA0.4": "L6",
  "P3.0/TA1CLK/CBOUT": "L7",
  "P3.3/TA1.2": "L8",
  "P3.6/TA2.1": "L9",
  "P4.2/TB0.2": "L10",
  "P4.5/TB0.5": "L11",
  "P4.4/TB0.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "P1.1/TA0.0": "M5",
  "P1.4/TA0.3": "M6",
  "P1.7/TA0.2": "M7",
  "P3.2/TA1.1": "M8",
  "P3.5/TA2.0": "M9",
  "P3.7/TA2.2": "M10",
  "P4.1/TB0.1": "M11",
  "P4.3/TB0.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.2/CB2/A2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", LDOO: "bidirectional", LDOI: "bidirectional", "PU.1": "bidirectional", "PU.0": "bidirectional", "P6.6/CB6/A6/DAC0": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.0/CB0/A0": "bidirectional", "PJ.0/TDO": "bidirectional", "TEST/SBWTCK": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8/A12": "bidirectional", "P6.7/CB7/A7/DAC1": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P9.6/UCB2SOMI/UCB2SCL": "bidirectional", "P9.5/UCB2SIMO/UCB2SDA": "bidirectional", "P7.7/CB11/A15/DAC1": "bidirectional", "P7.6/CB10/A14/DAC0": "bidirectional", "P5.0/VREF+/VeREF+": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.3/TCK": "bidirectional", "P5.7/RTCCLK": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3/UCA2RXD/UCA2SOMI": "bidirectional", "P9.2/UCA2TXD/UCA2SIMO": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "P5.1/VREF-/VeREF-": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4/UCB2CLK/UCA2STE": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1/UCB2STE/UCA2CLK": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2.0/P2MAP0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "P5.6/ADC12CLK/DMAE0": "bidirectional", "P2.1/P2MAP1": "bidirectional", "P2.3/P2MAP3": "bidirectional", GND_H5: "power_in", "P1.3/TA0.2": "bidirectional", "P3.1/TA1.0": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2.2/P2MAP2": "bidirectional", "P2.4/P2MAP4": "bidirectional", "P5.5": "bidirectional", "P1.2/TA0.1": "bidirectional", "P1.6/TA0.1": "bidirectional", "P3.4/TA2CLK/SMCLK": "bidirectional", "P4.0/TB0.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2.5/P2MAP5": "bidirectional", "P2.6/P2MAP6": "bidirectional", "P4.6/TB0.6": "bidirectional", "P4.7/TB0OUTH/SVMOUT": "bidirectional", DVCC1: "power_in", "P2.7/P2MAP7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "P1.0/TA0CLK/ACLK": "bidirectional", "P1.5/TA0.4": "bidirectional", "P3.0/TA1CLK/CBOUT": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.6/TA2.1": "bidirectional", "P4.2/TB0.2": "bidirectional", "P4.5/TB0.5": "bidirectional", "P4.4/TB0.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "P1.1/TA0.0": "bidirectional", "P1.4/TA0.3": "bidirectional", "P1.7/TA0.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.5/TA2.0": "bidirectional", "P3.7/TA2.2": "bidirectional", "P4.1/TB0.1": "bidirectional", "P4.3/TB0.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5359IZQW";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 4kB + 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5500IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5500.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5500IRGZ extends Component.withPins({
  "P6.0/CB0": "1",
  "P6.1/CB1": "2",
  "P6.2/CB2": "3",
  "P6.3/CB3": "4",
  "P5.0/VeREF+": "5",
  "P5.1/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "TA0CLK/ACLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "TA1CLK/CBOUT/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "P4.7": "36",
  "VSSU": "37",
  "PU.0/DP": "38",
  "PUR": "39",
  "PU.1/DM": "40",
  "VBUS": "41",
  "VUSB": "42",
  "V18": "43",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0": "bidirectional", "P6.1/CB1": "bidirectional", "P6.2/CB2": "bidirectional", "P6.3/CB3": "bidirectional", "P5.0/VeREF+": "bidirectional", "P5.1/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", VSSU: "power_in", "PU.0/DP": "bidirectional", PUR: "bidirectional", "PU.1/DM": "bidirectional", VBUS: "power_in", VUSB: "power_out", V18: "passive", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5500IRGZ";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 4kB + 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5501IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5501.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5501IRGZ extends Component.withPins({
  "P6.0/CB0": "1",
  "P6.1/CB1": "2",
  "P6.2/CB2": "3",
  "P6.3/CB3": "4",
  "P5.0/VeREF+": "5",
  "P5.1/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "TA0CLK/ACLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "TA1CLK/CBOUT/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "P4.7": "36",
  "VSSU": "37",
  "PU.0/DP": "38",
  "PUR": "39",
  "PU.1/DM": "40",
  "VBUS": "41",
  "VUSB": "42",
  "V18": "43",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0": "bidirectional", "P6.1/CB1": "bidirectional", "P6.2/CB2": "bidirectional", "P6.3/CB3": "bidirectional", "P5.0/VeREF+": "bidirectional", "P5.1/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", VSSU: "power_in", "PU.0/DP": "bidirectional", PUR: "bidirectional", "PU.1/DM": "bidirectional", VBUS: "power_in", VUSB: "power_out", V18: "passive", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5501IRGZ";
  override referencePrefix = "U";
}

/**
 * 24kB Flash, 4kB + 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5502IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5502.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5502IRGZ extends Component.withPins({
  "P6.0/CB0": "1",
  "P6.1/CB1": "2",
  "P6.2/CB2": "3",
  "P6.3/CB3": "4",
  "P5.0/VeREF+": "5",
  "P5.1/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "TA0CLK/ACLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "TA1CLK/CBOUT/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "P4.7": "36",
  "VSSU": "37",
  "PU.0/DP": "38",
  "PUR": "39",
  "PU.1/DM": "40",
  "VBUS": "41",
  "VUSB": "42",
  "V18": "43",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0": "bidirectional", "P6.1/CB1": "bidirectional", "P6.2/CB2": "bidirectional", "P6.3/CB3": "bidirectional", "P5.0/VeREF+": "bidirectional", "P5.1/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", VSSU: "power_in", "PU.0/DP": "bidirectional", PUR: "bidirectional", "PU.1/DM": "bidirectional", VBUS: "power_in", VUSB: "power_out", V18: "passive", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5502IRGZ";
  override referencePrefix = "U";
}

/**
 * 32kB Flash, 4kB + 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5503IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5503.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5503IRGZ extends Component.withPins({
  "P6.0/CB0": "1",
  "P6.1/CB1": "2",
  "P6.2/CB2": "3",
  "P6.3/CB3": "4",
  "P5.0/VeREF+": "5",
  "P5.1/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "TA0CLK/ACLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "TA1CLK/CBOUT/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "P4.7": "36",
  "VSSU": "37",
  "PU.0/DP": "38",
  "PUR": "39",
  "PU.1/DM": "40",
  "VBUS": "41",
  "VUSB": "42",
  "V18": "43",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0": "bidirectional", "P6.1/CB1": "bidirectional", "P6.2/CB2": "bidirectional", "P6.3/CB3": "bidirectional", "P5.0/VeREF+": "bidirectional", "P5.1/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", VSSU: "power_in", "PU.0/DP": "bidirectional", PUR: "bidirectional", "PU.1/DM": "bidirectional", VBUS: "power_in", VUSB: "power_out", V18: "passive", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5503IRGZ";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 4kB + 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5504IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5504.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5504IRGZ extends Component.withPins({
  "P6.0/A0": "1",
  "P6.1/A1": "2",
  "P6.2/A2": "3",
  "P6.3/A3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "TA0CLK/ACLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "TA1CLK/CBOUT/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "P4.7": "36",
  "VSSU": "37",
  "PU.0/DP": "38",
  "PUR": "39",
  "PU.1/DM": "40",
  "VBUS": "41",
  "VUSB": "42",
  "V18": "43",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/A0": "bidirectional", "P6.1/A1": "bidirectional", "P6.2/A2": "bidirectional", "P6.3/A3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", VSSU: "power_in", "PU.0/DP": "bidirectional", PUR: "bidirectional", "PU.1/DM": "bidirectional", VBUS: "power_in", VUSB: "power_out", V18: "passive", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5504IRGZ";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 4kB + 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5505IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5505.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5505IRGZ extends Component.withPins({
  "P6.0/A0": "1",
  "P6.1/A1": "2",
  "P6.2/A2": "3",
  "P6.3/A3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "TA0CLK/ACLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "TA1CLK/CBOUT/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "P4.7": "36",
  "VSSU": "37",
  "PU.0/DP": "38",
  "PUR": "39",
  "PU.1/DM": "40",
  "VBUS": "41",
  "VUSB": "42",
  "V18": "43",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/A0": "bidirectional", "P6.1/A1": "bidirectional", "P6.2/A2": "bidirectional", "P6.3/A3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", VSSU: "power_in", "PU.0/DP": "bidirectional", PUR: "bidirectional", "PU.1/DM": "bidirectional", VBUS: "power_in", VUSB: "power_out", V18: "passive", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5505IRGZ";
  override referencePrefix = "U";
}

/**
 * 24kB Flash, 4kB + 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5506IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5506.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5506IRGZ extends Component.withPins({
  "P6.0/A0": "1",
  "P6.1/A1": "2",
  "P6.2/A2": "3",
  "P6.3/A3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "TA0CLK/ACLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "TA1CLK/CBOUT/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "P4.7": "36",
  "VSSU": "37",
  "PU.0/DP": "38",
  "PUR": "39",
  "PU.1/DM": "40",
  "VBUS": "41",
  "VUSB": "42",
  "V18": "43",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/A0": "bidirectional", "P6.1/A1": "bidirectional", "P6.2/A2": "bidirectional", "P6.3/A3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", VSSU: "power_in", "PU.0/DP": "bidirectional", PUR: "bidirectional", "PU.1/DM": "bidirectional", VBUS: "power_in", VUSB: "power_out", V18: "passive", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5506IRGZ";
  override referencePrefix = "U";
}

/**
 * 32kB Flash, 4kB + 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5507IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5507.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5507IRGZ extends Component.withPins({
  "P6.0/A0": "1",
  "P6.1/A1": "2",
  "P6.2/A2": "3",
  "P6.3/A3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "TA0CLK/ACLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "TA1CLK/CBOUT/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "P4.7": "36",
  "VSSU": "37",
  "PU.0/DP": "38",
  "PUR": "39",
  "PU.1/DM": "40",
  "VBUS": "41",
  "VUSB": "42",
  "V18": "43",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/A0": "bidirectional", "P6.1/A1": "bidirectional", "P6.2/A2": "bidirectional", "P6.3/A3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", VSSU: "power_in", "PU.0/DP": "bidirectional", PUR: "bidirectional", "PU.1/DM": "bidirectional", VBUS: "power_in", VUSB: "power_out", V18: "passive", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5507IRGZ";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 4kB + 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5508IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5508.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5508IRGZ extends Component.withPins({
  "P6.0/CB0/A0": "1",
  "P6.1/CB1/A1": "2",
  "P6.2/CB2/A2": "3",
  "P6.3/CB3/A3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "TA0CLK/ACLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "TA1CLK/CBOUT/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "P4.7": "36",
  "VSSU": "37",
  "PU.0/DP": "38",
  "PUR": "39",
  "PU.1/DM": "40",
  "VBUS": "41",
  "VUSB": "42",
  "V18": "43",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0/A0": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", VSSU: "power_in", "PU.0/DP": "bidirectional", PUR: "bidirectional", "PU.1/DM": "bidirectional", VBUS: "power_in", VUSB: "power_out", V18: "passive", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5508IRGZ";
  override referencePrefix = "U";
}

/**
 * 24kB Flash, 4kB + 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5509IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5509.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5509IRGZ extends Component.withPins({
  "P6.0/CB0/A0": "1",
  "P6.1/CB1/A1": "2",
  "P6.2/CB2/A2": "3",
  "P6.3/CB3/A3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "TA0CLK/ACLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "TA1CLK/CBOUT/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "P4.7": "36",
  "VSSU": "37",
  "PU.0/DP": "38",
  "PUR": "39",
  "PU.1/DM": "40",
  "VBUS": "41",
  "VUSB": "42",
  "V18": "43",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0/A0": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", VSSU: "power_in", "PU.0/DP": "bidirectional", PUR: "bidirectional", "PU.1/DM": "bidirectional", VBUS: "power_in", VUSB: "power_out", V18: "passive", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5509IRGZ";
  override referencePrefix = "U";
}

/**
 * 32kB Flash, 4kB + 2kB RAM, QFN-48
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5510IRGZ`. Reference prefix: `U`.
 * Footprint filters: Texas*RGZ0048A*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5510.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGZ0048A_VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class MSP430F5510IRGZ extends Component.withPins({
  "P6.0/CB0/A0": "1",
  "P6.1/CB1/A1": "2",
  "P6.2/CB2/A2": "3",
  "P6.3/CB3/A3": "4",
  "P5.0/A8/VeREF+": "5",
  "P5.1/A9/VeREF-": "6",
  "AVCC1": "7",
  "P5.4/XIN": "8",
  "P5.5/XOUT": "9",
  "AVSS1": "10",
  "DVCC1": "11",
  "DVSS1": "12",
  "VCORE": "13",
  "TA0CLK/ACLK/P1.0": "14",
  "TA0.0/P1.1": "15",
  "TA0.1/P1.2": "16",
  "TA0.2/P1.3": "17",
  "TA0.3/P1.4": "18",
  "TA0.4/P1.5": "19",
  "TA1CLK/CBOUT/P1.6": "20",
  "TA1.0/P1.7": "21",
  "TA1.1/P2.0": "22",
  "PJ.0/TDO": "23",
  "PJ.1/TDI/TCLK": "24",
  "PJ.2/TMS": "25",
  "PJ.3/TCK": "26",
  "DVSS2": "27",
  "DVCC2": "28",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "29",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "30",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "31",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "32",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "33",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "34",
  "P4.6": "35",
  "P4.7": "36",
  "VSSU": "37",
  "PU.0/DP": "38",
  "PUR": "39",
  "PU.1/DM": "40",
  "VBUS": "41",
  "VUSB": "42",
  "V18": "43",
  "AVSS2": "44",
  "P5.2/XT2IN": "45",
  "P5.3/XT2OUT": "46",
  "SBWTCK/TEST": "47",
  "~{RST}/NMI/SBWTDIO": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.0/CB0/A0": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.2/CB2/A2": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P5.0/A8/VeREF+": "bidirectional", "P5.1/A9/VeREF-": "bidirectional", AVCC1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", AVSS1: "power_in", DVCC1: "power_in", DVSS1: "power_in", VCORE: "passive", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", DVSS2: "power_in", DVCC2: "power_in", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "P4.6": "bidirectional", "P4.7": "bidirectional", VSSU: "power_in", "PU.0/DP": "bidirectional", PUR: "bidirectional", "PU.1/DM": "bidirectional", VBUS: "power_in", VUSB: "power_out", V18: "passive", AVSS2: "power_in", "P5.2/XT2IN": "bidirectional", "P5.3/XT2OUT": "bidirectional", "SBWTCK/TEST": "input", "~{RST}/NMI/SBWTDIO": "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5510IRGZ";
  override referencePrefix = "U";
}

/**
 * 64kB Flash, 4kB + 2kB RAM, BGA-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5524IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.415x3.535mm*Layout8x8*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5524.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-64_3.415x3.535mm_Layout8x8_P0.4mm.
 */
export class MSP430F5524IYFF extends Component.withPins({
  "P6.2/CB2/A2": "A1",
  "P6.6/CB6/A6": "A2",
  "AVCC1": "A3",
  "AVSS1": "A4",
  "P5.4/XIN": "A5",
  "P5.5/XOUT": "A6",
  "DVCC1": "A7",
  "DVSS1": "A8",
  "P6.0/CB0/A0": "B1",
  "P6.4/CB4/A4": "B2",
  "P6.5/CB5/A5": "B3",
  "P5.0/A8/VREF+/VeREF+": "B4",
  "P5.1/A9/VREF-/VeREF-": "B5",
  "TA0.0/P1.1": "B6",
  "TA0CLK/ACLK/P1.0": "B7",
  "VCORE": "B8",
  "PJ.2/TMS": "C1",
  "PJ.3/TCK": "C2",
  "P6.1/CB1/A1": "C3",
  "P6.3/CB3/A3": "C4",
  "P6.7/CB7/A7": "C5",
  "TA0.1/P1.2": "C6",
  "TA0.3/P1.4": "C7",
  "TA0.2/P1.3": "C8",
  "P5.3/XT2OUT": "D1",
  "AVSS2": "D2",
  "PJ.0/TDO": "D3",
  "PJ.1/TDI/TCLK": "D4",
  "~{RST}/NMI/SBWTDIO": "D5",
  "TA0.4/P1.5": "D6",
  "TA1CLK/CBOUT/P1.6": "D7",
  "TA1.0/P1.7": "D8",
  "P5.2/XT2IN": "E1",
  "V18": "E2",
  "SBWTCK/TEST": "E3",
  "P4.7": "E4",
  "TA1.1/P2.0": "E5",
  "TA2.0/P2.3": "E6",
  "TA2CLK/SMCLK/P2.2": "E7",
  "TA1.2/P2.1": "E8",
  "VUSB": "F1",
  "VBUS": "F2",
  "P4.6": "F3",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "F4",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "F5",
  "RTCCLK/DMAE0/P2.6": "F6",
  "TA2.2/P2.5": "F7",
  "TA2.1/P2.4": "F8",
  "PU.1/DM": "G1",
  "PUR": "G2",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "G3",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "G4",
  "UCA0RXD/UCA0SOMI/P3.4": "G5",
  "UCA0TXD/UCA0SIMO/P3.3": "G6",
  "UCB0CLK/UCA0STE/P3.2": "G7",
  "UCB0SIMO/UCB0SDA/P3.0": "G8",
  "PU.0/DP": "H1",
  "VSSU": "H2",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "H3",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "H4",
  "DVCC2": "H5",
  "DVSS2": "H6",
  "UCB0SOMI/UCB0SCL/P3.1": "H7",
  "UCB0STE/UCA0CLK/P2.7": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.2/CB2/A2": "bidirectional", "P6.6/CB6/A6": "bidirectional", AVCC1: "power_in", AVSS1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", DVCC1: "power_in", DVSS1: "power_in", "P6.0/CB0/A0": "bidirectional", "P6.4/CB4/A4": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P5.0/A8/VREF+/VeREF+": "bidirectional", "P5.1/A9/VREF-/VeREF-": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", VCORE: "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P6.7/CB7/A7": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.3": "bidirectional", "P5.3/XT2OUT": "bidirectional", AVSS2: "power_in", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "P5.2/XT2IN": "bidirectional", V18: "passive", "SBWTCK/TEST": "input", "P4.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "TA2.0/P2.3": "bidirectional", "TA2CLK/SMCLK/P2.2": "bidirectional", "TA1.2/P2.1": "bidirectional", VUSB: "power_out", VBUS: "power_in", "P4.6": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "TA2.2/P2.5": "bidirectional", "TA2.1/P2.4": "bidirectional", "PU.1/DM": "bidirectional", PUR: "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "PU.0/DP": "bidirectional", VSSU: "power_in", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", DVCC2: "power_in", DVSS2: "power_in", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5524IYFF";
  override referencePrefix = "U";
}

/**
 * 96kB Flash, 6kB + 2kB RAM, BGA-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5526IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.415x3.535mm*Layout8x8*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5526.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-64_3.415x3.535mm_Layout8x8_P0.4mm.
 */
export class MSP430F5526IYFF extends Component.withPins({
  "P6.2/CB2/A2": "A1",
  "P6.6/CB6/A6": "A2",
  "AVCC1": "A3",
  "AVSS1": "A4",
  "P5.4/XIN": "A5",
  "P5.5/XOUT": "A6",
  "DVCC1": "A7",
  "DVSS1": "A8",
  "P6.0/CB0/A0": "B1",
  "P6.4/CB4/A4": "B2",
  "P6.5/CB5/A5": "B3",
  "P5.0/A8/VREF+/VeREF+": "B4",
  "P5.1/A9/VREF-/VeREF-": "B5",
  "TA0.0/P1.1": "B6",
  "TA0CLK/ACLK/P1.0": "B7",
  "VCORE": "B8",
  "PJ.2/TMS": "C1",
  "PJ.3/TCK": "C2",
  "P6.1/CB1/A1": "C3",
  "P6.3/CB3/A3": "C4",
  "P6.7/CB7/A7": "C5",
  "TA0.1/P1.2": "C6",
  "TA0.3/P1.4": "C7",
  "TA0.2/P1.3": "C8",
  "P5.3/XT2OUT": "D1",
  "AVSS2": "D2",
  "PJ.0/TDO": "D3",
  "PJ.1/TDI/TCLK": "D4",
  "~{RST}/NMI/SBWTDIO": "D5",
  "TA0.4/P1.5": "D6",
  "TA1CLK/CBOUT/P1.6": "D7",
  "TA1.0/P1.7": "D8",
  "P5.2/XT2IN": "E1",
  "V18": "E2",
  "SBWTCK/TEST": "E3",
  "P4.7": "E4",
  "TA1.1/P2.0": "E5",
  "TA2.0/P2.3": "E6",
  "TA2CLK/SMCLK/P2.2": "E7",
  "TA1.2/P2.1": "E8",
  "VUSB": "F1",
  "VBUS": "F2",
  "P4.6": "F3",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "F4",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "F5",
  "RTCCLK/DMAE0/P2.6": "F6",
  "TA2.2/P2.5": "F7",
  "TA2.1/P2.4": "F8",
  "PU.1/DM": "G1",
  "PUR": "G2",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "G3",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "G4",
  "UCA0RXD/UCA0SOMI/P3.4": "G5",
  "UCA0TXD/UCA0SIMO/P3.3": "G6",
  "UCB0CLK/UCA0STE/P3.2": "G7",
  "UCB0SIMO/UCB0SDA/P3.0": "G8",
  "PU.0/DP": "H1",
  "VSSU": "H2",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "H3",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "H4",
  "DVCC2": "H5",
  "DVSS2": "H6",
  "UCB0SOMI/UCB0SCL/P3.1": "H7",
  "UCB0STE/UCA0CLK/P2.7": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.2/CB2/A2": "bidirectional", "P6.6/CB6/A6": "bidirectional", AVCC1: "power_in", AVSS1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", DVCC1: "power_in", DVSS1: "power_in", "P6.0/CB0/A0": "bidirectional", "P6.4/CB4/A4": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P5.0/A8/VREF+/VeREF+": "bidirectional", "P5.1/A9/VREF-/VeREF-": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", VCORE: "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P6.7/CB7/A7": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.3": "bidirectional", "P5.3/XT2OUT": "bidirectional", AVSS2: "power_in", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "P5.2/XT2IN": "bidirectional", V18: "passive", "SBWTCK/TEST": "input", "P4.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "TA2.0/P2.3": "bidirectional", "TA2CLK/SMCLK/P2.2": "bidirectional", "TA1.2/P2.1": "bidirectional", VUSB: "power_out", VBUS: "power_in", "P4.6": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "TA2.2/P2.5": "bidirectional", "TA2.1/P2.4": "bidirectional", "PU.1/DM": "bidirectional", PUR: "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "PU.0/DP": "bidirectional", VSSU: "power_in", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", DVCC2: "power_in", DVSS2: "power_in", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5526IYFF";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 8kB + 2kB RAM, BGA-64
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5528IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.415x3.535mm*Layout8x8*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5528.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-64_3.415x3.535mm_Layout8x8_P0.4mm.
 */
export class MSP430F5528IYFF extends Component.withPins({
  "P6.2/CB2/A2": "A1",
  "P6.6/CB6/A6": "A2",
  "AVCC1": "A3",
  "AVSS1": "A4",
  "P5.4/XIN": "A5",
  "P5.5/XOUT": "A6",
  "DVCC1": "A7",
  "DVSS1": "A8",
  "P6.0/CB0/A0": "B1",
  "P6.4/CB4/A4": "B2",
  "P6.5/CB5/A5": "B3",
  "P5.0/A8/VREF+/VeREF+": "B4",
  "P5.1/A9/VREF-/VeREF-": "B5",
  "TA0.0/P1.1": "B6",
  "TA0CLK/ACLK/P1.0": "B7",
  "VCORE": "B8",
  "PJ.2/TMS": "C1",
  "PJ.3/TCK": "C2",
  "P6.1/CB1/A1": "C3",
  "P6.3/CB3/A3": "C4",
  "P6.7/CB7/A7": "C5",
  "TA0.1/P1.2": "C6",
  "TA0.3/P1.4": "C7",
  "TA0.2/P1.3": "C8",
  "P5.3/XT2OUT": "D1",
  "AVSS2": "D2",
  "PJ.0/TDO": "D3",
  "PJ.1/TDI/TCLK": "D4",
  "~{RST}/NMI/SBWTDIO": "D5",
  "TA0.4/P1.5": "D6",
  "TA1CLK/CBOUT/P1.6": "D7",
  "TA1.0/P1.7": "D8",
  "P5.2/XT2IN": "E1",
  "V18": "E2",
  "SBWTCK/TEST": "E3",
  "P4.7": "E4",
  "TA1.1/P2.0": "E5",
  "TA2.0/P2.3": "E6",
  "TA2CLK/SMCLK/P2.2": "E7",
  "TA1.2/P2.1": "E8",
  "VUSB": "F1",
  "VBUS": "F2",
  "P4.6": "F3",
  "PM_UCB1CLK/PM_UCA1STE/P4.3": "F4",
  "PM_UCB1STE/PM_UCA1CLK/P4.0": "F5",
  "RTCCLK/DMAE0/P2.6": "F6",
  "TA2.2/P2.5": "F7",
  "TA2.1/P2.4": "F8",
  "PU.1/DM": "G1",
  "PUR": "G2",
  "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "G3",
  "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "G4",
  "UCA0RXD/UCA0SOMI/P3.4": "G5",
  "UCA0TXD/UCA0SIMO/P3.3": "G6",
  "UCB0CLK/UCA0STE/P3.2": "G7",
  "UCB0SIMO/UCB0SDA/P3.0": "G8",
  "PU.0/DP": "H1",
  "VSSU": "H2",
  "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "H3",
  "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "H4",
  "DVCC2": "H5",
  "DVSS2": "H6",
  "UCB0SOMI/UCB0SCL/P3.1": "H7",
  "UCB0STE/UCA0CLK/P2.7": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.2/CB2/A2": "bidirectional", "P6.6/CB6/A6": "bidirectional", AVCC1: "power_in", AVSS1: "power_in", "P5.4/XIN": "bidirectional", "P5.5/XOUT": "bidirectional", DVCC1: "power_in", DVSS1: "power_in", "P6.0/CB0/A0": "bidirectional", "P6.4/CB4/A4": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P5.0/A8/VREF+/VeREF+": "bidirectional", "P5.1/A9/VREF-/VeREF-": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", VCORE: "bidirectional", "PJ.2/TMS": "bidirectional", "PJ.3/TCK": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.3/CB3/A3": "bidirectional", "P6.7/CB7/A7": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.3": "bidirectional", "P5.3/XT2OUT": "bidirectional", AVSS2: "power_in", "PJ.0/TDO": "bidirectional", "PJ.1/TDI/TCLK": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P1.6": "bidirectional", "TA1.0/P1.7": "bidirectional", "P5.2/XT2IN": "bidirectional", V18: "passive", "SBWTCK/TEST": "input", "P4.7": "bidirectional", "TA1.1/P2.0": "bidirectional", "TA2.0/P2.3": "bidirectional", "TA2CLK/SMCLK/P2.2": "bidirectional", "TA1.2/P2.1": "bidirectional", VUSB: "power_out", VBUS: "power_in", "P4.6": "bidirectional", "PM_UCB1CLK/PM_UCA1STE/P4.3": "bidirectional", "PM_UCB1STE/PM_UCA1CLK/P4.0": "bidirectional", "RTCCLK/DMAE0/P2.6": "bidirectional", "TA2.2/P2.5": "bidirectional", "TA2.1/P2.4": "bidirectional", "PU.1/DM": "bidirectional", PUR: "bidirectional", "PM_UCA1RXD/PM_UCA1SOMI/P4.5": "bidirectional", "PM_UCB1SOMI/PM_UCB1SCL/P4.2": "bidirectional", "UCA0RXD/UCA0SOMI/P3.4": "bidirectional", "UCA0TXD/UCA0SIMO/P3.3": "bidirectional", "UCB0CLK/UCA0STE/P3.2": "bidirectional", "UCB0SIMO/UCB0SDA/P3.0": "bidirectional", "PU.0/DP": "bidirectional", VSSU: "power_in", "PM_UCA1TXD/PM_UCA1SIMO/P4.4": "bidirectional", "PM_UCB1SIMO/PM_UCB1SDA/P4.1": "bidirectional", DVCC2: "power_in", DVSS2: "power_in", "UCB0SOMI/UCB0SCL/P3.1": "bidirectional", "UCB0STE/UCA0CLK/P2.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5528IYFF";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 16kB + 2kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5630IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5630.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5630IZQW extends Component.withPins({
  "P6.4/CB4": "A1",
  "P6.2/CB2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "VUSB": "A9",
  "VBUS": "A10",
  "PU.1/DM": "A11",
  "PU.0/DP": "A12",
  "P6.6/CB6": "B1",
  "P6.5/CB5": "B2",
  "P6.1/CB1": "B3",
  "P6.0/CB0": "B4",
  "PJ.0/TDO": "B5",
  "SBWTCK/TEST": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "V18": "B9",
  "PUR": "B10",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8": "C1",
  "P6.7/CB7": "C2",
  "P7.5/CB9": "C3",
  "P9.6": "C11",
  "P9.5": "C12",
  "P7.7/CB11": "D1",
  "P7.6/CB10": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/CB3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3": "D11",
  "P9.2": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "DMAE0/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "TA2CLK/SMCLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "TB0OUTH/SVMOUT/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "TA0CLK/ACLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "TA1CLK/CBOUT/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4": "bidirectional", "P6.2/CB2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", VUSB: "bidirectional", VBUS: "bidirectional", "PU.1/DM": "bidirectional", "PU.0/DP": "bidirectional", "P6.6/CB6": "bidirectional", "P6.5/CB5": "bidirectional", "P6.1/CB1": "bidirectional", "P6.0/CB0": "bidirectional", "PJ.0/TDO": "bidirectional", "SBWTCK/TEST": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", V18: "passive", PUR: "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8": "bidirectional", "P6.7/CB7": "bidirectional", "P7.5/CB9": "bidirectional", "P9.6": "bidirectional", "P9.5": "bidirectional", "P7.7/CB11": "bidirectional", "P7.6/CB10": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/CB3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3": "bidirectional", "P9.2": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "DMAE0/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5630IZQW";
  override referencePrefix = "U";
}

/**
 * 192kB Flash, 16kB + 2kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5631IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5631.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5631IZQW extends Component.withPins({
  "P6.4/CB4": "A1",
  "P6.2/CB2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "VUSB": "A9",
  "VBUS": "A10",
  "PU.1/DM": "A11",
  "PU.0/DP": "A12",
  "P6.6/CB6": "B1",
  "P6.5/CB5": "B2",
  "P6.1/CB1": "B3",
  "P6.0/CB0": "B4",
  "PJ.0/TDO": "B5",
  "SBWTCK/TEST": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "V18": "B9",
  "PUR": "B10",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8": "C1",
  "P6.7/CB7": "C2",
  "P7.5/CB9": "C3",
  "P9.6": "C11",
  "P9.5": "C12",
  "P7.7/CB11": "D1",
  "P7.6/CB10": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/CB3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3": "D11",
  "P9.2": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "DMAE0/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "TA2CLK/SMCLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "TB0OUTH/SVMOUT/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "TA0CLK/ACLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "TA1CLK/CBOUT/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4": "bidirectional", "P6.2/CB2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", VUSB: "bidirectional", VBUS: "bidirectional", "PU.1/DM": "bidirectional", "PU.0/DP": "bidirectional", "P6.6/CB6": "bidirectional", "P6.5/CB5": "bidirectional", "P6.1/CB1": "bidirectional", "P6.0/CB0": "bidirectional", "PJ.0/TDO": "bidirectional", "SBWTCK/TEST": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", V18: "passive", PUR: "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8": "bidirectional", "P6.7/CB7": "bidirectional", "P7.5/CB9": "bidirectional", "P9.6": "bidirectional", "P9.5": "bidirectional", "P7.7/CB11": "bidirectional", "P7.6/CB10": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/CB3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3": "bidirectional", "P9.2": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "DMAE0/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5631IZQW";
  override referencePrefix = "U";
}

/**
 * 256kB Flash, 16kB + 2kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5632IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5632.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5632IZQW extends Component.withPins({
  "P6.4/CB4": "A1",
  "P6.2/CB2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "VUSB": "A9",
  "VBUS": "A10",
  "PU.1/DM": "A11",
  "PU.0/DP": "A12",
  "P6.6/CB6": "B1",
  "P6.5/CB5": "B2",
  "P6.1/CB1": "B3",
  "P6.0/CB0": "B4",
  "PJ.0/TDO": "B5",
  "SBWTCK/TEST": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "V18": "B9",
  "PUR": "B10",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8": "C1",
  "P6.7/CB7": "C2",
  "P7.5/CB9": "C3",
  "P9.6": "C11",
  "P9.5": "C12",
  "P7.7/CB11": "D1",
  "P7.6/CB10": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/CB3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3": "D11",
  "P9.2": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "DMAE0/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "TA2CLK/SMCLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "TB0OUTH/SVMOUT/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "TA0CLK/ACLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "TA1CLK/CBOUT/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4": "bidirectional", "P6.2/CB2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", VUSB: "bidirectional", VBUS: "bidirectional", "PU.1/DM": "bidirectional", "PU.0/DP": "bidirectional", "P6.6/CB6": "bidirectional", "P6.5/CB5": "bidirectional", "P6.1/CB1": "bidirectional", "P6.0/CB0": "bidirectional", "PJ.0/TDO": "bidirectional", "SBWTCK/TEST": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", V18: "passive", PUR: "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8": "bidirectional", "P6.7/CB7": "bidirectional", "P7.5/CB9": "bidirectional", "P9.6": "bidirectional", "P9.5": "bidirectional", "P7.7/CB11": "bidirectional", "P7.6/CB10": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/CB3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3": "bidirectional", "P9.2": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "DMAE0/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5632IZQW";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 16kB + 2kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5633IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5633.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5633IZQW extends Component.withPins({
  "P6.4/CB4/A4": "A1",
  "P6.2/CB2/A2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "VUSB": "A9",
  "VBUS": "A10",
  "PU.1/DM": "A11",
  "PU.0/DP": "A12",
  "P6.6/CB6/A6": "B1",
  "P6.5/CB5/A5": "B2",
  "P6.1/CB1/A1": "B3",
  "P6.0/CB0/A0": "B4",
  "PJ.0/TDO": "B5",
  "SBWTCK/TEST": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "V18": "B9",
  "PUR": "B10",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8/A12": "C1",
  "P6.7/CB7/A7": "C2",
  "P7.5/CB9/A13": "C3",
  "P9.6": "C11",
  "P9.5": "C12",
  "P7.7/CB11/A15": "D1",
  "P7.6/CB10/A14": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/CB3/A3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3": "D11",
  "P9.2": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "ADC12CLK/DMAE0/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "TA2CLK/SMCLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "TB0OUTH/SVMOUT/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "TA0CLK/ACLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "TA1CLK/CBOUT/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.2/CB2/A2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", VUSB: "bidirectional", VBUS: "bidirectional", "PU.1/DM": "bidirectional", "PU.0/DP": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.0/CB0/A0": "bidirectional", "PJ.0/TDO": "bidirectional", "SBWTCK/TEST": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", V18: "passive", PUR: "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8/A12": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P9.6": "bidirectional", "P9.5": "bidirectional", "P7.7/CB11/A15": "bidirectional", "P7.6/CB10/A14": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3": "bidirectional", "P9.2": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "ADC12CLK/DMAE0/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5633IZQW";
  override referencePrefix = "U";
}

/**
 * 192kB Flash, 16kB + 2kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5634IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5634.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5634IZQW extends Component.withPins({
  "P6.4/CB4/A4": "A1",
  "P6.2/CB2/A2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "VUSB": "A9",
  "VBUS": "A10",
  "PU.1/DM": "A11",
  "PU.0/DP": "A12",
  "P6.6/CB6/A6": "B1",
  "P6.5/CB5/A5": "B2",
  "P6.1/CB1/A1": "B3",
  "P6.0/CB0/A0": "B4",
  "PJ.0/TDO": "B5",
  "SBWTCK/TEST": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "V18": "B9",
  "PUR": "B10",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8/A12": "C1",
  "P6.7/CB7/A7": "C2",
  "P7.5/CB9/A13": "C3",
  "P9.6": "C11",
  "P9.5": "C12",
  "P7.7/CB11/A15": "D1",
  "P7.6/CB10/A14": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/CB3/A3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3": "D11",
  "P9.2": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "ADC12CLK/DMAE0/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "TA2CLK/SMCLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "TB0OUTH/SVMOUT/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "TA0CLK/ACLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "TA1CLK/CBOUT/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.2/CB2/A2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", VUSB: "bidirectional", VBUS: "bidirectional", "PU.1/DM": "bidirectional", "PU.0/DP": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.0/CB0/A0": "bidirectional", "PJ.0/TDO": "bidirectional", "SBWTCK/TEST": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", V18: "passive", PUR: "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8/A12": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P9.6": "bidirectional", "P9.5": "bidirectional", "P7.7/CB11/A15": "bidirectional", "P7.6/CB10/A14": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3": "bidirectional", "P9.2": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "ADC12CLK/DMAE0/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5634IZQW";
  override referencePrefix = "U";
}

/**
 * 256kB Flash, 16kB + 2kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5635IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5635.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5635IZQW extends Component.withPins({
  "P6.4/CB4/A4": "A1",
  "P6.2/CB2/A2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "VUSB": "A9",
  "VBUS": "A10",
  "PU.1/DM": "A11",
  "PU.0/DP": "A12",
  "P6.6/CB6/A6": "B1",
  "P6.5/CB5/A5": "B2",
  "P6.1/CB1/A1": "B3",
  "P6.0/CB0/A0": "B4",
  "PJ.0/TDO": "B5",
  "SBWTCK/TEST": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "V18": "B9",
  "PUR": "B10",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8/A12": "C1",
  "P6.7/CB7/A7": "C2",
  "P7.5/CB9/A13": "C3",
  "P9.6": "C11",
  "P9.5": "C12",
  "P7.7/CB11/A15": "D1",
  "P7.6/CB10/A14": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/CB3/A3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3": "D11",
  "P9.2": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "ADC12CLK/DMAE0/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "TA2CLK/SMCLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "TB0OUTH/SVMOUT/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "TA0CLK/ACLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "TA1CLK/CBOUT/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.2/CB2/A2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", VUSB: "bidirectional", VBUS: "bidirectional", "PU.1/DM": "bidirectional", "PU.0/DP": "bidirectional", "P6.6/CB6/A6": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.0/CB0/A0": "bidirectional", "PJ.0/TDO": "bidirectional", "SBWTCK/TEST": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", V18: "passive", PUR: "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8/A12": "bidirectional", "P6.7/CB7/A7": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P9.6": "bidirectional", "P9.5": "bidirectional", "P7.7/CB11/A15": "bidirectional", "P7.6/CB10/A14": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3": "bidirectional", "P9.2": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "ADC12CLK/DMAE0/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5635IZQW";
  override referencePrefix = "U";
}

/**
 * 128kB Flash, 16kB + 2kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5636IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5636.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5636IZQW extends Component.withPins({
  "P6.4/CB4/A4": "A1",
  "P6.2/CB2/A2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "VUSB": "A9",
  "VBUS": "A10",
  "PU.1/DM": "A11",
  "PU.0/DP": "A12",
  "P6.6/CB6/A6/DAC0": "B1",
  "P6.5/CB5/A5": "B2",
  "P6.1/CB1/A1": "B3",
  "P6.0/CB0/A0": "B4",
  "PJ.0/TDO": "B5",
  "SBWTCK/TEST": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "V18": "B9",
  "PUR": "B10",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8/A12": "C1",
  "P6.7/CB7/A7/DAC1": "C2",
  "P7.5/CB9/A13": "C3",
  "P9.6": "C11",
  "P9.5": "C12",
  "P7.7/CB11/A15/DAC1": "D1",
  "P7.6/CB10/A14/DAC0": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/CB3/A3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3": "D11",
  "P9.2": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "ADC12CLK/DMAE0/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "TA2CLK/SMCLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "TB0OUTH/SVMOUT/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "TA0CLK/ACLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "TA1CLK/CBOUT/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.2/CB2/A2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", VUSB: "bidirectional", VBUS: "bidirectional", "PU.1/DM": "bidirectional", "PU.0/DP": "bidirectional", "P6.6/CB6/A6/DAC0": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.0/CB0/A0": "bidirectional", "PJ.0/TDO": "bidirectional", "SBWTCK/TEST": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", V18: "passive", PUR: "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8/A12": "bidirectional", "P6.7/CB7/A7/DAC1": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P9.6": "bidirectional", "P9.5": "bidirectional", "P7.7/CB11/A15/DAC1": "bidirectional", "P7.6/CB10/A14/DAC0": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3": "bidirectional", "P9.2": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "ADC12CLK/DMAE0/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5636IZQW";
  override referencePrefix = "U";
}

/**
 * 192kB Flash, 16kB + 2kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5637IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5637.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5637IZQW extends Component.withPins({
  "P6.4/CB4/A4": "A1",
  "P6.2/CB2/A2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "VUSB": "A9",
  "VBUS": "A10",
  "PU.1/DM": "A11",
  "PU.0/DP": "A12",
  "P6.6/CB6/A6/DAC0": "B1",
  "P6.5/CB5/A5": "B2",
  "P6.1/CB1/A1": "B3",
  "P6.0/CB0/A0": "B4",
  "PJ.0/TDO": "B5",
  "SBWTCK/TEST": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "V18": "B9",
  "PUR": "B10",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8/A12": "C1",
  "P6.7/CB7/A7/DAC1": "C2",
  "P7.5/CB9/A13": "C3",
  "P9.6": "C11",
  "P9.5": "C12",
  "P7.7/CB11/A15/DAC1": "D1",
  "P7.6/CB10/A14/DAC0": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/CB3/A3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3": "D11",
  "P9.2": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "ADC12CLK/DMAE0/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "TA2CLK/SMCLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "TB0OUTH/SVMOUT/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "TA0CLK/ACLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "TA1CLK/CBOUT/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.2/CB2/A2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", VUSB: "bidirectional", VBUS: "bidirectional", "PU.1/DM": "bidirectional", "PU.0/DP": "bidirectional", "P6.6/CB6/A6/DAC0": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.0/CB0/A0": "bidirectional", "PJ.0/TDO": "bidirectional", "SBWTCK/TEST": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", V18: "passive", PUR: "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8/A12": "bidirectional", "P6.7/CB7/A7/DAC1": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P9.6": "bidirectional", "P9.5": "bidirectional", "P7.7/CB11/A15/DAC1": "bidirectional", "P7.6/CB10/A14/DAC0": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3": "bidirectional", "P9.2": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "ADC12CLK/DMAE0/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5637IZQW";
  override referencePrefix = "U";
}

/**
 * 256kB Flash, 16kB + 2kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5638IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5638.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5638IZQW extends Component.withPins({
  "P6.4/CB4/A4": "A1",
  "P6.2/CB2/A2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "VUSB": "A9",
  "VBUS": "A10",
  "PU.1/DM": "A11",
  "PU.0/DP": "A12",
  "P6.6/CB6/A6/DAC0": "B1",
  "P6.5/CB5/A5": "B2",
  "P6.1/CB1/A1": "B3",
  "P6.0/CB0/A0": "B4",
  "PJ.0/TDO": "B5",
  "SBWTCK/TEST": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "V18": "B9",
  "PUR": "B10",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/CB8/A12": "C1",
  "P6.7/CB7/A7/DAC1": "C2",
  "P7.5/CB9/A13": "C3",
  "P9.6": "C11",
  "P9.5": "C12",
  "P7.7/CB11/A15/DAC1": "D1",
  "P7.6/CB10/A14/DAC0": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/CB3/A3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3": "D11",
  "P9.2": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "ADC12CLK/DMAE0/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "TA2CLK/SMCLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "TB0OUTH/SVMOUT/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "TA0CLK/ACLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "TA1CLK/CBOUT/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/CB4/A4": "bidirectional", "P6.2/CB2/A2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "bidirectional", AVSS3: "power_in", VUSB: "bidirectional", VBUS: "bidirectional", "PU.1/DM": "bidirectional", "PU.0/DP": "bidirectional", "P6.6/CB6/A6/DAC0": "bidirectional", "P6.5/CB5/A5": "bidirectional", "P6.1/CB1/A1": "bidirectional", "P6.0/CB0/A0": "bidirectional", "PJ.0/TDO": "bidirectional", "SBWTCK/TEST": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", V18: "passive", PUR: "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/CB8/A12": "bidirectional", "P6.7/CB7/A7/DAC1": "bidirectional", "P7.5/CB9/A13": "bidirectional", "P9.6": "bidirectional", "P9.5": "bidirectional", "P7.7/CB11/A15/DAC1": "bidirectional", "P7.6/CB10/A14/DAC0": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/CB3/A3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "bidirectional", "P9.7": "bidirectional", "P9.3": "bidirectional", "P9.2": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "bidirectional", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "bidirectional", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "ADC12CLK/DMAE0/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "TA2CLK/SMCLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "TB0OUTH/SVMOUT/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "TA1CLK/CBOUT/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "bidirectional", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5638IZQW";
  override referencePrefix = "U";
}

/**
 * 384kB Flash, 32kB + 2kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5658IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5658.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5658IZQW extends Component.withPins({
  "P6.4/A4/CB4": "A1",
  "P6.2/A2/CB2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "VUSB": "A9",
  "VBUS": "A10",
  "PU.1/DM": "A11",
  "PU.0/DP": "A12",
  "P6.6/A6/DAC0/CB6": "B1",
  "P6.5/A5/CB5": "B2",
  "P6.1/A1/CB1": "B3",
  "P6.0/A0/CB0": "B4",
  "PJ.0/TDO": "B5",
  "TEST/SBWTCK": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "PUR": "B10",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/A12/CB8": "C1",
  "P6.7/A7/DAC1/CB7": "C2",
  "P7.5/A13/CB9": "C3",
  "P9.6/UCB2SOMI/UCB2SCL": "C11",
  "P9.5/UCB2SIMO/UCB2SDA": "C12",
  "P7.7/A15/DAC1/CB11": "D1",
  "P7.6/A14/DAC0/CB10": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/A3/CB3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3/UCA2RXD/UCA2SOMI": "D11",
  "P9.2/UCA2TXD/UCA2SIMO": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4/UCB2CLK/UCA2STE": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1/UCB2STE/UCA2CLK": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "DMAE0/ADC12CLK/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "SMCLK/TA2CLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "SVMOUT/TB0OUTH/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "ACLK/TA0CLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "CBOUT/TA1CLK/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/A4/CB4": "bidirectional", "P6.2/A2/CB2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "passive", AVSS3: "power_in", VUSB: "passive", VBUS: "passive", "PU.1/DM": "bidirectional", "PU.0/DP": "bidirectional", "P6.6/A6/DAC0/CB6": "bidirectional", "P6.5/A5/CB5": "bidirectional", "P6.1/A1/CB1": "bidirectional", "P6.0/A0/CB0": "bidirectional", "PJ.0/TDO": "bidirectional", "TEST/SBWTCK": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", PUR: "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/A12/CB8": "bidirectional", "P6.7/A7/DAC1/CB7": "bidirectional", "P7.5/A13/CB9": "bidirectional", "P9.6/UCB2SOMI/UCB2SCL": "bidirectional", "P9.5/UCB2SIMO/UCB2SDA": "bidirectional", "P7.7/A15/DAC1/CB11": "bidirectional", "P7.6/A14/DAC0/CB10": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/A3/CB3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "passive", "P9.7": "bidirectional", "P9.3/UCA2RXD/UCA2SOMI": "bidirectional", "P9.2/UCA2TXD/UCA2SIMO": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4/UCB2CLK/UCA2STE": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "input", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1/UCB2STE/UCA2CLK": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "output", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "DMAE0/ADC12CLK/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "SMCLK/TA2CLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "SVMOUT/TB0OUTH/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "power_in", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5658IZQW";
  override referencePrefix = "U";
}

/**
 * 512kB Flash, 64kB + 2kB RAM, BGA-113
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430F5659IZQW`. Reference prefix: `U`.
 * Footprint filters: Texas*MicroStar*Junior*BGA*7x7mm*Layout12x12*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430f5659.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_MicroStar_Junior_BGA-113_7x7mm_Layout12x12_P0.5mm.
 */
export class MSP430F5659IZQW extends Component.withPins({
  "P6.4/A4/CB4": "A1",
  "P6.2/A2/CB2": "A2",
  "~{RST}/NMI/SBWTDIO": "A3",
  "PJ.1/TDI/TCLK": "A4",
  "DVSS3": "A5",
  "DVCC3": "A6",
  "VBAK": "A7",
  "AVSS3": "A8",
  "VUSB": "A9",
  "VBUS": "A10",
  "PU.1/DM": "A11",
  "PU.0/DP": "A12",
  "P6.6/A6/DAC0/CB6": "B1",
  "P6.5/A5/CB5": "B2",
  "P6.1/A1/CB1": "B3",
  "P6.0/A0/CB0": "B4",
  "PJ.0/TDO": "B5",
  "TEST/SBWTCK": "B6",
  "P7.3/XT2OUT": "B7",
  "P7.2/XT2IN": "B8",
  "PUR": "B10",
  "VSSU_B11": "B11",
  "VSSU_B12": "B12",
  "P7.4/A12/CB8": "C1",
  "P6.7/A7/DAC1/CB7": "C2",
  "P7.5/A13/CB9": "C3",
  "P9.6/UCB2SOMI/UCB2SCL": "C11",
  "P9.5/UCB2SIMO/UCB2SDA": "C12",
  "P7.7/A15/DAC1/CB11": "D1",
  "P7.6/A14/DAC0/CB10": "D2",
  "VREF+/VeREF+/P5.0": "D4",
  "P6.3/A3/CB3": "D5",
  "PJ.3/TCK": "D6",
  "RTCCLK/P5.7": "D7",
  "VBAT": "D8",
  "P9.7": "D9",
  "P9.3/UCA2RXD/UCA2SOMI": "D11",
  "P9.2/UCA2TXD/UCA2SIMO": "D12",
  "AVCC1_E1": "E1",
  "AVCC1_E2": "E2",
  "VREF-/VeREF-/P5.1": "E4",
  "GND_E5": "E5",
  "GND_E6": "E6",
  "PJ.2/TMS": "E7",
  "GND_E8": "E8",
  "P9.4/UCB2CLK/UCA2STE": "E9",
  "P9.0": "E11",
  "P8.7": "E12",
  "XIN": "F1",
  "AVSS1": "F2",
  "GND_F4": "F4",
  "GND_F5": "F5",
  "GND_F8": "F8",
  "P9.1/UCB2STE/UCA2CLK": "F9",
  "P8.5/UCB1SIMO/UCB1SDA": "F11",
  "DVCC2": "F12",
  "XOUT": "G1",
  "AVSS2": "G2",
  "P2MAP0/P2.0": "G4",
  "GND_G5": "G5",
  "GND_G8": "G8",
  "P8.6/UCB1SOMI/UCB1SCL": "G9",
  "P8.4/UCB1CLK/UCA1STE": "G11",
  "DVSS2": "G12",
  "DMAE0/ADC12CLK/P5.6": "H1",
  "P2MAP1/P2.1": "H2",
  "P2MAP3/P2.3": "H4",
  "GND_H5": "H5",
  "TA0.2/P1.3": "H6",
  "TA1.0/P3.1": "H7",
  "GND_H8": "H8",
  "GND_H9": "H9",
  "P8.2/UCA1TXD/UCA1SIMO": "H11",
  "P8.3/UCA1RXD/UCA1SOMI": "H12",
  "P2MAP2/P2.2": "J1",
  "P2MAP4/P2.4": "J2",
  "P5.5": "J5",
  "TA0.1/P1.2": "J6",
  "TA0.1/P1.6": "J7",
  "SMCLK/TA2CLK/P3.4": "J8",
  "TB0.0/P4.0": "J9",
  "P8.0/TB0CLK": "J11",
  "P8.1/UCB1STE/UCA1CLK": "J12",
  "P2MAP5/P2.5": "K1",
  "P2MAP6/P2.6": "K2",
  "TB0.6/P4.6": "K11",
  "SVMOUT/TB0OUTH/P4.7": "K12",
  "DVCC1": "L1",
  "P2MAP7/P2.7": "L2",
  "P5.2": "L3",
  "P5.3": "L4",
  "ACLK/TA0CLK/P1.0": "L5",
  "TA0.4/P1.5": "L6",
  "CBOUT/TA1CLK/P3.0": "L7",
  "TA1.2/P3.3": "L8",
  "TA2.1/P3.6": "L9",
  "TB0.2/P4.2": "L10",
  "TB0.5/P4.5": "L11",
  "TB0.4/P4.4": "L12",
  "DVSS1": "M1",
  "VCORE": "M2",
  "DVSS": "M3",
  "P5.4": "M4",
  "TA0.0/P1.1": "M5",
  "TA0.3/P1.4": "M6",
  "TA0.2/P1.7": "M7",
  "TA1.1/P3.2": "M8",
  "TA2.0/P3.5": "M9",
  "TA2.2/P3.7": "M10",
  "TB0.1/P4.1": "M11",
  "TB0.3/P4.3": "M12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "P6.4/A4/CB4": "bidirectional", "P6.2/A2/CB2": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "PJ.1/TDI/TCLK": "bidirectional", DVSS3: "power_in", DVCC3: "power_in", VBAK: "passive", AVSS3: "power_in", VUSB: "passive", VBUS: "passive", "PU.1/DM": "bidirectional", "PU.0/DP": "bidirectional", "P6.6/A6/DAC0/CB6": "bidirectional", "P6.5/A5/CB5": "bidirectional", "P6.1/A1/CB1": "bidirectional", "P6.0/A0/CB0": "bidirectional", "PJ.0/TDO": "bidirectional", "TEST/SBWTCK": "input", "P7.3/XT2OUT": "bidirectional", "P7.2/XT2IN": "bidirectional", PUR: "bidirectional", VSSU_B11: "power_in", VSSU_B12: "power_in", "P7.4/A12/CB8": "bidirectional", "P6.7/A7/DAC1/CB7": "bidirectional", "P7.5/A13/CB9": "bidirectional", "P9.6/UCB2SOMI/UCB2SCL": "bidirectional", "P9.5/UCB2SIMO/UCB2SDA": "bidirectional", "P7.7/A15/DAC1/CB11": "bidirectional", "P7.6/A14/DAC0/CB10": "bidirectional", "VREF+/VeREF+/P5.0": "bidirectional", "P6.3/A3/CB3": "bidirectional", "PJ.3/TCK": "bidirectional", "RTCCLK/P5.7": "bidirectional", VBAT: "passive", "P9.7": "bidirectional", "P9.3/UCA2RXD/UCA2SOMI": "bidirectional", "P9.2/UCA2TXD/UCA2SIMO": "bidirectional", AVCC1_E1: "power_in", AVCC1_E2: "power_in", "VREF-/VeREF-/P5.1": "bidirectional", GND_E5: "power_in", GND_E6: "power_in", "PJ.2/TMS": "bidirectional", GND_E8: "power_in", "P9.4/UCB2CLK/UCA2STE": "bidirectional", "P9.0": "bidirectional", "P8.7": "bidirectional", XIN: "input", AVSS1: "power_in", GND_F4: "power_in", GND_F5: "power_in", GND_F8: "power_in", "P9.1/UCB2STE/UCA2CLK": "bidirectional", "P8.5/UCB1SIMO/UCB1SDA": "bidirectional", DVCC2: "power_in", XOUT: "output", AVSS2: "power_in", "P2MAP0/P2.0": "bidirectional", GND_G5: "power_in", GND_G8: "power_in", "P8.6/UCB1SOMI/UCB1SCL": "bidirectional", "P8.4/UCB1CLK/UCA1STE": "bidirectional", DVSS2: "power_in", "DMAE0/ADC12CLK/P5.6": "bidirectional", "P2MAP1/P2.1": "bidirectional", "P2MAP3/P2.3": "bidirectional", GND_H5: "power_in", "TA0.2/P1.3": "bidirectional", "TA1.0/P3.1": "bidirectional", GND_H8: "power_in", GND_H9: "power_in", "P8.2/UCA1TXD/UCA1SIMO": "bidirectional", "P8.3/UCA1RXD/UCA1SOMI": "bidirectional", "P2MAP2/P2.2": "bidirectional", "P2MAP4/P2.4": "bidirectional", "P5.5": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.1/P1.6": "bidirectional", "SMCLK/TA2CLK/P3.4": "bidirectional", "TB0.0/P4.0": "bidirectional", "P8.0/TB0CLK": "bidirectional", "P8.1/UCB1STE/UCA1CLK": "bidirectional", "P2MAP5/P2.5": "bidirectional", "P2MAP6/P2.6": "bidirectional", "TB0.6/P4.6": "bidirectional", "SVMOUT/TB0OUTH/P4.7": "bidirectional", DVCC1: "power_in", "P2MAP7/P2.7": "bidirectional", "P5.2": "bidirectional", "P5.3": "bidirectional", "ACLK/TA0CLK/P1.0": "bidirectional", "TA0.4/P1.5": "bidirectional", "CBOUT/TA1CLK/P3.0": "bidirectional", "TA1.2/P3.3": "bidirectional", "TA2.1/P3.6": "bidirectional", "TB0.2/P4.2": "bidirectional", "TB0.5/P4.5": "bidirectional", "TB0.4/P4.4": "bidirectional", DVSS1: "power_in", VCORE: "power_in", DVSS: "power_in", "P5.4": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.3/P1.4": "bidirectional", "TA0.2/P1.7": "bidirectional", "TA1.1/P3.2": "bidirectional", "TA2.0/P3.5": "bidirectional", "TA2.2/P3.7": "bidirectional", "TB0.1/P4.1": "bidirectional", "TB0.3/P4.3": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430F5659IZQW";
  override referencePrefix = "U";
}

/**
 * 4kB FRAM, 1kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430FR5720IRGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024C*.
 * @see http://www.ti.com/lit/ds/symlink/msp430fr5720.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024C_VQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 */
export class MSP430FR5720IRGE extends Component.withPins({
  "TA0.1/DMAE0/RTCCLK/CD0/VeREF-/A0/P1.0": "1",
  "TA0.2/TA1CLK/CDOUT/CD1/VeREF+/A1/P1.1": "2",
  "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "3",
  "TA1.2/UCB0STE/CD3/A3/P1.3": "4",
  "TB0.1/UCA0STE/CD4/A4/P1.4": "5",
  "TB0.2/UCA0CLK/CD5/A5/P1.5": "6",
  "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "7",
  "PJ.1/TDI/TCLK/MCLK/CD7": "8",
  "PJ.2/TMS/ACLK/CD8": "9",
  "PJ.3/TCK/CD9": "10",
  "TEST/SBWTCK": "11",
  "~{RST}/NMI/SBWTDIO": "12",
  "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "13",
  "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "14",
  "UCB0CLK/P2.2": "15",
  "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "16",
  "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "17",
  "VCORE": "18",
  "DVSS": "19",
  "DVCC": "20",
  "PJ.4/XIN": "21",
  "PJ.5/XOUT": "22",
  "AVSS": "23",
  "AVCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.1/DMAE0/RTCCLK/CD0/VeREF-/A0/P1.0": "bidirectional", "TA0.2/TA1CLK/CDOUT/CD1/VeREF+/A1/P1.1": "bidirectional", "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "bidirectional", "TA1.2/UCB0STE/CD3/A3/P1.3": "bidirectional", "TB0.1/UCA0STE/CD4/A4/P1.4": "bidirectional", "TB0.2/UCA0CLK/CD5/A5/P1.5": "bidirectional", "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "bidirectional", "PJ.1/TDI/TCLK/MCLK/CD7": "bidirectional", "PJ.2/TMS/ACLK/CD8": "bidirectional", "PJ.3/TCK/CD9": "bidirectional", "TEST/SBWTCK": "input", "~{RST}/NMI/SBWTDIO": "input", "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "input", "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "input", "UCB0CLK/P2.2": "input", "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "input", "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "input", VCORE: "input", DVSS: "power_in", DVCC: "power_in", "PJ.4/XIN": "input", "PJ.5/XOUT": "input", AVSS: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430FR5720IRGE";
  override referencePrefix = "U";
}

/**
 * 8kB FRAM, 1kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430FR5722IRGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024C*.
 * @see http://www.ti.com/lit/ds/symlink/msp430fr5722.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024C_VQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 */
export class MSP430FR5722IRGE extends Component.withPins({
  "TA0.1/DMAE0/RTCCLK/P1.0": "1",
  "TA0.2/TA1CLK/CDOUT/P1.1": "2",
  "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "3",
  "TA1.2/UCB0STE/CD3/A3/P1.3": "4",
  "TB0.1/UCA0STE/CD4/A4/P1.4": "5",
  "TB0.2/UCA0CLK/CD5/A5/P1.5": "6",
  "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "7",
  "PJ.1/TDI/TCLK/MCLK/CD7": "8",
  "PJ.2/TMS/ACLK/CD8": "9",
  "PJ.3/TCK/CD9": "10",
  "TEST/SBWTCK": "11",
  "~{RST}/NMI/SBWTDIO": "12",
  "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "13",
  "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "14",
  "UCB0CLK/P2.2": "15",
  "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "16",
  "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "17",
  "VCORE": "18",
  "DVSS": "19",
  "DVCC": "20",
  "PJ.4/XIN": "21",
  "PJ.5/XOUT": "22",
  "AVSS": "23",
  "AVCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.1/DMAE0/RTCCLK/P1.0": "bidirectional", "TA0.2/TA1CLK/CDOUT/P1.1": "bidirectional", "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "bidirectional", "TA1.2/UCB0STE/CD3/A3/P1.3": "bidirectional", "TB0.1/UCA0STE/CD4/A4/P1.4": "bidirectional", "TB0.2/UCA0CLK/CD5/A5/P1.5": "bidirectional", "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "bidirectional", "PJ.1/TDI/TCLK/MCLK/CD7": "bidirectional", "PJ.2/TMS/ACLK/CD8": "bidirectional", "PJ.3/TCK/CD9": "bidirectional", "TEST/SBWTCK": "input", "~{RST}/NMI/SBWTDIO": "input", "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "input", "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "input", "UCB0CLK/P2.2": "input", "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "input", "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "input", VCORE: "input", DVSS: "power_in", DVCC: "power_in", "PJ.4/XIN": "input", "PJ.5/XOUT": "input", AVSS: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430FR5722IRGE";
  override referencePrefix = "U";
}

/**
 * 8kB FRAM, 1kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430FR5724IRGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024C*.
 * @see http://www.ti.com/lit/ds/symlink/msp430fr5724.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024C_VQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 */
export class MSP430FR5724IRGE extends Component.withPins({
  "TA0.1/DMAE0/RTCCLK/CD0/VeREF-/A0/P1.0": "1",
  "TA0.2/TA1CLK/CDOUT/CD1/VeREF+/A1/P1.1": "2",
  "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "3",
  "TA1.2/UCB0STE/CD3/A3/P1.3": "4",
  "TB0.1/UCA0STE/CD4/A4/P1.4": "5",
  "TB0.2/UCA0CLK/CD5/A5/P1.5": "6",
  "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "7",
  "PJ.1/TDI/TCLK/MCLK/CD7": "8",
  "PJ.2/TMS/ACLK/CD8": "9",
  "PJ.3/TCK/CD9": "10",
  "TEST/SBWTCK": "11",
  "~{RST}/NMI/SBWTDIO": "12",
  "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "13",
  "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "14",
  "UCB0CLK/P2.2": "15",
  "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "16",
  "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "17",
  "VCORE": "18",
  "DVSS": "19",
  "DVCC": "20",
  "PJ.4/XIN": "21",
  "PJ.5/XOUT": "22",
  "AVSS": "23",
  "AVCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.1/DMAE0/RTCCLK/CD0/VeREF-/A0/P1.0": "bidirectional", "TA0.2/TA1CLK/CDOUT/CD1/VeREF+/A1/P1.1": "bidirectional", "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "bidirectional", "TA1.2/UCB0STE/CD3/A3/P1.3": "bidirectional", "TB0.1/UCA0STE/CD4/A4/P1.4": "bidirectional", "TB0.2/UCA0CLK/CD5/A5/P1.5": "bidirectional", "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "bidirectional", "PJ.1/TDI/TCLK/MCLK/CD7": "bidirectional", "PJ.2/TMS/ACLK/CD8": "bidirectional", "PJ.3/TCK/CD9": "bidirectional", "TEST/SBWTCK": "input", "~{RST}/NMI/SBWTDIO": "input", "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "input", "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "input", "UCB0CLK/P2.2": "input", "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "input", "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "input", VCORE: "input", DVSS: "power_in", DVCC: "power_in", "PJ.4/XIN": "input", "PJ.5/XOUT": "input", AVSS: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430FR5724IRGE";
  override referencePrefix = "U";
}

/**
 * 16kB FRAM, 1kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430FR5726IRGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024C*.
 * @see http://www.ti.com/lit/ds/symlink/msp430fr5726.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024C_VQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 */
export class MSP430FR5726IRGE extends Component.withPins({
  "TA0.1/DMAE0/RTCCLK/P1.0": "1",
  "TA0.2/TA1CLK/CDOUT/P1.1": "2",
  "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "3",
  "TA1.2/UCB0STE/CD3/A3/P1.3": "4",
  "TB0.1/UCA0STE/CD4/A4/P1.4": "5",
  "TB0.2/UCA0CLK/CD5/A5/P1.5": "6",
  "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "7",
  "PJ.1/TDI/TCLK/MCLK/CD7": "8",
  "PJ.2/TMS/ACLK/CD8": "9",
  "PJ.3/TCK/CD9": "10",
  "TEST/SBWTCK": "11",
  "~{RST}/NMI/SBWTDIO": "12",
  "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "13",
  "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "14",
  "UCB0CLK/P2.2": "15",
  "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "16",
  "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "17",
  "VCORE": "18",
  "DVSS": "19",
  "DVCC": "20",
  "PJ.4/XIN": "21",
  "PJ.5/XOUT": "22",
  "AVSS": "23",
  "AVCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.1/DMAE0/RTCCLK/P1.0": "bidirectional", "TA0.2/TA1CLK/CDOUT/P1.1": "bidirectional", "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "bidirectional", "TA1.2/UCB0STE/CD3/A3/P1.3": "bidirectional", "TB0.1/UCA0STE/CD4/A4/P1.4": "bidirectional", "TB0.2/UCA0CLK/CD5/A5/P1.5": "bidirectional", "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "bidirectional", "PJ.1/TDI/TCLK/MCLK/CD7": "bidirectional", "PJ.2/TMS/ACLK/CD8": "bidirectional", "PJ.3/TCK/CD9": "bidirectional", "TEST/SBWTCK": "input", "~{RST}/NMI/SBWTDIO": "input", "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "input", "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "input", "UCB0CLK/P2.2": "input", "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "input", "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "input", VCORE: "input", DVSS: "power_in", DVCC: "power_in", "PJ.4/XIN": "input", "PJ.5/XOUT": "input", AVSS: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430FR5726IRGE";
  override referencePrefix = "U";
}

/**
 * 16kB FRAM, 1kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430FR5728IRGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024C*.
 * @see http://www.ti.com/lit/ds/symlink/msp430fr5728.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024C_VQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 */
export class MSP430FR5728IRGE extends Component.withPins({
  "TA0.1/DMAE0/RTCCLK/CD0/VeREF-/A0/P1.0": "1",
  "TA0.2/TA1CLK/CDOUT/CD1/VeREF+/A1/P1.1": "2",
  "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "3",
  "TA1.2/UCB0STE/CD3/A3/P1.3": "4",
  "TB0.1/UCA0STE/CD4/A4/P1.4": "5",
  "TB0.2/UCA0CLK/CD5/A5/P1.5": "6",
  "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "7",
  "PJ.1/TDI/TCLK/MCLK/CD7": "8",
  "PJ.2/TMS/ACLK/CD8": "9",
  "PJ.3/TCK/CD9": "10",
  "TEST/SBWTCK": "11",
  "~{RST}/NMI/SBWTDIO": "12",
  "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "13",
  "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "14",
  "UCB0CLK/P2.2": "15",
  "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "16",
  "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "17",
  "VCORE": "18",
  "DVSS": "19",
  "DVCC": "20",
  "PJ.4/XIN": "21",
  "PJ.5/XOUT": "22",
  "AVSS": "23",
  "AVCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.1/DMAE0/RTCCLK/CD0/VeREF-/A0/P1.0": "bidirectional", "TA0.2/TA1CLK/CDOUT/CD1/VeREF+/A1/P1.1": "bidirectional", "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "bidirectional", "TA1.2/UCB0STE/CD3/A3/P1.3": "bidirectional", "TB0.1/UCA0STE/CD4/A4/P1.4": "bidirectional", "TB0.2/UCA0CLK/CD5/A5/P1.5": "bidirectional", "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "bidirectional", "PJ.1/TDI/TCLK/MCLK/CD7": "bidirectional", "PJ.2/TMS/ACLK/CD8": "bidirectional", "PJ.3/TCK/CD9": "bidirectional", "TEST/SBWTCK": "input", "~{RST}/NMI/SBWTDIO": "input", "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "input", "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "input", "UCB0CLK/P2.2": "input", "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "input", "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "input", VCORE: "input", DVSS: "power_in", DVCC: "power_in", "PJ.4/XIN": "input", "PJ.5/XOUT": "input", AVSS: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430FR5728IRGE";
  override referencePrefix = "U";
}

/**
 * 4kB FRAM, 1kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430FR5730IRGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024C*.
 * @see http://www.ti.com/lit/ds/symlink/msp430fr5730.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024C_VQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 */
export class MSP430FR5730IRGE extends Component.withPins({
  "TA0.1/DMAE0/RTCCLK/CD0/VeREF-/A0/P1.0": "1",
  "TA0.2/TA1CLK/CDOUT/CD1/VeREF+/A1/P1.1": "2",
  "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "3",
  "TA1.2/UCB0STE/CD3/A3/P1.3": "4",
  "TB0.1/UCA0STE/CD4/A4/P1.4": "5",
  "TB0.2/UCA0CLK/CD5/A5/P1.5": "6",
  "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "7",
  "PJ.1/TDI/TCLK/MCLK/CD7": "8",
  "PJ.2/TMS/ACLK/CD8": "9",
  "PJ.3/TCK/CD9": "10",
  "TEST/SBWTCK": "11",
  "~{RST}/NMI/SBWTDIO": "12",
  "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "13",
  "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "14",
  "UCB0CLK/P2.2": "15",
  "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "16",
  "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "17",
  "VCORE": "18",
  "DVSS": "19",
  "DVCC": "20",
  "PJ.4/XIN": "21",
  "PJ.5/XOUT": "22",
  "AVSS": "23",
  "AVCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.1/DMAE0/RTCCLK/CD0/VeREF-/A0/P1.0": "bidirectional", "TA0.2/TA1CLK/CDOUT/CD1/VeREF+/A1/P1.1": "bidirectional", "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "bidirectional", "TA1.2/UCB0STE/CD3/A3/P1.3": "bidirectional", "TB0.1/UCA0STE/CD4/A4/P1.4": "bidirectional", "TB0.2/UCA0CLK/CD5/A5/P1.5": "bidirectional", "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "bidirectional", "PJ.1/TDI/TCLK/MCLK/CD7": "bidirectional", "PJ.2/TMS/ACLK/CD8": "bidirectional", "PJ.3/TCK/CD9": "bidirectional", "TEST/SBWTCK": "input", "~{RST}/NMI/SBWTDIO": "input", "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "input", "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "input", "UCB0CLK/P2.2": "input", "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "input", "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "input", VCORE: "input", DVSS: "power_in", DVCC: "power_in", "PJ.4/XIN": "input", "PJ.5/XOUT": "input", AVSS: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430FR5730IRGE";
  override referencePrefix = "U";
}

/**
 * 8kB FRAM, 1kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430FR5732IRGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024C*.
 * @see http://www.ti.com/lit/ds/symlink/msp430fr5732.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024C_VQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 */
export class MSP430FR5732IRGE extends Component.withPins({
  "TA0.1/DMAE0/RTCCLK/P1.0": "1",
  "TA0.2/TA1CLK/CDOUT/P1.1": "2",
  "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "3",
  "TA1.2/UCB0STE/CD3/A3/P1.3": "4",
  "TB0.1/UCA0STE/CD4/A4/P1.4": "5",
  "TB0.2/UCA0CLK/CD5/A5/P1.5": "6",
  "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "7",
  "PJ.1/TDI/TCLK/MCLK/CD7": "8",
  "PJ.2/TMS/ACLK/CD8": "9",
  "PJ.3/TCK/CD9": "10",
  "TEST/SBWTCK": "11",
  "~{RST}/NMI/SBWTDIO": "12",
  "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "13",
  "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "14",
  "UCB0CLK/P2.2": "15",
  "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "16",
  "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "17",
  "VCORE": "18",
  "DVSS": "19",
  "DVCC": "20",
  "PJ.4/XIN": "21",
  "PJ.5/XOUT": "22",
  "AVSS": "23",
  "AVCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.1/DMAE0/RTCCLK/P1.0": "bidirectional", "TA0.2/TA1CLK/CDOUT/P1.1": "bidirectional", "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "bidirectional", "TA1.2/UCB0STE/CD3/A3/P1.3": "bidirectional", "TB0.1/UCA0STE/CD4/A4/P1.4": "bidirectional", "TB0.2/UCA0CLK/CD5/A5/P1.5": "bidirectional", "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "bidirectional", "PJ.1/TDI/TCLK/MCLK/CD7": "bidirectional", "PJ.2/TMS/ACLK/CD8": "bidirectional", "PJ.3/TCK/CD9": "bidirectional", "TEST/SBWTCK": "input", "~{RST}/NMI/SBWTDIO": "input", "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "input", "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "input", "UCB0CLK/P2.2": "input", "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "input", "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "input", VCORE: "input", DVSS: "power_in", DVCC: "power_in", "PJ.4/XIN": "input", "PJ.5/XOUT": "input", AVSS: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430FR5732IRGE";
  override referencePrefix = "U";
}

/**
 * 8kB FRAM, 1kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430FR5734IRGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024C*.
 * @see http://www.ti.com/lit/ds/symlink/msp430fr5734.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024C_VQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 */
export class MSP430FR5734IRGE extends Component.withPins({
  "TA0.1/DMAE0/RTCCLK/CD0/VeREF-/A0/P1.0": "1",
  "TA0.2/TA1CLK/CDOUT/CD1/VeREF+/A1/P1.1": "2",
  "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "3",
  "TA1.2/UCB0STE/CD3/A3/P1.3": "4",
  "TB0.1/UCA0STE/CD4/A4/P1.4": "5",
  "TB0.2/UCA0CLK/CD5/A5/P1.5": "6",
  "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "7",
  "PJ.1/TDI/TCLK/MCLK/CD7": "8",
  "PJ.2/TMS/ACLK/CD8": "9",
  "PJ.3/TCK/CD9": "10",
  "TEST/SBWTCK": "11",
  "~{RST}/NMI/SBWTDIO": "12",
  "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "13",
  "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "14",
  "UCB0CLK/P2.2": "15",
  "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "16",
  "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "17",
  "VCORE": "18",
  "DVSS": "19",
  "DVCC": "20",
  "PJ.4/XIN": "21",
  "PJ.5/XOUT": "22",
  "AVSS": "23",
  "AVCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.1/DMAE0/RTCCLK/CD0/VeREF-/A0/P1.0": "bidirectional", "TA0.2/TA1CLK/CDOUT/CD1/VeREF+/A1/P1.1": "bidirectional", "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "bidirectional", "TA1.2/UCB0STE/CD3/A3/P1.3": "bidirectional", "TB0.1/UCA0STE/CD4/A4/P1.4": "bidirectional", "TB0.2/UCA0CLK/CD5/A5/P1.5": "bidirectional", "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "bidirectional", "PJ.1/TDI/TCLK/MCLK/CD7": "bidirectional", "PJ.2/TMS/ACLK/CD8": "bidirectional", "PJ.3/TCK/CD9": "bidirectional", "TEST/SBWTCK": "input", "~{RST}/NMI/SBWTDIO": "input", "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "input", "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "input", "UCB0CLK/P2.2": "input", "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "input", "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "input", VCORE: "input", DVSS: "power_in", DVCC: "power_in", "PJ.4/XIN": "input", "PJ.5/XOUT": "input", AVSS: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430FR5734IRGE";
  override referencePrefix = "U";
}

/**
 * 16kB FRAM, 1kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430FR5736IRGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024C*.
 * @see http://www.ti.com/lit/ds/symlink/msp430fr5736.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024C_VQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 */
export class MSP430FR5736IRGE extends Component.withPins({
  "TA0.1/DMAE0/RTCCLK/P1.0": "1",
  "TA0.2/TA1CLK/CDOUT/P1.1": "2",
  "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "3",
  "TA1.2/UCB0STE/CD3/A3/P1.3": "4",
  "TB0.1/UCA0STE/CD4/A4/P1.4": "5",
  "TB0.2/UCA0CLK/CD5/A5/P1.5": "6",
  "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "7",
  "PJ.1/TDI/TCLK/MCLK/CD7": "8",
  "PJ.2/TMS/ACLK/CD8": "9",
  "PJ.3/TCK/CD9": "10",
  "TEST/SBWTCK": "11",
  "~{RST}/NMI/SBWTDIO": "12",
  "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "13",
  "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "14",
  "UCB0CLK/P2.2": "15",
  "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "16",
  "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "17",
  "VCORE": "18",
  "DVSS": "19",
  "DVCC": "20",
  "PJ.4/XIN": "21",
  "PJ.5/XOUT": "22",
  "AVSS": "23",
  "AVCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.1/DMAE0/RTCCLK/P1.0": "bidirectional", "TA0.2/TA1CLK/CDOUT/P1.1": "bidirectional", "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "bidirectional", "TA1.2/UCB0STE/CD3/A3/P1.3": "bidirectional", "TB0.1/UCA0STE/CD4/A4/P1.4": "bidirectional", "TB0.2/UCA0CLK/CD5/A5/P1.5": "bidirectional", "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "bidirectional", "PJ.1/TDI/TCLK/MCLK/CD7": "bidirectional", "PJ.2/TMS/ACLK/CD8": "bidirectional", "PJ.3/TCK/CD9": "bidirectional", "TEST/SBWTCK": "input", "~{RST}/NMI/SBWTDIO": "input", "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "input", "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "input", "UCB0CLK/P2.2": "input", "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "input", "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "input", VCORE: "input", DVSS: "power_in", DVCC: "power_in", "PJ.4/XIN": "input", "PJ.5/XOUT": "input", AVSS: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430FR5736IRGE";
  override referencePrefix = "U";
}

/**
 * 16kB FRAM, 1kB SRAM, QFN-24
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430FR5738IRGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024C*.
 * @see http://www.ti.com/lit/ds/symlink/msp430fr5738.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024C_VQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 */
export class MSP430FR5738IRGE extends Component.withPins({
  "TA0.1/DMAE0/RTCCLK/CD0/VeREF-/A0/P1.0": "1",
  "TA0.2/TA1CLK/CDOUT/CD1/VeREF+/A1/P1.1": "2",
  "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "3",
  "TA1.2/UCB0STE/CD3/A3/P1.3": "4",
  "TB0.1/UCA0STE/CD4/A4/P1.4": "5",
  "TB0.2/UCA0CLK/CD5/A5/P1.5": "6",
  "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "7",
  "PJ.1/TDI/TCLK/MCLK/CD7": "8",
  "PJ.2/TMS/ACLK/CD8": "9",
  "PJ.3/TCK/CD9": "10",
  "TEST/SBWTCK": "11",
  "~{RST}/NMI/SBWTDIO": "12",
  "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "13",
  "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "14",
  "UCB0CLK/P2.2": "15",
  "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "16",
  "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "17",
  "VCORE": "18",
  "DVSS": "19",
  "DVCC": "20",
  "PJ.4/XIN": "21",
  "PJ.5/XOUT": "22",
  "AVSS": "23",
  "AVCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.1/DMAE0/RTCCLK/CD0/VeREF-/A0/P1.0": "bidirectional", "TA0.2/TA1CLK/CDOUT/CD1/VeREF+/A1/P1.1": "bidirectional", "TA1.1/TA0CLK/CDOUT/CD2/A2/P1.2": "bidirectional", "TA1.2/UCB0STE/CD3/A3/P1.3": "bidirectional", "TB0.1/UCA0STE/CD4/A4/P1.4": "bidirectional", "TB0.2/UCA0CLK/CD5/A5/P1.5": "bidirectional", "PJ.0/TDO/TB0OUTH/SMCLK/CD6": "bidirectional", "PJ.1/TDI/TCLK/MCLK/CD7": "bidirectional", "PJ.2/TMS/ACLK/CD8": "bidirectional", "PJ.3/TCK/CD9": "bidirectional", "TEST/SBWTCK": "input", "~{RST}/NMI/SBWTDIO": "input", "TB0CLK/UCA0TXD/UCA0SIMO/ACLK/P2.0": "input", "TB0.0/UCA0RXD/UCA0SOMI/P2.1": "input", "UCB0CLK/P2.2": "input", "TA0.0/UCB0SIMO/UCB0SDA/P1.6": "input", "TA1.0/UCB0SOMI/UCB0SCL/P1.7": "input", VCORE: "input", DVSS: "power_in", DVCC: "power_in", "PJ.4/XIN": "input", "PJ.5/XOUT": "input", AVSS: "power_in", AVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430FR5738IRGE";
  override referencePrefix = "U";
}

/**
 * 512B Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2001IN14`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2001.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class MSP430G2001IN14 extends Component.withPins({
  "VCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/P1.4": "6",
  "TA0.0/TMS/P1.5": "7",
  "TA0.1/TDI/TCLK/P1.6": "8",
  "TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/TCLK/P1.6": "bidirectional", "TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2001IN14";
  override referencePrefix = "U";
}

/**
 * 512B Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2001IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2001.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2001IPW14 extends Component.withPins({
  "VCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/P1.4": "6",
  "TA0.0/TMS/P1.5": "7",
  "TA0.1/TDI/TCLK/P1.6": "8",
  "TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/TCLK/P1.6": "bidirectional", "TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2001IPW14";
  override referencePrefix = "U";
}

/**
 * 512B Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2001IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2001.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2001IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/P1.0": "1",
  "TA0.0/P1.1": "2",
  "TA0.1/P1.2": "3",
  "P1.3": "4",
  "SMCLK/TCK/P1.4": "5",
  "TA0.0/TMS/P1.5": "6",
  "TA0.1/TDI/TCLK/P1.6": "7",
  "TDO/TDI/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "DVSS": "14",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/TCLK/P1.6": "bidirectional", "TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2001IRSA16";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2101IN14`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2101.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class MSP430G2101IN14 extends Component.withPins({
  "VCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/P1.4": "6",
  "TA0.0/TMS/P1.5": "7",
  "TA0.1/TDI/TCLK/P1.6": "8",
  "TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/TCLK/P1.6": "bidirectional", "TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2101IN14";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2101IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2101.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2101IPW14 extends Component.withPins({
  "VCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/P1.4": "6",
  "TA0.0/TMS/P1.5": "7",
  "TA0.1/TDI/TCLK/P1.6": "8",
  "TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/TCLK/P1.6": "bidirectional", "TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2101IPW14";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2101IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2101.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2101IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/P1.0": "1",
  "TA0.0/P1.1": "2",
  "TA0.1/P1.2": "3",
  "P1.3": "4",
  "SMCLK/TCK/P1.4": "5",
  "TA0.0/TMS/P1.5": "6",
  "TA0.1/TDI/TCLK/P1.6": "7",
  "TDO/TDI/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "DVSS": "14",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/TCLK/P1.6": "bidirectional", "TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2101IRSA16";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2102IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2102.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2102IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/TA0.2/P1.4": "6",
  "TMS/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/TA0.2/P1.4": "bidirectional", "TMS/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2102IN20";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2102IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2102.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2102IPW14 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/TA0.2/P1.4": "6",
  "TMS/SCLK/TA0.0/P1.5": "7",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "8",
  "SDI/SDA/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/TA0.2/P1.4": "bidirectional", "TMS/SCLK/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2102IPW14";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2102IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2102.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2102IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/TA0.2/P1.4": "6",
  "TMS/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/TA0.2/P1.4": "bidirectional", "TMS/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2102IPW20";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2102IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2102.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2102IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/P1.0": "1",
  "TA0.0/P1.1": "2",
  "TA0.1/P1.2": "3",
  "P1.3": "4",
  "SMCLK/TCK/P1.4": "5",
  "TMS/SCLK/TA0.0/P1.5": "6",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "7",
  "SDI/SDA/TDO/TDI/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/SCLK/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2102IRSA16";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2111IN14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2111.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2111IN14 extends Component.withPins({
  "VCC": "1",
  "CA0/TA0CLK/ACLK/P1.0": "2",
  "CA1/TA0.0/P1.1": "3",
  "CA2/TA0.1/P1.2": "4",
  "CAOUT/CA3/ADC10CLK/P1.3": "5",
  "CA4/SMCLK/TCK/P1.4": "6",
  "CA5/TA0.0/TMS/P1.5": "7",
  "CA6/TA0.1/TDI/TCLK/P1.6": "8",
  "CA7/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "CA0/TA0CLK/ACLK/P1.0": "bidirectional", "CA1/TA0.0/P1.1": "bidirectional", "CA2/TA0.1/P1.2": "bidirectional", "CAOUT/CA3/ADC10CLK/P1.3": "bidirectional", "CA4/SMCLK/TCK/P1.4": "bidirectional", "CA5/TA0.0/TMS/P1.5": "bidirectional", "CA6/TA0.1/TDI/TCLK/P1.6": "bidirectional", "CA7/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2111IN14";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2111IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2111.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2111IPW14 extends Component.withPins({
  "VCC": "1",
  "CA0/TA0CLK/ACLK/P1.0": "2",
  "CA1/TA0.0/P1.1": "3",
  "CA2/TA0.1/P1.2": "4",
  "CAOUT/CA3/ADC10CLK/P1.3": "5",
  "CA4/SMCLK/TCK/P1.4": "6",
  "CA5/TA0.0/TMS/P1.5": "7",
  "CA6/TA0.1/TDI/TCLK/P1.6": "8",
  "CA7/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "CA0/TA0CLK/ACLK/P1.0": "bidirectional", "CA1/TA0.0/P1.1": "bidirectional", "CA2/TA0.1/P1.2": "bidirectional", "CAOUT/CA3/ADC10CLK/P1.3": "bidirectional", "CA4/SMCLK/TCK/P1.4": "bidirectional", "CA5/TA0.0/TMS/P1.5": "bidirectional", "CA6/TA0.1/TDI/TCLK/P1.6": "bidirectional", "CA7/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2111IPW14";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2111IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2111.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2111IRSA16 extends Component.withPins({
  "ACLK/TA0CLK/CA0/P1.0": "1",
  "TA0.0/CA1/P1.1": "2",
  "TA0.1/CA2/P1.2": "3",
  "CAOUT/CA3/P1.3": "4",
  "TCK/SMCLK/CA4/P1.4": "5",
  "TMS/TA0.0/CA5/P1.5": "6",
  "TDI/TCLK/TA0.1/CA6/P1.6": "7",
  "TDO/TDI/CAOUT/CA7/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "DVSS": "14",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "ACLK/TA0CLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/CA4/P1.4": "bidirectional", "TMS/TA0.0/CA5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2111IRSA16";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2112IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2112.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2112IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/CA1/P1.1": "3",
  "TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2112IN20";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2112IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2112.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2112IPW14 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/CA1/P1.1": "3",
  "TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/P1.5": "7",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "8",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2112IPW14";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2112IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2112.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2112IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/CA1/P1.1": "3",
  "TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2112IPW20";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2112IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2112.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2112IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/CA0/P1.0": "1",
  "TA0.0/CA1/P1.1": "2",
  "TA0.1/CA2/P1.2": "3",
  "CAOUT/CA3/P1.3": "4",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "5",
  "TMS/SCLK/TA0.0/CA5/P1.5": "6",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "7",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2112IRSA16";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2113IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2153.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2113IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2113IPW20";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2121IN14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2121.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2121IN14 extends Component.withPins({
  "DVCC": "1",
  "ACLK/TACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "TCK/SMCLK/P1.4": "6",
  "TMS/SCLK/TA0.0/P1.5": "7",
  "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "8",
  "TDI/TDO/SDI/SDA/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "ACLK/TACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/SCLK/TA0.0/P1.5": "bidirectional", "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "bidirectional", "TDI/TDO/SDI/SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2121IN14";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2121IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2121.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2121IPW14 extends Component.withPins({
  "DVCC": "1",
  "ACLK/TACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "TCK/SMCLK/P1.4": "6",
  "TMS/SCLK/TA0.0/P1.5": "7",
  "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "8",
  "TDI/TDO/SDI/SDA/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "ACLK/TACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/SCLK/TA0.0/P1.5": "bidirectional", "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "bidirectional", "TDI/TDO/SDI/SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2121IPW14";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2121IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2121.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2121IRSA16 extends Component.withPins({
  "ACLK/TACLK/P1.0": "1",
  "TA0.0/P1.1": "2",
  "TA0.1/P1.2": "3",
  "P1.3": "4",
  "TCK/SMCLK/P1.4": "5",
  "TMS/SCLK/TA0.0/P1.5": "6",
  "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "7",
  "TDI/TDO/SDI/SDA/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "DVSS_13": "13",
  "DVSS_14": "14",
  "DVCC_15": "15",
  "DVCC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "ACLK/TACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/SCLK/TA0.0/P1.5": "bidirectional", "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "bidirectional", "TDI/TDO/SDI/SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS_13: "power_in", DVSS_14: "power_in", DVCC_15: "power_in", DVCC_16: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2121IRSA16";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2131IN14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2131.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2131IN14 extends Component.withPins({
  "DVCC": "1",
  "ACLK/TACLK/A0/P1.0": "2",
  "TA0.0/A1/P1.1": "3",
  "TA0.1/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/A5/P1.5": "7",
  "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "8",
  "TDI/TDO/SDI/SDA/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "ACLK/TACLK/A0/P1.0": "bidirectional", "TA0.0/A1/P1.1": "bidirectional", "TA0.1/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/A5/P1.5": "bidirectional", "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "bidirectional", "TDI/TDO/SDI/SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2131IN14";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2131IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2131.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2131IPW14 extends Component.withPins({
  "DVCC": "1",
  "ACLK/TACLK/A0/P1.0": "2",
  "TA0.0/A1/P1.1": "3",
  "TA0.1/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/A5/P1.5": "7",
  "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "8",
  "TDI/TDO/SDI/SDA/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "ACLK/TACLK/A0/P1.0": "bidirectional", "TA0.0/A1/P1.1": "bidirectional", "TA0.1/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/A5/P1.5": "bidirectional", "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "bidirectional", "TDI/TDO/SDI/SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2131IPW14";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2131IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2131.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2131IRSA16 extends Component.withPins({
  "ACLK/TACLK/A0/P1.0": "1",
  "TA0.0/A1/P1.1": "2",
  "TA0.1/A2/P1.2": "3",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "4",
  "TCK/SMCLK/VREF+/VeREF+/A4/P1.4": "5",
  "TMS/SCLK/TA0.0/A5/P1.5": "6",
  "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "7",
  "TDI/TDO/SDI/SDA/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "DVSS_13": "13",
  "DVSS_14": "14",
  "DVCC_15": "15",
  "DVCC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "ACLK/TACLK/A0/P1.0": "bidirectional", "TA0.0/A1/P1.1": "bidirectional", "TA0.1/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/A5/P1.5": "bidirectional", "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "bidirectional", "TDI/TDO/SDI/SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS_13: "power_in", DVSS_14: "power_in", DVCC_15: "power_in", DVCC_16: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2131IRSA16";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2132IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2132.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2132IN20 extends Component.withPins({
  "DVCC": "1",
  "A0/ACLK/TA0CLK/P1.0": "2",
  "A1/TA0.0/P1.1": "3",
  "A2/TA0.1/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "6",
  "TMS/A5/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "A0/ACLK/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "bidirectional", "TMS/A5/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2132IN20";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2132IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2132.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2132IPW14 extends Component.withPins({
  "DVCC": "1",
  "ACLK/A0/TA0CLK/P1.0": "2",
  "A1/TA0.0/P1.1": "3",
  "A2/TA0.1/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "SMCLK/TCK/A4/VREF+/VeREF+/TA0.2/P1.4": "6",
  "TMS/SCLK/A5/TA0.0/P1.5": "7",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "8",
  "SDI/SDA/TDO/TDI/A7/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "ACLK/A0/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "SMCLK/TCK/A4/VREF+/VeREF+/TA0.2/P1.4": "bidirectional", "TMS/SCLK/A5/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2132IPW14";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2132IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2132.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2132IPW20 extends Component.withPins({
  "DVCC": "1",
  "A0/ACLK/TA0CLK/P1.0": "2",
  "A1/TA0.0/P1.1": "3",
  "A2/TA0.1/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "6",
  "TMS/A5/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "A0/ACLK/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "bidirectional", "TMS/A5/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2132IPW20";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2132IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2132.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2132IRSA16 extends Component.withPins({
  "ACLK/A0/TA0CLK/P1.0": "1",
  "A1/TA0.0/P1.1": "2",
  "A2/TA0.1/P1.2": "3",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "4",
  "SMCLK/TCK/VREF+/VeREF+/A4/P1.4": "5",
  "TMS/SCLK/A5/TA0.0/P1.5": "6",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "7",
  "SDI/SDA/TDO/TDI/A7/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "ACLK/A0/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "SMCLK/TCK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/SCLK/A5/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2132IRSA16";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2152IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2152.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2152IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/CA1/A1/P1.1": "3",
  "TA0.1/CA2/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "5",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/A5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/CA1/A1/P1.1": "bidirectional", "TA0.1/CA2/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2152IN20";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2152IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2152.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2152IPW14 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/CA1/A1/P1.1": "3",
  "TA0.1/CA2/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "5",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/A5/P1.5": "7",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "8",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/CA1/A1/P1.1": "bidirectional", "TA0.1/CA2/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/A5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2152IPW14";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2152IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2152.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2152IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/CA1/A1/P1.1": "3",
  "TA0.1/CA2/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "5",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/A5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/CA1/A1/P1.1": "bidirectional", "TA0.1/CA2/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2152IPW20";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2152IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2152.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2152IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/A0/CA0/P1.0": "1",
  "TA0.0/A1/CA1/P1.1": "2",
  "TA0.1/A2/CA2/P1.2": "3",
  "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "4",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/A4/CA4/P1.4": "5",
  "TMS/TA0.0/SCLK/A5/CA5/P1.5": "6",
  "TDI/TCLK/TA0.1/SDO/SCL/A6/CA6/P1.6": "7",
  "TDO/TDI/CAOUT/SDI/SDA/A7/CA7/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/A0/CA0/P1.0": "bidirectional", "TA0.0/A1/CA1/P1.1": "bidirectional", "TA0.1/A2/CA2/P1.2": "bidirectional", "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/A4/CA4/P1.4": "bidirectional", "TMS/TA0.0/SCLK/A5/CA5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/A6/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/SDI/SDA/A7/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2152IRSA16";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2153IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2153.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2153IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "4",
  "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "bidirectional", "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2153IN20";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2153IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2153.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2153IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "4",
  "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "bidirectional", "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2153IPW20";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 256B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2153IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2153.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2153IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/A0/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "4",
  "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK/CAOUT": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "22",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "SBWTCK/TEST": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/A0/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "bidirectional", "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2153IPW28";
  override referencePrefix = "U";
}

/**
 * 1kB Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2153IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2153.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2153IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "2",
  "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK/CAOUT": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "21",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "SBWTCK/TEST": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/A0/CA0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "bidirectional", "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/A0/CA0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2153IRHB32";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2201IN14`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2201.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class MSP430G2201IN14 extends Component.withPins({
  "VCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/P1.4": "6",
  "TA0.0/TMS/P1.5": "7",
  "TA0.1/TDI/TCLK/P1.6": "8",
  "TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/TCLK/P1.6": "bidirectional", "TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2201IN14";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2201IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2201.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2201IPW14 extends Component.withPins({
  "VCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/P1.4": "6",
  "TA0.0/TMS/P1.5": "7",
  "TA0.1/TDI/TCLK/P1.6": "8",
  "TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/TCLK/P1.6": "bidirectional", "TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2201IPW14";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2201IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2201.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2201IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/P1.0": "1",
  "TA0.0/P1.1": "2",
  "TA0.1/P1.2": "3",
  "P1.3": "4",
  "SMCLK/TCK/P1.4": "5",
  "TA0.0/TMS/P1.5": "6",
  "TA0.1/TDI/TCLK/P1.6": "7",
  "TDO/TDI/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "DVSS": "14",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TA0.0/TMS/P1.5": "bidirectional", "TA0.1/TDI/TCLK/P1.6": "bidirectional", "TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2201IRSA16";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2202IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2202.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2202IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/TA0.2/P1.4": "6",
  "TMS/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/TA0.2/P1.4": "bidirectional", "TMS/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2202IN20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2202IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2202.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2202IPW14 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/TA0.2/P1.4": "6",
  "TMS/SCLK/TA0.0/P1.5": "7",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "8",
  "SDI/SDA/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/TA0.2/P1.4": "bidirectional", "TMS/SCLK/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2202IPW14";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2202IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2202.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2202IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/TA0.2/P1.4": "6",
  "TMS/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/TA0.2/P1.4": "bidirectional", "TMS/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2202IPW20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2202IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2202.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2202IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/P1.0": "1",
  "TA0.0/P1.1": "2",
  "TA0.1/P1.2": "3",
  "P1.3": "4",
  "SMCLK/TCK/P1.4": "5",
  "TMS/SCLK/TA0.0/P1.5": "6",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "7",
  "SDI/SDA/TDO/TDI/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/SCLK/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2202IRSA16";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2203IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2203.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2203IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "4",
  "P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2203IN20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2203IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2203.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2203IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "4",
  "P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2203IPW20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2203IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2203.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2203IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "4",
  "P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "22",
  "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "TEST/SBWTCK": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2203IPW28";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2203IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2203.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2203IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "2",
  "P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "21",
  "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "TEST/SBWTCK": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/CA0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2203IRHB32";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, SOIC-8
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2210ID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2210.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MSP430G2210ID extends Component.withPins({
  "DVCC": "1",
  "TA0.1/CA2/P1.2": "4",
  "TA0.0/CA5/P1.5": "7",
  "TA0.1/CA6/P1.6": "14",
  "CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0.1/CA2/P1.2": "bidirectional", "TA0.0/CA5/P1.5": "bidirectional", "TA0.1/CA6/P1.6": "bidirectional", "CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2210ID";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2211IN14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2211.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2211IN14 extends Component.withPins({
  "VCC": "1",
  "CA0/TA0CLK/ACLK/P1.0": "2",
  "CA1/TA0.0/P1.1": "3",
  "CA2/TA0.1/P1.2": "4",
  "CAOUT/CA3/ADC10CLK/P1.3": "5",
  "CA4/SMCLK/TCK/P1.4": "6",
  "CA5/TA0.0/TMS/P1.5": "7",
  "CA6/TA0.1/TDI/TCLK/P1.6": "8",
  "CA7/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "CA0/TA0CLK/ACLK/P1.0": "bidirectional", "CA1/TA0.0/P1.1": "bidirectional", "CA2/TA0.1/P1.2": "bidirectional", "CAOUT/CA3/ADC10CLK/P1.3": "bidirectional", "CA4/SMCLK/TCK/P1.4": "bidirectional", "CA5/TA0.0/TMS/P1.5": "bidirectional", "CA6/TA0.1/TDI/TCLK/P1.6": "bidirectional", "CA7/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2211IN14";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2211IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2211.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2211IPW14 extends Component.withPins({
  "VCC": "1",
  "CA0/TA0CLK/ACLK/P1.0": "2",
  "CA1/TA0.0/P1.1": "3",
  "CA2/TA0.1/P1.2": "4",
  "CAOUT/CA3/ADC10CLK/P1.3": "5",
  "CA4/SMCLK/TCK/P1.4": "6",
  "CA5/TA0.0/TMS/P1.5": "7",
  "CA6/TA0.1/TDI/TCLK/P1.6": "8",
  "CA7/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "VSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", "CA0/TA0CLK/ACLK/P1.0": "bidirectional", "CA1/TA0.0/P1.1": "bidirectional", "CA2/TA0.1/P1.2": "bidirectional", "CAOUT/CA3/ADC10CLK/P1.3": "bidirectional", "CA4/SMCLK/TCK/P1.4": "bidirectional", "CA5/TA0.0/TMS/P1.5": "bidirectional", "CA6/TA0.1/TDI/TCLK/P1.6": "bidirectional", "CA7/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2211IPW14";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2211IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2211.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2211IRSA16 extends Component.withPins({
  "ACLK/TA0CLK/CA0/P1.0": "1",
  "TA0.0/CA1/P1.1": "2",
  "TA0.1/CA2/P1.2": "3",
  "CAOUT/CA3/P1.3": "4",
  "TCK/SMCLK/CA4/P1.4": "5",
  "TMS/TA0.0/CA5/P1.5": "6",
  "TDI/TCLK/TA0.1/CA6/P1.6": "7",
  "TDO/TDI/CAOUT/CA7/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "DVSS": "14",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "ACLK/TA0CLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/CA4/P1.4": "bidirectional", "TMS/TA0.0/CA5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2211IRSA16";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2212IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2212.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2212IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/CA1/P1.1": "3",
  "TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2212IN20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2212IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2212.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2212IPW14 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/CA1/P1.1": "3",
  "TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/P1.5": "7",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "8",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2212IPW14";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2212IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2212.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2212IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/CA1/P1.1": "3",
  "TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2212IPW20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2212IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2212.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2212IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/CA0/P1.0": "1",
  "TA0.0/CA1/P1.1": "2",
  "TA0.1/CA2/P1.2": "3",
  "CAOUT/CA3/P1.3": "4",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "5",
  "TMS/SCLK/TA0.0/CA5/P1.5": "6",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "7",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2212IRSA16";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2213IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2213.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2213IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2213IN20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2213IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2213.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2213IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2213IPW20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2213IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2213.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2213IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK/CAOUT": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "22",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "SBWTCK/TEST": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2213IPW28";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2213IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2213.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2213IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "2",
  "CAOUT/CA3/P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK/CAOUT": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "21",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "SBWTCK/TEST": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/CA0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2213IRHB32";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2221IN14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2221.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2221IN14 extends Component.withPins({
  "DVCC": "1",
  "ACLK/TACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "TCK/SMCLK/P1.4": "6",
  "TMS/SCLK/TA0.0/P1.5": "7",
  "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "8",
  "TDI/TDO/SDI/SDA/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "ACLK/TACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/SCLK/TA0.0/P1.5": "bidirectional", "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "bidirectional", "TDI/TDO/SDI/SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2221IN14";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2221IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2221.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2221IPW14 extends Component.withPins({
  "DVCC": "1",
  "ACLK/TACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "TCK/SMCLK/P1.4": "6",
  "TMS/SCLK/TA0.0/P1.5": "7",
  "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "8",
  "TDI/TDO/SDI/SDA/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "ACLK/TACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/SCLK/TA0.0/P1.5": "bidirectional", "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "bidirectional", "TDI/TDO/SDI/SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2221IPW14";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2221IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2221.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2221IRSA16 extends Component.withPins({
  "ACLK/TACLK/P1.0": "1",
  "TA0.0/P1.1": "2",
  "TA0.1/P1.2": "3",
  "P1.3": "4",
  "TCK/SMCLK/P1.4": "5",
  "TMS/SCLK/TA0.0/P1.5": "6",
  "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "7",
  "TDI/TDO/SDI/SDA/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "DVSS_13": "13",
  "DVSS_14": "14",
  "DVCC_15": "15",
  "DVCC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "ACLK/TACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/SCLK/TA0.0/P1.5": "bidirectional", "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "bidirectional", "TDI/TDO/SDI/SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS_13: "power_in", DVSS_14: "power_in", DVCC_15: "power_in", DVCC_16: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2221IRSA16";
  override referencePrefix = "U";
}

/**
 * 2kB + 256B Flash, 128B RAM, SOIC-8
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2230ID`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2230.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MSP430G2230ID extends Component.withPins({
  "DVCC": "1",
  "TA0.1/A2/P1.2": "2",
  "TA0.0/SCLK/A5/P1.5": "3",
  "TA0.1/SDO/SCL/A6/P1.6": "4",
  "SDI/SDA/A7/P1.7": "5",
  "~{RST}/NMI/SBWTDIO": "6",
  "TEST/SBWTCK": "7",
  "DVSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0.1/A2/P1.2": "bidirectional", "TA0.0/SCLK/A5/P1.5": "bidirectional", "TA0.1/SDO/SCL/A6/P1.6": "bidirectional", "SDI/SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2230ID";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 128B RAM, DIP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2231IN14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2231.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2231IN14 extends Component.withPins({
  "DVCC": "1",
  "ACLK/TACLK/A0/P1.0": "2",
  "TA0.0/A1/P1.1": "3",
  "TA0.1/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/A5/P1.5": "7",
  "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "8",
  "TDI/TDO/SDI/SDA/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "ACLK/TACLK/A0/P1.0": "bidirectional", "TA0.0/A1/P1.1": "bidirectional", "TA0.1/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/A5/P1.5": "bidirectional", "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "bidirectional", "TDI/TDO/SDI/SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2231IN14";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 128B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2231IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2231.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2231IPW14 extends Component.withPins({
  "DVCC": "1",
  "ACLK/TACLK/A0/P1.0": "2",
  "TA0.0/A1/P1.1": "3",
  "TA0.1/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/A5/P1.5": "7",
  "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "8",
  "TDI/TDO/SDI/SDA/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "ACLK/TACLK/A0/P1.0": "bidirectional", "TA0.0/A1/P1.1": "bidirectional", "TA0.1/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/A5/P1.5": "bidirectional", "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "bidirectional", "TDI/TDO/SDI/SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2231IPW14";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 128B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2231IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2231.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2231IRSA16 extends Component.withPins({
  "ACLK/TACLK/A0/P1.0": "1",
  "TA0.0/A1/P1.1": "2",
  "TA0.1/A2/P1.2": "3",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "4",
  "TCK/SMCLK/VREF+/VeREF+/A4/P1.4": "5",
  "TMS/SCLK/TA0.0/A5/P1.5": "6",
  "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "7",
  "TDI/TDO/SDI/SDA/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "DVSS_13": "13",
  "DVSS_14": "14",
  "DVCC_15": "15",
  "DVCC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "ACLK/TACLK/A0/P1.0": "bidirectional", "TA0.0/A1/P1.1": "bidirectional", "TA0.1/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/A5/P1.5": "bidirectional", "TDI/SDO/SCL/TCLK/TA0.1/P1.6": "bidirectional", "TDI/TDO/SDI/SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS_13: "power_in", DVSS_14: "power_in", DVCC_15: "power_in", DVCC_16: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2231IRSA16";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2232IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2232.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2232IN20 extends Component.withPins({
  "DVCC": "1",
  "A0/ACLK/TA0CLK/P1.0": "2",
  "A1/TA0.0/P1.1": "3",
  "A2/TA0.1/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "6",
  "TMS/A5/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "A0/ACLK/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "bidirectional", "TMS/A5/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2232IN20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2232IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2232.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2232IPW14 extends Component.withPins({
  "DVCC": "1",
  "ACLK/A0/TA0CLK/P1.0": "2",
  "A1/TA0.0/P1.1": "3",
  "A2/TA0.1/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "SMCLK/TCK/A4/VREF+/VeREF+/TA0.2/P1.4": "6",
  "TMS/SCLK/A5/TA0.0/P1.5": "7",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "8",
  "SDI/SDA/TDO/TDI/A7/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "ACLK/A0/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "SMCLK/TCK/A4/VREF+/VeREF+/TA0.2/P1.4": "bidirectional", "TMS/SCLK/A5/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2232IPW14";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2232IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2232.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2232IPW20 extends Component.withPins({
  "DVCC": "1",
  "A0/ACLK/TA0CLK/P1.0": "2",
  "A1/TA0.0/P1.1": "3",
  "A2/TA0.1/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "6",
  "TMS/A5/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "A0/ACLK/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "bidirectional", "TMS/A5/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2232IPW20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2232IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2232.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2232IRSA16 extends Component.withPins({
  "ACLK/A0/TA0CLK/P1.0": "1",
  "A1/TA0.0/P1.1": "2",
  "A2/TA0.1/P1.2": "3",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "4",
  "SMCLK/TCK/VREF+/VeREF+/A4/P1.4": "5",
  "TMS/SCLK/A5/TA0.0/P1.5": "6",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "7",
  "SDI/SDA/TDO/TDI/A7/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "ACLK/A0/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "SMCLK/TCK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/SCLK/A5/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2232IRSA16";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2233IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2233.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2233IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2233IN20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2233IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2233.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2233IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2233IPW20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2233IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2233.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2233IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "22",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "TEST/SBWTCK": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2233IPW28";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2233IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2233.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2233IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "2",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "21",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "TEST/SBWTCK": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/CA0/A0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2233IRHB32";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2252IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2252.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2252IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/CA1/A1/P1.1": "3",
  "TA0.1/CA2/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "5",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/A5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/CA1/A1/P1.1": "bidirectional", "TA0.1/CA2/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2252IN20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2252IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2252.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2252IPW14 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/CA1/A1/P1.1": "3",
  "TA0.1/CA2/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "5",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/A5/P1.5": "7",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "8",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/CA1/A1/P1.1": "bidirectional", "TA0.1/CA2/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/A5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2252IPW14";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2252IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2252.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2252IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/CA1/A1/P1.1": "3",
  "TA0.1/CA2/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "5",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/A5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/CA1/A1/P1.1": "bidirectional", "TA0.1/CA2/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2252IPW20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2252IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2252.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2252IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/A0/CA0/P1.0": "1",
  "TA0.0/A1/CA1/P1.1": "2",
  "TA0.1/A2/CA2/P1.2": "3",
  "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "4",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/A4/CA4/P1.4": "5",
  "TMS/TA0.0/SCLK/A5/CA5/P1.5": "6",
  "TDI/TCLK/TA0.1/SDO/SCL/A6/CA6/P1.6": "7",
  "TDO/TDI/CAOUT/SDI/SDA/A7/CA7/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/A0/CA0/P1.0": "bidirectional", "TA0.0/A1/CA1/P1.1": "bidirectional", "TA0.1/A2/CA2/P1.2": "bidirectional", "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/A4/CA4/P1.4": "bidirectional", "TMS/TA0.0/SCLK/A5/CA5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/A6/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/SDI/SDA/A7/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2252IRSA16";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2253IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2253.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2253IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "4",
  "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "bidirectional", "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2253IN20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2253IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2253.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2253IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "4",
  "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "bidirectional", "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2253IPW20";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2253IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2253.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2253IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/A0/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "4",
  "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK/CAOUT": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "22",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "SBWTCK/TEST": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/A0/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "bidirectional", "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2253IPW28";
  override referencePrefix = "U";
}

/**
 * 2kB Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2253IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2253.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2253IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "2",
  "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK/CAOUT": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "21",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "SBWTCK/TEST": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/A0/CA0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "bidirectional", "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/A0/CA0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2253IRHB32";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2302IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2302.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2302IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/TA0.2/P1.4": "6",
  "TMS/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/TA0.2/P1.4": "bidirectional", "TMS/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2302IN20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2302IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2302.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2302IPW14 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/TA0.2/P1.4": "6",
  "TMS/SCLK/TA0.0/P1.5": "7",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "8",
  "SDI/SDA/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/TA0.2/P1.4": "bidirectional", "TMS/SCLK/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2302IPW14";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2302IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2302.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2302IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/TA0.2/P1.4": "6",
  "TMS/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/TA0.2/P1.4": "bidirectional", "TMS/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2302IPW20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2302IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2302.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2302IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/P1.0": "1",
  "TA0.0/P1.1": "2",
  "TA0.1/P1.2": "3",
  "P1.3": "4",
  "SMCLK/TCK/P1.4": "5",
  "TMS/SCLK/TA0.0/P1.5": "6",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "7",
  "SDI/SDA/TDO/TDI/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/SCLK/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2302IRSA16";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2303IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2303.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2303IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "4",
  "P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2303IN20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2303IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2303.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2303IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "4",
  "P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2303IPW20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2303IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2303.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2303IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "4",
  "P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "22",
  "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "TEST/SBWTCK": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2303IPW28";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2303IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2303.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2303IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "2",
  "P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "21",
  "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "TEST/SBWTCK": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/CA0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2303IRHB32";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2312IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2312.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2312IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/CA1/P1.1": "3",
  "TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2312IN20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2312IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2312.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2312IPW14 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/CA1/P1.1": "3",
  "TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/P1.5": "7",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "8",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2312IPW14";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2312IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2312.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2312IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/CA1/P1.1": "3",
  "TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2312IPW20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2312IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2312.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2312IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/CA0/P1.0": "1",
  "TA0.0/CA1/P1.1": "2",
  "TA0.1/CA2/P1.2": "3",
  "CAOUT/CA3/P1.3": "4",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "5",
  "TMS/SCLK/TA0.0/CA5/P1.5": "6",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "7",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2312IRSA16";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2313IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2313.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2313IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2313IN20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2313IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2313.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2313IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2313IPW20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2313IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2313.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2313IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK/CAOUT": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "22",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "SBWTCK/TEST": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2313IPW28";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2313IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2313.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2313IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "2",
  "CAOUT/CA3/P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK/CAOUT": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "21",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "SBWTCK/TEST": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/CA0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2313IRHB32";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2332IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2332.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2332IN20 extends Component.withPins({
  "DVCC": "1",
  "A0/ACLK/TA0CLK/P1.0": "2",
  "A1/TA0.0/P1.1": "3",
  "A2/TA0.1/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "6",
  "TMS/A5/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "A0/ACLK/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "bidirectional", "TMS/A5/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2332IN20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2332IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2332.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2332IPW14 extends Component.withPins({
  "DVCC": "1",
  "ACLK/A0/TA0CLK/P1.0": "2",
  "A1/TA0.0/P1.1": "3",
  "A2/TA0.1/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "SMCLK/TCK/A4/VREF+/VeREF+/TA0.2/P1.4": "6",
  "TMS/SCLK/A5/TA0.0/P1.5": "7",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "8",
  "SDI/SDA/TDO/TDI/A7/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "ACLK/A0/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "SMCLK/TCK/A4/VREF+/VeREF+/TA0.2/P1.4": "bidirectional", "TMS/SCLK/A5/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2332IPW14";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2332IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2332.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2332IPW20 extends Component.withPins({
  "DVCC": "1",
  "A0/ACLK/TA0CLK/P1.0": "2",
  "A1/TA0.0/P1.1": "3",
  "A2/TA0.1/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "6",
  "TMS/A5/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "A0/ACLK/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "bidirectional", "TMS/A5/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2332IPW20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2332IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2332.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2332IRSA16 extends Component.withPins({
  "ACLK/A0/TA0CLK/P1.0": "1",
  "A1/TA0.0/P1.1": "2",
  "A2/TA0.1/P1.2": "3",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "4",
  "SMCLK/TCK/VREF+/VeREF+/A4/P1.4": "5",
  "TMS/SCLK/A5/TA0.0/P1.5": "6",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "7",
  "SDI/SDA/TDO/TDI/A7/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "ACLK/A0/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "SMCLK/TCK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/SCLK/A5/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2332IRSA16";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2333IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2333.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2333IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2333IN20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2333IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2333.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2333IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2333IPW20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2333IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2333.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2333IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "22",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "TEST/SBWTCK": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2333IPW28";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2333IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2333.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2333IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "2",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "21",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "TEST/SBWTCK": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/CA0/A0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2333IRHB32";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2352IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2352.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2352IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/CA1/A1/P1.1": "3",
  "TA0.1/CA2/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "5",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/A5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/CA1/A1/P1.1": "bidirectional", "TA0.1/CA2/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2352IN20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2352IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2352.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2352IPW14 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/CA1/A1/P1.1": "3",
  "TA0.1/CA2/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "5",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/A5/P1.5": "7",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "8",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/CA1/A1/P1.1": "bidirectional", "TA0.1/CA2/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/A5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2352IPW14";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2352IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2352.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2352IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/CA1/A1/P1.1": "3",
  "TA0.1/CA2/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "5",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/A5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/CA1/A1/P1.1": "bidirectional", "TA0.1/CA2/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2352IPW20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2352IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2352.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2352IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/A0/CA0/P1.0": "1",
  "TA0.0/A1/CA1/P1.1": "2",
  "TA0.1/A2/CA2/P1.2": "3",
  "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "4",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/A4/CA4/P1.4": "5",
  "TMS/TA0.0/SCLK/A5/CA5/P1.5": "6",
  "TDI/TCLK/TA0.1/SDO/SCL/A6/CA6/P1.6": "7",
  "TDO/TDI/CAOUT/SDI/SDA/A7/CA7/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/A0/CA0/P1.0": "bidirectional", "TA0.0/A1/CA1/P1.1": "bidirectional", "TA0.1/A2/CA2/P1.2": "bidirectional", "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/A4/CA4/P1.4": "bidirectional", "TMS/TA0.0/SCLK/A5/CA5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/A6/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/SDI/SDA/A7/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2352IRSA16";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2353IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2353.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2353IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "4",
  "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "bidirectional", "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2353IN20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2353IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2353.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2353IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "4",
  "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "bidirectional", "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2353IPW20";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2353IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2353.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2353IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/A0/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "4",
  "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK/CAOUT": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "22",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "SBWTCK/TEST": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/A0/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "bidirectional", "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2353IPW28";
  override referencePrefix = "U";
}

/**
 * 4kB Flash, 256B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2353IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2353.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2353IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "2",
  "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK/CAOUT": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "21",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "SBWTCK/TEST": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/A0/CA0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "bidirectional", "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/A0/CA0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2353IRHB32";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2402IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2402.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2402IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/TA0.2/P1.4": "6",
  "TMS/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/TA0.2/P1.4": "bidirectional", "TMS/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2402IN20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2402IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2402.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2402IPW14 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/TA0.2/P1.4": "6",
  "TMS/SCLK/TA0.0/P1.5": "7",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "8",
  "SDI/SDA/TDO/TDI/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/TA0.2/P1.4": "bidirectional", "TMS/SCLK/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2402IPW14";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2402IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2402.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2402IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/P1.0": "2",
  "TA0.0/P1.1": "3",
  "TA0.1/P1.2": "4",
  "P1.3": "5",
  "SMCLK/TCK/TA0.2/P1.4": "6",
  "TMS/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/TA0.2/P1.4": "bidirectional", "TMS/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2402IPW20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2402IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2402.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2402IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/P1.0": "1",
  "TA0.0/P1.1": "2",
  "TA0.1/P1.2": "3",
  "P1.3": "4",
  "SMCLK/TCK/P1.4": "5",
  "TMS/SCLK/TA0.0/P1.5": "6",
  "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "7",
  "SDI/SDA/TDO/TDI/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/SCLK/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2402IRSA16";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2403IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2403.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2403IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "4",
  "P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2403IN20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2403IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2403.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2403IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "4",
  "P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2403IPW20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2403IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2403.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2403IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "4",
  "P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "22",
  "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "TEST/SBWTCK": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2403IPW28";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2403IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2403.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2403IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "2",
  "P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "21",
  "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "TEST/SBWTCK": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/CA0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/P1.2": "bidirectional", "P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2403IRHB32";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2412IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2412.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2412IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/CA1/P1.1": "3",
  "TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2412IN20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2412IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2412.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2412IPW14 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/CA1/P1.1": "3",
  "TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/P1.5": "7",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "8",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2412IPW14";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2412IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2412.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2412IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/CA1/P1.1": "3",
  "TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2412IPW20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2412IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2412.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2412IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/CA0/P1.0": "1",
  "TA0.0/CA1/P1.1": "2",
  "TA0.1/CA2/P1.2": "3",
  "CAOUT/CA3/P1.3": "4",
  "TCK/SMCLK/TA0.2/CA4/P1.4": "5",
  "TMS/SCLK/TA0.0/CA5/P1.5": "6",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "7",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/CA1/P1.1": "bidirectional", "TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/CA4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2412IRSA16";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2413IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2413.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2413IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2413IN20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2413IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2413.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2413IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2413IPW20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2413IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2413.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2413IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK/CAOUT": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "22",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "SBWTCK/TEST": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2413IPW28";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2413IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2413.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2413IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "2",
  "CAOUT/CA3/P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK/CAOUT": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "21",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "SBWTCK/TEST": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/CA0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2413IRHB32";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2432IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2432.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2432IN20 extends Component.withPins({
  "DVCC": "1",
  "A0/ACLK/TA0CLK/P1.0": "2",
  "A1/TA0.0/P1.1": "3",
  "A2/TA0.1/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "6",
  "TMS/A5/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "A0/ACLK/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "bidirectional", "TMS/A5/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2432IN20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2432IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2432.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2432IPW14 extends Component.withPins({
  "DVCC": "1",
  "ACLK/A0/TA0CLK/P1.0": "2",
  "A1/TA0.0/P1.1": "3",
  "A2/TA0.1/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "SMCLK/TCK/A4/VREF+/VeREF+/TA0.2/P1.4": "6",
  "TMS/SCLK/A5/TA0.0/P1.5": "7",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "8",
  "SDI/SDA/TDO/TDI/A7/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "ACLK/A0/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "SMCLK/TCK/A4/VREF+/VeREF+/TA0.2/P1.4": "bidirectional", "TMS/SCLK/A5/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2432IPW14";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2432IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2432.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2432IPW20 extends Component.withPins({
  "DVCC": "1",
  "A0/ACLK/TA0CLK/P1.0": "2",
  "A1/TA0.0/P1.1": "3",
  "A2/TA0.1/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "6",
  "TMS/A5/TA0.0/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "14",
  "SDI/SDA/TDO/TDI/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "A0/ACLK/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/VREF+/VeREF+/A4/SMCLK/TA0.2/P1.4": "bidirectional", "TMS/A5/TA0.0/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2432IPW20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2432IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2432.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2432IRSA16 extends Component.withPins({
  "ACLK/A0/TA0CLK/P1.0": "1",
  "A1/TA0.0/P1.1": "2",
  "A2/TA0.1/P1.2": "3",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "4",
  "SMCLK/TCK/VREF+/VeREF+/A4/P1.4": "5",
  "TMS/SCLK/A5/TA0.0/P1.5": "6",
  "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "7",
  "SDI/SDA/TDO/TDI/A7/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "ACLK/A0/TA0CLK/P1.0": "bidirectional", "A1/TA0.0/P1.1": "bidirectional", "A2/TA0.1/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "SMCLK/TCK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/SCLK/A5/TA0.0/P1.5": "bidirectional", "SDO/SCL/TDI/TCLK/A6/TA0.1/P1.6": "bidirectional", "SDI/SDA/TDO/TDI/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2432IRSA16";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2433IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2433.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2433IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2433IN20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2433IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2433.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2433IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2433IPW20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2433IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2433.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2433IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "22",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "TEST/SBWTCK": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2433IPW28";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2433IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2433.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2433IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "2",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "21",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "TEST/SBWTCK": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/CA0/A0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2433IRHB32";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 512B RAM, TSSOP-38
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2444IDA38`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2444.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-38_6.1x12.5mm_P0.65mm.
 */
export class MSP430G2444IDA38 extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "Rosc/P2.5": "3",
  "DVSS": "4",
  "XOUT/P2.7": "5",
  "XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "ACLK/A0/P2.0": "8",
  "TAINCLK/SMCLK/A1/P2.1": "9",
  "TA0/A2/P2.2": "10",
  "P3.0/A5/UCB0STE/UCA0CLK": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "AVSS": "15",
  "AVCC": "16",
  "P4.0/TB0": "17",
  "P4.1/TB1": "18",
  "P4.2/TB2": "19",
  "P4.3/A12/TB0": "20",
  "P4.4/A13/TB1": "21",
  "P4.5/A14/TB2": "22",
  "P4.6/A15/TBOUTH": "23",
  "P4.7/TBCLK": "24",
  "P3.4/UCA0TXD/UCA0SIMO": "25",
  "P3.5/UCA0RXD/UCA0SOMI": "26",
  "P3.6/A6": "27",
  "P3.7/A7": "28",
  "TA1/VREF-/VeREF-/A3/P2.3": "29",
  "TA2/VREF+/VeREF+/A4/P2.4": "30",
  "TACLK/ADC10CLK/P1.0": "31",
  "TA0/P1.1": "32",
  "TA1/P1.2": "33",
  "TA2/P1.3": "34",
  "TCK/SMCLK/P1.4": "35",
  "TMS/TA0/P1.5": "36",
  "TDI/TCLK/TA1/P1.6": "37",
  "TDO/TDI/TA2/P1.7": "38",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "Rosc/P2.5": "bidirectional", DVSS: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "ACLK/A0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/A5/UCB0STE/UCA0CLK": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/A12/TB0": "bidirectional", "P4.4/A13/TB1": "bidirectional", "P4.5/A14/TB2": "bidirectional", "P4.6/A15/TBOUTH": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2444IDA38";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 512B RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2444IRHA40`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2444.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430G2444IRHA40 extends Component.withPins({
  "DVSS_1": "1",
  "XOUT/P2.7": "2",
  "XIN/P2.6": "3",
  "DVSS_4": "4",
  "~{RST}/NMI/SBWTDIO": "5",
  "ACLK/A0/P2.0": "6",
  "TAINCLK/SMCLK/A1/P2.1": "7",
  "TA0/A2/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "AVSS": "13",
  "AVCC": "14",
  "P4.0/TB0": "15",
  "P4.1/TB1": "16",
  "P4.2/TB2": "17",
  "P4.3/TB0/A12": "18",
  "P4.4/TB1/A13": "19",
  "P4.5/TB2/A14": "20",
  "P4.6/TBOUTH/A15": "21",
  "P4.7/TBCLK": "22",
  "P3.4/UCA0TXD/UCA0SIMO": "23",
  "P3.5/UCA0RXD/UCA0SOMI": "24",
  "P3.6/A6": "25",
  "P3.7/A7": "26",
  "TA1/VREF-/VeREF-/A3/P2.3": "27",
  "TA2/VREF+/VeREF+/A4/P2.4": "28",
  "TACLK/ADC10CLK/P1.0": "29",
  "TA0/P1.1": "30",
  "TA1/P1.2": "31",
  "TA2/P1.3": "32",
  "SMCLK/TCK/P1.4": "33",
  "TMS/TA0/P1.5": "34",
  "TDI/TCLK/TA1/P1.6": "35",
  "TDO/TDI/TA2/P1.7": "36",
  "SBWTCK/TEST": "37",
  "DVCC_38": "38",
  "DVCC_39": "39",
  "ROSC/P2.5": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS_1: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_4: "power_in", "~{RST}/NMI/SBWTDIO": "input", "ACLK/A0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12": "bidirectional", "P4.4/TB1/A13": "bidirectional", "P4.5/TB2/A14": "bidirectional", "P4.6/TBOUTH/A15": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC_38: "power_in", DVCC_39: "power_in", "ROSC/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2444IRHA40";
  override referencePrefix = "U";
}

/**
 * 8kB + 256B Flash, 512B RAM, BGA-49
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2444IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.33x3.488mm*Layout7x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2444.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-49_3.33x3.488mm_Layout7x7_P0.4mm.
 */
export class MSP430G2444IYFF extends Component.withPins({
  "XOUT/P2.7": "A1",
  "XIN/P2.6": "A2",
  "DVSS_A3": "A3",
  "ACLK/A0/P2.0": "A4",
  "TA0/A2/P2.2": "A5",
  "P3.1/UCB0SIMO/UCB0SDA": "A6",
  "P3.2/UCB0SOMI/UCB0SCL": "A7",
  "DVSS_B1": "B1",
  "DVSS_B2": "B2",
  "~{RST}/NMI/SBWTDIO": "B3",
  "TAINCLK/SMCLK/A1/P2.1": "B4",
  "P3.0/A5/UCB0STE/UCA0CLK": "B5",
  "P3.3/UCB0CLK/UCA0STE": "B6",
  "AVSS_B7": "B7",
  "DVCC_C1": "C1",
  "ROSC/P2.5": "C2",
  "DVSS_C3": "C3",
  "DVSS_C4": "C4",
  "AVSS_C5": "C5",
  "AVCC_C6": "C6",
  "AVCC_C7": "C7",
  "SBWTCK/TEST": "D1",
  "TDO/TDI/TA2/P1.7": "D2",
  "DVCC_D3": "D3",
  "DVCC_D4": "D4",
  "AVCC_D5": "D5",
  "P4.0/TB0": "D6",
  "P4.1/TB1": "D7",
  "TMS/TA0/P1.5": "E1",
  "TA1/P1.2": "E2",
  "TDI/TCLK/TA1/P1.6": "E3",
  "DVCC_E4": "E4",
  "DVCC_E5": "E5",
  "P4.2/TB2": "E6",
  "P4.3/A12/TB0": "E7",
  "TCK/SMCLK/P1.4": "F1",
  "TACLK/ADC10CLK/P1.0": "F2",
  "TA1/VREF-/VeREF-/A3/P2.3": "F3",
  "P3.6/A6": "F4",
  "P4.7/TBCLK": "F5",
  "P4.5/A14/TB2": "F6",
  "P4.4/A13/TB1": "F7",
  "TA2/P1.3": "G1",
  "TA0/P1.1": "G2",
  "TA2/VREF+/VeREF+/A4/P2.4": "G3",
  "P3.7/A7": "G4",
  "P3.5/UCA0RXD/UCA0SOMI": "G5",
  "P3.4/UCA0TXD/UCA0SIMO": "G6",
  "P4.6/A15/TBOUTH": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_A3: "power_in", "ACLK/A0/P2.0": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", DVSS_B1: "power_in", DVSS_B2: "power_in", "~{RST}/NMI/SBWTDIO": "input", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "P3.0/A5/UCB0STE/UCA0CLK": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS_B7: "power_in", DVCC_C1: "power_in", "ROSC/P2.5": "bidirectional", DVSS_C3: "power_in", DVSS_C4: "power_in", AVSS_C5: "power_in", AVCC_C6: "power_in", AVCC_C7: "power_in", "SBWTCK/TEST": "input", "TDO/TDI/TA2/P1.7": "bidirectional", DVCC_D3: "power_in", DVCC_D4: "power_in", AVCC_D5: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TA1/P1.2": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", DVCC_E4: "power_in", DVCC_E5: "power_in", "P4.2/TB2": "bidirectional", "P4.3/A12/TB0": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "P3.6/A6": "bidirectional", "P4.7/TBCLK": "bidirectional", "P4.5/A14/TB2": "bidirectional", "P4.4/A13/TB1": "bidirectional", "TA2/P1.3": "bidirectional", "TA0/P1.1": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "P3.7/A7": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P4.6/A15/TBOUTH": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2444IYFF";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2452IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2452.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2452IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/CA1/A1/P1.1": "3",
  "TA0.1/CA2/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "5",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/A5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/CA1/A1/P1.1": "bidirectional", "TA0.1/CA2/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2452IN20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, TSSOP-14
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2452IPW14`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2452.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MSP430G2452IPW14 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/CA1/A1/P1.1": "3",
  "TA0.1/CA2/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "5",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/A5/P1.5": "7",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "8",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "9",
  "~{RST}/NMI/SBWTDIO": "10",
  "SBWTCK/TEST": "11",
  "P2.7/XOUT": "12",
  "P2.6/XIN/TA0.1": "13",
  "DVSS": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/CA1/A1/P1.1": "bidirectional", "TA0.1/CA2/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/A5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2452IPW14";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2452IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2452.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2452IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/CA1/A1/P1.1": "3",
  "TA0.1/CA2/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "5",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/SCLK/TA0.0/CA5/A5/P1.5": "7",
  "P2.0": "8",
  "P2.1": "9",
  "P2.2": "10",
  "P2.3": "11",
  "P2.4": "12",
  "P2.5": "13",
  "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "14",
  "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "SBWTCK/TEST": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/CA1/A1/P1.1": "bidirectional", "TA0.1/CA2/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/CAOUT/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/SCLK/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0": "bidirectional", "P2.1": "bidirectional", "P2.2": "bidirectional", "P2.3": "bidirectional", "P2.4": "bidirectional", "P2.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/CA6/A6/P1.6": "bidirectional", "TDO/TDI/SDI/SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2452IPW20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 256B RAM, QFN-16
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2452IRSA16`. Reference prefix: `U`.
 * Footprint filters: Texas*RSA*EP2.7x2.7mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2452.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 */
export class MSP430G2452IRSA16 extends Component.withPins({
  "TA0CLK/ACLK/A0/CA0/P1.0": "1",
  "TA0.0/A1/CA1/P1.1": "2",
  "TA0.1/A2/CA2/P1.2": "3",
  "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "4",
  "TCK/SMCLK/TA0.2/VREF+/VeREF+/A4/CA4/P1.4": "5",
  "TMS/TA0.0/SCLK/A5/CA5/P1.5": "6",
  "TDI/TCLK/TA0.1/SDO/SCL/A6/CA6/P1.6": "7",
  "TDO/TDI/CAOUT/SDI/SDA/A7/CA7/P1.7": "8",
  "~{RST}/NMI/SBWTDIO": "9",
  "SBWTCK/TEST": "10",
  "P2.7/XOUT": "11",
  "P2.6/XIN/TA0.1": "12",
  "AVSS": "13",
  "DVSS": "14",
  "AVCC": "15",
  "DVCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0CLK/ACLK/A0/CA0/P1.0": "bidirectional", "TA0.0/A1/CA1/P1.1": "bidirectional", "TA0.1/A2/CA2/P1.2": "bidirectional", "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "bidirectional", "TCK/SMCLK/TA0.2/VREF+/VeREF+/A4/CA4/P1.4": "bidirectional", "TMS/TA0.0/SCLK/A5/CA5/P1.5": "bidirectional", "TDI/TCLK/TA0.1/SDO/SCL/A6/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/SDI/SDA/A7/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2452IRSA16";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2453IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2453.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2453IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "4",
  "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "bidirectional", "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2453IN20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2453IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2453.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2453IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "4",
  "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "bidirectional", "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2453IPW20";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2453IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2453.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2453IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/A0/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "4",
  "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK/CAOUT": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "22",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "SBWTCK/TEST": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/A0/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "bidirectional", "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2453IPW28";
  override referencePrefix = "U";
}

/**
 * 8kB Flash, 512B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2453IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2453.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2453IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "2",
  "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK/CAOUT": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "21",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "SBWTCK/TEST": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/A0/CA0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "bidirectional", "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/A0/CA0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2453IRHB32";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2513IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2513.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2513IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2513IN20";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2513IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2513.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2513IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2513IPW20";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2513IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2513.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2513IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "4",
  "CAOUT/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK/CAOUT": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "22",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "SBWTCK/TEST": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2513IPW28";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2513IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2513.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2513IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "2",
  "CAOUT/CA3/P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK/CAOUT": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "21",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "SBWTCK/TEST": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/CA0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/CA2/P1.2": "bidirectional", "CAOUT/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/CA0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2513IRHB32";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2533IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2533.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2533IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2533IN20";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2533IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2533.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2533IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2533IPW20";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2533IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2533.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2533IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "4",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "22",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "TEST/SBWTCK": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2533IPW28";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2533IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2533.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2533IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "2",
  "ADC10CLK/VREF-/VeREF-/A3/P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "21",
  "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "TEST/SBWTCK": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/CA0/A0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/A1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/P1.2": "bidirectional", "ADC10CLK/VREF-/VeREF-/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2533IRHB32";
  override referencePrefix = "U";
}

/**
 * 16kB + 256B Flash, 512B RAM, TSSOP-38
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2544IDA38`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2544.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-38_6.1x12.5mm_P0.65mm.
 */
export class MSP430G2544IDA38 extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "Rosc/P2.5": "3",
  "DVSS": "4",
  "XOUT/P2.7": "5",
  "XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "ACLK/A0/P2.0": "8",
  "TAINCLK/SMCLK/A1/P2.1": "9",
  "TA0/A2/P2.2": "10",
  "P3.0/A5/UCB0STE/UCA0CLK": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "AVSS": "15",
  "AVCC": "16",
  "P4.0/TB0": "17",
  "P4.1/TB1": "18",
  "P4.2/TB2": "19",
  "P4.3/A12/TB0": "20",
  "P4.4/A13/TB1": "21",
  "P4.5/A14/TB2": "22",
  "P4.6/A15/TBOUTH": "23",
  "P4.7/TBCLK": "24",
  "P3.4/UCA0TXD/UCA0SIMO": "25",
  "P3.5/UCA0RXD/UCA0SOMI": "26",
  "P3.6/A6": "27",
  "P3.7/A7": "28",
  "TA1/VREF-/VeREF-/A3/P2.3": "29",
  "TA2/VREF+/VeREF+/A4/P2.4": "30",
  "TACLK/ADC10CLK/P1.0": "31",
  "TA0/P1.1": "32",
  "TA1/P1.2": "33",
  "TA2/P1.3": "34",
  "TCK/SMCLK/P1.4": "35",
  "TMS/TA0/P1.5": "36",
  "TDI/TCLK/TA1/P1.6": "37",
  "TDO/TDI/TA2/P1.7": "38",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "Rosc/P2.5": "bidirectional", DVSS: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "ACLK/A0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/A5/UCB0STE/UCA0CLK": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/A12/TB0": "bidirectional", "P4.4/A13/TB1": "bidirectional", "P4.5/A14/TB2": "bidirectional", "P4.6/A15/TBOUTH": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2544IDA38";
  override referencePrefix = "U";
}

/**
 * 16kB + 256B Flash, 512B RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2544IRHA40`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2544.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430G2544IRHA40 extends Component.withPins({
  "DVSS_1": "1",
  "XOUT/P2.7": "2",
  "XIN/P2.6": "3",
  "DVSS_4": "4",
  "~{RST}/NMI/SBWTDIO": "5",
  "ACLK/A0/P2.0": "6",
  "TAINCLK/SMCLK/A1/P2.1": "7",
  "TA0/A2/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "AVSS": "13",
  "AVCC": "14",
  "P4.0/TB0": "15",
  "P4.1/TB1": "16",
  "P4.2/TB2": "17",
  "P4.3/TB0/A12": "18",
  "P4.4/TB1/A13": "19",
  "P4.5/TB2/A14": "20",
  "P4.6/TBOUTH/A15": "21",
  "P4.7/TBCLK": "22",
  "P3.4/UCA0TXD/UCA0SIMO": "23",
  "P3.5/UCA0RXD/UCA0SOMI": "24",
  "P3.6/A6": "25",
  "P3.7/A7": "26",
  "TA1/VREF-/VeREF-/A3/P2.3": "27",
  "TA2/VREF+/VeREF+/A4/P2.4": "28",
  "TACLK/ADC10CLK/P1.0": "29",
  "TA0/P1.1": "30",
  "TA1/P1.2": "31",
  "TA2/P1.3": "32",
  "SMCLK/TCK/P1.4": "33",
  "TMS/TA0/P1.5": "34",
  "TDI/TCLK/TA1/P1.6": "35",
  "TDO/TDI/TA2/P1.7": "36",
  "SBWTCK/TEST": "37",
  "DVCC_38": "38",
  "DVCC_39": "39",
  "ROSC/P2.5": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS_1: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_4: "power_in", "~{RST}/NMI/SBWTDIO": "input", "ACLK/A0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12": "bidirectional", "P4.4/TB1/A13": "bidirectional", "P4.5/TB2/A14": "bidirectional", "P4.6/TBOUTH/A15": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC_38: "power_in", DVCC_39: "power_in", "ROSC/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2544IRHA40";
  override referencePrefix = "U";
}

/**
 * 16kB + 256B Flash, 512B RAM, BGA-49
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2544IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.33x3.488mm*Layout7x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2544.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-49_3.33x3.488mm_Layout7x7_P0.4mm.
 */
export class MSP430G2544IYFF extends Component.withPins({
  "XOUT/P2.7": "A1",
  "XIN/P2.6": "A2",
  "DVSS_A3": "A3",
  "ACLK/A0/P2.0": "A4",
  "TA0/A2/P2.2": "A5",
  "P3.1/UCB0SIMO/UCB0SDA": "A6",
  "P3.2/UCB0SOMI/UCB0SCL": "A7",
  "DVSS_B1": "B1",
  "DVSS_B2": "B2",
  "~{RST}/NMI/SBWTDIO": "B3",
  "TAINCLK/SMCLK/A1/P2.1": "B4",
  "P3.0/A5/UCB0STE/UCA0CLK": "B5",
  "P3.3/UCB0CLK/UCA0STE": "B6",
  "AVSS_B7": "B7",
  "DVCC_C1": "C1",
  "ROSC/P2.5": "C2",
  "DVSS_C3": "C3",
  "DVSS_C4": "C4",
  "AVSS_C5": "C5",
  "AVCC_C6": "C6",
  "AVCC_C7": "C7",
  "SBWTCK/TEST": "D1",
  "TDO/TDI/TA2/P1.7": "D2",
  "DVCC_D3": "D3",
  "DVCC_D4": "D4",
  "AVCC_D5": "D5",
  "P4.0/TB0": "D6",
  "P4.1/TB1": "D7",
  "TMS/TA0/P1.5": "E1",
  "TA1/P1.2": "E2",
  "TDI/TCLK/TA1/P1.6": "E3",
  "DVCC_E4": "E4",
  "DVCC_E5": "E5",
  "P4.2/TB2": "E6",
  "P4.3/A12/TB0": "E7",
  "TCK/SMCLK/P1.4": "F1",
  "TACLK/ADC10CLK/P1.0": "F2",
  "TA1/VREF-/VeREF-/A3/P2.3": "F3",
  "P3.6/A6": "F4",
  "P4.7/TBCLK": "F5",
  "P4.5/A14/TB2": "F6",
  "P4.4/A13/TB1": "F7",
  "TA2/P1.3": "G1",
  "TA0/P1.1": "G2",
  "TA2/VREF+/VeREF+/A4/P2.4": "G3",
  "P3.7/A7": "G4",
  "P3.5/UCA0RXD/UCA0SOMI": "G5",
  "P3.4/UCA0TXD/UCA0SIMO": "G6",
  "P4.6/A15/TBOUTH": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_A3: "power_in", "ACLK/A0/P2.0": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", DVSS_B1: "power_in", DVSS_B2: "power_in", "~{RST}/NMI/SBWTDIO": "input", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "P3.0/A5/UCB0STE/UCA0CLK": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS_B7: "power_in", DVCC_C1: "power_in", "ROSC/P2.5": "bidirectional", DVSS_C3: "power_in", DVSS_C4: "power_in", AVSS_C5: "power_in", AVCC_C6: "power_in", AVCC_C7: "power_in", "SBWTCK/TEST": "input", "TDO/TDI/TA2/P1.7": "bidirectional", DVCC_D3: "power_in", DVCC_D4: "power_in", AVCC_D5: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TA1/P1.2": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", DVCC_E4: "power_in", DVCC_E5: "power_in", "P4.2/TB2": "bidirectional", "P4.3/A12/TB0": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "P3.6/A6": "bidirectional", "P4.7/TBCLK": "bidirectional", "P4.5/A14/TB2": "bidirectional", "P4.4/A13/TB1": "bidirectional", "TA2/P1.3": "bidirectional", "TA0/P1.1": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "P3.7/A7": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P4.6/A15/TBOUTH": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2544IYFF";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, DIP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2553IN20`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2553.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DIP:DIP-20_W7.62mm.
 */
export class MSP430G2553IN20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "4",
  "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "bidirectional", "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2553IN20";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, TSSOP-20
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2553IPW20`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2553.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class MSP430G2553IPW20 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/CA0/A0/P1.0": "2",
  "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "3",
  "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "4",
  "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "6",
  "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "7",
  "P2.0/TA1.0": "8",
  "P2.1/TA1.1": "9",
  "P2.2/TA1.1": "10",
  "P2.3/TA1.0": "11",
  "P2.4/TA1.2": "12",
  "P2.5/TA1.2": "13",
  "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "14",
  "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "15",
  "~{RST}/NMI/SBWTDIO": "16",
  "TEST/SBWTCK": "17",
  "P2.7/XOUT": "18",
  "P2.6/XIN/TA0.1": "19",
  "DVSS": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/CA0/A0/P1.0": "bidirectional", "UCA0RXD/UCA0SOMI/TA0.0/CA1/A1/P1.1": "bidirectional", "UCA0TXD/UCA0SIMO/TA0.1/CA2/A2/P1.2": "bidirectional", "CAOUT/VREF-/VeREF-/CA3/A3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/CA4/A4/P1.4": "bidirectional", "TMS/UCB0CLK/UCA0STE/TA0.0/CA5/A5/P1.5": "bidirectional", "P2.0/TA1.0": "bidirectional", "P2.1/TA1.1": "bidirectional", "P2.2/TA1.1": "bidirectional", "P2.3/TA1.0": "bidirectional", "P2.4/TA1.2": "bidirectional", "P2.5/TA1.2": "bidirectional", "TDI/TCLK/UCB0SOMI/UCB0SCL/TA0.1/CA6/A6/P1.6": "bidirectional", "TDO/TDI/UCB0SIMO/UCB0SDA/CAOUT/CA7/A7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TEST/SBWTCK": "input", "P2.7/XOUT": "bidirectional", "P2.6/XIN/TA0.1": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2553IPW20";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, TSSOP-28
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2553IPW28`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2553.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-28_4.4x9.7mm_P0.65mm.
 */
export class MSP430G2553IPW28 extends Component.withPins({
  "DVCC": "1",
  "TA0CLK/ACLK/A0/CA0/P1.0": "2",
  "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "3",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "4",
  "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "5",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "6",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "7",
  "P3.1/TA1.0": "8",
  "P3.0/TA0.2": "9",
  "TA1.0/P2.0": "10",
  "TA1.1/P2.1": "11",
  "TA1.1/P2.2": "12",
  "P3.2/TA1.1": "13",
  "P3.3/TA1.2": "14",
  "P3.4/TA0.0": "15",
  "TA1.0/P2.3": "16",
  "TA1.2/P2.4": "17",
  "TA1.2/P2.5": "18",
  "P3.5/TA0.1": "19",
  "P3.6/TA0.2": "20",
  "P3.7/TA1CLK/CAOUT": "21",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "22",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "23",
  "~{RST}/NMI/SBWTDIO": "24",
  "SBWTCK/TEST": "25",
  "XOUT/P2.7": "26",
  "TA0.1/XIN/P2.6": "27",
  "DVSS": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVCC: "power_in", "TA0CLK/ACLK/A0/CA0/P1.0": "bidirectional", "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "bidirectional", "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", DVSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2553IPW28";
  override referencePrefix = "U";
}

/**
 * 16kB Flash, 512B RAM, QFN-32
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2553IRHB32`. Reference prefix: `U`.
 * Footprint filters: Texas*VQFN*1EP*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2553.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class MSP430G2553IRHB32 extends Component.withPins({
  "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "1",
  "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "2",
  "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "3",
  "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "4",
  "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "5",
  "P3.1/TA1.0": "6",
  "P3.0/TA0.2": "7",
  "TA1.0/P2.0": "9",
  "TA1.1/P2.1": "10",
  "TA1.1/P2.2": "11",
  "P3.2/TA1.1": "12",
  "P3.3/TA1.2": "13",
  "P3.4/TA0.0": "14",
  "TA1.0/P2.3": "15",
  "TA1.2/P2.4": "16",
  "TA1.2/P2.5": "17",
  "P3.5/TA0.1": "18",
  "P3.6/TA0.2": "19",
  "P3.7/TA1CLK/CAOUT": "20",
  "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "21",
  "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "22",
  "~{RST}/NMI/SBWTDIO": "23",
  "SBWTCK/TEST": "24",
  "XOUT/P2.7": "25",
  "TA0.1/XIN/P2.6": "26",
  "AVSS": "27",
  "DVSS": "28",
  "AVCC": "29",
  "DVCC": "30",
  "TA0CLK/ACLK/A0/CA0/P1.0": "31",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "TA0.0/UCA0RXD/UCA0SOMI/A1/CA1/P1.1": "bidirectional", "TA0.1/UCA0TXD/UCA0SIMO/A2/CA2/P1.2": "bidirectional", "ADC10CLK/CAOUT/VREF-/VeREF-/A3/CA3/P1.3": "bidirectional", "TCK/SMCLK/UCB0STE/UCA0CLK/VREF+/VeREF+/A4/CA4/P1.4": "bidirectional", "TMS/TA0.0/UCB0CLK/UCA0STE/A5/CA5/P1.5": "bidirectional", "P3.1/TA1.0": "bidirectional", "P3.0/TA0.2": "bidirectional", "TA1.0/P2.0": "bidirectional", "TA1.1/P2.1": "bidirectional", "TA1.1/P2.2": "bidirectional", "P3.2/TA1.1": "bidirectional", "P3.3/TA1.2": "bidirectional", "P3.4/TA0.0": "bidirectional", "TA1.0/P2.3": "bidirectional", "TA1.2/P2.4": "bidirectional", "TA1.2/P2.5": "bidirectional", "P3.5/TA0.1": "bidirectional", "P3.6/TA0.2": "bidirectional", "P3.7/TA1CLK/CAOUT": "bidirectional", "TDI/TCLK/TA0.1/UCB0SOMI/UCB0SCL/A6/CA6/P1.6": "bidirectional", "TDO/TDI/CAOUT/UCB0SIMO/UCB0SDA/A7/CA7/P1.7": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "SBWTCK/TEST": "input", "XOUT/P2.7": "bidirectional", "TA0.1/XIN/P2.6": "bidirectional", AVSS: "power_in", DVSS: "power_in", AVCC: "power_in", DVCC: "power_in", "TA0CLK/ACLK/A0/CA0/P1.0": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2553IRHB32";
  override referencePrefix = "U";
}

/**
 * 32kB + 256B Flash, 1kB RAM, TSSOP-38
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2744IDA38`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2744.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-38_6.1x12.5mm_P0.65mm.
 */
export class MSP430G2744IDA38 extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "Rosc/P2.5": "3",
  "DVSS": "4",
  "XOUT/P2.7": "5",
  "XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "ACLK/A0/P2.0": "8",
  "TAINCLK/SMCLK/A1/P2.1": "9",
  "TA0/A2/P2.2": "10",
  "P3.0/A5/UCB0STE/UCA0CLK": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "AVSS": "15",
  "AVCC": "16",
  "P4.0/TB0": "17",
  "P4.1/TB1": "18",
  "P4.2/TB2": "19",
  "P4.3/A12/TB0": "20",
  "P4.4/A13/TB1": "21",
  "P4.5/A14/TB2": "22",
  "P4.6/A15/TBOUTH": "23",
  "P4.7/TBCLK": "24",
  "P3.4/UCA0TXD/UCA0SIMO": "25",
  "P3.5/UCA0RXD/UCA0SOMI": "26",
  "P3.6/A6": "27",
  "P3.7/A7": "28",
  "TA1/VREF-/VeREF-/A3/P2.3": "29",
  "TA2/VREF+/VeREF+/A4/P2.4": "30",
  "TACLK/ADC10CLK/P1.0": "31",
  "TA0/P1.1": "32",
  "TA1/P1.2": "33",
  "TA2/P1.3": "34",
  "TCK/SMCLK/P1.4": "35",
  "TMS/TA0/P1.5": "36",
  "TDI/TCLK/TA1/P1.6": "37",
  "TDO/TDI/TA2/P1.7": "38",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "Rosc/P2.5": "bidirectional", DVSS: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "ACLK/A0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/A5/UCB0STE/UCA0CLK": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/A12/TB0": "bidirectional", "P4.4/A13/TB1": "bidirectional", "P4.5/A14/TB2": "bidirectional", "P4.6/A15/TBOUTH": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2744IDA38";
  override referencePrefix = "U";
}

/**
 * 32kB + 256B Flash, 1kB RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2744IRHA40`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2744.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430G2744IRHA40 extends Component.withPins({
  "DVSS_1": "1",
  "XOUT/P2.7": "2",
  "XIN/P2.6": "3",
  "DVSS_4": "4",
  "~{RST}/NMI/SBWTDIO": "5",
  "ACLK/A0/P2.0": "6",
  "TAINCLK/SMCLK/A1/P2.1": "7",
  "TA0/A2/P2.2": "8",
  "P3.0/UCB0STE/UCA0CLK/A5": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "AVSS": "13",
  "AVCC": "14",
  "P4.0/TB0": "15",
  "P4.1/TB1": "16",
  "P4.2/TB2": "17",
  "P4.3/TB0/A12": "18",
  "P4.4/TB1/A13": "19",
  "P4.5/TB2/A14": "20",
  "P4.6/TBOUTH/A15": "21",
  "P4.7/TBCLK": "22",
  "P3.4/UCA0TXD/UCA0SIMO": "23",
  "P3.5/UCA0RXD/UCA0SOMI": "24",
  "P3.6/A6": "25",
  "P3.7/A7": "26",
  "TA1/VREF-/VeREF-/A3/P2.3": "27",
  "TA2/VREF+/VeREF+/A4/P2.4": "28",
  "TACLK/ADC10CLK/P1.0": "29",
  "TA0/P1.1": "30",
  "TA1/P1.2": "31",
  "TA2/P1.3": "32",
  "SMCLK/TCK/P1.4": "33",
  "TMS/TA0/P1.5": "34",
  "TDI/TCLK/TA1/P1.6": "35",
  "TDO/TDI/TA2/P1.7": "36",
  "SBWTCK/TEST": "37",
  "DVCC_38": "38",
  "DVCC_39": "39",
  "ROSC/P2.5": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS_1: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_4: "power_in", "~{RST}/NMI/SBWTDIO": "input", "ACLK/A0/P2.0": "bidirectional", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.0/UCB0STE/UCA0CLK/A5": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "P4.2/TB2": "bidirectional", "P4.3/TB0/A12": "bidirectional", "P4.4/TB1/A13": "bidirectional", "P4.5/TB2/A14": "bidirectional", "P4.6/TBOUTH/A15": "bidirectional", "P4.7/TBCLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6": "bidirectional", "P3.7/A7": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA0/P1.1": "bidirectional", "TA1/P1.2": "bidirectional", "TA2/P1.3": "bidirectional", "SMCLK/TCK/P1.4": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", "TDO/TDI/TA2/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC_38: "power_in", DVCC_39: "power_in", "ROSC/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2744IRHA40";
  override referencePrefix = "U";
}

/**
 * 32kB + 256B Flash, 1kB RAM, BGA-49
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2744IYFF`. Reference prefix: `U`.
 * Footprint filters: Texas*DSBGA*3.33x3.488mm*Layout7x7*P0.4mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2744.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_BGA:Texas_DSBGA-49_3.33x3.488mm_Layout7x7_P0.4mm.
 */
export class MSP430G2744IYFF extends Component.withPins({
  "XOUT/P2.7": "A1",
  "XIN/P2.6": "A2",
  "DVSS_A3": "A3",
  "ACLK/A0/P2.0": "A4",
  "TA0/A2/P2.2": "A5",
  "P3.1/UCB0SIMO/UCB0SDA": "A6",
  "P3.2/UCB0SOMI/UCB0SCL": "A7",
  "DVSS_B1": "B1",
  "DVSS_B2": "B2",
  "~{RST}/NMI/SBWTDIO": "B3",
  "TAINCLK/SMCLK/A1/P2.1": "B4",
  "P3.0/A5/UCB0STE/UCA0CLK": "B5",
  "P3.3/UCB0CLK/UCA0STE": "B6",
  "AVSS_B7": "B7",
  "DVCC_C1": "C1",
  "ROSC/P2.5": "C2",
  "DVSS_C3": "C3",
  "DVSS_C4": "C4",
  "AVSS_C5": "C5",
  "AVCC_C6": "C6",
  "AVCC_C7": "C7",
  "SBWTCK/TEST": "D1",
  "TDO/TDI/TA2/P1.7": "D2",
  "DVCC_D3": "D3",
  "DVCC_D4": "D4",
  "AVCC_D5": "D5",
  "P4.0/TB0": "D6",
  "P4.1/TB1": "D7",
  "TMS/TA0/P1.5": "E1",
  "TA1/P1.2": "E2",
  "TDI/TCLK/TA1/P1.6": "E3",
  "DVCC_E4": "E4",
  "DVCC_E5": "E5",
  "P4.2/TB2": "E6",
  "P4.3/A12/TB0": "E7",
  "TCK/SMCLK/P1.4": "F1",
  "TACLK/ADC10CLK/P1.0": "F2",
  "TA1/VREF-/VeREF-/A3/P2.3": "F3",
  "P3.6/A6": "F4",
  "P4.7/TBCLK": "F5",
  "P4.5/A14/TB2": "F6",
  "P4.4/A13/TB1": "F7",
  "TA2/P1.3": "G1",
  "TA0/P1.1": "G2",
  "TA2/VREF+/VeREF+/A4/P2.4": "G3",
  "P3.7/A7": "G4",
  "P3.5/UCA0RXD/UCA0SOMI": "G5",
  "P3.4/UCA0TXD/UCA0SIMO": "G6",
  "P4.6/A15/TBOUTH": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_A3: "power_in", "ACLK/A0/P2.0": "bidirectional", "TA0/A2/P2.2": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", DVSS_B1: "power_in", DVSS_B2: "power_in", "~{RST}/NMI/SBWTDIO": "input", "TAINCLK/SMCLK/A1/P2.1": "bidirectional", "P3.0/A5/UCB0STE/UCA0CLK": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS_B7: "power_in", DVCC_C1: "power_in", "ROSC/P2.5": "bidirectional", DVSS_C3: "power_in", DVSS_C4: "power_in", AVSS_C5: "power_in", AVCC_C6: "power_in", AVCC_C7: "power_in", "SBWTCK/TEST": "input", "TDO/TDI/TA2/P1.7": "bidirectional", DVCC_D3: "power_in", DVCC_D4: "power_in", AVCC_D5: "power_in", "P4.0/TB0": "bidirectional", "P4.1/TB1": "bidirectional", "TMS/TA0/P1.5": "bidirectional", "TA1/P1.2": "bidirectional", "TDI/TCLK/TA1/P1.6": "bidirectional", DVCC_E4: "power_in", DVCC_E5: "power_in", "P4.2/TB2": "bidirectional", "P4.3/A12/TB0": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TACLK/ADC10CLK/P1.0": "bidirectional", "TA1/VREF-/VeREF-/A3/P2.3": "bidirectional", "P3.6/A6": "bidirectional", "P4.7/TBCLK": "bidirectional", "P4.5/A14/TB2": "bidirectional", "P4.4/A13/TB1": "bidirectional", "TA2/P1.3": "bidirectional", "TA0/P1.1": "bidirectional", "TA2/VREF+/VeREF+/A4/P2.4": "bidirectional", "P3.7/A7": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P4.6/A15/TBOUTH": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2744IYFF";
  override referencePrefix = "U";
}

/**
 * 32kB Flash, 4kB RAM, TSSOP-38
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2755IDA38`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2755.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-38_6.1x12.5mm_P0.65mm.
 */
export class MSP430G2755IDA38 extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "TA1.0/ROSC/P2.5": "3",
  "DVSS": "4",
  "XOUT/P2.7": "5",
  "XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "TA1CLK/ACLK/A0/P2.0": "8",
  "TA0INCLK/SMCLK/A1/P2.1": "9",
  "TA0.0/A2/P2.2": "10",
  "P3.0/A5/UCB0STE/UCA0CLK": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "AVSS": "15",
  "AVCC": "16",
  "P4.0/CA0/TB0.0": "17",
  "P4.1/CA1/TB0.1": "18",
  "P4.2/CA2/TB0.2": "19",
  "P4.3/A12/CA3/TB0.0": "20",
  "P4.4/A13/CA4/TB0.1": "21",
  "P4.5/A14/CA5/TB0.2": "22",
  "P4.6/A15/CA6/TB0OUTH": "23",
  "P4.7/CA7/TB0CLK": "24",
  "P3.4/UCA0TXD/UCA0SIMO": "25",
  "P3.5/UCA0RXD/UCA0SOMI": "26",
  "P3.6/A6/TA1.1": "27",
  "P3.7/A7/TA1.2": "28",
  "TA0.1/VREF-/VeREF-/A3/P2.3": "29",
  "TA0.2/VREF+/VeREF+/A4/P2.4": "30",
  "TA0CLK/ADC10CLK/P1.0": "31",
  "TA0.0/P1.1": "32",
  "TA0.1/P1.2": "33",
  "TA0.2/P1.3": "34",
  "TCK/SMCLK/P1.4": "35",
  "TMS/TA0.0/P1.5": "36",
  "TDI/TA0.1/P1.6": "37",
  "TDO/TDI/TA0.2/P1.7": "38",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "TA1.0/ROSC/P2.5": "bidirectional", DVSS: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TA1CLK/ACLK/A0/P2.0": "bidirectional", "TA0INCLK/SMCLK/A1/P2.1": "bidirectional", "TA0.0/A2/P2.2": "bidirectional", "P3.0/A5/UCB0STE/UCA0CLK": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/CA0/TB0.0": "bidirectional", "P4.1/CA1/TB0.1": "bidirectional", "P4.2/CA2/TB0.2": "bidirectional", "P4.3/A12/CA3/TB0.0": "bidirectional", "P4.4/A13/CA4/TB0.1": "bidirectional", "P4.5/A14/CA5/TB0.2": "bidirectional", "P4.6/A15/CA6/TB0OUTH": "bidirectional", "P4.7/CA7/TB0CLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.1": "bidirectional", "P3.7/A7/TA1.2": "bidirectional", "TA0.1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA0.2/VREF+/VeREF+/A4/P2.4": "bidirectional", "TA0CLK/ADC10CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/TA0.0/P1.5": "bidirectional", "TDI/TA0.1/P1.6": "bidirectional", "TDO/TDI/TA0.2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2755IDA38";
  override referencePrefix = "U";
}

/**
 * 32kB Flash, 4kB RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2755IRHA40`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2755.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430G2755IRHA40 extends Component.withPins({
  "DVSS_1": "1",
  "XOUT/P2.7": "2",
  "XIN/P2.6": "3",
  "DVSS_4": "4",
  "~{RST}/NMI/SBWTDIO": "5",
  "TA1CLK/ACLK/A0/P2.0": "6",
  "TA0INCLK/SMCLK/A1/P2.1": "7",
  "TA0.0/A2/P2.2": "8",
  "P3.0/A5/UCB0STE/UCA0CLK": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "AVSS": "13",
  "AVCC": "14",
  "P4.0/CA0/TB0.0": "15",
  "P4.1/CA1/TB0.1": "16",
  "P4.2/CA2/TB0.2": "17",
  "P4.3/A12/CA3/TB0.0": "18",
  "P4.4/A13/CA4/TB0.1": "19",
  "P4.5/A14/CA5/TB0.2": "20",
  "P4.6/A15/CA6/TB0OUTH": "21",
  "P4.7/CA7/TB0CLK": "22",
  "P3.4/UCA0TXD/UCA0SIMO": "23",
  "P3.5/UCA0RXD/UCA0SOMI": "24",
  "P3.6/A6/TA1.1": "25",
  "P3.7/A6/TA1.2": "26",
  "TA0.1/VREF-/VeREF-/A3/P2.3": "27",
  "TA0.2/VREF+/VeREF+/A4/P2.4": "28",
  "TA0CLK/ADC10CLK/P1.0": "29",
  "TA0.0/P1.1": "30",
  "TA0.1/P1.2": "31",
  "TA0.2/P1.3": "32",
  "TCK/SMCLK/P1.4": "33",
  "TMS/TA0.0/P1.5": "34",
  "TDI/TA0.1/P1.6": "35",
  "TDO/TDI/TA0.2/P1.7": "36",
  "SBWTCK/TEST": "37",
  "DVCC_38": "38",
  "DVCC_39": "39",
  "TA1.0/ROSC/P2.5": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS_1: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_4: "power_in", "~{RST}/NMI/SBWTDIO": "input", "TA1CLK/ACLK/A0/P2.0": "bidirectional", "TA0INCLK/SMCLK/A1/P2.1": "bidirectional", "TA0.0/A2/P2.2": "bidirectional", "P3.0/A5/UCB0STE/UCA0CLK": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/CA0/TB0.0": "bidirectional", "P4.1/CA1/TB0.1": "bidirectional", "P4.2/CA2/TB0.2": "bidirectional", "P4.3/A12/CA3/TB0.0": "bidirectional", "P4.4/A13/CA4/TB0.1": "bidirectional", "P4.5/A14/CA5/TB0.2": "bidirectional", "P4.6/A15/CA6/TB0OUTH": "bidirectional", "P4.7/CA7/TB0CLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.1": "bidirectional", "P3.7/A6/TA1.2": "bidirectional", "TA0.1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA0.2/VREF+/VeREF+/A4/P2.4": "bidirectional", "TA0CLK/ADC10CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/TA0.0/P1.5": "bidirectional", "TDI/TA0.1/P1.6": "bidirectional", "TDO/TDI/TA0.2/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC_38: "power_in", DVCC_39: "power_in", "TA1.0/ROSC/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2755IRHA40";
  override referencePrefix = "U";
}

/**
 * 48kB Flash, 4kB RAM, TSSOP-38
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2855IDA38`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2855.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-38_6.1x12.5mm_P0.65mm.
 */
export class MSP430G2855IDA38 extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "TA1.0/ROSC/P2.5": "3",
  "DVSS": "4",
  "XOUT/P2.7": "5",
  "XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "TA1CLK/ACLK/A0/P2.0": "8",
  "TA0INCLK/SMCLK/A1/P2.1": "9",
  "TA0.0/A2/P2.2": "10",
  "P3.0/A5/UCB0STE/UCA0CLK": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "AVSS": "15",
  "AVCC": "16",
  "P4.0/CA0/TB0.0": "17",
  "P4.1/CA1/TB0.1": "18",
  "P4.2/CA2/TB0.2": "19",
  "P4.3/A12/CA3/TB0.0": "20",
  "P4.4/A13/CA4/TB0.1": "21",
  "P4.5/A14/CA5/TB0.2": "22",
  "P4.6/A15/CA6/TB0OUTH": "23",
  "P4.7/CA7/TB0CLK": "24",
  "P3.4/UCA0TXD/UCA0SIMO": "25",
  "P3.5/UCA0RXD/UCA0SOMI": "26",
  "P3.6/A6/TA1.1": "27",
  "P3.7/A7/TA1.2": "28",
  "TA0.1/VREF-/VeREF-/A3/P2.3": "29",
  "TA0.2/VREF+/VeREF+/A4/P2.4": "30",
  "TA0CLK/ADC10CLK/P1.0": "31",
  "TA0.0/P1.1": "32",
  "TA0.1/P1.2": "33",
  "TA0.2/P1.3": "34",
  "TCK/SMCLK/P1.4": "35",
  "TMS/TA0.0/P1.5": "36",
  "TDI/TA0.1/P1.6": "37",
  "TDO/TDI/TA0.2/P1.7": "38",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "TA1.0/ROSC/P2.5": "bidirectional", DVSS: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TA1CLK/ACLK/A0/P2.0": "bidirectional", "TA0INCLK/SMCLK/A1/P2.1": "bidirectional", "TA0.0/A2/P2.2": "bidirectional", "P3.0/A5/UCB0STE/UCA0CLK": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/CA0/TB0.0": "bidirectional", "P4.1/CA1/TB0.1": "bidirectional", "P4.2/CA2/TB0.2": "bidirectional", "P4.3/A12/CA3/TB0.0": "bidirectional", "P4.4/A13/CA4/TB0.1": "bidirectional", "P4.5/A14/CA5/TB0.2": "bidirectional", "P4.6/A15/CA6/TB0OUTH": "bidirectional", "P4.7/CA7/TB0CLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.1": "bidirectional", "P3.7/A7/TA1.2": "bidirectional", "TA0.1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA0.2/VREF+/VeREF+/A4/P2.4": "bidirectional", "TA0CLK/ADC10CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/TA0.0/P1.5": "bidirectional", "TDI/TA0.1/P1.6": "bidirectional", "TDO/TDI/TA0.2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2855IDA38";
  override referencePrefix = "U";
}

/**
 * 48kB Flash, 4kB RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2855IRHA40`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2855.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430G2855IRHA40 extends Component.withPins({
  "DVSS_1": "1",
  "XOUT/P2.7": "2",
  "XIN/P2.6": "3",
  "DVSS_4": "4",
  "~{RST}/NMI/SBWTDIO": "5",
  "TA1CLK/ACLK/A0/P2.0": "6",
  "TA0INCLK/SMCLK/A1/P2.1": "7",
  "TA0.0/A2/P2.2": "8",
  "P3.0/A5/UCB0STE/UCA0CLK": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "AVSS": "13",
  "AVCC": "14",
  "P4.0/CA0/TB0.0": "15",
  "P4.1/CA1/TB0.1": "16",
  "P4.2/CA2/TB0.2": "17",
  "P4.3/A12/CA3/TB0.0": "18",
  "P4.4/A13/CA4/TB0.1": "19",
  "P4.5/A14/CA5/TB0.2": "20",
  "P4.6/A15/CA6/TB0OUTH": "21",
  "P4.7/CA7/TB0CLK": "22",
  "P3.4/UCA0TXD/UCA0SIMO": "23",
  "P3.5/UCA0RXD/UCA0SOMI": "24",
  "P3.6/A6/TA1.1": "25",
  "P3.7/A6/TA1.2": "26",
  "TA0.1/VREF-/VeREF-/A3/P2.3": "27",
  "TA0.2/VREF+/VeREF+/A4/P2.4": "28",
  "TA0CLK/ADC10CLK/P1.0": "29",
  "TA0.0/P1.1": "30",
  "TA0.1/P1.2": "31",
  "TA0.2/P1.3": "32",
  "TCK/SMCLK/P1.4": "33",
  "TMS/TA0.0/P1.5": "34",
  "TDI/TA0.1/P1.6": "35",
  "TDO/TDI/TA0.2/P1.7": "36",
  "SBWTCK/TEST": "37",
  "DVCC_38": "38",
  "DVCC_39": "39",
  "TA1.0/ROSC/P2.5": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS_1: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_4: "power_in", "~{RST}/NMI/SBWTDIO": "input", "TA1CLK/ACLK/A0/P2.0": "bidirectional", "TA0INCLK/SMCLK/A1/P2.1": "bidirectional", "TA0.0/A2/P2.2": "bidirectional", "P3.0/A5/UCB0STE/UCA0CLK": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/CA0/TB0.0": "bidirectional", "P4.1/CA1/TB0.1": "bidirectional", "P4.2/CA2/TB0.2": "bidirectional", "P4.3/A12/CA3/TB0.0": "bidirectional", "P4.4/A13/CA4/TB0.1": "bidirectional", "P4.5/A14/CA5/TB0.2": "bidirectional", "P4.6/A15/CA6/TB0OUTH": "bidirectional", "P4.7/CA7/TB0CLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.1": "bidirectional", "P3.7/A6/TA1.2": "bidirectional", "TA0.1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA0.2/VREF+/VeREF+/A4/P2.4": "bidirectional", "TA0CLK/ADC10CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/TA0.0/P1.5": "bidirectional", "TDI/TA0.1/P1.6": "bidirectional", "TDO/TDI/TA0.2/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC_38: "power_in", DVCC_39: "power_in", "TA1.0/ROSC/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2855IRHA40";
  override referencePrefix = "U";
}

/**
 * 56kB Flash, 4kB RAM, TSSOP-38
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2955IDA38`. Reference prefix: `U`.
 * Footprint filters: TSSOP*6.1x12.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2955.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_SO:TSSOP-38_6.1x12.5mm_P0.65mm.
 */
export class MSP430G2955IDA38 extends Component.withPins({
  "SBWTCK/TEST": "1",
  "DVCC": "2",
  "TA1.0/ROSC/P2.5": "3",
  "DVSS": "4",
  "XOUT/P2.7": "5",
  "XIN/P2.6": "6",
  "~{RST}/NMI/SBWTDIO": "7",
  "TA1CLK/ACLK/A0/P2.0": "8",
  "TA0INCLK/SMCLK/A1/P2.1": "9",
  "TA0.0/A2/P2.2": "10",
  "P3.0/A5/UCB0STE/UCA0CLK": "11",
  "P3.1/UCB0SIMO/UCB0SDA": "12",
  "P3.2/UCB0SOMI/UCB0SCL": "13",
  "P3.3/UCB0CLK/UCA0STE": "14",
  "AVSS": "15",
  "AVCC": "16",
  "P4.0/CA0/TB0.0": "17",
  "P4.1/CA1/TB0.1": "18",
  "P4.2/CA2/TB0.2": "19",
  "P4.3/A12/CA3/TB0.0": "20",
  "P4.4/A13/CA4/TB0.1": "21",
  "P4.5/A14/CA5/TB0.2": "22",
  "P4.6/A15/CA6/TB0OUTH": "23",
  "P4.7/CA7/TB0CLK": "24",
  "P3.4/UCA0TXD/UCA0SIMO": "25",
  "P3.5/UCA0RXD/UCA0SOMI": "26",
  "P3.6/A6/TA1.1": "27",
  "P3.7/A7/TA1.2": "28",
  "TA0.1/VREF-/VeREF-/A3/P2.3": "29",
  "TA0.2/VREF+/VeREF+/A4/P2.4": "30",
  "TA0CLK/ADC10CLK/P1.0": "31",
  "TA0.0/P1.1": "32",
  "TA0.1/P1.2": "33",
  "TA0.2/P1.3": "34",
  "TCK/SMCLK/P1.4": "35",
  "TMS/TA0.0/P1.5": "36",
  "TDI/TA0.1/P1.6": "37",
  "TDO/TDI/TA0.2/P1.7": "38",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SBWTCK/TEST": "input", DVCC: "power_in", "TA1.0/ROSC/P2.5": "bidirectional", DVSS: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", "~{RST}/NMI/SBWTDIO": "input", "TA1CLK/ACLK/A0/P2.0": "bidirectional", "TA0INCLK/SMCLK/A1/P2.1": "bidirectional", "TA0.0/A2/P2.2": "bidirectional", "P3.0/A5/UCB0STE/UCA0CLK": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/CA0/TB0.0": "bidirectional", "P4.1/CA1/TB0.1": "bidirectional", "P4.2/CA2/TB0.2": "bidirectional", "P4.3/A12/CA3/TB0.0": "bidirectional", "P4.4/A13/CA4/TB0.1": "bidirectional", "P4.5/A14/CA5/TB0.2": "bidirectional", "P4.6/A15/CA6/TB0OUTH": "bidirectional", "P4.7/CA7/TB0CLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.1": "bidirectional", "P3.7/A7/TA1.2": "bidirectional", "TA0.1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA0.2/VREF+/VeREF+/A4/P2.4": "bidirectional", "TA0CLK/ADC10CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/TA0.0/P1.5": "bidirectional", "TDI/TA0.1/P1.6": "bidirectional", "TDO/TDI/TA0.2/P1.7": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2955IDA38";
  override referencePrefix = "U";
}

/**
 * 56kB Flash, 4kB RAM, QFN-40
 *
 * KiCad symbol: `MCU_Texas_MSP430:MSP430G2955IRHA40`. Reference prefix: `U`.
 * Footprint filters: Texas*RHA0040B*.
 * @see http://www.ti.com/lit/ds/symlink/msp430g2955.pdf
 * Keywords: TI MSP430 16-bit mixed signal microcontroller.
 * Default footprint: Package_DFN_QFN:Texas_RHA0040B_VQFN-40-1EP_6x6mm_P0.5mm_EP4.15x4.15mm.
 */
export class MSP430G2955IRHA40 extends Component.withPins({
  "DVSS_1": "1",
  "XOUT/P2.7": "2",
  "XIN/P2.6": "3",
  "DVSS_4": "4",
  "~{RST}/NMI/SBWTDIO": "5",
  "TA1CLK/ACLK/A0/P2.0": "6",
  "TA0INCLK/SMCLK/A1/P2.1": "7",
  "TA0.0/A2/P2.2": "8",
  "P3.0/A5/UCB0STE/UCA0CLK": "9",
  "P3.1/UCB0SIMO/UCB0SDA": "10",
  "P3.2/UCB0SOMI/UCB0SCL": "11",
  "P3.3/UCB0CLK/UCA0STE": "12",
  "AVSS": "13",
  "AVCC": "14",
  "P4.0/CA0/TB0.0": "15",
  "P4.1/CA1/TB0.1": "16",
  "P4.2/CA2/TB0.2": "17",
  "P4.3/A12/CA3/TB0.0": "18",
  "P4.4/A13/CA4/TB0.1": "19",
  "P4.5/A14/CA5/TB0.2": "20",
  "P4.6/A15/CA6/TB0OUTH": "21",
  "P4.7/CA7/TB0CLK": "22",
  "P3.4/UCA0TXD/UCA0SIMO": "23",
  "P3.5/UCA0RXD/UCA0SOMI": "24",
  "P3.6/A6/TA1.1": "25",
  "P3.7/A6/TA1.2": "26",
  "TA0.1/VREF-/VeREF-/A3/P2.3": "27",
  "TA0.2/VREF+/VeREF+/A4/P2.4": "28",
  "TA0CLK/ADC10CLK/P1.0": "29",
  "TA0.0/P1.1": "30",
  "TA0.1/P1.2": "31",
  "TA0.2/P1.3": "32",
  "TCK/SMCLK/P1.4": "33",
  "TMS/TA0.0/P1.5": "34",
  "TDI/TA0.1/P1.6": "35",
  "TDO/TDI/TA0.2/P1.7": "36",
  "SBWTCK/TEST": "37",
  "DVCC_38": "38",
  "DVCC_39": "39",
  "TA1.0/ROSC/P2.5": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DVSS_1: "power_in", "XOUT/P2.7": "bidirectional", "XIN/P2.6": "bidirectional", DVSS_4: "power_in", "~{RST}/NMI/SBWTDIO": "input", "TA1CLK/ACLK/A0/P2.0": "bidirectional", "TA0INCLK/SMCLK/A1/P2.1": "bidirectional", "TA0.0/A2/P2.2": "bidirectional", "P3.0/A5/UCB0STE/UCA0CLK": "bidirectional", "P3.1/UCB0SIMO/UCB0SDA": "bidirectional", "P3.2/UCB0SOMI/UCB0SCL": "bidirectional", "P3.3/UCB0CLK/UCA0STE": "bidirectional", AVSS: "power_in", AVCC: "power_in", "P4.0/CA0/TB0.0": "bidirectional", "P4.1/CA1/TB0.1": "bidirectional", "P4.2/CA2/TB0.2": "bidirectional", "P4.3/A12/CA3/TB0.0": "bidirectional", "P4.4/A13/CA4/TB0.1": "bidirectional", "P4.5/A14/CA5/TB0.2": "bidirectional", "P4.6/A15/CA6/TB0OUTH": "bidirectional", "P4.7/CA7/TB0CLK": "bidirectional", "P3.4/UCA0TXD/UCA0SIMO": "bidirectional", "P3.5/UCA0RXD/UCA0SOMI": "bidirectional", "P3.6/A6/TA1.1": "bidirectional", "P3.7/A6/TA1.2": "bidirectional", "TA0.1/VREF-/VeREF-/A3/P2.3": "bidirectional", "TA0.2/VREF+/VeREF+/A4/P2.4": "bidirectional", "TA0CLK/ADC10CLK/P1.0": "bidirectional", "TA0.0/P1.1": "bidirectional", "TA0.1/P1.2": "bidirectional", "TA0.2/P1.3": "bidirectional", "TCK/SMCLK/P1.4": "bidirectional", "TMS/TA0.0/P1.5": "bidirectional", "TDI/TA0.1/P1.6": "bidirectional", "TDO/TDI/TA0.2/P1.7": "bidirectional", "SBWTCK/TEST": "input", DVCC_38: "power_in", DVCC_39: "power_in", "TA1.0/ROSC/P2.5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_MSP430:MSP430G2955IRHA40";
  override referencePrefix = "U";
}
