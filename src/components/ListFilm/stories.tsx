import { Story, Meta } from '@storybook/react'
import ListFilm from '.'

export default {
  title: 'ListFilm',
  component: ListFilm
} as Meta

export const Default: Story = (args) => <ListFilm {...args} />
