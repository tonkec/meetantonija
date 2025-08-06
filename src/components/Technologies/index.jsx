import { FaHtml5, FaCss3, FaJs } from 'react-icons/fa'
import { SiTypescript, SiRedux, SiReact } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'
import { removeSpacesAndDashes } from 'utils'

const technologies = [
  { technology: 'HTML', years: new Date().getFullYear() - 2014, icon: FaHtml5 },
  { technology: 'CSS', years: new Date().getFullYear() - 2014, icon: FaCss3 },
  {
    technology: 'JS',
    years: new Date().getFullYear() - 2016,
    icon: FaJs,
  },
  {
    technology: 'TS',
    years: new Date().getFullYear() - 2019,
    icon: SiTypescript,
  },
  {
    technology: 'React',
    years: new Date().getFullYear() - 2018,
    icon: SiReact,
  },
  {
    technology: 'Redux',
    years: new Date().getFullYear() - 2018,
    icon: SiRedux,
  },
]

const getYearWord = (years) => {
  if (years === 1) {
    return 'year'
  } else {
    return 'years'
  }
}

const Technologies = () => {
  const navigate = useNavigate()

  return (
    <section className="large-margin-bottom">
      <div className="container">
        <div className="flex flex-gap flex-responsive">
          <div className="flex-1">
            <h2>🚀 Technologies I have mastered</h2>
            <div className="flex flex-gap-small flex-wrap">
              {technologies.map((tech, index) => (
                <button
                  key={index}
                  className="ternary"
                  onClick={() =>
                    navigate(
                      `/cv?skill=${removeSpacesAndDashes(tech.technology)}`
                    )
                  }
                >
                  <p className="small-font">
                    <span>
                      <tech.icon className="small-margin-right" />
                    </span>
                    <span>{tech.technology}</span>{' '}
                    <span>
                      {tech.years} {getYearWord(tech.years)}
                    </span>
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
