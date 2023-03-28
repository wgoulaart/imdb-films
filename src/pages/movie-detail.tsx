import Footer from 'components/Footer'
import Header from 'components/Header'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Details from 'components/Details'
import { IMovieData } from 'types/movie'

import api from 'service/api'

const MovieDetail: NextPage = () => {
  const router = useRouter()
  const search = router.query.id
  const paramSearch = search
    ?.toString()
    .replaceAll('/', '')
    .replace('title', '')

  const [movieDetail, setMovieDetail] = useState<IMovieData>()

  useEffect(() => {
    api.getMovieDetail(paramSearch).then((response) => {
      setMovieDetail(response)
    })
  }, [paramSearch])

  return (
    <>
      <Header />
      {movieDetail && <Details data={movieDetail} isMovie />}
      <Footer />
    </>
  )
}

export default MovieDetail
