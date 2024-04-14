import questions from '../../data/questions'
import { useParams } from 'react-router-dom'
import HireMe from '../../components/HireMe'
import { useEffect } from 'react'
import { createMagicSquares } from '../../utils'
import OtherItems from '../../components/OtherItems'
import NotFound from '../../components/NotFound'
import './Answer.scss'

const Answer = () => {
  const { id } = useParams()
  const question = questions.find((question) => question.id === Number(id))

  useEffect(() => {
    createMagicSquares(['.magic'])
  }, [])

  return (
    <main>
      {question ? (
        <>
          <section className="answer">
            <div className="container">
              <h1>{question.title}</h1>
              <p>{question.info}</p>
              <p>{question.answer}</p>
            </div>
          </section>

          <section className="bg-yellow">
            <div className="skewed-top">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="container">
              <h2>Steps I take during my development process</h2>

              <div className="steps">
                <div className="step">
                  <h3>1. Understand the problem</h3>
                  <p>Understanding the problem is half the solution.</p>
                </div>

                <div className="step">
                  <h3>2. Plan</h3>
                  <p>Plan the solution and create a roadmap.</p>
                </div>

                <div className="step">
                  <h3>3. Investigate</h3>
                  <p>
                    Check the codebase, explore the web, read the documentation,
                    ask the team.
                  </p>
                </div>

                <div className="step">
                  <h3>4. Code</h3>
                  <p>
                    Write the code in a clean manner. Junior and senior should
                    both understand it.
                  </p>
                </div>

                <div className="step">
                  <h3>5. Test</h3>
                  <p>Test the code, increase coverage.</p>
                </div>

                <div className="step">
                  <h3>6. Deliver</h3>
                  <p>
                    Deliver the solution to the client. Make sure it is working
                    as expected.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="container">
            <HireMe />
          </section>

          <section className="container magic">
            <h3>Check some other questions</h3>
            <OtherItems items={questions} currentItem={question} url="answer" />
          </section>
        </>
      ) : (
        <NotFound />
      )}
    </main>
  )
}

export default Answer
