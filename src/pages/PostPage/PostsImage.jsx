import Image from '../../components/Image'

const PostsImage = ({ src, alt }) => (
  <div className="post-image">
    <Image src={src.trim()} alt={alt} style={{ width: '100%' }} />
  </div>
)

export default PostsImage
