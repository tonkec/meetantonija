import Draggable from 'react-draggable'
import './Code.scss'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { useWindowSize } from '../../../../hooks/useWindowSize'

const javascriptCode =
  "import { skiils } from 'frontend-developer';\nconst { html, css, javascript, typescript, react } = skills;\nconst frontendDeveloper = {\n  name: 'Antonija',\n  age: 30,\n  skills: [html, css, javascript, typescript, react],\n  neverStopsLearning: true,\n  enjoysCoding: true,\n  isCreative: true,\n}"
const scssCode =
  '.scss-master {\n  color: black;\n  font-weight: bold;\n  font-size: large;\n  visibility: visible;\n}\n\n.react-dev {\n  display: 💪;\n}'
const typescriptCode =
  "type DevSkills = 'html' | 'css' | 'javascript' | 'typescript' | 'react';\ninterface ExperiencedDeveveloper {\n  skills: DevSkills[];\n  neverStopsLearning: boolean;\n  enjoysCoding: boolean;\n  isCreative: boolean;\n}\n"

const Code = () => {

  const {width} = useWindowSize();
  const isMobile = width < 768;

  return (
    <section className="container header-padding-bottom">
      <h2>✅ I write beautiful code.</h2>

      <div className="flex flex-responsive flex-wrap flex-gap relative">
        <Draggable bounds="parent" disabled={isMobile}>
          <div className="code">
            <div className="bar flex">
              <span className="inline-block"></span>
              <span className="inline-block"></span>
              <span className="inline-block"></span>
            </div>
            <SyntaxHighlighter
              language="scss"
              style={darcula}
              children={String(scssCode).replace(/\n$/, '')}
            />
          </div>
        </Draggable>

        <Draggable bounds="parent" disabled={isMobile}>
          <div className="code">
            <div className="bar flex">
              <span className="inline-block"></span>
              <span className="inline-block"></span>
              <span className="inline-block"></span>
            </div>
            <SyntaxHighlighter
              language="typescript"
              style={darcula}
              children={String(typescriptCode).replace(/\n$/, '')}
            />
          </div>
        </Draggable>

        <Draggable bounds="parent" disabled={isMobile}>
          <div className="code">
            <div className="bar flex">
              <span className="inline-block"></span>
              <span className="inline-block"></span>
              <span className="inline-block"></span>
            </div>
            <SyntaxHighlighter
              language="javascript"
              style={darcula}
              children={String(javascriptCode).replace(/\n$/, '')}
            />
          </div>
        </Draggable>
      </div>
    </section>
  )
}

export default Code
