import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import useScrollPosition from './../../hooks/useScrollPosition'
import DarkMode from '../DarkMode'
import './Navigation.scss'
import { Link } from 'react-router-dom'
import { useWindowSize } from '@uidotdev/usehooks'
import MobileNavigation from './MobileNavigation'

export const NavigationLink = ({ children, href }) => {
  const activeLink = window.location.pathname
  if (activeLink === href) {
    return (
      <Link
        to={href}
        role="button"
        className="transparent text-white medium-font active nav-link"
      >
        {children}
      </Link>
    )
  }
  return (
    <Link
      to={href}
      role="button"
      className="transparent text-white medium-font nav-link"
    >
      {children}
    </Link>
  )
}

const navigationLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/posts',
    label: 'Posts',
  },
  {
    href: '/cv',
    label: 'CV',
  },
]

const Navigation = () => {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false)
  const scrollPosition = useScrollPosition()
  const { width } = useWindowSize()
  const isMobile = width < 1000

  const navigationClasses =
    scrollPosition > 100 ? 'navigation' : 'navigation scrolled-to-top'

  return (
    <div className={navigationClasses}>
      <div className="flex flex-gap space-between flex-y-center">
        {isMobile ? (
          <button
            onClick={() => {
              setIsMobileNavigationOpen(!isMobileNavigationOpen)
            }}
            className="transparent small-margin-left"
          >
            <RxHamburgerMenu fontSize={'2rem'} />
          </button>
        ) : (
          <div className="flex">
            {navigationLinks.map((link, index) => (
              <NavigationLink key={link.href} href={link.href}>
                {index}. {link.label}
              </NavigationLink>
            ))}
          </div>
        )}

        <DarkMode />
      </div>
      <MobileNavigation
        isOpen={isMobileNavigationOpen}
        onClose={() => setIsMobileNavigationOpen(false)}
        links={navigationLinks}
      />
    </div>
  )
}

export default Navigation
