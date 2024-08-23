import './JobAlert.scss'
import { IoCloseOutline } from 'react-icons/io5'
import { useLocalStorage } from '@uidotdev/usehooks'
import ButtonCopy from '../ButtonCopy'

const JobAlert = () => {
  const [isOpen, saveOpen] = useLocalStorage('isAlertShown', true)

  if (!isOpen) {
    return null
  }

  return (
    <div className="job flex flex-y-center">
      <span
        onClick={() => {
          saveOpen(false)
        }}
        className="pointer"
      >
        <IoCloseOutline className="text-white" fontSize="1.5rem" />
      </span>
      <p className="small-margin-left">
        {' '}
        Looking for a part time job! <ButtonCopy text={'Copy email'} />{' '}
      </p>
    </div>
  )
}

export default JobAlert
