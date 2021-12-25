import { Story, Meta } from '@storybook/react'
import Details from '.'

export default {
  title: 'Details',
  component: Details
} as Meta

export const Default: Story = (args) => <Details {...args} />
