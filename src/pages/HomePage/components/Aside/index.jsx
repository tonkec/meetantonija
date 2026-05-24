import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import notes from 'data/posts'
import { formatNoteTitle, shuffleArray } from 'utils'
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
      <h4>{noteContent.title}</h4>
      <p className="small-margin-bottom">
        {noteContent.author} | {noteContent.date}
      </p>
      <p>{noteContent.intro}</p>
      <br />
      <button
        className="primary small-margin-top line-height-1"
        onClick={() => {
          navigate(`/post/${formatNoteTitle(noteContent.title)}`)
        }}
      >
        Read more 👉
      </button>
    </>
  )
}

const Aside = ({ numberOfPosts }) => {
  const visibleNotes = shuffledNotes.slice(0, numberOfPosts)
  const [noteContent, setNoteContent] = useState(visibleNotes[0] || {})
  return (
    <section className="aside-section">
      <div className="container">
        <div className="notes-heading">
          <p className="section-kicker">Learning notes</p>
          <h2>I write down what I learn.</h2>
        </div>

        <div className="notes-layout">
          <div className="notes-list">
            {visibleNotes.map((note) => {
              const isActive = noteContent?.id === note.id
              return (
                <button
                  key={note.id}
                  type="button"
                  className={`post ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setNoteContent(note)
                  }}
                >
                  <span>Note</span>
                  <h4>{note.title}</h4>
                  <p>{note.subtitle}</p>
                </button>
              )
            })}
          </div>
          <aside
            className={noteContent.intro ? 'show' : 'hide'}
          >
            <button
              className="note-close"
              type="button"
              aria-label="Close note preview"
              onClick={() => setNoteContent({})}
            >
              <IoMdClose fontSize="1.2rem" />
            </button>
            <AsideContent noteContent={noteContent} />
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Aside
