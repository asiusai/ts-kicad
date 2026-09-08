# API and release review

The circuit API uses generated components with direct pins, `.wire()`, `local()`,
`global()`, `sheet()`, power constants, one BOM and a default-exported `Project`.
The tool generates schematics; PCB work stays in KiCad.

Remaining limitations:

- Circuit state is process-wide. Named nets, sheets and power constants retain
  connections. CLI subprocesses isolate exports; independent projects in one
  long-lived process need project-scoped ownership first.
- Schematic export writes files before ERC completes. A failed export can leave
  updated schematic files. Library sync and staged component downloads have
  rollback handling, but full schematic export still needs transaction support.
- Mutable connection sets, sheet assignments and exporter metadata remain public.
  Read-only views would better protect graph invariants.
- Dense schematic labels and automatic passive placement need layout improvement.
- Electrical pin types remain necessary for ERC. Imported vendor pin types and
  model alignment require review; the importer does not guess corrections.
- The tool's release license remains undecided. Keep `private: true` until chosen.
  KiCad library attribution is included, and explicit package contents exclude
  downloaded example assets and generated outputs.

The public harness contains circuit source and a download recipe. Private project
code is outside this package. Builtin catalogs account for most package size;
optional library packs can come later.
