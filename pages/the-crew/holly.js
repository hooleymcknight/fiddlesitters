import { useEffect } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import CrewMember from '../../components/crew-member/CrewMember'

const Holly = () => {

  return (
    <Layout page="crew-member">
      <Head>
        <title>{siteTitle} || Holly</title>
      </Head>

      <CrewMember member="holly" />

    </Layout>
  )
}

export default Holly