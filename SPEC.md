# ts-kicad

A simple tool to write kicad schematics in typescript. Allows parts of it to be reusable later, better for seeing changes in git. Exports the schema to kicad schema. Easy JLC part import by just part number. After designing the PCB allows to export the files. It should just work as a CLI tool

Generated schematics must match the TypeScript circuit. Sync must preserve PCB placement and routing. Part imports must never overwrite local edits.

## Syntax

```ts
import { r } from 'ts-kicad/helpers'
import { GND, P12V, PWR_FLAG } from 'ts-kicad/power'
import { TYPE_C_31_M_04 } from '../lib/C129018/symbols.ts'

const SBU_PULLDOWN = r({ value: '120' }).wire({ P1: GND })
const SBU_SERIES = r({ value: '120' }).wire({ P1: SBU_PULLDOWN.P2 })

export const OBD_C = new TYPE_C_31_M_04({ value: 'TYPE-C-31-M-04' }).wire({
  // ...
  SUB1: ['SBU1', SBU_SERIES.P2],
  // ...
  })
```

## CLI

- `ts-kicad sync [project-directory|src/index.ts]` - Generate the KiCad schematic and project.
- `ts-kicad convert [folder-name ...]` - Generate `symbols.ts` and `footprints.ts` for all or selected project `lib/` folders.
+ `ts-kicad jlc C<number> [C<number> ...]` - Import JLC/LCSC parts into `lib/C<number>/` and convert them.
- `ts-kicad export [project-directory|board.kicad_sch|board.kicad_pcb] [--output directory]` - Export BOM, PDF, fabrication files, positions, and mechanical models to `outputs/` by default.
- `ts-kicad internal-symbols [KiCad-symbol-directory]` - Regenerate the package's stock symbol bindings and power helpers.
- `ts-kicad internal-footprints [KiCad-footprint-directory]` - Regenerate the package's stock footprint bindings, only used for this package development.

## Exports

`ts-kicad export` writes to `outputs/` these files:

| File                        | Contents                                                                                  |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| `BOM.csv`                   | Component quantities, purchasing details, and population flags.                           |
| `<name>.pdf`                | Schematic PDF.                                                                            |
| `pos.csv`                   | JLC component positions and rotations for populated PCB parts.                            |
| `<name>.step`               | PCB mechanical model with component models where available.                               |
| `<name>.stl`                | Board-only mechanical model.                                                              |
| `gerbers/<layer-file>.gbr`  | One file per fabrication layer, including applicable auxiliary and via-treatment artwork. |
| `gerbers/<drill-file>.drl`  | Excellon drill files in millimetres, with plated and non-plated holes separated.          |
| `gerbers/<name>-job.gbrjob` | Gerber job metadata.                                                                      |
| `<name>-gerbers.zip`        | Fabrication files, with no enclosing folder.                                              |
