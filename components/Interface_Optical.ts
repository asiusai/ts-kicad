// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * IR Receiver Modules for remote controls
 *
 * KiCad symbol: `Interface_Optical:IRM-H6xxT`. Reference prefix: `U`.
 * Footprint filters: Everlight*IRM?H6xxT*.
 * @see https://en.everlight.com/wp-content/plugins/ItemRelationship/product_files/pdf/DMO-0000004-IRM-H6XX-TR2_Series_Datasheet_V4.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Everlight_IRM-H6xxT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRM_H6xxT extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Interface_Optical:IRM-H6xxT";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:IS471F`. Reference prefix: `U`.
 * Footprint filters: Sharp*IS471F*.
 * @see http://www.micropik.com/PDF/tsop17xx.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Sharp_IS471F.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS471F extends Component.withPins({
  /** Physical pin 1: Vs; power_in. */
  "Vs": "1",
  /** Physical pin 2: OUT; output. */
  "OUT": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: GLo; open_collector. */
  "GLo": "4",
}) {
  override schema = "Interface_Optical:IS471F";
  override referencePrefix = "U";
}

/**
 * Built-in Amplifier Type OPIC Light Detector
 *
 * KiCad symbol: `Interface_Optical:IS485`. Reference prefix: `U`.
 * Footprint filters: Sharp*IS485*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Sharp%20PDFs/is485,486_e.pdf
 * Keywords: opto receiver amplifier light detector OPIC.
 * Default footprint: OptoDevice:Sharp_IS485.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS485 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: OUT; output. */
  "OUT": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:IS485";
  override referencePrefix = "U";
}

/**
 * Built-in Amplifier Type OPIC Light Detector
 *
 * KiCad symbol: `Interface_Optical:IS486`. Reference prefix: `U`.
 * Footprint filters: Sharp*IS485*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Sharp%20PDFs/is485,486_e.pdf
 * Keywords: opto receiver amplifier light detector OPIC.
 * Default footprint: OptoDevice:Sharp_IS485.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS486 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: OUT; output. */
  "OUT": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:IS486";
  override referencePrefix = "U";
}

/**
 * Plastic Silicon Photosensor
 *
 * KiCad symbol: `Interface_Optical:QSE159`. Reference prefix: `U`.
 * Footprint filters: *QSE15*.
 * @see http://www.onsemi.com/pub/Collateral/QSE159-D.pdf
 * Keywords: opto IR.
 * Default footprint: OptoDevice:ONSemi_QSE15x.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class QSE159 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: Out; output. */
  "Out": "2",
  /** Physical pin 3: Vcc; power_in. */
  "Vcc": "3",
}) {
  override schema = "Interface_Optical:QSE159";
  override referencePrefix = "U";
}

/**
 * Connector for Small Form Factor Pluggable (SFP) module, 1 Gbit/s, serial-to-serial data-agnostic optical transceiver
 *
 * KiCad symbol: `Interface_Optical:SFP`. Reference prefix: `J`.
 * Footprint filters: *SFP*.
 * @see http://www.10gtek.com/templates/wzten/pdf/INF-8074.pdf
 * Keywords: SFP transceiver gigabit ethernet INF-8074i.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFP extends Component.withPins({
  /** Physical pin 1: VeeT; power_in. */
  "VeeT_1": "1",
  /** Physical pin 2: TX_FAULT; open_collector. */
  "TX_FAULT": "2",
  /** Physical pin 3: TX_DISABLE; input. */
  "TX_DISABLE": "3",
  /** Physical pin 4: MOD_DEF2; bidirectional. */
  "MOD_DEF2": "4",
  /** Physical pin 5: MOD_DEF1; input. */
  "MOD_DEF1": "5",
  /** Physical pin 6: MOD_DEF0; passive. */
  "MOD_DEF0": "6",
  /** Physical pin 7: RATE_SELECT; input. */
  "RATE_SELECT": "7",
  /** Physical pin 8: RX_LOS; open_collector. */
  "RX_LOS": "8",
  /** Physical pin 9: VeeR; passive. */
  "VeeR_9": "9",
  /** Physical pin 10: VeeR; power_in. */
  "VeeR_10": "10",
  /** Physical pin 11: VeeR; passive. */
  "VeeR_11": "11",
  /** Physical pin 12: RD-; output. */
  "RD-": "12",
  /** Physical pin 13: RD+; output. */
  "RD+": "13",
  /** Physical pin 14: VeeR; passive. */
  "VeeR_14": "14",
  /** Physical pin 15: VccR; power_in. */
  "VccR": "15",
  /** Physical pin 16: VccT; power_in. */
  "VccT": "16",
  /** Physical pin 17: VeeT; passive. */
  "VeeT_17": "17",
  /** Physical pin 18: TD+; input. */
  "TD+": "18",
  /** Physical pin 19: TD-; input. */
  "TD-": "19",
  /** Physical pin 20: VeeT; passive. */
  "VeeT_20": "20",
  /** Physical pin CAGE: CAGE; passive. */
  "PCAGE": "CAGE",
}) {
  override schema = "Interface_Optical:SFP";
  override referencePrefix = "J";
}

/**
 * Connector for Small Form Factor Pluggable (SFP+) module, 10 Gbit/s, serial-to-serial data-agnostic optical transceiver
 *
 * KiCad symbol: `Interface_Optical:SFP+`. Reference prefix: `J`.
 * Footprint filters: *SFP*.
 * @see https://members.snia.org/document/dl/25892
 * Keywords: SFP transceiver gigabit ethernet SFF-8432.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFP_ extends Component.withPins({
  /** Physical pin 1: VeeT; power_in. */
  "VeeT_1": "1",
  /** Physical pin 2: TX_FAULT; open_collector. */
  "TX_FAULT": "2",
  /** Physical pin 3: TX_DISABLE; input. */
  "TX_DISABLE": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: MOD_ABS; passive. */
  "MOD_ABS": "6",
  /** Physical pin 7: RS0; input. */
  "RS0": "7",
  /** Physical pin 8: RX_LOS; open_collector. */
  "RX_LOS": "8",
  /** Physical pin 9: RS1; input. */
  "RS1": "9",
  /** Physical pin 10: VeeR; power_in. */
  "VeeR_10": "10",
  /** Physical pin 11: VeeR; passive. */
  "VeeR_11": "11",
  /** Physical pin 12: RD-; output. */
  "RD-": "12",
  /** Physical pin 13: RD+; output. */
  "RD+": "13",
  /** Physical pin 14: VeeR; passive. */
  "VeeR_14": "14",
  /** Physical pin 15: VccR; power_in. */
  "VccR": "15",
  /** Physical pin 16: VccT; power_in. */
  "VccT": "16",
  /** Physical pin 17: VeeT; passive. */
  "VeeT_17": "17",
  /** Physical pin 18: TD+; input. */
  "TD+": "18",
  /** Physical pin 19: TD-; input. */
  "TD-": "19",
  /** Physical pin 20: VeeT; passive. */
  "VeeT_20": "20",
  /** Physical pin CAGE: CAGE; passive. */
  "PCAGE": "CAGE",
}) {
  override schema = "Interface_Optical:SFP+";
  override referencePrefix = "J";
}

/**
 * IR Receiver Modules for Data Transmission
 *
 * KiCad symbol: `Interface_Optical:TSDP341xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82667/tsdp341.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSDP341xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSDP341xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Data Transmission
 *
 * KiCad symbol: `Interface_Optical:TSDP343xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82667/tsdp341.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSDP343xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSDP343xx";
  override referencePrefix = "U";
}

/**
 * Photo Module (Repeater) for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSMP58138`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82486/tsmp58138.pdf
 * Keywords: opto IR repeater receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSMP58138 extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSMP58138";
  override referencePrefix = "U";
}

/**
 * Photo Module (Amplify&Condition) for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSMP58000`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82485/tsmp58000.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSMP58000 extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSMP58000";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP17xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*CAST*.
 * @see http://www.micropik.com/PDF/tsop17xx.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_CAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP17xx extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: Vs; power_in. */
  "Vs": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
}) {
  override schema = "Interface_Optical:TSOP17xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP32S40F`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82669/tsop32s40f.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP32S40F extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: Vs; power_in. */
  "Vs": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
  override schema = "Interface_Optical:TSOP32S40F";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP21xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82460/tsop45.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP21xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: Vs; power_in. */
  "Vs": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
  override schema = "Interface_Optical:TSOP21xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP23xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82460/tsop45.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP23xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: Vs; power_in. */
  "Vs": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
  override schema = "Interface_Optical:TSOP23xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP25xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82460/tsop45.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP25xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: Vs; power_in. */
  "Vs": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
  override schema = "Interface_Optical:TSOP25xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP312xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*CAST*.
 * @see http://www.vishay.com/docs/82492/tsop312.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_CAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP312xx extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: Vs; power_in. */
  "Vs": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
}) {
  override schema = "Interface_Optical:TSOP312xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP314xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*CAST*.
 * @see http://www.vishay.com/docs/82492/tsop312.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_CAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP314xx extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: Vs; power_in. */
  "Vs": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
}) {
  override schema = "Interface_Optical:TSOP314xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP321xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82490/tsop321.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP321xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: Vs; power_in. */
  "Vs": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
  override schema = "Interface_Optical:TSOP321xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP323xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82490/tsop321.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP323xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: Vs; power_in. */
  "Vs": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
  override schema = "Interface_Optical:TSOP323xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP325xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82490/tsop321.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP325xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: Vs; power_in. */
  "Vs": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
  override schema = "Interface_Optical:TSOP325xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP331xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINIMOLD*.
 * @see http://www.vishay.com/docs/82742/tsop331.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINIMOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP331xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP331xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP333xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINIMOLD*.
 * @see http://www.vishay.com/docs/82742/tsop331.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINIMOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP333xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP333xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP335xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINIMOLD*.
 * @see http://www.vishay.com/docs/82742/tsop331.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINIMOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP335xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP335xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP341xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82490/tsop321.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP341xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP341xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP343xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82490/tsop321.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP343xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP343xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP345xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82490/tsop321.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP345xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP345xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP348xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see https://www.vishay.com/docs/82489/tsop322.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP348xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP348xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP34S40F`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82669/tsop32s40f.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP34S40F extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP34S40F";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP581xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82462/tsop581.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP581xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP581xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP382xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82491/tsop382.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP382xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP382xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP384xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82491/tsop382.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP384xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP384xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP38G36`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82731/tsop38g36.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP38G36 extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP38G36";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP41xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82460/tsop45.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP41xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP41xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP43xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82460/tsop45.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP43xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP43xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP45xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MOLD*.
 * @see http://www.vishay.com/docs/82460/tsop45.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP45xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP45xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP531xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINIMOLD*.
 * @see http://www.vishay.com/docs/82745/tsop531.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINIMOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP531xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP531xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP533xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINIMOLD*.
 * @see http://www.vishay.com/docs/82745/tsop531.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINIMOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP533xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP533xx";
  override referencePrefix = "U";
}

/**
 * IR Receiver Modules for Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP535xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINIMOLD*.
 * @see http://www.vishay.com/docs/82745/tsop531.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINIMOLD-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP535xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP535xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP582xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82461/tsop582.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP582xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP582xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP583xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82462/tsop581.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP583xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP583xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP584xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82461/tsop582.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP584xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP584xx";
  override referencePrefix = "U";
}

/**
 * Photo Modules for PCM Remote Control Systems
 *
 * KiCad symbol: `Interface_Optical:TSOP585xx`. Reference prefix: `U`.
 * Footprint filters: Vishay*MINICAST*.
 * @see http://www.vishay.com/docs/82462/tsop581.pdf
 * Keywords: opto IR receiver.
 * Default footprint: OptoDevice:Vishay_MINICAST-3Pin.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSOP585xx extends Component.withPins({
  /** Physical pin 1: OUT; output. */
  "OUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vs; power_in. */
  "Vs": "3",
}) {
  override schema = "Interface_Optical:TSOP585xx";
  override referencePrefix = "U";
}

