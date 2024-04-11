import { useEffect } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import CrewMember from '../../components/crew-member/CrewMember'

const Blake = () => {

  return (
    <Layout page="crew-member">
      <Head>
        <title>{siteTitle + ' || Blake'}</title>
      </Head>

      <CrewMember member="blake" />

    </Layout>
  )
}

export default Blake