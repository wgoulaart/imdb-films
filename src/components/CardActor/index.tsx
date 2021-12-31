import { Wrapper, PhotoProfile, TitleActor, QtdFilms } from './styles'

export type CardActorProps = {
  id?: string
  name: string
  image: {
    id?: string
    url: string
  }
  filmography: number
}

export default function CardActor({
  name,
  image,
  filmography
}: CardActorProps) {
  return (
    <Wrapper>
      <PhotoProfile>
        <img src={image?.url} alt={name} />
      </PhotoProfile>
      <TitleActor> {name}</TitleActor>
      <QtdFilms> {filmography} </QtdFilms>
    </Wrapper>
  )
}
