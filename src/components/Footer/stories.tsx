import { Story, Meta } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Components/Footer',
  component: Footer
} as Meta

export const Default: Story = (args) => <Footer {...args} />
