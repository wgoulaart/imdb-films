import Container from 'components/Container'
import Rating from 'components/Rating'
import { IMovieData } from 'types/movie'
import {
  Wrapper,
  ImagePoster,
  HeaderMovie,
  Text,
  Photo,
  Title,
  MovieHeading
} from './styles'

export type ActorDetailProps = {
  data: IMovieData
}

export default function ActorDetail({ data }: ActorDetailProps) {
  return (
    <>
      {data && (
        <Wrapper>
          <ImagePoster>
            <img src={data.title?.image.url} alt={data.title?.title} />
          </ImagePoster>
          <Container>
            <HeaderMovie>
              <Photo>
                <img src={data.title?.image.url} alt={data.title?.title} />
              </Photo>
              <MovieHeading>
                <Title>{data?.title?.title}</Title>
                {data?.ratings?.canRate && (
                  <Rating rating={data?.ratings?.rating} />
                )}
                <Text>
                  <strong>Lançamento:</strong>{' '}
                  {new Date(`${data?.releaseDate}`).getFullYear()}
                </Text>
                <Text>
                  <strong>Genero:</strong>{' '}
                  {data?.genres?.map((gender) => `${gender}, `)}
                </Text>
              </MovieHeading>
            </HeaderMovie>
            <Title>Visão Geral</Title>
            <Text>{data?.plotSummary?.text}</Text>
            <Text>{data?.plotOutline?.text}</Text>
          </Container>
        </Wrapper>
      )}
    </>
  )
}
