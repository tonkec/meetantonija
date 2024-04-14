import { useRef, useState } from 'react'
import questions from '../../data/questions'
import { shuffleArray } from '../../utils/index'
import { createMagicSquares } from '../../utils/index'
import { useEffect } from 'react'
import notes from '../../data/posts'
import projects from '../../data/projects'
import Iframe from 'react-iframe'
import { Tooltip } from 'react-tooltip'
import { LuMicroscope } from 'react-icons/lu'
import HireMe from '../../components/HireMe'
import { FaDog } from 'react-icons/fa'
import { RiCactusFill } from 'react-icons/ri'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

const HomePage = () => {
  const [iframeUrl, setIframeUrl] = useState(
    'https://codepen.io/tonkec/embed/preview/zYLbVXV?default-tab=result'
  )
  const [isIframeLoading, setIsIframeLoading] = useState(true)
  const [search, setSearch] = useState('')
  const buttonWrapper = useRef(null)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      origin: 'center',
      spacing: 15,
    },
  })

  useEffect(() => {
    createMagicSquares(['footer'])
  }, [])

  return (
    <>
      <header className="container">
        <div className="flex">
          <div>
            <h1>Hey 👋</h1>
            <h2>
              I am <span className="accent">Antonija</span>,
            </h2>
            <h3>
              a frontend developer 👩‍💻 from{' '}
              <span data-tooltip-id="my-tooltip">Zagreb</span>,
            </h3>
            <p>I enjoy building beautiful user interfaces from scratch </p>
            <p>
              using React, Javascript, Typescript and CSS in all its form and
              glory.
            </p>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/5020758?v=4"
            alt="Antonija"
          />
        </div>

        <Tooltip
          id="my-tooltip"
          style={{
            backgroundColor: '#011627',
            padding: '10px',
            borderRadius: '5px',
          }}
          className="tooltip"
        >
          <img
            src="https://i.natgeofe.com/n/a11e9ead-955f-4a4e-977c-d1b2f104ee75/zagrebgettyimages-1144074611hr_3x2.jpg"
            alt="Zagreb"
          />
          <br />
          <span>A capital of Croatia.</span>
        </Tooltip>
      </header>

      <main>
        <section className="container">
          <h3>
            🔥 I design in <span className="accent">code.</span>
          </h3>

          <div className="flex codepen">
            <div ref={buttonWrapper}>
              <button
                className="active"
                onClick={() => {
                  buttonWrapper.current.childNodes.forEach((button) => {
                    button.classList.remove('active')
                  })
                  buttonWrapper.current.childNodes[0].classList.add('active')
                  setIframeUrl(
                    'https://codepen.io/tonkec/embed/preview/zYLbVXV?default-tab=result'
                  )
                  setIsIframeLoading(true)
                }}
              >
                <span>Dog </span>
                <FaDog className="icon" />
                <span>I bark in pure CSS</span>
              </button>
              <button
                onClick={() => {
                  buttonWrapper.current.childNodes.forEach((button) => {
                    button.classList.remove('active')
                  })
                  buttonWrapper.current.childNodes[1].classList.add('active')
                  setIframeUrl(
                    'https://codepen.io/tonkec/embed/preview/NWBoxKo?default-tab=result'
                  )
                  setIsIframeLoading(true)

                }}
              >
                <span>Cactus </span>
                <RiCactusFill className="icon" />

                <span>Watch out for my pure CSS spikes</span>
              </button>
              <button
                onClick={() => {
                  buttonWrapper.current.childNodes.forEach((button) => {
                    button.classList.remove('active')
                  })
                  buttonWrapper.current.childNodes[2].classList.add('active')
                  setIframeUrl(
                    'https://codepen.io/tonkec/embed/preview/jOrpPzL?default-tab=result'
                  )
                  setIsIframeLoading(true)

                }}
              >
                <span>Microscope</span>
                <LuMicroscope className="icon" />
                <span>I enlarge the world in pure CSS</span>
              </button>
            </div>

            <div className="preview">
              {isIframeLoading && <div className="loader">Loading...</div>}
              <Iframe
                url={iframeUrl}
                width="100%"
                height="500"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                onLoad={() => {
                  setIsIframeLoading(false)
                }}
              />
            </div>
          </div>
        </section>

        <section className="bg-yellow bg-triangle ss-style-invertedrounded">
          <div className="skewed-top">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="container">
            <h3>✅ I write beautiful code</h3>

            <div className="code">
              <div className="bar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <pre>
                <code>
                  {`import { skiils } from 'frontend-developer';
const { html, css, javascript, typescript, react } = skills;
const frontendDeveloper = {
  name: 'Antonija',
  age: 30,
  skills: [html, css, javascript, typescript, react],
  neverStopsLearning: true,
  enjoysCoding: true,
  isCreative: true,
}`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        <section className="container">
          <h3>🔥 I work with clients.</h3>

          <div ref={sliderRef} className="keen-slider">
            {projects.sort((p1, p2) =>  p2.to - p1.to).slice(0,5).map((project) => {
              return (
                <div
                  key={project.id}
                  className="keen-slider__slide number-slide"
                >
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
                    return <span key={skill} className='skill'>{skill}</span>
                  })
                  }

                  
                  </div>

                  <a href={`/project/${project.id}`}>
                    View project
                  </a>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-green">
          <div className="skewed-bottom">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="container">
            <h3>👌 I write about technologies I like.</h3>

            {notes.slice(0, 3).map((note) => {
              return (
                <a key={note.id} href={`/posts/${note.id}`} className="note">
                  <h4>
                    {note.title} <note.icon />
                  </h4>
                  <p>{note.subtitle}</p>
                </a>
              )
            })}
          </div>
        </section>

        <section>
          <div className="container">
            <h3>Maybe there is something else you woul like to know? 🙋‍♀️</h3>
            <div className="input-container">
              <div className="search-icon">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                type="text"
                placeholder="What would you like to know?"
                onChange={(e) => {
                  setSearch(e.target.value)
                }}
              />
            </div>
            <div className="questions">
              {shuffleArray(questions)
                .filter((question) => {
                  if (search === '') {
                    return question
                  } else if (
                    question.title.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return question
                  }
                })
                .slice(0, 3)
                .map((question) => {
                  return (
                    <a
                      key={question.id}
                      className="question"
                      href={`/answer/${question.id}`}
                    >
                      <h4>{question.title}</h4>
                    </a>
                  )
                })}
            </div>
          </div>
        </section>

        <section className="container">
          <HireMe />
        </section>
      </main>
    </>
  )
}

export default HomePage
