// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Relay SPST, bistable, single-coil, EN50005
 *
 * KiCad symbol: `Relay:Relay_SPST_Latching_1coil`. Reference prefix: `K`.
 * Footprint filters: Relay?SPST*.
 * Keywords: 1P1T single pole throw latching.
 */
export class Relay_SPST_Latching_1coil extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Relay_SPST_Latching_1coil";
  override referencePrefix = "K";
}

/**
 * Panasonic, 8A/16A, Small Polarized Latching Power Relays, Single coil, 1 Form A
 *
 * KiCad symbol: `Relay:ADW11`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ADW11*.
 * @see https://api.pim.na.industrial.panasonic.com/file_stream/main/fileversion/270
 * Keywords: SPST 1P1T latching bistable.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ADW11.
 */
export class ADW11 extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:ADW11";
  override referencePrefix = "K";
}

/**
 * American Zettler, Microminiature Polarised Dual Pole Relay
 *
 * KiCad symbol: `Relay:AZ850-x`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*FRT5*.
 * @see http://www.azettler.com/pdfs/az850.pdf
 * Keywords: Miniature Polarised Relay Dual Pole.
 * Default footprint: Relay_THT:Relay_DPDT_FRT5.
 */
export class AZ850_x extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:AZ850-x";
  override referencePrefix = "K";
}

/**
 * American Zettler, Microminiature Polarised Dual Pole Relay Bistable
 *
 * KiCad symbol: `Relay:AZ850P1-x`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*FRT5*.
 * @see http://www.azettler.com/pdfs/az850.pdf
 * Keywords: Miniature Polarised Relay Dual Pole Bistable.
 * Default footprint: Relay_THT:Relay_DPDT_FRT5.
 */
export class AZ850P1_x extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:AZ850P1-x";
  override referencePrefix = "K";
}

/**
 * American Zettler, Microminiature Polarised Dual Pole Relay Bistable
 *
 * KiCad symbol: `Relay:AZ850P2-x`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*FRT5*.
 * @see http://www.azettler.com/pdfs/az850.pdf
 * Keywords: Miniature Polarised Relay Dual Pole Bistable.
 * Default footprint: Relay_THT:Relay_DPDT_FRT5.
 */
export class AZ850P2_x extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:AZ850P2-x";
  override referencePrefix = "K";
}

/**
 * SPST, Closing Contact, 277VAC 35A max, 12V DC coil voltage
 *
 * KiCad symbol: `Relay:AZSR131-1AE-12D`. Reference prefix: `RL2`.
 * Footprint filters: Relay*AZSR131*.
 * @see https://www.azettler.com/pdfs/azsr131.pdf
 * Keywords: Single Pole Reed Relay SPST.
 * Default footprint: Relay_THT:Relay_SPST_Zettler-AZSR131.
 */
export class AZSR131_1AE_12D extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:AZSR131-1AE-12D";
  override referencePrefix = "RL2";
}

/**
 * Low thermal EMF DPST-NO reed relay, 150V 0.25A, 30.48x16.76x12.06mm
 *
 * KiCad symbol: `Relay:COTO_3602_Split`. Reference prefix: `K`.
 * Footprint filters: *Relay*COTO*3602*.
 * @see https://cotorelay.com/wp-content/uploads/2014/09/3600_series_reed_relay_datasheet.pdf
 * Keywords: reed relay low thermal emf.
 * Default footprint: Relay_THT:Relay_DPST_COTO_3602.
 */
export class COTO_3602_Split extends Component.withPins({
  "PA1": "A1",
  "PA2": "A2",
  "PSH": "SH",
  "P13": "13",
  "P14": "14",
  "P23": "23",
  "P24": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA1: "passive", PA2: "passive", PSH: "passive", P13: "passive", P14: "passive", P23: "passive", P24: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:COTO_3602_Split";
  override referencePrefix = "K";
}

/**
 * Low thermal EMF 3PST-NO reed relay, 150V 0.25A, similar to 3660 but with independent shield, 30.48x16.76x12.06mm
 *
 * KiCad symbol: `Relay:COTO_3650_Split`. Reference prefix: `K`.
 * Footprint filters: *Relay*COTO*3650*.
 * @see https://cotorelay.com/wp-content/uploads/2014/09/3600_series_reed_relay_datasheet.pdf
 * Keywords: reed relay low thermal emf.
 * Default footprint: Relay_THT:Relay_3PST_COTO_3650.
 */
export class COTO_3650_Split extends Component.withPins({
  "PA1": "A1",
  "PA2": "A2",
  "PSH": "SH",
  "P13": "13",
  "P14": "14",
  "P23": "23",
  "P24": "24",
  "P33": "33",
  "P34": "34",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA1: "passive", PA2: "passive", PSH: "passive", P13: "passive", P14: "passive", P23: "passive", P24: "passive", P33: "passive", P34: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:COTO_3650_Split";
  override referencePrefix = "K";
}

/**
 * Low thermal EMF 3PST-NO reed relay, 150V 0.25A, similar to 3650 but with shared shield/contact, 30.48x16.76x12.06mm
 *
 * KiCad symbol: `Relay:COTO_3660_Split`. Reference prefix: `K`.
 * Footprint filters: *Relay*COTO*3660*.
 * @see https://cotorelay.com/wp-content/uploads/2014/09/3600_series_reed_relay_datasheet.pdf
 * Keywords: reed relay low thermal emf.
 * Default footprint: Relay_THT:Relay_3PST_COTO_3660.
 */
export class COTO_3660_Split extends Component.withPins({
  "PA1": "A1",
  "PA2": "A2",
  "P13": "13",
  "P14": "14",
  "P23": "23",
  "P24": "24",
  "P33": "33",
  "P34": "34",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA1: "passive", PA2: "passive", P13: "passive", P14: "passive", P23: "passive", P24: "passive", P33: "passive", P34: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:COTO_3660_Split";
  override referencePrefix = "K";
}

/**
 * Standex Meder DIP reed relay, SPST, Closing Contact
 *
 * KiCad symbol: `Relay:DIPxx-1Axx-11x`. Reference prefix: `K`.
 * Footprint filters: Relay*StandexMeder*DIP*LowProfile*.
 * @see https://standexelectronics.com/wp-content/uploads/datasheet_reed_relay_DIP.pdf
 * Keywords: Single Pole Reed Relay SPST.
 * Default footprint: Relay_THT:Relay_StandexMeder_DIP_LowProfile.
 */
export class DIPxx_1Axx_11x extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "passive", P7: "passive", P8: "passive", P14: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:DIPxx-1Axx-11x";
  override referencePrefix = "K";
}

/**
 * Standex Meder DIP reed relay, SPST, Closing Contact
 *
 * KiCad symbol: `Relay:DIPxx-1Axx-12x`. Reference prefix: `K`.
 * Footprint filters: Relay*StandexMeder*DIP*LowProfile*.
 * @see https://standexelectronics.com/wp-content/uploads/datasheet_reed_relay_DIP.pdf
 * Keywords: Single Pole Reed Relay SPST.
 * Default footprint: Relay_THT:Relay_StandexMeder_DIP_LowProfile.
 */
export class DIPxx_1Axx_12x extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P13": "13",
  "P14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "passive", P7: "passive", P8: "passive", P13: "passive", P14: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:DIPxx-1Axx-12x";
  override referencePrefix = "K";
}

/**
 * Standex Meder DIP reed relay, SPST, Closing Contact, including diode
 *
 * KiCad symbol: `Relay:DIPxx-1Axx-12xD`. Reference prefix: `K`.
 * Footprint filters: Relay*StandexMeder*DIP*LowProfile*.
 * @see https://standexelectronics.com/wp-content/uploads/datasheet_reed_relay_DIP.pdf
 * Keywords: Single Pole Reed Relay SPST.
 * Default footprint: Relay_THT:Relay_StandexMeder_DIP_LowProfile.
 */
export class DIPxx_1Axx_12xD extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P13": "13",
  "P14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "passive", P7: "passive", P8: "passive", P13: "passive", P14: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:DIPxx-1Axx-12xD";
  override referencePrefix = "K";
}

/**
 * Standex Meder DIP reed relay, SPST, Closing Contact
 *
 * KiCad symbol: `Relay:DIPxx-1Axx-13x`. Reference prefix: `K`.
 * Footprint filters: Relay*StandexMeder*DIP*LowProfile*.
 * @see https://standexelectronics.com/wp-content/uploads/datasheet_reed_relay_DIP.pdf
 * Keywords: Single Pole Reed Relay SPST.
 * Default footprint: Relay_THT:Relay_StandexMeder_DIP_LowProfile.
 */
export class DIPxx_1Axx_13x extends Component.withPins({
  "P2": "2",
  "P6": "6",
  "P8": "8",
  "P14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "passive", P6: "passive", P8: "passive", P14: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:DIPxx-1Axx-13x";
  override referencePrefix = "K";
}

/**
 * Standex Meder DIP reed relay, SPDT
 *
 * KiCad symbol: `Relay:DIPxx-1Cxx-51x`. Reference prefix: `K`.
 * Footprint filters: Relay*StandexMeder*DIP*LowProfile*.
 * @see https://standexelectronics.com/wp-content/uploads/datasheet_reed_relay_DIP.pdf
 * Keywords: Single Pole Reed Relay SPDT.
 * Default footprint: Relay_THT:Relay_StandexMeder_DIP_LowProfile.
 */
export class DIPxx_1Cxx_51x extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "passive", P7: "passive", P8: "passive", P14: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:DIPxx-1Cxx-51x";
  override referencePrefix = "K";
}

/**
 * Standex Meder DIP reed relay, DPST, Closing Contacts
 *
 * KiCad symbol: `Relay:DIPxx-2Axx-21x`. Reference prefix: `K`.
 * Footprint filters: Relay*StandexMeder*DIP*LowProfile*.
 * @see https://standexelectronics.com/wp-content/uploads/datasheet_reed_relay_DIP.pdf
 * Keywords: Single Pole Reed Relay DPST.
 * Default footprint: Relay_THT:Relay_StandexMeder_DIP_LowProfile.
 */
export class DIPxx_2Axx_21x extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P6: "passive", P7: "passive", P8: "passive", P14: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:DIPxx-2Axx-21x";
  override referencePrefix = "K";
}

/**
 * 3V DC, Single side stable, Polarized Coil, High speed
 *
 * KiCad symbol: `Relay:DR-3V`. Reference prefix: `K`.
 * Footprint filters: *Relay*SPDT*Panasonic?DR*.
 * @see https://www.panasonic-electric-works.com/pew/de/downloads/ds_dr_en_discon.pdf
 * Keywords: highly reliable.
 * Default footprint: Relay_THT:Relay_SPDT_Panasonic_DR.
 */
export class DR_3V extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
  "Earth": "PE",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", Earth: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:DR-3V";
  override referencePrefix = "K";
}

/**
 * 5V DC, Single side stable, Polarized Coil, High speed
 *
 * KiCad symbol: `Relay:DR-24V`. Reference prefix: `K`.
 * Footprint filters: *Relay*SPDT*Panasonic?DR*.
 * @see https://mediap.industry.panasonic.eu/assets/download-files/import/ds_dr_en_discon.pdf
 * Keywords: highly reliable.
 * Default footprint: Relay_THT:Relay_SPDT_Panasonic_DR.
 */
export class DR_24V extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
  "Earth": "PE",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", Earth: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:DR-24V";
  override referencePrefix = "K";
}

/**
 * 5V DC, Single side stable, Polarized Coil, High speed
 *
 * KiCad symbol: `Relay:DR-5V`. Reference prefix: `K`.
 * Footprint filters: *Relay*SPDT*Panasonic?DR*.
 * @see https://mediap.industry.panasonic.eu/assets/download-files/import/ds_dr_en_discon.pdf
 * Keywords: highly reliable.
 * Default footprint: Relay_THT:Relay_SPDT_Panasonic_DR.
 */
export class DR_5V extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
  "Earth": "PE",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", Earth: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:DR-5V";
  override referencePrefix = "K";
}

/**
 * 3V DC, 1 Latching Polarized Coil, High speed
 *
 * KiCad symbol: `Relay:DR-L-3V`. Reference prefix: `K`.
 * Footprint filters: *Relay*SPDT*Panasonic?DR?L*.
 * @see https://mediap.industry.panasonic.eu/assets/download-files/import/ds_dr_en_discon.pdf
 * Keywords: higly reliable single latch.
 * Default footprint: Relay_THT:Relay_SPDT_Panasonic_DR-L.
 */
export class DR_L_3V extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
  "Earth": "PE",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", Earth: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:DR-L-3V";
  override referencePrefix = "K";
}

/**
 * 3V DC, 2 Latching Polarized Coils, Set A1, High speed
 *
 * KiCad symbol: `Relay:DR-L2-3V_Form1`. Reference prefix: `K`.
 * Footprint filters: *Relay*SPDT*Panasonic?DR?L2*.
 * @see https://mediap.industry.panasonic.eu/assets/download-files/import/ds_dr_en_discon.pdf
 * Keywords: highly reliable dual latch.
 * Default footprint: Relay_THT:Relay_SPDT_Panasonic_DR-L2.
 */
export class DR_L2_3V_Form1 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
  "PB1": "B1",
  "PB2": "B2",
  "Earth": "PE",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", PB1: "passive", PB2: "passive", Earth: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:DR-L2-3V_Form1";
  override referencePrefix = "K";
}

/**
 * 3V DC, 2 Latching Polarized Coils, Set B1, High speed
 *
 * KiCad symbol: `Relay:DR-L2-3V_Form2`. Reference prefix: `K`.
 * Footprint filters: *Relay*SPDT*Panasonic?DR?L2*.
 * @see https://mediap.industry.panasonic.eu/assets/download-files/import/ds_dr_en_discon.pdf
 * Keywords: highly reliable dual latch.
 * Default footprint: Relay_THT:Relay_SPDT_Panasonic_DR-L2.
 */
export class DR_L2_3V_Form2 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
  "PB1": "B1",
  "PB2": "B2",
  "Earth": "PE",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", PB1: "passive", PB2: "passive", Earth: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:DR-L2-3V_Form2";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), non-latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 3V DC coil
 *
 * KiCad symbol: `Relay:EC2-3NU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU.
 */
export class EC2_3NU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-3NU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), non-latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 12V DC coil
 *
 * KiCad symbol: `Relay:EC2-12NU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU.
 */
export class EC2_12NU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-12NU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), single coil latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 3V DC coil
 *
 * KiCad symbol: `Relay:EC2-3SNU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU.
 */
export class EC2_3SNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-3SNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), single coil latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 12V DC coil
 *
 * KiCad symbol: `Relay:EC2-12SNU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU.
 */
export class EC2_12SNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-12SNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), double coil latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 3V DC coil
 *
 * KiCad symbol: `Relay:EC2-3TNU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU_DoubleCoil.
 */
export class EC2_3TNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-3TNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), double coil latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 12V DC coil
 *
 * KiCad symbol: `Relay:EC2-12TNU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU_DoubleCoil.
 */
export class EC2_12TNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-12TNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), non-latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 24V DC coil
 *
 * KiCad symbol: `Relay:EC2-24NU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU.
 */
export class EC2_24NU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-24NU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), single coil latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 24V DC coil
 *
 * KiCad symbol: `Relay:EC2-24SNU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU.
 */
export class EC2_24SNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-24SNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), double coil latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 24V DC coil
 *
 * KiCad symbol: `Relay:EC2-24TNU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU_DoubleCoil.
 */
export class EC2_24TNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-24TNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), non-latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 4.5V DC coil
 *
 * KiCad symbol: `Relay:EC2-4.5NU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU.
 */
export class EC2_4_5NU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-4.5NU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), single coil latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 4.5V DC coil
 *
 * KiCad symbol: `Relay:EC2-4.5SNU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU.
 */
export class EC2_4_5SNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-4.5SNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), double coil latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 4.5V DC coil
 *
 * KiCad symbol: `Relay:EC2-4.5TNU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU_DoubleCoil.
 */
export class EC2_4_5TNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-4.5TNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), non-latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 5V DC coil
 *
 * KiCad symbol: `Relay:EC2-5NU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU.
 */
export class EC2_5NU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-5NU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), single coil latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 5V DC coil
 *
 * KiCad symbol: `Relay:EC2-5SNU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU.
 */
export class EC2_5SNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-5SNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EC2 Series, DPDT (2 Form C), double coil latching, through hole, 60W/125VA, 220VDC/250VAC, 2A, 5V DC coil
 *
 * KiCad symbol: `Relay:EC2-5TNU`. Reference prefix: `K`.
 * Footprint filters: Relay*Kemet*EC2*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_THT:Relay_DPDT_Kemet_EC2_NU_DoubleCoil.
 */
export class EC2_5TNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EC2-5TNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, high breakdown voltage, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 3V DC coil
 *
 * KiCad symbol: `Relay:EE2-3NKX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NKX*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_NKX.
 */
export class EE2_3NKX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-3NKX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, high breakdown voltage, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 12V DC coil
 *
 * KiCad symbol: `Relay:EE2-12NKX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NKX*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_NKX.
 */
export class EE2_12NKX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-12NKX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 3V DC coil
 *
 * KiCad symbol: `Relay:EE2-3NU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU.
 */
export class EE2_3NU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-3NU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 12V DC coil
 *
 * KiCad symbol: `Relay:EE2-12NU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU.
 */
export class EE2_12NU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-12NU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 3V DC coil
 *
 * KiCad symbol: `Relay:EE2-3NUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH.
 */
export class EE2_3NUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-3NUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 12V DC coil
 *
 * KiCad symbol: `Relay:EE2-12NUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH.
 */
export class EE2_12NUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-12NUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 3V DC coil
 *
 * KiCad symbol: `Relay:EE2-3NUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_NKX.
 */
export class EE2_3NUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-3NUX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 12V DC coil
 *
 * KiCad symbol: `Relay:EE2-12NUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_NKX.
 */
export class EE2_12NUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-12NUX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 3V DC coil
 *
 * KiCad symbol: `Relay:EE2-3SNU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU.
 */
export class EE2_3SNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-3SNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 12V DC coil
 *
 * KiCad symbol: `Relay:EE2-12SNU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU.
 */
export class EE2_12SNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-12SNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 3V DC coil
 *
 * KiCad symbol: `Relay:EE2-3SNUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH.
 */
export class EE2_3SNUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-3SNUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 12V DC coil
 *
 * KiCad symbol: `Relay:EE2-12SNUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH.
 */
export class EE2_12SNUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-12SNUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 3V DC coil
 *
 * KiCad symbol: `Relay:EE2-3SNUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_NKX.
 */
export class EE2_3SNUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-3SNUX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 12V DC coil
 *
 * KiCad symbol: `Relay:EE2-12SNUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_NKX.
 */
export class EE2_12SNUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-12SNUX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 3V DC coil
 *
 * KiCad symbol: `Relay:EE2-3TNU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU_DoubleCoil.
 */
export class EE2_3TNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-3TNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 12V DC coil
 *
 * KiCad symbol: `Relay:EE2-12TNU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU_DoubleCoil.
 */
export class EE2_12TNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-12TNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 3V DC coil
 *
 * KiCad symbol: `Relay:EE2-3TNUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH_DoubleCoil.
 */
export class EE2_3TNUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-3TNUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 12V DC coil
 *
 * KiCad symbol: `Relay:EE2-12TNUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH_DoubleCoil.
 */
export class EE2_12TNUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-12TNUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 3V DC coil
 *
 * KiCad symbol: `Relay:EE2-3TNUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_DoubleCoil.
 */
export class EE2_3TNUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-3TNUX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 12V DC coil
 *
 * KiCad symbol: `Relay:EE2-12TNUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_DoubleCoil.
 */
export class EE2_12TNUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-12TNUX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 24V DC coil
 *
 * KiCad symbol: `Relay:EE2-24NU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU.
 */
export class EE2_24NU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-24NU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 24V DC coil
 *
 * KiCad symbol: `Relay:EE2-24NUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH.
 */
export class EE2_24NUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-24NUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 24V DC coil
 *
 * KiCad symbol: `Relay:EE2-24NUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_NKX.
 */
export class EE2_24NUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-24NUX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 24V DC coil
 *
 * KiCad symbol: `Relay:EE2-24SNU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU.
 */
export class EE2_24SNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-24SNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 24V DC coil
 *
 * KiCad symbol: `Relay:EE2-24SNUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH.
 */
export class EE2_24SNUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-24SNUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 24V DC coil
 *
 * KiCad symbol: `Relay:EE2-24SNUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_NKX.
 */
export class EE2_24SNUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-24SNUX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 24V DC coil
 *
 * KiCad symbol: `Relay:EE2-24TNU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU_DoubleCoil.
 */
export class EE2_24TNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-24TNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 24V DC coil
 *
 * KiCad symbol: `Relay:EE2-24TNUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH_DoubleCoil.
 */
export class EE2_24TNUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-24TNUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 24V DC coil
 *
 * KiCad symbol: `Relay:EE2-24TNUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_DoubleCoil.
 */
export class EE2_24TNUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-24TNUX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, high breakdown voltage, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 4.5V DC coil
 *
 * KiCad symbol: `Relay:EE2-4.5NKX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NKX*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_NKX.
 */
export class EE2_4_5NKX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-4.5NKX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 4.5V DC coil
 *
 * KiCad symbol: `Relay:EE2-4.5NU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU.
 */
export class EE2_4_5NU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-4.5NU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 4.5V DC coil
 *
 * KiCad symbol: `Relay:EE2-4.5NUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH.
 */
export class EE2_4_5NUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-4.5NUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 4.5V DC coil
 *
 * KiCad symbol: `Relay:EE2-4.5NUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_NKX.
 */
export class EE2_4_5NUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-4.5NUX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 4.5V DC coil
 *
 * KiCad symbol: `Relay:EE2-4.5SNU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU.
 */
export class EE2_4_5SNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-4.5SNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 4.5V DC coil
 *
 * KiCad symbol: `Relay:EE2-4.5SNUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH.
 */
export class EE2_4_5SNUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-4.5SNUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 4.5V DC coil
 *
 * KiCad symbol: `Relay:EE2-4.5SNUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_NKX.
 */
export class EE2_4_5SNUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-4.5SNUX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 4.5V DC coil
 *
 * KiCad symbol: `Relay:EE2-4.5TNU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU_DoubleCoil.
 */
export class EE2_4_5TNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-4.5TNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 4.5V DC coil
 *
 * KiCad symbol: `Relay:EE2-4.5TNUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH_DoubleCoil.
 */
export class EE2_4_5TNUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-4.5TNUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 4.5V DC coil
 *
 * KiCad symbol: `Relay:EE2-4.5TNUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_DoubleCoil.
 */
export class EE2_4_5TNUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-4.5TNUX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 5V DC coil
 *
 * KiCad symbol: `Relay:EE2-5NU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU.
 */
export class EE2_5NU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-5NU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 5V DC coil
 *
 * KiCad symbol: `Relay:EE2-5NUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH.
 */
export class EE2_5NUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-5NUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), non-latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 5V DC coil
 *
 * KiCad symbol: `Relay:EE2-5NUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil non latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_NKX.
 */
export class EE2_5NUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-5NUX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 5V DC coil
 *
 * KiCad symbol: `Relay:EE2-5SNU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU.
 */
export class EE2_5SNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-5SNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 5V DC coil
 *
 * KiCad symbol: `Relay:EE2-5SNUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH.
 */
export class EE2_5SNUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-5SNUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), single coil latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 5V DC coil
 *
 * KiCad symbol: `Relay:EE2-5SNUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil single coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_NKX.
 */
export class EE2_5SNUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-5SNUX";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, SMD, 60W/125VA, 220VDC/250VAC, 2A, 5V DC coil
 *
 * KiCad symbol: `Relay:EE2-5TNU`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NU*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NU_DoubleCoil.
 */
export class EE2_5TNU extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-5TNU";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, small footprint SMD, 60W/125VA, 220VDC/250VAC, 2A, 5V DC coil
 *
 * KiCad symbol: `Relay:EE2-5TNUH`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUH*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUH_DoubleCoil.
 */
export class EE2_5TNUH extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-5TNUH";
  override referencePrefix = "K";
}

/**
 * General purpose signal relay, Kemet EE2 Series, DPDT (2 Form C), double coil latching, high solder joint reliability SMD, 60W/125VA, 220VDC/250VAC, 2A, 5V DC coil
 *
 * KiCad symbol: `Relay:EE2-5TNUX`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Kemet*EE2*NUX*DoubleCoil*.
 * @see https://content.kemet.com/datasheets/KEM_R7002_EC2_EE2.pdf
 * Keywords: signal relay double pole double throw DPDT DC coil double dual coil latching.
 * Default footprint: Relay_SMD:Relay_DPDT_Kemet_EE2_NUX_DoubleCoil.
 */
export class EE2_5TNUX extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:EE2-5TNUX";
  override referencePrefix = "K";
}

/**
 * FINDER 30.52, Dual Pole Relay, Subminiature 5mm Pitch, 2A
 *
 * KiCad symbol: `Relay:FINDER-30.22`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Finder*30.22*.
 * @see http://gfinder.findernet.com/assets/Series/354/S30EN.pdf
 * Keywords: Dual Pole Relay.
 * Default footprint: Relay_THT:Relay_DPDT_Finder_30.22.
 */
export class FINDER_30_22 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-30.22";
  override referencePrefix = "K";
}

/**
 * FINDER 32.21-x000, Single Pole Relay, 6A
 *
 * KiCad symbol: `Relay:FINDER-32.21-x000`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Finder*32.21*x000*.
 * @see https://gfinder.findernet.com/assets/Series/355/S32EN.pdf
 * Keywords: Single Pole Relay.
 * Default footprint: Relay_THT:Relay_SPDT_Finder_32.21-x000.
 */
export class FINDER_32_21_x000 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-32.21-x000";
  override referencePrefix = "K";
}

/**
 * FINDER 32.21-x300, Single Pole Relay SPST-NO, 6A
 *
 * KiCad symbol: `Relay:FINDER-32.21-x300`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Finder*32.21*x300*.
 * @see http://gfinder.findernet.com/assets/Series/355/S32EN.pdf
 * Keywords: Single Pole Relay SPST-NO.
 * Default footprint: Relay_THT:Relay_SPST_Finder_32.21-x300.
 */
export class FINDER_32_21_x300 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-32.21-x300";
  override referencePrefix = "K";
}

/**
 * Ultra-slim 1 Pole - 6A SPDT relay
 *
 * KiCad symbol: `Relay:FINDER-34.51`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Finder*34.51*.
 * @see https://gfinder.findernet.com/public/attachments/34/EN/S34USAEN.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_THT:Relay_SPDT_Finder_34.51_Vertical.
 */
export class FINDER_34_51 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-34.51";
  override referencePrefix = "K";
}

/**
 * Ultra-slim 1 Pole - 6A SPDT relay
 *
 * KiCad symbol: `Relay:FINDER-34.51.7xxx.x019`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Finder*34.51*Horizontal*.
 * @see https://gfinder.findernet.com/public/attachments/34/EN/S34USAEN.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_THT:Relay_SPDT_Finder_34.51_Horizontal.
 */
export class FINDER_34_51_7xxx_x019 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-34.51.7xxx.x019";
  override referencePrefix = "K";
}

/**
 * FINDER 36.11, SPDT relay, 10A
 *
 * KiCad symbol: `Relay:FINDER-36.11`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Finder*36.11*.
 * @see https://gfinder.findernet.com/public/attachments/36/EN/S36EN.pdf
 * Keywords: spdt relay.
 * Default footprint: Relay_THT:Relay_SPDT_Finder_36.11.
 */
export class FINDER_36_11 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-36.11";
  override referencePrefix = "K";
}

/**
 * PCB SPDT relay, 10A
 *
 * KiCad symbol: `Relay:FINDER-40.11`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Finder*40.11*.
 * @see https://www.finder-relais.net/de/finder-relais-serie-40.pdf
 * Keywords: Single Pole Relay SPDT Finder.
 * Default footprint: Relay_THT:Relay_SPDT_Finder_40.11.
 */
export class FINDER_40_11 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-40.11";
  override referencePrefix = "K";
}

/**
 * PCB SPDT relay, 16A
 *
 * KiCad symbol: `Relay:FINDER-40.11-2016`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Finder*40.11*.
 * @see https://www.finder-relais.net/de/finder-relais-serie-40.pdf
 * Keywords: Single Pole Relay SPDT Finder.
 * Default footprint: Relay_THT:Relay_SPDT_Finder_40.11.
 */
export class FINDER_40_11_2016 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-40.11-2016";
  override referencePrefix = "K";
}

/**
 * FINDER 40.31, Single Pole Relay, 3.5mm Pitch, 10A
 *
 * KiCad symbol: `Relay:FINDER-40.31`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Finder*40.31*.
 * @see http://gfinder.findernet.com/assets/Series/353/S40EN.pdf
 * Keywords: Single Pole Relay.
 * Default footprint: Relay_THT:Relay_SPDT_Finder_40.31.
 */
export class FINDER_40_31 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-40.31";
  override referencePrefix = "K";
}

/**
 * PCB SPDT relay, 10A
 *
 * KiCad symbol: `Relay:FINDER-40.41`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Finder*40.41*.
 * @see https://www.finder-relais.net/de/finder-relais-serie-40.pdf
 * Keywords: Single Pole Relay SPDT Finder.
 * Default footprint: Relay_THT:Relay_SPDT_Finder_40.41.
 */
export class FINDER_40_41 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-40.41";
  override referencePrefix = "K";
}

/**
 * FINDER 40.51, Single Pole Relay, 5mm Pitch, 10A
 *
 * KiCad symbol: `Relay:FINDER-40.51`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Finder*40.51*.
 * @see http://gfinder.findernet.com/assets/Series/353/S40EN.pdf
 * Keywords: Single Pole Relay.
 * Default footprint: Relay_THT:Relay_SPDT_Finder_40.51.
 */
export class FINDER_40_51 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-40.51";
  override referencePrefix = "K";
}

/**
 * FINDER 40.52, Dual Pole Relay, 5mm Pitch, 10A
 *
 * KiCad symbol: `Relay:FINDER-40.52`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Finder*40.52*.
 * @see http://gfinder.findernet.com/assets/Series/353/S40EN.pdf
 * Keywords: Dual Pole Relay.
 * Default footprint: Relay_THT:Relay_DPDT_Finder_40.52.
 */
export class FINDER_40_52 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-40.52";
  override referencePrefix = "K";
}

/**
 * FINDER 41.52, Dual Pole Relay, 5mm Pitch, 8A
 *
 * KiCad symbol: `Relay:FINDER-41.52`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Finder*40.52*.
 * @see http://gfinder.findernet.com/assets/Series/357/S41EN.pdf
 * Keywords: Dual Pole Relay.
 * Default footprint: Relay_THT:Relay_DPDT_Finder_40.52.
 */
export class FINDER_41_52 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-41.52";
  override referencePrefix = "K";
}

/**
 * FINDER 44.52, Dual Pole Relay, 5mm Pitch, 6A
 *
 * KiCad symbol: `Relay:FINDER-44.52`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Finder*40.52*.
 * @see http://gfinder.findernet.com/assets/Series/359/S44EN.pdf
 * Keywords: Dual Pole Relay.
 * Default footprint: Relay_THT:Relay_DPDT_Finder_40.52.
 */
export class FINDER_44_52 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-44.52";
  override referencePrefix = "K";
}

/**
 * FINDER 44.62, Dual Pole Relay, 5mm Pitch, 10A
 *
 * KiCad symbol: `Relay:FINDER-44.62`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Finder*40.52*.
 * @see http://gfinder.findernet.com/assets/Series/359/S44EN.pdf
 * Keywords: Dual Pole Relay.
 * Default footprint: Relay_THT:Relay_DPDT_Finder_40.52.
 */
export class FINDER_44_62 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FINDER-44.62";
  override referencePrefix = "K";
}

/**
 * FORWARD INDUSTRIAL, Miniature Dual Pole Relay, DIP-like package
 *
 * KiCad symbol: `Relay:FRT5`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*FRT5*.
 * @see https://www.elpro.org/de/index.php?controller=attachment&id_attachment=8663
 * Keywords: relay monostable.
 * Default footprint: Relay_THT:Relay_DPDT_FRT5.
 */
export class FRT5 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FRT5";
  override referencePrefix = "K";
}

/**
 * FORWARD INDUSTRIAL, Miniature Dual Pole Relay, DIP-like package, separate subsymbols
 *
 * KiCad symbol: `Relay:FRT5_separated`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*FRT5*.
 * @see https://www.elpro.org/de/index.php?controller=attachment&id_attachment=8663
 * Keywords: relay monostable.
 * Default footprint: Relay_THT:Relay_DPDT_FRT5.
 */
export class FRT5_separated extends Component.withPins({
  "P1": "1",
  "P10": "10",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P7": "7",
  "P8": "8",
  "P9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P10: "passive", P2: "passive", P3: "passive", P4: "passive", P7: "passive", P8: "passive", P9: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:FRT5_separated";
  override referencePrefix = "K";
}

/**
 * Fujitsu Low Profile Power Relay
 *
 * KiCad symbol: `Relay:Fujitsu_FTR-F1A`. Reference prefix: `K`.
 * Footprint filters: *Relay*DPST*Fujitsu*FTR*F1A*.
 * @see https://www.fcl.fujitsu.com/downloads/MICRO/fcai/relays/ftr-f1.pdf
 * Keywords: double pole single throw relay.
 * Default footprint: Relay_THT:Relay_DPST_Fujitsu_FTR-F1A.
 */
export class Fujitsu_FTR_F1A extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "P5": "5",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P4: "passive", P5: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Fujitsu_FTR-F1A";
  override referencePrefix = "K";
}

/**
 * Fujitsu Low Profile Power Relay
 *
 * KiCad symbol: `Relay:Fujitsu_FTR-F1C`. Reference prefix: `K`.
 * Footprint filters: *Relay*DPDT*Fujitsu*FTR*F1C*.
 * @see https://www.fcl.fujitsu.com/downloads/MICRO/fcai/relays/ftr-f1.pdf
 * Keywords: double pole double throw relay.
 * Default footprint: Relay_THT:Relay_DPDT_Fujitsu_FTR-F1C.
 */
export class Fujitsu_FTR_F1C extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Fujitsu_FTR-F1C";
  override referencePrefix = "K";
}

/**
 * Relay SPST, normally open, EN50005
 *
 * KiCad symbol: `Relay:Relay_SPST-NO`. Reference prefix: `K`.
 * Footprint filters: Relay?SPST*.
 * Keywords: 1P1T 1-Form-A single pole throw NO.
 */
export class Relay_SPST_NO extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Relay_SPST-NO";
  override referencePrefix = "K";
}

/**
 * Relay, SPST Form A, vertical mount, 5-60V coil, 6A, 250VAC, 28 x 5 x 15mm
 *
 * KiCad symbol: `Relay:Fujitsu_FTR-LYAA005x`. Reference prefix: `K`.
 * Footprint filters: Relay*Fujitsu*FTR?LYA*.
 * @see https://www.fujitsu.com/sg/imagesgig5/ftr-ly.pdf
 * Keywords: 6A SPST-NO Relay.
 * Default footprint: Relay_THT:Relay_SPST-NO_Fujitsu_FTR-LYAA005x_FormA_Vertical.
 */
export class Fujitsu_FTR_LYAA005x extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Fujitsu_FTR-LYAA005x";
  override referencePrefix = "K";
}

/**
 * Relay SPDT, monostable, EN50005
 *
 * KiCad symbol: `Relay:Relay_SPDT`. Reference prefix: `K`.
 * Footprint filters: Relay?SPDT*.
 * Keywords: 1P2T 1-Form-C single pole throw.
 */
export class Relay_SPDT extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Relay_SPDT";
  override referencePrefix = "K";
}

/**
 * Relay, SPDT Form C, vertical mount, 5-60V coil, 6A, 250VAC, 28 x 5 x 15mm
 *
 * KiCad symbol: `Relay:Fujitsu_FTR-LYCA005x`. Reference prefix: `K`.
 * Footprint filters: Relay*Fujitsu*FTR?LYC*.
 * @see https://www.fujitsu.com/sg/imagesgig5/ftr-ly.pdf
 * Keywords: 6A SPDT Relay.
 * Default footprint: Relay_THT:Relay_SPDT_Fujitsu_FTR-LYCA005x_FormC_Vertical.
 */
export class Fujitsu_FTR_LYCA005x extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Fujitsu_FTR-LYCA005x";
  override referencePrefix = "K";
}

/**
 * General Purpose Low Profile Relay SPDT Through Hole, Omron G2RL series, 12A 250VAC
 *
 * KiCad symbol: `Relay:G2RL-1`. Reference prefix: `K`.
 * Footprint filters: Relay?SPDT?Omron?G2RL*.
 * @see https://omronfs.omron.com/en_US/ecb/products/pdf/en-g2rl.pdf
 * Keywords: Single Pole Relay SPDT Omron.
 * Default footprint: Relay_THT:Relay_SPDT_Omron_G2RL-1.
 */
export class G2RL_1 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G2RL-1";
  override referencePrefix = "K";
}

/**
 * General Purpose Low Profile Relay SPDT Through Hole High Capacity, Omron G2RL series, 16A 250VAC
 *
 * KiCad symbol: `Relay:G2RL-1-E`. Reference prefix: `K`.
 * Footprint filters: Relay?SPDT?Omron?G2RL*E*.
 * @see https://omronfs.omron.com/en_US/ecb/products/pdf/en-g2rl.pdf
 * Keywords: Single Pole Relay SPDT Omron High Capacity.
 * Default footprint: Relay_THT:Relay_SPDT_Omron_G2RL-1-E.
 */
export class G2RL_1_E extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G2RL-1-E";
  override referencePrefix = "K";
}

/**
 * General Purpose Low Profile Relay SPDT Through Hole, Omron G2RL series, High Sensitivity, 10A 250VAC
 *
 * KiCad symbol: `Relay:G2RL-1-H`. Reference prefix: `K`.
 * Footprint filters: Relay?SPDT?Omron?G2RL*.
 * @see https://omronfs.omron.com/en_US/ecb/products/pdf/en-g2rl.pdf
 * Keywords: Single Pole Relay SPDT Omron High Sensitivity.
 * Default footprint: Relay_THT:Relay_SPDT_Omron_G2RL-1.
 */
export class G2RL_1_H extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G2RL-1-H";
  override referencePrefix = "K";
}

/**
 * General Purpose Low Profile Relay SPST Through Hole, Omron G2RL series, Normally Open, 12A 250VAC
 *
 * KiCad symbol: `Relay:G2RL-1A`. Reference prefix: `K`.
 * Footprint filters: Relay?SPST?Omron?G2RL*.
 * @see https://omronfs.omron.com/en_US/ecb/products/pdf/en-g2rl.pdf
 * Keywords: Single Pole Relay SPST Omron NO.
 * Default footprint: Relay_THT:Relay_SPST_Omron_G2RL-1A.
 */
export class G2RL_1A extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G2RL-1A";
  override referencePrefix = "K";
}

/**
 * General Purpose Low Profile Relay SPST Through Hole High Capacity, Omron G2RL series, Normally Open, 16A 250VAC
 *
 * KiCad symbol: `Relay:G2RL-1A-E`. Reference prefix: `K`.
 * Footprint filters: Relay?SPST?Omron?G2RL*E*.
 * @see https://omronfs.omron.com/en_US/ecb/products/pdf/en-g2rl.pdf
 * Keywords: Single Pole Relay SPST Omron NO High Capacity.
 * Default footprint: Relay_THT:Relay_SPST_Omron_G2RL-1A-E.
 */
export class G2RL_1A_E extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G2RL-1A-E";
  override referencePrefix = "K";
}

/**
 * General Purpose Low Profile Relay SPST Through Hole, Omron G2RL series, Normally Open, High Sensitivity, 10A 250VAC
 *
 * KiCad symbol: `Relay:G2RL-1A-H`. Reference prefix: `K`.
 * Footprint filters: Relay?SPST?Omron?G2RL*.
 * @see https://omronfs.omron.com/en_US/ecb/products/pdf/en-g2rl.pdf
 * Keywords: Single Pole Relay SPST Omron NO High Sensitivity.
 * Default footprint: Relay_THT:Relay_SPST_Omron_G2RL-1A.
 */
export class G2RL_1A_H extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G2RL-1A-H";
  override referencePrefix = "K";
}

/**
 * Relay DPDT, monostable, EN50005
 *
 * KiCad symbol: `Relay:Relay_DPDT`. Reference prefix: `K`.
 * Footprint filters: Relay?DPDT*.
 * Keywords: 2P2T 2-Form-C double dual throw pole.
 */
export class Relay_DPDT extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Relay_DPDT";
  override referencePrefix = "K";
}

/**
 * General Purpose Low Profile Relay DPDT Through Hole, Omron G2RL series, 8A 250VAC
 *
 * KiCad symbol: `Relay:G2RL-2`. Reference prefix: `K`.
 * Footprint filters: Relay?DPDT?Omron?G2RL*.
 * @see https://omronfs.omron.com/en_US/ecb/products/pdf/en-g2rl.pdf
 * Keywords: Dual Pole Relay Omron DPDT.
 * Default footprint: Relay_THT:Relay_DPDT_Omron_G2RL-2.
 */
export class G2RL_2 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G2RL-2";
  override referencePrefix = "K";
}

/**
 * Relay DPST, monostable, normally open, EN50005
 *
 * KiCad symbol: `Relay:Relay_DPST-NO`. Reference prefix: `K`.
 * Footprint filters: Relay?DPST*.
 * Keywords: 2P2T 2-Form-A double dual pole throw NO.
 */
export class Relay_DPST_NO extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "P23": "23",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", P23: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Relay_DPST-NO";
  override referencePrefix = "K";
}

/**
 * General Purpose Low Profile Relay DPST Through Hole, Omron G2RL series, Normally Open,  8A 250VAC
 *
 * KiCad symbol: `Relay:G2RL-2A`. Reference prefix: `K`.
 * Footprint filters: Relay?DPST?Omron?G2RL*.
 * @see https://omronfs.omron.com/en_US/ecb/products/pdf/en-g2rl.pdf
 * Keywords: Dual Pole Relay Omron DPST NO.
 * Default footprint: Relay_THT:Relay_DPST_Omron_G2RL-2A.
 */
export class G2RL_2A extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "P23": "23",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", P23: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G2RL-2A";
  override referencePrefix = "K";
}

/**
 * Omron G5LE relay, Miniature Single Pole, SPDT, 10A
 *
 * KiCad symbol: `Relay:G5LE-1`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Omron*G5LE?1*.
 * @see http://www.omron.com/ecb/products/pdf/en-g5le.pdf
 * Keywords: Miniature Single Pole Relay.
 * Default footprint: Relay_THT:Relay_SPDT_Omron-G5LE-1.
 */
export class G5LE_1 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G5LE-1";
  override referencePrefix = "K";
}

/**
 * PCB Power Relay, SPST-NO, 7A (250 VAC), 5A (30 VDC)
 *
 * KiCad symbol: `Relay:G5NB`. Reference prefix: `K`.
 * Footprint filters: Relay?SPST*Omron*G5NB*.
 * @see https://omronfs.omron.com/en_US/ecb/products/pdf/en-g5nb_el.pdf
 * Keywords: Omron G5NB Relay SPST-NO.
 * Default footprint: Relay_THT:Relay_SPST_Omron_G5NB.
 */
export class G5NB extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G5NB";
  override referencePrefix = "K";
}

/**
 * Omron G5G relay, Miniature Single Pole, SPDT, 10A
 *
 * KiCad symbol: `Relay:G5Q-1`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Omron*G5Q*.
 * @see https://www.omron.com/ecb/products/pdf/en-g5q.pdf
 * Keywords: Miniature Single Pole Relay.
 * Default footprint: Relay_THT:Relay_SPDT_Omron-G5Q-1.
 */
export class G5Q_1 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G5Q-1";
  override referencePrefix = "K";
}

/**
 * Omron G5Q relay, Miniature Single Pole, SPST-NO, 10A
 *
 * KiCad symbol: `Relay:G5Q-1A`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Omron*G5Q*.
 * @see https://www.omron.com/ecb/products/pdf/en-g5q.pdf
 * Keywords: Miniature Single Pole Relay.
 * Default footprint: Relay_THT:Relay_SPST_Omron-G5Q-1A.
 */
export class G5Q_1A extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P5: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G5Q-1A";
  override referencePrefix = "K";
}

/**
 * Ultra-miniature, Highly Sensitive SPDT Relay for Signal Circuits
 *
 * KiCad symbol: `Relay:G5V-1`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Omron*G5V?1*.
 * @see http://omronfs.omron.com/en_US/ecb/products/pdf/en-g5v_1.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_THT:Relay_SPDT_Omron_G5V-1.
 */
export class G5V_1 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P5": "5",
  "P6": "6",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P5: "passive", P6: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G5V-1";
  override referencePrefix = "K";
}

/**
 * Relay Miniature Omron DPDT
 *
 * KiCad symbol: `Relay:G5V-2`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Omron*G5V*.
 * @see http://omronfs.omron.com/en_US/ecb/products/pdf/en-g5v_2.pdf
 * Keywords: Miniature Relay Dual Pole DPDT Omron.
 * Default footprint: Relay_THT:Relay_DPDT_Omron_G5V-2.
 */
export class G5V_2 extends Component.withPins({
  "P1": "1",
  "P4": "4",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P11": "11",
  "P13": "13",
  "P16": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P4: "passive", P6: "passive", P8: "passive", P9: "passive", P11: "passive", P13: "passive", P16: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G5V-2";
  override referencePrefix = "K";
}

/**
 * Relay Miniature Omron DPDT
 *
 * KiCad symbol: `Relay:G5V-2_Split`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Omron*G5V*.
 * @see http://omronfs.omron.com/en_US/ecb/products/pdf/en-g5v_2.pdf
 * Keywords: Miniature Relay Dual Pole DPDT Omron.
 * Default footprint: Relay_THT:Relay_DPDT_Omron_G5V-2.
 */
export class G5V_2_Split extends Component.withPins({
  "P1": "1",
  "P16": "16",
  "P4": "4",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P11": "11",
  "P13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P16: "passive", P4: "passive", P6: "passive", P8: "passive", P9: "passive", P11: "passive", P13: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G5V-2_Split";
  override referencePrefix = "K";
}

/**
 * Industry-Standard 2-pole relay, designed to switch 2A Signal Loads, Single-side Stable
 *
 * KiCad symbol: `Relay:G6A`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Omron*G6A*.
 * @see https://omronfs.omron.com/en_US/ecb/products/pdf/en-g6a.pdf
 * Keywords: Relay Dual Pole DPDT 2-Form-C Omron.
 * Default footprint: Relay_THT:Relay_DPDT_Omron_G6A.
 */
export class G6A extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G6A";
  override referencePrefix = "K";
}

/**
 * Relay DPDT, bistable, double-coil, EN50005
 *
 * KiCad symbol: `Relay:Relay_DPDT_Latching_2coil`. Reference prefix: `K`.
 * Footprint filters: Relay?DPDT*.
 * Keywords: 2P2T 2-Form-C double dual pole throw latching.
 */
export class Relay_DPDT_Latching_2coil extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
  "PB1": "B1",
  "PB2": "B2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", PB1: "passive", PB2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Relay_DPDT_Latching_2coil";
  override referencePrefix = "K";
}

/**
 * Industry-Standard 2-pole relay, designed to switch 2A Signal Loads, Double-winding Latching
 *
 * KiCad symbol: `Relay:G6AK`. Reference prefix: `K`.
 * Footprint filters: Relay?DPDT*Omron*G6AK*.
 * @see https://omronfs.omron.com/en_US/ecb/products/pdf/en-g6a.pdf
 * Keywords: 2P2T double dual pole throw DPDT 2-Form-C bistable Omron.
 * Default footprint: Relay_THT:Relay_DPDT_Omron_G6AK.
 */
export class G6AK extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
  "PB1": "B1",
  "PB2": "B2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", PB1: "passive", PB2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G6AK";
  override referencePrefix = "K";
}

/**
 * Relay DPDT, bistable, single-coil, EN50005
 *
 * KiCad symbol: `Relay:Relay_DPDT_Latching_1coil`. Reference prefix: `K`.
 * Footprint filters: Relay?DPDT*.
 * Keywords: 2P2T 2-Form-C double dual pole throw latching.
 */
export class Relay_DPDT_Latching_1coil extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Relay_DPDT_Latching_1coil";
  override referencePrefix = "K";
}

/**
 * Industry-Standard 2-pole relay, designed to switch 2A Signal Loads, Single-winding Latching
 *
 * KiCad symbol: `Relay:G6AU`. Reference prefix: `K`.
 * Footprint filters: Relay?DPDT*Omron*G6A*.
 * @see https://omronfs.omron.com/en_US/ecb/products/pdf/en-g6a.pdf
 * Keywords: 2P2T double dual pole throw DPDT 2-Form-C bistable Omron.
 * Default footprint: Relay_THT:Relay_DPDT_Omron_G6A.
 */
export class G6AU extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G6AU";
  override referencePrefix = "K";
}

/**
 * Omron Subminiature Sensitive SPDT Signal Switching Relay, Single-Side Stable
 *
 * KiCad symbol: `Relay:G6E`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Omron*G6E*.
 * @see https://www.omron.com/ecb/products/pdf/en-g6e.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_THT:Relay_SPDT_Omron_G6E.
 */
export class G6E extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P7": "7",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P6: "passive", P7: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G6E";
  override referencePrefix = "K";
}

/**
 * Omron G6E relay, Subminiature, Sensitive SPDT Signal Switching Relay, Single-winding latching
 *
 * KiCad symbol: `Relay:G6EU`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Omron*G6E*.
 * @see https://www.omron.com/ecb/products/pdf/en-g6e.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_THT:Relay_SPDT_Omron_G6E.
 */
export class G6EU extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P7": "7",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P6: "passive", P7: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G6EU";
  override referencePrefix = "K";
}

/**
 * Omron Ultracompact, Ultrasensitive DPDT Relay, Single-side Stable
 *
 * KiCad symbol: `Relay:G6H-2`. Reference prefix: `K`.
 * Footprint filters: Relay*Omron*G6H?2*.
 * @see http://cdn-reichelt.de/documents/datenblatt/C300/G6H%23OMR.pdf
 * Keywords: relay monostable.
 */
export class G6H_2 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", NC_5: "no_connect", NC_6: "no_connect", P7: "passive", P8: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G6H-2";
  override referencePrefix = "K";
}

/**
 * Omron Ultracompact, Ultrasensitive DPDT Relay, Single-winding Latching
 *
 * KiCad symbol: `Relay:G6HU-2`. Reference prefix: `K`.
 * Footprint filters: Relay*Omron*G6H?2*.
 * @see http://cdn-reichelt.de/documents/datenblatt/C300/G6H%23OMR.pdf
 * Keywords: relay monostable.
 * Default footprint: Relay_THT:Relay_DPDT_Omron_G6H-2.
 */
export class G6HU_2 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", NC_5: "no_connect", NC_6: "no_connect", P7: "passive", P8: "passive", P9: "passive", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G6HU-2";
  override referencePrefix = "K";
}

/**
 * Miniature 2-pole relay, Single-side Stable
 *
 * KiCad symbol: `Relay:G6K-2`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Omron*G6K?2*.
 * @see http://omronfs.omron.com/en_US/ecb/products/pdf/en-g6k.pdf
 * Keywords: Miniature Relay Dual Pole DPDT Omron.
 */
export class G6K_2 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G6K-2";
  override referencePrefix = "K";
}

/**
 * Miniature 2-pole relay, Single-winding Latching
 *
 * KiCad symbol: `Relay:G6KU-2`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Omron*G6K?2*Y*.
 * @see http://omronfs.omron.com/en_US/ecb/products/pdf/en-g6k.pdf
 * Keywords: Miniature Relay Dual Pole DPDT Omron.
 */
export class G6KU_2 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G6KU-2";
  override referencePrefix = "K";
}

/**
 * Compact, Industry-Standard 2-pole relay, designed to switch 2A Signal Loads, Single-side Stable
 *
 * KiCad symbol: `Relay:G6S-2`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Omron*G6S?2*.
 * @see http://omronfs.omron.com/en_US/ecb/products/pdf/en-g6s.pdf
 * Keywords: Miniature Relay Dual Pole DPDT Omron.
 */
export class G6S_2 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G6S-2";
  override referencePrefix = "K";
}

/**
 * Compact, Industry-Standard 2-pole relay, designed to switch 2A Signal Loads, Double-winding Latching
 *
 * KiCad symbol: `Relay:G6SK-2`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Omron*G6SK?2*.
 * @see http://omronfs.omron.com/en_US/ecb/products/pdf/en-g6s.pdf
 * Keywords: Miniature Relay Dual Pole DPDT Omron.
 */
export class G6SK_2 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G6SK-2";
  override referencePrefix = "K";
}

/**
 * Compact, Industry-Standard 2-pole relay, designed to switch 2A Signal Loads, Single-winding Latching
 *
 * KiCad symbol: `Relay:G6SU-2`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Omron*G6S?2*.
 * @see http://omronfs.omron.com/en_US/ecb/products/pdf/en-g6s.pdf
 * Keywords: Miniature Relay Dual Pole DPDT Omron.
 */
export class G6SU_2 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P4: "passive", P5: "passive", P8: "passive", P9: "passive", P10: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:G6SU-2";
  override referencePrefix = "K";
}

/**
 * Monostable relay DPDT, 29x12.7mm body size, 5mm pitch, 8A, EN50005
 *
 * KiCad symbol: `Relay:HF115F-2Z-x4`. Reference prefix: `K`.
 * Footprint filters: Relay?DPDT*.
 * @see https://source.hongfa.com//pdf/web/viewer.html?file=/Uploads/Product/PDF/HF115F_I_en.pdf
 * Keywords: 2-Form-C.
 * Default footprint: Relay_THT:Relay_DPDT_Hongfa_HF115F-2Z-x4.
 */
export class HF115F_2Z_x4 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF115F-2Z-x4";
  override referencePrefix = "K";
}

/**
 * AXICOM HF3 relay, 3GHz, SPDT RF Switching Relay, 75ohm, 3Vdc, Single-Side Stable
 *
 * KiCad symbol: `Relay:HF3-01`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*AXICOM*HF3Series*75ohms*Pitch1.27mm*.
 * @see https://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98000&DocType=SS&DocLang=EN
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_SMD:Relay_SPDT_AXICOM_HF3Series_75ohms_Pitch1.27mm.
 */
export class HF3_01 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "GND_5": "5",
  "P6": "6",
  "GND_7": "7",
  "GND_10": "10",
  "P11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "P14": "14",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
  "P20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", GND_5: "passive", P6: "passive", GND_7: "passive", GND_10: "passive", P11: "passive", GND_12: "passive", GND_13: "passive", P14: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", P20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF3-01";
  override referencePrefix = "K";
}

/**
 * AXICOM HF3 relay, 3GHz, SPDT RF Switching Relay, 75ohm, 4.5Vdc, Single-Side Stable
 *
 * KiCad symbol: `Relay:HF3-02`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*AXICOM*HF3Series*75ohms*Pitch1.27mm*.
 * @see http://hiqsdr.com/images/3/3e/Axicom-HF3.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_SMD:Relay_SPDT_AXICOM_HF3Series_75ohms_Pitch1.27mm.
 */
export class HF3_02 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "GND_5": "5",
  "P6": "6",
  "GND_7": "7",
  "GND_10": "10",
  "P11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "P14": "14",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
  "P20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", GND_5: "passive", P6: "passive", GND_7: "passive", GND_10: "passive", P11: "passive", GND_12: "passive", GND_13: "passive", P14: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", P20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF3-02";
  override referencePrefix = "K";
}

/**
 * AXICOM HF3 relay, 3GHz, SPDT RF Switching Relay, 75ohm, 5Vdc, Single-Side Stable
 *
 * KiCad symbol: `Relay:HF3-03`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*AXICOM*HF3Series*75ohms*Pitch1.27mm*.
 * @see http://hiqsdr.com/images/3/3e/Axicom-HF3.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_SMD:Relay_SPDT_AXICOM_HF3Series_75ohms_Pitch1.27mm.
 */
export class HF3_03 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "GND_5": "5",
  "P6": "6",
  "GND_7": "7",
  "GND_10": "10",
  "P11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "P14": "14",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
  "P20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", GND_5: "passive", P6: "passive", GND_7: "passive", GND_10: "passive", P11: "passive", GND_12: "passive", GND_13: "passive", P14: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", P20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF3-03";
  override referencePrefix = "K";
}

/**
 * AXICOM HF3 relay, 3GHz, SPDT RF Switching Relay, 75ohm, 6Vdc, Single-Side Stable
 *
 * KiCad symbol: `Relay:HF3-04`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*AXICOM*HF3Series*75ohms*Pitch1.27mm*.
 * @see http://hiqsdr.com/images/3/3e/Axicom-HF3.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_SMD:Relay_SPDT_AXICOM_HF3Series_75ohms_Pitch1.27mm.
 */
export class HF3_04 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "GND_5": "5",
  "P6": "6",
  "GND_7": "7",
  "GND_10": "10",
  "P11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "P14": "14",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
  "P20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", GND_5: "passive", P6: "passive", GND_7: "passive", GND_10: "passive", P11: "passive", GND_12: "passive", GND_13: "passive", P14: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", P20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF3-04";
  override referencePrefix = "K";
}

/**
 * AXICOM HF3 relay, 3GHz, SPDT RF Switching Relay, 75ohm, 9Vdc, Single-Side Stable
 *
 * KiCad symbol: `Relay:HF3-05`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*AXICOM*HF3Series*75ohms*Pitch1.27mm*.
 * @see http://hiqsdr.com/images/3/3e/Axicom-HF3.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_SMD:Relay_SPDT_AXICOM_HF3Series_75ohms_Pitch1.27mm.
 */
export class HF3_05 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "GND_5": "5",
  "P6": "6",
  "GND_7": "7",
  "GND_10": "10",
  "P11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "P14": "14",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
  "P20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", GND_5: "passive", P6: "passive", GND_7: "passive", GND_10: "passive", P11: "passive", GND_12: "passive", GND_13: "passive", P14: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", P20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF3-05";
  override referencePrefix = "K";
}

/**
 * AXICOM HF3 relay, 3GHz, SPDT RF Switching Relay, 75ohm, 12Vdc, Single-Side Stable
 *
 * KiCad symbol: `Relay:HF3-06`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*AXICOM*HF3Series*75ohms*Pitch1.27mm*.
 * @see http://hiqsdr.com/images/3/3e/Axicom-HF3.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_SMD:Relay_SPDT_AXICOM_HF3Series_75ohms_Pitch1.27mm.
 */
export class HF3_06 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "GND_5": "5",
  "P6": "6",
  "GND_7": "7",
  "GND_10": "10",
  "P11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "P14": "14",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
  "P20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", GND_5: "passive", P6: "passive", GND_7: "passive", GND_10: "passive", P11: "passive", GND_12: "passive", GND_13: "passive", P14: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", P20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF3-06";
  override referencePrefix = "K";
}

/**
 * AXICOM HF3 relay, 3GHz, SPDT RF Switching Relay, 75ohm, 24Vdc, Single-Side Stable
 *
 * KiCad symbol: `Relay:HF3-07`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*AXICOM*HF3Series*75ohms*Pitch1.27mm*.
 * @see http://hiqsdr.com/images/3/3e/Axicom-HF3.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_SMD:Relay_SPDT_AXICOM_HF3Series_75ohms_Pitch1.27mm.
 */
export class HF3_07 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "GND_5": "5",
  "P6": "6",
  "GND_7": "7",
  "GND_10": "10",
  "P11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "P14": "14",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
  "P20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", GND_5: "passive", P6: "passive", GND_7: "passive", GND_10: "passive", P11: "passive", GND_12: "passive", GND_13: "passive", P14: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", P20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF3-07";
  override referencePrefix = "K";
}

/**
 * AXICOM HF3 relay, 3GHz, SPDT RF Switching Relay, 50ohm, 3Vdc, Single-Side Stable
 *
 * KiCad symbol: `Relay:HF3-51`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*AXICOM*HF3Series*50ohms*Pitch1.27mm*.
 * @see https://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98000&DocType=SS&DocLang=EN
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_SMD:Relay_SPDT_AXICOM_HF3Series_50ohms_Pitch1.27mm.
 */
export class HF3_51 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "GND_5": "5",
  "P6": "6",
  "GND_7": "7",
  "GND_10": "10",
  "P11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "P14": "14",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
  "P20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", GND_5: "passive", P6: "passive", GND_7: "passive", GND_10: "passive", P11: "passive", GND_12: "passive", GND_13: "passive", P14: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", P20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF3-51";
  override referencePrefix = "K";
}

/**
 * AXICOM HF3 relay, 3GHz, SPDT RF Switching Relay, 50ohm, 4.5Vdc, Single-Side Stable
 *
 * KiCad symbol: `Relay:HF3-52`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*AXICOM*HF3Series*50ohms*Pitch1.27mm*.
 * @see http://hiqsdr.com/images/3/3e/Axicom-HF3.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_SMD:Relay_SPDT_AXICOM_HF3Series_50ohms_Pitch1.27mm.
 */
export class HF3_52 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "GND_5": "5",
  "P6": "6",
  "GND_7": "7",
  "GND_10": "10",
  "P11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "P14": "14",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
  "P20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", GND_5: "passive", P6: "passive", GND_7: "passive", GND_10: "passive", P11: "passive", GND_12: "passive", GND_13: "passive", P14: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", P20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF3-52";
  override referencePrefix = "K";
}

/**
 * AXICOM HF3 relay, 3GHz, SPDT RF Switching Relay, 50ohm, 5Vdc, Single-Side Stable
 *
 * KiCad symbol: `Relay:HF3-53`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*AXICOM*HF3Series*50ohms*Pitch1.27mm*.
 * @see http://hiqsdr.com/images/3/3e/Axicom-HF3.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_SMD:Relay_SPDT_AXICOM_HF3Series_50ohms_Pitch1.27mm.
 */
export class HF3_53 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "GND_5": "5",
  "P6": "6",
  "GND_7": "7",
  "GND_10": "10",
  "P11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "P14": "14",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
  "P20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", GND_5: "passive", P6: "passive", GND_7: "passive", GND_10: "passive", P11: "passive", GND_12: "passive", GND_13: "passive", P14: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", P20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF3-53";
  override referencePrefix = "K";
}

/**
 * AXICOM HF3 relay, 3GHz, SPDT RF Switching Relay, 50ohm, 6Vdc, Single-Side Stable
 *
 * KiCad symbol: `Relay:HF3-54`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*AXICOM*HF3Series*50ohms*Pitch1.27mm*.
 * @see http://hiqsdr.com/images/3/3e/Axicom-HF3.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_SMD:Relay_SPDT_AXICOM_HF3Series_50ohms_Pitch1.27mm.
 */
export class HF3_54 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "GND_5": "5",
  "P6": "6",
  "GND_7": "7",
  "GND_10": "10",
  "P11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "P14": "14",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
  "P20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", GND_5: "passive", P6: "passive", GND_7: "passive", GND_10: "passive", P11: "passive", GND_12: "passive", GND_13: "passive", P14: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", P20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF3-54";
  override referencePrefix = "K";
}

/**
 * AXICOM HF3 relay, 3GHz, SPDT RF Switching Relay, 50ohm, 9Vdc, Single-Side Stable
 *
 * KiCad symbol: `Relay:HF3-55`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*AXICOM*HF3Series*50ohms*Pitch1.27mm*.
 * @see http://hiqsdr.com/images/3/3e/Axicom-HF3.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_SMD:Relay_SPDT_AXICOM_HF3Series_50ohms_Pitch1.27mm.
 */
export class HF3_55 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "GND_5": "5",
  "P6": "6",
  "GND_7": "7",
  "GND_10": "10",
  "P11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "P14": "14",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
  "P20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", GND_5: "passive", P6: "passive", GND_7: "passive", GND_10: "passive", P11: "passive", GND_12: "passive", GND_13: "passive", P14: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", P20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF3-55";
  override referencePrefix = "K";
}

/**
 * AXICOM HF3 relay, 3GHz, SPDT RF Switching Relay, 50ohm, 12Vdc, Single-Side Stable
 *
 * KiCad symbol: `Relay:HF3-56`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*AXICOM*HF3Series*50ohms*Pitch1.27mm*.
 * @see http://hiqsdr.com/images/3/3e/Axicom-HF3.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_SMD:Relay_SPDT_AXICOM_HF3Series_50ohms_Pitch1.27mm.
 */
export class HF3_56 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "GND_5": "5",
  "P6": "6",
  "GND_7": "7",
  "GND_10": "10",
  "P11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "P14": "14",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
  "P20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", GND_5: "passive", P6: "passive", GND_7: "passive", GND_10: "passive", P11: "passive", GND_12: "passive", GND_13: "passive", P14: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", P20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF3-56";
  override referencePrefix = "K";
}

/**
 * AXICOM HF3 relay, 3GHz, SPDT RF Switching Relay, 50ohm, 24Vdc, Single-Side Stable
 *
 * KiCad symbol: `Relay:HF3-57`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*AXICOM*HF3Series*50ohms*Pitch1.27mm*.
 * @see http://hiqsdr.com/images/3/3e/Axicom-HF3.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_SMD:Relay_SPDT_AXICOM_HF3Series_50ohms_Pitch1.27mm.
 */
export class HF3_57 extends Component.withPins({
  "P1": "1",
  "GND_2": "2",
  "GND_5": "5",
  "P6": "6",
  "GND_7": "7",
  "GND_10": "10",
  "P11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "P14": "14",
  "GND_15": "15",
  "GND_17": "17",
  "GND_19": "19",
  "P20": "20",
  "GND_21": "21",
  "GND_22": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", GND_2: "power_in", GND_5: "passive", P6: "passive", GND_7: "passive", GND_10: "passive", P11: "passive", GND_12: "passive", GND_13: "passive", P14: "passive", GND_15: "passive", GND_17: "passive", GND_19: "passive", P20: "passive", GND_21: "passive", GND_22: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HF3-57";
  override referencePrefix = "K";
}

/**
 * HuiKe 19F monostable relay, DPDT, 1A
 *
 * KiCad symbol: `Relay:HK19F-DCxxV-SHC`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Finder*30.22*.
 * @see https://www.lcsc.com/datasheet/lcsc_datasheet_1810201512_Ningbo-Keke-New-Era-Appliance-HK19F-DC12V-SHG_C42803.pdf
 * Keywords: 12V DC Relay DPDT.
 * Default footprint: Relay_THT:Relay_DPDT_Finder_30.22.
 */
export class HK19F_DCxxV_SHC extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HK19F-DCxxV-SHC";
  override referencePrefix = "K";
}

/**
 * Bistable miniature DPDT relay, 3A, 125VAC, THT
 *
 * KiCad symbol: `Relay:HONGFA_HFD2-0xx-x-L2-x`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Omron*G6AK*.
 * @see https://source_cn.hongfa.com/Api/DownloadPdf/323
 * Keywords: HONGFA set-reset polarized.
 * Default footprint: Relay_THT:Relay_DPDT_Omron_G6AK.
 */
export class HONGFA_HFD2_0xx_x_L2_x extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
  "PB1": "B1",
  "PB2": "B2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", PB1: "passive", PB2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:HONGFA_HFD2-0xx-x-L2-x";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC, THT package
 *
 * KiCad symbol: `Relay:IM00`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monostable.
 */
export class IM00 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM00";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM01`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monostable.
 */
export class IM01 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM01";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM02`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monostable.
 */
export class IM02 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM02";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM03`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*, Relay*2P2T*10x6mm*TE*IMxxG*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monostable.
 */
export class IM03 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM03";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM04`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monostable.
 */
export class IM04 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM04";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM05`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monostable.
 */
export class IM05 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM05";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM06`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monostable.
 */
export class IM06 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM06";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM07`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monostable.
 */
export class IM07 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM07";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM08`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monostable.
 */
export class IM08 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM08";
  override referencePrefix = "K";
}

/**
 * IM Relay, sensitive version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM11`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monastable sensitive.
 */
export class IM11 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM11";
  override referencePrefix = "K";
}

/**
 * IM Relay, sensitive version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM12`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monastable sensitive.
 */
export class IM12 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM12";
  override referencePrefix = "K";
}

/**
 * IM Relay, sensitive version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM13`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monastable sensitive.
 */
export class IM13 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM13";
  override referencePrefix = "K";
}

/**
 * IM Relay, sensitive version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM16`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monastable sensitive.
 */
export class IM16 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM16";
  override referencePrefix = "K";
}

/**
 * IM Relay, sensitive version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM17`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monastable sensitive.
 */
export class IM17 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM17";
  override referencePrefix = "K";
}

/**
 * IM Relay, high sensitive version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM21`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monastable sensitive.
 */
export class IM21 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM21";
  override referencePrefix = "K";
}

/**
 * IM Relay, high sensitive version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM22`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monastable sensitive.
 */
export class IM22 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM22";
  override referencePrefix = "K";
}

/**
 * IM Relay, high sensitive version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM23`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monastable sensitive.
 */
export class IM23 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM23";
  override referencePrefix = "K";
}

/**
 * IM Relay, high sensitive version, monostable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM26`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay monastable sensitive.
 */
export class IM26 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM26";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, bistable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM40`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay bistable.
 */
export class IM40 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM40";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, bistable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM41`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay bistable.
 */
export class IM41 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM41";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, bistable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM42`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay bistable.
 */
export class IM42 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM42";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, bistable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM43`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay bistable.
 */
export class IM43 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM43";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, bistable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM44`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay bistable.
 */
export class IM44 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM44";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, bistable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM45`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay bistable.
 */
export class IM45 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM45";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, bistable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM46`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay bistable.
 */
export class IM46 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM46";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, bistable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM47`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay bistable.
 */
export class IM47 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM47";
  override referencePrefix = "K";
}

/**
 * IM Relay, standard version, bistable, switching current 2/5A, power 60W/62.5VA, voltage 220VDC/250VAC
 *
 * KiCad symbol: `Relay:IM48`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*AXICOM*IMSeries*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=108-98001&DocType=SS&DocLang=EN
 * Keywords: relay bistable.
 */
export class IM48 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:IM48";
  override referencePrefix = "K";
}

/**
 * Subminiature High Power SPST NO Relay, 5V Coil nom. 0.36W, 15A switching current, max 10A@277VAC/28VDC
 *
 * KiCad symbol: `Relay:JQC-3FF-005-1H`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Hongfa*JQC*3FF*0XX*1H*.
 * @see https://www.digikey.com/htmldatasheets/production/2071105/0/0/1/JQC-3FF.pdf
 * Keywords: Hongmei.
 * Default footprint: Relay_THT:Relay_SPST_Hongfa_JQC-3FF_0XX-1H.
 */
export class JQC_3FF_005_1H extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JQC-3FF-005-1H";
  override referencePrefix = "K";
}

/**
 * Subminiature High Power SPDT Relay, 5V Coil nom. 0.36W, 10A switching current, max 10A@277VAC/28VDC
 *
 * KiCad symbol: `Relay:JQC-3FF-005-1Z`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Hongfa*JQC*3FF*0XX*1Z*.
 * @see https://www.digikey.com/htmldatasheets/production/2071105/0/0/1/JQC-3FF.pdf
 * Keywords: Hongmei.
 * Default footprint: Relay_THT:Relay_SPDT_Hongfa_JQC-3FF_0XX-1Z.
 */
export class JQC_3FF_005_1Z extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JQC-3FF-005-1Z";
  override referencePrefix = "K";
}

/**
 * Subminiature High Power SPST NO Relay, 6V Coil nom. 0.36W, 15A switching current, max 10A@277VAC/28VDC
 *
 * KiCad symbol: `Relay:JQC-3FF-006-1H`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Hongfa*JQC*3FF*0XX*1H*.
 * @see https://www.digikey.com/htmldatasheets/production/2071105/0/0/1/JQC-3FF.pdf
 * Keywords: Hongmei.
 * Default footprint: Relay_THT:Relay_SPST_Hongfa_JQC-3FF_0XX-1H.
 */
export class JQC_3FF_006_1H extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JQC-3FF-006-1H";
  override referencePrefix = "K";
}

/**
 * Subminiature High Power SPDT Relay, 6V Coil nom. 0.36W, 10A switching current, max 10A@277VAC/28VDC
 *
 * KiCad symbol: `Relay:JQC-3FF-006-1Z`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Hongfa*JQC*3FF*0XX*1Z*.
 * @see https://www.digikey.com/htmldatasheets/production/2071105/0/0/1/JQC-3FF.pdf
 * Keywords: Hongmei.
 * Default footprint: Relay_THT:Relay_SPDT_Hongfa_JQC-3FF_0XX-1Z.
 */
export class JQC_3FF_006_1Z extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JQC-3FF-006-1Z";
  override referencePrefix = "K";
}

/**
 * Subminiature High Power SPST NO Relay, 9V Coil nom. 0.36W, 15A switching current, max 10A@277VAC/28VDC
 *
 * KiCad symbol: `Relay:JQC-3FF-009-1H`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Hongfa*JQC*3FF*0XX*1H*.
 * @see https://www.digikey.com/htmldatasheets/production/2071105/0/0/1/JQC-3FF.pdf
 * Keywords: Hongmei.
 * Default footprint: Relay_THT:Relay_SPST_Hongfa_JQC-3FF_0XX-1H.
 */
export class JQC_3FF_009_1H extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JQC-3FF-009-1H";
  override referencePrefix = "K";
}

/**
 * Subminiature High Power SPDT Relay, 9V Coil nom. 0.36W, 10A switching current, max 10A@277VAC/28VDC
 *
 * KiCad symbol: `Relay:JQC-3FF-009-1Z`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Hongfa*JQC*3FF*0XX*1Z*.
 * @see https://www.digikey.com/htmldatasheets/production/2071105/0/0/1/JQC-3FF.pdf
 * Keywords: Hongmei.
 * Default footprint: Relay_THT:Relay_SPDT_Hongfa_JQC-3FF_0XX-1Z.
 */
export class JQC_3FF_009_1Z extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JQC-3FF-009-1Z";
  override referencePrefix = "K";
}

/**
 * Subminiature High Power SPST NO Relay, 12V Coil nom. 0.36W, 15A switching current, max 10A@277VAC/28VDC
 *
 * KiCad symbol: `Relay:JQC-3FF-012-1H`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Hongfa*JQC*3FF*0XX*1H*.
 * @see https://www.digikey.com/htmldatasheets/production/2071105/0/0/1/JQC-3FF.pdf
 * Keywords: Hongmei.
 * Default footprint: Relay_THT:Relay_SPST_Hongfa_JQC-3FF_0XX-1H.
 */
export class JQC_3FF_012_1H extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JQC-3FF-012-1H";
  override referencePrefix = "K";
}

/**
 * Subminiature High Power SPDT Relay, 12V Coil nom. 0.36W, 10A switching current, max 10A@277VAC/28VDC
 *
 * KiCad symbol: `Relay:JQC-3FF-012-1Z`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Hongfa*JQC*3FF*0XX*1Z*.
 * @see https://www.digikey.com/htmldatasheets/production/2071105/0/0/1/JQC-3FF.pdf
 * Keywords: Hongmei.
 * Default footprint: Relay_THT:Relay_SPDT_Hongfa_JQC-3FF_0XX-1Z.
 */
export class JQC_3FF_012_1Z extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JQC-3FF-012-1Z";
  override referencePrefix = "K";
}

/**
 * Subminiature High Power SPST NO Relay, 18V Coil nom. 0.36W, 10A switching current, max 15A@277VAC/28VDC
 *
 * KiCad symbol: `Relay:JQC-3FF-018-1H`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Hongfa*JQC*3FF*0XX*1H*.
 * @see https://www.digikey.com/htmldatasheets/production/2071105/0/0/1/JQC-3FF.pdf
 * Keywords: Hongmei.
 * Default footprint: Relay_THT:Relay_SPST_Hongfa_JQC-3FF_0XX-1H.
 */
export class JQC_3FF_018_1H extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JQC-3FF-018-1H";
  override referencePrefix = "K";
}

/**
 * Subminiature High Power SPDT Relay, 18V Coil nom. 0.36W, 10A switching current, max 10A@277VAC/28VDC
 *
 * KiCad symbol: `Relay:JQC-3FF-018-1Z`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Hongfa*JQC*3FF*0XX*1Z*.
 * @see https://www.digikey.com/htmldatasheets/production/2071105/0/0/1/JQC-3FF.pdf
 * Keywords: Hongmei.
 * Default footprint: Relay_THT:Relay_SPDT_Hongfa_JQC-3FF_0XX-1Z.
 */
export class JQC_3FF_018_1Z extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JQC-3FF-018-1Z";
  override referencePrefix = "K";
}

/**
 * Subminiature High Power SPST NO Relay, 24V Coil nom. 0.36W, 15A switching current, max 10A@277VAC/28VDC
 *
 * KiCad symbol: `Relay:JQC-3FF-024-1H`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Hongfa*JQC*3FF*0XX*1H*.
 * @see https://www.digikey.com/htmldatasheets/production/2071105/0/0/1/JQC-3FF.pdf
 * Keywords: Hongmei.
 * Default footprint: Relay_THT:Relay_SPST_Hongfa_JQC-3FF_0XX-1H.
 */
export class JQC_3FF_024_1H extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JQC-3FF-024-1H";
  override referencePrefix = "K";
}

/**
 * Subminiature High Power SPDT Relay, 24V Coil nom. 0.36W, 10A switching current, max 10A@277VAC/28VDC
 *
 * KiCad symbol: `Relay:JQC-3FF-024-1Z`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Hongfa*JQC*3FF*0XX*1Z*.
 * @see https://www.digikey.com/htmldatasheets/production/2071105/0/0/1/JQC-3FF.pdf
 * Keywords: Hongmei.
 * Default footprint: Relay_THT:Relay_SPDT_Hongfa_JQC-3FF_0XX-1Z.
 */
export class JQC_3FF_024_1Z extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JQC-3FF-024-1Z";
  override referencePrefix = "K";
}

/**
 * Subminiature High Power SPST NO Relay, 48V Coil nom. 0.51W, 15A switching current, max 10A@277VAC/28VDC
 *
 * KiCad symbol: `Relay:JQC-3FF-048-1H`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Hongfa*JQC*3FF*0XX*1H*.
 * @see https://www.digikey.com/htmldatasheets/production/2071105/0/0/1/JQC-3FF.pdf
 * Keywords: Hongmei.
 * Default footprint: Relay_THT:Relay_SPST_Hongfa_JQC-3FF_0XX-1H.
 */
export class JQC_3FF_048_1H extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JQC-3FF-048-1H";
  override referencePrefix = "K";
}

/**
 * Subminiature High Power SPDT Relay, 48V Coil nom. 0.51W, 10A switching current, max 10A@277VAC/28VDC
 *
 * KiCad symbol: `Relay:JQC-3FF-048-1Z`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Hongfa*JQC*3FF*0XX*1Z*.
 * @see https://www.digikey.com/htmldatasheets/production/2071105/0/0/1/JQC-3FF.pdf
 * Keywords: Hongmei.
 * Default footprint: Relay_THT:Relay_SPDT_Hongfa_JQC-3FF_0XX-1Z.
 */
export class JQC_3FF_048_1Z extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JQC-3FF-048-1Z";
  override referencePrefix = "K";
}

/**
 * General Purpose Relay DPDT (2 Form C) Through Hole, Panasonic JW series
 *
 * KiCad symbol: `Relay:JW2`. Reference prefix: `RL`.
 * Footprint filters: Relay*DPDT*Panasonic*JW2*.
 * @see http://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_jw.pdf?via=ok
 * Keywords: Panasonic Relay Dual Pole.
 * Default footprint: Relay_THT:Relay_DPDT_Panasonic_JW2.
 */
export class JW2 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", P7: "passive", P8: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:JW2";
  override referencePrefix = "RL";
}

/**
 * Standex Meder MS reed relay, SPST, Closing Contact
 *
 * KiCad symbol: `Relay:MSxx-1Axx-75`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*StandexMeder*MS*Form1AB*.
 * @see https://standexelectronics.com/wp-content/uploads/datasheets/42/4205187975e.pdf
 * Keywords: Single Pole Reed Relay SPST.
 * Default footprint: Relay_THT:Relay_SPST_StandexMeder_MS_Form1AB.
 */
export class MSxx_1Axx_75 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P5": "5",
  "P7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P5: "passive", P7: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:MSxx-1Axx-75";
  override referencePrefix = "K";
}

/**
 * Standex Meder MS reed relay, SPST, Opening Contact
 *
 * KiCad symbol: `Relay:MSxx-1Bxx-75`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*StandexMeder*MS*Form1AB*.
 * @see https://standexelectronics.com/de/produkte/ms-reed-relais/
 * Keywords: Single Pole Reed Relay SPST.
 * Default footprint: Relay_THT:Relay_SPST_StandexMeder_MS_Form1AB.
 */
export class MSxx_1Bxx_75 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P5": "5",
  "P7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P5: "passive", P7: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:MSxx-1Bxx-75";
  override referencePrefix = "K";
}

/**
 * 9V DC, Standard, 22A, Contact Gap 1.5mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG1PF09`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG1PF09 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG1PF09";
  override referencePrefix = "K";
}

/**
 * 9V DC, Standard, 22A, Contact Gap 1.8mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG1PF091`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG1PF091 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG1PF091";
  override referencePrefix = "K";
}

/**
 * 12V DC, Standard, 22A, Contact Gap 1.5mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG1PF12`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG1PF12 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG1PF12";
  override referencePrefix = "K";
}

/**
 * 12V DC, Standard, 22A, Contact Gap 1.8mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG1PF121`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG1PF121 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG1PF121";
  override referencePrefix = "K";
}

/**
 * 18V DC, Standard, 22A, Contact Gap 1.5mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG1PF18`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG1PF18 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG1PF18";
  override referencePrefix = "K";
}

/**
 * 18V DC, Standard, 22A, Contact Gap 1.8mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG1PF181`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG1PF181 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG1PF181";
  override referencePrefix = "K";
}

/**
 * 24V DC, Standard, 22A, Contact Gap 1.5mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG1PF24`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG1PF24 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG1PF24";
  override referencePrefix = "K";
}

/**
 * 24V DC, Standard, 22A, Contact Gap 1.8mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG1PF241`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG1PF241 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG1PF241";
  override referencePrefix = "K";
}

/**
 * 9V DC, High Capacity, 31A, Contact Gap 1.5mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG2PF09`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG2PF09 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG2PF09";
  override referencePrefix = "K";
}

/**
 * 9V DC, High Capacity, 33A, Contact Gap 1.8mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG2PF091`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG2PF091 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG2PF091";
  override referencePrefix = "K";
}

/**
 * 12V DC, High Capacity, 31A, Contact Gap 1.5mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG2PF12`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG2PF12 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG2PF12";
  override referencePrefix = "K";
}

/**
 * 12V DC, High Capacity, 33A, Contact Gap 1.8mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG2PF121`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG2PF121 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG2PF121";
  override referencePrefix = "K";
}

/**
 * 18V DC, High Capacity, 31A, Contact Gap 1.5mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG2PF18`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG2PF18 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG2PF18";
  override referencePrefix = "K";
}

/**
 * 18V DC, High Capacity, 33A, Contact Gap 1.8mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG2PF181`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG2PF181 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG2PF181";
  override referencePrefix = "K";
}

/**
 * 24V DC, High Capacity, 31A, Contact Gap 1.5mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG2PF24`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG2PF24 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG2PF24";
  override referencePrefix = "K";
}

/**
 * 24V DC, High Capacity, 33A, Contact Gap 1.8mm, ALFG_FormA
 *
 * KiCad symbol: `Relay:Panasonic_ALFG2PF241`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Panasonic*ALFG*FormA*.
 * @see https://www3.panasonic.biz/ac/e_download/control/relay/power/catalog/mech_eng_lfg.pdf
 * Keywords: single pole spst make contact.
 * Default footprint: Relay_THT:Relay_SPST_Panasonic_ALFG_FormA_CircularHoles.
 */
export class Panasonic_ALFG2PF241 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Panasonic_ALFG2PF241";
  override referencePrefix = "K";
}

/**
 * Power relay, SPDT, 30A
 *
 * KiCad symbol: `Relay:RAYEX-L90`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*RAYEX*L90*.
 * @see https://a3.sofastcdn.com/attachment/7jioKBjnRiiSrjrjknRiwS77gwbf3zmp/L90-SERIES.pdf
 * Keywords: 30A Single Pole Relay.
 * Default footprint: Relay_THT:Relay_SPDT_RAYEX-L90.
 */
export class RAYEX_L90 extends Component.withPins({
  "P11A": "11A",
  "P11B": "11B",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11A: "passive", P11B: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RAYEX-L90";
  override referencePrefix = "K";
}

/**
 * Power relay, NO, SPST, 30A
 *
 * KiCad symbol: `Relay:RAYEX-L90A`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*RAYEX*L90A*.
 * @see https://a3.sofastcdn.com/attachment/7jioKBjnRiiSrjrjknRiwS77gwbf3zmp/L90-SERIES.pdf
 * Keywords: 30A Single Pole Relay.
 * Default footprint: Relay_THT:Relay_SPST_RAYEX-L90A.
 */
export class RAYEX_L90A extends Component.withPins({
  "P13A": "13A",
  "P13B": "13B",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13A: "passive", P13B: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RAYEX-L90A";
  override referencePrefix = "K";
}

/**
 * Power relay, Without Common Terminal between coil terminals, NO, SPST, 30A
 *
 * KiCad symbol: `Relay:RAYEX-L90AS`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*RAYEX*L90A*.
 * @see https://a3.sofastcdn.com/attachment/7jioKBjnRiiSrjrjknRiwS77gwbf3zmp/L90-SERIES.pdf
 * Keywords: 30A Single Pole Relay.
 * Default footprint: Relay_THT:Relay_SPST_RAYEX-L90AS.
 */
export class RAYEX_L90AS extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RAYEX-L90AS";
  override referencePrefix = "K";
}

/**
 * Power relay, NC, SPST, 30A
 *
 * KiCad symbol: `Relay:RAYEX-L90B`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*RAYEX*L90B*.
 * @see https://a3.sofastcdn.com/attachment/7jioKBjnRiiSrjrjknRiwS77gwbf3zmp/L90-SERIES.pdf
 * Keywords: 30A Single Pole Relay.
 * Default footprint: Relay_THT:Relay_SPST_RAYEX-L90B.
 */
export class RAYEX_L90B extends Component.withPins({
  "P11A": "11A",
  "P11B": "11B",
  "P12": "12",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11A: "passive", P11B: "passive", P12: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RAYEX-L90B";
  override referencePrefix = "K";
}

/**
 * Power relay, Without Common Terminal between coil terminals, NC, SPST, 30A
 *
 * KiCad symbol: `Relay:RAYEX-L90BS`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*RAYEX*L90B*.
 * @see https://a3.sofastcdn.com/attachment/7jioKBjnRiiSrjrjknRiwS77gwbf3zmp/L90-SERIES.pdf
 * Keywords: 30A Single Pole Relay.
 * Default footprint: Relay_THT:Relay_SPST_RAYEX-L90BS.
 */
export class RAYEX_L90BS extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RAYEX-L90BS";
  override referencePrefix = "K";
}

/**
 * Power relay, Without Common Terminal between coil terminals, SPDT, 30A
 *
 * KiCad symbol: `Relay:RAYEX-L90S`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*RAYEX*L90S*.
 * @see https://a3.sofastcdn.com/attachment/7jioKBjnRiiSrjrjknRiwS77gwbf3zmp/L90-SERIES.pdf
 * Keywords: 30A Single Pole Relay.
 * Default footprint: Relay_THT:Relay_SPDT_RAYEX-L90S.
 */
export class RAYEX_L90S extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RAYEX-L90S";
  override referencePrefix = "K";
}

/**
 * RELPOL, Single Pole Relay SPST-NO, 6A
 *
 * KiCad symbol: `Relay:RM50-xx21`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*Finder*32.21*x300*.
 * @see http://www.relpol.pl/en/content/download/13683/165953/file/e_RM50.pdf
 * Keywords: Single Pole Relay SPST-NO.
 * Default footprint: Relay_THT:Relay_SPST_Finder_32.21-x300.
 */
export class RM50_xx21 extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RM50-xx21";
  override referencePrefix = "K";
}

/**
 * RELPOL Dual Pole Relay, 5mm Pitch, 8A
 *
 * KiCad symbol: `Relay:RM84`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Finder*40.52*.
 * @see http://www.relpol.pl/en/content/download/13766/168095/file/e_RM84.pdf
 * Keywords: Dual Pole Relay.
 * Default footprint: Relay_THT:Relay_DPDT_Finder_40.52.
 */
export class RM84 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RM84";
  override referencePrefix = "K";
}

/**
 * RELPOL Dual Pole Relay, 5mm Pitch, 2A
 *
 * KiCad symbol: `Relay:RSM822`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*Finder*40.52*.
 * @see http://www.relpol.pl/en/content/download/14975/202519/file/e_RSM822.pdf
 * Keywords: Dual Pole Relay.
 * Default footprint: Relay_THT:Relay_DPDT_Finder_40.52.
 */
export class RSM822 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RSM822";
  override referencePrefix = "K";
}

/**
 * Schrack RT1 relay, bistable single pole dual throw, single DC coil, 3V
 *
 * KiCad symbol: `Relay:RT314A03`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Schrack*RT1*16A*FormC*RM5mm*.
 * @see https://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=RT1_bistable&DocType=DS&DocLang=English
 * Keywords: TE SPDT 1P2T CO bistable DC.
 * Default footprint: Relay_THT:Relay_SPDT_Schrack-RT1-16A-FormC_RM5mm.
 */
export class RT314A03 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RT314A03";
  override referencePrefix = "K";
}

/**
 * Schrack RT1 relay, bistable single pole dual throw, single DC coil, 5V
 *
 * KiCad symbol: `Relay:RT314A05`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Schrack*RT1*16A*FormC*RM5mm*.
 * @see https://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=RT1_bistable&DocType=DS&DocLang=English
 * Keywords: TE SPDT 1P2T CO bistable DC.
 * Default footprint: Relay_THT:Relay_SPDT_Schrack-RT1-16A-FormC_RM5mm.
 */
export class RT314A05 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RT314A05";
  override referencePrefix = "K";
}

/**
 * Schrack RT1 relay, bistablesingle pole dual throw, single DC coil, 6V
 *
 * KiCad symbol: `Relay:RT314A06`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Schrack*RT1*16A*FormC*RM5mm*.
 * @see https://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=RT1_bistable&DocType=DS&DocLang=English
 * Keywords: TE SPDT 1P2T CO bistable DC.
 * Default footprint: Relay_THT:Relay_SPDT_Schrack-RT1-16A-FormC_RM5mm.
 */
export class RT314A06 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RT314A06";
  override referencePrefix = "K";
}

/**
 * Schrack RT1 relay, bistable single pole dual throw, single DC coil, 12V
 *
 * KiCad symbol: `Relay:RT314A12`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Schrack*RT1*16A*FormC*RM5mm*.
 * @see https://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=RT1_bistable&DocType=DS&DocLang=English
 * Keywords: TE SPDT 1P2T CO bistable DC.
 * Default footprint: Relay_THT:Relay_SPDT_Schrack-RT1-16A-FormC_RM5mm.
 */
export class RT314A12 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RT314A12";
  override referencePrefix = "K";
}

/**
 * Schrack RT1 relay, bistable single pole dual throw, single DC coil, 24V, IEC 60335-1
 *
 * KiCad symbol: `Relay:RT314A24`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*Schrack*RT1*16A*FormC*RM5mm*.
 * @see https://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=RT1_bistable&DocType=DS&DocLang=English
 * Keywords: TE SPDT 1P2T CO bistable DC.
 * Default footprint: Relay_THT:Relay_SPDT_Schrack-RT1-16A-FormC_RM5mm.
 */
export class RT314A24 extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RT314A24";
  override referencePrefix = "K";
}

/**
 * Schrack RT2 relay, bistable dual pole dual throw, single DC coil
 *
 * KiCad symbol: `Relay:RT42xAxx`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*RT2*FormC*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FRT2_bistable%7F1116%7Fpdf%7FEnglish%7FENG_DS_RT2_bistable_1116.pdf%7F1-1415537-8
 * Keywords: TE DPDT CO bistable DC.
 * Default footprint: Relay_THT:Relay_DPDT_Schrack-RT2-FormC_RM5mm.
 */
export class RT42xAxx extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RT42xAxx";
  override referencePrefix = "K";
}

/**
 * Schrack RT2 relay, bistable dual pole dual throw, dual DC coils
 *
 * KiCad symbol: `Relay:RT42xFxx`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*RT2*FormC*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FRT2_bistable%7F1116%7Fpdf%7FEnglish%7FENG_DS_RT2_bistable_1116.pdf%7F1-1415537-8
 * Keywords: TE DPDT CO bistable DC.
 * Default footprint: Relay_THT:Relay_DPDT_Schrack-RT2-FormC-Dual-Coil_RM5mm.
 */
export class RT42xFxx extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
  "PA3": "A3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", PA3: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RT42xFxx";
  override referencePrefix = "K";
}

/**
 * Schrack RT2 relay, monostable dual pole dual throw, DC or AC coil
 *
 * KiCad symbol: `Relay:RT42xxxx`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*RT2*FormC*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FRT2%7F1014%7Fpdf%7FEnglish%7FENG_DS_RT2_1014.pdf%7F6-1393243-3
 * Keywords: TE DPDT CO monostable.
 * Default footprint: Relay_THT:Relay_DPDT_Schrack-RT2-FormC_RM5mm.
 */
export class RT42xxxx extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RT42xxxx";
  override referencePrefix = "K";
}

/**
 * Schrack RT2 relay, monostable dual pole normally open, DC or AC coil
 *
 * KiCad symbol: `Relay:RT44xxxx`. Reference prefix: `K`.
 * Footprint filters: Relay*DPST*RT2*FormA*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FRT2%7F1014%7Fpdf%7FEnglish%7FENG_DS_RT2_1014.pdf%7F6-1393243-3
 * Keywords: TE DPST NO monostable.
 * Default footprint: Relay_THT:Relay_DPST_Schrack-RT2-FormA_RM5mm.
 */
export class RT44xxxx extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "P21": "21",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", P21: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RT44xxxx";
  override referencePrefix = "K";
}

/**
 * Schrack RT2 relay, bistable dual pole dual throw, single DC coil
 *
 * KiCad symbol: `Relay:RTE2xAxx`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*RT2*FormC*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FRT2_bistable%7F1116%7Fpdf%7FEnglish%7FENG_DS_RT2_bistable_1116.pdf%7F1-1415537-8
 * Keywords: TE DPDT CO bistable DC.
 * Default footprint: Relay_THT:Relay_DPDT_Schrack-RT2-FormC_RM5mm.
 */
export class RTE2xAxx extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RTE2xAxx";
  override referencePrefix = "K";
}

/**
 * Schrack RT2 relay, bistable dual pole dual throw, dual DC coils
 *
 * KiCad symbol: `Relay:RTE2xFxx`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*RT2*FormC*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FRT2_bistable%7F1116%7Fpdf%7FEnglish%7FENG_DS_RT2_bistable_1116.pdf%7F1-1415537-8
 * Keywords: TE DPDT CO bistable DC.
 * Default footprint: Relay_THT:Relay_DPDT_Schrack-RT2-FormC-Dual-Coil_RM5mm.
 */
export class RTE2xFxx extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
  "PA3": "A3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", PA3: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RTE2xFxx";
  override referencePrefix = "K";
}

/**
 * Schrack RT2 relay, monostable dual pole dual throw, DC or AC coil
 *
 * KiCad symbol: `Relay:RTE2xxxx`. Reference prefix: `K`.
 * Footprint filters: Relay*DPDT*RT2*FormC*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FRT2%7F1014%7Fpdf%7FEnglish%7FENG_DS_RT2_1014.pdf%7F6-1393243-3
 * Keywords: TE DPDT CO monostable.
 * Default footprint: Relay_THT:Relay_DPDT_Schrack-RT2-FormC_RM5mm.
 */
export class RTE2xxxx extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P21": "21",
  "P22": "22",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", P21: "passive", P22: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RTE2xxxx";
  override referencePrefix = "K";
}

/**
 * Schrack RT2 relay, monostable dual pole normally open, DC or AC coil
 *
 * KiCad symbol: `Relay:RTE4xxxx`. Reference prefix: `K`.
 * Footprint filters: Relay*DPST*RT2*FormA*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FRT2%7F1014%7Fpdf%7FEnglish%7FENG_DS_RT2_1014.pdf%7F6-1393243-3
 * Keywords: TE DPST NO monostable.
 * Default footprint: Relay_THT:Relay_DPST_Schrack-RT2-FormA_RM5mm.
 */
export class RTE4xxxx extends Component.withPins({
  "P11": "11",
  "P14": "14",
  "P21": "21",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P14: "passive", P21: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:RTE4xxxx";
  override referencePrefix = "K";
}

/**
 * Relay DPST, monostable, normally closed, EN50005
 *
 * KiCad symbol: `Relay:Relay_DPST-NC`. Reference prefix: `K`.
 * Footprint filters: Relay?DPST*.
 * Keywords: 2P2T 2-Form-B double dual pole throw NC.
 */
export class Relay_DPST_NC extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P21": "21",
  "P22": "22",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P21: "passive", P22: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Relay_DPST-NC";
  override referencePrefix = "K";
}

/**
 * Relay DPST, monostable, normally open, EN50005
 *
 * KiCad symbol: `Relay:Relay_DPST_Latching_1coil`. Reference prefix: `K`.
 * Footprint filters: Relay?DPST*.
 * Keywords: 2P2Tdouble dual pole throw latching.
 */
export class Relay_DPST_Latching_1coil extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "P23": "23",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", P23: "passive", P24: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Relay_DPST_Latching_1coil";
  override referencePrefix = "K";
}

/**
 * Relay DPST, bistable, double-coil, EN50005
 *
 * KiCad symbol: `Relay:Relay_DPST_Latching_2coil`. Reference prefix: `K`.
 * Footprint filters: Relay?DPDT*.
 * Keywords: 2P2T double dual pole throw latching.
 */
export class Relay_DPST_Latching_2coil extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "P23": "23",
  "P24": "24",
  "PA1": "A1",
  "PA2": "A2",
  "PB1": "B1",
  "PB2": "B2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", P23: "passive", P24: "passive", PA1: "passive", PA2: "passive", PB1: "passive", PB2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Relay_DPST_Latching_2coil";
  override referencePrefix = "K";
}

/**
 * Relay SPDT, bistable, double-coil, EN50005
 *
 * KiCad symbol: `Relay:Relay_SPDT_Latching_1coil`. Reference prefix: `K`.
 * Footprint filters: Relay?SPDT*.
 * Keywords: 1P2T 1-Form-C single pole throw latching.
 */
export class Relay_SPDT_Latching_1coil extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Relay_SPDT_Latching_1coil";
  override referencePrefix = "K";
}

/**
 * Relay SPDT, bistable, double-coil, EN50005
 *
 * KiCad symbol: `Relay:Relay_SPDT_Latching_2coil`. Reference prefix: `K`.
 * Footprint filters: Relay?SPDT*.
 * Keywords: 1P2T 1-Form-C single pole throw latching.
 */
export class Relay_SPDT_Latching_2coil extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
  "PB1": "B1",
  "PB2": "B2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", P14: "passive", PA1: "passive", PA2: "passive", PB1: "passive", PB2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Relay_SPDT_Latching_2coil";
  override referencePrefix = "K";
}

/**
 * Relay SPST, normally closed, EN50005
 *
 * KiCad symbol: `Relay:Relay_SPST-NC`. Reference prefix: `K`.
 * Footprint filters: Relay?SPST*.
 * Keywords: 1P1T 1-Form-B single pole throw NC.
 */
export class Relay_SPST_NC extends Component.withPins({
  "P11": "11",
  "P12": "12",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P11: "passive", P12: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Relay_SPST-NC";
  override referencePrefix = "K";
}

/**
 * Relay SPST, bistable, double-coil, EN50005
 *
 * KiCad symbol: `Relay:Relay_SPST_Latching_2coil`. Reference prefix: `K`.
 * Footprint filters: Relay?SPST*.
 * Keywords: 1P1T single pole throw latching.
 */
export class Relay_SPST_Latching_2coil extends Component.withPins({
  "P13": "13",
  "P14": "14",
  "PA1": "A1",
  "PA2": "A2",
  "PB1": "B1",
  "PB2": "B2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P13: "passive", P14: "passive", PA1: "passive", PA2: "passive", PB1: "passive", PB2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Relay_SPST_Latching_2coil";
  override referencePrefix = "K";
}

/**
 * Sanyo SRD relay, Single Pole Miniature Power Relay, Closing Contact
 *
 * KiCad symbol: `Relay:SANYOU_SRD_Form_A`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*SANYOU*SRD*Series*Form*A*.
 * @see http://www.sanyourelay.ca/public/products/pdf/SRD.pdf
 * Keywords: Single Pole Relay SPST.
 * Default footprint: Relay_THT:Relay_SPST_SANYOU_SRD_Series_Form_A.
 */
export class SANYOU_SRD_Form_A extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P5: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:SANYOU_SRD_Form_A";
  override referencePrefix = "K";
}

/**
 * Sanyo SRD relay, Single Pole Miniature Power Relay, Opening Contact
 *
 * KiCad symbol: `Relay:SANYOU_SRD_Form_B`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*SANYOU*SRD*Series*Form*B*.
 * @see http://www.sanyourelay.ca/public/products/pdf/SRD.pdf
 * Keywords: Single Pole Relay SPST.
 * Default footprint: Relay_THT:Relay_SPST_SANYOU_SRD_Series_Form_B.
 */
export class SANYOU_SRD_Form_B extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "P5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P4: "passive", P5: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:SANYOU_SRD_Form_B";
  override referencePrefix = "K";
}

/**
 * Sanyo SRD relay, Single Pole Miniature Power Relay,
 *
 * KiCad symbol: `Relay:SANYOU_SRD_Form_C`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*SANYOU*SRD*Series*Form*C*.
 * @see http://www.sanyourelay.ca/public/products/pdf/SRD.pdf
 * Keywords: Single Pole Relay SPDT.
 * Default footprint: Relay_THT:Relay_SPDT_SANYOU_SRD_Series_Form_C.
 */
export class SANYOU_SRD_Form_C extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:SANYOU_SRD_Form_C";
  override referencePrefix = "K";
}

/**
 * Standex Meder SIL reed relay, SPST, Closing Contact
 *
 * KiCad symbol: `Relay:SILxx-1Axx-71x`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*StandexMeder*SIL*Form1A*.
 * @see https://standexelectronics.com/wp-content/uploads/datasheet_reed_relay_SIL.pdf
 * Keywords: Single Pole Reed Relay SPST.
 * Default footprint: Relay_THT:Relay_SPST_StandexMeder_SIL_Form1A.
 */
export class SILxx_1Axx_71x extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P5": "5",
  "P7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P5: "passive", P7: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:SILxx-1Axx-71x";
  override referencePrefix = "K";
}

/**
 * Standex Meder SIL reed relay, SPST, Opening Contact
 *
 * KiCad symbol: `Relay:SILxx-1Bxx-71x`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*StandexMeder*SIL*Form1B*.
 * @see https://standexelectronics.com/wp-content/uploads/datasheet_reed_relay_SIL.pdf
 * Keywords: Single Pole Reed Relay SPST.
 * Default footprint: Relay_THT:Relay_SPST_StandexMeder_SIL_Form1B.
 */
export class SILxx_1Bxx_71x extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P5": "5",
  "P7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P3: "passive", P5: "passive", P7: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:SILxx-1Bxx-71x";
  override referencePrefix = "K";
}

/**
 * Standex Meder SIL reed relay, SPDT
 *
 * KiCad symbol: `Relay:SILxx-1Cxx-51x`. Reference prefix: `K`.
 * Footprint filters: Relay*SPDT*StandexMeder*SIL*Form1C*.
 * @see https://standexelectronics.com/wp-content/uploads/datasheet_reed_relay_SIL.pdf
 * Keywords: Single Pole Reed Relay SPDT.
 * Default footprint: Relay_THT:Relay_SPDT_StandexMeder_SIL_Form1C.
 */
export class SILxx_1Cxx_51x extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P5": "5",
  "P7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P5: "passive", P7: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:SILxx-1Cxx-51x";
  override referencePrefix = "K";
}

/**
 * TE PCH relay, Miniature Single Pole, SPST-NO
 *
 * KiCad symbol: `Relay:TE_PCH-1xxx2M`. Reference prefix: `K`.
 * Footprint filters: Relay*SPST*TE*PCH*1***2M*.
 * @see http://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FPCH_series_relay_data_sheet_E%7F1215%7Fpdf%7FEnglish%7FENG_DS_PCH_series_relay_data_sheet_E_1215.pdf%7F9-1440003-0
 * Keywords: Miniature Single Pole Relay.
 * Default footprint: Relay_THT:Relay_SPST_TE_PCH-1xxx2M.
 */
export class TE_PCH_1xxx2M extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P5: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:TE_PCH-1xxx2M";
  override referencePrefix = "K";
}

/**
 * TIANBO HJR-4102-L, Single Pole Relay, 5mm Pitch, 3A
 *
 * KiCad symbol: `Relay:TIANBO-HJR-4102-L`. Reference prefix: `K`.
 * Footprint filters: Relay*HJR?4102*.
 * @see https://cdn-reichelt.de/documents/datenblatt/C300/DS_HJR4102E.pdf
 * Keywords: Single Pole Relay.
 * Default footprint: Relay_THT:Relay_SPDT_HJR-4102.
 */
export class TIANBO_HJR_4102_L extends Component.withPins({
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P5: "passive", P6: "passive", P7: "passive", P8: "passive", P12: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:TIANBO-HJR-4102-L";
  override referencePrefix = "K";
}

/**
 * Standex Meder UMS reed relay, SPST, Closing Contact, with diode
 *
 * KiCad symbol: `Relay:UMS05-1A80-75D`. Reference prefix: `K`.
 * Footprint filters: Relay*StandexMeder*UMS*.
 * @see https://standexelectronics.com/wp-content/uploads/datasheets/43/4305180175d.pdf
 * Keywords: Single Pole Reed Relay SPST.
 * Default footprint: Relay_THT:Relay_StandexMeder_UMS.
 */
export class UMS05_1A80_75D extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:UMS05-1A80-75D";
  override referencePrefix = "K";
}

/**
 * Standex Meder UMS reed relay, SPST, Closing Contact
 *
 * KiCad symbol: `Relay:UMS05-1A80-75L`. Reference prefix: `K`.
 * Footprint filters: Relay*StandexMeder*UMS*.
 * @see https://standexelectronics.com/wp-content/uploads/datasheets/43/4305180075d.pdf
 * Keywords: Single Pole Reed Relay SPST.
 * Default footprint: Relay_THT:Relay_StandexMeder_UMS.
 */
export class UMS05_1A80_75L extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:UMS05-1A80-75L";
  override referencePrefix = "K";
}

/**
 * Mini Relay K, 12VDC coil / rated voltage, 1 Form U (twin make contact, i.e. 2x NO with common connection), Sealed Enclosure
 *
 * KiCad symbol: `Relay:V23072-Cx061-xxx8`. Reference prefix: `K`.
 * Footprint filters: *Relay*Tyco*.
 * @see https://www.electrokit.com/upload/product/41019/41019252/V23072.pdf
 * Keywords: SPST Miniature Single Pole Obsolete.
 * Default footprint: Relay_THT:Relay_Tyco_V23072_Sealed.
 */
export class V23072_Cx061_xxx8 extends Component.withPins({
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "no_connect", P4: "passive", P5: "passive", P6: "no_connect", P7: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:V23072-Cx061-xxx8";
  override referencePrefix = "K";
}

/**
 * Mini Relay K, 24VDC coil / rated voltage, 1 Form U (twin make contact, i.e. 2x NO with common connection), Sealed Enclosure
 *
 * KiCad symbol: `Relay:V23072-Cx062-xxx8`. Reference prefix: `K`.
 * Footprint filters: *Relay*Tyco*.
 * @see https://www.electrokit.com/upload/product/41019/41019252/V23072.pdf
 * Keywords: SPST Miniature Single Pole Obsolete.
 * Default footprint: Relay_THT:Relay_Tyco_V23072_Sealed.
 */
export class V23072_Cx062_xxx8 extends Component.withPins({
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "PA1": "A1",
  "PA2": "A2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "no_connect", P4: "passive", P5: "passive", P6: "no_connect", P7: "passive", PA1: "passive", PA2: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:V23072-Cx062-xxx8";
  override referencePrefix = "K";
}

/**
 * Hsin Da Y14-series relay, Single Pole Dual Throw
 *
 * KiCad symbol: `Relay:Y14x-1C-xxDS`. Reference prefix: `K`.
 * Footprint filters: Relay*Y14*.
 * @see http://www.hsinda.com.tw/upload/file/Y14-20200430135145.pdf
 * Keywords: Relay SPDT.
 * Default footprint: Relay_THT:Relay_SPDT_HsinDa_Y14.
 */
export class Y14x_1C_xxDS extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", P4: "passive", P5: "passive", P6: "passive", ...opts.pinTypes } });
  }
  override schema = "Relay:Y14x-1C-xxDS";
  override referencePrefix = "K";
}
