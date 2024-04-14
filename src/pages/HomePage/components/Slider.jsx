import { useKeenSlider } from 'keen-slider/react'
import projects from '../../../data/projects'
import 'keen-slider/keen-slider.min.css'

const Slider = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      origin: 'center',
      spacing: 5,
      offset: 0,
    },
  })
  return (
    <section className="container">
      <h3>🏢 I work with clients.</h3>

      <div ref={sliderRef} className="keen-slider">
        {projects
          .sort((p1, p2) => p2.to - p1.to)
          .slice(0, 4)
          .map((project) => {
            return (
              <div key={project.id} className="keen-slider__slide number-slide">
                <h3>{project.title}</h3>
                <div className="browser">
                  <div className="bar"></div>
                  <div className="fake-content"></div>
                  <div className="image"></div>
                  <div className="fake-content"></div>
                  <div className="content">
                    <p>{project.headline}.</p>
                  </div>
                </div>
                <div className="skills">
                  {project.skills.split(',').map((skill) => {
                    return (
                      <span key={skill} className="skill">
                        {skill}
                      </span>
                    )
                  })}
                </div>

                <a href={`/project/${project.id}`}>View project</a>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Slider
