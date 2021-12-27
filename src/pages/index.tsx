import type { NextPage } from 'next'

import Banner from '../components/Banner'
import ListFilm from '../components/ListFilm'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner title="Banner" />
      <ListFilm title="ListFilm" />
      <Footer title="Footer" />
    </>
  )
}

export default Home
