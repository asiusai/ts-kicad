import { Project, type Bom } from 'ts-kicad'
import { HARNESS } from './harness'
import { CONN_TH_5018761840 } from '../lib/C293583/footprints'
import { CONN_TH_4P_P3_00_212528_0400 } from '../lib/C5354889/footprints'
import { USB_C_SMD_TYPE_C_USB_20 } from '../lib/C129018/footprints'
import { SOD_123FL_L2_6_W1_6_LS3_5_FD } from '../lib/C2969868/footprints'
import { SOT_363_L2_0_W1_3_P0_65_LS2_1_BR } from '../lib/C134364/footprints'
import { R0603 } from '../lib/C21190/footprints'
import { SO_8_L4_9_W3_9_P1_27_LS6_0_BL } from '../lib/C2673265/footprints'
import { SOD_123FL_L2_7_W1_8_LS3_7_RD } from '../lib/C2943844/footprints'
import { SOT_23_3_L2_9_W1_3_P1_90_LS2_4_BR } from '../lib/C461018/footprints'

const bom: Bom = [
  { schema: 'C293583:5018761840', footprint: CONN_TH_5018761840, manufacturer: 'Molex', partNumber: '5018761840', lcsc: 'C293583' },
  { schema: 'C5354889:212528-0400', footprint: CONN_TH_4P_P3_00_212528_0400, manufacturer: 'Molex', partNumber: '212528-0400', lcsc: 'C5354889' },
  { schema: 'C129018:TYPE-C-31-M-04', footprint: USB_C_SMD_TYPE_C_USB_20, manufacturer: 'HRO', partNumber: 'TYPE-C-31-M-04', lcsc: 'C129018' },
  { schema: 'C2969868:STPS2H100ZFY', footprint: SOD_123FL_L2_6_W1_6_LS3_5_FD, manufacturer: 'STMicroelectronics', partNumber: 'STPS2H100ZFY', lcsc: 'C2969868' },
  { schema: 'C134364:BAS40DW-04-7-F', footprint: SOT_363_L2_0_W1_3_P0_65_LS2_1_BR, manufacturer: 'Diodes Incorporated', partNumber: 'BAS40DW-04-7-F', lcsc: 'C134364' },
  { schema: 'C2943844:SMF16A_C2943844', footprint: SOD_123FL_L2_7_W1_8_LS3_7_RD, manufacturer: 'GOODWORK', partNumber: 'SMF16A', lcsc: 'C2943844' },
  { schema: 'C461018:DMN3200U-7', footprint: SOT_23_3_L2_9_W1_3_P1_90_LS2_4_BR, manufacturer: 'Diodes Incorporated', partNumber: 'DMN3200U-7', lcsc: 'C461018' },
  { schema: 'C2673265:DG419LEDY-T1-GE4', footprint: SO_8_L4_9_W3_9_P1_27_LS6_0_BL, manufacturer: 'Vishay', partNumber: 'DG419LEDY-T1-GE4', lcsc: 'C2673265' },
  { schema: 'Device:R', value: '1k', footprint: R0603, manufacturer: 'UNI-ROYAL', partNumber: '0603WAF1001T5E', lcsc: 'C21190' },
  { schema: 'Device:R', value: '120', footprint: R0603, manufacturer: 'UNI-ROYAL', partNumber: '0603WAF1200T5E', lcsc: 'C22787' },
]
export default new Project({
  entries: [HARNESS],
  bom,
})
