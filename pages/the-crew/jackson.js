import { useEffect } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import CrewMember from '../../components/crew-member/CrewMember'

const Jackson = () => {

  return (
    <Layout page="crew-member">
      <Head>
        <title>{siteTitle + ' || Jackson'}</title>
      </Head>

      <CrewMember member="jackson" />

    </Layout>
  )
}

export default Jackson