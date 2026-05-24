import { FaHeart, FaCoffee } from 'react-icons/fa'
import Social from 'components/Social'
import './Footer.scss'
import Emoji from 'components/Emoji'

const Footer = () => (
  <footer>
    <div className="container footer-shell">
      <div className="footer-brand">
        <Emoji />
      </div>

      <div className="footer-content">
        <Social />
        <p>
          Coded by Antonija Šimić with <FaHeart className="icon" color="red" />{' '}
          and <FaCoffee color="#6F4E37" className="icon" />.
        </p>
      </div>
    </div>
  </footer>
)
export default Footer
