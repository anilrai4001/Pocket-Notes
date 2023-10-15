import React from 'react'
import styles from './DisplayNotes.module.css'
import UserInput from './UserInput'
import UserNotes from './UserNotes'
import TopBar from './TopBar'

function DisplayNotes({selectedNote}) {
  return (
    <div className={styles.DisplayNotes}>
        <TopBar selectedNote={selectedNote} />
        <UserNotes selectedNote={selectedNote} />
        <UserInput selectedNote={selectedNote} />
    </div>
  )
}

export default DisplayNotes