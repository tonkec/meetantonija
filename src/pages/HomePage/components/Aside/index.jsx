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
        className="primary small-margin-top"
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
  const [noteContent, setNoteContent] = useState({})
  return (
    <section className="aside-section bg-pink-light small-padding-bottom border-radius">
      <div className="container">
        <h2>📚 I take notes while I am learning.</h2>
      </div>
      <div className="container overflow-x-hidden relative flex flex-column">
        <div className="flex flex-start flex-responsive">
          <div className="flex-1">
            {shuffledNotes.slice(0, numberOfPosts).map((note) => {
              const isActive = noteContent?.id === note.id
              return (
                <button
                  key={note.id}
                  className={`post max-w-50-md block text-left xs-margin-bottom border-radius bg-sky-blue text-black padding ${
                    isActive ? 'active' : ''
                  }`}
                  onClick={() => {
                    setNoteContent(note)
                  }}
                >
                  <h4 className="text-black">{note.title}</h4>
                  <p className="text-black">{note.subtitle}</p>
                </button>
              )
            })}
          </div>
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
      </div>
    </section>
  )
}

export default Aside
