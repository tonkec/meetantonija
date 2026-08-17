import { Link } from 'react-router-dom'
import './ProjectNav.scss'

/**
 * Case-study navigation: back to home.
 */
const ProjectNav = () => {
  return (
    <nav className="project-nav" aria-label="Case study navigation">
      <div className="container project-nav__inner">
        <Link to="/" className="project-nav__back">
          Back to home
        </Link>
      </div>
    </nav>
  )
}

export default ProjectNav
