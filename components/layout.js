/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import CharacterCard from '../murder-mystery/Card'

export const siteTitle = 'Fiddlesitters'

let character

const Layout = ({ children, page, member }) => {

  useEffect(() => {
    character = sessionStorage.getItem('character')
  })

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="One brain cell plays video games"
        />
        <meta
          property="og:image"
          content={`https://fiddlesitters.com/logo192.png`} // image
        />
        <meta name="og:title" content="One brain cell plays video games" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </Head>

      {/* don't show the navbar if we're on the surefoot game page */}
      {page !== 'surefoot' ?
      <Navbar page={page} />
      :
      character ? <CharacterCard char={character} /> : ''
      }

      <main id={page}>
        {children}
      </main>

    </div>
  )
}

export default Layout