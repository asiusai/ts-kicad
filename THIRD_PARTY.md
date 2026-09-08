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
