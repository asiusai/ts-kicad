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
creates the schematic, project, initial PCB and `generated/harness.pdf`.
For subsequent circuit or BOM edits:

```sh
ts-kicad sync examples/harness
ts-kicad outputs examples/harness --docs-only
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
`src/index.ts`, and run `ts-kicad sync my-harness`. This example's three source
files can be used directly. No source schematic, existing PCB or private package
is needed to generate the project.

`circuit.ts` contains connectivity, `bom.ts` holds footprint and ordering choices,
and `index.ts` owns project settings. All components are reached from `HARNESS`. References are assigned automatically during export.
Pins use generated symbol labels, inline resistors belong to the pins they serve,
and each clamp and switch has an explicit declaration.

## Validation and next step

Validated with Bun 1.3.11 and KiCad 10.0.6:

- 18 physical components, 98 distinct physical pin identifiers, 26 native nets.
- All 26 net groups match the original harness-v1 connectivity. The downloaded
  Type-C library numbers all four shield pads `0`; the original numbered them
  `S1` through `S4`. All remain grounded.
- ERC: zero errors and warnings. Initial PCB: zero unexpected DRC violations and
  zero schematic parity issues.
- The board still needs an outline, placement and routing of 75 connections.

The connector land pattern has about 0.142 mm between a locating hole and shield
copper. `index.ts` applies a 0.125 mm minimum only within the Type-C footprint. Confirm this constraint
with the chosen fabricator; this is not a claim that the unrouted board is ready
for manufacture. Full `outputs` requires a finished board that passes DRC.

The schematic layout is automatic and currently favors separated labeled groups.
Dense pin labels can still crowd each other. Inspect the PDF before relying on it
as a human-readable wiring reference.
