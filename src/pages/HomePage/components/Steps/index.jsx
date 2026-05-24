const Steps = ({ steps, headline }) => {
  return (
    <section className="project-steps">
      <div className="container">
        <p className="section-kicker">Responsibilities</p>
        <h2>{headline}</h2>

        <div className="project-steps-grid">
          {steps.map((step, index) => {
            return (
              <div key={index} className="project-step-card">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
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
