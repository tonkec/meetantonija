import { useState } from 'react'
import Search from '../../pages/HomePage/components/Search'
import { FaHtml5, FaCss3, FaJs } from 'react-icons/fa'
import {
  SiTypescript,
  SiRedux,
  SiReact,
  SiRubyonrails,
  SiAngular,
  SiNodedotjs,
  SiMongodb,
  SiSocketdotio,
  SiPostgresql,
} from 'react-icons/si'
import HireMe from 'components/HireMe'
import Image from 'components/Image'
import Temperature from 'components/Temperature'
import { Tooltip } from 'react-tooltip'
import useTemperature from 'hooks/useTemperature'
import { getValuesAndProperties, removeSpacesAndDashes } from 'utils'
import { images } from './images'
import MyMasonry from './MyMasonry'
import { Helmet } from 'react-helmet'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { rootImageUrl } from '../../rootImageUrl'

const speakingEvents = [
  {
    name: 'CSS tricks',
    year: 2020,
    link: 'https://www.meetup.com/s_css_zagreb/events/266253881/',
    organizer: 'CSS Zagreb',
    photo: rootImageUrl + 'meetups/css.webp',
    content:
      'I talked about the latest CSS tricks and how to use them in your projects.',
    location: 'Zagreb',
  },
  {
    name: 'Free intro to the web development',
    year: 2024,
    link: 'https://www.meetup.com/kodiraonica/events/298986803/',
    organizer: 'Kodiraonica',
    photo: rootImageUrl + 'meetups/intro.jpg',
    content:
      'I talked about the basics of web development and how to start your journey.',
    location: 'Samobor',
  },
  {
    name: 'Intersection observers and how to use them',
    year: 2023,
    link: 'https://www.meetup.com/javascript-zagreb/events/297302963/',
    organizer: 'JavaScript Zagreb',
    photo: rootImageUrl + 'meetups/javascript.jpg',
    content:
      'This was my first talk on Javascript Zagreb meetup. I had huge stage fright, but I managed to pull it off.',
    location: 'Zagreb',
  },
  {
    name: 'Mentoring for beginners',
    year: 2023,
    link: 'https://devshegoes.five.agency/',
    organizer: 'DevSheGoes',
    photo: rootImageUrl + 'meetups/dev.jpg',
    content:
      'I have been mentoring my whole career and I love to help beginners to start their journey. This event was a great opportunity to share my knowledge.',
    location: 'Zagreb',
  },
  {
    name: 'How to code a pure css keyboard',
    year: 2020,
    link: 'https://www.meetup.com/css-in-vienna/events/267266901/',
    organizer: 'CSS in Vienna',
    photo: rootImageUrl + 'meetups/vienna.jpg',
    content:
      'This was my first talk outside Croatia. I was so excited and I met a lot of new people. I coded a pure CSS keyboard in front of the live audience.',
    location: 'Vienna',
  },
]

const technologies = [
  { technology: 'HTML', years: 10, icon: FaHtml5 },
  { technology: 'CSS', years: 10, icon: FaCss3 },
  { technology: 'JavaScript', years: 8, icon: FaJs },
  { technology: 'TypeScript', years: 3, icon: SiTypescript },
  { technology: 'React', years: 4, icon: SiReact },
  { technology: 'Redux', years: 4, icon: SiRedux },
]

const playedWithTechnologies = [
  { technology: 'Rails', years: 2, icon: SiRubyonrails },
  { technology: 'Angular', years: 1, icon: SiAngular },
  { technology: 'Node', years: 2, icon: SiNodedotjs },
  { technology: 'MongoDB', years: 2, icon: SiMongodb },
  { technology: 'Socket.io', years: 1, icon: SiSocketdotio },
  { technology: 'Postgres', years: 1, icon: SiPostgresql },
  { technology: 'React Native', years: 1, icon: SiReact },
]

const getYearWord = (years) => {
  if (years === 1) {
    return 'year'
  } else {
    return 'years'
  }
}

const AboutPage = () => {
  const [event, setEvent] = useState(speakingEvents[0])
  const temperatureData = useTemperature()
  const { values, properties } = getValuesAndProperties(temperatureData)
  const speakingEventsSorted = speakingEvents.sort((a, b) => b.year - a.year)
  return (
    <>
      <Helmet>
        <title>Meetantonija | About Me</title>
      </Helmet>
      <header className="header-padding-top">
        <div className="container">
          <div className="flex flex-responsive flex-gap align-start">
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
              {properties.map((property, index) => (
                <span className="block" key={index}>
                  {property}: {values[index]}
                </span>
              ))}
            </Tooltip>

            <Image
              hasColoredBackground
              src={`${rootImageUrl}/me.jpeg`}
              alt="Antonija"
            />
          </div>
        </div>
      </header>
      <section className="large-padding-bottom">
        <div className="container">
          <h2>💎 I bring a lot of values to the table.</h2>

          <p>
            With a decade of experience in front-end development, I bring a
            wealth of technical expertise to the table. I've mastered various
            technologies, frameworks, and tools, allowing me to create robust
            and responsive user interfaces with ease. My problem-solving skills
            are finely honed after years of tackling challenges in front-end
            development. I have a knack for identifying issues, debugging code
            efficiently, and finding creative solutions to complex problems.
            Attention to detail is one of my strengths. I understand the
            importance of pixel-perfect precision in implementing designs across
            different devices and browsers, ensuring high-quality user
            experiences every time.
          </p>
        </div>
      </section>

      <section className="bg-black">
        <div className="container">
          <h2>📖 My story</h2>

          <p className="small-margin-bottom">
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

          <p className="small-margin-bottom">
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
        </div>
      </section>

      <section className="bg-black large-padding-bottom no-padding-top">
        <div className="container">
          <div className="flex flex-gap flex-responsive">
            <div className="flex-1">
              <h2>🚀 Technologies I have mastered</h2>
              <div className="flex flex-gap-small flex-wrap">
                {technologies.map((tech, index) => (
                  <a
                    key={index}
                    href={`/cv?skill=${removeSpacesAndDashes(tech.technology)}`}
                    role="button"
                    className="secondary"
                  >
                    <p className="small-font">
                      <tech.icon className="small-margin-right" />
                      {tech.years} {getYearWord(tech.years)}
                    </p>
                    <p>{tech.technology}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h2>🎨 Technologies I have played with</h2>
              <div className="flex flex-gap-small flex-wrap">
                {playedWithTechnologies
                  .sort((a, b) => {
                    return b.years - a.years
                  })
                  .map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue xs-padding border-radius"
                    >
                      <p className="small-font">
                        <tech.icon className="small-margin-right" />
                        {tech.years} {getYearWord(tech.years)}
                      </p>
                      <p>{tech.technology}</p>
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="large-padding-bottom">
        <div className="container">
          <h2>🎤 I was a speaker at these events:</h2>

          <div className="flex flex-responsive flex-gap align-start">
            <div className="meetups flex-1 max-w-50">
              {speakingEventsSorted.map((event, index) => (
                <span
                  key={index}
                  className="bg-black bg-blue-hover xs-padding border-radius pointer"
                  onClick={() => setEvent(event)}
                >
                  <p>
                    {event.name} @ {event.organizer}
                  </p>
                </span>
              ))}
            </div>
            <div className="bg-black small-padding border-radius max-w-50-sm">
              <div className="flex small-margin-bottom flex-y-center flex-gap-small">
                <p>
                  {event.organizer}, {event.year} in {event.location} |{' '}
                  <a
                    className="text-white normal-font"
                    href={event.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt fontSize="1rem" />{' '}
                  </a>
                </p>
              </div>
              <Image src={event.photo} alt={event.name} />
              <p className="normal-font small-margin-top">{event.content}</p>
            </div>
          </div>
        </div>
      </section>

      <Search />

      <section className="container">
        <h2>🚴 My free time looks something like this </h2>
        <MyMasonry images={images} />
      </section>

      <HireMe />
    </>
  )
}

export default AboutPage
