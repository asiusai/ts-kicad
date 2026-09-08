import { Project } from 'ts-kicad'
import { HARNESS } from './circuit'

export default new Project({ entries: [HARNESS], verify: true, pdf: true })
