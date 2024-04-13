import { useState } from 'react'
import questions from '../../data/questions'
import { shuffleArray } from '../../utils/index'
import { createMagicSquares } from '../../utils/index'
import { useEffect } from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import notes from '../../data/posts'
import Iframe from 'react-iframe'

const HomePage = () => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    createMagicSquares(['main'])
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
              <span data-tooltip-id="my-tooltip-1">Zagreb</span>.
            </h3>
            <p>I enjoy building beautiful user interfaces from scratch </p>
            <p>
              using React, Javascript, Typescript and CSS in all its form and
              glory.
            </p>
          </div>
          <ReactTooltip id="my-tooltip-1" content="A capital of Croatia" />
          <img
            src="https://avatars.githubusercontent.com/u/5020758?v=4"
            alt="Antonija"
          />
        </div>
      </header>

      <main>
        <section className="container">
          <h3>Let's get right into it. What would you like to know? 🙋‍♀️</h3>
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
        </section>

        <section className="container">
          <h2>Would you like to read something?</h2>
          <div className="notes">
            {shuffleArray(notes)
              .slice(0, 2)
              .map((note) => {
                return (
                  <a key={note.id} className="note" href={`/posts/${note.id}`}>
                    <h3>{note.title} </h3>
                    <p>{note.subtitle}</p>
                  </a>
                )
              })}
          </div>
        </section>

        <section className="container">
          <h2>
            You can also watch me <span className="accent">code</span>.
          </h2>

          <div className="iframes">
            <div className="iframe">
              <Iframe
                url="https://www.youtube.com/embed/iCiG3WTfrX4?si=PVz_A9IWQTcHJCBI"
                width="100%"
                height="300px"
              />
            </div>

            <div className="iframe">
              <Iframe
                url="https://www.youtube.com/embed/GQYJSmaSZow?si=X2qIgOMaPmuTFyJs"
                width="100%"
                height="300px"
              />
            </div>

            <div className="iframe">
              <Iframe
                url="https://www.youtube.com/embed/PgCKTLeWLRs?si=gQTLPBDbEgsApg7h"
                width="100%"
                height="300px"
              />
            </div>
          </div>
        </section>

        <section className="container">
          <h2>Or maybe you are looking for my old webiste? 👀</h2>
          <p>
            I decided to go <span data-tooltip-id="minimalist">minimalist</span>{' '}
            this time, but you can still see my old website here.
          </p>

          <ReactTooltip id="minimalist" content="A way of living." />
        </section>
      </main>
    </>
  )
}

export default HomePage
