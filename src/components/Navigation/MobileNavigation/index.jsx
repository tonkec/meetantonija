import { useEffect, useRef } from 'react'
import { NavigationLink } from '../index'
import './MobileNavigation.scss'

const MobileNavigation = ({ isOpen, links, onClose }) => {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div>
        <div className="mobile-nav-header">
          <p className="section-kicker">Navigation</p>
          <h2>Where to next?</h2>
          <p>Jump into notes, work history, or back to the homepage.</p>
        </div>

        <nav className="links" aria-label="Mobile">
          {links.map((link, index) => (
            <NavigationLink
              key={index}
              href={link.href}
              onNavigate={onClose}
            >
              <span className="flex flex-y-center flex-gap-small">
                {link.label} {link.icon}
              </span>
            </NavigationLink>
          ))}
        </nav>
      </div>

      <button
        ref={closeRef}
        type="button"
        className="mobile-nav-close"
        aria-label="Close navigation"
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
