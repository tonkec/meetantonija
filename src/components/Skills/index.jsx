import { useNavigate } from 'react-router-dom'
import { removeSpacesAndDashes } from 'utils'

const Skills = ({ skills, buttonClass }) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-gap-small no-padding-left flex-wrap">
      {skills.map((s) => (
        <button
          key={s}
          className={`button ${buttonClass}`}
          onClick={() => {
            navigate(`/cv?skill=${removeSpacesAndDashes(s)}`)
          }}
        >
          {s}
        </button>
      ))}
    </div>
  )
}

export default Skills
