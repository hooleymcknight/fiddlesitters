import { useEffect } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import CrewMember from '../../components/crew-member/CrewMember'

const Selena = () => {

  return (
    <Layout page="crew-member">
      <Head>
        <title>{siteTitle} || Selena</title>
      </Head>

      <CrewMember member="selena" />

    </Layout>
  )
}

export default Selena