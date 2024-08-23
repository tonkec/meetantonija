import { RxHamburgerMenu } from 'react-icons/rx'
import useScrollPosition from './../../hooks/useScrollPosition'
import DarkMode from '../DarkMode'
import './Navigation.scss'
import { Link } from 'react-router-dom'

const NavigationLink = ({ children, href }) => {
  const activeLink = window.location.pathname
  if (activeLink === href) {
    return (
      <Link to={href} role='button' className="transparent text-white medium-font active nav-link">
        {children}
      </Link>
    )
  }
  return (
    <Link to={href} role='button' className="transparent text-white medium-font nav-link">
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
    href: "/cv",
    label: "CV"
  }
]

const Navigation = ({ setIsMobileNavigationOpen }) => {
  const scrollPosition = useScrollPosition()
  

  const navigationClasses =
    scrollPosition > 100 ? 'navigation' : 'navigation scrolled-to-top'

  return (
    <div className={navigationClasses}>
      <div className="flex flex-gap space-between flex-y-center">
        <button
          onClick={() => {
            setIsMobileNavigationOpen(true)
          }}
          className="ternary"
        >
          <RxHamburgerMenu fontSize={'2rem'} />
        </button>
        <div className="flex">
          {navigationLinks.map((link, index) => (
            <NavigationLink key={link.href} href={link
              .href}>
              {index}. {link.label}
            </NavigationLink>
          ))}
        </div>
        <DarkMode />
      </div>
    </div>
  )
}

export default Navigation
