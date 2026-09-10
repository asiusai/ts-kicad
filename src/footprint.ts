/** Generated metadata points to native geometry; manufacturing choices belong in the BOM. */
export type Footprint = {
  readonly id: string
  /** Custom native file; omit to resolve the installed KiCad library by id. */
  readonly file?: string
  /** Base for native ${KIPRJMOD} model references, when using a project library. */
  readonly projectDirectory?: string
  /** Unique numbered copper pads; repeated pad numbers are represented once. */
  readonly pads: readonly string[]
  readonly mounting: 'smd' | 'through_hole' | 'mixed' | 'other'
}

export function validateFootprintPads(id: string, pins: readonly string[], pads: readonly string[]) {
  const pinSet = new Set(pins), padSet = new Set(pads.filter(Boolean))
  const missing = [...pinSet].filter(pin => !padSet.has(pin))
  const extra = [...padSet].filter(pad => !pinSet.has(pad))
  if (missing.length || extra.length) throw new Error(`${id}: footprint pad mismatch${missing.length ? '; missing pads: '+missing.join(', ') : ''}${extra.length ? '; pads without symbol pins: '+extra.join(', ') : ''}`)
}
