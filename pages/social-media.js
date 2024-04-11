import { useEffect } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'

import SocialMediaList from '../components/social-media/SocialMediaList'
import mediaAccounts from '../data/media_accounts.json'

const SocialMedia = () => {

  return (
    <Layout page='social-media'>
      <Head>
      <title>{siteTitle + ' || Social Media'}</title>
      </Head>
      <div className="social-media-section">
        {Object.keys(mediaAccounts).map(key =>
          <SocialMediaList key={key} crewmate={key} data={mediaAccounts[key]} />
        )}
      </div>
    </Layout>
  )
}

export default SocialMedia