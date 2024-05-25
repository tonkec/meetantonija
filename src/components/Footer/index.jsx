import { FaHeart, FaCoffee } from 'react-icons/fa'
import Emoji from './../../components/Emoji'
import { LuLinkedin, LuGithub, LuCodepen } from 'react-icons/lu'
import Social from './../../components/Social'
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
        <Emoji />
        <p className="small-margin-bottom">
          Coded by Antonija Šimić with lots of{' '}
          <FaHeart className="icon" color="red" /> and{' '}
          <FaCoffee color="#6F4E37" className="icon" />
        </p>
        <div className="flex space-between flex-responsive">
          <span className="inline-block small-margin-bottom">
            <span> Copyright &copy; </span>
            <span>{new Date().getFullYear()}</span> <a href="/">meetantonija</a>
          </span>

          <Social icons={socialLinks} />
        </div>
      </div>
    </footer>
  )
}
export default Footer
