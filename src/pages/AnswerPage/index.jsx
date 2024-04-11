import questions from '../../data/questions'
import { useParams } from 'react-router-dom'
import { shuffleArray } from '../../utils'
import HireMe from '../../components/HireMe'
import { useEffect } from 'react'
import { createMagicSquares } from '../../utils'

const Answer = () => {
  const { id } = useParams()

  const question = questions.find((question) => question.id === Number(id))

  useEffect(() => {
    createMagicSquares(['main'])
  }, [])

  return (
    <main>
      {question ? (
        <div className="container">
          <section>
            <h1>{question.title}</h1>
            <p>{question.info}</p>
            <p>{question.answer}</p>
          </section>

          <section>
            <div className="questions">
              {shuffleArray(questions)
                .filter((q) => q.id !== question.id)
                .slice(0, 3)
                .map((q) => {
                  return (
                    <a key={q.id} className="question" href={`/answer/${q.id}`}>
                      <h4>{q.title}</h4>
                    </a>
                  )
                })}
            </div>
          </section>
          <section>
            <HireMe />
          </section>
        </div>
      ) : (
        <div className="container">
          <h1>Question not found</h1>
        </div>
      )}
    </main>
  )
}

export default Answer
