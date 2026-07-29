import './ArchitectureFlow.scss'

/**
 * Accessible HTML/CSS architecture / flow diagram.
 * Stacks vertically on narrow screens; labels do not rely on colour alone.
 */
const ArchitectureFlow = ({ flow }) => {
  if (!flow?.steps?.length) {
    return null
  }

  return (
    <section
      className="architecture-flow"
      aria-labelledby={`${flow.id}-title`}
    >
      <div className="architecture-flow__header">
        <p className="section-kicker">Architecture</p>
        <h2 id={`${flow.id}-title`}>{flow.title}</h2>
        {flow.summary ? <p>{flow.summary}</p> : null}
      </div>

      <ol className="architecture-flow__steps" aria-label={flow.title}>
        {flow.steps.map((step, index) => (
          <li key={step.id} className="architecture-flow__step">
            <span className="architecture-flow__index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3>{step.label}</h3>
              {step.description ? <p>{step.description}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ArchitectureFlow
