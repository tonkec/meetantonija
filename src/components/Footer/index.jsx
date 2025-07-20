import { FaHeart, FaCoffee } from 'react-icons/fa'
import Social from 'components/Social'
import Logo from 'components/Logo'
import './Footer.scss'
import Emoji from 'components/Emoji'

const Footer = () => {
  return (
    <footer>
      <div className="container large-margin-top">
        <Emoji />
        <div className="flex flex-x-center small-margin-bottom medium-margin-top">
          <Social />
        </div>{' '}
        <p className="text-center xs-margin-bottom">
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
