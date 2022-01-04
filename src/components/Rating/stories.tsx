import React from 'react'
import { Story, Meta } from '@storybook/react'

import Rating, { RatingProps } from '.'

export default {
  title: 'Components/Rating',
  component: Rating
} as Meta

export const Default: Story<RatingProps> = (args) => <Rating {...args} />

Default.args = {
  rating: 8.8
}
