import { Story, Meta } from '@storybook/react'
import Home from '.'

export default {
  title: 'Page/Home',
  component: Home
} as Meta

export const Default: Story = (args) => <Home {...args} />
