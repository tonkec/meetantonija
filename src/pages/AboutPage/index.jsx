import './About.scss'
import Search from '../../pages/HomePage/components/Search'
import { FaHtml5, FaCss3, FaJs } from 'react-icons/fa'
import { SiTypescript, SiRedux, SiReact, SiAngular } from 'react-icons/si'
import HireMe from '../../components/HireMe'
import Image from '../../components/Image'
import Temperature from '../../components/Temperature'
import Me from '../../images/me.jpeg'
import { Tooltip } from 'react-tooltip'
import useTemperature from '../../hooks/useTemperature'
import { getValuesAndProperties,removeSpacesAndDashesFromString } from '../../utils'
import { images } from './images'
import MyMasonry from './MyMasonry'
import { useNavigate } from 'react-router-dom'

const speakingEvents = [
  {
    name: 'CSS tricks',
    year: 2020,
    link: 'https://www.meetup.com/s_css_zagreb/events/266253881/',
    organizer: 'CSS Zagreb',
  },
  {
    name: 'CSS animations',
    year: 2020,
    link: 'https://www.meetup.com/s_css_zagreb/events/265312074/',
    organizer: 'CSS Zagreb',
  },
  {
    name: 'Free intro to the web development',
    year: 2024,
    link: 'https://www.meetup.com/kodiraonica/events/298986803/',
    organizer: 'Kodiraonica',
  },
  {
    name: 'Intersection observers and how to use them',
    year: 2023,
    link: 'https://www.meetup.com/javascript-zagreb/events/297302963/',
    organizer: 'JavaScript Zagreb',
  },
  {
    name: 'Mentoring for beginners',
    year: 2023,
    link: 'https://devshegoes.five.agency/',
    organizer: 'DevSheGoes',
  },
  {
    name: 'How to code a pure css keyboard',
    year: 2020,
    link: 'https://www.meetup.com/css-in-vienna/events/267266901/',
    organizer: 'CSS in Vienna',
  },
]

const technologies = [
  { technology: 'HTML', years: 10, icon: FaHtml5 },
  { technology: 'CSS', years: 10, icon: FaCss3 },
  { technology: 'JavaScript', years: 8, icon: FaJs },
  { technology: 'TypeScript', years: 3, icon: SiTypescript },
  { technology: 'React', years: 4, icon: SiReact },
  { technology: 'Redux', years: 4, icon: SiRedux },
  { technology: 'Angular', years: 1, icon: SiAngular },
  { technology: 'React Native', years: 1, icon: SiReact },
]

const AboutPage = () => {
  const navigate = useNavigate();
  const temperatureData = useTemperature()
  const { values, properties } = getValuesAndProperties(temperatureData)
  return (
    <>
      <header className="about-header">
        <div className="container">
          <div className="flex">
            <div>
              <h2>
                I am <span className="accent">Antonija</span>,
              </h2>

              <h3>
                a frontend developer from Sveta Nedelja <br /> which currently
                has a{' '}
                <span data-tooltip-id="temperature-tooltip">
                  <Temperature />
                </span>{' '}
                weather.
              </h3>
            </div>

            <Tooltip
              id="temperature-tooltip"
              style={{
                backgroundColor: 'var(--color-black)',
                padding: '10px',
                borderRadius: '5px',
              }}
              className="tooltip"
            >
              <ul>
                {properties.map((property, index) => (
                  <li key={index}>
                    {property}: {values[index]}
                  </li>
                ))}
              </ul>
            </Tooltip>

            <Image hasBackground src={Me} alt="Antonija" />
          </div>
        </div>
      </header>
      <main className="about-main">
        <section className="bg-yellow">
          <div className="skewed-top">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="container">
            <h2>💎 I bring a lot of values to the table.</h2>

            <p>
              With a decade of experience in front-end development, I bring a
              wealth of technical expertise to the table. I've mastered various
              technologies, frameworks, and tools, allowing me to create robust
              and responsive user interfaces with ease. My problem-solving
              skills are finely honed after years of tackling challenges in
              front-end development. I have a knack for identifying issues,
              debugging code efficiently, and finding creative solutions to
              complex problems. Attention to detail is one of my strengths. I
              understand the importance of pixel-perfect precision in
              implementing designs across different devices and browsers,
              ensuring high-quality user experiences every time.
            </p>

            <h2>🚀 Technologies I am familiar with</h2>
            <ul className="technologies">
              {technologies.map((tech, index) => (
                <li key={index} onClick={() => {
                  navigate(`/cv?skill=${removeSpacesAndDashesFromString(tech.technology)}`)
                }}>
                  <span>
                    <tech.icon className="icon" />
                  </span>
                  <span>
                    {tech.technology} <br />
                    {tech.years} years
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container has-padding">
          <h2>📖 My story</h2>

          <p>
            In 2013, I found myself in the depths of depression, yearning for
            change and renewal. It was during this challenging time that I
            stumbled upon coding as a beacon of hope. Initially, I immersed
            myself in the world of Ruby on Rails, seeking to unlock its secrets
            and find a sense of purpose. However, the journey proved to be
            daunting, and I struggled to find my footing in its intricate
            landscape. Determined to persevere, I decided to pivot towards
            front-end development, driven by my affinity for visual expression.
            With HTML, CSS, and jQuery as my tools, I embarked on a journey of
            creativity and discovery. As I crafted digital masterpieces with
            transitions and animations, I felt a sense of exhilaration and joy
            wash over me, as if I had finally found my true calling.
          </p>

          <p>
            By 2018, my coding journey took a significant turn as I encountered
            React. Its simplicity and elegant syntax resonated deeply with me,
            and I was captivated by its ability to streamline the development
            process. With React, I found myself embracing a new paradigm of
            building user interfaces, one that prioritized clarity and
            efficiency.
          </p>

          <p>
            Through coding, I not only found solace in the midst of turmoil but
            also discovered a newfound passion that ignited my spirit. It was a
            journey marked by challenges and triumphs, darkness and light. Yet,
            through it all, coding remained a constant source of inspiration and
            transformation, turning despair into creativity and hope.
          </p>
        </section>

        <section>
          <div className="container">
            <h2>🎤 I was a speaker at these events:</h2>

            <ul className="speaking-events">
              {speakingEvents.map((event, index) => (
                <li key={index}>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {event.name}
                  </a>
                  <p>{event.organizer}</p>
                  <p>{event.year}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Search />

        <section className="container has-padding">
          <h2>🚴 My free time looks something like this </h2>
          <MyMasonry images={images} />
        </section>

        <HireMe />
      </main>
    </>
  )
}

export default AboutPage
