import { light } from './light'
import { automn } from './automn'
import { coffee } from './coffee'
import { createThemesList } from './type'

export const THEMES = createThemesList({ automn, coffee, light })

export type ThemeType = keyof typeof THEMES
