import { useEffect } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../../components/layout'
import CrewMember from '../../components/crew-member/CrewMember'

const Riley = () => {

  return (
    <Layout page="crew-member">
      <Head>
        <title>{siteTitle + ' || Riley'}</title>
      </Head>

      <CrewMember member="riley" />

    </Layout>
  )
}

export default Riley