const Steps = () => {
  return (
    <section className="bg-yellow steps-container">
      <div className="skewed-top">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="container">
        <h2>🦶 I take small steps for a big impact.</h2>

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
              Check the codebase, explore the web, read the documentation, ask
              the team.
            </p>
          </div>

          <div className="step">
            <h3>4. Code</h3>
            <p>
              Write the code in a clean manner. Junior and senior should both
              understand it.
            </p>
          </div>

          <div className="step">
            <h3>5. Test</h3>
            <p>Test the code, increase coverage.</p>
          </div>

          <div className="step">
            <h3>6. Deliver</h3>
            <p>
              Deliver the solution to the client. Make sure it is working as
              expected.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
