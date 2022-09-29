import React, { Dispatch, SetStateAction, useContext } from 'react'
import { THEMES, ThemeType } from './types'

interface ThemeContextProps {
  themeType: ThemeType
  theme: typeof THEMES[ThemeContextProps['themeType']]
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: 'coffee',
  theme: THEMES['coffee'],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentTheme: () => {}
})

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>('coffee')

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextProps => useContext(ThemeContext)
