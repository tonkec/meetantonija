import './Image.scss'
import useImage from '../../hooks/useImage'
import { Triangle } from 'react-loader-spinner'
import usePrefersDarkMode from '../../hooks/usePrefersDarkMode'

const Image = ({ hasBackground, src, alt }) => {
  const isImageLoading = useImage(src)
  const isDark = usePrefersDarkMode()

  if (isImageLoading) {
    return <Triangle color={isDark ? "#fcfcfc": "#292929"} height={50} width={50} />
  }

  if (!src) {
    return null
  }

  if (hasBackground) {
    return (
      <div className="image-container">
        <img src={src} alt={alt} />
      </div>
    )
  }

  return <img src={src} alt={alt} className="border-radius w-full" />
}

export default Image
