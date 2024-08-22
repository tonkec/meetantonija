import './Image.scss'
import useImage from '../../hooks/useImage'
import { Triangle } from 'react-loader-spinner'
import usePrefersDarkMode from '../../hooks/usePrefersDarkMode'

const Image = ({
  hasColoredBackground,
  src,
  alt,
  isBackgroundImage,
  style,
  onClick,
}) => {
  const isImageLoading = useImage(src)
  const isDark = usePrefersDarkMode()

  if (isImageLoading) {
    return (
      <Triangle color={isDark ? '#fcfcfc' : '#292929'} height={50} width={50} />
    )
  }

  if (!src) {
    return null
  }

  if (isBackgroundImage) {
    return (
      <div
        className="content contain isBackgroundImage pointer"
        style={{ backgroundImage: `url(${src})`, ...style }}
        onClick={onClick}
      ></div>
    )
  }

  if (hasColoredBackground) {
    return (
      <div className="image-container" style={style} onClick={onClick}>
        <img src={src} alt={alt} />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="border-radius w-full pointer"
      style={style}
      onClick={onClick}
    />
  )
}

export default Image
