import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>JAAJSKATEBOARD</title>
      </Head>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  )

}

export default MyApp
