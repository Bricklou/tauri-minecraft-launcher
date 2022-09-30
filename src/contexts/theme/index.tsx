import React, { Dispatch, SetStateAction, useContext } from 'react'
import { THEMES, ThemeStyle, ThemeType } from './types'

interface ThemeContextProps {
  themeType: ThemeType
  theme: ThemeStyle
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

function parseThemeColors<T extends typeof THEMES[ThemeContextProps['themeType']]>(
  theme: T
): ThemeStyle {
  const parsedTheme: ThemeStyle = structuredClone(theme.style)

  const colors = theme.colors as Record<string, string>
  for (const [k, v] of Object.entries(parsedTheme)) {
    parsedTheme[k as keyof ThemeStyle] = colors ? colors[v] : '#fff'
  }

  return parsedTheme
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: 'coffee',
  theme: THEMES['coffee']['style'],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentTheme: () => {}
})

export const ThemeProvider: React.FC<React.PropsWithChildren & { defaultTheme?: ThemeType }> = ({
  children,
  defaultTheme
}) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>(defaultTheme ?? 'coffee')

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: parseThemeColors(THEMES[currentTheme]),
        setCurrentTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextProps => useContext(ThemeContext)
