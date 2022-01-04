import { Wrapper, Image, Description, Title, Year } from './style'

export type CardFilmProps = {
  id: string
  title: string
  titleType: string
  year: number
  image: {
    height: number
    id: string
    url: string
    width: number
  }
}

export default function CardFilm({ id, title, year, image }: CardFilmProps) {
  return (
    <Wrapper key={id}>
      <Image>
        <img src={image?.url} alt={title} />
      </Image>
      <Description>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </Description>
    </Wrapper>
  )
}
