import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import notes from 'data/posts'
import { formatNoteTitle, shuffleArray, truncateString } from 'utils'
import './Aside.scss'
const shuffledNotes = shuffleArray(notes)
const AsideContent = ({ noteContent }) => {
  if (!noteContent.intro) {
    return null
  }
  return (
    <>
      <span>{noteContent.intro && truncateString(noteContent.intro, 350)}</span>
      <br />
      <button
        className="secondary small-margin-top"
        onClick={() => {
          window.location.href = `/post/${formatNoteTitle(noteContent.title)}`
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
    <section className="aside-section bg-sky-blue small-padding-bottom border-radius">
      <div className="container">
        <h2 className="text-black">👌 I write about technologies I like.</h2>
      </div>
      <div className="container overflow-x-hidden relative flex flex-column">
        {shuffledNotes.slice(0, numberOfPosts).map((note) => {
          return (
            <button
              key={note.id}
              className="max-w-50-md block primary text-left xs-margin-bottom border-radius"
              onClick={() => {
                setNoteContent(note)
              }}
            >
              <h3>{note.title}</h3>
              <p>{note.subtitle}</p>
            </button>
          )
        })}
        <aside className={noteContent.intro ? 'show border-radius' : 'hide border-radius'}>
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
