import React from 'react'
import styles from './SingleNote.module.css'

function SingleNote({groupName,groupColor,setDefaultSection,setSelectedNote}) {

  const notes = JSON.parse(localStorage.getItem('NotesGroups')) || [];

  const handleSingleNote = (e) =>{
    const allSingleNotes = document.querySelectorAll(`.${styles.SingleNote}`);
    allSingleNotes.forEach((ele)=>{
      ele.style.backgroundColor=''
    })
    e.currentTarget.style.backgroundColor='#F7ECDC';
    setDefaultSection(false);
    let selectedNote = notes.filter((ele)=>ele.groupName===groupName);
    setSelectedNote(selectedNote[0]);
    
  }

  const groupNameInitials = typeof groupName === 'string' ? groupName.substring(0, 2).toUpperCase() : '';


  return (
    <div className={styles.SingleNote} onClick={handleSingleNote}>
        <div className={styles.noteLogo} style={{backgroundColor:`${groupColor}`}}>
          <div className={styles.noteLogoText}>
            {groupNameInitials}
          </div>
        </div>
        <div className={styles.noteHeading}>
          {groupName}
        </div>
    </div>
  )
}

export default SingleNote