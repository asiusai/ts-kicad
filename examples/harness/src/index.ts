import { Project } from 'ts-kicad'
import { HARNESS } from './circuit'

export default new Project({
  entries: [HARNESS],
  verify: true,
  pdf: true,
  // This connector land pattern has a 0.142 mm minimum locating-hole gap.
  // Keep the tighter rule inside J3; confirm it with the chosen fabricator.
  designRules: `(version 1)
(rule "Connector locating holes"
  (condition "A.memberOfFootprint('J3') && B.memberOfFootprint('J3')")
  (constraint hole_clearance (min 0.125mm)))`,
})
