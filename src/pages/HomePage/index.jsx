import { useState } from 'react'
import questions from '../../data/questions'
import { shuffleArray } from '../../utils/index'
import { createMagicSquares } from '../../utils/index'
import { useEffect } from 'react'

import { Tooltip as ReactTooltip } from 'react-tooltip'

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
            <h2>I am Antonija,</h2>
            <h3>
              a <span className="accent">frontend</span> developer 👩‍💻 from{' '}
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
