import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import logo from '../public/logo.png'
import RecentMedia from '../components/media-content/RecentMedia'

// members and the channels they wish to boost on the FS site
const members = {
  'james': ['twitch', 'yt'],
  'matt': ['twitch'],
  'heather': ['bandcamp'],
  'holly': ['yt', 'twitch'],
  'jackson': ['twitch', 'yt'],
  'kat': ['twitch'],
  'blake': ['twitch', 'yt'],
}

const Home = () => {

  return (
    <Layout page='home'>
      <Head>
        <title>{siteTitle} || Home</title>
      </Head>

      <div className="App">
        <header className="App-header">
          <div className="headline-content">
            <img src={logo.src} className="App-logo" alt="Fiddlesitters logo, a classic-style ship on the sea" />
            <div className="headline-text">
              <h1 className="index-headline">Ahoy, fiddlers and sitters!</h1>
              <p className="index-subheadline">We are a crew of friends who game together and sometimes post videos of it. Check out our team's content&nbsp;below.</p>
            </div>
          </div>

          {Object.keys(members).map(key =>
            members[key].map(videoType =>
              <RecentMedia key={`${key}-${videoType}`} type={videoType} member={key} />
            )
          )}

        </header>
      </div>

    </Layout>
  )
}

export default Home