import { FaHeart, FaCoffee } from 'react-icons/fa'
import Emoji from './../../components/Emoji'
import DarkMode from './DarkMode'
import './Footer.scss'

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
        <div className="flex space-between">
          <span>
            <span> Copyright &copy; </span>
            <span>{new Date().getFullYear()}</span> <a href="/">meetantonija</a>
          </span>
          <DarkMode />
        </div>
      </div>
    </footer>
  )
}
export default Footer
