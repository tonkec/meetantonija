import './Search.scss'
import questions from '../../../../data/questions'
import { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState(questions[0].title)
  const [questionContent, setQuestionContent] = useState(questions[0])

  return (
    <div className="flex questions-container">
      <section>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="container">
          <h2> Is there anything else you would like to know?</h2>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for questions"
          />

          <div className="questions">
            {questions
              .slice(0, 3)
              .filter((question) =>
                question.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((question) => (
                <div
                  key={question.id}
                  onClick={() => setQuestionContent(question)}
                  className="question"
                >
                  {question.title}
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className="bg-blue">
        <div className="container">
          <h3>{questionContent.title}</h3>
          <p>{questionContent.info}</p>
        </div>
      </section>
    </div>
  )
}

export default Search
