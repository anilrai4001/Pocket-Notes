import React, { useState } from 'react'
import styles from './DisplayNotes.module.css'
import GroupNotes from './GroupNotes'
import InputNotes from './InputNotes'
import TopBar from './TopBar'

function DisplayNotes({setDisplayNotes,selectedNote}) {
    
    return (
        <div className={styles.DisplayNotes}>
            <TopBar setDisplayNotes={setDisplayNotes} selectedNote={selectedNote} />
            <GroupNotes selectedNote={selectedNote} />
            <InputNotes selectedNote={selectedNote} />
        </div>
    )
}

export default DisplayNotes