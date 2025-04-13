import './Search.scss'
import questions from 'data/questions'
import { useState } from 'react'
import { RiCloseLargeLine } from 'react-icons/ri'

const Search = () => {
  const [search, setSearch] = useState(questions[0].title)
  const [questionContent, setQuestionContent] = useState(questions[0])
  const resultQuestions = questions
    .slice(0, 4)
    .filter((question) =>
      question.title.toLowerCase().includes(search.toLowerCase())
    )
    .map((question) => (
      <div
        key={question.id}
        onClick={() => {
          setQuestionContent(question)
          setSearch(question.title)
        }}
        role="button"
        className="primary xs-padding border-radius pointer max-w-400"
      >
        {question.title}
      </div>
    ))

  return (
    <div className="flex flex-responsive flex-gap container large-margin-bottom">
      <section className="flex-2 no-padding">
        <h3> Is there anything else you would like to know?</h3>
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for questions"
            className="xs-padding block border-radius w-full small-margin-top"
          />
          <RiCloseLargeLine
            className="absolute top-50 right-20 pointer"
            fontSize="1rem"
            onClick={() => setSearch('')}
          />
        </div>

        <div className="flex flex-gap-small flex-wrap small-margin-top">
          {resultQuestions.length ? (
            resultQuestions
          ) : (
            <span
              role="button"
              className="block ternary xs-padding border-radius pointer max-w-400"
            >
              No questions found
            </span>
          )}
        </div>
      </section>
      <section className="bg-pink-light flex-1 small-padding border-radius">
        <h4>{questionContent.title}</h4>
        <p>{questionContent.info}</p>
      </section>
    </div>
  )
}

export default Search
