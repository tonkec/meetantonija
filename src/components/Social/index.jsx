import './Social.scss'
import { LuLinkedin, LuGithub, LuCodepen } from 'react-icons/lu'

const socialLinks = [
  { href: 'https://github.com/tonkec', icon: LuGithub, name: 'Github' },
  { href: 'https://codepen.io/tonkec', icon: LuCodepen, name: 'Codepen' },

  {
    href: 'https://www.linkedin.com/in/antonija-simic/',
    icon: LuLinkedin,
    name: 'Linkedin',
  },
]
const Social = () => {
  return (
    <div className="flex flex-gap icons flex-responsive">
      {socialLinks.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          target="_blank"
          rel="noreferrer"
          className="flex flex-y-center flex-gap-small no-underline"
        >
          <icon.icon fontSize="2.5rem" /> <span>{icon.name}</span>
        </a>
      ))}
    </div>
  )
}

export default Social
