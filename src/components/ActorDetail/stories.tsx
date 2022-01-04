import { Story, Meta } from '@storybook/react'
import ActorDetail, { ActorDetailProps } from '.'

export default {
  title: 'Components/ActorDetail',
  component: ActorDetail
} as Meta

export const Default: Story<ActorDetailProps> = (args) => (
  <ActorDetail {...args} />
)
