import questions from '../../data/questions'
import { useParams } from 'react-router-dom'
import HireMe from '../../components/HireMe'
import { useEffect } from 'react'
import { createMagicSquares } from '../../utils'
import OtherItems from '../../components/OtherItems'
import NotFound from '../../components/NotFound'

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
          <section className="answer">
            <h1>{question.title}</h1>
            <p>{question.info}</p>
            <p>{question.answer}</p>
          </section>

          <section>
            <HireMe />
          </section>

          <section>
            <h3>Check some other questions</h3>
            <OtherItems items={questions} currentItem={question} url="answer" />
          </section>
        </div>
      ) : (
        <NotFound />
      )}
    </main>
  )
}

export default Answer
