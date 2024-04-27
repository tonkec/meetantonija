import { useNavigate } from 'react-router-dom'
import { removeSpacesAndDashesFromString } from '../../utils'

const Skills = ({ skills }) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-gap-small small-padding no-padding-left flex-wrap">
      {skills.map((s) => (
        <button
          key={s}
          className="ternary"
          onClick={() => {
            navigate(`/cv?skill=${removeSpacesAndDashesFromString(s)}`)
          }}
        >
          {s}
        </button>
      ))}
    </div>
  )
}

export default Skills
