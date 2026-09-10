# ts-kicad

- `sync` - Sync the TypeScript circuit/settings into KiCad.
- `export` - Check ERC/DRC and export BOM, PDF, fabrication files, positions, and models to `outputs/`.
- `convert [folder-name ...]` - Generate `symbols.ts` and `footprints.ts` in every `lib/<folder>/`, or only the selected folders.
- `jlc C<number> [C<number> ...]` - Import parts into `lib/C<number>/` and convert those folders.
- `internal-symbols` - Regenerate `lib/symbols` (package development).
- `internal-footprints` - Regenerate `lib/footprints` (package development).

Run `ts-kicad <command> --help` for arguments.

Separate items with spaces: `ts-kicad jlc C123 C456` or `ts-kicad convert Sensor Connector`. Quote folder names containing spaces.
