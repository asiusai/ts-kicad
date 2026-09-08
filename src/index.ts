import { type Footprint, validateFootprintPads } from './footprint'
export type { Footprint } from './footprint'
let activeSheet: string | undefined
const pinAccess = (name: string) => /^[A-Za-z_$][\w$]*$/.test(name) ? '.p.'+name : '.p['+JSON.stringify(name)+']'

/** Validate prospective joins without changing the electrical graph. */
function validateConnections(groups: readonly KicadElement[][]) {
  const edges = new Map<KicadElement, KicadElement[]>()
  for (const group of groups) {
    if (group.some(element => !(element instanceof KicadElement))) throw new Error('Connections require pins, local() or global(); strings are not supported')
    for (const element of group) edges.set(element, [...edges.get(element) ?? [], ...group])
  }
  const seen = new Set<KicadElement>()
  for (const start of edges.keys()) {
    if (seen.has(start)) continue
    const stack = [start], pins: Pin[] = [], nets: Net[] = []
    while (stack.length) {
      const element = stack.pop()!
      if (seen.has(element)) continue
      seen.add(element)
      if (element instanceof Pin) pins.push(element)
      if (element instanceof Net) nets.push(element)
      stack.push(...element.connections, ...edges.get(element) ?? [])
    }
    const sheets = new Set(pins.map(pin => pin.component.sheetName))
    const locals = nets.filter(net => net.scope === 'local')
    for (const net of locals) for (const sheet of sheets) if (sheet !== net.sheetName) {
      throw new Error(`Local net ${net.name ?? '(unnamed)'} belongs to sheet ${net.sheetName}, cannot connect to sheet ${sheet}; use global() for cross-sheet connections`)
    }
    if (new Set(locals.map(net => net.sheetName)).size > 1) throw new Error('Cannot join local nets from different sheets')
    if (sheets.size > 1 && !nets.some(net => net.scope === 'global')) throw new Error(`Cross-sheet connection (${[...sheets].join(', ')}) requires global()`)
  }
}

/** Recheck the final graph, including any changes to component sheet assignments. */
export function validateNetScopes(entries: readonly (readonly [string, Component<string>])[]) {
  validateConnections(entries.flatMap(([, component]) => Object.values(component.p).map(pin => [pin])))
}

export class KicadElement {
  readonly connections = new Set<KicadElement>()

  connect(...others: KicadElement[]) {
    validateConnections([[this, ...others]])
    if (this instanceof Net) this.activate()
    if ([this, ...others].some((element) => element instanceof Pin && element.noConnect)) {
      throw new Error('Cannot connect a no-connect pin')
    }
    for (const target of others) {
      const other = target
      if (other instanceof Net) other.activate()
      if (other === this) continue
      this.connections.add(other)
      other.connections.add(this)
    }
  }
}

export class Net extends KicadElement {
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return this.name === undefined ? 'Net()' : `Net(${this.name})`
  }

  private static readonly named = new Map<string, Net>()

  constructor(public readonly name?: string, readonly scope: 'local' | 'global' = 'local', readonly powerSymbol?: string, readonly sheetName = scope === 'local' ? activeSheet ?? 'Circuit' : undefined) {
    super()
    // Power constants remain inert until used; importing a symbol must not change a circuit.
    if (!powerSymbol) this.activate()
  }

  private registered = false
  activate() {
    if (this.registered || this.name === undefined) return
    this.registered = true
    const key = JSON.stringify([this.scope, this.scope === 'local' ? this.sheetName : null, this.name])
    const existing = Net.named.get(key)
    if (existing) this.connect(existing)
    else Net.named.set(key, this)
  }

}

/** An explicit global label, shared by every sheet in this circuit. */
export const global = (name?: string) => new Net(name, 'global')

/** A fresh unnamed net. Reuse it or reference a connected pin to join other pins. */
export const local = (name?: string) => new Net(name, 'local')

export class Pin<T extends string = string> extends KicadElement {
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return `${this.component.constructor.name}()${pinAccess(this.name)}`
  }

  noConnect = false

  constructor(
    public readonly component: Component<T>,
    public readonly number: string,
    public readonly name: T,
  ) {
    super()
  }

  override connect(...others: KicadElement[]) {
    super.connect(...others)
    return this
  }
}

export type ElectricalPinType = 'input' | 'output' | 'bidirectional' | 'tri_state' | 'passive' | 'free' | 'unspecified' | 'power_in' | 'power_out' | 'open_collector' | 'open_emitter' | 'no_connect'

export type ComponentOptions = {
  /** Electrical overrides for configurable pins, keyed by pin label. */
  pinTypes?: Record<string, ElectricalPinType>
  ref?: string
  value?: string
  package?: string
  variant?: string
  footprint?: string | Footprint
  datasheet?: string
  properties?: Record<string, string | null>
}

type Connection = Net | Pin | (Net | Pin)[] | null

export class Component<T extends string> {
  static pinMap: Record<string, string> = {}

  static withPins<const P extends readonly string[] | Record<string, string>>(definition: P) {
    type Name = P extends readonly string[] ? `P${P[number]}` : keyof P & string
    const pinMap = Array.isArray(definition) ? Object.fromEntries(definition.map((number) => [`P${number}`, number])) : definition
    return class extends Component<Name> {
      static override pinMap = pinMap as Record<string, string>
    }
  }

  readonly pinTypes: Record<string, ElectricalPinType>
  ref?: string
  readonly p: Record<T, Pin<T>>
  readonly attachments = new Map<string, Component<string>[]>()
  value: string
  readonly package?: string
  readonly variant?: string
  sheetName = activeSheet ?? 'Circuit'
  declarationName?: string
  bom?: Bom
  schema = ''
  symbolSource?: string
  footprint = ''
  footprintSource?: string
  footprintProjectDirectory?: string
  referencePrefix = ''
  datasheet: string
  readonly properties: Record<string, string | null>

  constructor(opts: ComponentOptions = {}) {
    this.pinTypes = opts.pinTypes ?? {}
    this.ref = opts.ref
    this.value = opts.value ?? ''
    this.package = opts.package
    this.variant = opts.variant
    this.datasheet = opts.datasheet ?? ''
    this.properties = opts.properties ?? {}
    this.p = {} as Record<T, Pin<T>>
    const pinMap = (this.constructor as typeof Component).pinMap
    for (const name of Object.keys(this.pinTypes)) if (!Object.hasOwn(pinMap, name)) throw new Error('Unknown pin type override: ' + name)
    for (const name of Object.keys(pinMap) as T[]) {
      this.p[name] = new Pin(this, pinMap[name], name)
    }
    if (opts.footprint) this.setFootprint(opts.footprint)
  }

  setFootprint(footprint: string | Footprint) {
    if (typeof footprint !== 'string') validateFootprintPads(this.ref ?? this.constructor.name, Object.values((this.constructor as typeof Component).pinMap), footprint.pads)
    this.footprint = typeof footprint === 'string' ? footprint : footprint.id
    this.footprintSource = typeof footprint === 'string' ? undefined : footprint.file
    this.footprintProjectDirectory = typeof footprint === 'string' ? undefined : footprint.projectDirectory
  }

  private attach(pin: string, targets: readonly (Net | Pin)[]) {
    for (const target of targets) {
      if (!(target instanceof Pin) || target.component === this) continue
      const parts = this.attachments.get(pin) ?? []
      if (!parts.includes(target.component)) parts.push(target.component)
      this.attachments.set(pin, parts)
    }
  }

  /** Wire every pin, using null for intentional no-connects. */
  wire(connections: Record<T, Connection>): this {
    const missing = (Object.keys(this.p) as T[]).filter((number) => !Object.hasOwn(connections, number) || connections[number] === undefined)
    if (missing.length) {
      throw new Error(`Missing pins for ${this.schema}: ${missing.join(', ')}`)
    }
    return this.partial(connections)
  }

  /** Wire a subset of pins, leaving the others available for later wiring. */
  partial(connections: Partial<Record<T, Connection>>): this {
    // Validate the whole map before adding any connections.
    const joins: KicadElement[][] = []
    for (const number of Object.keys(connections) as T[]) {
      if (!Object.hasOwn(this.p, number)) throw new Error(`Unknown pin: ${this.schema} pin ${number}`)
      const pin = this.p[number], connection = connections[number]
      if (connection === undefined) throw new Error(`Undefined connection: ${this.schema} pin ${number}`)
      if (connection === null) {
        if (pin.connections.size) throw new Error(`Pin already connected: ${this.schema} pin ${number}`)
      } else {
        const targets = Array.isArray(connection) ? connection : [connection]
        joins.push([pin, ...targets])
        if (pin.noConnect || targets.some(target => target instanceof Pin && target.noConnect)) throw new Error('Cannot connect a no-connect pin')
      }
    }
    const disconnected = new Set(Object.entries(connections).filter(([,value])=>value===null).map(([name])=>this.p[name as T]))
    if(joins.some(group=>group.some(element=>element instanceof Pin && disconnected.has(element as Pin<T>))))throw new Error('Cannot connect a pin marked no-connect in the same map')
    validateConnections(joins)
    for (const number of Object.keys(connections) as T[]) {
      const pin = this.p[number]
      if (!pin) throw new Error(`Unknown pin: ${this.schema} pin ${number}`)
      const connection = connections[number]
      if (connection === null) {
        if (pin.connections.size) throw new Error(`Pin already connected: ${this.schema} pin ${number}`)
        pin.noConnect = true
      } else if (connection !== undefined) {
        const targets = Array.isArray(connection) ? connection : [connection]
        pin.connect(...targets)
        this.attach(number, targets)
      }
    }
    return this
  }
}

export type PartAssignment = {
  footprint?: string | Footprint
  manufacturer?: string
  partNumber?: string
  lcsc?: string
  properties?: Record<string, string | null>
}

export type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue }

export type PcbOptions = {
  thickness?: number
  /** Copper layers plus optional user-layer overrides. Standard user layers are included. */
  layers?: readonly (readonly [number, string, string, string?])[]
  /** Partial native (setup ...) expression, merged with defaults. */
  setup?: string
}

export type ProjectSettings = {
  entries: readonly Component<string>[]
  output?: string
  symbols?: readonly string[]
  footprints?: readonly string[]
  project?: string
  verify?: boolean
  pdf?: boolean
  layout?: 'banks' | 'elk'
  /** Native .kicad_pro overrides. Nested objects merge with builtin defaults; arrays replace. */
  settings?: { [key: string]: JsonValue }
  /** Native .kicad_dru text, including its (version 1) header. */
  designRules?: string
  pcbOptions?: PcbOptions
}

/** A circuit graph and its export settings. Paths are relative to its entry file. */
export class Project {
  constructor(readonly options: ProjectSettings) {
    if (options.entries.some(part => !(part instanceof Component))) throw new Error('Project entries must be an array of components')
    if (options.pcbOptions && Object.keys(options.pcbOptions).some(key => !['thickness','layers','setup'].includes(key))) throw new Error('Unknown PCB option')
  }
}

/** First general match supplies defaults; the first matching ref row overrides them. */
export type Bom = readonly (PartAssignment & {
  ref?: string | readonly string[]
  schema?: string
  package?: string
  variant?: string
  value?: string | readonly string[]
})[]

export function applyBom(components: readonly Component<string>[], bom: Bom) {
  for (const component of components) {
    const matches = ({ ref, schema, package: packageName, variant, value }: Bom[number]) =>
      (ref === undefined || (typeof ref === 'string' ? component.ref === ref : ref.includes(component.ref ?? ''))) &&
      (schema === undefined || component.schema === schema) &&
      (packageName === undefined || component.package === packageName) &&
      (variant === undefined || component.variant === variant) &&
      (value === undefined || (typeof value === 'string' ? component.value === value : value.includes(component.value)))
    const general = bom.find(row => row.ref === undefined && matches(row))
    const specific = bom.find(row => row.ref !== undefined && matches(row))
    if (!general && !specific) continue
    const part = { ...general, ...specific, properties: { ...general?.properties, ...specific?.properties } }
    if (part.footprint !== undefined) component.setFootprint(part.footprint)
    Object.assign(component.properties, part.properties)
    if (part.manufacturer !== undefined) component.properties['Manufacturer'] = part.manufacturer
    if (part.partNumber !== undefined) component.properties['MFR.Part #'] = part.partNumber
    if (part.lcsc !== undefined) component.properties['JLCPCB Part #'] = part.lcsc
  }
}

export function validateBom(entries: readonly (readonly [string, Component<string>])[]) {
  const warnings: string[] = []
  for (const [name, component] of entries) {
    if (Object.hasOwn(component.properties, 'exclude_from_bom')) continue
    const missing = Object.entries({
      footprint: component.footprint,
      manufacturer: component.properties['Manufacturer'],
      partNumber: component.properties['MFR.Part #'],
    }).filter(([, value]) => !value?.trim()).map(([field]) => field)
    if (missing.length) warnings.push((component.ref ?? name) + ' (' + (component.value || component.schema) + '): ' + missing.join(', '))
  }
  if (warnings.length) console.warn('Warning: missing BOM details:\n' + warnings.join('\n'))
}

// Follow explicit pin attachments, not global nets, to collect inline components.
export function namedComponents(sections: Record<string, Record<string, Component<string>>>) {
  const roots = Object.values(sections).flatMap((sheet) => Object.entries(sheet))
  const rootParts = new Set(roots.map(([, component]) => component))
  const seen = new Set<Component<string>>()
  const result: [string, Component<string>][] = []
  const visit = (name: string, component: Component<string>) => {
    if (seen.has(component)) return
    seen.add(component)
    result.push([name, component])
    for (const [pin, parts] of component.attachments) {
      parts.filter((part) => !rootParts.has(part)).forEach((part, i) => visit(`${name}.${pin}.${i}`, part))
    }
  }
  roots.forEach(([name, component]) => visit(name, component))
  return result
}

/** Validate the finished circuit, after all modules have added their connections. */
export function validatePins(entries: readonly (readonly [string, Component<string>])[]) {
  const unmapped = entries.flatMap(([name, component]) =>
    Object.values(component.p)
      .filter((pin) => !pin.noConnect && pin.connections.size === 0)
      .map((pin) => `${name}${pinAccess(pin.name)} (physical pin ${pin.number})`),
  )
  if (unmapped.length) {
    console.warn(`Warning: unmapped pins:\n${unmapped.join('\n')}\nWire each pin or mark it null in .wire().`)
  }
}

/** Set the construction context until another sheet call overrides it. */
export function sheet(name: string) {
  if (!name.trim()) throw new Error('Sheet name must not be empty')
  activeSheet = name
}

/** Walk electrical connectivity, including all pins of each reached component. */
export function circuitComponents(...entrypoints: Component<string>[]) {
  const entryParts = new Set(entrypoints)
  const seen = new Set<KicadElement>()
  const parts = new Set<Component<string>>(entrypoints)
  const stack: KicadElement[] = entrypoints.flatMap(root => Object.values(root.p))
  while (stack.length) {
    const element = stack.pop()!
    if (seen.has(element)) continue
    seen.add(element)
    if (element instanceof Pin && !parts.has(element.component)) {
      parts.add(element.component)
      stack.push(...Object.values(element.component.p))
    }
    stack.push(...element.connections)
  }
  const roots: Record<string, Component<string>> = {}
  const inline = new Set<Component<string>>()
  for (const part of parts) {
    for (const attached of part.attachments.values()) {
      for (const other of attached) {
        if (!entryParts.has(other) && !other.declarationName &&
            isPassiveSymbol(other.schema) &&
            other.sheetName === part.sheetName) inline.add(other)
      }
    }
  }
  const counters = new Map<string, number>()
  for (const part of parts) {
    if (inline.has(part)) continue
    const base = part.declarationName ?? part.constructor.name
    const count = (counters.get(base) ?? 0) + 1
    counters.set(base, count)
    const name = part.declarationName ?? `${base}_${count}`
    if (roots[name] && roots[name] !== part) throw new Error(`Duplicate component name: ${name}`)
    roots[name] = part
  }
  const entries = namedComponents({ circuit: roots }).filter(([, part]) => parts.has(part))
  const included = new Set(entries.map(([, part]) => part))
  for (const part of parts) {
    if (!included.has(part)) throw new Error('A connected component needs sheet metadata or an inline pin attachment')
  }
  for (const [name, part] of entries) {
    part.sheetName ??= roots[name.split('.')[0]]?.sheetName
  }
  return entries
}

/** A named net must reach at least two distinct pins in the exported circuit. */
export function validateLabels(entries: readonly (readonly [string, Component<string>])[]) {
  const names = new Map(entries.map(([name, part]) => [part, name]))
  const visited = new Set<KicadElement>()
  const warnings: string[] = []
  for (const [, part] of entries) {
    for (const start of Object.values(part.p)) {
      if (visited.has(start)) continue
      const stack: KicadElement[] = [start]
      const labels = new Set<string>()
      const pins = new Set<Pin>()
      while (stack.length) {
        const element = stack.pop()!
        if (visited.has(element)) continue
        visited.add(element)
        if (element instanceof Net && element.name !== undefined) labels.add(element.name)
        if (element instanceof Pin && names.has(element.component)) pins.add(element)
        stack.push(...element.connections)
      }
      if (pins.size >= 2) continue
      const endpoints = [...pins].map(pin => `${names.get(pin.component)}${pinAccess(pin.name)}`).join(', ')
      for (const label of labels) warnings.push(`${JSON.stringify(label)} (${pins.size} pin: ${endpoints})`)
    }
  }
  if (warnings.length) console.warn(`Warning: labels must connect at least two distinct pins:\n${warnings.join('\n')}`)
}

export const isPassiveSymbol = (schema: string) => ['Device:C', 'Device:R', 'Device:C_Small', 'Device:R_Small'].includes(schema)
export const isCapacitorSymbol = (schema: string) => ['Device:C', 'Device:C_Small'].includes(schema)
export const standardSymbol = (schema: string) => schema === 'Device:C_Small' ? 'Device:C' : schema === 'Device:R_Small' ? 'Device:R' : schema

/** Reserve explicit references first, then number remaining parts without collisions. */
export function assignReferences(entries: readonly (readonly [string, { ref?: string; referencePrefix: string }])[]) {
  const refs = new Map<string, string>(), reserved = new Set<string>()
  for (const [name, part] of entries) {
    if (part.ref === undefined) continue
    if (!part.ref.trim() || /[\s?]/.test(part.ref)) throw new Error('Invalid reference: ' + JSON.stringify(part.ref))
    const key = part.ref.toUpperCase()
    if (reserved.has(key)) throw new Error('Duplicate reference: ' + part.ref)
    reserved.add(key); refs.set(name, part.ref)
  }
  const counters = new Map<string, number>()
  for (const [name, part] of [...entries].sort(([a], [b]) => a.localeCompare(b))) {
    if (refs.has(name)) continue
    const prefix = part.referencePrefix || 'U'
    let number = counters.get(prefix) ?? 0
    while (reserved.has((prefix + ++number).toUpperCase())) {}
    counters.set(prefix, number)
    refs.set(name, prefix + number); reserved.add((prefix + number).toUpperCase())
  }
  return refs
}
