import { useParams } from 'react-router-dom'
import projects from 'data/projects'
import Steps from '../HomePage/components/Steps'
import HireMe from 'components/HireMe'
import Slider from '../HomePage/components/Slider'
import {
  formatProjectPeriod,
  removeSpacesAndDashes,
  scrollToTheElement,
} from 'utils'
import Skills from 'components/Skills'
import Seo from 'components/Seo'
import ProjectPhotos from 'components/ProjectPhotos'
import RecordNotFound from 'components/RecordNotFound'
import EngineeringStories from 'components/EngineeringStories'
import ArchitectureFlow from 'components/ArchitectureFlow'
import ProjectNav from 'components/ProjectNav'
import caseStudies from 'data/caseStudies'
import architectureFlows from 'data/architectureFlows'
import './ProjectPage.scss'

const getTeamSize = (team) => {
  if (team <= 1) {
    return 'Solo'
  } else if (team <= 30) {
    return `Small, cca ${team} people`
  } else if (team <= 150) {
    return `Big, cca ${team} people`
  } else {
    return `Huge, cca ${team} people`
  }
}

const architectureLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  infrastructure: 'Infrastructure',
}

const ProjectPage = () => {
  const { title } = useParams()
  const project = projects.find(
    (entry) => removeSpacesAndDashes(entry.title) === title
  )

  if (!project) {
    return <RecordNotFound />
  }

  const isModeMobile = project.id === 11
  const isDuga = project.title === 'Duga'
  const caseStudy = caseStudies.find(
    (study) =>
      removeSpacesAndDashes(study.title) ===
      removeSpacesAndDashes(project.title)
  )
  const outcomes = caseStudy?.outcomes || project.outcomes || []
  const keyFeatures = caseStudy?.keyFeatures || []
  const architecture = caseStudy?.architecture
  const repositoryLinks =
    caseStudy?.repositoryLinks ||
    (project.repositoryUrl || caseStudy?.repositoryUrl
      ? [
          {
            label: 'GitHub repository',
            href: project.repositoryUrl || caseStudy.repositoryUrl,
          },
        ]
      : [])
  const galleryPhotos =
    caseStudy?.photos?.length > 0
      ? caseStudy.photos
      : project.photos || []
  const showGallery = !isModeMobile && galleryPhotos.length > 0
  const architectureFlow = caseStudy?.slug
    ? architectureFlows[caseStudy.slug]
    : null

  return (
    <>
      <Seo
        title={`${project.title} — Antonija Simić`}
        description={project.description?.slice(0, 160) || project.headline}
        path={`/project/${title}`}
        type="article"
      />
      {caseStudy?.featured ? <ProjectNav currentSlug={caseStudy.slug} /> : null}
      <header className="project-hero">
        <div className="container project-hero-grid">
          <div className="project-hero-copy">
            <p className="section-kicker">
              {caseStudy?.personal ? 'Personal product' : 'Project case study'}
            </p>
            <h1>{project.title}</h1>
            <p>{caseStudy?.summary || project.headline}</p>
            {caseStudy?.confidential ? (
              <p className="project-confidential">
                Some product details remain confidential.
              </p>
            ) : null}
          </div>
          <div className="project-hero-card">
            <span>{project.position}</span>
            <strong>{formatProjectPeriod(project)}</strong>
            <button
              type="button"
              className="primary"
              onClick={() => scrollToTheElement('tldr')}
            >
              Skip to TLDR
            </button>
          </div>
        </div>
      </header>

      <section className="project-overview">
        <div className="container project-overview-grid">
          <article>
            <span>Role</span>
            <div>
              <h3>Position</h3>
              <p>{caseStudy?.role || project.position}</p>
            </div>
            <div>
              <h3>Timeline</h3>
              <p>{formatProjectPeriod(project)}</p>
            </div>
          </article>

          <article>
            <span>Stack</span>
            <div>
              <h3>Links</h3>
              <div className="project-link-row">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary inline-block"
                  >
                    View project
                  </a>
                ) : null}
                {!isDuga
                  ? repositoryLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="outlined inline-block"
                      >
                        {link.label}
                      </a>
                    ))
                  : null}
              </div>
            </div>
            <div>
              <h3>Technologies</h3>
              <Skills
                buttonClass="outlined"
                skills={project.skills.split(',')}
              />
            </div>
          </article>

          <article>
            <span>Team</span>
            <div>
              <h3>Methodology</h3>
              <p>{project.methodology}</p>
            </div>
            <div>
              <h3>Team size</h3>
              <p>{getTeamSize(project.team)}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="project-description">
        <div className="container project-description-card">
          <p className="section-kicker">Overview</p>
          <h2>What needed solving.</h2>
          <p>{caseStudy?.context || project.description}</p>
          {project.problem ? <p>{project.problem}</p> : null}
        </div>
      </section>

      {caseStudy?.challenges?.length ? (
        <section className="project-description">
          <div className="container project-description-card">
            <p className="section-kicker">Engineering challenges</p>
            <h2>Where the hard parts were.</h2>
            <ul className="project-outcomes">
              {caseStudy.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {caseStudy?.solution?.length ? (
        <section className="project-description">
          <div className="container project-description-card">
            <p className="section-kicker">Selected contributions</p>
            <h2>What changed in the product.</h2>
            <ul className="project-outcomes">
              {caseStudy.solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {caseStudy?.slug ? (
        <EngineeringStories
          projectSlug={caseStudy.slug}
          mode="project"
          id={`${caseStudy.slug}-engineering-stories`}
          kicker="Engineering stories"
          heading={`Selected ${caseStudy.title} engineering stories.`}
          intro="Context, problem, approach, considerations and outcome — expandable for engineering depth."
          showProjectLinks={false}
        />
      ) : null}

      {architectureFlow ? (
        <section className="project-description">
          <div className="container project-description-card">
            <ArchitectureFlow flow={architectureFlow} />
          </div>
        </section>
      ) : null}

      {keyFeatures.length > 0 ? (
        <section className="project-description">
          <div className="container project-description-card">
            <p className="section-kicker">Key features</p>
            <h2>What users can do.</h2>
            <ul className="project-outcomes">
              {keyFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {architecture ? (
        <section className="project-description">
          <div className="container project-description-card">
            <p className="section-kicker">Technical architecture</p>
            <h2>How the system is structured.</h2>
            <div className="project-architecture-grid">
              {Object.entries(architecture).map(([key, items]) =>
                items?.length ? (
                  <article key={key}>
                    <h3>{architectureLabels[key] || key}</h3>
                    <ul className="project-outcomes">
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ) : null
              )}
            </div>
          </div>
        </section>
      ) : null}

      <Steps
        steps={project.responsibilities}
        headline="These were the tasks I had"
      />

      {showGallery ? (
        <section className="project-gallery">
          <div className="container">
            <p className="section-kicker">Product snapshots</p>
            <h2>
              {galleryPhotos.length > 1
                ? 'Here are some photos of the app'
                : 'Product preview'}
            </h2>
          </div>
          <div className="small-container">
            <ProjectPhotos
              project={{ ...project, photos: galleryPhotos }}
            />
          </div>
        </section>
      ) : null}

      {outcomes.length > 0 ? (
        <section className="project-description">
          <div className="container project-description-card">
            <p className="section-kicker">Outcomes</p>
            <h2>What the work improved.</h2>
            <ul className="project-outcomes">
              {outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {!isDuga && (project.link || repositoryLinks.length > 0) ? (
        <section className="project-description" id="project-cta">
          <div className="container project-description-card project-cta-card">
            <p className="section-kicker">Explore</p>
            <h2>View the product.</h2>
            <div className="project-link-row">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary inline-block"
                >
                  View project
                </a>
              ) : null}
              {repositoryLinks.map((link) => (
                <a
                  key={`cta-${link.href}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outlined inline-block"
                >
                  {link.label.includes('Backend')
                    ? 'Backend repository'
                    : link.label.includes('Frontend')
                      ? 'GitHub repository'
                      : link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="project-tldr" id="tldr">
        <div className="container">
          <p className="section-kicker">TLDR</p>
          <h2>What mattered most.</h2>
          <div className="project-tldr-grid">
            <article>
              <h3>What I learned</h3>
              <p>{caseStudy?.learned || project.learned}</p>
            </article>
            <article>
              <h3>Hardest part</h3>
              <p>{caseStudy?.challenges?.[0] || project.problem}</p>
            </article>
            <article>
              <h3>Context</h3>
              <p>{project.manager}</p>
            </article>
            <article>
              <h3>Conclusion</h3>
              <p>{project.conclusion}</p>
            </article>
          </div>
        </div>
      </section>

      <Slider
        headline="Other projects"
        items={projects.filter((p) => p.id !== project.id)}
      />

      <div className="medium-margin-top">
        <HireMe />
      </div>
    </>
  )
}

export default ProjectPage
