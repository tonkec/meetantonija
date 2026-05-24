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

  if (!src) {
    return null
  }

  const loader = (
    <ThreeDots
      color={isDarkLocalStorage ? '#fcfcfc' : '#000'}
      height={50}
      width={50}
    />
  )

  if (isBackgroundImage) {
    const backgroundImageClassName = ['content contain isBackgroundImage', className]
      .filter(Boolean)
      .join(' ')

    if (isImageLoading) {
      return (
        <div
          className={`${backgroundImageClassName} image-loading`}
          style={style}
          onClick={onClick}
        >
          {loader}
        </div>
      )
    }

    return (
      <div
        className={backgroundImageClassName}
        style={{ backgroundImage: `url(${src})`, ...style }}
        onClick={onClick}
      ></div>
    )
  }

  if (isImageLoading) {
    return loader
  }

  if (hasColoredBackground) {
    return (
      <div className={`image-container ${className}`} onClick={onClick}>
        <img src={src} alt={alt} style={style} />
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
