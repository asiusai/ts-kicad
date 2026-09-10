// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * XC18V01SO20
 *
 * KiCad symbol: `Memory_ROM:XC18V01SO20`. Reference prefix: `U`.
 * @see https://docs.amd.com/api/khub/documents/6MAHUFe3JhpT1bdCspA7mQ/content
 */
export class XC18V01SO20 extends Component.withPins({
  "D0": "1",
  "D2": "2",
  "CLK": "3",
  "TDI": "4",
  "TMS": "5",
  "TCK": "6",
  "D4/CF": "7",
  "OE/RESET": "8",
  "D6": "9",
  "CE": "10",
  "GND": "11",
  "D7": "12",
  "CEO": "13",
  "D5": "14",
  "D3": "15",
  "D1": "16",
  "TDO": "17",
  "VCC_18": "18",
  "VCCO": "19",
  "VCC_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D0: "output", D2: "output", CLK: "input", TDI: "input", TMS: "input", TCK: "input", "D4/CF": "open_collector", "OE/RESET": "input", D6: "output", CE: "input", GND: "power_in", D7: "output", CEO: "output", D5: "output", D3: "output", D1: "output", TDO: "open_collector", VCC_18: "power_in", VCCO: "power_in", VCC_20: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_ROM:XC18V01SO20";
  override referencePrefix = "U";
}

/**
 * Platform Flash In-System PROM
 *
 * KiCad symbol: `Memory_ROM:XCF08P`. Reference prefix: `U`.
 * @see https://www.xilinx.com/support/documentation/data_sheets/ds123.pdf
 * Keywords: PROM FLASH.
 */
export class XCF08P extends Component.withPins({
  "GND_A1": "A1",
  "GND_A2": "A2",
  "OE/RST": "A3",
  "D6": "A5",
  "D7": "A6",
  "VCCINT_B1": "B1",
  "VCCO_B2": "B2",
  "CLK": "B3",
  "CE": "B4",
  "D5": "B5",
  "GND_B6": "B6",
  "BUSY": "C1",
  "CLKOUT": "C2",
  "D4": "C5",
  "VCCO_C6": "C6",
  "CF": "D1",
  "CEO": "D2",
  "D3": "D5",
  "VCCO_D6": "D6",
  "VCCINT_E1": "E1",
  "TMS": "E2",
  "D2": "E5",
  "TDO": "E6",
  "GND_F1": "F1",
  "GND_F5": "F5",
  "GND_F6": "F6",
  "TDI": "G1",
  "REV-SEL0": "G3",
  "REV-SEL1": "G4",
  "VCCO_G5": "G5",
  "VCCINT_G6": "G6",
  "GND_H1": "H1",
  "VCCJ": "H2",
  "TCK": "H3",
  "/EN-EXT-SEL": "H4",
  "D1": "H5",
  "D0": "H6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_A1: "power_in", GND_A2: "power_in", "OE/RST": "input", D6: "tri_state", D7: "tri_state", VCCINT_B1: "power_in", VCCO_B2: "power_in", CLK: "input", CE: "input", D5: "tri_state", GND_B6: "power_in", BUSY: "input", CLKOUT: "output", D4: "tri_state", VCCO_C6: "power_in", CF: "bidirectional", CEO: "output", D3: "tri_state", VCCO_D6: "power_in", VCCINT_E1: "power_in", TMS: "input", D2: "tri_state", TDO: "output", GND_F1: "power_in", GND_F5: "power_in", GND_F6: "power_in", TDI: "input", "REV-SEL0": "input", "REV-SEL1": "input", VCCO_G5: "power_in", VCCINT_G6: "power_in", GND_H1: "power_in", VCCJ: "power_in", TCK: "input", "/EN-EXT-SEL": "input", D1: "tri_state", D0: "tri_state", ...opts.pinTypes } });
  }
  override schema = "Memory_ROM:XCF08P";
  override referencePrefix = "U";
}
