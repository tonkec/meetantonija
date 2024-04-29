import { RxHamburgerMenu } from 'react-icons/rx'
import Social from './../../components/Social'
import { LuLinkedin, LuGithub, LuCodepen } from 'react-icons/lu'
import useScrollPosition from './../../hooks/useScrollPosition'
import './Navigation.scss'

const socialLinks = [
  { href: 'https://codepen.io/tonkec', icon: LuCodepen },
  { href: 'https://github.com/tonkec', icon: LuGithub },
  { href: 'https://www.linkedin.com/in/antonija-simic/', icon: LuLinkedin },
]

const Navigation = ({ isMobileNavigationOpen, setIsMobileNavigationOpen }) => {
  const scrollPosition = useScrollPosition()

  const navigationClasses =
    scrollPosition > 100 ? 'navigation' : 'navigation scrolled-to-top'

  return (
    <div className={navigationClasses}>
      <div className="container flex flex-gap space-between flex-center">
        <button>
          <RxHamburgerMenu
            onClick={() => {
              setIsMobileNavigationOpen(!isMobileNavigationOpen)
              console.log('clicked')
            }}
            fontSize={'2rem'}
          />
        </button>
        <h6>Shift + K</h6>
        <Social icons={socialLinks} />
      </div>
    </div>
  )
}

export default Navigation
