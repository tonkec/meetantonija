import { RxHamburgerMenu } from 'react-icons/rx'
import Social from './../../components/Social'
import { LuLinkedin, LuGithub, LuCodepen } from 'react-icons/lu'
import './Navigation.scss'

const socialLinks = [
  { href: 'https://codepen.io/tonkec', icon: LuCodepen },
  { href: 'https://github.com/tonkec', icon: LuGithub },
  { href: 'https://www.linkedin.com/in/antonija-simic/', icon: LuLinkedin },
]

const Navigation = ({ isMobileNavigationOpen, setIsMobileNavigationOpen }) => {
  return (
    <div className="container flex flex-gap icons-container">
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
  )
}

export default Navigation
