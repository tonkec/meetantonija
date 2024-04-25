import Draggable from 'react-draggable'
import './Code.scss'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const javascriptCode =
  "import { skiils } from 'frontend-developer';\nconst { html, css, javascript, typescript, react } = skills;\nconst frontendDeveloper = {\n  name: 'Antonija',\n  age: 30,\n  skills: [html, css, javascript, typescript, react],\n  neverStopsLearning: true,\n  enjoysCoding: true,\n  isCreative: true,\n}"
const scssCode =
  '.scss-master {\n  color: black;\n  font-weight: bold;\n  font-size: large;\n  visibility: visible;\n}\n\n.react-dev {\n  display: 💪;\n}'
const typescriptCode =
  "type DevSkills = 'html' | 'css' | 'javascript' | 'typescript' | 'react';\ninterface ExperiencedDeveveloper {\n  skills: DevSkills[];\n  neverStopsLearning: boolean;\n  enjoysCoding: boolean;\n  isCreative: boolean;\n}\n"

const Code = () => {
  return (
    <section className="bg-yellow codes-section">
      <div className="skewed-top">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="container">
        <h2>✅ I think clicking is so last season.</h2>

        <Draggable bounds="parent">
          <div className="code">
            <div className="bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <SyntaxHighlighter
              language="javascript"
              style={darcula}
              children={String(javascriptCode).replace(/\n$/, '')}
            />
          </div>
        </Draggable>

        <Draggable bounds="parent">
          <div className="code css">
            <div className="bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <SyntaxHighlighter
              language="scss"
              style={darcula}
              children={String(scssCode).replace(/\n$/, '')}
            />
          </div>
        </Draggable>

        <Draggable bounds="parent">
          <div className="code ts">
            <div className="bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <SyntaxHighlighter
              language="typescript"
              style={darcula}
              children={String(typescriptCode).replace(/\n$/, '')}
            />
          </div>
        </Draggable>
      </div>
    </section>
  )
}

export default Code
