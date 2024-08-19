import './Social.scss'

const Social = ({ icons }) => {
  return (
    <div className="flex flex-gap icons flex-y-center">
      {icons.map((icon, index) => (
        <a key={index} href={icon.href} target="_blank" rel="noreferrer">
          <icon.icon fontSize="2rem" />
        </a>
      ))}
    </div>
  )
}

export default Social
