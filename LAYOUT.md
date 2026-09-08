# Schematic layout

The default `tscircuit` layout uses port-ordered placement and the published
`@tscircuit/schematic-trace-solver` 0.0.188 pipeline for schematic wiring.

Placement follows the central-component idea from tscircuit's
[ascendingCentralLrBug1](https://github.com/tscircuit/schematic-autolayout/blob/main/src/lib/algorithms/ascending-central-lr-bug-1.ts): choose the component with the most
pins, then order attached components by the pins they connect to. Our placement
implementation supports all four KiCad pin sides and retains native symbol
geometry. Dense decoupling capacitors wrap into aligned rows, with ground below.
This is an adaptation of the placement strategy, not tscircuit's entire rendering
or pattern-matching system.

The [trace pipeline](https://github.com/tscircuit/schematic-trace-solver) performs
connection pairing, orthogonal routing, overlap cleanup and label placement.
The adapter converts KiCad coordinates to solver coordinates and back, then:

- Snaps routes to the KiCad grid and rejects contacts with other nets, including
  fallback label wires. Rejected routes retain ordinary electrical labels.
- Splits same-net branches at junctions and removes detached route stubs.
- Tracks every visible pin occurrence, including repeated physical pin numbers.
- Suppresses pin labels only when the actual native pin is connected by a wire.
- Keeps named nets and cross-group connections labeled; fully wired unnamed local
  connections do not need visible generated names.

Local/global label scope and power-symbol identity come from the circuit graph.
The solver cannot rename nets or change connectivity. Native export verification
and ERC check the result. Circuit islands are still packed with ELK; the router
connects components within a functional group and uses labels between groups.

`Project.layout` also accepts `banks` (the previous decoupling-bank layout) and
`elk` (individual symbol blocks) for comparison. The CLI equivalent is
`--layout tscircuit`, `--layout banks`, or `--layout elk`.

Dense labels can still need layout refinement. Review the PDF; a passing ERC is
an electrical check, not a guarantee of perfect typography. PCB work stays in
KiCad.
