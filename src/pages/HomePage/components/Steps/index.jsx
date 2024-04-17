import './Steps.scss'

const Steps = ({ className, steps, headline }) => {
  return (
    <section className={`bg-yellow steps-container ${className}`}>
      <div className="skewed-top">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="container">
        <h2>{headline}</h2>

        <div className="steps">
          {steps.map((step, index) => {
            return (
              <div key={index} className="step">
                <h3>
                  {index + 1}. {step.title}
                </h3>
                <p>{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Steps
