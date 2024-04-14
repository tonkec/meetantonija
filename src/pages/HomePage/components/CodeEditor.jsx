const CodeEditor = () => {
  return (
    <section className="bg-yellow bg-triangle ss-style-invertedrounded">
      <div className="skewed-top">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="container">
        <h3>✅ I write beautiful code</h3>

        <div className="code">
          <div className="bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <pre>
            <code>
              {`import { skiils } from 'frontend-developer';
const { html, css, javascript, typescript, react } = skills;
const frontendDeveloper = {
  name: 'Antonija',
  age: 30,
  skills: [html, css, javascript, typescript, react],
  neverStopsLearning: true,
  enjoysCoding: true,
  isCreative: true,
}`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}

export default CodeEditor
