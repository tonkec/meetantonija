import './Slider.scss'
import {
  formatProjectPeriod,
  removeSpacesAndDashes,
  truncateString,
} from 'utils'
import { useNavigate } from 'react-router-dom'

const Slider = ({ items, headline }) => {
  const navigate = useNavigate()
  const sortedItems = [...items].sort((p1, p2) => p2.from - p1.from)

  return (
    <section className="project-slider-section">
      <div className="container">
        <p className="section-kicker">More work</p>
        <h2>{headline}</h2>

        <div className="project-related-grid">
          {sortedItems.map((project, index) => (
            <article
              key={project.id}
              className={`project-slide project-slide--accent-${(index % 3) + 1}`}
            >
              <div className="project-slide__meta">
                <span>{formatProjectPeriod(project)}</span>
                {project.company ? (
                  <span className="project-slide__company">
                    {project.company}
                  </span>
                ) : null}
              </div>

              <div className="project-slide__body">
                <h3>{project.title}</h3>
                <h4>{project.headline}</h4>
                <p>{truncateString(project.description, 140)}</p>
              </div>

              <button
                type="button"
                className="primary"
                onClick={() => {
                  navigate(
                    `/project/${removeSpacesAndDashes(project.title.toLowerCase())}`
                  )
                }}
              >
                Read case study
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider
