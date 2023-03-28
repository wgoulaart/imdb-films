import ActorDetail from 'components/ActorDetail'
import MovieDetail from 'components/MovieDetail'
import { IMovieData } from 'types/movie'

type DetailsProps = {
  data: IMovieData
  isMovie: boolean
}

function Details({ data, isMovie }: DetailsProps) {
  console.log(`Details`, data)

  return (
    <>{isMovie ? <MovieDetail data={data} /> : <ActorDetail data={data} />}</>
  )
}

export default Details
