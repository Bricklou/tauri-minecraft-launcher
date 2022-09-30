export enum Color {
  WHITE = '#FFF'
}

export interface ThemeStyle {
  background: string
}

/*export interface ThemeStyle<C extends Record<string, string>> {
  background: keyof typeof Color | keyof (C extends undefined ? object : C)
}*/

export type Theme<C extends Record<string, string>> = {
  colors?: C
  style: ThemeStyle
}

export type { ThemeType } from './colors'
export { THEMES } from './colors'
