import { useState } from 'react'
import Search from '../../pages/HomePage/components/Search'
import { FaHtml5, FaCss3, FaJs } from 'react-icons/fa'
import { SiTypescript, SiRedux, SiReact } from 'react-icons/si'
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
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

const speakingEvents = [
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

const AboutPage = () => {
  const navigate = useNavigate()
  const [event, setEvent] = useState(speakingEvents[0])
  const temperatureData = useTemperature()
  const { values, properties } = getValuesAndProperties(temperatureData)
  const speakingEventsSorted = speakingEvents.sort((a, b) => b.year - a.year)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <Helmet>
        <title>Meetantonija | About Me</title>
      </Helmet>
      <header className="header-padding-top header-padding-bottom">
        <div className="container">
          <div className="flex flex-responsive flex-gap-large align-start space-between">
            <div>
              <h1 className="small-margin-bottom">About me</h1>
              <p className="line-height-2 medium-padding-right">
                I am a frontend developer from Sveta Nedelja, Croatia (CET)
                which currently has a{' '}
                <span data-tooltip-id="temperature-tooltip">
                  <Temperature />
                </span>{' '}
                weather. I'm a reliable and responsible front-end engineer with
                a passion for building cutting-edge web applications. My
                expertise lies in modern{' '}
                <span className="text-pink">JavaScript</span>,{' '}
                <span className="text-pink">Typescript</span> and{' '}
                <span className="text-pink">React</span>. Collaboration is at
                the heart of my work, and I thrive in environments where
                creativity and technical excellence merge.
              </p>
            </div>

            <Tooltip
              id="temperature-tooltip"
              style={{
                backgroundColor: 'var(--color-sky-blue)',
                padding: '10px',
                borderRadius: '5px',
                color: 'var(--color-black)',
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
              alt="Me"
              className="medium-margin-right"
              style={{ maxWidth: '300px' }}
            />
          </div>
        </div>
      </header>

      <section className="no-padding-top">
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

      <section className="large-padding-bottom">
        <div className="container">
          <h2>🎤 I like to share my knowledge:</h2>

          {event ? (
            <div className="flex flex-responsive flex-gap space-between">
              <div className="flex-1">
                {speakingEventsSorted.map((event, index) => (
                  <span
                    key={index}
                    className={`xs-margin-bottom xs-padding border-radius pointer block ${
                      index === activeIndex
                        ? 'bg-pink text-white'
                        : 'bg-pink-light'
                    }`}
                    onClick={() => {
                      setEvent(event)
                      setActiveIndex(index)
                    }}
                  >
                    <p>
                      {event.name} @ {event.organizer}
                    </p>
                  </span>
                ))}
              </div>
              <div className="bg-pink-light small-padding border-radius max-w-400">
                <div className="flex small-margin-bottom flex-y-center flex-gap-small">
                  <p>
                    {event.organizer}, {event.year} in {event.location}{' '}
                    <a
                      className="text-black normal-font"
                      href={event.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt fontSize="1rem" />{' '}
                    </a>
                  </p>
                </div>
                <Image src={event.photo} alt={event.name} className="w-full" />
                <p className="small-margin-top">{event.content}</p>
              </div>
            </div>
          ) : (
            <div className="loader">
              <ThreeDots color="#f8f9fa" height={100} width={100} />
            </div>
          )}
        </div>
      </section>

      <Search />

      <section className="container">
        <h2>🚴 My free time looks something like this: </h2>
        <MyMasonry images={images} />
      </section>

      <HireMe />
    </>
  )
}

export default AboutPage
