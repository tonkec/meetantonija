import { FaHeart, FaCoffee } from 'react-icons/fa'
import Emoji from './../../components/Emoji'
import { LuLinkedin, LuGithub, LuCodepen } from 'react-icons/lu'
import Social from './../../components/Social'
import './Footer.scss'
import DarkMode from '../DarkMode'

const socialLinks = [
  { href: 'https://codepen.io/tonkec', icon: LuCodepen },
  { href: 'https://github.com/tonkec', icon: LuGithub },
  { href: 'https://www.linkedin.com/in/antonija-simic/', icon: LuLinkedin },
]

const Footer = () => {
  return (
    <footer className="bg-brown">
      <div className="container">
        <div className="flex space-between flex-responsive small-margin-bottom">
          <Social icons={socialLinks} />
        </div>
        <p className="small-margin-bottom">
          Coded by Antonija Šimić with lots of{' '}
          <FaHeart className="icon" color="red" /> and{' '}
          <FaCoffee color="#6F4E37" className="icon" />
        </p>

        <span className="inline-block small-margin-bottom">
          <span> Copyright &copy; </span>
          <span>{new Date().getFullYear()}</span>{' '}
          <a href="/" className="text-white font-normal">
            meetantonija
          </a>
        </span>

        <DarkMode />
      </div>
    </footer>
  )
}
export default Footer
