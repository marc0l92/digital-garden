import Header from '../components/Header'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <div class="container">
        <Component {...pageProps} />
      </div>
      
    </>
  )
}

export default MyApp
