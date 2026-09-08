import { expect, test } from 'bun:test'
import { parse, dump, node, atom, child, val } from './kicad_sexpr'
import { parseXml } from './kicad_io'
import { transformed } from './kicad_geometry'
import { renderComponents } from './export_components'

test('KiCad expressions preserve quoted numbers, escapes and atoms', () => {
  const source='(root (name "pin \\"1\\"") (at -2.54 0 90) (pin "01"))'.replaceAll('\\"','\\"')
  const parsed=parse(source)
  expect(dump(parse(dump(parsed)))).toBe(dump(parsed))
  expect(child(parsed,'pin')[1]).toBe('01')
  expect(child(parsed,'at')[1]).toEqual(atom('-2.54'))
  expect(()=>parse('(a')).toThrow('Unbalanced')
  expect(()=>parse('(a))')).toThrow('Unbalanced')
})

test('KiCad mirrors act after rotation, preserving physical pin positions', () => {
  const t=node('symbol',node('at',atom(0),atom(0),atom(90)),node('mirror',atom('x')))
  const p=transformed(2,3,t)
  expect(p.x).toBeCloseTo(-3)
  expect(p.y).toBeCloseTo(2)
})

test('native XML keeps pin numbers, entities and empty flag properties', () => {
  const tree=parseXml('<?xml version="1.0"?><export><pin num="01" name="A&amp;B"/><property name="dnp"/><value>100nF</value></export>')
  expect(tree.find('pin')!.get('num')).toBe('01')
  expect(tree.find('pin')!.get('name')).toBe('A&B')
  expect(tree.find('property')!.attrs.value).toBeUndefined()
  expect(tree.value('value')).toBe('100nF')
})

test('symbol generation disambiguates duplicate pin names and does not bake in footprints', () => {
  const tree=parseXml('<export><libparts><libpart lib="Test" part="Sensor"><description>sensor */ docs</description><fields><field name="Reference">U</field></fields><pins><pin num="01" name="GND" type="power_in"/><pin num="02" name="GND" type="power_in"/></pins></libpart></libparts></export>')
  const generated=renderComponents(tree)
  expect(generated.libraries['Test:Sensor'].mapping).toEqual({GND_01:'01',GND_02:'02'})
  expect(generated.text).toContain('sensor * / docs')
  expect(generated.text).not.toContain('override footprint')
  expect(generated.text).not.toContain('pinTypes')
})

test('native symbol inheritance preserves pins and puts descriptive fields in JSDoc', async () => {
  const { resolveSymbols, symbolPins, defaultTemplates } = await import('./symbol_library')
  const { libraryXml } = await import('./generate_components')
  const symbols = resolveSymbols(parse(`(kicad_symbol_lib
    (symbol "Base" (in_bom no) (on_board no)
      (property "Reference" "#PWR") (property "Description" "Base docs")
      (property "Datasheet" "https://example.com/datasheet") (property "ki_keywords" "supply")
      (property "Footprint" "Package:Hint")
      (symbol "Base_1_1" (pin power_in line (at 0 0 90) (name "GND") (number "01")))
      (symbol "Base_1_2" (pin power_in line (at 0 0 90) (name "GND") (number "01"))))
    (symbol "Derived" (extends "Base") (property "Description" "Derived docs")))`))
  const derived = symbols.get('Derived')!
  expect(symbolPins(derived)).toHaveLength(1)
  expect(defaultTemplates(derived).size).toBe(1)
  const generated = renderComponents(libraryXml('Fixture', symbols), 'ts-kicad', { builtin: true })
  expect(generated.libraries['Fixture:Derived'].mapping).toEqual({ GND: '01' })
  expect(generated.text).toContain('Derived docs')
  expect(generated.text).toContain('@see https://example.com/datasheet')
  expect(generated.text).toContain('Keywords: supply')
  expect(generated.text).toContain('Default footprint: Package:Hint')
  expect(generated.text).not.toContain('override footprint')
  expect(generated.text).not.toContain('pinTypes')
  expect(generated.text).toContain('exclude_from_bom')
  expect(() => resolveSymbols(parse('(root (symbol "A" (extends "B")) (symbol "B" (extends "A")))'))).toThrow('Cyclic')
})

test('standard resistors and capacitors use shared builtin classes', async () => {
  const { c, r } = await import('ts-kicad/components/Device')
  const { GND } = await import('ts-kicad/components/power')
  expect(c().schema).toBe('Device:C')
  expect(r({ ref: 'R42' }).ref).toBe('R42')
  expect(r().schema).toBe('Device:R')
  expect(new GND().properties).toHaveProperty('exclude_from_bom')
  const tree = parseXml('<export><libparts><libpart lib="Device" part="C_Small"><pins><pin num="1" name="~" type="passive"/><pin num="2" name="~" type="passive"/></pins></libpart></libparts></export>')
  const generated = renderComponents(tree)
  expect(generated.libraries['Device:C_Small'].source).toBe('ts-kicad/components/Device')
  expect(generated.libraries['Device:C_Small'].className).toBe('C')
  expect(generated.text).not.toContain('export class')
})

test('inspect merges entry files, root arrays and BOMs before numbering',async()=>{
  const {withTemp,inspect}=await import('./kicad_io')
  const {writeFileSync}=await import('node:fs')
  const {join,resolve}=await import('node:path')
  withTemp(dir=>{
    const device=JSON.stringify(resolve(import.meta.dir,'../components/Device.ts'))
    for(const [name,value]of [['main','10k'],['aux','22k']])writeFileSync(join(dir,name+'.ts'),`import { r } from ${device};
const part=r({value:${JSON.stringify(value)}}).wire({P1:null,P2:null});
part.bom=[{schema:'Device:R',value:${JSON.stringify(value)},footprint:'Resistor_SMD:R_0603_1608Metric',manufacturer:'Test',partNumber:${JSON.stringify(name)}}];
export default part;`)
    const files=['main','aux'].map(name=>join(dir,name+'.ts'))
    const result=inspect(files)
    expect(result).toHaveLength(2)
    expect(new Set(result.map(p=>p.ref)).size).toBe(2)
    expect(result.map(p=>p.properties['MFR.Part #']).sort()).toEqual(['aux','main'])
    expect(inspect([...files,files[0]])).toHaveLength(2)
    writeFileSync(join(dir,'array.ts'),"import A from './main'; import B from './aux'; export default [A,B,A];")
    expect(inspect(join(dir,'array.ts'))).toEqual(result)
    writeFileSync(join(dir,'invalid.ts'),'export default [];')
    expect(()=>inspect(join(dir,'invalid.ts'))).toThrow()
  })
})

test('generated unnamed pin keys use P numbers and preserve meaningful labels',()=>{
  const tree=parseXml('<export><libparts><libpart lib="Test" part="Mixed"><pins><pin num="01" name="~"/><pin num="2" name="2"/><pin num="3" name="SDA"/><pin num="4" name="V+"/></pins></libpart></libparts></export>')
  expect(renderComponents(tree).libraries['Test:Mixed'].mapping).toEqual({P01:'01',P2:'2',SDA:'3','V+':'4'})
  const clash=parseXml('<export><libparts><libpart lib="Test" part="Clash"><pins><pin num="1" name="~"/><pin num="2" name="P1"/></pins></libpart></libparts></export>')
  expect(renderComponents(clash).libraries['Test:Clash'].mapping).toEqual({P1_1:'1',P1_2:'2'})
})

test('common helpers expose generated pin keys while preserving physical numbers',async()=>{
  const {c,r,sheet}=await import('./helpers')
  const {PWR_FLAG}=await import('./power')
  sheet('HELPERS')
  const cap=c().wire({P1:'helper-test-rail',P2:null})
  const flag=new PWR_FLAG().wire({ P1: cap.P1 })
  expect(cap.P1.number).toBe('1')
  expect(cap.P2.number).toBe('2')
  expect(flag.P1.connections.has(cap.P1)).toBe(true)
  expect(r().P1.number).toBe('1')
  // @ts-expect-error Numeric API keys were replaced, not retained as aliases.
  expect(cap['1']).toBeUndefined()
})

test('power export names preserve native rail identities and avoid collisions', async () => {
  const { renderPowerConnections } = await import('./generate_components')
  const { P3V3, P5V, N5V, P3V3_3V3 } = await import('./power')
  expect(P3V3.name).toBe('+3.3V')
  expect(P3V3.powerSymbol).toBe('power:+3.3V')
  expect(P5V.name).toBe('+5V')
  expect(N5V.name).toBe('-5V')
  expect(P3V3_3V3.name).toBe('+3V3')
  const catalog = { 'power:+3V3': '_3V3', 'power:+3.3V': '_3_3V' }
  const rendered = renderPowerConnections(catalog)
  expect(rendered).toContain('export const P3V3 = power("+3.3V"')
  expect(rendered).toContain('export const P3V3_3V3 = power("+3V3"')
  expect(renderPowerConnections(Object.fromEntries(Object.entries(catalog).reverse()))).toBe(rendered)
})

test('generated pin names cannot shadow component metadata or methods', () => {
  const tree = parseXml('<export><libparts><libpart lib="Test" part="Collision"><pins><pin num="1" name="wire"/><pin num="2" name="schema"/><pin num="3" name="constructor"/><pin num="4" name="SDA"/></pins></libpart></libparts></export>')
  expect(renderComponents(tree).libraries['Test:Collision'].mapping).toEqual({ PIN_wire: '1', PIN_schema: '2', PIN_constructor: '3', SDA: '4' })
})
