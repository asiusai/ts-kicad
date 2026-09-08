# Harness

A public TypeScript version of harness-v1: an 18-part CAN harness interface with
four CAN pairs, switching, protection and ignition sensing. Its Type-C connector
carries harness signals and 12 V; it is not a standard USB connection.

## Run the example

Install Bun, KiCad 10 (`kicad-cli` and its symbol libraries), and `uv` for the
component downloader. From the ts-kicad checkout:

```sh
bun install
bun link
bun install --cwd examples/harness
bun examples/harness/download.ts
ts-kicad init examples/harness
```

`init` binds the downloaded native libraries before loading `src/index.ts` and
creates the schematic, project and review PDF in `generated/`.
For subsequent circuit or BOM edits:

```sh
ts-kicad sync examples/harness
```

Downloaded libraries and generated KiCad files are ignored in this example.
The downloader refuses to overwrite an existing library. `sync` reuses it, so edits
to the native files are retained. See [SOURCES.md](SOURCES.md) for provenance.

## Build a new project in the same order

```sh
ts-kicad init my-harness
bun examples/harness/download.ts my-harness/lib/components
ts-kicad sync my-harness --libraries-only
```

Then write `my-harness/src/circuit.ts` and `bom.ts`, import the circuit root in
`src/index.ts`, and run `ts-kicad sync my-harness`. This example's source files can be used directly. No source schematic, existing PCB or private package
is needed to generate the project.

`circuit.ts` contains connectivity, `bom.ts` holds footprint and ordering choices,
and `index.ts` owns project settings. All components are reached from `HARNESS`. References are assigned automatically during export.
Pins use generated symbol labels, inline resistors belong to the pins they serve,
and each clamp and switch has an explicit declaration.

## Review

The schematic has 18 physical components and 26 native nets. References are
assigned automatically. Review the generated PDF, then use KiCad to update a PCB
from the schematic and perform placement, routing and DRC there.

The earlier TypeScript routing API sketch is saved in
[routing-idea.md](routing-idea.md). It is documentation only.
