import React from 'react'
import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from '.'
import { Info } from 'react-feather'

describe('Button component', () => {
  const BTN_TEXT = "I'm a button"
  const clickMock = vi.fn()

  beforeEach(() => {
    clickMock.mockReset()
  })

  test('button render', () => {
    render(<Button>{BTN_TEXT}</Button>)

    const el = screen.getByText(BTN_TEXT)

    expect(el).toBeDefined()
  })

  test('button can be clicked', () => {
    render(<Button onClick={clickMock}>{BTN_TEXT}</Button>)

    const el = screen.getByText(BTN_TEXT)
    fireEvent.click(el)
    expect(clickMock).toHaveBeenCalled()
  })

  test('button is disabled', () => {
    render(
      <Button disabled onClick={clickMock}>
        {BTN_TEXT}
      </Button>
    )

    const el = screen.getByText(BTN_TEXT)
    expect(el).toBeDisabled()

    fireEvent.click(el)

    expect(clickMock).not.toHaveBeenCalled()
  })

  test('button have an icon', () => {
    render(<Button startIcon={Info}>{BTN_TEXT}</Button>)

    const el = screen.getByRole('icon')
    expect(el).toBeDefined()
  })
})
