// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * ZigBee  transceiver, 2.4GHz, AES, SPI, 1.8 to 3.6V, QFN-32
 *
 * KiCad symbol: `RF_ZigBee:AT86RF233-Z`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm?P0.5mm?EP3.3x3.3mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8351-MCU_Wireless-AT86RF233_Datasheet.pdf
 * Keywords: Microchip Atmel 802.15.4 RF RF4CE 6LoWPAN ISM.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.3x3.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT86RF233_Z extends Component.withPins({
  /** Physical pin 1: DIG3; output. */
  "DIG3": "1",
  /** Physical pin 2: DIG4; output. */
  "DIG4": "2",
  /** Physical pin 3: AVSS; power_in. */
  "AVSS_3": "3",
  /** Physical pin 4: RFP; passive. */
  "RFP": "4",
  /** Physical pin 5: RFN; passive. */
  "RFN": "5",
  /** Physical pin 6: AVSS; passive. */
  "AVSS_6": "6",
  /** Physical pin 7: DVSS; power_in. */
  "DVSS_7": "7",
  /** Physical pin 8: ~{RST}; input. */
  "~{RST}": "8",
  /** Physical pin 9: DIG1; output. */
  "DIG1": "9",
  /** Physical pin 10: DIG2; output. */
  "DIG2": "10",
  /** Physical pin 11: SLP_TR; input. */
  "SLP_TR": "11",
  /** Physical pin 12: DVSS; passive. */
  "DVSS_12": "12",
  /** Physical pin 13: DVDD; power_in. */
  "DVDD_13": "13",
  /** Physical pin 14: DVDD; passive. */
  "DVDD_14": "14",
  /** Physical pin 15: DEVDD; power_in. */
  "DEVDD": "15",
  /** Physical pin 16: DVSS; passive. */
  "DVSS_16": "16",
  /** Physical pin 17: CLKM; output. */
  "CLKM": "17",
  /** Physical pin 18: DVSS; passive. */
  "DVSS_18": "18",
  /** Physical pin 19: SCLK; input. */
  "SCLK": "19",
  /** Physical pin 20: MISO; output. */
  "MISO": "20",
  /** Physical pin 21: DVSS; passive. */
  "DVSS_21": "21",
  /** Physical pin 22: MOSI; input. */
  "MOSI": "22",
  /** Physical pin 23: ~{SEL}; input. */
  "~{SEL}": "23",
  /** Physical pin 24: IRQ; output. */
  "IRQ": "24",
  /** Physical pin 25: XTAL2; passive. */
  "XTAL2": "25",
  /** Physical pin 26: XTAL1; passive. */
  "XTAL1": "26",
  /** Physical pin 27: AVSS; passive. */
  "AVSS_27": "27",
  /** Physical pin 28: EVDD; power_in. */
  "EVDD": "28",
  /** Physical pin 29: AVDD; power_in. */
  "AVDD": "29",
  /** Physical pin 30: AVSS; passive. */
  "AVSS_30": "30",
  /** Physical pin 31: AVSS; passive. */
  "AVSS_31": "31",
  /** Physical pin 32: AVSS; passive. */
  "AVSS_32": "32",
  /** Physical pin 33: EPAD; power_in. */
  "EPAD": "33",
}) {
  override schema = "RF_ZigBee:AT86RF233-Z";
  override referencePrefix = "U";
}

/**
 * 2.4 GHz ZigBee/IEEE 802.15.4 RF transceiver
 *
 * KiCad symbol: `RF_ZigBee:CC2520`. Reference prefix: `U`.
 * Footprint filters: *QFN*28*5x5mm*P0.5mm*.
 * @see http://www.ti.com/lit/gpn/cc2520
 * Keywords: 2.4GHz rf transceiver ZigBee 802.15.4.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_5x5mm_P0.5mm_EP3.35x3.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CC2520 extends Component.withPins({
  /** Physical pin 1: SO; output. */
  "SO": "1",
  /** Physical pin 2: SI; input. */
  "SI": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: GPIO5; bidirectional. */
  "GPIO5": "4",
  /** Physical pin 5: GPIO4; bidirectional. */
  "GPIO4": "5",
  /** Physical pin 6: GPIO3; bidirectional. */
  "GPIO3": "6",
  /** Physical pin 7: GPIO2; bidirectional. */
  "GPIO2": "7",
  /** Physical pin 8: DVDD; power_in. */
  "DVDD": "8",
  /** Physical pin 9: GPIO1; bidirectional. */
  "GPIO1": "9",
  /** Physical pin 10: GPIO0; bidirectional. */
  "GPIO0": "10",
  /** Physical pin 11: AVDD5; power_in. */
  "AVDD5": "11",
  /** Physical pin 12: XOSC_Q2; passive. */
  "XOSC_Q2": "12",
  /** Physical pin 13: XOSC_Q1; passive. */
  "XOSC_Q1": "13",
  /** Physical pin 14: AVDD3; power_in. */
  "AVDD3": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: AVDD2; power_in. */
  "AVDD2": "16",
  /** Physical pin 17: RF_P; passive. */
  "RF_P": "17",
  /** Physical pin 19: RF_N; passive. */
  "RF_N": "19",
  /** Physical pin 20: AVDD1; power_in. */
  "AVDD1": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: AVDD4; power_in. */
  "AVDD4": "22",
  /** Physical pin 23: RBIAS; passive. */
  "RBIAS": "23",
  /** Physical pin 24: AVDD_GUARD; power_in. */
  "AVDD_GUARD": "24",
  /** Physical pin 25: ~{RESET}; input. */
  "~{RESET}": "25",
  /** Physical pin 26: VREG_EN; input. */
  "VREG_EN": "26",
  /** Physical pin 27: DCOUPL; passive. */
  "DCOUPL": "27",
  /** Physical pin 28: SCLK; input. */
  "SCLK": "28",
  /** Physical pin 29: AGND; power_in. */
  "AGND": "29",
}) {
  override schema = "RF_ZigBee:CC2520";
  override referencePrefix = "U";
}

/**
 * 2.4 GHz, Low Power Transceiver for 802.15.4 (Zigbee controller)
 *
 * KiCad symbol: `RF_ZigBee:MC13192`. Reference prefix: `U`.
 * @see https://www.nxp.com/products/no-longer-manufactured/2.4-ghz-low-power-transceiver-for-802.15.4:MC13192
 * Keywords: ZIGBEE.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MC13192 extends Component.withPins({
  /** Physical pin 1: RFIN-; input. */
  "RFIN-": "1",
  /** Physical pin 2: RFIN+; input. */
  "RFIN+": "2",
  /** Physical pin 3: TINJ_P; input. */
  "TINJ_P": "3",
  /** Physical pin 4: TINJ_M; input. */
  "TINJ_M": "4",
  /** Physical pin 5: PAO_P; open_collector. */
  "PAO_P": "5",
  /** Physical pin 6: PAO_M; open_collector. */
  "PAO_M": "6",
  /** Physical pin 7: SM; input. */
  "SM": "7",
  /** Physical pin 8: GPIO4; bidirectional. */
  "GPIO4": "8",
  /** Physical pin 9: GPIO3; bidirectional. */
  "GPIO3": "9",
  /** Physical pin 10: GPIO2; bidirectional. */
  "GPIO2": "10",
  /** Physical pin 11: GPIO1; bidirectional. */
  "GPIO1": "11",
  /** Physical pin 12: RSTBi; input. */
  "RSTBi": "12",
  /** Physical pin 13: RXTXENi; input. */
  "RXTXENi": "13",
  /** Physical pin 14: ATTNBi; input. */
  "ATTNBi": "14",
  /** Physical pin 15: CLKOo; output. */
  "CLKOo": "15",
  /** Physical pin 16: SPICLKi; input. */
  "SPICLKi": "16",
  /** Physical pin 17: MOSIi; input. */
  "MOSIi": "17",
  /** Physical pin 18: MISOo; tri_state. */
  "MISOo": "18",
  /** Physical pin 19: CEBi; input. */
  "CEBi": "19",
  /** Physical pin 20: IRQBo; open_collector. */
  "IRQBo": "20",
  /** Physical pin 21: VDDD; power_out. */
  "VDDD": "21",
  /** Physical pin 22: VDDIN; power_in. */
  "VDDIN": "22",
  /** Physical pin 23: GPIO5; bidirectional. */
  "GPIO5": "23",
  /** Physical pin 24: GPIO6; bidirectional. */
  "GPIO6": "24",
  /** Physical pin 25: GPIO7; bidirectional. */
  "GPIO7": "25",
  /** Physical pin 26: XTALin; input. */
  "XTALin": "26",
  /** Physical pin 27: XTALout; output. */
  "XTALout": "27",
  /** Physical pin 28: VDDLO2; power_in. */
  "VDDLO2": "28",
  /** Physical pin 29: VDDLO1; power_in. */
  "VDDLO1": "29",
  /** Physical pin 30: VDDVCO; power_out. */
  "VDDVCO": "30",
  /** Physical pin 31: VBATT; input. */
  "VBATT": "31",
  /** Physical pin 32: VDDA; power_out. */
  "VDDA": "32",
  /** Physical pin 33: GND; power_in. */
  "GND": "33",
}) {
  override schema = "RF_ZigBee:MC13192";
  override referencePrefix = "U";
}

/**
 * NXP JN5164/JN5169 breakout module, DIP
 *
 * KiCad symbol: `RF_ZigBee:TWE-L-DP-W`. Reference prefix: `U`.
 * Footprint filters: DIP*28*W15.24mm*.
 * @see https://www.mono-wireless.com/jp/products/TWE-Lite-DIP/MW-PDS-TWELITEDIP-JP.pdf
 * Keywords: TWELITE.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TWE_L_DP_W extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: DIO14/SCL; bidirectional. */
  "DIO14/SCL": "2",
  /** Physical pin 3: DIO7/RX; bidirectional. */
  "DIO7/RX": "3",
  /** Physical pin 4: DIO5/PWM1; bidirectional. */
  "DIO5/PWM1": "4",
  /** Physical pin 5: DIO18/DO1; bidirectional. */
  "DIO18/DO1": "5",
  /** Physical pin 6: DO0/PWM2; output. */
  "DO0/PWM2": "6",
  /** Physical pin 7: DO1/PWM3; bidirectional. */
  "DO1/PWM3": "7",
  /** Physical pin 8: DIO19/DO2; bidirectional. */
  "DIO19/DO2": "8",
  /** Physical pin 9: DIO4/DO3; bidirectional. */
  "DIO4/DO3": "9",
  /** Physical pin 10: DIO6/TX; bidirectional. */
  "DIO6/TX": "10",
  /** Physical pin 11: DIO8/PWM4; bidirectional. */
  "DIO8/PWM4": "11",
  /** Physical pin 12: DIO9/DO4; bidirectional. */
  "DIO9/DO4": "12",
  /** Physical pin 13: DIO10/M1; bidirectional. */
  "DIO10/M1": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: DIO12/DI1; bidirectional. */
  "DIO12/DI1": "15",
  /** Physical pin 16: DIO13/DI2; bidirectional. */
  "DIO13/DI2": "16",
  /** Physical pin 17: DIO11/DI3; bidirectional. */
  "DIO11/DI3": "17",
  /** Physical pin 18: DIO16/DI4; bidirectional. */
  "DIO16/DI4": "18",
  /** Physical pin 19: DIO15/SDA; bidirectional. */
  "DIO15/SDA": "19",
  /** Physical pin 20: DIO17/BPS; bidirectional. */
  "DIO17/BPS": "20",
  /** Physical pin 21: ~{RESET}; input. */
  "~{RESET}": "21",
  /** Physical pin 22: ADC1/AI1; input. */
  "ADC1/AI1": "22",
  /** Physical pin 23: DIO0/AI2; bidirectional. */
  "DIO0/AI2": "23",
  /** Physical pin 24: ADC2/AI3; input. */
  "ADC2/AI3": "24",
  /** Physical pin 25: DIO1/AI4; bidirectional. */
  "DIO1/AI4": "25",
  /** Physical pin 26: DIO2/M2; bidirectional. */
  "DIO2/M2": "26",
  /** Physical pin 27: DIO3/M3; bidirectional. */
  "DIO3/M3": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "RF_ZigBee:TWE-L-DP-W";
  override referencePrefix = "U";
}

/**
 * NXP JN5164/JN5169 breakout module, DIP
 *
 * KiCad symbol: `RF_ZigBee:MW-R-DP-W`. Reference prefix: `U`.
 * Footprint filters: DIP*28*W15.24mm*.
 * @see https://www.mono-wireless.com/jp/products/TWE-Lite-DIP/MW-PDS-TWELITEDIP-JP.pdf
 * Keywords: TWELITE.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MW_R_DP_W extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: DIO14/SCL; bidirectional. */
  "DIO14/SCL": "2",
  /** Physical pin 3: DIO7/RX; bidirectional. */
  "DIO7/RX": "3",
  /** Physical pin 4: DIO5/PWM1; bidirectional. */
  "DIO5/PWM1": "4",
  /** Physical pin 5: DIO18/DO1; bidirectional. */
  "DIO18/DO1": "5",
  /** Physical pin 6: DO0/PWM2; output. */
  "DO0/PWM2": "6",
  /** Physical pin 7: DO1/PWM3; bidirectional. */
  "DO1/PWM3": "7",
  /** Physical pin 8: DIO19/DO2; bidirectional. */
  "DIO19/DO2": "8",
  /** Physical pin 9: DIO4/DO3; bidirectional. */
  "DIO4/DO3": "9",
  /** Physical pin 10: DIO6/TX; bidirectional. */
  "DIO6/TX": "10",
  /** Physical pin 11: DIO8/PWM4; bidirectional. */
  "DIO8/PWM4": "11",
  /** Physical pin 12: DIO9/DO4; bidirectional. */
  "DIO9/DO4": "12",
  /** Physical pin 13: DIO10/M1; bidirectional. */
  "DIO10/M1": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: DIO12/DI1; bidirectional. */
  "DIO12/DI1": "15",
  /** Physical pin 16: DIO13/DI2; bidirectional. */
  "DIO13/DI2": "16",
  /** Physical pin 17: DIO11/DI3; bidirectional. */
  "DIO11/DI3": "17",
  /** Physical pin 18: DIO16/DI4; bidirectional. */
  "DIO16/DI4": "18",
  /** Physical pin 19: DIO15/SDA; bidirectional. */
  "DIO15/SDA": "19",
  /** Physical pin 20: DIO17/BPS; bidirectional. */
  "DIO17/BPS": "20",
  /** Physical pin 21: ~{RESET}; input. */
  "~{RESET}": "21",
  /** Physical pin 22: ADC1/AI1; input. */
  "ADC1/AI1": "22",
  /** Physical pin 23: DIO0/AI2; bidirectional. */
  "DIO0/AI2": "23",
  /** Physical pin 24: ADC2/AI3; input. */
  "ADC2/AI3": "24",
  /** Physical pin 25: DIO1/AI4; bidirectional. */
  "DIO1/AI4": "25",
  /** Physical pin 26: DIO2/M2; bidirectional. */
  "DIO2/M2": "26",
  /** Physical pin 27: DIO3/M3; bidirectional. */
  "DIO3/M3": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "RF_ZigBee:MW-R-DP-W";
  override referencePrefix = "U";
}

/**
 * NXP JN5164/JN5169 breakout module, SMD
 *
 * KiCad symbol: `RF_ZigBee:TWE-L-WX`. Reference prefix: `U`.
 * Footprint filters: MonoWireless?TWE*.
 * @see https://www.mono-wireless.com/jp/products/TWE-LITE/MW-PDS-TWELITE-JP.pdf
 * Keywords: TWELITE.
 * Default footprint: RF_Module:MonoWireless_TWE-L-WX.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TWE_L_WX extends Component.withPins({
  /** Physical pin 1: DO0/PWM2; output. */
  "DO0/PWM2": "1",
  /** Physical pin 2: DO1/PWM3; bidirectional. */
  "DO1/PWM3": "2",
  /** Physical pin 3: DIO18/DO1; bidirectional. */
  "DIO18/DO1": "3",
  /** Physical pin 4: DIO19/DO2; bidirectional. */
  "DIO19/DO2": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: DIO4/DO3; bidirectional. */
  "DIO4/DO3": "6",
  /** Physical pin 7: DIO5/PWM1; bidirectional. */
  "DIO5/PWM1": "7",
  /** Physical pin 8: DIO6/TX; bidirectional. */
  "DIO6/TX": "8",
  /** Physical pin 9: DIO7/RX; bidirectional. */
  "DIO7/RX": "9",
  /** Physical pin 10: DIO8/PWM4; bidirectional. */
  "DIO8/PWM4": "10",
  /** Physical pin 11: DIO9/DO4; bidirectional. */
  "DIO9/DO4": "11",
  /** Physical pin 12: DIO10/M1; bidirectional. */
  "DIO10/M1": "12",
  /** Physical pin 13: DIO12/DI1; bidirectional. */
  "DIO12/DI1": "13",
  /** Physical pin 14: DIO14/SCL; bidirectional. */
  "DIO14/SCL": "14",
  /** Physical pin 15: DIO13/DI2; bidirectional. */
  "DIO13/DI2": "15",
  /** Physical pin 16: DIO11/DI3; bidirectional. */
  "DIO11/DI3": "16",
  /** Physical pin 17: DIO15/SDA; bidirectional. */
  "DIO15/SDA": "17",
  /** Physical pin 18: DIO16/DI4; bidirectional. */
  "DIO16/DI4": "18",
  /** Physical pin 19: DIO17/BPS; bidirectional. */
  "DIO17/BPS": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: ~{RESET}; input. */
  "~{RESET}": "21",
  /** Physical pin 22: ADC2/AI3; input. */
  "ADC2/AI3": "22",
  /** Physical pin 23: ADC1/AI1; input. */
  "ADC1/AI1": "23",
  /** Physical pin 24: DIO0/AI2; bidirectional. */
  "DIO0/AI2": "24",
  /** Physical pin 25: DIO1/AI4; bidirectional. */
  "DIO1/AI4": "25",
  /** Physical pin 26: DIO2/M2; bidirectional. */
  "DIO2/M2": "26",
  /** Physical pin 27: DIO3/M3; bidirectional. */
  "DIO3/M3": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
}) {
  override schema = "RF_ZigBee:TWE-L-WX";
  override referencePrefix = "U";
}

/**
 * NXP JN5164/JN5169 breakout module, SMD
 *
 * KiCad symbol: `RF_ZigBee:MW-R-WX`. Reference prefix: `U`.
 * Footprint filters: MonoWireless?TWE*.
 * @see https://www.mono-wireless.com/jp/products/TWE-LITE/MW-PDS-TWELITE-JP.pdf
 * Keywords: TWELITE.
 * Default footprint: RF_Module:MonoWireless_TWE-L-WX.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MW_R_WX extends Component.withPins({
  /** Physical pin 1: DO0/PWM2; output. */
  "DO0/PWM2": "1",
  /** Physical pin 2: DO1/PWM3; bidirectional. */
  "DO1/PWM3": "2",
  /** Physical pin 3: DIO18/DO1; bidirectional. */
  "DIO18/DO1": "3",
  /** Physical pin 4: DIO19/DO2; bidirectional. */
  "DIO19/DO2": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: DIO4/DO3; bidirectional. */
  "DIO4/DO3": "6",
  /** Physical pin 7: DIO5/PWM1; bidirectional. */
  "DIO5/PWM1": "7",
  /** Physical pin 8: DIO6/TX; bidirectional. */
  "DIO6/TX": "8",
  /** Physical pin 9: DIO7/RX; bidirectional. */
  "DIO7/RX": "9",
  /** Physical pin 10: DIO8/PWM4; bidirectional. */
  "DIO8/PWM4": "10",
  /** Physical pin 11: DIO9/DO4; bidirectional. */
  "DIO9/DO4": "11",
  /** Physical pin 12: DIO10/M1; bidirectional. */
  "DIO10/M1": "12",
  /** Physical pin 13: DIO12/DI1; bidirectional. */
  "DIO12/DI1": "13",
  /** Physical pin 14: DIO14/SCL; bidirectional. */
  "DIO14/SCL": "14",
  /** Physical pin 15: DIO13/DI2; bidirectional. */
  "DIO13/DI2": "15",
  /** Physical pin 16: DIO11/DI3; bidirectional. */
  "DIO11/DI3": "16",
  /** Physical pin 17: DIO15/SDA; bidirectional. */
  "DIO15/SDA": "17",
  /** Physical pin 18: DIO16/DI4; bidirectional. */
  "DIO16/DI4": "18",
  /** Physical pin 19: DIO17/BPS; bidirectional. */
  "DIO17/BPS": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: ~{RESET}; input. */
  "~{RESET}": "21",
  /** Physical pin 22: ADC2/AI3; input. */
  "ADC2/AI3": "22",
  /** Physical pin 23: ADC1/AI1; input. */
  "ADC1/AI1": "23",
  /** Physical pin 24: DIO0/AI2; bidirectional. */
  "DIO0/AI2": "24",
  /** Physical pin 25: DIO1/AI4; bidirectional. */
  "DIO1/AI4": "25",
  /** Physical pin 26: DIO2/M2; bidirectional. */
  "DIO2/M2": "26",
  /** Physical pin 27: DIO3/M3; bidirectional. */
  "DIO3/M3": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
}) {
  override schema = "RF_ZigBee:MW-R-WX";
  override referencePrefix = "U";
}

/**
 * Digi Xbee SMT RF module
 *
 * KiCad symbol: `RF_ZigBee:XBee_SMT`. Reference prefix: `U`.
 * Footprint filters: Digi*XBee*SMT*.
 * @see http://www.digi.com/resources/documentation/digidocs/pdfs/90002126.pdf
 * Keywords: Digi XBee.
 * Default footprint: RF_Module:Digi_XBee_SMT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XBee_SMT extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: DIO13/UART_TX; bidirectional. */
  "DIO13/UART_TX": "3",
  /** Physical pin 4: DIO14/UART_RX/~{CONFIG}; bidirectional. */
  "DIO14/UART_RX/~{CONFIG}": "4",
  /** Physical pin 5: DIO12; bidirectional. */
  "DIO12": "5",
  /** Physical pin 6: RESET/OD_OUT; bidirectional. */
  "RESET/OD_OUT": "6",
  /** Physical pin 7: DIO10/RSSI/PWM0; bidirectional. */
  "DIO10/RSSI/PWM0": "7",
  /** Physical pin 8: DIO11/PWM1; bidirectional. */
  "DIO11/PWM1": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: DIO8/SLEEP_REQUEST; bidirectional. */
  "DIO8/SLEEP_REQUEST": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: DIO19/SPI_~{ATTN}; output. */
  "DIO19/SPI_~{ATTN}": "12",
  /** Physical pin 13: GND; power_in. */
  "GND_13": "13",
  /** Physical pin 14: DIO18/SPI_CLK; input. */
  "DIO18/SPI_CLK": "14",
  /** Physical pin 15: DIO17/SPI_~{SSEL}; input. */
  "DIO17/SPI_~{SSEL}": "15",
  /** Physical pin 16: DIO16/SPI_MOSI; input. */
  "DIO16/SPI_MOSI": "16",
  /** Physical pin 17: DIO15/SPI_MISO; output. */
  "DIO15/SPI_MISO": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 24: DIO4; bidirectional. */
  "DIO4": "24",
  /** Physical pin 25: DIO7/~{CTS}; bidirectional. */
  "DIO7/~{CTS}": "25",
  /** Physical pin 26: DIO9/ON/~{SLEEP}; bidirectional. */
  "DIO9/ON/~{SLEEP}": "26",
  /** Physical pin 27: VREF; input. */
  "VREF": "27",
  /** Physical pin 28: DIO5/ASSOCIATE; bidirectional. */
  "DIO5/ASSOCIATE": "28",
  /** Physical pin 29: DIO6/~{RTS}; bidirectional. */
  "DIO6/~{RTS}": "29",
  /** Physical pin 30: DIO3/AD3; bidirectional. */
  "DIO3/AD3": "30",
  /** Physical pin 31: DIO2/AD2; bidirectional. */
  "DIO2/AD2": "31",
  /** Physical pin 32: DIO1/AD1; bidirectional. */
  "DIO1/AD1": "32",
  /** Physical pin 33: DIO0/AD0; bidirectional. */
  "DIO0/AD0": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: GND; power_in. */
  "GND_35": "35",
  /** Physical pin 36: RF; bidirectional. */
  "RF": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
}) {
  override schema = "RF_ZigBee:XBee_SMT";
  override referencePrefix = "U";
}

