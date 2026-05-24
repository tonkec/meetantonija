import { NavigationLink } from '../index'
import './MobileNavigation.scss'

const MobileNavigation = ({ isOpen, links, onClose, isSettings }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="mobile-nav">
      <div>
        <p className="section-kicker">Navigation</p>
        <div className="links">
        {links.map((link, index) => (
          <NavigationLink key={index} href={link.href}>
            <span className="flex flex-y-center flex-gap-small">
              {link.label} {link.icon}
            </span>
          </NavigationLink>
        ))}
        </div>
      </div>

      <button
        className="mobile-nav-close"
        onClick={() => {
          onClose()
        }}
      >
        Close
      </button>
    </div>
  )
}

export default MobileNavigation
