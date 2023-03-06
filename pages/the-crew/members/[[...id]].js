import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout, { siteTitle } from '../../../components/layout'

import CrewMember from '../../../components/crew-member/CrewMember'

export default function CrewWiki() {
  const [pageContent, setPageContent] = useState('')
  const pageID = useRouter().asPath.replace('/the-crew/members', '').replaceAll('/', '')

  if (pageID !== '[[...id]]' && pageContent !== pageID) {
    setPageContent(pageID)
  }
  
  useEffect(() => {
    function getContent() {
      setPageContent(pageID)
    }

    if (!pageContent.length || pageContent === '[[...id]]') {
      getContent()
    }
  }, [pageContent])

  return (
    <Layout page="crew-member">
      <Head>
        <title>{siteTitle} || {pageID}</title>
      </Head>

      {
        !pageContent.length || pageContent === '[[...id]]' ? 
        <p>nothin to see here</p>
        :
        <CrewMember member={pageID} />
      }

    </Layout>
  )
}