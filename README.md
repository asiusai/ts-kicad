# ts-kicad

Circuits as TypeScript, exported as native KiCad schematics. Bun runs the `.ts` files
directly; there is no JavaScript build step.

```sh
bun install --global "$PWD/ts-kicad"
ts-kicad --help
ts-kicad init my-board # scaffold an empty project
ts-kicad sync my-board # update from src/index.ts
```

The executable requires Bun on PATH. Export and legacy footprint conversion during
sync also require KiCad 10 (`kicad-cli` and its installed symbol libraries).
For local development, `bun install --cwd ts-kicad` followed by `bun link --cwd ts-kicad`
links the command to this checkout. Circuit projects also need the library as a
dependency; `init` creates this dependency for new projects.
The global command uses a project’s installed `ts-kicad` version when available.

## Components

```ts
import { sheet, global, c, r } from 'ts-kicad/helpers'
import { GND, P3V3, PWR_FLAG } from 'ts-kicad/power'
import { LSM6DS3 } from 'ts-kicad/components/Sensor_Motion'
```

All 22,860 installed KiCad symbols are generated across 223 library modules.
`ts-kicad/components` also exports library namespaces such as `Device` and `Connector`.
Descriptions, datasheets, pin details, and footprint hints live in JSDoc.
Project-specific symbols use native `.kicad_sym` libraries; `sync` generates their TypeScript bindings.
Meaningful pin labels stay unchanged (`IMU.SDA`). Unnamed pins, or pins labeled
only with their physical number, use `P1`, `P2`, etc. (`CAP.P1`). Physical KiCad
pin numbers remain strings: `CAP.P1.number === '1'`.

```ts
const CAP = c({ value: '100nF' }).wire({ P1: P3V3, P2: GND })
new PWR_FLAG().wire({ P1: CAP.P1 })
```

Default-export a component or an array of components; export follows their electrical graphs.
`sheet('IMU')` sets the sheet for subsequent components and local nets.
Use `'NRST'` for a named local label, or `local()` for a fresh unnamed net.
Strings belong to the receiving component's sheet, including later pin connections.
Local nets cannot connect outside their declaration sheet, even through pin references.
Use `global('IMU_SDA')` for a named global label, or `global()` for a fresh unnamed
net that can cross sheets. Reuse the returned net or a connected pin to join more
pins. Separate unnamed calls never join automatically. Matching named locals join
only within one sheet; matching named globals join across sheets.

```ts
import { local, global } from 'ts-kicad/helpers'

const CAP = c({ value: '100nF' }).wire({ P1: local(), P2: GND })
const PULLUP = r({ value: '10k' }).wire({ P1: CAP.P1, P2: P3V3 })
```

Connections accept pins, nets and local-label strings. `null` means intentionally
disconnected. Export assigns labels to unnamed nets when needed for layout;
unnamed globals use generated global labels.

Use `GND`, `P3V3`, `P5V`, etc. from `ts-kicad/power` for native power symbols.
Negative supplies use `N5V`, `N12V`, etc. Native rail names stay unchanged:
`P3V3` is `+3.3V`; KiCad's separate `+3V3` rail is `P3V3_3V3`.
`power('VIN_PROTECTED')` creates a custom named rail using the VCC symbol shape.
Power rails are global, and symbols appear at their connection points. `PWR_FLAG`
is a component: connect its `P1` to the actual powered rail. Importing an unused
power symbol has no electrical effect. `.wire({ ... })` maps any subset of
pins and returns the component. `null` means no-connect. Export checks the finished
graph at runtime and warns about pins still left unconnected; `PIN.wire(...)` returns the pin.
`ref` is optional: `c({ ref: 'C50', value: '100nF' })`. Automatic numbering reserves
explicit references first and rejects duplicates.

## BOM

Builtin footprints include typed IDs, unique copper pad numbers, mounting type,
JSDoc descriptions and native `.kicad_mod` geometry:

```ts
import { C_0603_1608Metric } from 'ts-kicad/footprints/Capacitor_SMD'
```

Use the imported object as the BOM's `footprint`. Assignment validates the symbol's
physical pin numbers, and export checks the actual footprint file again, using its physical pad numbers. Duplicate pad numbers are allowed; unnumbered mechanical holes
are ignored. This checks pad mapping, not whether a manufacturer's package fits.
Custom project footprints can still use a KiCad ID and `--footprints` library, or
a `Footprint` definition pointing to a native file.

Regenerate installed libraries with `ts-kicad generate-footprints`.
Native geometry is bundled; exported projects reference the original geometry and models.

Keep choices in one `bom.ts` and attach it with `ROOT.bom = bom`:

```ts
import type { Bom } from 'ts-kicad'
import { C_0603_1608Metric, C_0805_2012Metric } from 'ts-kicad/footprints/Capacitor_SMD'
export const bom: Bom = [
  { schema: 'Device:C', value: '100nF', footprint: C_0603_1608Metric,
    manufacturer: 'YAGEO', partNumber: 'CC0603KRX7R9BB104', lcsc: 'C14663' },
  { ref: 'C50', footprint: C_0805_2012Metric,
    manufacturer: 'YAGEO', partNumber: 'CC0805KRX7R9BB104' },
]
```

The first matching general row supplies defaults. The first matching `ref` row
overrides those fields; `ref` may also be an array. Rows can additionally select
`value`, `package`, or `variant`. Export warns about missing footprint, manufacturer,
or part number, unmapped pins, and named nets connected to fewer than two pins.
Datasheets come from the native symbol at export, rather than the BOM. A component
can explicitly override its datasheet; schematic import preserves such instance metadata.

## Custom KiCad libraries

Keep each download and its generated bindings in one directory:

```text
project/
  lib/
    AS01508MS-SC14-WP/
      AS01508MS-SC14-WP.kicad_sym
      SPKR_AS01508MS-SC14-WP.kicad_mod
      AS01508MS-SC14-WP.step
      symbols.ts                       # generated
      footprints.ts                    # generated
  src/
    index.ts
```

Run `ts-kicad sync project/` from the workspace, or `ts-kicad sync`
inside an initialized project. Use `ts-kicad sync --libraries-only` to generate
bindings before writing the entry module. It generates `symbols.ts` and `footprints.ts` in each `lib/<package>/`, exporting
classes and footprint definitions individually, then syncs the circuit and settings
from `src/index.ts`. It also updates the project-root
`sym-lib-table` and `fp-lib-table`, preserving unrelated library entries.

```ts
import { AS01508MS_SC14_WP } from '../lib/AS01508MS-SC14-WP/symbols'
import { SPKR_AS01508MS_SC14_WP } from '../lib/AS01508MS-SC14-WP/footprints'

// Component declaration:
const SPEAKER = new AS01508MS_SC14_WP()
// In the BOM:
const footprint = SPKR_AS01508MS_SC14_WP
```

Bindings and exported projects reference the original native files directly.
No native copies or separate generated directory are created. Synced symbols
carry their library path, so they do not need a `Project.symbols` list.

Sync resolves existing STEP/STP/VRML references and changes their paths to
`${KIPRJMOD}/lib/...`, preserving offsets, rotations and scales. Missing
references warn; ambiguous matches and name collisions throw before writing.
It does not guess model alignment or create missing model references. Link a
model in KiCad's footprint editor first if the download has no model reference.
Edit native files in KiCad and sync again to refresh the TypeScript definitions.
Legacy footprints are converted using KiCad's native upgrader after removing saved
board placement. This preserves legacy geometry semantics when updating file versions.

The parent folder names the footprint library. `.pretty` and `.3dshapes`
folders also work, but neither suffix is required. Extract archives first;
convert legacy `.lib` symbols to `.kicad_sym` in KiCad.

## CLI

```sh
ts-kicad init my-project
ts-kicad import C21190 C14663 my-project
ts-kicad sync my-project --libraries-only
ts-kicad sync my-project
ts-kicad export src/index.ts out/design.kicad_sch --verify --pdf
ts-kicad inspect src/index.ts
ts-kicad symbols part.kicad_sym symbols.ts
ts-kicad import original.kicad_sch converted --verify
```

JLCPCB import uses `uv` to run pinned EasyEDA2KiCad 1.0.1. It downloads each
component into `lib/C<number>/`, with its native symbol, footprint, available
3D models, `symbols.ts` and `footprints.ts`. Existing component folders are never
overwritten. Downloads are staged and physical pin/pad mappings checked before
installation. Missing optional models warn. Import does not guess electrical pin
types or model alignment; review vendor data before use.

## Project entry

```ts
import { Project } from 'ts-kicad'
import { MCU } from './mcu'

export default new Project({
  entries: [MCU], // Multiple disconnected circuit roots are supported.
  verify: true,
  pdf: true,
  settings: { text_variables: { REVISION: '1' } },
})
```

`init` creates `src/index.ts` when absent. It generates the root schematic,
its sheets, a `.kicad_pro`, native library tables and any needed symbol overrides.
`sync` updates those from the circuit graph. PDFs go in `generated/`.
Settings override native project defaults. Paths in a Project are relative to its
entry module; explicit CLI paths are relative to the working directory.

Export checks native ERC; `verify` also compares exported physical pin connections
against the TypeScript graph. Missing pin mappings and BOM assignments warn.
PCB creation, placement, routing, DRC and fabrication exports belong in KiCad.
The CLI does not read or modify existing PCB files.

Pins are direct properties: `MCU.wire({ SCL: IMU.SCL, SDA: IMU.SDA })`.
Generated pins colliding with component metadata or methods get a `PIN_` prefix.

See [the harness example](examples/harness/README.md) for a complete circuit.

## Development

```sh
bun install
bun run typecheck
bun test src
```

The default schematic layout uses tscircuit's trace solver with native KiCad pin
geometry and port-ordered component placement. See [LAYOUT.md](LAYOUT.md) for
the adapter, label fallbacks and optional layout modes.

The CLI is written in TypeScript and runs directly with Bun. EasyEDA2KiCad is an
external converter invoked through `uv`; KiCad handles native validation and PDF
export. See [REVIEW.md](REVIEW.md) for remaining API limitations and
[THIRD_PARTY.md](THIRD_PARTY.md) for library attribution.
