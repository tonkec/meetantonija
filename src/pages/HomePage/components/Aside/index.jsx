import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import notes from '../../../../data/posts'
import { truncateString } from '../../../../utils'
import './Aside.scss'

const Aside = ({ numberOfPosts }) => {
  const [noteContent, setNoteContent] = useState({})
  return (
    <section className="aside-section">
      <div className="container">
        <h2>👌 I write about technologies I like.</h2>
      </div>
      <div className="container flex flex-column">
        {notes.slice(0, numberOfPosts).map((note) => {
          return (
            <button
              key={note.id}
              className="note block ternary text-left small-margin-bottom"
              onClick={() => {
                setNoteContent(note)
              }}
            >
              <h4>{note.title}</h4>
              <p className="small-margin-top">{note.subtitle}</p>
            </button>
          )
        })}
      </div>

      <aside className={noteContent.intro ? 'show' : 'hide'}>
        <IoMdClose
          className="pull-right block small-margin-bottom"
          onClick={() => {
            setNoteContent({})
          }}
        />

        <p>{noteContent.intro && truncateString(noteContent.intro, 350)}</p>
        <button
          className="primary small-margin-top"
          onClick={() => {
            window.location.href = `/post/${noteContent.id}`
          }}
        >
          Read more
        </button>
      </aside>
    </section>
  )
}

export default Aside
