import { useEffect } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import CrewMember from '../../components/crew-member/CrewMember'

const Cole = () => {

  return (
    <Layout page="crew-member">
      <Head>
        <title>{siteTitle} || Cole</title>
      </Head>

      <CrewMember member="cole" />

    </Layout>
  )
}

export default Cole