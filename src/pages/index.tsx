import type { NextPage } from 'next'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ListFilm from '../components/ListFilm'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner title="Banner" />
      <ListFilm title="ListFilm" />
      <Footer />
    </>
  )
}

export default Home
