import { useEffect } from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import RecentYT from '../components/media-content/RecentYT'
import RecentTwitch from '../components/media-content/RecentTwitch'

import logo from '../public/logo.png'
import RecentVideo from '../components/media-content/RecentVideo'

// members and the channels they wish to boost on the FS site
const members = {
  'holly': ['yt', 'twitch'],
  'matt': ['twitch'],
  'james': ['twitch', 'yt'],
  'jackson': ['twitch', 'yt'],
  'blake': ['twitch', 'yt'],
  'kat': ['twitch']
}

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

          {Object.keys(members).map(key =>
            members[key].map(videoType => 
              <RecentVideo type={videoType} member={key} />
            )
          )}

        </header>
      </div>

    </Layout>
  )
}

export default Home