import { useEffect } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import CrewMember from '../../components/crew-member/CrewMember'

const Kat = () => {

  return (
    <Layout page="crew-member">
      <Head>
        <title>{siteTitle + ' || Kat'}</title>
      </Head>

      <CrewMember member="kat" />

    </Layout>
  )
}

export default Kat