import { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import useScrollPosition from './../../hooks/useScrollPosition'
import './Navigation.scss'
import { Link } from 'react-router-dom'
import { useWindowSize } from '@uidotdev/usehooks'
import MobileNavigation from './MobileNavigation'
import ButtonCopy from 'components/ButtonCopy'
import DarkMode from 'components/DarkMode'
import { BiHomeHeart, BiFile, BiBriefcase, BiSearch } from 'react-icons/bi'

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
    icon: <BiHomeHeart fontSize={20} />,
  },
  {
    href: '/posts',
    label: 'Notes',
    icon: <BiFile fontSize={20} />,
  },
  {
    href: '/cv',
    label: 'CV',
    icon: <BiBriefcase fontSize={20} />,
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

const Navigation = ({ openNavigation }) => {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false)
  const scrollPosition = useScrollPosition()
  const { width } = useWindowSize()
  const isMobile = width < 1000

  const navigationClasses =
    scrollPosition > 100 ? 'navigation' : 'navigation scrolled-to-top'

  useEffect(() => {
    if (!isMobileNavigationOpen) {
      return
    }

    const body = document.querySelector('body')
    const html = document.querySelector('html')
    const previousBodyOverflow = body.style.overflow
    const previousHtmlOverflow = html.style.overflow

    body.style.overflow = 'hidden'
    html.style.overflow = 'hidden'

    return () => {
      body.style.overflow = previousBodyOverflow
      html.style.overflow = previousHtmlOverflow
    }
  }, [isMobileNavigationOpen])

  return (
    <div className={navigationClasses}>
      <div className="navigation-inner">
        {isMobile ? (
          <button
            onClick={() => {
              setIsMobileNavigationOpen(!isMobileNavigationOpen)
            }}
            className="nav-icon-button"
            aria-label="Open navigation"
          >
            <RxHamburgerMenu fontSize="1.5rem" />
          </button>
        ) : (
          <nav className="navigation-links" aria-label="Main navigation">
            {getNavigationLinks(navigationLinks)}
            <button
              type="button"
              className="nav-search-button"
              onClick={() => openNavigation()}
            >
              <BiSearch fontSize={20} />
              <span>Shift + K</span>
            </button>
          </nav>
        )}

        <div className="navigation-actions">
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
