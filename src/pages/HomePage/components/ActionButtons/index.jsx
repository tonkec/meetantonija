import cv from 'files/cv.pdf'
import { Link } from 'react-router-dom'
import ButtonCopy from 'components/ButtonCopy'
import { useWindowSize } from 'hooks/useWindowSize'
const ActionButtons = () => {
  const { width } = useWindowSize()

  const isExtraSmall = width < 400
  return (
    <div
      className={
        isExtraSmall
          ? 'block medium-margin-top'
          : 'flex flex-gap-small small-margin-top'
      }
    >
      <ButtonCopy
        text="Get in touch"
        className={isExtraSmall ? 'w-full' : 'inline-block'}
      />

      <Link
        to={cv}
        target="_blank"
        download
        role="button"
        className={
          isExtraSmall
            ? 'w-full ternary block text-center small-margin-top'
            : 'ternary inline-block '
        }
      >
        Download CV
      </Link>
    </div>
  )
}

export default ActionButtons
