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
import Seo from 'components/Seo'
import ProjectPhotos from 'components/ProjectPhotos'
import RecordNotFound from 'components/RecordNotFound'
import EngineeringStories from 'components/EngineeringStories'
import ArchitectureFlow from 'components/ArchitectureFlow'
import ProjectNav from 'components/ProjectNav'
import caseStudies from 'data/caseStudies'
import architectureFlows from 'data/architectureFlows'
import { getPageMeta } from 'data/pagesMeta'
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

const ProjectSection = ({
  kicker,
  title,
  children,
  tone = 'light',
  id,
  className = '',
}) => (
  <section
    className={`project-section project-section--${tone} ${className}`.trim()}
    id={id}
  >
    <div className="container">
      {kicker || title ? (
        <header className="project-section__header">
          {kicker ? <p className="section-kicker">{kicker}</p> : null}
          {title ? <h2>{title}</h2> : null}
        </header>
      ) : null}
      {children}
    </div>
  </section>
)

const ProjectPage = () => {
  const { title } = useParams()
  const project = projects.find(
    (entry) => removeSpacesAndDashes(entry.title) === title
  )

  if (!project) {
    return <RecordNotFound />
  }

  const isDuga = project.title === 'Duga'
  const caseStudy = caseStudies.find(
    (study) =>
      removeSpacesAndDashes(study.title) ===
      removeSpacesAndDashes(project.title)
  )
  const outcomes = caseStudy?.outcomes || project.outcomes || []
  const keyFeatures = caseStudy?.keyFeatures || []
  const architecture = caseStudy?.architecture
  const technologies =
    caseStudy?.technologies?.length > 0
      ? caseStudy.technologies
      : project.skills.split(',').map((skill) => skill.trim()).filter(Boolean)
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
  const showGallery = galleryPhotos.length > 0
  const architectureFlow = caseStudy?.slug
    ? architectureFlows[caseStudy.slug]
    : null
  const hasExploreLinks = !isDuga && (project.link || repositoryLinks.length > 0)

  const pageMeta = getPageMeta(`/project/${title}`)

  return (
    <div className="project-page">
      <Seo
        title={pageMeta?.title || `${project.title} — Antonija Simić`}
        description={
          pageMeta?.description ||
          project.description?.slice(0, 160) ||
          project.headline
        }
        path={`/project/${title}`}
        type="article"
        jsonLd={pageMeta?.jsonLd}
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
            <div className="project-hero-actions">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary"
                >
                  View project
                </a>
              ) : null}
              <button
                type="button"
                className="outlined"
                onClick={() => scrollToTheElement('tldr')}
              >
                Skip to TLDR
              </button>
            </div>
          </div>

          <aside className="project-hero-card" aria-label="Project details">
            <dl className="project-hero-meta">
              <div>
                <dt>Role</dt>
                <dd>{caseStudy?.role || project.position}</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>{formatProjectPeriod(project)}</dd>
              </div>
              <div>
                <dt>Team</dt>
                <dd>{getTeamSize(project.team)}</dd>
              </div>
              <div>
                <dt>Methodology</dt>
                <dd>{project.methodology}</dd>
              </div>
            </dl>
            {technologies.length ? (
              <ul className="project-tech-list" aria-label="Technologies">
                {technologies.slice(0, 6).map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            ) : null}
          </aside>
        </div>
      </header>

      <ProjectSection kicker="Overview" title="What needed solving." tone="dark">
        <div className="project-prose">
          <p>{caseStudy?.context || project.description}</p>
          {project.problem ? <p>{project.problem}</p> : null}
        </div>
      </ProjectSection>

      {showGallery ? (
        <ProjectSection
          kicker="Product snapshots"
          title={
            galleryPhotos.length > 1
              ? 'Here are some photos of the app'
              : 'Product preview'
          }
          tone="soft"
          className="project-gallery"
        >
          <ProjectPhotos project={{ ...project, photos: galleryPhotos }} />
        </ProjectSection>
      ) : null}

      {(caseStudy?.challenges?.length || caseStudy?.solution?.length) ? (
        <ProjectSection
          kicker="Engineering focus"
          title="Hard parts and what changed."
          tone="light"
        >
          <div className="project-split">
            {caseStudy?.challenges?.length ? (
              <article className="project-panel">
                <h3>Where the hard parts were</h3>
                <ul className="project-outcomes">
                  {caseStudy.challenges.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ) : null}
            {caseStudy?.solution?.length ? (
              <article className="project-panel">
                <h3>What changed in the product</h3>
                <ul className="project-outcomes">
                  {caseStudy.solution.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ) : null}
          </div>
        </ProjectSection>
      ) : null}

      {caseStudy?.slug ? (
        <EngineeringStories
          projectSlug={caseStudy.slug}
          mode="project"
          id={`${caseStudy.slug}-engineering-stories`}
          kicker="Engineering stories"
          heading={`Selected ${caseStudy.title} engineering stories.`}
          intro="Expand for context, approach, considerations and outcome."
          showProjectLinks={false}
        />
      ) : null}

      {architectureFlow ? (
        <ProjectSection tone="soft" className="project-architecture-flow">
          <ArchitectureFlow flow={architectureFlow} />
        </ProjectSection>
      ) : null}

      {keyFeatures.length > 0 ? (
        <ProjectSection
          kicker="Key features"
          title="What users can do."
          tone="light"
        >
          <ul className="project-outcomes project-outcomes--wide">
            {keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </ProjectSection>
      ) : null}

      {architecture ? (
        <ProjectSection
          kicker="Technical architecture"
          title="How the system is structured."
          tone="dark"
        >
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
        </ProjectSection>
      ) : null}

      <Steps
        steps={project.responsibilities}
        headline="These were the tasks I had"
      />

      {outcomes.length > 0 ? (
        <ProjectSection
          kicker="Outcomes"
          title="What the work improved."
          tone="light"
        >
          <ul className="project-outcomes project-outcomes--wide">
            {outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </ProjectSection>
      ) : null}

      {hasExploreLinks ? (
        <ProjectSection
          kicker="Explore"
          title="View the product."
          tone="dark"
          id="project-cta"
        >
          <div className="project-link-row">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="primary"
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
                className="outlined"
              >
                {link.label.includes('Backend')
                  ? 'Backend repository'
                  : link.label.includes('Frontend')
                    ? 'GitHub repository'
                    : link.label}
              </a>
            ))}
          </div>
        </ProjectSection>
      ) : null}

      <section className="project-section project-section--soft" id="tldr">
        <div className="container">
          <header className="project-section__header">
            <p className="section-kicker">TLDR</p>
            <h2>What mattered most.</h2>
          </header>
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
    </div>
  )
}

export default ProjectPage
