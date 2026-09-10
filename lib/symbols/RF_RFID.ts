// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * HITAG RF Reader Device, SOIC-14
 *
 * KiCad symbol: `RF_RFID:HTRC11001T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/037031.pdf
 * Keywords: HITAG RFID.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class HTRC11001T extends Component.withPins({
  "VSS": "1",
  "TX2": "2",
  "VDD": "3",
  "TX1": "4",
  "MODE": "5",
  "XTAL1": "6",
  "XTAL2": "7",
  "SCLK": "8",
  "DIN": "9",
  "DOUT": "10",
  "CEXT": "12",
  "QGND": "13",
  "RX": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", TX2: "output", VDD: "power_in", TX1: "output", MODE: "input", XTAL1: "input", XTAL2: "output", SCLK: "input", DIN: "input", DOUT: "output", CEXT: "passive", QGND: "passive", RX: "input", ...opts.pinTypes } });
  }
  override schema = "RF_RFID:HTRC11001T";
  override referencePrefix = "U";
}

/**
 * NFC frontend.  ISO/IEC 14443A&B, MIFARE®, FeliCa and NFC Forum tag types, HVQFN-32
 *
 * KiCad symbol: `RF_RFID:PN5120A0HN1`. Reference prefix: `U`.
 * Footprint filters: HVQFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PN512.pdf
 * Keywords: PN512 RFID.
 * Default footprint: Package_DFN_QFN:HVQFN-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 */
export class PN5120A0HN1 extends Component.withPins({
  "A1": "1",
  "PVDD": "2",
  "DVDD": "3",
  "DVSS": "4",
  "PVSS": "5",
  "~{NRSTPD}": "6",
  "SIGIN": "7",
  "SIGOUT": "8",
  "SVDD": "9",
  "TVSS_10": "10",
  "TX1": "11",
  "TVDD": "12",
  "TX2": "13",
  "TVSS_14": "14",
  "AVDD": "15",
  "VMID": "16",
  "RX": "17",
  "AVSS": "18",
  "AUX1": "19",
  "AUX2": "20",
  "OSCIN": "21",
  "OSCOUT": "22",
  "IRQ": "23",
  "ALE": "24",
  "D1": "25",
  "D2": "26",
  "D3": "27",
  "D4": "28",
  "D5": "29",
  "D6": "30",
  "D7": "31",
  "A0": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "input", PVDD: "power_in", DVDD: "power_in", DVSS: "power_in", PVSS: "power_in", "~{NRSTPD}": "input", SIGIN: "input", SIGOUT: "output", SVDD: "power_in", TVSS_10: "power_in", TX1: "output", TVDD: "power_in", TX2: "output", TVSS_14: "passive", AVDD: "power_in", VMID: "power_out", RX: "input", AVSS: "power_in", AUX1: "output", AUX2: "output", OSCIN: "input", OSCOUT: "output", IRQ: "output", ALE: "input", D1: "bidirectional", D2: "bidirectional", D3: "bidirectional", D4: "bidirectional", D5: "bidirectional", D6: "bidirectional", D7: "bidirectional", A0: "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "RF_RFID:PN5120A0HN1";
  override referencePrefix = "U";
}
