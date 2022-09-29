import { Theme } from '../types'

export function createThemesList<
  Name,
  C extends Record<string, string>,
  L extends Record<keyof Name, Theme<C>>
>(themes: L): L {
  return themes
}

export function createTheme<C extends Record<string, string>, T extends Theme<C>>(
  payload: {
    colors?: C
  } & T
): Theme<C> {
  return payload
}
