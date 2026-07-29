import './Social.scss'
import { LuLinkedin, LuGithub, LuCodepen } from 'react-icons/lu'
import { socialLinks } from 'data/site'

const iconMap = {
  github: LuGithub,
  linkedin: LuLinkedin,
  codepen: LuCodepen,
}

const Social = () => {
  return (
    <div className="icons">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon]
        return (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            {Icon ? <Icon fontSize="2.5rem" aria-hidden /> : null}{' '}
            <span>{link.name}</span>
          </a>
        )
      })}
    </div>
  )
}

export default Social
