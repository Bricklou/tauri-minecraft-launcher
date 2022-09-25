import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '.'
import { Info } from 'react-feather'

export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>

export const Primary: ComponentStory<typeof Button> = {
  args: {
    children: 'Hello World !'
  }
}

export const Disabled: ComponentStory<typeof Button> = {
  args: {
    children: 'Hello World !',
    disabled: true
  }
}

export const WithIcon: ComponentStory<typeof Button> = {
  args: {
    children: 'Hello World !',
    startIcon: Info
  }
}
