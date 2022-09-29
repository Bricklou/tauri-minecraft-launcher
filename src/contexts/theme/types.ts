export enum Color {
  WHITE = '#FFF'
}
export type Theme<C extends Record<string, string>> = {
  colors?: C
  background: keyof typeof Color | keyof (C extends undefined ? object : C)
}

export type { ThemeType } from './colors'
export { THEMES } from './colors'
