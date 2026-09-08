// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * ColdFire Microcontroller, LQFP64
 *
 * KiCad symbol: `MCU_NXP_ColdFire:MCF5212CAE66`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MCF5213EC.pdf
 * Keywords: MCU.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCF5212CAE66 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC_1": "1",
  /** Physical pin 2: ~{URTS1}/SYNCB/UTXD2/PUB2; bidirectional. */
  "~{URTS1}/SYNCB/UTXD2/PUB2": "2",
  /** Physical pin 3: TEST; input. */
  "TEST": "3",
  /** Physical pin 4: ~{UCTS0}/CANRTX/PUA3; bidirectional. */
  "~{UCTS0}/CANRTX/PUA3": "4",
  /** Physical pin 5: URXD0/PUA1; bidirectional. */
  "URXD0/PUA1": "5",
  /** Physical pin 6: UTXD0/PUA0; bidirectional. */
  "UTXD0/PUA0": "6",
  /** Physical pin 7: ~{URTS0}/CANTX/PUA2; bidirectional. */
  "~{URTS0}/CANTX/PUA2": "7",
  /** Physical pin 8: SCL/PAS0/UTxD2; bidirectional. */
  "SCL/PAS0/UTxD2": "8",
  /** Physical pin 9: SDA/PAS1/URxD2; bidirectional. */
  "SDA/PAS1/URxD2": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC_10": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: QSPI_DIN/EZPD/CANRX/RXD1/PQS1; bidirectional. */
  "QSPI_DIN/EZPD/CANRX/RXD1/PQS1": "12",
  /** Physical pin 13: QSPI_DOUT/EZPQ/CANTX/RXD0/PQS0; bidirectional. */
  "QSPI_DOUT/EZPQ/CANTX/RXD0/PQS0": "13",
  /** Physical pin 14: QSPI_CLK/EZPCK/SCL/RTS1/PQS2; bidirectional. */
  "QSPI_CLK/EZPCK/SCL/RTS1/PQS2": "14",
  /** Physical pin 15: QSPI_CS0/SDA/CTS1/PQS3; bidirectional. */
  "QSPI_CS0/SDA/CTS1/PQS3": "15",
  /** Physical pin 16: RCON/EZPCS; input. */
  "RCON/EZPCS": "16",
  /** Physical pin 17: JTAG_EN; input. */
  "JTAG_EN": "17",
  /** Physical pin 18: DTIN2/DTOUT2/PWM4/PTC2; bidirectional. */
  "DTIN2/DTOUT2/PWM4/PTC2": "18",
  /** Physical pin 19: DTIN3/DTOUT3/PWM6/PTC3; bidirectional. */
  "DTIN3/DTOUT3/PWM6/PTC3": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC_20": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: DTIN0/DTOUT0/PWM0/PTC0; bidirectional. */
  "DTIN0/DTOUT0/PWM0/PTC0": "22",
  /** Physical pin 23: DTIN1/DTOUT1/PWM2/PTC1; bidirectional. */
  "DTIN1/DTOUT1/PWM2/PTC1": "23",
  /** Physical pin 24: CLKMOD0; input. */
  "CLKMOD0": "24",
  /** Physical pin 25: AN0/PAN0; bidirectional. */
  "AN0/PAN0": "25",
  /** Physical pin 26: AN1/PAN1; bidirectional. */
  "AN1/PAN1": "26",
  /** Physical pin 27: AN2/PAN2; bidirectional. */
  "AN2/PAN2": "27",
  /** Physical pin 28: AN3/PAN3; bidirectional. */
  "AN3/PAN3": "28",
  /** Physical pin 29: VSSA; input. */
  "VSSA": "29",
  /** Physical pin 30: VRL; input. */
  "VRL": "30",
  /** Physical pin 31: VRH; input. */
  "VRH": "31",
  /** Physical pin 32: VCCA; input. */
  "VCCA": "32",
  /** Physical pin 33: AN7/PAN7; bidirectional. */
  "AN7/PAN7": "33",
  /** Physical pin 34: AN6/PAN6; bidirectional. */
  "AN6/PAN6": "34",
  /** Physical pin 35: AN5/PAN5; bidirectional. */
  "AN5/PAN5": "35",
  /** Physical pin 36: AN4/PAN4; bidirectional. */
  "AN4/PAN4": "36",
  /** Physical pin 37: VSTBY; power_in. */
  "VSTBY": "37",
  /** Physical pin 38: GND; power_in. */
  "GND_38": "38",
  /** Physical pin 39: VCC; power_in. */
  "VCC_39": "39",
  /** Physical pin 40: GPT0/PWM1/PTA0; bidirectional. */
  "GPT0/PWM1/PTA0": "40",
  /** Physical pin 41: GPT1/PWM3/PTA1; bidirectional. */
  "GPT1/PWM3/PTA1": "41",
  /** Physical pin 42: GPT2PWM5//PTA2; bidirectional. */
  "GPT2PWM5//PTA2": "42",
  /** Physical pin 43: GPT3/PWM7/PTA3; bidirectional. */
  "GPT3/PWM7/PTA3": "43",
  /** Physical pin 44: TCLK/PSTCLK/CLKOUT; input. */
  "TCLK/PSTCLK/CLKOUT": "44",
  /** Physical pin 45: GNDPLL; passive. */
  "GNDPLL": "45",
  /** Physical pin 46: XTAL; output. */
  "XTAL": "46",
  /** Physical pin 47: CLKIN/EXTAL; input. */
  "CLKIN/EXTAL": "47",
  /** Physical pin 48: VCCPLL; passive. */
  "VCCPLL": "48",
  /** Physical pin 49: ~{BKPT}/TMS; input. */
  "~{BKPT}/TMS": "49",
  /** Physical pin 50: DSI/TDI; input. */
  "DSI/TDI": "50",
  /** Physical pin 51: DSO/TDO; output. */
  "DSO/TDO": "51",
  /** Physical pin 52: VCC; power_in. */
  "VCC_52": "52",
  /** Physical pin 53: GND; power_in. */
  "GND_53": "53",
  /** Physical pin 54: DSCLK/~{TRST}; input. */
  "DSCLK/~{TRST}": "54",
  /** Physical pin 55: ALLPST; output. */
  "ALLPST": "55",
  /** Physical pin 56: ~{IRQ1}/PNQ1/SYNCA/PWM1; bidirectional. */
  "~{IRQ1}/PNQ1/SYNCA/PWM1": "56",
  /** Physical pin 57: IRQ4* /PNQ4; bidirectional. */
  "IRQ4*/PNQ4": "57",
  /** Physical pin 58: IRQ7* /PNQ7; bidirectional. */
  "IRQ7*/PNQ7": "58",
  /** Physical pin 59: RSTI; input. */
  "RSTI": "59",
  /** Physical pin 60: RSTO; output. */
  "RSTO": "60",
  /** Physical pin 61: ~{UCTS1}/SYNCA/URXD2/PUB3; bidirectional. */
  "~{UCTS1}/SYNCA/URXD2/PUB3": "61",
  /** Physical pin 62: UTXD1/PUB0; bidirectional. */
  "UTXD1/PUB0": "62",
  /** Physical pin 63: URXD1/PUB1; bidirectional. */
  "URXD1/PUB1": "63",
  /** Physical pin 64: GND; power_in. */
  "GND_64": "64",
}) {
  override schema = "MCU_NXP_ColdFire:MCF5212CAE66";
  override referencePrefix = "U";
}

/**
 * ColdFire Microcontroller, LQFP64
 *
 * KiCad symbol: `MCU_NXP_ColdFire:MCF5211CAE66`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MCF5213EC.pdf
 * Keywords: MCU.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCF5211CAE66 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC_1": "1",
  /** Physical pin 2: ~{URTS1}/SYNCB/UTXD2/PUB2; bidirectional. */
  "~{URTS1}/SYNCB/UTXD2/PUB2": "2",
  /** Physical pin 3: TEST; input. */
  "TEST": "3",
  /** Physical pin 4: ~{UCTS0}/CANRTX/PUA3; bidirectional. */
  "~{UCTS0}/CANRTX/PUA3": "4",
  /** Physical pin 5: URXD0/PUA1; bidirectional. */
  "URXD0/PUA1": "5",
  /** Physical pin 6: UTXD0/PUA0; bidirectional. */
  "UTXD0/PUA0": "6",
  /** Physical pin 7: ~{URTS0}/CANTX/PUA2; bidirectional. */
  "~{URTS0}/CANTX/PUA2": "7",
  /** Physical pin 8: SCL/PAS0/UTxD2; bidirectional. */
  "SCL/PAS0/UTxD2": "8",
  /** Physical pin 9: SDA/PAS1/URxD2; bidirectional. */
  "SDA/PAS1/URxD2": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC_10": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: QSPI_DIN/EZPD/CANRX/RXD1/PQS1; bidirectional. */
  "QSPI_DIN/EZPD/CANRX/RXD1/PQS1": "12",
  /** Physical pin 13: QSPI_DOUT/EZPQ/CANTX/RXD0/PQS0; bidirectional. */
  "QSPI_DOUT/EZPQ/CANTX/RXD0/PQS0": "13",
  /** Physical pin 14: QSPI_CLK/EZPCK/SCL/RTS1/PQS2; bidirectional. */
  "QSPI_CLK/EZPCK/SCL/RTS1/PQS2": "14",
  /** Physical pin 15: QSPI_CS0/SDA/CTS1/PQS3; bidirectional. */
  "QSPI_CS0/SDA/CTS1/PQS3": "15",
  /** Physical pin 16: RCON/EZPCS; input. */
  "RCON/EZPCS": "16",
  /** Physical pin 17: JTAG_EN; input. */
  "JTAG_EN": "17",
  /** Physical pin 18: DTIN2/DTOUT2/PWM4/PTC2; bidirectional. */
  "DTIN2/DTOUT2/PWM4/PTC2": "18",
  /** Physical pin 19: DTIN3/DTOUT3/PWM6/PTC3; bidirectional. */
  "DTIN3/DTOUT3/PWM6/PTC3": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC_20": "20",
  /** Physical pin 21: GND; power_in. */
  "GND_21": "21",
  /** Physical pin 22: DTIN0/DTOUT0/PWM0/PTC0; bidirectional. */
  "DTIN0/DTOUT0/PWM0/PTC0": "22",
  /** Physical pin 23: DTIN1/DTOUT1/PWM2/PTC1; bidirectional. */
  "DTIN1/DTOUT1/PWM2/PTC1": "23",
  /** Physical pin 24: CLKMOD0; input. */
  "CLKMOD0": "24",
  /** Physical pin 25: AN0/PAN0; bidirectional. */
  "AN0/PAN0": "25",
  /** Physical pin 26: AN1/PAN1; bidirectional. */
  "AN1/PAN1": "26",
  /** Physical pin 27: AN2/PAN2; bidirectional. */
  "AN2/PAN2": "27",
  /** Physical pin 28: AN3/PAN3; bidirectional. */
  "AN3/PAN3": "28",
  /** Physical pin 29: VSSA; input. */
  "VSSA": "29",
  /** Physical pin 30: VRL; input. */
  "VRL": "30",
  /** Physical pin 31: VRH; input. */
  "VRH": "31",
  /** Physical pin 32: VCCA; input. */
  "VCCA": "32",
  /** Physical pin 33: AN7/PAN7; bidirectional. */
  "AN7/PAN7": "33",
  /** Physical pin 34: AN6/PAN6; bidirectional. */
  "AN6/PAN6": "34",
  /** Physical pin 35: AN5/PAN5; bidirectional. */
  "AN5/PAN5": "35",
  /** Physical pin 36: AN4/PAN4; bidirectional. */
  "AN4/PAN4": "36",
  /** Physical pin 37: VSTBY; power_in. */
  "VSTBY": "37",
  /** Physical pin 38: GND; power_in. */
  "GND_38": "38",
  /** Physical pin 39: VCC; power_in. */
  "VCC_39": "39",
  /** Physical pin 40: GPT0/PWM1/PTA0; bidirectional. */
  "GPT0/PWM1/PTA0": "40",
  /** Physical pin 41: GPT1/PWM3/PTA1; bidirectional. */
  "GPT1/PWM3/PTA1": "41",
  /** Physical pin 42: GPT2PWM5//PTA2; bidirectional. */
  "GPT2PWM5//PTA2": "42",
  /** Physical pin 43: GPT3/PWM7/PTA3; bidirectional. */
  "GPT3/PWM7/PTA3": "43",
  /** Physical pin 44: TCLK/PSTCLK/CLKOUT; input. */
  "TCLK/PSTCLK/CLKOUT": "44",
  /** Physical pin 45: GNDPLL; passive. */
  "GNDPLL": "45",
  /** Physical pin 46: XTAL; output. */
  "XTAL": "46",
  /** Physical pin 47: CLKIN/EXTAL; input. */
  "CLKIN/EXTAL": "47",
  /** Physical pin 48: VCCPLL; passive. */
  "VCCPLL": "48",
  /** Physical pin 49: ~{BKPT}/TMS; input. */
  "~{BKPT}/TMS": "49",
  /** Physical pin 50: DSI/TDI; input. */
  "DSI/TDI": "50",
  /** Physical pin 51: DSO/TDO; output. */
  "DSO/TDO": "51",
  /** Physical pin 52: VCC; power_in. */
  "VCC_52": "52",
  /** Physical pin 53: GND; power_in. */
  "GND_53": "53",
  /** Physical pin 54: DSCLK/~{TRST}; input. */
  "DSCLK/~{TRST}": "54",
  /** Physical pin 55: ALLPST; output. */
  "ALLPST": "55",
  /** Physical pin 56: ~{IRQ1}/PNQ1/SYNCA/PWM1; bidirectional. */
  "~{IRQ1}/PNQ1/SYNCA/PWM1": "56",
  /** Physical pin 57: IRQ4* /PNQ4; bidirectional. */
  "IRQ4*/PNQ4": "57",
  /** Physical pin 58: IRQ7* /PNQ7; bidirectional. */
  "IRQ7*/PNQ7": "58",
  /** Physical pin 59: RSTI; input. */
  "RSTI": "59",
  /** Physical pin 60: RSTO; output. */
  "RSTO": "60",
  /** Physical pin 61: ~{UCTS1}/SYNCA/URXD2/PUB3; bidirectional. */
  "~{UCTS1}/SYNCA/URXD2/PUB3": "61",
  /** Physical pin 62: UTXD1/PUB0; bidirectional. */
  "UTXD1/PUB0": "62",
  /** Physical pin 63: URXD1/PUB1; bidirectional. */
  "URXD1/PUB1": "63",
  /** Physical pin 64: GND; power_in. */
  "GND_64": "64",
}) {
  override schema = "MCU_NXP_ColdFire:MCF5211CAE66";
  override referencePrefix = "U";
}

/**
 * Coldfire with SRAM and Flash Eprom - LQFP100 package
 *
 * KiCad symbol: `MCU_NXP_ColdFire:MCF5213-LQFP100`. Reference prefix: `U`.
 * Keywords: COLDFIRE.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCF5213_LQFP100 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC_1": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: ~{URTS1}/SYNCB/UTXD2/PUB2; bidirectional. */
  "~{URTS1}/SYNCB/UTXD2/PUB2": "4",
  /** Physical pin 5: TEST; input. */
  "TEST": "5",
  /** Physical pin 6: ~{UCTS0}/CANRX/PUA3; bidirectional. */
  "~{UCTS0}/CANRX/PUA3": "6",
  /** Physical pin 7: URXD0/PUA1; bidirectional. */
  "URXD0/PUA1": "7",
  /** Physical pin 8: UTXD0/PUA0; bidirectional. */
  "UTXD0/PUA0": "8",
  /** Physical pin 9: ~{URTS0}/CANTX/PUA2; bidirectional. */
  "~{URTS0}/CANTX/PUA2": "9",
  /** Physical pin 10: SCL/CANTX/PAS0/UTXD2; bidirectional. */
  "SCL/CANTX/PAS0/UTXD2": "10",
  /** Physical pin 11: SDA/CANRX/PAS1/URXD2; bidirectional. */
  "SDA/CANRX/PAS1/URXD2": "11",
  /** Physical pin 12: QSPI_CS3/SYNCA/SYNCB/PQS6; bidirectional. */
  "QSPI_CS3/SYNCA/SYNCB/PQS6": "12",
  /** Physical pin 13: QSPI_CS2/PQS5; bidirectional. */
  "QSPI_CS2/PQS5": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC_14": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: QSPI_DIN/EZPD/CANRX/RXD1/PQS1; bidirectional. */
  "QSPI_DIN/EZPD/CANRX/RXD1/PQS1": "16",
  /** Physical pin 17: QSPI_DOUT/EZPQ/CANTX/RXD0/PQS0; bidirectional. */
  "QSPI_DOUT/EZPQ/CANTX/RXD0/PQS0": "17",
  /** Physical pin 18: QSPI_CLK/EZPCK/SCL/RTS1/PQS2; bidirectional. */
  "QSPI_CLK/EZPCK/SCL/RTS1/PQS2": "18",
  /** Physical pin 19: QSPI_CS1/PQS4; bidirectional. */
  "QSPI_CS1/PQS4": "19",
  /** Physical pin 20: QSPI_CS0/SDA/CTS1/PQS3; bidirectional. */
  "QSPI_CS0/SDA/CTS1/PQS3": "20",
  /** Physical pin 21: RCON/EZPCS; input. */
  "RCON/EZPCS": "21",
  /** Physical pin 22: VCC; power_in. */
  "VCC_22": "22",
  /** Physical pin 23: VCC; power_in. */
  "VCC_23": "23",
  /** Physical pin 24: GND; power_in. */
  "GND_24": "24",
  /** Physical pin 25: GND; power_in. */
  "GND_25": "25",
  /** Physical pin 26: JTAG_EN; input. */
  "JTAG_EN": "26",
  /** Physical pin 27: ~{UCTS2}/PUC3; bidirectional. */
  "~{UCTS2}/PUC3": "27",
  /** Physical pin 28: URXD2/PUC1; bidirectional. */
  "URXD2/PUC1": "28",
  /** Physical pin 29: UTXD2/PUC0; bidirectional. */
  "UTXD2/PUC0": "29",
  /** Physical pin 30: ~{URTS2}/PUC2; bidirectional. */
  "~{URTS2}/PUC2": "30",
  /** Physical pin 31: DTIN2/DTOUT2/PWM4/PTC2; bidirectional. */
  "DTIN2/DTOUT2/PWM4/PTC2": "31",
  /** Physical pin 32: DTIN3/DTOUT3/PWM6/PTC3; bidirectional. */
  "DTIN3/DTOUT3/PWM6/PTC3": "32",
  /** Physical pin 33: PWM3/PTD1; bidirectional. */
  "PWM3/PTD1": "33",
  /** Physical pin 34: VCC; power_in. */
  "VCC_34": "34",
  /** Physical pin 35: GND; power_in. */
  "GND_35": "35",
  /** Physical pin 36: DTIN0/DTOUT0/PWM0/PTC0; bidirectional. */
  "DTIN0/DTOUT0/PWM0/PTC0": "36",
  /** Physical pin 37: DTIN1/DTOUT1/PWM2/PTC1; bidirectional. */
  "DTIN1/DTOUT1/PWM2/PTC1": "37",
  /** Physical pin 38: PWM1/PTD0; bidirectional. */
  "PWM1/PTD0": "38",
  /** Physical pin 39: CLKMOD1; input. */
  "CLKMOD1": "39",
  /** Physical pin 40: CLKMOD0; input. */
  "CLKMOD0": "40",
  /** Physical pin 41: VCC; power_in. */
  "VCC_41": "41",
  /** Physical pin 42: GND; power_in. */
  "GND_42": "42",
  /** Physical pin 43: AN0/PAN0; bidirectional. */
  "AN0/PAN0": "43",
  /** Physical pin 44: AN1/PAN1; bidirectional. */
  "AN1/PAN1": "44",
  /** Physical pin 45: AN2/PAN2; bidirectional. */
  "AN2/PAN2": "45",
  /** Physical pin 46: AN3/PAN3; bidirectional. */
  "AN3/PAN3": "46",
  /** Physical pin 47: VSSA; input. */
  "VSSA": "47",
  /** Physical pin 48: VRL; input. */
  "VRL": "48",
  /** Physical pin 49: VRH; input. */
  "VRH": "49",
  /** Physical pin 50: VCCA; input. */
  "VCCA": "50",
  /** Physical pin 51: AN7/PAN7; bidirectional. */
  "AN7/PAN7": "51",
  /** Physical pin 52: AN6/PAN6; bidirectional. */
  "AN6/PAN6": "52",
  /** Physical pin 53: AN5/PAN5; bidirectional. */
  "AN5/PAN5": "53",
  /** Physical pin 54: AN4/PAN4; bidirectional. */
  "AN4/PAN4": "54",
  /** Physical pin 55: VSTBY; power_in. */
  "VSTBY": "55",
  /** Physical pin 56: GND; power_in. */
  "GND_56": "56",
  /** Physical pin 57: VCC; power_in. */
  "VCC_57": "57",
  /** Physical pin 58: GPT0/PWM1/PTA0; bidirectional. */
  "GPT0/PWM1/PTA0": "58",
  /** Physical pin 59: GPT1/PWM3/PTA1; bidirectional. */
  "GPT1/PWM3/PTA1": "59",
  /** Physical pin 60: PWM5/PTD2; bidirectional. */
  "PWM5/PTD2": "60",
  /** Physical pin 61: GPT2PWM5//PTA2; bidirectional. */
  "GPT2PWM5//PTA2": "61",
  /** Physical pin 62: GPT3/PWM7/PTA3; bidirectional. */
  "GPT3/PWM7/PTA3": "62",
  /** Physical pin 63: PWM7/PTD3; bidirectional. */
  "PWM7/PTD3": "63",
  /** Physical pin 64: TCLK/PSTCLK/CLKOUT; input. */
  "TCLK/PSTCLK/CLKOUT": "64",
  /** Physical pin 65: PST0/PDD0; bidirectional. */
  "PST0/PDD0": "65",
  /** Physical pin 66: PST1/PDD1; bidirectional. */
  "PST1/PDD1": "66",
  /** Physical pin 67: GND; power_in. */
  "GND_67": "67",
  /** Physical pin 68: VCC; power_in. */
  "VCC_68": "68",
  /** Physical pin 69: PST2/PDD2; bidirectional. */
  "PST2/PDD2": "69",
  /** Physical pin 70: PST3/PDD3; bidirectional. */
  "PST3/PDD3": "70",
  /** Physical pin 71: GNDPLL; passive. */
  "GNDPLL": "71",
  /** Physical pin 72: XTAL; output. */
  "XTAL": "72",
  /** Physical pin 73: CLKIN/EXTAL; input. */
  "CLKIN/EXTAL": "73",
  /** Physical pin 74: VCCPLL; passive. */
  "VCCPLL": "74",
  /** Physical pin 75: GND; power_in. */
  "GND_75": "75",
  /** Physical pin 76: ~{BKPT}/TMS; input. */
  "~{BKPT}/TMS": "76",
  /** Physical pin 77: DDATA0/PDD4; bidirectional. */
  "DDATA0/PDD4": "77",
  /** Physical pin 78: DDATA1/PDD5; bidirectional. */
  "DDATA1/PDD5": "78",
  /** Physical pin 79: DSI/TDI; input. */
  "DSI/TDI": "79",
  /** Physical pin 80: DSO/TDO; output. */
  "DSO/TDO": "80",
  /** Physical pin 81: VCC; power_in. */
  "VCC_81": "81",
  /** Physical pin 82: GND; power_in. */
  "GND_82": "82",
  /** Physical pin 83: DDATA2/PDD6; bidirectional. */
  "DDATA2/PDD6": "83",
  /** Physical pin 84: DDATA3/PDD7; bidirectional. */
  "DDATA3/PDD7": "84",
  /** Physical pin 85: DSCLK/~{TRST}; input. */
  "DSCLK/~{TRST}": "85",
  /** Physical pin 86: ALLPST; output. */
  "ALLPST": "86",
  /** Physical pin 87: ~{IRQ1}/PNQ1/SYNCA/PWM1; bidirectional. */
  "~{IRQ1}/PNQ1/SYNCA/PWM1": "87",
  /** Physical pin 88: ~{IRQ2}/PNQ2; bidirectional. */
  "~{IRQ2}/PNQ2": "88",
  /** Physical pin 89: ~{IRQ3}/PNQ3; bidirectional. */
  "~{IRQ3}/PNQ3": "89",
  /** Physical pin 90: ~{IRQ4}/PNQ4; bidirectional. */
  "~{IRQ4}/PNQ4": "90",
  /** Physical pin 91: ~{IRQ5}/PNQ5; bidirectional. */
  "~{IRQ5}/PNQ5": "91",
  /** Physical pin 92: GND; power_in. */
  "GND_92": "92",
  /** Physical pin 93: VCC; power_in. */
  "VCC_93": "93",
  /** Physical pin 94: ~{IRQ6}/PNQ6; bidirectional. */
  "~{IRQ6}/PNQ6": "94",
  /** Physical pin 95: ~{IRQ7}/PNQ7; bidirectional. */
  "~{IRQ7}/PNQ7": "95",
  /** Physical pin 96: RSTI; input. */
  "RSTI": "96",
  /** Physical pin 97: RSTO; output. */
  "RSTO": "97",
  /** Physical pin 98: ~{UCTS1}/SYNCA/URXD2/PUB3; bidirectional. */
  "~{UCTS1}/SYNCA/URXD2/PUB3": "98",
  /** Physical pin 99: UTXD1/PUB0; bidirectional. */
  "UTXD1/PUB0": "99",
  /** Physical pin 100: URXD1/PUB1; bidirectional. */
  "URXD1/PUB1": "100",
}) {
  override schema = "MCU_NXP_ColdFire:MCF5213-LQFP100";
  override referencePrefix = "U";
}

/**
 * Coldfire with SRAM and Flash Eprom
 *
 * KiCad symbol: `MCU_NXP_ColdFire:MCF5282`. Reference prefix: `U`.
 * Keywords: COLDFIRE.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCF5282 extends Component.withPins({
  /** Physical pin A1: GND; power_in. */
  "GND_A1": "A1",
  /** Physical pin A2: A15/PG7; bidirectional. */
  "A15/PG7": "A2",
  /** Physical pin A3: A16/PF0; bidirectional. */
  "A16/PF0": "A3",
  /** Physical pin A4: A18/PF2; bidirectional. */
  "A18/PF2": "A4",
  /** Physical pin A5: A21/PF5/~{CS4}; bidirectional. */
  "A21/PF5/~{CS4}": "A5",
  /** Physical pin A6: VPP; power_in. */
  "VPP": "A6",
  /** Physical pin A7: ETXD3/PEL7; bidirectional. */
  "ETXD3/PEL7": "A7",
  /** Physical pin A8: ETXCLK/PEH7; bidirectional. */
  "ETXCLK/PEH7": "A8",
  /** Physical pin A9: ERXD3/PEL3; bidirectional. */
  "ERXD3/PEL3": "A9",
  /** Physical pin A10: ERXCLK/PEH3; bidirectional. */
  "ERXCLK/PEH3": "A10",
  /** Physical pin A11: ECRS/PEH0; bidirectional. */
  "ECRS/PEH0": "A11",
  /** Physical pin A12: VDDF; power_in. */
  "VDDF_A12": "A12",
  /** Physical pin A13: DDATA1/PDD5; output. */
  "DDATA1/PDD5": "A13",
  /** Physical pin A14: PST2/PDD2; output. */
  "PST2/PDD2": "A14",
  /** Physical pin A15: PST0/PDD0; output. */
  "PST0/PDD0": "A15",
  /** Physical pin A16: GND; power_in. */
  "GND_A16": "A16",
  /** Physical pin B1: A14/PG6; bidirectional. */
  "A14/PG6": "B1",
  /** Physical pin B2: A13/PG5; bidirectional. */
  "A13/PG5": "B2",
  /** Physical pin B3: A17/PF1; bidirectional. */
  "A17/PF1": "B3",
  /** Physical pin B4: A19/PF3; bidirectional. */
  "A19/PF3": "B4",
  /** Physical pin B5: GNDF; passive. */
  "GNDF_B5": "B5",
  /** Physical pin B6: A22/PF6/~{CS5}; bidirectional. */
  "A22/PF6/~{CS5}": "B6",
  /** Physical pin B7: ETXD2/PEL6; bidirectional. */
  "ETXD2/PEL6": "B7",
  /** Physical pin B8: ERXER/PEL0; bidirectional. */
  "ERXER/PEL0": "B8",
  /** Physical pin B9: ERXD2/PEL2; bidirectional. */
  "ERXD2/PEL2": "B9",
  /** Physical pin B10: EMDC/PAS4/UTXD2; input. */
  "EMDC/PAS4/UTXD2": "B10",
  /** Physical pin B11: ECOL/PEH4; bidirectional. */
  "ECOL/PEH4": "B11",
  /** Physical pin B12: GNDF; power_in. */
  "GNDF_B12": "B12",
  /** Physical pin B13: DDATA0/PDD4; output. */
  "DDATA0/PDD4": "B13",
  /** Physical pin B14: PST1/PDD1; output. */
  "PST1/PDD1": "B14",
  /** Physical pin B15: ~{IRQ7}/PNQ7; bidirectional. */
  "~{IRQ7}/PNQ7": "B15",
  /** Physical pin B16: ~{IRQ6}/PNQ6; bidirectional. */
  "~{IRQ6}/PNQ6": "B16",
  /** Physical pin C1: A12/PG4; bidirectional. */
  "A12/PG4": "C1",
  /** Physical pin C2: A11/PG3; bidirectional. */
  "A11/PG3": "C2",
  /** Physical pin C3: A10/PG2; bidirectional. */
  "A10/PG2": "C3",
  /** Physical pin C4: A20/PF4; bidirectional. */
  "A20/PF4": "C4",
  /** Physical pin C5: VDDF; power_in. */
  "VDDF_C5": "C5",
  /** Physical pin C6: A23/PF7/~{CS6}; bidirectional. */
  "A23/PF7/~{CS6}": "C6",
  /** Physical pin C7: ETXD1/PEL5; bidirectional. */
  "ETXD1/PEL5": "C7",
  /** Physical pin C8: ERXDV/PEH2; bidirectional. */
  "ERXDV/PEH2": "C8",
  /** Physical pin C9: ERXD1/PEL1; bidirectional. */
  "ERXD1/PEL1": "C9",
  /** Physical pin C10: EMDIO/PAS5/URXD2; bidirectional. */
  "EMDIO/PAS5/URXD2": "C10",
  /** Physical pin C12: DDATA3/PDD7; output. */
  "DDATA3/PDD7": "C12",
  /** Physical pin C13: PST3/PDD3; output. */
  "PST3/PDD3": "C13",
  /** Physical pin C14: ~{IRQ5}/PNQ5; bidirectional. */
  "~{IRQ5}/PNQ5": "C14",
  /** Physical pin C15: ~{IRQ4}/PNQ4; bidirectional. */
  "~{IRQ4}/PNQ4": "C15",
  /** Physical pin C16: ~{IRQ3}/PNQ3; bidirectional. */
  "~{IRQ3}/PNQ3": "C16",
  /** Physical pin D1: A9/PG1; bidirectional. */
  "A9/PG1": "D1",
  /** Physical pin D2: A8/PG0; bidirectional. */
  "A8/PG0": "D2",
  /** Physical pin D3: A7/PH7; bidirectional. */
  "A7/PH7": "D3",
  /** Physical pin D4: A6/PH6; bidirectional. */
  "A6/PH6": "D4",
  /** Physical pin D5: VDDF; power_in. */
  "VDDF_D5": "D5",
  /** Physical pin D6: ETXEN/PEH6; bidirectional. */
  "ETXEN/PEH6": "D6",
  /** Physical pin D7: ETXD0/PEH5; bidirectional. */
  "ETXD0/PEH5": "D7",
  /** Physical pin D9: ERXDO/PEH1; bidirectional. */
  "ERXDO/PEH1": "D9",
  /** Physical pin D10: ETXER/PEL4; bidirectional. */
  "ETXER/PEL4": "D10",
  /** Physical pin D11: VDDF; power_in. */
  "VDDF_D11": "D11",
  /** Physical pin D12: DDATA2/PDD6; output. */
  "DDATA2/PDD6": "D12",
  /** Physical pin D14: ~{IRQ2}/PNQ2; bidirectional. */
  "~{IRQ2}/PNQ2": "D14",
  /** Physical pin D15: ~{IRQ1}/PNQ1; bidirectional. */
  "~{IRQ1}/PNQ1": "D15",
  /** Physical pin D16: CANRX/PAS3/URxD2; bidirectional. */
  "CANRX/PAS3/URxD2": "D16",
  /** Physical pin E1: A5/PH5; bidirectional. */
  "A5/PH5": "E1",
  /** Physical pin E2: A4/PH4; bidirectional. */
  "A4/PH4": "E2",
  /** Physical pin E3: A3/PH3; bidirectional. */
  "A3/PH3": "E3",
  /** Physical pin E4: A2/PH2; bidirectional. */
  "A2/PH2": "E4",
  /** Physical pin E5: GND; power_in. */
  "GND_E5": "E5",
  /** Physical pin E6: VCC; power_in. */
  "VCC_E6": "E6",
  /** Physical pin E7: VCC; power_in. */
  "VCC_E7": "E7",
  /** Physical pin E8: VCC; power_in. */
  "VCC_E8": "E8",
  /** Physical pin E9: VCC; power_in. */
  "VCC_E9": "E9",
  /** Physical pin E10: VCC; power_in. */
  "VCC_E10": "E10",
  /** Physical pin E11: VCC; power_in. */
  "VCC_E11": "E11",
  /** Physical pin E12: GND; power_in. */
  "GND_E12": "E12",
  /** Physical pin E13: CANTX/PAS2/UTxD2; bidirectional. */
  "CANTX/PAS2/UTxD2": "E13",
  /** Physical pin E14: SDA/PAS1/URxD2; bidirectional. */
  "SDA/PAS1/URxD2": "E14",
  /** Physical pin E15: SCL/PAS0/UTxD2; bidirectional. */
  "SCL/PAS0/UTxD2": "E15",
  /** Physical pin E16: QSPI_DIN/PQS1; bidirectional. */
  "QSPI_DIN/PQS1": "E16",
  /** Physical pin F1: A1/PH1; bidirectional. */
  "A1/PH1": "F1",
  /** Physical pin F2: A0/PH0; bidirectional. */
  "A0/PH0": "F2",
  /** Physical pin F3: D31/PA7; bidirectional. */
  "D31/PA7": "F3",
  /** Physical pin F5: VCC; power_in. */
  "VCC_F5": "F5",
  /** Physical pin F6: GND; power_in. */
  "GND_F6": "F6",
  /** Physical pin F7: VCC; power_in. */
  "VCC_F7": "F7",
  /** Physical pin F8: VCC; power_in. */
  "VCC_F8": "F8",
  /** Physical pin F9: VCC; power_in. */
  "VCC_F9": "F9",
  /** Physical pin F10: VCC; power_in. */
  "VCC_F10": "F10",
  /** Physical pin F11: GND; power_in. */
  "GND_F11": "F11",
  /** Physical pin F12: VCC; power_in. */
  "VCC_F12": "F12",
  /** Physical pin F13: QSPI_DOUT/PQS0; bidirectional. */
  "QSPI_DOUT/PQS0": "F13",
  /** Physical pin F14: QSPI_CLK/PQS2; bidirectional. */
  "QSPI_CLK/PQS2": "F14",
  /** Physical pin F15: QSPI_CS0/PQS3; bidirectional. */
  "QSPI_CS0/PQS3": "F15",
  /** Physical pin F16: QSPI_CS1/PQS4; bidirectional. */
  "QSPI_CS1/PQS4": "F16",
  /** Physical pin G1: D30/PA6; bidirectional. */
  "D30/PA6": "G1",
  /** Physical pin G2: D29/PA5; bidirectional. */
  "D29/PA5": "G2",
  /** Physical pin G3: D28/PA4; bidirectional. */
  "D28/PA4": "G3",
  /** Physical pin G4: D27/PA3; bidirectional. */
  "D27/PA3": "G4",
  /** Physical pin G5: VCC; power_in. */
  "VCC_G5": "G5",
  /** Physical pin G6: VCC; power_in. */
  "VCC_G6": "G6",
  /** Physical pin G7: GND; power_in. */
  "GND_G7": "G7",
  /** Physical pin G8: GND; power_in. */
  "GND_G8": "G8",
  /** Physical pin G9: GND; power_in. */
  "GND_G9": "G9",
  /** Physical pin G10: GND; power_in. */
  "GND_G10": "G10",
  /** Physical pin G11: VCC; power_in. */
  "VCC_G11": "G11",
  /** Physical pin G12: VCC; power_in. */
  "VCC_G12": "G12",
  /** Physical pin G13: QSPI_CS2/PQS5; bidirectional. */
  "QSPI_CS2/PQS5": "G13",
  /** Physical pin G14: QSPI_CS3/PQS6; bidirectional. */
  "QSPI_CS3/PQS6": "G14",
  /** Physical pin G15: ~{DRAMW}/PSD3; bidirectional. */
  "~{DRAMW}/PSD3": "G15",
  /** Physical pin G16: ~{SDRAM_CS0}/PSD1; bidirectional. */
  "~{SDRAM_CS0}/PSD1": "G16",
  /** Physical pin H1: D26/PA2; bidirectional. */
  "D26/PA2": "H1",
  /** Physical pin H2: D25/PA1; bidirectional. */
  "D25/PA1": "H2",
  /** Physical pin H3: D24/PA0; bidirectional. */
  "D24/PA0": "H3",
  /** Physical pin H4: D23/PB7; bidirectional. */
  "D23/PB7": "H4",
  /** Physical pin H5: VCC; power_in. */
  "VCC_H5": "H5",
  /** Physical pin H6: VCC; power_in. */
  "VCC_H6": "H6",
  /** Physical pin H7: GND; power_in. */
  "GND_H7": "H7",
  /** Physical pin H8: GND; power_in. */
  "GND_H8": "H8",
  /** Physical pin H9: GND; power_in. */
  "GND_H9": "H9",
  /** Physical pin H10: GND; power_in. */
  "GND_H10": "H10",
  /** Physical pin H11: VCC; power_in. */
  "VCC_H11": "H11",
  /** Physical pin H12: VCC; power_in. */
  "VCC_H12": "H12",
  /** Physical pin H13: ~{SDRAM_CS1}/PSD2; output. */
  "~{SDRAM_CS1}/PSD2": "H13",
  /** Physical pin H14: SCKE/PSD0; bidirectional. */
  "SCKE/PSD0": "H14",
  /** Physical pin H15: ~{SRAS}/PSD5; bidirectional. */
  "~{SRAS}/PSD5": "H15",
  /** Physical pin H16: ~{SCAS}/PSD4; bidirectional. */
  "~{SCAS}/PSD4": "H16",
  /** Physical pin J1: D22/PB6; bidirectional. */
  "D22/PB6": "J1",
  /** Physical pin J2: D21/PB5; bidirectional. */
  "D21/PB5": "J2",
  /** Physical pin J3: D20/PB4; bidirectional. */
  "D20/PB4": "J3",
  /** Physical pin J4: D19/PB3; bidirectional. */
  "D19/PB3": "J4",
  /** Physical pin J5: VCC; power_in. */
  "VCC_J5": "J5",
  /** Physical pin J6: VCC; power_in. */
  "VCC_J6": "J6",
  /** Physical pin J7: GND; power_in. */
  "GND_J7": "J7",
  /** Physical pin J8: GND; power_in. */
  "GND_J8": "J8",
  /** Physical pin J9: GND; power_in. */
  "GND_J9": "J9",
  /** Physical pin J10: GND; power_in. */
  "GND_J10": "J10",
  /** Physical pin J11: VCC; power_in. */
  "VCC_J11": "J11",
  /** Physical pin J12: VCC; power_in. */
  "VCC_J12": "J12",
  /** Physical pin J13: DTOUT0/PTD0/~{UCTS1}/~{UCTS0}; input. */
  "DTOUT0/PTD0/~{UCTS1}/~{UCTS0}": "J13",
  /** Physical pin J14: DTIN0/PTD1/~{UCTS1}/~{UCTS0}; bidirectional. */
  "DTIN0/PTD1/~{UCTS1}/~{UCTS0}": "J14",
  /** Physical pin J15: DTOUT1/PTD2/~{URTS1}/~{URTS0}; bidirectional. */
  "DTOUT1/PTD2/~{URTS1}/~{URTS0}": "J15",
  /** Physical pin J16: DTIN1/PTD3/~{URTS1}/~{URTS0}; bidirectional. */
  "DTIN1/PTD3/~{URTS1}/~{URTS0}": "J16",
  /** Physical pin K1: D18/PB2; bidirectional. */
  "D18/PB2": "K1",
  /** Physical pin K2: D17/PB1; bidirectional. */
  "D17/PB1": "K2",
  /** Physical pin K3: D16/PB0; bidirectional. */
  "D16/PB0": "K3",
  /** Physical pin K5: VCC; power_in. */
  "VCC_K5": "K5",
  /** Physical pin K6: VCC; power_in. */
  "VCC_K6": "K6",
  /** Physical pin K7: GND; power_in. */
  "GND_K7": "K7",
  /** Physical pin K8: GND; power_in. */
  "GND_K8": "K8",
  /** Physical pin K9: GND; power_in. */
  "GND_K9": "K9",
  /** Physical pin K10: GND; power_in. */
  "GND_K10": "K10",
  /** Physical pin K11: VCC; power_in. */
  "VCC_K11": "K11",
  /** Physical pin K12: VCC; power_in. */
  "VCC_K12": "K12",
  /** Physical pin K13: DTOUT2/PTC0/~{UCTS1}/~{UCTS0}; bidirectional. */
  "DTOUT2/PTC0/~{UCTS1}/~{UCTS0}": "K13",
  /** Physical pin K14: DTIN2/PTC1/~{UCTS1}/~{UCTS0}; bidirectional. */
  "DTIN2/PTC1/~{UCTS1}/~{UCTS0}": "K14",
  /** Physical pin K15: DTOUT3/PTC2/~{URTS1}/~{URTS0}; bidirectional. */
  "DTOUT3/PTC2/~{URTS1}/~{URTS0}": "K15",
  /** Physical pin K16: DTIN3/PTC3/~{URTS1}/~{URTS0}; bidirectional. */
  "DTIN3/PTC3/~{URTS1}/~{URTS0}": "K16",
  /** Physical pin L1: D15/PC7; bidirectional. */
  "D15/PC7": "L1",
  /** Physical pin L2: D14/PC6; bidirectional. */
  "D14/PC6": "L2",
  /** Physical pin L3: D13/PC5; bidirectional. */
  "D13/PC5": "L3",
  /** Physical pin L4: D12/PC4; bidirectional. */
  "D12/PC4": "L4",
  /** Physical pin L5: VCC; power_in. */
  "VCC_L5": "L5",
  /** Physical pin L6: GND; power_in. */
  "GND_L6": "L6",
  /** Physical pin L7: VCC; power_in. */
  "VCC_L7": "L7",
  /** Physical pin L8: VCC; power_in. */
  "VCC_L8": "L8",
  /** Physical pin L9: VCC; power_in. */
  "VCC_L9": "L9",
  /** Physical pin L10: VCC; power_in. */
  "VCC_L10": "L10",
  /** Physical pin L11: GND; power_in. */
  "GND_L11": "L11",
  /** Physical pin L12: VCC; power_in. */
  "VCC_L12": "L12",
  /** Physical pin L13: ~{CS0}/PJ0; bidirectional. */
  "~{CS0}/PJ0": "L13",
  /** Physical pin L14: ~{CS1}/PJ1; bidirectional. */
  "~{CS1}/PJ1": "L14",
  /** Physical pin L15: ~{CS2}/PJ2; bidirectional. */
  "~{CS2}/PJ2": "L15",
  /** Physical pin L16: ~{CS3}/PJ3; bidirectional. */
  "~{CS3}/PJ3": "L16",
  /** Physical pin M1: D11/PC3; bidirectional. */
  "D11/PC3": "M1",
  /** Physical pin M2: D10/PC2; bidirectional. */
  "D10/PC2": "M2",
  /** Physical pin M3: D9/PC1; bidirectional. */
  "D9/PC1": "M3",
  /** Physical pin M4: D8/PC0; bidirectional. */
  "D8/PC0": "M4",
  /** Physical pin M5: GND; power_in. */
  "GND_M5": "M5",
  /** Physical pin M6: VCC; power_in. */
  "VCC_M6": "M6",
  /** Physical pin M7: VCC; power_in. */
  "VCC_M7": "M7",
  /** Physical pin M8: VCC; power_in. */
  "VCC_M8": "M8",
  /** Physical pin M9: VCC; power_in. */
  "VCC_M9": "M9",
  /** Physical pin M10: VCC; power_in. */
  "VCC_M10": "M10",
  /** Physical pin M11: VCC; power_in. */
  "VCC_M11": "M11",
  /** Physical pin M12: GND; power_in. */
  "GND_M12": "M12",
  /** Physical pin M14: ~{TIP}/PE0/SYNCB; bidirectional. */
  "~{TIP}/PE0/SYNCB": "M14",
  /** Physical pin M15: ~{TS}/PE1/SYNCA; bidirectional. */
  "~{TS}/PE1/SYNCA": "M15",
  /** Physical pin M16: SIZ0/PE2/SYNCB; bidirectional. */
  "SIZ0/PE2/SYNCB": "M16",
  /** Physical pin N1: D7/PD7; bidirectional. */
  "D7/PD7": "N1",
  /** Physical pin N2: D6/PD6; bidirectional. */
  "D6/PD6": "N2",
  /** Physical pin N3: D5/PD5; bidirectional. */
  "D5/PD5": "N3",
  /** Physical pin N5: D3/PD3; bidirectional. */
  "D3/PD3": "N5",
  /** Physical pin N6: URXD0/PUA1; bidirectional. */
  "URXD0/PUA1": "N6",
  /** Physical pin N7: CLKOUT; output. */
  "CLKOUT": "N7",
  /** Physical pin N8: VCCPLL; passive. */
  "VCCPLL": "N8",
  /** Physical pin N10: TEST; input. */
  "TEST": "N10",
  /** Physical pin N11: VSTBY; power_in. */
  "VSTBY": "N11",
  /** Physical pin N12: GPTB0/PTB0; bidirectional. */
  "GPTB0/PTB0": "N12",
  /** Physical pin N13: GPTA0/PTA0; bidirectional. */
  "GPTA0/PTA0": "N13",
  /** Physical pin N14: SIZ1/PE3/SYNCA; bidirectional. */
  "SIZ1/PE3/SYNCA": "N14",
  /** Physical pin N15: R/W/PE4; bidirectional. */
  "R/W/PE4": "N15",
  /** Physical pin N16: ~{OE}/PE7; bidirectional. */
  "~{OE}/PE7": "N16",
  /** Physical pin P1: D4/PD4; bidirectional. */
  "D4/PD4": "P1",
  /** Physical pin P2: VDDH; power_in. */
  "VDDH": "P2",
  /** Physical pin P3: AN55/PQA3/ETRIG1; bidirectional. */
  "AN55/PQA3/ETRIG1": "P3",
  /** Physical pin P4: VRH; input. */
  "VRH": "P4",
  /** Physical pin P5: VSSA; input. */
  "VSSA_P5": "P5",
  /** Physical pin P6: D0/PD0; bidirectional. */
  "D0/PD0": "P6",
  /** Physical pin P7: UTXD1/PUA2; bidirectional. */
  "UTXD1/PUA2": "P7",
  /** Physical pin P8: GNDPLL; passive. */
  "GNDPLL": "P8",
  /** Physical pin P9: DSCLK/~{TRST}; input. */
  "DSCLK/~{TRST}": "P9",
  /** Physical pin P10: ~{BKPT}/TMS; input. */
  "~{BKPT}/TMS": "P10",
  /** Physical pin P11: RSTO; output. */
  "RSTO": "P11",
  /** Physical pin P12: GPTB1/PTB1; bidirectional. */
  "GPTB1/PTB1": "P12",
  /** Physical pin P13: GPTA1/PTA1; bidirectional. */
  "GPTA1/PTA1": "P13",
  /** Physical pin P14: ~{BS3}/PJ7; bidirectional. */
  "~{BS3}/PJ7": "P14",
  /** Physical pin P15: ~{TEA}/PE5; bidirectional. */
  "~{TEA}/PE5": "P15",
  /** Physical pin P16: ~{TA}/PE6; bidirectional. */
  "~{TA}/PE6": "P16",
  /** Physical pin R1: AN3/PQB3/ANZ; bidirectional. */
  "AN3/PQB3/ANZ": "R1",
  /** Physical pin R2: AN1/PQB1/ANX; bidirectional. */
  "AN1/PQB1/ANX": "R2",
  /** Physical pin R3: AN56/PQA4/ETRIG2; bidirectional. */
  "AN56/PQA4/ETRIG2": "R3",
  /** Physical pin R4: AN52/PQA0/MA0; bidirectional. */
  "AN52/PQA0/MA0": "R4",
  /** Physical pin R5: VCCA; input. */
  "VCCA": "R5",
  /** Physical pin R6: D1/PD1; bidirectional. */
  "D1/PD1": "R6",
  /** Physical pin R7: URXD1/PUA3; bidirectional. */
  "URXD1/PUA3": "R7",
  /** Physical pin R8: XTAL; output. */
  "XTAL": "R8",
  /** Physical pin R9: JTAG_EN; input. */
  "JTAG_EN": "R9",
  /** Physical pin R10: DSI/TDI; input. */
  "DSI/TDI": "R10",
  /** Physical pin R11: RSTI; input. */
  "RSTI": "R11",
  /** Physical pin R12: GPTB2/PTB2; bidirectional. */
  "GPTB2/PTB2": "R12",
  /** Physical pin R13: GPTA2/PTA2; bidirectional. */
  "GPTA2/PTA2": "R13",
  /** Physical pin R14: CLKMOD0; input. */
  "CLKMOD0": "R14",
  /** Physical pin R15: ~{BS1}/PJ5; bidirectional. */
  "~{BS1}/PJ5": "R15",
  /** Physical pin R16: ~{BS0}/PJ4; bidirectional. */
  "~{BS0}/PJ4": "R16",
  /** Physical pin T1: VSSA; input. */
  "VSSA_T1": "T1",
  /** Physical pin T2: AN2/PQB2/ANY; bidirectional. */
  "AN2/PQB2/ANY": "T2",
  /** Physical pin T3: AN0/PQB0/ANW; bidirectional. */
  "AN0/PQB0/ANW": "T3",
  /** Physical pin T4: AN53/PQA1/MA1; bidirectional. */
  "AN53/PQA1/MA1": "T4",
  /** Physical pin T5: VRL; input. */
  "VRL": "T5",
  /** Physical pin T6: D2/PD2; bidirectional. */
  "D2/PD2": "T6",
  /** Physical pin T7: UTXD0/PUA0; bidirectional. */
  "UTXD0/PUA0": "T7",
  /** Physical pin T8: CLKIN/EXTAL; input. */
  "CLKIN/EXTAL": "T8",
  /** Physical pin T9: TCLK; input. */
  "TCLK": "T9",
  /** Physical pin T10: DSO/TDO; output. */
  "DSO/TDO": "T10",
  /** Physical pin T11: RCON; input. */
  "RCON": "T11",
  /** Physical pin T12: GPTB3/PTB3; bidirectional. */
  "GPTB3/PTB3": "T12",
  /** Physical pin T13: GPTA3/PTA3; bidirectional. */
  "GPTA3/PTA3": "T13",
  /** Physical pin T14: CLKMOD1; input. */
  "CLKMOD1": "T14",
  /** Physical pin T15: ~{BS2}/PJ6; bidirectional. */
  "~{BS2}/PJ6": "T15",
  /** Physical pin T16: GND; power_in. */
  "GND_T16": "T16",
}) {
  override schema = "MCU_NXP_ColdFire:MCF5282";
  override referencePrefix = "U";
}

/**
 * MCF5328-BGA256
 *
 * KiCad symbol: `MCU_NXP_ColdFire:MCF5328-BGA256`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCF5328_BGA256 extends Component.withPins({
  /** Physical pin A2: FEC_TXCLK; input. */
  "FEC_TXCLK": "A2",
  /** Physical pin A3: LCD_D4/FEC_TXER; output. */
  "LCD_D4/FEC_TXER": "A3",
  /** Physical pin A4: LCD_D5/FEC_TXEN; output. */
  "LCD_D5/FEC_TXEN": "A4",
  /** Physical pin A5: LCD_D9/FEC_RXD1; output. */
  "LCD_D9/FEC_RXD1": "A5",
  /** Physical pin A6: FEC_RXD2/ULPI_DATA6; input. */
  "FEC_RXD2/ULPI_DATA6": "A6",
  /** Physical pin A7: LCD_D15/FEC_COL; output. */
  "LCD_D15/FEC_COL": "A7",
  /** Physical pin A8: FEC_COL/ULPI_CLK; input. */
  "FEC_COL/ULPI_CLK": "A8",
  /** Physical pin A9: LCD_CLS; output. */
  "LCD_CLS": "A9",
  /** Physical pin A10: LCD_LSCLK; output. */
  "LCD_LSCLK": "A10",
  /** Physical pin A11: LCD_PS; output. */
  "LCD_PS": "A11",
  /** Physical pin A12: FB_CS3; output. */
  "FB_CS3": "A12",
  /** Physical pin A13: FB_CS4; output. */
  "FB_CS4": "A13",
  /** Physical pin A14: A20; output. */
  "A20": "A14",
  /** Physical pin A15: A17; output. */
  "A17": "A15",
  /** Physical pin A16: TEST; input. */
  "TEST": "A16",
  /** Physical pin B1: FEC_TXER; output. */
  "FEC_TXER": "B1",
  /** Physical pin B2: FEC_TXEN; output. */
  "FEC_TXEN": "B2",
  /** Physical pin B3: LCD_D1/FEC_TXD1; output. */
  "LCD_D1/FEC_TXD1": "B3",
  /** Physical pin B4: LCD_D3/FEC_TXD3; output. */
  "LCD_D3/FEC_TXD3": "B4",
  /** Physical pin B5: LCD_D8/FEC_RXD0; output. */
  "LCD_D8/FEC_RXD0": "B5",
  /** Physical pin B6: FEC_RXD1/ULPI_DATA5; input. */
  "FEC_RXD1/ULPI_DATA5": "B6",
  /** Physical pin B7: LCD_D14/FEC_CRS; output. */
  "LCD_D14/FEC_CRS": "B7",
  /** Physical pin B8: FEC_CRS/ULPI_DIR; input. */
  "FEC_CRS/ULPI_DIR": "B8",
  /** Physical pin B9: LCD_ACD/LCD_OE; output. */
  "LCD_ACD/LCD_OE": "B9",
  /** Physical pin B10: LCD_LP/LCD_HSYNC; output. */
  "LCD_LP/LCD_HSYNC": "B10",
  /** Physical pin B11: LCD_REV; output. */
  "LCD_REV": "B11",
  /** Physical pin B12: FB_CS2; output. */
  "FB_CS2": "B12",
  /** Physical pin B13: FB_CS5; output. */
  "FB_CS5": "B13",
  /** Physical pin B14: A19; output. */
  "A19": "B14",
  /** Physical pin B15: A16; output. */
  "A16": "B15",
  /** Physical pin B16: A14/SD_BA0; output. */
  "A14/SD_BA0": "B16",
  /** Physical pin C1: FEC_MDC/I2C_SCL; output. */
  "FEC_MDC/I2C_SCL": "C1",
  /** Physical pin C2: FEC_MDIO/I2C_SDA; bidirectional. */
  "FEC_MDIO/I2C_SDA": "C2",
  /** Physical pin C3: LCD_D0/FEC_TXD0; output. */
  "LCD_D0/FEC_TXD0": "C3",
  /** Physical pin C4: LCD_D2/FEC_TXD2; output. */
  "LCD_D2/FEC_TXD2": "C4",
  /** Physical pin C5: LCD_D7/FEC_RXER; output. */
  "LCD_D7/FEC_RXER": "C5",
  /** Physical pin C6: FEC_RXD0/ULPI_DATA4; input. */
  "FEC_RXD0/ULPI_DATA4": "C6",
  /** Physical pin C7: LCD_D13/FEC_RXCLK; output. */
  "LCD_D13/FEC_RXCLK": "C7",
  /** Physical pin C8: FEC_RXCLK/ULPI_NXT; input. */
  "FEC_RXCLK/ULPI_NXT": "C8",
  /** Physical pin C9: LCD_D17; output. */
  "LCD_D17": "C9",
  /** Physical pin C10: LCD_FLM/LCD_VSYNC; output. */
  "LCD_FLM/LCD_VSYNC": "C10",
  /** Physical pin C11: LCD_SPL_SPR; output. */
  "LCD_SPL_SPR": "C11",
  /** Physical pin C12: FB_CS1; output. */
  "FB_CS1": "C12",
  /** Physical pin C13: A23/FB_CS5; output. */
  "A23/FB_CS5": "C13",
  /** Physical pin C14: A18; output. */
  "A18": "C14",
  /** Physical pin C15: A13/SD_A13; output. */
  "A13/SD_A13": "C15",
  /** Physical pin C16: A12/SD_A12; output. */
  "A12/SD_A12": "C16",
  /** Physical pin D1: FEC_TXD1/ULPI_DATA1; output. */
  "FEC_TXD1/ULPI_DATA1": "D1",
  /** Physical pin D2: FEC_TXD2/ULPI_DATA2; output. */
  "FEC_TXD2/ULPI_DATA2": "D2",
  /** Physical pin D3: FEC_TDX3/ULPI_DATA3; output. */
  "FEC_TDX3/ULPI_DATA3": "D3",
  /** Physical pin D4: FEC_RXER; input. */
  "FEC_RXER": "D4",
  /** Physical pin D5: LCD_D6/FEC_TXCLK; output. */
  "LCD_D6/FEC_TXCLK": "D5",
  /** Physical pin D6: LCD_D11/FEC_RXD3; output. */
  "LCD_D11/FEC_RXD3": "D6",
  /** Physical pin D7: LCD_D12/FEC_RXDV; output. */
  "LCD_D12/FEC_RXDV": "D7",
  /** Physical pin D8: FEC_RXDV/ULPI_STP; input. */
  "FEC_RXDV/ULPI_STP": "D8",
  /** Physical pin D9: LCD_D16; output. */
  "LCD_D16": "D9",
  /** Physical pin D10: LCD_CONTRAST; output. */
  "LCD_CONTRAST": "D10",
  /** Physical pin D11: /U1CTS/SSI_BCLK; input. */
  "/U1CTS/SSI_BCLK": "D11",
  /** Physical pin D12: FB_CS0; output. */
  "FB_CS0": "D12",
  /** Physical pin D13: A22/FB_CS4; output. */
  "A22/FB_CS4": "D13",
  /** Physical pin D14: A15/SD_BA1; output. */
  "A15/SD_BA1": "D14",
  /** Physical pin D15: A11/SD-A11; output. */
  "A11/SD-A11": "D15",
  /** Physical pin D16: A10; output. */
  "A10": "D16",
  /** Physical pin E1: DT2IN/DT2OUT; input. */
  "DT2IN/DT2OUT": "E1",
  /** Physical pin E2: DT1IN/DT1OUT; input. */
  "DT1IN/DT1OUT": "E2",
  /** Physical pin E3: DT0IN/TD0OUT; input. */
  "DT0IN/TD0OUT": "E3",
  /** Physical pin E4: FEC_TXD0/ULPI_DATA0; output. */
  "FEC_TXD0/ULPI_DATA0": "E4",
  /** Physical pin E5: IVDD; power_in. */
  "IVDD_E5": "E5",
  /** Physical pin E6: LCD_D10/FEC_RXD2; output. */
  "LCD_D10/FEC_RXD2": "E6",
  /** Physical pin E7: FEC_RXD3/ULPI_DATA7; input. */
  "FEC_RXD3/ULPI_DATA7": "E7",
  /** Physical pin E8: EVDD; power_in. */
  "EVDD_E8": "E8",
  /** Physical pin E9: SD_VDD; power_in. */
  "SD_VDD_E9": "E9",
  /** Physical pin E10: /U1RTS/SSI_FS; output. */
  "/U1RTS/SSI_FS": "E10",
  /** Physical pin E11: U1TXD/SSI_TXD; output. */
  "U1TXD/SSI_TXD": "E11",
  /** Physical pin E12: U1RXD/SSI_RXD; input. */
  "U1RXD/SSI_RXD": "E12",
  /** Physical pin E13: A21; output. */
  "A21": "E13",
  /** Physical pin E14: A9/SD_A9; output. */
  "A9/SD_A9": "E14",
  /** Physical pin E15: A8/SD_A8; output. */
  "A8/SD_A8": "E15",
  /** Physical pin E16: A7/SD_A7; output. */
  "A7/SD_A7": "E16",
  /** Physical pin F1: DT3IN/DT3OUT; input. */
  "DT3IN/DT3OUT": "F1",
  /** Physical pin F2: I2C_SDA; bidirectional. */
  "I2C_SDA": "F2",
  /** Physical pin F3: I2C_SCL; bidirectional. */
  "I2C_SCL": "F3",
  /** Physical pin F4: SSI_BCLK/U2CTS; bidirectional. */
  "SSI_BCLK/U2CTS": "F4",
  /** Physical pin F5: EVDD; power_in. */
  "EVDD_F5": "F5",
  /** Physical pin F6: EVDD; power_in. */
  "EVDD_F6": "F6",
  /** Physical pin F7: EVDD; power_in. */
  "EVDD_F7": "F7",
  /** Physical pin F8: EVDD; power_in. */
  "EVDD_F8": "F8",
  /** Physical pin F9: SD_VDD; power_in. */
  "SD_VDD_F9": "F9",
  /** Physical pin F10: SD_VDD; power_in. */
  "SD_VDD_F10": "F10",
  /** Physical pin F11: SD_VDD; power_in. */
  "SD_VDD_F11": "F11",
  /** Physical pin F13: A6/SD_A6; output. */
  "A6/SD_A6": "F13",
  /** Physical pin F14: A5/SD_A5; output. */
  "A5/SD_A5": "F14",
  /** Physical pin F15: A4/SD_A4; output. */
  "A4/SD_A4": "F15",
  /** Physical pin F16: A3/SD_A3; output. */
  "A3/SD_A3": "F16",
  /** Physical pin G1: SSI_TXD/U2TXD; output. */
  "SSI_TXD/U2TXD": "G1",
  /** Physical pin G2: SSI_RXD/U2RXD; input. */
  "SSI_RXD/U2RXD": "G2",
  /** Physical pin G3: SSI_FS/U2RTS; bidirectional. */
  "SSI_FS/U2RTS": "G3",
  /** Physical pin G4: SSI_MCLK; bidirectional. */
  "SSI_MCLK": "G4",
  /** Physical pin G5: EVDD; power_in. */
  "EVDD_G5": "G5",
  /** Physical pin G6: EVDD; power_in. */
  "EVDD_G6": "G6",
  /** Physical pin G7: VSS; power_in. */
  "VSS_G7": "G7",
  /** Physical pin G8: VSS; power_in. */
  "VSS_G8": "G8",
  /** Physical pin G9: VSS; power_in. */
  "VSS_G9": "G9",
  /** Physical pin G10: VSS; power_in. */
  "VSS_G10": "G10",
  /** Physical pin G11: SD_VDD; power_in. */
  "SD_VDD_G11": "G11",
  /** Physical pin G12: IVDD; power_in. */
  "IVDD_G12": "G12",
  /** Physical pin G13: TA; input. */
  "TA": "G13",
  /** Physical pin G14: A0/SD_A0; output. */
  "A0/SD_A0": "G14",
  /** Physical pin G15: A1/SD_A1; output. */
  "A1/SD_A1": "G15",
  /** Physical pin G16: A2/SD_A2; output. */
  "A2/SD_A2": "G16",
  /** Physical pin H1: /SD_CS0; output. */
  "/SD_CS0": "H1",
  /** Physical pin H2: SD_CKE; output. */
  "SD_CKE": "H2",
  /** Physical pin H3: /SD_WE; output. */
  "/SD_WE": "H3",
  /** Physical pin H4: TS/DACK0; output. */
  "TS/DACK0": "H4",
  /** Physical pin H5: EVDD; power_in. */
  "EVDD_H5": "H5",
  /** Physical pin H6: EVDD; power_in. */
  "EVDD_H6": "H6",
  /** Physical pin H7: VSS; power_in. */
  "VSS_H7": "H7",
  /** Physical pin H8: VSS; power_in. */
  "VSS_H8": "H8",
  /** Physical pin H9: VSS; power_in. */
  "VSS_H9": "H9",
  /** Physical pin H10: VSS; power_in. */
  "VSS_H10": "H10",
  /** Physical pin H11: SD_VDD; power_in. */
  "SD_VDD_H11": "H11",
  /** Physical pin H12: DRAMSEL; input. */
  "DRAMSEL": "H12",
  /** Physical pin H13: PWM7; bidirectional. */
  "PWM7": "H13",
  /** Physical pin H14: PWM5; bidirectional. */
  "PWM5": "H14",
  /** Physical pin H15: PWM3/DT3OUT; bidirectional. */
  "PWM3/DT3OUT": "H15",
  /** Physical pin H16: PWM1/DT2OUT; bidirectional. */
  "PWM1/DT2OUT": "H16",
  /** Physical pin J1: D13/FB_D29; output. */
  "D13/FB_D29": "J1",
  /** Physical pin J2: D14/FB_D30; output. */
  "D14/FB_D30": "J2",
  /** Physical pin J3: D15/FB_D31; output. */
  "D15/FB_D31": "J3",
  /** Physical pin J4: /SD_CS1; output. */
  "/SD_CS1": "J4",
  /** Physical pin J5: SD_VDD; power_in. */
  "SD_VDD_J5": "J5",
  /** Physical pin J6: SD_VDD; power_in. */
  "SD_VDD_J6": "J6",
  /** Physical pin J7: VSS; power_in. */
  "VSS_J7": "J7",
  /** Physical pin J8: VSS; power_in. */
  "VSS_J8": "J8",
  /** Physical pin J9: VSS; power_in. */
  "VSS_J9": "J9",
  /** Physical pin J10: VSS; power_in. */
  "VSS_J10": "J10",
  /** Physical pin J11: EVDD; power_in. */
  "EVDD_J11": "J11",
  /** Physical pin J12: PLL_VDD; power_in. */
  "PLL_VDD": "J12",
  /** Physical pin J13: /IRQ7; input. */
  "/IRQ7": "J13",
  /** Physical pin J14: /IRQ6/VBUS_EN; input. */
  "/IRQ6/VBUS_EN": "J14",
  /** Physical pin J15: /IRQ5/VBUS_OC; input. */
  "/IRQ5/VBUS_OC": "J15",
  /** Physical pin J16: /IRQ4/SSI_MCLK; input. */
  "/IRQ4/SSI_MCLK": "J16",
  /** Physical pin K1: D9/FB_D25; output. */
  "D9/FB_D25": "K1",
  /** Physical pin K2: D10/FB_D26; output. */
  "D10/FB_D26": "K2",
  /** Physical pin K3: D11/FB_D27; output. */
  "D11/FB_D27": "K3",
  /** Physical pin K4: D12/FB_D28; output. */
  "D12/FB_D28": "K4",
  /** Physical pin K5: SD_VDD; power_in. */
  "SD_VDD_K5": "K5",
  /** Physical pin K6: SD_VDD; power_in. */
  "SD_VDD_K6": "K6",
  /** Physical pin K7: VSS; power_in. */
  "VSS_K7": "K7",
  /** Physical pin K8: VSS; power_in. */
  "VSS_K8": "K8",
  /** Physical pin K9: VSS; power_in. */
  "VSS_K9": "K9",
  /** Physical pin K10: VSS; power_in. */
  "VSS_K10": "K10",
  /** Physical pin K11: EVDD; power_in. */
  "EVDD_K11": "K11",
  /** Physical pin K12: EVDD; power_in. */
  "EVDD_K12": "K12",
  /** Physical pin K13: PLL_VSS; power_in. */
  "PLL_VSS": "K13",
  /** Physical pin K14: /IRQ3; input. */
  "/IRQ3": "K14",
  /** Physical pin K15: /IRQ2/USB_CLKIN; input. */
  "/IRQ2/USB_CLKIN": "K15",
  /** Physical pin K16: /IRQ1/DREQ1; input. */
  "/IRQ1/DREQ1": "K16",
  /** Physical pin L1: SD_DQS3; input. */
  "SD_DQS3": "L1",
  /** Physical pin L2: D8/FB_D24; output. */
  "D8/FB_D24": "L2",
  /** Physical pin L3: BE/BWE1/SD_DQM1; output. */
  "BE/BWE1/SD_DQM1": "L3",
  /** Physical pin L4: BE/BWE3/SD_DQM3; output. */
  "BE/BWE3/SD_DQM3": "L4",
  /** Physical pin L5: SD_VDD; power_in. */
  "SD_VDD_L5": "L5",
  /** Physical pin L6: SD_VDD; power_in. */
  "SD_VDD_L6": "L6",
  /** Physical pin L7: SD_VDD; power_in. */
  "SD_VDD_L7": "L7",
  /** Physical pin L8: SD_VDD; power_in. */
  "SD_VDD_L8": "L8",
  /** Physical pin L9: EVDD; power_in. */
  "EVDD_L9": "L9",
  /** Physical pin L10: EVDD; power_in. */
  "EVDD_L10": "L10",
  /** Physical pin L11: EVDD; power_in. */
  "EVDD_L11": "L11",
  /** Physical pin L12: VSS; power_in. */
  "VSS_L12": "L12",
  /** Physical pin L13: VSS; power_in. */
  "VSS_L13": "L13",
  /** Physical pin L14: USBOTG_VDD; power_in. */
  "USBOTG_VDD": "L14",
  /** Physical pin L15: USBOTG_M; bidirectional. */
  "USBOTG_M": "L15",
  /** Physical pin L16: USBOTG_P; bidirectional. */
  "USBOTG_P": "L16",
  /** Physical pin M1: D31/SD_D31; output. */
  "D31/SD_D31": "M1",
  /** Physical pin M2: D30/SD_D30; output. */
  "D30/SD_D30": "M2",
  /** Physical pin M3: D29/SD_D29; output. */
  "D29/SD_D29": "M3",
  /** Physical pin M4: D28/SD_D28; output. */
  "D28/SD_D28": "M4",
  /** Physical pin M5: IVDD; power_in. */
  "IVDD_M5": "M5",
  /** Physical pin M6: SD_VDD; power_in. */
  "SD_VDD_M6": "M6",
  /** Physical pin M7: SD_VDD; power_in. */
  "SD_VDD_M7": "M7",
  /** Physical pin M8: /RCON; input. */
  "/RCON": "M8",
  /** Physical pin M9: EVDD; power_in. */
  "EVDD_M9": "M9",
  /** Physical pin M10: EVDD; power_in. */
  "EVDD_M10": "M10",
  /** Physical pin M11: IVDD; power_in. */
  "IVDD_M11": "M11",
  /** Physical pin M12: IVDD; power_in. */
  "IVDD_M12": "M12",
  /** Physical pin M13: JTAG_EN; input. */
  "JTAG_EN": "M13",
  /** Physical pin M14: USBHOST_VSS; power_in. */
  "USBHOST_VSS": "M14",
  /** Physical pin M15: USBHOST_M; bidirectional. */
  "USBHOST_M": "M15",
  /** Physical pin M16: USBHOST_P; bidirectional. */
  "USBHOST_P": "M16",
  /** Physical pin N1: D27/SD_D27; output. */
  "D27/SD_D27": "N1",
  /** Physical pin N2: D26/SD_D26; output. */
  "D26/SD_D26": "N2",
  /** Physical pin N3: D25/SD_D25; output. */
  "D25/SD_D25": "N3",
  /** Physical pin N4: D24/SD_D24; output. */
  "D24/SD_D24": "N4",
  /** Physical pin N5: D19/SD_D19; output. */
  "D19/SD_D19": "N5",
  /** Physical pin N6: BE/BWE0/SD_DQM0; output. */
  "BE/BWE0/SD_DQM0": "N6",
  /** Physical pin N7: D6/FB_D22; output. */
  "D6/FB_D22": "N7",
  /** Physical pin N8: R/W; output. */
  "R/W": "N8",
  /** Physical pin N9: DDATA3; output. */
  "DDATA3": "N9",
  /** Physical pin N10: DDATA1; output. */
  "DDATA1": "N10",
  /** Physical pin N11: DSO/TDO; output. */
  "DSO/TDO": "N11",
  /** Physical pin N12: QSPI_DIN/U2CTS; input. */
  "QSPI_DIN/U2CTS": "N12",
  /** Physical pin N13: PLL_TEST; input. */
  "PLL_TEST": "N13",
  /** Physical pin N14: DSI/TDI; input. */
  "DSI/TDI": "N14",
  /** Physical pin N15: /RESET; input. */
  "/RESET": "N15",
  /** Physical pin N16: XTAL; output. */
  "XTAL": "N16",
  /** Physical pin P1: SD_SDR_DQS; output. */
  "SD_SDR_DQS": "P1",
  /** Physical pin P2: SD_A10; output. */
  "SD_A10": "P2",
  /** Physical pin P3: /SD_SCAS; output. */
  "/SD_SCAS": "P3",
  /** Physical pin P4: D22/SD_D22; output. */
  "D22/SD_D22": "P4",
  /** Physical pin P5: D18/SD_D18; output. */
  "D18/SD_D18": "P5",
  /** Physical pin P6: BE/BWE2/SD_DQM2; output. */
  "BE/BWE2/SD_DQM2": "P6",
  /** Physical pin P7: D5/FB_D21; output. */
  "D5/FB_D21": "P7",
  /** Physical pin P8: D2/FB_D18; output. */
  "D2/FB_D18": "P8",
  /** Physical pin P9: DDATA2; output. */
  "DDATA2": "P9",
  /** Physical pin P10: DDATA0; output. */
  "DDATA0": "P10",
  /** Physical pin P11: QSPI_CSO/PWM5; output. */
  "QSPI_CSO/PWM5": "P11",
  /** Physical pin P12: QSPI_DOUT/I2C_SDA; output. */
  "QSPI_DOUT/I2C_SDA": "P12",
  /** Physical pin P13: EXTAL32K; input. */
  "EXTAL32K": "P13",
  /** Physical pin P14: /RSTOUT; output. */
  "/RSTOUT": "P14",
  /** Physical pin P15: DSCLK/TRST; input. */
  "DSCLK/TRST": "P15",
  /** Physical pin P16: EXTAL; input. */
  "EXTAL": "P16",
  /** Physical pin R1: SD_CLK; output. */
  "SD_CLK": "R1",
  /** Physical pin R2: /SD_CLK; output. */
  "/SD_CLK": "R2",
  /** Physical pin R3: /SD_SRAS; output. */
  "/SD_SRAS": "R3",
  /** Physical pin R4: D21/SD_D21; output. */
  "D21/SD_D21": "R4",
  /** Physical pin R5: D17/SD_D17; output. */
  "D17/SD_D17": "R5",
  /** Physical pin R6: D7/FB_D23; output. */
  "D7/FB_D23": "R6",
  /** Physical pin R7: D4/FB_D20; output. */
  "D4/FB_D20": "R7",
  /** Physical pin R8: D1/FB_D17; output. */
  "D1/FB_D17": "R8",
  /** Physical pin R9: OE; output. */
  "OE": "R9",
  /** Physical pin R10: PST3; output. */
  "PST3": "R10",
  /** Physical pin R11: PST1; output. */
  "PST1": "R11",
  /** Physical pin R12: QSPI_CLK/I2C_SCL; output. */
  "QSPI_CLK/I2C_SCL": "R12",
  /** Physical pin R13: XTAL32K; output. */
  "XTAL32K": "R13",
  /** Physical pin R14: U0RXD; input. */
  "U0RXD": "R14",
  /** Physical pin R15: /U0CTS; input. */
  "/U0CTS": "R15",
  /** Physical pin R16: BKPT/TMS; input. */
  "BKPT/TMS": "R16",
  /** Physical pin T2: FB_CLK; output. */
  "FB_CLK": "T2",
  /** Physical pin T3: D23/SD_D23; output. */
  "D23/SD_D23": "T3",
  /** Physical pin T4: D20/SD_D20; output. */
  "D20/SD_D20": "T4",
  /** Physical pin T5: D16/SD_D16; output. */
  "D16/SD_D16": "T5",
  /** Physical pin T6: SD_DQS2; input. */
  "SD_DQS2": "T6",
  /** Physical pin T7: D3/FB_D19; output. */
  "D3/FB_D19": "T7",
  /** Physical pin T8: D0/FB_D16; output. */
  "D0/FB_D16": "T8",
  /** Physical pin T9: PSTCLK/TCLK; output. */
  "PSTCLK/TCLK": "T9",
  /** Physical pin T10: PST2; output. */
  "PST2": "T10",
  /** Physical pin T11: PST0; output. */
  "PST0": "T11",
  /** Physical pin T12: QSPI_CS2/U2RTS; output. */
  "QSPI_CS2/U2RTS": "T12",
  /** Physical pin T13: QSPI_CS1/PWM7; output. */
  "QSPI_CS1/PWM7": "T13",
  /** Physical pin T14: U0TXD; output. */
  "U0TXD": "T14",
  /** Physical pin T15: /U0RTS; output. */
  "/U0RTS": "T15",
}) {
  override schema = "MCU_NXP_ColdFire:MCF5328-BGA256";
  override referencePrefix = "U";
}

/**
 * Coldfire CPU
 *
 * KiCad symbol: `MCU_NXP_ColdFire:MCF5407`. Reference prefix: `U`.
 * Keywords: COLDFIRE.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCF5407 extends Component.withPins({
  /** Physical pin 1: IVCC; power_in. */
  "IVCC_1": "1",
  /** Physical pin 2: A0; bidirectional. */
  "A0": "2",
  /** Physical pin 3: A1; bidirectional. */
  "A1": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: A2; bidirectional. */
  "A2": "5",
  /** Physical pin 6: A3; bidirectional. */
  "A3": "6",
  /** Physical pin 7: EVCC; power_in. */
  "EVCC_7": "7",
  /** Physical pin 8: A4; bidirectional. */
  "A4": "8",
  /** Physical pin 9: A5; bidirectional. */
  "A5": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: A6; bidirectional. */
  "A6": "11",
  /** Physical pin 12: A7; bidirectional. */
  "A7": "12",
  /** Physical pin 13: EVCC; power_in. */
  "EVCC_13": "13",
  /** Physical pin 14: A8; bidirectional. */
  "A8": "14",
  /** Physical pin 15: A9; bidirectional. */
  "A9": "15",
  /** Physical pin 16: A10; bidirectional. */
  "A10": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: A11; bidirectional. */
  "A11": "18",
  /** Physical pin 19: A12; bidirectional. */
  "A12": "19",
  /** Physical pin 20: A13; bidirectional. */
  "A13": "20",
  /** Physical pin 21: EVCC; power_in. */
  "EVCC_21": "21",
  /** Physical pin 22: A14; bidirectional. */
  "A14": "22",
  /** Physical pin 23: A15; bidirectional. */
  "A15": "23",
  /** Physical pin 24: A16; bidirectional. */
  "A16": "24",
  /** Physical pin 25: GND; power_in. */
  "GND_25": "25",
  /** Physical pin 26: A17; bidirectional. */
  "A17": "26",
  /** Physical pin 27: A18; bidirectional. */
  "A18": "27",
  /** Physical pin 28: A19; bidirectional. */
  "A19": "28",
  /** Physical pin 29: EVCC; power_in. */
  "EVCC_29": "29",
  /** Physical pin 30: A20; bidirectional. */
  "A20": "30",
  /** Physical pin 31: A21; bidirectional. */
  "A21": "31",
  /** Physical pin 32: A22; bidirectional. */
  "A22": "32",
  /** Physical pin 33: GND; power_in. */
  "GND_33": "33",
  /** Physical pin 34: A23; bidirectional. */
  "A23": "34",
  /** Physical pin 35: PP8/A24; bidirectional. */
  "PP8/A24": "35",
  /** Physical pin 36: PP9/A25; bidirectional. */
  "PP9/A25": "36",
  /** Physical pin 37: EVCC; power_in. */
  "EVCC_37": "37",
  /** Physical pin 38: PP10/A26; bidirectional. */
  "PP10/A26": "38",
  /** Physical pin 39: PP11/A27; bidirectional. */
  "PP11/A27": "39",
  /** Physical pin 40: PP12/A28; bidirectional. */
  "PP12/A28": "40",
  /** Physical pin 41: GND; power_in. */
  "GND_41": "41",
  /** Physical pin 42: PP13/A29; bidirectional. */
  "PP13/A29": "42",
  /** Physical pin 43: PP14/A30; bidirectional. */
  "PP14/A30": "43",
  /** Physical pin 44: PP15/A31; bidirectional. */
  "PP15/A31": "44",
  /** Physical pin 45: EVCC; power_in. */
  "EVCC_45": "45",
  /** Physical pin 46: SIZ0; bidirectional. */
  "SIZ0": "46",
  /** Physical pin 47: SIZ1; bidirectional. */
  "SIZ1": "47",
  /** Physical pin 48: GND; power_in. */
  "GND_48": "48",
  /** Physical pin 49: /OE; output. */
  "/OE": "49",
  /** Physical pin 50: /CS0; output. */
  "/CS0": "50",
  /** Physical pin 51: /CS1; output. */
  "/CS1": "51",
  /** Physical pin 52: EVCC; power_in. */
  "EVCC_52": "52",
  /** Physical pin 53: GND; power_in. */
  "GND_53": "53",
  /** Physical pin 54: /CS2; output. */
  "/CS2": "54",
  /** Physical pin 55: /CS3; output. */
  "/CS3": "55",
  /** Physical pin 56: /CS4; output. */
  "/CS4": "56",
  /** Physical pin 57: IVCC; power_in. */
  "IVCC_57": "57",
  /** Physical pin 58: /CS5; output. */
  "/CS5": "58",
  /** Physical pin 59: /CS6; output. */
  "/CS6": "59",
  /** Physical pin 60: /CS7; output. */
  "/CS7": "60",
  /** Physical pin 61: GND; power_in. */
  "GND_61": "61",
  /** Physical pin 62: /AS; bidirectional. */
  "/AS": "62",
  /** Physical pin 63: R/W; bidirectional. */
  "R/W": "63",
  /** Physical pin 64: /TA; bidirectional. */
  "/TA": "64",
  /** Physical pin 65: EVCC; power_in. */
  "EVCC_65": "65",
  /** Physical pin 66: /TS; bidirectional. */
  "/TS": "66",
  /** Physical pin 67: /RSTI; input. */
  "/RSTI": "67",
  /** Physical pin 68: /IRQ7; input. */
  "/IRQ7": "68",
  /** Physical pin 69: GND; power_in. */
  "GND_69": "69",
  /** Physical pin 70: /IRQ5; input. */
  "/IRQ5": "70",
  /** Physical pin 71: /IRQ3; input. */
  "/IRQ3": "71",
  /** Physical pin 72: /IRQ1; input. */
  "/IRQ1": "72",
  /** Physical pin 73: IVCC; power_in. */
  "IVCC_73": "73",
  /** Physical pin 74: /BR; output. */
  "/BR": "74",
  /** Physical pin 75: /BD; output. */
  "/BD": "75",
  /** Physical pin 76: /BG; input. */
  "/BG": "76",
  /** Physical pin 77: GND; power_in. */
  "GND_77": "77",
  /** Physical pin 78: TOUT1; output. */
  "TOUT1": "78",
  /** Physical pin 79: TOUT0; output. */
  "TOUT0": "79",
  /** Physical pin 80: TIN0; input. */
  "TIN0": "80",
  /** Physical pin 81: EVCC; power_in. */
  "EVCC_81": "81",
  /** Physical pin 82: TIN1; input. */
  "TIN1": "82",
  /** Physical pin 83: /RAS0; output. */
  "/RAS0": "83",
  /** Physical pin 84: /RAS1; output. */
  "/RAS1": "84",
  /** Physical pin 85: GND; power_in. */
  "GND_85": "85",
  /** Physical pin 86: /CAS0; output. */
  "/CAS0": "86",
  /** Physical pin 87: /CAS1; output. */
  "/CAS1": "87",
  /** Physical pin 88: /CAS2; output. */
  "/CAS2": "88",
  /** Physical pin 89: EVCC; power_in. */
  "EVCC_89": "89",
  /** Physical pin 90: /CAS3; output. */
  "/CAS3": "90",
  /** Physical pin 91: /DRAMW; output. */
  "/DRAMW": "91",
  /** Physical pin 92: /SRAS; output. */
  "/SRAS": "92",
  /** Physical pin 93: GND; power_in. */
  "GND_93": "93",
  /** Physical pin 94: /SCAS; output. */
  "/SCAS": "94",
  /** Physical pin 95: SCKE; output. */
  "SCKE": "95",
  /** Physical pin 96: /BE0; bidirectional. */
  "/BE0": "96",
  /** Physical pin 97: EVCC; power_in. */
  "EVCC_97": "97",
  /** Physical pin 98: /BE1; bidirectional. */
  "/BE1": "98",
  /** Physical pin 99: /BE2; bidirectional. */
  "/BE2": "99",
  /** Physical pin 100: /BE3; bidirectional. */
  "/BE3": "100",
  /** Physical pin 101: GND; power_in. */
  "GND_101": "101",
  /** Physical pin 102: SCL; bidirectional. */
  "SCL": "102",
  /** Physical pin 103: SDA; bidirectional. */
  "SDA": "103",
  /** Physical pin 104: GND; power_in. */
  "GND_104": "104",
  /** Physical pin 105: IVCC; power_in. */
  "IVCC_105": "105",
  /** Physical pin 106: D31; bidirectional. */
  "D31": "106",
  /** Physical pin 107: D30; bidirectional. */
  "D30": "107",
  /** Physical pin 108: D29; bidirectional. */
  "D29": "108",
  /** Physical pin 109: GND; power_in. */
  "GND_109": "109",
  /** Physical pin 110: D28; bidirectional. */
  "D28": "110",
  /** Physical pin 111: D27; bidirectional. */
  "D27": "111",
  /** Physical pin 112: D26; bidirectional. */
  "D26": "112",
  /** Physical pin 113: EVCC; power_in. */
  "EVCC_113": "113",
  /** Physical pin 114: D25; bidirectional. */
  "D25": "114",
  /** Physical pin 115: D24; bidirectional. */
  "D24": "115",
  /** Physical pin 116: D23; bidirectional. */
  "D23": "116",
  /** Physical pin 117: GND; power_in. */
  "GND_117": "117",
  /** Physical pin 118: D22; bidirectional. */
  "D22": "118",
  /** Physical pin 119: D21; bidirectional. */
  "D21": "119",
  /** Physical pin 120: D20; bidirectional. */
  "D20": "120",
  /** Physical pin 121: EVCC; power_in. */
  "EVCC_121": "121",
  /** Physical pin 122: D19; bidirectional. */
  "D19": "122",
  /** Physical pin 123: D18; bidirectional. */
  "D18": "123",
  /** Physical pin 124: D17; bidirectional. */
  "D17": "124",
  /** Physical pin 125: GND; power_in. */
  "GND_125": "125",
  /** Physical pin 126: D16; bidirectional. */
  "D16": "126",
  /** Physical pin 127: D15; bidirectional. */
  "D15": "127",
  /** Physical pin 128: D14; bidirectional. */
  "D14": "128",
  /** Physical pin 129: EVCC; power_in. */
  "EVCC_129": "129",
  /** Physical pin 130: D13; bidirectional. */
  "D13": "130",
  /** Physical pin 131: D12; bidirectional. */
  "D12": "131",
  /** Physical pin 132: D11; bidirectional. */
  "D11": "132",
  /** Physical pin 133: GND; power_in. */
  "GND_133": "133",
  /** Physical pin 134: D10; bidirectional. */
  "D10": "134",
  /** Physical pin 135: D9; bidirectional. */
  "D9": "135",
  /** Physical pin 136: D8; bidirectional. */
  "D8": "136",
  /** Physical pin 137: EVCC; power_in. */
  "EVCC_137": "137",
  /** Physical pin 138: D7; bidirectional. */
  "D7": "138",
  /** Physical pin 139: D6; bidirectional. */
  "D6": "139",
  /** Physical pin 140: D5; bidirectional. */
  "D5": "140",
  /** Physical pin 141: GND; power_in. */
  "GND_141": "141",
  /** Physical pin 142: D4; bidirectional. */
  "D4": "142",
  /** Physical pin 143: D3; bidirectional. */
  "D3": "143",
  /** Physical pin 144: D2; bidirectional. */
  "D2": "144",
  /** Physical pin 145: EVCC; power_in. */
  "EVCC_145": "145",
  /** Physical pin 146: D1; bidirectional. */
  "D1": "146",
  /** Physical pin 147: D0; bidirectional. */
  "D0": "147",
  /** Physical pin 148: GND; power_in. */
  "GND_148": "148",
  /** Physical pin 149: DSCLK; input. */
  "DSCLK": "149",
  /** Physical pin 150: TCK; input. */
  "TCK": "150",
  /** Physical pin 151: DSO; output. */
  "DSO": "151",
  /** Physical pin 152: IVCC; power_in. */
  "IVCC_152": "152",
  /** Physical pin 153: DSI; input. */
  "DSI": "153",
  /** Physical pin 154: /BKPT; input. */
  "/BKPT": "154",
  /** Physical pin 155: /HIZ; input. */
  "/HIZ": "155",
  /** Physical pin 156: GND; power_in. */
  "GND_156": "156",
  /** Physical pin 157: IVCC; power_in. */
  "IVCC_157": "157",
  /** Physical pin 158: /CTS1; input. */
  "/CTS1": "158",
  /** Physical pin 159: /RTS1; output. */
  "/RTS1": "159",
  /** Physical pin 160: RXD1; input. */
  "RXD1": "160",
  /** Physical pin 161: TXD1; output. */
  "TXD1": "161",
  /** Physical pin 162: GND; power_in. */
  "GND_162": "162",
  /** Physical pin 163: /CTS0; input. */
  "/CTS0": "163",
  /** Physical pin 164: /RTS0; output. */
  "/RTS0": "164",
  /** Physical pin 165: RXD0; input. */
  "RXD0": "165",
  /** Physical pin 166: TXD0; output. */
  "TXD0": "166",
  /** Physical pin 167: EVCC; power_in. */
  "EVCC_167": "167",
  /** Physical pin 168: EDGESEL; input. */
  "EDGESEL": "168",
  /** Physical pin 169: GND; power_in. */
  "GND_169": "169",
  /** Physical pin 170: BCLKO; output. */
  "BCLKO": "170",
  /** Physical pin 171: IVCC; power_in. */
  "IVCC_171": "171",
  /** Physical pin 172: /RSTO; output. */
  "/RSTO": "172",
  /** Physical pin 173: GND; power_in. */
  "GND_173": "173",
  /** Physical pin 174: CLKIN; output. */
  "CLKIN": "174",
  /** Physical pin 175: IVCC; power_in. */
  "IVCC_175": "175",
  /** Physical pin 176: MTMOD0; input. */
  "MTMOD0": "176",
  /** Physical pin 177: MTMOD1; input. */
  "MTMOD1": "177",
  /** Physical pin 178: PGND; passive. */
  "PGND": "178",
  /** Physical pin 180: PVCC; passive. */
  "PVCC": "180",
  /** Physical pin 181: MTMOD2; input. */
  "MTMOD2": "181",
  /** Physical pin 182: MTMOD3; input. */
  "MTMOD3": "182",
  /** Physical pin 183: GND; power_in. */
  "GND_183": "183",
  /** Physical pin 184: PSTCLK; output. */
  "PSTCLK": "184",
  /** Physical pin 185: IVCC; power_in. */
  "IVCC_185": "185",
  /** Physical pin 186: PSTDDATA0; output. */
  "PSTDDATA0": "186",
  /** Physical pin 187: PSTDDATA1; output. */
  "PSTDDATA1": "187",
  /** Physical pin 188: GND; power_in. */
  "GND_188": "188",
  /** Physical pin 189: PSTDDATA2; output. */
  "PSTDDATA2": "189",
  /** Physical pin 190: PSTDDATA3; output. */
  "PSTDDATA3": "190",
  /** Physical pin 191: EVCC; power_in. */
  "EVCC_191": "191",
  /** Physical pin 192: PSTDDATA4; output. */
  "PSTDDATA4": "192",
  /** Physical pin 193: PSTDDATA5; output. */
  "PSTDDATA5": "193",
  /** Physical pin 194: GND; power_in. */
  "GND_194": "194",
  /** Physical pin 195: PSTDDATA6; output. */
  "PSTDDATA6": "195",
  /** Physical pin 196: PSTDDATA7; output. */
  "PSTDDATA7": "196",
  /** Physical pin 197: IVCC; power_in. */
  "IVCC_197": "197",
  /** Physical pin 198: PP7/TIP; bidirectional. */
  "PP7/TIP": "198",
  /** Physical pin 199: PP6/DREQ0; bidirectional. */
  "PP6/DREQ0": "199",
  /** Physical pin 200: PP5/DREQ1; bidirectional. */
  "PP5/DREQ1": "200",
  /** Physical pin 201: GND; power_in. */
  "GND_201": "201",
  /** Physical pin 202: PP4/TM2; bidirectional. */
  "PP4/TM2": "202",
  /** Physical pin 203: PP3/TM1; bidirectional. */
  "PP3/TM1": "203",
  /** Physical pin 204: PP2/TM0; bidirectional. */
  "PP2/TM0": "204",
  /** Physical pin 205: EVCC; power_in. */
  "EVCC_205": "205",
  /** Physical pin 206: PP1/TT1; bidirectional. */
  "PP1/TT1": "206",
  /** Physical pin 207: PP0/TT0; bidirectional. */
  "PP0/TT0": "207",
  /** Physical pin 208: GND; power_in. */
  "GND_208": "208",
}) {
  override schema = "MCU_NXP_ColdFire:MCF5407";
  override referencePrefix = "U";
}

