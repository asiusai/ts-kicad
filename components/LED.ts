// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * RGB LED with integrated controller, 5mm Package
 *
 * KiCad symbol: `LED:APA-106-F5`. Reference prefix: `D`.
 * Footprint filters: LED*D5.0mm*RGB*.
 * @see https://cdn.sparkfun.com/datasheets/Components/LED/COM-12877.pdf
 * Keywords: RGB LED addressable 8bit pwm 5bit greyscale.
 * Default footprint: LED_THT:LED_D5.0mm-4_RGB.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APA_106_F5 extends Component.withPins({
  /** Physical pin 1: DO; output. */
  "DO": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: DI; input. */
  "DI": "4",
}) {
  override schema = "LED:APA-106-F5";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:APA102`. Reference prefix: `D`.
 * Footprint filters: LED*RGB*5050*.
 * @see http://www.led-color.com/upload/201506/APA102%20LED.pdf
 * Keywords: RGB LED addressable 8bit pwm 5bit greyscale.
 * Default footprint: LED_SMD:LED_RGB_5050-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APA102 extends Component.withPins({
  /** Physical pin 1: DI; input. */
  "DI": "1",
  /** Physical pin 2: CI; input. */
  "CI": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: CO; output. */
  "CO": "5",
  /** Physical pin 6: DO; output. */
  "DO": "6",
}) {
  override schema = "LED:APA102";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:APA102-2020`. Reference prefix: `D`.
 * Footprint filters: LED*APA102*.
 * @see http://www.led-color.com/upload/201604/APA102-2020%20SMD%20LED.pdf
 * Keywords: RGB LED addressable 8bit pwm 5bit greyscale.
 * Default footprint: LED_SMD:LED-APA102-2020.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APA102_2020 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CKO; output. */
  "CKO": "2",
  /** Physical pin 3: SDO; output. */
  "SDO": "3",
  /** Physical pin 4: SDI; input. */
  "SDI": "4",
  /** Physical pin 5: CKI; input. */
  "CKI": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
}) {
  override schema = "LED:APA102-2020";
  override referencePrefix = "D";
}

/**
 * LED RGB, Common Anode, SMD, 3.0x1.5mm, Horizontal
 *
 * KiCad symbol: `LED:APFA3010`. Reference prefix: `D`.
 * Footprint filters: *Kingbright*APFA3010*3x1.5mm*Horizontal*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/APFA3010LSEEZGKQBKC.pdf
 * Keywords: LED RGB SMD Kingbright APFA3010 Horizontal.
 * Default footprint: LED_SMD:LED_Kingbright_APFA3010_3x1.5mm_Horizontal.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APFA3010 extends Component.withPins({
  /** Physical pin 1: R; input. */
  "R": "1",
  /** Physical pin 2: A; power_in. */
  "A": "2",
  /** Physical pin 3: G; input. */
  "G": "3",
  /** Physical pin 4: B; input. */
  "B": "4",
}) {
  override schema = "LED:APFA3010";
  override referencePrefix = "D";
}

/**
 * Tricolor Black Surface LED, Common Anode Pin 1, PLCC-4
 *
 * KiCad symbol: `LED:ASMB-MTB0-0A3A2`. Reference prefix: `D`.
 * Footprint filters: *Avago*PLCC4*3.2x2.8mm*.
 * @see https://docs.broadcom.com/docs/AV02-4186EN
 * Keywords: led rgb diode.
 * Default footprint: LED_SMD:LED_Avago_PLCC4_3.2x2.8mm_CW.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ASMB_MTB0_0A3A2 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: BK; passive. */
  "BK": "2",
  /** Physical pin 3: GK; passive. */
  "GK": "3",
  /** Physical pin 4: RK; passive. */
  "RK": "4",
}) {
  override schema = "LED:ASMB-MTB0-0A3A2";
  override referencePrefix = "D";
}

/**
 * Tricolor Black Surface LED, Common Anode Pin 4, PLCC-4
 *
 * KiCad symbol: `LED:ASMB-MTB1-0A3A2`. Reference prefix: `D`.
 * Footprint filters: *Avago*PLCC4*3.2x2.8mm*.
 * @see https://docs.broadcom.com/docs/AV02-4194EN
 * Keywords: led rgb diode.
 * Default footprint: LED_SMD:LED_Avago_PLCC4_3.2x2.8mm_CW.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ASMB_MTB1_0A3A2 extends Component.withPins({
  /** Physical pin 1: RK; passive. */
  "RK": "1",
  /** Physical pin 2: GK; passive. */
  "GK": "2",
  /** Physical pin 3: BK; passive. */
  "BK": "3",
  /** Physical pin 4: A; passive. */
  "A": "4",
}) {
  override schema = "LED:ASMB-MTB1-0A3A2";
  override referencePrefix = "D";
}

/**
 * Triple LED RVB (Avago Technology)
 *
 * KiCad symbol: `LED:ASMT-YTC2-0AA02`. Reference prefix: `D`.
 * Footprint filters: LED?Avago?PLCC6?3x2.8mm*.
 * @see http://www.avagotech.com/docs/AV02-2589EN
 * Keywords: LED RGB.
 * Default footprint: LED_SMD:LED_Avago_PLCC6_3x2.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ASMT_YTC2_0AA02 extends Component.withPins({
  /** Physical pin 1: KB; passive. */
  "KB": "1",
  /** Physical pin 2: KG; passive. */
  "KG": "2",
  /** Physical pin 3: KR; passive. */
  "KR": "3",
  /** Physical pin 4: AR; passive. */
  "AR": "4",
  /** Physical pin 5: AG; passive. */
  "AG": "5",
  /** Physical pin 6: AB; passive. */
  "AB": "6",
}) {
  override schema = "LED:ASMT-YTC2-0AA02";
  override referencePrefix = "D";
}

/**
 * Triple LED RVB (Avago Technology)
 *
 * KiCad symbol: `LED:ASMT-YTB7-0AA02`. Reference prefix: `D`.
 * Footprint filters: LED?Avago?PLCC6?3x2.8mm*.
 * @see https://docs.broadcom.com/docs/AV02-3793EN
 * Keywords: LED RGB.
 * Default footprint: LED_SMD:LED_Avago_PLCC6_3x2.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ASMT_YTB7_0AA02 extends Component.withPins({
  /** Physical pin 1: KB; passive. */
  "KB": "1",
  /** Physical pin 2: KG; passive. */
  "KG": "2",
  /** Physical pin 3: KR; passive. */
  "KR": "3",
  /** Physical pin 4: AR; passive. */
  "AR": "4",
  /** Physical pin 5: AG; passive. */
  "AG": "5",
  /** Physical pin 6: AB; passive. */
  "AB": "6",
}) {
  override schema = "LED:ASMT-YTB7-0AA02";
  override referencePrefix = "D";
}

/**
 * Cree PLCC6 3 in 1 SMD LED, PLCC-6
 *
 * KiCad symbol: `LED:CLS6B-FKW`. Reference prefix: `D`.
 * Footprint filters: LED*Cree*PLCC*4.7x1.5mm*.
 * @see https://www.cree.com/led-components/media/documents/CLS6B-FKW.pdf
 * Keywords: LED RGB.
 * Default footprint: LED_SMD:LED_Cree-PLCC6_4.7x1.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CLS6B_FKW extends Component.withPins({
  /** Physical pin 1: AB; passive. */
  "AB": "1",
  /** Physical pin 2: KB; passive. */
  "KB": "2",
  /** Physical pin 3: AR; passive. */
  "AR": "3",
  /** Physical pin 4: KR; passive. */
  "KR_4": "4",
  /** Physical pin 5: AG; passive. */
  "AG": "5",
  /** Physical pin 6: KR; passive. */
  "KR_6": "6",
}) {
  override schema = "LED:CLS6B-FKW";
  override referencePrefix = "D";
}

/**
 * Cree PLCC4 3 in 1 SMD LED
 *
 * KiCad symbol: `LED:CLV1L-FKB`. Reference prefix: `D`.
 * Footprint filters: *Cree*PLCC4*3.2x2.8mm*.
 * @see http://www.cree.com/led-components/media/documents/CLV1L-FKB-1238.pdf
 * Keywords: led rgb diode.
 * Default footprint: LED_SMD:LED_Cree-PLCC4_3.2x2.8mm_CCW.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CLV1L_FKB extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: RK; passive. */
  "RK": "2",
  /** Physical pin 3: GK; passive. */
  "GK": "3",
  /** Physical pin 4: BK; passive. */
  "BK": "4",
}) {
  override schema = "LED:CLV1L-FKB";
  override referencePrefix = "D";
}

/**
 * RGB LED, PLCC-6
 *
 * KiCad symbol: `LED:CLX6F-FKC`. Reference prefix: `D`.
 * Footprint filters: LED?RGB?PLCC*.
 * @see https://assets.cree-led.com/a/ds/h/HB-CLX6F-FKC.pdf
 * Keywords: LED RGB.
 * Default footprint: LED_SMD:LED_RGB_PLCC-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CLX6F_FKC extends Component.withPins({
  /** Physical pin 1: KB; passive. */
  "KB": "1",
  /** Physical pin 2: KG; passive. */
  "KG": "2",
  /** Physical pin 3: KR; passive. */
  "KR": "3",
  /** Physical pin 4: AR; passive. */
  "AR": "4",
  /** Physical pin 5: AG; passive. */
  "AG": "5",
  /** Physical pin 6: AB; passive. */
  "AB": "6",
}) {
  override schema = "LED:CLX6F-FKC";
  override referencePrefix = "D";
}

/**
 * 940nm IR-LED, 5mm
 *
 * KiCad symbol: `LED:LD271`. Reference prefix: `D`.
 * Footprint filters: LED*5.0mm*IRGrey*.
 * @see http://www.alliedelec.com/m/d/40788c34903a719969df15f1fbea1056.pdf
 * Keywords: IR LED.
 * Default footprint: LED_THT:LED_D5.0mm_IRGrey.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LD271 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "LED:LD271";
  override referencePrefix = "D";
}

/**
 * 950nm IR-LED, 5mm
 *
 * KiCad symbol: `LED:CQY99`. Reference prefix: `D`.
 * Footprint filters: LED*5.0mm*IRGrey*.
 * @see https://www.prtice.info/IMG/pdf/CQY99.pdf
 * Keywords: IR LED.
 * Default footprint: LED_THT:LED_D5.0mm_IRGrey.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CQY99 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "LED:CQY99";
  override referencePrefix = "D";
}

/**
 * 10-element LED arrays, high efficient red
 *
 * KiCad symbol: `LED:HDSP-4830`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4830.
 * Units: 10.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HDSP_4830 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 20: K; passive. */
  "K_20": "20",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 19: K; passive. */
  "K_19": "19",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
  /** Physical pin 18: K; passive. */
  "K_18": "18",
  /** Physical pin 4: A; passive. */
  "A_4": "4",
  /** Physical pin 17: K; passive. */
  "K_17": "17",
  /** Physical pin 5: A; passive. */
  "A_5": "5",
  /** Physical pin 16: K; passive. */
  "K_16": "16",
  /** Physical pin 6: A; passive. */
  "A_6": "6",
  /** Physical pin 15: K; passive. */
  "K_15": "15",
  /** Physical pin 7: A; passive. */
  "A_7": "7",
  /** Physical pin 14: K; passive. */
  "K_14": "14",
  /** Physical pin 8: A; passive. */
  "A_8": "8",
  /** Physical pin 13: K; passive. */
  "K_13": "13",
  /** Physical pin 9: A; passive. */
  "A_9": "9",
  /** Physical pin 12: K; passive. */
  "K_12": "12",
  /** Physical pin 10: A; passive. */
  "A_10": "10",
  /** Physical pin 11: K; passive. */
  "K_11": "11",
}) {
  override schema = "LED:HDSP-4830";
  override referencePrefix = "BAR";
}

/**
 * BAR GRAPH 10 segment block, high efficiency red
 *
 * KiCad symbol: `LED:HDSP-4830_2`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4830.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HDSP_4830_2 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
  /** Physical pin 4: A; passive. */
  "A_4": "4",
  /** Physical pin 5: A; passive. */
  "A_5": "5",
  /** Physical pin 6: A; passive. */
  "A_6": "6",
  /** Physical pin 7: A; passive. */
  "A_7": "7",
  /** Physical pin 8: A; passive. */
  "A_8": "8",
  /** Physical pin 9: A; passive. */
  "A_9": "9",
  /** Physical pin 10: A; passive. */
  "A_10": "10",
  /** Physical pin 11: K; passive. */
  "K_11": "11",
  /** Physical pin 12: K; passive. */
  "K_12": "12",
  /** Physical pin 13: K; passive. */
  "K_13": "13",
  /** Physical pin 14: K; passive. */
  "K_14": "14",
  /** Physical pin 15: K; passive. */
  "K_15": "15",
  /** Physical pin 16: K; passive. */
  "K_16": "16",
  /** Physical pin 17: K; passive. */
  "K_17": "17",
  /** Physical pin 18: K; passive. */
  "K_18": "18",
  /** Physical pin 19: K; passive. */
  "K_19": "19",
  /** Physical pin 20: K; passive. */
  "K_20": "20",
}) {
  override schema = "LED:HDSP-4830_2";
  override referencePrefix = "BAR";
}

/**
 * 10-element LED arrays, Mix of high efficient red, yellow and green
 *
 * KiCad symbol: `LED:HDSP-4832`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4832.
 * Units: 10.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HDSP_4832 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 20: K; passive. */
  "K_20": "20",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 19: K; passive. */
  "K_19": "19",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
  /** Physical pin 18: K; passive. */
  "K_18": "18",
  /** Physical pin 4: A; passive. */
  "A_4": "4",
  /** Physical pin 17: K; passive. */
  "K_17": "17",
  /** Physical pin 5: A; passive. */
  "A_5": "5",
  /** Physical pin 16: K; passive. */
  "K_16": "16",
  /** Physical pin 6: A; passive. */
  "A_6": "6",
  /** Physical pin 15: K; passive. */
  "K_15": "15",
  /** Physical pin 7: A; passive. */
  "A_7": "7",
  /** Physical pin 14: K; passive. */
  "K_14": "14",
  /** Physical pin 8: A; passive. */
  "A_8": "8",
  /** Physical pin 13: K; passive. */
  "K_13": "13",
  /** Physical pin 9: A; passive. */
  "A_9": "9",
  /** Physical pin 12: K; passive. */
  "K_12": "12",
  /** Physical pin 10: A; passive. */
  "A_10": "10",
  /** Physical pin 11: K; passive. */
  "K_11": "11",
}) {
  override schema = "LED:HDSP-4832";
  override referencePrefix = "BAR";
}

/**
 * BAR GRAPH 10 segment block, Mix of high efficiency red, yellow and green
 *
 * KiCad symbol: `LED:HDSP-4832_2`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4832.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HDSP_4832_2 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
  /** Physical pin 4: A; passive. */
  "A_4": "4",
  /** Physical pin 5: A; passive. */
  "A_5": "5",
  /** Physical pin 6: A; passive. */
  "A_6": "6",
  /** Physical pin 7: A; passive. */
  "A_7": "7",
  /** Physical pin 8: A; passive. */
  "A_8": "8",
  /** Physical pin 9: A; passive. */
  "A_9": "9",
  /** Physical pin 10: A; passive. */
  "A_10": "10",
  /** Physical pin 11: K; passive. */
  "K_11": "11",
  /** Physical pin 12: K; passive. */
  "K_12": "12",
  /** Physical pin 13: K; passive. */
  "K_13": "13",
  /** Physical pin 14: K; passive. */
  "K_14": "14",
  /** Physical pin 15: K; passive. */
  "K_15": "15",
  /** Physical pin 16: K; passive. */
  "K_16": "16",
  /** Physical pin 17: K; passive. */
  "K_17": "17",
  /** Physical pin 18: K; passive. */
  "K_18": "18",
  /** Physical pin 19: K; passive. */
  "K_19": "19",
  /** Physical pin 20: K; passive. */
  "K_20": "20",
}) {
  override schema = "LED:HDSP-4832_2";
  override referencePrefix = "BAR";
}

/**
 * 10-element LED arrays, Mix of high efficient red, yellow and green
 *
 * KiCad symbol: `LED:HDSP-4836`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4836.
 * Units: 10.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HDSP_4836 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 20: K; passive. */
  "K_20": "20",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 19: K; passive. */
  "K_19": "19",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
  /** Physical pin 18: K; passive. */
  "K_18": "18",
  /** Physical pin 4: A; passive. */
  "A_4": "4",
  /** Physical pin 17: K; passive. */
  "K_17": "17",
  /** Physical pin 5: A; passive. */
  "A_5": "5",
  /** Physical pin 16: K; passive. */
  "K_16": "16",
  /** Physical pin 6: A; passive. */
  "A_6": "6",
  /** Physical pin 15: K; passive. */
  "K_15": "15",
  /** Physical pin 7: A; passive. */
  "A_7": "7",
  /** Physical pin 14: K; passive. */
  "K_14": "14",
  /** Physical pin 8: A; passive. */
  "A_8": "8",
  /** Physical pin 13: K; passive. */
  "K_13": "13",
  /** Physical pin 9: A; passive. */
  "A_9": "9",
  /** Physical pin 12: K; passive. */
  "K_12": "12",
  /** Physical pin 10: A; passive. */
  "A_10": "10",
  /** Physical pin 11: K; passive. */
  "K_11": "11",
}) {
  override schema = "LED:HDSP-4836";
  override referencePrefix = "BAR";
}

/**
 * BAR GRAPH 10 segment block, Mix of high efficiency red, yellow and green
 *
 * KiCad symbol: `LED:HDSP-4836_2`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4836.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HDSP_4836_2 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
  /** Physical pin 4: A; passive. */
  "A_4": "4",
  /** Physical pin 5: A; passive. */
  "A_5": "5",
  /** Physical pin 6: A; passive. */
  "A_6": "6",
  /** Physical pin 7: A; passive. */
  "A_7": "7",
  /** Physical pin 8: A; passive. */
  "A_8": "8",
  /** Physical pin 9: A; passive. */
  "A_9": "9",
  /** Physical pin 10: A; passive. */
  "A_10": "10",
  /** Physical pin 11: K; passive. */
  "K_11": "11",
  /** Physical pin 12: K; passive. */
  "K_12": "12",
  /** Physical pin 13: K; passive. */
  "K_13": "13",
  /** Physical pin 14: K; passive. */
  "K_14": "14",
  /** Physical pin 15: K; passive. */
  "K_15": "15",
  /** Physical pin 16: K; passive. */
  "K_16": "16",
  /** Physical pin 17: K; passive. */
  "K_17": "17",
  /** Physical pin 18: K; passive. */
  "K_18": "18",
  /** Physical pin 19: K; passive. */
  "K_19": "19",
  /** Physical pin 20: K; passive. */
  "K_20": "20",
}) {
  override schema = "LED:HDSP-4836_2";
  override referencePrefix = "BAR";
}

/**
 * 10-element LED arrays, Yellow
 *
 * KiCad symbol: `LED:HDSP-4840`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4840.
 * Units: 10.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HDSP_4840 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 20: K; passive. */
  "K_20": "20",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 19: K; passive. */
  "K_19": "19",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
  /** Physical pin 18: K; passive. */
  "K_18": "18",
  /** Physical pin 4: A; passive. */
  "A_4": "4",
  /** Physical pin 17: K; passive. */
  "K_17": "17",
  /** Physical pin 5: A; passive. */
  "A_5": "5",
  /** Physical pin 16: K; passive. */
  "K_16": "16",
  /** Physical pin 6: A; passive. */
  "A_6": "6",
  /** Physical pin 15: K; passive. */
  "K_15": "15",
  /** Physical pin 7: A; passive. */
  "A_7": "7",
  /** Physical pin 14: K; passive. */
  "K_14": "14",
  /** Physical pin 8: A; passive. */
  "A_8": "8",
  /** Physical pin 13: K; passive. */
  "K_13": "13",
  /** Physical pin 9: A; passive. */
  "A_9": "9",
  /** Physical pin 12: K; passive. */
  "K_12": "12",
  /** Physical pin 10: A; passive. */
  "A_10": "10",
  /** Physical pin 11: K; passive. */
  "K_11": "11",
}) {
  override schema = "LED:HDSP-4840";
  override referencePrefix = "BAR";
}

/**
 * BAR GRAPH 10 segment block, yellow
 *
 * KiCad symbol: `LED:HDSP-4840_2`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4840.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HDSP_4840_2 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
  /** Physical pin 4: A; passive. */
  "A_4": "4",
  /** Physical pin 5: A; passive. */
  "A_5": "5",
  /** Physical pin 6: A; passive. */
  "A_6": "6",
  /** Physical pin 7: A; passive. */
  "A_7": "7",
  /** Physical pin 8: A; passive. */
  "A_8": "8",
  /** Physical pin 9: A; passive. */
  "A_9": "9",
  /** Physical pin 10: A; passive. */
  "A_10": "10",
  /** Physical pin 11: K; passive. */
  "K_11": "11",
  /** Physical pin 12: K; passive. */
  "K_12": "12",
  /** Physical pin 13: K; passive. */
  "K_13": "13",
  /** Physical pin 14: K; passive. */
  "K_14": "14",
  /** Physical pin 15: K; passive. */
  "K_15": "15",
  /** Physical pin 16: K; passive. */
  "K_16": "16",
  /** Physical pin 17: K; passive. */
  "K_17": "17",
  /** Physical pin 18: K; passive. */
  "K_18": "18",
  /** Physical pin 19: K; passive. */
  "K_19": "19",
  /** Physical pin 20: K; passive. */
  "K_20": "20",
}) {
  override schema = "LED:HDSP-4840_2";
  override referencePrefix = "BAR";
}

/**
 * 10-element LED arrays, Green
 *
 * KiCad symbol: `LED:HDSP-4850`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4850.
 * Units: 10.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HDSP_4850 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 20: K; passive. */
  "K_20": "20",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 19: K; passive. */
  "K_19": "19",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
  /** Physical pin 18: K; passive. */
  "K_18": "18",
  /** Physical pin 4: A; passive. */
  "A_4": "4",
  /** Physical pin 17: K; passive. */
  "K_17": "17",
  /** Physical pin 5: A; passive. */
  "A_5": "5",
  /** Physical pin 16: K; passive. */
  "K_16": "16",
  /** Physical pin 6: A; passive. */
  "A_6": "6",
  /** Physical pin 15: K; passive. */
  "K_15": "15",
  /** Physical pin 7: A; passive. */
  "A_7": "7",
  /** Physical pin 14: K; passive. */
  "K_14": "14",
  /** Physical pin 8: A; passive. */
  "A_8": "8",
  /** Physical pin 13: K; passive. */
  "K_13": "13",
  /** Physical pin 9: A; passive. */
  "A_9": "9",
  /** Physical pin 12: K; passive. */
  "K_12": "12",
  /** Physical pin 10: A; passive. */
  "A_10": "10",
  /** Physical pin 11: K; passive. */
  "K_11": "11",
}) {
  override schema = "LED:HDSP-4850";
  override referencePrefix = "BAR";
}

/**
 * BAR GRAPH 10 segment block, green
 *
 * KiCad symbol: `LED:HDSP-4850_2`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4850.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HDSP_4850_2 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
  /** Physical pin 4: A; passive. */
  "A_4": "4",
  /** Physical pin 5: A; passive. */
  "A_5": "5",
  /** Physical pin 6: A; passive. */
  "A_6": "6",
  /** Physical pin 7: A; passive. */
  "A_7": "7",
  /** Physical pin 8: A; passive. */
  "A_8": "8",
  /** Physical pin 9: A; passive. */
  "A_9": "9",
  /** Physical pin 10: A; passive. */
  "A_10": "10",
  /** Physical pin 11: K; passive. */
  "K_11": "11",
  /** Physical pin 12: K; passive. */
  "K_12": "12",
  /** Physical pin 13: K; passive. */
  "K_13": "13",
  /** Physical pin 14: K; passive. */
  "K_14": "14",
  /** Physical pin 15: K; passive. */
  "K_15": "15",
  /** Physical pin 16: K; passive. */
  "K_16": "16",
  /** Physical pin 17: K; passive. */
  "K_17": "17",
  /** Physical pin 18: K; passive. */
  "K_18": "18",
  /** Physical pin 19: K; passive. */
  "K_19": "19",
  /** Physical pin 20: K; passive. */
  "K_20": "20",
}) {
  override schema = "LED:HDSP-4850_2";
  override referencePrefix = "BAR";
}

/**
 * 10-element LED arrays, AIGaAs Red
 *
 * KiCad symbol: `LED:HLCP-J100`. Reference prefix: `BAR`.
 * Footprint filters: HLCP*J100*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HLCP-J100.
 * Units: 10.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HLCP_J100 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 20: K; passive. */
  "K_20": "20",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 19: K; passive. */
  "K_19": "19",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
  /** Physical pin 18: K; passive. */
  "K_18": "18",
  /** Physical pin 4: A; passive. */
  "A_4": "4",
  /** Physical pin 17: K; passive. */
  "K_17": "17",
  /** Physical pin 5: A; passive. */
  "A_5": "5",
  /** Physical pin 16: K; passive. */
  "K_16": "16",
  /** Physical pin 6: A; passive. */
  "A_6": "6",
  /** Physical pin 15: K; passive. */
  "K_15": "15",
  /** Physical pin 7: A; passive. */
  "A_7": "7",
  /** Physical pin 14: K; passive. */
  "K_14": "14",
  /** Physical pin 8: A; passive. */
  "A_8": "8",
  /** Physical pin 13: K; passive. */
  "K_13": "13",
  /** Physical pin 9: A; passive. */
  "A_9": "9",
  /** Physical pin 12: K; passive. */
  "K_12": "12",
  /** Physical pin 10: A; passive. */
  "A_10": "10",
  /** Physical pin 11: K; passive. */
  "K_11": "11",
}) {
  override schema = "LED:HLCP-J100";
  override referencePrefix = "BAR";
}

/**
 * BAR GRAPH 10 segment block, AlGaAs red
 *
 * KiCad symbol: `LED:HLCP-J100_2`. Reference prefix: `BAR`.
 * Footprint filters: HLCP?J100*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HLCP-J100.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HLCP_J100_2 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A_1": "1",
  /** Physical pin 2: A; passive. */
  "A_2": "2",
  /** Physical pin 3: A; passive. */
  "A_3": "3",
  /** Physical pin 4: A; passive. */
  "A_4": "4",
  /** Physical pin 5: A; passive. */
  "A_5": "5",
  /** Physical pin 6: A; passive. */
  "A_6": "6",
  /** Physical pin 7: A; passive. */
  "A_7": "7",
  /** Physical pin 8: A; passive. */
  "A_8": "8",
  /** Physical pin 9: A; passive. */
  "A_9": "9",
  /** Physical pin 10: A; passive. */
  "A_10": "10",
  /** Physical pin 11: K; passive. */
  "K_11": "11",
  /** Physical pin 12: K; passive. */
  "K_12": "12",
  /** Physical pin 13: K; passive. */
  "K_13": "13",
  /** Physical pin 14: K; passive. */
  "K_14": "14",
  /** Physical pin 15: K; passive. */
  "K_15": "15",
  /** Physical pin 16: K; passive. */
  "K_16": "16",
  /** Physical pin 17: K; passive. */
  "K_17": "17",
  /** Physical pin 18: K; passive. */
  "K_18": "18",
  /** Physical pin 19: K; passive. */
  "K_19": "19",
  /** Physical pin 20: K; passive. */
  "K_20": "20",
}) {
  override schema = "LED:HLCP-J100_2";
  override referencePrefix = "BAR";
}

/**
 * Infrared LED , 3mm LED package
 *
 * KiCad symbol: `LED:SFH4356P`. Reference prefix: `D`.
 * Footprint filters: LED*3.0mm*IRBlack*.
 * @see http://www.osram-os.com/Graphics/XPic5/00181708_0.pdf
 * Keywords: opto IR LED.
 * Default footprint: LED_THT:LED_D3.0mm_IRBlack.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH4356P extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "LED:SFH4356P";
  override referencePrefix = "D";
}

/**
 * Infrared LED , 3mm LED package
 *
 * KiCad symbol: `LED:IR204A`. Reference prefix: `D`.
 * Footprint filters: LED*3.0mm*IRBlack*.
 * @see http://www.everlight.com/file/ProductFile/IR204-A.pdf
 * Keywords: opto IR LED.
 * Default footprint: LED_THT:LED_D3.0mm_IRBlack.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR204A extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "LED:IR204A";
  override referencePrefix = "D";
}

/**
 * 940nm, 20 deg, Infrared LED, 1206
 *
 * KiCad symbol: `LED:IR26-21C_L110_TR8`. Reference prefix: `D`.
 * Footprint filters: LED*1206*3216Metric*.
 * @see http://www.everlight.com/file/ProductFile/IR26-21C-L110-TR8.pdf
 * Keywords: IR LED.
 * Default footprint: LED_SMD:LED_1206_3216Metric.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR26_21C_L110_TR8 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "LED:IR26-21C_L110_TR8";
  override referencePrefix = "D";
}

/**
 * 850nm High Power Infrared Emitter, Side-Emitter package
 *
 * KiCad symbol: `LED:IRL81A`. Reference prefix: `D`.
 * Footprint filters: LED*SideEmitter*Rectangular*W4.5mm*H1.6mm*.
 * @see http://www.osram-os.com/Graphics/XPic0/00203825_0.pdf
 * Keywords: IR LED.
 * Default footprint: LED_THT:LED_SideEmitter_Rectangular_W4.5mm_H1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRL81A extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "LED:IRL81A";
  override referencePrefix = "D";
}

/**
 * Inolux RGB LED, PLCC-6
 *
 * KiCad symbol: `LED:Inolux_IN-P55TATRGB`. Reference prefix: `D`.
 * Footprint filters: LED*Inolux*PLCC6*5.0x5.5mm*.
 * @see https://www.inolux-corp.com/datasheet/SMDLED/RGB%20Top%20View/IN-P55TATRGB.pdf
 * Keywords: LED RGB.
 * Default footprint: LED_SMD:LED_Inolux_IN-P55TATRGB_PLCC6_5.0x5.5mm_P1.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Inolux_IN_P55TATRGB extends Component.withPins({
  /** Physical pin 1: KB; passive. */
  "KB": "1",
  /** Physical pin 2: KR; passive. */
  "KR": "2",
  /** Physical pin 3: KG; passive. */
  "KG": "3",
  /** Physical pin 4: AG; passive. */
  "AG": "4",
  /** Physical pin 5: AR; passive. */
  "AR": "5",
  /** Physical pin 6: AB; passive. */
  "AB": "6",
}) {
  override schema = "LED:Inolux_IN-P55TATRGB";
  override referencePrefix = "D";
}

/**
 * 5050 RGB LED 4-Pin with integrated IC
 *
 * KiCad symbol: `LED:Inolux_IN-PI554FCH`. Reference prefix: `D`.
 * Footprint filters: LED*IN-PI554FCH*PLCC*5.0x5.0mm*P3.2mm*.
 * @see http://www.inolux-corp.com/datasheet/SMDLED/Addressable%20LED/IN-PI554FCH.pdf
 * Keywords: RGB LED NeoPixel addressable.
 * Default footprint: LED_SMD:LED_Inolux_IN-PI554FCH_PLCC4_5.0x5.0mm_P3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Inolux_IN_PI554FCH extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: DO; output. */
  "DO": "4",
}) {
  override schema = "LED:Inolux_IN-PI554FCH";
  override referencePrefix = "D";
}

/**
 * 5050 RGB LED 6-Pin with integrated IC
 *
 * KiCad symbol: `LED:Inolux_IN-PI556FCH`. Reference prefix: `D`.
 * Footprint filters: LED*WS2812*PLCC*5.0x5.0mm*P1.6mm*.
 * @see http://www.inolux-corp.com/datasheet/SMDLED/Addressable%20LED/IN-PI556FCH.pdf
 * Keywords: RGB LED NeoPixel addressable.
 * Default footprint: LED_SMD:LED_WS2812_PLCC6_5.0x5.0mm_P1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Inolux_IN_PI556FCH extends Component.withPins({
  /** Physical pin 1: DO; output. */
  "DO": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
}) {
  override schema = "LED:Inolux_IN-PI556FCH";
  override referencePrefix = "D";
}

/**
 * 950nm IR-LED, 5mm
 *
 * KiCad symbol: `LED:LD274`. Reference prefix: `D`.
 * Footprint filters: LED*5.0mm*IRGrey*.
 * @see http://pdf.datasheetcatalog.com/datasheet/siemens/LD274.pdf
 * Keywords: IR LED.
 * Default footprint: LED_THT:LED_D5.0mm_IRGrey.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LD274 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "LED:LD274";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP50 LED, 12V, 4 LEDs in series, high density
 *
 * KiCad symbol: `LED:LED_Cree_XHP50_12V_HighDensity`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP50?12V*.
 * @see https://downloads.cree-led.com/files/ds/x/XLamp-XHP50.3.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP50_12V_HighDensity.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Cree_XHP50_12V_HighDensity extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: PAD; passive. */
  "PAD": "3",
}) {
  override schema = "LED:LED_Cree_XHP50_12V_HighDensity";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP50 LED, 12V, all 4 LEDs in series, high intensity
 *
 * KiCad symbol: `LED:LED_Cree_XHP50_12V_HighIntensity`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP50?12V*.
 * @see https://downloads.cree-led.com/files/ds/x/XLamp-XHP50.3.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP50_12V_HighIntensity.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Cree_XHP50_12V_HighIntensity extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: PAD; passive. */
  "PAD": "3",
}) {
  override schema = "LED:LED_Cree_XHP50_12V_HighIntensity";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP50 LED, 3V, 4 LEDs in parallel, high density
 *
 * KiCad symbol: `LED:LED_Cree_XHP50_3V_HighDensity`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP50?3V*.
 * @see https://downloads.cree-led.com/files/ds/x/XLamp-XHP50.3.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP50_3V_HighDensity.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Cree_XHP50_3V_HighDensity extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: PAD; passive. */
  "PAD": "3",
}) {
  override schema = "LED:LED_Cree_XHP50_3V_HighDensity";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP50 LED, 3V, 4 LEDs in parallel, high intensity
 *
 * KiCad symbol: `LED:LED_Cree_XHP50_3V_HighIntensity`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP50?3V*.
 * @see https://downloads.cree-led.com/files/ds/x/XLamp-XHP50.3.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP50_3V_HighIntensity.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Cree_XHP50_3V_HighIntensity extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: PAD; passive. */
  "PAD": "3",
}) {
  override schema = "LED:LED_Cree_XHP50_3V_HighIntensity";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP50 LED, 6V, 2x2 serial LEDs in parallel, high density
 *
 * KiCad symbol: `LED:LED_Cree_XHP50_6V_HighDensity`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP50?6V*.
 * @see https://downloads.cree-led.com/files/ds/x/XLamp-XHP50.3.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP50_6V_HighDensity.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Cree_XHP50_6V_HighDensity extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: PAD; passive. */
  "PAD": "3",
}) {
  override schema = "LED:LED_Cree_XHP50_6V_HighDensity";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP50 LED, 6V, 2x2 serial LEDs in parallel, high intensity
 *
 * KiCad symbol: `LED:LED_Cree_XHP50_6V_HighIntensity`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP50?6V*.
 * @see https://downloads.cree-led.com/files/ds/x/XLamp-XHP50.3.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP50_6V_HighIntensity.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Cree_XHP50_6V_HighIntensity extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: PAD; passive. */
  "PAD": "3",
}) {
  override schema = "LED:LED_Cree_XHP50_6V_HighIntensity";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP70 LED, 12V footprint (all 4 LEDs in series)
 *
 * KiCad symbol: `LED:LED_Cree_XHP70_12V`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP70?12V*.
 * @see http://www.cree.com/%7E/media/Files/Cree/LED%20Components%20and%20Modules/XLamp/Data%20and%20Binning/ds%20XHP70.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP70_12V.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Cree_XHP70_12V extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: PAD; passive. */
  "PAD": "3",
}) {
  override schema = "LED:LED_Cree_XHP70_12V";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP70 LED, 6V footprint (2x2 serial LEDs in parallel)
 *
 * KiCad symbol: `LED:LED_Cree_XHP70_6V`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP70?6V*.
 * @see http://www.cree.com/%7E/media/Files/Cree/LED%20Components%20and%20Modules/XLamp/Data%20and%20Binning/ds%20XHP70.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP70_6V.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LED_Cree_XHP70_6V extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: PAD; passive. */
  "PAD": "3",
}) {
  override schema = "LED:LED_Cree_XHP70_6V";
  override referencePrefix = "D";
}

/**
 * LED dual red/green, 4-pin, down-facing
 *
 * KiCad symbol: `LED:LTST-C235KGKRKT`. Reference prefix: `D`.
 * Footprint filters: *LTST*C235K*.
 * @see https://optoelectronics.liteon.com/upload/download/DS22-2009-0219/LTST-C235KGKRKT.pdf
 * Keywords: diode bicolor down-facing reverse.
 * Default footprint: LED_SMD:LED_LiteOn_LTST-C235KGKRKT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTST_C235KGKRKT extends Component.withPins({
  /** Physical pin 1: K2; input. */
  "K2": "1",
  /** Physical pin 2: A2; input. */
  "A2": "2",
  /** Physical pin 3: A1; input. */
  "A1": "3",
  /** Physical pin 4: K1; input. */
  "K1": "4",
}) {
  override schema = "LED:LTST-C235KGKRKT";
  override referencePrefix = "D";
}

/**
 * 5x5mm RGB LED with integrated controller
 *
 * KiCad symbol: `LED:LiteOn_LTST-E563C`. Reference prefix: `D`.
 * Footprint filters: LED*LiteOn*LTST?E563C*PLCC4*5.0x5.0mm*P3.2mm*.
 * @see https://optoelectronics.liteon.com/upload/download/DS35-2018-0092/LTST-E563CHEGBW-AW.PDF
 * Keywords: RGB LED addressable 5050.
 * Default footprint: LED_SMD:LED_LiteOn_LTST-E563C_PLCC4_5.0x5.0mm_P3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LiteOn_LTST_E563C extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: DOUT; output. */
  "DOUT": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
}) {
  override schema = "LED:LiteOn_LTST-E563C";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller, 5mm/8mm LED package
 *
 * KiCad symbol: `LED:NeoPixel_THT`. Reference prefix: `D`.
 * Footprint filters: LED*D5.0mm*, LED*D8.0mm*.
 * @see https://www.adafruit.com/product/1938
 * Keywords: RGB LED NeoPixel addressable.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NeoPixel_THT extends Component.withPins({
  /** Physical pin 1: DOUT; output. */
  "DOUT": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: DIN; input. */
  "DIN": "4",
}) {
  override schema = "LED:NeoPixel_THT";
  override referencePrefix = "D";
}

/**
 * Cree PLCC6 3 in 1 SMD LED with zener protection, PLCC-6
 *
 * KiCad symbol: `LED:QLS6A-FKW`. Reference prefix: `D`.
 * Footprint filters: LED*Cree*PLCC*4.7x1.5mm*.
 * @see https://www.cree.com/led-components/media/documents/1381-QLS6AFKW.pdf
 * Keywords: LED RGB.
 * Default footprint: LED_SMD:LED_Cree-PLCC6_4.7x1.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class QLS6A_FKW extends Component.withPins({
  /** Physical pin 1: AB; passive. */
  "AB": "1",
  /** Physical pin 2: KB; passive. */
  "KB": "2",
  /** Physical pin 3: AR; passive. */
  "AR": "3",
  /** Physical pin 4: KR; passive. */
  "KR_4": "4",
  /** Physical pin 5: AG; passive. */
  "AG": "5",
  /** Physical pin 6: KR; passive. */
  "KR_6": "6",
}) {
  override schema = "LED:QLS6A-FKW";
  override referencePrefix = "D";
}

/**
 * Cree PLCC6 3 in 1 SMD LED, PLCC-6
 *
 * KiCad symbol: `LED:QLS6B-FKW`. Reference prefix: `D`.
 * Footprint filters: LED*Cree*PLCC*4.7x1.5mm*.
 * @see https://www.cree.com/led-components/media/documents/1397-QLS6BFKW.pdf
 * Keywords: LED RGB.
 * Default footprint: LED_SMD:LED_Cree-PLCC6_4.7x1.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class QLS6B_FKW extends Component.withPins({
  /** Physical pin 1: AB; passive. */
  "AB": "1",
  /** Physical pin 2: KB; passive. */
  "KB": "2",
  /** Physical pin 3: AR; passive. */
  "AR": "3",
  /** Physical pin 4: KR; passive. */
  "KR_4": "4",
  /** Physical pin 5: AG; passive. */
  "AG": "5",
  /** Physical pin 6: KR; passive. */
  "KR_6": "6",
}) {
  override schema = "LED:QLS6B-FKW";
  override referencePrefix = "D";
}

/**
 * Infrared LED , 3mm LED package
 *
 * KiCad symbol: `LED:SFH4346`. Reference prefix: `D`.
 * Footprint filters: LED*3.0mm*IRBlack*.
 * @see http://cdn-reichelt.de/documents/datenblatt/A500/SFH4346.pdf
 * Keywords: opto IR LED.
 * Default footprint: LED_THT:LED_D3.0mm_IRBlack.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH4346 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "LED:SFH4346";
  override referencePrefix = "D";
}

/**
 * High-Power IR LED 940nm
 *
 * KiCad symbol: `LED:SFH4546`. Reference prefix: `D`.
 * Footprint filters: LED*5.0mm*IRGrey*.
 * @see http://www.osram-os.com/Graphics/XPic1/00101982_0.pdf
 * Keywords: IR LED.
 * Default footprint: LED_THT:LED_D5.0mm_IRGrey.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH4546 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "LED:SFH4546";
  override referencePrefix = "D";
}

/**
 * 950nm High-Power IR-LED, 5mm
 *
 * KiCad symbol: `LED:SFH4550`. Reference prefix: `D`.
 * Footprint filters: LED*5.0mm*IRGrey*.
 * @see http://www.osram-os.com/Graphics/XPic3/00116140_0.pdf
 * Keywords: IR LED.
 * Default footprint: LED_THT:LED_D5.0mm_IRGrey.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH4550 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "LED:SFH4550";
  override referencePrefix = "D";
}

/**
 * GaAlAs Infrared LED, TO-18 package
 *
 * KiCad symbol: `LED:SFH460`. Reference prefix: `D`.
 * Footprint filters: TO?18*Window*.
 * @see http://www.osram-os.com/Graphics/XPic6/00029609_0.pdf/SFh%20460.pdf
 * Keywords: opto IR LED.
 * Default footprint: Package_TO_SOT_THT:TO-18-2_Window.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH460 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "LED:SFH460";
  override referencePrefix = "D";
}

/**
 * GaAlAs Infrared LED (880 nm), TO-18 package
 *
 * KiCad symbol: `LED:SFH482`. Reference prefix: `D`.
 * Footprint filters: TO?18*Window*.
 * @see http://www.osram-os.com/Graphics/XPic2/00182155_0.pdf/SFH%20482%20E7800,%20Lead%20(Pb)%20Free%20Product%20-%20RoHS%20Compliant.pdf
 * Keywords: opto IR LED.
 * Default footprint: Package_TO_SOT_THT:TO-18-2_Window.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH482 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "LED:SFH482";
  override referencePrefix = "D";
}

/**
 * GaAlAs Infrared LED (880 nm), TO-18 package
 *
 * KiCad symbol: `LED:SFH480`. Reference prefix: `D`.
 * Footprint filters: TO?18*Window*.
 * @see http://www.osram-os.com/Graphics/XPic1/00083613_0.pdf
 * Keywords: IR LED Opto.
 * Default footprint: Package_TO_SOT_THT:TO-18-2_Window.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SFH480 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "LED:SFH480";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:SK6805`. Reference prefix: `D`.
 * Footprint filters: LED*SK6805*PLCC*2.4x2.7mm*P1.3mm*.
 * @see https://cdn-shop.adafruit.com/product-files/3484/3484_Datasheet.pdf
 * Keywords: RGB LED NeoPixel Nano addressable.
 * Default footprint: LED_SMD:LED_SK6805_PLCC4_2.4x2.7mm_P1.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SK6805 extends Component.withPins({
  /** Physical pin 1: DOUT; output. */
  "DOUT": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: DIN; input. */
  "DIN": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
}) {
  override schema = "LED:SK6805";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:SK6812`. Reference prefix: `D`.
 * Footprint filters: LED*SK6812*PLCC*5.0x5.0mm*P3.2mm*.
 * @see https://cdn-shop.adafruit.com/product-files/1138/SK6812+LED+datasheet+.pdf
 * Keywords: RGB LED NeoPixel addressable.
 * Default footprint: LED_SMD:LED_SK6812_PLCC4_5.0x5.0mm_P3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SK6812 extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: DOUT; output. */
  "DOUT": "4",
}) {
  override schema = "LED:SK6812";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:SK6812MINI`. Reference prefix: `D`.
 * Footprint filters: LED*SK6812MINI*PLCC*3.5x3.5mm*P1.75mm*.
 * @see https://cdn-shop.adafruit.com/product-files/2686/SK6812MINI_REV.01-1-2.pdf
 * Keywords: RGB LED NeoPixel Mini addressable.
 * Default footprint: LED_SMD:LED_SK6812MINI_PLCC4_3.5x3.5mm_P1.75mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SK6812MINI extends Component.withPins({
  /** Physical pin 1: DOUT; output. */
  "DOUT": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: DIN; input. */
  "DIN": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
}) {
  override schema = "LED:SK6812MINI";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:SK6812MINI-E`. Reference prefix: `D`.
 * Footprint filters: LED?SK6812MINI?E?3.2x2.8mm?P1.5mm*.
 * @see https://www.lcsc.com/datasheet/C5149201.pdf
 * Keywords: RGB LED NeoPixel addressable.
 * Default footprint: LED_SMD:LED_SK6812MINI-E_3.2x2.8mm_P1.5mm_ReverseMount.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SK6812MINI_E extends Component.withPins({
  /** Physical pin 1: VSS; power_in. */
  "VSS": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: DOUT; output. */
  "DOUT": "4",
}) {
  override schema = "LED:SK6812MINI-E";
  override referencePrefix = "D";
}

/**
 * High Brightness Tri-Color LED, RGB, 3.5x2.8mm
 *
 * KiCad symbol: `LED:SMLVN6RGB`. Reference prefix: `D`.
 * Footprint filters: LED*ROHM*SMLVN6*.
 * @see https://www.rohm.com/datasheet/SMLVN6RGB1U
 * Keywords: LED RGB Diode.
 * Default footprint: LED_SMD:LED_ROHM_SMLVN6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SMLVN6RGB extends Component.withPins({
  /** Physical pin 1: BA; passive. */
  "BA": "1",
  /** Physical pin 2: RA; passive. */
  "RA": "2",
  /** Physical pin 3: GA; passive. */
  "GA": "3",
  /** Physical pin 4: GK; passive. */
  "GK": "4",
  /** Physical pin 5: RK; passive. */
  "RK": "5",
  /** Physical pin 6: BK; passive. */
  "BK": "6",
}) {
  override schema = "LED:SMLVN6RGB";
  override referencePrefix = "D";
}

/**
 * Infrared LED , 3mm LED package
 *
 * KiCad symbol: `LED:TSAL4400`. Reference prefix: `D`.
 * Footprint filters: LED*3.0mm*IRBlack*.
 * @see http://www.vishay.com/docs/81006/tsal4400.pdf
 * Keywords: opto IR LED.
 * Default footprint: LED_THT:LED_D3.0mm_IRBlack.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TSAL4400 extends Component.withPins({
  /** Physical pin 1: K; passive. */
  "K": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
}) {
  override schema = "LED:TSAL4400";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:WS2812S`. Reference prefix: `D`.
 * Footprint filters: LED*WS2812*PLCC*5.0x5.0mm*P1.6mm*.
 * @see http://www.world-semi.com/DownLoadFile/115
 * Keywords: RGB LED addressable.
 * Default footprint: LED_SMD:LED_WS2812_PLCC6_5.0x5.0mm_P1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WS2812S extends Component.withPins({
  /** Physical pin 1: DOUT; output. */
  "DOUT": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
}) {
  override schema = "LED:WS2812S";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:WS2812`. Reference prefix: `D`.
 * Footprint filters: LED*WS2812*PLCC*5.0x5.0mm*P1.6mm*.
 * @see https://cdn-shop.adafruit.com/datasheets/WS2812.pdf
 * Keywords: RGB LED NeoPixel addressable.
 * Default footprint: LED_SMD:LED_WS2812_PLCC6_5.0x5.0mm_P1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WS2812 extends Component.withPins({
  /** Physical pin 1: DOUT; output. */
  "DOUT": "1",
  /** Physical pin 2: DIN; input. */
  "DIN": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
}) {
  override schema = "LED:WS2812";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:WS2812B`. Reference prefix: `D`.
 * Footprint filters: LED*WS2812*PLCC*5.0x5.0mm*P3.2mm*.
 * @see https://cdn-shop.adafruit.com/datasheets/WS2812B.pdf
 * Keywords: RGB LED NeoPixel addressable.
 * Default footprint: LED_SMD:LED_WS2812B_PLCC4_5.0x5.0mm_P3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WS2812B extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: DOUT; output. */
  "DOUT": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS": "3",
  /** Physical pin 4: DIN; input. */
  "DIN": "4",
}) {
  override schema = "LED:WS2812B";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller, 2.0 x 2.0 mm, 12 mA
 *
 * KiCad symbol: `LED:WS2812B-2020`. Reference prefix: `D`.
 * Footprint filters: LED*WS2812*-2020_PLCC4*.
 * @see https://cdn-shop.adafruit.com/product-files/4684/4684_WS2812B-2020_V1.3_EN.pdf
 * Keywords: RGB LED NeoPixel Nano addressable.
 * Default footprint: LED_SMD:LED_WS2812B-2020_PLCC4_2.0x2.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WS2812B_2020 extends Component.withPins({
  /** Physical pin 1: DOUT; output. */
  "DOUT": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: DIN; input. */
  "DIN": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
}) {
  override schema = "LED:WS2812B-2020";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:WS2813`. Reference prefix: `D`.
 * Footprint filters: LED*WS2812*PLCC*5.0x5.0mm*P1.6mm*.
 * @see http://www.normandled.com/upload/201605/WS2813%20LED%20Datasheet.pdf
 * Keywords: RGB LED addressable.
 * Default footprint: LED_SMD:LED_WS2812_PLCC6_5.0x5.0mm_P1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WS2813 extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: DOUT; output. */
  "DOUT": "3",
  /** Physical pin 4: DIN; input. */
  "DIN": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: BIN; input. */
  "BIN": "6",
}) {
  override schema = "LED:WS2813";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:WS2822S`. Reference prefix: `D`.
 * Footprint filters: LED*WS2812*PLCC*5.0x5.0mm*P1.6mm*.
 * @see http://akizukidenshi.com/download/ds/worldsemi/WS2822S.pdf
 * Keywords: RGB LED addressable.
 * Default footprint: LED_SMD:LED_WS2812_PLCC6_5.0x5.0mm_P1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WS2822S extends Component.withPins({
  /** Physical pin 1: DAI; input. */
  "DAI": "1",
  /** Physical pin 2: ADRI; input. */
  "ADRI": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ADRO; output. */
  "ADRO": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "LED:WS2822S";
  override referencePrefix = "D";
}

