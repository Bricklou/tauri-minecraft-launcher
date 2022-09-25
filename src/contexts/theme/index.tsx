import React, { Dispatch, SetStateAction, useContext } from 'react'
import { Theme, THEMES, ThemeType } from './types'

interface ThemeContextProps {
  themeType: ThemeType
  theme: Theme
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: 'default',
  theme: THEMES['default'],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentTheme: () => {}
})

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>('default')

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
