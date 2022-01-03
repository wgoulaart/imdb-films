import { Story, Meta } from '@storybook/react'
import ListActor from '.'
import API from 'service/api'

export default {
  title: 'Components/ListActor',
  component: ListActor
} as Meta

export const Default: Story = (args) => (
  <ListActor items={API.getActorsList} {...args} />
)

Default.args = {
  title: 'Atores populares',
  items: API.getActorsList
}
