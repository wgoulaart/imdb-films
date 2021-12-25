import type { NextPage } from 'next'
import Head from 'next/head'

import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ListFilm from '@/components/ListFilm'

const Home: NextPage = () => {
  return (
    <>
      <Header title="Header" />
      <Banner title="Banner" />
      <ListFilm title="ListFilm" />
      <Footer title="Footer" />
    </>
  )
}

export default Home
