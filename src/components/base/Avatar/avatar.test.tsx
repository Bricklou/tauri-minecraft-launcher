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

  describe('wait for image to preload', () => {
    beforeAll(async () => {
      await fetch('https://source.unsplash.com/random/256x256')
    })

    test('show loading state', () => {
      render(<Avatar url={'https://source.unsplash.com/random/256x256'} />)

      const el = screen.getByRole('img')

      setTimeout(() => {
        expect(el.firstChild).instanceOf(HTMLImageElement)
      }, 10)
    })
  })
})
