import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import useScrollPosition from './../../hooks/useScrollPosition'
import DarkMode from '../DarkMode'
import './Navigation.scss'
import { Link } from 'react-router-dom'
import { useWindowSize } from '@uidotdev/usehooks'
import MobileNavigation from './MobileNavigation'
import { RiHome2Line } from "react-icons/ri";
import { RiEmotionLine } from "react-icons/ri";
import { RiBook2Line } from "react-icons/ri";
import { RiBriefcase2Line } from "react-icons/ri";

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
    icon: <RiHome2Line />,
  },
  {
    href: '/about',
    label: 'About',
    icon: <RiEmotionLine />,
  },
  {
    href: '/posts',
    label: 'Posts',
    icon: <RiBook2Line />,
  },
  {
    href: '/cv',
    label: 'CV',
    icon: <RiBriefcase2Line />,
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
            className="ternary"
          >
            <RxHamburgerMenu fontSize="1.5rem" />
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
        
        <h6 className='text-white medium-margin-right'>Shift + K</h6>
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
