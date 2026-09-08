import type { Bom } from 'ts-kicad'
import * as footprints from '../lib/components/footprints'

export const bom: Bom = [
  { schema: 'components:5018761840', footprint: footprints.CONN_TH_5018761840,
    manufacturer: 'Molex', partNumber: '5018761840', lcsc: 'C293583' },
  { schema: 'components:212528-0400', footprint: footprints.CONN_TH_4P_P3_00_212528_0400,
    manufacturer: 'Molex', partNumber: '212528-0400', lcsc: 'C5354889' },
  { schema: 'components:TYPE-C-31-M-04', footprint: footprints.USB_C_SMD_TYPE_C_USB_20,
    manufacturer: 'HRO', partNumber: 'TYPE-C-31-M-04', lcsc: 'C129018' },
  { schema: 'components:STPS2H100ZFY', footprint: footprints.SOD_123FL_L2_6_W1_6_LS3_5_FD,
    manufacturer: 'STMicroelectronics', partNumber: 'STPS2H100ZFY', lcsc: 'C2969868' },
  { schema: 'components:BAS40DW-04-7-F', footprint: footprints.SOT_363_L2_0_W1_3_P0_65_LS2_1_BR,
    manufacturer: 'Diodes Incorporated', partNumber: 'BAS40DW-04-7-F', lcsc: 'C134364' },
  { schema: 'components:SMF16A_C2943844', footprint: footprints.SOD_123FL_L2_7_W1_8_LS3_7_RD,
    manufacturer: 'GOODWORK', partNumber: 'SMF16A', lcsc: 'C2943844' },
  { schema: 'components:DMN3200U-7', footprint: footprints.SOT_23_3_L2_9_W1_3_P1_90_LS2_4_BR,
    manufacturer: 'Diodes Incorporated', partNumber: 'DMN3200U-7', lcsc: 'C461018' },
  { schema: 'components:DG419LEDY-T1-GE4', footprint: footprints.SO_8_L4_9_W3_9_P1_27_LS6_0_BL,
    manufacturer: 'Vishay', partNumber: 'DG419LEDY-T1-GE4', lcsc: 'C2673265' },
  { schema: 'Device:R', value: '1k', footprint: footprints.R0603,
    manufacturer: 'UNI-ROYAL', partNumber: '0603WAF1001T5E', lcsc: 'C21190' },
  { schema: 'Device:R', value: '120', footprint: footprints.R0603,
    manufacturer: 'UNI-ROYAL', partNumber: '0603WAF1200T5E', lcsc: 'C22787' },
]
