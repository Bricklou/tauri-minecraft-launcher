import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider, useTheme } from '.'

function Content(): JSX.Element {
  const { setCurrentTheme, themeType } = useTheme()

  return (
    <div>
      <button
        onClick={() => {
          setCurrentTheme(themeType === 'coffee' ? 'automn' : 'coffee')
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
    test('then show the coffee theme', () => {
      // "Theme is coffee" text is only show when the coffee theme is active
      expect(screen.getByText(/Theme is coffee/i)).toBeTruthy()
    })
  })

  describe('when the toggle theme button is clicked', () => {
    beforeEach(() => {
      fireEvent.click(screen.getByText(/Toggle theme/i))
    })

    test('then uses the automn mode', () => {
      // "Theme is automn" text is only show when the automn theme is active
      expect(screen.getByText(/Theme is automn/i)).toBeTruthy()
    })
  })
})
