import questions from '../../../data/questions'
import { shuffleArray } from '../../../utils/index'
import { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState('')

  return (
    <section>
      <div className="container">
        <h3>Maybe there is something else you would like to know? 🙋‍♀️</h3>
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
  )
}

export default Search
