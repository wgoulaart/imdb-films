import type { NextPage } from 'next'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ListFilm from '../components/ListFilm'
import Footer from '../components/Footer'
import ListActor from 'components/ListActor'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner title="Banner" />
      <ListFilm title="Filmes populares" />
      <ListFilm title="Próximos lançamentos" />
      <ListActor title="Atores populares" />
      <Footer />
    </>
  )
}

export default Home
