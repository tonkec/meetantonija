import { FaHeart, FaCoffee } from 'react-icons/fa'
import { LuLinkedin, LuGithub, LuCodepen } from 'react-icons/lu'
import Social from './../../components/Social'
import Logo from './../../components/Logo'
import './Footer.scss'

const socialLinks = [
  { href: 'https://codepen.io/tonkec', icon: LuCodepen },
  { href: 'https://github.com/tonkec', icon: LuGithub },
  { href: 'https://www.linkedin.com/in/antonija-simic/', icon: LuLinkedin },
]

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex flex-x-center small-margin-bottom">
          
          <Social icons={socialLinks} />
        </div>

        <p className="text-center">
            Coded by Antonija Šimić with lots of{' '}
            <FaHeart className="icon" color="red" /> and{' '}
            <FaCoffee color="#6F4E37" className="icon" />
          </p>
        <a href="/" className="text-black font-normal">
          <Logo />
        </a>
      </div>
    </footer>
  )
}
export default Footer
