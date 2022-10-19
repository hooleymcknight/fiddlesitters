/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

import NavItem from './NavItem'
import CrewDropdown from './CrewDropdown'

import logo from '../../public/logo_shiponly.png'

const mobileMenuHandler = (e) => {
  const doc = e.target.closest('html')
  const btn = e.target.closest('button')
  if (btn.classList.contains('menu-open')) {
    btn.classList.remove('menu-open')
    doc.classList.remove('menu-open')
  }
  else {
    btn.classList.add('menu-open')
    doc.classList.add('menu-open')
  }
}

const closeMenu = (e) => {
  if (!e.target.closest('[href="/the-crew"]:not(.crew-opened)')) {
    const doc = e.target.closest('html')
    document.querySelector('.mobile-menu-btn').classList.remove('menu-open')
    doc.classList.remove('menu-open')

    const openedCrew = document.querySelector('[href="/the-crew"].crew-opened')
    if (openedCrew) {
      openedCrew.classList.remove('crew-opened')
    }
  }
  else {
    e.target.closest('[href="/the-crew"]').classList.add('crew-opened')
  }
}

const Navbar = ({ page }) => {

  useEffect(() => {
    let blurred, focused
    const doc = document.documentElement

    document.addEventListener('mouseover', (e) => {
      const navItem = e.target.closest('li.nav-item')
      if (navItem && !navItem.classList.contains('nav-hover')) {
        navItem.classList.add('nav-hover')
        if (navItem.classList.contains('has-dropdown')) {
          navItem.setAttribute('aria-expanded', 'true')
          navItem.querySelector('.dropdown').setAttribute('aria-hidden', 'false')
        }
      }
    })

    document.addEventListener('mouseout', (e) => {
      const navItem = e.target.closest('li.nav-item')
      if (navItem && navItem.classList.contains('nav-hover')) {
        navItem.classList.remove('nav-hover')
        if (navItem.classList.contains('has-dropdown')) {
          navItem.setAttribute('aria-expanded', 'false')
          navItem.querySelector('.dropdown').setAttribute('aria-hidden', 'true')
        }
      }
    })

    document.addEventListener('keyup', (e) => {
      if (e.key !== 'Tab') return

      blurred = focused
      focused = e.target

      const activeNav = document.querySelector('li.nav-item.nav-hover')
      const expandedNav = document.querySelector('li.nav-item.has-dropdown[aria-expanded="true"]')

      if (e.target.closest('li.nav-item > a')) {
        const el = e.target.parentElement

        const prev = el.previousElementSibling
        if (prev) {
          prev.classList.remove('nav-hover')
          if (prev.classList.contains('has-dropdown')) {
            prev.setAttribute('aria-expanded', 'false')
            prev.querySelector('.dropdown').setAttribute('aria-hidden', 'true')
          }
        }

        const next = el.nextElementSibling
        if (next) {
          next.classList.remove('nav-hover')
          if (next.classList.contains('has-dropdown')) {
            next.setAttribute('aria-expanded', 'false')
            next.querySelector('.dropdown').setAttribute('aria-hidden', 'true')
          }
        }
        el.classList.add('nav-hover')
        if (el.classList.contains('has-dropdown')) {
          el.setAttribute('aria-expanded', 'true')
          el.querySelector('.dropdown').setAttribute('aria-hidden', 'false')
        }
      }
      else if (blurred && blurred.closest('li.nav-item') && !e.target.closest('li.nav-item')) {
        if (activeNav) {
          activeNav.classList.remove('nav-hover')
        }
        if (expandedNav) {
          expandedNav.setAttribute('aria-expanded', 'false')
          expandedNav.querySelector('.dropdown').setAttribute('aria-hidden', 'true')
        }
      }
    })
  }, [])

  return (
    <div className="navbar">
      <nav>
        {page === 'home' ?
          <div className="nav-logo">
            <img src={logo.src} alt="Fiddlesitters logo, a classic-style ship on the sea" />
            <h1>Fiddlesitters</h1>
          </div>
        :
        <Link href="/">
          <a onClick={closeMenu} className="nav-logo">
            <img src={logo.src} alt="Fiddlesitters logo, a classic-style ship on the sea" />
            <h1>Fiddlesitters</h1>
          </a>
        </Link>
        }

        <button onClick={e => mobileMenuHandler(e)} className="mobile-menu-btn" type="button" aria-label="open menu" aria-controls="menu">
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul id="menu" role="menubar" className="nav-links">
          <NavItem onClick={e => closeMenu(e)} link="/schedule" name="Schedule" />
          <NavItem onClick={e => closeMenu(e)} link="/social-media" name="Social Media" />
          <NavItem onClick={e => closeMenu(e)} link="/the-crew" name="The Crew" dropdown={<CrewDropdown onClick={e => closeMenu(e)} />} aria-controls="nav-crew-list" />
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
