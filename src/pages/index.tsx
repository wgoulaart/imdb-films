import type { NextPage } from 'next'

import Header from '../components/Header'
import Banner from '../components/Banner'
import ListFilm from '../components/ListFilm'
import Footer from '../components/Footer'
import ListActor from 'components/ListActor'
import Container from 'components/Container'
import { useEffect, useState, useCallback } from 'react'

import api from 'service/api'

const Home: NextPage = () => {
  const [listPopular, setListPopular] = useState([])
  const [filmsListPopular, setFilmsListPopular] = useState([])

  const getTitles = useCallback(async () => {
    let titleSerialized = []

    console.log(`getTitles`)
    await api.getTitlesMostPopular().then((response) => {
      console.log(`getTitles then(response)`, response)

      titleSerialized = response?.data.map((element: string) => {
        return element.replace('/title/', '').replace('/', '')
      })
      setListPopular(titleSerialized)
    })
  }, [])

  const getMovies = useCallback(async (title?: string) => {
    getMovieData(title)
    console.log(`getMovies`, title)
    // await api.getMostPopularMovies(title).then((response) => {
    //   setFilmsListPopular(response?.data)
    //   // setFilmsListPopular((prev): any[] => [...prev, response.data])
    // })
  }, [])

  function getMovieData(items): void {
    console.log(`getMovieData::`, items)

    api.getMostPopularMovies(items).then((response) => {
      console.log(`getMovieData:: response`, response)
      setFilmsListPopular(response?.data)
    })
    //   console.log(`getMovieData listPopular[index]::`, items[index])
    // for (let index = 0; index < initStateRequest; index++) {
    // await api
    //   .getMostPopularMovies(title)
    //   .then((response) => setFilmsListPopular(response?.data))
    // }
  }

  useEffect(() => {
    getTitles()
  }, [getTitles])

  useEffect(() => {
    if (listPopular === undefined) return
    getMovies(listPopular[0])
    console.log(`filmsListPopular::`, filmsListPopular)
  }, [getMovies, filmsListPopular, listPopular])

  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   setFilmsListPopular((prevState) => [...prevState, { state }])

  return (
    <>
      <Header />
      <Banner />
      <Container>
        {/* <ListFilm title="Filmes populares" items={API.getMostPopularMovies} /> */}
        <ListFilm title="Filmes populares" items={[]} />

        {/* <ListFilm
              title="Próximos lançamentos"
              items={API.getComingSoonMovies}
            />

            <ListActor title="Atores populares" items={API.getActorsList} /> */}
      </Container>
      <Footer />
    </>
  )
}

export default Home
