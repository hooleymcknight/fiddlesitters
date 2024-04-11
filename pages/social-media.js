import { useEffect } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'

import SocialMediaList from '../components/social-media/SocialMediaList'
import data from '../data/member_data.json'

const SocialMedia = () => {

  return (
    <Layout page='social-media'>
      <Head>
      <title>{siteTitle + ' || Social Media'}</title>
      </Head>
      <div className="social-media-section">
        {Object.keys(data).map(x => `${x.charAt(0).toUpperCase()}${x.slice(1, x.length)}`).map(key =>
          <SocialMediaList key={key} crewmate={key} data={data[key.toLowerCase()]} />
        )}
      </div>
    </Layout>
  )
}

export default SocialMedia