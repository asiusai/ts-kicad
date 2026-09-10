import { componentPins } from './index'
// Serialize the circuit graph for schematic generation and netlist verification.
import { Component, isPassiveSymbol, Net, Pin, validatePins, circuitComponents, validateLabels, assignReferences, applyBom, validateBom, type KicadElement } from './index'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'
import { Project, validateNetScopes } from './index'

export async function main(args: string[]) {
if (!args.length) throw new Error('Circuit inspection requires an entry file')
const roots: Component<string>[] = []
let project: Project | undefined
// Load all modules before traversing: later entrypoints may attach to earlier ones.
for (const file of args) {
  const model = await import(pathToFileURL(resolve(file)).href)
  if (model.default instanceof Project) {
    if (project && project !== model.default) throw new Error('Use one Project with a single bom for all entries')
    project = model.default
  }
  const exported: readonly unknown[] = model.default instanceof Project ? model.default.options.entries : Array.isArray(model.default) ? model.default : [model.default]
  if ((!exported.length && !(model.default instanceof Project)) || exported.some(part => !(part instanceof Component))) {
    throw new Error(file + ': default-export a Project, component or nonempty array of components')
  }
  roots.push(...exported as Component<string>[])
}
const entries = circuitComponents(...roots)
const sheetNames = new Map(entries.map(([name, component]) => [name, component.sheetName]))
const references = assignReferences(entries)
for (const [name, component] of entries) component.ref ??= references.get(name)
applyBom(entries.map(([, component]) => component), project?.options.bom ?? [])
validateBom(entries)
validatePins(entries)
validateNetScopes(entries)
validateLabels(entries)
const names = new Map(entries.map(([name, component]) => [component, name]))
if (new Set(entries.map(([name]) => name)).size !== entries.length) {
  throw new Error('Component export names must be unique across sections')
}
// Named boundary passives still belong beside the local pin that uses them.
const owners = new Map<Component<string>, { group: string; ownerPin: string }>()
for (const [name, component] of entries) {
  if (isPassiveSymbol(component.schema)) continue
  for (const [pin, attached] of component.attachments) {
    for (const part of attached) {
      if (isPassiveSymbol(part.schema) &&
          part.sheetName === component.sheetName && !owners.has(part)) {
        owners.set(part, { group: name, ownerPin: pin })
      }
    }
  }
}
const result = entries.map(([name, component]) => ({
  name,
  ref: component.ref,
  pinTypes: Object.fromEntries(Object.entries(component.pinTypes).map(([name, type]) => [componentPins(component)[name].number, type])),
  ...owners.get(component),
  sheet: sheetNames.get(name),
  referencePrefix: component.referencePrefix,
  schema: component.schema,
  symbolSource: component.symbolSource,
  value: component.value,
  footprint: component.footprint,
  footprintSource: component.footprintSource,
  datasheet: component.datasheet,
  properties: component.properties,
  pins: Object.values(componentPins(component)).map((pin) => {
    const visited = new Set<KicadElement>()
    const stack: KicadElement[] = [pin]
    while (stack.length) {
      const element = stack.pop()!
      if (visited.has(element)) continue
      visited.add(element)
      stack.push(...element.connections)
    }
    const members = [...visited].filter((e): e is Pin => e instanceof Pin)
    if (members.some((p) => !names.has(p.component))) throw new Error(`Uncollected component at ${name}.${pin.number}`)
    return {
      name: pin.name,
      number: pin.number,
      noConnect: pin.noConnect,
      netScopes: [...new Set([...visited].filter((e): e is Net => e instanceof Net).map(net => net.scope))],
      members: members.map((p) => ({ component: names.get(p.component), number: p.number })),
      labels: [...visited].filter((e): e is Net => e instanceof Net && e.name !== undefined).map(net => ({name: net.name!, scope: net.scope, sheet: net.sheetName, powerSymbol: net.powerSymbol})),
      netNames: [...new Set([...visited].filter((e): e is Net => e instanceof Net).flatMap((net) => (net.name === undefined ? [] : [net.name])))].sort(),
    }
  }),
}))
console.log(JSON.stringify(result))

}

if (import.meta.main) {
  try { await main(process.argv.slice(2)) }
  catch (error) { console.error(error instanceof Error ? error.message : String(error)); process.exitCode = 1 }
}
