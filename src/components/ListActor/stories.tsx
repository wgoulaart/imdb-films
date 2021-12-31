import { Story, Meta } from '@storybook/react'
import ListActor from '.'

export default {
  title: 'Components/ListActor',
  component: ListActor
} as Meta

export const Default: Story = (args) => <ListActor {...args} />

Default.args = {
  title: 'Atores populares'
}
