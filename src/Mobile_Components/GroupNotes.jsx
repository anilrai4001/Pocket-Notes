import React, { useEffect, useState } from 'react'
import SingleNote from './SingleNote'
import styles from './GroupNotes.module.css'


function GroupNotes({selectedNote}) {
  const [finalArray,setFinalArray] = useState([]);

  useEffect(()=>{
    let notesArray = JSON.parse(localStorage.getItem(selectedNote.groupName)) || [];
    let displayNotesArray = notesArray.map((ele)=>
      <SingleNote key={ele.time} time={ele.time} notes={ele.notes} />
    )
    setFinalArray(displayNotesArray);
  },[finalArray])

  

  return (
    <div className={styles.GroupNotes}>
        {finalArray}
    </div>
  )
  
}

export default GroupNotes