import { Wrapper } from './style'

import CardActor, { CardActorProps } from 'components/CardActor'
import TitleHeading from 'components/TitleHeading'

type ListActorProps = {
  title?: string
  items: CardActorProps[]
}

function ListActor({ title, items }: ListActorProps) {
  return (
    <>
      <TitleHeading size="large" title={title} />
      <Wrapper aria-label="ListActor">
        {items?.map((actor) => (
          <CardActor
            key={actor.id}
            base={actor.base}
            filmography={actor.filmography}
          />
        ))}
      </Wrapper>
    </>
  )
}

export default ListActor
