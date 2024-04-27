import './Steps.scss'

const Steps = ({ className, steps, headline }) => {
  return (
    <section className={className}>
      <div className="container">
        <h2>{headline}</h2>

        <div className="grid">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className="bg-black small-padding text-white border-radius"
              >
                <h4 className="small-margin-bottom">
                  {index + 1}. {step.title}
                </h4>
                <span>{step.description}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Steps
