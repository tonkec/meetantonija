import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import engineeringStories, {
  getHomepageChallenges,
} from 'data/engineeringStories'
import { removeSpacesAndDashes } from 'utils'
import './EngineeringStories.scss'

/**
 * Engineering challenges / stories.
 * Homepage previewOnly: short cards linking to case studies (no duplicated detail).
 * Project pages: expandable Context → Problem → Approach → Considerations → Outcome.
 */
const EngineeringStories = ({
  projectSlug,
  heading = 'Selected engineering challenges.',
  intro = 'Problems solved across Trimbox, FunderPro and Duga — concise enough to scan, expandable for engineering depth.',
  showProjectLinks = true,
  id = 'engineering-challenges',
  kicker = 'Engineering challenges',
  mode = 'auto',
  previewOnly = false,
} = {}) => {
  const reactId = useId()
  const [openId, setOpenId] = useState(null)

  const stories =
    mode === 'homepage' || (!projectSlug && mode === 'auto')
      ? getHomepageChallenges()
      : projectSlug
        ? engineeringStories.filter((story) => story.projectSlug === projectSlug)
        : getHomepageChallenges()

  if (!stories.length) {
    return null
  }

  const toggleStory = (storyId) => {
    setOpenId((current) => (current === storyId ? null : storyId))
  }

  return (
    <section
      className="home-section engineering-stories-section"
      id={id}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container">
        <p className="section-kicker">{kicker}</p>
        <div className="engineering-stories-header">
          <h2 id={`${id}-heading`}>{heading}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>

        <div className="engineering-stories-list">
          {stories.map((story) => {
            const projectPath = story.project
              ? `/project/${removeSpacesAndDashes(story.project)}`
              : null
            const bodyId = `${reactId}-${story.id}-body`
            const isOpen = openId === story.id

            if (previewOnly) {
              return (
                <article key={story.id} className="engineering-story engineering-story--preview">
                  <p className="engineering-story__meta">{story.project}</p>
                  <h3 className="engineering-story__heading">{story.title}</h3>
                  <p className="engineering-story__summary">{story.summary}</p>
                  {projectPath ? (
                    <Link to={projectPath} className="engineering-story__link">
                      Read {story.project} case study
                    </Link>
                  ) : null}
                </article>
              )
            }

            return (
              <article
                key={story.id}
                className={`engineering-story${isOpen ? ' engineering-story--open' : ''}`}
              >
                <h3 className="engineering-story__title">
                  <button
                    type="button"
                    className="engineering-story__toggle"
                    aria-expanded={isOpen}
                    aria-controls={bodyId}
                    onClick={() => toggleStory(story.id)}
                  >
                    <span className="engineering-story__meta">
                      {story.project}
                    </span>
                    <span className="engineering-story__heading">
                      {story.title}
                    </span>
                    <span className="engineering-story__summary">
                      {story.summary}
                    </span>
                    <span className="engineering-story__hint" aria-hidden="true">
                      {isOpen ? 'Collapse −' : 'Expand +'}
                    </span>
                  </button>
                </h3>

                <div
                  className="engineering-story__body"
                  id={bodyId}
                  hidden={!isOpen}
                >
                  {story.context ? (
                    <article className="engineering-story__panel">
                      <h4>Context</h4>
                      <p>{story.context}</p>
                    </article>
                  ) : null}

                  <div className="engineering-story__panels">
                    <article className="engineering-story__panel engineering-story__panel--problem">
                      <h4>Problem</h4>
                      <p>{story.problem}</p>
                    </article>

                    <article className="engineering-story__panel engineering-story__panel--approach">
                      <h4>Approach</h4>
                      <ul>
                        {story.contribution.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>

                    {story.considerations?.length ? (
                      <article className="engineering-story__panel">
                        <h4>Engineering considerations</h4>
                        <ul>
                          {story.considerations.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </article>
                    ) : null}

                    <article className="engineering-story__panel engineering-story__panel--outcome">
                      <h4>Outcome</h4>
                      <ul>
                        {story.outcome.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  </div>

                  {story.technologies?.length ? (
                    <ul
                      className="engineering-story__tech"
                      aria-label="Technologies"
                    >
                      {story.technologies.slice(0, 5).map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  ) : null}

                  {showProjectLinks && projectPath ? (
                    <Link to={projectPath} className="engineering-story__link">
                      Read {story.project} case study
                    </Link>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EngineeringStories
