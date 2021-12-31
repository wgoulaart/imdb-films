import CardFilm from 'components/CardFilm'
import TitleHeading from 'components/TitleHeading'
import { Wrapper } from './style'

const getTitleDetails = [
  {
    '@type': 'imdb.api.title.title',
    id: '/title/tt11777738/',
    image: {
      height: 2880,
      id: '/title/tt11777738/images/rm31585537',
      url: '11https://m.media-amazon.com/images/M/MV5BMmRlNzkyYzUtYzE5Yi00YmZkLTgyYjQtMmFjMjhmNDU1OTJiXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg',
      width: 1944
    },
    runningTimeInMinutes: 127,
    title: 'A Hero',
    titleType: 'movie',
    year: 2021
  },
  {
    '@type': 'imdb.api.title.title',
    id: '/title/tt8356942/',
    image: {
      height: 5000,
      id: '/title/tt8356942/images/rm1754265345',
      url: 'https://m.media-amazon.com/images/M/MV5BNzk4MDZhNTctMDA3OC00ODdkLWIyOWYtN2M0MzA3MDY5NDk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      width: 3158
    },
    title: 'The 355',
    titleType: 'movie',
    year: 2022
  },
  {
    '@type': 'imdb.api.title.title',
    id: '/title/tt7599146/',
    image: {
      height: 5740,
      id: '/title/tt7599146/images/rm2400890113',
      url: 'https://m.media-amazon.com/images/M/MV5BZmRmZjcxNGMtZmFiMy00MzllLWJlMGMtZDNjODBlZTYzNzlmXkEyXkFqcGdeQXVyODE0MTM4NDU@._V1_.jpg',
      width: 3679
    },
    title: 'Sound of Freedom',
    titleType: 'movie',
    year: 2022
  },
  {
    '@type': 'imdb.api.title.title',
    id: '/title/tt13496236/',
    image: {
      height: 1024,
      id: '/title/tt13496236/images/rm2774199297',
      url: 'https://m.media-amazon.com/images/M/MV5BYjZkYTNhODktODVjYy00MTdiLWFhODEtOTFlMjg4MWIzNmE0XkEyXkFqcGdeQXVyMTMzMDU5MjY2._V1_.jpg',
      width: 691
    },
    title: 'American Siege',
    titleType: 'movie',
    year: 2021
  },
  {
    '@type': 'imdb.api.title.title',
    id: '/title/tt3581652/',
    image: {
      height: 1100,
      id: '/title/tt3581652/images/rm3336497409',
      url: 'https://m.media-amazon.com/images/M/MV5BMzQ5ZDZhZDItZTNmZi00MWQ0LWJlNDUtZTE4ZWJmODNlM2Y3XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
      width: 743
    },
    runningTimeInMinutes: 156,
    title: 'West Side Story',
    titleType: 'movie',
    year: 2021
  },
  {
    '@type': 'imdb.api.title.title',
    id: '/title/tt11233960/',
    image: {
      height: 755,
      id: '/title/tt11233960/images/rm1014166785',
      url: 'https://m.media-amazon.com/images/M/MV5BM2M5MTJmOTEtNWU1Yy00NDNmLWI3MjMtNzFkN2FiZjE5Njg3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg',
      width: 510
    },
    runningTimeInMinutes: 112,
    title: 'The Unforgivable',
    titleType: 'movie',
    year: 2021
  }
]

type ListFilmProps = {
  title?: string
}

function ListFilm({ title }: ListFilmProps) {
  return (
    <>
      <TitleHeading size="large" title={title} />
      <Wrapper aria-label="ListFilm">
        {getTitleDetails &&
          getTitleDetails.map((film) => (
            <CardFilm
              key={film.id}
              id={film.id}
              title={film.title}
              titleType={film.titleType}
              year={film.year}
              image={film.image}
            />
          ))}
      </Wrapper>
    </>
  )
}

export default ListFilm
