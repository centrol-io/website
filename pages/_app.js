import '../styles/globals.css'
import Head from 'next/head'
import GoogleAnalytics from '../components/GoogleAnalytics'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo-192x192.png" />
        <link rel="apple-touch-icon" href="/logo-192x192.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp