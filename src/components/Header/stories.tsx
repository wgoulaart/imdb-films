import { Story, Meta } from '@storybook/react'
import Header from '.'

export default {
  title: 'Components/Header',
  component: Header
} as Meta

export const Default: Story = (args) => <Header {...args} />
