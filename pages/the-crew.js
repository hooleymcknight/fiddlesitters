import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import data from '../data/member_data.json'

const Crew = () => {

  return (
    <Layout page='the-crew'>
      <Head>
        <title>{siteTitle} || The Crew</title>
      </Head>

      <div className="crew-list">
        <h1>The Crew</h1>
        {Object.keys(data).map(member =>
          <Link key={member} href={`/the-crew/${member}`}>
            <a>
              <div className="tile-img" style={{backgroundImage: `url(${data[member]['bio_panel']['main_image']})`}}></div>
              <span>{member}</span>
            </a>
          </Link>
        )}
      </div>

    </Layout>

  )
}

export default Crew