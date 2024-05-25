import { RxHamburgerMenu } from 'react-icons/rx'
import Social from './../../components/Social'
import useScrollPosition from './../../hooks/useScrollPosition'
import DarkMode from '../DarkMode'
import './Navigation.scss'

const Navigation = ({ setIsMobileNavigationOpen }) => {
  const scrollPosition = useScrollPosition()

  const navigationClasses =
    scrollPosition > 100 ? 'navigation' : 'navigation scrolled-to-top'

  return (
    <div className={navigationClasses}>
      <div className="container flex flex-gap space-between flex-center">
        <button
          onClick={() => {
            setIsMobileNavigationOpen(true)
          }}
          className="ternary"
        >
          <RxHamburgerMenu fontSize={'2rem'} />
        </button>
        <h6>Shift + K</h6>
        {/* <Social icons={socialLinks} /> */}
        <DarkMode />
      </div>
    </div>
  )
}

export default Navigation
