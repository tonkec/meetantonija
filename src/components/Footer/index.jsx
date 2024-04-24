import { FaHeart, FaCoffee } from 'react-icons/fa'
import Emoji from './../../components/Emoji'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Emoji />
        <p>
          Coded by Antonija Šimić with lots of{' '}
          <FaHeart className="icon" color="red" /> and{' '}
          <FaCoffee color="#6F4E37" className="icon" />
        </p>
        <p>&copy; meetantonija {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
export default Footer
