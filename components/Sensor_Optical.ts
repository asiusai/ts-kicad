// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * light dependent resistor
 *
 * KiCad symbol: `Sensor_Optical:A1050`. Reference prefix: `R`.
 * Footprint filters: R*LDR*D6.4*P3.4*.
 * @see http://cdn-reichelt.de/documents/datenblatt/A500/A106012.pdf
 * Keywords: light dependent photo resistor LDR.
 * Default footprint: OptoDevice:R_LDR_D6.4mm_P3.4mm_Vertical.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class A1050 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Sensor_Optical:A1050";
  override referencePrefix = "R";
}

/**
 * light dependent resistor
 *
 * KiCad symbol: `Sensor_Optical:A1060`. Reference prefix: `R`.
 * Footprint filters: R*LDR*D6.4*P3.4*.
 * @see http://cdn-reichelt.de/documents/datenblatt/A500/A106012.pdf
 * Keywords: light dependent photo resistor LDR.
 * Default footprint: OptoDevice:R_LDR_D6.4mm_P3.4mm_Vertical.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class A1060 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Sensor_Optical:A1060";
  override referencePrefix = "R";
}

/**
 * light dependent resistor
 *
 * KiCad symbol: `Sensor_Optical:A9050`. Reference prefix: `R`.
 * Footprint filters: R*LDR*5.0x4.1mm*P3mm*.
 * @see http://cdn-reichelt.de/documents/datenblatt/A500/A90xxxx%23PE.pdf
 * Keywords: light dependent photo resistor LDR.
 * Default footprint: OptoDevice:R_LDR_5.0x4.1mm_P3mm_Vertical.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class A9050 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Sensor_Optical:A9050";
  override referencePrefix = "R";
}

/**
 * light dependent resistor
 *
 * KiCad symbol: `Sensor_Optical:A9013`. Reference prefix: `R`.
 * Footprint filters: R*LDR*5.0x4.1mm*P3mm*.
 * @see http://www.produktinfo.conrad.com/datenblaetter/125000-149999/145475-da-01-en-FOTOWIDERSTAND_A_9060_A_9013.pdf
 * Keywords: light dependent photo resistor LDR.
 * Default footprint: OptoDevice:R_LDR_5.0x4.1mm_P3mm_Vertical.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class A9013 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Sensor_Optical:A9013";
  override referencePrefix = "R";
}

/**
 * light dependent resistor
 *
 * KiCad symbol: `Sensor_Optical:A9060`. Reference prefix: `R`.
 * Footprint filters: R*LDR*5.0x4.1mm*P3mm*.
 * @see http://cdn-reichelt.de/documents/datenblatt/A500/A90xxxx%23PE.pdf
 * Keywords: light dependent photo resistor LDR.
 * Default footprint: OptoDevice:R_LDR_5.0x4.1mm_P3mm_Vertical.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class A9060 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Sensor_Optical:A9060";
  override referencePrefix = "R";
}

/**
 * Digital RGB, IR, and Ambient Light Sensor, 1.7-3.6V, LGA-8
 *
 * KiCad symbol: `Sensor_Optical:APDS-9251-001`. Reference prefix: `U`.
 * Footprint filters: Broadcom*LGA*2x2mm*P0.5mm*.
 * @see https://docs.broadcom.com/doc/APDS-9251-001-DS
 * Keywords: opto ambient light sensor.
 * Default footprint: OptoDevice:Broadcom_LGA-8_2x2mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APDS_9251_001 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: INT; open_collector. */
  "INT": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Sensor_Optical:APDS-9251-001";
  override referencePrefix = "U";
}

/**
 * ambient light sensor, i2c interface, 2.7-3.6V
 *
 * KiCad symbol: `Sensor_Optical:APDS-9301`. Reference prefix: `U`.
 * Footprint filters: Broadcom*APDS*9301*.
 * @see https://docs.broadcom.com/docs/AV02-2315EN
 * Keywords: ambient light sensor i2c.
 * Default footprint: OptoDevice:Broadcom_APDS-9301.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APDS_9301 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ADR_SEL; input. */
  "ADR_SEL": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: INT; open_collector. */
  "INT": "6",
}) {
  override schema = "Sensor_Optical:APDS-9301";
  override referencePrefix = "U";
}

/**
 * Ambient Light Sensor, I2C interface, 1.7-3.6V, LGA-8
 *
 * KiCad symbol: `Sensor_Optical:APDS-9306`. Reference prefix: `U`.
 * Footprint filters: Broadcom*LGA*2x2mm*P0.53mm*.
 * @see https://docs.broadcom.com/docs/AV02-4755EN
 * Keywords: opto ambient light sensor.
 * Default footprint: OptoDevice:Broadcom_LGA-8_2x2mm_P0.53mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APDS_9306 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: INT; open_collector. */
  "INT": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Sensor_Optical:APDS-9306";
  override referencePrefix = "U";
}

/**
 * Ambient Light Sensor, I2C interface, 1.7-3.6V, DFN-6
 *
 * KiCad symbol: `Sensor_Optical:APDS-9306-065`. Reference prefix: `U`.
 * Footprint filters: Broadcom*DFN*2x2mm*P0.65mm*.
 * @see https://docs.broadcom.com/docs/AV02-4755EN
 * Keywords: opto ambient light sensor.
 * Default footprint: OptoDevice:Broadcom_DFN-6_2x2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APDS_9306_065 extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: INT; open_collector. */
  "INT": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
}) {
  override schema = "Sensor_Optical:APDS-9306-065";
  override referencePrefix = "U";
}

/**
 * Spectral Sensing Engine, 6-Channel XYZ Spectral_ID
 *
 * KiCad symbol: `Sensor_Optical:AS7261`. Reference prefix: `U`.
 * Footprint filters: AMS?LGA*4.7x4.5mm*P0.65mm*.
 * @see https://ams.com/documents/20143/36005/AS7261_DS000493_1-00.pdf/0e7d1f12-702e-d061-b07a-67b0b6316800
 * Keywords: 6-Channel XYZ Spectral_ID Device Electronic Shutter Smart Interface i2c uart.
 * Default footprint: Package_LGA:AMS_LGA-20_4.7x4.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS7261 extends Component.withPins({
  /** Physical pin 1: NF; no_connect. */
  "NF_1": "1",
  /** Physical pin 2: ~{RES}; input. */
  "~{RES}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: MOSI; bidirectional. */
  "MOSI": "4",
  /** Physical pin 5: MISO; bidirectional. */
  "MISO": "5",
  /** Physical pin 6: CSN_EE; input. */
  "CSN_EE": "6",
  /** Physical pin 7: CSN_SD; input. */
  "CSN_SD": "7",
  /** Physical pin 8: I2C_ENB; input. */
  "I2C_ENB": "8",
  /** Physical pin 9: NF; no_connect. */
  "NF_9": "9",
  /** Physical pin 10: NF; no_connect. */
  "NF_10": "10",
  /** Physical pin 11: RX/SCL_S; input. */
  "RX/SCL_S": "11",
  /** Physical pin 12: TX/SDA_S; bidirectional. */
  "TX/SDA_S": "12",
  /** Physical pin 13: INT; input. */
  "INT": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD_14": "14",
  /** Physical pin 15: LED_DRV; output. */
  "LED_DRV": "15",
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: LED_IND; output. */
  "LED_IND": "18",
  /** Physical pin 19: NF; no_connect. */
  "NF_19": "19",
  /** Physical pin 20: NF; no_connect. */
  "NF_20": "20",
}) {
  override schema = "Sensor_Optical:AS7261";
  override referencePrefix = "U";
}

/**
 * Spectral Sensing Engine, 6-Channel Visible Spectral_ID
 *
 * KiCad symbol: `Sensor_Optical:AS7262`. Reference prefix: `U`.
 * Footprint filters: AMS?LGA*4.7x4.5mm*P0.65mm*.
 * @see https://ams.com/documents/20143/36005/AS7262_DS000486_5-00.pdf
 * Keywords: 6-Channel Visible Spectral_ID Device Electronic Shutter Smart Interface i2c uart.
 * Default footprint: Package_LGA:AMS_LGA-20_4.7x4.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS7262 extends Component.withPins({
  /** Physical pin 1: NF; no_connect. */
  "NF_1": "1",
  /** Physical pin 2: ~{RES}; input. */
  "~{RES}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: MOSI; bidirectional. */
  "MOSI": "4",
  /** Physical pin 5: MISO; bidirectional. */
  "MISO": "5",
  /** Physical pin 6: CSN_EE; input. */
  "CSN_EE": "6",
  /** Physical pin 7: CSN_SD; input. */
  "CSN_SD": "7",
  /** Physical pin 8: I2C_ENB; input. */
  "I2C_ENB": "8",
  /** Physical pin 9: NF; no_connect. */
  "NF_9": "9",
  /** Physical pin 10: NF; no_connect. */
  "NF_10": "10",
  /** Physical pin 11: RX/SCL_S; input. */
  "RX/SCL_S": "11",
  /** Physical pin 12: TX/SDA_S; bidirectional. */
  "TX/SDA_S": "12",
  /** Physical pin 13: INT; input. */
  "INT": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD_14": "14",
  /** Physical pin 15: LED_DRV; output. */
  "LED_DRV": "15",
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: LED_IND; output. */
  "LED_IND": "18",
  /** Physical pin 19: NF; no_connect. */
  "NF_19": "19",
  /** Physical pin 20: NF; no_connect. */
  "NF_20": "20",
}) {
  override schema = "Sensor_Optical:AS7262";
  override referencePrefix = "U";
}

/**
 * Spectral Sensing Engine, 6-Channel NIR Spectral_ID
 *
 * KiCad symbol: `Sensor_Optical:AS7263`. Reference prefix: `U`.
 * Footprint filters: AMS?LGA*4.7x4.5mm*P0.65mm*.
 * @see https://ams.com/documents/20143/36005/AS7263_DS000476_4-00.pdf
 * Keywords: 6-Channel NIR Spectral_ID Device Electronic Shutter Smart Interface i2c uart.
 * Default footprint: Package_LGA:AMS_LGA-20_4.7x4.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS7263 extends Component.withPins({
  /** Physical pin 1: NF; no_connect. */
  "NF_1": "1",
  /** Physical pin 2: ~{RES}; input. */
  "~{RES}": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: MOSI; bidirectional. */
  "MOSI": "4",
  /** Physical pin 5: MISO; bidirectional. */
  "MISO": "5",
  /** Physical pin 6: CSN_EE; input. */
  "CSN_EE": "6",
  /** Physical pin 7: CSN_SD; input. */
  "CSN_SD": "7",
  /** Physical pin 8: I2C_ENB; input. */
  "I2C_ENB": "8",
  /** Physical pin 9: NF; no_connect. */
  "NF_9": "9",
  /** Physical pin 10: NF; no_connect. */
  "NF_10": "10",
  /** Physical pin 11: RX/SCL_S; input. */
  "RX/SCL_S": "11",
  /** Physical pin 12: TX/SDA_S; bidirectional. */
  "TX/SDA_S": "12",
  /** Physical pin 13: INT; input. */
  "INT": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD_14": "14",
  /** Physical pin 15: LED_DRV; output. */
  "LED_DRV": "15",
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: LED_IND; output. */
  "LED_IND": "18",
  /** Physical pin 19: NF; no_connect. */
  "NF_19": "19",
  /** Physical pin 20: NF; no_connect. */
  "NF_20": "20",
}) {
  override schema = "Sensor_Optical:AS7263";
  override referencePrefix = "U";
}

/**
 * Smart 18-Channel VIS+NIR Spectral_ID Sensor with Electronic Shutter, LGA-20
 *
 * KiCad symbol: `Sensor_Optical:AS72651`. Reference prefix: `U`.
 * Footprint filters: AMS?LGA*4.7x4.5mm*P0.65mm*.
 * @see https://ams.com/documents/20143/36005/AS7265x_DS000612_1-00.pdf/08051c8a-a7f6-6231-7993-2d3fe0bf38b8
 * Keywords: Smart Spectral Sensor.
 * Default footprint: Package_LGA:AMS_LGA-20_4.7x4.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS72651 extends Component.withPins({
  /** Physical pin 1: ~{SLV1_RES}; output. */
  "~{SLV1_RES}": "1",
  /** Physical pin 2: ~{RES}; input. */
  "~{RES}": "2",
  /** Physical pin 3: SCK; output. */
  "SCK": "3",
  /** Physical pin 4: MOSI; output. */
  "MOSI": "4",
  /** Physical pin 5: MISO; input. */
  "MISO": "5",
  /** Physical pin 6: ~{CS}; output. */
  "~{CS}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: I2C_ENB; input. */
  "I2C_ENB": "8",
  /** Physical pin 9: SCL_M; output. */
  "SCL_M": "9",
  /** Physical pin 10: SDA_M; bidirectional. */
  "SDA_M": "10",
  /** Physical pin 11: RX/SCL_S; input. */
  "RX/SCL_S": "11",
  /** Physical pin 12: TX/SDA_S; bidirectional. */
  "TX/SDA_S": "12",
  /** Physical pin 13: INT; output. */
  "INT": "13",
  /** Physical pin 14: VDD2; power_in. */
  "VDD2": "14",
  /** Physical pin 15: LED_DRV; output. */
  "LED_DRV": "15",
  /** Physical pin 16: GND; power_in. */
  "GND": "16",
  /** Physical pin 17: VDD1; power_in. */
  "VDD1": "17",
  /** Physical pin 18: LED_IND; output. */
  "LED_IND": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: ~{SLV2_RES}; output. */
  "~{SLV2_RES}": "20",
}) {
  override schema = "Sensor_Optical:AS72651";
  override referencePrefix = "U";
}

/**
 * 11-Channel Multi-Spectral Digital Sensor, OLGA-8
 *
 * KiCad symbol: `Sensor_Optical:AS7341DLG`. Reference prefix: `U`.
 * Footprint filters: AMS*OLGA*2x3.1mm*P0.8mm*.
 * @see https://ams.com/documents/20143/36005/AS7341_DS000504_3-00.pdf
 * Keywords: 11-Channel Spectral i2c optical color.
 * Default footprint: Package_LGA:AMS_OLGA-8_2x3.1mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS7341DLG extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: LDR; passive. */
  "LDR": "4",
  /** Physical pin 5: PGND; power_in. */
  "PGND": "5",
  /** Physical pin 6: GPIO; input. */
  "GPIO": "6",
  /** Physical pin 7: INT; open_collector. */
  "INT": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
}) {
  override schema = "Sensor_Optical:AS7341DLG";
  override referencePrefix = "U";
}

/**
 * 14-Channel Multi-Spectral Digital Sensor including XYZ, Clear and Flicker Detection, 380 - 1000 nm,OLGA-8
 *
 * KiCad symbol: `Sensor_Optical:AS7343xDLG`. Reference prefix: `U`.
 * Footprint filters: AMS*OLGA*2x3.1mm*P0.8mm*.
 * @see https://ams.com/documents/20143/6705498/AS7343_DS001046_6_00.pdf
 * Keywords: 14-Channel Spectral i2c optical color.
 * Default footprint: Package_LGA:AMS_OLGA-8_2x3.1mm_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS7343xDLG extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: LDR; passive. */
  "LDR": "4",
  /** Physical pin 5: PGND; power_in. */
  "PGND": "5",
  /** Physical pin 6: GPIO; input. */
  "GPIO": "6",
  /** Physical pin 7: INT; open_collector. */
  "INT": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
}) {
  override schema = "Sensor_Optical:AS7343xDLG";
  override referencePrefix = "U";
}

/**
 * NPN Phototransistor
 *
 * KiCad symbol: `Sensor_Optical:BP103`. Reference prefix: `Q`.
 * Footprint filters: TO?18*Lens*.
 * @see http://www.osram-os.com/Graphics/XPic3/00101777_0.pdf/BP
 * Keywords: npn phototransistor.
 * Default footprint: Package_TO_SOT_THT:TO-18-3_Lens.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BP103 extends Component.withPins({
  /** Physical pin 1: E; passive. */
  "E": "1",
  /** Physical pin 2: B; input. */
  "B": "2",
  /** Physical pin 3: C; passive. */
  "C": "3",
}) {
  override schema = "Sensor_Optical:BP103";
  override referencePrefix = "Q";
}

/**
 * Phototransistor NPN
 *
 * KiCad symbol: `Sensor_Optical:BPW40`. Reference prefix: `Q`.
 * Footprint filters: LED*D5.0mm*Clear*.
 * @see https://www.rcscomponents.kiev.ua/datasheets/bpw40.pdf
 * Keywords: npn phototransistor.
 * Default footprint: LED_THT:LED_D5.0mm_Clear.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPW40 extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Sensor_Optical:BPW40";
  override referencePrefix = "Q";
}

/**
 * NPN phototransistor
 *
 * KiCad symbol: `Sensor_Optical:BP103B`. Reference prefix: `Q`.
 * Footprint filters: LED*D5.0mm*Clear*.
 * @see http://www.b-kainka.de/Daten/Sensor/bp103bf.pdf
 * Keywords: NPN phototransistor.
 * Default footprint: LED_THT:LED_D5.0mm_Clear.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BP103B extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Sensor_Optical:BP103B";
  override referencePrefix = "Q";
}

/**
 * NPN phototransistor with daylight filter
 *
 * KiCad symbol: `Sensor_Optical:BP103BF`. Reference prefix: `Q`.
 * Footprint filters: LED*D5.0mm*Clear*.
 * @see http://www.b-kainka.de/Daten/Sensor/bp103bf.pdf
 * Keywords: IR NPN phototransistor.
 * Default footprint: LED_THT:LED_D5.0mm_Clear.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BP103BF extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Sensor_Optical:BP103BF";
  override referencePrefix = "Q";
}

/**
 * Silicon PIN Photodiode
 *
 * KiCad symbol: `Sensor_Optical:BPW34`. Reference prefix: `D`.
 * Footprint filters: Osram*DIL2*4.3x4.65mm*P5.08*.
 * @see http://www.vishay.com/docs/81521/bpw34.pdf
 * Keywords: opto PIN photodiode.
 * Default footprint: OptoDevice:Osram_DIL2_4.3x4.65mm_P5.08mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPW34 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:BPW34";
  override referencePrefix = "D";
}

/**
 * Silicon PIN Photodiode
 *
 * KiCad symbol: `Sensor_Optical:BP104`. Reference prefix: `D`.
 * Footprint filters: Osram*DIL2*4.3x4.65mm*P5.08*.
 * @see http://www.vishay.com/docs/81500/81500.pdf
 * Keywords: opto PIN photodiode.
 * Default footprint: OptoDevice:Osram_DIL2_4.3x4.65mm_P5.08mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BP104 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:BP104";
  override referencePrefix = "D";
}

/**
 * Silicon PIN Photodiode,  Area 2.2x2.2mm
 *
 * KiCad symbol: `Sensor_Optical:BP104-SMD`. Reference prefix: `D`.
 * Footprint filters: Osram*BP104*.
 * @see https://dammedia.osram.info/media/resource/hires/osram-dam-5989350/BP%20104%20FAS_EN.pdf
 * Keywords: opto photodiode.
 * Default footprint: OptoDevice:Osram_BP104-SMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BP104_SMD extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:BP104-SMD";
  override referencePrefix = "D";
}

/**
 * Silicon Photodiode for the visible spectral range, TO-5 package
 *
 * KiCad symbol: `Sensor_Optical:BPW21`. Reference prefix: `D`.
 * Footprint filters: TO?5*Window*.
 * @see http://techwww.in.tu-clausthal.de/site/Dokumentation/Dioden/Fotodioden/BPW21-Fotodiode.pdf
 * Keywords: opto photodiode.
 * Default footprint: Package_TO_SOT_THT:TO-5-2_Window.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPW21 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
}) {
  override schema = "Sensor_Optical:BPW21";
  override referencePrefix = "D";
}

/**
 * Silicon PIN Photodiode, Area 2.65x2.65mm
 *
 * KiCad symbol: `Sensor_Optical:BPW34-SMD`. Reference prefix: `D`.
 * Footprint filters: Osram*BPW34S*.
 * @see https://dammedia.osram.info/media/resource/hires/osram-dam-5488319/BPW%2034%20S_EN.pdf
 * Keywords: opto photodiode.
 * Default footprint: OptoDevice:Osram_BPW34S-SMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPW34_SMD extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:BPW34-SMD";
  override referencePrefix = "D";
}

/**
 * Phototransistor NPN
 *
 * KiCad symbol: `Sensor_Optical:SFH309`. Reference prefix: `Q`.
 * Footprint filters: LED*3.0mm*Clear*.
 * @see http://www.osram-os.com/Graphics/XPic2/00101811_0.pdf/SFH%20309,%20SFH%20309%20FA,%20Lead%20(Pb)%20Free%20Product%20-%20RoHS%20Compliant.pdf
 * Keywords: npn phototransistor.
 * Default footprint: LED_THT:LED_D3.0mm_Clear.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH309 extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Sensor_Optical:SFH309";
  override referencePrefix = "Q";
}

/**
 * NPN phototransistor
 *
 * KiCad symbol: `Sensor_Optical:BPW42`. Reference prefix: `Q`.
 * Footprint filters: LED*3.0mm*Clear*.
 * @see http://www.ges.cz/sheets/b/bpw42.pdf
 * Keywords: NPN phototransistor opto.
 * Default footprint: LED_THT:LED_D3.0mm_Clear.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPW42 extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Sensor_Optical:BPW42";
  override referencePrefix = "Q";
}

/**
 * Silicon PIN Photodiode with Daylight Blocking Filter
 *
 * KiCad symbol: `Sensor_Optical:BPW82`. Reference prefix: `D`.
 * Footprint filters: Osram*BPW82*.
 * @see http://www.vishay.com/docs/81529/bpw82.pdf
 * Keywords: opto photo diode.
 * Default footprint: OptoDevice:Osram_BPW82.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPW82 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:BPW82";
  override referencePrefix = "D";
}

/**
 * Silicon NPN Phototransistor, Ica = 0.8-8mA, T-1
 *
 * KiCad symbol: `Sensor_Optical:BPW85`. Reference prefix: `Q`.
 * Footprint filters: LED*3.0mm*Clear*.
 * @see https://www.vishay.com/docs/81531/bpw85a.pdf
 * Keywords: npn phototransistor.
 * Default footprint: LED_THT:LED_D3.0mm_Clear.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPW85 extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Sensor_Optical:BPW85";
  override referencePrefix = "Q";
}

/**
 * Silicon NPN Phototransistor, Ica = 0.8-2.5mA, T-1
 *
 * KiCad symbol: `Sensor_Optical:BPW85A`. Reference prefix: `Q`.
 * Footprint filters: LED*3.0mm*Clear*.
 * @see https://www.vishay.com/docs/81531/bpw85a.pdf
 * Keywords: npn phototransistor.
 * Default footprint: LED_THT:LED_D3.0mm_Clear.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPW85A extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Sensor_Optical:BPW85A";
  override referencePrefix = "Q";
}

/**
 * Silicon NPN Phototransistor, Ica = 1.5-4mA, T-1
 *
 * KiCad symbol: `Sensor_Optical:BPW85B`. Reference prefix: `Q`.
 * Footprint filters: LED*3.0mm*Clear*.
 * @see https://www.vishay.com/docs/81531/bpw85a.pdf
 * Keywords: npn phototransistor.
 * Default footprint: LED_THT:LED_D3.0mm_Clear.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPW85B extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Sensor_Optical:BPW85B";
  override referencePrefix = "Q";
}

/**
 * Silicon NPN Phototransistor, Ica = 3-8mA, T-1
 *
 * KiCad symbol: `Sensor_Optical:BPW85C`. Reference prefix: `Q`.
 * Footprint filters: LED*3.0mm*Clear*.
 * @see https://www.vishay.com/docs/81531/bpw85a.pdf
 * Keywords: npn phototransistor.
 * Default footprint: LED_THT:LED_D3.0mm_Clear.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPW85C extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Sensor_Optical:BPW85C";
  override referencePrefix = "Q";
}

/**
 * Silicon Photodiode for the visible spectral range
 *
 * KiCad symbol: `Sensor_Optical:BPX61`. Reference prefix: `D`.
 * Footprint filters: TO?5*Window*.
 * @see http://www.osram-os.com/Graphics/XPic3/00101650_0.pdf
 * Keywords: photodiode opto.
 * Default footprint: Package_TO_SOT_THT:TO-5-2_Window.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPX61 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
}) {
  override schema = "Sensor_Optical:BPX61";
  override referencePrefix = "D";
}

/**
 * Silicon PIN Photodiode, TO-18 package
 *
 * KiCad symbol: `Sensor_Optical:BPX65`. Reference prefix: `D`.
 * Footprint filters: TO?18*Lens*.
 * @see http://www.osram-os.com/Graphics/XPic1/00181579_0.pdf/BPX%2065,%20Lead%20(Pb)%20Free%20Product%20-%20RoHS%20Compliant.pdf
 * Keywords: opto PIN photo diode.
 * Default footprint: Package_TO_SOT_THT:TO-18-2_Lens.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPX65 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:BPX65";
  override referencePrefix = "D";
}

/**
 * NPN Phototransistor
 *
 * KiCad symbol: `Sensor_Optical:BPY62`. Reference prefix: `Q`.
 * Footprint filters: TO?18*Lens*.
 * @see http://www.osram-os.com/Graphics/XPic9/00208595_0.pdf
 * Keywords: NPN Phototransistor opto.
 * Default footprint: Package_TO_SOT_THT:TO-18-3_Lens.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BPY62 extends Component.withPins({
  /** Physical pin 1: E; passive. */
  "E": "1",
  /** Physical pin 2: B; input. */
  "B": "2",
  /** Physical pin 3: C; passive. */
  "C": "3",
}) {
  override schema = "Sensor_Optical:BPY62";
  override referencePrefix = "Q";
}

/**
 * Micro spectrometer 340 to 850nm resolution 15nm
 *
 * KiCad symbol: `Sensor_Optical:C12880MA`. Reference prefix: `U`.
 * Footprint filters: Hamamatsu*C12880*.
 * @see http://www.hamamatsu.com/resources/pdf/ssd/c12880ma_kacc1226e.pdf
 * Keywords: spectrometer.
 * Default footprint: OptoDevice:Hamamatsu_C12880.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class C12880MA extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC_3": "3",
  /** Physical pin 4: CLK; input. */
  "CLK": "4",
  /** Physical pin 5: CASE; passive. */
  "CASE": "5",
  /** Physical pin 6: ST; input. */
  "ST": "6",
  /** Physical pin 7: TRG; output. */
  "TRG": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
  /** Physical pin 9: EOS; output. */
  "EOS": "9",
  /** Physical pin 10: VIDEO; output. */
  "VIDEO": "10",
}) {
  override schema = "Sensor_Optical:C12880MA";
  override referencePrefix = "U";
}

/**
 * SiPM, OnSemi J-Series 3x3mm with fast output, 20/35um microcell size, 24.2..24.7Vbr, ODCSP-8
 *
 * KiCad symbol: `Sensor_Optical:D_SiPM_OnSemi_MicroFJ-300xx`. Reference prefix: `D`.
 * Footprint filters: *BGA*3.16x3.16mm*Layout3x3*P1.26mm*.
 * @see https://www.onsemi.com/pdf/datasheet/microj-series-d.pdf
 * Keywords: SiPM MPPC SPAD photon counting.
 * Default footprint: Package_CSP:OnSemi_ODCSP8_BGA-8_3.16x3.16mm_Layout3x3_P1.26mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_SiPM_OnSemi_MicroFJ_300xx extends Component.withPins({
  /** Physical pin A1: C; passive. */
  "C_A1": "A1",
  /** Physical pin B1: A; passive. */
  "A": "B1",
  /** Physical pin B3: F; passive. */
  "F": "B3",
  /** Physical pin C3: C; passive. */
  "C_C3": "C3",
}) {
  override schema = "Sensor_Optical:D_SiPM_OnSemi_MicroFJ-300xx";
  override referencePrefix = "D";
}

/**
 * SiPM, OnSemi J-Series 6x6mm with fast output, 35um microcell size, 24.1..24.7Vbr, ODCSP36
 *
 * KiCad symbol: `Sensor_Optical:D_SiPM_OnSemi_MicroFJ-60035`. Reference prefix: `D`.
 * Footprint filters: *BGA*6.13x6.13mm*Layout6x6*P1.0mm*.
 * @see https://www.onsemi.com/pdf/datasheet/microj-series-d.pdf
 * Keywords: SiPM MPPC SPAD photon counting.
 * Default footprint: Package_CSP:OnSemi_ODCSP36_BGA-36_6.13x6.13mm_Layout6x6_P1.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class D_SiPM_OnSemi_MicroFJ_60035 extends Component.withPins({
  /** Physical pin A1: C; passive. */
  "C_A1": "A1",
  /** Physical pin C1: A; passive. */
  "A_C1": "C1",
  /** Physical pin C6: F; passive. */
  "F_C6": "C6",
  /** Physical pin D1: A; passive. */
  "A_D1": "D1",
  /** Physical pin D6: F; passive. */
  "F_D6": "D6",
  /** Physical pin F6: C; passive. */
  "C_F6": "F6",
}) {
  override schema = "Sensor_Optical:D_SiPM_OnSemi_MicroFJ-60035";
  override referencePrefix = "D";
}

/**
 * LWIR camera 8 to 14um 80x60 pixel
 *
 * KiCad symbol: `Sensor_Optical:Flir_LEPTON`. Reference prefix: `U`.
 * Footprint filters: *105028*1001*, *105028*2011*.
 * @see https://cdn.sparkfun.com/datasheets/Sensors/Infrared/FLIR_Lepton_Data_Brief.pdf
 * Keywords: LWIR camera.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Flir_LEPTON extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GPIO3; bidirectional. */
  "GPIO3": "2",
  /** Physical pin 3: GPIO2; bidirectional. */
  "GPIO2": "3",
  /** Physical pin 4: GPIO1; bidirectional. */
  "GPIO1": "4",
  /** Physical pin 5: GPIO0; bidirectional. */
  "GPIO0": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: VDDC; power_in. */
  "VDDC": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: SPI_MOSI; input. */
  "SPI_MOSI": "11",
  /** Physical pin 12: SPI_MISO; output. */
  "SPI_MISO": "12",
  /** Physical pin 13: SPI_CLK; input. */
  "SPI_CLK": "13",
  /** Physical pin 14: SPI_CS_L; input. */
  "SPI_CS_L": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: VDDIO; power_in. */
  "VDDIO": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: SCL; input. */
  "SCL": "21",
  /** Physical pin 22: SDA; bidirectional. */
  "SDA": "22",
  /** Physical pin 23: PWR_DWN_L; input. */
  "PWR_DWN_L": "23",
  /** Physical pin 24: RESET_L; input. */
  "RESET_L": "24",
  /** Physical pin 25: GND; power_in. */
  "GND_25": "25",
  /** Physical pin 26: MASTER_CLK; input. */
  "MASTER_CLK": "26",
  /** Physical pin 27: GND; power_in. */
  "GND_27": "27",
  /** Physical pin 28: MIPI_CLK_N; output. */
  "MIPI_CLK_N": "28",
  /** Physical pin 29: MIPI_CLK_P; output. */
  "MIPI_CLK_P": "29",
  /** Physical pin 30: GND; power_in. */
  "GND_30": "30",
  /** Physical pin 31: MIPI_DATA_N; output. */
  "MIPI_DATA_N": "31",
  /** Physical pin 32: MIPI_DATA_P; output. */
  "MIPI_DATA_P": "32",
}) {
  override schema = "Sensor_Optical:Flir_LEPTON";
  override referencePrefix = "U";
}

/**
 * ambient light sensor, i2c interface, 2.25-3.63V, DFN-6
 *
 * KiCad symbol: `Sensor_Optical:ISL29035`. Reference prefix: `U`.
 * Footprint filters: Renesas*DFN*1.5x1.6mm*P0.5mm*.
 * @see https://www.renesas.com/us/en/document/dst/isl29035-datasheet
 * Keywords: ambient light sensor i2c.
 * Default footprint: OptoDevice:Renesas_DFN-6_1.5x1.6mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISL29035 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: ~INT; open_collector. */
  "~INT": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
}) {
  override schema = "Sensor_Optical:ISL29035";
  override referencePrefix = "U";
}

/**
 * Ambient light NPN phototransistor, KPS-3227
 *
 * KiCad symbol: `Sensor_Optical:KPS-3227`. Reference prefix: `Q`.
 * Footprint filters: Kingbright*KPS?3227*.
 * @see https://www.kingbright.com/attachments/file/psearch/000/00/00/KPS-3227SP1C(Ver.16).pdf
 * Keywords: Kingbright npn phototransistor ambient light photo sensor.
 * Default footprint: OptoDevice:Kingbright_KPS-3227.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KPS_3227 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
  /** Physical pin 3: unnamed; passive. */
  "P3": "3",
  /** Physical pin 4: unnamed; passive. */
  "P4": "4",
}) {
  override schema = "Sensor_Optical:KPS-3227";
  override referencePrefix = "Q";
}

/**
 * RGB Colour Sensor, KPS-5130
 *
 * KiCad symbol: `Sensor_Optical:KPS-5130`. Reference prefix: `D`.
 * Footprint filters: Kingbright*KPS?5130*.
 * @see https://www.kingbright.com/attachments/file/psearch/000/00/20160808bak/KPS-5130PD7C(Ver.13).pdf
 * Keywords: opto photodiode RGB colour sensor.
 * Default footprint: OptoDevice:Kingbright_KPS-5130.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KPS_5130 extends Component.withPins({
  /** Physical pin 1: AR; passive. */
  "AR": "1",
  /** Physical pin 2: AG; passive. */
  "AG": "2",
  /** Physical pin 3: AB; passive. */
  "AB": "3",
  /** Physical pin 4: C; passive. */
  "C": "4",
}) {
  override schema = "Sensor_Optical:KPS-5130";
  override referencePrefix = "D";
}

/**
 * light dependent resistor
 *
 * KiCad symbol: `Sensor_Optical:LDR03`. Reference prefix: `R`.
 * Footprint filters: R*LDR*10x8.5mm*P7.6mm*.
 * @see http://www.elektronica-componenten.nl/WebRoot/StoreNL/Shops/61422969/54F1/BA0C/C664/31B9/2173/C0A8/2AB9/2AEF/LDR03IMP.pdf
 * Keywords: light dependent photo resistor LDR.
 * Default footprint: OptoDevice:R_LDR_10x8.5mm_P7.6mm_Vertical.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LDR03 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Sensor_Optical:LDR03";
  override referencePrefix = "R";
}

/**
 * light dependent resistor
 *
 * KiCad symbol: `Sensor_Optical:LDR07`. Reference prefix: `R`.
 * Footprint filters: R*LDR*5.1x4.3mm*P3.4mm*.
 * @see http://www.tme.eu/de/Document/f2e3ad76a925811312d226c31da4cd7e/LDR07.pdf
 * Keywords: light dependent photo resistor LDR.
 * Default footprint: OptoDevice:R_LDR_5.1x4.3mm_P3.4mm_Vertical.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LDR07 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Sensor_Optical:LDR07";
  override referencePrefix = "R";
}

/**
 * NPN phototransistor
 *
 * KiCad symbol: `Sensor_Optical:LPT80A`. Reference prefix: `Q`.
 * Footprint filters: Osram*LPT80A*.
 * @see http://www.osram-os.com/Graphics/XPic4/00209607_0.pdf/LPT%2080A.pdf
 * Keywords: NPN phototransistor.
 * Default footprint: OptoDevice:Osram_LPT80A.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LPT80A extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Sensor_Optical:LPT80A";
  override referencePrefix = "Q";
}

/**
 * ambient light sensor, i2c interface, 0.01 to 64k lux, 2.4-3.6V
 *
 * KiCad symbol: `Sensor_Optical:LTR-303ALS-01`. Reference prefix: `U`.
 * Footprint filters: Lite*On*LTR*303ALS*01*.
 * @see https://optoelectronics.liteon.com/upload/download/DS86-2013-0004/LTR-303ALS-01_DS_V1.pdf
 * Keywords: ambient light sensor i2c.
 * Default footprint: OptoDevice:Lite-On_LTR-303ALS-01.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTR_303ALS_01 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: INT; open_collector. */
  "INT": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
}) {
  override schema = "Sensor_Optical:LTR-303ALS-01";
  override referencePrefix = "U";
}

/**
 * light dependent resistor
 *
 * KiCad symbol: `Sensor_Optical:M9960`. Reference prefix: `R`.
 * Footprint filters: R*LDR*5.2x5.2mm*P3.5mm*.
 * @see http://cdn-reichelt.de/documents/datenblatt/A500/M996011a_b.pdf
 * Keywords: light dependent photo resistor LDR.
 * Default footprint: OptoDevice:R_LDR_5.2x5.2mm_P3.5mm_Horizontal.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M9960 extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Sensor_Optical:M9960";
  override referencePrefix = "R";
}

/**
 * Ambient Light Sensor with I2C Interface and Dark Current Compensation
 *
 * KiCad symbol: `Sensor_Optical:NOA1305`. Reference prefix: `U`.
 * Footprint filters: DFN*6*P0.65mm*.
 * @see http://www.onsemi.com/pub/Collateral/NOA1305-D.PDF
 * Keywords: opto ambient light sensor.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_2x2mm_P0.65mm_EP1x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NOA1305 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: INT; open_collector. */
  "INT": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: EP; passive. */
  "EP": "7",
}) {
  override schema = "Sensor_Optical:NOA1305";
  override referencePrefix = "U";
}

/**
 * 8-stage photomultiplier tube
 *
 * KiCad symbol: `Sensor_Optical:PMTx08Dyn`. Reference prefix: `PMT`.
 * Footprint filters: PMT*.
 * Keywords: PMT 8-stage.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PMTx08Dyn extends Component.withPins({
  /** Physical pin Dy1: Dynode; passive. */
  "Dynode_Dy1": "Dy1",
  /** Physical pin Dy2: Dynode; passive. */
  "Dynode_Dy2": "Dy2",
  /** Physical pin Dy3: Dynode; passive. */
  "Dynode_Dy3": "Dy3",
  /** Physical pin Dy4: Dynode; passive. */
  "Dynode_Dy4": "Dy4",
  /** Physical pin Dy5: Dynode; passive. */
  "Dynode_Dy5": "Dy5",
  /** Physical pin Dy6: Dynode; passive. */
  "Dynode_Dy6": "Dy6",
  /** Physical pin Dy7: Dynode; passive. */
  "Dynode_Dy7": "Dy7",
  /** Physical pin Dy8: Dynode; passive. */
  "Dynode_Dy8": "Dy8",
  /** Physical pin K: Photocathode; passive. */
  "Photocathode": "K",
  /** Physical pin P: Anode; passive. */
  "Anode": "P",
}) {
  override schema = "Sensor_Optical:PMTx08Dyn";
  override referencePrefix = "PMT";
}

/**
 * 8-stage photomultiplier tube with electrostatic and magnetic shield
 *
 * KiCad symbol: `Sensor_Optical:PMTx08Dyn_Shld`. Reference prefix: `PMT`.
 * Footprint filters: PMT*.
 * Keywords: PMT 8-stage.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PMTx08Dyn_Shld extends Component.withPins({
  /** Physical pin Dy1: Dynode; passive. */
  "Dynode_Dy1": "Dy1",
  /** Physical pin Dy2: Dynode; passive. */
  "Dynode_Dy2": "Dy2",
  /** Physical pin Dy3: Dynode; passive. */
  "Dynode_Dy3": "Dy3",
  /** Physical pin Dy4: Dynode; passive. */
  "Dynode_Dy4": "Dy4",
  /** Physical pin Dy5: Dynode; passive. */
  "Dynode_Dy5": "Dy5",
  /** Physical pin Dy6: Dynode; passive. */
  "Dynode_Dy6": "Dy6",
  /** Physical pin Dy7: Dynode; passive. */
  "Dynode_Dy7": "Dy7",
  /** Physical pin Dy8: Dynode; passive. */
  "Dynode_Dy8": "Dy8",
  /** Physical pin E: Electrostatic; passive. */
  "Electrostatic": "E",
  /** Physical pin K: Photocathode; passive. */
  "Photocathode": "K",
  /** Physical pin M: Magnetic; passive. */
  "Magnetic": "M",
  /** Physical pin P: Anode; passive. */
  "Anode": "P",
}) {
  override schema = "Sensor_Optical:PMTx08Dyn_Shld";
  override referencePrefix = "PMT";
}

/**
 * Multi-Pixel Photon Counter with 25µm pixel pitch
 *
 * KiCad symbol: `Sensor_Optical:S13360-3025CS`. Reference prefix: `D`.
 * Footprint filters: Hamamatsu*S13360*30CS*.
 * @see http://www.hamamatsu.com/resources/pdf/ssd/s13360_series_kapd1052e.pdf
 * Keywords: opto SiPM MPPC hamamatsu SPAD.
 * Default footprint: OptoDevice:Hamamatsu_S13360-30CS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class S13360_3025CS extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
}) {
  override schema = "Sensor_Optical:S13360-3025CS";
  override referencePrefix = "D";
}

/**
 * Multi-Pixel Photon Counter with 50µm pixel pitch
 *
 * KiCad symbol: `Sensor_Optical:S13360-3050CS`. Reference prefix: `D`.
 * Footprint filters: Hamamatsu*S13360*30CS*.
 * @see http://www.hamamatsu.com/resources/pdf/ssd/s13360_series_kapd1052e.pdf
 * Keywords: opto SiPM MPPC hamamatsu SPAD.
 * Default footprint: OptoDevice:Hamamatsu_S13360-30CS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class S13360_3050CS extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
}) {
  override schema = "Sensor_Optical:S13360-3050CS";
  override referencePrefix = "D";
}

/**
 * Multi-Pixel Photon Counter with 75µm pixel pitch
 *
 * KiCad symbol: `Sensor_Optical:S13360-3075CS`. Reference prefix: `D`.
 * Footprint filters: Hamamatsu*S13360*30CS*.
 * @see http://www.hamamatsu.com/resources/pdf/ssd/s13360_series_kapd1052e.pdf
 * Keywords: opto SiPM MPPC hamamatsu SPAD.
 * Default footprint: OptoDevice:Hamamatsu_S13360-30CS.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class S13360_3075CS extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: K; passive. */
  "K": "2",
}) {
  override schema = "Sensor_Optical:S13360-3075CS";
  override referencePrefix = "D";
}

/**
 * Si PIN Photodiode, 0.1 GHz, TO-18-3
 *
 * KiCad symbol: `Sensor_Optical:S5971`. Reference prefix: `D`.
 * Footprint filters: TO?18*.
 * @see https://www.hamamatsu.com/resources/pdf/ssd/s5971_etc_kpin1025e.pdf
 * Keywords: opto photodiode.
 * Default footprint: Package_TO_SOT_THT:TO-18-3.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class S5971 extends Component.withPins({
  /** Physical pin 2: C; passive. */
  "C": "2",
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Sensor_Optical:S5971";
  override referencePrefix = "D";
}

/**
 * Si PIN Photodiode, 0.5 GHz, TO-18-3
 *
 * KiCad symbol: `Sensor_Optical:S5972`. Reference prefix: `D`.
 * Footprint filters: TO?18*.
 * @see https://www.hamamatsu.com/resources/pdf/ssd/s5971_etc_kpin1025e.pdf
 * Keywords: opto photodiode.
 * Default footprint: Package_TO_SOT_THT:TO-18-3.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class S5972 extends Component.withPins({
  /** Physical pin 2: C; passive. */
  "C": "2",
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Sensor_Optical:S5972";
  override referencePrefix = "D";
}

/**
 * Si PIN Photodiode, 1 GHz, TO-18-3
 *
 * KiCad symbol: `Sensor_Optical:S5973`. Reference prefix: `D`.
 * Footprint filters: TO?18*.
 * @see https://www.hamamatsu.com/resources/pdf/ssd/s5971_etc_kpin1025e.pdf
 * Keywords: opto photodiode.
 * Default footprint: Package_TO_SOT_THT:TO-18-3.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class S5973 extends Component.withPins({
  /** Physical pin 2: C; passive. */
  "C": "2",
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 3: A; passive. */
  "A": "3",
}) {
  override schema = "Sensor_Optical:S5973";
  override referencePrefix = "D";
}

/**
 * Silicon PIN Photodiode
 *
 * KiCad symbol: `Sensor_Optical:SFH203`. Reference prefix: `D`.
 * Footprint filters: LED*D5.0mm*IRGrey*.
 * @see http://www.osram-os.com/Graphics/XPic9/00101656_0.pdf/SFH%20203,%20SFH%20203%20FA,%20Lead%20(Pb)%20Free%20Product%20-%20RoHS%20Compliant.pdf
 * Keywords: opto PIN photodiode.
 * Default footprint: LED_THT:LED_D5.0mm_IRGrey.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH203 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:SFH203";
  override referencePrefix = "D";
}

/**
 * Silicon PIN Photodiode with Daylight Blocking Filter
 *
 * KiCad symbol: `Sensor_Optical:SFH203FA`. Reference prefix: `D`.
 * Footprint filters: LED*D5.0mm*IRGrey*.
 * @see http://www.osram-os.com/Graphics/XPic9/00101656_0.pdf/SFH%20203,%20SFH%20203%20FA,%20Lead%20(Pb)%20Free%20Product%20-%20RoHS%20Compliant.pdf
 * Keywords: PIN photodiode IR.
 * Default footprint: LED_THT:LED_D5.0mm_IRGrey.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH203FA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:SFH203FA";
  override referencePrefix = "D";
}

/**
 * Silicon PIN Photodiode with Daylight Blocking Filter
 *
 * KiCad symbol: `Sensor_Optical:SFH205F`. Reference prefix: `D`.
 * Footprint filters: Osram*SFH205*.
 * @see http://www.osram-os.com/Graphics/XPic2/00101668_0.pdf
 * Keywords: opto photo diode.
 * Default footprint: OptoDevice:Osram_SFH205.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH205F extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:SFH205F";
  override referencePrefix = "D";
}

/**
 * Silicon PIN Photodiode with Daylight Blocking Filter
 *
 * KiCad symbol: `Sensor_Optical:SFH205FA`. Reference prefix: `D`.
 * Footprint filters: Osram*SFH205*.
 * @see http://www.osram-os.com/Graphics/XPic9/00101665_0.pdf
 * Keywords: PIN Photodiode.
 * Default footprint: OptoDevice:Osram_SFH205.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH205FA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:SFH205FA";
  override referencePrefix = "D";
}

/**
 * Silicon PIN Photodiode
 *
 * KiCad symbol: `Sensor_Optical:SFH206K`. Reference prefix: `D`.
 * Footprint filters: Osram*SFH205*.
 * @see http://www.osram-os.com/Graphics/XPic0/00211439_0.pdf/SFH%20206%20K.pdf
 * Keywords: opto PIN photodiode.
 * Default footprint: OptoDevice:Osram_SFH205.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH206K extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:SFH206K";
  override referencePrefix = "D";
}

/**
 * Silicon PIN Photodiode With Very Short Switching Time, TO-18 package
 *
 * KiCad symbol: `Sensor_Optical:SFH216`. Reference prefix: `D`.
 * Footprint filters: TO?18*Window*.
 * @see http://www.osram-os.com/Graphics/XPic1/00029253_0.pdf/SFH
 * Keywords: opto PIN photo diode.
 * Default footprint: Package_TO_SOT_THT:TO-18-2_Window.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH216 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:SFH216";
  override referencePrefix = "D";
}

/**
 * Silicon PIN Photodiode with Daylight Blocking Filter
 *
 * KiCad symbol: `Sensor_Optical:SFH225FA`. Reference prefix: `D`.
 * Footprint filters: Osram*SFH225*.
 * @see http://www.osram-os.com/Graphics/XPic0/00209685_0.pdf/SFH%20225%20FA.pdf
 * Keywords: opto PIN photodiode IR.
 * Default footprint: OptoDevice:Osram_SFH225.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH225FA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:SFH225FA";
  override referencePrefix = "D";
}

/**
 * Silicon PIN Photodiode with Daylight Blocking Filter
 *
 * KiCad symbol: `Sensor_Optical:SFH235FA`. Reference prefix: `D`.
 * Footprint filters: Osram*SFH225*.
 * @see http://www.osram-os.com/Graphics/XPic3/00211469_0.pdf/SFH%20235%20FA.pdf
 * Keywords: opto PIN photodiode IR.
 * Default footprint: OptoDevice:Osram_SFH225.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH235FA extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:SFH235FA";
  override referencePrefix = "D";
}

/**
 * Silicon PIN Photodiode, SMD package
 *
 * KiCad symbol: `Sensor_Optical:SFH2400`. Reference prefix: `D`.
 * Footprint filters: Osram*SMD*SmartDIL*.
 * @see http://www.osram-os.com/Graphics/XPic5/00215665_0.pdf/SFH%202400.pdf
 * Keywords: opto photodiode.
 * Default footprint: OptoDevice:Osram_SMD-SmartDIL.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH2400 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:SFH2400";
  override referencePrefix = "D";
}

/**
 * Silicon Photodiode, Vf 1.2V, Area 2.65x2.65mm
 *
 * KiCad symbol: `Sensor_Optical:SFH2430`. Reference prefix: `D`.
 * Footprint filters: Osram*SFH2430*.
 * @see https://dammedia.osram.info/media/resource/hires/osram-dam-5467144/SFH%202430_EN.pdf
 * Keywords: opto photodiode.
 * Default footprint: OptoDevice:Osram_SFH2430.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH2430 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:SFH2430";
  override referencePrefix = "D";
}

/**
 * Silicon Photodiode, Vf 1V, Area 2.65x2.65mm
 *
 * KiCad symbol: `Sensor_Optical:SFH2440`. Reference prefix: `D`.
 * Footprint filters: Osram*SFH2440*.
 * @see https://dammedia.osram.info/media/resource/hires/osram-dam-5467146/SFH%202440_EN.pdf
 * Keywords: opto photodiode.
 * Default footprint: OptoDevice:Osram_SFH2440.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH2440 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:SFH2440";
  override referencePrefix = "D";
}

/**
 * High Speed PIN Photodiode, SMD package
 *
 * KiCad symbol: `Sensor_Optical:SFH2701`. Reference prefix: `D`.
 * Footprint filters: LED*1206*.
 * @see http://www.osram-os.com/Graphics/XPic6/00201111_0.pdf/SFH%202701.pdf
 * Keywords: opto photodiode.
 * Default footprint: LED_SMD:LED_1206_3216Metric_Castellated.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH2701 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "Sensor_Optical:SFH2701";
  override referencePrefix = "D";
}

/**
 * silicon NPN phototransistor
 *
 * KiCad symbol: `Sensor_Optical:SFH300`. Reference prefix: `Q`.
 * Footprint filters: LED*D5.0mm*Clear*.
 * @see http://www.osram-os.com/Graphics/XPic2/00101785_0.pdf
 * Keywords: NPN phototransistor.
 * Default footprint: LED_THT:LED_D5.0mm_Clear.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH300 extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Sensor_Optical:SFH300";
  override referencePrefix = "Q";
}

/**
 * Silicon NPN Phototransistor, PLCC-2
 *
 * KiCad symbol: `Sensor_Optical:SFH320`. Reference prefix: `Q`.
 * Footprint filters: LED?SMD:LED?PLCC?2?3.4x3.0mm?KA*.
 * @see https://look.ams-osram.com/m/5397c5d8583a26cf/original/SFH-320.pdf
 * Keywords: npn phototransistor.
 * Default footprint: LED_SMD:LED_PLCC-2_3.4x3.0mm_KA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH320 extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Sensor_Optical:SFH320";
  override referencePrefix = "Q";
}

/**
 * Silicon NPN phototransistor, SMD-6
 *
 * KiCad symbol: `Sensor_Optical:SFH3201`. Reference prefix: `Q`.
 * Footprint filters: Osram*SFH9x0x*.
 * @see https://dammedia.osram.info/media/resource/hires/osram-dam-2495980/SFH%203201.pdf
 * Keywords: NPN phototransistor.
 * Default footprint: OptoDevice:Osram_SFH9x0x.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH3201 extends Component.withPins({
  /** Physical pin 3: E; passive. */
  "E": "3",
  /** Physical pin 4: C; passive. */
  "C": "4",
}) {
  override schema = "Sensor_Optical:SFH3201";
  override referencePrefix = "Q";
}

/**
 * Ambient Light Sensor, NPN Epitaxial Planar Phototransistor, T-1
 *
 * KiCad symbol: `Sensor_Optical:TEPT4400`. Reference prefix: `Q`.
 * Footprint filters: LED*3.0mm*Clear*.
 * @see https://www.vishay.com/docs/81341/tept4400.pdf
 * Keywords: npn phototransistor ambient light sensor.
 * Default footprint: LED_THT:LED_D3.0mm_Clear.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TEPT4400 extends Component.withPins({
  /** Physical pin 1: C; passive. */
  "C": "1",
  /** Physical pin 2: E; passive. */
  "E": "2",
}) {
  override schema = "Sensor_Optical:TEPT4400";
  override referencePrefix = "Q";
}

/**
 * Ambient Light Sensor with SMbus Interface, SO-8 interface
 *
 * KiCad symbol: `Sensor_Optical:TSL2550D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ams.com/eng/content/download/250130/975613/142977
 * Keywords: opto ambient light sensor.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSL2550D extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: CLK; input. */
  "CLK": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: DAT; bidirectional. */
  "DAT": "8",
}) {
  override schema = "Sensor_Optical:TSL2550D";
  override referencePrefix = "U";
}

/**
 * Ambient Light Sensor with SMbus Interface, T-4 interface SMD
 *
 * KiCad symbol: `Sensor_Optical:TSL2550T`. Reference prefix: `U`.
 * Footprint filters: AMS*TSL2550*SMD*.
 * @see http://ams.com/eng/content/download/250130/975613/142977
 * Keywords: opto ambient light sensor.
 * Default footprint: OptoDevice:AMS_TSL2550_SMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSL2550T extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: CLK; input. */
  "CLK": "3",
  /** Physical pin 4: DAT; bidirectional. */
  "DAT": "4",
}) {
  override schema = "Sensor_Optical:TSL2550T";
  override referencePrefix = "U";
}

/**
 * Light to digital converter, 2.7 to 3.6V Vdd, DFN-6
 *
 * KiCad symbol: `Sensor_Optical:TSL25911FN`. Reference prefix: `U`.
 * Footprint filters: AMS*TSL25911FN*.
 * @see https://ams.com/documents/20143/9331680/TSL2591_DS000338_7-00.pdf
 * Keywords: ALS.
 * Default footprint: OptoDevice:AMS_TSL25911FN.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSL25911FN extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: INT; open_collector. */
  "INT": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
}) {
  override schema = "Sensor_Optical:TSL25911FN";
  override referencePrefix = "U";
}

/**
 * light dependent resistor
 *
 * KiCad symbol: `Sensor_Optical:VT93xx`. Reference prefix: `R`.
 * Footprint filters: R*LDR*4.9x4.2mm*P2.54mm*.
 * @see http://www.produktinfo.conrad.com/datenblaetter/125000-149999/140375-da-01-en-FOTOWIDERSTAND__VT_93_N2__THT_.pdf
 * Keywords: light dependent photo resistor LDR.
 * Default footprint: OptoDevice:R_LDR_4.9x4.2mm_P2.54mm_Vertical.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VT93xx extends Component.withPins({
  /** Physical pin 1: unnamed; passive. */
  "P1": "1",
  /** Physical pin 2: unnamed; passive. */
  "P2": "2",
}) {
  override schema = "Sensor_Optical:VT93xx";
  override referencePrefix = "R";
}

