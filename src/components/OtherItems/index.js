import { shuffleArray } from '../../utils'

const OtherItems = ({ items, currentItem, url }) => (
  <ul>
    {shuffleArray(items)
      .filter((p) => p.id !== currentItem.id)
      .slice(0, 3)
      .map((p) => {
        return (
          <li key={p.id}>
            <a href={`/${url}/${p.id}`}>{p.title}</a>
          </li>
        )
      })}
  </ul>
)

export default OtherItems
