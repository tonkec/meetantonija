import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import notes from '../../../../data/posts'
import { truncateString } from '../../../../utils'
import './Aside.scss'

const AsideContent = ({ noteContent }) => {
  if (!noteContent.intro) {
    return null
  }
  return (
    <>
      <span>
        {noteContent.intro && truncateString(noteContent.intro, 300)}
      </span>
      <br />
      <button
        className="ternary small-margin-top"
        onClick={() => {
          window.location.href = `/post/${noteContent.id}`
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
    <section className="aside-section no-padding-bottom bg-black">
      <div className="container">
        <h2>👌 I write about technologies I like.</h2>
      </div>
      <div className="container overflow-x-hidden relative flex flex-column">
        {notes.slice(0, numberOfPosts).map((note) => {
          return (
            <button
              key={note.id}
              className="note block secondary text-left small-margin-bottom"
              onClick={() => {
                setNoteContent(note)
              }}
            >
              <h3>{note.title}</h3>
              <p className="small-margin-top">{note.subtitle}</p>
            </button>
          )
        })}
        <aside className={noteContent.intro ? 'show' : 'hide'}>
          <IoMdClose
            className="pull-right block small-margin-bottom pointer"
            onClick={() => {
              setNoteContent({})
            }}
          />
          <AsideContent noteContent={noteContent} />
        </aside>
      </div>
    </section>
  )
}

export default Aside
