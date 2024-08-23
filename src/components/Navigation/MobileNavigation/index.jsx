import { NavigationLink } from '../index'

const MobileNavigation = ({ isOpen, onClose, links }) => {
  if (!isOpen) {
    return null
  }
  return (
    <div className="fixed inset-0 bg-black z-999 flex flex-y-center flex-x-center">
      <button
        className="primary absolute top-0 left-0 small-margin-left small-margin-top"
        onClick={() => {
          onClose()
        }}
      >
        Close
      </button>
      <div className="flex flex-column flex-y-center">
        {links.map((link, index) => (
          <NavigationLink key={index} href={link.href}>
            {index}. {link.label}
          </NavigationLink>
        ))}
      </div>
    </div>
  )
}

export default MobileNavigation
