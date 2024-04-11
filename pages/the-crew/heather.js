import { useEffect } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import CrewMember from '../../components/crew-member/CrewMember'

const Heather = () => {

  return (
    <Layout page="crew-member">
      <Head>
        <title>{siteTitle + ' || Heather'}</title>
      </Head>

      <CrewMember member="heather" />

    </Layout>
  )
}

export default Heather