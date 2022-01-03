import type { NextPage } from 'next'

import Header from '../components/Header'
import Banner from '../components/Banner'
import ListFilm from '../components/ListFilm'
import Footer from '../components/Footer'
import ListActor from 'components/ListActor'
import Container from 'components/Container'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Container>
        <ListFilm title="Filmes populares" />
        <ListFilm title="Próximos lançamentos" />
        <ListActor title="Atores populares" />
      </Container>
      <Footer />
    </>
  )
}

export default Home
