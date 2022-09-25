import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider, useTheme } from '.'

function Content(): JSX.Element {
  const { setCurrentTheme, themeType } = useTheme()

  return (
    <div>
      <button
        onClick={() => {
          setCurrentTheme(themeType === 'default' ? 'cyan' : 'default')
        }}
      >
        Toggle theme
      </button>
      <span>Theme is {themeType}</span>
    </div>
  )
}

function Page(): JSX.Element {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  )
}

describe('Theme context', () => {
  beforeEach(() => {
    render(<Page />)
  })

  test('when page is initialized', () => {
    test('then show the default theme', () => {
      // "Theme is default" text is only show when the default theme is active
      expect(screen.getByText(/Theme is default/i)).toBeTruthy()
    })
  })

  describe('when the toggle theme button is clicked', () => {
    beforeEach(() => {
      fireEvent.click(screen.getByText(/Toggle theme/i))
    })

    test('then uses the cyan mode', () => {
      // "Theme is cyan" text is only show when the cyan theme is active
      expect(screen.getByText(/Theme is cyan/i)).toBeTruthy()
    })
  })
})
