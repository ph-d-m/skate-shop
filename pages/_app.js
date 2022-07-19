import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import '../styles/fonts.css'
import { CartProvider } from '../context/Cart'
import commerce from '../utils/commerce'

function MyApp({ Component, pageProps }) {
  return (
  <>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
  </>
  )

}

export default MyApp
