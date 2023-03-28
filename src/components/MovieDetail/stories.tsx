import { Story, Meta } from '@storybook/react'
import MovieDetail, { MovieDetailProps } from '.'

export default {
  title: 'Components/MovieDetail',
  component: MovieDetail
} as Meta

export const Default: Story<MovieDetailProps> = (args) => (
  <MovieDetail {...args} />
)
