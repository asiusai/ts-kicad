# Routing API idea

Archived API sketch. Routing is done in KiCad; this is not an implemented API.

```ts
import { F_Cu, B_Cu, In1_Cu, In2_Cu, Rectangle, Zone, Hole, Edge_Cuts } from 'ts-kicad/pcb'
import { GND, P12V } from 'ts-kicad/power'

import {
  HARNESS,
  AUXILIARY,
  DEVICE,
  IGNITION_DIODE,
  SUPPLY_TVS,
  CAN0_CLAMP,
  CAN2_CLAMP,
  IGNITION,
  CAN2_SWITCH,
  CAN0_SWITCH,
  SBU_PULLDOWN,
  SBU_SERIES,
  IGNITION_GATE,
  IGNITION_PULLDOWN,
  IGNITION_OUTPUT,
  CAN0_TERMINATION,
  CAN2_TERMINATION,
  CAN2_ALT_TERMINATION,
} from './src/circuit'

//Board outline
new Rectangle(Edge_Cuts, [100, 100], [120.1, 122.6])

new Hole([108.45, 108.6], 2.3)

// Power planes.
new Zone(
  In1_Cu,
  GND,
  [
    [100.01, 100.03],
    [100.05, 122.53],
    [120.06, 122.56],
    [120.07, 100.02],
  ],
  { thermalGap: 0.25 },
)
new Zone(
  In2_Cu,
  P12V,
  [
    [100.01, 100.03],
    [100.02, 122.57],
    [120.06, 122.56],
    [120.05, 100.03],
  ],
  { priority: 1 },
)

// Components
AUXILIARY.place(B_Cu, [103.48, 107.54])
CAN0_TERMINATION.place(F_Cu, [116.78, 120.83], { rotation: 90 })
CAN2_ALT_TERMINATION.place(F_Cu, [117.79, 116.1])
CAN2_TERMINATION.place(F_Cu, [118.73, 120.83], { rotation: -90 })
CAN0_CLAMP.place(F_Cu, [114.29, 102.08], { rotation: -90 })
CAN2_CLAMP.place(F_Cu, [117.32, 102.11], { rotation: -90 })
CAN2_SWITCH.place(F_Cu, [106.21, 119], { rotation: 180 })
CAN0_SWITCH.place(F_Cu, [112.97, 119.03], { rotation: 180 })
DEVICE.place(B_Cu, [114.9, 104.15])
HARNESS.place(B_Cu, [110.05, 112.45], { rotation: 180 })
IGNITION.place(F_Cu, [107.41, 101.86])
IGNITION_DIODE.place(F_Cu, [111.97, 109.48])
IGNITION_GATE.place(F_Cu, [107.91, 106.05])
IGNITION_OUTPUT.place(F_Cu, [112.05, 102.41], { rotation: -90 })
IGNITION_PULLDOWN.place(F_Cu, [107.96, 104.38], { rotation: 180 })
SBU_PULLDOWN.place(F_Cu, [101.01, 120.89], { rotation: 90 })
SBU_SERIES.place(F_Cu, [102.67, 120.89], { rotation: 90 })
SUPPLY_TVS.place(F_Cu, [117.19, 109.42])

// Ground stitching vias
GND.via([100.61, 117.06], { free: true })
  .via([119.49, 112.53], { free: true })
  .via([119.48, 110.83], { free: true })
  .via([100.74, 115.18], { free: true })
  .via([102.95, 118.09], { free: true })
  .via([101, 112.36], { free: true })
  .via([119.511552, 106.87631], { free: true })
  .via([100.57, 107.42], { free: true })
  .via([102.85, 115.34], { free: true })
  .via([100.73, 109.95], { free: true })
  .via([119.59, 103.39], { free: true })
  .via([115.77, 100.72], { free: true })
  .via([100.58, 118.79], { free: true })
  .via([100.62, 103.26], { free: true })
  .via([111.58, 100.61], { free: true })
  .via([100.75, 104.9], { free: true })
  .via([100.52, 101.56], { free: true })
  .via([119.49, 114.3], { free: true })
  .via([101.49, 100.8], { free: true })
  .via([118.02, 118.03], { free: true })
  .via([105.28, 100.63], { free: true })

// IGN_12
HARNESS.P2.track(F_Cu, [[110.64, 110.26], [110.27, 109.89], [110.27, 109.48], [110.27, 107.66], [110.055, 107.445], IGNITION_GATE.P2])
  .track(F_Cu, [HARNESS.P14, [112.86, 110.26], [112.36, 110.26], [110.64, 110.26]])
  .track(F_Cu, [HARNESS.P2, [103.24, 110.26], [110.64, 110.26]])

// +12V
CAN0_SWITCH['V+']
  .track(F_Cu, [[104.3, 117.89], [104.31, 117.88], CAN2_SWITCH['V+']])
  .track(F_Cu, [[113.99, 109.49], [113.98, 109.48], [113.67, 109.48], [113.67, 108.51], [113.99, 108.19], [115.22, 109.42], SUPPLY_TVS.C])
  .track(F_Cu, [CAN2_CLAMP.C2, [117.32, 102.07153], [117.339322, 102.090852], [117.32, 102.110174], CAN2_CLAMP.C1])
  .track(F_Cu, [CAN0_CLAMP.C1, [114.29, 102.13], CAN0_CLAMP.C2])
  .track(F_Cu, [[111.06, 118.26], [111.07, 118.25], CAN0_SWITCH['V+']])
  .track(F_Cu, [CAN0_SWITCH.VL, [111.07, 119.98]])
  .track(F_Cu, [CAN2_SWITCH.VL, [104.31, 120.05]])
  .track(B_Cu, [
    [116.12, 107.23],
    [116.12, 106.06],
    [116.07, 106.01],
  ])
  .track(B_Cu, [
    [113.67, 106.01],
    [113.62, 106.06],
    [113.62, 107.23],
  ])
  .via([111.06, 118.26])
  .via([117.339322, 102.090852])
  .via([104.3, 117.89])
  .via([104.31, 120.05])
  .via([111.07, 119.98])
  .via([113.99, 108.19])
  .via([114.29, 102.13])

// GND
CAN0_SWITCH.GND.track(F_Cu, [CAN0_SWITCH.GND, [112.34, 118.01], [112.35, 118.02]])
  .track(F_Cu, [[105.57, 117.91], [105.58, 117.9], CAN2_SWITCH.GND])
  .track(F_Cu, [[119.23, 108.2], [118.92, 108.51], SUPPLY_TVS.A])
  .track(F_Cu, [CAN2_CLAMP.A2, [117.97, 101.93], [118.07, 102.03]])
  .track(F_Cu, [[113.590811, 102.096297], [113.64, 102.145486], CAN0_CLAMP.A1])
  .track(F_Cu, [SBU_PULLDOWN.P1, [101.01, 120.955002], [101, 120.945002]])
  .track(F_Cu, [CAN2_SWITCH['V-'], [106.84, 120.03]])
  .track(F_Cu, [IGNITION_PULLDOWN.P1, [108.71, 105.209998], [108.72, 105.219998]])
  .track(F_Cu, [[116.64, 102.06], [116.64, 102.159], [116.67, 102.189], CAN2_CLAMP.A1])
  .track(F_Cu, [[107.3, 100.94], [107.33, 100.91], IGNITION.S])
  .track(F_Cu, [[113.63, 119.94], [113.6, 119.97], CAN0_SWITCH['V-']])
  .track(F_Cu, [[115.04, 102.09], [114.94, 101.99], CAN0_CLAMP.A2])
  .track(B_Cu, [
    [117.67, 106.01],
    [117.62, 106.06],
    [117.62, 107.23],
  ])
  .track(B_Cu, [
    [112.07, 106.01],
    [112.12, 106.06],
    [112.12, 107.23],
  ])
  .via([105.57, 117.91])
  .via([116.64, 102.06])
  .via([112.35, 118.02])
  .via([118.07, 102.03])
  .via([107.3, 100.94])
  .via([106.84, 120.03])
  .via([113.590811, 102.096297])
  .via([108.72, 105.219998])
  .via([115.04, 102.09])
  .via([119.23, 108.2])
  .via([113.63, 119.94])
  .via([101, 120.945002])

// CAN0_H
CAN0_CLAMP.AC2.track(F_Cu, [[112.62, 108.13], [111.607926, 108.13], [110.039, 106.561074], [110.039, 104.671], [110.84, 103.87], [114.47, 103.87], [114.94, 103.4], CAN0_CLAMP.AC2])
  .track(F_Cu, [CAN2_SWITCH.NC, [106.84, 116.24], HARNESS.P3])
  .track(F_Cu, [[104.07, 113.47], HARNESS.P3])
  .track(F_Cu, [HARNESS.P4, HARNESS.P3])
  .track(B_Cu, [HARNESS.P4, [104.45, 111.45], [105.8, 110.1], [109.072735, 110.1], [111.042735, 108.13], [112.62, 108.13], [112.62, 107.23]])
  .via([112.62, 108.13])

// CAN0_L
CAN0_SWITCH.COM.track(F_Cu, [HARNESS.P6, [107.001, 112.401], [107.001, 113.745918], [108.195082, 114.94], [113.562, 114.94], [114.88, 116.258], CAN0_SWITCH.COM])
  .track(F_Cu, [[112.534901, 109.068378], [112.118378, 109.068378], [111.800057, 108.750057], [111.800057, 108.747809], [109.738, 106.685752], [109.738, 102.872], [110.19, 102.42], [112.56, 102.42], [113.64, 101.34], CAN0_CLAMP.AC1])
  .track(B_Cu, [HARNESS.P6, [107.06, 110.44], [109.214322, 110.44], [110.604322, 109.05], [112.52, 109.05], [113.12, 108.45], [113.12, 107.23]])
  .via([112.534901, 109.068378])

// CAN2_L
CAN2_TERMINATION.P1.track(F_Cu, [HARNESS.P18, [117.099, 112.401], [115.099, 112.401], HARNESS.P13])
  .track(F_Cu, [[115.797, 117.86], [118.017, 120.08], CAN2_TERMINATION.P1])
  .track(F_Cu, [HARNESS.P13, [115.001, 112.499], [115.001, 110.94], [115.571, 110.37], [116.48, 110.37], [116.75, 110.1], [116.75, 105.59], [116.47, 105.31], [116.05, 104.89], [116.05, 101.83], CAN2_CLAMP.AC1])
  .track(F_Cu, [
    [115.58, 117.86],
    [115.797, 117.86],
  ])
  .track(F_Cu, [
    [118.54, 119.85],
    [118.63, 119.94],
  ])
  .track(F_Cu, [CAN0_SWITCH.NC, [113.6, 116.902], [114.558, 117.86], [115.58, 117.86]])
  .track(F_Cu, [[115.58, 117.86], [115.58, 114.98], HARNESS.P13])
  .track(F_Cu, [
    [115.618, 117.681],
    [115.797, 117.86],
  ])

// CAN2_H
CAN2_CLAMP.AC2.track(F_Cu, [HARNESS.P16, [116, 111.4], [116.08, 111.4], [117.1, 110.38], [117.1, 105.48], [117.27, 105.31], [117.97, 104.61], CAN2_CLAMP.AC2])
  .track(F_Cu, [CAN2_SWITCH.COM, [109.19, 116.55], [109.27, 116.47]])
  .track(B_Cu, [HARNESS.P16, [115.099, 112.401], [115.099, 113.745918], [112.374918, 116.47], [109.27, 116.47]])
  .via([109.27, 116.47])

// CAN1_H
DEVICE.SSRXp2.track(F_Cu, [HARNESS.P9, HARNESS.P8]).track(B_Cu, [
  HARNESS.P9,
  [111.001, 114.401],
  [112.541918, 114.401],
  [113.099, 113.843918],
  [113.099, 111.056082],
  [113.1, 111.055082],
  [113.1, 110.87],
  [113.649, 110.321],
  [116.199, 110.321],
  [117.12, 109.4],
  [117.12, 107.23],
])

// CAN2_L"
CAN2_ALT_TERMINATION.P1.track(F_Cu, [HARNESS.P15, [117.04, 114.44], CAN2_ALT_TERMINATION.P1])

// CAN0_H"
CAN0_TERMINATION.P2.track(F_Cu, [CAN0_TERMINATION.P2, [115.461, 118.761], [108.501, 118.761], [107.49, 117.75], [107.49, 114.89], [106.05, 113.45], [106.5815, 113.45]])

// CAN1_L
DEVICE.SSRXn2.track(F_Cu, [HARNESS.P7, [109.151, 114.551], [111.769, 114.551], [112.07, 114.25], [112.07, 113.47], HARNESS.P11]).track(B_Cu, [
  HARNESS.P11,
  [111.05, 112.45],
  [111.05, 110.75],
  [111.78, 110.02],
  [115.81, 110.02],
  [116.62, 109.21],
  [116.62, 107.23],
])

// CAN3_H
DEVICE.SSRXp1.track(B_Cu, [[112.47, 105.31], [111.579, 104.419], [107.291, 104.419], [106.59, 105.12], [106.59, 106.732], [105.972, 107.35], [103.29, 107.35], AUXILIARY.P2])

// CAN3_L
DEVICE.SSRXn1.track(B_Cu, [[113.27, 105.31], [112.078, 104.118], [106.902, 104.118], AUXILIARY.P1])

// SBU2
IGNITION_OUTPUT.P2.track(F_Cu, [[112.87, 103.17], [112.86, 103.16], IGNITION_OUTPUT.P2])
  .track(B_Cu, [
    [112.87, 103.17],
    [112.87, 104.11],
    [114.07, 105.31],
  ])
  .via([112.87, 103.17])

// SBU1
CAN0_SWITCH.IN.track(F_Cu, [CAN2_SWITCH.IN, [105.58, 120.85], [105.57, 120.84], [105.57, 119.15], [105.55, 119.13], [103.68, 119.13], SBU_SERIES.P2])
  .track(F_Cu, [[112.38, 120.03], [112.34, 120.07], CAN0_SWITCH.IN])
  .track(B_Cu, [DEVICE.SUB1, [115.62, 107.29], [115.62, 108.92], [114.86, 109.68], [110.4, 109.68], [109.05, 111.03], [109.05, 115.49], [108.76, 115.78], [108.76, 119.13]])
  .track(B_Cu, [
    [108.76, 119.13],
    [111.57, 119.13],
    [112.38, 119.94],
    [112.38, 120.03],
  ])
  .track(B_Cu, [
    [108.76, 119.13],
    [105.55, 119.13],
  ])
  .via([105.55, 119.13])
  .via([112.38, 120.03])

// Net-(Q6-G)
IGNITION.G.track(F_Cu, [IGNITION_GATE.P1, [107.16, 104.06], IGNITION.G])

// Net-(Q6-D)
IGNITION.D.track(F_Cu, [IGNITION_OUTPUT.P1, [111.6, 102.11], [106.66, 102.11], IGNITION.D])

// Net-(R2-Pad2)
SBU_PULLDOWN.P2.track(F_Cu, [
  [102.55, 121.58],
  [102.45, 121.58],
])
  .track(F_Cu, [[102.45, 121.58], [102.51, 121.64], SBU_SERIES.P1])
  .track(F_Cu, [[102.45, 121.58], SBU_PULLDOWN.P2])

// CAN0_L'
CAN0_SWITCH.NO.track(F_Cu, [CAN0_SWITCH.NO, [114.98, 121.58], CAN0_TERMINATION.P1])

// CAN2_H'
CAN2_TERMINATION.P2.track(F_Cu, [CAN2_SWITCH.NO, [110.131, 119.439], [114.939, 119.439], [116.21, 120.71], [117.39, 120.71], [118.26, 121.58], [118.73, 121.58], [119.361, 120.949], [119.361, 116.921], CAN2_ALT_TERMINATION.P2])

```
