import { Link } from 'react-router-dom'
import engineeringStories from 'data/engineeringStories'
import { featuredCaseStudies } from 'data/caseStudies'
import { removeSpacesAndDashes } from 'utils'
import './EngineeringStories.scss'

const getHomepageStories = () =>
  featuredCaseStudies
    .map(
      (study) =>
        engineeringStories.find(
          (story) => story.projectSlug === study.slug && story.homepage
        ) ||
        engineeringStories.find((story) => story.projectSlug === study.slug)
    )
    .filter(Boolean)

/**
 * Expandable engineering stories. Pass projectSlug to limit to one product.
 * On the homepage, shows exactly one story per featured product.
 * Each story surfaces Problem → Approach → Outcome for recruiter scanning.
 */
const EngineeringStories = ({
  projectSlug,
  heading = 'Production problems I have owned.',
  intro = 'One highlight from each featured product — FunderPro, Trimbox and Duga.',
  showProjectLinks = true,
  id = 'engineering-stories',
} = {}) => {
  const stories = projectSlug
    ? engineeringStories.filter((story) => story.projectSlug === projectSlug)
    : getHomepageStories()

  if (!stories.length) {
    return null
  }

  return (
    <section
      className="home-section engineering-stories-section"
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container">
        <p className="section-kicker">Engineering stories</p>
        <div className="engineering-stories-header">
          <h2 id={`${id}-heading`}>{heading}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>

        <div className="engineering-stories-list">
          {stories.map((story) => {
            const projectPath = story.projectSlug
              ? `/project/${removeSpacesAndDashes(story.projectSlug)}`
              : null

            return (
              <details key={story.id} className="engineering-story">
                <summary>
                  <span className="engineering-story__meta">
                    {story.project}
                  </span>
                  <strong>{story.title}</strong>
                  <span className="engineering-story__summary">
                    {story.summary}
                  </span>
                </summary>

                <div className="engineering-story__body">
                  {story.context ? (
                    <p className="engineering-story__context">{story.context}</p>
                  ) : null}

                  <div className="engineering-story__panels">
                    <article className="engineering-story__panel engineering-story__panel--problem">
                      <h3>Problem</h3>
                      <p>{story.problem}</p>
                    </article>

                    <article className="engineering-story__panel engineering-story__panel--approach">
                      <h3>Approach</h3>
                      <ul>
                        {story.contribution.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>

                    <article className="engineering-story__panel engineering-story__panel--outcome">
                      <h3>Outcome</h3>
                      <ul>
                        {story.outcome.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  </div>

                  {showProjectLinks && projectPath ? (
                    <Link to={projectPath} className="engineering-story__link">
                      View {story.project} case study
                    </Link>
                  ) : null}
                </div>
              </details>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EngineeringStories
