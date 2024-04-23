import { FaHeart, FaCoffee } from 'react-icons/fa'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="skewed-top">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="container">
        <p>&copy; meetantonija {new Date().getFullYear()}</p>
        <p>
          Coded by Antonija Šimić with lots of{' '}
          <FaHeart className="icon" color="red" /> and{' '}
          <FaCoffee color="#6F4E37" className="icon" />
        </p>
      </div>
    </footer>
  )
}
export default Footer
