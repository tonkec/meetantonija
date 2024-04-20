import './Image.scss'
import useImage from '../../hooks/useImage'
import { Blocks } from 'react-loader-spinner'

const Image = ({ src, alt }) => {
  const isImageLoading = useImage(src)

  if (isImageLoading) {
    return <Blocks type="ThreeDots" color="#00BFFF" height={100} width={100} />
  }

  if (!src) {
    return null
  }
  
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="cv-img" />
    </div>
  )
}

export default Image
