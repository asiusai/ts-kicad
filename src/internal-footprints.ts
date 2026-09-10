import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, basename } from 'node:path'
import { identifier } from './export_components'
import { parse, child, children, val, type Node } from './kicad_sexpr'
import type { Footprint } from './footprint'

export function footprintMetadata(tree: Node) {
  const pads = children(tree, 'pad').filter(p => val(p[2]) !== 'np_thru_hole' && children(p, 'layers').some(l => l.slice(1).some(v => val(v).endsWith('.Cu'))))
  const kinds = new Set(pads.map(p => val(p[2])))
  const mounting: Footprint['mounting'] = kinds.has('smd') && kinds.has('thru_hole') ? 'mixed' : kinds.has('thru_hole') ? 'through_hole' : kinds.has('smd') ? 'smd' : 'other'
  return { pads: [...new Set(pads.map(p => val(p[1])).filter(Boolean))].sort(), mounting }
}

export function generateFootprints(directory: string, output: string) {
  mkdirSync(output, { recursive: true })
  let count = 0
  for (const library of readdirSync(directory).filter(f => f.endsWith('.pretty')).sort()) {
    const name = basename(library, '.pretty'), used = new Set<string>()
    let text = "// Generated from native KiCad footprints.\nimport type { Footprint } from '../../src/footprint'\n\n"
    for (const file of readdirSync(join(directory, library)).filter(f => f.endsWith('.kicad_mod')).sort()) {
      const part = basename(file, '.kicad_mod'), id = name+':'+part, exported = identifier(part)
      if (used.has(exported)) throw new Error('Footprint identifier collision: '+id)
      used.add(exported)
      const tree = parse(readFileSync(join(directory, library, file), 'utf8'))
      const description = val(child(tree, 'descr')[1]), tags = val(child(tree, 'tags')[1])
      const doc = [description, 'KiCad: '+id, tags && 'Keywords: '+tags].filter(Boolean).join('\n * ').replace(/\*\//g, '* /')
      text += '/** '+doc+' */\nexport const '+exported+': Footprint = { id: '+JSON.stringify(id)+', ...'+JSON.stringify(footprintMetadata(tree))+' }\n\n'
      count++
    }
    writeFileSync(join(output, name+'.ts'), text.replace(/[ \t]+$/gm, '').trimEnd()+'\n')
  }
  console.log(`Generated ${count} footprints in ${output}`)
}

export async function main(args: string[]) {
  if (args.length > 1) throw new Error('Usage: ts-kicad internal-footprints [KiCad-footprint-directory]')
  const directory = args[0] ?? [...Object.entries(process.env).filter(([key]) => /^KICAD\d*_FOOTPRINT_DIR$/.test(key)).map(([,value]) => value!), '/usr/share/kicad/footprints', '/usr/local/share/kicad/footprints'].find(existsSync)
  if (!directory) throw new Error('KiCad footprint directory not found')
  generateFootprints(directory, join(import.meta.dir, '../lib/footprints'))
}
