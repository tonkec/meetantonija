const Social = ({ icons }) => {
  return (
    <div className="flex icons">
      {icons.map((icon, index) => (
        <a key={index} href={icon.href} target="_blank" rel="noreferrer">
          <icon.icon fontSize="2rem" />
        </a>
      ))}
    </div>
  )
}

export default Social
