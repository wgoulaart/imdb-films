import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GazimFilms</title>
        <meta name="theme-color" content="#030518" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
