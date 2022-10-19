import { useEffect } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import logo from '../public/logo.png'

const Home = () => {

  return (
    <Layout page='home'>
      <Head>
        <title>{siteTitle} || Home</title>
      </Head>

      <div className="App">
        <header className="App-header">
          <img src={logo.src} className="App-logo" alt="Fiddlesitters logo, a classic-style ship on the sea" />
          <p>
            Fiddlesitters!
          </p>
        </header>
      </div>

    </Layout>
  )
}

export default Home