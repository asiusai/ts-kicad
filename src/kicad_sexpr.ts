/** KiCad S-expressions: quoted strings remain distinct from unquoted atoms. */
export class Atom { constructor(readonly value: string) {} toString() { return this.value } }
export type Expr = Atom | string | Expr[]
export type Node = Expr[]
export const atom = (value: string | number) => new Atom(String(value))
export const val = (value: Expr | undefined) => value instanceof Atom ? value.value : typeof value === 'string' ? value : ''
export const num = (value: number) => atom(Number(value.toFixed(4)))
export const node = (tag: string, ...args: Expr[]): Node => [atom(tag), ...args]
export const children = (parent: Node, tag: string): Node[] => parent.filter((x): x is Node => Array.isArray(x) && val(x[0]) === tag)
export const child = (parent: Node, tag: string): Node => children(parent, tag)[0] ?? []
export function remove(parent: Node, ...tags: string[]) {
  parent.splice(0, parent.length, ...parent.filter(x => !Array.isArray(x) || !tags.includes(val(x[0]))))
}
export function clone<T extends Expr>(expr: T): T {
  return (Array.isArray(expr) ? expr.map(x => clone(x)) : expr instanceof Atom ? atom(expr.value) : expr) as T
}
export function parse(text: string): Node {
  const stack: Node[] = [], roots: Node[] = []
  const tokens = text.match(/"(?:\\.|[^"\\])*"|[()]|[^\s()]+/g) ?? []
  for (const token of tokens) {
    if (token === '(') { const n: Node = []; (stack.at(-1) ?? roots).push(n); stack.push(n) }
    else if (token === ')') { if (!stack.pop()) throw new Error('Unbalanced S-expression') }
    else { if (!stack.length) throw new Error('Atom outside S-expression'); stack.at(-1)!.push(token.startsWith('"') ? JSON.parse(token) : atom(token)) }
  }
  if (stack.length || roots.length !== 1) throw new Error('Unbalanced S-expression')
  return roots[0]
}
export function dump(expr: Expr, indent = 0): string {
  if (expr instanceof Atom) return expr.value
  if (typeof expr === 'string') return JSON.stringify(expr)
  if (!expr.some(Array.isArray)) return '(' + expr.map(x => dump(x)).join(' ') + ')'
  const first: Expr[] = [], rest: Expr[] = []
  for (const x of expr) { if (!rest.length && !Array.isArray(x)) first.push(x); else rest.push(x) }
  return '(' + first.map(x => dump(x)).join(' ') + rest.map(x => '\n' + '  '.repeat(indent + 1) + dump(x, indent + 1)).join('') + '\n' + '  '.repeat(indent) + ')'
}
export function* descendants(tree: Node, tag: string): Generator<Node> {
  for (const entry of tree) if (Array.isArray(entry)) { if (val(entry[0]) === tag) yield entry; yield* descendants(entry, tag) }
}
