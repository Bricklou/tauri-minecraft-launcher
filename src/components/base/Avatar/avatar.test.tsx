import React from 'react'
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Avatar } from '.'

describe('Avatar component', () => {
  test('show loading state', () => {
    render(<Avatar url={undefined} />)

    const el = screen.getByRole('img')

    expect(el.firstChild).instanceOf(SVGSVGElement)
  })
})
