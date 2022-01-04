import { Wrapper } from './style'

import CardActor, { CardActorProps } from 'components/CardActor'
import TitleHeading from 'components/TitleHeading'
import { useRouter } from 'next/router'

type ListActorProps = {
  title?: string
  items: CardActorProps[]
}

function ListActor({ title, items }: ListActorProps) {
  const router = useRouter()

  const linkToPageDetail = () => {
    console.log(`linkToPageDetail ListActor::`)

    // const TYPE_FILM = 'tt'
    // const TYPE_ACTOR = 'nm'
    // const id = props.id

    // if (id.includes(TYPE_FILM)) {
    //   router.push({
    //     pathname: '/movie-detail',
    //     query: { film: id }
    //   })
    // } else if (id.includes(TYPE_ACTOR)) {
    //   router.push({
    //     pathname: '/actor-detail',
    //     query: { actor: id }
    //   })
    // }
  }

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
