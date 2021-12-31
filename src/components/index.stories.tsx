import { Story, Meta } from '@storybook/react'
import Home from '../pages'

export default {
  title: 'Page/Home',
  component: Home
} as Meta

export const Default: Story = (args) => <Home {...args} />
