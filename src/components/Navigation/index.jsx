import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import useScrollPosition from './../../hooks/useScrollPosition'
import './Navigation.scss'
import { Link } from 'react-router-dom'
import { useWindowSize } from '@uidotdev/usehooks'
import MobileNavigation from './MobileNavigation'
import { RiEmotionLine } from 'react-icons/ri'
import { RiBriefcase2Line } from 'react-icons/ri'
import ButtonCopy from 'components/ButtonCopy'
import { MdLibraryBooks, MdHome } from 'react-icons/md'
import DarkMode from 'components/DarkMode'

export const NavigationLink = ({ children, href, buttonClassName }) => {
  const activeLink = window.location.pathname

  if (activeLink === href) {
    return (
      <Link
        to={href}
        role="button"
        className={`nav-link active ${buttonClassName}`}
      >
        {children}
      </Link>
    )
  }
  return (
    <Link to={href} role="button" className={`nav-link ${buttonClassName}`}>
      {children}
    </Link>
  )
}

const navigationLinks = [
  {
    href: '/',
    label: 'Home',
    icon: <MdHome fontSize={20} />,
  },
  {
    href: '/about',
    label: 'About',
    icon: <RiEmotionLine fontSize={20} />,
  },
  {
    href: '/posts',
    label: 'Notes',
    icon: <MdLibraryBooks fontSize={20} />,
  },
  {
    href: '/cv',
    label: 'CV',
    icon: <RiBriefcase2Line fontSize={20} />,
  },
]

const getNavigationLinks = (navigationLinks) => {
  return navigationLinks.map((link) => {
    return (
      <NavigationLink key={link.href} href={link.href}>
        <span className="flex flex-y-center flex-gap-small">
          {link.label} {link.icon}
        </span>
      </NavigationLink>
    )
  })
}

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
            className="transparent"
          >
            <RxHamburgerMenu fontSize="1.5rem" />
          </button>
        ) : (
          <div className="flex">{getNavigationLinks(navigationLinks)}</div>
        )}

        <div className="flex medium-margin-right flex-y-center">
          <div className="hidden-mobile">
            <ButtonCopy text="Contact" />
          </div>
          <DarkMode />
        </div>
      </div>
      <MobileNavigation
        isOpen={isMobileNavigationOpen}
        links={navigationLinks}
        onClose={() => setIsMobileNavigationOpen(false)}
      />
    </div>
  )
}

export default Navigation
