import { Wrapper } from './style'

import CardActor from 'components/CardActor'
import TitleHeading from 'components/TitleHeading'

import { getActorsList } from 'service/api'

type ListActorProps = {
  title?: string
}

function ListActor({ title }: ListActorProps) {
  return (
    <>
      <TitleHeading size="large" title={title} />
      <Wrapper aria-label="ListActor">
        {getActorsList?.map((actor) => (
          <CardActor
            key={actor.id}
            name={actor.base.name}
            image={actor.base.image}
            filmography={actor.filmography.length}
          />
        ))}
      </Wrapper>
    </>
  )
}

export default ListActor
