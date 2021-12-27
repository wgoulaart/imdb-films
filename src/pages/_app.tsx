import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/globals'
import '../styles/globals.ts'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GazimFilms</title>

        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#030518" />
      </Head>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  )
}

export default App
