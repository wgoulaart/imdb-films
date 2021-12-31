import { Story, Meta } from '@storybook/react'
import TitleHeading, { TitleHeadingProps } from '.'

export default {
  title: 'Components/TitleHeading',
  component: TitleHeading
} as Meta

export const Default: Story<TitleHeadingProps> = (args) => (
  <TitleHeading {...args} />
)

Default.args = {
  size: 'large',
  title: 'Title Heading large'
}
