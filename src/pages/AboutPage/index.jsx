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
import {getValuesAndProperties} from '../../utils'

const AboutPage = () => {
  const temperatureData = useTemperature()
  const {values , properties} = getValuesAndProperties(temperatureData)
  console.log(values)
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
                a developer from Sveta Nedelja <br /> which currently has a <span data-tooltip-id="temperature-tooltip">
                  <Temperature /></span> weather
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
        <section className="bg-black">
          <div className="container">
            <h2>I bring a lot of values to the table.</h2>

            <p>
              I honestly care about the code I am writing and the product I am
              working on. I am super picky about the projects since I want to
              build impressive portfolio. I don't want to just work on something
              just to be working on something. I always ask myself how will this
              project look like in my CV?
            </p>

            <p>These days I focus on designing skills using CSS.</p>

            <h2>Technologies I am familiar with</h2>
            <ul className="technologies">
              <li>
                <span>
                  <FaHtml5 className="icon" />
                </span>
                <span>
                  HTML <br />
                  10 years
                </span>
              </li>
              <li>
                <span>
                  <FaCss3 className="icon" />
                </span>
                <span>
                  CSS <br />
                  10 years
                </span>
              </li>
              <li>
                <span>
                  <FaJs className="icon" />
                </span>
                <span>
                  JavaScript <br />8 years
                </span>
              </li>
              <li>
                <span>
                  <SiTypescript className="icon" />
                </span>
                <span>
                  TypeScript <br />3 years
                </span>
              </li>
              <li>
                <span>
                  <SiReact className="icon" />
                </span>
                <span>
                  React <br />4 years
                </span>
              </li>
              <li>
                <span>
                  <SiRedux className="icon" />
                </span>
                <span>
                  Redux <br />4 years
                </span>
              </li>

              <li>
                <span>
                  <SiAngular className="icon" />
                </span>
                <span>
                  Angular <br />1 year
                </span>
              </li>
              <li>
                <span>
                  <SiReact className="icon" />
                </span>
                <span>
                  React Native <br />1 year
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-blue">
          <div className="container">
            <h2>My story</h2>
            <p>
              I started coding because I wanted a change in my career, I wanted
              to have a bright future and be competitive in the market.
              Initially, I had been learning Ruby on Rails when I tried CSS and
              Javascript, and instantly fell in love with those languages. I
              could immediately see the result of my coding. It was back in 2013
              and I was super active user on Codecademy, the online learning
              platform for coding.
            </p>

            <p>
              I do not have a diploma in the software development, but I think I
              can make up for it with my expreience. I am up to date with all
              the latest technologies and I follow several blogs and youtubers
              to see the latest shiny thing in front-end development.
            </p>

            <h2>What do I do in freetime?</h2>
            <p>
              I drum in the drumming collective where we fight for human and
              animal rights. I read, mostly fiction and comic books. I play
              basketball, go to the gym and ride bicycle.
            </p>
          </div>
        </section>

        <section className="search-section">
          <Search />
        </section>

        <HireMe />
      </main>
    </>
  )
}

export default AboutPage
