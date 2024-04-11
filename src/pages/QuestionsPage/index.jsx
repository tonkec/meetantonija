import questions from '../../data/questions'

const QuestionsPage = () => {
  return (
    <main>
      <div className="container">
        {questions.map((question) => {
          return (
            <a key={question.id} href={`/answer/${question.id}`}>
              <h3>{question.title}</h3>
            </a>
          )
        })}
      </div>
    </main>
  )
}

export default QuestionsPage
