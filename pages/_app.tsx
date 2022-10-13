import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../pages/components/components"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} className="all" />
    </Layout>
  )
}

export default MyApp
