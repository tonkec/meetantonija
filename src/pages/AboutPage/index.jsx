import { useEffect } from 'react'
import { createMagicSquares } from '../../utils/index'
import './About.scss'
import Search from '../../pages/HomePage/components/Search'

const AboutPage = () => {
  useEffect(() => {
    createMagicSquares(['main'])
  }, [])
  return (
    <>
      <header className="about-header">
        <div className="container">
          <div className="flex">
            <div className="image-container">
              <img
                src="https://avatars.githubusercontent.com/u/5020758?v=4"
                alt="Antonija"
              />
            </div>
            <h1>
              I am Antonija, a <span className="accent">frontend</span>{' '}
              developer.{' '}
            </h1>
          </div>
        </div>
      </header>
      <main className="about-main">
        <section className="bg-yellow">
          <div className="container">
            <h3>I bring a lot of values to the table.</h3>

            <p>
              I honestly care about the code I am writing and the product I am
              working on. I am super picky about the projects since I want to
              build impressive portfolio. I don't want to just work on something
              just to be working on something. I always ask myself how will this
              project look like in my CV?
            </p>

            <p>These days I focus on designing skills using CSS.</p>
          </div>

          <div className="skewed-bottom">
            <div className="circle"></div>
          </div>
        </section>

        <section className="bg-blue container elevated">
          <h3> I am resistent, dilligent and effective.</h3>
          <p>
            {' '}
            I taught myself without any prior knowledge. One day I woke up and
            just decided today was the day I would start coding. I did not go to
            any school nor bootcamp. I just used free services like
            Freecodecamp, Code School and Codecademy.
          </p>
        </section>

        <section className="bg-green">
          <div className="container">
            <h3>I do not have a diploma in the software development, but...</h3>
            <p>
              {' '}
              I have been coding for so long now, almost ten years. I believe I
              can compete with anyone who has a diploma. I mean college
              graduates will probably know less than me. I am up to date with
              all the latest technologies and I follow several blogs and
              youtubers to see the latest shiny thing in front-end development.
            </p>
          </div>
        </section>

        <section className="search-section">
          <Search />
        </section>
      </main>
    </>
  )
}

export default AboutPage
