import { Story, Meta } from '@storybook/react'
import Banner from '.'

export default {
  title: 'Components/Banner',
  component: Banner
} as Meta

export const Default: Story = (args) => <Banner {...args} />
