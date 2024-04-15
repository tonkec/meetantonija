import Draggable from 'react-draggable'

const CodeEditor = () => {
  return (
    <section className="bg-yellow">
      <div className="skewed-top">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="container">
        <h3>✅ I write beautiful code</h3>

        <Draggable bounds="parent">
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
        </Draggable>

        <Draggable bounds="parent">
          <div className="code">
            <div className="bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <pre>
              <code>
                <span>{`.css-ninja`}</span>
                <span className="bracket">{` {`}</span>
                <span className="block">
                  <span className="property">{`  color:`}</span>
                  <span>{` black;`}</span>
                </span>
                <span className="block">
                  <span className="property">{`  font-weight:`}</span>
                  <span>{` bold;`}</span>
                </span>
                <span className="bracket">{`}`}</span>
                <span className="block">
                  <span>{`.react-dev`}</span>
                  <span className="bracket">{` {`}</span>
                  <span className="block">
                    <span className="property">{`  display:`}</span>
                    <span>{` 💪;`}</span>
                  </span>

                  <span className="bracket">{`}`}</span>
                </span>
              </code>
            </pre>
          </div>
        </Draggable>
      </div>
    </section>
  )
}

export default CodeEditor
