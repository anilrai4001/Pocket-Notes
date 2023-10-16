import React from 'react'
import GoBack from '../Assets/goBack.png'
import styles from './TopBar.module.css'
function TopBar({ setDisplayNotes, selectedNote }) {
  const handleGoBack = () => {
    setDisplayNotes(false);
  }
  const groupNameInitials = typeof selectedNote.groupName === 'string' ? selectedNote.groupName.substring(0, 2).toUpperCase() : '';
  return (
    <div style={{ backgroundColor: '#E8E8E8', height: '11%', display: 'flex', alignItems: 'center' }}>
      <span onClick={handleGoBack}><img src={GoBack} alt='go back' style={{ marginLeft: '10px' }} /></span>
      <div className={styles.SingleGroup} >
        <div className={styles.noteLogo} style={{ backgroundColor: `${selectedNote.groupColor}` }}>
          <div className={styles.noteLogoText}>
            {groupNameInitials}
          </div>
        </div>

        <div className={styles.noteHeading}>
          {selectedNote.groupName}
        </div>
      </div>    
    </div>
  )
}

export default TopBar