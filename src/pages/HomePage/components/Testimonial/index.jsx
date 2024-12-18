import Image from 'components/Image'
import { removeSpacesAndDashes } from 'utils'

const Testimonial = ({ testimonial }) => {
  return (
    <div className="small-margin-top flex flex-column space-between">
      <q className="medium-font">{testimonial.content}</q>
      <div className="flex flex-gap-small flex-y-center xs-margin-top">
        <div className="flex max-w-70">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            className="circle"
          />
        </div>{' '}
        <p>
          {testimonial.author} @{' '}
          <a
            className="normal-font"
            href={`project/${removeSpacesAndDashes(testimonial.project)}`}
          >
            {testimonial.project}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Testimonial
