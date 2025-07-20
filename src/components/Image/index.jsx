import './Image.scss'
import useImage from 'hooks/useImage'
import { ThreeDots } from 'react-loader-spinner'
import { useLocalStorage } from '@uidotdev/usehooks'
const Image = ({
  hasColoredBackground,
  src,
  alt,
  isBackgroundImage,
  style,
  onClick,
  className,
}) => {
  const isImageLoading = useImage(src)
  const [isDarkLocalStorage] = useLocalStorage('dark-mode', false)

  if (isImageLoading) {
    return (
      <ThreeDots
        color={isDarkLocalStorage ? '#fcfcfc' : '#000'}
        height={50}
        width={50}
      />
    )
  }

  if (!src) {
    return null
  }

  if (isBackgroundImage) {
    return (
      <div
        className="content contain isBackgroundImage"
        style={{ backgroundImage: `url(${src})`, ...style }}
        onClick={onClick}
      ></div>
    )
  }

  if (hasColoredBackground) {
    return (
      <div
        className={`image-container ${className}`}
        style={style}
        onClick={onClick}
      >
        <img src={src} alt={alt} />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`border-radius w-full ${className}`}
      style={style}
      onClick={onClick}
    />
  )
}

export default Image
