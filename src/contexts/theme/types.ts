export interface Theme {
  background: Color
}

export enum Color {
  WHITE = '#FFF'
}

export type ThemeType = 'default' | 'cyan'

export const THEMES: Record<ThemeType, Theme> = {
  default: {
    background: Color.WHITE
  },
  cyan: {
    background: Color.WHITE
  }
}
