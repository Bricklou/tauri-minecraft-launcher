import React, { useEffect } from 'react'
import '../src/styles/global.css'
import { ThemeProvider, useTheme } from '../src/contexts/theme'
import { DecoratorFn } from '@storybook/react-vite'
import { StrictInputType } from '@storybook/csf'
import { THEMES, ThemeType } from '../src/contexts/theme/colors'

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const globalTypes = {
  themeType: {
    description: 'Set the app theme',
    defaultValue: 'coffee',
    toolbar: {
      icon: 'paintbrush',
      items: Object.keys(THEMES),
      dynamicTitle: true
    }
  }
}

function Content({
  children,
  themeType
}: React.PropsWithChildren & { themeType: ThemeType }): JSX.Element {
  const { theme, setCurrentTheme } = useTheme()

  useEffect(() => {
    setCurrentTheme(themeType)
  }, [themeType])

  return (
    <div style={{ backgroundColor: theme.background, height: '100vh', padding: '1rem' }}>
      {children}
    </div>
  )
}

export const decorators: DecoratorFn[] = [
  (Story, context) => {
    return (
      <ThemeProvider defaultTheme="automn">
        <Content themeType={context.globals.themeType}>{Story()}</Content>
      </ThemeProvider>
    )
  }
]
