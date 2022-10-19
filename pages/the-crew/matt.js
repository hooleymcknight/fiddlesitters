import { useEffect } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import CrewMember from '../../components/crew-member/CrewMember'

const Matt = () => {

  return (
    <Layout page="crew-member">
      <Head>
        <title>{siteTitle} || Matt</title>
      </Head>

      <CrewMember member="matt" />

    </Layout>
  )
}

export default Matt