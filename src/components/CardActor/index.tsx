import { Wrapper, PhotoProfile, TitleActor, QtdFilms } from './styles'

export type CardActorProps = {
  id?: string
  base: {
    name: string
    image: {
      id?: string
      url: string
    }
  }
  filmography: {
    length: number
  }
}

export default function CardActor({ base, filmography }: CardActorProps) {
  return (
    <Wrapper>
      <PhotoProfile>
        <img src={base.image?.url} alt={base.name} />
      </PhotoProfile>
      <TitleActor> {base.name}</TitleActor>
      <QtdFilms> {filmography.length} </QtdFilms>
    </Wrapper>
  )
}
