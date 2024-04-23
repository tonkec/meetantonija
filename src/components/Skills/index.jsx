import { useNavigate } from 'react-router-dom'
import { removeSpacesAndDashesFromString } from '../../utils'
import "./Skills.scss"

const Skills = ({ skills }) => {
  const navigate = useNavigate()
  return (
    <p className="skills">
      {skills.map((s) => (
        <span
          key={s}
          className="skill"
          onClick={() => {
            navigate(
              `/cv?skill=${removeSpacesAndDashesFromString(s)}`
            )
          }}
        >
          {s}
        </span>
      ))}
    </p>
  )
}

export default Skills
