import Image from '../../components/Image'

const PostsImage = ({ src, alt }) => (
  <Image src={src.trim()} alt={alt} style={{ width: '100%' }} />
)

export default PostsImage
