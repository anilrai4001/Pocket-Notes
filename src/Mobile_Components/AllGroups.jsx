import React, { useEffect } from 'react'
import styles from './AllGroups.module.css'
import SingleGroup from './SingleGroup'


const AllGroups = ({setNewGroup,setDisplayNotes,setSelectedNote}) => {


  const notesGroups = JSON.parse(localStorage.getItem('NotesGroups')) || [];

  const notesGroupsArray = notesGroups.map((ele,index)=>
    <SingleGroup key={ele.groupName+index} groupName={ele.groupName} groupColor={ele.groupColor} setDisplayNotes={setDisplayNotes} setSelectedNote={setSelectedNote} />
  )

  const handleNewGroup = ()=>{
    setNewGroup(true);
  }



  return (
    <div className={styles.AllNotes} >
        <h1 className={styles.heading}>Pocket Notes</h1>
        <div className={styles.createNotes} onClick={handleNewGroup}>+ Create Notes group</div>
        <div className={styles.userNotes}>
          {notesGroupsArray}
        </div>
        
    </div>
  )
}

export default AllGroups