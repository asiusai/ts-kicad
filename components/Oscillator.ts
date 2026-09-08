// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Programmable Clock Generator, I2C interface, 1kHz-350MHz, QFN-24
 *
 * KiCad symbol: `Oscillator:5P49V6965`. Reference prefix: `Y`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.renesas.com/us/en/document/dst/5p49v6965-datasheet
 * Keywords: Low-noise PLL Reference Clock.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.8x2.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _5P49V6965 extends Component.withPins({
  /** Physical pin 1: CLKIN; input. */
  "CLKIN": "1",
  /** Physical pin 2: CLKINB; input. */
  "CLKINB": "2",
  /** Physical pin 3: XOUT; output. */
  "XOUT": "3",
  /** Physical pin 4: XIN/REF; input. */
  "XIN/REF": "4",
  /** Physical pin 5: VDDA; power_in. */
  "VDDA": "5",
  /** Physical pin 6: CLKSEL; input. */
  "CLKSEL": "6",
  /** Physical pin 7: SD/OE; input. */
  "SD/OE": "7",
  /** Physical pin 8: SEL1/SDA; bidirectional. */
  "SEL1/SDA": "8",
  /** Physical pin 9: SEL0/SCL; input. */
  "SEL0/SCL": "9",
  /** Physical pin 10: VDDO4; power_in. */
  "VDDO4": "10",
  /** Physical pin 11: OUT4; output. */
  "OUT4": "11",
  /** Physical pin 12: OUT4B; output. */
  "OUT4B": "12",
  /** Physical pin 13: OUT3B; output. */
  "OUT3B": "13",
  /** Physical pin 14: OUT3; output. */
  "OUT3": "14",
  /** Physical pin 15: VDDO3; power_in. */
  "VDDO3": "15",
  /** Physical pin 16: OUT2B; output. */
  "OUT2B": "16",
  /** Physical pin 17: OUT2; output. */
  "OUT2": "17",
  /** Physical pin 18: VDDO2; power_in. */
  "VDDO2": "18",
  /** Physical pin 19: OUT1B; output. */
  "OUT1B": "19",
  /** Physical pin 20: OUT1; output. */
  "OUT1": "20",
  /** Physical pin 21: VDDO1; power_in. */
  "VDDO1": "21",
  /** Physical pin 22: VDDD; power_in. */
  "VDDD": "22",
  /** Physical pin 23: VDDO0; power_in. */
  "VDDO0": "23",
  /** Physical pin 24: OUT0_SEL_I2CB; bidirectional. */
  "OUT0_SEL_I2CB": "24",
  /** Physical pin 25: GND; power_in. */
  "GND": "25",
}) {
  override schema = "Oscillator:5P49V6965";
  override referencePrefix = "Y";
}

/**
 * LVCMOS Ultra Low Phase Noise XO / VCXO, Abracon ABLNO
 *
 * KiCad symbol: `Oscillator:ABLNO`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*Abracon*ABLNO*.
 * @see https://abracon.com/Precisiontiming/ABLNO.pdf
 * Keywords: XO VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_Abracon_ABLNO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ABLNO extends Component.withPins({
  /** Physical pin 1: Vctrl; input. */
  "Vctrl": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: RFout; output. */
  "RFout": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
}) {
  override schema = "Oscillator:ABLNO";
  override referencePrefix = "Y";
}

/**
 * HCMOS Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:DGOF5S3`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.conwin.com/datasheets/cx/cx030.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DGOF5S3 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT; output. */
  "OUT": "8",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:DGOF5S3";
  override referencePrefix = "Y";
}

/**
 * HCMOS Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:ACO-xxxMHz`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.conwin.com/datasheets/cx/cx030.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ACO_xxxMHz extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT; output. */
  "OUT": "8",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:ACO-xxxMHz";
  override referencePrefix = "Y";
}

/**
 * HCMOS Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:ACO-xxxMHz-A`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.conwin.com/datasheets/cx/cx030.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ACO_xxxMHz_A extends Component.withPins({
  /** Physical pin 1: Tri-State; input. */
  "Tri-State": "1",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT; output. */
  "OUT": "8",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:ACO-xxxMHz-A";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, Abracon ASCO
 *
 * KiCad symbol: `Oscillator:ASCO`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*Abracon*ASCO*1.6x1.2mm*.
 * @see https://abracon.com/Oscillators/ASCO.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Abracon_ASCO-4Pin_1.6x1.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ASCO extends Component.withPins({
  /** Physical pin 1: Tri-State; input. */
  "Tri-State": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
}) {
  override schema = "Oscillator:ASCO";
  override referencePrefix = "Y";
}

/**
 * 1.8-3.3V SMD Ultra Miniature Crystal Clock Oscillator, Abracon
 *
 * KiCad symbol: `Oscillator:ASDMB-xxxMHz`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Abracon*ASDMB*2.5x2.0mm*.
 * @see https://abracon.com/Oscillators/ASDMB.pdf
 * Keywords: 1.8-3.3V SMD Ultra Miniature Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Abracon_ASDMB-4Pin_2.5x2.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ASDMB_xxxMHz extends Component.withPins({
  /** Physical pin 1: Standby; input. */
  "Standby": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Out; output. */
  "Out": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
}) {
  override schema = "Oscillator:ASDMB-xxxMHz";
  override referencePrefix = "Y";
}

/**
 * 3.3V CMOS SMD Crystal Clock Oscillator, Abracon
 *
 * KiCad symbol: `Oscillator:ASE-xxxMHz`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Abracon*ASE*3.2x2.5mm*.
 * @see http://www.abracon.com/Oscillators/ASV.pdf
 * Keywords: 3.3V CMOS SMD Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Abracon_ASE-4Pin_3.2x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ASE_xxxMHz extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:ASE-xxxMHz";
  override referencePrefix = "Y";
}

/**
 * 3.3V HCMOS SMD Crystal Clock Oscillator, Abracon
 *
 * KiCad symbol: `Oscillator:ASV-xxxMHz`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Abracon*ASV*7.0x5.1mm*.
 * @see http://www.abracon.com/Oscillators/ASV.pdf
 * Keywords: 3.3V HCMOS SMD Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Abracon_ASV-4Pin_7.0x5.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ASV_xxxMHz extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:ASV-xxxMHz";
  override referencePrefix = "Y";
}

/**
 * 500kHz-100MHz 5V Crystal Oscillator, IQD CFPS-72
 *
 * KiCad symbol: `Oscillator:CFPS-72`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*IQD*IQXO70*7.5x5.0mm*.
 * @see https://www.iqdfrequencyproducts.com/products/details/cfps-72-14-01.pdf
 * Keywords: XO.
 * Default footprint: Oscillator:Oscillator_SMD_IQD_IQXO70-4Pin_7.5x5.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CFPS_72 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Output; output. */
  "Output": "3",
  /** Physical pin 4: +Vs; power_in. */
  "+Vs": "4",
}) {
  override schema = "Oscillator:CFPS-72";
  override referencePrefix = "Y";
}

/**
 * Voltage Controlled Oscillator, Crystek, 0.50" SQ SMD
 *
 * KiCad symbol: `Oscillator:CVCO55xx`. Reference prefix: `Y`.
 * Footprint filters: Mini?Circuits*CK605*.
 * @see https://www.crystek.com/home/vco/cvco55.aspx
 * Keywords: VCXO VCO Crystek.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_CK605_LandPatternPL-012.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CVCO55xx extends Component.withPins({
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: Vtune; passive. */
  "Vtune": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: RFout; output. */
  "RFout": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:CVCO55xx";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:CXO_DIP14`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://cdn-reichelt.de/documents/datenblatt/B400/OSZI.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CXO_DIP14 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT; output. */
  "OUT": "8",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:CXO_DIP14";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, DIP8-style metal package
 *
 * KiCad symbol: `Oscillator:CXO_DIP8`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*8*.
 * @see http://cdn-reichelt.de/documents/datenblatt/B400/OSZI.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CXO_DIP8 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
  /** Physical pin 8: Vcc; power_in. */
  "Vcc": "8",
}) {
  override schema = "Oscillator:CXO_DIP8";
  override referencePrefix = "Y";
}

/**
 * Temperature compensated Crystal Clock Oscillator
 *
 * KiCad symbol: `Oscillator:DFA-S11`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Fordahl*DFAS11*7.0x5.0mm*.
 * @see http://www.metatech.com.hk/product/fordahl/pdf/2002%20TCXO%20Page%2043-58.pdf
 * Keywords: Temperature compensated Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Fordahl_DFAS11-4Pin_7.0x5.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DFA_S11 extends Component.withPins({
  /** Physical pin 1: Vctrl; input. */
  "Vctrl": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
}) {
  override schema = "Oscillator:DFA-S11";
  override referencePrefix = "Y";
}

/**
 * Temperature compensated Crystal Clock Oscillator
 *
 * KiCad symbol: `Oscillator:DFA-S15`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Fordahl*DFAS15*5.0x3.2mm*.
 * @see http://www.metatech.com.hk/product/fordahl/pdf/2002%20TCXO%20Page%2043-58.pdf
 * Keywords: Temperature compensated Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Fordahl_DFAS15-4Pin_5.0x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DFA_S15 extends Component.withPins({
  /** Physical pin 1: Vctrl; input. */
  "Vctrl": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
}) {
  override schema = "Oscillator:DFA-S15";
  override referencePrefix = "Y";
}

/**
 * Temperature compensated Crystal Clock Oscillator
 *
 * KiCad symbol: `Oscillator:DFA-S2`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Fordahl*DFAS2*7.3x5.1mm*.
 * @see http://www.metatech.com.hk/product/fordahl/pdf/2002%20TCXO%20Page%2043-58.pdf
 * Keywords: Temperature compensated Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Fordahl_DFAS2-4Pin_7.3x5.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DFA_S2 extends Component.withPins({
  /** Physical pin 1: Vctrl; input. */
  "Vctrl": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
}) {
  override schema = "Oscillator:DFA-S2";
  override referencePrefix = "Y";
}

/**
 * Temperature compensated Crystal Clock Oscillator
 *
 * KiCad symbol: `Oscillator:DFA-S3`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Fordahl*DFAS3*9.1x7.2mm*.
 * @see http://www.metatech.com.hk/product/fordahl/pdf/2002%20TCXO%20Page%2043-58.pdf
 * Keywords: Temperature compensated Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Fordahl_DFAS3-4Pin_9.1x7.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DFA_S3 extends Component.withPins({
  /** Physical pin 1: Vctrl; input. */
  "Vctrl": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
}) {
  override schema = "Oscillator:DFA-S3";
  override referencePrefix = "Y";
}

/**
 * HCMOS Crystal Clock Oscillator, 2.5x2.0 mm SMD
 *
 * KiCad symbol: `Oscillator:ECS-2520MV-xxx-xx`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*ECS*2520MV*2.5x2.0mm*.
 * @see https://www.ecsxtal.com/store/pdf/ECS-2520MV.pdf
 * Keywords: Crystal Clock Oscillator ECS SMD.
 * Default footprint: Oscillator:Oscillator_SMD_ECS_2520MV-xxx-xx-4Pin_2.5x2.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ECS_2520MV_xxx_xx extends Component.withPins({
  /** Physical pin 1: Tri-State; input. */
  "Tri-State": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
}) {
  override schema = "Oscillator:ECS-2520MV-xxx-xx";
  override referencePrefix = "Y";
}

/**
 * HCMOS temperature compensated oscillator
 *
 * KiCad symbol: `Oscillator:FT5HN`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Fox*FT5H*5.0x3.2mm*.
 * @see https://foxonline.com/wp-content/uploads/pdfs/T5HN_T5HV.pdf
 * Keywords: TXCO.
 * Default footprint: Oscillator:Oscillator_SMD_Fox_FT5H_5.0x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT5HN extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
}) {
  override schema = "Oscillator:FT5HN";
  override referencePrefix = "Y";
}

/**
 * HCMOS temperature compensated voltage controlled oscillator
 *
 * KiCad symbol: `Oscillator:FT5HV`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Fox*FT5H*5.0x3.2mm*.
 * @see https://foxonline.com/wp-content/uploads/pdfs/T5HN_T5HV.pdf
 * Keywords: TXCO VCTCXO.
 * Default footprint: Oscillator:Oscillator_SMD_Fox_FT5H_5.0x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class FT5HV extends Component.withPins({
  /** Physical pin 1: VC; input. */
  "VC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
}) {
  override schema = "Oscillator:FT5HV";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:GTXO-14T`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.golledge.com/pdf/products/tcxos/gtxo14.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GTXO_14T extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT; output. */
  "OUT": "8",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:GTXO-14T";
  override referencePrefix = "Y";
}

/**
 * Voltage-Controlled Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:OCXO-14`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.petermann-technik.de/fileadmin/petermann/pdf/crystal-oscillators/OCXO-14_PETERMANN-TECHNIK.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OCXO_14 extends Component.withPins({
  /** Physical pin 1: Vcontrol; input. */
  "Vcontrol": "1",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT; output. */
  "OUT": "8",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:OCXO-14";
  override referencePrefix = "Y";
}

/**
 * Voltage-Controlled Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:GTXO-14V`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.golledge.com/pdf/products/tcxos/gtxo14.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GTXO_14V extends Component.withPins({
  /** Physical pin 1: Vcontrol; input. */
  "Vcontrol": "1",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT; output. */
  "OUT": "8",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:GTXO-14V";
  override referencePrefix = "Y";
}

/**
 * 3.3 & 5V Stratum 3 Sinewave TCXO, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:GTXO-S14T`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.golledge.com/pdf/products/tcxos/gtxos14.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GTXO_S14T extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT; output. */
  "OUT": "8",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:GTXO-S14T";
  override referencePrefix = "Y";
}

/**
 * 3.3 & 5V Stratum 3 Sinewave TCXO, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:GTXO-S14V`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.golledge.com/pdf/products/tcxos/gtxos14.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GTXO_S14V extends Component.withPins({
  /** Physical pin 1: Vcontrol; input. */
  "Vcontrol": "1",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT; output. */
  "OUT": "8",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:GTXO-S14V";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, SMD package 7.5x5.0mm²
 *
 * KiCad symbol: `Oscillator:IQXO-70`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*IQD*IQXO70*7.5x5.0mm*.
 * @see http://www.iqdfrequencyproducts.com/products/details/iqxo-70-11-30.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_IQD_IQXO70-4Pin_7.5x5.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IQXO_70 extends Component.withPins({
  /** Physical pin 1: E/B; input. */
  "E/B": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
}) {
  override schema = "Oscillator:IQXO-70";
  override referencePrefix = "Y";
}

/**
 * Voltage Controlled Oscillator, 25 to 47 MHz, Mini-Circuits BK377
 *
 * KiCad symbol: `Oscillator:JTOS-50`. Reference prefix: `Y`.
 * Footprint filters: Mini?Circuits*BK377*.
 * @see https://www.minicircuits.com/pdfs/JTOS-50+.pdf
 * Keywords: VCXO.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_BK377_LandPatternPL-005.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class JTOS_50 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: Vtune; input. */
  "Vtune": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: RFout; output. */
  "RFout": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
}) {
  override schema = "Oscillator:JTOS-50";
  override referencePrefix = "Y";
}

/**
 * Voltage Controlled Oscillator, 12.5 to 25 MHz, Mini-Circuits BK377
 *
 * KiCad symbol: `Oscillator:JTOS-25`. Reference prefix: `Y`.
 * Footprint filters: Mini?Circuits*BK377*.
 * @see https://www.minicircuits.com/pdfs/JTOS-25+.pdf
 * Keywords: VCXO.
 * Default footprint: RF_Mini-Circuits:Mini-Circuits_BK377_LandPatternPL-005.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class JTOS_25 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: Vtune; input. */
  "Vtune": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: RFout; output. */
  "RFout": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
}) {
  override schema = "Oscillator:JTOS-25";
  override referencePrefix = "Y";
}

/**
 * 1.8432MHz ~ 125MHz Crystal Oscillator
 *
 * KiCad symbol: `Oscillator:KC2520Z`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Kyocera*KC2520Z*2.5x2.0mm*.
 * @see https://global.kyocera.com/prdct/electro/product/pdf/clock_z_xz_e.pdf
 * Keywords: xo.
 * Default footprint: Oscillator:Oscillator_SMD_Kyocera_KC2520Z-4Pin_2.5x2.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KC2520Z extends Component.withPins({
  /** Physical pin 1: INH; input. */
  "INH": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: CLK; output. */
  "CLK": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
}) {
  override schema = "Oscillator:KC2520Z";
  override referencePrefix = "Y";
}

/**
 * 10-60MHz Temperature Compensated Crystal Oscillator, Kyocera 2520
 *
 * KiCad symbol: `Oscillator:KT2520K-T`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Kyocera*2.5x2.0mm*.
 * @see https://global.kyocera.com/prdct/electro/product/pdf/kt2520_e.pdf
 * Keywords: tcxo.
 * Default footprint: Oscillator:Oscillator_SMD_Kyocera_2520-6Pin_2.5x2.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KT2520K_T extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
}) {
  override schema = "Oscillator:KT2520K-T";
  override referencePrefix = "Y";
}

/**
 * 2.7-5.5V 80MHz Precision Fixed Frequency Silicon Oscillator, TSOT-23-5
 *
 * KiCad symbol: `Oscillator:LTC6905xS5-80`. Reference prefix: `Y`.
 * Footprint filters: TSOT?23?5*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6905xfa.pdf
 * Keywords: oscillator fixed frequency divider silicon.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6905xS5_80 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OE; input. */
  "OE": "3",
  /** Physical pin 4: DIV; input. */
  "DIV": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
  override schema = "Oscillator:LTC6905xS5-80";
  override referencePrefix = "Y";
}

/**
 * 2.7-5.5V 100MHz Precision Fixed Frequency Silicon Oscillator, TSOT-23-5
 *
 * KiCad symbol: `Oscillator:LTC6905xS5-100`. Reference prefix: `Y`.
 * Footprint filters: TSOT?23?5*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6905xfa.pdf
 * Keywords: oscillator fixed frequency divider silicon.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6905xS5_100 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OE; input. */
  "OE": "3",
  /** Physical pin 4: DIV; input. */
  "DIV": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
  override schema = "Oscillator:LTC6905xS5-100";
  override referencePrefix = "Y";
}

/**
 * 2.7-5.5V 133MHz Precision Fixed Frequency Silicon Oscillator, TSOT-23-5
 *
 * KiCad symbol: `Oscillator:LTC6905xS5-133`. Reference prefix: `Y`.
 * Footprint filters: TSOT?23?5*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6905xfa.pdf
 * Keywords: oscillator fixed frequency divider silicon.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6905xS5_133 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OE; input. */
  "OE": "3",
  /** Physical pin 4: DIV; input. */
  "DIV": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
  override schema = "Oscillator:LTC6905xS5-133";
  override referencePrefix = "Y";
}

/**
 * 2.7-5.5V 96MHz Precision Fixed Frequency Silicon Oscillator, TSOT-23-5
 *
 * KiCad symbol: `Oscillator:LTC6905xS5-96`. Reference prefix: `Y`.
 * Footprint filters: TSOT?23?5*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/6905xfa.pdf
 * Keywords: oscillator fixed frequency divider silicon.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC6905xS5_96 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OE; input. */
  "OE": "3",
  /** Physical pin 4: DIV; input. */
  "DIV": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
}) {
  override schema = "Oscillator:LTC6905xS5-96";
  override referencePrefix = "Y";
}

/**
 * Silicon Clock Oscillator 8MHz, SC-70-3
 *
 * KiCad symbol: `Oscillator:MAX7375AXR805`. Reference prefix: `Y`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7375.pdf
 * Keywords: Silicon Clock Oscillator 8MHz 8000kHz.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX7375AXR805 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: CLOCK; output. */
  "CLOCK": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
  override schema = "Oscillator:MAX7375AXR805";
  override referencePrefix = "Y";
}

/**
 * Silicon Clock Oscillator 1MHz, SC-70-3
 *
 * KiCad symbol: `Oscillator:MAX7375AXR105`. Reference prefix: `Y`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7375.pdf
 * Keywords: Silicon Clock Oscillator 1MHz 1000kHz.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX7375AXR105 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: CLOCK; output. */
  "CLOCK": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
  override schema = "Oscillator:MAX7375AXR105";
  override referencePrefix = "Y";
}

/**
 * Silicon Clock Oscillator 1.84MHz, SC-70-3
 *
 * KiCad symbol: `Oscillator:MAX7375AXR185`. Reference prefix: `Y`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7375.pdf
 * Keywords: Silicon Clock Oscillator 1,84MHz 1840kHz.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX7375AXR185 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: CLOCK; output. */
  "CLOCK": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
  override schema = "Oscillator:MAX7375AXR185";
  override referencePrefix = "Y";
}

/**
 * Silicon Clock Oscillator 3.58MHz, SC-70-3
 *
 * KiCad symbol: `Oscillator:MAX7375AXR365`. Reference prefix: `Y`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7375.pdf
 * Keywords: Silicon Clock Oscillator 3.58MHz 3580kHz.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX7375AXR365 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: CLOCK; output. */
  "CLOCK": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
  override schema = "Oscillator:MAX7375AXR365";
  override referencePrefix = "Y";
}

/**
 * Silicon Clock Oscillator 3.69MHz, SC-70-3
 *
 * KiCad symbol: `Oscillator:MAX7375AXR375`. Reference prefix: `Y`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7375.pdf
 * Keywords: Silicon Clock Oscillator 3.69MHz 3690kHz.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX7375AXR375 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: CLOCK; output. */
  "CLOCK": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
  override schema = "Oscillator:MAX7375AXR375";
  override referencePrefix = "Y";
}

/**
 * Silicon Clock Oscillator 4MHz, SC-70-3
 *
 * KiCad symbol: `Oscillator:MAX7375AXR405`. Reference prefix: `Y`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7375.pdf
 * Keywords: Silicon Clock Oscillator 4MHz 4000kHz.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX7375AXR405 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: CLOCK; output. */
  "CLOCK": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
  override schema = "Oscillator:MAX7375AXR405";
  override referencePrefix = "Y";
}

/**
 * Silicon Clock Oscillator 4.19MHz, SC-70-3
 *
 * KiCad symbol: `Oscillator:MAX7375AXR425`. Reference prefix: `Y`.
 * Footprint filters: *SC?70*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7375.pdf
 * Keywords: Silicon Clock Oscillator 4.19MHz 4190kHz.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX7375AXR425 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: CLOCK; output. */
  "CLOCK": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
}) {
  override schema = "Oscillator:MAX7375AXR425";
  override referencePrefix = "Y";
}

/**
 * 5/10 MHz Low Phase-Noise Precision OCXO, Morion MV267
 *
 * KiCad symbol: `Oscillator:MV267`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*OCXO*Morion*MV267*.
 * @see http://www.morion.com.ru/catalog_pdf/MV267.pdf
 * Keywords: OCXO.
 * Default footprint: Oscillator:Oscillator_OCXO_Morion_MV267.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MV267 extends Component.withPins({
  /** Physical pin 1: Uref; output. */
  "Uref": "1",
  /** Physical pin 2: Us; power_in. */
  "Us": "2",
  /** Physical pin 3: RF; output. */
  "RF": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Uin; input. */
  "Uin": "5",
}) {
  override schema = "Oscillator:MV267";
  override referencePrefix = "Y";
}

/**
 * 60, 80, 100, 120 & 122.76 MHz OCXO, Morion MV317
 *
 * KiCad symbol: `Oscillator:MV317`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*OCXO*Morion*MV317*.
 * @see https://www.morion-us.com/catalog_pdf/mv317.pdf
 * Keywords: OCXO.
 * Default footprint: Oscillator:Oscillator_OCXO_Morion_MV317.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MV317 extends Component.withPins({
  /** Physical pin 1: Uref; output. */
  "Uref": "1",
  /** Physical pin 2: Us; power_in. */
  "Us": "2",
  /** Physical pin 3: RF; output. */
  "RF": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Uin; input. */
  "Uin": "5",
}) {
  override schema = "Oscillator:MV317";
  override referencePrefix = "Y";
}

/**
 * 3.3V / 5.0V 14 MHz to 190 MHz PLL Clock Multiplier, SOIC-8
 *
 * KiCad symbol: `Oscillator:NB3N502`. Reference prefix: `Y`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/NB3N502-D.PDF
 * Keywords: oscillator clock multiplier PLL.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NB3N502 extends Component.withPins({
  /** Physical pin 1: X1/CLK; input. */
  "X1/CLK": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: REF; output. */
  "REF": "4",
  /** Physical pin 5: CLKOUT; output. */
  "CLKOUT": "5",
  /** Physical pin 6: S0; input. */
  "S0": "6",
  /** Physical pin 7: S1; input. */
  "S1": "7",
  /** Physical pin 8: X2; output. */
  "X2": "8",
}) {
  override schema = "Oscillator:NB3N502";
  override referencePrefix = "Y";
}

/**
 * 3.3V / 5.0V 14 MHz to 200 MHz PLL Clock Multiplier, SOIC-8
 *
 * KiCad symbol: `Oscillator:NB3N511`. Reference prefix: `Y`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/NB3N511-D.PDF
 * Keywords: oscillator clock multiplier PLL.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NB3N511 extends Component.withPins({
  /** Physical pin 1: X1/ICLK; input. */
  "X1/ICLK": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: S1; input. */
  "S1": "4",
  /** Physical pin 5: CLKOUT; output. */
  "CLKOUT": "5",
  /** Physical pin 6: S0; input. */
  "S0": "6",
  /** Physical pin 7: OE; input. */
  "OE": "7",
  /** Physical pin 8: X2; passive. */
  "X2": "8",
}) {
  override schema = "Oscillator:NB3N511";
  override referencePrefix = "Y";
}

/**
 * 100MHz Sinewave output OCXO, low phase-noise, high stability, Connor-Winfield OH300
 *
 * KiCad symbol: `Oscillator:OH300`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*OH300*.
 * @see http://www.conwin.com/datasheets/cx/cx282.pdf
 * Keywords: OCXO.
 * Default footprint: Oscillator:Oscillator_SMD_OCXO_ConnorWinfield_OH300.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OH300 extends Component.withPins({
  /** Physical pin 1: Vcontrol; input. */
  "Vcontrol": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
}) {
  override schema = "Oscillator:OH300";
  override referencePrefix = "Y";
}

/**
 * Crystal Oscillator Low Profile / High Stability SPXO
 *
 * KiCad symbol: `Oscillator:SG-210SED`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG210*2.5x2.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-210SED
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG210-4Pin_2.5x2.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_210SED extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:SG-210SED";
  override referencePrefix = "Y";
}

/**
 * Crystal Oscillator Low Profile / High Stability SPXO
 *
 * KiCad symbol: `Oscillator:SG-210SCD`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG210*2.5x2.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-210SED
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG210-4Pin_2.5x2.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_210SCD extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:SG-210SCD";
  override referencePrefix = "Y";
}

/**
 * Crystal Oscillator Low Profile / High Stability SPXO
 *
 * KiCad symbol: `Oscillator:SG-210SDD`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG210*2.5x2.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-210SED
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG210-4Pin_2.5x2.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_210SDD extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:SG-210SDD";
  override referencePrefix = "Y";
}

/**
 * CMOS Crystal Oscillator SPXO
 *
 * KiCad symbol: `Oscillator:SG-210STF`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG210*2.5x2.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-210STF
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG210-4Pin_2.5x2.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_210STF extends Component.withPins({
  /** Physical pin 1: ~{ST}; input. */
  "~{ST}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:SG-210STF";
  override referencePrefix = "Y";
}

/**
 * CMOS Crystal Oscillator SPXO
 *
 * KiCad symbol: `Oscillator:SG-211`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG210*2.5x2.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-211SEE
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG210-4Pin_2.5x2.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_211 extends Component.withPins({
  /** Physical pin 1: ~{ST}; input. */
  "~{ST}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:SG-211";
  override referencePrefix = "Y";
}

/**
 * 32.768kHz Crystal Oscillator (SPXO)
 *
 * KiCad symbol: `Oscillator:SG-3030CM`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG3030CM*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-3030CM
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG3030CM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_3030CM extends Component.withPins({
  /** Physical pin 1: VIO; power_in. */
  "VIO": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:SG-3030CM";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 1 to 75 MHz
 *
 * KiCad symbol: `Oscillator:SG-5032CAN`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002LB*5.0x3.2mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG5032CAN&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002LB-4Pin_5.0x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_5032CAN extends Component.withPins({
  /** Physical pin 1: ~{ST}; input. */
  "~{ST}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
}) {
  override schema = "Oscillator:SG-5032CAN";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 80 to 170 MHz
 *
 * KiCad symbol: `Oscillator:SG-5032CBN`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002LB*5.0x3.2mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG5032CBN&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002LB-4Pin_5.0x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_5032CBN extends Component.withPins({
  /** Physical pin 1: ~{ST}; input. */
  "~{ST}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
}) {
  override schema = "Oscillator:SG-5032CBN";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 1 to 125 MHz
 *
 * KiCad symbol: `Oscillator:SG-8002LB`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002LB*5.0x3.2mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG-8002LB&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002LB-4Pin_5.0x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_8002LB extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:SG-8002LB";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 2.5 to 50 MHz
 *
 * KiCad symbol: `Oscillator:SG-5032CCN`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002LB*5.0x3.2mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG5032CCN&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002LB-4Pin_5.0x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_5032CCN extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:SG-5032CCN";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, DIP14-style plastic package
 *
 * KiCad symbol: `Oscillator:SG-8002DB`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SeikoEpson*SG?8002DB*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG-8002DB&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SeikoEpson_SG-8002DB.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_8002DB extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT; output. */
  "OUT": "8",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:SG-8002DB";
  override referencePrefix = "Y";
}

/**
 * CMOS Crystal Clock Oscillator, DIP14-style plastic package
 *
 * KiCad symbol: `Oscillator:SG-51`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SeikoEpson*SG?8002DB*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-51P
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SeikoEpson_SG-8002DB.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_51 extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT; output. */
  "OUT": "8",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:SG-51";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, DIP8-style plastic package
 *
 * KiCad symbol: `Oscillator:SG-8002DC`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SeikoEpson*SG?8002DC*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-8002DC
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SeikoEpson_SG-8002DC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_8002DC extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
  /** Physical pin 8: Vcc; power_in. */
  "Vcc": "8",
}) {
  override schema = "Oscillator:SG-8002DC";
  override referencePrefix = "Y";
}

/**
 * CMOS Crystal Clock Oscillator, DIP8-style plastic package
 *
 * KiCad symbol: `Oscillator:SG-531`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SeikoEpson*SG?8002DC*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-51P
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SeikoEpson_SG-8002DC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_531 extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
  /** Physical pin 8: Vcc; power_in. */
  "Vcc": "8",
}) {
  override schema = "Oscillator:SG-531";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator
 *
 * KiCad symbol: `Oscillator:SG-8002JA`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002JA*14.0x8.7mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-8002DC
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002JA-4Pin_14.0x8.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_8002JA extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:SG-8002JA";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator
 *
 * KiCad symbol: `Oscillator:SG-615`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002JA*14.0x8.7mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-51P
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002JA-4Pin_14.0x8.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_615 extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:SG-615";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 1 to 75 MHz
 *
 * KiCad symbol: `Oscillator:SG-7050CAN`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002CA*7.0x5.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG7050CAN&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002CA-4Pin_7.0x5.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_7050CAN extends Component.withPins({
  /** Physical pin 1: ~{ST}; input. */
  "~{ST}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
}) {
  override schema = "Oscillator:SG-7050CAN";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 80 to 170 MHz
 *
 * KiCad symbol: `Oscillator:SG-7050CBN`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002CA*7.0x5.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG7050CBN&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002CA-4Pin_7.0x5.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_7050CBN extends Component.withPins({
  /** Physical pin 1: ~{ST}; input. */
  "~{ST}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
}) {
  override schema = "Oscillator:SG-7050CBN";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 1 to 125 MHz
 *
 * KiCad symbol: `Oscillator:SG-8002CA`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002CA*7.0x5.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-8002DC
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002CA-4Pin_7.0x5.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_8002CA extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:SG-8002CA";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator 2.5 to 50 MHz
 *
 * KiCad symbol: `Oscillator:SG-7050CCN`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002CA*7.0x5.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=brief_SG7050CAN&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002CA-4Pin_7.0x5.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_7050CCN extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:SG-7050CCN";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator
 *
 * KiCad symbol: `Oscillator:SG-8002CE`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002CE*3.2x2.5mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-8002DC
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002CE-4Pin_3.2x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_8002CE extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:SG-8002CE";
  override referencePrefix = "Y";
}

/**
 * CMOS Clock Oscillator
 *
 * KiCad symbol: `Oscillator:SG-8002JC`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*SG8002JC*10.5x5.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?mode=dl&lang=en&Parts=SG-8002DC
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_SG8002JC-4Pin_10.5x5.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SG_8002JC extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:SG-8002JC";
  override referencePrefix = "Y";
}

/**
 * Dual frequency crystal oscillator (XO) 100 kHz to 250 MHz, Single-ended CMOS output
 *
 * KiCad symbol: `Oscillator:Si512A_2.5x3.2mm`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Silicon*Labs*LGA*2.5x3.2mm*P1.25mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/si512-13.pdf
 * Keywords: Dual frequency crystal oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Silicon_Labs_LGA-6_2.5x3.2mm_P1.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si512A_2_5x3_2mm extends Component.withPins({
  /** Physical pin 1: FS; input. */
  "FS": "1",
  /** Physical pin 2: OE; input. */
  "OE": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CLK; output. */
  "CLK": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:Si512A_2.5x3.2mm";
  override referencePrefix = "Y";
}

/**
 * Dual frequency crystal oscillator (XO) 100 kHz to 250 MHz, Single-ended CMOS output
 *
 * KiCad symbol: `Oscillator:Si513A_2.5x3.2mm`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*Silicon*Labs*LGA*2.5x3.2mm*P1.25mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/si512-13.pdf
 * Keywords: Dual frequency crystal oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_Silicon_Labs_LGA-6_2.5x3.2mm_P1.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si513A_2_5x3_2mm extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: FS; input. */
  "FS": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CLK; output. */
  "CLK": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:Si513A_2.5x3.2mm";
  override referencePrefix = "Y";
}

/**
 * I2C Programmable Any-Frequency CMOS Clock Generator, QFN-20
 *
 * KiCad symbol: `Oscillator:Si5351A-B-GM`. Reference prefix: `Y`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf
 * Keywords: CMOS Synth Oscillator I2C.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5351A_B_GM extends Component.withPins({
  /** Physical pin 1: XA; input. */
  "XA": "1",
  /** Physical pin 2: XB; input. */
  "XB": "2",
  /** Physical pin 3: A0; input. */
  "A0": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SSEN; input. */
  "SSEN": "6",
  /** Physical pin 7: OEB; input. */
  "OEB": "7",
  /** Physical pin 8: CLK3; output. */
  "CLK3": "8",
  /** Physical pin 9: CLK2; output. */
  "CLK2": "9",
  /** Physical pin 10: VDDOB; power_in. */
  "VDDOB": "10",
  /** Physical pin 11: VDDOA; power_in. */
  "VDDOA": "11",
  /** Physical pin 12: CLK1; output. */
  "CLK1": "12",
  /** Physical pin 13: CLK0; output. */
  "CLK0": "13",
  /** Physical pin 14: VDDOD; power_in. */
  "VDDOD": "14",
  /** Physical pin 15: CLK7; output. */
  "CLK7": "15",
  /** Physical pin 16: CLK6; output. */
  "CLK6": "16",
  /** Physical pin 17: CLK5; output. */
  "CLK5": "17",
  /** Physical pin 18: VDDOC; power_in. */
  "VDDOC": "18",
  /** Physical pin 19: CLK4; output. */
  "CLK4": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
  /** Physical pin 21: GND; power_in. */
  "GND": "21",
}) {
  override schema = "Oscillator:Si5351A-B-GM";
  override referencePrefix = "Y";
}

/**
 * I2C Programmable Any-Frequency CMOS Clock Generator, MSOP-10
 *
 * KiCad symbol: `Oscillator:Si5351A-B-GT`. Reference prefix: `Y`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf
 * Keywords: CMOS Synth Oscillator I2C.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5351A_B_GT extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: XA; input. */
  "XA": "2",
  /** Physical pin 3: XB; input. */
  "XB": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: CLK2; output. */
  "CLK2": "6",
  /** Physical pin 7: VDDO; power_in. */
  "VDDO": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: CLK1; output. */
  "CLK1": "9",
  /** Physical pin 10: CLK0; output. */
  "CLK0": "10",
}) {
  override schema = "Oscillator:Si5351A-B-GT";
  override referencePrefix = "Y";
}

/**
 * I2C Programmable Any-Frequency CMOS Clock Generator + VCXO, QFN-20
 *
 * KiCad symbol: `Oscillator:Si5351B-B-GM`. Reference prefix: `Y`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf
 * Keywords: CMOS Synth Oscillator I2C VCXO.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5351B_B_GM extends Component.withPins({
  /** Physical pin 1: XA; input. */
  "XA": "1",
  /** Physical pin 2: XB; input. */
  "XB": "2",
  /** Physical pin 3: VC; input. */
  "VC": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SSEN; input. */
  "SSEN": "6",
  /** Physical pin 7: OEB; input. */
  "OEB": "7",
  /** Physical pin 8: CLK3; output. */
  "CLK3": "8",
  /** Physical pin 9: CLK2; output. */
  "CLK2": "9",
  /** Physical pin 10: VDDOB; power_in. */
  "VDDOB": "10",
  /** Physical pin 11: VDDOA; power_in. */
  "VDDOA": "11",
  /** Physical pin 12: CLK1; output. */
  "CLK1": "12",
  /** Physical pin 13: CLK0; output. */
  "CLK0": "13",
  /** Physical pin 14: VDDOD; power_in. */
  "VDDOD": "14",
  /** Physical pin 15: CLK7; output. */
  "CLK7": "15",
  /** Physical pin 16: CLK6; output. */
  "CLK6": "16",
  /** Physical pin 17: CLK5; output. */
  "CLK5": "17",
  /** Physical pin 18: VDDOC; power_in. */
  "VDDOC": "18",
  /** Physical pin 19: CLK4; output. */
  "CLK4": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
  /** Physical pin 21: GND; power_in. */
  "GND": "21",
}) {
  override schema = "Oscillator:Si5351B-B-GM";
  override referencePrefix = "Y";
}

/**
 * I2C Programmable Any-Frequency CMOS Clock Generator, QFN-20
 *
 * KiCad symbol: `Oscillator:Si5351C-B-GM`. Reference prefix: `Y`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5351-B.pdf
 * Keywords: CMOS Synth Oscillator I2C.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5351C_B_GM extends Component.withPins({
  /** Physical pin 1: XA; input. */
  "XA": "1",
  /** Physical pin 2: XB; input. */
  "XB": "2",
  /** Physical pin 3: INTR; output. */
  "INTR": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: CLKIN; input. */
  "CLKIN": "6",
  /** Physical pin 7: OEB; input. */
  "OEB": "7",
  /** Physical pin 8: CLK3; output. */
  "CLK3": "8",
  /** Physical pin 9: CLK2; output. */
  "CLK2": "9",
  /** Physical pin 10: VDDOB; power_in. */
  "VDDOB": "10",
  /** Physical pin 11: VDDOA; power_in. */
  "VDDOA": "11",
  /** Physical pin 12: CLK1; output. */
  "CLK1": "12",
  /** Physical pin 13: CLK0; output. */
  "CLK0": "13",
  /** Physical pin 14: VDDOD; power_in. */
  "VDDOD": "14",
  /** Physical pin 15: CLK7; output. */
  "CLK7": "15",
  /** Physical pin 16: CLK6; output. */
  "CLK6": "16",
  /** Physical pin 17: CLK5; output. */
  "CLK5": "17",
  /** Physical pin 18: VDDOC; power_in. */
  "VDDOC": "18",
  /** Physical pin 19: CLK4; output. */
  "CLK4": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
  /** Physical pin 21: GND; power_in. */
  "GND": "21",
}) {
  override schema = "Oscillator:Si5351C-B-GM";
  override referencePrefix = "Y";
}

/**
 * 10 MHZ TO 1.4 GHZ I2C PROGRAMMABLE XO/VCXO
 *
 * KiCad symbol: `Oscillator:Si570`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SI570*SI571*.
 * @see http://www.silabs.com/Support%20Documents/TechnicalDocs/si570.pdf
 * Keywords: 10 MHZ TO 1.4 GHZ I2C PROGRAMMABLE XO/VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_SI570_SI571_Standard.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si570 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: OE; input. */
  "OE": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CLK+; output. */
  "CLK+": "4",
  /** Physical pin 5: CLK-; output. */
  "CLK-": "5",
  /** Physical pin 6: Vcc; power_in. */
  "Vcc": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
}) {
  override schema = "Oscillator:Si570";
  override referencePrefix = "Y";
}

/**
 * 10 MHZ TO 1.4 GHZ I2C PROGRAMMABLE XO/VCXO
 *
 * KiCad symbol: `Oscillator:Si571`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SI570*SI571*.
 * @see http://www.silabs.com/Support%20Documents/TechnicalDocs/si570.pdf
 * Keywords: 10 MHZ TO 1.4 GHZ I2C PROGRAMMABLE XO/VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_SI570_SI571_Standard.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si571 extends Component.withPins({
  /** Physical pin 1: Vc; input. */
  "Vc": "1",
  /** Physical pin 2: OE; input. */
  "OE": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CLK+; output. */
  "CLK+": "4",
  /** Physical pin 5: CLK-; output. */
  "CLK-": "5",
  /** Physical pin 6: Vcc; power_in. */
  "Vcc": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
}) {
  override schema = "Oscillator:Si571";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 2.0x1.6mm (with output enable pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-7x-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*2.0x1.6mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_2.0x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_7x_xxE extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-7x-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 2.5x2.0mm (with output enable pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-1x-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*2.5x2.0mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_2.5x2.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_1x_xxE extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-1x-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 2.0x1.6mm (with NC pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-7x-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*2.0x1.6mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_2.0x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_7x_xxN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-7x-xxN";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 2.5x2.0mm (with NC pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-1x-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*2.5x2.0mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_2.5x2.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_1x_xxN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-1x-xxN";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 2.0x1.6mm (with standby pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-7x-xxS`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*2.0x1.6mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_2.0x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_7x_xxS extends Component.withPins({
  /** Physical pin 1: ~{ST}; input. */
  "~{ST}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-7x-xxS";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 2.5x2.0mm (with standby pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-1x-xxS`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*2.5x2.0mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_2.5x2.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_1x_xxS extends Component.withPins({
  /** Physical pin 1: ~{ST}; input. */
  "~{ST}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-1x-xxS";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 3.2x2.5mm (with output enable pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-2x-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*3.2x2.5mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_3.2x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_2x_xxE extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-2x-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 3.2x2.5mm (with NC pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-2x-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*3.2x2.5mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_3.2x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_2x_xxN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-2x-xxN";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 3.2x2.5mm (with standby pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-2x-xxS`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*3.2x2.5mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_3.2x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_2x_xxS extends Component.withPins({
  /** Physical pin 1: ~{ST}; input. */
  "~{ST}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-2x-xxS";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 5.0x3.2mm (with output enable pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-3x-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*5.0x3.2mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_5.0x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_3x_xxE extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-3x-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 5.0x3.2mm (with NC pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-3x-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*5.0x3.2mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_5.0x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_3x_xxN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-3x-xxN";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 5.0x3.2mm (with standby pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-3x-xxS`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*5.0x3.2mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_5.0x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_3x_xxS extends Component.withPins({
  /** Physical pin 1: ~{ST}; input. */
  "~{ST}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-3x-xxS";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 7.0x5.0mm (with output enable pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-8x-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*7.0x5.0mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_7.0x5.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_8x_xxE extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-8x-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 7.0x5.0mm (with NC pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-8x-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*7.0x5.0mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_7.0x5.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_8x_xxN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-8x-xxN";
  override referencePrefix = "Y";
}

/**
 * SiTime Low Power Mems programmable oscillator, 1MHz to 110MHz, PQFN-4, 7.0x5.0mm (with standby pin)
 *
 * KiCad symbol: `Oscillator:SiT8008xx-8x-xxS`. Reference prefix: `Y`.
 * Footprint filters: *PQFN*7.0x5.0mm*.
 * @see https://www.sitime.com/support/resource-library/datasheets/sit8008-datasheet
 * Keywords: Mems.
 * Default footprint: Oscillator:Oscillator_SMD_SiT_PQFN-4Pin_7.0x5.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT8008xx_8x_xxS extends Component.withPins({
  /** Physical pin 1: ~{ST}; input. */
  "~{ST}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:SiT8008xx-8x-xxS";
  override referencePrefix = "Y";
}

/**
 * SiTime Standard Frequency Ultra-low Jitter Differential Oscillator, 25-325MHz, PQFD-6, 3.2x2.5mm (with enable pin)
 *
 * KiCad symbol: `Oscillator:SiT9365xx-xBx-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFD*3.2x2.5mm*.
 * @see https://www.sitime.com/datasheet/SiT9365
 * Keywords: LVDS LVPECL HCSL differential MEMS oscillatior.
 * Default footprint: Oscillator:Oscillator_SMD_SiTime_PQFD-6L_3.2x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT9365xx_xBx_xxE extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT+; output. */
  "OUT+": "4",
  /** Physical pin 5: OUT-; output. */
  "OUT-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:SiT9365xx-xBx-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Standard Frequency Ultra-low Jitter Differential Oscillator, 25-325MHz, PQFD-6, 3.2x2.5mm
 *
 * KiCad symbol: `Oscillator:SiT9365xx-xBx-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFD*3.2x2.5mm*.
 * @see https://www.sitime.com/datasheet/SiT9365
 * Keywords: LVDS LVPECL HCSL differential MEMS oscillatior.
 * Default footprint: Oscillator:Oscillator_SMD_SiTime_PQFD-6L_3.2x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT9365xx_xBx_xxN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT+; output. */
  "OUT+": "4",
  /** Physical pin 5: OUT-; output. */
  "OUT-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:SiT9365xx-xBx-xxN";
  override referencePrefix = "Y";
}

/**
 * SiTime Standard Frequency Ultra-low Jitter Differential Oscillator, 1 MHz and 220MHz, PQFD-6, 3.2x2.5mm (with enable pin)
 *
 * KiCad symbol: `Oscillator:SiT9366xx-xBx-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFD*3.2x2.5mm*.
 * @see https://www.sitime.com/datasheet/SiT9366
 * Keywords: LVDS LVPECL HCSL differential MEMS oscillatior.
 * Default footprint: Oscillator:Oscillator_SMD_SiTime_PQFD-6L_3.2x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT9366xx_xBx_xxE extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT+; output. */
  "OUT+": "4",
  /** Physical pin 5: OUT-; output. */
  "OUT-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:SiT9366xx-xBx-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Standard Frequency Ultra-low Jitter Differential Oscillator, 1 MHz and 220MHz, PQFD-6, 3.2x2.5mm
 *
 * KiCad symbol: `Oscillator:SiT9366xx-xBx-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFD*3.2x2.5mm*.
 * @see https://www.sitime.com/datasheet/SiT9366
 * Keywords: LVDS LVPECL HCSL differential MEMS oscillatior.
 * Default footprint: Oscillator:Oscillator_SMD_SiTime_PQFD-6L_3.2x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT9366xx_xBx_xxN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT+; output. */
  "OUT+": "4",
  /** Physical pin 5: OUT-; output. */
  "OUT-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:SiT9366xx-xBx-xxN";
  override referencePrefix = "Y";
}

/**
 * SiTime Standard Frequency Ultra-low Jitter Differential Oscillator, 220.000001-725MHz, PQFD-6, 3.2x2.5mm (with enable pin)
 *
 * KiCad symbol: `Oscillator:SiT9367xx-xBx-xxE`. Reference prefix: `Y`.
 * Footprint filters: *PQFD*3.2x2.5mm*.
 * @see https://www.sitime.com/datasheet/SiT9367
 * Keywords: LVDS LVPECL HCSL differential MEMS oscillatior.
 * Default footprint: Oscillator:Oscillator_SMD_SiTime_PQFD-6L_3.2x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT9367xx_xBx_xxE extends Component.withPins({
  /** Physical pin 1: OE; input. */
  "OE": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT+; output. */
  "OUT+": "4",
  /** Physical pin 5: OUT-; output. */
  "OUT-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:SiT9367xx-xBx-xxE";
  override referencePrefix = "Y";
}

/**
 * SiTime Standard Frequency Ultra-low Jitter Differential Oscillator, 220.000001-725MHz, PQFD-6, 3.2x2.5mm
 *
 * KiCad symbol: `Oscillator:SiT9367xx-xBx-xxN`. Reference prefix: `Y`.
 * Footprint filters: *PQFD*3.2x2.5mm*.
 * @see https://www.sitime.com/datasheet/SiT9367
 * Keywords: LVDS LVPECL HCSL differential MEMS oscillatior.
 * Default footprint: Oscillator:Oscillator_SMD_SiTime_PQFD-6L_3.2x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SiT9367xx_xBx_xxN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT+; output. */
  "OUT+": "4",
  /** Physical pin 5: OUT-; output. */
  "OUT-": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:SiT9367xx-xBx-xxN";
  override referencePrefix = "Y";
}

/**
 * Temperature Compensated Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:TCXO-14`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.golledge.com/pdf/products/tcxos/gtxos14.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCXO_14 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT; output. */
  "OUT": "8",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:TCXO-14";
  override referencePrefix = "Y";
}

/**
 * Temperature compensated crystal oscillator
 *
 * KiCad symbol: `Oscillator:TCXO3`. Reference prefix: `Y`.
 * @see http://www.hcelectronics.cz/PDF/TCXO3_A.pdf
 * Keywords: Temperature compensated crystal oscillator.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCXO3 extends Component.withPins({
  /** Physical pin 1: FREQ; output. */
  "FREQ": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: URef; power_out. */
  "URef": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: +5V; power_in. */
  "+5V": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: Vctrl; input. */
  "Vctrl": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: GND; power_in. */
  "GND_23": "23",
}) {
  override schema = "Oscillator:TCXO3";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, DIP8-style metal package
 *
 * KiCad symbol: `Oscillator:TFT660`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*8*.
 * @see http://cdn-reichelt.de/documents/datenblatt/B400/OSZI.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TFT660 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
  /** Physical pin 8: Vcc; power_in. */
  "Vcc": "8",
}) {
  override schema = "Oscillator:TFT660";
  override referencePrefix = "Y";
}

/**
 * Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:TFT680`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://cdn-reichelt.de/documents/datenblatt/B400/OSZI.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TFT680 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT; output. */
  "OUT": "8",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:TFT680";
  override referencePrefix = "Y";
}

/**
 * Crystal Oscillator Low Profile / High Stability TCXO
 *
 * KiCad symbol: `Oscillator:TG2520SMN-xx.xxxxxxMhz-xxxxNM`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*SeikoEpson*TG2520*2.5x2.0mm*.
 * @see https://support.epson.biz/td/api/doc_check.php?dl=app_TG2520SMN&lang=en
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_SeikoEpson_TG2520SMN-xxx-xxxxxx-4Pin_2.5x2.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TG2520SMN_xx_xxxxxxMhz_xxxxNM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vcc; power_in. */
  "Vcc": "4",
}) {
  override schema = "Oscillator:TG2520SMN-xx.xxxxxxMhz-xxxxNM";
  override referencePrefix = "Y";
}

/**
 * CMOS SMD Crystal Clock Oscillator, TXC
 *
 * KiCad symbol: `Oscillator:TXC-7C`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*TXC*7C*5.0x3.2mm*.
 * @see http://www.txccorp.com/download/products/osc/7C_o.pdf
 * Keywords: CMOS SMD Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_TXC_7C-4Pin_5.0x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TXC_7C extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: Vdd; power_in. */
  "Vdd": "4",
}) {
  override schema = "Oscillator:TXC-7C";
  override referencePrefix = "Y";
}

/**
 * Voltage-Controlled Crystal Clock Oscillator, DIP8-style metal package
 *
 * KiCad symbol: `Oscillator:VC-81`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*8*.
 * @see http://www.scsiglobal.com/Hosonic/Documents/SCSI-VC-81&83.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VC_81 extends Component.withPins({
  /** Physical pin 1: Vcontrol; input. */
  "Vcontrol": "1",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
  /** Physical pin 8: Vcc; power_in. */
  "Vcc": "8",
}) {
  override schema = "Oscillator:VC-81";
  override referencePrefix = "Y";
}

/**
 * Voltage-Controlled Crystal Clock Oscillator, DIP8-style metal package
 *
 * KiCad symbol: `Oscillator:VC-83`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*8*.
 * @see http://www.scsiglobal.com/Hosonic/Documents/SCSI-VC-81&83.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VC_83 extends Component.withPins({
  /** Physical pin 1: Vcontrol; input. */
  "Vcontrol": "1",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: OUT; output. */
  "OUT": "5",
  /** Physical pin 8: Vcc; power_in. */
  "Vcc": "8",
}) {
  override schema = "Oscillator:VC-83";
  override referencePrefix = "Y";
}

/**
 * Voltage-Controlled Crystal Clock Oscillator, DIP14-style metal package
 *
 * KiCad symbol: `Oscillator:VTCXO-14`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*DIP*14*.
 * @see http://www.golledge.com/pdf/products/tcxos/gtxos14.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_DIP-14.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VTCXO_14 extends Component.withPins({
  /** Physical pin 1: Vcontrol; input. */
  "Vcontrol": "1",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT; output. */
  "OUT": "8",
  /** Physical pin 14: Vcc; power_in. */
  "Vcc": "14",
}) {
  override schema = "Oscillator:VTCXO-14";
  override referencePrefix = "Y";
}

/**
 * HCMOS Clock Oscillator
 *
 * KiCad symbol: `Oscillator:XO32`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*EuroQuartz*XO32*3.2x2.5mm*.
 * @see http://cdn-reichelt.de/documents/datenblatt/B400/XO32.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_EuroQuartz_XO32-4Pin_3.2x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XO32 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
}) {
  override schema = "Oscillator:XO32";
  override referencePrefix = "Y";
}

/**
 * Low Power Consumption Clock Oscillator
 *
 * KiCad symbol: `Oscillator:XO53`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*EuroQuartz*XO53*5.0x3.2mm*.
 * @see http://cdn-reichelt.de/documents/datenblatt/B400/XO53.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_EuroQuartz_XO53-4Pin_5.0x3.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XO53 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
}) {
  override schema = "Oscillator:XO53";
  override referencePrefix = "Y";
}

/**
 * HCMOS Clock Oscillator
 *
 * KiCad symbol: `Oscillator:XO91`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*SMD*EuroQuartz*XO91*7.0x5.0mm*.
 * @see http://cdn-reichelt.de/documents/datenblatt/B400/XO91.pdf
 * Keywords: Crystal Clock Oscillator.
 * Default footprint: Oscillator:Oscillator_SMD_EuroQuartz_XO91-4Pin_7.0x5.0mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XO91 extends Component.withPins({
  /** Physical pin 1: EN; input. */
  "EN": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: OUT; output. */
  "OUT": "3",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
}) {
  override schema = "Oscillator:XO91";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUX51`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JS6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 1.8V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JS6-6_5.0x3.2mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XUX51 extends Component.withPins({
  /** Physical pin 1: E/D; input. */
  "E/D": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: OUT2; output. */
  "OUT2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:XUX51";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUX52`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JS6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 2.5V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JS6-6_5.0x3.2mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XUX52 extends Component.withPins({
  /** Physical pin 1: E/D; input. */
  "E/D": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: OUT2; output. */
  "OUT2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:XUX52";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUX53`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JS6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 3.3V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JS6-6_5.0x3.2mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XUX53 extends Component.withPins({
  /** Physical pin 1: E/D; input. */
  "E/D": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: OUT2; output. */
  "OUT2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:XUX53";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUX71`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JU6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 1.8V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JU6-6_7.0x5.0mm_P2.54mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XUX71 extends Component.withPins({
  /** Physical pin 1: E/D; input. */
  "E/D": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: OUT2; output. */
  "OUT2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:XUX71";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUX72`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JU6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 2.5V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JU6-6_7.0x5.0mm_P2.54mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XUX72 extends Component.withPins({
  /** Physical pin 1: E/D; input. */
  "E/D": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: OUT2; output. */
  "OUT2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:XUX72";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUX73`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JU6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 3.3V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JU6-6_7.0x5.0mm_P2.54mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XUX73 extends Component.withPins({
  /** Physical pin 1: E/D; input. */
  "E/D": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: OUT2; output. */
  "OUT2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:XUX73";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUY51`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JS6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP HCMOS 1.8V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JS6-6_5.0x3.2mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XUY51 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: E/D; input. */
  "E/D": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: OUT2; output. */
  "OUT2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:XUY51";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUY52`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JS6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 2.5V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JS6-6_5.0x3.2mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XUY52 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: E/D; input. */
  "E/D": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: OUT2; output. */
  "OUT2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:XUY52";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUY53`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JS6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 3.3V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JS6-6_5.0x3.2mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XUY53 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: E/D; input. */
  "E/D": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: OUT2; output. */
  "OUT2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:XUY53";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUY71`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JU6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP HCMOS 1.8V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JU6-6_7.0x5.0mm_P2.54mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XUY71 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: E/D; input. */
  "E/D": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: OUT2; output. */
  "OUT2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:XUY71";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUY72`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JU6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 2.5V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JU6-6_7.0x5.0mm_P2.54mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XUY72 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: E/D; input. */
  "E/D": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: OUT2; output. */
  "OUT2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:XUY72";
  override referencePrefix = "Y";
}

/**
 * Low phase noise, quartz-based PLL oscillator, 0.016-1500 MHz, complementary output
 *
 * KiCad symbol: `Oscillator:XUY73`. Reference prefix: `Y`.
 * Footprint filters: Oscillator*JU6*.
 * @see https://www.renesas.com/us/en/document/dst/xu-family-low-phase-noise-quartz-based-pll-oscillators-datasheet
 * Keywords: OTP XHCMOS 3.3V VCXO.
 * Default footprint: Oscillator:Oscillator_SMD_IDT_JU6-6_7.0x5.0mm_P2.54mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XUY73 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: E/D; input. */
  "E/D": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: OUT; output. */
  "OUT": "4",
  /** Physical pin 5: OUT2; output. */
  "OUT2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Oscillator:XUY73";
  override referencePrefix = "Y";
}

