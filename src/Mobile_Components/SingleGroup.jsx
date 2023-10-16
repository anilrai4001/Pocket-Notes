import React from 'react'
import styles from './SingleGroup.module.css'

function SingleGroup({groupName,groupColor,setDisplayNotes,setSelectedNote}) {

  const handleDisplayAndSelect = ()=>{
    setDisplayNotes(true);

    setSelectedNote({groupName,groupColor});
  }

  const groupNameInitials = typeof groupName === 'string' ? groupName.substring(0, 2).toUpperCase() : '';


  return (
    <div className={styles.SingleGroup} onClick={handleDisplayAndSelect}>
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

export default SingleGroup