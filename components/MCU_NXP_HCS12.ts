// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * HCS12 Microcontroller
 *
 * KiCad symbol: `MCU_NXP_HCS12:MC9S12DT256`. Reference prefix: `U`.
 * @see https://www.nxp.com/docs/en/fact-sheet/MC9S12DT256FS.pdf
 * Keywords: HCS12 MCU.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC9S12DT256 extends Component.withPins({
  /** Physical pin 1: SS1/PWM3/KWP3/PP3; bidirectional. */
  "SS1/PWM3/KWP3/PP3": "1",
  /** Physical pin 2: SCK1/PWM2/KWP2/PP2; bidirectional. */
  "SCK1/PWM2/KWP2/PP2": "2",
  /** Physical pin 3: MOSI1/PWM1/KWP1/PP1; bidirectional. */
  "MOSI1/PWM1/KWP1/PP1": "3",
  /** Physical pin 4: MISO1/PWM0/KWP0/PP0; bidirectional. */
  "MISO1/PWM0/KWP0/PP0": "4",
  /** Physical pin 5: XADDR17/PK3; bidirectional. */
  "XADDR17/PK3": "5",
  /** Physical pin 6: XADDR16/PK2; bidirectional. */
  "XADDR16/PK2": "6",
  /** Physical pin 7: XADDR15/PK1; bidirectional. */
  "XADDR15/PK1": "7",
  /** Physical pin 8: XADDR14/PK0; bidirectional. */
  "XADDR14/PK0": "8",
  /** Physical pin 9: PT0/IOC0; bidirectional. */
  "PT0/IOC0": "9",
  /** Physical pin 10: PT1/IOC1; bidirectional. */
  "PT1/IOC1": "10",
  /** Physical pin 11: PT2/IOC2; bidirectional. */
  "PT2/IOC2": "11",
  /** Physical pin 12: PT3/IOC3; bidirectional. */
  "PT3/IOC3": "12",
  /** Physical pin 13: VDD1; power_in. */
  "VDD1": "13",
  /** Physical pin 14: VSS1; power_in. */
  "VSS1": "14",
  /** Physical pin 15: PT4/IOC4; bidirectional. */
  "PT4/IOC4": "15",
  /** Physical pin 16: PT5/IOC5; bidirectional. */
  "PT5/IOC5": "16",
  /** Physical pin 17: PT6/IOC6; bidirectional. */
  "PT6/IOC6": "17",
  /** Physical pin 18: PT7/IOC7; bidirectional. */
  "PT7/IOC7": "18",
  /** Physical pin 19: XADDR19/PK5; bidirectional. */
  "XADDR19/PK5": "19",
  /** Physical pin 20: XADDR18/PK4; bidirectional. */
  "XADDR18/PK4": "20",
  /** Physical pin 21: KWJ1/PJ1; bidirectional. */
  "KWJ1/PJ1": "21",
  /** Physical pin 22: KWJ0/PJ0; bidirectional. */
  "KWJ0/PJ0": "22",
  /** Physical pin 23: BKGD/TAGHI/MODC; bidirectional. */
  "BKGD/TAGHI/MODC": "23",
  /** Physical pin 24: ADDR0/DATA0/PB0; bidirectional. */
  "ADDR0/DATA0/PB0": "24",
  /** Physical pin 25: ADDR1/DATA1/PB1; bidirectional. */
  "ADDR1/DATA1/PB1": "25",
  /** Physical pin 26: ADDR2/DATA2/PB2; bidirectional. */
  "ADDR2/DATA2/PB2": "26",
  /** Physical pin 27: ADDR3/DATA3/PB3; bidirectional. */
  "ADDR3/DATA3/PB3": "27",
  /** Physical pin 28: ADDR4/DATA4/PB4; bidirectional. */
  "ADDR4/DATA4/PB4": "28",
  /** Physical pin 29: ADDR5/DATA5/PB5; bidirectional. */
  "ADDR5/DATA5/PB5": "29",
  /** Physical pin 30: ADDR6/DATA6/PB6; bidirectional. */
  "ADDR6/DATA6/PB6": "30",
  /** Physical pin 31: ADDR7/DATA7/PB7; bidirectional. */
  "ADDR7/DATA7/PB7": "31",
  /** Physical pin 32: PH7/KWH7; bidirectional. */
  "PH7/KWH7": "32",
  /** Physical pin 33: PH6/KWH6; bidirectional. */
  "PH6/KWH6": "33",
  /** Physical pin 34: PH5/KWH5; bidirectional. */
  "PH5/KWH5": "34",
  /** Physical pin 35: PH4/KWH4; bidirectional. */
  "PH4/KWH4": "35",
  /** Physical pin 36: PE7/NOACC/XCLKS; bidirectional. */
  "PE7/NOACC/XCLKS": "36",
  /** Physical pin 37: PE6/MODB; bidirectional. */
  "PE6/MODB": "37",
  /** Physical pin 38: PE5/MODA; bidirectional. */
  "PE5/MODA": "38",
  /** Physical pin 39: PE4/ECLK; bidirectional. */
  "PE4/ECLK": "39",
  /** Physical pin 40: VSSR; power_in. */
  "VSSR": "40",
  /** Physical pin 41: VDDR; power_in. */
  "VDDR": "41",
  /** Physical pin 42: RESET; bidirectional. */
  "RESET": "42",
  /** Physical pin 43: VDDPLL; power_in. */
  "VDDPLL": "43",
  /** Physical pin 44: XFC; bidirectional. */
  "XFC": "44",
  /** Physical pin 45: VSSPLL; bidirectional. */
  "VSSPLL": "45",
  /** Physical pin 46: EXTAL; input. */
  "EXTAL": "46",
  /** Physical pin 47: XTAL; output. */
  "XTAL": "47",
  /** Physical pin 48: TEST; input. */
  "TEST": "48",
  /** Physical pin 49: PH3/KWH3/SS1; bidirectional. */
  "PH3/KWH3/SS1": "49",
  /** Physical pin 50: PH2/KWH2/SCK1; bidirectional. */
  "PH2/KWH2/SCK1": "50",
  /** Physical pin 51: PH1/KWH1/MOSI1; bidirectional. */
  "PH1/KWH1/MOSI1": "51",
  /** Physical pin 52: PH0/KWH0/MISO1; bidirectional. */
  "PH0/KWH0/MISO1": "52",
  /** Physical pin 53: PE3/TAGLO/LSTRB; bidirectional. */
  "PE3/TAGLO/LSTRB": "53",
  /** Physical pin 54: PE2/RW; bidirectional. */
  "PE2/RW": "54",
  /** Physical pin 55: PE1/IRQ; input. */
  "PE1/IRQ": "55",
  /** Physical pin 56: PE0/XIRQ; input. */
  "PE0/XIRQ": "56",
  /** Physical pin 57: ADDR8/DATA8/PA0; bidirectional. */
  "ADDR8/DATA8/PA0": "57",
  /** Physical pin 58: ADDR9/DATA9/PA1; bidirectional. */
  "ADDR9/DATA9/PA1": "58",
  /** Physical pin 59: ADDR10/DATA10/PA2; bidirectional. */
  "ADDR10/DATA10/PA2": "59",
  /** Physical pin 60: ADDR11/DATA11/PA3; bidirectional. */
  "ADDR11/DATA11/PA3": "60",
  /** Physical pin 61: ADDR12/DATA12/PA4; bidirectional. */
  "ADDR12/DATA12/PA4": "61",
  /** Physical pin 62: ADDR13/DATA13/PA5; bidirectional. */
  "ADDR13/DATA13/PA5": "62",
  /** Physical pin 63: ADDR14/DATA14/PA6; bidirectional. */
  "ADDR14/DATA14/PA6": "63",
  /** Physical pin 64: ADDR15/DATA15/PA7; bidirectional. */
  "ADDR15/DATA15/PA7": "64",
  /** Physical pin 65: VDD2; power_in. */
  "VDD2": "65",
  /** Physical pin 66: VSS2; power_in. */
  "VSS2": "66",
  /** Physical pin 67: PAD00/AN00; input. */
  "PAD00/AN00": "67",
  /** Physical pin 68: PAD08/AN08; input. */
  "PAD08/AN08": "68",
  /** Physical pin 69: PAD01/AN01; input. */
  "PAD01/AN01": "69",
  /** Physical pin 70: PAD09/AN09; input. */
  "PAD09/AN09": "70",
  /** Physical pin 71: PAD02/AN02; input. */
  "PAD02/AN02": "71",
  /** Physical pin 72: PAD10/AN10; input. */
  "PAD10/AN10": "72",
  /** Physical pin 73: PAD03/AN03; input. */
  "PAD03/AN03": "73",
  /** Physical pin 74: PAD11/AN11; input. */
  "PAD11/AN11": "74",
  /** Physical pin 75: PAD04/AN04; input. */
  "PAD04/AN04": "75",
  /** Physical pin 76: PAD12/AN12; input. */
  "PAD12/AN12": "76",
  /** Physical pin 77: PAD05/AN05; input. */
  "PAD05/AN05": "77",
  /** Physical pin 78: PAD13/AN13; input. */
  "PAD13/AN13": "78",
  /** Physical pin 79: PAD06/AN06; input. */
  "PAD06/AN06": "79",
  /** Physical pin 80: PAD14/AN14; input. */
  "PAD14/AN14": "80",
  /** Physical pin 81: PAD07/AN07/ETRIG0; input. */
  "PAD07/AN07/ETRIG0": "81",
  /** Physical pin 82: PAD15/AN15/ETRIG1; input. */
  "PAD15/AN15/ETRIG1": "82",
  /** Physical pin 83: VDDA; power_in. */
  "VDDA": "83",
  /** Physical pin 84: VRH; passive. */
  "VRH": "84",
  /** Physical pin 85: VRL; passive. */
  "VRL": "85",
  /** Physical pin 86: VSSA; power_in. */
  "VSSA": "86",
  /** Physical pin 87: BF_PSLM/TXCAN4/PM7; bidirectional. */
  "BF_PSLM/TXCAN4/PM7": "87",
  /** Physical pin 88: BF_PERR/RXCAN4/PM6; bidirectional. */
  "BF_PERR/RXCAN4/PM6": "88",
  /** Physical pin 89: RXD0/PS0; bidirectional. */
  "RXD0/PS0": "89",
  /** Physical pin 90: TXD0/PS1; bidirectional. */
  "TXD0/PS1": "90",
  /** Physical pin 91: RXD1/PS2; bidirectional. */
  "RXD1/PS2": "91",
  /** Physical pin 92: TXD1/PS3; bidirectional. */
  "TXD1/PS3": "92",
  /** Physical pin 93: MISO0/PS4; bidirectional. */
  "MISO0/PS4": "93",
  /** Physical pin 94: MOSI0/PS5; bidirectional. */
  "MOSI0/PS5": "94",
  /** Physical pin 95: SCK0/PS6; bidirectional. */
  "SCK0/PS6": "95",
  /** Physical pin 96: SS0/PS7; bidirectional. */
  "SS0/PS7": "96",
  /** Physical pin 97: VREGEN; input. */
  "VREGEN": "97",
  /** Physical pin 98: KWJ7/TXCAN4/SCL/TXCAN0/PJ7; bidirectional. */
  "KWJ7/TXCAN4/SCL/TXCAN0/PJ7": "98",
  /** Physical pin 99: KWJ6/RXCAN4/SDA/RXCAN0/PJ6; bidirectional. */
  "KWJ6/RXCAN4/SDA/RXCAN0/PJ6": "99",
  /** Physical pin 100: BF_PROK/TXCAN0/TXCAN4/SCK0/PM5; bidirectional. */
  "BF_PROK/TXCAN0/TXCAN4/SCK0/PM5": "100",
  /** Physical pin 101: BF_PSYN/RXCAN0/RXCAN4/MOSI0/PM4; bidirectional. */
  "BF_PSYN/RXCAN0/RXCAN4/MOSI0/PM4": "101",
  /** Physical pin 102: TX_BF/TXCAN1/TXCAN0/SS0/PM3; bidirectional. */
  "TX_BF/TXCAN1/TXCAN0/SS0/PM3": "102",
  /** Physical pin 103: RX_BF/RXCAN1/RXCAN0/MISO0/PM2; bidirectional. */
  "RX_BF/RXCAN1/RXCAN0/MISO0/PM2": "103",
  /** Physical pin 104: TXCAN0/TXB/PM1; bidirectional. */
  "TXCAN0/TXB/PM1": "104",
  /** Physical pin 105: RXCAN0/RXB/PM0; bidirectional. */
  "RXCAN0/RXB/PM0": "105",
  /** Physical pin 106: VSSX; power_in. */
  "VSSX": "106",
  /** Physical pin 107: VDDX; power_in. */
  "VDDX": "107",
  /** Physical pin 108: ECS/ROMCTL/PK7; bidirectional. */
  "ECS/ROMCTL/PK7": "108",
  /** Physical pin 109: PWM7/KWP7/PP7; bidirectional. */
  "PWM7/KWP7/PP7": "109",
  /** Physical pin 110: PWM6/KWP6/PP6; bidirectional. */
  "PWM6/KWP6/PP6": "110",
  /** Physical pin 111: PWM5/KWP5/PP5; bidirectional. */
  "PWM5/KWP5/PP5": "111",
  /** Physical pin 112: PWM4/KWP4/PP4; bidirectional. */
  "PWM4/KWP4/PP4": "112",
}) {
  override schema = "MCU_NXP_HCS12:MC9S12DT256";
  override referencePrefix = "U";
}

