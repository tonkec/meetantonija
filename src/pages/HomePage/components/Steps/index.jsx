import './Steps.scss'

const Steps = ({ steps, headline }) => {
  return (
    <section className="small-padding-top">
      <div className="container">
        <h2>{headline}</h2>

        <div className="flex flex-wrap flex-gap flex-responsive">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className="bg-sky-blue small-padding text-white border-radius max-w-50-flex"
              >
                <h4 className="small-margin-bottom text-black">
                  {index + 1}. {step.title}
                </h4>
                <span className="text-black">{step.description}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Steps
