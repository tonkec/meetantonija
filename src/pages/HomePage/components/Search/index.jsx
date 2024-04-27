import './Search.scss'
import questions from '../../../../data/questions'
import { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState(questions[0].title)
  const [questionContent, setQuestionContent] = useState(questions[0])

  return (
    <div className="flex flex-gap container stretch">
      <section className='flex-2'>
      <h3> Is there anything else you would like to know?</h3>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for questions"
            className='xs-padding block border-radius w-full small-margin-top border-black'
          />

          <div className="flex flex-gap small-margin-top">
            {questions
              .slice(0, 2)
              .filter((question) =>
                question.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((question) => (
                <div
                  key={question.id}
                  onClick={() => setQuestionContent(question)}
                  role='button'
                  className='bg-black xs-padding border-radius pointer max-w-400'
                >
                  {question.title}
                </div>
              ))}
          </div>
      </section>
      <section className='bg-blue flex-1 small-padding'>
        <h3>{questionContent.title}</h3>
        <p>{questionContent.info}</p>
      </section>
    </div>
  )
}

export default Search
