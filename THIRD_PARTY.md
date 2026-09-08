# Third-party assets

`components/` is generated from the official KiCad symbol libraries. `footprints/`
contains generated definitions and native KiCad footprint geometry. These assets
retain the [KiCad library license](LICENSES/KiCad-library.md), CC BY-SA 4.0 with the
KiCad exception for electronic designs. This license is distinct from the license
chosen for the tool's source code.

Upstream sources:

- https://gitlab.com/kicad/libraries/kicad-symbols
- https://gitlab.com/kicad/libraries/kicad-footprints

Runtime dependency licenses are provided by their respective packages. No project
schematics, boards or manufacturing data are required by the builtin generators.
Example downloads must retain their own provenance and licensing information.

The schematic wire router uses tscircuit's MIT-licensed
`@tscircuit/schematic-trace-solver` (pinned to 0.0.188), with its runtime helper
packages declared explicitly because its published manifest does not list them.
The solver's license is retained in its installed package. The four-sided
placement adapter is an independent implementation inspired by the central-pin
ordering strategy in tscircuit/schematic-autolayout. See [LAYOUT.md](LAYOUT.md).
