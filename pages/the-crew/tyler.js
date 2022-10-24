import { useEffect } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import CrewMember from '../../components/crew-member/CrewMember'

const Tyler = () => {

  return (
    <Layout page="crew-member">
      <Head>
        <title>{siteTitle} || Tyler</title>
      </Head>

      <CrewMember member="tyler" />

    </Layout>
  )
}

export default Tyler