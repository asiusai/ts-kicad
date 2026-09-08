# ts-kicad

Circuits as TypeScript, exported as complete KiCad projects. Bun runs the `.ts` files
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
Meaningful pin labels stay unchanged (`IMU.p.SDA`). Unnamed pins, or pins labeled
only with their physical number, use `P1`, `P2`, etc. (`CAP.p.P1`). Physical KiCad
pin numbers remain strings: `CAP.p.P1.number === '1'`.

```ts
const CAP = c({ value: '100nF' }).wire({ P1: P3V3, P2: GND })
new PWR_FLAG().partial({ P1: CAP.p.P1 })
```

Default-export a component or an array of components; export follows their electrical graphs.
`sheet('IMU')` sets the sheet for subsequent components and local nets.
Use `local('NRST')` for a named local label, or `local()` for a fresh unnamed net.
Local nets cannot connect outside their declaration sheet, even through pin references.
Use `global('IMU_SDA')` for a named global label, or `global()` for a fresh unnamed
net that can cross sheets. Reuse the returned net or a connected pin to join more
pins. Separate unnamed calls never join automatically. Matching named locals join
only within one sheet; matching named globals join across sheets.

```ts
import { local, global } from 'ts-kicad/helpers'

const CAP = c({ value: '100nF' }).wire({ P1: local(), P2: GND })
const PULLUP = r({ value: '10k' }).wire({ P1: CAP.p.P1, P2: P3V3 })
```

Connections accept pins and nets, not strings. `null` means intentionally
disconnected. Export assigns labels to unnamed nets when needed for layout;
unnamed globals use generated global labels.

Use `GND`, `P3V3`, `P5V`, etc. from `ts-kicad/power` for native power symbols.
Negative supplies use `N5V`, `N12V`, etc. Native rail names stay unchanged:
`P3V3` is `+3.3V`; KiCad's separate `+3V3` rail is `P3V3_3V3`.
`power('VIN_PROTECTED')` creates a custom named rail using the VCC symbol shape.
Power rails are global, and symbols appear at their connection points. `PWR_FLAG`
is a component: connect its `P1` to the actual powered rail. Importing an unused
power symbol has no electrical effect. `.p` selects pins, `.wire({ ... })` maps every
pin, `.partial({ ... })` maps a subset, and `null` means no-connect. Both return the component; `PIN.connect(...)` returns the pin.
`ref` is optional: `c({ ref: 'C50', value: '100nF' })`. Automatic numbering reserves
explicit references first and rejects duplicates.

## BOM

Builtin footprints include typed IDs, unique copper pad numbers, mounting type,
JSDoc descriptions and native `.kicad_mod` geometry:

```ts
import { C_0603_1608Metric } from 'ts-kicad/footprints/Capacitor_SMD'
```

Use the imported object as the BOM's `footprint`. Assignment validates the symbol's
physical pin numbers, and export checks the actual footprint file again, including
for existing PCBs. Duplicate pad numbers are allowed; unnumbered mechanical holes
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

After installation, run these from any directory:

```sh
ts-kicad generate-components                     # regenerate installed libraries
ts-kicad generate-footprints                     # regenerate footprint metadata and native files
ts-kicad init ./project                         # create KiCad project from src/index.ts
ts-kicad sync ./project                         # refresh bindings, circuit and project settings
ts-kicad sync ./project --libraries-only        # only refresh custom library bindings
ts-kicad symbols custom.kicad_sym components.ts  # generate project symbols
ts-kicad import board.kicad_sch ./project --verify
ts-kicad inspect ./project/src/index.ts
ts-kicad export ./project
ts-kicad outputs ./out/board.kicad_sch --docs-only # BOM and schematic PDF
ts-kicad outputs ./out/board.kicad_sch             # also checked fabrication outputs
```

Project TypeScript files live in `src/`. Export defaults to `src/index.ts`, which
can default-export a `Project` with component roots and settings. Paths are relative
to that entry file:

```ts
import { Project } from 'ts-kicad'
import { MAIN } from './main'
import { AUXILIARY } from './auxiliary'

export default new Project({
  entries: [MAIN, AUXILIARY],
  output: '../board.kicad_sch',
  symbols: ['../symbols.kicad_sym'], // custom geometry; builtins use installed KiCad
  footprints: ['../custom.pretty'],
  verify: true,
  pdf: true,
  settings: {
    text_variables: { REVISION: 'v1' },
    // Native .kicad_pro keys: board, net_settings, schematic, erc, etc.
  },
  pcbOptions: { thickness: 1.6 },
  designRules: '(version 1)\n',
})
```

Multiple entries are loaded together before traversing their combined graph. Shared
components are included once, reference numbering is global, and explicit global labels and power rails
connect across entries. Local labels only join within their sheet. Root BOM rules are combined in entry order; the first matching
rule wins. One file can instead `export default [MAIN, AUXILIARY]`.

`init ./project` creates the schematic, project, initial PCB, library tables and
optional PDF. The PDF goes in `generated/` beside the project, alongside the
other outputs from `outputs`. It refuses to replace an existing project. `sync ./project`
refreshes libraries before loading the entry, then updates the schematic and
settings while preserving PCB placement and routing. Both also accept `src/index.ts`.
Output defaults to `<project>/<project>.kicad_sch` if omitted.

`settings` contains overrides for bundled KiCad 10 defaults. Objects merge
recursively, so `settings: { board: { design_settings: { rules: { min_clearance: 0.1 } } } }`
changes just one rule. Lists replace the default list; named entries (such as the
Default net class) inherit fields from the matching default entry. Removing an
override restores its default on the next sync. Unmanaged project fields are preserved. `designRules` writes the
native `.kicad_dru` text. `pcbOptions` accepts `thickness` in millimeters, native
`layers` tuples (`[id, name, type, optionalDisplayName]`), and a partial native `(setup ...)`
string for stackup, mask and plotting settings. Standard user layers are included
automatically; only list your copper layers and any user-layer overrides. Setup
sections merge recursively with the defaults, so plotting flags need not be repeated. These apply on init and sync.
Keep these declarations in the entry to recreate a project without a template.

`export ./project/src/index.ts` remains available for explicit output paths and CLI
overrides. An explicit output argument or CLI option overrides its Project setting.

You can also pass `export main.ts auxiliary.ts output.kicad_sch --verify --pdf` and repeat
`--symbols` / `--footprints`. `--project source.kicad_pro` seeds board settings,
net classes and custom design rules, and resolves its footprint libraries.
`KICAD_SYMBOL_DIR` overrides the installed symbol directory.

Export references the original symbol, footprint and model libraries directly.
Electrical symbol variants share one `overrides.kicad_sym` beside the schematic.
It writes library tables and a project file, and runs ERC. Successful ERC/initial
DRC reports are removed; failed reports remain for diagnosis. Stale generated
sheet files are removed after a successful export. Any ERC error
or warning fails the command. `--verify` additionally compares the native KiCad
netlist with the TypeScript graph. Missing BOM metadata produces warnings.

The first export creates a PCB with footprints, references, fields, net assignments
and schematic links. It checks physical DRC and schematic parity; unrouted
connections are expected at this stage. Placement is a staging grid: the board
still needs an outline, placement and routing. Subsequent exports preserve placement and routing. When only net names change,
export updates the PCB names and matching net-class patterns after checking that
the electrical connectivity is identical. Use KiCad's **Update PCB from Schematic**
for connectivity or component changes.
Existing boards support both numeric-ID and name-only KiCad net encodings. Sync
updates matching net names, schematic links and component fields without replacing
footprints or changing routing. Project-local standard 3D models can be referenced
through `settings.text_variables` (for example `KICAD10_3DMODEL_DIR`).

For configurable pins, component options accept `pinTypes: { PIN_NAME: 'input' }`.
Use this only for the actual configured electrical mode. Export creates a local
symbol variant in `overrides.kicad_sym` so ERC checks that mode without changing the builtin library.
Supply flags are explicit components from `ts-kicad/power`.

`outputs` replaces the former Python hardware exporter. It reads native KiCad
netlists, including hierarchical sheets. Outputs go into a `generated/`
subdirectory by default; `--output` changes it. BOM grouping preserves DNP,
exclusions, composite quantities, anchors and height constraints. Fabrication
requires the matching schematic and passes ERC, DRC, schematic parity and BOM/PCB
population checks before producing Gerbers, drills, CPL, STEP/STL and a Gerber ZIP.
Raw Gerber layers, the Gerber job and drill files go in `generated/gerbers/`.
The upload ZIP stays at `generated/<name>-gerbers.zip`, and placement data is
`generated/<name>-pos.csv`. BOM, PDF and 3D files stay at the generated root. No README
is generated. Successful DRC reports are removed; failed reports are retained.
Unrouted boards fail fabrication checks. Failed checks preserve manufacturing files
and attempt to refresh mechanical previews. Requires `kicad-cli` and `zip`.

Layout experiments are described in [LAYOUT.md](LAYOUT.md).
Development checks: `bun run typecheck` and `bun test` inside this folder.

## Example and current limits

See [examples/harness](examples/harness/README.md) for a complete public harness
circuit, a TypeScript component download recipe, centralized BOM, and the
`init` / `sync` / PCB-routing workflow.

Use one circuit per process. Sheet context and matching named nets currently live
in module state; separate CLI invocations are isolated, independent `Project`
objects in the same process are not. Multiple entrypoints for one circuit are
supported.

`sync` creates an initial board and preserves an existing board's placement and
routing. It can reconcile net renames when connectivity is identical. Structural
PCB changes still require KiCad's Update PCB from Schematic workflow; `sync` is
not a general PCB ECO engine. Automatic schematic layout is experimental.

TypeScript entries execute as local code with the permissions of the CLI process.
Only run entries you trust. There is no telemetry or automatic upload in the CLI.
Inspection JSON and diagnostics can contain local paths; they are not intended
as public release artifacts.

See [THIRD_PARTY.md](THIRD_PARTY.md) for bundled-library attribution. The package
remains private until a license for the tool's own source is selected and release
packaging is finalized.
