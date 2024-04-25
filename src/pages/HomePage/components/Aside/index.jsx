import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import notes from '../../../../data/posts'
import { truncateString } from '../../../../utils'
import './Aside.scss'

const Aside = ({ numberOfPosts }) => {
  const [noteContent, setNoteContent] = useState({})
  return (
    <section className="bg-white has-padding">
      <aside className={noteContent.intro ? 'show' : 'hide'}>
        <IoMdClose
          className="icon"
          onClick={() => {
            setNoteContent({})
          }}
        />

        <h3>{noteContent.title}</h3>
        <p>{noteContent.intro && truncateString(noteContent.intro, 350)}</p>
        <button
          onClick={() => {
            window.location.href = `/post/${noteContent.id}`
          }}
        >
          Read more
        </button>
      </aside>
     
      <div className="container">
        <h2>👌 I write about technologies I like.</h2>

        {notes.slice(0, numberOfPosts).map((note) => {
          return (
            <div
              key={note.id}
              className="note"
              onClick={() => {
                setNoteContent(note)
              }}
            >
              <h4>{note.title}</h4>
              <p>{note.subtitle}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Aside
