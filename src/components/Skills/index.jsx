import { useNavigate } from 'react-router-dom'
import { removeSpacesAndDashesFromString } from '../../utils'

const Skills = ({ skills }) => {
  const navigate = useNavigate()
  return (
    <p className="flex flex-gap-small small-padding flex-wrap">
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
    </p>
  )
}

export default Skills
