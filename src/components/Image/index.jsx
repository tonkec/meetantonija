import './Image.scss'
import useImage from '../../hooks/useImage'
import { Blocks } from 'react-loader-spinner'

const Image = ({ hasBackground, src, alt }) => {
  const isImageLoading = useImage(src)

  if (isImageLoading) {
    return <Blocks type="ThreeDots" color="#00BFFF" height={100} width={100} />
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

  return <img src={src} alt={alt} />
}

export default Image
