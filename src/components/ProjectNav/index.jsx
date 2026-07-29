import { Link } from 'react-router-dom'
import { featuredCaseStudies } from 'data/caseStudies'
import { removeSpacesAndDashes } from 'utils'
import './ProjectNav.scss'

/**
 * Case-study navigation: back to selected work + prev/next featured projects.
 */
const ProjectNav = ({ currentSlug }) => {
  const featured = featuredCaseStudies
  const index = featured.findIndex((study) => study.slug === currentSlug)
  const previous = index > 0 ? featured[index - 1] : null
  const next =
    index >= 0 && index < featured.length - 1 ? featured[index + 1] : null

  return (
    <nav className="project-nav" aria-label="Case study navigation">
      <div className="container project-nav__inner">
        <Link to="/#selected-work" className="project-nav__back">
          Back to selected work
        </Link>

        <div className="project-nav__siblings">
          {previous ? (
            <Link
              to={`/project/${removeSpacesAndDashes(previous.title)}`}
              className="project-nav__link"
            >
              <span>Previous</span>
              {previous.title}
            </Link>
          ) : (
            <span className="project-nav__placeholder" aria-hidden="true" />
          )}
          {next ? (
            <Link
              to={`/project/${removeSpacesAndDashes(next.title)}`}
              className="project-nav__link project-nav__link--next"
            >
              <span>Next</span>
              {next.title}
            </Link>
          ) : (
            <span className="project-nav__placeholder" aria-hidden="true" />
          )}
        </div>
      </div>
    </nav>
  )
}

export default ProjectNav
