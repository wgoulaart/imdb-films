import { Story, Meta } from '@storybook/react'
import API from 'service/api'
import ListFilm from '.'

export default {
  title: 'Components/ListFilm',
  component: ListFilm
} as Meta

export const Default: Story = (args) => (
  <ListFilm items={API.getMostPopularMovies} {...args} />
)

Default.args = {
  title: 'Filmes populares',
  items: API.getMostPopularMovies
}
