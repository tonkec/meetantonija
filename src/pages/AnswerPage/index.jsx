import questions from '../../data/questions'
import { useParams } from 'react-router-dom'
import { shuffleArray } from '../../utils'
import HireMe from '../../components/HireMe'

const Answer = () => {
  const { id } = useParams()

  const question = questions.find((question) => question.id === Number(id))
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
            <h4>More questions about me</h4>
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
