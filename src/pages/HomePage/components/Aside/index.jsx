import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import notes from 'data/posts'
import { formatNoteTitle, shuffleArray, truncateString } from 'utils'
import './Aside.scss'
import { useNavigate } from 'react-router-dom'
const shuffledNotes = shuffleArray(notes)
const AsideContent = ({ noteContent }) => {
  const navigate = useNavigate()
  if (!noteContent.intro) {
    return null
  }
  return (
    <>
      <span>{noteContent.intro && truncateString(noteContent.intro, 200)}</span>
      <br />
      <button
        className="primary small-margin-top"
        onClick={() => {
          navigate(`/post/${formatNoteTitle(noteContent.title)}`)
        }}
      >
        Read more
      </button>
    </>
  )
}

const Aside = ({ numberOfPosts }) => {
  const [noteContent, setNoteContent] = useState({})
  return (
    <section className="aside-section bg-pink-light small-padding-bottom border-radius">
      <div className="container">
        <h2>📚 I write about technologies I like.</h2>
      </div>
      <div className="container overflow-x-hidden relative flex flex-column">
        {shuffledNotes.slice(0, numberOfPosts).map((note) => {
          return (
            <button
              key={note.id}
              className="max-w-50-md block text-left xs-margin-bottom border-radius bg-sky-blue text-black padding"
              onClick={() => {
                setNoteContent(note)
              }}
            >
              <h4 className="text-black">{note.title}</h4>
              <p className="text-black">{note.subtitle}</p>
            </button>
          )
        })}
        <aside
          className={
            noteContent.intro ? 'show border-radius' : 'hide border-radius'
          }
        >
          <IoMdClose
            className="block small-margin-bottom pointer"
            onClick={() => {
              setNoteContent({})
            }}
            fontSize="1.2rem"
          />
          <AsideContent noteContent={noteContent} />
        </aside>
      </div>
    </section>
  )
}

export default Aside
