import type { NextPage } from 'next'

import Header from '../components/Header'
import Banner from '../components/Banner'
import ListFilm from '../components/ListFilm'
import Footer from '../components/Footer'
import ListActor from 'components/ListActor'
import Container from 'components/Container'

import API from 'service/api'

const Home: NextPage = () => {
  console.log(`getTitleDetails:`, API.getTitleDetails)
  console.log(`getComingSoonMovies:`, API.getComingSoonMovies)
  console.log(`getActorsList:`, API.getActorsList)

  return (
    <>
      <Header />
      <Banner />
      <Container>
        <ListFilm title="Filmes populares" items={API.getTitleDetails} />

        <ListFilm
          title="Próximos lançamentos"
          items={API.getComingSoonMovies}
        />

        <ListActor title="Atores populares" items={API.getActorsList} />
      </Container>
      <Footer />
    </>
  )
}

export default Home
