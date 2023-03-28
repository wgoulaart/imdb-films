import { CardFilmProps } from 'components/CardFilm'

export interface IMovieData {
  id?: string
  title?: {
    image: {
      url: string
    }
    runningTimeInMinutes: number
    title: string
    titleType: string
    year: boolean
  }
  ratings?: {
    canRate: boolean
    rating: number
    ratingCount: number
    topRank: number
  }
  genres?: []
  releaseDate?: string
  plotOutline?: {
    text: string
  }
  plotSummary?: {
    text: string
  }
}

export interface IMovieListData {
  data: CardFilmProps[]
}
