// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Capacitance to digital converter for proximity sensing, 2-channel, 12 bit, 0..13pF range, 2.7..3.6V supply, I²C interface, MSOP-8
 *
 * KiCad symbol: `Sensor_Proximity:AD7150BRMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7150.pdf
 * Keywords: Analog ADI CDC dual.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7150BRMZ extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: CIN2; passive. */
  "CIN2": "3",
  /** Physical pin 4: CIN1; passive. */
  "CIN1": "4",
  /** Physical pin 5: EXC2; output. */
  "EXC2": "5",
  /** Physical pin 6: EXC1; output. */
  "EXC1": "6",
  /** Physical pin 7: OUT1; output. */
  "OUT1": "7",
  /** Physical pin 8: OUT2; output. */
  "OUT2": "8",
  /** Physical pin 9: SCL; input. */
  "SCL": "9",
  /** Physical pin 10: SDA; bidirectional. */
  "SDA": "10",
}) {
  override schema = "Sensor_Proximity:AD7150BRMZ";
  override referencePrefix = "U";
}

/**
 * Capacitance to digital converter for proximity sensing, 1-channel, 12 bit, 0..13pF range, 2.7..3.6V supply, I²C interface, MSOP-8
 *
 * KiCad symbol: `Sensor_Proximity:AD7151BRMZ`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD7151.pdf
 * Keywords: Analog ADI CDC single.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD7151BRMZ extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 9: SCL; input. */
  "SCL": "9",
  /** Physical pin 10: SDA; bidirectional. */
  "SDA": "10",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: CIN; passive. */
  "CIN": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: EXC; output. */
  "EXC": "6",
  /** Physical pin 7: OUT; output. */
  "OUT": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Sensor_Proximity:AD7151BRMZ";
  override referencePrefix = "U";
}

/**
 * Proximity Sensor, I2C interface, 1.7-3.6V, LGA-8
 *
 * KiCad symbol: `Sensor_Proximity:APDS-9160-003`. Reference prefix: `U`.
 * Footprint filters: Broadcom*APDS*9160*003*.
 * @see https://docs.broadcom.com/docs/APDS-9160-003-DS
 * Keywords: opto proximity sensor avago broadcom.
 * Default footprint: OptoDevice:Broadcom_APDS-9160-003.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APDS_9160_003 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: INT; open_collector. */
  "INT": "2",
  /** Physical pin 3: LDR; input. */
  "LDR": "3",
  /** Physical pin 4: LEDK; output. */
  "LEDK": "4",
  /** Physical pin 5: LEDA; input. */
  "LEDA": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
}) {
  override schema = "Sensor_Proximity:APDS-9160-003";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, SMD-package with PCB-cutout
 *
 * KiCad symbol: `Sensor_Proximity:ITR8307`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR8307*.
 * @see http://www.everlight.com/file/ProductFile/ITR8307.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Everlight_ITR8307.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ITR8307 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: C; open_collector. */
  "C": "3",
  /** Physical pin 4: E; open_emitter. */
  "E": "4",
}) {
  override schema = "Sensor_Proximity:ITR8307";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, SMD-package with PCB-cutout
 *
 * KiCad symbol: `Sensor_Proximity:BPR-105`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR8307*.
 * @see http://www.ystone.com.tw/en/data/goods/IRPT/Photo%20Interrupters-Reflective%20Type.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Everlight_ITR8307.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPR_105 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: C; open_collector. */
  "C": "3",
  /** Physical pin 4: E; open_emitter. */
  "E": "4",
}) {
  override schema = "Sensor_Proximity:BPR-105";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, DIP-like THT-package
 *
 * KiCad symbol: `Sensor_Proximity:ITR8307-F43`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR8307F43*.
 * @see https://everlighteurope.com/index.php?controller=attachment&id_attachment=5385
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Everlight_ITR8307F43.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ITR8307_F43 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: C; open_collector. */
  "C": "3",
  /** Physical pin 4: E; open_emitter. */
  "E": "4",
}) {
  override schema = "Sensor_Proximity:ITR8307-F43";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, DIP-like THT-package
 *
 * KiCad symbol: `Sensor_Proximity:BPR-105F`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR8307F43*.
 * @see http://www.ystone.com.tw/en/data/goods/IRPT/Photo%20Interrupters-Reflective%20Type.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Everlight_ITR8307F43.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPR_105F extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: C; open_collector. */
  "C": "3",
  /** Physical pin 4: E; open_emitter. */
  "E": "4",
}) {
  override schema = "Sensor_Proximity:BPR-105F";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, Darlington photo transistor, SMD-package with PCB-cutout
 *
 * KiCad symbol: `Sensor_Proximity:BPR-205`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR8307*.
 * @see http://www.ystone.com.tw/en/data/goods/IRPT/Photo%20Interrupters-Reflective%20Type.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Everlight_ITR8307.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPR_205 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: C; open_collector. */
  "C": "3",
  /** Physical pin 4: E; open_emitter. */
  "E": "4",
}) {
  override schema = "Sensor_Proximity:BPR-205";
  override referencePrefix = "U";
}

/**
 * Reflective Optical Sensor with Transistor Output
 *
 * KiCad symbol: `Sensor_Proximity:CNY70`. Reference prefix: `U`.
 * Footprint filters: Vishay*CNY70*.
 * @see https://www.vishay.com/docs/83751/cny70.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Vishay_CNY70.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CNY70 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: C; open_collector. */
  "C": "3",
  /** Physical pin 4: E; open_emitter. */
  "E": "4",
}) {
  override schema = "Sensor_Proximity:CNY70";
  override referencePrefix = "U";
}

/**
 * Capacitance-to-digital converter for proximity sensing with active shield, 4-channel, 16-bit, +/-15 pF range, 3.3V supply, I²C interface, TSSOP-10
 *
 * KiCad symbol: `Sensor_Proximity:FDC1004DGS`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/fdc1004.pdf
 * Keywords: Texas-Instruments CDC quad I2C.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FDC1004DGS extends Component.withPins({
  /** Physical pin 1: SHLD1; output. */
  "SHLD1": "1",
  /** Physical pin 2: CIN1; input. */
  "CIN1": "2",
  /** Physical pin 3: CIN2; input. */
  "CIN2": "3",
  /** Physical pin 4: CIN3; input. */
  "CIN3": "4",
  /** Physical pin 5: CIN4; input. */
  "CIN4": "5",
  /** Physical pin 6: SHLD2; output. */
  "SHLD2": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: SCL; input. */
  "SCL": "9",
  /** Physical pin 10: SDA; bidirectional. */
  "SDA": "10",
}) {
  override schema = "Sensor_Proximity:FDC1004DGS";
  override referencePrefix = "U";
}

/**
 * Reflective Optical Sensor 0.217" (5.5mm) 4-SMD
 *
 * KiCad symbol: `Sensor_Proximity:GP2S700HCP`. Reference prefix: `U`.
 * Footprint filters: Sharp*GP2S700HCP*.
 * @see https://www.sharpsde.com/fileadmin/products/Optoelectronics/Isolation%20Devices/Specs_Photointerrupter/GP2S700HCP_03Oct05_DS_D3-A02201FEN.pdf
 * Keywords: Reflective Optical Sensor Opto reflex coupler.
 * Default footprint: OptoDevice:Sharp_GP2S700HCP.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GP2S700HCP extends Component.withPins({
  /** Physical pin 1: unnamed; open_emitter. */
  "P1": "1",
  /** Physical pin 2: unnamed; open_collector. */
  "P2": "2",
  /** Physical pin 3: K; passive. */
  "K": "3",
  /** Physical pin 4: A; passive. */
  "A": "4",
}) {
  override schema = "Sensor_Proximity:GP2S700HCP";
  override referencePrefix = "U";
}

/**
 * Miniature Reflective Optical Object Sensor, SMD-4
 *
 * KiCad symbol: `Sensor_Proximity:ITR1201SR10AR`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR1201SR10AR*.
 * @see http://www.everlight.com/file/ProductFile/ITR1201SR10AR-TR.pdf
 * Keywords: Reflective Optical Sensor Opto reflex coupler.
 * Default footprint: OptoDevice:Everlight_ITR1201SR10AR.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ITR1201SR10AR extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: unnamed; open_collector. */
  "P3": "3",
  /** Physical pin 4: unnamed; open_emitter. */
  "P4": "4",
}) {
  override schema = "Sensor_Proximity:ITR1201SR10AR";
  override referencePrefix = "U";
}

/**
 * Miniature Reflective Optical Object Sensor, SMD-4
 *
 * KiCad symbol: `Sensor_Proximity:ITR8307-L24-TR8`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR1201SR10AR*.
 * @see https://www.everlight.com/file/ProductFile/ITR8307-L24-TR8.pdf
 * Keywords: Reflective Optical Sensor Opto reflex coupler.
 * Default footprint: OptoDevice:Everlight_ITR1201SR10AR.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ITR8307_L24_TR8 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: unnamed; open_collector. */
  "P3": "3",
  /** Physical pin 4: unnamed; open_emitter. */
  "P4": "4",
}) {
  override schema = "Sensor_Proximity:ITR8307-L24-TR8";
  override referencePrefix = "U";
}

/**
 * Miniature Reflective Optical Object Sensor, SMD-4
 *
 * KiCad symbol: `Sensor_Proximity:ITR8307-S17-TR8`. Reference prefix: `U`.
 * Footprint filters: Everlight*ITR1201SR10AR*.
 * @see https://datasheet.lcsc.com/szlcsc/1810010232_Everlight-Elec-ITR8307-S17-TR8-B_C81632.pdf
 * Keywords: Reflective Optical Sensor Opto reflex coupler.
 * Default footprint: OptoDevice:Everlight_ITR1201SR10AR.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ITR8307_S17_TR8 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: unnamed; open_collector. */
  "P3": "3",
  /** Physical pin 4: unnamed; open_emitter. */
  "P4": "4",
}) {
  override schema = "Sensor_Proximity:ITR8307-S17-TR8";
  override referencePrefix = "U";
}

/**
 * Photointerrupter infrared LED with photo IC, -25 to +85 degree Celsius
 *
 * KiCad symbol: `Sensor_Proximity:ITR9608-F`. Reference prefix: `U`.
 * Footprint filters: *ITR9608*.
 * @see https://www.everlighteurope.com/custom/files/datasheets/DRX-0000076.pdf
 * Keywords: Photointerrupter opto interrupter infrared LED fast response time infrared 940nm 5mm gap.
 * Default footprint: OptoDevice:Everlight_ITR9608-F.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ITR9608_F extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; open_collector. */
  "P3": "3",
  /** Physical pin 4: unnamed; open_emitter. */
  "P4": "4",
}) {
  override schema = "Sensor_Proximity:ITR9608-F";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor
 *
 * KiCad symbol: `Sensor_Proximity:KRC011`. Reference prefix: `U`.
 * Footprint filters: Kingbright?KRC011*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/KRC011(Ver.15).pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Kingbright_KRC011_Vertical.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KRC011 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: C; open_collector. */
  "C": "3",
  /** Physical pin 4: E; open_emitter. */
  "E": "4",
}) {
  override schema = "Sensor_Proximity:KRC011";
  override referencePrefix = "U";
}

/**
 * Inductance to digital converter, 2-channel 12-bit, WSON-12
 *
 * KiCad symbol: `Sensor_Proximity:LDC1312`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ldc1312.pdf
 * Keywords: inductance sensor.
 * Default footprint: Package_SON:WSON-12-1EP_4x4mm_P0.5mm_EP2.6x3mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LDC1312 extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: CLKIN; input. */
  "CLKIN": "3",
  /** Physical pin 4: ADDR; input. */
  "ADDR": "4",
  /** Physical pin 5: INTB; open_collector. */
  "INTB": "5",
  /** Physical pin 6: SD; input. */
  "SD": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: IN0A; input. */
  "IN0A": "9",
  /** Physical pin 10: IN0B; input. */
  "IN0B": "10",
  /** Physical pin 11: IN1A; input. */
  "IN1A": "11",
  /** Physical pin 12: IN1B; input. */
  "IN1B": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
}) {
  override schema = "Sensor_Proximity:LDC1312";
  override referencePrefix = "U";
}

/**
 * Inductance to digital converter, 4-channel 12-bit, WQFN-16
 *
 * KiCad symbol: `Sensor_Proximity:LDC1314`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ldc1312.pdf
 * Keywords: inductance sensor.
 * Default footprint: Package_DFN_QFN:WQFN-16-1EP_4x4mm_P0.5mm_EP2.6x2.6mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LDC1314 extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: CLKIN; input. */
  "CLKIN": "3",
  /** Physical pin 4: ADDR; input. */
  "ADDR": "4",
  /** Physical pin 5: INTB; open_collector. */
  "INTB": "5",
  /** Physical pin 6: SD; input. */
  "SD": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: IN0A; input. */
  "IN0A": "9",
  /** Physical pin 10: IN0B; input. */
  "IN0B": "10",
  /** Physical pin 11: IN1A; input. */
  "IN1A": "11",
  /** Physical pin 12: IN1B; input. */
  "IN1B": "12",
  /** Physical pin 13: IN2A; input. */
  "IN2A": "13",
  /** Physical pin 14: IN2B; input. */
  "IN2B": "14",
  /** Physical pin 15: IN3A; input. */
  "IN3A": "15",
  /** Physical pin 16: IN3B; input. */
  "IN3B": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "Sensor_Proximity:LDC1314";
  override referencePrefix = "U";
}

/**
 * Inductance to digital converter, 2-channel 28-bit, WSON-12
 *
 * KiCad symbol: `Sensor_Proximity:LDC1612`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ldc1612.pdf
 * Keywords: inductance sensor.
 * Default footprint: Package_SON:WSON-12-1EP_4x4mm_P0.5mm_EP2.6x3mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LDC1612 extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: CLKIN; input. */
  "CLKIN": "3",
  /** Physical pin 4: ADDR; input. */
  "ADDR": "4",
  /** Physical pin 5: INTB; open_collector. */
  "INTB": "5",
  /** Physical pin 6: SD; input. */
  "SD": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: IN0A; input. */
  "IN0A": "9",
  /** Physical pin 10: IN0B; input. */
  "IN0B": "10",
  /** Physical pin 11: IN1A; input. */
  "IN1A": "11",
  /** Physical pin 12: IN1B; input. */
  "IN1B": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
}) {
  override schema = "Sensor_Proximity:LDC1612";
  override referencePrefix = "U";
}

/**
 * Inductance to digital converter, 4-channel 28-bit, WQFN-16
 *
 * KiCad symbol: `Sensor_Proximity:LDC1614`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ldc1612.pdf
 * Keywords: inductance sensor.
 * Default footprint: Package_DFN_QFN:WQFN-16-1EP_4x4mm_P0.5mm_EP2.6x2.6mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LDC1614 extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: CLKIN; input. */
  "CLKIN": "3",
  /** Physical pin 4: ADDR; input. */
  "ADDR": "4",
  /** Physical pin 5: INTB; open_collector. */
  "INTB": "5",
  /** Physical pin 6: SD; input. */
  "SD": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: IN0A; input. */
  "IN0A": "9",
  /** Physical pin 10: IN0B; input. */
  "IN0B": "10",
  /** Physical pin 11: IN1A; input. */
  "IN1A": "11",
  /** Physical pin 12: IN1B; input. */
  "IN1B": "12",
  /** Physical pin 13: IN2A; input. */
  "IN2A": "13",
  /** Physical pin 14: IN2B; input. */
  "IN2B": "14",
  /** Physical pin 15: IN3A; input. */
  "IN3A": "15",
  /** Physical pin 16: IN3B; input. */
  "IN3B": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
}) {
  override schema = "Sensor_Proximity:LDC1614";
  override referencePrefix = "U";
}

/**
 * Photointerrupter infrared LED with photo IC, non-inverting output, -0.5V to 17V VDD, -20 to +85 degree Celsius, LG206D
 *
 * KiCad symbol: `Sensor_Proximity:LG206D`. Reference prefix: `U`.
 * Footprint filters: Kodenshi?LG206D*.
 * @see http://kodenshi.co.jp/products/pdf/sensor/photointerrupter_ic/LG206D.pdf
 * Keywords: Photointerrupter infrared LED with photo IC, non-inverting output, -0.5V to 17V VDD, -20 to +85 degree Celsius, LG206D.
 * Default footprint: OptoDevice:Kodenshi_LG206D.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LG206D extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: VOUT; open_collector. */
  "VOUT": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: A; passive. */
  "A": "4",
  /** Physical pin 5: K; passive. */
  "K": "5",
}) {
  override schema = "Sensor_Proximity:LG206D";
  override referencePrefix = "U";
}

/**
 * Photointerrupter infrared LED with photo IC, inverting output, -0.5V to 17V VDD, -20 to +85 degree Celsius, LG206X
 *
 * KiCad symbol: `Sensor_Proximity:LG206L`. Reference prefix: `U`.
 * Footprint filters: Kodenshi?LG206L*.
 * @see http://kodenshi.co.jp/products/pdf/sensor/photointerrupter_ic/LG206L.pdf
 * Keywords: Photointerrupter infrared LED with photo IC, inverting output, -0.5V to 17V VDD, -20 to +85 degree Celsius, LG206X.
 * Default footprint: OptoDevice:Kodenshi_LG206L.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LG206L extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: VOUT; open_collector. */
  "VOUT": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: A; passive. */
  "A": "4",
  /** Physical pin 5: K; passive. */
  "K": "5",
}) {
  override schema = "Sensor_Proximity:LG206L";
  override referencePrefix = "U";
}

/**
 * Miniature Reflective Optical Object Sensor, DIP-like THT-package
 *
 * KiCad symbol: `Sensor_Proximity:QRE1113`. Reference prefix: `U`.
 * Footprint filters: OnSemi*CASE100AQ*.
 * @see http://www.onsemi.com/pub/Collateral/QRE1113-D.PDF
 * Keywords: Reflective Optical Sensor Opto reflex coupler.
 * Default footprint: OptoDevice:OnSemi_CASE100AQ.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class QRE1113 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: unnamed; open_collector. */
  "P3": "3",
  /** Physical pin 4: unnamed; open_emitter. */
  "P4": "4",
}) {
  override schema = "Sensor_Proximity:QRE1113";
  override referencePrefix = "U";
}

/**
 * Miniature Reflective Optical Object Sensor, SMD-4
 *
 * KiCad symbol: `Sensor_Proximity:QRE1113GR`. Reference prefix: `U`.
 * Footprint filters: OnSemi*CASE100CY*.
 * @see http://www.onsemi.com/pub/Collateral/QRE1113-D.PDF
 * Keywords: Reflective Optical Sensor Opto reflex coupler.
 * Default footprint: OptoDevice:OnSemi_CASE100CY.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class QRE1113GR extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: unnamed; open_collector. */
  "P3": "3",
  /** Physical pin 4: unnamed; open_emitter. */
  "P4": "4",
}) {
  override schema = "Sensor_Proximity:QRE1113GR";
  override referencePrefix = "U";
}

/**
 * Proximity Sensor, I2C interface, 2x1x0.55mm, 1-15mm, 2.5-3.6V, LGA-6
 *
 * KiCad symbol: `Sensor_Proximity:RPR-0720`. Reference prefix: `U`.
 * Footprint filters: Rohm*RPR*0720*.
 * @see https://fscdn.rohm.com/en/products/databook/datasheet/opto/optical_sensor/photosensor/rpr-0720-e.pdf
 * Keywords: opto rohm.
 * Default footprint: OptoDevice:Rohm_RPR-0720.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPR_0720 extends Component.withPins({
  /** Physical pin 1: VCSELA; power_in. */
  "VCSELA": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: INT; open_collector. */
  "INT": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
}) {
  override schema = "Sensor_Proximity:RPR-0720";
  override referencePrefix = "U";
}

/**
 * Miniature Light Reflection Switches
 *
 * KiCad symbol: `Sensor_Proximity:SFH900`. Reference prefix: `U`.
 * Footprint filters: Siemens*SFH900*.
 * @see https://www.batronix.com/pdf/sfh900.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Siemens_SFH900.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH900 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: C; open_collector. */
  "C": "3",
}) {
  override schema = "Sensor_Proximity:SFH900";
  override referencePrefix = "U";
}

/**
 * Reflective Opto Interrupter/Coupler, SMD-6
 *
 * KiCad symbol: `Sensor_Proximity:SFH9206`. Reference prefix: `U`.
 * Footprint filters: Osram*SFH9x0x*.
 * @see http://www.osram-os.com/Graphics/XPic6/00200860_0.pdf
 * Keywords: Reflective Opto Interrupter Coupler.
 * Default footprint: OptoDevice:Osram_SFH9x0x.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH9206 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: E; open_emitter. */
  "E": "3",
  /** Physical pin 4: C; open_collector. */
  "C": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: K; passive. */
  "K": "6",
}) {
  override schema = "Sensor_Proximity:SFH9206";
  override referencePrefix = "U";
}

/**
 * Reflective Opto Interrupter/Coupler, SMD-6
 *
 * KiCad symbol: `Sensor_Proximity:SFH9201`. Reference prefix: `U`.
 * Footprint filters: Osram*SFH9x0x*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Osram%20PDFs/SFH_9201.pdf
 * Keywords: Reflective Opto Interrupter Coupler.
 * Default footprint: OptoDevice:Osram_SFH9x0x.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH9201 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: E; open_emitter. */
  "E": "3",
  /** Physical pin 4: C; open_collector. */
  "C": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: K; passive. */
  "K": "6",
}) {
  override schema = "Sensor_Proximity:SFH9201";
  override referencePrefix = "U";
}

/**
 * Reflective Opto Interrupter/Coupler, SMD-6
 *
 * KiCad symbol: `Sensor_Proximity:SFH9202`. Reference prefix: `U`.
 * Footprint filters: Osram*SFH9x0x*.
 * @see http://www.osram-os.com/Graphics/XPic0/00083379_0.pdf/SFH%209202,%20Lead%20%28Pb%29%20Free%20Product%20-%20RoHS%20Compliant.pdf
 * Keywords: Reflective Opto Interrupter Coupler.
 * Default footprint: OptoDevice:Osram_SFH9x0x.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH9202 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: E; open_emitter. */
  "E": "3",
  /** Physical pin 4: C; open_collector. */
  "C": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: K; passive. */
  "K": "6",
}) {
  override schema = "Sensor_Proximity:SFH9202";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, SMD-package with PCB-cutout
 *
 * KiCad symbol: `Sensor_Proximity:SG-105`. Reference prefix: `U`.
 * Footprint filters: Kodenshi*SG105*.
 * @see http://www.kodenshi.co.jp/products/pdf/sensor/photointerrupter_ref/SG-105.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Kodenshi_SG105.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_105 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: C; open_collector. */
  "C": "3",
  /** Physical pin 4: E; open_emitter. */
  "E": "4",
}) {
  override schema = "Sensor_Proximity:SG-105";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, DIP-lie THT-package
 *
 * KiCad symbol: `Sensor_Proximity:SG-105F`. Reference prefix: `U`.
 * Footprint filters: Kodenshi*SG105F*.
 * @see http://www.kodenshi.co.jp/products/pdf/sensor/photointerrupter_ref/SG-105F.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Kodenshi_SG105F.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_105F extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: C; open_collector. */
  "C": "3",
  /** Physical pin 4: E; open_emitter. */
  "E": "4",
}) {
  override schema = "Sensor_Proximity:SG-105F";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, SMD-package with PCB-cutout
 *
 * KiCad symbol: `Sensor_Proximity:SG-107`. Reference prefix: `U`.
 * Footprint filters: Kodenshi*SG105*.
 * @see http://www.kodenshi.co.jp/products/pdf/sensor/photointerrupter_ref/SG-107.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Kodenshi_SG105.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_107 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: C; open_collector. */
  "C": "3",
  /** Physical pin 4: E; open_emitter. */
  "E": "4",
}) {
  override schema = "Sensor_Proximity:SG-107";
  override referencePrefix = "U";
}

/**
 * Subminiature Reflective Optical Sensor, DIP-lie THT-package
 *
 * KiCad symbol: `Sensor_Proximity:SG-107F`. Reference prefix: `U`.
 * Footprint filters: Kodenshi*SG105F*.
 * @see https://www.pacer.co.uk/Assets/User/1055-SG-107F.pdf
 * Keywords: Reflective Optical Sensor Opto.
 * Default footprint: OptoDevice:Kodenshi_SG105F.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_107F extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
  /** Physical pin 3: C; open_collector. */
  "C": "3",
  /** Physical pin 4: E; open_emitter. */
  "E": "4",
}) {
  override schema = "Sensor_Proximity:SG-107F";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Sensor_Proximity:TSSP58P38`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82462/tsop581.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSSP58P38 extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Sensor_Proximity:TSSP58P38";
  override referencePrefix = "U";
}

/**
 * IR Detector for Mid Range Proximity Sensor
 *
 * KiCad symbol: `Sensor_Proximity:TSSP58038`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82476/tssp58p38.pdf
 * Keywords: opto IR receiver proximity sensor.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSSP58038 extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Sensor_Proximity:TSSP58038";
  override referencePrefix = "U";
}

/**
 * IR Receiver Module for Light Barrier Systems
 *
 * KiCad symbol: `Sensor_Proximity:TSSP58038SS1XB`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82740/tssp58038ss1xb.pdf
 * Keywords: opto IR receiver light barrier.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSSP58038SS1XB extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Sensor_Proximity:TSSP58038SS1XB";
  override referencePrefix = "U";
}

