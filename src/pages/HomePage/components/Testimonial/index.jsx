import Image from 'components/Image'
import { removeSpacesAndDashes } from 'utils'

const Testimonial = ({ testimonial }) => {
  return (
    <div className="small-margin-top flex flex-column space-between">
      <q>{testimonial.content}</q>
      <div className="flex flex-gap-small flex-y-center xs-margin-top">
        <div className="flex max-w-70">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            className="circle"
          />
        </div>{' '}
        <p>
          {testimonial.author} @ {testimonial.project}
        </p>
      </div>
    </div>
  )
}

export default Testimonial
