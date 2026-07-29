import { hero } from 'data/site'
import { scrollToTheElement } from 'utils'
import { useWindowSize } from 'hooks/useWindowSize'

const ActionButtons = () => {
  const { width } = useWindowSize()
  const isExtraSmall = width < 400
  const stackClass = isExtraSmall
    ? 'hero-actions hero-actions--stack'
    : 'hero-actions'

  return (
    <div className={stackClass}>
      <button
        type="button"
        className="primary"
        onClick={() => scrollToTheElement(hero.ctas.work.targetId)}
      >
        {hero.ctas.work.label}
      </button>

      <button
        type="button"
        className="outlined"
        onClick={() => scrollToTheElement(hero.ctas.contact.targetId)}
      >
        {hero.ctas.contact.label}
      </button>
    </div>
  )
}

export default ActionButtons
