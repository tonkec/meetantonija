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
import { getValuesAndProperties, pickRandomItemFromArray } from '../../utils'
import { images } from './images'
import MyMasonry from './MyMasonry'

const randomImage = pickRandomItemFromArray(images)

const AboutPage = () => {
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
        <section className="bg-black">
          <div className="container">
            <h2>I bring a lot of values to the table.</h2>

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
              In 2013, I found myself in the depths of depression, yearning for
              change and renewal. It was during this challenging time that I
              stumbled upon coding as a beacon of hope. Initially, I immersed
              myself in the world of Ruby on Rails, seeking to unlock its
              secrets and find a sense of purpose. However, the journey proved
              to be daunting, and I struggled to find my footing in its
              intricate landscape. Determined to persevere, I decided to pivot
              towards front-end development, driven by my affinity for visual
              expression. With HTML, CSS, and jQuery as my tools, I embarked on
              a journey of creativity and discovery. As I crafted digital
              masterpieces with transitions and animations, I felt a sense of
              exhilaration and joy wash over me, as if I had finally found my
              true calling.
            </p>

            <p>
              By 2018, my coding journey took a significant turn as I
              encountered React. Its simplicity and elegant syntax resonated
              deeply with me, and I was captivated by its ability to streamline
              the development process. With React, I found myself embracing a
              new paradigm of building user interfaces, one that prioritized
              clarity and efficiency.
            </p>

            <p>
              Through coding, I not only found solace in the midst of turmoil
              but also discovered a newfound passion that ignited my spirit. It
              was a journey marked by challenges and triumphs, darkness and
              light. Yet, through it all, coding remained a constant source of
              inspiration and transformation, turning despair into creativity
              and hope.
            </p>
          </div>
        </section>

        <section className="bg-white container has-padding">
          <h2>My free time looks something like this </h2>
          <MyMasonry images={images} />
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
