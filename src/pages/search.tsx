import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import ListResults from 'components/ListResults/intex'

const Search: NextPage = () => {
  const router = useRouter()
  const [busca, setBusca] = useState([])
  const search = router.query.search
  useEffect(() => {
    console.log(`searchPage:`, search)
  }, [])

  return (
    <>
      <Header />
      <Container>
        {busca.map((buscar, index) => {
          return (
            <h1 key={index}>
              {buscar} - parametro da busca: {search}
            </h1>
          )
        })}
      </Container>
      <Footer />
    </>
  )
}

export default Search
