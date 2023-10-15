import React from 'react'
import styles from './AllNotes.module.css'
import SingleNote from './SingleNote'


const AllNotes = ({setCreate,setDefaultSection,setSelectedNote}) => {

  

  const notes = JSON.parse(localStorage.getItem('NotesGroups')) || [];
  const readyNotes = notes.map((ele,index)=>
    <SingleNote key={ele.groupName+index} groupName={ele.groupName} groupColor={ele.groupColor} setDefaultSection={setDefaultSection} setSelectedNote={setSelectedNote} />
  )
  
  const handleCreateNotes = () => {
    setCreate(true);
    
  }
  return (
    <div className={styles.AllNotes}  >
        <h1 className={styles.heading}>Pocket Notes</h1>
        <div className={styles.createNotes} onClick={handleCreateNotes}>+ Create Notes group</div>
        <div className={styles.userNotes}>
            {readyNotes}
        </div>
        
    </div>
  )
}

export default AllNotes