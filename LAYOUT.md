# Schematic layout

The default exporter uses ELK for arranging and packing fixed-size functional
blocks. Before layout, two-pin capacitors between a supply and GND are grouped
into decoupling banks. Every physical capacitor remains present with its own
reference/value. Rows share actual supply and ground wires; the remaining
connections use global labels. This preserves the current TS circuit API.

The plain `elk` comparison mode places the same symbols individually in a
layered graph. It is deliberately available as a baseline; the large number of
MCU supply pins makes its ungrouped output particularly tall.

Use `ts-kicad compare` to measure layout and routing on your own example circuit.

All owned tooling is TypeScript, including XML/S-expression handling, symbol
library generation, circuit import, layout, schematic export, and comparison.
The XML parser and layout/router engines are reused dependencies. Python is not
needed. No SKiDL source was copied or ported.

References:

- [ELK layered layout and port constraints](https://eclipse.dev/elk/reference/algorithms/org-eclipse-elk-layered.html)
- [ELK's JavaScript distribution](https://github.com/kieler/elkjs)
- [tscircuit schematic trace solver](https://github.com/tscircuit/schematic-trace-solver)
- [SKiDL's schematic decision layer](https://github.com/devbisme/skidl/blob/master/src/skidl/schematics/decisions.py), reviewed as an alternative
