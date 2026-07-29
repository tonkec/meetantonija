import technologyGroups from 'data/technologies'
import './TechnologiesSection.scss'

const TechnologiesSection = () => {
  return (
    <section className="home-section technologies-section" id="technologies">
      <div className="container">
        <p className="section-kicker">Technologies</p>
        <h2>How I use the stack.</h2>
        <p className="technologies-intro">
          Grouped by the product work they support — not a logo wall or skill
          scorecard.
        </p>
        <div className="tech-groups">
          {technologyGroups.map((group) => (
            <article key={group.id} className="tech-group">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologiesSection
