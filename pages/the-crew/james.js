import { useEffect } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import CrewMember from '../../components/crew-member/CrewMember'

const James = () => {

  return (
    <Layout page="crew-member">
      <Head>
        <title>{siteTitle} || James</title>
      </Head>

      <CrewMember member="james" />

    </Layout>
  )
}

export default James