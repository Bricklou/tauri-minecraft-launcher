import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from '.'

export default {
  title: 'Components/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>

export const Primary: ComponentStory<typeof Avatar> = {
  args: {
    url: 'https://source.unsplash.com/random/256x256'
  }
}
