# ts-kicad

TypeScript schematics, BOMs and KiCad settings. Requires Bun and KiCad 10 with its symbol, footprint and 3D model libraries. JLC imports also need `uv`; fabrication exports need `zip`.

1. Use builtins from `ts-kicad/lib/symbols/*` and `ts-kicad/lib/footprints/*`, or import parts with `ts-kicad jlc C123 C456`. JLC imports go into `lib/<part-number>/`, with unspecified pins made passive. For manually imported assets in `lib/<name>/`, run `ts-kicad convert [name ...]` to generate `symbols.ts` and `footprints.ts` per folder.
2. Define the circuit in `src/index.ts` and default-export a `Project`. Set footprints and manufacturer/part details in `Project.bom`. See [harness-box](examples/harness-box/src/index.ts).
3. Run `ts-kicad sync` to generate the schematic and project settings. Open KiCad, update the PCB from the schematic, then place and route the board there.
4. Run `ts-kicad export` to write BOM, PDF, fabrication files, positions and mechanical models into `outputs/`. ERC/DRC findings and schematic/PCB mismatches are logged without blocking export; check reports are saved there too.

Run commands from the project directory. Separate part numbers or folder names with spaces; quote names containing spaces. The two `internal-*` commands regenerate this package's builtins during development.

```text
$ ts-kicad
Usage: ts-kicad <command> [options]

  sync                Sync the TypeScript circuit/settings into KiCad.
  export              Log ERC/DRC findings and export BOM, PDF, fabrication files, positions and mechanical models.
  convert             Generate symbols.ts and footprints.ts for all lib folders or selected folders.
  jlc                 Import JLCPCB parts into lib/PART_NO and convert those folders.
  internal-symbols    Regenerate lib/symbols from installed KiCad libraries (package development).
  internal-footprints Regenerate lib/footprints from installed KiCad libraries (package development).

Use ts-kicad <command> --help for arguments. Paths are relative to the current directory.
```
