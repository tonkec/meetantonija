import DarkMode from 'components/DarkMode'
import { NavigationLink } from '../index'
import './MobileNavigation.scss'

const MobileNavigation = ({ isOpen, links, onClose, isSettings }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed flex flex-column space-between overflow-auto top-0 bottom-0 right-0 bg-pink z-999 mobile-nav w-full">
      <div className="flex flex-column links">
        {isSettings ? (
          <DarkMode />
        ) : (
          links.map((link, index) => (
            <NavigationLink
              key={index}
              href={link.href}
              buttonClassName="primary"
            >
              <span className="flex flex-y-center flex-gap-small">
                {index}. {link.label} {link.icon}
              </span>
            </NavigationLink>
          ))
        )}
      </div>

      <button
        className="w-full bg-black inline-block small-padding normal-font"
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
