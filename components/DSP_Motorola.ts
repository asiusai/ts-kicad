// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 24-Bit Digital Signal Processor with PCI bus interface
 *
 * KiCad symbol: `DSP_Motorola:DSP56301`. Reference prefix: `U`.
 * Footprint filters: PQFP*28x28mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/DSP56301DS.pdf
 * Keywords: DSP PCI.
 * Default footprint: Package_QFP:PQFP-208_28x28mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSP56301 extends Component.withPins({
  /** Physical pin 1: AA0/RAS0; output. */
  "AA0/RAS0": "1",
  /** Physical pin 2: AA1/RAS1; output. */
  "AA1/RAS1": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: CLKOUT; output. */
  "CLKOUT": "5",
  /** Physical pin 6: BCLK; output. */
  "BCLK": "6",
  /** Physical pin 7: /CAS; output. */
  "/CAS": "7",
  /** Physical pin 8: /TA; input. */
  "/TA": "8",
  /** Physical pin 9: PINIT/NMI; input. */
  "PINIT/NMI": "9",
  /** Physical pin 10: /RESET; input. */
  "/RESET": "10",
  /** Physical pin 11: VCCPLL; power_in. */
  "VCCPLL": "11",
  /** Physical pin 12: PCAP; input. */
  "PCAP": "12",
  /** Physical pin 13: GNDP; power_in. */
  "GNDP": "13",
  /** Physical pin 14: GND1P; power_in. */
  "GND1P": "14",
  /** Physical pin 15: /BB; bidirectional. */
  "/BB": "15",
  /** Physical pin 16: /BG; input. */
  "/BG": "16",
  /** Physical pin 17: /BR; output. */
  "/BR": "17",
  /** Physical pin 18: VCC; power_in. */
  "VCC_18": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: AA2/RAS2; output. */
  "AA2/RAS2": "20",
  /** Physical pin 21: AA3/RAS3; output. */
  "AA3/RAS3": "21",
  /** Physical pin 22: /WR; output. */
  "/WR": "22",
  /** Physical pin 23: /RD; output. */
  "/RD": "23",
  /** Physical pin 24: XTAL; output. */
  "XTAL": "24",
  /** Physical pin 25: VCC; power_in. */
  "VCC_25": "25",
  /** Physical pin 26: EXTAL; input. */
  "EXTAL": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: /BCLK; output. */
  "/BCLK": "28",
  /** Physical pin 29: A0; output. */
  "A0": "29",
  /** Physical pin 30: A1; output. */
  "A1": "30",
  /** Physical pin 31: GND; power_in. */
  "GND_31": "31",
  /** Physical pin 32: VCC; power_in. */
  "VCC_32": "32",
  /** Physical pin 33: A2; output. */
  "A2": "33",
  /** Physical pin 34: A3; output. */
  "A3": "34",
  /** Physical pin 35: A4; output. */
  "A4": "35",
  /** Physical pin 36: A5; output. */
  "A5": "36",
  /** Physical pin 37: GND; power_in. */
  "GND_37": "37",
  /** Physical pin 38: VCC; power_in. */
  "VCC_38": "38",
  /** Physical pin 39: A6; output. */
  "A6": "39",
  /** Physical pin 40: A7; output. */
  "A7": "40",
  /** Physical pin 41: A8; output. */
  "A8": "41",
  /** Physical pin 42: A9; output. */
  "A9": "42",
  /** Physical pin 43: GND; power_in. */
  "GND_43": "43",
  /** Physical pin 44: VCC; power_in. */
  "VCC_44": "44",
  /** Physical pin 45: A10; output. */
  "A10": "45",
  /** Physical pin 46: A11; output. */
  "A11": "46",
  /** Physical pin 47: A12; output. */
  "A12": "47",
  /** Physical pin 48: A13; output. */
  "A13": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: VCC; power_in. */
  "VCC_50": "50",
  /** Physical pin 51: A14; output. */
  "A14": "51",
  /** Physical pin 52: A15; output. */
  "A15": "52",
  /** Physical pin 55: A16; output. */
  "A16": "55",
  /** Physical pin 56: A17; output. */
  "A17": "56",
  /** Physical pin 57: GND; power_in. */
  "GND_57": "57",
  /** Physical pin 58: VCC; power_in. */
  "VCC_58": "58",
  /** Physical pin 59: A18; output. */
  "A18": "59",
  /** Physical pin 60: A19; output. */
  "A19": "60",
  /** Physical pin 61: A20; output. */
  "A20": "61",
  /** Physical pin 62: A21; output. */
  "A21": "62",
  /** Physical pin 63: GND; power_in. */
  "GND_63": "63",
  /** Physical pin 64: VCC; power_in. */
  "VCC_64": "64",
  /** Physical pin 65: A22; output. */
  "A22": "65",
  /** Physical pin 66: A23; output. */
  "A23": "66",
  /** Physical pin 67: D0; bidirectional. */
  "D0": "67",
  /** Physical pin 68: D1; bidirectional. */
  "D1": "68",
  /** Physical pin 69: D2; bidirectional. */
  "D2": "69",
  /** Physical pin 70: GND; power_in. */
  "GND_70": "70",
  /** Physical pin 71: VCC; power_in. */
  "VCC_71": "71",
  /** Physical pin 72: D3; bidirectional. */
  "D3": "72",
  /** Physical pin 73: D4; bidirectional. */
  "D4": "73",
  /** Physical pin 74: D5; bidirectional. */
  "D5": "74",
  /** Physical pin 75: D6; bidirectional. */
  "D6": "75",
  /** Physical pin 76: D7; bidirectional. */
  "D7": "76",
  /** Physical pin 77: D8; bidirectional. */
  "D8": "77",
  /** Physical pin 78: GND; power_in. */
  "GND_78": "78",
  /** Physical pin 79: VCC; power_in. */
  "VCC_79": "79",
  /** Physical pin 80: GND; power_in. */
  "GND_80": "80",
  /** Physical pin 81: VCC; power_in. */
  "VCC_81": "81",
  /** Physical pin 82: D9; bidirectional. */
  "D9": "82",
  /** Physical pin 83: D10; bidirectional. */
  "D10": "83",
  /** Physical pin 84: D11; bidirectional. */
  "D11": "84",
  /** Physical pin 85: D12; bidirectional. */
  "D12": "85",
  /** Physical pin 86: D13; bidirectional. */
  "D13": "86",
  /** Physical pin 87: D14; bidirectional. */
  "D14": "87",
  /** Physical pin 88: GND; power_in. */
  "GND_88": "88",
  /** Physical pin 89: VCC; power_in. */
  "VCC_89": "89",
  /** Physical pin 90: D15; bidirectional. */
  "D15": "90",
  /** Physical pin 91: D16; bidirectional. */
  "D16": "91",
  /** Physical pin 92: D17; bidirectional. */
  "D17": "92",
  /** Physical pin 93: D18; bidirectional. */
  "D18": "93",
  /** Physical pin 94: D19; bidirectional. */
  "D19": "94",
  /** Physical pin 95: D20; bidirectional. */
  "D20": "95",
  /** Physical pin 96: GND; power_in. */
  "GND_96": "96",
  /** Physical pin 97: VCC; power_in. */
  "VCC_97": "97",
  /** Physical pin 98: D21; bidirectional. */
  "D21": "98",
  /** Physical pin 99: D22; bidirectional. */
  "D22": "99",
  /** Physical pin 100: D23; bidirectional. */
  "D23": "100",
  /** Physical pin 101: MODA/IRQA; input. */
  "MODA/IRQA": "101",
  /** Physical pin 102: MODB/IRQB; input. */
  "MODB/IRQB": "102",
  /** Physical pin 105: MODC/IRQC; input. */
  "MODC/IRQC": "105",
  /** Physical pin 106: MODD/IRQD; input. */
  "MODD/IRQD": "106",
  /** Physical pin 107: HAD31; bidirectional. */
  "HAD31": "107",
  /** Physical pin 108: HAD30; bidirectional. */
  "HAD30": "108",
  /** Physical pin 109: HAD29; bidirectional. */
  "HAD29": "109",
  /** Physical pin 110: HAD28; bidirectional. */
  "HAD28": "110",
  /** Physical pin 111: VCC; power_in. */
  "VCC_111": "111",
  /** Physical pin 112: GND; power_in. */
  "GND_112": "112",
  /** Physical pin 113: HAD27; bidirectional. */
  "HAD27": "113",
  /** Physical pin 114: HAD26; bidirectional. */
  "HAD26": "114",
  /** Physical pin 115: HAD25; bidirectional. */
  "HAD25": "115",
  /** Physical pin 116: HAD24; bidirectional. */
  "HAD24": "116",
  /** Physical pin 117: HC3/HBE3; bidirectional. */
  "HC3/HBE3": "117",
  /** Physical pin 118: HAD23; bidirectional. */
  "HAD23": "118",
  /** Physical pin 119: HAD22; bidirectional. */
  "HAD22": "119",
  /** Physical pin 120: HAD21; bidirectional. */
  "HAD21": "120",
  /** Physical pin 121: HAD20; bidirectional. */
  "HAD20": "121",
  /** Physical pin 122: VCC; power_in. */
  "VCC_122": "122",
  /** Physical pin 123: GND; power_in. */
  "GND_123": "123",
  /** Physical pin 124: HAD19; bidirectional. */
  "HAD19": "124",
  /** Physical pin 125: HAD18; bidirectional. */
  "HAD18": "125",
  /** Physical pin 126: HAD17; bidirectional. */
  "HAD17": "126",
  /** Physical pin 127: HAD16; bidirectional. */
  "HAD16": "127",
  /** Physical pin 128: HC2/HBE2; bidirectional. */
  "HC2/HBE2": "128",
  /** Physical pin 129: HIDSEL; input. */
  "HIDSEL": "129",
  /** Physical pin 130: /HFRAME; bidirectional. */
  "/HFRAME": "130",
  /** Physical pin 131: VCC; power_in. */
  "VCC_131": "131",
  /** Physical pin 132: GND; power_in. */
  "GND_132": "132",
  /** Physical pin 133: /HIRDY; bidirectional. */
  "/HIRDY": "133",
  /** Physical pin 134: /HTRDY; bidirectional. */
  "/HTRDY": "134",
  /** Physical pin 135: VCC; power_in. */
  "VCC_135": "135",
  /** Physical pin 136: GND; power_in. */
  "GND_136": "136",
  /** Physical pin 137: PVCL; input. */
  "PVCL": "137",
  /** Physical pin 138: /HDEVSEL; bidirectional. */
  "/HDEVSEL": "138",
  /** Physical pin 139: /HSTOP; bidirectional. */
  "/HSTOP": "139",
  /** Physical pin 140: /HLOCK; bidirectional. */
  "/HLOCK": "140",
  /** Physical pin 141: /HPERR; bidirectional. */
  "/HPERR": "141",
  /** Physical pin 142: /HSERR; output. */
  "/HSERR": "142",
  /** Physical pin 143: GND; power_in. */
  "GND_143": "143",
  /** Physical pin 144: VCC; power_in. */
  "VCC_144": "144",
  /** Physical pin 145: HPAR; bidirectional. */
  "HPAR": "145",
  /** Physical pin 146: /HREQ; output. */
  "/HREQ": "146",
  /** Physical pin 147: /HRST; input. */
  "/HRST": "147",
  /** Physical pin 148: HCLK; input. */
  "HCLK": "148",
  /** Physical pin 149: /HGNT; input. */
  "/HGNT": "149",
  /** Physical pin 150: HC1/HBE1; bidirectional. */
  "HC1/HBE1": "150",
  /** Physical pin 151: HAD15; bidirectional. */
  "HAD15": "151",
  /** Physical pin 152: HAD14; bidirectional. */
  "HAD14": "152",
  /** Physical pin 153: HAD13; bidirectional. */
  "HAD13": "153",
  /** Physical pin 154: HAD12; bidirectional. */
  "HAD12": "154",
  /** Physical pin 155: GND; power_in. */
  "GND_155": "155",
  /** Physical pin 156: VCC; power_in. */
  "VCC_156": "156",
  /** Physical pin 159: HAD11; bidirectional. */
  "HAD11": "159",
  /** Physical pin 160: HAD10; bidirectional. */
  "HAD10": "160",
  /** Physical pin 161: HAD9; bidirectional. */
  "HAD9": "161",
  /** Physical pin 162: HAD8; bidirectional. */
  "HAD8": "162",
  /** Physical pin 163: HC0/HBE0; bidirectional. */
  "HC0/HBE0": "163",
  /** Physical pin 164: HAD7; bidirectional. */
  "HAD7": "164",
  /** Physical pin 165: HAD6; bidirectional. */
  "HAD6": "165",
  /** Physical pin 166: HAD5; bidirectional. */
  "HAD5": "166",
  /** Physical pin 167: HAD4; bidirectional. */
  "HAD4": "167",
  /** Physical pin 168: GND; power_in. */
  "GND_168": "168",
  /** Physical pin 169: VCC; power_in. */
  "VCC_169": "169",
  /** Physical pin 170: HAD3; bidirectional. */
  "HAD3": "170",
  /** Physical pin 171: HAD2; bidirectional. */
  "HAD2": "171",
  /** Physical pin 172: HAD1; bidirectional. */
  "HAD1": "172",
  /** Physical pin 173: HAD0; bidirectional. */
  "HAD0": "173",
  /** Physical pin 174: TIO2; bidirectional. */
  "TIO2": "174",
  /** Physical pin 175: TIO1; bidirectional. */
  "TIO1": "175",
  /** Physical pin 176: TIO0; bidirectional. */
  "TIO0": "176",
  /** Physical pin 177: PE0/RXD; bidirectional. */
  "PE0/RXD": "177",
  /** Physical pin 178: PE2/SCLK; bidirectional. */
  "PE2/SCLK": "178",
  /** Physical pin 179: VCC; power_in. */
  "VCC_179": "179",
  /** Physical pin 180: GND; power_in. */
  "GND_180": "180",
  /** Physical pin 181: /HINTA; output. */
  "/HINTA": "181",
  /** Physical pin 182: VCC; power_in. */
  "VCC_182": "182",
  /** Physical pin 183: GND; power_in. */
  "GND_183": "183",
  /** Physical pin 184: PE1/TXD; bidirectional. */
  "PE1/TXD": "184",
  /** Physical pin 185: PD2/SC12; bidirectional. */
  "PD2/SC12": "185",
  /** Physical pin 186: PD1/SC11; bidirectional. */
  "PD1/SC11": "186",
  /** Physical pin 187: PD0/SC10; bidirectional. */
  "PD0/SC10": "187",
  /** Physical pin 188: PD5/STD1; bidirectional. */
  "PD5/STD1": "188",
  /** Physical pin 189: PD3/SCK1; bidirectional. */
  "PD3/SCK1": "189",
  /** Physical pin 190: PD4/SRD1; bidirectional. */
  "PD4/SRD1": "190",
  /** Physical pin 191: PC4/SRD0; bidirectional. */
  "PC4/SRD0": "191",
  /** Physical pin 192: PC3/SCK0; bidirectional. */
  "PC3/SCK0": "192",
  /** Physical pin 193: VCC; power_in. */
  "VCC_193": "193",
  /** Physical pin 194: GND; power_in. */
  "GND_194": "194",
  /** Physical pin 195: PC5/STD0; bidirectional. */
  "PC5/STD0": "195",
  /** Physical pin 196: PC0/SC00; bidirectional. */
  "PC0/SC00": "196",
  /** Physical pin 197: PC1/SC01; bidirectional. */
  "PC1/SC01": "197",
  /** Physical pin 198: PC2/SC02; bidirectional. */
  "PC2/SC02": "198",
  /** Physical pin 199: /DE; output. */
  "/DE": "199",
  /** Physical pin 200: TMS; input. */
  "TMS": "200",
  /** Physical pin 201: TCK; input. */
  "TCK": "201",
  /** Physical pin 202: TDI; input. */
  "TDI": "202",
  /** Physical pin 203: TDO; output. */
  "TDO": "203",
  /** Physical pin 204: /TRST; input. */
  "/TRST": "204",
  /** Physical pin 205: /BS; output. */
  "/BS": "205",
  /** Physical pin 206: /BL; output. */
  "/BL": "206",
}) {
  override schema = "DSP_Motorola:DSP56301";
  override referencePrefix = "U";
}

