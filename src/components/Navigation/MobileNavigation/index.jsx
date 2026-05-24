import { NavigationLink } from '../index'
import './MobileNavigation.scss'

const MobileNavigation = ({ isOpen, links, onClose }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="mobile-nav">
      <div>
        <div className="mobile-nav-header">
          <p className="section-kicker">Navigation</p>
          <h2>Where to next?</h2>
          <p>Jump into notes, work history, or back to the homepage.</p>
        </div>

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
