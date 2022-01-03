import { Story, Meta } from '@storybook/react'
import CardFilm, { CardFilmProps } from '.'

export default {
  title: 'Components/CardFilm',
  component: CardFilm
} as Meta

export const Default: Story<CardFilmProps> = (args) => (
  <div style={{ maxWidth: 320 }}>
    <CardFilm {...args} />
  </div>
)

Default.args = {
  id: '/title/tt13496236/',
  title: 'American Siege',
  titleType: 'movie',
  year: 2021,
  image: {
    height: 1024,
    id: '/title/tt13496236/images/rm2774199297',
    url: 'https://m.media-amazon.com/images/M/MV5BYjZkYTNhODktODVjYy00MTdiLWFhODEtOTFlMjg4MWIzNmE0XkEyXkFqcGdeQXVyMTMzMDU5MjY2._V1_.jpg',
    width: 691
  }
}
