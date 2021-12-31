import React from 'react'
import { Story, Meta } from '@storybook/react'

import Logo from '.'

export default {
  title: 'Components/Logo',
  component: Logo
} as Meta

export const Default: Story = (args) => <Logo {...args} />

Default.args = {
  color: 'white',
  size: 'large'
}
