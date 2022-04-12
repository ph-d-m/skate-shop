import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>My new cool app</title>
      </Head>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
  )

}

export default MyApp
