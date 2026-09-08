# API and release review

Reviewed 2026-09-08 with Bun 1.3.11 and KiCad 10.0.6. Keep the small circuit API:
generated components, `.p`, `.wire`, `.partial`, `local`, `global`, `sheet`, power
constants, one BOM and a default-exported `Project`.

## Issues to address next

1. **Circuit state is process-wide.** `src/index.ts` keeps the active sheet and
   named-net registry at module scope; imported power constants also retain
   connections. Two independent Projects in one process can join electrically.
   CLI subprocesses isolate normal exports. Define project-scoped ownership
   before supporting a long-lived server or independent projects in one process.
   Resetting the registry alone would not reset imported power constants.
2. **Schematic export is not transactional.** `src/export_schematic.ts` writes
   sheets and the root before ERC and board checks finish. Failure can leave
   newer schematic/settings files beside the previous PCB. Stage the entire
   project, validate, then replace while checking for concurrent user edits.
   Library sync already has rollback handling.
3. **Existing-board sync is limited.** `src/project_files.ts` can match existing
   pin groups and rename nets, but cannot add/remove/reconnect footprints while
   preserving routing. Keep an explicit KiCad Update PCB from Schematic step
   and make the CLI report when it is required.
4. **Implementation metadata is public API.** Mutable connection sets,
   attachments, sheet assignments and symbol/footprint source paths are exposed
   on components. Prefer read-only public views and internal exporter access.
   Keep meaningful user options, pins, references and BOM assignment public.
   Do not remove electrical pin types: ERC uses them.
5. **Layout needs more work.** Dense pin labels overlap, passive banks remain
   spacious, and subtitles fall back to generated class names. Add collision
   checks and optional explicit display names; keep file parsing out of the model.
6. **Experimental routing adds substantial dependencies.** Most runtime packages
   besides `elkjs` and `fast-xml-parser` support only `compare_layouts.ts`.
   Separate that experiment from the installed CLI before a stable release.
   `bun audit` reports two moderate React Router advisories through
   `graphics-debug` -> `react-router-dom` 6.30.6. The CLI does not serve that UI,
   but the dependency remains and has not been declared safe. See
   [GHSA-wrjc-x8rr-h8h6](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6) and
   [GHSA-337j-9hxr-rhxg](https://github.com/advisories/GHSA-337j-9hxr-rhxg).
7. **Release license is undecided.** KiCad library attribution is included; the
   tool's own license still needs a choice. Keep `private: true` until release.
   The explicit package file list excludes downloaded assets and native outputs.

## Fixed during the review

- `init` scaffolds an empty TypeScript/native project before circuit code exists.
- `sync` populates that untouched scaffold once components are added and preserves
  an already populated PCB on subsequent syncs.
- `.partial()` rejects a map that marks a pin no-connect and connects it elsewhere
  in the same map without partially mutating the graph.
- Initial PCB creation supplies missing Reference, Value and Description fields.
- Generated JSDoc reports at least one unit for common-unit-only symbols.
- Removed application-specific examples, documentation measurements and generator
  identifiers from the standalone tool. Added explicit package contents,
  third-party attribution and the public harness example.

## Validation

54 tests pass, including native KiCad empty-init/populate/re-sync coverage.
The source and harness example pass TypeScript checking. A packed copy installs
outside the workspace and generates the harness using freshly retrieved libraries:
18 physical parts, 26 nets, ERC zero, PCB parity zero. All 26 connectivity groups
were compared with the reference design.

The package scan found no private-project identifiers, common credential patterns,
local workspace paths, dependency folders or generated outputs. This is a content
review and pattern scan, not proof that every possible secret can be recognized.
The public example contains circuit source and the download recipe. Third-party
downloads and native outputs remain local and ignored.

The package is about 17 MB compressed and 230 MB unpacked, mostly builtin library
catalogs. Optional library packs can come later without changing circuit syntax.
