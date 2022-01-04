import { Story, Meta } from '@storybook/react'

import ListFilm from '.'

export const getMostPopularMovies = [
  {
    '@type': 'imdb.api.title.title',
    id: '/title/tt11286314/',
    image: {
      height: 1500,
      id: '/title/tt11286314/images/rm1107028225',
      url: 'https://m.media-amazon.com/images/M/MV5BNjZjNDE1NTYtYTgwZS00M2VmLWEyODktM2FlNjhiYTk3OGU2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
      width: 844
    },
    runningTimeInMinutes: 138,
    title: "Don't Look Up",
    titleType: 'movie',
    year: 2021
  },
  {
    '@type': 'imdb.api.title.title',
    id: '/title/tt10838180/',
    image: {
      height: 4096,
      id: '/title/tt10838180/images/rm3704744193',
      url: 'https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
      width: 2764
    },
    runningTimeInMinutes: 148,
    title: 'The Matrix Resurrections',
    titleType: 'movie',
    year: 2021
  },
  {
    '@type': 'imdb.api.title.title',
    id: '/title/tt10872600/',
    image: {
      height: 4000,
      id: '/title/tt10872600/images/rm3936939521',
      url: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
      width: 2699
    },
    runningTimeInMinutes: 148,
    title: 'Spider-Man: No Way Home',
    titleType: 'movie',
    year: 2021
  },
  {
    '@type': 'imdb.api.title.title',
    id: '/title/tt2953050/',
    image: {
      height: 3000,
      id: '/title/tt2953050/images/rm2541025281',
      url: 'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg',
      width: 2025
    },
    runningTimeInMinutes: 102,
    title: 'Encanto',
    titleType: 'movie',
    year: 2021
  },
  {
    '@type': 'imdb.api.title.title',
    id: '/title/tt10293406/',
    image: {
      height: 1500,
      id: '/title/tt10293406/images/rm2236541697',
      url: 'https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
      width: 1013
    },
    runningTimeInMinutes: 126,
    title: 'The Power of the Dog',
    titleType: 'movie',
    year: 2021
  },
  {
    '@type': 'imdb.api.title.title',
    id: '/title/tt11271038/',
    image: {
      height: 1016,
      id: '/title/tt11271038/images/rm822209281',
      url: 'https://m.media-amazon.com/images/M/MV5BZTgxMWJkMzItMzg1YS00NDJiLTljYjctMTc2YzQzZDZjZDAyXkEyXkFqcGdeQXVyODQ2OTIzNDU@._V1_.jpg',
      width: 640
    },
    runningTimeInMinutes: 133,
    title: 'Licorice Pizza',
    titleType: 'movie',
    year: 2021
  },
  {
    '@type': 'imdb.api.title.title',
    id: '/title/tt1877830/',
    image: {
      height: 1500,
      id: '/title/tt1877830/images/rm3887592449',
      url: 'https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
      width: 1012
    },
    title: 'The Batman',
    titleType: 'movie',
    year: 2022
  }
]

export default {
  title: 'Components/ListFilm',
  component: ListFilm
} as Meta

export const Default: Story = (args) => (
  <ListFilm items={getMostPopularMovies} {...args} />
)

Default.args = {
  title: 'Filmes populares',
  items: getMostPopularMovies
}
