import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import BrowserFrame from '../../../../components/BrowserFrame'
import './Slider.scss'

const Slider = ({ items, headline }) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      origin: 'center',
      spacing: 5,
      offset: 0,
    },
  })
  return (
    <section className="container has-padding">
      <h3>{headline}</h3>

      <div ref={sliderRef} className="keen-slider">
        {items
          .sort((p1, p2) => p2.to - p1.to)
          .slice(0, 4)
          .map((project) => {
            return (
              <div key={project.id} className="keen-slider__slide number-slide">
                <h3>{project.title}</h3>
                <BrowserFrame>
                  <p>{project.headline}.</p>
                  <a href={`/project/${project.id}`}>Read more</a>
                </BrowserFrame>
                <div className="skills">
                  {project.skills.split(',').map((skill) => {
                    return (
                      <span key={skill} className="skill">
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Slider
