/** Download this example's public library assets. Requires uv and network access. */
import { existsSync, mkdtempSync, mkdirSync, readdirSync, readFileSync, writeFileSync, copyFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const destination = resolve(process.argv[2] ?? join(import.meta.dir, 'lib/components'))
if (existsSync(join(destination, 'components.kicad_sym'))) throw new Error('Library already exists; choose a fresh destination to avoid overwriting edits')
const temporary = mkdtempSync(join(tmpdir(), 'harness-parts-'))
try {
  const child = Bun.spawn([
    'uv', 'tool', 'run', '--from', 'easyeda2kicad==1.0.1', 'easyeda2kicad', '--full', '--overwrite',
    '--lcsc_id', 'C293583', 'C5354889', 'C129018', 'C2969868', 'C134364',
    'C2943844', 'C461018', 'C2673265', 'C21190', 'C22787',
    '--output', join(temporary, 'catalog'),
  ], { stdout: 'inherit', stderr: 'inherit' })
  if (await child.exited) throw new Error('Component download failed')
  const footprints = readdirSync(join(temporary, 'catalog.pretty')).filter(name => name.endsWith('.kicad_mod'))
  const models = readdirSync(join(temporary, 'catalog.3dshapes')).filter(name => /\.(step|wrl)$/i.test(name))
  if (footprints.length !== 9 || models.length !== 18) throw new Error('Incomplete library download')
  mkdirSync(destination, { recursive: true })
  // Vendor exports omit electrical types. Connector/discrete terminals are passive;
  // the MOSFET gate and switch control/supply pins are refined in circuit.ts.
  const symbols = readFileSync(join(temporary, 'catalog.kicad_sym'), 'utf8')
    .replaceAll('catalog:', 'components:').replaceAll('(pin unspecified', '(pin passive')
  writeFileSync(join(destination, 'components.kicad_sym'), symbols)
  for (const name of footprints) {
    let footprint = readFileSync(join(temporary, 'catalog.pretty', name), 'utf8')
    // Unnumbered locating holes are non-plated, not zero-annulus PTH pads.
    footprint = footprint.replace(/\(pad "" thru_hole/g, '(pad "" np_thru_hole')
    // Match the 0.01 mm pad dimensions used by the reference land pattern.
    if (name === 'R0603.kicad_mod') footprint = footprint.replace(/\(size 0\.806 0\.864\)/g, '(size 0.81 0.86)')
    // The connector body outline crosses pads; keep it on fabrication drawings.
    if (name.includes('212528')) footprint = footprint.replaceAll('F.SilkS', 'F.Fab')
    writeFileSync(join(destination, name), footprint)
  }
  for (const name of models) copyFileSync(join(temporary, 'catalog.3dshapes', name), join(destination, name))
  console.log(`Downloaded library to ${destination}. Run ts-kicad sync next.`)
} finally {
  rmSync(temporary, { recursive: true, force: true })
}
