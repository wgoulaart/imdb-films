import axios from 'axios'

const options = {
  method: 'GET',
  url: process.env.NEXT_PUBLIC_URL,
  params: { ids: 'tt11245972&ids=tt0234215 ', region: 'US' },
  headers: {
    'x-rapidapi-host': process.env.NEXT_PUBLIC_HEADERS_HOST,
    'x-rapidapi-key': process.env.NEXT_PUBLIC_HEADERS_KEY
  }
}

const getTitleComingSoonMovies = [
  { id: '/title/tt7599146/', releaseDate: '2022-01-01' },
  { id: '/title/tt8356942/', releaseDate: '2022-01-07' },
  { id: '/title/tt11777738/', releaseDate: '2022-01-07' },
  { id: '/title/tt13496236/', releaseDate: '2022-01-07' },
  { id: '/title/tt11245972/', releaseDate: '2022-01-14' },
  { id: '/title/tt13651628/', releaseDate: '2022-01-14' },
  { id: '/title/tt9893084/', releaseDate: '2022-01-14' },
  { id: '/title/tt2328678/', releaseDate: '2022-01-21' },
  { id: '/title/tt11365186/', releaseDate: '2022-01-21' },
  { id: '/title/tt9735462/', releaseDate: '2022-01-21' },
  { id: '/title/tt6442686/', releaseDate: '2022-01-21' },
  { id: '/title/tt1677615/', releaseDate: '2022-01-21' },
  { id: '/title/tt1596557/', releaseDate: '2022-01-21' },
  { id: '/title/tt5108870/', releaseDate: '2022-01-28' },
  { id: '/title/tt12889404/', releaseDate: '2022-01-28' },
  { id: '/title/tt11188560/', releaseDate: '2022-01-28' },
  { id: '/title/tt10023022/', releaseDate: '2022-01-28' },
  { id: '/title/tt5834426/', releaseDate: '2022-02-04' }
]

const getTitleDetails = {
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
}

const getActorsListMostPopularCelebs = [
  '/name/nm8463347/',
  '/name/nm2794962/',
  '/name/nm3918035/',
  '/name/nm4043618/',
  '/name/nm0000113/',
  '/name/nm6073955/',
  '/name/nm9923141/',
  '/name/nm0001497/',
  '/name/nm0000352/',
  '/name/nm0935395/',
  '/name/nm0683253/',
  '/name/nm0369513/',
  '/name/nm1940449/',
  '/name/nm0147147/',
  '/name/nm1212722/',
  '/name/nm1256532/',
  '/name/nm3512758/',
  '/name/nm1227814/',
  '/name/nm0717709/',
  '/name/nm0000206/',
  '/name/nm0000124/',
  '/name/nm0597410/',
  '/name/nm0834989/',
  '/name/nm0484916/',
  '/name/nm4957233/',
  '/name/nm2872264/',
  '/name/nm3069650/',
  '/name/nm1869101/',
  '/name/nm0687146/',
  '/name/nm10399505/',
  '/name/nm0708381/',
  '/name/nm0000115/',
  '/name/nm0000749/',
  '/name/nm0000673/',
  '/name/nm0005251/',
  '/name/nm3480246/',
  '/name/nm4427331/',
  '/name/nm0792263/',
  '/name/nm1970465/',
  '/name/nm0001549/',
  '/name/nm0000379/',
  '/name/nm0002907/',
  '/name/nm1769728/',
  '/name/nm5052065/',
  '/name/nm8188622/',
  '/name/nm0000138/',
  '/name/nm3154303/',
  '/name/nm1275259/',
  '/name/nm0001796/',
  '/name/nm2244205/',
  '/name/nm3813248/',
  '/name/nm0001085/'
]

const getBioActors = {
  '@type': 'imdb.api.name.bio',
  disambiguation: 'X',
  id: '/name/nm4043618/',
  image: {
    width: 3648,
    height: 5472,
    id: '/name/nm4043618/images/rm662558465',
    url: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_.jpg'
  },
  legacyNameText: 'Holland, Tom (X)',
  name: 'Tom Holland',
  birthDate: '1996-06-01',
  birthPlace: 'Kingston upon Thames, England, UK',
  gender: 'male',
  heightCentimeters: 170.18,
  realName: 'Thomas Stanley Holland',
  trademarks: [
    'Mostly portrays inexperienced and enthusiastic kids',
    'Solid American accent',
    'Youthful face and voice'
  ],
  miniBios: [
    {
      author: 'Anonymous',
      id: '/name/nm4043618/bio/mb0189734',
      language: 'en',
      text: 'Thomas Stanley Holland was born in Kingston-upon-Thames, Surrey, to Nicola Elizabeth (Frost), a photographer, and Dominic Holland (Dominic Anthony Holland), who is a comedian and author. His paternal grandparents were from the Isle of Man and Ireland, respectively. He lives with his paren'
    }
  ]
}

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data)
//   })
//   .catch(function (error) {
//     console.error(error)
//   })
