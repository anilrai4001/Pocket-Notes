import React from 'react'
import styles from './TopBar.module.css'

function TopBar({selectedNote}) {

  const groupNameInitials = typeof selectedNote.groupName === 'string' ? selectedNote.groupName.substring(0, 2).toUpperCase() : '';


  return (
    <div className={styles.TopBar}>
        <div className={styles.SingleNote} >
            <div className={styles.noteLogo} style={{backgroundColor:`${selectedNote.groupColor}`}}>
                <div className={styles.noteLogoText}>{groupNameInitials}</div>
            </div>
            <div className={styles.noteHeading}>
                {selectedNote.groupName}
            </div>
        </div>
    </div>
  )
}

export default TopBar